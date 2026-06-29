/**
 * jj/akuma.mjs — Aba "Akuma no Mi" da ficha de personagem (One Piece).
 *
 * Fornece o contexto de renderização e os handlers de interação da aba.
 * O item de fruta (type "akumaNoMi") é a fonte de verdade; a ficha deriva
 * `system.devilFruit` dele (ver character.mjs). Esta aba edita o item e
 * controla o Estágio Desperto.
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
    // Técnicas da fruta = itens spell, agrupados por Grau (spell level)
    tecnicas: actor.itemTypes.spell
      .map(s => ({ id: s.id, name: s.name, img: s.img, grau: s.system?.level ?? 0 }))
      .sort((a, b) => (a.grau - b.grau) || a.name.localeCompare(b.name))
  };
  return context;
}

/* -------------------------------------------- */

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

  // Abrir uma Técnica
  tab.querySelectorAll("[data-action='akuma-open-tecnica']").forEach(el => {
    el.addEventListener("click", () => {
      const item = actor.items.get(el.dataset.itemId);
      item?.sheet?.render(true);
    });
  });

  // Estágio Desperto (entrar/sair)
  tab.querySelector("[data-action='akuma-toggle-desperto']")?.addEventListener("click", async () => {
    await toggleAwakening(actor);
  });
}
