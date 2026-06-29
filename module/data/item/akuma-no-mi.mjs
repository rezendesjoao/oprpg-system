import ItemDataModel from "../abstract/item-data-model.mjs";
import ItemDescriptionTemplate from "./templates/item-description.mjs";

const { BooleanField, NumberField, SchemaField, StringField } = foundry.data.fields;

/**
 * Data definition for Akuma no Mi (Devil Fruit) items — One Piece.
 *
 * A fruta é um item único arrastado para a ficha. Ela carrega a categoria
 * (Logia / Paramecia / Zoan), o arquétipo de usuário, o Aspecto Inato e o
 * estado de Despertar. As Técnicas da fruta são itens `spell` (Grau) separados,
 * e as Manifestações de Poder são itens `feat`. A ficha do personagem deriva
 * `system.devilFruit` a partir desta fruta (ver character.mjs).
 *
 * @extends {ItemDataModel<ItemDescriptionTemplate>}
 * @mixes ItemDescriptionTemplateData
 */
export default class AkumaNoMiData extends ItemDataModel.mixin(ItemDescriptionTemplate) {

  /** @override */
  static LOCALIZATION_PREFIXES = ["DND5E.SOURCE"];

  /* -------------------------------------------- */

  /** @inheritDoc */
  static defineSchema() {
    return this.mergeSchema(super.defineSchema(), {
      // logia | paramecia | zoan | zoanMythical
      category: new StringField({ required: true, initial: "paramecia", blank: false }),
      // simple | advanced (Logia/Paramecia) ; common | ancestral (Zoan)
      archetype: new StringField({ required: true, initial: "simple", blank: false }),
      // Texto do Aspecto Inato (Corpo Elemental, Uso Alternativo, Vigor Animalesco...)
      aspectoInato: new StringField({ required: true, blank: true }),
      // Propriedade da fruta (Corporal, Transformação, Espaço-Temporal...) — usada no Despertar
      property: new StringField({ required: true, blank: true }),
      // Orçamento de "pontos virtuais" para Manifestações de Poder
      mpSlots: new NumberField({ required: true, nullable: false, integer: true, min: 0, initial: 0 }),
      // Despertar (libera Estágio Desperto a partir do nível 16)
      awakening: new SchemaField({
        unlocked: new BooleanField({ initial: false })
      }),
      // Fraquezas universais
      weaknesses: new SchemaField({
        seawater: new BooleanField({ initial: true }),
        naturalEnemy: new StringField({ required: true, blank: true })
      })
    });
  }
}
