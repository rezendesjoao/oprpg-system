import Application5e from "../api/application.mjs";
import AdvancementManager from "../advancement/advancement-manager.mjs";

/**
 * Assistente de Criação de Personagem (OPRPG).
 *
 * Caixa passo-a-passo que guia o jogador pelos passos do livro:
 *   I  Espécie · II Estilo de Combate · III Antecedente/Perícias · IV Atributos ·
 *   V  Descrição · VI Equipamento
 * e, ao final, monta a ficha inteira aplicando os Avanços do dnd5e **programaticamente**
 * (sem mostrar os pop-ups de Avanço): cada Avanço de escolha é pré-semeado por id via o
 * hook `dnd5e.preAdvancementManagerRender`; os Avanços fixos (PV, salvaguardas/armas,
 * concessões, tamanho) se aplicam sozinhos com `{automaticApplication:true}`.
 *
 * Aberto pelo botão da ficha quando `level===0 && itemTypes.class.length===0`.
 */
export default class OPCharacterCreation extends Application5e {
  constructor(actor, options={}) {
    super(options);
    this.actor = actor;
  }

  /* -------------------------------------------- */

  /** Ordem dos passos. */
  static STEPS = ["species", "class", "skills", "abilities", "description", "equipment"];

  /** Distribuição Padrão de atributos (livro). */
  static STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];

  /** Packs de compêndio por papel. */
  static PACKS = {
    species: "op-species", classes: "op-classes", subclasses: "op-subclasses",
    backgrounds: "op-backgrounds", profissoes: "op-profissoes", caminhos: "op-caminhos",
    singularidades: "op-singularidades", defeitos: "op-defeitos", codigos: "op-codigos",
    equipment: "op-equipment"
  };

  /* -------------------------------------------- */

  /** @override */
  static DEFAULT_OPTIONS = {
    tag: "form",
    classes: ["onepiece-system", "dnd5e2", "character-creation"],
    position: { width: 760, height: "auto" },
    window: { title: "ONEPIECE.CharacterCreation.Title", icon: "fa-solid fa-hat-cowboy" },
    form: {
      handler: OPCharacterCreation.#onChangeForm,
      submitOnChange: true,
      closeOnSubmit: false
    },
    actions: {
      goStep: OPCharacterCreation.#onGoStep,
      next: OPCharacterCreation.#onNext,
      back: OPCharacterCreation.#onBack,
      selectCard: OPCharacterCreation.#onSelectCard,
      clearCard: OPCharacterCreation.#onClearCard,
      toggleMulti: OPCharacterCreation.#onToggleMulti,
      toggleSkill: OPCharacterCreation.#onToggleSkill,
      adjustAsi: OPCharacterCreation.#onAdjustAsi,
      addEquip: OPCharacterCreation.#onAddEquip,
      removeEquip: OPCharacterCreation.#onRemoveEquip,
      finish: OPCharacterCreation.#onFinish
    }
  };

  /** @override */
  static PARTS = {
    main: {
      template: "systems/onepiece-system/templates/actors/character-creation/cc-main.hbs",
      scrollable: [".cc-body"]
    }
  };

  /* -------------------------------------------- */
  /*  Estado                                      */
  /* -------------------------------------------- */

  /** Ator alvo. @type {Actor5e} */
  actor;

  /** Índice do passo atual. @type {number} */
  #stepIndex = 0;

  /** Seleções em memória (nada grava até concluir). */
  setup = {
    cards: {
      species: null, variant: null, flaw: null, class: null, subclass: null,
      background: null, profissao: null, caminho: null, codigo: null
    },
    multi: { singularidades: [], defeitos: [] },
    abilities: { str: null, dex: null, con: null, int: null, wis: null, cha: null },
    skillPicks: {},   // advId -> ["skills:key", ...]
    asiPicks: {},     // advId -> { ability: delta }
    text: { name: "", gender: "", appearance: "", dream: "", bio: "" }
  };

  /** Itens de equipamento escolhidos. @type {Array<{uuid,name,img,weight,qty}>} */
  equipment = [];

  /** Descritores de escolha derivados das seleções (recalculados sob demanda). */
  _d = { speciesAsi: null, bgAsi: null, variant: null, flaw: null, skills: [] };

  /** Cache de índices de pack. */
  #idxCache = {};

  /* -------------------------------------------- */
  /*  Propriedades                                */
  /* -------------------------------------------- */

  get stepId() {
    return this.constructor.STEPS[this.#stepIndex];
  }

  /** @override */
  get id() {
    return `op-character-creation-${this.actor.id}`;
  }

  get title() {
    return game.i18n.localize("ONEPIECE.CharacterCreation.Title");
  }

  /* -------------------------------------------- */
  /*  Carregamento de conteúdo                    */
  /* -------------------------------------------- */

  /**
   * Índice (cards) de um pack, com campos extra opcionais. Resultado em cache.
   * @param {string} role           Chave em PACKS.
   * @param {string[]} [fields]      Campos de sistema extras a incluir no índice.
   * @returns {Promise<object[]>}    Lista `{uuid, name, img, system}`.
   */
  async #index(role, fields=[]) {
    const key = role + "|" + fields.join(",");
    if ( this.#idxCache[key] ) return this.#idxCache[key];
    const pack = game.packs.get(`onepiece-system.${this.constructor.PACKS[role]}`);
    if ( !pack ) return this.#idxCache[key] = [];
    const index = await pack.getIndex({ fields });
    const list = index.map(e => ({ uuid: e.uuid, name: e.name, img: e.img, system: e.system ?? {} }))
      .sort((a, b) => a.name.localeCompare(b.name, game.i18n.lang));
    return this.#idxCache[key] = list;
  }

  /* -------------------------------------------- */

  /**
   * Coleta os Avanços de escolha de perícia (Trait com `choices`) de um item.
   * @param {Item5e} item        Item de origem (classe/antecedente/feat).
   * @param {string} sourceLabel Rótulo da fonte (para a UI).
   * @returns {Array<object>}    Descritores `{advId, count, pool, mode, sourceLabel}`.
   */
  #skillChoicesOf(item, sourceLabel) {
    const out = [];
    for ( const adv of item.advancement?.byType?.Trait ?? [] ) {
      for ( const ch of (adv.configuration.choices ?? []) ) {
        // Só perícias (ignora avanços de salvaguarda/arma que usem choices, raro).
        const pool = Array.from(ch.pool ?? []).filter(k => k.startsWith("skills:")).map(k => k.slice(7));
        if ( !pool.length || !ch.count ) continue;
        out.push({ advId: adv.id, count: ch.count, pool, mode: adv.configuration.mode, sourceLabel });
      }
    }
    return out;
  }

  /** Primeiro Avanço de Aumento de Atributo (ASI) de um item, ou null. */
  #asiOf(item) {
    const adv = (item.advancement?.byType?.AbilityScoreImprovement ?? [])[0];
    if ( !adv ) return null;
    return { advId: adv.id, points: adv.configuration.points ?? 2, cap: adv.configuration.cap ?? 2 };
  }

  /* -------------------------------------------- */

  /**
   * Recalcula os descritores de escolha a partir das seleções atuais (carrega feats de
   * traço/variante da espécie, etc.). Deve ser chamado após mudar uma seleção de origem.
   */
  async #refreshChoices() {
    const d = { speciesAsi: null, bgAsi: null, variant: null, flaw: null, skills: [] };
    const sp = this.setup.cards.species;

    if ( sp ) {
      d.speciesAsi = this.#asiOf(sp);

      // Variante / Defeito = ItemChoice (distinguidos pelo subtipo do feat do pool).
      for ( const adv of sp.advancement?.byType?.ItemChoice ?? [] ) {
        const pool = [];
        for ( const p of adv.configuration.pool ?? [] ) {
          const it = await fromUuid(p.uuid);
          if ( it ) pool.push({ uuid: p.uuid, name: it.name, img: it.img, subtype: it.system?.type?.subtype });
        }
        const desc = { advId: adv.id, pool };
        if ( pool[0]?.subtype === "flaw" ) d.flaw = desc;
        else d.variant = desc;
      }

      // Perícias dos traços-base concedidos (ItemGrant nível 0).
      for ( const adv of sp.advancement?.byType?.ItemGrant ?? [] ) {
        for ( const ref of adv.configuration.items ?? [] ) {
          const feat = await fromUuid(ref.uuid);
          if ( feat ) d.skills.push(...this.#skillChoicesOf(feat, feat.name));
        }
      }
      // Perícias do feat de variante escolhido.
      if ( this.setup.cards.variant ) d.skills.push(...this.#skillChoicesOf(this.setup.cards.variant, this.setup.cards.variant.name));
    }

    // Classe → escolha de perícias de 1º nível.
    if ( this.setup.cards.class ) d.skills.push(...this.#skillChoicesOf(this.setup.cards.class, this.setup.cards.class.name));

    // Antecedente → ASI + escolha de perícia.
    if ( this.setup.cards.background ) {
      d.bgAsi = this.#asiOf(this.setup.cards.background);
      d.skills.push(...this.#skillChoicesOf(this.setup.cards.background, this.setup.cards.background.name));
    }

    // Profissão (opcional) → escolha de perícia, se houver.
    if ( this.setup.cards.profissao ) d.skills.push(...this.#skillChoicesOf(this.setup.cards.profissao, this.setup.cards.profissao.name));

    this._d = d;

    // Limpa picks órfãos (de Avanços que não existem mais nas seleções atuais).
    const liveSkill = new Set(d.skills.map(s => s.advId));
    for ( const id of Object.keys(this.setup.skillPicks) ) if ( !liveSkill.has(id) ) delete this.setup.skillPicks[id];
    const liveAsi = new Set([d.speciesAsi?.advId, d.bgAsi?.advId].filter(Boolean));
    for ( const id of Object.keys(this.setup.asiPicks) ) if ( !liveAsi.has(id) ) delete this.setup.asiPicks[id];
  }

  /* -------------------------------------------- */
  /*  Cálculos derivados                          */
  /* -------------------------------------------- */

  /** Valor final de cada atributo (base + somatório dos deltas de ASI). */
  #finalAbilities() {
    const out = {};
    for ( const key of Object.keys(this.setup.abilities) ) {
      let v = Number(this.setup.abilities[key] ?? 0) || 0;
      for ( const assign of Object.values(this.setup.asiPicks) ) v += Number(assign[key] ?? 0) || 0;
      out[key] = v;
    }
    return out;
  }

  /** Modificador a partir de um valor de atributo. */
  static mod(v) { return Math.floor(((v ?? 10) - 10) / 2); }

  /** Soma total atribuída numa alocação de ASI. */
  static asiSum(assign) { return Object.values(assign ?? {}).reduce((t, n) => t + (Number(n) || 0), 0); }

  /** Prévia de PV de 1º nível: máx do Dado de Vida + mod de Constituição (mín. 1). */
  #hpPreview() {
    const cls = this.setup.cards.class;
    if ( !cls ) return null;
    const hd = Number(String(cls.system?.hd?.denomination ?? "d8").slice(1)) || 8;
    const conMod = OPCharacterCreation.mod(this.#finalAbilities().con);
    return Math.max(hd + conMod, 1);
  }

  /* -------------------------------------------- */
  /*  Porteira de progressão                      */
  /* -------------------------------------------- */

  /** Cada índice de passo está completo? Retorna array de booleanos. */
  #completion() {
    const c = this.setup.cards;
    const d = this._d;

    const speciesOk = !!c.species && (!d.variant || !!c.variant) && (!d.flaw || !!c.flaw);
    const classOk = !!c.class;
    const skillsOk = !!c.background && d.skills.every(s => (this.setup.skillPicks[s.advId]?.length ?? 0) === s.count);

    const vals = Object.values(this.setup.abilities);
    const arrayOk = vals.every(v => v !== null) && this.#isValidArray(vals);
    const asiOk = [d.speciesAsi, d.bgAsi].filter(Boolean)
      .every(a => OPCharacterCreation.asiSum(this.setup.asiPicks[a.advId]) === a.points);
    const abilitiesOk = arrayOk && asiOk;

    const descOk = (this.setup.text.name ?? "").trim().length > 0;

    return [speciesOk, classOk, skillsOk, abilitiesOk, descOk, true];
  }

  /** Os valores atribuídos formam exatamente a Distribuição Padrão? */
  #isValidArray(vals) {
    const a = vals.map(Number).filter(v => Number.isFinite(v)).sort((x, y) => y - x);
    const std = [...this.constructor.STANDARD_ARRAY].sort((x, y) => y - x);
    return a.length === std.length && a.every((v, i) => v === std[i]);
  }

  /** Índice do passo mais avançado liberado (todos anteriores completos). */
  #unlocked() {
    const comp = this.#completion();
    let i = 0;
    while ( i < comp.length - 1 && comp[i] ) i++;
    return i;
  }

  /* -------------------------------------------- */
  /*  Contexto de render                          */
  /* -------------------------------------------- */

  /** @inheritDoc */
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    await this.#refreshChoices();

    const comp = this.#completion();
    const unlocked = this.#unlocked();
    const stepId = this.stepId;

    context.steps = this.constructor.STEPS.map((id, i) => ({
      id, index: i, num: i + 1,
      label: game.i18n.localize(`ONEPIECE.CharacterCreation.Step.${id[0].toUpperCase()}${id.slice(1)}`),
      active: id === stepId,
      done: comp[i],
      disabled: i > unlocked
    }));

    context.stepId = stepId;
    context.stepFlags = Object.fromEntries(this.constructor.STEPS.map(id => [
      `is${id[0].toUpperCase()}${id.slice(1)}`, id === stepId
    ]));
    context.canNext = comp[this.#stepIndex] && (this.#stepIndex < this.constructor.STEPS.length - 1);
    context.canBack = this.#stepIndex > 0;
    context.isLast = this.#stepIndex === this.constructor.STEPS.length - 1;
    context.canFinish = comp.slice(0, -1).every(Boolean);

    // Conteúdo específico do passo.
    context.data = await this.#stepContext(stepId);

    return context;
  }

  /* -------------------------------------------- */

  /** Monta o contexto do passo ativo. */
  async #stepContext(stepId) {
    const c = this.setup.cards;
    const sel = (slot) => c[slot]?.uuid ?? null;
    const mark = (list, selUuid) => list.map(x => ({ ...x, selected: x.uuid === selUuid }));

    switch ( stepId ) {
      case "species": {
        const list = await this.#index("species");
        return {
          species: mark(list, sel("species")),
          chosen: c.species ? this.#cardInfo(c.species) : null,
          variant: this._d.variant ? { ...this._d.variant, pool: mark(this._d.variant.pool, sel("variant")) } : null,
          flaw: this._d.flaw ? { ...this._d.flaw, pool: mark(this._d.flaw.pool, sel("flaw")) } : null
        };
      }
      case "class": {
        const classes = await this.#index("classes");
        let subs = [];
        if ( c.class ) {
          const ident = c.class.system?.identifier;
          const all = await this.#index("subclasses", ["system.classIdentifier"]);
          subs = all.filter(s => s.system?.classIdentifier === ident);
        }
        return {
          classes: mark(classes, sel("class")),
          chosen: c.class ? this.#cardInfo(c.class) : null,
          subclasses: mark(subs, sel("subclass")),
          hasSubclasses: subs.length > 0
        };
      }
      case "skills": {
        const backgrounds = await this.#index("backgrounds");
        const profissoes = await this.#index("profissoes");
        return {
          backgrounds: mark(backgrounds, sel("background")),
          bgChosen: c.background ? this.#cardInfo(c.background) : null,
          profissoes: mark(profissoes, sel("profissao")),
          profChosen: c.profissao ? this.#cardInfo(c.profissao) : null,
          skills: this._d.skills.map(s => this.#skillPickerCtx(s))
        };
      }
      case "abilities": {
        const finals = this.#finalAbilities();
        const rows = Object.keys(this.setup.abilities).map(key => ({
          key, label: CONFIG.DND5E.abilities[key]?.label ?? key,
          value: this.setup.abilities[key],
          final: finals[key], mod: OPCharacterCreation.signed(OPCharacterCreation.mod(finals[key])),
          options: this.constructor.STANDARD_ARRAY.map(v => ({
            value: v, selected: Number(this.setup.abilities[key]) === v
          }))
        }));
        return {
          rows,
          arrayValid: this.#isValidArray(Object.values(this.setup.abilities)),
          asi: [this._d.speciesAsi && { ...this._d.speciesAsi, kind: "species" },
                this._d.bgAsi && { ...this._d.bgAsi, kind: "background" }]
            .filter(Boolean).map(a => this.#asiPickerCtx(a, finals)),
          hp: this.#hpPreview()
        };
      }
      case "description": {
        return {
          text: this.setup.text,
          caminhos: mark(await this.#index("caminhos"), sel("caminho")),
          caminhoChosen: c.caminho ? this.#cardInfo(c.caminho) : null,
          codigos: mark(await this.#index("codigos"), sel("codigo")),
          codigoChosen: c.codigo ? this.#cardInfo(c.codigo) : null,
          singularidades: (await this.#index("singularidades")).map(x => ({
            ...x, selected: this.setup.multi.singularidades.some(s => s.uuid === x.uuid)
          })),
          defeitos: (await this.#index("defeitos")).map(x => ({
            ...x, selected: this.setup.multi.defeitos.some(s => s.uuid === x.uuid)
          }))
        };
      }
      case "equipment": {
        const list = await this.#index("equipment", ["system.weight", "system.price", "system.type"]);
        const finals = this.#finalAbilities();
        const capacity = 10 * (finals.str || 0);
        const weight = this.equipment.reduce((t, e) => t + (Number(e.weight) || 0) * (e.qty || 1), 0);
        return {
          available: list, chosen: this.equipment,
          capacity, weight: Math.round(weight * 100) / 100,
          encumbered: weight > capacity
        };
      }
    }
    return {};
  }

  /** Info de card de um item selecionado (para o resumo). */
  #cardInfo(item) {
    return { uuid: item.uuid, name: item.name, img: item.img };
  }

  /** Contexto de um seletor de perícia. */
  #skillPickerCtx(desc) {
    const picks = this.setup.skillPicks[desc.advId] ?? [];
    return {
      advId: desc.advId, count: desc.count, sourceLabel: desc.sourceLabel,
      mode: desc.mode, current: picks.length,
      options: desc.pool.map(key => {
        const traitKey = "skills:" + key;
        return {
          key, traitKey,
          label: CONFIG.DND5E.skills[key]?.label ?? key,
          selected: picks.includes(traitKey),
          disabled: !picks.includes(traitKey) && picks.length >= desc.count
        };
      })
    };
  }

  /** Contexto de um alocador de ASI. */
  #asiPickerCtx(desc, finals) {
    const assign = this.setup.asiPicks[desc.advId] ?? {};
    const remaining = desc.points - OPCharacterCreation.asiSum(assign);
    return {
      advId: desc.advId, kind: desc.kind, points: desc.points, cap: desc.cap, remaining,
      label: game.i18n.localize(`ONEPIECE.CharacterCreation.Asi.${desc.kind === "species" ? "Species" : "Background"}`),
      rows: Object.keys(this.setup.abilities).map(key => ({
        key, label: CONFIG.DND5E.abilities[key]?.label ?? key,
        value: Number(assign[key] ?? 0),
        canInc: (Number(assign[key] ?? 0) < desc.cap) && (remaining > 0),
        canDec: Number(assign[key] ?? 0) > 0
      }))
    };
  }

  /** Formata um número com sinal. */
  static signed(n) {
    return new Intl.NumberFormat(game.i18n.lang, { signDisplay: "always" }).format(n ?? 0);
  }

  /* -------------------------------------------- */
  /*  Handlers de formulário/ações                */
  /* -------------------------------------------- */

  /** Captura campos de texto e a distribuição de atributos. */
  static async #onChangeForm(event, form, formData) {
    const obj = foundry.utils.expandObject(formData.object);

    // Atributos (selects da Distribuição Padrão), com troca para manter permutação.
    if ( obj.abil ) {
      for ( const [key, raw] of Object.entries(obj.abil) ) {
        const v = raw === "" || raw === null ? null : Number(raw);
        if ( v === this.setup.abilities[key] ) continue;
        // Se outro atributo já tem esse valor, troca (mantém permutação).
        if ( v !== null ) {
          const other = Object.keys(this.setup.abilities).find(k => k !== key && Number(this.setup.abilities[k]) === v);
          if ( other ) this.setup.abilities[other] = this.setup.abilities[key];
        }
        this.setup.abilities[key] = v;
      }
    }

    // Campos de texto.
    if ( obj.text ) for ( const k of Object.keys(this.setup.text) ) {
      if ( k in obj.text ) this.setup.text[k] = obj.text[k];
    }

    this.render();
  }

  /* -------------------------------------------- */

  static #onGoStep(event, target) {
    const i = Number(target.dataset.index);
    if ( Number.isFinite(i) && i <= this.#unlocked() ) { this.#stepIndex = i; this.render(); }
  }

  static #onNext(event, target) {
    if ( this.#completion()[this.#stepIndex] && (this.#stepIndex < this.constructor.STEPS.length - 1) ) {
      this.#stepIndex++; this.render();
    }
  }

  static #onBack(event, target) {
    if ( this.#stepIndex > 0 ) { this.#stepIndex--; this.render(); }
  }

  /* -------------------------------------------- */

  /** Seleciona um card de origem (single-select). */
  static async #onSelectCard(event, target) {
    const { slot, uuid } = target.dataset;
    const doc = await fromUuid(uuid);
    if ( !doc ) return;
    this.setup.cards[slot] = doc;

    // Trocar a espécie/classe limpa escolhas dependentes.
    if ( slot === "species" ) { this.setup.cards.variant = null; this.setup.cards.flaw = null; }
    if ( slot === "class" ) this.setup.cards.subclass = null;

    await this.#refreshChoices();
    this.render();
  }

  /** Limpa um card de origem opcional. */
  static #onClearCard(event, target) {
    const { slot } = target.dataset;
    this.setup.cards[slot] = null;
    if ( slot === "species" ) { this.setup.cards.variant = null; this.setup.cards.flaw = null; }
    if ( slot === "class" ) this.setup.cards.subclass = null;
    this.render();
  }

  /** Alterna um item numa lista multi-seleção (singularidades/defeitos). */
  static async #onToggleMulti(event, target) {
    const { group, uuid } = target.dataset;
    const list = this.setup.multi[group];
    const idx = list.findIndex(x => x.uuid === uuid);
    if ( idx >= 0 ) list.splice(idx, 1);
    else { const doc = await fromUuid(uuid); if ( doc ) list.push(doc); }
    this.render();
  }

  /** Alterna uma perícia num seletor de escolha. */
  static #onToggleSkill(event, target) {
    const { advId, traitKey, count } = target.dataset;
    const picks = this.setup.skillPicks[advId] ??= [];
    const i = picks.indexOf(traitKey);
    if ( i >= 0 ) picks.splice(i, 1);
    else if ( picks.length < Number(count) ) picks.push(traitKey);
    this.render();
  }

  /** +/- num alocador de ASI. */
  static #onAdjustAsi(event, target) {
    const { advId, ability, delta } = target.dataset;
    const desc = [this._d.speciesAsi, this._d.bgAsi].find(a => a?.advId === advId);
    if ( !desc ) return;
    const assign = this.setup.asiPicks[advId] ??= {};
    const cur = Number(assign[ability] ?? 0);
    const d = Number(delta);
    const next = cur + d;
    const sum = OPCharacterCreation.asiSum(assign);
    if ( next < 0 || next > desc.cap ) return;
    if ( d > 0 && sum >= desc.points ) return;
    assign[ability] = next;
    if ( !assign[ability] ) delete assign[ability];
    this.render();
  }

  /* -------------------------------------------- */

  /** Adiciona um item de equipamento (ou +1 na quantidade). */
  static #onAddEquip(event, target) {
    const { uuid, name, img, weight } = target.dataset;
    const existing = this.equipment.find(e => e.uuid === uuid);
    if ( existing ) existing.qty++;
    else this.equipment.push({ uuid, name, img, weight: Number(weight) || 0, qty: 1 });
    this.render();
  }

  /** Remove um item de equipamento (ou -1 na quantidade). */
  static #onRemoveEquip(event, target) {
    const { uuid } = target.dataset;
    const i = this.equipment.findIndex(e => e.uuid === uuid);
    if ( i < 0 ) return;
    if ( this.equipment[i].qty > 1 ) this.equipment[i].qty--;
    else this.equipment.splice(i, 1);
    this.render();
  }

  /* -------------------------------------------- */
  /*  Conclusão — aplica tudo ao ator             */
  /* -------------------------------------------- */

  /**
   * Constrói o mapa de sementes (advId -> payload de aplicação automática) para um item
   * de origem, a partir das escolhas coletadas no assistente.
   * @param {"species"|"class"|"background"|"profissao"|"generic"} role
   * @returns {Map<string, object>}
   */
  #seedMap(role) {
    const map = new Map();
    // Perícias: todos os descritores cujo advId pertence a este item ou seus feats.
    for ( const [advId, picks] of Object.entries(this.setup.skillPicks) ) {
      if ( picks?.length ) map.set(advId, { chosen: [...picks] });
    }
    // ASI da espécie / antecedente.
    if ( role === "species" && this._d.speciesAsi ) {
      map.set(this._d.speciesAsi.advId, { type: "asi", assignments: { ...(this.setup.asiPicks[this._d.speciesAsi.advId] ?? {}) } });
    }
    if ( role === "background" && this._d.bgAsi ) {
      map.set(this._d.bgAsi.advId, { type: "asi", assignments: { ...(this.setup.asiPicks[this._d.bgAsi.advId] ?? {}) } });
    }
    // Escolhas de item (variante/defeito) da espécie.
    if ( role === "species" ) {
      if ( this._d.variant && this.setup.cards.variant ) map.set(this._d.variant.advId, { selected: [this.setup.cards.variant.uuid] });
      if ( this._d.flaw && this.setup.cards.flaw ) map.set(this._d.flaw.advId, { selected: [this.setup.cards.flaw.uuid] });
    }
    return map;
  }

  /**
   * Cria um item de origem no ator e aplica seus Avanços sem mostrar pop-ups, semeando
   * por id as escolhas coletadas. Avanços fixos aplicam-se automaticamente; um passo sem
   * semente cai no diálogo nativo (degradação graciosa, nunca quebra).
   * @param {Item5e} itemDoc        Documento de compêndio a criar.
   * @param {Map<string,object>} seedMap
   * @param {object} [opts]
   * @param {number} [opts.levels]  Níveis (para classe).
   * @returns {Promise<void>}
   */
  async #applyOrigin(itemDoc, seedMap, { levels }={}) {
    const itemData = itemDoc.toObject();
    itemData._id = foundry.utils.randomID();
    foundry.utils.setProperty(itemData, "_stats.compendiumSource", itemDoc.uuid);
    if ( itemData.type === "class" ) itemData.system.levels = levels ?? 1;

    const manager = AdvancementManager.forNewItem(this.actor, itemData, { automaticApplication: true });

    // Sem Avanços → cria direto.
    if ( !manager.steps.length ) {
      await this.actor.createEmbeddedDocuments("Item", [itemData], { keepId: true });
      return;
    }

    const hookId = Hooks.on("dnd5e.preAdvancementManagerRender", mgr => {
      if ( mgr !== manager ) return;
      const step = mgr.step;
      const adv = step?.flow?.advancement;
      if ( !adv ) return;
      const payload = seedMap.get(adv.id);
      if ( !payload ) return;          // sem semente → diálogo nativo (fallback)
      // `automaticApplication` chama getAutomaticApplicationValue(): devolver o payload faz o
      // passo aplicar-se sem renderizar (não marcamos step.automatic p/ não afetar o laço #forward).
      step.flow.getAutomaticApplicationValue = async () => payload;
    });

    try {
      await new Promise(resolve => {
        const origClose = manager.close.bind(manager);
        manager.close = async (options={}) => {
          const r = await origClose(options);
          manager.close = origClose;
          resolve();
          return r;
        };
        manager.render(true);
      });
    } finally {
      Hooks.off("dnd5e.preAdvancementManagerRender", hookId);
    }
  }

  /* -------------------------------------------- */

  /** Conclui a criação: grava atributos, cria itens de origem (com Avanços) e equipamento. */
  static async #onFinish(event, target) {
    if ( !this.#completion().slice(0, -1).every(Boolean) ) {
      return ui.notifications.warn(game.i18n.localize("ONEPIECE.CharacterCreation.IncompleteWarning"));
    }
    target.disabled = true;
    await this.#refreshChoices();

    try {
      const c = this.setup.cards;

      // 1) Atributos BASE (os Avanços ASI somam delta sobre isto).
      const abilUpdate = {};
      for ( const [key, v] of Object.entries(this.setup.abilities) ) abilUpdate[`system.abilities.${key}.value`] = Number(v) || 10;
      // Texto / biografia.
      abilUpdate["name"] = (this.setup.text.name || this.actor.name).trim();
      abilUpdate["system.details.gender"] = this.setup.text.gender ?? "";
      abilUpdate["system.details.appearance"] = this.setup.text.appearance ?? "";
      abilUpdate["system.details.ideal"] = this.setup.text.dream ?? "";
      abilUpdate["system.details.biography.value"] = this.setup.text.bio ?? "";
      await this.actor.update(abilUpdate);

      // 2) Espécie (+variante/+defeito/ASI/perícias de traço).
      if ( c.species ) await this.#applyOrigin(c.species, this.#seedMap("species"));

      // 3) Antecedente (ASI + perícia + característica).  [antes da classe: Con final p/ PV]
      if ( c.background ) await this.#applyOrigin(c.background, this.#seedMap("background"));

      // 4) Classe (PV máx, salvaguardas/armas, perícias, concessões de 1º nível).
      if ( c.class ) await this.#applyOrigin(c.class, this.#seedMap("class"), { levels: 1 });

      // 5) Subclasse (Caminho), se escolhida.
      if ( c.subclass ) await this.#applyOrigin(c.subclass, this.#seedMap("generic"));

      // 6) Itens narrativos (Profissão/Caminho/Singularidades/Defeitos/Código).
      const narrative = [c.profissao, c.caminho, c.codigo, ...this.setup.multi.singularidades, ...this.setup.multi.defeitos].filter(Boolean);
      for ( const item of narrative ) await this.#applyOrigin(item, this.#seedMap("generic"));

      // 7) Equipamento (criação direta; sem Avanços).
      if ( this.equipment.length ) {
        const docs = [];
        for ( const e of this.equipment ) {
          const it = await fromUuid(e.uuid);
          if ( !it ) continue;
          const data = it.toObject();
          delete data._id;
          if ( (e.qty || 1) > 1 && foundry.utils.hasProperty(data, "system.quantity") ) data.system.quantity = e.qty;
          docs.push(data);
        }
        if ( docs.length ) await this.actor.createEmbeddedDocuments("Item", docs);
      }

      // 8) Topo de PV.
      if ( this.actor.system.attributes.hp.max ) {
        await this.actor.update({ "system.attributes.hp.value": this.actor.system.attributes.hp.max });
      }

      ui.notifications.info(game.i18n.format("ONEPIECE.CharacterCreation.Done", { name: this.actor.name }));
      await this.close();
    } catch(err) {
      console.error("onepiece-system | Falha na criação de personagem", err);
      ui.notifications.error(game.i18n.localize("ONEPIECE.CharacterCreation.Error"));
      target.disabled = false;
    }
  }
}
