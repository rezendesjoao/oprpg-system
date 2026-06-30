/**
 * jj/haki.mjs — Aba "Haki" da ficha de personagem (One Piece, Cap. 7).
 *
 * Os Talentos vêm do compêndio `op-haki-talentos` (itens feat com flags
 * onepiece-system.{hakiTalent,paCost,hakiType,hakiStage,prereq}). Aprender um talento
 * = copiar o item para a ficha; o personagem deriva PA gasto + Estágio dos talentos
 * possuídos (character.mjs). Esta aba mostra a árvore por tipo/Estágio, marca cada
 * talento como possuído / disponível / bloqueado, e oferece as conversões de PA.
 */

const PACK_ID = "onepiece-system.op-haki-talentos";
const STAGE_ORDER = { inexperiente: 0, treinado: 1, perito: 2 };
const STAGE_LABEL = { inexperiente: "Inexperiente", treinado: "Treinado", perito: "Perito" };
const TYPE_LABEL  = { armamento: "Haki do Armamento", observacao: "Haki da Observação", rei: "Haki do Rei" };
const TYPE_ICON   = { armamento: "fas fa-fist-raised", observacao: "fas fa-eye", rei: "fas fa-crown" };

const slug = s => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* -------------------------------------------- */

/**
 * Monta o contexto da aba Haki.
 * @param {Actor5e} actor
 * @param {object} context
 * @returns {Promise<object>}
 */
export async function prepareHakiContext(actor, context) {
  const hk = actor.system.haki ?? {};
  const level = actor.system.details?.level ?? 1;
  const stage = hk.stage ?? "inexperiente";
  const curStageOrder = STAGE_ORDER[stage] ?? 0;
  const paAvailable = hk.paAvailable ?? 0;

  // Talentos possuídos (feats com flag hakiTalent) → identifier → id na ficha.
  const ownedById = new Map(actor.itemTypes.feat
    .filter(i => i.flags?.["onepiece-system"]?.hakiTalent)
    .map(i => [i.system?.identifier ?? slug(i.name), i.id]));

  // Carrega os Talentos do compêndio.
  const pack = game.packs?.get(PACK_ID);
  const docs = pack ? await pack.getDocuments() : [];

  const investedByType = { armamento: 0, observacao: 0, rei: 0 };
  const talentsByType = { armamento: [], observacao: [], rei: [] };

  for ( const doc of docs ) {
    const f = doc.flags?.["onepiece-system"] ?? {};
    if ( !f.hakiTalent ) continue;
    const type = f.hakiType, tStage = f.hakiStage, cost = f.paCost ?? 0;
    const ident = doc.system?.identifier ?? slug(doc.name);
    const ownedId = ownedById.get(ident) ?? null;
    const owned = !!ownedId;
    if ( owned ) investedByType[type] = (investedByType[type] ?? 0) + cost;

    // Razões de bloqueio (ordem de prioridade para a mensagem).
    const prereqMissing = (f.prereq ?? []).filter(p => !ownedById.has(p));
    const stageLocked = (STAGE_ORDER[tStage] ?? 0) > curStageOrder;
    const reiLocked = (type === "rei") && (hk.reiAvailable !== true) && cost > 0;
    const noPA = cost > paAvailable;
    let lockReason = "";
    if ( !owned ) {
      if ( reiLocked ) lockReason = game.i18n.localize("ONEPIECE.Haki.NeedRei");
      else if ( stageLocked ) lockReason = game.i18n.localize("ONEPIECE.Haki.NeedStage");
      else if ( prereqMissing.length ) lockReason = game.i18n.localize("ONEPIECE.Haki.NeedPrereq");
      else if ( noPA ) lockReason = game.i18n.localize("ONEPIECE.Haki.NeedPA");
    }
    const canLearn = !owned && !lockReason;

    (talentsByType[type] ??= []).push({
      uuid: doc.uuid, id: doc.id, identifier: ident, name: doc.name, img: doc.img,
      cost, stage: tStage, stageLabel: STAGE_LABEL[tStage] ?? tStage,
      owned, ownedId, canLearn, locked: !owned && !canLearn, lockReason
    });
  }

  const bySort = (a, b) => (STAGE_ORDER[a.stage] - STAGE_ORDER[b.stage]) || (a.cost - b.cost) || a.name.localeCompare(b.name);
  const types = ["armamento", "observacao", "rei"]
    .filter(t => t !== "rei" || hk.reiAvailable === true)   // Rei só aparece com acesso liberado
    .map(t => ({
      key: t, label: TYPE_LABEL[t], icon: TYPE_ICON[t],
      invested: investedByType[t] ?? 0,
      talents: (talentsByType[t] ?? []).sort(bySort)
    }));

  context.haki = {
    awakened: hk.awakened === true,
    notAwakened: hk.awakened !== true,
    level,
    aptidao: hk.aptidao ?? "",
    principal: hk.principal ?? "",
    reiAvailable: hk.reiAvailable === true,
    paBonus: hk.paBonus ?? 0,
    paEarned: hk.paEarned ?? 0,
    paSpent: hk.paSpent ?? 0,
    paConverted: hk.paConverted ?? 0,
    paAvailable,
    paIdle: paAvailable > 20,
    stage, stageLabel: STAGE_LABEL[stage], stageHintKey: `ONEPIECE.Haki.StageHint${stage.charAt(0).toUpperCase()}${stage.slice(1)}`,
    kingDC: hk.kingDC ?? 0,
    shield: { value: actor.system.armorPoints?.value ?? 0, max: actor.system.armorPoints?.max ?? 0 },
    canConvertHP: paAvailable >= 1,
    canConvertPP: paAvailable >= 3,
    types,
    talentCount: types.reduce((n, t) => n + t.talents.length, 0)
  };
  return context;
}

