/**
 * jj/tooltips.mjs
 * Hover cards via fromUuid para perícias, treinamentos, habilidades e condições.
 */

// Descrições oficiais das 19 perícias do OP RPG (Livro do Jogador 2.0).
// Aplicadas diretamente como tooltip (HTML), sem depender de páginas de compêndio.
const OP_SKILL_TOOLTIPS = {
    ath: "<p>Um Teste de Atributo de <strong>Força (Atletismo)</strong> abrange situações desafiadoras que envolvem: superar um penhasco íngreme, escalar paredes escorregadias ou agarrar-se a superfícies instáveis; executar saltos longos ou altos; nadar resistindo a correntes perigosas, tempestades ou obstáculos como algas espessas.</p>",
    acr: "<p>Um Teste de Atributo de <strong>Destreza (Acrobacia)</strong> abrange uma tentativa de permanecer de pé em uma situação complicada, como tentar correr sobre uma camada de gelo, equilibrar-se na corda bamba ou ficar de pé no convés de um navio que balança fortemente. O Narrador também pode pedir um Teste de Atributo de Destreza (Acrobacia) para ver se você é capaz de realizar acrobacias, como cambalhotas e saltos mortais.</p>",
    ste: "<p>Um Teste de Atributo de <strong>Destreza (Furtividade)</strong> é realizado para tentar esconder-se de inimigos, esgueirar-se por guardas, escapar sem ser notado, ou aproximar-se de alguém sem ser visto ou ouvido.</p>",
    slt: "<p>Sempre que você tentar realizar um ato de Prestidigitação ou de trapaça manual, como plantar alguma coisa em outra pessoa ou esconder um objeto em sua roupa, você deve fazer um Teste de Atributo de <strong>Destreza (Prestidigitação)</strong>. O Narrador também pode pedir um Teste de Atributo de Destreza (Prestidigitação) para determinar se você pode roubar uma bolsa de moedas de outra pessoa ou pegar algo do bolso de outra pessoa.</p>",
    his: "<p>Um Teste de Atributo de <strong>Sabedoria (História)</strong> avalia seu conhecimento sobre eventos históricos, figuras lendárias, reinos antigos, disputas e guerras.</p>",
    inv: "<p>Use um Teste de Atributo de <strong>Sabedoria (Investigação)</strong> para procurar pistas e fazer deduções a partir delas. Isso pode incluir localizar um objeto escondido, determinar a arma que causou um ferimento ou identificar o ponto fraco de um túnel que possa desmoronar. Pesquisar fragmentos ocultos em pergaminhos antigos também pode exigir esse teste.</p>",
    med: "<p>Um Teste de Atributo de <strong>Sabedoria (Medicina)</strong> permite tentar estabilizar um companheiro que está morrendo ou diagnosticar uma doença.</p>",
    nat: "<p>Um Teste de Atributo de <strong>Sabedoria (Natureza)</strong> mede seu conhecimento sobre terrenos, plantas, animais, clima e fenômenos naturais.</p>",
    sur: "<p>Um Teste de Atributo de <strong>Sabedoria (Sobrevivência)</strong> é usado para rastrear criaturas, caçar, orientar-se em terras inóspitas, prever o tempo ou evitar perigos naturais como areia movediça.</p>",
    Cont: "<p>Um Teste de Atributo de <strong>Vontade (Haki)</strong> decide se você consegue sobrepujar os outros com seu Haki do Rei, resistir ao Haki do Rei dos inimigos, ignorar efeitos de Akuma no Mi ou conseguir ativar novamente seu Haki após uma exaustão.</p>",
    ins: "<p>Um Teste de Atributo de <strong>Vontade (Intuição)</strong> decide se você pode determinar as verdadeiras intenções de uma criatura, perceber uma mentira ou prever o próximo movimento de alguém.</p>",
    prc: "<p>Um Teste de Atributo de <strong>Vontade (Percepção)</strong> permite observar, ouvir ou detectar a presença de alguma coisa de outra forma. A Percepção mede a consciência geral do que está acontecendo ao seu redor e a acuidade de seus sentidos. Por exemplo, você pode tentar sentir a presença de pessoas através de uma porta fechada. Ou você pode sentir coisas que são obscurecidas ou que normalmente passariam despercebidas, desde uma emboscada em uma estrada, bandidos escondidos nas sombras de um beco ou uma porta secreta fechada somente com a luz de velas.</p>",
    arc: "<p>Um Teste de Atributo de <strong>Vontade (Sobrenatural)</strong> decide se você consegue entender os poderes providos de uma Akuma no Mi, realizar façanhas com seus próprios poderes ou identificar esses poderes.</p>",
    luc: "<p>Um Teste de Atributo de <strong>Vontade (Sorte)</strong> pode ser realizado para qualquer acontecimento que o Narrador entenda que a aleatoriedade é a maior grandeza em jogo. Decide se você vai ser acertado por destroços que caem do céu, se você escolheu abrir o baú certo dentre os que possuíam explosivos ou se você acerta o inimigo que usa ilusões.</p>",
    prf: "<p>Um Teste de Atributo de <strong>Presença (Atuação)</strong> determina o quão bem você pode entreter uma plateia com música, dança, atuação, contando histórias ou alguma outra forma de entretenimento.</p>",
    dec: "<p>Um Teste de Atributo de <strong>Presença (Enganação)</strong> determina se você pode esconder a verdade de forma convincente, verbalmente ou através de suas ações. Esse engano pode abranger tudo, como iludir os outros através de uma mentira cheia de ambiguidade. Situações típicas incluem tentar ludibriar um marinheiro, iludir um comerciante, ganhar dinheiro através de jogos de azar, usar um disfarce, amenizar as suspeitas de alguém com falsas garantias ou manter uma cara séria ao contar uma mentira descarada.</p>",
    itm: "<p>Ao tentar influenciar alguém através de ameaças abertas, ações hostis ou violência física, o Narrador pode pedir a realização de um Teste de Atributo de <strong>Presença (Intimidação)</strong>. Exemplos incluem tentar arrancar informações de um prisioneiro, convencer bandidos da montanha a recuar de um confronto.</p>",
    per: "<p>Quando você tenta influenciar alguém ou um grupo de pessoas com tato, delicadeza ou boa índole, o Narrador pode pedir para você fazer um Teste de Atributo de <strong>Presença (Persuasão)</strong>. Normalmente, você usa a Persuasão quando está agindo de boa-fé, para promover amizades, fazer pedidos cordiais ou exibir a etiqueta apropriada. Exemplos de persuadir os outros incluem convencer um mordomo a deixar sua tripulação a ver o rei, negociar a paz entre duas tribos em conflito ou inspirar uma multidão de pessoas da cidade.</p>",
    prv: "<p>Um Teste de Atributo de <strong>Presença (Provocação)</strong> é feito quando você tenta coagir uma pessoa ou criatura a reagir de acordo com sua vontade, seja de forma agressiva ou para agir de forma descuidada. Exemplos incluem fazer piadas ofensivas para enfurecer um pirata ou chamar um marinheiro de covarde.</p>"
};

