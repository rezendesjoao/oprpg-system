/**
 * gen-op-content.mjs — Gerador de conteúdo dos compêndios de One Piece.
 *
 * Lê os dados compactos de `op-data.mjs` (classes, espécies) e escreve os
 * arquivos-fonte YAML em packs/_source/<pack>/, com _ids determinísticos e
 * referências de ItemGrant (UUID de compêndio) auto-conectadas.
 *
 * Depois: `node ./utils/packs.mjs package pack`  (compila YAML → LevelDB)
 *
 * Uso: node ./utils/gen-op-content.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "js-yaml";
import { CLASSES, SPECIES } from "./op-data.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "packs", "_source");
const SYSTEM = "onepiece-system";

/* -------------------------------------------- */
/*  Helpers                                     */
/* -------------------------------------------- */

const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/** ID determinístico de 16 caracteres a partir de uma semente. */
function mkId(seed) {
  let h = 0x811c9dc5;
  for ( let i = 0; i < seed.length; i++ ) { h ^= seed.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  let x = h >>> 0, id = "";
  for ( let i = 0; i < 16; i++ ) {
    x ^= (x << 13); x >>>= 0; x ^= (x >>> 17); x ^= (x << 5); x >>>= 0;
    id += CHARS[x % CHARS.length];
  }
  return id;
}

function uuid(pack, id) { return `Compendium.${SYSTEM}.${pack}.Item.${id}`; }

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function slug(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

const written = { "op-classes": 0, "op-subclasses": 0, "op-features": 0, "op-techniques": 0, "op-species": 0 };
function writeDoc(pack, doc) {
  const dir = path.join(SRC, pack);
  ensureDir(dir);
  doc._key = `!items!${doc._id}`;
  doc.ownership ??= { default: 0 };
  doc.flags ??= {};
  const file = path.join(dir, `${slug(doc.name)}-${doc._id.slice(0, 6)}.yml`);
  fs.writeFileSync(file, YAML.dump(doc, { lineWidth: -1, noRefs: true }), "utf8");
  written[pack]++;
}

/* -------------------------------------------- */
/*  Advancement builders                        */
/* -------------------------------------------- */

function advHitPoints(seed) {
  return { _id: mkId(seed + ":hp"), type: "HitPoints", configuration: {}, value: {}, flags: {} };
}

function advTrait(seed, level, grants = [], choices = []) {
  return {
    _id: mkId(seed + ":trait:" + level + ":" + grants.join(",")),
    type: "Trait", level,
    configuration: { allowReplacements: false, grants, choices, mode: "default" },
    value: {}, flags: {}
  };
}

function advASI(seed, level) {
  return {
    _id: mkId(seed + ":asi:" + level),
    type: "AbilityScoreImprovement", level,
    configuration: { cap: 2, fixed: {}, locked: [], points: 2 },
    value: {}, flags: {}
  };
}

function advItemGrant(seed, level, uuids) {
  return {
    _id: mkId(seed + ":grant:" + level),
    type: "ItemGrant", level,
    configuration: { items: uuids.map(u => ({ uuid: u, optional: false })), optional: false, spell: null },
    value: {}, flags: {}
  };
}

// Escolha de 1 item de um pool (ex.: variante de espécie no nível 0).
function advItemChoice(seed, level, uuids, opts = {}) {
  const count = opts.count ?? 1;
  const choiceLevel = opts.choiceLevel ?? level;
  return {
    _id: mkId(seed + ":choice:" + level + ":" + uuids.join(",")),
    type: "ItemChoice", level,
    configuration: {
      allowDrops: opts.allowDrops ?? false,
      choices: { [String(choiceLevel)]: { count, replacement: opts.replacement ?? false } },
      pool: uuids.map(u => ({ uuid: u })),
      restriction: { level: "", list: [], subtype: "", type: opts.type ?? "feat" },
      spell: null,
      type: opts.type ?? "feat"
    },
    value: {}, flags: {}
  };
}

/* -------------------------------------------- */
/*  Item builders                               */
/* -------------------------------------------- */

function featItem({ code, name, desc, level, requirements = "", uses = null }) {
  const _id = mkId(`feat:${code}:${slug(name)}:${level ?? 0}`);
  const sys = {
    description: { value: desc || `<p>${name}</p>`, chat: "" },
    identifier: slug(name),
    type: { value: "class", subtype: "" },
    requirements,
    properties: [],
    activities: {}
  };
  if ( uses ) sys.uses = { max: String(uses.max), spent: 0, recovery: uses.recovery || [] };
  return { _id, name, type: "feat", img: "icons/sundries/scrolls/scroll-bound-red.webp", system: sys, effects: [], folder: null };
}

/**
 * Técnica = item spell, com uma atividade (attack OU save) que consome PP
 * (system.energy.total) e causa dano. Grau = system.level.
 */
function techItem({ code, name, desc, grau, cost, ability = "str", kind = "attack", attackType = "melee",
                    damage = null, save = null, activation = "action", rangeUnits = "touch" }) {
  const _id = mkId(`tech:${code}:${slug(name)}:${grau}`);
  const actId = "opact0000000001";
  const dmgParts = damage ? [{
    custom: { enabled: false, formula: "" },
    number: damage.number, denomination: damage.die, bonus: "",
    types: [damage.type || "bludgeoning"],
    scaling: { mode: "", number: 1 }
  }] : [];

  const activity = {
    _id: actId,
    type: kind, // "attack" | "save"
    activation: { type: activation, value: null, override: false },
    consumption: {
      targets: [{ type: "attribute", target: "energy.total", value: String(cost), scaling: { mode: "", formula: "" } }],
      scaling: { allowed: false, max: "" }, spellSlot: false
    },
    description: { chatFlavor: "" },
    duration: { units: "inst", concentration: false, override: false },
    effects: [],
    range: { override: false, units: rangeUnits },
    target: { prompt: true, template: { contiguous: false, units: "m", stationary: false }, affects: { choice: false }, override: false },
    uses: { spent: 0, max: "", recovery: [] },
    sort: 0, name: "", img: null, flags: {},
    visibility: { level: {}, requireAttunement: false, requireIdentification: false, requireMagic: false }
  };
  if ( kind === "attack" ) {
    activity.attack = { ability, bonus: "", critical: { threshold: 20 }, flat: false,
      type: { value: attackType, classification: "spell" } };
    activity.damage = { critical: { bonus: "" }, includeBase: true, parts: dmgParts };
  } else { // save: schema de dano diferente (onSave + parts, sem includeBase/critical)
    activity.save = { ability: save?.targetAbility ? [save.targetAbility] : ["con"],
      dc: { calculation: ability, formula: "" } };
    activity.damage = { onSave: "half", parts: dmgParts };
  }

  return {
    _id, name, type: "spell", img: "icons/magic/light/projectile-bolts-salvo-yellow.webp",
    system: {
      description: { value: desc || `<p>${name}</p>`, chat: "" },
      activation: { type: activation, condition: "", value: 1 },
      duration: { value: "", units: "inst" },
      target: { affects: { choice: false, count: "", type: "" }, template: { units: "m", contiguous: false, type: "", stationary: false } },
      range: { units: rangeUnits, special: "" },
      uses: { max: "", recovery: [], spent: 0 },
      ability: "", level: grau, school: "evo",
      materials: { value: "", consumed: false, cost: 0, supply: 0 },
      properties: [],
      activities: { [actId]: activity },
      identifier: slug(name), method: "spell", prepared: 2
    },
    effects: [], folder: null
  };
}

function classItem(cls) {
  const seed = `class:${cls.key}`;
  const _id = mkId(seed);

  // Gerar features e técnicas (em seus packs) e coletar UUIDs por nível.
  const grantsByLevel = {};
  const addGrant = (level, u) => { (grantsByLevel[level] ??= []).push(u); };

  for ( const f of (cls.features || []) ) {
    const item = featItem({ code: cls.code, name: f.name, desc: f.desc, level: f.level, requirements: cls.name, uses: f.uses });
    writeDoc("op-features", item);
    addGrant(f.level, uuid("op-features", item._id));
  }
  for ( const t of (cls.tecnicas || []) ) {
    const item = techItem({ code: cls.code, name: t.name, desc: t.desc, grau: t.grau, cost: t.cost,
      ability: t.ability || (cls.primary?.[0] ?? "str"), kind: t.kind || "attack",
      attackType: t.attackType || "melee", damage: t.damage, save: t.save,
      activation: t.activation || "action", rangeUnits: t.rangeUnits || "touch" });
    writeDoc("op-techniques", item);
    addGrant(t.level, uuid("op-techniques", item._id));
  }

  // Subclasses (Caminhos)
  const subUuids = [];
  for ( const sub of (cls.subclasses || []) ) {
    const subItem = subclassItem(cls, sub);
    writeDoc("op-subclasses", subItem);
    subUuids.push(uuid("op-subclasses", subItem._id));
  }

  // Advancements
  const advancement = [ advHitPoints(seed) ];
  if ( cls.saves?.length ) advancement.push(advTrait(seed, 1, cls.saves.map(s => `saves:${s}`)));
  if ( cls.weapons?.length ) advancement.push(advTrait(seed, 1, cls.weapons.map(w => `weapon:${w}`)));
  if ( cls.skillPool?.length ) advancement.push(advTrait(seed, 1, [], [{ count: cls.skillCount || 2, pool: cls.skillPool.map(s => `skills:${s}`) }]));
  for ( const lvl of (cls.asiLevels || [4, 8, 12, 16, 19]) ) advancement.push(advASI(seed, lvl));
  for ( const [lvl, uuids] of Object.entries(grantsByLevel) ) advancement.push(advItemGrant(seed, Number(lvl), uuids));

  return {
    _id, name: cls.name, type: "class",
    img: cls.img || "icons/skills/melee/weapons-crossed-swords-yellow.webp",
    system: {
      description: { value: cls.description || `<p>${cls.name}</p>`, chat: "" },
      identifier: cls.key,
      levels: 1,
      hd: { denomination: cls.hd || "d8", spent: 0 },
      primaryAbility: { value: cls.primary || ["str"], all: false },
      spellcasting: { progression: "none", ability: cls.primary?.[0] ?? "" },
      advancement
    },
    effects: [], folder: null
  };
}

function subclassItem(cls, sub) {
  const _id = mkId(`subclass:${cls.key}:${sub.key}`);
  const seed = `subclass:${cls.key}:${sub.key}`;
  const grantsByLevel = {};
  for ( const f of (sub.features || []) ) {
    const item = featItem({ code: cls.code + "-" + sub.key, name: f.name, desc: f.desc, level: f.level, requirements: sub.name });
    writeDoc("op-features", item);
    (grantsByLevel[f.level] ??= []).push(uuid("op-features", item._id));
  }
  const advancement = [];
  for ( const [lvl, uuids] of Object.entries(grantsByLevel) ) advancement.push(advItemGrant(seed, Number(lvl), uuids));
  return {
    _id, name: sub.name, type: "subclass",
    img: sub.img || "icons/skills/melee/weapons-crossed-swords-purple.webp",
    system: {
      description: { value: sub.desc || `<p>${sub.name}</p>`, chat: "" },
      identifier: sub.key, classIdentifier: cls.key,
      spellcasting: { progression: "none", ability: "" },
      advancement
    },
    effects: [], folder: null
  };
}

function raceItem(sp) {
  const seed = `race:${sp.key}`;
  const _id = mkId(seed);
  const grantsByLevel = {};
  for ( const t of (sp.traits || []) ) {
    const item = featItem({ code: "SP-" + sp.code, name: t.name, desc: t.desc, level: 0, requirements: sp.name });
    item.system.type = { value: "race", subtype: "" }; // traço de espécie
    writeDoc("op-features", item);
    (grantsByLevel[0] ??= []).push(uuid("op-features", item._id));
  }
  const advancement = [];
  if ( sp.asi ) advancement.push(advASI(seed, 0)); // +1/+1 ou +2 à escolha
  for ( const [lvl, uuids] of Object.entries(grantsByLevel) ) advancement.push(advItemGrant(seed, Number(lvl), uuids));

  // Variantes: o jogador escolhe 1 traço de variante na criação (nível 0).
  if ( sp.variants?.length ) {
    const variantUuids = sp.variants.map(v => {
      const item = featItem({ code: "SP-" + sp.code + "-VAR", name: v.name, desc: v.html ?? v.desc, level: 0, requirements: `${sp.name} (Variante)` });
      item.system.type = { value: "race", subtype: "variant" }; // traço de variante de espécie
      writeDoc("op-features", item);
      return uuid("op-features", item._id);
    });
    advancement.push(advItemChoice(seed, 0, variantUuids, { count: 1, type: "feat" }));
  }

  const movement = { walk: sp.walk ?? 9, swim: sp.swim ?? 0, fly: sp.fly ?? 0, climb: sp.climb ?? 0, units: "m", hover: false };
  return {
    _id, name: sp.name, type: "race",
    img: sp.img || "icons/environment/people/group.webp",
    system: {
      description: { value: sp.description || `<p>${sp.name}</p>`, chat: "" },
      identifier: sp.key,
      movement,
      senses: { darkvision: sp.darkvision ?? 0, units: "m" },
      type: { value: "humanoid", subtype: "", swarm: "", custom: "" },
      advancement
    },
    effects: [], folder: null
  };
}

/* -------------------------------------------- */
/*  Run                                         */
/* -------------------------------------------- */

// Limpa apenas os packs gerados (não toca info / tecnicas-manipulacao)
for ( const pack of Object.keys(written) ) {
  const dir = path.join(SRC, pack);
  if ( fs.existsSync(dir) ) fs.rmSync(dir, { recursive: true, force: true });
}

for ( const cls of CLASSES ) writeDoc("op-classes", classItem(cls));
for ( const sp of SPECIES ) writeDoc("op-species", raceItem(sp));

console.log("Gerado:", JSON.stringify(written, null, 0));
