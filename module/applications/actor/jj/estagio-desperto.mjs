/**
 * jj/estagio-desperto.mjs — Despertar / Estágio Desperto da Akuma no Mi (One Piece).
 *
 * Reaproveita o padrão da Expansão de Domínio (flag de estado + ActiveEffect +
 * dreno de recurso por turno), mas SEM as paredes/templates de arena. É um TOGGLE:
 *  - enterAwakening: ação bônus; exige nível 16+ e fruta com Despertar destravado.
 *  - Enquanto ativo, drena 1 PP (system.energy.total) por turno do dono.
 *  - exitAwakening: manual ou automático ao esgotar os PP.
 */

const FLAG = "estagioDesperto";
const EFFECT_FLAG = "estagioDespertoId";

/* -------------------------------------------- */

/** Apenas o GM ativo processa o dreno, evitando duplicação entre clientes. */
function _isPrimaryProcessor() {
  return game.users?.activeGM === game.user;
}

/* -------------------------------------------- */

/**
 * Entra em Estágio Desperto.
 * @param {Actor5e} actor
 */
export async function enterAwakening(actor) {
  if ( !actor ) return;
  if ( (actor.system.details?.level ?? 1) < 16 ) {
    ui.notifications?.warn("Despertar exige nível 16 ou superior.");
    return;
  }
  if ( actor.system.devilFruit?.awakened !== true ) {
    ui.notifications?.warn("Esta Akuma no Mi ainda não destravou o Despertar.");
    return;
  }
  if ( (actor.system.energy?.total ?? 0) < 1 ) {
    ui.notifications?.warn("Sem Pontos de Poder para entrar em Estágio Desperto.");
    return;
  }

  await actor.setFlag("onepiece-system", FLAG, true);

  // ActiveEffect representando o estado desperto (bônus de dano em Técnicas).
  const existing = actor.effects.find(e => e.getFlag("onepiece-system", EFFECT_FLAG));
  if ( !existing ) {
    await actor.createEmbeddedDocuments("ActiveEffect", [{
      name: "Estágio Desperto",
      icon: "icons/magic/fire/flame-burning-creature-orange.webp",
      origin: actor.uuid,
      disabled: false,
      changes: [
        { key: "system.bonuses.msak.damage", mode: 2, value: "5", priority: 20 },
        { key: "system.bonuses.rsak.damage", mode: 2, value: "5", priority: 20 }
      ],
      flags: { "onepiece-system": { [EFFECT_FLAG]: true } }
    }]);
  }

  ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor }),
    content: `<strong>🔥 DESPERTAR!</strong> ${actor.name} entrou em <em>Estágio Desperto</em>! `
      + `(consome 1 PP no início de cada turno; sai automaticamente ao esgotar os PP)`
  });
}

/* -------------------------------------------- */

/**
 * Sai do Estágio Desperto.
 * @param {Actor5e} actor
 */
export async function exitAwakening(actor) {
  if ( !actor ) return;
  if ( actor.getFlag("onepiece-system", FLAG) ) await actor.setFlag("onepiece-system", FLAG, false);
  const existing = actor.effects.find(e => e.getFlag("onepiece-system", EFFECT_FLAG));
  if ( existing ) await existing.delete();
}

/* -------------------------------------------- */

/**
 * Alterna o Estágio Desperto (usado pelo botão da aba Akuma no Mi).
 * @param {Actor5e} actor
 */
export async function toggleAwakening(actor) {
  if ( actor?.system?.devilFruit?.awakeningStage ) await exitAwakening(actor);
  else await enterAwakening(actor);
}

/* -------------------------------------------- */
/*  Hooks                                       */
/* -------------------------------------------- */

// Dreno de 1 PP por turno enquanto em Estágio Desperto; sai ao zerar.
Hooks.on("combatTurnChange", async (combat, prior, current) => {
  if ( !_isPrimaryProcessor() ) return;
  const actor = combat?.combatants?.get(current?.combatantId)?.actor;
  if ( !actor ) return;
  if ( actor.getFlag("onepiece-system", FLAG) !== true ) return;

  const total = actor.system.energy?.total ?? 0;
  if ( total <= 1 ) {
    await actor.update({ "system.energy.total": Math.max(0, total - 1) }, { isEnergySystem: true });
    await exitAwakening(actor);
    ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor }),
      content: `<em>${actor.name} saiu do Estágio Desperto (Pontos de Poder esgotados).</em>`
    });
  } else {
    await actor.update({ "system.energy.total": total - 1 }, { isEnergySystem: true });
  }
});

// Limpeza ao encerrar o combate.
Hooks.on("deleteCombat", async (combat) => {
  if ( !_isPrimaryProcessor() ) return;
  for ( const c of (combat?.combatants ?? []) ) {
    const actor = c.actor;
    if ( actor && actor.getFlag("onepiece-system", FLAG) === true ) await exitAwakening(actor);
  }
});
