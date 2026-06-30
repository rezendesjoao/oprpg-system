/**
 * jj/akuma.mjs — Aba "Akuma no Mi" da ficha de personagem (One Piece).
 *
 * Fornece o contexto de renderização e os handlers de interação da aba.
 * O item de fruta (type "akumaNoMi") é a fonte de verdade; a ficha deriva
 * `system.devilFruit` dele (ver character.mjs). A fruta carrega em flags o
 * ROSTER das suas técnicas/manifestações (gerado em gen-op-content.mjs), o que
 * permite:
 *  - exibir a EVOLUÇÃO da fruta por nível (técnicas destravam em 1/3/6/9/12/16/20);
 *  - distinguir as técnicas DA FRUTA das do Estilo de Combate (estas NÃO entram aqui);
 *  - aprender técnicas/manifestações com um clique (cria o item na ficha).
 */
import { toggleAwakening } from "./estagio-desperto.mjs";

export const AKUMA_CATEGORIES = {
  logia: "Logia",
  paramecia: "Paramecia",
  zoan: "Zoan",
  zoanMythical: "Zoan Mítica"
};

export const AKUMA_ARCHETYPES = {
  simple: "Usuário Simples",
  advanced: "Usuário Avançado",
  common: "Zoan Comum",
  ancestral: "Zoan Ancestral"
};

// Grau → nível em que a técnica é destravada (regra 6.6/6.11 do livro).
const GRAU_LEVEL = { 1: 1, 2: 3, 3: 6, 4: 9, 5: 12, 6: 16, 7: 20 };

const slug = s => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* -------------------------------------------- */

/**
 * Monta o contexto da aba Akuma no Mi.
 * @param {Actor5e} actor
 * @param {object} context
 * @returns {object}
 */
export function prepareAkumaContext(actor, context) {
  const fruit = actor.items.find(i => i.type === "akumaNoMi") ?? null;
  const df = actor.system.devilFruit ?? {};
  const level = actor.system.details?.level ?? 1;
  const flag = key => fruit?.flags?.["onepiece-system"]?.[key] ?? null;

  // Técnicas de fruta JÁ na ficha (marcadas com flags.onepiece-system.akuma) → por identifier.
  const ownedSpells = actor.itemTypes.spell.filter(s => s.flags?.["onepiece-system"]?.akuma === true);
  const ownedTechById = new Map(ownedSpells.map(s => [s.system?.identifier ?? slug(s.name), s.id]));
  const ownedFeatById = new Map(actor.itemTypes.feat
    .filter(i => i.flags?.["onepiece-system"]?.akuma === true)
    .map(i => [i.system?.identifier ?? slug(i.name), i.id]));

  const roster = flag("akumaRoster");
  const manifestRoster = flag("akumaManifestations");

  const buildTech = t => {
    const unlock = t.level ?? GRAU_LEVEL[t.grau] ?? 1;
    const ownedId = ownedTechById.get(t.identifier) ?? null;
    return {
      uuid: t.uuid ?? "", identifier: t.identifier, name: t.name, img: t.img,
      grau: t.grau, cost: t.cost ?? null, aux: !!t.aux, desperto: (t.grau ?? 0) >= 6,
      unlock, locked: level < unlock, owned: !!ownedId, ownedId
    };
  };

  let combat = [];
  let auxiliares = [];
  if ( Array.isArray(roster) && roster.length ) {
    const techs = roster.map(buildTech);
    const bySort = (a, b) => (a.grau - b.grau) || (a.unlock - b.unlock) || a.name.localeCompare(b.name);
    combat = techs.filter(t => !t.aux).sort(bySort);
    auxiliares = techs.filter(t => t.aux).sort(bySort);
  } else {
    // Fallback (fruta antiga sem roster): só as técnicas marcadas na ficha (sem evolução, mas sem vazar Estilo).
    combat = ownedSpells.map(s => {
      const grau = s.system?.level ?? 0;
      return {
        uuid: "", identifier: s.system?.identifier ?? slug(s.name), name: s.name, img: s.img,
        grau, cost: null, aux: false, desperto: grau >= 6,
        unlock: GRAU_LEVEL[grau] ?? 1, locked: false, owned: true, ownedId: s.id
      };
    }).sort((a, b) => (a.grau - b.grau) || a.name.localeCompare(b.name));
  }

  const manifest = (Array.isArray(manifestRoster) ? manifestRoster : []).map(m => {
    const ownedId = ownedFeatById.get(m.identifier) ?? null;
    return {
      uuid: m.uuid ?? "", identifier: m.identifier, name: m.name, img: m.img,
      desperto: !!m.desperto, owned: !!ownedId, ownedId,
      locked: m.desperto ? (level < 16) : false
    };
  });

  const learnable = [...combat, ...auxiliares].filter(t => t.uuid && !t.locked && !t.owned).length;
  const manifestLearnable = manifest.filter(m => m.uuid && !m.locked && !m.owned).length;

  context.akuma = {
    hasFruit: !!fruit,
    fruitId: fruit?.id ?? null,
    fruitName: fruit?.name ?? "",
    fruitImg: fruit?.img ?? "icons/svg/item-bag.svg",
    category: df.category ?? "",
    archetype: df.archetype ?? "",
    aspectoInato: fruit?.system?.aspectoInato ?? "",
    property: fruit?.system?.property ?? "",
    categories: AKUMA_CATEGORIES,
    archetypes: AKUMA_ARCHETYPES,
    level,
    mp: {
      max: df.mp?.max ?? 0,
      spent: df.mp?.spent ?? 0,
      available: df.mp?.available ?? Math.max(0, (df.mp?.max ?? 0) - (df.mp?.spent ?? 0))
    },
    awakeningUnlocked: fruit?.system?.awakening?.unlocked === true,
    awakened: df.awakened === true,                 // destravado + nível >= 16
    awakeningStage: df.awakeningStage === true,     // ativo agora
    canAwaken: level >= 16,
    seawater: df.weakness?.seawater !== false,
    // Evolução: progressão completa da fruta (técnicas/manifestações), com estado por nível.
    combat,
    auxiliares,
    manifest,
    learnable,
    manifestLearnable
  };
  return context;
}

