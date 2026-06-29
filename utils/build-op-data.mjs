/**
 * build-op-data.mjs — Converte a saída JSON da extração (workflow) no formato
 * de op-data.mjs consumido por gen-op-content.mjs.
 *
 * Uso: node ./utils/build-op-data.mjs <caminho-do-json-de-saida>
 */
import fs from "node:fs";

const inPath = process.argv[2];
if ( !inPath ) { console.error("Informe o caminho do JSON de saída."); process.exit(1); }
const parsed = JSON.parse(fs.readFileSync(inPath, "utf8"));
// O arquivo de saída do workflow envolve os dados em `.result`.
const raw = parsed.result ?? parsed;
const classes = raw.classes ?? raw.CLASSES ?? [];
const species = raw.species ?? raw.SPECIES ?? [];

function tech(t) {
  const o = { level: t.level, grau: t.grau, name: t.name, cost: t.cost, kind: t.kind || "attack" };
  if ( t.attackType ) o.attackType = t.attackType;
  if ( t.damageNumber && t.damageDie ) o.damage = { number: t.damageNumber, die: t.damageDie, type: t.damageType || "bludgeoning" };
  if ( (t.kind === "save") && t.saveAbility ) o.save = { targetAbility: t.saveAbility };
  if ( t.rangeUnits ) o.rangeUnits = t.rangeUnits;
  o.desc = t.desc || "";
  return o;
}

const outClasses = classes.map(c => ({
  code: c.code, key: c.key, name: c.name, hd: c.hd,
  primary: c.primary, saves: c.saves, weapons: c.weapons && c.weapons.length ? c.weapons : ["sim"],
  skillCount: c.skillCount || 2, skillPool: c.skillPool,
  asiLevels: [4, 8, 12, 16, 19],
  description: c.description,
  features: c.features || [],
  tecnicas: (c.tecnicas || []).map(tech),
  subclasses: c.subclasses || []
}));

const body = `// AUTO-GERADO por build-op-data.mjs — não editar à mão; edite a extração.
export const CLASSES = ${JSON.stringify(outClasses, null, 2)};

export const SPECIES = ${JSON.stringify(species, null, 2)};
`;
fs.writeFileSync("utils/op-data.mjs", body, "utf8");
console.log(`Wrote op-data.mjs: ${outClasses.length} classes, ${species.length} species`);
