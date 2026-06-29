import ActivitySheet from "./activity-sheet.mjs";

/**
 * Sheet for the damage activity.
 */
export default class DamageSheet extends ActivitySheet {

  /** @inheritDoc */
  static DEFAULT_OPTIONS = {
    classes: ["damage-activity"]
  };

  /* -------------------------------------------- */

  /** @inheritDoc */
  static PARTS = {
    ...super.PARTS,
    effect: {
      template: "systems/onepiece-system/templates/activity/damage-effect.hbs",
      templates: [
        ...super.PARTS.effect.templates,
        "systems/onepiece-system/templates/activity/parts/damage-damage.hbs",
        "systems/onepiece-system/templates/activity/parts/damage-part.hbs",
        "systems/onepiece-system/templates/activity/parts/damage-parts.hbs",
        "systems/onepiece-system/templates/activity/parts/jj-scale.hbs"
      ]
    }
  };
}