/* -------------------------------------------- */

/** Cria na ficha uma cópia do item de um UUID de compêndio (aprender técnica/MP). */
async function grantFromUuids(actor, uuids) {
  const datas = [];
  for ( const u of uuids ) {
    if ( !u ) continue;
    const src = await fromUuid(u);
    if ( !src ) continue;
    const data = src.toObject();
    delete data._id;
    datas.push(data);
  }
  if ( datas.length ) await actor.createEmbeddedDocuments("Item", datas);
  return datas.length;
}

/**
 * Liga os listeners da aba Akuma no Mi após a renderização.
 * @param {HTMLElement} root  Elemento raiz da ficha.
 * @param {Actor5e} actor
 */
export function setupAkumaTab(root, actor) {
  const tab = root.querySelector('.tab[data-tab="manipulation"]');
  if ( !tab ) return;
  const fruit = actor.items.find(i => i.type === "akumaNoMi") ?? null;

  // Edição direta dos campos da fruta (data-akuma-edit="system.category" etc.)
  tab.querySelectorAll("[data-akuma-edit]").forEach(el => {
    el.addEventListener("change", async () => {
      if ( !fruit ) return;
      const path = el.dataset.akumaEdit;
      let value;
      if ( el.type === "checkbox" ) value = el.checked;
      else if ( el.type === "number" ) value = Number(el.value) || 0;
      else value = el.value;
      await fruit.update({ [path]: value });
    });
  });

  // Manifestações de Poder: gastar / devolver pontos
  tab.querySelector("[data-action='akuma-mp-dec']")?.addEventListener("click", async () => {
    const spent = Math.max(0, (actor.system.devilFruit?.mp?.spent ?? 0) - 1);
    await actor.update({ "system.devilFruit.mp.spent": spent });
  });
  tab.querySelector("[data-action='akuma-mp-inc']")?.addEventListener("click", async () => {
    const max = actor.system.devilFruit?.mp?.max ?? 0;
    const spent = Math.min(max, (actor.system.devilFruit?.mp?.spent ?? 0) + 1);
    await actor.update({ "system.devilFruit.mp.spent": spent });
  });

  // Abrir a ficha da fruta
  tab.querySelector("[data-action='akuma-open-fruit']")?.addEventListener("click", () => {
    fruit?.sheet?.render(true);
  });

  // Clique numa técnica/manifestação: aprendida → abre; desbloqueada → aprende; bloqueada → aviso.
  const onEntry = async el => {
    const { uuid, ownedId, locked, unlock } = el.dataset;
    if ( ownedId ) { actor.items.get(ownedId)?.sheet?.render(true); return; }
    if ( locked === "true" ) {
      ui.notifications?.info(unlock ? `Desbloqueia no nível ${unlock}.` : "Disponível apenas no Estágio Desperto.");
      return;
    }
    if ( uuid ) {
      await grantFromUuids(actor, [uuid]);
      ui.notifications?.info("Aprendido e adicionado à ficha.");
    }
  };
  tab.querySelectorAll("[data-action='akuma-entry']").forEach(el => el.addEventListener("click", () => onEntry(el)));

  // Aprender em lote todas as desbloqueadas-e-não-aprendidas (de uma seção).
  tab.querySelectorAll("[data-action='akuma-learn-all']").forEach(btn => {
    btn.addEventListener("click", async ev => {
      ev.stopPropagation();
      const scope = btn.dataset.scope; // "tech" | "manifest"
      const sel = scope === "manifest"
        ? "[data-action='akuma-entry'][data-kind='manifest']"
        : "[data-action='akuma-entry'][data-kind='tech']";
      const uuids = [...tab.querySelectorAll(sel)]
        .filter(el => el.dataset.uuid && el.dataset.locked !== "true" && !el.dataset.ownedId)
        .map(el => el.dataset.uuid);
      if ( !uuids.length ) return;
      const n = await grantFromUuids(actor, uuids);
      ui.notifications?.info(`${n} ${scope === "manifest" ? "Manifestação(ões)" : "Técnica(s)"} aprendida(s).`);
    });
  });

  // Estágio Desperto (entrar/sair)
  tab.querySelector("[data-action='akuma-toggle-desperto']")?.addEventListener("click", async () => {
    await toggleAwakening(actor);
  });
}
