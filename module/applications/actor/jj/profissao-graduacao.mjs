/**
 * jj/profissao-graduacao.mjs — Graduações de Profissão (Capítulo 4).
 *
 * Quando o personagem atinge os níveis 5, 10, 15 ou 20, abre-se um "marco de
 * graduação": o jogador pode ELEVAR a graduação de uma de suas Profissões
 * (Profissional → Especialista → Mestre → Grão-Mestre). A escolha é do jogador
 * (no livro, o marco também permite APRENDER uma nova profissão — isso é feito
 * arrastando outra Profissão para a ficha; este trigger cuida só do avanço de
 * graduação). Ao confirmar, concede o "feat" da graduação (com os contadores de
 * uso da regra) e marca a graduação atual na Profissão.
 *
 * Observações de fidelidade:
 *  - O bônus de "somar Proficiência aos Testes da Profissão", a vantagem do
 *    Especialista e o "tratar 9 ou menos como 10" do Mestre são aplicados pelo
 *    Narrador por rolagem (o motor não sabe quais testes são "da profissão").
 *    O que é automatizado aqui: o acompanhamento da graduação e os contadores de
 *    uso (Especialista 3/descanso longo; Grão-Mestre 3 com 1/descanso longo).
 *
 * Tudo é defensivo (try/catch): uma falha aqui nunca deve quebrar a atualização
 * do ator ou a ficha.
 */

const SCOPE = "onepiece-system";
const MILESTONES = [5, 10, 15, 20];
const MAX_RANK = 4;
const RANK_NAME = { 1: "Profissional", 2: "Especialista", 3: "Mestre", 4: "Grão-Mestre" };

// Itens que têm type.value "profissao" mas NÃO são profissões avançáveis.
const EXCLUDED_IDENTIFIERS = new Set(["sem-profissao", "profissoes-regras-e-graduacoes"]);

// Evita diálogos duplicados/concorrentes por ator.
const _pending = new Set();

/* -------------------------------------------- */
/*  Helpers                                     */
/* -------------------------------------------- */

/** Profissões avançáveis (abaixo do rank máximo) presentes no ator. */
function professionItems(actor) {
  return actor.items.filter(i =>
    i.type === "feat"
    && i.system?.type?.value === "profissao"
    && !EXCLUDED_IDENTIFIERS.has(i.system?.identifier)
  );
}

function rankOf(item) {
  const r = Number(item.getFlag(SCOPE, "profRank"));
  return Number.isInteger(r) && r >= 1 ? r : 1; // ausência = Profissional (1)
}

/** Dados do "feat" da graduação concedido ao ator (carrega os usos da regra). */
function buildGradFeat(profName, rank) {
  const APRIMORA = {
    2: "Desconto de 10% em custos predeterminados, −1 na CD predeterminada e aumento de 1 passo no dado predeterminado (até d8).",
    3: "Desconto de 20% em custos predeterminados, −2 na CD predeterminada e aumento de passo do dado predeterminado (até d10).",
    4: "Desconto de 50% em custos predeterminados, −3 na CD predeterminada e aumento de passo do dado predeterminado (até d12)."
  };
  let desc = "", uses = null;
  if ( rank === 2 ) {
    desc = `<p>Suas habilidades passam a ser amplamente reconhecidas, e você finalmente é identificado pela Profissão em que investiu seus esforços.</p>`
      + `<p>Você pode escolher ter vantagem em qualquer Teste de Atributo relacionado à sua profissão (<strong>${profName}</strong>). Essa característica pode ser usada 3 vezes, e todos os usos são recuperados ao final de um descanso longo.</p>`
      + `<p><em>Aperfeiçoamento Profissional (Especialista): ${APRIMORA[2]}</em></p>`;
    uses = { max: "3", spent: 0, recovery: [{ period: "lr", type: "recoverAll", formula: "" }] };
  } else if ( rank === 3 ) {
    desc = `<p>Você já se destaca em seu meio. Até mesmo outros profissionais reconhecem suas capacidades, e não é incomum que sua Profissão esteja diretamente associada à sua imagem.</p>`
      + `<p>Sempre que fizer um Teste de Atributo relacionado à sua profissão (<strong>${profName}</strong>), você trata qualquer resultado de 9 ou menos no d20 como 10.</p>`
      + `<p><em>Aperfeiçoamento Profissional (Mestre): ${APRIMORA[3]}</em></p>`;
  } else {
    desc = `<p>Você está entre os melhores em sua área. Raramente encontrará alguém mais capacitado na mesma Profissão, podendo se tornar uma referência mundial.</p>`
      + `<p>Ao falhar em um Teste de Atributo relacionado à sua profissão (<strong>${profName}</strong>), você pode escolher considerar o teste como bem-sucedido. Essa característica pode ser usada 3 vezes, e você recupera 1 uso ao final de cada descanso longo.</p>`
      + `<p><em>Aperfeiçoamento Profissional (Grão-Mestre): ${APRIMORA[4]}</em></p>`;
    uses = { max: "3", spent: 0, recovery: [{ period: "lr", type: "formula", formula: "1" }] };
  }
  const sys = {
    description: { value: desc, chat: "" },
    identifier: `grad-${RANK_NAME[rank].toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}`,
    type: { value: "feat", subtype: "" },
    requirements: `${profName} (Graduação)`,
    properties: [],
    activities: {}
  };
  if ( uses ) sys.uses = uses;
  return {
    name: `${RANK_NAME[rank]} — ${profName}`,
    type: "feat",
    img: "icons/sundries/scrolls/scroll-bound-gold.webp",
    system: sys,
    flags: { [SCOPE]: { professionGrad: true } }
  };
}