export function injectSkillRefs(root) {
  root.querySelectorAll("li[data-key]").forEach(el => {
    const html = OP_SKILL_TOOLTIPS[el.dataset.key];
    if ( !html ) return;
    el.dataset.tooltip = html;
    el.dataset.tooltipDirection = "UP";
    // Remover fontes de tooltip antigas (página JJK / referência do dnd5e).
    el.removeAttribute("data-reference-tooltip");
    delete el.dataset.jjRef;
  });
}

export function injectTrainingRefs(root) {
  const JJ_TRAINING_REFERENCES = {
    "protecaoEnergia":         "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.D784UnTjqTaJZOEh",
    "impactoEcoante":          "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.a6Ou5E3jxIMYsZPt",
    "robusto":                 "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.s0Rq2BmzMI1Pbw2L",
    "agilidadeAvancada":       "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.AqvfUbRRQzpVlHz1",
    "energiaAdaptavel":        "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.GMsFUhiFKbSnPsGJ",
    "energiaBruta":            "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.Z5mDHhz0sVRHsA3B",
    "golpePenetrante":         "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.3vPFbFcuDdpSvwKT",
    "periciaNodavel":          "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.miXywfeqLSk6hzI6",
    "resistenciaAprimorada":   "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.11yZVOrfieCSv8YC",
    "ritmoCombate":            "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.TYMYMOCH2iZhs9NL",
    "reversaoDominada":        "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.VLP7DaQoUH5Gfpu3",
    "fulgorCerteiro":          "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.gA882swrqxLwqj1N",
    "reversaoDupla":           "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.IT0QweKyExQmAJGc",
    "reversaoOfensiva":        "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.H7CY8R4LSHeE9D3a",
    "falhaCritica":            "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.LzT1Zya0el1kuKRp",
    "dominioIncompleto":       "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.9GZp3e1EQqsKA3ah",
    "dominioSimples":          "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.lcaWf7WK3I9lCm8q",
    "cestaOcaDeVime":          "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.oXF8McpPaneyvSxT",
    "emocaoDaFlorCaida":       "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.2IhjDc0fKUOtdubM",
    "amplificacaoDominio":     "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.EhzWEVQsCbJWY9wB",
    "dominioSimplesEstendido": "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.9KQ2h5wAyBFZ1KrE",
    "expansaoModificada":      "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.fqj9BD86pCg8p3BF",
    "expansaoFortalecida":     "Compendium.onepiece-system.conteudo.JournalEntry.tr3t07bsAOPkVrb6.JournalEntryPage.lfnLaby2SreAjXH1"
  };
  const JJ_TRAINING_KANJI = {
    "protecaoEnergia": "護", "impactoEcoante": "響", "robusto": "剛",
    "agilidadeAvancada": "速", "energiaAdaptavel": "変", "energiaBruta": "力",
    "golpePenetrante": "貫", "periciaNodavel": "技", "resistenciaAprimorada": "耐",
    "ritmoCombate": "律", "reversaoDominada": "逆", "fulgorCerteiro": "閃",
    "reversaoDupla": "双", "reversaoOfensiva": "攻", "falhaCritica": "術",
    "dominioIncompleto": "域", "dominioSimples": "簡", "cestaOcaDeVime": "籠",
    "emocaoDaFlorCaida": "花", "amplificacaoDominio": "拡", "dominioSimplesEstendido": "延",
    "expansaoModificada": "改", "expansaoFortalecida": "強"
  };
  root.querySelectorAll(".training-card[data-training-id]").forEach(el => {
    const id = el.dataset.trainingId;
    if ( !id ) return;
    if ( !el.dataset.jjRef ) {
      const uuid = JJ_TRAINING_REFERENCES[id];
      if ( uuid ) el.dataset.jjRef = uuid;
    }
    const kanjiEl = el.querySelector(".tc-kanji");
    if ( kanjiEl && !kanjiEl.textContent ) {
      kanjiEl.textContent = JJ_TRAINING_KANJI[id] ?? "術";
    }
  });
}

