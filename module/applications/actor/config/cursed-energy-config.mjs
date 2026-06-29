import BaseConfigSheet from "../api/base-config-sheet.mjs";

/**
 * Configuration application for cursed energy values.
 */
export default class CursedEnergyConfig extends BaseConfigSheet {
  /** @override */
  static DEFAULT_OPTIONS = {
    classes: ["cursed-energy"],
    position: { width: 360 }
  };

  /** @override */
  static PARTS = {
    config: {
      template: "systems/onepiece-system/templates/actors/config/cursed-energy-config.hbs"
    }
  };

  /** @override */
  get title() {
    return game.i18n.localize("JUJUTSU.Energy.Label");
  }

  /** @inheritDoc */
  async _preparePartContext(partId, context, options) {
    context = await super._preparePartContext(partId, context, options);
    context.data = this.document.system.energy;
    context.fields = this.document.system.schema.fields.energy.fields;
    context.source = this.document.system._source.energy;
    return context;
  }
/** @inheritDoc */
_processSubmitData(event, form, submitData) {
  super._processSubmitData(event, form, submitData);
}
}