/* -------------------------------------------- */

/** Copia para a ficha o item de um UUID de compêndio (aprender talento). */
async function grantFromUuid(actor, uuid) {
  if ( !uuid ) return false;
  const src = await fromUuid(uuid);
  if ( !src ) return false;
  const data = src.toObject();
  delete data._id;
  await actor.createEmbeddedDocuments("Item", [data]);
  return true;
}

/**
 * Liga os listeners da aba Haki após a renderização.
 * @param {HTMLElement} root  Elemento raiz da ficha.
 * @param {Actor5e} actor
 */
export function setupHakiTab(root, actor) {
  const tab = root.querySelector('.tab[data-tab="haki"]');
  if ( !tab ) return;

  // Edição direta dos campos persistentes do Haki (data-haki-edit="system.haki.X").
  tab.querySelectorAll("[data-haki-edit]").forEach(el => {
    el.addEventListener("change", async () => {
      const path = el.dataset.hakiEdit;
      let value;
      if ( el.type === "checkbox" ) value = el.checked;
      else if ( el.type === "number" ) value = Math.max(0, Number(el.value) || 0);
      else value = el.value;
      await actor.update({ [path]: value });
    });
  });

  // Conversões de PA (ação bônus): 1 PA → 10 PV; 3 PA → 10 PP. Gasto permanente (paConverted).
  tab.querySelector("[data-action='haki-convert-hp']")?.addEventListener("click", async () => {
    const hk = actor.system.haki ?? {};
    if ( (hk.paAvailable ?? 0) < 1 ) { ui.notifications?.warn(game.i18n.localize("ONEPIECE.Haki.ConvertNoPA")); return; }
    const hp = actor.system.attributes.hp;
    await actor.update({
      "system.haki.paConverted": (hk.paConverted ?? 0) + 1,
      "system.attributes.hp.value": Math.min(hp.max, (hp.value ?? 0) + 10)
    });
  });
  tab.querySelector("[data-action='haki-convert-pp']")?.addEventListener("click", async () => {
    const hk = actor.system.haki ?? {};
    if ( (hk.paAvailable ?? 0) < 3 ) { ui.notifications?.warn(game.i18n.localize("ONEPIECE.Haki.ConvertNoPA")); return; }
    const e = actor.system.energy;
    await actor.update({
      "system.haki.paConverted": (hk.paConverted ?? 0) + 3,
      "system.energy.total": Math.min(e.max, (e.total ?? 0) + 10)
    });
  });

  // Renovar Pontos de Escudo (preenche o valor atual até o máximo).
  tab.querySelector("[data-action='haki-refresh-shield']")?.addEventListener("click", async () => {
    const max = actor.system.armorPoints?.max ?? 0;
    await actor.update({ "system.armorPoints.value": max });
  });

  // Clique num talento: possuído → abre; disponível → aprende; bloqueado → mostra a razão.
  const onEntry = async el => {
    const { uuid, ownedId, canLearn, lockReason } = el.dataset;
    if ( ownedId ) { actor.items.get(ownedId)?.sheet?.render(true); return; }
    if ( canLearn === "true" && uuid ) {
      await grantFromUuid(actor, uuid);
      ui.notifications?.info(game.i18n.localize("ONEPIECE.Haki.Learned"));
      return;
    }
    if ( lockReason ) ui.notifications?.info(lockReason);
  };
  tab.querySelectorAll("[data-action='haki-entry']").forEach(el => el.addEventListener("click", () => onEntry(el)));
}