export function injectAbilityRefs(root) {
  const JJ_ABILITY_REFERENCES = {
    "defesaEnergia":       "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.XBIoo4Xvi3i15IRh",
    "fulgorNegro":         "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.VQsD5uqmj05cF69D",
    "explosaoOfensiva":    "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.lsZAEHuvcDNXDNW1",
    "explosaoDefensiva":   "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.qnmlbd0KIkiHcjXA",
    "despertarHabilidade": "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.jJyINc1pObzIzdIx",
    "ultimoRecurso":       "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.uOJ9E6DqsTkRPbYL",
    "sentirMaldicao":      "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.ygkT8BcKxrb6W1iB",
    "envolver":            "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.KFRBt9Qs9pux4FJR",
    "focoAgressivo":       "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.7NlxD1VceHNVLqu0",
    "focoDefensivo":       "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.5q2sTRGdGk3w8erf",
    "analiceSuperior":     "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.YFrNnBf3wn7Xtu9F",
    "fluxoPerfeito":       "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.k0E29NXdCk7SgDgl",
    "fluxoConstante":      "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.QDjwDQaCvoIX8DQM",
    "energiaReversa":      "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.6XSRr50Ar7Ma3xsi",
    "reversaoFeitico":     "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.NzUjuPxfWz3j5r8m",
    "energiaFlexivel":     "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.yC0xdO30Ly91jZHV",
    "negacaoEnergia":      "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.GAMRCaZxKgGDK5Zq",
    "muralhaEnergia":      "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.jX9LwCNSVMGWUYWH",
    "focoExtremo":         "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.YJPOuVrZW9hp2pF5",
    "ofensivaExtrema":     "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.9SbAGwJaZMc4UTab",
    "reversaoSubita":      "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.gRJeXaWBvPWczeIH",
    "cortina":             "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.ncnvUldh62tP1YbV",
    "barreiraVazia":       "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.fCF7kqCBCyRfexEt",
    "barreiraPura":        "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.XpybOwu136RN4jEe",
    "barreiraBon":         "Compendium.onepiece-system.conteudo.JournalEntry.NTLmGaxbRETZzwYX.JournalEntryPage.wGkR1gGcPwKE6D5W"
  };
  root.querySelectorAll(".ability-card[data-ability-id]").forEach(el => {
    const id = el.dataset.abilityId;
    if ( !id || el.dataset.jjRef ) return;
    const uuid = JJ_ABILITY_REFERENCES[id];
    if ( uuid ) el.dataset.jjRef = uuid;
  });
}