/* -------------------------------------------- */
/*  Fluxo do marco                              */
/* -------------------------------------------- */

async function _promptMilestone(actor, level) {
  const profs = professionItems(actor).filter(p => rankOf(p) < MAX_RANK);
  if ( !profs.length ) return false;

  const optionsHtml = profs.map(p => {
    const cur = rankOf(p);
    return `<option value="${p.id}">${p.name}: ${RANK_NAME[cur]} → ${RANK_NAME[cur + 1]}</option>`;
  }).join("");

  const choice = await foundry.applications.api.DialogV2.wait({
    window: { title: "⚓ Marco de Graduação de Profissão" },
    content: `
      <div style="padding:8px 0; font-size:13px; color:#ccc; line-height:1.5;">
        <p style="margin:0 0 8px;">Você atingiu o <strong>nível ${level}</strong> e pode elevar a graduação de uma de suas Profissões.</p>
        <p style="margin:0 0 10px; font-size:12px; opacity:.8;">Alternativamente, você pode <em>aprender uma nova profissão</em> (arraste-a para a ficha) — nesse caso, escolha “Pular este marco”.</p>
        <div style="display:flex; align-items:center; gap:8px;">
          <label style="flex:0 0 auto;">Profissão:</label>
          <select id="op-prof-grad" style="flex:1 1 auto;">${optionsHtml}</select>
        </div>
      </div>`,
    buttons: [
      {
        label: "Elevar Graduação", action: "ok", default: true,
        callback: (event, button, dialog) => {
          const sel = (dialog.element ?? document).querySelector("#op-prof-grad");
          return sel?.value ?? null;
        }
      },
      { label: "Pular este marco", action: "skip", callback: () => "skip" }
    ],
    rejectClose: false,
    close: () => null
  });

  if ( choice === null ) return false;          // fechou → decidir depois (não consome o marco)
  if ( choice === "skip" ) return true;         // pulou → consome o marco

  const prof = actor.items.get(choice);
  if ( !prof ) return true;
  const newRank = Math.min(MAX_RANK, rankOf(prof) + 1);
  await actor.createEmbeddedDocuments("Item", [buildGradFeat(prof.name, newRank)]);
  await prof.setFlag(SCOPE, "profRank", newRank);
  ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor }),
    content: `⚓ <strong>${actor.name}</strong> elevou <strong>${prof.name}</strong> para a graduação <strong>${RANK_NAME[newRank]}</strong>.`
  });
  ui.notifications.info(`${prof.name}: graduação ${RANK_NAME[newRank]}.`);
  return true;
}

async function _checkMilestones(actor, { fromProfessionAdd = false } = {}) {
  try {
    if ( !actor || actor.type !== "character" || !actor.isOwner ) return;
    const level = actor.system?.details?.level ?? 0;
    const lastLevel = Number(actor.getFlag(SCOPE, "profLastLevel")) || 0;
    const levelIncreased = level > lastLevel;
    if ( levelIncreased ) await actor.setFlag(SCOPE, "profLastLevel", level);
    if ( !levelIncreased && !fromProfessionAdd ) return; // nada novo a perguntar

    if ( _pending.has(actor.id) ) return;
    _pending.add(actor.id);
    try {
      // Processa marcos pendentes (pode haver mais de um em "catch-up").
      let guard = 0;
      while ( guard++ < MILESTONES.length ) {
        if ( !professionItems(actor).some(p => rankOf(p) < MAX_RANK) ) break;
        const used = new Set(actor.getFlag(SCOPE, "profMilestonesUsed") ?? []);
        const due = MILESTONES.find(m => level >= m && !used.has(m));
        if ( due === undefined ) break;
        const consumed = await _promptMilestone(actor, level);
        if ( !consumed ) break;                 // "decidir depois" → para sem consumir
        used.add(due);
        await actor.setFlag(SCOPE, "profMilestonesUsed", [...used]);
      }
    } finally {
      _pending.delete(actor.id);
    }
  } catch ( err ) {
    console.error("onepiece-system | profissao-graduacao | erro ao checar marcos:", err);
  }
}

/* -------------------------------------------- */
/*  Hooks                                       */
/* -------------------------------------------- */

Hooks.on("updateActor", (actor, changes, options, userId) => {
  if ( userId !== game.user.id ) return;
  _checkMilestones(actor);
});

Hooks.on("updateItem", (item, changes, options, userId) => {
  if ( userId !== game.user.id ) return;
  if ( item?.type !== "class" ) return;
  if ( !foundry.utils.hasProperty(changes, "system.levels") ) return;
  if ( item.parent ) _checkMilestones(item.parent);
});

Hooks.on("createItem", (item, options, userId) => {
  if ( userId !== game.user.id ) return;
  const actor = item?.parent;
  if ( !actor ) return;
  if ( item.type === "class" ) { _checkMilestones(actor); return; }
  if ( item.type === "feat" && item.system?.type?.value === "profissao"
    && !EXCLUDED_IDENTIFIERS.has(item.system?.identifier) ) {
    _checkMilestones(actor, { fromProfessionAdd: true });
  }
});
