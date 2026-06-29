/**
 * jj/socket.mjs
 * Handler do socket para geração de energia de NPC (ferramenta de GM).
 */

Hooks.on("ready", () => {
  game.socket.on("system.onepiece-system", async (data) => {

    // NPC: jogador recebe pedido do GM para abrir dialog
    if ( data.action === "npcEnergyDialog" && data.userId === game.user.id ) {
      const actor = game.actors.get(data.actorId);
      if ( !actor ) return;
      const nd = actor.system.details?.cr ?? 1;
      setTimeout(async () => {
        const multiplicador = await foundry.applications.api.DialogV2.wait({
          window: { title: `⚡ Geração de Energia — ${actor.name}` },
          content: `<p style="margin:0 0 10px;">Quantas vezes o ND (<strong>${nd}</strong>) deseja gerar?</p>`,
          buttons: [
            { label: `2× (${nd * 2} PA)`, action: "2", default: true },
            { label: `3× (${nd * 3} PA)`, action: "3" },
            { label: `4× (${nd * 4} PA)`, action: "4" },
            { label: "Pular",             action: "skip" }
          ],
          rejectClose: false,
          close: () => "skip"
        });
        if ( !multiplicador || multiplicador === "skip" ) return;
        game.socket.emit("system.onepiece-system", {
          action: "npcEnergyChoices",
          actorId: data.actorId,
          nd,
          multiplicador
        });
      }, 100);
    }

    // NPC: GM recebe escolhas e processa
    if ( data.action === "npcEnergyChoices" && game.user.isGM ) {
      const actor = game.actors.get(data.actorId);
      if ( !actor ) return;
      const alvo        = data.nd * Number(data.multiplicador);
      const geradaAtual = actor.system.energy.generated ?? 0;
      const totalAtual  = actor.system.energy.total ?? 0;
      if ( alvo <= geradaAtual ) {
        ui.notifications.info(`${actor.name} já tem ${geradaAtual} PA Gerada.`);
        return;
      }
      const necessario    = alvo - geradaAtual;
      const transferencia = Math.min(necessario, totalAtual);
      if ( transferencia === 0 ) {
        ui.notifications.warn(`${actor.name} não tem PA Total suficiente!`);
        return;
      }
      await actor.update({
        "system.energy.total":     totalAtual - transferencia,
        "system.energy.generated": geradaAtual + transferencia
      }, { isEnergySystem: true });
      const sheet = actor.sheet;
      if ( sheet?.rendered ) sheet.render();
    }
  });
});