export function injectAbilityKanjis(root) {
  const JJ_ABILITY_KANJI = {
    // básicas
    "defesaEnergia":       "護",
    "fulgorNegro":         "黒",
    "explosaoOfensiva":    "爆",
    "explosaoDefensiva":   "盾",
    "despertarHabilidade": "覚",
    "ultimoRecurso":       "禁",
    // avançadas
    "sentirMaldicao":      "感",
    "envolver":            "包",
    "focoAgressivo":       "攻",
    "focoDefensivo":       "守",
    "analiceSuperior":     "析",
    "fluxoPerfeito":       "完",
    "fluxoConstante":      "続",
    "energiaReversa":      "逆",
    "reversaoFeitico":     "術",
    "energiaFlexivel":     "柔",
    // extremas
    "focoExtremo":         "極",
    "negacaoEnergia":      "消",
    "muralhaEnergia":      "壁",
    "ofensivaExtrema":     "最",
    "reversaoSubita":      "突",
    // barreiras
    "cortina":             "幕",
    "barreiraVazia":       "空",
    "barreiraPura":        "純",
    "barreiraBon":         "盆"
  };
  root.querySelectorAll(".ability-card[data-ability-id]").forEach(el => {
    const id = el.dataset.abilityId;
    if ( !id ) return;
    const kanjiEl = el.querySelector(".ability-kanji");
    if ( kanjiEl && !kanjiEl.textContent.trim() ) {
      kanjiEl.textContent = JJ_ABILITY_KANJI[id] ?? "術";
    }
  });
}

export function applyJJTextTooltips(root) {
  root.querySelectorAll("[data-jj-ref]").forEach(el => {
    if ( el.dataset.jjTooltipBound ) return;
    el.dataset.jjTooltipBound = "1";
    const uuid = el.dataset.jjRef;
    fromUuid(uuid).then(page => {
      if ( !page ) return;
      const rawHtml = page.text?.content ?? page.system?.text?.content ?? "";
      if ( !rawHtml ) return;
      el.dataset.tooltip = rawHtml;
      el.dataset.tooltipDirection = "UP";
    }).catch(() => {});
  });
}
