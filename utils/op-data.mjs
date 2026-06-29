// AUTO-GERADO por build-op-data.mjs — não editar à mão; edite a extração.
export const CLASSES = [
  {
    "code": "ATR",
    "key": "atirador",
    "name": "Atirador",
    "hd": "d8",
    "primary": [
      "dex"
    ],
    "saves": [
      "dex",
      "wis"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 3,
    "skillPool": [
      "prc",
      "ste",
      "inv",
      "nat",
      "sur",
      "ins"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "Mestres em armas de fogo e arcos, os Atiradores combinam precisão excepcional com mobilidade tática. Especializando-se em combate à distância, eles escolhem entre o Caminho do Sniper (alcance e impacto) ou do Duelista (cadência e versatilidade). Com reflexos aguçados e conhecimento estratégico, são sempre a melhor escolha quando não se pode errar.",
    "features": [
      {
        "level": 1,
        "name": "Olhos de Águia",
        "desc": "Visão perfeita e precisão inigualável permitem atingir alvos em distâncias consideráveis com confiabilidade."
      },
      {
        "level": 1,
        "name": "Caminho do Atirador",
        "desc": "Escolha o Caminho do Sniper (alcance e precisão com mosquetes) ou do Duelista (mobilidade e cadência com pistolas)."
      },
      {
        "level": 2,
        "name": "Guarda Astuta",
        "desc": "Rompante Defensivo reduz dano à metade no primeiro ataque recebido por rodada. Nos níveis subsequentes, ganha Queda Suave, Sentido de Perigo, Esquiva Fugaz e Elusivo."
      },
      {
        "level": 3,
        "name": "Atirador de Elite",
        "desc": "Disparos impossíveis: dobra alcance de Técnicas, ignora cobertura, dobra Bônus de Proficiência em ataques à distância. Pode sofrer -5 na jogada para +10 no dano."
      },
      {
        "level": 5,
        "name": "Franco Atirador",
        "desc": "Carga de Adrenalina (+3 CA por 1 min, 3 usos), Alvo Travado (vantagem e 2 ataques extras contra 1 alvo), Talento Confiável (trata 9- como 10 em testes com proficiência)."
      },
      {
        "level": 6,
        "name": "Emissário da Morte",
        "desc": "Alvos de surpresa têm PV reduzidos a metade antes do dano. Dano mínimo contra criaturas com menos de 50% PV = seu nível."
      },
      {
        "level": 7,
        "name": "Ataque Extra",
        "desc": "Realiza dois ataques em vez de um ao usar a ação Atacar."
      },
      {
        "level": 10,
        "name": "Contagem de Balas",
        "desc": "10 disparos de precisão máxima por dia: acertos automáticos que dobram dados de dano, 1 por rodada."
      },
      {
        "level": 15,
        "name": "Mira Absoluta",
        "desc": "Ataques à distância causam dano Verdadeiro e atingem todas as criaturas em linha reta, cada adicional sofre metade do dano."
      },
      {
        "level": 19,
        "name": "Deus Atirador",
        "desc": "2 ataques extras adicionais em Ataque Extra. Reduz criaturas ND6 a 0 PV (ND9 em críticos). Sem errar se acima de 50% PV."
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Death Blossom (Duelista)",
        "cost": 2,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 6,
          "type": "piercing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Disparos contra criaturas ao redor em salvaguarda de Destreza com desvantagem. Falha = dano total, sucesso = meia."
      },
      {
        "level": 1,
        "grau": 1,
        "name": "Tiro de Advertência (Sniper)",
        "cost": 2,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "psychic"
        },
        "save": {
          "targetAbility": "int"
        },
        "rangeUnits": "m",
        "desc": "Disparo que assusta inimigo. Falha em Salvaguarda de Vontade = escolhe entre se mover ou agir, sem reação/bônus."
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Covering (Duelista)",
        "cost": 4,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 4,
          "die": 10,
          "type": "piercing"
        },
        "rangeUnits": "m",
        "desc": "Ataque à distância que impõe desvantagem ao próximo ataque (comum ou Técnicas) da criatura até fim do próximo turno."
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Tiro Certeiro (Sniper)",
        "cost": 4,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 3,
          "die": 10,
          "type": "piercing"
        },
        "rangeUnits": "m",
        "desc": "Disparo que acerta automaticamente contra alvo visível dentro do alcance da arma."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Quick Fire (Duelista)",
        "cost": 6,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "piercing"
        },
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "m",
        "desc": "Reação a ser alvo de ataque. Acertado = salvaguarda de CON ou encerra turno imediatamente."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Mira Cruel (Sniper)",
        "cost": 6,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 5,
          "die": 10,
          "type": "piercing"
        },
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "m",
        "desc": "Mira nas articulações. Sucesso = movimento reduzido. Falha em CON = Impedido até fim próximo turno."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Death Shower (Duelista)",
        "cost": 8,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 8,
          "die": 6,
          "type": "piercing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Cone de disparos. Salvaguarda DEX com desvantagem. Falha = dano total + possível Sangramento (CON)."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Overwatch (Sniper)",
        "cost": 8,
        "kind": "save",
        "attackType": "ranged",
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "m",
        "desc": "Marca esfera 3m. Quando criatura agir, ataque comum contra ela. Falha em CON = turno encerra."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Stunning Shot (Duelista)",
        "cost": 10,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 6,
          "die": 10,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "m",
        "desc": "Ataque direto com disparos seguidos. Falha em CON = Atordoado até fim próximo turno."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Shooting Stars (Sniper)",
        "cost": 10,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 10,
          "die": 6,
          "type": "piercing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Série de disparos em cone. Salvaguarda DEX. Falha = dano total, sucesso = meia."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Quick Draw (Duelista)",
        "cost": 12,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "piercing"
        },
        "rangeUnits": "m",
        "desc": "Até 1 min, início turno criatura visível: ataque TEC à distância. Sucesso = dano + reduz movimento a 0 OU +2d10 dano OU nega ação."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Zona do Atirador (Sniper)",
        "cost": 12,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 5,
          "die": 10,
          "type": "piercing"
        },
        "rangeUnits": "m",
        "desc": "Ataque direto certeiro. Sucesso = vantagem em ataques comuns, +60 PV temporários até fim."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Execução (Duelista)",
        "cost": 14,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 11,
          "die": 10,
          "type": "piercing"
        },
        "rangeUnits": "m",
        "desc": "Análise eficiente. Alvo ≤150 PV = morte instantânea em vez de dano."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Headshot (Sniper)",
        "cost": 14,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 12,
          "die": 10,
          "type": "piercing"
        },
        "rangeUnits": "m",
        "desc": "Crítico natural = morte se criatura tiver cabeça. Senão = +6d10 dano Perfurante extra."
      }
    ],
    "subclasses": [
      {
        "key": "duelista",
        "name": "Caminho do Duelista",
        "desc": "Mestre em duas pistolas simultâneas, focando em mobilidade e cadência. Combate a curta e média distância com reflexos aguçados.",
        "features": [
          {
            "level": 1,
            "name": "Gun-Fu",
            "desc": "Empunhando arma favorita: Defesa Aprimorada (reduza dano recebido)."
          },
          {
            "level": 1,
            "name": "Duelista de Elite (3º nível)",
            "desc": "Rápido no Gatilho: ação bônus para ataque comum à distância extra. Tiro de Oportunidade: reação contra movimento próximo."
          }
        ]
      },
      {
        "key": "sniper",
        "name": "Caminho do Sniper",
        "desc": "Especialista em mosquetes de longa distância, priorizando precisão extrema e alcance letal. Observador excepcional.",
        "features": [
          {
            "level": 1,
            "name": "Visão do Caçador",
            "desc": "Empunhando mosquete: Perito em Técnicas. Visão até 5km (10km em alturas), proficiência dobrada em Percepção visual."
          },
          {
            "level": 1,
            "name": "Sniper de Elite (3º nível)",
            "desc": "Alvo na Mira: ação bônus dobra alcance sem desvantagem. Posicionamento Perfeito: +9m escalada com testes automáticos."
          }
        ]
      }
    ]
  },
  {
    "code": "AVE",
    "key": "aventureiro",
    "name": "Aventureiro",
    "hd": "d10",
    "primary": [
      "dex"
    ],
    "saves": [
      "dex",
      "con"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 3,
    "skillPool": [
      "acr",
      "ste",
      "prc",
      "sur",
      "dec",
      "luc"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "Os Aventureiros são especialistas versáteis no combate, dominando chicotes e pistolas com precisão letal. Accustomados a enfrentar todo tipo de perigo, desenvolvem uma intuição afiada que funciona como um sexto sentido, permitindo reações instantâneas às adversidades. São inovadores que transformam desafios em oportunidades para brilhar, gerenciando energia sob as condições mais extremas.",
    "features": [
      {
        "level": 1,
        "name": "Técnicas de Combate",
        "desc": "Aprende uma Técnica de Combate e uma Técnica Auxiliar. Aprende novas Técnicas no 3º, 6º, 9º, 12º, 16º e 20º nível."
      },
      {
        "level": 1,
        "name": "Whip and Gun",
        "desc": "Domínio do chicote (dado 1d10, crítico frenético com pistola adicional, ignora resistência a cortante) e pistola (tiro oportunista com 3x dados, ignora cobertura)."
      },
      {
        "level": 2,
        "name": "Pronto para a Aventura",
        "desc": "Usa Técnicas fora de combate sem gastar PP. Máximo PP aumenta em 4 + Bônus de Proficiência. Recupera metade do PP no início de combate. Recupera 1 nível de Exaustão adicional ao descanso longo."
      },
      {
        "level": 3,
        "name": "Estilo Arriscado",
        "desc": "Margem crítica aumenta com sucessos (até 15-20). Tiro Sem Paciência usa ação poderosa. Domador da Coragem reduz ataques inimigos. Errar criticamente causa 2d12 em si mesmo."
      },
      {
        "level": 5,
        "name": "Caminho da Aventura",
        "desc": "Dados de Aventura (d8) iguais à metade do nível. Aumenta movimento, CA, cura, e dano. Recupera 1 dado ao falhar em teste inimigo. Muda para d12 no 10º nível."
      },
      {
        "level": 6,
        "name": "Companheiro Inseparável",
        "desc": "Reação Agressiva causa 3d6 fixo. Mobilidade com chicote dobra escalada. Wha-Pah (3 efeitos: desarmar, restringir, imprevisibilidade) por 2 PP."
      },
      {
        "level": 7,
        "name": "Ataque Extra",
        "desc": "Pode atacar duas vezes em vez de uma ao usar ação Atacar."
      },
      {
        "level": 10,
        "name": "Reação Imediata",
        "desc": "Ganha turno extra ao ser alvo de ataque, salvaguarda ou perigo (3 usos/descanso longo). Não causa dano durante esse turno."
      },
      {
        "level": 14,
        "name": "Domador",
        "desc": "Se errar Técnica, pode não gastar PP. Técnicas instantâneas causam metade do dano como psíquico se inimigo falhar em Salvaguarda de Sabedoria."
      },
      {
        "level": 19,
        "name": "Explorador Destemido",
        "desc": "Interrupção Relâmpago (6 Dados) anula Técnica inimiga. Domínio Fatal causa dano máximo em Técnicas com chicote/pistola. Arsenal causa 4d8 com chicote + ataque adicional com pistola."
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Whiplash",
        "cost": 2,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 2,
          "die": 6,
          "type": "slashing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Série de ataques com chicote em cone até 12m. Alvo falha em Salvaguarda de Destreza sofre dano total, sucesso metade. Falha em Constituição reduz deslocamento à metade até fim do próximo turno."
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Power Pistol",
        "cost": 4,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 4,
          "die": 8,
          "type": "piercing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Disparo que atravessa inimigos em linha até 9m. Salvaguarda de Destreza com desvantagem; falha = dano total, sucesso = metade."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Sonic Boom",
        "cost": 6,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 6,
          "die": 6,
          "type": "lightning"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Estalar do chicote cria onda sonora em explosão de 6m de raio até 21m. Salvaguarda de Destreza; falha = dano total, sucesso = metade."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Power Whip",
        "cost": 8,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 8,
          "die": 10,
          "type": "slashing"
        },
        "rangeUnits": "m",
        "desc": "Chicoteada única contra alvo até 6m. Ataque de Técnica corpo a corpo. Empurra criatura até 6m se falhar Salvaguarda de Força. +2d8 se bater em estrutura."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Laço de Dominação",
        "cost": 10,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 3,
          "die": 8,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "str"
        },
        "rangeUnits": "m",
        "desc": "Envolve criatura até 6m. Salvaguarda de Força ou fica Incapacitada até 1 minuto. Sofre 3d8 imediatamente e 2d8 no início de cada turno. Não pode se mover para longe."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Círculo da Morte",
        "cost": 12,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 6,
          "die": 6,
          "type": "slashing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Série de ataques em círculo até 9m de raio até 1 minuto (Concentração). Salvaguarda de Destreza e Constituição para não ficar Impedido. Dano total se falhar, metade se sucesso."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Pain Whip",
        "cost": 14,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 14,
          "die": 10,
          "type": "slashing"
        },
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "m",
        "desc": "Chicoteada máxima até 6m. Salvaguarda de Constituição ou alvo não pode atacar mais de uma vez, usar reações/ações bônus até fim do próximo turno. Próximo turno escolhe apenas mover, agir ou ação poderosa."
      }
    ],
    "subclasses": [
      {
        "key": "estilo_arriscado",
        "name": "Estilo Arriscado",
        "desc": "A especialização que refina o combate através da tomada de riscos constantes. Após dedicar tempo ao chicote, o Aventureiro se acostuma a assumir riscos cada vez maiores, fazendo com que combates perigosos se tornem entediantes. Suas habilidades se refinam enquanto depende menos da sorte.",
        "features": [
          {
            "level": 3,
            "name": "Ataque Empolgante",
            "desc": "Margem crítica com chicote aumenta em 1 a cada crítico natural, até máximo 15-20."
          },
          {
            "level": 3,
            "name": "Tiro Sem Paciência",
            "desc": "Ação poderosa dispara pistola com +1d dados para cada rodada no encontro (máximo 2x nível, até 30 dados)."
          }
        ]
      }
    ]
  },
  {
    "code": "BRU",
    "key": "brutamontes",
    "name": "Brutamontes",
    "hd": "d12",
    "primary": [
      "str"
    ],
    "saves": [
      "str",
      "con"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 2,
    "skillPool": [
      "ath",
      "itm",
      "prv",
      "sur"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "Um combatente desumano que abusa da violência em seus golpes, causando impactos aterrorizantes. O Brutamontes se alimenta do caos da batalha, ficando mais forte conforme seus inimigos caem e alimenta-se de sangue para recuperar sua vitalidade.",
    "features": [
      {
        "level": 1,
        "name": "Demônio Incarnado",
        "desc": "Suas jogadas de ataque com sua arma favorita causam +1 de dano extra para cada criatura hostil reduzida a 0 PV que você tenha ferido durante o encontro (máximo igual à metade do seu nível, mínimo de +1). Alternativamente, com uma criatura hostil solitária, gaste 2 PP para obter até metade do bônus máximo de dano."
      },
      {
        "level": 2,
        "name": "Sede de Sangue",
        "desc": "Recupera 1d12 PV toda vez que reduzir uma criatura hostil a 0 PV. Além disso, recupera 1d6 PV quando um aliado reduzir a 0 PV uma criatura que você tenha ferido. Máximo de recuperação igual a 5 vezes seu nível. Alternativamente, com criatura solitária, gaste 1 PP por ataque para recuperar 1d12 PV ao acertar."
      },
      {
        "level": 3,
        "name": "8 Trigramas",
        "desc": "Com uma ação bônus, transita entre 8 modos de combate aleatórios (1d8) durante 1 minuto. Cada modo concede um bônus diferente (Sedutor, Chorão, Depressivo, Brigão, Sanguinário, Risonho, Ladrão, Lúcido). Usável um número de vezes igual ao seu Bônus de Proficiência por descanso curto ou longo."
      },
      {
        "level": 5,
        "name": "Guerreiro Bruto",
        "desc": "Seus golpes incorporam força excessiva. Pode executar Ataque de Oportunidade brutal com reação contra criaturas que se movem para fora de seu alcance corpo a corpo, empurrando-as até 9 metros (Salvaguarda de Força). Em acertos críticos, todas as criaturas que vêem o ataque recebem desvantagem contra você até seu próximo turno. Seu dano base sobe para 2d6. Pode girar a arma causando 3d8 de dano Contundente em cone de 3 metros (Salvaguarda de Destreza)."
      },
      {
        "level": 6,
        "name": "Corpo de Criatura",
        "desc": "Seu corpo se torna resistente como um monstro, aumentando permanentemente seus PV máximos em 60. Ao sofrer dano, pode usar sua reação para reduzir a 0. Usável até 3 vezes por descanso curto ou longo."
      },
      {
        "level": 7,
        "name": "Ataque Extra",
        "desc": "Pode atacar duas vezes em vez de uma ao usar a ação Atacar durante seu turno."
      },
      {
        "level": 10,
        "name": "Caminhos da Besta",
        "desc": "Desperta instinto selvagem. Besta Imparável: dobra deslocamento e recebe 30 PV temporários (ou refaz Salvaguarda falhada), usável igual ao seu Bônus de Proficiência. Rugido Furioso: reduz dano Contundente, Cortante ou Perfurante em 5 pontos contra você e aliados até 9 metros por 1 minuto (3 usos). Aspecto Bestial: dano excedente ao reduzir criatura a 0 PV vira dano Psíquico contra hostis até 6 metros que falhem em Salvaguarda de Vontade."
      },
      {
        "level": 19,
        "name": "Invencibilidade",
        "desc": "Você se torna uma lenda viva. Ataques comuns causam 4d8 de dano, recebe ataque adicional em Ataque Extra, tem resistência a todos os danos (incluindo Verdadeiro), é imune a condições (exceto Enfraquecido) e dano de queda. Em acertos críticos, rola 1d12; se conseguir 12, reduz PV do alvo a 0."
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Nari Kabura",
        "cost": 2,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "m",
        "desc": "Golpe poderoso que transforma o ar, rochas ou destroços em projétil lançado contra uma criatura em jogada de ataque à distância (Técnicas) com margem crítica 19-20. Alcance 9 metros em Linha."
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Kosanze Ragnaraku",
        "cost": 4,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 4,
          "die": 10,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "str"
        },
        "rangeUnits": "touch",
        "desc": "Pula contra criatura e desce golpe brutalmente. A criatura deve passar em Salvaguarda de Força ou fica Caída. Alternativamente, pode mirar no chão desencadeando onda de choque em cone de 15 metros: 4d6 de dano Trovejante (Salvaguarda de Destreza, metade em sucesso) e condição Caída."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Mahoroba",
        "cost": 6,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 5,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Golpe com grande força contra criatura em jogada de ataque corpo a corpo (Técnicas). Empurra criatura (tamanho Grande ou menor) até 6 metros se falhar em Salvaguarda de Força. Se bater em objeto/estrutura com 1,5m+ de raio, sofre 2d8 de dano contundente extra."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Raimei Hakke",
        "cost": 8,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 8,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Golpe extremamente feroz em jogada de ataque corpo a corpo (Técnicas) com grande violência. Se for acerto crítico, adiciona 4 dados de dano extra ao dano crítico."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Gundari Ryuseigun",
        "cost": 10,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 10,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Série de ataques rápidos em jogada de ataque corpo a corpo (Técnicas) contra criatura. Se acertar, alvo deve passar em Salvaguarda de Constituição ou não poderá realizar reações até final do próximo turno. No próximo turno, deve escolher entre se mover, ação ou ação bônus (apenas uma)."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Horai Hakke",
        "cost": 12,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 9,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Golpe extremamente feroz para atingir criatura em jogada de ataque corpo a corpo (Técnicas), com impacto tão poderoso que pode desligar sua consciência. Criatura atingida deve passar em Salvaguarda de Constituição ou fica Atordoada até final do próximo turno dela."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Hakai",
        "cost": 14,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 14,
          "die": 6,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Lança onda de destruição em massa contra todos os inimigos. Toda criatura na área (cone de 30 metros) deve fazer Salvaguarda de Destreza: sofre dano total se falhar, metade se sucesso. Área afetada vira terreno difícil e dano em estruturas é dobrado."
      }
    ],
    "subclasses": [
      {
        "key": "corpo-de-guerreiro",
        "name": "Corpo de Guerreiro",
        "desc": "Uma das Habilidades Básicas Inatas do Brutamontes, focando em transformar seu corpo em uma arma devastadora de violência pura. Escolhida no 1º nível como alternativa a Superioridade Absoluta.",
        "features": [
          {
            "level": 1,
            "name": "Defensor Implacável",
            "desc": "Seu corpo se torna durável contra ataques diretos. Recebe +2 de CA e pode usar sua reação para reduzir dano de ataques corpo a corpo em 1d8 quando vê o ataque vindo."
          },
          {
            "level": 5,
            "name": "Força Bruta Maximizada",
            "desc": "Seus ataques com arma favorita ganham +1 de dado de dano e ao acertar um ataque crítico, pode imediatamente fazer uma jogada de ataque corpo a corpo bônus contra a mesma criatura."
          }
        ]
      }
    ]
  },
  {
    "code": "CAR",
    "key": "carateca-homem-peixe",
    "name": "Carateca Homem-Peixe",
    "hd": "d12",
    "primary": [
      "str"
    ],
    "saves": [
      "con",
      "str"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 2,
    "skillPool": [
      "acr",
      "ath",
      "prf",
      "itm"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "Uma arte marcial desenvolvida por membros habilidosos das espécies nativas do mar. Embora letal em terra, seus movimentos subaquáticos são devastadores. O segredo reside no domínio da água ao redor do usuário, enviando ondas que impactam a água presente no corpo do oponente, permitindo combater adversários altamente resistentes ou imunes a golpes convencionais.",
    "features": [
      {
        "level": 1,
        "name": "Seiken",
        "desc": "Use força transmitida através do vapor d'água em uma jogada de ataque (comum) corpo a corpo desarmado em um cone de até 6 metros, uma vez por turno. Proficiência de usos igual ao Bônus de Proficiência por descanso longo. Dano: 1d6 + mod. Força (Contundente), ignora Invulnerabilidades ou Resistências. Aumenta em: 3º nível = 2d6; 6º = 6d6; 9º = 9d6. Alternativamente, direcionar a um único alvo a até 6 metros com dado d10, não consome usos, apenas uma vez por descanso longo."
      },
      {
        "level": 2,
        "name": "Samehada Shotei",
        "desc": "Ao ser alvo de uma jogada de ataque (comum) corpo a corpo que falhou, use reação para redirecionar para a mesma criatura ou outra a até 1,5 metro. Bônus +3 na jogada de ataque, criatura atingida terá desvantagem na próxima jogada de ataque. Alternativamente, usar mesmo em ataque bem-sucedido (se não foi afetada antes neste encontro) ou gastar 3 Pontos de Poder."
      },
      {
        "level": 3,
        "name": "Jujutsu Homem-Peixe",
        "desc": "Aperfeiçoa movimentos como agarrões e arremessos. Hikishio Ipponzeoi: ação bônus, Salvaguarda de Força ou fica Caído + 1d10 dano Contundente + mod. Força. Uzushio Ipponzeoi: ação bônus, Salvaguarda de Força ou empurrado até 3 metros + 1d6 dano Contundente + mod. Força. Nageru Ipponzeoi: ação bônus, lança criatura voluntária até 12 metros. Hinowara Ipponzeoi: ação bônus, impõe Agarrado em vez de dano, criatura recebe 1d6 dano Contundente por 1,5 metro movido."
      },
      {
        "level": 5,
        "name": "Manipulação da Água",
        "desc": "Acumule Pontos de Carateca (PC) ao executar movimentos do Jujutsu. Mantenha até 5 + nível de Carateca PC (desaparecem ao final do encontro). Inicie cada encontro com 6 PC. Gastos: +1d10 dano em movimentos para cada PC; +1d6 dano e 3m no empurrão para cada PC; +1,5m deslocamento no Hinowara; desvantagem em Salvaguardas; 3 PC para impor falha; 2 PC para parar projéteis; vantagem em Salvaguarda ou Teste de Força."
      },
      {
        "level": 6,
        "name": "Filho do Mar",
        "desc": "Submerso em água: Resistência a dano Contundente, Cortante e Perfurante. Sem desvantagens como não-aquático. Deslocamento natação 15m, não reduzível, não provoca reações. Respire até 10 minutos. Benção do Mar: ação adicional/ação poderosa adicional (Técnicas até 3º grau) uma vez por descanso curto/longo. No 6º nível, gaste 2 PC para usar traços desta característica por 1 minuto em terra."
      },
      {
        "level": 7,
        "name": "Ataque Extra",
        "desc": "Você pode atacar duas vezes, em vez de uma, ao usar a ação Atacar durante seu turno."
      },
      {
        "level": 10,
        "name": "Umidaiko",
        "desc": "Seus golpes são imbuídos com água do mar ou atmosférica, criando ondas de choque. Ataques desarmados ignoram Resistência/Invulnerabilidade, não podem ser reduzidos, anulam Intangibilidade de Akuma no Mi, imunes a danos em resposta (exceto ataques contra você). Ao acertar ataque desarmado, criaturas a até 1,5 metro também sofrem ataque, recebem apenas dano base sem modificadores."
      },
      {
        "level": 11,
        "name": "Ataque Atordoante",
        "desc": "Interfira no fluxo de água do corpo do oponente. Em acerto crítico ou gastando 4 Pontos de Poder em ataque desarmado, a criatura faz Salvaguarda de Constituição ou fica Atordoada até final do próximo turno. No 14º nível, se obtiver sucesso na Salvaguarda, fica Estremecida até final do próximo turno."
      },
      {
        "level": 14,
        "name": "Mizugokoro",
        "desc": "Submerso, sua manipulação de água ultrapassa limites imagináveis. Ultramarine: Técnicas sem alcance Toque ganham +2 dados de dano. Escudo Atmosférico: gaste 2 Pontos de Poder e use reação para parar todos os projéteis a até 15 metros até início do próximo turno. No 14º nível, gaste 2 PC para usar esta característica por 1 minuto em terra."
      },
      {
        "level": 18,
        "name": "Mestre Carateca",
        "desc": "Distribua livremente 6 pontos entre seus atributos (máximo 24 em cada). Escolha dois atributos para aplicar pontos até máximo de 30."
      },
      {
        "level": 19,
        "name": "Kaikyo",
        "desc": "Em terra firme, acesse máximo potencial de suas habilidades. Ação bônus: envolva-se com fina camada de água atmosférica, receba benefícios de estar totalmente submerso por 5 minutos. Recupera 40 Pontos de Poder. Não pode usar novamente até descanso curto/longo."
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Uchimizu",
        "cost": 2,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "piercing"
        },
        "rangeUnits": "m",
        "desc": "Dispara uma lança de água como projétil de alta velocidade em jogada de ataque (Técnicas) à distância. Se atingir, a criatura faz Salvaguarda de Constituição ou recebe condição Sangramento. Linha até 9 metros. Ação Poderosa. Possível Ataque Combinado. [Nota: Versão 3º Grau no 6º nível: 6d6 Perfurante, Cone 18m, 5 PP]"
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Mawashigeri",
        "cost": 4,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 3,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Chute giratório com toda força do corpo contra criatura. Empurra criatura Grande ou menor até 6 metros se falhar em Salvaguarda de Força. Se bater em objeto/estrutura com +1,5m raio, recebe +2d8 dano extra. Ação Poderosa. Possível Ataque Combinado."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Samegawara Seiken",
        "cost": 6,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 6,
          "die": 8,
          "type": "force"
        },
        "rangeUnits": "touch",
        "desc": "Soco que libera onda de choque. Se acertar, pode atingir inimigo adicional na mesma linha até 9 metros que faz Salvaguarda de Destreza (todo ou metade do dano). Dano Verdadeiro. Ação Poderosa. Possível Ataque Combinado."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Soshark",
        "cost": 8,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 3,
          "die": 6,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Ataque contra criatura Grande ou menor. Se acertar, criatura faz Salvaguarda de Força: falha = Agarrada até 1 minuto. Enquanto agarrada: sofre dano ao final de cada turno, você tem vantagem em ataques contra ela. Alvo pode repetir Salvaguarda ao final de seus turnos. Ação Poderosa. Ataque Combinado Impossível."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Yarinami",
        "cost": 10,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 10,
          "die": 10,
          "type": "slashing"
        },
        "rangeUnits": "m",
        "desc": "Cria corrente poderosa ao redor, liberada em alta velocidade/pressão em jogada de ataque (Técnicas) à distância. Onda se torna lâmina afiada que corta trajetória. Dano dobrado contra estruturas, acerto crítico 18-20. Requer estar a 1,5 metro de grandes fontes de água. Linha até 33 metros. Ação Poderosa. Possível Ataque Combinado."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Gyojin Karate Ogi – Buraikan",
        "cost": 12,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 9,
          "die": 10,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "touch",
        "desc": "Soco brutal que faz água atravessar corpo do oponente, estremecendo internamente. Criatura faz Salvaguarda de Constituição ou recebe condição Letárgico até 1 minuto. Alvo letárgico pode repetir Salvaguarda ao fim de cada turno. Ação Poderosa. Ataque Combinado Impossível."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Gyojin Karate Ogi – Onigawara Seiken",
        "cost": 14,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 14,
          "die": 10,
          "type": "force"
        },
        "rangeUnits": "touch",
        "desc": "Técnica secreta com puro poder bruto e intenção assassina. Acerto crítico 18-20. Alternativamente: causar 8d10 dano; se criatura tiver ≤100 PV, seus PV são reduzidos a 0 automaticamente. Dano Verdadeiro. Ação Poderosa. Possível Ataque Combinado."
      }
    ],
    "subclasses": [
      {
        "key": "filho-do-mar",
        "name": "Caminho do Filho do Mar",
        "desc": "Especialização para caratecas que se aperfeiçoam em combates submersos, aprendendo a usar o máximo potencial da arte marcial. Recebem resistência a danos físicos, manipulação de ondas, aumento de deslocamento aquático, imunidade a reações, capacidade de respirar e ação adicional em água.",
        "features": [
          {
            "level": 6,
            "name": "Escudo Marítimo",
            "desc": "Quando totalmente submerso em água, receba resistência a dano Contundente, Cortante e Perfurante. Sem desvantagens por não ser criatura aquática."
          },
          {
            "level": 6,
            "name": "Benção do Mar",
            "desc": "No seu turno submerso, faça uma ação adicional ou ação poderosa adicional (Técnicas de até 3º grau ou menor). Uma vez por descanso curto ou longo."
          }
        ]
      }
    ]
  },
  {
    "code": "CIB",
    "key": "ciborgue",
    "name": "Ciborgue",
    "hd": "d12",
    "primary": [
      "str",
      "wis"
    ],
    "saves": [
      "str",
      "wis"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 2,
    "skillPool": [
      "ath",
      "inv",
      "slt",
      "sur"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "<p>O Ciborgue é qualquer criatura que tenha partes robóticas em seu corpo. Seu corpo foi modificado com dispositivos práticos que auxiliam em combate, análise e diversas tarefas. Um Ciborgue requer combustível para manter seu funcionamento, consumindo mais energia conforme usa seus Pontos de Poder.</p>",
    "features": [
      {
        "level": 1,
        "name": "Corpo Robótico",
        "desc": "Seu corpo foi modificado com dispositivos práticos. Você pode escolher 2 Modificações até o 5º nível (Auto Destruição, Pele de Aço, Strong Hammer, Baú Secreto, Farol Especial, Dureza Reforçada, Hélice, Holograma, Mãos Auxiliares, Melhoria Animal, Membros Remotos, Mente Artificial, Morte Forjada, Parte Localizadora, Pernas Adaptáveis ou Visão Adaptável)."
      },
      {
        "level": 1,
        "name": "Técnicas de Combate",
        "desc": "No 1º nível aprende uma Técnica de Combate e uma Técnica Auxiliar. Aprende novamente no 3º, 6º, 9º, 12º, 16º e 20º nível. CD = 8 + Bônus de Proficiência + modificador de Sabedoria."
      },
      {
        "level": 2,
        "name": "Mira Robótica",
        "desc": "Ao errar uma jogada de ataque (comum), causa dano igual ao modificador de Sabedoria. Em Técnicas, causa até 20 danos (metade em AoE). Jogadas de ataque podem usar modificador de Sabedoria."
      },
      {
        "level": 3,
        "name": "Guerreiro da Ciência",
        "desc": "Escolha uma tecnologia avançada: <strong>Giga-Arm</strong> (defesa e combate aprimorado), <strong>Mega-Head</strong> (processamento, hacking e análise) ou <strong>Proto-Body</strong> (robô independente de tamanho Pequeno)."
      },
      {
        "level": 4,
        "name": "Aumento no Valor de Atributo",
        "desc": "Aumentar um atributo em +2 ou dois atributos em +1. Repete-se no 8º, 12º, 16º e 20º nível. No 12º nível pode atingir até 22, no 16º até 24."
      },
      {
        "level": 5,
        "name": "Reparos de Emergência",
        "desc": "Ação bônus para recuperar 5d10 + nível de PV e encerrar efeitos negativos. Usa-se até 3 vezes, recuperando em descanso curto ou longo."
      },
      {
        "level": 6,
        "name": "Arma Assimilada",
        "desc": "Replica uma arma em seu corpo com dano 2d6 + 1d6 (Elétrico/Energia/Fogo/Frio/Trovejante). Recebe bônus na jogada de ataque, ignorando resistências (exceto Haki do Armamento)."
      },
      {
        "level": 7,
        "name": "Ataque Extra",
        "desc": "A partir do 7º nível (na modificação Giga-Battle ou Protocolo Tático), pode atacar duas vezes durante a ação Atacar."
      },
      {
        "level": 11,
        "name": "Overclock",
        "desc": "Sobrecarrega o sistema por até 5 minutos: deslocamento 15m e +1d6 dano Elétrico. Criaturas atingidas têm desvantagem contra alvos que não sejam você."
      },
      {
        "level": 15,
        "name": "Protocolo de Combate Avançado",
        "desc": "No início de cada combate escolhe dois entre: Protocolo Ofensivo (+3 acerto, +5 dano), Defensivo (reduz dano em nível), Tático (segunda ação bônus) ou Eficiência (50% de chance de não consumir PP)."
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Buster Gun",
        "cost": 2,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "force"
        },
        "rangeUnits": "m",
        "desc": "Dispara feixe de laser a até 15 metros contra um alvo. No 6º nível: 6d10 de dano, alcance 21m, custa 5 PP."
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Metralhadora Portátil",
        "cost": 4,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 4,
          "die": 6,
          "type": "piercing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Libera sequência de tiros em cone de 18m. Salvaguarda de Destreza ou toma dano inteiro (metade se sucesso). Alternativa: ataque à distância focado em 21m para 4d10 dano."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Lança-Chamas",
        "cost": 6,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 6,
          "die": 6,
          "type": "fire"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Libera rajada de fogo em cone de 18m. Salvaguarda de Destreza; se falhar, nova salvaguarda de Constituição ou recebe condição Queimado."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Soco Foguete",
        "cost": 8,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 8,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "m",
        "desc": "Jogada de ataque à distância (até 33m) que projeta punho conectado por corrente. Acertar impõe condição Agarrada. Ação bônus força salvaguarda de Força para puxar para 1,5m."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Rocket Launcher",
        "cost": 10,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 3,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "m",
        "desc": "Dispara 3 mísseis até 33m que acertam automaticamente (podem visar alvos diferentes). Cada míssil causa 1d10 contundente + 2d6 fogo."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Laser Beam",
        "cost": 12,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 9,
          "die": 8,
          "type": "force"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Concentra energia e libera laser em linha (39m comprimento, 1,5m largura). Salvaguarda de Destreza. O laser explode infligindo 6d6 fogo em raio de 18m da explosão (nova salvaguarda)."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Ultra Cannon",
        "cost": 14,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 11,
          "die": 6,
          "type": "lightning"
        },
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "m",
        "desc": "Libera explosão trovejante em cone de 30m. Salvaguarda de Constituição; se falhar, nova salvaguarda ou recebe condição Atordoado até final do próximo turno."
      }
    ],
    "subclasses": [
      {
        "key": "giga-arm",
        "name": "Giga-Arm (Guerreiro da Ciência)",
        "desc": "Transformação de um braço em maquinário robusto com mecanismos complexos. Oferece defesa (Giga-Defense com absorção de dano), captura (Giga-Grabber com dano contínuo), força extrema (Giga-Strong com 1d12 de dano), arremesso (Giga-Throw) e ataque duplo no 7º nível (Giga-Battle).",
        "features": [
          {
            "level": 3,
            "name": "Giga-Defense",
            "desc": "Aumenta CR em +1. Reação para absorver dano igual a 5x nível de Ciborgue (máx 80), recuperando em descanso curto/longo."
          },
          {
            "level": 7,
            "name": "Giga-Battle",
            "desc": "Pode atacar duas vezes durante a ação Atacar no seu turno."
          }
        ]
      }
    ]
  },
  {
    "code": "ESP",
    "key": "espadachim",
    "name": "Espadachim",
    "hd": "d10",
    "primary": [
      "str",
      "dex"
    ],
    "saves": [
      "dex",
      "int"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 2,
    "skillPool": [
      "ath",
      "itm",
      "ins",
      "prc"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "Guerreiros que dominam a arte da espada. Alguns manuseiam as lâminas com leveza e precisão, enquanto outros aplicam grande força e ferocidade. O espadachim confia apenas na espada para proteger a própria vida e na sua contínua evolução através do treinamento incessante.",
    "features": [
      {
        "level": 1,
        "name": "Postura de Espadachim",
        "desc": "Escolha uma de 7 posturas ao empunhar o número exato de armas cortantes. Cada postura concede um Traço Inato único. Você pode escolher uma nova postura no 3º, 6º e 9º nível."
      },
      {
        "level": 2,
        "name": "Consciência Expandida",
        "desc": "Seu dano contra objetos/estruturas dobra para cedro ou madeira menos resistente. Progride para ferro e carvalho (4º), aço e cerejeira (6º), e aço temperado/madeira Adam (8º). No 13º nível, pode cortar construções à distância."
      },
      {
        "level": 3,
        "name": "Empunhadura",
        "desc": "Margem de acerto crítico de 19-20 com um dado de dano adicional. Escolha entre Lâmina Forte (alcance+6m, poder+dano cortante) ou Lâmina Gentil (ignora resistência, ação bônus adicional, dano 1d10). No 6º nível, adquire as características de ambas."
      },
      {
        "level": 5,
        "name": "Honra de um Espadachim",
        "desc": "Uma vez por rodada, reduz o primeiro dano sofrido em 10. Ataques de oportunidade recebem 2d6 de dano psíquico extra. Pode escolher sofrer dano de ataque que falhou para ganhar 3 PP por 10 danos."
      },
      {
        "level": 6,
        "name": "Aura Bestial",
        "desc": "Escolha uma aura de 13 opções (Caranguejo, Cavalo, Corvo, Dragão, etc.). Aura Corvo concede Ataque Extra. Ganhe novas opções nos níveis 8º, 10º, 12º e 14º."
      },
      {
        "level": 7,
        "name": "Análise de Batalha",
        "desc": "Ao acertar ataque corpo a corpo com arma cortante, você pode aplicar o aumento dos dados de dano como se fosse acerto crítico. Use 3 vezes por descanso longo."
      },
      {
        "level": 10,
        "name": "Roubar Técnicas",
        "desc": "Ao ver uma Técnica de Combate inimiga (CD 15 + grau), faça Teste de Vontade (Percepção) para aprendê-la. Técnicas roubadas causam 1d dado extra e custam 1 PP menos. Seu PP máximo aumenta em 2 por Técnica."
      },
      {
        "level": 15,
        "name": "Apogeu",
        "desc": "Técnicas de 1º grau custam 0 PP; de 2º-5º grau custam metade do PP. Técnicas com alcance diferente de toque têm alcance dobrado ou reduzido para 3m."
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Ittoryu - Baki",
        "cost": 2,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "slashing"
        },
        "rangeUnits": "m",
        "desc": "Lança um projétil crescente de ar contra uma criatura. A próxima jogada de ataque comum contra ela terá vantagem. Alcance até 9m em Linha. No 6º nível pode ser usado como 3º grau com 6d10 dano."
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Trueno Bastardo",
        "cost": 4,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 4,
          "die": 10,
          "type": "slashing"
        },
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "touch",
        "desc": "Corte corpo a corpo que impõe Sangramento (CD Constituição) OU lança corte voador em cone de 15m com Salvaguarda Destreza (desvantagem). 4d6 dano em falha ou metade em sucesso."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Ittoryu Iai - Shishi Sonson",
        "cost": 6,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 6,
          "die": 10,
          "type": "slashing"
        },
        "rangeUnits": "touch",
        "desc": "Corte em alta velocidade corpo a corpo. Você recebe 3m de deslocamento normal. No 12º nível pode ser usado como 5º grau com 10d10 dano e 6m deslocamento."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Ittoryu - Sanjuroku (36) Pound Hou",
        "cost": 6,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 8,
          "die": 6,
          "type": "slashing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Balanço circular criando projétil espiral em cone. Toda criatura dentro sofre todo o dano em falha ou metade em sucesso. Alcance até 27m. No 16º nível: 6º grau com 12d6 dano, alcance 33m."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Biken - Blue Bird",
        "cost": 8,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 10,
          "die": 10,
          "type": "piercing"
        },
        "rangeUnits": "touch",
        "desc": "Estocada rápida e precisa corpo a corpo. OU reação ao ser alvo de ataque/salvaguarda Força/Destreza: cria barreira de ar que protege você e cone 6m atrás, bloqueando dano."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Ittoryu - Dai Shinkan",
        "cost": 12,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 9,
          "die": 10,
          "type": "slashing"
        },
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "touch",
        "desc": "Corte corpo a corpo que desestabiliza o alvo. Salvaguarda Constituição ou fica Atordoado até final do seu próximo turno."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Kamusari",
        "cost": 14,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 14,
          "die": 10,
          "type": "slashing"
        },
        "save": {
          "targetAbility": "str"
        },
        "rangeUnits": "touch",
        "desc": "Corte com toda a força, corpo a corpo. Empurra criatura (Grande ou menor) até 9m. Salvaguarda Força ou sofre 3d8 dano extra se bater em objeto/estrutura durante empurrão."
      }
    ],
    "subclasses": [
      {
        "key": "lâmina_forte",
        "name": "Lâmina Forte",
        "desc": "Especialização em armas cortantes sem Acuidade. Aumenta alcance das Técnicas em 6m, adiciona dano cortante extra, e permite ataque adicional após acerto crítico.",
        "features": [
          {
            "level": 3,
            "name": "Alcance Expandido",
            "desc": "Técnicas com alcance Linha, Cone, Esfera ou Cilindro que exijam arma cortante recebem +6m."
          },
          {
            "level": 3,
            "name": "Poder",
            "desc": "Ao acertar ataque comum com arma cortante sem Acuidade, adiciona dano cortante extra igual à metade do seu nível (máximo +5)."
          }
        ]
      }
    ]
  },
  {
    "code": "GUE",
    "key": "guerrilheiro",
    "name": "Guerrilheiro",
    "hd": "d10",
    "primary": [
      "str",
      "wis"
    ],
    "saves": [
      "dex",
      "str"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 2,
    "skillPool": [
      "acr",
      "ath",
      "ste",
      "his",
      "sur"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "Os Guerrilheiros são combatentes treinados em paramilitarismo rigoroso, combinando força física e inteligência tática. Dominam múltiplas armas e técnicas de combate calculadas para garantir máximo desempenho. Aprimoram-se continuamente em recursos, conhecimentos e estratégias, tornando-se máquinas de combate versáteis e devastadoras.",
    "features": [
      {
        "level": 1,
        "name": "Técnicas de Combate",
        "desc": "Aprende uma Técnica de Combate e uma Técnica Auxiliar. Aprende Técnicas novamente no 3º, 6º, 9º, 12º, 16º e 20º nível."
      },
      {
        "level": 1,
        "name": "Mestre das Armas",
        "desc": "Com ação bônus, guarda duas armas e saca outras duas. Recebe uma Aptidão Bélica com duas características para armas específicas. Escolhe mais três Aptidões Bélicas no 5º e 11º níveis."
      },
      {
        "level": 2,
        "name": "Músculos e Cérebro",
        "desc": "Jogadas de ataque comum podem usar modificador de Sabedoria. Cria ligação entre Sabedoria-Força ou Sabedoria-Destreza: usa o maior valor entre eles em Testes de Atributo e Salvaguardas."
      },
      {
        "level": 3,
        "name": "Especialista em Combate",
        "desc": "Escolhe dois Efeitos Especiais para modificar Técnicas (Cirúrgica, Extravagante, Escondida, Insistente, Otimizada, Veloz). Adquire mais dois no 6º e 9º nível. Pode combinar dois efeitos (3 usos por descanso curto/longo)."
      },
      {
        "level": 5,
        "name": "Doutrinamento",
        "desc": "Ataque de Oportunidade Estratégico, Camuflagem com Destreza/Sabedoria (vantagem), Aprendizado Impetuoso (Treinamento Geral grátis), Sentido de Perigo (vantagem em Salvaguardas de Destreza)."
      },
      {
        "level": 7,
        "name": "Ataque Extra",
        "desc": "Pode atacar duas vezes, em vez de uma, ao usar a ação Atacar durante o turno."
      },
      {
        "level": 6,
        "name": "Ordens Táticas",
        "desc": "Substitui Ação Poderosa para ordenar um aliado. Se bem-sucedido, ganha Ponto de Ordem (+1 ataque, dano e +1 dado de dano em Técnicas). Máximo de Pontos = Bônus de Proficiência."
      },
      {
        "level": 7,
        "name": "Potencializador",
        "desc": "Margem de acerto crítico 19-20 (18-20 no 12º nível). Em crítico: ganha Ponto de Ordem e impõe efeito (dano extra 1d8, vantagem contra, ou desvantagem ao alvo)."
      },
      {
        "level": 10,
        "name": "Especialista em Estratégias",
        "desc": "Não pode ser surpreendido. Pode usar reação para ser o primeiro na iniciativa e realizar dois turnos consecutivos."
      },
      {
        "level": 19,
        "name": "Super Soldado",
        "desc": "Entra em transe de batalha (5 minutos): imune a Exaustão, deslocamento 18m, recupera 12d10 PV e 4d6 PP por turno, +5 em Testes e Salvaguardas, CR 30. Uso: 1x por descanso curto/longo."
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Genkotsu Meteor",
        "cost": 2,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "m",
        "desc": "Lança objetos do tamanho de bola de canhão/pedras em alta velocidade até 15m (Linha). Se objeto tem dano próprio, prevalece o maior. Ryusei Ken (nível 6): 6d10 contundente, 27m, 5 PP."
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Great Impact",
        "cost": 4,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 3,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Golpe certeiro que empurra criatura Grande ou menor até 6m se falhar em Salvaguarda de Força. Se bater em objeto >1,5m, +2d8 dano extra."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Galaxy Divide",
        "cost": 1,
        "kind": "save",
        "damage": {
          "number": 1,
          "die": 6,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Onda de choque em esfera de 6m: Salvaguarda Destreza, todo dano se falhar ou metade se sucesso. Terreno difícil criado. Gastar 1 PP adiciona 1d6 dano (máx 6d6). Dano em estruturas dobrado."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Killer Bowling",
        "cost": 7,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 8,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "m",
        "desc": "Lança objetos médios/agarrados até 27m (Linha) em alta velocidade. Ou arremessa criatura voluntária até 120m. Dano conforme pouso/interferência (a critério do Narrador)."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Blue Hole",
        "cost": 10,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 10,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Agarra criatura Grande ou menor e arremessa ao chão, criando cratera 3m raio. Alvo excluído do combate até final 3º turno da criatura, inalcançável. Requer terra firme."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Infinitum Explosion",
        "cost": 12,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 9,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Golpe corpo a corpo que cria onda de choque em esfera 10,5m. Criaturas: Salvaguarda Destreza, 5d6 contundente se falhar ou metade se sucesso."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Galaxy Impact",
        "cost": 14,
        "kind": "save",
        "damage": {
          "number": 14,
          "die": 6,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Soco que distorce ar em cone 30m: Salvaguarda Destreza, 14d6 se falhar ou metade se sucesso. Terreno difícil criado. Ou ataque corpo a corpo 14d10 contundente (alvo fica Estremecido até final próximo turno). Dano em estruturas dobrado."
      }
    ],
    "subclasses": [
      {
        "key": "mestre_espadachim",
        "name": "Mestre Espadachim",
        "desc": "Especialização em armas de lâmina única (daito katana, katana, rapieira, sabre). Aprende técnicas de precisão e contraataque elegante.",
        "features": [
          {
            "level": 1,
            "name": "Ataque Estável",
            "desc": "+2 em jogadas de ataque comum corpo a corpo e +2 no dano com a arma."
          },
          {
            "level": 1,
            "name": "Golpe Inevitável",
            "desc": "Ao errar uma jogada de ataque (comum ou Técnicas), causa dano igual ao modificador de Sabedoria (desde que o dado não seja 1)."
          }
        ]
      }
    ]
  },
  {
    "code": "LUT",
    "key": "lutador",
    "name": "Lutador",
    "hd": "d12",
    "primary": [
      "str"
    ],
    "saves": [
      "str",
      "con"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 2,
    "skillPool": [
      "ath",
      "itm",
      "prv",
      "sur"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "Lutadores são encarnações da violência pura, combinando artes marciais ou confiando exclusivamente em força bruta. Com resistência sobre-humana e capacidade de recuperação sobrenatural, lutadores transcendem os limites do combate convencional, tornando-se praticamente impossível sair ileso de uma batalha contra eles. Seu corpo é uma arma, seus instintos aguçados e sua determinação inabalável.",
    "features": [
      {
        "level": 1,
        "name": "Combatente Selvagem",
        "desc": "Use uma ação bônus ao atacar desarmado corpo a corpo para aplicar movimentos especiais: <strong>Voadora</strong> (1d6 dano extra se mover 3m+ em linha reta; ou empurrar até 6m) | <strong>Golpe Baixo</strong> (1d6 dano + reduz deslocamento 3m, ou causa Caído) | <strong>Subjugador</strong> (aplica Agarrado em vez de dano)"
      },
      {
        "level": 2,
        "name": "Bom de Briga",
        "desc": "Ganhe: <strong>Mãos Letais</strong> (ataques desarmados recebem benefícios de arma marcial); <strong>Truque Sujo</strong> (1 no d20 = acerto crítico); <strong>Mão de Marreta</strong> (dano dobrado em estruturas); <strong>Power Grip</strong> (vantagem contra agarrados); <strong>Tiro de Meta</strong> (crítico 17-20 vs Caído). Por Proficiência × repouso: ignore crítico, ignore resistência ou rerrole falha de ataque corpo a corpo"
      },
      {
        "level": 3,
        "name": "Posições de Luta",
        "desc": "Assuma uma posição no início do turno: <strong>Castigo de Ferro</strong> (reação para atacar quando aliado sofre ataque; dano contundente 5+nível interrompe) | <strong>Descuidado</strong> (vantagem em ataque corpo a corpo, mas sofre vantagem) | <strong>Imparável</strong> (imune a redução movimento e Amedrontado/Atordoado/Letárgico/Sonolento) | <strong>Foco de Batalha</strong> (recupera 4 PP no próximo turno se sofrer 10+ dano) | <strong>Fanático</strong> (aplica Combatente Selvagem sem ação bônus) | <strong>Músculo de Aço</strong> (resistência a contundente/cortante/perfurante). Nível 6: 2 posições. Nível 10: 3 posições"
      },
      {
        "level": 6,
        "name": "Golpe Brutal",
        "desc": "Ao acertar crítico (comum ou Técnica) corpo a corpo, adicione dano extra igual ao seu nível. Role 1d8 para aplicar efeito: 1-3 Impactante (sal. Con ou sem reação/ação bônus até fim próximo turno); 4-5 Cegante (sal. Con ou desvantagem em ataques); 6-7 Desorientador (sal. Con ou sem ações); 8 Atordoante (sal. Con ou Atordoado). Ganhe Dados Brutais (quantidade = metade nível +mod For). Use até 3 por turno para aumentar ataque, dano ou curar PV"
      },
      {
        "level": 7,
        "name": "Ataque Extra",
        "desc": "Você pode atacar duas vezes em vez de uma ao usar a ação Atacar durante seu turno"
      },
      {
        "level": 10,
        "name": "Resistência Sobrenatural",
        "desc": "No final de cada um de seus turnos em batalha, ganhe PV temporários iguais a 2d10 + mod Con. Pode escolher manter os anteriores ou trocar pelos novos. Não recebe se Inconsciente"
      },
      {
        "level": 14,
        "name": "Espírito de Luta",
        "desc": "<strong>Vitalidade Inesgotável</strong>: Com menos de 50 PV, teste Con CD 16 para recuperar até 100 PV (CD +1 a cada repetição). <strong>Energia Inesgotável</strong>: Com menos de 10 PP, teste Con CD 12 para recuperar até 20 PP (3 usos/descanso longo). <strong>Vontade Inesgotável</strong>: Ao chegar a 0 PV sem morrer, recupere metade dos PV (1 uso/descanso curto ou longo)"
      },
      {
        "level": 19,
        "name": "Movimentos Lendários",
        "desc": "<strong>Pulo Heroico</strong>: Pule para qualquer espaço desocupado que veja (qualquer distância, sem dano de queda). <strong>One-Punch</strong>: Atingir criatura ND 10 ou menor reduz PV a 0. <strong>Devastação</strong>: Com mais de metade PV, seus golpes corpo a corpo destroem estruturas (muros, montanhas, embarcações não feitas de kairoseki), abrindo buracos"
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Overthrow",
        "cost": 2,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "touch",
        "desc": "Jogada de ataque corpo a corpo que joga criatura Grande ou menor contra o chão com força total. Alvo falha em sal. Con ou recebe Caído"
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Power Shoot",
        "cost": 4,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 3,
          "die": 10,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "str"
        },
        "rangeUnits": "touch",
        "desc": "Chute poderoso que empurra criatura Grande ou menor até 6m se falhar em sal. For. Se bater em objeto/estrutura > 1,5m raio, sofre 2d8 dano extra"
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Kick Course",
        "cost": 6,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 5,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Golpe de baixo para cima que lança inimigo até 15m de altura, mantendo-se no ar até fim próximo turno, caindo no turno seguinte. Alt: lança criatura voluntária Média ou menor até 30m sem dano direto"
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Kick Overdrive",
        "cost": 8,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 8,
          "die": 10,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "touch",
        "desc": "Inúmeros golpes contra criatura. Alvo falha em sal. Con ou perde metade deslocamento até fim próximo turno (ou até descanso longo se resultado < 8 + mod For)"
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Rotary Pain",
        "cost": 10,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 10,
          "die": 8,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "touch",
        "desc": "Agarra objeto/criatura Média por membro e gira corpo, acertando criaturas/objetos até 1,5m. Cada criatura sal. Dex: metade dano se falhar, nenhum se sucesso"
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Tekken",
        "cost": 12,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 9,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Ataque rápido e preciso contra criatura Atordoada (sem necessidade de sal.), causando Atordoado até fim próximo turno sem chance de errar"
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Berserker Barrage",
        "cost": 14,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 17,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Sequência longa de golpes poderosos contra criatura, excedendo limites comuns. Alt: ao chegar a 0 PV (sem morrer, sem Incapacitado), reação para usar grátis com dano 10d10 (causa 2 Exaustão após primeiro descanso, 1 uso/descanso longo)"
      }
    ],
    "subclasses": [
      {
        "key": "corpo_guerreiro",
        "name": "Corpo de Guerreiro",
        "desc": "Especialização que enfatiza a resistência e recuperação sobre-humana do Lutador. Um guerreiro que confia em sua constituição corpórea para suportar qualquer batalha, tornando-se um muro vivo de músculo e determinação.",
        "features": [
          {
            "level": 1,
            "name": "Resistência Corporal Aprimorada",
            "desc": "Você ganha resistência a dano Contundente, Cortante e Perfurante permanente desde o início. No 5º nível, essa resistência reduz qualquer dano desses tipos em 5 pontos adicionais"
          },
          {
            "level": 5,
            "name": "Recuperação Implacável",
            "desc": "Ao completar um descanso curto, recupere PV adicionais iguais a 2 × seu nível (além dos normais). Ao completar um descanso longo, recupere à máxima saúde automaticamente se ainda estiver vivo"
          }
        ]
      }
    ]
  },
  {
    "code": "NIN",
    "key": "ninja",
    "name": "Ninja",
    "hd": "d8",
    "primary": [
      "dex"
    ],
    "saves": [
      "dex",
      "wis"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 2,
    "skillPool": [
      "acr",
      "dec",
      "ste",
      "slt"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "Mestres de infiltração e assassinato, os Ninjas combinam furtividade mortal com artes ocultas. Especialistas em adentrar qualquer lugar silenciosamente, usam ninjutsus místicos e tradicionais para eliminar alvos com precisão, movendo-se através das sombras como se fossem parte delas.",
    "features": [
      {
        "name": "Yami no Kijin",
        "level": 1,
        "desc": "Você se torna um com as sombras em locais sem luz plena. Recebe <strong>Arauto das Sombras</strong> (reduz dano em 10, exceto verdadeiro, +1d6 dano psíquico nos ataques), <strong>Ocultação das Sombras</strong> (invisibilidade após 1 rodada sem ser visto), e <strong>Translocação das Sombras</strong> (teleporte até 21m uma vez por rodada sem ser visto)."
      },
      {
        "name": "Técnicas de Combate",
        "level": 1,
        "desc": "Aprende uma Técnica de Combate e uma Técnica Auxiliar no 1º nível e novamente no 3º, 6º, 9º, 12º, 16º e 20º nível."
      },
      {
        "name": "Ninjutsu",
        "level": 2,
        "desc": "Recebe Pontos de Ninjutsu (PN) iguais ao seu nível, recuperando ao descansar. Escolhe entre <strong>Ninjutsu Místico</strong> (Futon, Katon, Raiton) ou <strong>Ninjutsu Tradicional</strong> (escapismo, fuga, furtividade, movimentação). No 8º nível, recebe o outro conjunto ou +10 PN."
      },
      {
        "name": "Assassinar",
        "level": 3,
        "desc": "Uma vez por rodada, adiciona 3d4 de dano extra contra uma criatura atingida com vantagem (ou sem vantagem se outro inimigo estiver a 1,5m). O dano extra aumenta conforme o nível (5º nível = 5d4, por exemplo)."
      },
      {
        "name": "Nindo",
        "level": 5,
        "desc": "Escolhe um caminho filosófico marcial: <strong>Assassino</strong> (armadilhas mortais, dano mortal automático), <strong>Desastre da Natureza</strong> (dano elemental em cone), ou <strong>Honrado</strong> (defesa adicional contra danos)."
      },
      {
        "name": "Equipamento Ninja",
        "level": 6,
        "desc": "Veste especial que aumenta dados de dano para d10, margem crítica 19-20, escalada sem custo, permanência em superfícies verticais, saltos aumentados e reroll de ataques errados."
      },
      {
        "name": "Velocidade Ofensiva",
        "level": 7,
        "desc": "Realiza dois ataques ao usar Atacar. Pode gastar ação bônus para ataque adicional após cada ataque comum."
      },
      {
        "name": "Agilidade Shinobi",
        "level": 10,
        "desc": "Na iniciativa de combate, pode ser o primeiro e realizar dois turnos seguidos. Se surpreendido, joga iniciativa com vantagem."
      },
      {
        "name": "Corpo das Sombras",
        "level": 11,
        "desc": "Com metade dos PV e sem exaustão, ataques à distância falham automaticamente. Pode apanhar projéteis e relançá-los como dano de Assassinar."
      },
      {
        "name": "Mestre Ninja",
        "level": 18,
        "desc": "Distribui 6 pontos livremente entre atributos (máx 24). Pode elevar dois atributos até 30."
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Ninpo – Raisen no Jutsu",
        "cost": 2,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 8,
          "type": "lightning"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Libera corrente elétrica em linha de até 9m comprimento e 1,5m largura. Criatura faz salvaguarda de Destreza, sofrendo todo dano se falhar ou metade se sucesso."
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Ninpo – Ryuka no Jutsu",
        "cost": 3,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 4,
          "die": 6,
          "type": "fire"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Cuspe bola de fogo em cone de até 15m. Criatura faz salvaguarda de Destreza, sofrendo todo dano se falhar ou metade se sucesso."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Hana Shuriken",
        "cost": 6,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 1,
          "die": 6,
          "type": "piercing"
        },
        "rangeUnits": "m",
        "desc": "Lança 6 shurikens sem chance de errar em uma linha até 21m, atingindo criaturas múltiplas ou uma única. Cada shuriken causa dano perfurante. Requer 6 shurikens como componente."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Ninpo – Kazekiri no Jutsu",
        "cost": 6,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 8,
          "die": 10,
          "type": "slashing"
        },
        "rangeUnits": "m",
        "desc": "Libera ventos cortantes contra criatura em ataque à distância até 27m em linha. Causa dano cortante e ataque combinado é possível."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Ninpo – Goukakyuu no Jutsu",
        "cost": 8,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 5,
          "die": 6,
          "type": "fire"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Bola de fogo em ponto escolhido até 33m, criando fogo de 9m raio por até 1 minuto. Criatura faz salvaguarda de Destreza com desvantagem ao entrar ou iniciar turno na área. Todo dano se falhar, metade se sucesso."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Ninpo – Kintama-Tsubushi",
        "cost": 12,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 6,
          "die": 10,
          "type": "bludgeoning"
        },
        "save": {
          "targetAbility": "con"
        },
        "rangeUnits": "m",
        "desc": "Arremessa objeto até 39m automaticamente acertando. Alvo recebe dano contundente e condição Atordoado por até 1 minuto. Alvo faz salvaguarda de Constituição no final de cada turno para encerrar atordoamento. Ataque combinado impossível."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Ninpo – Kanashibari no Jutsu",
        "cost": 14,
        "kind": "save",
        "attackType": "ranged",
        "save": {
          "targetAbility": "int"
        },
        "rangeUnits": "m",
        "desc": "Escolhe criatura até 9m para impor Paralisado sem salvaguarda, durando com concentração. Você também fica Paralisado. Pode encerrar a qualquer momento. Você faz salvaguarda de Vontade no final de cada turno (CD aumenta +1 para cada 10 PV perdido) para manter. Ataque combinado impossível."
      }
    ],
    "subclasses": [
      {
        "key": "assassino",
        "name": "Assassino",
        "desc": "Caminho focado em eliminar alvos com precisão letal. Especialista em armadilhas mortais e ataques que culminam em morte instantânea. Enquanto no Estado Sombrio, recebe +3 nas jogadas de ataque e +5 em dano.",
        "features": [
          {
            "name": "Armadilha Mortal",
            "level": 5,
            "desc": "Gasta 4 PN para capturar criatura que não o vê. Alvo fica Paralisado por até 1 minuto ou até sofrer dano. Criatura com menos de 50 PV ou ND inferior ao seu é eliminada automaticamente ao estar a 1,5m."
          },
          {
            "name": "Dano Mortal",
            "level": 5,
            "desc": "Ao usar Assassinar, se PV restantes forem iguais ou menores que quantidade de dados, criatura tem PV reduzido a 0 automaticamente."
          }
        ]
      }
    ]
  },
  {
    "code": "OKA",
    "key": "okama-kenpo",
    "name": "Okama Kenpo",
    "hd": "d10",
    "primary": [
      "str",
      "cha"
    ],
    "saves": [
      "dex",
      "cha"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 3,
    "skillPool": [
      "acr",
      "ath",
      "prf",
      "dec",
      "itm",
      "ins",
      "prv"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "Okama Kenpo é um estilo de luta gracioso que mistura os movimentos, elasticidade, leveza e disciplina do balé com a força destrutiva, velocidade e golpes do caratê. Guerreiros rápidos e resistentes que conseguem proteger seus amigos e aguentar golpes por eles, sempre em movimento com passos suaves e imprevisíveis.",
    "features": [
      {
        "level": 1,
        "name": "Técnicas de Combate",
        "desc": "Aprende uma Técnica de Combate e uma Técnica Auxiliar. Aprende novamente no 3º, 6º, 9º, 12º, 16º e 20º nível. CD das Técnicas = 8 + Bônus de Proficiência + modificador de Presença."
      },
      {
        "level": 1,
        "name": "Protegendo um Amigo",
        "desc": "Ao ver um aliado a até 6 metros sendo alvo de ataque, pode usar reação para receber o ataque em seu lugar, reduzindo dano em 1d12 + nível (aumenta para 2d12 no 10º e 3d12 no 15º). Se reduzir dano completamente, pode contraatacar. Recebe 2 PP (4 se reduzir totalmente)."
      },
      {
        "level": 2,
        "name": "Ambiguidade",
        "desc": "Okama Dash: deslocamento de 12m (15m no 10º). Resistência Okama: recupera 1d6 PV (1d12 no 10º) quando sofre dano contundente. Brutalidade Graciosa: pode usar Presença em vez de Força em ataques corpo a corpo."
      },
      {
        "level": 3,
        "name": "Okama Way",
        "desc": "Gambaray: cura aliado em 3d12 PV ou remove Exaustão (1x por aliado). Poder da Amizade: recebe 10 PV temporários por aliado amigável (máx 60). Super Protetor: ataques contra aliados a 6m têm desvantagem. Amor Insistente: ação bônus para ataque corpo a corpo extra."
      },
      {
        "level": 7,
        "name": "Ataque Extra",
        "desc": "Pode atacar duas vezes em vez de uma ao usar a ação Atacar durante seu turno."
      },
      {
        "level": 10,
        "name": "Acerto Destruidor",
        "desc": "Gasta 1 PP para adicionar 1d8 de dano extra ao ataque (até 5d8 total). O golpe pode causar condições de Golpes Sensíveis se o alvo falhar em Salvaguarda de Constituição."
      },
      {
        "level": 14,
        "name": "Ballet Kenpo",
        "desc": "Ataques contra você têm desvantagem. Enquanto não receber dano, você e criaturas amigáveis a 9m ganham bônus em Salvaguardas igual a seu modificador de Presença."
      },
      {
        "level": 15,
        "name": "Makeup Armor",
        "desc": "Maquiagem absorve até 80 pontos de dano antes de quebrar (refaz em 1 hora). Concede imunidade a Atordoado e Envenenado, resistência a dano contundente/perfurante/cortante. Se molhada, se desfaz."
      },
      {
        "level": 19,
        "name": "Friends for Life",
        "desc": "Quando aliado recebe dano ou usa Protegendo um Amigo, recebe Pontos de Okama. Pode gastar 1 por rodada para aumentar ataque em +10, CR em +3, Salvaguarda em +5, Teste de Atributo em +10, ou dano em +15. Máx 10 Pontos por encontro."
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Death Wink",
        "cost": 2,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "m",
        "desc": "Piscadas criam rajadas de ar em ataque à distância até 9m. Sem desvantagem a 1,5m. Upgrade (6º nível): 3º Grau com 6d6 dano, Cone de 18m, custa 5 PP, todos na área fazem Salvaguarda de Destreza (metade se sucesso)."
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Ballet Chop",
        "cost": 4,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 4,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Golpe rápido no rosto em toque corpo a corpo. Alvo recebe desvantagem na próxima Salvaguarda até o final de seu próximo turno."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Bombardier",
        "cost": 6,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 6,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Série de ataques rápidos corpo a corpo com margem crítica 19-20. Upgrade (12º nível): 5º Grau com 9d10 dano, crítico 18-20, custa 10 PP."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Keri Pointe",
        "cost": 8,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 7,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Salto com duplo chute corpo a corpo. Se alvo não passar em Salvaguarda de Força, é empurrado até 9m. Se bater em objeto/estrutura com +1,5m de raio, sofre 3d8 extra."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Grand Fouetté: Ano Natsu no hi no Memoir",
        "cost": 10,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 8,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Ataque corpo a corpo girando o corpo. Se alvo tem 100 PV ou menos, recebe condição Estremecido por até 1 minuto (Salvaguarda de Constituição por turno). Ataque Combinado Impossível."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Ohikae na Fouetté",
        "cost": 12,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 9,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Cambalhota para trás com poderoso chute corpo a corpo. Alvo deve passar em Salvaguarda de Constituição ou recebe Atordoado até final de próximo turno. Ataque Combinado Impossível."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Newkama Kenpo Ogi – Mudade Shori Ken",
        "cost": 14,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 10,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Apunhaladas rápidas sobre-humanas em várias partes da cabeça. Alvo deve passar em Salvaguarda de Constituição ou fica Atordoado até final de próximo turno. Se sucesso, escolhe apenas mover, ação, ou ação bônus. Ataque Combinado Impossível."
      }
    ],
    "subclasses": [
      {
        "key": "protector-okama",
        "name": "Caminho do Protetor",
        "desc": "Okamas que se dedicam a proteger seus aliados e laços de amizade acima de tudo, utilizando sua graciosidade e força para interromper ataques contra seus companheiros.",
        "features": [
          {
            "level": 3,
            "name": "Escudo Humano",
            "desc": "Quando usar Protegendo um Amigo, pode gastar 1 Ponto de Poder adicional para aumentar a redução de dano em 1d12 e obter vantagem na jogada de ataque de retaliação."
          },
          {
            "level": 6,
            "name": "Círculo de Proteção",
            "desc": "Pode proteger múltiplos aliados simultaneamente dentro de 6 metros, distribuindo a redução de dano entre eles. Todos os aliados ganham +2 na Classe de Resistência enquanto estiverem nessa aura."
          }
        ]
      }
    ]
  },
  {
    "code": "ROK",
    "key": "rokushiki",
    "name": "Rokushiki",
    "hd": "d10",
    "primary": [
      "str",
      "dex"
    ],
    "saves": [
      "dex",
      "str"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 2,
    "skillPool": [
      "acr",
      "ath",
      "dec",
      "ste",
      "his",
      "inv"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "Rokushiki é a arte marcial suprema que transforma o corpo do usuário em uma arma completa. Aqueles que dominam completamente o rokushiki recebem a força de 100 homens. Essa técnica de combate reproduz em seus corpos as funções de armas, armaduras e veículos, tornando-os perfeitos para se virarem sozinhos em qualquer situação.",
    "features": [
      {
        "level": 1,
        "name": "6 Habilidades",
        "desc": "Você é iniciado em um treinamento árduo que lhe dá controle emocional e fortalece seu corpo. Pode refazer uma Salvaguarda falha até 3 vezes por descanso longo. Aprende Soru e Shigan no 1º nível, Tekkai e Rankyaku no 3º, Kamie e Geppo no 6º."
      },
      {
        "level": 1,
        "name": "Técnicas de Combate",
        "desc": "No 1º nível, você aprende uma Técnica de Combate e uma Técnica Auxiliar, detalhadas na tabela de Técnicas. Aprende novas Técnicas nos níveis 3º, 6º, 9º, 12º, 16º e 20º."
      },
      {
        "level": 2,
        "name": "Táticas",
        "desc": "Aprenda Aprendizado Rápido (2 perícias por dia com Bônus de Proficiência), Ataques Incapacitantes (cegar, surdecer ou emudecedor alvo), Caminho das Sombras (escalada, natação, sem penalidade de terreno difícil)."
      },
      {
        "level": 3,
        "name": "Arma Viva",
        "desc": "Escolha 2 de 5 características: Técnica Assassina, Execução Impecável, Fôlego Treinado, Ataque de Oportunidade Traiçoeiro, Reação Defensiva. Aprenda Habilidades Dominadas no 6º nível (usar 6 Habilidades sem gastar PP)."
      },
      {
        "level": 7,
        "name": "Ataque Extra",
        "desc": "Você pode atacar duas vezes, em vez de uma, ao usar a ação Atacar durante seu turno."
      },
      {
        "level": 10,
        "name": "Rokushiki Aperfeiçoado",
        "desc": "Escolha 3 Técnicas fundamentais para se especializar entre versões aperfeiçoadas de Soru, Shigan, Tekkai, Rankyaku, Kamie e Geppo, desbloqueando efeitos potenciados."
      },
      {
        "level": 15,
        "name": "Pontos de Rokushiki",
        "desc": "Toda Técnica de Rokushiki usada gera 1 Ponto de Rokushiki. Pode manter até metade do seu nível (arredondado para baixo). Use para ataques adicionais, dobrar deslocamento ou recuperar 30 PV."
      },
      {
        "level": 19,
        "name": "Arma de Massacre",
        "desc": "Alcance o pico do domínio: Vigor Inesgotável (Técnicas não consomem PP), Mestre das Técnicas (2 ações poderosas por turno), Movimentos Sônicos (ação/reação bônus adicional uma vez por rodada)."
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Tobu Shigan",
        "cost": 2,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "piercing"
        },
        "rangeUnits": "m",
        "desc": "Um Shigan aprimorado que libera uma rajada de ar ao estalar os dedos, executa uma jogada de ataque à distância contra um adversário."
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Rankyaku: Hakurai",
        "cost": 3,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 4,
          "die": 8,
          "type": "slashing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Libera um grande corte em linha reta. Criaturas na área fazem Salvaguarda de Destreza, sofrendo dano total ou metade."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Shigan: Oren",
        "cost": 6,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 5,
          "die": 10,
          "type": "piercing"
        },
        "rangeUnits": "touch",
        "desc": "Vários Shigan em ataque corpo a corpo. Alvo falha em Constituição não pode fazer reações até final do próximo turno. No turno seguinte, deve escolher mover-se, agir ou ação bônus."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Rankyaku: Amanedachi",
        "cost": 8,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 8,
          "die": 6,
          "type": "slashing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Girar o corpo para criar um Rankyaku que cobre grande área com você como origem. Salvaguarda de Destreza, dano total ou metade. Dobro de dano em estruturas."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Rokushiki Ogi – Rokuougan",
        "cost": 8,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 10,
          "die": 10,
          "type": "lightning"
        },
        "rangeUnits": "touch",
        "desc": "Apenas para mestres do Rokushiki. Coloca punhos na frente do alvo e lança onda de choque devastadora em ataque corpo a corpo."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Shugan",
        "cost": 12,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 4,
          "die": 10,
          "type": "piercing"
        },
        "rangeUnits": "touch",
        "desc": "Forma ofensiva definitiva do Shigan com a mão inteira. Ao final de cada turno do alvo, deve passar em Constituição ou receber 2d8 de dano Verdadeiro, ou usar ação para cobrir o ferimento. Dura 1 minuto ou até tratamento."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Rokushiki Ogi – Sai Dai Rin: Rokuogan",
        "cost": 13,
        "kind": "save",
        "attackType": "ranged",
        "damage": {
          "number": 14,
          "die": 6,
          "type": "force"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Aprimoramento final da Técnica suprema. Libera onda de choque poderosa contra inimigos em cone de 30m. Salvaguarda de Destreza para dano total ou metade. Dobro de dano em estruturas."
      }
    ],
    "subclasses": [
      {
        "key": "seis-habilidades",
        "name": "Caminho das Seis Habilidades",
        "desc": "Especialize-se no domínio completo das seis técnicas fundamentais do Rokushiki: Soru (velocidade explosiva), Shigan (ataque perfurante), Tekkai (endurecimento corporal), Rankyaku (cortes de ar), Kamie (esquiva ágil) e Geppo (deslocamento aéreo). No 6º nível, Habilidades Dominadas permite usar essas técnicas sem gastar PP sob certas condições.",
        "features": [
          {
            "level": 1,
            "name": "Domínio Progressivo",
            "desc": "Ao escolher esse caminho, sua proficiência com as 6 Habilidades fundamentais aumenta. No nível 1º aprenda Soru e Shigan, no 3º Tekkai e Rankyaku, no 6º Kamie e Geppo, desbloqueando versões aperfeiçoadas."
          },
          {
            "level": 6,
            "name": "Habilidades Dominadas",
            "desc": "Enquanto tiver mais da metade dos PV, PP e nenhum Nível de Exaustão, pode usar as 6 Habilidades sem gastar Pontos de Poder. Antes do nível 10, essas Técnicas não podem ter dados de dano aumentados."
          }
        ]
      }
    ]
  },
  {
    "code": "SAM",
    "key": "samurai",
    "name": "Samurai",
    "hd": "d10",
    "primary": [
      "str",
      "dex"
    ],
    "saves": [
      "con",
      "int"
    ],
    "weapons": [
      "sim",
      "mar"
    ],
    "skillCount": 2,
    "skillPool": [
      "itm",
      "ins",
      "prc",
      "sur"
    ],
    "asiLevels": [
      4,
      8,
      12,
      16,
      19
    ],
    "description": "Os samurais são os guerreiros honrados do país de Wano, conhecidos em todo o mundo pelo seu código de honra, disciplina e maestria no combate com armas cortantes. Movidos por lealdade absoluta e orgulho inabalável, eles combinam técnica precisa com força devastadora, utilizando uma variedade de armas tradicionais para executar Técnicas de Combate lendárias que cortam através da realidade mesma.",
    "features": [
      {
        "level": 1,
        "name": "Armamento Samurai",
        "desc": "Proficiência em armas especiais (Arco, Daito Katana, Foice, Kanabo, Katana, Lança, Nodachi, Pistola, Shikomizue). Margem de crítico 19-20, +1d6 dano extra uma vez por turno. Escolhe um Ryu (estilo de dano) que modifica o dano adicional."
      },
      {
        "level": 1,
        "name": "Técnicas de Combate",
        "desc": "Aprende uma Técnica de Combate (Grau 1) e uma Técnica Auxiliar no 1º nível, com mais aprendizagens nos níveis 3º, 6º, 9º, 12º, 16º e 20º."
      },
      {
        "level": 2,
        "name": "Juramento",
        "desc": "Faz um voto sagrado escolhendo entre Juramento da Proteção (Medicina Holística), Juramento de Vingança (Ódio Motivacional) ou Juramento do Dever (Ataque Determinado). Não pode ser alterado após escolha."
      },
      {
        "level": 3,
        "name": "Bushido",
        "desc": "Escolhe um Caminho de Bushido: Vassalo (bônus +2 em ataques comuns), Ronin (oportunista em reações) ou Shogun (força admirável). Pode ser refeita a cada nível."
      },
      {
        "level": 5,
        "name": "Concentração Total",
        "desc": "Induz estado de foco absoluto por 1 minuto onde rolagens 9 ou menor (ataques, testes, salvaguardas) são consideradas 10. Usável 1x e recupera ao descanso longo (3x no 12º nível)."
      },
      {
        "level": 7,
        "name": "Ataque Extra",
        "desc": "Pode atacar duas vezes, em vez de uma, ao usar a ação Atacar durante seu turno."
      },
      {
        "level": 10,
        "name": "Combate Elegante",
        "desc": "Demonstra maestria em batalha: Guarda Orgulhosa (recupera 2d8 PV ao sofrer dano de Técnica ou crítico), Ignorar a Dor (ignora dano crítico 3x por encontro), Combate Honroso (bônus para ataques normais e CR)."
      },
      {
        "level": 14,
        "name": "Fúria Indomável",
        "desc": "Durante Concentração Total: resistência contra qualquer dano (exceto Verdadeiro), 80 PV temporários e movimento não pode ser reduzido."
      },
      {
        "level": 15,
        "name": "Orgulho Inquebrável",
        "desc": "Imune a doenças, venenos, exaustão nível 5 ou menor, Ferimentos Graves e Feridas Brutais. Mantém honra inabalável contra o desconforto."
      },
      {
        "level": 19,
        "name": "Sunacchi",
        "desc": "Ao chegar a 0 PV, joga 3d6 + modificador de Vontade para agir mais turnos antes de cair inconsciente. Sob efeitos de Concentração Total e Fúria Indomável, com +2 ataques extras e dano dobrado."
      }
    ],
    "tecnicas": [
      {
        "level": 1,
        "grau": 1,
        "name": "Kiri Zutsumi",
        "cost": 2,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 2,
          "die": 10,
          "type": "slashing"
        },
        "rangeUnits": "m",
        "desc": "Dispara um corte voador contra uma criatura à distância. A próxima jogada de ataque da criatura atingida receberá desvantagem. Em 6º nível, pode usar como 3º Grau (6d10 cortante, alcance 15m, custa 5 PP)."
      },
      {
        "level": 3,
        "grau": 2,
        "name": "Zansetsu-Gama",
        "cost": 3,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 4,
          "die": 6,
          "type": "slashing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Libera vários cortes em forma de foices circulares em um cone. Salvaguarda de Destreza: falha sofre dano total, sucesso metade."
      },
      {
        "level": 6,
        "grau": 3,
        "name": "Gun Modoki",
        "cost": 6,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 6,
          "die": 10,
          "type": "bludgeoning"
        },
        "rangeUnits": "touch",
        "desc": "Lança-se contra criatura com lâmina projetada em golpe poderoso. Criatura atingida faz Salvaguarda de Força ou recebe condição Caído."
      },
      {
        "level": 9,
        "grau": 4,
        "name": "Amano-Gawa",
        "cost": 6,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 8,
          "die": 6,
          "type": "slashing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "m",
        "desc": "Golpe circular poderoso que atinge tudo ao redor em raio de 9 metros. Salvaguarda de Destreza: falha sofre dano total, sucesso metade."
      },
      {
        "level": 12,
        "grau": 5,
        "name": "Togen Shirataki",
        "cost": 8,
        "kind": "attack",
        "attackType": "ranged",
        "damage": {
          "number": 10,
          "die": 10,
          "type": "slashing"
        },
        "rangeUnits": "m",
        "desc": "Libera onda cortante de grande alcance contra criatura à distância (33 metros em linha). Requer 2 Armas Cortantes."
      },
      {
        "level": 16,
        "grau": 6,
        "name": "Dohatsu Kohai",
        "cost": 9,
        "kind": "save",
        "attackType": "melee",
        "damage": {
          "number": 12,
          "die": 8,
          "type": "piercing"
        },
        "save": {
          "targetAbility": "dex"
        },
        "rangeUnits": "touch",
        "desc": "Rápido saque libera cortes perfurantes ao redor (até 1,5m). Salvaguarda de Destreza: falha sofre dano total, sucesso metade."
      },
      {
        "level": 20,
        "grau": 7,
        "name": "Togen Totsuka",
        "cost": 14,
        "kind": "attack",
        "attackType": "melee",
        "damage": {
          "number": 13,
          "die": 10,
          "type": "slashing"
        },
        "rangeUnits": "touch",
        "desc": "Técnica mais poderosa: corte em formato X corpo a corpo. Criatura recebe condição Sangramento sem salvaguarda, sofrendo dano em dobro."
      }
    ],
    "subclasses": [
      {
        "key": "samurai_vassalo",
        "name": "Caminho do Vassalo",
        "desc": "O caminho daquele que possui algo ou alguém importante para proteger. Um samurai vassalo é devotado absoluto, oferecendo sua espada e vida por seu mestre, buscando honra através da lealdade eterna e da proteção incansável de seus aliados.",
        "features": [
          {
            "level": 3,
            "name": "Promessa Nobre",
            "desc": "Suas jogadas de ataque comum com armas de samurai recebem +2 para acertar."
          },
          {
            "level": 5,
            "name": "Devoção Cumprida",
            "desc": "Ao errar uma jogada de ataque (comum ou Técnicas), você pode escolher ter sucesso no lugar. Usável 1x até descanso curto ou longo."
          }
        ]
      }
    ]
  }
];

export const SPECIES = [
  {
    "code": "ANO",
    "key": "dwarf",
    "name": "Anões",
    "walk": 9,
    "swim": 4.5,
    "climb": 0,
    "fly": 0,
    "darkvision": 0,
    "asi": true,
    "size": "tiny",
    "description": "<p>Pequenas criaturas semelhantes aos humanos, com tamanho entre 10-15 centímetros. Possuem caudas peludas, cabeças grandes proporcionalmente e narizes pontudos. Naturalmente fortes apesar do tamanho diminuto, originários da Tribo Tontatta de Green Bit.</p>",
    "traits": [
      {
        "name": "Corpo Pequeno",
        "desc": "<p><strong>Estômago Pequeno:</strong> Itens consumíveis para criaturas Médias funcionam em metade da quantidade. <strong>Piscar:</strong> Desaparecer e reaparecer a até 9 metros de distância (3x por descanso longo). <strong>Andar das Fadas:</strong> Vantagem em Testes de Destreza (Furtividade) fora de combate; podem se esconder a plena vista em combate com ação bônus. <strong>Hóspede Feérico:</strong> Ocupar o mesmo espaço de criaturas maiores, imune a ataques direcionados mas sofrem metade do dano da criatura hospedeira.</p>"
      },
      {
        "name": "Ingenuidade Anormal",
        "desc": "<p>Recebem -10 em Testes de Atributo de Vontade (Intuição). Muito crédulos e acreditam facilmente em qualquer pessoa suspeita.</p>",
        "effects": [{ "skill": "ins", "bonus": -10 }]
      },
      {
        "name": "Manufatura Reduzida",
        "desc": "<p>Capazes de produzir armas em tamanho reduzido com custo de 1/5 do normal. Armas de fogo ou à distância têm dano reduzido pela metade.</p>"
      }
    ]
  },
  {
    "code": "CEL",
    "key": "celestial",
    "name": "Celestiais",
    "walk": 12,
    "swim": 3,
    "climb": 0,
    "fly": 0,
    "darkvision": 0,
    "asi": true,
    "description": "<p>Idênticos aos humanos com pequenas asas (até 70 cm) nas costas, puramente estéticas. Entre 1,5-2,5 metros de altura. Originários das ilhas do céu a 10.000 metros acima do nível do mar, com três tribos principais: Birkans, Shandians e Skypeans.</p>",
    "traits": [
      {
        "name": "Herança Cultural",
        "desc": "<p>Proficiente em todos os tipos de dials. Recebem 3 dials cotidianos e 1 dial bélico. Escolhem 2 perícias para proficiência (exceto Sobrenatural e Sorte) ou podem receber a Singularidade 'Haki da Observação Inato' com 15 Pontos de Ambição.</p>",
        "skillChoice": { "count": 2, "exclude": ["arc", "luc"] }
      },
      {
        "name": "Anjos Caídos",
        "desc": "<p>Recebem -2 em Testes de Destreza (Acrobacia) em altitudes inferiores a 5.000 metros do nível do mar, afetados pela distorção de equilíbrio em atmosferas mais densas.</p>",
        "effects": [{ "skill": "acr", "bonus": -2 }]
      }
    ],
    "variants": [
      { "key": "birkans", "name": "Birkans", "desc": "<p><strong>Sacerdote Celestial:</strong> O celestial recebe +5 em Testes de Atributo de Presença (Atuação).</p>", "effects": [{ "skill": "prf", "bonus": 5 }] },
      { "key": "shandians", "name": "Shandians", "desc": "<p><strong>Guerreiro Celestial:</strong> O celestial recebe +5 em Testes de Atributo de Força (Atletismo).</p>", "effects": [{ "skill": "ath", "bonus": 5 }] },
      { "key": "skypeans", "name": "Skypeans", "desc": "<p><strong>Diplomata Celestial:</strong> O celestial recebe +5 em Testes de Atributo de Presença (Persuasão).</p>", "effects": [{ "skill": "per", "bonus": 5 }] }
    ]
  },
  {
    "code": "GIG",
    "key": "giant",
    "name": "Gigantes",
    "walk": 9,
    "swim": 3,
    "climb": 0,
    "fly": 0,
    "darkvision": 0,
    "asi": true,
    "size": "huge",
    "description": "<p>Humanoides colossos com 13-20 metros de altura, pesando 15-45 toneladas. Possuem proporções exageradas e traços faciais mais acentuados. Originários principalmente da ilha Elbaf, conhecidos por sua honra, orgulho guerreiro e código de combate nobre.</p>",
    "traits": [
      {
        "name": "Força Colossal",
        "desc": "<p>Proficiente em Salvaguardas e Testes de Força, dobrando o Bônus de Proficiência. Características e Técnicas limitadas a criatures Grandes ou menores também afetam alvos Enormes.</p>",
        "grants": ["saves:str"]
      },
      {
        "name": "Corpo Assustador",
        "desc": "<p>Recebem +2 em Testes de Presença (Intimidação) devido à presença naturalmente impositiva.</p>",
        "effects": [{ "skill": "itm", "bonus": 2 }]
      },
      {
        "name": "Necessidades Gigantescas",
        "desc": "<p>Requerem 5 vezes mais alimento e líquido que humanos e ocupam espaço de 20 tripulantes em navio. Devem usar armas gigantescas (10x o custo normal).</p>"
      }
    ]
  },
  {
    "code": "HUM",
    "key": "human",
    "name": "Humanos",
    "walk": 9,
    "swim": 4.5,
    "climb": 0,
    "fly": 0,
    "darkvision": 0,
    "asi": true,
    "description": "<p>A espécie mais comum e diversificada, com altura entre 1,5-4 metros. Extraordinariamente adaptáveis e resilientes, espalhados por todo o mundo sob o domínio do Governo Mundial. Representam a maior pluralidade de culturas, aparências e filosofias.</p>",
    "traits": [
      {
        "name": "Adaptação",
        "desc": "<p>Escolhem 3 perícias para adicionar proficiência (exceto Haki, Sobrenatural e Sorte). Alternativa: receber 1 perícia extra com o benefício 'Aptidão Natural' (dobram o Bônus de Proficiência em uma perícia).</p>",
        "skillChoice": { "count": 3, "exclude": ["Cont", "arc", "luc"] }
      },
      {
        "name": "Aspectos Humanos",
        "desc": "<p>Devem escolher uma das seguintes falhas de caráter: Ganância (-2 em testes com tesouro), Gula (dobro de consumo), Inveja (-2 após falhas alheias), Ira (falha automática em Provocação), Luxúria (+2 contra atração), Preguiça (dobro de tempo de descanso), Orgulho (-1 em Presença).</p>"
      }
    ],
    "variants": [
      { "key": "humanos-comuns", "name": "Humanos Comuns", "desc": "<p><strong>Aptidão Natural:</strong> Você escolhe uma perícia na qual possa usar o seu Bônus de Proficiência e dobra o seu Bônus de Proficiência.</p>", "skillChoice": { "count": 1, "mode": "expertise" } },
      { "key": "humanozarroes", "name": "Humanozarrões", "desc": "<p><strong>Colosso:</strong> Seu tamanho aumenta para Grande e você recebe +2 em Salvaguardas de Força.</p>", "effects": [{ "size": "lg" }, { "save": "str", "bonus": 2 }] },
      { "key": "bracos-longos", "name": "Tribo Braços Longos", "desc": "<p><strong>Braços Especiais:</strong> Recebe alcance de 3 metros em jogadas de ataque (comum) corpo a corpo, quando utilizando os braços, e recebe +2 em Testes de Atributo de Destreza (Prestidigitação).</p>", "effects": [{ "skill": "slt", "bonus": 2 }] },
      { "key": "kujas", "name": "Tribo Kujas", "desc": "<p><strong>Cobra Companheira:</strong> Toda kuja recebe em seu nascimento uma cobra para acompanhá-la por toda a sua vida. Você escolhe o nome da cobra e ela entende tudo o que você falar, podendo realizar pequenas tarefas. Ela não recebe dano de nenhuma jogada de ataque (comum ou Técnicas) ou Salvaguarda que não a tenha explicitamente como alvo do atacante. Ela é totalmente obediente a você e, em combate, age no mesmo turno que você (usa a ficha \"Cobra Bélica\").</p><p>Uma vez durante o seu turno e sem gastar ações, você pode dar ordens à sua cobra:</p><ul><li><strong>Arco de Cobra:</strong> a cobra assume o formato de um arco e você pode usar flechas para fazer uma jogada de ataque (comum ou Técnicas) à distância com arma, podendo adicionar o Bônus de Proficiência na jogada de ataque (comum), alterar o modificador da jogada de ataque (comum ou Técnicas) e de dano para o seu atributo primário, e recebendo +2 nas jogadas de ataque (comum) e de dano.</li><li><strong>Restringir:</strong> a cobra se prende nos membros de uma criatura Grande ou menor, tornando-se algemas duras como aço; a criatura fica com a condição \"Incapacitado\" ou \"Agarrado\" e pode tentar encerrá-la com uma Salvaguarda de Força CD 16 no início de cada turno. Para isso, a cobra deve acertar uma jogada de ataque (comum) corpo a corpo, substituindo o dano por essa característica, e fica com a condição \"Impedido\" até encerrar o agarramento.</li></ul>" },
      { "key": "pernas-longas", "name": "Tribo Pernas Longas", "desc": "<p><strong>Pernas Especiais:</strong> Alcance de 3 metros em jogadas de ataque (comum) corpo a corpo, quando utilizando as pernas, e seu deslocamento normal se torna 12 metros.</p>", "effects": [{ "move": "walk", "value": 12 }] },
      { "key": "pescoco-de-cobra", "name": "Tribo Pescoço de Cobra", "desc": "<p><strong>Pescoço Esticado:</strong> Alcance de 3 metros em jogadas de ataque (comum) corpo a corpo, quando utilizando a cabeça, e +2 em Testes de Atributo de Vontade (Percepção) que dependam da visão.</p>", "effects": [{ "skill": "prc", "bonus": 2 }] },
      { "key": "tres-olhos", "name": "Tribo dos 3 Olhos (Três Olhos)", "desc": "<p><strong>Abrir os Olhos:</strong> O uso do terceiro olho possui uma conexão mística com o destino. Como resultado, você recebe proficiência em Testes de Atributo de Vontade — escolha entre Haki, Sobrenatural ou Sorte.</p>", "skillChoice": { "count": 1, "pool": ["Cont", "arc", "luc"] } }
    ],
    "flaws": [
      { "name": "Aspecto: Ganância", "desc": "<p>Recebe -2 em Testes de Atributo que envolvam tesouros, riquezas ou negociações por dinheiro.</p>" },
      { "name": "Aspecto: Gula", "desc": "<p>Consome o dobro de comida e bebida em relação a um humano comum.</p>" },
      { "name": "Aspecto: Inveja", "desc": "<p>Recebe -2 em Testes de Atributo na sequência de um sucesso ou falha notável de um aliado.</p>" },
      { "name": "Aspecto: Ira", "desc": "<p>Falha automaticamente ao tentar resistir a Testes de Provocação feitos contra você.</p>" },
      { "name": "Aspecto: Luxúria", "desc": "<p>Criaturas recebem +2 em tentativas de seduzir ou atrair você.</p>" },
      { "name": "Aspecto: Preguiça", "desc": "<p>Requer o dobro de tempo para se beneficiar de um descanso.</p>" },
      { "name": "Aspecto: Orgulho", "desc": "<p>Recebe -1 em Testes de Atributo de Presença.</p>" }
    ]
  },
  {
    "code": "LUN",
    "key": "lunarian",
    "name": "Lunarianos",
    "walk": 9,
    "swim": 3,
    "climb": 0,
    "fly": 0,
    "darkvision": 0,
    "asi": true,
    "description": "<p>Espécie exótica com pele morena, cabelos brancos e asas negras (semelhante aos Birkans). Entre 1,8-5 metros de altura. Possuem uma esfera de fogo constantemente queimando atrás das costas e nuca. Originários do 'Reino dos Deuses' na Red Line, quase extintos pelo Governo Mundial.</p>",
    "traits": [
      {
        "name": "Heat",
        "desc": "<p>Uma vez por rodada, adicionar 1d10 de dano de Fogo em jogada de ataque (1x nível do personagem por descanso). Alternativamente, usar sem ação bônus 5 vezes (limitado por nível). Máximo 1 uso por rodada.</p>"
      },
      {
        "name": "Manipulação do Fogo",
        "desc": "<p>Enquanto o fogo nas costas se mantém: resistência a dano de fogo, iluminam até 6 metros com luz plena, podem manipular uma esfera de fogo a até 6 metros causando 1d4 de dano de fogo ao contato com criaturas ou combustão em objetos.</p>",
        "effects": [{ "resist": "fire" }]
      },
      {
        "name": "Cabeça à Prêmio",
        "desc": "<p>Governo Mundial busca capturar ou exterminar qualquer lunariano. Se mostrar aparência em público, há chance de aparecer um grupo do Governo/Marinha para captura no dia seguinte.</p>"
      }
    ]
  },
  {
    "code": "MNK",
    "key": "mink",
    "name": "Minks",
    "walk": 9,
    "swim": 4.5,
    "climb": 0,
    "fly": 0,
    "darkvision": 0,
    "asi": true,
    "description": "<p>Humanoides com características de mamíferos peludos (leões, coelhos, bodes, etc.). Altura entre 1,3-6 metros. Guerreiros naturalmente fortes com instintos animais pronunciados. Originários da ilha Zou, localizada no dorso de um elefante milenar chamado Zunesha.</p>",
    "traits": [
      {
        "name": "Electro",
        "desc": "<p>Uma vez por rodada, adicionar 1d10 de dano Elétrico em jogada de ataque (1x nível por descanso). Alternativamente, usar sem ação bônus 5 vezes (limitado por nível). Máximo 1 uso por rodada.</p>"
      },
      {
        "name": "Instintos Animalescos",
        "desc": "<p>Cada mink possui um objeto que causa perda de controle (ex: coelhos com cenoura). Devem fazer Salvaguarda de Vontade CD 15 ou ficam distraídos (Atordoado) por 1d4 turnos.</p>"
      },
      {
        "name": "Forma Sulong",
        "desc": "<p>Ao ver a lua cheia, os minks se transformam: dobram o deslocamento (metade dele podendo ser usado como voo), usam Electro sem limitação, mas ganham 1 Nível de Exaustão por minuto (ao atingir o 6º nível, ficam inconscientes).</p>"
      }
    ],
    "variants": [
      { "key": "ageis", "name": "Ágeis", "desc": "<p><strong>Corpo Leve:</strong> Seu deslocamento normal se torna 12 metros e seu deslocamento de escalada se torna 9 metros (caso receba outro deslocamento, prevalece o maior).</p>", "effects": [{ "move": "walk", "value": 12 }, { "move": "climb", "value": 9 }] },
      { "key": "meaos", "name": "Meãos", "desc": "<p><strong>Estamina Animal:</strong> Seu deslocamento normal se torna 18 metros (caso receba outro deslocamento, prevalece o maior).</p>", "effects": [{ "move": "walk", "value": 18 }] },
      { "key": "robustos", "name": "Robustos", "desc": "<p><strong>Pisada Firme:</strong> Seu deslocamento normal se torna 12 metros e não pode ser reduzido por terreno difícil (caso receba outro deslocamento, prevalece o maior).</p>", "effects": [{ "move": "walk", "value": 12 }] }
    ]
  },
  {
    "code": "MAR",
    "key": "sea_folk",
    "name": "Povo do Mar",
    "walk": 9,
    "swim": 15,
    "climb": 0,
    "fly": 0,
    "darkvision": 0,
    "asi": true,
    "description": "<p>Espécie aquática com dois subtipos: Homens-Peixe (humanoides com características marinhas) e Sirenos (aparência humana na parte superior, cauda de peixe abaixo). Entre 1,9-6 metros de altura. Originários da Ilha dos Homens-Peixe, 10.000 metros abaixo da superfície.</p>",
    "traits": [
      {
        "name": "Força Superior",
        "desc": "<p>Proficientes em Salvaguardas e Testes de Força, adicionando metade do Bônus de Proficiência (arredondado para baixo) a estes testes.</p>"
      },
      {
        "name": "Criatura do Mar",
        "desc": "<p>Respiram água e ar (brânquias se fecham no ar). Precisam de 2x mais água diária que humanos (4x em dias quentes) ou recebem Níveis de Exaustão.</p>"
      },
      {
        "name": "Ancestralidade",
        "desc": "<p>O Povo do Mar possui ancestralidade de criaturas marinhas, com até 2 Traços Comuns e 1 Traço Específico das Akuma no Mi Zoan.</p>"
      }
    ],
    "variants": [
      { "key": "homem-peixe", "name": "Homem-Peixe", "desc": "<p><strong>Corpo Marinho:</strong> De acordo com a criatura do mar que o personagem tenha como ancestral, o homem-peixe pode escolher 1 Traço Comum das Akuma no Mi Zoan (ignorando o requisito de forma original, híbrida ou animal), presentes no Capítulo 6, ou criadas pelo jogador, mas que devem ser aprovadas pelo Narrador.</p>" },
      { "key": "sireno", "name": "Sireno", "desc": "<p><strong>Natação Superior:</strong> Os sirenos recebem 18 metros de nado e podem usar a ação \"Disparada\" como ação bônus enquanto estiverem nadando.</p>", "effects": [{ "move": "swim", "value": 18 }] }
    ]
  },
  {
    "code": "MES",
    "key": "half_breed",
    "name": "Mestiços",
    "walk": 9,
    "swim": 4.5,
    "climb": 0,
    "fly": 0,
    "darkvision": 0,
    "asi": true,
    "description": "<p>Descendentes de duas espécies diferentes, combinando características genéticas únicas. Tamanho e características físicas variam conforme as espécies parentais. Limitados em alguns aspectos por não serem inteiramente de uma espécie, mas ganham versatilidade extraordinária.</p>",
    "traits": [
      {
        "name": "Dois Mundos",
        "desc": "<p>Escolhem 1 característica 'Ancestralidade' ou 'Traço Cultural' de uma das espécies parentais (se ambas tiverem a mesma, mantêm aquela).</p>"
      },
      {
        "name": "Miscigenação",
        "desc": "<p>Escolhem 1 'Benefício da Espécie' de cada uma das 2 espécies parentais (benefícios de Variantes contam como escolha). Escolhem 1 'Dificuldade da Espécie' entre as duas.</p>"
      },
      {
        "name": "Ancestralidade e Limitações de Treinamento",
        "desc": "<p>Mestiços com ancestrais animais (Mink/Homem-Peixe) escolhem até 2 Traços Comuns e 1 Traço Específico das Zoan, ou 'Predador' para carnívoros caçadores. Mestiços de espécies com listas de Treinamento diferentes aprendem apenas 1 treinamento de cada lista.</p>"
      }
    ]
  }
];


/* BACKGROUNDS — Capítulo 5 (Personalização), gerado a partir do livro */
export const BACKGROUNDS = [
  {
    "code": "amnesia",
    "key": "amnesia",
    "name": "Amnésia",
    "skills": [
      "inv",
      "ins",
      "prc",
      "his"
    ],
    "description": "<p>Seu passado é um vazio. Você não se lembra de quem era, de onde veio ou do que fez. Pode ter acordado em uma ilha desconhecida, sido resgatado à deriva ou simplesmente percebido que suas memórias haviam desaparecido.</p><p>Embora sua mente esteja em branco, seu corpo e seus instintos ainda carregam ecos do que você foi — habilidades, reflexos e conhecimentos que surgem sem explicação. Sua jornada é tanto uma aventura pelos mares quanto uma busca por respostas sobre sua própria identidade.</p><p><em>Aumento no Valor de Atributo recomendado: Sabedoria.</em></p>",
    "feature": {
      "name": "Ecos do Passado",
      "desc": "<p>Em momentos cruciais, fragmentos da sua antiga vida podem emergir. Uma vez por descanso longo, você pode pedir ao Narrador uma lembrança vaga, sensação instintiva ou conhecimento inesperado relacionado a uma situação atual. Para isso, faça um Teste de Atributo de Vontade (Sorte), com CD definida pelo Narrador.</p><p>Em caso de sucesso, você recebe uma informação útil, ainda que incompleta ou simbólica, sobre o que fazer ou evitar. Em uma falha, a lembrança é confusa ou enganosa.</p>",
      "uses": {
        "max": 1,
        "period": "lr"
      }
    }
  },
  {
    "code": "artista",
    "key": "artista",
    "name": "Artista",
    "skills": [
      "acr",
      "prf",
      "his",
      "per",
      "slt",
      "prv"
    ],
    "description": "<p>Antes de se aventurar pelos perigos do mundo, você se aventurava em seus prazeres. Desempenhava o papel de entreter as pessoas, seja com sua música em apresentações escandalosas ou com seu corpo em demonstrações de força, levantando grande animais em circos. O fato é que você dominava e amava uma forma de arte e se sustentava com isso.</p><p><em>Aumento no Valor de Atributo recomendado: Presença.</em></p>",
    "feature": {
      "name": "Rock Star",
      "desc": "<p>Dentro de centros urbanos, é possível se conectar com grupos de artistas, para realizar apresentações (oficiais ou clandestinas). No início de cada dia, desde que use 2 horas do seu tempo com esse objetivo, você pode rolar um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador, para marcar um encontro noturno e se apresentar.</p><p>Você deve ser bem-sucedido em um Teste de Atributo de Presença (Atuação) CD 15 para receber como cachê 3d10 x 100.000 bellys ou 3d10 x 20.000 bellys, em uma falha. Além disso, adiciona 50.000 bellys para cada nível de personagem que você tiver.</p><p>O show só acaba no amanhecer do dia seguinte e você sofre os efeitos de um dia sem realizar um descanso longo. Essa característica não poderá ser usada novamente até o término de um descanso longo.</p>",
      "uses": {
        "max": 1,
        "period": "lr"
      }
    }
  },
  {
    "code": "criminoso",
    "key": "criminoso",
    "name": "Criminoso",
    "skills": [
      "dec",
      "ste",
      "itm",
      "slt"
    ],
    "description": "<p>Você foi um fora da lei solitário ou associado a uma organização criminosa, sejam crimes hediondos ou brandos, você os fazia para sobreviver. Podem ter sido ações que dependiam de intimidação e violência ou enganações e esquemas falsos que levavam o dinheiro das vítimas. Por algum motivo, você abandonou essa vida e resolveu se lançar nos mares, pode ter sido por ter mexido com as pessoas erradas ou para se redimir do passado.</p><p><em>Aumento no Valor de Atributo recomendado: Destreza.</em></p>",
    "feature": {
      "name": "Contatos",
      "desc": "<p>Dentro de qualquer local frequentada por criminosos, como áreas mais pobres de cidades, prisões, mercados negros e etc. Pelo preço certo, você consegue arrumar contatos para as mais variadas necessidades.</p><p>Por exemplo, obter informações de difícil acesso, contratar pessoas com habilidades únicas, conseguir documentos falsos, sequestros, assassinatos e muitos outros serviços, desde que você seja bem-sucedido em um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador. Essa característica não poderá ser usada novamente até o término de um descanso longo.</p>",
      "uses": {
        "max": 1,
        "period": "lr"
      }
    }
  },
  {
    "code": "derrotado",
    "key": "derrotado",
    "name": "Derrotado",
    "skills": [
      "ins",
      "inv",
      "his",
      "sur"
    ],
    "description": "<p>Em algum momento do passado, você esteve no auge. Foi temido, respeitado ou admirado — talvez como um grande guerreiro, capitão, líder político ou figura lendária. Porém, uma derrota esmagadora mudou tudo.</p><p>Você perdeu um confronto decisivo, foi traído, humilhado publicamente ou teve seus sonhos destruídos diante do mundo. Desde então, vive com o peso desse fracasso, buscando se reerguer, provar seu valor novamente ou apenas entender onde errou.</p><p>Essa queda o enfraqueceu consideravelmente, e sua recuperação tem sido lenta e dolorosa. No entanto, também moldou quem você é agora, tornando-o mais cauteloso, resiliente ou consumido por um desejo obsessivo de redenção.</p><p><em>Aumento no Valor de Atributo recomendado: Vontade.</em></p>",
    "feature": {
      "name": "Marcas da Derrota",
      "desc": "<p>Sua experiência com o fracasso lhe deu uma visão única sobre erros e consequências. Ao falhar em um Teste de Atributo, você pode fazer um Teste de Atributo de Vontade (Sorte), com CD definida pelo Narrador.</p><p>Em caso de sucesso, você aprende algo com a falha: recebe uma pista, uma informação parcial ou reduz as consequências narrativas negativas daquele erro. Essa característica não pode ser usada novamente até o término de um descanso longo.</p>",
      "uses": {
        "max": 1,
        "period": "lr"
      }
    }
  },
  {
    "code": "erudito",
    "key": "erudito",
    "name": "Erudito",
    "skills": [
      "his",
      "inv",
      "nat",
      "arc"
    ],
    "description": "<p>Você dedicou grande parte da sua vida ao estudo formal. Seja em bibliotecas, academias, mosteiros ou sob a tutela de um mestre, seu conhecimento vem de livros, debates e pesquisa constante. Mesmo longe de centros acadêmicos, sua mente continua afiada.</p><p><em>Aumento no Valor de Atributo recomendado: Sabedoria.</em></p>",
    "feature": {
      "name": "Conhecimento Acumulado",
      "desc": "<p>Quando se deparar com ruínas, textos antigos, símbolos, fenômenos incomuns ou eventos históricos, você pode fazer um Teste de Atributo de Vontade (Sorte), com CD definida pelo Narrador. Em caso de sucesso, o Narrador fornece uma informação útil, curiosidade relevante ou relembra um contexto esquecido sobre o assunto.</p>"
    }
  },
  {
    "code": "escravo",
    "key": "escravo",
    "name": "Escravo",
    "skills": [
      "ath",
      "ins",
      "prc",
      "sur"
    ],
    "description": "<p>Seu passado traz lembranças dolorosas, que mostram os lados mais cruéis da humanidade. Pode ter sido na mão dos Nobres Mundiais ou sendo arrastado para isso por conta de guerras e tráficos ilegais. Você foi destituído dos direitos mais básico de qualquer pessoa e forçado à servidão por um período de tempo, seja ele longo ou curto, e isso com certeza marcou cicatrizes em você, físicas e psicológicas.</p><p>Após emancipado, você pôde tomar o caminho desejado, seja dedicar sua nova vida de liberdade com os mesmos valores do seu libertador ou se prender ao passado em uma caçada de vingança.</p><p><em>Aumento no Valor de Atributo recomendado: Constituição.</em></p>",
    "feature": {
      "name": "Esperança",
      "desc": "<p>Devido ao seu passado difícil, quando deparado com qualquer situação desesperadora, você consegue se manter firme para buscar alguma solução. Você pode pedir ao Narrador uma pista ou ajuda na resolução de qualquer dificuldade, desde que passe em um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador. Essa característica não poderá ser usada novamente até o término de um descanso longo.</p>",
      "uses": {
        "max": 1,
        "period": "lr"
      }
    }
  },
  {
    "code": "exilado",
    "key": "exilado",
    "name": "Exilado",
    "skills": [
      "his",
      "ins",
      "per",
      "inv"
    ],
    "description": "<p>Você já ocupou uma posição de grande influência — político, nobre, conselheiro ou outra figura central dentro de uma nação. Contudo, ao apoiar o lado derrotado de um conflito, ser vítima de uma conspiração ou ser falsamente acusado de crimes graves, sua queda foi inevitável.</p><p>Perseguido ou declarado inimigo do Estado, você foi forçado a abandonar sua terra natal. Em segredo, outra nação estendeu a mão, oferecendo abrigo e proteção longe dos holofotes. Durante o período de exílio, você aprendeu a sobreviver na sombra da política internacional, compreendendo alianças ocultas, jogos diplomáticos e o peso das decisões feitas longe do público.</p><p><em>Aumento no Valor de Atributo recomendado: Presença ou Sabedoria.</em></p>",
    "feature": {
      "name": "Apoio no Exílio",
      "desc": "<p>Você conta com o respaldo discreto de um reino que, embora não possa se expor publicamente, ainda o considera um aliado valioso.</p><p>Sempre que lidar com assuntos diplomáticos, negociações políticas ou contato com figuras de poder, você pode realizar um Teste de Atributo de Vontade (Sorte), com CD definida pelo Narrador. Em caso de sucesso, esse reino pode: Facilitar audiências secretas com nobres, líderes ou autoridades; Intermediar acordos políticos ou cessar conflitos menores; Fornecer informações estratégicas ou apoio indireto por meio de aliados.</p>"
    }
  },
  {
    "code": "familia-d",
    "key": "familia-d",
    "name": "Família D.",
    "skills": [
      "Cont",
      "itm",
      "ins",
      "prc"
    ],
    "description": "<p>Sua família possui um sobrenome secreto, do qual ninguém sabe a origem ou o significado, ele só é passado de geração em geração. Das poucas coisas que você sabe sobre esse sobrenome, algumas delas são que ele deve ser mantido em segredo, eventos tristes cercam a vida dessas pessoas e um deles trará uma grande tempestade ao mundo.</p><p><em>Aumento no Valor de Atributo recomendado: Vontade.</em></p>",
    "feature": {
      "name": "Vontade dos D.",
      "desc": "<p>O Governo Mundial teme suas ações, por conta disso, seus atos notórios sempre receberam mais atenção que o comum, fazendo com que sua recompensa aumente muito mais que o normal.</p><p>Além disso, a sua forte determinação cria um laço especial com as pessoas, mesmo sem querer. Ao zarpar de uma ilha, que esteja em gratidão com você, você pode fazer um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador, ao ser bem-sucedido, até 3 habitantes podem querer fazer parte da sua tripulação.</p><p>Caso o seu personagem morra, o novo personagem criado poderá herdar sua vontade, mantendo características do antigo personagem à sua escolha, como: Pontos de Vida relacionado ao Estilo de Combate (caso escolha um com mesmo tipo de dado de vida), Akuma no Mi, treinamentos, equipamentos, dinheiro e nível. Sendo obrigatório escolher esse antecedente novamente.</p>"
    }
  },
  {
    "code": "marinheiro",
    "key": "marinheiro",
    "name": "Marinheiro",
    "skills": [
      "ath",
      "inv",
      "med",
      "sur"
    ],
    "description": "<p>Durante o seu passado, teve um momento em que você achou estar seguido o caminho da justiça. Nesse período, você era um membro ativo da Marinha, os motivos da sua saída podem ser inúmeros, desde ver nos atos da corporação hipocrisias e corrupção até uma saída por não querer mais estar subordinado às ordens dos outros. A única coisa que não muda é que o seu tempo estará sempre marcado em suas memórias.</p><p><em>Aumento no Valor de Atributo recomendado: Força.</em></p>",
    "feature": {
      "name": "Carteirada",
      "desc": "<p>Ao interagir com marinheiros, mesmo sendo uma interação turbulenta, como estar sendo detido, mantido prisioneiro, interrogado ou avistado em alto mar. Você pode fazer um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador, para ver se consegue usar sua antiga influência ou encontrar um antigo conhecido para fazer vista grossa sobre seus crimes ou captura. Essa característica não poderá ser usada novamente até o término de um descanso longo.</p>",
      "uses": {
        "max": 1,
        "period": "lr"
      }
    }
  },
  {
    "code": "mercador",
    "key": "mercador",
    "name": "Mercador",
    "skills": [
      "dec",
      "ins",
      "inv",
      "per"
    ],
    "description": "<p>Você cresceu negociando, comprando e vendendo. Pode ter sido dono de uma pequena loja, comerciante ambulante, representante de uma grande guilda mercantil ou até um atravessador em rotas perigosas. Aprendeu cedo que informação vale tanto quanto dinheiro e que bons acordos abrem portas tão bem quanto força.</p><p><em>Aumento no Valor de Atributo recomendado: Presença.</em></p>",
    "feature": {
      "name": "Bom Negócio",
      "desc": "<p>Ao negociar compra, venda ou troca de bens e serviços, você pode fazer um Teste de Atributo de Vontade (Sorte), com CD definida pelo Narrador. Em caso de sucesso, você obtém uma vantagem comercial significativa, como desconto, bônus na troca, prioridade de entrega ou informação adicional relevante sobre o item ou mercado.</p>"
    }
  },
  {
    "code": "mercenario",
    "key": "mercenario",
    "name": "Mercenário",
    "skills": [
      "ath",
      "itm",
      "inv",
      "sur"
    ],
    "description": "<p>Você lutou por dinheiro, contratos ou favores. Pouco importava a bandeira, desde que o pagamento fosse justo — ou ao menos suficiente. Pode ter servido exércitos, nobres, criminosos ou até revolucionários, aprendendo a sobreviver em meio a conflitos e alianças instáveis.</p><p><em>Aumento no Valor de Atributo recomendado: Força.</em></p>",
    "feature": {
      "name": "Contrato Temporário",
      "desc": "<p>Ao chegar a uma região, você pode fazer um Teste de Atributo de Vontade (Sorte), com CD definida pelo Narrador, para encontrar alguém disposto a contratar você ou seu grupo para um serviço pontual.</p><p>O contrato pode envolver escolta, intimidação, proteção ou coleta de informações e o pagamento é negociado na hora (que pode ser em dinheiro, favores, artefatos e etc.).</p>"
    }
  },
  {
    "code": "nobre",
    "key": "nobre",
    "name": "Nobre",
    "skills": [
      "his",
      "ins",
      "inv",
      "nat",
      "luc"
    ],
    "description": "<p>Sua família foi ou ainda é regente de uma das tantas ilhas espalhadas pelo mundo, isso não necessariamente lhe garantiu uma vida luxuosa, já que existem reinos pobres e ricos. Mas certamente uma educação de primeira e alguma influência dentro dos círculos mais altos da sociedade.</p><p><em>Aumento no Valor de Atributo recomendado: Sabedoria.</em></p>",
    "feature": {
      "name": "Influência",
      "desc": "<p>Ao interagir com outros nobres ou membros da alta sociedade, você pode usar sua influência para conseguir favores como entrada livre em áreas privadas, dinheiro emprestado, pedir que alguém ateste suas palavras ou audiências privadas com outros nobres, desde que você passe em um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador. Essa característica não poderá ser usada novamente até o término de um descanso longo.</p>",
      "uses": {
        "max": 1,
        "period": "lr"
      }
    }
  },
  {
    "code": "orfao",
    "key": "orfao",
    "name": "Órfão",
    "skills": [
      "ath",
      "ste",
      "ins",
      "sur"
    ],
    "description": "<p>Suas origens são desconhecidas, você pode até saber seu sobrenome, mas ele não te dá nenhuma pista ou qualquer informação sobre a sua família. Além de não conhecer seus pais, desde que você se lembre, nunca houve nenhuma figura que cuidou de você, sempre tendo que se virar sozinha para conseguir se alimentar e sobreviver. Isso pode ter te tornado uma pessoa amarga ou ter alimentado uma empolgação para construir do zero seus próprios sonhos.</p><p><em>Aumento no Valor de Atributo recomendado: Força.</em></p>",
    "feature": {
      "name": "Malandragem",
      "desc": "<p>Dentro de centros urbanos, desde que você seja bem-sucedido em um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador, você pode reconhecer os padrões e caminhos secretos típicos, conseguindo encontrar passagens em meio ao tecido urbano que os outros jamais notariam, podendo viajar entre quaisquer dois pontos da cidade, duas vezes mais rápido do que o seu deslocamento permite e de forma segura.</p><p>Além disso, o mesmo teste pode ser usado para encontrar comida e água para si mesmo e para até cinco outras pessoas uma vez por dia, desde que seja possível.</p>"
    }
  },
  {
    "code": "pescador",
    "key": "pescador",
    "name": "Pescador",
    "skills": [
      "dec",
      "ins",
      "per",
      "sur"
    ],
    "description": "<p>Durante anos de vida no mar, você aprendeu muito mais do que apenas lançar redes. Mesmo que tenha passado pouco tempo como pescador profissional, sua vivência foi intensa: conheceu portos, tripulações e histórias de toda parte. Você navegou por inúmeras rotas, ouviu relatos de viajantes e mercadores e, se não esteve pessoalmente em todas as ilhas, ao menos conhece suas lendas, perigos e peculiaridades.</p><p><em>Aumento no Valor de Atributo recomendado: Presença.</em></p>",
    "feature": {
      "name": "Histórias do Mar",
      "desc": "<p>Sua reputação e lábia lhe rendem hospitalidade quase automática. Sempre que estiver em um porto ou em contato com marinheiros e civis ligados ao mar, você pode realizar um Teste de Atributo de Vontade (Sorte), com CD definida pelo Narrador. Em caso de sucesso, você consegue viagem gratuita em qualquer navio.</p><p>Além disso, ao compartilhar suas histórias e causos marítimos, você pode tentar interromper ou distrair uma criatura que consiga ouvi-lo. A criatura deve realizar uma Salvaguarda de Sabedoria CD 17. Em caso de falha, ela fica distraída por até 30 minutos, mesmo durante encontros de combate e não estando sob risco.</p><p>Criaturas não podem ser afetadas por essa característica novamente dentro de um intervalo de 24 horas.</p>"
    }
  },
  {
    "code": "politico",
    "key": "politico",
    "name": "Político",
    "skills": [
      "prf",
      "dec",
      "his",
      "ins",
      "per",
      "prv"
    ],
    "description": "<p>De alguma forma, a política fez parte da sua vida, você pode ter sido o prefeito de uma vila, participado das disputas entre dois regentes, ter sido o conselheiro de um rei ou ativista em nome de uma causa a favor do seu povo. Com isso, se fez necessário muitos estudos políticos e entendimento dos apelos populares.</p><p>Ao sair dessa vida, você manteve todo o conhecimento de como funciona os bastidores dos governos, suas decisões difíceis e as cordas que controlam a população.</p><p><em>Aumento no Valor de Atributo recomendado: Presença.</em></p>",
    "feature": {
      "name": "Discurso",
      "desc": "<p>Ao confrontar uma pessoa hostil fora de combate, desde que você seja bem-sucedido em um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador, você pode convence-la a te ajudar.</p><p>A pessoa se aliará a você por até 24 horas, enquanto os objetivos dela não forem totalmente contrários aos seus. Essa característica não poderá ser usada novamente até o término de um descanso longo.</p>",
      "uses": {
        "max": 1,
        "period": "lr"
      }
    }
  },
  {
    "code": "predestinado",
    "key": "predestinado",
    "name": "Predestinado",
    "skills": [
      "ins",
      "prc",
      "per",
      "luc"
    ],
    "description": "<p>Desde que você se entende por gente, tudo conspira a seu favor. Encontros improváveis, sobrevivência milagrosa, oportunidades únicas — como se o próprio mundo estivesse preparando seu caminho.</p><p>Alguns chamam isso de sorte. Outros, de profecia. Há quem diga que seu nome já foi escrito no futuro. Resta saber se você será digno desse destino… ou se ele cobrará um preço alto demais.</p><p><em>Aumento no Valor de Atributo recomendado: Vontade.</em></p>",
    "feature": {
      "name": "Mão do Destino",
      "desc": "<p>Uma vez por descanso longo, antes de tomar uma decisão importante, você pode pedir ao Narrador que revele a consequência futura mais provável da sua ação.</p><p>Além disso, em momentos de extrema necessidade, uma reviravolta significativa pode ocorrer, alterando drasticamente o curso dos acontecimentos. Muitos chamariam isso de um 'roteiro conveniente', mas mudanças inimagináveis surgem justamente nos instantes mais desesperadores: um Fruto aparentemente ordinário pode revelar-se um poderoso Fruto Mítico; um corpo comum pode ser, na verdade, resultado de uma experiência científica oculta; ou o personagem pode descobrir ser portador de um Haki do Rei excepcional, entre outras possibilidades.</p><p>Essas reviravoltas representam a intervenção do destino e só podem ocorrer uma única vez durante toda a aventura.</p><p>Exemplos de gatilhos para a revelação: A morte definitiva do personagem (que indique a perda da ficha); Uma situação que desfechou em uma derrota que encerrará a aventura; Uma situação crítica sem qualquer possibilidade plausível de superação.</p><p>Exemplos de efeitos imediatos da reviravolta: Recuperar completamente os Pontos de Vida e Pontos de Poder; Criar uma oportunidade clara de fuga de uma situação desesperadora; Resolver um obstáculo aparentemente implacável, (como finalmente causar danos a um oponente intangível).</p><p>Exemplos de resultados permanentes da reviravolta: A mudança definitiva da Akuma no Mi que o personagem já tinha; A mudança permanente da espécie do personagem; Acesso a novas características.</p><p>Os gatilhos, efeitos e resultados ficam sempre a critério do Narrador, de acordo com a situação e a narrativa da campanha. Uma vez ativada, a Mão do Destino não pode ser revertida, alterada ou reutilizada até o fim da aventura.</p>",
      "uses": {
        "max": 1,
        "period": "lr"
      }
    }
  },
  {
    "code": "revolucionario",
    "key": "revolucionario",
    "name": "Revolucionário",
    "skills": [
      "acr",
      "ath",
      "his",
      "med",
      "per"
    ],
    "description": "<p>Em um determinado ponto da sua história, você foi um membro ativo do Exército Revolucionário. Participou de guerras, golpes e revoluções, seja de forma estratégica ou no combate em si. Durante esse tempo, você conquistou a reputação de um libertador, entretanto, por qualquer motivo que seja, você decidiu abandonar essa missão e agora vaga nos mares com novos objetivos.</p><p><em>Aumento no Valor de Atributo recomendado: Destreza.</em></p>",
    "feature": {
      "name": "Herói do Povo",
      "desc": "<p>Devido seu passado turbulento, sua identidade pode ser facilmente percebida, desta forma, desde que você seja bem-sucedido em um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador, você é capaz de encontrar um lugar para se esconder, descansar ou se recuperar em meio às pessoas que simpatizam com a causa revolucionária, a não ser que tenha se mostrado uma ameaça para eles. Eles o protegerão da lei ou de qualquer outra pessoa que o procure, embora não estejam dispostos a arriscar suas vidas por você.</p>"
    }
  },
  {
    "code": "sacerdote",
    "key": "sacerdote",
    "name": "Sacerdote",
    "skills": [
      "his",
      "med",
      "per",
      "arc"
    ],
    "description": "<p>Você trabalhou em uma igreja, pode ter sido suas, dos seus pais ou de alguém que você conhece. Durante o seu tempo lá, você ajudou na educação, tratamento médico, alimentação e outros direitos básicos negados aos menos favorecidos.</p><p>Isso lhe garantiu uma visão muito mais humanista do mundo, o que pode ter sido o gatilho para você se lançar nos mares, em busca de ajudar mais pessoas ou a revolta de acabar com os que causam esse sofrimento.</p><p><em>Aumento no Valor de Atributo recomendado: Sabedoria.</em></p>",
    "feature": {
      "name": "Fiéis",
      "desc": "<p>Ao adentrar em locais povoados, você pode fazer um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador. Sendo bem-sucedido, você pode encontrar até 3 pessoas que já foram ajudadas por você.</p><p>Eles são plebeus capazes de realizar qualquer tarefa mundana, mas que não lutarão por você, não o seguirão em áreas evidentemente perigosas e o abandonarão se forem ameaçados ou abusados com frequência.</p>"
    }
  },
  {
    "code": "sobrevivente",
    "key": "sobrevivente",
    "name": "Sobrevivente",
    "skills": [
      "his",
      "ins",
      "prc",
      "sur"
    ],
    "description": "<p>Durante o seu passado, um grande evento histórico ocorreu, pode ter sido a destruição da sua ilha natal pelas mãos do Governo Mundial, uma doença ultra rara que assolou seu reino ou uma grande guerra que resultou em desastre natural.</p><p>Apesar de não ser certeza de todos saberem a história, você foi o único sobrevivente conhecido do desastre, e uma mítica se criou à sua volta, para o bem ou para mal.</p><p><em>Aumento no Valor de Atributo recomendado: Vontade.</em></p>",
    "feature": {
      "name": "Reputação",
      "desc": "<p>Quando estiver em qualquer povoado civilizado, você pode fazer um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador, e saber se os locais conhecem o seu passado. Ao ser bem-sucedido no teste, você consegue sair impune a crimes menores, como se recusar a pagar por comida em uma taverna ou arrombar portas de uma loja local, pois a maioria das pessoas terá medo ou pena de relatar a sua atividade às autoridades.</p>"
    }
  },
  {
    "code": "tenryuubito",
    "key": "tenryuubito",
    "name": "Tenryuubito",
    "skills": [
      "his",
      "itm",
      "inv",
      "nat"
    ],
    "description": "<p>Sua linhagem sanguínea vem dos Nobres Mundiais, você pode ser um descendente direto ou ter apenas um de seus pais como Tenryuubito. Durante sua convivência com eles, você pode ou não ter compartilhado de seus costumes e pensamentos, mas por algum motivo você quis se aventurar de forma livre no mundo inferior, mesmo sabendo que as consequências disso sejam o rompimento entre vocês.</p><p><em>Aumento no Valor de Atributo recomendado: Constituição.</em></p>",
    "feature": {
      "name": "Costas Quentes",
      "desc": "<p>Ao interagir com membros do Governo Mundial ou do alto escalão da Marinha, você pode tentar usar suas conexões com os Nobres Mundiais para publicar ou alterar notícias dos jornais, solicitar ataques contra tripulações inimigas (fornecendo as informações necessárias), criar distrações e etc.</p><p>Desde que seja bem-sucedido em um Teste de Atributo de Vontade (Sorte), com a CD definida pelo Narrador. Essa característica não poderá ser usada novamente até o término de um descanso longo.</p>",
      "uses": {
        "max": 1,
        "period": "lr"
      }
    }
  }
];

/* CAMINHOS — Capítulo 5 (Personalização), gerado a partir do livro */
export const CAMINHOS = [
  {
    "code": "conhecimento-pelo-companheirismo-c-c",
    "name": "Conhecimento pelo Companheirismo (C/C)",
    "desc": "<p>É o sonho de ver, aprender ou compreender algo por meio da interação social. O personagem depende de aliados para alcançar seus objetivos, podendo liderar ou ser subordinado, desde que conte com outras pessoas em sua jornada.</p>"
  },
  {
    "code": "liberdade-pelo-companheirismo-l-c",
    "name": "Liberdade pelo Companheirismo (L/C)",
    "desc": "<p>É o sonho de viver livremente ou fazer algo que traga felicidade pessoal por meio da interação social. O personagem depende de aliados para seguir seu caminho, seja liderando ou sendo liderado.</p>"
  },
  {
    "code": "poder-pelo-companheirismo-p-c",
    "name": "Poder pelo Companheirismo (P/C)",
    "desc": "<p>É o sonho de alcançar prestígio, domínio ou poder — seja governar, possuir algo, impor sua vontade ou eliminar um inimigo — contando com alianças, influência e relações sociais para isso.</p>"
  },
  {
    "code": "conhecimento-pela-forca-c-f",
    "name": "Conhecimento pela Força (C/F)",
    "desc": "<p>É o sonho de ver, aprender ou compreender algo por meio da própria força. O personagem pode até ter aliados, superiores ou subordinados, mas não depende deles para alcançar seus objetivos.</p>"
  },
  {
    "code": "liberdade-pela-forca-l-f",
    "name": "Liberdade pela Força (L/F)",
    "desc": "<p>É o sonho de viver livremente ou realizar algo que traga felicidade pessoal por meio da própria força. O personagem trilha seu caminho de forma independente, mesmo que possua companheiros.</p>"
  },
  {
    "code": "poder-pela-forca-p-f",
    "name": "Poder pela Força (P/F)",
    "desc": "<p>É o sonho de alcançar poder, prestígio ou domínio por meio da própria força. O personagem confia em sua capacidade individual para governar, impor sua vontade ou conquistar aquilo que deseja.</p>"
  },
  {
    "code": "conhecimento-pela-enganacao-c-e",
    "name": "Conhecimento pela Enganação (C/E)",
    "desc": "<p>É o sonho de ver, aprender ou compreender algo por meio de mentiras, encenações, manipulação ou controle de outras pessoas.</p>"
  },
  {
    "code": "liberdade-pela-enganacao-l-e",
    "name": "Liberdade pela Enganação (L/E)",
    "desc": "<p>É o sonho de viver livremente ou fazer o que desejar por meio de mentiras, disfarces, intrigas ou controle indireto das ações alheias.</p>"
  },
  {
    "code": "poder-pela-enganacao-p-e",
    "name": "Poder pela Enganação (P/E)",
    "desc": "<p>É o sonho de alcançar poder, prestígio ou domínio por meio da manipulação, enganação, encenação ou controle de pessoas e informações.</p>"
  }
];

/* SINGULARIDADES — Capítulo 5 (Personalização), gerado a partir do livro */
export const SINGULARIDADES = [
  {
    "code": "amante",
    "name": "Amante",
    "tier": "suave",
    "desc": "<p>Você mantém um relacionamento amoroso com uma figura importante da sociedade. Por meio dessa relação, você pode recorrer a essa pessoa para obter informações ou pequenos favores, sempre com a aprovação do Narrador. Esses auxílios não são imediatos e podem levar 3d6 dias para chegar.</p>"
  },
  {
    "code": "ambiente-familiar",
    "name": "Ambiente Familiar",
    "tier": "suave",
    "desc": "<p>Criado em um ambiente específico, você encontra conforto e liberdade nas lembranças desse lugar. Sempre que estiver imerso nesse tipo de cenário, suas habilidades tendem a se sobressair.</p><p>Escolha um ambiente que mais ressoe com seu passado — como dunas, montanhas, neve, selva, campo ou mar.</p><p>Quando estiver nesse ambiente, você pode refazer qualquer rolagem do d20, escolhendo qual dos resultados utilizar. Essa característica pode ser usada até 3 vezes, e todos os usos são recuperados ao final de um descanso longo.</p>",
    "uses": {
      "max": 3,
      "period": "lr"
    }
  },
  {
    "code": "armadura-de-musculos",
    "name": "Armadura de Músculos",
    "tier": "suave",
    "desc": "<p>Você treina seu corpo diariamente e está mais do que preparado para suportar golpes intensos. Podendo substituir o modificador de Destreza adicionado à sua CR pelo modificador de Força.</p><p>Característica que permitam utilizar outro modificador para a CR, como 'Defesa Aprimorada', caso nenhum deles seja o modificador de Força, você pode optar por substituí-lo pelo modificador de Força.</p>"
  },
  {
    "code": "beleza-natural",
    "name": "Beleza Natural",
    "tier": "suave",
    "desc": "<p>O personagem nasceu com uma beleza exuberante. Mesmo sem qualquer preparo, ele já é bonito o suficiente para chamar atenção e conquistar admiradores. O preconceito severo é reduzido para medíocre e o medíocre para débil. Não é possível reduzir o preconceito débil com essa individualidade.</p>"
  },
  {
    "code": "bom-senso",
    "name": "Bom Senso",
    "tier": "suave",
    "desc": "<p>Pessoas podem ter atitudes estúpidas, mas você não é uma delas. Todas as vezes que o personagem for fazer alguma coisa obviamente idiota, o Narrador pode dizer que ele pretende fazer uma burrice, evitando um desfecho desagradável.</p>"
  },
  {
    "code": "chefe",
    "name": "Chefe",
    "tier": "suave",
    "desc": "<p>Você impõe respeito naturalmente — seja por já ter feito parte de uma organização criminosa respeitada, como a máfia, por aparentar grande força ou simplesmente por manter uma postura firme e inabalável.</p><p>Desde que esteja fora de um encontro de combate, o primeiro dano causado por você contra uma criatura não desencadeia retaliação hostil (desde que não seja por meio de uma Técnica), caso passe em um Teste de Atributo de Presença (Intimidação) CD 16.</p><p>Em caso de sucesso, além de não iniciar um combate, você recebe vantagem em Testes de Atributo de Presença contra essa criatura até o final do dia.</p>"
  },
  {
    "code": "corpo-fechado",
    "name": "Corpo Fechado",
    "tier": "suave",
    "desc": "<p>Sua pele parece de aço e, por mais que esteja ferido, raramente você demonstra sinais de lesões e cortes, sendo difícil até mesmo sangrar quando cortado.</p><p>Quando fizer Salvaguardas contra as condições 'Sangramento' e 'Queimadura', você pode tornar uma falha em um sucesso. Essa característica pode ser usada uma quantidade de vezes igual ao seu Bônus de Proficiência e você recupera todos os seus usos ao término de um descanso longo.</p>",
    "uses": {
      "max": "@prof",
      "period": "lr"
    }
  },
  {
    "code": "corpo-vigoroso",
    "name": "Corpo Vigoroso",
    "tier": "suave",
    "desc": "<p>Você nasceu com um corpo muito saudável, suas feridas se curam mais rápido e aguenta uma quantidade incrível de esforço. Sempre que você passar de nível, role novamente o dado de vida para aumentar o valor máximo de Pontos de Vida e escolha o maior. Ao terminar um descanso curto, você sempre pode usar 1 dado de vida adicional.</p>"
  },
  {
    "code": "determinacao",
    "name": "Determinação",
    "tier": "suave",
    "desc": "<p>Você é movido por uma vontade inabalável de alcançar seus sonhos. Seus objetivos podem mudar ao longo da história, mas nada é capaz de quebrar sua fé ou desanimá-lo de seguir em frente.</p><p>Esta característica concede 10 Pontos de Determinação, que podem ser gastos para aumentar o valor final de Testes de Atributo ou Salvaguardas diretamente relacionados às suas ambições (acordados previamente com o Narrador). Cada ponto gasto adiciona +1 ao resultado do teste. Os pontos gastos são perdidos e recuperados apenas ao término de um descanso longo.</p>",
    "uses": {
      "max": 10,
      "period": "lr"
    }
  },
  {
    "code": "disciplinado",
    "name": "Disciplinado",
    "tier": "suave",
    "desc": "<p>Dia após dia, você se dedica incansavelmente aos seus treinamentos, buscando aperfeiçoamento físico e mental. Seu comprometimento é evidenciado pela rotina rigorosa, destacando-se pela determinação em alcançar a excelência. O treino transcende a prática, tornando-se uma paixão e estilo de vida.</p><p>A cada nível par de personagem, você recebe 1 Ponto de Treinamento.</p>"
  },
  {
    "code": "equilibrio-perfeito",
    "name": "Equilíbrio Perfeito",
    "tier": "suave",
    "desc": "<p>O personagem é capaz de se manter em pé mesmo sob tremores intensos ou em superfícies extremamente estreitas, como cordas esticadas, saliências, mastros, galhos de árvores ou estruturas instáveis semelhantes.</p><p>Além disso, sempre que realizar uma Salvaguarda para evitar ser derrubado ou perder o equilíbrio, você faz o teste com vantagem.</p>"
  },
  {
    "code": "forasteiro",
    "name": "Forasteiro",
    "tier": "suave",
    "desc": "<p>Você veio de um local conhecido por poucos, mesmo se fosse das ilhas do céu, seria de um local oculto para seus habitantes, com suas próprias culturas e heranças. Dessa forma, você traz consigo itens misteriosos.</p><p>Escolha entre uma 'Planta Mãe', um conjunto de dials aleatórios (3 dials cotidianos, 2 dials bélicos e 1 dial restrito), ou um 'Clima-Tact'. Todos os itens presentes no Capítulo 2 do Guia do Narrador.</p>"
  },
  {
    "code": "indomavel",
    "name": "Indomável",
    "tier": "suave",
    "desc": "<p>O personagem possui uma reação quase bestial sempre que alguém tenta subjugá-lo, seja por meio de correntes, agarrões, algemas ou habilidades especiais.</p><p>Sempre que estiver restrito de qualquer forma, você dobra o seu modificador de Força nas jogadas realizadas para se libertar. Além disso, enquanto estiver agarrado, você causa 1 dado de dano adicional na criatura que o está restringindo.</p>"
  },
  {
    "code": "instintos-animais",
    "name": "Instintos Animais",
    "tier": "suave",
    "desc": "<p>Talvez você tenha crescido em uma cultura tribal, vivido entre animais, enfrentado inúmeras feras ao longo da vida ou simplesmente nascido assim. O fato é que seus instintos de sobrevivência são extremamente aguçados, fazendo com que você se comporte, em muitos aspectos, como um animal atento ao ambiente.</p><p>Sempre que uma criatura considerada inimiga estiver dentro do seu campo de visão, você pode realizar um Teste de Atributo de Vontade (Intuição) CD 15 para avaliar se ela representa uma ameaça significativa.</p><p>Além disso, sempre que uma criatura tiver a intenção de atacá-lo e estiver a até 18 metros de distância, você percebe essa hostilidade instintivamente e consegue identificar a localização da criatura.</p>"
  },
  {
    "code": "integrante-fantasma",
    "name": "Integrante Fantasma",
    "tier": "suave",
    "desc": "<p>Você tem uma participação sútil e calma, sempre surpreendendo os outros com a sua personalidade quase fantasmagórica, quase invisível socialmente.</p><p>Desde que você não esteja interagindo diretamente com alguma situação ou combate, você pode inserir-se em qualquer interação que, à princípio, só envolvia os outros jogadores da mesa, mesmo se o Narrador não estiver ciente.</p>"
  },
  {
    "code": "ma-fama",
    "name": "Má Fama",
    "tier": "suave",
    "desc": "<p>Você possui uma infâmia notória. Seja por falhas em missões cruciais, derrotas públicas, ou por ser um ex-criminoso em processo de reabilitação. Sua reputação é marcada por uma falta de confiança generalizada, com suspeitas consideráveis sobre suas ações, quer sejam merecidas ou não.</p><p>Você pode definir uma alcunha inicial para o seu personagem (com aprovação do Narrador) e, mesmo quando derrotado, seus inimigos evitam tirar sua vida, seja por conta de estarem procurando por você no submundo ou para reivindicar alguma recompensa.</p>"
  },
  {
    "code": "metabolismo-anormal",
    "name": "Metabolismo Anormal",
    "tier": "suave",
    "desc": "<p>Você possui um estômago monstruoso, que parece não ter fundo, a ponto de sua barriga poder chegar a até duas vezes o tamanho normal. Além disso, ao consumir grandes quantidades de comida, você pode optar por passar 1 minuto sob a condição 'Paralisado' para digerir completamente os alimentos.</p><p>Ao final desse processo, seu corpo retorna ao estado normal e você recupera 1 PV para cada refeição ingerida. Recomenda-se que cada refeição possua propriedades equivalentes a uma refeição aristocrática, conforme descrito no Capítulo 8, considerando peso e valor.</p>"
  },
  {
    "code": "rotina-tranquila",
    "name": "Rotina Tranquila",
    "tier": "suave",
    "desc": "<p>Você se sente mais confortável quando segue hábitos simples e previsíveis, como acordar cedo, organizar seus pertences ou realizar pequenas tarefas diárias sempre da mesma forma. Essa constância te acalma e ajuda a manter o foco.</p><p>Sempre que iniciar um dia após um descanso longo completo, você pode escolher uma única jogada de d20 feita fora de combate para rolar duas vezes e escolher o melhor resultado.</p><p>Essa jogada deve representar uma ação rotineira ou cotidiana (como construir algo, navegar, negociar compras, investigar locais e etc.).</p><p>Essa característica não pode ser usada em situações de urgência, perseguições, combates ou eventos claramente caóticos, a critério do Narrador.</p>",
    "uses": {
      "max": 1,
      "period": "day"
    }
  },
  {
    "code": "sono-seguro",
    "name": "Sono Seguro",
    "tier": "suave",
    "desc": "<p>Você é capaz de descansar sem jamais baixar completamente a guarda. Mesmo nos estados mais profundos de sono, seus sentidos permanecem parcialmente atentos, permitindo perceber conversas, aproximações suspeitas ou ataques iminentes — e reagir a tempo.</p><p>Para todos os efeitos de regras, enquanto estiver dormindo, você é considerado consciente. Você pode escolher acordar a qualquer momento e pode realizar Testes de Atributo e Salvaguardas normalmente.</p>"
  },
  {
    "code": "tesouro-precioso",
    "name": "Tesouro Precioso",
    "tier": "suave",
    "desc": "<p>Você possui um objeto, à sua escolha, que precisa proteger a qualquer custo. Para você, ele representa algo tão valioso quanto a própria vida. Pode ser um chapéu confiado por seu salvador, a espada de uma amiga falecida ou um mapa de um tesouro submerso. O objeto não pode ter grande valor monetário e deve ser aprovado pelo Narrador.</p><p>Enquanto estiver carregando seu tesouro, ao falhar em uma Salvaguarda, você pode optar por receber ou aumentar 1 Nível de Exaustão e transformar a falha em um sucesso. Essa capacidade é recuperada ao término de um descanso longo.</p><p>Caso veja seu tesouro sendo danificado, você deve realizar uma Salvaguarda de Vontade CD 18. Em caso de falha, você recebe a condição 'Atordoado' até o final do seu próximo turno.</p><p>Se o seu tesouro for destruído ou desaparecer, você recebe a condição 'Letárgico' por 2d6 meses. Essa penalidade é considerada um Defeito Leve.</p>"
  },
  {
    "code": "alter-ego-heroico",
    "name": "Álter Ego Heroico",
    "tier": "media",
    "desc": "<p>Você possui uma identidade secreta, à sua escolha, que pode ser invocada sempre que estiver em perigo, desde que tenha seus trajes de herói em mãos. Enquanto estiver vestido como herói, deve proteger sua verdadeira identidade de todos.</p><p>Durante até 5 minutos, enquanto estiver vestido de herói, você recebe vantagem em jogadas para determinar sua iniciativa. Caso seja o último na ordem de iniciativa, passa automaticamente a ser o primeiro. Além disso, ignora quaisquer efeitos negativos dos seus defeitos.</p><p>Essa característica não poderá ser usada novamente até o término de um descanso longo.</p>",
    "uses": {
      "max": 1,
      "period": "lr"
    }
  },
  {
    "code": "aparencia-inofensiva",
    "name": "Aparência Inofensiva",
    "tier": "media",
    "desc": "<p>Por algum motivo você não parece perigoso, talvez seja muito pequeno, pareça fraco ou velho (você escolhe o motivo). Fazendo com que seja mais fácil pegar oponentes desprevenidos. O truque não funciona com ninguém que já tenha visto você lutar, e também não engana duas vezes a mesma pessoa.</p><p>Você recebe +5 para acertar alguém que não desconfie de você, usando esta individualidade. Consegue diminuir o preconceito em 1 nível. Porém, você recebe -5 em Testes de Atributo de Presença (Intimidação).</p>",
    "effects": [
      {
        "skill": "itm",
        "bonus": -5
      }
    ]
  },
  {
    "code": "ator",
    "name": "Ator",
    "tier": "media",
    "desc": "<p>Você é a personificação de qualquer papel que decidir assumir, demonstrando extrema confiança e domínio em sua interpretação.</p><p>Ao realizar um Teste de Atributo de Presença (Atuação), você obtém sucesso automático no primeiro teste. No segundo teste, você realiza a rolagem com vantagem e, no terceiro teste, recebe um bônus adicional de +2.</p><p>Essa característica se aplica individualmente a cada criatura. Após utilizar os três benefícios contra uma mesma pessoa, a característica só poderá ser utilizada novamente contra ela após um intervalo de 24 horas.</p>"
  },
  {
    "code": "aura-assassina",
    "name": "Aura Assassina",
    "tier": "media",
    "desc": "<p>Você emana uma presença intimidadora, que não tem relação com sua aparência física, seja por ter encarado inúmeras situações mortais ou por guardar uma intensa fúria dentro de si.</p><p>Enquanto estiver com todos os seus Pontos de Vida, qualquer criatura que realizar a primeira jogada de ataque (comum) contra você terá desvantagem.</p>"
  },
  {
    "code": "estudioso",
    "name": "Estudioso",
    "tier": "media",
    "desc": "<p>Desde a infância, você nutriu uma profunda admiração pelo caminho acadêmico, dedicando considerável parte do seu tempo aos estudos formais.</p><p>Você recebe o dobro do seu Bônus de Proficiência em uma perícia que você já seja proficiente. Escolha entre 'História', 'Investigação', 'Medicina', 'Natureza' ou 'Sobrevivência'.</p>",
    "skillChoice": {
      "count": 1,
      "pool": [
        "his",
        "inv",
        "med",
        "nat",
        "sur"
      ],
      "mode": "expertise"
    }
  },
  {
    "code": "fisico-perfeito",
    "name": "Físico Perfeito",
    "tier": "media",
    "desc": "<p>Seu corpo está sempre bem cuidado e tem a capacidade assustadora de se recuperar de ferimentos e esforços mais leves em poucos minutos. O descanso curto, para você, tem uma duração mínima de 15 minutos.</p>"
  },
  {
    "code": "negativo",
    "name": "Negativo",
    "tier": "media",
    "desc": "<p>Você é naturalmente negativo, sempre pessimista e esperando o pior. Quando algo dá errado, você simplesmente aceita a situação. Por definição, nada que alguém faça ou diga, nem mesmo habilidades de Akuma no Mi, pode deixá-lo mais deprimido ou desmotivado, pois não há como ficar pior do que você já é.</p><p>Você é imune às condições 'Empoderado', 'Enfeitiçado', 'Enfurecido', 'Letárgico' e 'Sonolento'.</p>",
    "effects": [
      {
        "ci": [
          "jj-empoderado",
          "jj-enfeiticado",
          "jj-enfurecido",
          "jj-letargico",
          "jj-sonolento"
        ]
      }
    ]
  },
  {
    "code": "vocacao",
    "name": "Vocação",
    "tier": "media",
    "desc": "<p>Você sente que nasceu para realizar algo específico na vida. Isso pode estar diretamente ligado à sua profissão — como exercer a medicina ou a carpintaria — ou a uma atividade artística, intelectual ou pessoal, como pintar um quadro, compor uma música ou concluir uma grande obra (sempre com aprovação do Narrador).</p><p>Ao concluir uma dessas tarefas significativas, você se sente plenamente realizado e pode escolher um dos benefícios abaixo:</p><p>Recuperar 1 Nível de Exaustão;</p><p>Recuperar Pontos de Vida em um valor igual a 3 vezes o seu nível de personagem;</p><p>Recuperar Pontos de Poder em um valor igual ao seu nível de personagem.</p><p>Os benefícios dessa característica só podem ser obtidos novamente após 7 dias.</p>"
  },
  {
    "code": "ambicao-do-rei",
    "name": "Ambição do Rei",
    "tier": "forte",
    "desc": "<p>Você tem uma ambição grandiosa e inabalável, acompanhada de uma força de vontade que transcende limites. Em situações de grande estresse, você é capaz de manifestar uma aura misteriosa</p><p>Você se torna capaz de manifestar o Haki do Rei, no estágio 'Inexperiente', respeitando todas as regras do Capítulo 7. Essa individualidade só está disponível com a aprovação do Narrador.</p>"
  },
  {
    "code": "grande-planejador",
    "name": "Grande Planejador",
    "tier": "forte",
    "desc": "<p>Você possui grande habilidade para arquitetar planos complexos e alcançar seus objetivos sem precisar se envolver diretamente. Sempre que tiver um objetivo claro e específico para provocar um evento — como a explosão de uma bomba em determinada ilha, um apagão elétrico em uma cidade, forçar o encontro de dois piratas inimigos poderosos, roubar a chuva de um país, entre outros — você pode apresentar o plano ao Narrador.</p><p>O Narrador determinará a quantidade de semanas necessárias para que o plano seja executado. A cada semana, você deve dedicar 1 dia inteiro exclusivamente à coordenação do plano e gastar 1d10 × ฿ 200.000, representando custos com subornos, contratações, logística, informações e articulações nos bastidores.</p><p>Caso o plano envolva um evento contínuo que precise ser mantido por várias semanas, esses custos e a dedicação semanal permanecem até que o evento seja encerrado ou interrompido.</p><p>Mesmo sem se envolver diretamente, em planos particularmente complexos, o Narrador pode determinar que suas ações foram rastreadas ou que seus planos foram frustrados por fatores externos, como a intervenção de terceiros, mudanças climáticas, agentes políticos, traições internas ou até mesmo a própria má sorte.</p>"
  },
  {
    "code": "haki-da-observacao-inato",
    "name": "Haki da Observação Inato",
    "tier": "forte",
    "desc": "<p>Você nasceu com grande talento para o Haki da Observação. Fora de batalha, você pode usar a característica 'Perceber Emoções', 'Perceber Presença' e 'Perceber Desafio' do Haki da Observação.</p><p>Ao escolher esta individualidade, o Haki da Observação será automaticamente seu Haki principal e ao adquirir controle sobre o Haki da Observação ele recebe 5 Pontos de Ambição.</p>"
  },
  {
    "code": "pau-para-toda-obra",
    "name": "Pau-para-Toda-Obra",
    "tier": "forte",
    "desc": "<p>Ao longo da sua vida, você se dedicou a aprender mais, transitando por diferentes áreas de conhecimento e desenvolvendo habilidades variadas.</p><p>Essa característica permite que você crie seu personagem com duas profissões, em vez de apenas uma. Você recebe todos os benefícios iniciais de ambas, exceto as proficiências em perícias e ferramentas: só recebendo esses benefícios de apenas uma das profissões iniciais.</p>"
  },
  {
    "code": "recuperacao-espantosa",
    "name": "Recuperação Espantosa",
    "tier": "forte",
    "desc": "<p>O personagem possui uma recuperação fora do normal, seja para dores ou para fadiga. Enquanto uma pessoa comum estaria de cama por dias, recuperando-se de uma batalha, você já está ativo e pronto para a próxima.</p><p>O descanso longo, para você, tem uma duração mínima de 4 horas ou você pode optar por descansar 8 horas e recuperar 1 Nível de Exaustão adicional. Essa característica não acumula com outras que façam você recuperar Níveis de Exaustão, recuperando, no máximo, 1 Nível de Exaustão extra por descanso longo.</p>"
  },
  {
    "code": "voz-de-todas-as-coisas",
    "name": "Voz de Todas as Coisas",
    "tier": "forte",
    "desc": "<p>Você nasceu com um poder de características únicas e muito misterioso. Em algumas situações, você é capaz de ouvir a 'voz' de qualquer ser vivo e até objetos inanimados. Esse poder não necessariamente permite que você consiga se comunicar com outros seres vivos.</p><p>Ao ver um objeto misterioso, textos indecifráveis ou animais raros, o Narrador pode pedir para você pode fazer Teste de Atributo de Vontade (Sobrenatural), com CD determinada por ele. Ao ser bem-sucedido, você ainda não será capaz de ler ou entender, mas você consegue receber os sentimentos que queriam ser passados.</p>"
  },
  {
    "code": "zona",
    "name": "Zona",
    "tier": "forte",
    "desc": "<p>Ao obter um 20 natural em uma rolagem do d20, durante 1 minuto, você entra em um estado intenso de foco e empolgação que toma conta do seu ser, trazendo uma sensação de euforia absoluta.</p><p>Enquanto estiver nesse estado, você ignora completamente os efeitos de Níveis de Exaustão e pode manter simultaneamente mais de uma característica que exija concentração, sem a necessidade de testes para mantê-las.</p><p>Essa característica não poderá ser usada novamente até o término de um descanso longo.</p>",
    "uses": {
      "max": 1,
      "period": "lr"
    }
  }
];

/* DEFEITOS — Capítulo 5 (Personalização), gerado a partir do livro */
export const DEFEITOS = [
  {
    "code": "casamento-marcado",
    "name": "Casamento Marcado",
    "tier": "suave",
    "desc": "<p>Você fez parte de uma família ou organização poderosa que sempre o tratou como alguém descartável. Como resultado, foi prometido como agrado, moeda de troca ou até mesmo oferecido como escravo, cônjuge político para unir famílias do submundo, fortalecer alianças ou ampliar o poder dessa organização.</p><p>Para garantir que o acordo seja cumprido, seus antigos aliados usam seus contatos para intensificar a perseguição à sua tripulação: a Marinha aumenta a vigilância, grandes piratas são incentivados por recompensas.</p><p>Enquanto você não se apresentar voluntariamente a essa organização, sempre que passar um dia viajando de navio ou ao adentrar uma nova ilha ou localidade, deve realizar um Teste de Atributo de Vontade (Sorte) CD 18. Em caso de falha, você encontra emissários hostis preparados para capturá-lo ou forçá-lo a cumprir o acordo.</p>"
  },
  {
    "code": "chantagem",
    "name": "Chantagem",
    "tier": "suave",
    "desc": "<p>Alguém de grande influência tem um segredo seu, um objeto importante ou mantém como refém uma pessoa muito preciosa para você (deve ser previamente combinado com o Narrador).</p><p>De tempos em tempos, emissários dessa pessoa surgem para instruí-lo a cumprir demandas, as quais podem acarretar sérios perigos ou entrar em conflito com seus princípios.</p>"
  },
  {
    "code": "churriado",
    "name": "Churriado",
    "tier": "suave",
    "desc": "<p>Você tem muitos pontos positivos, mas a força física certamente não é uma delas, e por mais que você invista seu tempo em treinar seu corpo, o resultado vai acabar sendo só uma aparência melhor.</p><p>Você tem desvantagem em qualquer Testes de Atributo ou Salvaguarda de Força.</p>"
  },
  {
    "code": "dupla-personalidade",
    "name": "Dupla Personalidade",
    "tier": "suave",
    "desc": "<p>Sua mente abriga duas personalidades distintas, com valores, comportamentos ou objetivos conflitantes. A troca entre elas pode ser sutil ou abrupta, mas nunca passa despercebida para quem convive com você por tempo suficiente.</p><p>No início de cada dia, ou sempre que você falhar em uma Salvaguarda de Vontade CD 15 em uma situação de estresse intenso (humilhação, medo extremo, dor emocional, perigo iminente), o Narrador pode determinar qual personalidade assume o controle. Enquanto a personalidade secundária estiver ativa:</p><p>O Narrador pode impor decisões, falas ou atitudes coerentes com essa personalidade;</p><p>Você sofre desvantagem em Todas Perícias que for proficiente;</p><p>Você falha automaticamente em Salvaguardas de Sabedoria e Vontade (ignorando sucessos automáticos).</p><p>A personalidade original retorna automaticamente após um descanso longo ou quando um evento marcante ocorre (definido pelo Narrador).</p>"
  },
  {
    "code": "falta-de-higiene",
    "name": "Falta de Higiene",
    "tier": "suave",
    "desc": "<p>Você foge da água como se ela fosse um veneno. Sua aversão a banhos frequentes e à limpeza em geral afeta negativamente a forma como as pessoas o veem e interagem com você.</p><p>Você falha automaticamente em Testes de Atributo de Presença (Persuasão), ignorando sucessos automáticos.</p>"
  },
  {
    "code": "falta-de-sorte",
    "name": "Falta de Sorte",
    "tier": "suave",
    "desc": "<p>A vida parece sempre rir da sua cara, não importa o quanto você tente e se prepare, alguma coisa dará errado.</p><p>Uma vez por dia, o Narrador pode transformar uma rolagem bem-sucedida em uma falha, essa rolagem pode ser sua ou de qualquer outro, desde que seja para atrapalhar sua vida.</p>"
  },
  {
    "code": "hipocondriaco",
    "name": "Hipocondríaco",
    "tier": "suave",
    "desc": "<p>Ao ouvir alguém mencionar uma doença desconhecida — mesmo que ela não exista — você entra em estado de alerta extremo.</p><p>Caso falhe em uma Salvaguarda de Constituição CD 16, após o próximo descanso longo você passa a sentir sintomas psicossomáticos dessa doença por 1d4 dias.</p>"
  },
  {
    "code": "medroso",
    "name": "Medroso",
    "tier": "suave",
    "desc": "<p>O medo é seu companheiro constante, qualquer coisa possivelmente assustadora o impressiona e faz com que esbugalhe os olhos e grite, mesmo que você seja capaz de fazer o mesmo ou até superar ou que a criatura seja mais fraca que você.</p><p>Você é sempre o último nas ordens de iniciativa. Caso alguma outra criatura tenha esta individualidade, o Narrador decide quem irá primeiro.</p>"
  },
  {
    "code": "monstruoso",
    "name": "Monstruoso",
    "tier": "suave",
    "desc": "<p>Sua aparência é repulsiva, assustadora ou profundamente desconfortável para padrões sociais comuns. Circular livremente entre pessoas é sempre um risco.</p><p>Você recebe 1 nível de Preconceito (ou aumenta em 1 nível, caso já possua). Essa monstruosidade pode ser parcialmente ocultada com roupas adequadas, capas ou máscaras, a critério do Narrador.</p>"
  },
  {
    "code": "mudo",
    "name": "Mudo",
    "tier": "suave",
    "desc": "<p>Você é incapaz de produzir fala. Para se comunicar, precisa recorrer a gestos, escrita, linguagem de sinais ou outros meios alternativos.</p><p>Você falha automaticamente em Testes de Atributo que dependam diretamente da fala (ignorando sucessos automáticos).</p>"
  },
  {
    "code": "narcisista",
    "name": "Narcisista",
    "tier": "suave",
    "desc": "<p>Você ama a si mesmo e dedica grande atenção à própria aparência. Sua autoconfiança depende diretamente de se sentir belo, limpo e admirável.</p><p>Sempre que estiver sujo, desalinhado ou com a aparência comprometida, todos os seus Testes de Atributo sofrem -3 de penalidade.</p>"
  },
  {
    "code": "orgulho-cego",
    "name": "Orgulho Cego",
    "tier": "suave",
    "desc": "<p>Você é incapaz de ignorar provocações e insultos de qualquer tipo direcionados a você, seus companheiros ou entes queridos, independentemente do quão a situação seja inapropriada para isso.</p><p>Você falha automaticamente em testes contra Provocação e não pode ser acalmado (ignorando sucessos automáticos).</p>"
  },
  {
    "code": "rosto-debochado",
    "name": "Rosto Debochado",
    "tier": "suave",
    "desc": "<p>Sua aparência inspira antipatia e transmite a impressão constante de deboche, como se você estivesse sempre zombando de todos ao seu redor. Sempre que um encontro se inicia e não houver diferença relevante para as criaturas inimigas na escolha de alvos, elas optarão por atacar você.</p><p>Seu rosto também desperta irritação na Marinha, que se recusa a conceder grandes recompensas por seus feitos. Dessa forma, a cada atualização de recompensa, o valor recebido por você aumenta em, no máximo, 1.000 Bellys.</p>"
  },
  {
    "code": "sedutor-incorrigivel",
    "name": "Sedutor Incorrigível",
    "tier": "suave",
    "desc": "<p>Você sente um impulso constante de tentar seduzir qualquer pessoa que se encaixe em seus critérios de interesse, mesmo em situações inadequadas.</p><p>Enquanto estiver na presença direta de alguém por quem sente atração, você não pode manter concentração para sustentar Técnicas ou características.</p>"
  },
  {
    "code": "senso-de-direcao-ruim",
    "name": "Senso de Direção Ruim",
    "tier": "suave",
    "desc": "<p>Você é tão ruim com senso de direção que pode se perder em um corredor sem portas ou janelas e não importa se seus amigos estiverem de olho em você, no primeiro deslize, você pode sumir da vista deles, como mágica.</p><p>Sempre que você não estiver em um encontro e se deslocar de um lugar para o outro, andando ou correndo, você deve jogar um d6. Em um resultado 3 ou menor, você se perde e pode parar a até 500 metros de distância do ponto de partida. Caso você esteja acompanhado, você pode jogar o d6 duas vezes e escolher o resultado.</p>"
  },
  {
    "code": "sinceridade-excessiva",
    "name": "Sinceridade Excessiva",
    "tier": "suave",
    "desc": "<p>Você é incapaz de mentir, seja por valores morais ou simplesmente dificuldade em ocultar a verdade. E por mais que você se esforce para contar uma mentira, sempre será óbvio que não se trata da verdade.</p><p>Você falha automaticamente em Testes de Atributo de Presença (Enganação), ignorando sucessos automáticos.</p>"
  },
  {
    "code": "vicio",
    "name": "Vício",
    "tier": "suave",
    "desc": "<p>Você é dependente de uma substância específica, como álcool, nicotina, açúcar, drogas, determinados alimentos ou compostos similares. Sempre que deixa de consumir essa substância, os efeitos da abstinência passam a se acumular da seguinte forma:</p><p>1 Dia Sem Consumo: você recebe desvantagem nas jogadas para determinar a iniciativa.</p><p>2 Dias Sem Consumo: você não recebe nenhum benefício ao finalizar descansos curtos.</p><p>A Partir do 3º Dia: para cada dia adicional sem consumir a substância, você perde 1 Ponto de Poder do seu valor máximo.</p><p>Os Pontos de Poder perdidos dessa forma só são recuperados após o término de um descanso longo, desde que o vício tenha sido satisfeito antes desse descanso.</p>"
  },
  {
    "code": "voz-fina",
    "name": "Voz Fina",
    "tier": "suave",
    "desc": "<p>Você possui uma voz tão fina que chega a ser engraçada, e não importa o quanto tente engrossar ou disfarçar. Também não importa o seu tamanho ou aparência; nada impede que quem ouça sua voz a ache engraçada.</p><p>Você falha automaticamente em Testes de Atributo de Presença (Intimidação), ignorando sucessos automáticos.</p>"
  },
  {
    "code": "teimoso",
    "name": "Teimoso",
    "tier": "suave",
    "desc": "<p>Depois de tomar uma decisão ou concordar com um plano, você se apega a ele de forma absoluta. Mudar de ideia é visto como fraqueza.</p><p>Sempre que você recuar ou alterar uma decisão previamente tomada, perde 1 ponto de atributo de Vontade. Cada ponto perdido é recuperado após 1d4 semanas.</p>"
  },
  {
    "code": "trapalhao",
    "name": "Trapalhão",
    "tier": "suave",
    "desc": "<p>Sempre que você se move, sai esbarrando em tudo pela sua frente ou tropeça no nada, não consegue carregar qualquer coisa sem que tudo acabe no chão.</p><p>Ao realizar uma falha crítica em uma jogada de ataque (comum), você não só erra o golpe como também desencadeia um dos seguintes efeitos, de acordo com o Narrador:</p><p>Acerta a si mesmo ou um aliado próximo, causando até 5 pontos de dano na criatura;</p><p>Deixa a arma cair no chão;</p><p>Tropeça e recebe a condição 'Caído'.</p>"
  },
  {
    "code": "coracao-mole",
    "name": "Coração Mole",
    "tier": "media",
    "desc": "<p>Você não aguenta ver os outros sofrerem e evita qualquer situação que implique em causar dor física ou emocional em alguém que não mereça ou não possa se defender.</p><p>Suas jogadas de ataque (comum ou Técnicas) ou qualquer jogada com a intenção de prejudicar a criaturas que possa te causar empatia recebem desvantagem.</p>"
  },
  {
    "code": "dependente",
    "name": "Dependente",
    "tier": "media",
    "desc": "<p>Você se sente totalmente inseguro quando não tem seus companheiros para te ajudar ou proteger, pode ser por medo, insegurança ou por sempre querer se mostrar.</p><p>Enquanto não estiver com nenhum companheiro ou criatura que esteja cooperando contigo, dentro do seu raio de visão, você recebe -2 em todas as suas jogadas com o d20.</p>"
  },
  {
    "code": "divida-de-jogo",
    "name": "Dívida de Jogo",
    "tier": "media",
    "desc": "<p>Você deve uma quantia absurda de dinheiro a uma ou mais figuras extremamente poderosas e influentes. Trata-se de uma dívida tão elevada que talvez nunca consiga quitá-la. Além disso, qualquer tentativa de enganar ou despistar seus credores apenas aumenta a determinação deles em capturá-lo.</p><p>Uma vez por semana, em um dia predefinido pelo Narrador, um emissário aparecerá para cobrar 10d10 milhões de Bellys. Caso o pagamento não seja realizado, no início do dia seguinte você deverá fazer uma Salvaguarda de Vontade com CD igual ao seu nível + o número de semanas em atraso.</p><p>Se falhar, independentemente de onde esteja, você nunca estará verdadeiramente seguro: o personagem é considerado perdido, podendo morrer por envenenamento, sabotagem ou sequestro, a critério do Narrador.</p>"
  },
  {
    "code": "ferida-fantasma",
    "name": "Ferida Fantasma",
    "tier": "media",
    "desc": "<p>Você possui uma cicatriz, visível ou não, resultante de um acontecimento terrível no qual foi derrotado, perdeu pessoas queridas ou teve sua determinação quebrada (a ser definido em acordo com o Narrador).</p><p>As dores desse grande ferimento retornam sempre que você enfrenta momentos decisivos. Nessas situações, o Narrador pode exigir uma Salvaguarda de Vontade CD 16 até 3 vezes entre descansos longos.</p><p>Caso falhe, você não pode realizar ações nem ações poderosas até o início do seu próximo turno e sofre 10 pontos de dano Psíquico.</p><p>Se estiver diante de quem lhe causou esse trauma ou de acontecimentos relacionados ao ocorrido, a Salvaguarda é realizada com desvantagem. Nessas circunstâncias, o Narrador pode dobrar a quantidade de Salvaguardas entre descansos longos.</p>"
  },
  {
    "code": "ganancioso",
    "name": "Ganancioso",
    "tier": "media",
    "desc": "<p>Você realmente ama dinheiro, talvez, o motivo que lhe fez partir para se aventurar nos mares. Sempre que alguém falar de formas de ganhar quantidades consideráveis de dinheiro, por um pedido, uma missão ou revelando a localização de um tesouro escondido, você não consegue resistir, caso perca a oportunidade, você é acometido por uma grande depressão.</p><p>Caso se recuse a ganhar, perca dinheiro ou chances de enriquecer, você recebe -2 em todas as suas jogadas de ataque (comum ou Técnicas), Testes de Atributo e Salvaguardas por até 1d6 dias.</p>"
  },
  {
    "code": "linhagem-demoniaca",
    "name": "Linhagem Demoníaca",
    "tier": "media",
    "desc": "<p>Você é filho ou descendente de qualquer grau de uma figura, conhecida em todo o mundo, considerada execrável por uma grande parte da sociedade e, talvez, até maioria. Quando àqueles que odeiam essa pessoa descobrem sua relação com ela, eles transmitem todo esse ódio para você.</p><p>Você recebe preconceito severo de qualquer pessoa que odeie o seu antepassado.</p>"
  },
  {
    "code": "paranoico",
    "name": "Paranoico",
    "tier": "media",
    "desc": "<p>Você não confia em ninguém, nem em seus amigos. Nunca pede e nem aceita nenhuma ajuda, nem mesmo o tratamento de seus ferimentos. Não consegue descansar ou dormir direito: mesmo que esteja em uma estalagem ou outro lugar que parece ser totalmente seguro.</p><p>Você precisa de, no mínimo, 2 horas para se acalmar e achar que está tudo certo, para começar um descanso curto ou longo.</p>"
  },
  {
    "code": "preguicoso",
    "name": "Preguiçoso",
    "tier": "media",
    "desc": "<p>No início de cada dia, role 1d4. O resultado indica a quantidade máxima de tarefas que você consegue realizar sem sofrer penalidades. Após exceder esse limite, seus Pontos de Poder atuais são reduzidos à metade (arredondando para baixo). Esses são alguns exemplos de tarefas, mas o Narrador pode estipular outras:</p><p>Desempenhar sua profissão durante o dia;</p><p>Participar de um encontro de combate;</p><p>Executar pedidos, ordens ou favores que não tenham partido de você.</p><p>Essa penalidade só pode ocorrer uma vez por dia e é redefinida ao final de um descanso longo.</p>"
  },
  {
    "code": "consumidor-compulsivo",
    "name": "Consumidor Compulsivo",
    "tier": "forte",
    "desc": "<p>Você é impulsivo quando se trata de compras e gasta dinheiro de maneira descontrolada em itens que, muitas vezes, são inúteis ou prejudiciais.</p><p>Sempre que entrar em uma loja ou mercado, você deve fazer uma Salvaguarda de Vontade CD 18 para evitar gastar 50% do dinheiro total que você possuir.</p>"
  },
  {
    "code": "doenca-terminal",
    "name": "Doença Terminal",
    "tier": "forte",
    "desc": "<p>Você sofre de uma doença terrível e incurável, que consome lentamente sua vitalidade. No passado, você já foi muito mais forte do que é hoje, mas seu corpo está em constante declínio.</p><p>Sempre que você cair a 0 Pontos de Vida, perde permanentemente 1 ponto do atributo Constituição. Caso esse atributo chegue a 0, o personagem morre.</p>"
  },
  {
    "code": "ignorante",
    "name": "Ignorante",
    "tier": "forte",
    "desc": "<p>Você acredita que já detém praticamente todo o conhecimento necessário para alcançar seus objetivos, encarando novos aprendizados como perda de tempo.</p><p>Devido a essa mentalidade inflexível, você não pode aprender nenhuma profissão além de uma única escolhida na criação do personagem, sob nenhuma circunstância, nem aumentar a graduação dessa profissão.</p>"
  },
  {
    "code": "mediocre",
    "name": "Medíocre",
    "tier": "forte",
    "desc": "<p>Seu personagem não se destaca em nada do que faz, vivendo constantemente à sombra da mediocridade e sendo incapaz de brilhar nos momentos mais decisivos. Você nunca recebe os efeitos de acertos críticos em jogadas com o d20.</p>"
  },
  {
    "code": "pacifista",
    "name": "Pacifista",
    "tier": "forte",
    "desc": "<p>Você adota uma postura pacifista em sua abordagem à vida, buscando solucionar conflitos por meio do diálogo e da compreensão. Evita o uso da violência sempre que possível, priorizando a paz e a harmonia em suas interações.</p><p>Você só consegue executar ações que possam causar dano quando um aliado estiver com menos de 50% de Pontos de Vida ou alguma criatura não combatente estiver com risco de vida. Quando sozinho, você sempre se rende ou busca o caminho da não violência.</p>"
  },
  {
    "code": "sonolencia",
    "name": "Sonolência",
    "tier": "forte",
    "desc": "<p>Por algum motivo, você está sempre com sono, não importa se dormiu normalmente no dia anterior ou se acabou de acordar.</p><p>No início de um encontro de combate, você deve rolar 1d6, e em um resultado 3 ou menor, você passa a primeira rodada do combate com a condição 'Inconsciente'. Esse teste pode ser solicitado pelo Narrador em qualquer outro momento também.</p>"
  },
  {
    "code": "trauma-profundo-fobia",
    "name": "Trauma Profundo/Fobia",
    "tier": "forte",
    "desc": "<p>Em seu passado você passou por uma situação traumática irrecuperável, desde uma perda terrível, ter sofrido agressões ou qualquer evento negativamente marcante.</p><p>Toda vez que você se depara com uma situação semelhante ou possui um gatilho que traga suas memórias à tona, você é tomado por perturbações nítidas que pode te impedir de realizar ações ou comprometer sua concentração, devendo fazer uma Salvaguarda de Vontade CD 17, se passar no teste, você supera momentaneamente o trauma, se falhar, todos as suas jogadas com d20 sofrem -5 de penalidade. Após esse 1 minuto, você pode repetir o teste.</p>"
  }
];

/* CODIGOS — Capítulo 5 (Personalização), gerado a partir do livro */
export const CODIGOS = [
  {
    "code": "codigo-do-burocrata",
    "name": "Código do Burocrata",
    "desc": "<p>Como uma regra alternativa, que o Narrador pode usar na aventura, os personagens podem impor a si mesmos limites próprios, que têm origem por um trauma ou ser uma promessa, mas o importante é que essa é uma linha que define seu caráter, caso a ultrapasse, viver será como estar morto. Não é obrigatório a escolha de um código e só deve ser escolhido 1 por personagem. A tabela 'Seguindo seu Código' define quantos Pontos de Treinamento são adquiridos ao manter o código: Prejudicando a Si Mesmo = 1 PT; Confrontando um Aliado = 1 PT; Prejudicando o Grupo = 2 PT; Própria Vida em Risco = 2 PT; Vida do Grupo em Risco = 3 PT.</p><p>Sempre que uma situação deva ser resolvida, você estabelece um contrato social entre ambas as partes (seja verbal ou escrito), deixando claro as obrigações e necessidades de todos. Você se torna inteiramente fiel ao que foi acordado, seguindo estritamente todos os seus aspectos. Só podendo fazer algo diferente caso a outra parte quebre o contrato ou caso ele seja cumprido.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-da-gratidao",
    "name": "Código da Gratidão",
    "desc": "<p>Quando alguém salva sua vida, ou de um ente querido seu, você deve oferecer seus serviços para realizar um desejo qualquer dessa pessoa, desde que não firam a sua moral e ética.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-da-familia-sangue-ou-consideracao",
    "name": "Código da Família (Sangue ou Consideração)",
    "desc": "<p>Nunca desonrar as regras da sua família. Nunca ferir sua família, a não ser que um membro tenha traído o código familiar. Buscar vingança implacável contra quem ferir, matar ou trair a sua família.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-da-honestidade",
    "name": "Código da Honestidade",
    "desc": "<p>Nunca roubar, trapacear, mentir ou desobedecer às leis locais, nem permitir que seus companheiros o façam, sem uma justificativa muito plausível.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-da-redencao",
    "name": "Código da Redenção",
    "desc": "<p>Jamais atacar sem necessidade nem tirar vidas, sempre aceitar um pedido de rendição e sempre poupar seus oponentes depois de derrotados ou inconscientes.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-de-conduta",
    "name": "Código de Conduta",
    "desc": "<p>Nunca desobedecer a seus superiores, seja o Capitão da sua tripulação ou algum contratante de seus serviços. Sempre que seu superior lhe vetar ou mandar você parar, você obedece.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-do-cacador",
    "name": "Código do Caçador",
    "desc": "<p>Nunca matar filhotes ou fêmeas grávidas de qualquer espécie (combater ou capturar, quando necessário, mas nunca matar). Nunca abandonar uma caça abatida. Sempre escolher como oponente a pessoa ou criatura de aparência mais perigosa que esteja à vista.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-do-cavalheiro",
    "name": "Código do Cavalheiro",
    "desc": "<p>Nunca atacar uma mulher (ou fêmea de qualquer espécie humanoide), nem mesmo quando atacado, e nem permitir que seus companheiros o façam. Sempre atender um pedido de ajuda de uma mulher.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-do-combate",
    "name": "Código do Combate",
    "desc": "<p>Nunca atacar um oponente indefeso. Nunca participar de um encontro estando do lado de maior número (quando os números importarem) e que a desvantagem numérica crie uma diferença clara de força entre os lados.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-dos-herois",
    "name": "Código dos Heróis",
    "desc": "<p>Sempre cumprir sua palavra, sempre proteger qualquer pessoa ou criatura, que não seja maligna e mais fraca que você, jamais recusar um pedido de ajuda.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-do-lider",
    "name": "Código do Líder",
    "desc": "<p>Você sempre deve proteger seus subordinados ou criaturas que estejam em seus cuidados. Quando existirem códigos disciplinadores, para punir insubordinação ou atitudes reprováveis, você deve aplicá-los.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-do-lutador",
    "name": "Código do Lutador",
    "desc": "<p>Nunca recusar desafio ou pedido de duelo. Quando perder uma disputa, deve buscar lutar novamente e vencer quem o derrotou, com grande determinação.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-do-orgulho",
    "name": "Código do Orgulho",
    "desc": "<p>Você nunca foge de uma luta e não suporta ser considerado um covarde. Mesmo se o inimigo se mostrar superior, você não demonstra medo e o enfrenta com todas as suas forças.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-do-profissional",
    "name": "Código do Profissional",
    "desc": "<p>Caso receba um pedido relacionado à sua profissão, você se sente obrigado a ajudar. Mesmo que a pessoa não possa pagar, você aceita qualquer forma de recompensa ou dá alguma desculpa para poder efetuar o serviço.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  },
  {
    "code": "codigo-do-protetor",
    "name": "Código do Protetor",
    "desc": "<p>Você não consegue atacar ou ficar quieto assistindo pessoas indefesas sendo atacadas. Como crianças, idosos, animais e pessoas incapacitadas.</p><p><em>Manter o código sob pressão concede Pontos de Treinamento (ver tabela ‘Seguindo seu Código’).</em></p>"
  }
];

/* PROFISSOES — Capítulo 4 (Profissões), gerado a partir do livro */
export const PROFISSOES = [
  {
    "code": "adestrador",
    "name": "Adestrador",
    "desc": "<p>Um especialista em lidar com os mais diversos tipos de criaturas. O adestrador possui uma forte conexão com os animais, torna-se capaz não apenas de interagir, mas também compreendê-los.</p><p><strong>VÍNCULO ANIMAL</strong></p><p>Você pode escolher um único animal para ser seu companheiro mais fiel, ele se tornará seu 'Animal Vinculado' e estará sempre ao seu lado. Conforme você melhora como adestrador, seu companheiro animal também se torna mais habilidoso, chegando ao ponto de ser incomparável com qualquer outro animal da mesma espécie, recebendo as seguintes características:</p><ul><li>Você pode montar seu animal vinculado sem receber penalidades, contanto que ele tenha a mesma categoria de tamanho que você ou maior. Independentemente de você ter proficiência em veículos e montarias;</li><li>Salvaguardas de Destreza para manter-se montado, no seu animal, são feitos com vantagem, mesmo sem sela;</li><li>Caso o animal vinculado morra ele pode ser substituído por um novo dentro da tabela 'Animal Vinculado'. Ele também pode ser trocado, com aprovação do Narrador;</li><li>Enquanto você possuir seu animal vinculado, todos os seus gastos de alimentação e hospedagem são dobrados.</li></ul><p><strong>ESCOLHA UM ANIMAL</strong></p><p>Escolha uma criatura da tabela 'Animal Vinculado'. Caso queira outro animal, ele deve ser aprovado pelo Narrador.</p><p><strong>ANIMAL VINCULADO</strong></p><table><tr><td>Animal</td><td>For</td><td>Des</td><td>Con</td><td>Tamanho</td><td>Deslocamento</td><td>Voo</td><td>Nado</td></tr><tr><td>Águia/Falcão</td><td>16</td><td>20</td><td>10</td><td>Pequeno</td><td>6 metros</td><td>12 metros</td><td>6 metros</td></tr><tr><td>Crocodilo/Leão/Lobo/Macaco</td><td>20</td><td>14</td><td>12</td><td>Médio</td><td>9 metros</td><td>-</td><td>9 metros</td></tr><tr><td>Cachorro/Cobra/Gato/Raposa</td><td>12</td><td>20</td><td>14</td><td>Pequeno</td><td>12 metros</td><td>-</td><td>9 metros</td></tr><tr><td>Cavalo</td><td>16</td><td>10</td><td>20</td><td>Grande</td><td>12 metros</td><td>-</td><td>3 metros</td></tr><tr><td>Coruja/Pombo/Morcego</td><td>10</td><td>20</td><td>16</td><td>Miúdo</td><td>9 metros</td><td>9 metros</td><td>6 metros</td></tr><tr><td>Gorila/Panda/Touro/Urso</td><td>20</td><td>10</td><td>16</td><td>Grande</td><td>7,5 metros</td><td>-</td><td>7,5 metros</td></tr></table><p><strong>CARACTERÍSTICAS DO ANIMAL VINCULADO</strong></p><ul><li>O Animal Vinculado possui tamanho e formas de deslocamento de acordo com a tabela 'Animal Vinculado';</li><li>Ao término de um descanso longo, o Animal Vinculado recupera todos os Pontos de Vida;</li><li>Salvaguardas e Testes de Atributo de Sabedoria, Vontade e Presença do animal são os mesmos valores do adestrador;</li><li>Salvaguardas e Testes de Atributo de Força, Destreza e Constituição do animal são de acordo com a tabela 'Animal Vinculado' e sempre é adicionado o Bônus de Proficiência do adestrador;</li><li>O Animal Vinculado tem a mesma CR do adestrador e metade do seu PV (arredondado para baixo).</li></ul><p><strong>REGRAS DE COMBATE</strong></p><p>Ataques</p><ul><li>Jogadas de ataque usam o modificador do atributo principal (à escolha do jogador) + o Bônus de Proficiência do adestrador;</li><li>O dano base dos ataques é 1d4 + o modificador do atributo principal (à escolha do jogador) do adestrador;</li><li>O tipo de dano pode ser Perfurante, Cortante ou Contundente, dependendo da natureza do ataque.</li></ul><p>Iniciativa e Atividades Padrões</p><ul><li>O animal vinculado possui a mesma iniciativa do adestrador;</li><li>Ele pode se deslocar no turno do adestrador;</li><li>As ações disponíveis, quando comandado, são: Atacar (duas jogadas de ataque), Disparada, Esconder e Procurar.</li></ul><p><strong>TREINAMENTO ANIMAL</strong></p><p>Você é capaz de realizar treinamentos intensivos com seu Animal Vinculado, aprimorando significativamente suas habilidades. A cada 2 níveis de personagem (ou seja, a cada nível par), você pode escolher duas das opções abaixo (que podem ser escolhidas mais de uma vez) para beneficiar o animal vinculado, até o máximo de 6 vezes por animal:</p><ul><li>Poder Bruto: As jogadas de ataque do animal aumentam em um passo. O aumento dos passos sendo: 1d4 para 1d6; 1d6 para 1d8; 1d8 para 1d10; 1d10 para 1d12; e 1d12 para 2d6.</li><li>Super Nutrição: O animal aumenta uma categoria de tamanho, até o máximo Enorme.</li><li>Treino de Velocidade: O deslocamento terrestre e de nado do animal aumenta em 3 metros, até o máximo de 18 metros; ou o deslocamento de voo aumenta em 1,5 metro, até o máximo de 15 metros.</li><li>Melhorar Potencial: O animal adquire 2 Traços Comuns ou 1 Traço Específico das Zoan (ver Capítulo 6). Os traços escolhidos ignoram o requisito de forma, devem refletir as características do animal e precisam da aprovação do Narrador.</li></ul><p>Se o animal morrer ou for substituído, os treinamentos não são transferidos para o novo Animal Vinculado.</p><p><strong>ADESTRAR ANIMAIS</strong></p><p>Ao tentar adestrar um animal selvagem, o Narrador pode solicitar um Teste de Atributo de Sabedoria contra uma CD igual a 10 + o Nível de Desafio do alvo.</p><ul><li>O animal adestrado permanecerá ao seu lado por 24 horas, podendo ser montado e usando habilidades conforme ordenado;</li><li>Se receber dano, for obrigado a se ferir ou a atacar seus próprios companheiros, o animal se liberta imediatamente do controle, podendo fugir ou tornar-se hostil;</li><li>Não é possível manter mais de um animal adestrado ao mesmo tempo, isso não inclui o Animal Vinculado.</li></ul><p>Alternativamente, o mesmo teste pode ser usado para comunicação, afugentar ou acalmar o animal. Porém, um animal acalmado voltará a ser hostil caso ele, ou membros de seu grupo, sejam atacados ou ameaçados de qualquer forma.</p><p><strong>Ferramentas:</strong> Ferramentas de Adestrador: 1 mochila pequena, 30 rações para animais, livros de veterinária, nutrição animal e de treinamento animal, chicote, apito, 1 kit médico e 3 kits de primeiros socorros.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "acr",
        "prf",
        "ins",
        "prc",
        "per",
        "sur"
      ]
    }
  },
  {
    "code": "arqueologo",
    "name": "Arqueólogo",
    "desc": "<p>Grandes estudiosos de línguas, povos e estruturas antigas, os arqueólogos são capazes de analisar ruínas e descobrir relíquias valiosas.</p><p><strong>EXPLORADOR ATENTO</strong></p><p>Graças ao seu conhecimento e experiência em exploração e ruínas, você está sempre atento a detalhes que podem revelar armadilhas, caminhos alternativos ou soluções para diferentes situações.</p><ul><li>Guia: Sempre que realizar Testes de Atributo ou Salvaguardas relacionados à exploração de locais e ruínas, você recebe vantagem. Além disso, caso seja bem-sucedido, todas as criaturas que presenciarem sua ação — ou que você instruir diretamente — obtêm sucesso automático nos mesmos testes, se forem feitos posteriormente aos seus.</li><li>Salvador: Quando uma criatura falhar em uma Salvaguarda contra perigos do ambiente ou armadilhas (como pedras caindo, chão desmoronando, dardos envenenados etc.), você pode usar sua reação para reduzir o dano pela metade ou anular seus efeitos (como veneno, queda em precipício ou separação do grupo). Para que isso seja possível, o Narrador pode exigir o uso de itens apropriados, como cordas ou chicote. Essa característica não poderá ser usada novamente até o término de um descanso curto ou longo.</li><li>Solucionador: Desde que possua suas ferramentas, ao se deparar com enigmas, puzzles, fechaduras ou outros tipos de barreiras que guardam passagens e tesouros, você pode decifrar usando um método de solução infalível. Essa característica pode ser usada uma vez a cada 5 explorações. Caso o Narrador não queira revelar diretamente a solução, ele deve ao menos fornecer uma dica generosa. Nessa situação, o uso da característica não conta para o limite de 1 vez a cada 5 explorações.</li></ul><p><strong>ENCONTRAR TESOURO</strong></p><p>Ao adentrar calabouços, ruínas ou cidades antigas, você pode utilizar seu conhecimento sobre estruturas antigas e costumes culturais de povos ancestrais para identificar acessos obstruídos, mecanismos ocultos e passagens secretas, revelando os mais variados tipos de tesouros.</p><p>No início de uma exploração, o Narrador pode solicitar que você realize um Teste de Atributo de Sabedoria. Em caso de sucesso, você encontra pistas que levam a um tesouro escondido.</p><p><strong>DESCOBRINDO TESOUROS</strong></p><p>Ao encontrar a câmara secreta, role um d8 e consulte a tabela 'Tesouros Perdidos' para determinar o que foi achado.</p><ul><li>Artefatos: Caso o resultado seja um artefato ('Dial', 'Arma Meito', 'Equipamento Engenhado' ou 'Akuma no Mi'), role também um d10 para definir qual subdivisão foi encontrada. O Narrador decide se o item está danificado ou em perfeito estado.</li><li>Riquezas: Caso o resultado da tabela seja 'Joias e Ouro', você recebe riquezas no valor do seu nível de personagem × ฿ 500.000.000.</li></ul><p><strong>REGRAS ESPECIAIS</strong></p><ul><li>Dials: Ao encontrar um tesouro e o resultado for 'Dial', você pode rolar duas vezes o d10 e recebe ambos os resultados.</li><li>Testando a Sorte: Ao encontrar tesouros que não sejam 'Joias e Ouro', você pode rolar o dado da subdivisão duas vezes e escolher o resultado desejado.</li><li>Akuma no Mi: Ao encontrar uma, você pode realizar um Teste de Sabedoria para tentar identificar o poder do fruto.<ul><li>CD 15: Frutos historicamente relevantes.</li><li>CD 20: Frutos obscuros.</li><li>CD 25: Frutos desconhecidos.</li></ul></li></ul><p>Não é possível obter sucesso automático para identificar os frutos. Além disso, o Narrador pode decidir que o fruto é irreconhecível ou não catalogado.</p><p><strong>CONHECIMENTO PROIBIDO</strong></p><p>Os arqueólogos são indispensáveis para a interpretação dos Poneglyphs, capazes de compreendê-los parcialmente e, com dedicação ou mais estudos, decifrar por completo suas mensagens. Seus conhecimentos derivam de fragmentos dos ensinamentos de Ohara e de outros saberes espalhados pelo mundo.</p><p>No entanto, decifrar essas inscrições e conhecer a história do Século Vazio é considerado um crime, e qualquer informação relacionada é rigidamente protegida. Assim, o Narrador pode decidir que você ainda não possui o conhecimento necessário, introduzindo-o posteriormente na aventura — seja por meio de cadernos de anotações, antigos registros ou até mesmo através de um estudioso disposto a ensiná-lo.</p><p><strong>PONEGLYPHS</strong></p><p>As escrituras dos Poneglyphs são complexas e o acesso as informações para decifrar seus segredos já está perdido. Ainda assim, é possível aos arqueólogos, tentar entender seus significados com estudo e recolhendo informações.</p><ul><li>Poneglyphs Históricos: Poneglyphs Históricos falam da história ou trazem dicas do local, histórias do século perdido ou detêm recados para as próximas gerações. Para serem decifrados totalmente, é necessário ser bem-sucedido em um Teste de Atributo de Sabedoria CD 20.</li><li>Poneglyphs Instrutivos: Poneglyphs Instrutivos geralmente indicam onde podem ser encontrados outros Poneglyphs, armas antigas e objetos inestimáveis. Para serem decifrados totalmente, é necessário ser bem-sucedido em um Teste de Atributo de Sabedoria CD 25.</li><li>Poneglyphs Caminho: Existem 4 Poneglyphs Caminho, que indicam como chegar até Laugh Tale. Para serem decifrados totalmente, é necessário ser bem-sucedido em um Teste de Atributo com de Sabedoria CD 30.</li></ul><p><strong>FALHAR EM UMA TRADUÇÃO</strong></p><p>Caso falhe em decifrar as escrituras de um Poneglyph ou texto antigo, você ainda pode continuar tentando. Após estudar por 3 dias, você pode repetir o teste, reduzindo em 5 o CD, cada vez que você repetir a tentativa de tradução.</p><p><strong>Ferramentas:</strong> Ferramentas de Arqueólogo: 1 mochila pequena, 1 lanterna, 1 corda, 1 tenda, livros de história, geografia e culturas antigas, 1 chicote, 1 porta mapas, 1 caderno e caneta e 1 kit de escalada.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "his",
        "ins",
        "inv",
        "prc",
        "per",
        "sur"
      ]
    }
  },
  {
    "code": "botanico",
    "name": "Botânico",
    "desc": "<p>O mundo abriga uma vasta variedade de plantas com propriedades extraordinárias. Os botânicos são especialistas em compreender, manipular e aproveitar ao máximo tudo aquilo que as plantas podem oferecer.</p><p><strong>MANIPULAÇÃO DE PLANTAS</strong></p><p>Apenas os botânicos possuem o conhecimento e a Técnica necessários para extrair todo o potencial dessas espécies e utilizá-las em prol dos seus objetivos. As manifestações mais comuns dessa manipulação incluem:</p><p><strong>CULTIVAR POP GREEN</strong></p><p>Você se torna capaz de cultivar e utilizar sementes Pop Green, seguindo as regras descritas no Guia do Narrador. Além disso, a cada 10 novas sementes que você produzir, você pode escolher qual tipo de Pop Green germinará no início do próximo dia.</p><p><strong>CRIAR VIVRE CARD</strong></p><p>Você pode identificar e coletar a semente de uma árvore especial conhecida como Vivre Tree. Essa árvore exige cuidados extremamente específicos e meticulosos, levando 1 mês para amadurecer até formar uma cavidade natural onde pode ser colocado um pedaço de unha, pele ou fio de cabelo de uma criatura. Após 1 semana de nutrição contínua, a árvore produz um fruto semelhante a uma noz e, ao abri-lo, revela-se um pequeno rolo de papel: a Vivre Card.</p><p>Uma Vivre Card parece um pedaço comum de papel, mas é completamente à prova d'água e de fogo — embora ainda possa ser rasgada. Quando dividida, cada fragmento aponta e se move em direção do dono, independentemente da distância ou localização no mundo, permitindo que se determine sempre a direção da pessoa vinculada ao cartão.</p><p>A força vital do dono é refletida diretamente no papel, assim como sua presença e intensidade espiritual. Se o dono estiver debilitado, o cartão começará a se consumir. Caso ele se recupere, o pedaço volta ao tamanho original; mas, se morrer, o papel se desintegrará por completo.</p><p><strong>REVESTIR COM RESINA</strong></p><p>O botânico possui o conhecimento e a Técnica necessários para manipular a resina expelida pelas árvores Yarukiman Mangrove, permitindo revestir pessoas, objetos ou navios com uma película resistente.</p><p>Navios revestidos podem atravessar os mares submersos, recebendo oxigênio suficiente para uma semana de viagem, além de adquirirem alta resistência à pressão das profundezas, suportando até 10.000 metros sem dificuldades. Essas embarcações podem se mover como submarinos, porém sem penalidades de velocidade por peso, sendo impulsionadas exclusivamente pelas correntes marinhas (mais detalhes no Guia do Narrador).</p><p>A bolha criada pelo revestimento possui resistência a dano Contundente e vulnerabilidade a dano Cortante e Perfurante.</p><p>Usuários de Akuma no Mi revestidos pela resina não sofrem a condição 'Enfraquecido', mesmo quando totalmente submersos.</p><p>Caso estoure, a pressão do mar causa 20d10 de dano Contundente para cada 10 metros abaixo do nível do mar a tudo que estiver dentro da bolha.</p><p>O revestimento só permanece estável enquanto estiver a uma certa distância das raízes das Yarukiman Mangrove ou quando estiver completamente submerso.</p><p>A quantidade de Pontos de Vida da bolha depende do tamanho do alvo revestido, sendo os valores mais comuns:</p><ul><li>Criatura/Objetos Grande ou menor: 50 PV.</li><li>Navios Pequenos, Médios e Grandes: 150 PV.</li><li>Criaturas/Objetos Enormes ou maiores: 100 PV.</li><li>Navios Enormes e Colossais: 300 PV.</li></ul><p><strong>GEOMANTE</strong></p><p>Ao gastar 3 horas reunindo folhas, sementes, musgo e outros materiais naturais do ambiente, você pode realizar um Teste de Atributo de Sabedoria CD 17 para criar compostos de uso único. O tipo de composto que você é capaz de produzir depende diretamente do terreno em que você se encontra. São eles:</p><ul><li>Pasta Curativa (Florestas Verdes): Ao aplicar em ferimentos, recupera os Pontos de Vida da criatura em um valor igual a 2 vezes o Nível de Personagem do botânico.</li><li>Incenso do Predador (Cavernas): Um líquido que pode ser derramado e exala um odor perceptível apenas por animais, mantendo essas criaturas afastadas por 10 horas.</li><li>Pedra-Fumaça (Montanhas): Um pequeno composto mineral que, quando quebrado, libera uma nuvem de poeira cinzenta, criando uma cortina de fumaça de que se expande por uma esfera de 6 metros de raio.</li><li>Líquido Aromático (Pântanos): Um líquido que pode ser derramado e exala um odor perceptível apenas por animais, atraindo essas criaturas por 10 horas.</li><li>Areia Refrescante (Desertos): Um pó claro que, quando aplicado sobre a pele, anula efeitos causados por altas temperaturas por 10 horas. Cada dose pode ser aplicada em até 4 criaturas.</li><li>Essência do Calor (Tundra): Um líquido translúcido que gera calor imediato ao ser espalhado, anulando efeitos causados por baixas temperaturas por 10 horas. Cada dose pode ser aplicada em até 4 criaturas.</li><li>Resina Obsidiana (Áreas Vulcânicas): Um gel escuro que, ao ser lançado contra uma superfície, endurece instantaneamente, formando uma barreira rochosa de até 1,5 metro de altura e 3 metros de largura, que dura por 1 hora até se desfazer em poeira.</li></ul><p><strong>HERBALISMO</strong></p><p>Desde que possua um Kit de Herbalismo você consegue identificar plantas, coletar com segurança seus componentes úteis e utilizá-los na criação de remédios, poções e antídotos.</p><p><strong>PROFICIÊNCIA EM TESTES ESPECÍFICOS</strong></p><p>Você pode aplicar seu Bônus de Proficiência em perícias específicas relacionadas ao uso de plantas.</p><ul><li>Investigação: Sua experiência permite encontrar pistas em ambientes naturais, como pegadas em meio à vegetação ou alterações incomuns em plantas, que indicam envenenamento, doenças ou rastros de criaturas.</li><li>Medicina: Você sabe como usar ervas medicinais para tratar sangramento, ferimentos, doenças e envenenamentos.</li><li>Sobrevivência: Durante expedições em áreas selvagens, você consegue identificar plantas comestíveis, curativas ou perigosas, além de localizar fontes de água potável com mais facilidade.</li></ul><p><strong>Ferramentas:</strong> Ferramentas de Botânico: 1 mochila pequena, 1 lupa de análise, ferramentas de coleta de plantas, livros de botânica e ecossistemas, 5 frascos de armazenamento, 1 pequeno estilete de poda.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "his",
        "ins",
        "inv",
        "nat",
        "prc",
        "sur"
      ]
    }
  },
  {
    "code": "cacador-de-recompensas",
    "name": "Caçador de Recompensas",
    "desc": "<p>Caçadores de recompensas são a melhor opção para rastrear inimigos e negociar com todo tipo de organização.</p><p><strong>ENCONTRAR UM ALVO</strong></p><p>A dificuldade em determinar a localização de um alvo depende da disponibilidade de informações, que varia conforme o tipo de pessoa: alguns são discretos e zelam por sua privacidade, enquanto outros fazem questão de se exibir.</p><p>As informações necessárias não se limitam apenas ao alvo, mas também a suas conexões locais e distantes. É importante saber o nível de ameaça que representa, tanto individualmente quanto por meio de subordinados ou companheiros. Além disso, o caçador deve reunir dados sobre hábitos, rotinas, fraquezas e capacidades de combate.</p><p>Na maioria dos casos, os alvos se encaixam nas categorias abaixo, embora alguns possam pertencer a mais de uma. Nestes casos, o Narrador decide qual categoria é a mais relevante:</p><ul><li>Pessoa Comum (CD 12): Indivíduos que levam uma vida normal e, em geral, nem suspeitam que podem estar sendo caçados. Isso facilita o rastreamento e a coleta de informações.</li><li>Figura Pública (CD 14): Governantes, políticos, celebridades ou qualquer pessoa de destaque. Embora rastrear seja fácil, as informações obtidas costumam ser superficiais, distorcidas ou falsas.</li><li>Criminoso Procurado (CD 16): Alvo mais comum para caçadores. Alguns são experientes e sabem ocultar rastros ou silenciar delatores; outros, mais reclusos ou novatos, chamam pouca atenção, dificultando sua localização.</li><li>Identidade Oculta (CD 25): Pessoas influentes no submundo que mantêm anonimato para proteger status ou títulos. Costumam ter organizações e usar pseudônimos, tornando extremamente difícil obter suas informações.</li><li>Entidade (CD 30): O tipo mais desafiador. Sua própria existência é incerta, baseada apenas em boatos ou associações de eventos misteriosos a uma figura ou criatura. Há indícios, mas nunca provas concretas.</li></ul><p>O caçador pode realizar um Teste de Atributo Sabedoria para reunir informações suficientes que permitam localizar o alvo. Um Primeiro Teste pode ser feito assim que o caçador toma ciência do alvo — por exemplo, ao ver um cartaz de procurado ou ao receber uma missão — para verificar se já existem conhecimentos prévios.</p><p>Se o teste falhar, novos testes podem ser realizados a cada 2 dias ou sempre que surgirem informações relevantes (por exemplo: ao entrar em uma cidade ligada ao alvo, ao conversar com alguém que possua dados úteis, ao acessar uma nova pista ou em outras situações que o Narrador julgar apropriadas). A CD para localizar o alvo reduz em 2 a cada novo teste realizado.</p><p>Custo: Sempre que fizer um teste dessa característica, o caçador deve gastar uma quantia de dinheiro determinada pelo Narrador, geralmente entre ฿ 5.000 e ฿ 25.000, representando subornos, presentes ou pagamentos para as fontes de informação.</p><p><strong>ALVO MARCADO</strong></p><p>Quando você passa em um Teste de Atributo de Sabedoria com a característica 'Encontrar um Alvo', você pode escolher marcar este alvo e receber alguns bônus durante sua caçada.</p><p>Você pode manter até 3 criatura ao mesmo tempo, caso desista de marcar a criatura, terá até 3 dias para marcá-la novamente sem precisar repetir testes. Você recebe os seguintes benefícios ao marcar um alvo:</p><ul><li>Marca do Caçador: Você sempre sabe aonde o alvo está e recebe vantagem em Testes de Atributo de Destreza (Furtividade), para se esconder de alvos marcados.</li><li>Passos Longos: Durante uma perseguição ao seu alvo marcado, terreno difícil proveniente do solo e da natureza não afeta o seu deslocamento.</li><li>Dificultar Detecção: O alvo marcado por você tem desvantagem em tentar fazer testes de Sabedoria ou Vontade para te localizar.</li></ul><p><strong>CONTRATOS CLANDESTINOS</strong></p><p>Caçadores de recompensas costumam cultivar contatos em todos os lugares, relacionando-se com os mais variados tipos de pessoas para facilitar seus negócios. Essas conexões podem incluir membros corruptos da Marinha e do Governo Mundial. Assim, mesmo que o caçador seja pirata ou criminoso, ele ainda pode negociar recompensas 'por debaixo dos panos', desde que pague uma propina sobre seus ganhos.</p><p>Se o caçador possuir contatos na região, pode fechar acordos que garantem entre 70% e 90% do valor original da recompensa para criminosos capturados vivos.</p><p>O Narrador pode solicitar um Teste de Atributo Sabedoria para verificar se o caçador já conhece alguém com quem negociar ou se é capaz de localizar e conquistar a confiança de um novo contato confiável.</p><p><strong>RECOMPENSAS</strong></p><p>O sistema de recompensas é um instrumento do Governo Mundial para agilizar a captura de criminosos: divulga suas identidades e oferece um prêmio em dinheiro pela prisão. Isso atrai mais pessoas à caça dos procurados; muitos fazem disso profissão e tornam-se caçadores de recompensas.</p><p>Os cartazes de procurados frequentemente trazem a expressão 'Vivo ou Morto', indicando que o direito à vida do procurado foi revogado. Da mesma forma, outros direitos deixam de se aplicar — por exemplo, não é considerado crime roubar de piratas.</p><p>Quanto mais perigoso o Governo Mundial considerar um criminoso, maior será a recompensa por sua captura. Entretanto, o valor pode ser reduzido em até 40% caso o procurado seja entregue morto, já que o Governo Mundial e a Marinha costumam preferir execuções públicas como exemplo dissuasório.</p><p><strong>Ferramentas:</strong> Ferramenta de Caçador de Recompensas: 1 mochila pequena, livros de comportamento e outros temas diversos, 3 kits de primeiros socorros, 2 cordas, 2 pares de algemas e 1 tipo de bússola à sua escolha (bússola ou log pose).</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "ste",
        "itm",
        "inv",
        "prc",
        "per",
        "sur"
      ]
    }
  },
  {
    "code": "carpinteiro",
    "name": "Carpinteiro",
    "desc": "<p>O carpinteiro é o responsável por manter a embarcação em perfeito estado, garantindo reparos constantes e realizando melhorias sempre que possível.</p><p><strong>TRABALHO EM MADEIRA</strong></p><p>O carpinteiro possui o conhecimento e o vigor necessários para construir embarcações de qualquer porte, seus cômodos, e outros componentes. Detalhes sobre tempo, valores, peças e propriedades das embarcações estão no Capítulo 14 deste livro.</p><ul><li>Eficiência: Você reduz em 40% todos os possíveis custos adicionais de construção e reparo de embarcações, determinados pelo Narrador e que não sejam previamente definidos por regras ou não possuam um custo determinado, evitando desperdícios de matéria-prima.</li><li>Eficácia: Embarcações construídas por você recebem +12 nós (24 km/h) de velocidade e +3 em CR.</li><li>Corpo Preparado: Enquanto estiver trabalhando na construção ou reparo de uma embarcação, seus dias ainda podem ser contabilizados normalmente para treinamentos.</li></ul><p><strong>CONSERTO EM MADEIRA</strong></p><p>Conforme o navio sofre danos, cabe ao carpinteiro realizar os reparos. Esse trabalho exige atenção e qualidade, pois é pensado para garantir a durabilidade da embarcação. Por isso, consome mais tempo e requer o uso do tipo de madeira mais adequado para longas navegações.</p><p>O tempo de conserto varia de acordo com o nível de dano da embarcação, além de envolver custos adicionais com materiais necessários para o reparo. As regras específicas estão descritas na tabela 'Navio Danificado'.</p><p><strong>NAVIO DANIFICADO</strong></p><table><tr><td>Estado</td><td>Pontos de Vida</td><td>Tempo de Reparo</td><td>Custo Adicional</td></tr><tr><td>Normal</td><td>99% ou menos</td><td>1d6 dias</td><td>฿ 15.000</td></tr><tr><td>Danificado</td><td>80% ou menos</td><td>2d6 dias</td><td>฿ 100.000</td></tr><tr><td>Muito Danificado</td><td>50% ou menos</td><td>4d6 dias</td><td>฿ 300.000</td></tr><tr><td>Irreparável</td><td>5% ou menos</td><td>-</td><td>-</td></tr></table><p>O custo para recuperar os Pontos de Vida de uma embarcação varia conforme a madeira utilizada no reparo:</p><ul><li>Cedro: ฿ 40.000 por cada PV recuperado.</li><li>Carvalho: ฿ 100.000 por cada PV recuperado.</li><li>Cerejeira: ฿ 190.000 por cada PV recuperado.</li><li>Adam: ฿ 500.000 por cada PV recuperado.</li></ul><p><strong>CONFECÇÃO RÁPIDA</strong></p><p>Desde que haja madeira disponível, um carpinteiro pode criar praticamente qualquer estrutura. Com uma ação (equivalente a 6 segundos), o carpinteiro consegue construir 1,5 m² de uma estrutura.</p><p>Cada segmento construído possui Classe de Resistência 10 e 10 Pontos de Vida para cada 1,5 m².</p><ul><li>Chão: Estrutura destinada a criar ou ampliar áreas para livre movimentação das criaturas.</li><li>Escada: Estrutura composta por degraus, permitindo o acesso a locais mais altos de forma rápida.</li><li>Parede: Estrutura erguida para proteção contra ataques e intempéries. Criaturas que utilizarem essas paredes como cobertura podem se beneficiar das regras de cobertura (ver Capítulo 12).</li><li>Ponte: Estrutura ideal para conectar áreas elevadas e separadas da maneira mais direta possível. Permite que criaturas se desloquem em segurança, tanto normalmente quanto em disparada, sem a necessidade de realizar Salvaguardas para evitar quedas.</li></ul><p>Custo: Ao usar a habilidade Confecção Rápida, você gasta ฿ 22.000 em tábuas de madeira como matéria-prima (ou uma quantidade equivalente de madeira determinada pelo Narrador, como destroços de navios ou troncos de árvores) para cada 1,5 m², além de 1d4 kits de construção.</p><p><strong>REPARO EMERGENCIAL</strong></p><p>Um carpinteiro habilidoso é capaz de realizar reparos no navio mesmo em meio a uma batalha, em alto-mar e com recursos limitados. Para isso, pode utilizar qualquer material disponível: equipamentos ao alcance, partes do próprio navio ou até destroços da embarcação inimiga.</p><p>Para executar o reparo, faça um Teste de Atributo de Sabedoria CD 15. Em caso de falha, você pode tentar novamente após 5 minutos.</p><p>O processo leva 1 minuto e recupera 30d10 + 50 Pontos de Vida do navio. Contudo, esse reparo é temporário: após 2d6 dias, todos os PV restaurados dessa forma são perdidos.</p><p>Se um novo reparo emergencial for realizado enquanto outro ainda estiver ativo, ele substitui os Pontos de Vida restaurados anteriormente, em vez de acumulá-los.</p><p>Custo: Sempre que você usar essa característica, você gasta 1d4 kit de construção.</p><p><strong>Ferramentas:</strong> Ferramenta de Carpinteiro: 1 mochila pequena, livros de marcenaria, 10 plantas de construção, 1 serrote, 1 martelo, 1 kit de construção.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "acr",
        "ath",
        "his",
        "inv",
        "per",
        "slt"
      ]
    }
  },
  {
    "code": "cientista",
    "name": "Cientista",
    "desc": "<p>O cientista busca, por meio do conhecimento, explorar e desvendar os segredos do universo, criando soluções para problemas complexos. Sua genialidade permite reproduzir praticamente tudo aquilo que consiga conceber e entender — embora o alto custo de suas criações seja seu maior inimigo e limitação.</p><p><strong>FATOR LINHAGEM</strong></p><p>Todas as formas de vida possuem o Fator Linhagem, e sua manipulação pode alterar profundamente sua essência. A forma mais comum de modificar esse fator é consumir uma Akuma no Mi, recebendo habilidades sobrenaturais. A seguir estão as aplicações mais relevantes desse conhecimento. Os detalhes essenciais estão descritos, mas o Narrador pode exigir requisitos adicionais.</p><p>Para realizar qualquer uma das criações abaixo, os seguintes requisitos devem ser atendidos:</p><ul><li>Uma cápsula de recriação genética, no valor de ฿ 1.500.000.000 em materiais, com 1 mês de construção, tendo o formato de um cubo de 3 metros (sua construção deve ser realizada por um engenheiro);</li><li>Estar em um laboratório ou ambiente adequado;</li><li>Energia constante durante todo o processo, consumindo 1 bateria grande por dia.</li></ul><p><strong>GREEN BLOOD</strong></p><p>O Fator Linhagem de um usuário de Akuma no Mi pode ser estudado e replicado, permitindo criar uma substância sanguínea capaz de conceder ao usuário os mesmos poderes do fruto analisado.</p><p>Após ser bem-sucedido em um Teste de Atributo de Sabedoria CD 17, o cientista pode decifrar o Fator Linhagem e sintetizar o green blood. Para utilizá-lo, o frasco deve ser injetado diretamente na veia da criatura, e seus efeitos duram até que todos os PP sejam gastos ou até o término de um descanso longo. Cada frasco concede 10 Pontos de Poder, utilizáveis apenas em Técnicas do fruto estudado.</p><p>Custo: ฿ 200.000.000 por frasco.</p><p>Tempo de Sintetização: 12 horas na cápsula genética.</p><p>Enquanto uma criatura estiver sob os efeitos do Green Blood, ela estará sujeita a todas as fraquezas inerentes a um usuário de Akuma no Mi.</p><p><strong>AKUMA NO MI ARTIFICIAL</strong></p><p>Outra forma de manipular o Fator de Linhagem é recriar artificialmente a Akuma no Mi consumida por alguém, desde que seja uma Zoan. O fruto artificial replica plenamente suas características — com exceção do despertar.</p><p>Após um Teste de Atributo de Sabedoria CD 17, estando em um laboratório adequado, o cientista pode decifrar o Fator de Linhagem e iniciar a criação do fruto.</p><p>Custo: ฿ 2.500.000.000 por fruto.</p><p>Tempo de Criação: 1 mês na cápsula genética.</p><p><strong>CLONAGEM</strong></p><p>Ao decompor o Fator de Linhagem de um ser vivo e ser bem-sucedido em um Teste de Atributo de Sabedoria CD 15, você se torna capaz de recriar completamente a criatura por meio de clonagem.</p><ul><li>O tempo para clonagem dentro da capsula genética é de 6 meses + 1 mês para cada ano de envelhecimento da criatura;</li><li>O custo depende da quantidade de material disponível da criatura:</li><li>Amostras Pequenas (saliva, fios de cabelo, etc.): ฿ 1.000.000.000 + ฿ 100.000.000 por mês.</li><li>Corpo Morto Completo: Custo e tempo total são reduzidos pela metade.</li></ul><p>A criatura clonada será controlada pelo Narrador, exceto no caso de personagens mortos de jogadores, que podem ser controlados novamente por seus respectivos jogadores.</p><p>Além da clonagem completa, o mesmo método pode ser usado para criar membros ou órgãos, levando 1 mês e custando ฿ 100.000.000 cada.</p><p><strong>MELHORIA GENÉTICA</strong></p><p>Você pode conceder a uma criatura os mesmos benefícios da característica 'Heat' dos lunarianos, podendo alterar o tipo de dano de 'Fogo' para qualquer outro — exceto 'Psíquico', 'Energia', 'Trovejante' e 'Verdadeiro'.</p><p>O personagem deve passar por um tratamento mensal que demora 1 hora e custa ฿ 1.000.000. Recebendo esses benefícios após 3 meses de tratamento, mas só se tornando permanente após 1 ano de tratamento.</p><p>Alternativamente, pelo mesmo custo e duração, você pode garantir um benefício diferente que garante um aumento de PV máximos igual a 4 vezes o nível de personagem da criatura e proficiência em uma perícia qualquer, com exceção das perícias de 'Haki', 'Sobrenatural' e 'Sorte'. Criaturas não podem passar por ambos tratamentos.</p><p><strong>OBJETO USUÁRIO</strong></p><p>Além da manipulação do Zero, você também possui o conhecimento necessário para combinar o Fator de Linhagem de uma Akuma no Mi do tipo Zoan com objetos ou armas inanimadas.</p><p>Após o tempo adequado de permanência de ambos os elementos dentro da cápsula de recriação, ocorre a fusão: o objeto passa a abrigar a consciência existente no fruto, replicando plenamente suas características e poderes.</p><p>Custo: ฿ 500.000.000.</p><p>Tempo de Criação: 1 mês na cápsula genética.</p><p><strong>CIÊNCIA AVANÇADA</strong></p><p>Além do conhecimento genético o cientista consegue aplicar o conhecimento de outras áreas com muita eficácia. Sendo capaz de criar tecnologias complexas.</p><p><strong>CRIAR RAID SUIT</strong></p><p>O cientista é capaz de criar um traje de batalha extremamente poderoso, conhecido como Raid Suit — uma tecnologia avançada capaz de se tornar a principal força militar de uma nação (regras e descrições detalhadas no Guia do Narrador).</p><p>Esses trajes só podem ser utilizados por personagens que tenham passado por 1 ano completo de tratamento da característica 'Melhoria Genética' e não podem ser usados por personagens de nível 10 ou inferior.</p><p>Custo: ฿ 1.000.000.000.</p><p>Tempo de Criação: 1 semana.</p><p><strong>CIBORGUIZAÇÃO</strong></p><p>Você tem acesso a tecnologias que permitem que criaturas passem por intervenções mecânicas para modificar seus corpos. As mesmas modificações também podem ser aplicadas a robôs criados por engenheiros.</p><p>Sempre que um personagem recebe uma prótese mecânica ou passa por uma modificação corporal, ele adquire uma das habilidades presentes na característica 'Corpo Robótico' do Estilo de Combate Ciborgue (Capítulo 3), desde que seja coerente com a prótese e o membro modificado.</p><p>É necessária uma prótese ou dispositivo criado por seus conhecimentos, em conjunto com os de um engenheiro, e a aplicação deve ser realizada por meio de uma cirurgia executada por um médico. Caso você não possua essas profissões, outros personagens com elas devem auxiliar no processo.</p><p>Além das próteses, você pode realizar melhorias tecnológicas menores, que concedem os seguintes benefícios:</p><ul><li>Sentidos Aprimorados: Você recebe proficiência em Testes de Percepção baseados em visão ou audição. Além disso, pode utilizar o seu atributo de Constituição no lugar desses testes.</li><li>Disparador: Você tem acesso à Técnica 'Laser', desde que já seja capaz de utilizar pelo menos uma Técnica de 3º grau.</li></ul><p><strong>LASER (3º Grau)</strong></p><p>Apontando uma parte escolhida do corpo para essa função, você concentra uma grande quantidade de energia e libera um poderoso laser. Toda a criatura dentro da área da Técnica deve fazer uma Salvaguarda de Destreza. Sofrendo todo o dano se falhar ou metade desse dano se obtiver sucesso.</p><table><tr><td>Pontos de Poder</td><td>5</td></tr><tr><td>Duração</td><td>Instantâneo</td></tr><tr><td>Alcance</td><td>Até 18 metros de comprimento e 1,5 metro de largura, Linha</td></tr><tr><td>Requisito</td><td>Ação Poderosa</td></tr><tr><td>Dano</td><td>6d6 de dano de Energia</td></tr><tr><td>Ataque Combinado</td><td>Possível</td></tr></table><ul><li>Olho Gravador: Você consegue reproduzir holograficamente cenas, vozes ou textos que você tenha visto, em um espaço desocupado a até 1 metro de você.</li></ul><p>Cada personagem que não possua o Estilo de Combate Ciborgue pode sofrer até 3 modificações por meio dessa característica. Para cada modificação adicional além desse limite, o personagem perde 2 pontos no atributo de Presença.</p><p>Cada modificação possui os seguintes requisitos:</p><p>Custo: ฿ 10.000.000.</p><p>Tempo de Criação: 1 semana.</p><p><strong>CENTELHA DE MOTHER FLAME</strong></p><p>O cientista, ao dominar princípios avançados de engenharia energética e estabilidade material, torna-se capaz de desenvolver uma fonte de energia autossuficiente, capaz de recarregar ao final de 1 dia até 10 baterias grandes.</p><p>Para isso, ele precisa criar uma câmara blindada capaz de estabilizar a chama no espaço equivalente a 5 cômodos do navio, que custa ฿ 50.000.000.000 e leva 1 mês para ser construída (sua construção deve ser realizada por um engenheiro).</p><p><strong>CAPACIDADE GENIAL (REGRA OPCIONAL)</strong></p><p>Como regra alternativa, que o Narrador optar usar, o cientista é capaz de realizar absolutamente qualquer coisa por meio de suas criações, estando limitado apenas pelo tempo e pelo custo que o Narrador determinar para cada projeto (além de etapas específicas, como adquirir materiais, construir máquinas etc.).</p><p>Por exemplo, para tarefas simples, como criar um novo sabor de refrigerante, o custo pode ser de alguns milhares de Bellys, enquanto para desenvolver uma ilha-fortaleza voadora, o investimento pode alcançar centenas de bilhões.</p><p><strong>Ferramentas:</strong> 1 mochila pequena, 1 kit médico, 1 kit de pesquisa, 1 kit de primeiros socorros, 1 kit de chaves, 1 kit de construções, livros científicos diversos, 1 mini computador.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "inv",
        "ins",
        "med",
        "prc",
        "slt",
        "nat"
      ]
    }
  },
  {
    "code": "contrabandista",
    "name": "Contrabandista",
    "desc": "<p>O contrabandista é um mestre da circulação proibida — um negociador sorrateiro que vive entre favores, dívidas e rotas clandestinas. Onde a lei não chega, ele encontra oportunidade; onde a moral vacila, ele vê lucro. Seus contatos são valiosos, seus silêncios ainda mais, e seu talento para conseguir o impossível faz dele uma figura indispensável em qualquer tripulação ousada o bastante para navegar no submundo.</p><p><strong>AQUISIÇÃO SOMBRIA</strong></p><p>O contrabandista mantém conexões profundas com organizadores do mercado negro e diversas redes criminosas. Esses contatos o procuram por den-den mushi ou por meio de encontros em locais reservados, garantindo que, desde o início de sua jornada, ele tenha acesso a praticamente qualquer item que possa ser obtido (sempre a critério do Narrador), embora o preço muitas vezes seja elevado.</p><p>Alguns exemplos de itens facilmente adquiridos por meio do contrabando incluem:</p><ul><li>Qualquer Akuma no Mi disponível;</li><li>Armas Meito;</li><li>Raid Suit;</li><li>Objetos usuários de Akuma no Mi;</li><li>Medicamentos;</li><li>Maquinários complexos;</li><li>Madeira Adam;</li><li>Eternal Pose;</li><li>Equipamentos e armas de kairoseki;</li><li>Venenos e outras substâncias.</li></ul><p>O valor final é definido pelo Narrador, mas costuma apresentar um acréscimo entre 20% e 50%, cobrindo os riscos envolvidos na obtenção, transporte e entrega das mercadorias. Em alguns casos, o pagamento exigido pode ser uma missão ou outro item em troca.</p><p>O procedimento mais comum consiste em marcar um encontro em uma ilha ou localidade próxima da posição atual do grupo, onde a troca será realizada. Após o pedido ser feito, o tempo médio de espera é de cerca de 1 semana, até que o encontro seja definido.</p><p><strong>MEMBRO DO SUBMUNDO</strong></p><p>Sempre que entrar em uma nova ilha ou local, você pode fazer um Teste de Atributo de Sabedoria CD 16 para identificar atividades ilegais, rotas alternativas, contrabandistas locais, presença de autoridade disfarçada ou qualquer movimentação suspeita.</p><p>Além disso, em momentos difíceis, você pode recorrer ao submundo para obter auxílio capaz de proteger você e seu grupo. As formas mais comuns de suporte são:</p><ul><li>Abrigo: Em até 3 dias, você consegue um esconderijo seguro e impossível de rastrear, onde pode permanecer por até 1 semana. O local fornece comida e oferece o equivalente a uma acomodação de estilo de vida 'modesta' (detalhes no Capítulo 8).</li><li>Transporte: Em até 2 dias, você ou um grupo de até 5 pessoas é transportado com segurança para uma ilha ou localidade que o Narrador determinar ser acessível.</li><li>Sequestro: Em até 5 dias, você pode solicitar que uma criatura sem grande capacidade de combate (ND 1 ou menor) seja capturada e levada até um ponto determinado por você.</li><li>Cobertura: Em até 1 hora, desde que esteja em áreas acessíveis como grandes cidades, vilas ou centros comerciais, um grupo de combatentes surge para auxiliar na sua fuga ou criar uma distração, interrompendo qualquer encontro por no mínimo 30 minutos.</li></ul><p>Quando um desses serviços for utilizado, o submundo cobra uma quantia entre ฿ 50.000.000 e ฿ 100.000.000, com prazo de pagamento de até 1 mês. Caso o pagamento não seja feito, consequências graves podem recair sobre você ou pessoas próximas, até que a dívida seja quitada. Em alguns casos, o submundo pode exigir um favor ou missão no lugar do pagamento em dinheiro.</p><p><strong>COIOTE</strong></p><p>Você está habituado a conduzir pessoas com segurança por rotas perigosas. Durante um encontro ou exploração, criaturas que não participem de combate (geralmente personagens controlados pelo Narrador) e que estejam a até 6 metros de você recebem sua proteção, tornando-se imunes a dano, desde que você não esteja com a condição 'Incapacitado'.</p><p>Além disso, sempre que uma dessas criaturas falhar em um Teste de Atributo ou Salvaguarda, você pode usar sua reação para garantir a ela um sucesso, assumindo você mesmo as consequências da falha. O Narrador define o dano ou efeitos que você sofrerá.</p><p><strong>Ferramentas:</strong> 1 mochila pequena, 1 capa ou casaco com bolsos falsos, 1 kit de falsificação, 1 registro codificado de contatos, 1 mapa de rotas clandestinas.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "dec",
        "ste",
        "itm",
        "ins",
        "per",
        "prv"
      ]
    }
  },
  {
    "code": "cozinheiro",
    "name": "Cozinheiro",
    "desc": "<p>O responsável por assegurar que ninguém atravesse os mares de estômago vazio. Um mestre da culinária capaz de transformar até os ingredientes mais simples em verdadeiros banquetes, garantindo sabor, energia e os nutrientes essenciais para que a tripulação siga firme em sua jornada.</p><p><strong>REFEIÇÃO DO CHEF</strong></p><p>Você prepara pratos especiais, chamados de 'Refeições do Chef', que vão além da culinária comum, trazendo nutrição excepcional e benefícios magníficos.</p><p>Desde que um personagem consuma ao menos uma Refeição do Chef, até o término do próximo descanso longo ele se beneficia das seguintes características:</p><p><strong>ALIMENTO MEDICINAL</strong></p><p>Um preparo minucioso, utilizando os melhores ingredientes, Técnicas adequadas de cocção e temperos selecionados, potencializa o valor nutritivo e medicinal da refeição.</p><ul><li>Ao realizar um descanso longo, o personagem recupera 1 Nível de Exaustão adicional, além do normal;</li><li>Se o personagem estiver sofrendo com uma doença, o tempo que pode sobreviver sem tratamento antes do óbito é dobrado, desde que continue consumindo as Refeições do Chef.</li></ul><p><strong>DESCANSO PLENO</strong></p><p>Uma refeição elaborada para garantir não apenas saciedade, mas também o perfeito funcionamento do organismo.</p><ul><li>Ao realizar um descanso curto, se gastar um ou mais Dados de Vida, o personagem recupera Dados de Vida adicionais equivalentes ao seu Bônus de Proficiência;</li><li>Ao subir de nível, caso o resultado no dado de vida para aumentar os PV máximos seja entre 1 e 3, o personagem deve rolar o dado novamente.</li></ul><p><strong>NUTRIÇÃO SUPERIOR</strong></p><p>Um preparo que leva o corpo além dos limites normais, reforçando a vitalidade e a resistência.</p><ul><li>Uma vez por dia, o personagem pode usar uma ação para recuperar um número de PV igual ao dobro do seu nível;</li><li>Sempre que a criatura recuperar Pontos de Vida com dados de cura o valor será maximizado.</li></ul><p>Custo: Sempre que você usar essa característica para fazer uma 'Refeição do Chef', você gasta 1d4 kit de temperos e ฿ 3.000 em alimentos para cada prato.</p><p><strong>PREPARO PERFEITO</strong></p><p>Com um preparo cuidadoso, utilizando as formas corretas de cocção, escolhendo os melhores ingredientes e temperos, o cozinheiro consegue explorar e potencializar todas as propriedades dos alimentos.</p><p>Você prepara refeições aplicando todo o seu conhecimento culinário, com o objetivo de proporcionar um sabor divino aos seus degustadores, capaz de suprir qualquer necessidade.</p><p>Sempre que os personagens se alimentarem de ao menos uma 'Refeição do Chef', poderão escolher um dos seguintes benefícios, desde que não estejam em um encontro de combate:</p><ul><li>Você pode recuperar 1 Nível de Exaustão;</li><li>Você recebe vantagem em Salvaguardas de Constituição, por até 1 minuto;</li><li>Você recupera 5 vezes o valor do seu modificador de Constituição em Pontos de Vida.</li></ul><p>Cada criatura pode se beneficiar dessa característica um número de vezes igual ao seu modificador de Constituição (mínimo de 1 vez e máximo de 3 vezes). Todos os usos são recuperados ao término de um descanso longo.</p><p><strong>ALIMENTO ENERGÉTICO</strong></p><p>Você prepara uma 'Refeição do Chef' capaz de armazenar uma reserva energética chamada Dados Calóricos. Esses dados são sempre o d6, e você consegue cria 1 Dado Calórico e aumenta em 1 para cada 2 níveis do seu personagem (por exemplo, no 10º nível serão 6d6).</p><p>Sempre que um Dado Calórico for rolado, ele é gasto e recupera Pontos de Poder da criatura em um valor igual ao resultado. É possível infundir uma nova 'Refeição do Chef' com todos os Dados Calóricos após um descanso longo.</p><p>Os Dados Calóricos são divididos igualmente entre todas as criaturas que consumirem a refeição. Caso a divisão não seja exata, você decide quem ficará com os dados restantes. Por exemplo, ao dividir 10 Dados Calóricos entre 3 criaturas, cada uma recebe 3, e você escolhe quem ficará com o dado restante.</p><p>Após a refeição, os Dados Calóricos permanecem disponíveis até o próximo descanso longo de cada criatura. Eles podem ser ativados a qualquer momento. Entretanto, caso sejam usados em um encontro de combate, a criatura deve gastar uma ação e o resultado obtido pelos dados será reduzido pela metade.</p><p>Independentemente da quantidade de alimentos, o corpo humano possui limitações. Assim, o máximo de Pontos de Poder que uma criatura pode recuperar por meio de nutrição, entre descansos longos, é igual a 2 vezes o nível do personagem.</p><p><strong>Ferramentas:</strong> 1 mochila pequena, livros gastronômicos, receitas e nutrição, 1 kit de cozinha, 3 kits de temperos, e 1 roupa de gala.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "prf",
        "ins",
        "per",
        "slt",
        "prv",
        "sur"
      ]
    }
  },
  {
    "code": "engenheiro",
    "name": "Engenheiro",
    "desc": "<p>O engenheiro é o responsável por unir conhecimento técnico e trabalho manual, transformando ideias em máquinas. Sua mente criativa é capaz de conceber projetos complexos que auxiliam diretamente nos objetivos da tripulação.</p><p><strong>ENGENHARIA NAVAL</strong></p><p>Grande parte dos estudos e esforços da engenharia do mundo são voltados para o aprimoramento de embarcações e tecnologias relacionadas às navegações, seja para fins pacíficos ou militares. Com isso, a engenharia naval avançou consideravelmente, possibilitando a criação das seguintes construções:</p><p><strong>CRIAR SUBMARINO</strong></p><p>O engenheiro possui o conhecimento e o vigor necessários para construir submarinos, seus cômodos, e outros componentes. Detalhes sobre tempo, valores, peças e propriedades do submarino estão no Capítulo 14 deste livro.</p><ul><li>Eficiência: Você reduz em 40% todos os possíveis custos adicionais de construção e reparo de submarinos, determinados pelo Narrador e que não sejam previamente definidos por regras ou não possuam um custo determinado, evitando desperdícios de matéria-prima.</li><li>Eficácia: Submarinos construídas por você recebem +6 nós (12 km/h) de velocidade.</li><li>Corpo Preparado: Enquanto estiver trabalhando na construção ou reparo de um submarino, seus dias ainda pode ser contabilizado normalmente para treinamentos.</li></ul><p><strong>ENGENHARIA AVANÇADA</strong></p><p>O engenheiro é capaz de desenvolver uma ampla variedade de mecanismos sofisticados. Todas as especificações — incluindo custos, materiais e tempo de construção dessas máquinas — estão descritas no Capítulo 14.</p><ul><li>Canhão de Energia: Um poderoso canhão frontal que concentra e dispara energia massiva contra seus alvos, sendo considerada a arma de destruição mais temida dos mares.</li><li>Cômodos Engenhados: Torna-se possível projetar e instalar áreas de alta tecnologia no navio, como uma sala de máquinas ou gerador de energia, que proporcionam melhorias significativas à embarcação.</li><li>Criar Mini Submarino: Um modelo compacto de submarino, capaz de explorar livremente as profundezas do mar, comportando até duas criaturas pequenas ou médias, ou uma criatura grande.</li><li>Motores: Conjuntos de motores capazes de aumentar significativamente a velocidade de embarcações e submarinos, superando até mesmo as adversidades de mares sem corrente.</li><li>Propulsão a Jato: Um mecanismo singular que permite às embarcações percorrer grandes distâncias em um instante. Apesar do longo tempo de preparo, é ideal para realizar fugas rápidas, mesmo em situações desesperadoras.</li><li>Revestir Casco com Kairoseki: Desde que tenha acesso ao material, o engenheiro é capaz de manipular grandes quantidades de kairoseki para revestir cascos de navios, tornando a embarcação imune a encontros com rei dos mares em Testes de Navegação, ignorando os efeitos de danos irreparáveis e aumentando a CR do navio em +1.</li></ul><p><strong>CRIAR ARMA DE GRANDE PORTE</strong></p><p>Os engenheiros são capazes de construir armas de grande porte para navios e fortalezas, projetadas especialmente para destruir construções como embarcações, muralhas e castelos.</p><p>Por terem essa finalidade, essas armas precisam ser robustas e possuir grande poder de fogo. Não costumam ser excessivamente complexas em seus mecanismos, mas exigem muito tempo de construção devido ao seu porte e à necessidade de resistência em combate.</p><p>Todas as especificações de construção — incluindo custos, materiais e tempo necessário — estão detalhadas no Capítulo 14.</p><p><strong>CONSERTO AVANÇADO</strong></p><p>Conforme construções complexas, como submarinos e robôs, são danificadas, cabe ao engenheiro realizar os reparos. Um trabalho que exige alto conhecimento de engenharia e trabalhos manuais.</p><p>O tempo de conserto varia de acordo com o nível de dano, além de envolver custos adicionais com materiais necessários para o reparo. As regras específicas estão descritas na tabela 'Construção Avançada Danificada'.</p><table><tr><th>Estado</th><th>Pontos de Vida</th><th>Tempo de Reparo</th><th>Custo Adicional</th></tr><tr><td>Normal</td><td>99% ou menos</td><td>2d6 dias</td><td>฿ 150.000</td></tr><tr><td>Danificado</td><td>70% ou menos</td><td>4d6 dias</td><td>฿ 1.000.000</td></tr><tr><td>Muito Danificado</td><td>30% ou menos</td><td>8d6 dias</td><td>฿ 3.000.000</td></tr></table><p>O custo para recuperar os Pontos de Vida de uma construção varia conforme o material utilizado no reparo:</p><ul><li>Aço: ฿ 550.000 por cada PV recuperado.</li><li>Aço Temperado: ฿ 750.000 por cada PV recuperado.</li></ul><p><strong>CONSTRUIR ROBÔ</strong></p><p>A criação de um robô exige tempo, recursos e grande investimento. Apenas o conhecimento técnico não é suficiente: são necessários materiais de alta qualidade, infraestrutura adequada e acesso a componentes raros.</p><p>O custo de construção de um corpo robótico, sua manutenção mensal (incluindo o uso de armamentos, munições e peças de reposição), bem como o consumo de energia, estão descritos na tabela 'Construção Robótica'.</p><table><tr><th>Dias de Construção</th><th>Custo de Construção</th><th>Manutenção Mensal</th></tr><tr><td>40 dias</td><td>฿ 500.000.000</td><td>฿ 2.000.000</td></tr></table><p>O engenheiro é capaz de controlar apenas um robô ativado por vez, independentemente da quantidade de unidades já construídas. A partir do momento da criação, o robô obedece unicamente ao seu criador.</p><p>Durante encontros, o robô age na mesma iniciativa do engenheiro. Qualquer ordem direcionada a um robô requer o uso da Ação Bônus do engenheiro.</p><p><strong>ORDENS</strong></p><p>Um robô depende de ordens diretas para executar suas ações. As instruções podem ser transmitidas verbalmente, por gestos ou através de dispositivos de comunicação. As principais ordens são:</p><ul><li>Atacar: O robô usa ações e ações poderosas para atacar uma criatura que o engenheiro ou o robô possam ver.</li><li>Defender: O robô se posiciona para proteger uma criatura designada. Enquanto permanecer a até 1,5 metro da criatura protegida, metade dos danos que ela receber são redirecionados para o robô. O engenheiro pode escolher gastar 10 PP do robô para que ele se mova rapidamente e receba todo o dano ao invés de metade.</li><li>Movimentação: Define o deslocamento do robô, como avançar para um local, manter posição ou seguir uma criatura específica.</li><li>Parar: Uma ordem absoluta que faz o robô interromper imediatamente qualquer ação ou comando em execução.</li></ul><p>O robô pode possuir protocolos automáticos para situações em que o engenheiro perde a consciência, a menos que tenham sido previamente instruídos a permanecer inativos. As programações mais comuns incluem:</p><ul><li>Vingança: O robô ataca a criatura que derrotou seu criador até que ela seja neutralizada (passa a ser controlado pelo jogador do engenheiro).</li><li>Salvar: O robô resgata e transporta seu criador até o último local seguro conhecido ou para um ponto previamente designado.</li><li>Proteger: O robô defende um local, construção ou pessoa previamente determinada, utilizando força letal ou não (passa a ser controlado pelo jogador do engenheiro).</li></ul><p><strong>ROBÔ</strong></p><p>NÍVEL DE DESAFIO: 10 | EXPERIÊNCIA: 10.000 | PONTOS DE PODER: 40</p><p>Classe de Resistência: 18</p><p>Pontos de Vida: 651 (62d12+248)</p><p>Bônus de Proficiência: +4</p><p>Classe de Dificuldade: 17</p><p>Deslocamento: 12 metros</p><p>Nado: 12 metros</p><table><tr><th>FOR</th><th>DES</th><th>CON</th><th>SAB</th><th>PRE</th><th>VON</th></tr><tr><td>20 (+5)</td><td>19 (+4)</td><td>19 (+4)</td><td>10 (0)</td><td>10 (0)</td><td>10 (0)</td></tr></table><p>Características</p><ul><li>Perícia: Atletismo +9, Percepção +4.</li><li>Categoria de Tamanho: Grande</li><li>Salvaguarda: Força +9, Constituição +8.</li><li>Invulnerabilidade a Dano: Psíquico e Veneno.</li><li>Invulnerabilidade à Condição: Amedrontado, Bêbado, Enfeitiçado, Envenenado, Exausto, Paralisado, Queimado, Sangramento e Sonolento.</li><li>Sentidos: Visão no Escuro (18 metros), Percepção passiva 19.</li></ul><p>Aspectos</p><ul><li>Absorção de Eletricidade: Sempre que o robô for alvo de dano Elétrico, ele não sofre qualquer dano e, ao invés disso, recupera uma quantidade de Pontos de Vida igual ao dano Elétrico causado.</li><li>Natureza Robótica: O robô não precisa respirar, comer, beber ou dormir (não pode ser posto para dormir).</li></ul><p>Ações</p><ul><li>Ataques Múltiplos: Pode atacar duas vezes por turno com ataque desarmado.</li><li>Ataque Desarmado: Ataque Corpo a Corpo: +9 para atingir, alcance 1,5 metro, um alvo. Acerto: 17 (2d12+5) de dano Contundente.</li></ul><p>Ações Poderosas</p><ul><li>Soco Biônico (Técnica de Combate – 4º Grau | Custo: 7 PP | Recarga 5-6): Ataque Corpo a Corpo: +9 para atingir, alcance 1,5 metro, um alvo. Acerto: 50 (9d10) de dano Contundente.</li></ul><p>Robôs não se recuperam com descanso. Para restaurar seus Pontos de Vida, é necessário que sejam consertados, de acordo com a característica 'Construção Avançada Danificada', com o custo de peças de aço.</p><p>Quando um robô é reduzido a 0 PV, ele perde completamente sua funcionalidade e não pode ser reparado. Nessa situação, o engenheiro pode realizar um Teste de Atributo de Sabedoria CD 14 para tentar recuperar as partes vitais do corpo robótico.</p><p>Se for bem-sucedido, o robô recupera 1 Ponto de Vida, podendo então ser restaurado, conforme indicado na tabela 'Construção Avançada Danificada'.</p><p><strong>Ferramentas:</strong> 1 mochila pequena, livros de engenharia mecânica, física e computação, 1 martelo, 1 kit de chaves, 1 kit de construções e 1 mini computador.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "his",
        "ins",
        "inv",
        "prc",
        "slt",
        "sur"
      ]
    }
  },
  {
    "code": "espiao",
    "name": "Espião",
    "desc": "<p>Espiões são mestres de coletar informações, infiltração e manipulação silenciosa. Treinados para operar nas sombras, eles combinam disfarces complexos, códigos ocultos e engenhocas discretas para obter vantagem em qualquer situação.</p><p><strong>TÁTICAS DE ESPIONAGEM</strong></p><p>Especialistas em infiltração, manipulação e duplicidade, espiões utilizam Técnicas refinadas para adquirir informações, assumir identidades e transmitir mensagens sem serem detectados.</p><p><strong>INFILTRADOR</strong></p><p>Ao passar em um Teste de Atributo de Sabedoria CD 16, você pode criar identidades falsas para si mesmo. Criar uma identidade exige 7 dias de pesquisa e um investimento de ฿ 250.000, usados para desenvolver um histórico consistente, profissão, contatos e filiações. Não é possível criar uma identidade pertencente a alguém que realmente exista.</p><p>Você também deve obter roupas apropriadas e documentos que pareçam oficiais — como certificados, cartas de recomendação ou permissões — suficientes para convencer membros da sociedade local de que você é, por exemplo, um médico regional, um funcionário governamental ou um comerciante. Criaturas acreditarão na sua identidade até que surja motivo claro para desconfiar.</p><p>Além disso, você pode confeccionar uma máscara facial ultrafina, reproduzindo com precisão a aparência de uma pessoa que tenha observado por pelo menos 2 horas. A máscara é feita a partir de materiais comuns de maquiagem. Uma criatura desconfiada deve realizar um Teste de Atributo de Sabedoria (Percepção) CD 19 para reconhecer a máscara como falsa. Você pode jogar 1d20 na hora da confecção, se você obtiver 20 no dado, seu disfarce torna-se perfeito, impossível de ser detectado por testes de atributo. Ainda assim, ele pode ser revelado por danos diretos à máscara ou por informações externas que exponham sua farsa.</p><p>Custo: Sempre que quiser se disfarçar com essa característica, você gasta 1d4 caixa de maquiagem.</p><p><strong>LINGUAGEM DE ESPIÃO</strong></p><p>Você dominou Técnicas para ocultar mensagens dentro da fala comum, transmitindo informações secretas de forma imperceptível para quem não conhece esse dialeto secreto. As mensagens podem ser codificadas por meio de:</p><ul><li>Pausas sutis e ritmadas;</li><li>Movimentos específicos das mãos;</li><li>Microexpressões;</li><li>Ajustes intencionais no tom de voz;</li><li>Pequenos tiques voluntários.</li></ul><p>Apenas criaturas que também possuam essa característica conseguem compreender essas mensagens naturalmente. No início de cada dia, você pode instruir uma criatura aliada que não conheça essa linguagem a interpretar uma única mensagem curta, válida até o fim do dia.</p><p>Quando desejar transmitir uma mensagem secreta para alguém que não conhece a linguagem e não foi previamente instruído, você pode realizar um Teste de Atributo de Presença (Atuação) CD 14. Se for bem-sucedido, a criatura compreende a mensagem sem levantar suspeitas.</p><p><strong>DISPOSITIVO DE ESPIÃO</strong></p><p>Você possui um objeto, aparelho ou engenhoca especial — algo que você construiu, encontrou, recebeu ou roubou. Apenas espiões ou indivíduos que tenham passado meses estudando o mecanismo são capazes de operá-lo corretamente. Você, porém, domina seu funcionamento e pode ativar qualquer de suas funções como uma ação bônus.</p><p>O dispositivo sempre se disfarça como um objeto comum, como uma caneta, chapéu, sapato, óculos ou qualquer outro item cotidiano. Sua aparência é escolhida pelo jogador (com aprovação do Narrador). Ele pode conter até três das funções abaixo:</p><ul><li>Alterador de Voz: Ao acionar o dispositivo e encostá-lo na garganta, você é capaz de imitar a voz de qualquer criatura cuja fala tenha escutado nas últimas 24 horas.</li><li>Aparelho de Comunicação: Ao acionar o dispositivo, você pode se comunicar com qualquer Den-Den Mushi que esteja a até 5 km de distância.</li><li>Asa-Delta Oculta: Ao ativar o dispositivo, uma estrutura rígida se desdobra, permitindo que você planar e execute quedas controladas, reduzindo drasticamente a chance de sofrer dano por queda.</li><li>Chave Mestra: Ao acionar o dispositivo enquanto ele estiver em contato com uma fechadura, você consegue abri-la após 1 minuto.</li><li>Escuta Direcional: O dispositivo se transforma em um sensor sonoro extremamente sensível, capaz de captar conversas e ruídos a até 30 metros, mesmo através de paredes.</li><li>Gancho Portátil: Quando ativado, o dispositivo dispara um gancho em linha reta, com alcance de até 15 metros, que se prende a qualquer superfície disponível. Ao acionar novamente, o mecanismo recolhe o cabo, puxando você em direção ao ponto de ancoragem.</li><li>Microcâmera: Quando ativado, grava vídeo e áudio por até 1 hora ou registra até 20 fotos de alta precisão.</li><li>Mini Radar: Ao acionar o dispositivo, um pequeno display se projeta, revelando a localização de qualquer coisa em movimento em um raio de até 6 metros.</li></ul><p><strong>Ferramentas:</strong> 1 mochila pequena, 1 óculos com lente ampliadora, 1 aparelho de escuta, 1 caderno criptografado, 1 kit de disfarce, 1 kit para abrir cadeados, 1 kit de falsificação e 1 mini câmera.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "dec",
        "ste",
        "ins",
        "inv",
        "prc",
        "slt"
      ]
    }
  },
  {
    "code": "farmaceutico",
    "name": "Farmacêutico",
    "desc": "<p>Farmacêuticos são mestres na manipulação do corpo humano e das substâncias que o afetam. Utilizando de química avançada, eles criam drogas, estimulantes e antídotos capazes de levar qualquer organismo ao limite.</p><p><strong>DROGAS ESPECIAIS</strong></p><p>Você é capaz de criar substâncias especiais que levam o corpo humano ao limite e produzem reações extraordinárias. Para fabricar cada uma dessas drogas, é necessário estar em um laboratório ou ambiente adequado. O custo em materiais, o tempo de produção e a quantidade gerada estão descritos em cada item. As drogas são as seguintes:</p><p><strong>ROMPANTE LUNAR (฿ 250.000 | 7 dias | 1 pílula)</strong></p><p>Quando um Mink consome essa droga, sua transformação Sulong é forçada a se manifestar por até 1 minuto, mesmo sem a presença da lua cheia. O Mink consegue controlar a forma caso já tenha esse controle naturalmente. Após 1 minuto, ele sofre os efeitos equivalentes a 2 Níveis de Exaustão por até 2 horas. Caso consuma novamente, os efeitos aumentam em mais 2 Níveis de Exaustão.</p><p><strong>REMÉDIO MILAGROSO DA TRIBO MINK (฿ 500.000 | 12 dias | 1 dose)</strong></p><p>Ao consumir esse remédio, você recupera todos os seus Pontos de Vida e Pontos de Poder por 5 minutos. Ao final desse período, você cai inconsciente com 0 Pontos de Vida. Além disso, deve realizar uma Salvaguarda de Constituição CD 17; se falhar, seu personagem morre.</p><p><strong>RUMBLE BALL (฿ 100.000 | 5 dias | 3 pílulas)</strong></p><p>Ao consumir essa droga, caso você seja um usuário de Akuma no Mi do tipo Zoan, durante 1 minuto você recebe os benefícios do treinamento 'Controle Corporal' e pode acessar mais 2 Points (que podem ser criados pelo jogador com aprovação do Narrador ou escolhidos entre os 'Modelos Especiais de Points' do Capítulo 6). Ao consumir 3 Rumble Balls entre descansos longos, você força o despertar do seu fruto por 5 minutos, sofrendo as consequências descritas no Capítulo 6. Você pode controlar a forma desperta caso já possua esse controle.</p><p><strong>ENERGY STEROIDS (฿ 1.000.000 | 7 dias | 1 pílula)</strong></p><p>Ao consumir essa droga, você recupera uma quantidade de Pontos de Vida igual a 10 vezes o seu nível de personagem e uma quantidade de Pontos de Poder igual ao seu nível de personagem. Além disso, todo dano causado por você recebe 1d6 adicional, até o final de um descanso curto ou longo, sem aumento desse bônus de dano ao consumir doses extras. Sempre que consumir essa droga, role 1d8. Em um resultado 4 ou menos, você perde 1 ponto do atributo de Constituição, por 1 mês. Em um resultado 1, perde 2 pontos do atributo de Constituição permanentemente.</p><p><strong>ANTIDOTO UNIVERSAL (฿ 300.000 | 1 hora | 1 dose)</strong></p><p>Desde que possua uma amostra do sangue do envenenado ou do próprio veneno, você consegue criar um antídoto capaz de neutralizar o agente tóxico em ação no próximo descanso longo (que deve durar 36 horas) da criatura afetada.</p><p><strong>CONTROLE DE DOENÇAS</strong></p><p>Farmacêuticos também pesquisam e armazenam amostras de doenças com as quais já tiveram contato, para proteger sua tripulação e lidar melhor com novos agentes infecciosos.</p><p>Quando uma criatura sofre os efeitos de uma doença ou veneno, você pode realizar um Teste de Atributo de Sabedoria CD 16 para analisar sua composição. Em caso de sucesso, após 3d6 dias, você coleta informações e manipula o agente para os seguintes usos:</p><ul><li>Criar Cura: Com um Teste de Atributo de Sabedoria CD 15 e 2 horas de trabalho, você produz 5 doses de antídoto, cura ou vacina. Criaturas que usarem as doses removem quaisquer efeitos ou condições causadas pelo agente durante batalhas e ficam totalmente curadas em 1d4 horas (quando a doença pode ser curada);</li><li>Criar Cura em Massa: Com um Teste de Atributo de Sabedoria CD 18 e 5 horas de trabalho, você produz 1 dose especial que, ao entrar em contato com o ar, libera uma fumaça com os mesmos efeitos em uma esfera de 9 metros de raio. Todas as criaturas afetadas removem efeitos e condições durante batalhas e ficam totalmente curadas em 1d12 horas (quando a doença pode ser curada).</li></ul><p><strong>TOXICOLOGIA</strong></p><p>Desde que possua um kit de venenos, você pode criar, identificar, tratar e aplicar substâncias venenosas a partir de diversos materiais.</p><p><strong>PROFICIÊNCIA EM TESTES ESPECÍFICOS</strong></p><p>Você pode aplicar seu Bônus de Proficiência em perícias específicas relacionadas ao uso de venenos.</p><ul><li>Investigação/Percepção: Você ganha vantagem ao examinar locais, objetos ou corpos em busca de indícios de envenenamento. Seu olhar treinado detecta sutilezas que passariam despercebidas a olhos comuns.</li><li>Medicina: Seu conhecimento de venenos permite diagnosticar e tratar com mais eficácia vítimas intoxicadas, fornecendo melhores cuidados e aumentando as chances de recuperação.</li><li>Sobrevivência: Você reconhece plantas, animais e substâncias naturais que possuem propriedades venenosas, conseguindo evitá-las ou colhê-las com segurança durante expedições.</li><li>Prestidigitação: Sua proficiência permite aplicar ou manipular venenos com segurança, evitando qualquer risco de contaminação acidental.</li></ul><p><strong>Ferramentas:</strong> 1 mochila pequena, 1 kit médico, 1 kit de pesquisa, 1 kit de primeiros socorros, 1 kit de herbalismo, 1 kit de venenos, livros de farmácia e biologia química e 1 conjunto de reagentes básicos.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "his",
        "ins",
        "inv",
        "med",
        "nat",
        "prc"
      ]
    }
  },
  {
    "code": "ferreiro",
    "name": "Ferreiro",
    "desc": "<p>Ferreiros são mestres na arte de manipular o metal em forjas ardentes para criar armas e equipamentos extraordinários. Em especial, são capazes de produzir espadas e outras armas cortantes usadas na maioria dos confrontos pelo mundo.</p><p><strong>FORJAR EQUIPAMENTOS</strong></p><p>O ferreiro pode usar seus conhecimentos e habilidades de manufatura para criar qualquer arma ou equipamento presente no Capítulo 8.</p><p>O custo e os materiais podem variar conforme a avaliação do Narrador, e você deve ser bem-sucedido em um Teste de Atributo de Força, Destreza ou Sabedoria CD 16 para produzi-los.</p><p><strong>LÂMINAS</strong></p><p>A criação de lâminas, além de exigir grande habilidade manual, também é um processo espiritual. Durante a forja, o ferreiro imprime parte de sua vivência em cada criação.</p><p>O ferreiro recebe 1 Ponto de Forja (PF) para cada 10 anos de sua vida, podendo distribuir esses pontos entre diversas lâminas ou concentrá-los em apenas uma.</p><p>Ao escolher aprimorar a lâmina, o ferreiro atribui uma maldição (Yoto — descrita no Guia do Narrador). Além disso, a lâmina passa a receber as propriedades das armas lendárias (Meito — detalhes no Guia do Narrador), conforme a quantidade de Pontos de Forja investidos:</p><ul><li>Wazamano – 2 Pontos de Forja.</li><li>Ryo Wazamono – 4 Pontos de Forja.</li><li>Ô Wazamono – 6 Pontos de Forja.</li><li>Saijo Ô Wazamono – 10 Pontos de Forja.</li></ul><p>Alternativamente, o ferreiro pode obter 1 Ponto de Forja a cada 10 lâminas comuns produzidas ou 2 Pontos de Forja a cada graduação que alcançar na profissão de ferreiro.</p><p><strong>ANOS REGRESSOS</strong></p><p>Independentemente da idade do personagem antes do início da aventura, entende-se que parte de seus Pontos de Forja já possa ter sido consumida ao longo da vida, ou que suas experiências passadas ainda não tenham sido suficientes para despertar o potencial pleno de sua alma.</p><p>Por esse motivo, mesmo para espécies extremamente longevas, recomenda-se que o Narrador permita que os personagens iniciem com 2 a 4 PF, mantendo a progressão equilibrada.</p><p>Valores iniciais superiores só devem ser permitidos se o Narrador tiver planejado uma campanha em que isso não desequilibre a história ou comprometa a evolução dos demais personagens.</p><p>Além desses aprimoramentos, o ferreiro pode gastar PF para melhorar qualquer equipamento, não apenas lâminas:</p><ul><li>Expertise (1 PF): Altera a expertise da arma para qualquer uma das presentes no Capítulo 8 (cada arma só pode ter 1 expertise por esse método).</li><li>Supremacia (2 PF): Concede uma expertise adicional escolhida entre as presentes no Capítulo 8 (máximo de 2 expertises por esse método).</li><li>Densidade (1 PF): A arma ou suas munições ignoram resistências a um tipo de dano: escolhido entre Contundente, Cortante ou Perfurante.</li><li>Dureza (1 PF): A arma se torna indestrutível e nunca perde o fio, caso possua uma lâmina.</li><li>Balanço (2 PF): A arma ou suas munições ignoram invulnerabilidade a um tipo de dano: escolhido entre Contundente, Cortante ou Perfurante (é necessário que a arma já ignore resistências ao tipo de dano escolhido).</li><li>Fio (2 PF): O dano da arma aumenta de um passo. Esse aumento sendo: 1 para 1d4; 1d4 para 1d6; 1d6 para 1d8; 1d8 para 1d10; 1d10 para 1d12; 1d12 para 2d6; e 2d6 para 3d6.</li></ul><p>Custo: Sempre que você usar essa característica, você gasta 1 lingote de metal e mais ฿ 20.000 ou 20% do valor de compra do equipamento (o que for mais caro e mais apropriado).</p><p><strong>APRIMORAR/CONSERTAR EQUIPAMENTO</strong></p><p>É possível para o ferreiro, ao fazer um Teste de Atributo de Força, Destreza ou Sabedoria CD 16, realizar consertos e aprimoramentos em armas que não possuam nenhum tipo de modificação. Cada item pode receber uma vez as seguintes modificações por meio desta característica.</p><ul><li>Revestir 1 arma ou munições (10 por vez) com Kairoseki;</li><li>Criar 20 munições que causam 1d12 de dano Contundente ou Perfurante;</li><li>Ampliar o alcance de armas à distância aumentando suas duas distâncias em 6 metros;</li><li>Adicionar bônus de +3 na jogada de ataque (comum ou Técnicas) da arma (reduzindo esse bônus de acerto em 1 a cada 3 encontros em que for utilizada, até perder o bônus);</li><li>Reparar uma arma ou equipamento que não esteja completamente destruído.</li></ul><p>Na tentativa de melhorar um equipamento, se o resultado no d20 for 1, ele quebra automaticamente sem forma de reparo.</p><p>Custo: Sempre que você usar essa característica, você gasta 1 lingote de metal e mais ฿ 20.000 ou 20% do valor de compra do equipamento (o que for mais caro e mais apropriado).</p><p><strong>Ferramentas:</strong> 1 mochila pequena, livros de metalurgia e armas, 1 martelo de forja pequeno, ferramentas de metal, 1 pedra de amolar, 1 bigorna pequena e 1 molde simples.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "ath",
        "his",
        "ins",
        "inv",
        "prc",
        "slt"
      ]
    }
  },
  {
    "code": "informante",
    "name": "Informante",
    "desc": "<p>Informantes são especialistas em obter, analisar e armazenar informações das mais diversas fontes. Eles verificam rumores, investigam eventos, rastreiam pessoas e conectam dados aparentemente irrelevantes, transformando tudo isso em conhecimento estratégico para a tripulação.</p><p><strong>CHANTAGEM</strong></p><p>Você pode acionar seus contatos e conduzir investigações específicas (determinadas pelo Narrador) para descobrir informações comprometedoras sobre uma pessoa, realizando um Teste de Atributo de Sabedoria CD 17. Caso obtenha sucesso e encontre algo relevante, o alvo pode reagir das seguintes maneiras:</p><ul><li>Vista Grossa: A pessoa ignora pequenas infrações, como permitir sua passagem por áreas restritas ou fechar os olhos para pequenos furtos. Ela não se envolve diretamente, mas também não tenta prejudicar você.</li><li>Cooperação Parcial: A pessoa auxilia em tarefas menores, desde que isso não coloque em risco sua própria vida, a vida de alguém importante para ela, superiores ou subordinados.</li><li>Cooperação Total: A pessoa o ajuda mesmo que isso a coloque em perigo. Os limites de sua ajuda são amplos e podem ser revelados — ou não — pelo Narrador, dependendo da situação.</li></ul><p>O Narrador não revela qual nível de cooperação o alvo adotou — o valor do resultado no teste pode ou não influenciar nisso — nem se a pessoa está apenas fingindo colaborar ou realmente se sente ameaçada. Mas tenha em mente que forçar demais a situação pode fazer com que o alvo se volte contra você.</p><p>Além disso, o Narrador pode determinar que o alvo simplesmente não possui informações comprometedoras.</p><p><strong>BUSCAR TRIPULANTE</strong></p><p>Ao chegar em uma ilha, você pode iniciar uma busca por pessoas com habilidades específicas. Durante os 3 primeiros dias, é possível encontrar um voluntário disposto a entrar na tripulação e que possua domínio na profissão desejada, desde que você passe no Teste de Atributo de Sabedoria indicado na tabela 'Busca de Tripulantes'.</p><p>Se permanecer na ilha por mais de 2 semanas, você pode repetir esse teste com vantagem no último dia de estadia. Arqueólogos e outros informantes não podem ser achados por esse método.</p><p><strong>BUSCA DE TRIPULANTES</strong></p><table><tr><th>Profissão</th><th>CD</th></tr><tr><td>Adestrador</td><td>14</td></tr><tr><td>Botânico</td><td>17</td></tr><tr><td>Caçador de Recompensas</td><td>14</td></tr><tr><td>Carpinteiro</td><td>14</td></tr><tr><td>Cientista</td><td>20</td></tr><tr><td>Contrabandista</td><td>16</td></tr><tr><td>Cozinheiro</td><td>14</td></tr><tr><td>Engenheiro</td><td>17</td></tr><tr><td>Espião</td><td>20</td></tr><tr><td>Farmacêutico</td><td>18</td></tr><tr><td>Ferreiro</td><td>15</td></tr><tr><td>Inventor</td><td>19</td></tr><tr><td>Jornalista</td><td>16</td></tr><tr><td>Médico</td><td>16</td></tr><tr><td>Músico</td><td>16</td></tr><tr><td>Navegador</td><td>14</td></tr><tr><td>Psiquiatra</td><td>16</td></tr><tr><td>Timoneiro</td><td>14</td></tr></table><p>Tripulantes recrutados por esse método são totalmente confiáveis, pois passam por uma investigação minuciosa conduzida pelo próprio informante, revelando qualquer antecedente relevante — como envolvimento prévio com pirataria, façanhas notáveis ou reputação local.</p><p><strong>SEMPRE INFORMADO</strong></p><p>O informante está sempre lendo jornais, coletando rumores e registrando dados que possam ser úteis, expandindo constantemente seu conhecimento sobre o mundo. Ele é capaz de se lembrar com precisão de qualquer coisa que tenha visto ou ouvido nos últimos 30 dias.</p><ul><li>O informante pode identificar figuras importantes com um Teste de Sabedoria CD 14, reconhecendo seus feitos e habilidades que sejam de conhecimento público;</li><li>Usando seu domínio sobre mercados, culturas e recursos regionais (e até segredos sujos do comerciante), o informante consegue negociar 40% de desconto em qualquer compra que ele intermedeie, barganhando com qualquer tipo de vendedor.</li></ul><p><strong>ANALISAR E BUSCAR INFORMAÇÕES</strong></p><p>Como um oficial de inteligência, o informante é capaz de localizar e interpretar praticamente qualquer tipo de informação. É comum que ele investigue, catalogue e armazene tudo que considere relevante.</p><p>Sempre que necessário, você pode consultar seus arquivos e realizar um Teste de Atributo de Sabedoria CD 15 para obter quase qualquer informação. Alguns exemplos incluem:</p><ul><li>A localização aproximada de um pirata;</li><li>Descobrir se uma notícia é verdadeira ou falsa;</li><li>Saber se certa figura esteve presente em um evento específico;</li><li>Identificar quais pessoas notáveis estão em determinada ilha;</li><li>Acessar informações secretas ou delicadas relacionadas ao Governo Mundial;</li><li>Perfil detalhado de pessoas públicas e infames.</li></ul><p>Ao investigar acontecimentos recentes, você pode realizar um Teste de Atributo de Sabedoria CD 17 para descobrir novas informações no intervalo de até 5 dias.</p><p><strong>Ferramentas:</strong> 1 mochila pequena, 1 caderno codificado, 1 mapa da cidade ou região de operação, ferramentas de comunicação discreta (sinalizadores, apitos, espelhos).</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "dec",
        "ste",
        "inv",
        "ins",
        "prc",
        "per"
      ]
    }
  },
  {
    "code": "inventor",
    "name": "Inventor",
    "desc": "<p>O inventor possui a capacidade de desenvolver os mais diversos dispositivos, mecanismos e engenhocas, concebidos para superar praticamente qualquer desafio. Suas criações podem ser utilizadas tanto em combate quanto em situações de exploração, oferecendo soluções engenhosas para problemas que variam do simples ao extraordinário.</p><p><strong>CRIAR ENGENHOCA</strong></p><p>É possível desenvolver equipamentos com propriedades peculiares e altamente funcionais. Cada engenhoca usa e combina diferentes dials em sua estrutura, mesclados com engenharia avançada para produzir efeitos variados.</p><p>Para criar esses equipamentos, o inventor deve realizar um Teste de Atributo de Sabedoria. Em caso de falha, ele precisa adquirir materiais adicionais equivalentes a 10% do custo total do projeto antes de tentar novamente. Os dials necessários, o custo de produção, o tempo de trabalho e a Classe de Dificuldade estão listados na tabela 'Criar Equipamento Engenhado'.</p><p><strong>ENGENHOCAS COM DIAL</strong></p><table><tr><th>Equipamento</th><th>Dials</th><th>Custo</th><th>Tempo</th><th>CD</th></tr><tr><td>Cool Shooter</td><td>Water Dial, Cool Dial, Frozen Dial (2x)</td><td>฿ 450.000</td><td>2 dias</td><td>18</td></tr><tr><td>Clima-Tact</td><td>Heat Dial, Breath Dial, Spark Dial, Cool Dial</td><td>฿ 90.000</td><td>5 dias</td><td>14</td></tr><tr><td>Perfect Clima-Tact</td><td>Heat Dial, Breath Dial, Spark Dial, Cool Dial</td><td>฿ 180.000</td><td>10 dias</td><td>15</td></tr><tr><td>Sorcery Clima-Tact</td><td>Flame Dial, Jet Dial, Thunder Dial, Frozen Dial</td><td>฿ 300.000</td><td>15 dias</td><td>18</td></tr><tr><td>Burn Bazooka</td><td>Breath Dial (2x), Flame Dial</td><td>฿ 500.000</td><td>2 dias</td><td>17</td></tr><tr><td>Eisen Whip</td><td>Eisen Dial</td><td>฿ 180.000</td><td>2 dias</td><td>16</td></tr><tr><td>Burn Blade</td><td>Flame Dial</td><td>฿ 150.000</td><td>8 horas</td><td>17</td></tr><tr><td>Flash Gun</td><td>Flash Dial</td><td>฿ 150.000</td><td>8 horas</td><td>17</td></tr><tr><td>Jet Board/Jet Gauntlet</td><td>Jet Dial</td><td>฿ 80.000</td><td>8 horas</td><td>17</td></tr><tr><td>Heat Javelin</td><td>Heat Dial</td><td>฿ 120.000</td><td>2 dias</td><td>17</td></tr><tr><td>Kabuto</td><td>Breath Dial</td><td>฿ 70.000</td><td>3 dias</td><td>15</td></tr><tr><td>Jet Ski</td><td>Jet Dial (2x)</td><td>฿ 47.000</td><td>8 horas</td><td>16</td></tr><tr><td>Cutter Shell</td><td>Axe Dial (2x)</td><td>฿ 250.000</td><td>1 dia</td><td>17</td></tr><tr><td>Milky Arrow</td><td>Milk Dial</td><td>฿ 3.000</td><td>30 minutos</td><td>15</td></tr></table><p>Alternativamente, o inventor pode projetar novas tecnologias que reproduzam exatamente os mesmos efeitos dessas armas e equipamentos — por exemplo, desenvolver um sabre de luz no lugar de uma 'Burn Blade'. Sempre que optar por criar uma tecnologia totalmente nova em vez do modelo padrão, o custo final do projeto aumenta em 100 vezes.</p><p><strong>ENGENHOCAS AVANÇADAS</strong></p><p>A partir de conhecimentos muito mais obscuros e de execução complexa, o inventor se torna capaz de transformar em realidade recursos inimagináveis.</p><p>Para criar esses equipamentos, o inventor deve realizar um Teste de Atributo de Sabedoria CD 18. Em caso de falha, ele precisa adquirir materiais adicionais equivalentes a 10% do custo total do projeto antes de tentar novamente.</p><p><strong>BUBBLE GUN (฿ 6.000.000 | 3 dias)</strong></p><p>Você cria uma arma semelhante a uma pistola que, apesar de não utilizar pólvora, consome uma munição de kairoseki (ou quantidade semelhante) a cada disparo. Seu mecanismo dissolve a munição e a converte em uma bolha translúcida que se expande em direção a uma criatura a até 3 metros, envolvendo-a.</p><p>Se o alvo for um usuário de Akuma no Mi, ele recebe a condição 'Enfraquecido', incapaz de romper a bolha, permanecendo flutuando a poucos centímetros do chão. A bolha persiste por 5 minutos antes de estourar.</p><p><strong>BUBBLE SHIELD (฿ 3.500.000 | 5 dias)</strong></p><p>Você cria uma manopla que, ao gastar sua reação, consome uma munição de kairoseki (ou quantidade semelhante) para gerar um escudo que parece uma bolha de sabão.</p><p>Esse escudo anula completamente qualquer efeito ou dano causado ao portador por ataques provenientes de poderes de Akuma no Mi, reduzindo-os a 0.</p><p><strong>GP FLOWER (฿ 250.000 | 1 dia)</strong></p><p>Uma munição especial que, ao ser disparada para o alto por qualquer arma, explode e se dispersa no ar. Durante 10 minutos, dentro de uma esfera de 50 metros de raio, qualquer arma que utilize pólvora falha ao tentar disparar, produzindo apenas flores no lugar dos projéteis.</p><p><strong>DISPARADOR DE POP GREEN (฿ 90.000 | 1 dia)</strong></p><p>Um disparador desenvolvido especificamente para lançar sementes Pop Green. Ele possui todas as propriedades de um mosquete, mas só é capaz de disparar Pop Greens e nenhum outro tipo de munição.</p><p><strong>INVENÇÃO IMPROVISADA (REGRA OPCIONAL)</strong></p><p>Como regra alternativa, que o Narrador optar usar, o inventor é capaz de criar, com os recursos imediatos à sua volta, um dispositivo improvisado para superar praticamente qualquer desafio — desde que passe em um Teste de Atributo de Sabedoria, cuja CD é determinada pelo Narrador.</p><p>Por exemplo, ele pode trançar uma corda utilizando partes da vegetação local para alcançar a entrada de uma caverna situada abaixo de um penhasco, montar um bote funcional a partir de pedaços de madeira encontrados na região ou até mesmo improvisar uma motocicleta usando sucata e força animal como propulsão.</p><p><strong>Ferramentas:</strong> 1 mochila pequena, 1 kit de chaves, 1 kit de construção, livros de engenharia criativa e 1 caixa com peças diversas.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "his",
        "inv",
        "ins",
        "nat",
        "slt",
        "prc"
      ]
    }
  },
  {
    "code": "jornalista",
    "name": "Jornalista",
    "desc": "<p>Jornalistas são especialistas em registrar, investigar e transmitir informações, transformando tudo em reportagens, fotos, dossiês e publicações que podem influenciar nações inteiras.</p><p><strong>PESQUISA JORNALÍSTICA</strong></p><p>Seus conhecimentos permitem que você domine Técnicas de investigação e coleta de informações, concedendo-lhe as seguintes características:</p><p><strong>INTERPRETAR FATOS</strong></p><p>Desde que o jornalista tenha acesso a informações, fotos ou gravações de um acontecimento, ele pode usar seus conhecimentos para preencher lacunas e interpretar a situação como se estivesse presenciando o evento em tempo real.</p><p>O Narrador fornece uma suposição do que pode ter acontecido, que estará mais ou menos próxima da realidade dependendo do resultado de um Teste de Atributo de Sabedoria, com CD determinada pelo Narrador (que pode optar por não revelar a dificuldade nem se o teste foi bem-sucedido). Caso novas informações surjam, o teste pode ser repetido.</p><p><strong>APURAR A VERDADE</strong></p><p>Você desenvolveu Técnicas avançadas de entrevista, análise comportamental e leitura de linguagem corporal. Sempre que interage com alguém por pelo menos 5 minutos, pode fazer um Teste de Atributo de Sabedoria (Intuição) CD 17. Em caso de sucesso, você determina se a criatura está mentindo, omitindo fatos ou emocionalmente instável.</p><p>Se o resultado for um 20 natural, você também identifica a emoção predominante da criatura e uma possível motivação imediata.</p><p><strong>REGISTRO IMPECÁVEL</strong></p><p>Você possui facilidade em registrar informações de forma organizada, útil e precisa. Sempre que fizer anotações, fotos, vídeos ou gravações com qualquer dispositivo, seus Testes de Atributo de Sabedoria (Investigação) feitos posteriormente com base nesse material recebem vantagem. Além disso, você nunca esquece o que foi registrado nesses arquivos — incluindo falas detalhadas, imagens, textos, entre outros.</p><p><strong>COLETOR DE PROVAS</strong></p><p>Ao examinar um local por 10 minutos, você pode fazer um Teste de Atributo de Sabedoria (Investigação) CD 15. Com um sucesso, você encontra 1 evidência relevante (pegadas, fibras, documentos, resquícios, gravações ocultas, etc.) ou descobre que alguma evidência anterior é falsa.</p><p>Se tirar 20 natural, você descobre também uma pista oculta ou deliberadamente escondida, são exista.</p><p><strong>REDE DE INFORMAÇÕES</strong></p><p>Você mantém uma lista ampla de fontes, informantes e conhecidos em diversos setores. Uma vez por descanso longo, você pode acionar essa rede para obter uma informação específica, um boato, um documento simples ou uma dica útil.</p><p><strong>PODER DA IMPRENSA</strong></p><p>Sua influência é capaz de moldar a opinião pública, alterar narrativas e impactar diretamente decisões políticas e sociais. Podendo exercer as seguintes ações:</p><p><strong>FAKE NEWS</strong></p><p>O jornalista, por meio de seus contatos e redes de influência, é capaz de divulgar informações verdadeiras, mas também de espalhar desinformação em escala global. No dia seguinte, o mundo inteiro toma conhecimento do que foi disseminado. Alguns exemplos são:</p><ul><li>Localização falsa de pessoas ou itens;</li><li>Divulgação da falsa morte de uma personalidade;</li><li>Anúncio de promoção ou renúncia fictícia de alguém em um cargo/título importante.</li></ul><p>No caso de notícias falsas, elas podem ser desmentidas em 1d6 dias, acompanhadas de retratações públicas em diversos jornais. Mesmo informações verdadeiras podem ser negadas caso contrariem os interesses do Governo Mundial.</p><p><strong>MANIPULAR NARRATIVAS</strong></p><p>Você domina a arte de moldar discursos e persuadir multidões. Ao gastar 10 minutos conversando, discursando ou espalhando boatos, você pode realizar um Teste de Atributo de Presença (Persuasão ou Enganação) CD 15.</p><p>Se for bem-sucedido, uma pequena comunidade passa a acreditar na história, rumor ou versão divulgada. A cada dia, essa informação se espalha gradualmente até alcançar toda a ilha ou região equivalente.</p><p><strong>PRESSÃO DA IMPRENSA</strong></p><p>Você sabe exatamente como utilizar a força da opinião pública para criar pressão massiva sobre uma figura conhecida, gerando questionamentos, desconfiança e até revolta popular. Essa pessoa será obrigada a se posicionar diante da situação, tentando conter o dano.</p><p>Você só pode manter uma pauta ativa por vez, e a pressão midiática dura por 1d6 semanas. Durante esse período, você pode se beneficiar da instabilidade, da atenção gerada ou das decisões precipitadas tomadas pela autoridade alvo.</p><p><strong>Ferramentas:</strong> 1 mochila pequena, 1 caderno de anotações, 1 máquina fotográfica portátil, 1 gravador de voz, 1 livro de Técnicas de entrevista.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "dec",
        "his",
        "inv",
        "ins",
        "prc",
        "per"
      ]
    }
  },
  {
    "code": "medico",
    "name": "Médico",
    "desc": "<p>O médico é o único preparado para cuidar dos ferimentos após batalhas e de doenças. Sem um bom médico a bordo, até mesmo picadas de mosquitos de uma ilha tropical podem se tornar algo fatal.</p><p><strong>TRATAR FERIMENTOS</strong></p><p>O médico é especialista em cuidar de feridas por meio de Técnicas manuais e medicamentos, recebendo assim os Dados Curativos. Esses dados são sempre o d6, e o médico possui 2 Dados Curativos por nível de personagem (por exemplo, no 10º nível, terá 20d6).</p><p>Sempre que um Dado Curativo for rolado, ele é consumido e recupera Pontos de Vida da criatura em uma quantidade igual ao resultado obtido. Todos os Dados Curativos são recuperados após um descanso longo.</p><p>Para utilizá-los, o médico deve estar a até 1,5 metro da criatura e gastar uma ação bônus, escolhendo a quantidade de dados a serem rolados.</p><p>Apesar dos cuidados aplicados, o corpo humano possui limitações: não é possível recuperar totalmente danos severos sem o devido repouso. Assim, o máximo de Pontos de Vida que uma criatura pode recuperar por meio de tratamentos médicos, entre descansos longos, é igual a 20 vezes o nível do personagem.</p><p>Os Dados Curativos podem ser usados a qualquer momento. Contudo, se forem aplicados durante um encontro de combate, o valor obtido nos dados é reduzido pela metade.</p><p>Custo: Sempre que você usar essa característica, você gasta 1d4 kit médico.</p><p><strong>ESPECIALISTA EM CURA</strong></p><p>Qualquer cura que o médico seja capaz de aplicar fora das características desta profissão é potencializada pelo seu vasto conhecimento. Assim, curas aplicadas por meio de dados não podem resultar em valores menores que a média e têm seus dados aumentados em um passo. O aumento dos passos sendo: 1d4 para 1d6; 1d6 para 1d8; 1d8 para 1d10; 1d10 para 1d12; e 1d12 para 2d8.</p><p>Curas aplicadas por meio de valores fixos aumentam em 50%. Por exemplo, uma característica que cure 50 Pontos de Vida passa a curar 75 Pontos de Vida (50 + 25).</p><p><strong>PARAMEDICINA</strong></p><p>Com seu conhecimento no tratamento de vítimas em estado crítico, você é capaz de preservar vidas em situações extremas.</p><p>Usando uma ação bônus, você pode realizar um Teste de Atributo de Sabedoria CD 18 para tratar uma criatura inconsciente com 0 Pontos de Vida ou morta há menos de 3 minutos, podendo fazer quantas tentativas quiser nesse período.</p><p>Falha: Você remove qualquer condição que não esteja sendo sustentada por meios sobrenaturais (como os efeitos de uma Akuma no Mi, por exemplo). Além disso, a criatura recebe 50 Pontos de Vida temporários, que duram até 1 hora e a protegem contra novos danos, mas não a despertam nem a trazem de volta à vida.</p><p>Sucesso: Além dos benefícios de uma falha, a criatura recupera metade de seus Pontos de Vida totais (arredondado para baixo) e volta à vida caso tenha morrido, permanecendo consciente por 1 minuto. Após esse tempo, ela volta a cair inconsciente com 0 Pontos de Vida, independentemente da quantidade de PV recuperada, e só poderá acordar após completar um descanso curto ou longo.</p><p>Essa característica só pode garantir os efeitos de sucesso uma única vez em cada criatura. Em usos posteriores, ela só pode aplicar os efeitos da falha.</p><p>Após um descanso longo, a criatura pode receber novamente os efeitos completos de um teste bem-sucedido.</p><p>Custo: Sempre que você usar essa característica, você gasta 1d4 kit de primeiros socorros.</p><p><strong>TRATAMENTOS</strong></p><p>Além de cuidar de ferimentos comuns, os médicos possuem vasto conhecimento voltado à prevenção e ao tratamento de doenças e lesões graves. A seguir estão descritos os tratamentos mais comuns, embora o Narrador possa apresentar novos tipos e métodos, conforme a necessidade da narrativa.</p><p><strong>TRATAR DOENÇAS</strong></p><p>Apenas médicos são capazes de diagnosticar e tratar doenças. Após gastar 1 minuto analisando o paciente, o médico pode ministrar medicamentos usando uma ação. A criatura medicada fica livre dos sintomas da doença e não sofre seus efeitos por 24 horas; após esse período, deve ser tratada adequadamente.</p><p>Algumas doenças possuem tratamento específico (ver Capítulo 10). Para essas, o Narrador pode solicitar um Teste de Atributo de Sabedoria CD 18:</p><ul><li>A CD é reduzida pelo valor do modificador de Constituição do paciente;</li><li>A CD aumenta em 1 para cada dia que passe sem que a doença esteja sendo tratada.</li></ul><p>Doenças não especificadas geralmente exigem 1d4 + 1 dias de tratamento e custam ฿ 30.000. Para tratá-las, o Narrador pode pedir um Teste de Atributo de Sabedoria CD 16, com os mesmos modificadores acima.</p><p><strong>INSPEÇÃO MÉDICA</strong></p><p>O médico acompanha de perto a saúde de seus aliados, garantindo que todos se mantenham em boa forma para enfrentar os perigos.</p><p>Se uma criatura passar 1 semana ao lado do médico, não possuir Níveis de Exaustão e estiver com mais da metade dos Pontos de Vida, recebe os seguintes benefícios:</p><ul><li>Vantagem em Salvaguarda contra a condição 'Envenenado', 'Letárgico', 'Queimadura' e 'Sangramento';</li><li>Vantagem em Salvaguarda contra doenças.</li></ul><p><strong>CIRURGIA</strong></p><p>Você é capaz de realizar cirurgias que restauram a saúde do paciente. Para isso, deve estar em um local apropriado, esterilizado e com todas as ferramentas necessárias à disposição.</p><p>Em casos de necessidade ou Danos Brutais (descritos no Capítulo 12), para reverter a redução nos Pontos de Vida totais e outros efeitos, o médico deve ser bem-sucedido em um Teste de Atributo de Sabedoria. O Narrador define o tipo de lesão de acordo com a gravidade do ferimento, utilizando a tabela 'Dano Brutal', que apresenta a CD, o custo adicional e o tempo de cirurgia correspondentes.</p><p><strong>DANO BRUTAL</strong></p><table><tr><th>Gravidade</th><th>Tipo de Lesão</th><th>Tempo de Cirurgia</th><th>Custo Adicional</th><th>CD</th></tr><tr><td>Grave</td><td>Costela Quebrada</td><td>2 horas</td><td>฿ 75.000</td><td>16</td></tr><tr><td>Grave</td><td>Hemorragia Interna</td><td>3 horas</td><td>฿ 75.000</td><td>16</td></tr><tr><td>Grave</td><td>Membro Deslocado</td><td>1 hora</td><td>฿ 75.000</td><td>13</td></tr><tr><td>Crítico</td><td>Crânio Fraturado</td><td>4 horas</td><td>฿ 100.000</td><td>15</td></tr><tr><td>Crítico</td><td>Corte Profundo</td><td>2 horas</td><td>฿ 100.000</td><td>15</td></tr><tr><td>Crítico</td><td>Membro Quebrado</td><td>3 horas</td><td>฿ 100.000</td><td>16</td></tr><tr><td>Mortal</td><td>Fratura Exposta</td><td>9 horas</td><td>฿ 125.000</td><td>17</td></tr><tr><td>Mortal</td><td>Órgão Perfurado</td><td>10 horas</td><td>฿ 125.000</td><td>17</td></tr><tr><td>Mortal</td><td>Membro Decepado</td><td>12 horas</td><td>฿ 125.000</td><td>18</td></tr></table><p>No tratamento dessas feridas, quando o Narrador solicitar o Teste de Atributo de Sabedoria, podem ocorrer os seguintes modificadores:</p><ul><li>A CD é reduzida pelo valor do modificador de Constituição do paciente;</li><li>A CD aumenta em 1 para cada dia que passe sem que a doença esteja sendo tratada.</li></ul><p>Custo: Sempre que você usar esses tratamentos, você gasta 1d4 kit médico.</p><p><strong>Ferramentas:</strong> 1 mochila pequena, livros de anatomia, medicina e bioquímica, 1 kit médicos e 3 kits de primeiros socorros.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "ins",
        "inv",
        "med",
        "prc",
        "slt",
        "sur"
      ]
    }
  },
  {
    "code": "musico",
    "name": "Músico",
    "desc": "<p>O representante dos sentimentos, indispensável para qualquer festa. O músico é quele que consegue transformar dificuldade em motivação, inspira seus companheiros e transforma todo o ambiente ao seu favor.</p><p><strong>ALMA DE ARTISTA</strong></p><p>Seu corpo e alma são devotados à arte da música, desta forma, você treinou arduamente com instrumentos e nos conhecimentos musicais. Isso lhe garante alguns benefícios como:</p><ul><li>Você é proficiente com qualquer tipo de instrumento musical e possui uma linda voz;</li><li>Você recebe vantagem em Testes de Atributo de Vontade (Percepção), relacionado à audição;</li><li>Quando uma criatura passar em uma Salvaguarda para resistir ao efeito de uma canção sua, você pode fazer com que a criatura repita o teste. Essa característica pode ser usada até 3 vezes e você recupera todos os seus usos ao término de um descanso longo.</li></ul><p><strong>REPERTÓRIO ENCANTADOR</strong></p><p>Como um músico extraordinário, você domina melodias especiais capazes de influenciar as emoções das pessoas de forma inacreditável. Suas características são:</p><ul><li>Você pode iniciar uma dessas músicas usando uma ação e uma ação bônus, no início de cada um dos seus turnos, para conseguir mantê-las;</li><li>Você só pode manter um tipo de música por vez. Caso a música não especifique duração, ela é considerada instantânea;</li><li>O alcance dos efeitos é de 15 metros, afetando criaturas de sua escolha ou todas dentro do alcance que:</li></ul><ul><li>Você consiga ver e possam te ouvir;</li><li>Falhem em uma Salvaguarda de Presença CD = 8 + seu Bônus de Proficiência + seu modificador de Presença.</li></ul><p><strong>MÚSICA DA PAZ</strong></p><p>Você tenta suprimir emoções fortes. Uma criatura que falhar na Salvaguarda ignora, por até 1 minuto, qualquer motivo que a leve à hostilidade. Depois desse tempo, ela volta a se irritar, a menos que a causa tenha sido resolvida.</p><p>Alternativamente, você pode tornar um alvo indiferente às criaturas escolhidas. Essa indiferença termina se o alvo for atacado, ferido ou testemunhar um aliado sendo ferido.</p><p><strong>MÚSICA DA SEDUÇÃO</strong></p><p>Você tenta enfeitiçar uma criatura humanoide. Ela tem vantagem na Salvaguarda se você ou seus companheiros estiverem lutando contra ela. Em falha, a criatura fica 'Enfeitiçada' por 1 hora, ou até que você ou seus aliados causem dano a ela ou uma criatura aliada dela. O alvo enfeitiçado trata você como amigável, mas, quando o efeito termina, sabe que foi enfeitiçado.</p><p><strong>MÚSICA DO HERÓI</strong></p><p>Você imbui uma criatura voluntária com bravura. Por até 1 minuto, ela fica imune à condição 'Amedrontado'.</p><p><strong>MÚSICA DE NINAR</strong></p><p>Você induz criaturas ao sono profundo. Role 30d10; o valor total determina a quantidade de Pontos de Vida que podem ser afetados.</p><p>As criaturas são escolhidas em ordem crescente de PV atuais. Se o PV da criatura for igual ou menor ao valor restante, ela cai inconsciente até sofrer dano ou ser despertada por uma ação (como ser sacudida ou esbofeteada).</p><p><strong>MÚSICA DA DISTRAÇÃO</strong></p><p>Você performa uma melodia chamativa por até 1 minuto. Criaturas incapazes de serem enfeitiçadas passam automaticamente na Salvaguarda.</p><p>Criaturas em combate contra você ou seus aliados têm vantagem na Salvaguarda. Em falha, o alvo sofre desvantagem em Testes de Atributo de Vontade (Percepção) para notar qualquer coisa além de você.</p><p><strong>MÚSICA DA DANÇA IRRESISTÍVEL</strong></p><p>Durante 1 minuto, criaturas afetadas devem realizar uma Salvaguarda. Alvos imunes a encantamento passam automaticamente. Em falha, você pode usar uma ação bônus em cada turno para designar uma direção. As criaturas afetadas devem se mover naquela direção em seu próximo turno, provocando ataques de oportunidade se necessário.</p><p>Um alvo não é forçado a se mover em direção a um perigo óbvio (como um abismo ou fogueira) e o efeito se encera caso receba qualquer tipo de dano. Após se mover, pode realizar nova Salvaguarda para encerrar o efeito.</p><p><strong>MÚSICA DO DESRESPEITO</strong></p><p>Você faz uma música voltada a insultar uma única criatura, o alvo deve ser bem-sucedido em uma Salvaguarda para não receber a condição 'Enfurecido'.</p><p><strong>Ferramentas:</strong> 1 mochila pequena, livros de canto, de instrumentos e partituras e 1 instrumento musical à sua escolha.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "prf",
        "dec",
        "ste",
        "itm",
        "per",
        "slt",
        "prv"
      ]
    }
  },
  {
    "code": "navegador",
    "name": "Navegador",
    "desc": "<p>Responsáveis por conduzir o navio até o destino, independentemente dos imprevistos que possam surgir durante a viagem, os navegadores experientes conseguem prever mudanças climáticas através de sinais sutis, evitando desastres. Um bom navegador é indispensável para cruzar a Grand Line com segurança.</p><p><strong>NAVEGAÇÃO</strong></p><p>Testes de Navegação ocorrem sempre que uma embarcação realiza viagens em alto-mar. O Narrador pode solicitar que o navegador faça um Teste de Atributo de Sabedoria para determinar se ele é bem-sucedido em evitar perigos climáticos ou encontros hostis.</p><p>A dificuldade e a frequência desses testes variam conforme o tipo de mar percorrido, conforme indicado na Tabela de Mares do (Guia do Narrador).</p><p>Uma tripulação sem um membro minimamente capacitado — como um navegador ou timoneiro — deve realizar todos os Testes de Navegação utilizando o modificador de Vontade do Capitão, sempre com desvantagem, o que reduz drasticamente suas chances de sobrevivência desbravando os mares.</p><p>O navegador, além de considerar os Testes de Navegação como testes relacionados à sua profissão, recebe os seguintes benefícios nesses testes:</p><ul><li>Dos Males, o Menor: Quando não passar em Testes de Navegação, você pode jogar duas vezes o d10 ao invés de uma, escolhendo qualquer um dos resultados.</li><li>Cortina Climática: Quando você falhar em um Teste de Navegação e o resultado for 'Animal Alado', 'Ataque Pirata', 'Frota da Marinha' ou 'Rei dos Mares', você pode realizar um Teste de Atributo de Sabedoria, com a CD correspondente ao mar (Guia do Narrador) navegado, para tentar despistar a ameaça.</li><li>Preparo Infalível: Quando não passar em um Teste de Navegação você pode, uma vez por viagem, trocar uma falha por um sucesso.</li></ul><p><strong>PREVISÃO MARÍTIMA</strong></p><p>Um navegador está sempre atento às menores mudanças do ambiente — uma brisa fria, uma mudança súbita de pressão, ou o voo atípico de aves migratórias.</p><p>Antes de iniciar uma viagem, o navegador pode realizar um Teste de Atributo de Sabedoria, com a CD correspondente ao mar. Em caso de sucesso, a partida é adiada em 1d4 dias, mas todos os Testes de Navegação realizados durante a viagem recebem vantagem.</p><ul><li>Blues: CD 12.</li><li>Grand Line (Paradise): CD 16.</li><li>Grand Line (Novo Mundo): CD 18.</li><li>Outros Tipos de Mares: CD 14.</li></ul><p><strong>MENTE AFIADA</strong></p><p>Como navegador, você usa constantemente seus conhecimentos para guiar a tripulação e auxiliá-la a alcançar o destino com precisão. Você recebe as seguintes características permanentes:</p><ul><li>Você sempre sabe qual caminho é o Norte;</li><li>Você sempre sabe o número de horas restantes antes do próximo nascer ou pôr do sol;</li><li>Você pode se lembrar com precisão de qualquer mapa, caminho ou paisagem que tenha visto em um período de 30 dias.</li></ul><p><strong>CRIAR MAPA</strong></p><p>Durante suas viagens, você pode desenhar mapas astronômicos e marítimos que auxiliarão futuras expedições pelas mesmas rotas.</p><p>Faça um Teste de Atributo de Sabedoria, com a CD correspondente ao mar, para criar um mapa cartográfico da região. Em viagens onde você possua um mapa válido da área, a duração da viagem é reduzida pela metade e todos os Testes de Navegação são automaticamente bem-sucedidos.</p><ul><li>Blues: CD 10.</li><li>Grand Line (Paradise): CD 14.</li><li>Grand Line (Novo Mundo): CD 16.</li><li>Outros Tipos de Mares: CD 12.</li></ul><p><strong>Ferramentas:</strong> 1 mochila pequena, livros de astronomia, geografia e navegação, 1 tipo de bússola à sua escolha (bússola, log pose, log pose de 3 agulhas), 1 compasso, 1 balestilha e 1 astrolábio.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "dec",
        "ins",
        "inv",
        "prc",
        "per",
        "sur"
      ]
    }
  },
  {
    "code": "psiquiatra",
    "name": "Psiquiatra",
    "desc": "<p>Psiquiatras são especialistas na mente e no comportamento humano, compreendendo motivações, traumas e distúrbios psicológicos. Eles conseguem tratar instabilidades emocionais, moldar padrões mentais e antecipar colapsos antes que ocorram — seja para manter uma tripulação unida sob pressão ou para desestabilizar alguém com palavras precisas.</p><p><strong>PERSPICÁCIA PSICOLÓGICA</strong></p><p>Ao conversar ou analisar uma criatura por pelo menos 5 minutos, você pode realizar um Teste de Atributo de Sabedoria (Intuição) CD 16 para identificar uma ou mais das seguintes informações, conforme o Narrador julgar apropriado:</p><ul><li>Estado emocional atual da criatura;</li><li>Gatilhos psicológicos relevantes, presença de traumas, compulsões ou instabilidade emocional;</li><li>Fragilidades mentais, como medo, vício, insegurança, dependência emocional ou pressão psicológica.</li></ul><p><strong>ANÁLISE COMPORTAMENTAL</strong></p><p>Caso deseje analisar um grupo de pessoas, após observá-lo por pelo menos 5 minutos, você pode realizar o mesmo teste anterior. Em caso de sucesso, você descobre:</p><ul><li>A hierarquia interna do grupo;</li><li>Se alguém está mentindo ou agindo de forma suspeita;</li><li>Quem teme quem dentro do grupo;</li><li>Quem é mais influenciável e quem exerce maior controle ou manipulação;</li><li>A intenção predominante do grupo (como atacar, fugir, enganar, negociar, recrutar, entre outras).</li></ul><p><strong>TÁTICAS MENTAIS</strong></p><p>Você domina Técnicas avançadas de influência emocional, manipulação verbal e controle mental indireto.</p><p><strong>DIAGNOSTICANDO</strong></p><p>A cada 1 minuto ouvindo uma criatura falar — ou ao perceber algo relevante sobre sua personalidade (descrito ao Narrador) — você pode tomar notas, mentalmente ou em um caderno, e acumular 1 Ponto Mental.</p><p>Esses pontos podem ser gastos para receber +5 em Testes de Atributo de Presença relacionados especificamente à criatura analisada.</p><p>Você pode acumular até 3 Pontos Mentais por criatura, recuperando a capacidade de gerar novos pontos após o término de um descanso longo.</p><p>Além disso, Testes de Atributo de Presença relacionados às características da sua profissão podem ser realizados utilizando Sabedoria em vez de Presença.</p><p><strong>TERAPIA DE CRISE</strong></p><p>Você aprendeu Técnicas mentais rápidas, capazes tanto de estabilizar quanto de confrontar uma criatura com verdades duras. Usando uma reação ou ação bônus, você pode encerrar em uma criatura uma das seguintes condições de uma criatura: 'Amedrontado', 'Empoderado', 'Enfeitiçado' e 'Enfurecido'.</p><p><strong>DISCURSO DESMOTIVACIONAL</strong></p><p>Após analisar uma criatura e trazer à tona suas inseguranças por meio de palavras cruéis e certeiras, você pode realizar um Teste de Atributo de Sabedoria (Intuição) CD 17.</p><p>Em caso de sucesso, a criatura sofre desvantagem em todos os Testes de Atributo por até 5 minutos. Além disso, sempre que falhar em um desses testes durante esse período, recebe –1 adicional em testes subsequentes, acumulando até o fim da duração.</p><p>Essa característica só volta a surtir efeito em uma criatura após o término de um descanso longo.</p><p><strong>XADREZ MENTAL</strong></p><p>Desde que você já tenha ouvido uma criatura falar por pelo menos 5 minutos, é possível iniciar um exercício mental para tentar prever suas próximas ações. Para isso, realize um Teste de Atributo de Sabedoria (Intuição), com CD determinada pelo Narrador (que pode optar por não revelar a dificuldade nem se o teste foi bem-sucedido).</p><p>Após o teste, o Narrador revela as ações previstas da criatura. Caso o teste tenha sido um fracasso, essas informações podem ser imprecisas ou completamente falsas.</p><p><strong>APRIMORAR PERSONALIDADE</strong></p><p>Desde que você dedique a primeira hora de cada dia a consultas psicológicas com seus companheiros, mantendo essa rotina por pelo menos 1 semana ininterrupta, eles recebem 1 Singularidade Leve adicional e deixam de sofrer as penalidades associadas aos Defeitos das Singularidades (ver Capítulo 5). A Singularidade escolhida e os Defeitos anulados não podem estar relacionados a:</p><ul><li>Pessoas ou fatores externos (como 'Má Fama', 'Casamento Marcado', 'Chantagem', etc.);</li><li>Limitações físicas ou condições externas (como 'Estudioso', 'Churriado', 'Dívida de Jogo', entre outras).</li></ul><p>Após um período prolongado, o Narrador pode decidir que esse efeito se tornou permanente.</p><p>Além disso, você também se torna imune a esses Defeitos e recebe 1 Singularidade Suave adicional, obedecendo às mesmas restrições aplicadas aos seus companheiros.</p><p><strong>Ferramentas:</strong> 1 mochila pequena, livros de psicologia, psiquiatria e comportamento humano, 1 caderno para anotações clínicas, 1 kit médico.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "ins",
        "inv",
        "med",
        "prc",
        "per",
        "prv"
      ]
    }
  },
  {
    "code": "timoneiro",
    "name": "Timoneiro",
    "desc": "<p>Timoneiros são aqueles que conduzem embarcações com maestria, dominando os mares como se o próprio navio fosse uma extensão de seus corpos. São capazes de enfrentar tempestades, ondas colossais e as mais severas condições climáticas, mantendo o controle mesmo diante do caos do oceano.</p><p><strong>CONDUTOR DOS MARES</strong></p><p>Um bom timoneiro é capaz de transformar até o navio mais pesado em uma embarcação ágil e precisa. Sua experiência permite realizar manobras complexas, estabilizar o leme durante tempestades e conduzir a tripulação em meio às batalhas, coordenando ataques devastadores.</p><p><strong>COMBATE</strong></p><p>Usando seus conhecimentos e habilidades, você pode se focar inteiramente em operar o timão e definir os rumos das batalhas navais.</p><ul><li>Investida: Usando a Ação de Combate da embarcação, você atinge um navio ou outra estrutura a até 1,5 metro de distância com uma colisão controlada. Faça um Teste de Atributo de Força ou Sabedoria. Se o resultado for igual ou superior à CR do alvo, a colisão é um sucesso (regras no Capítulo 14), fazendo com que o seu navio sofre apenas 3d10 de dano.</li><li>Ritmo de Combate: Suas ordens guiam os tripulantes em movimentos rápidos e precisos. A embarcação realiza 3 ataques adicionais + 2 ataques para cada categoria de tamanho acima do Pequeno.</li><li>Estabilidade Absoluta: Desde que o timoneiro esteja dentro do efetivo que desempenha a função de navegação do navio, o dano de colisão é sempre reduzido pela metade.</li><li>Dados de Manobra: Você recebe dados que são sempre o d10, sendo 2 Dados de Manobra por nível de personagem (por exemplo, no 10º nível, terá 20d10).</li></ul><p>Sempre que o navio sofrer dano, você pode rolar e consumir esses dados para reduzir o dano recebido em uma quantidade igual ao resultado. Todos os Dados de Manobra são recuperados após um descanso longo.</p><p><strong>CONDUÇÃO</strong></p><p>A condução de uma embarcação é uma arte refinada que exige sincronia entre o timoneiro, a tripulação e o navio. Você é capaz de transformar movimentos sutis do leme em mudanças completas de direção, explorando o máximo potencial da embarcação.</p><ul><li>Manobras Ampliadas: Em vez de uma única Ação de Manobra, as embarcações conduzidas por você podem executar até 6 Ações de Manobra.</li><li>Eficiência da Tripulação: Desde que o timoneiro esteja dentro do efetivo que desempenha a função de navegação, a quantidade mínima e necessária de tripulantes é reduzida em 10 (mínimo de 1), conforme a coluna 'Navegação' da tabela 'Efetivo de Acordo com o Tamanho do Navio' (regras no Capítulo 14).</li><li>Ajudante Entendido: Ao auxiliar um carpinteiro na construção do navio, o tempo total de construção é reduzido pela metade.</li><li>Forçando Limites: As embarcações conduzidas por você ignoram a redução de velocidade causada por dano sofrido (regras no Capítulo 14).</li></ul><p><strong>CONTROLE</strong></p><p>Mesmo que o navegador seja quem define a rota, o timoneiro é quem faz o navio realmente segui-la. Seu domínio sobre o leme permite reagir às forças do mar com precisão incomparável.</p><ul><li>Cavalgar Correntes: Desde que não esteja em uma corrente de nível 0, você pode mover o navio como se a corrente estivesse em nível 2 a seu favor.</li><li>Direção Absoluta: Você sofre apenas metade da redução de velocidade proveniente de correntes marinhas e mantém o controle total da direção, mesmo em correntes de nível 3.</li><li>Impulso: Gastando 3 Ações de Manobra, você faz com que o navio se mova como se estivesse em uma corrente de nível 3 a seu favor, mantendo controle total sobre seu movimento.</li><li>Surf Naval: Gastando 4 Ações de Manobra, você faz com que o navio se mova de forma aleatória durante 1 minuto, fazendo com que todos os ataques contra ele recebam desvantagem.</li></ul><p><strong>MANOBRAR DESASTRES NATURAIS</strong></p><p>Além de considerar os Testes de Desastre Natural como testes relacionados à sua profissão, recebe os seguintes benefícios nesses testes.</p><ul><li>Resiliência Náutica: Caso falhe no teste, o dano recebido é reduzido pela metade, e em caso de sucesso, você não sofre nenhum dano.</li><li>Reação Instintiva: Caso o resultado do Teste de Navegação seja 'Maremoto', 'Redemoinho' ou 'Tufão', você pode manobrar rapidamente o navio para sofrer os efeitos do resultado 'Chuva' no lugar. Essa característica só pode ser usada uma vez por viagem.</li><li>Controle Sob Pressão: Quando falhar em um Teste de Desastre Natural, você pode, uma vez por viagem, tratar a falha como um sucesso.</li></ul><p><strong>Ferramentas:</strong> 1 mochila pequena, livros de navegação e comportamento humano, 1 tipo de bússola à sua escolha (bússola, log pose, log pose de 3 agulhas), 10 cordas e 1 tambor.</p>",
    "skillChoice": {
      "count": 2,
      "pool": [
        "ath",
        "prf",
        "ins",
        "prc",
        "per",
        "slt"
      ]
    }
  },
  {
    "code": "sem-profissao",
    "name": "Sem Profissão",
    "requirements": "Profissão (Alternativa)",
    "uses": {
      "max": 3,
      "period": "lr"
    },
    "skillChoice": {
      "count": 2,
      "exclude": [
        "Cont",
        "arc",
        "luc"
      ]
    },
    "desc": "<p>O jogador pode escolher não exercer nenhuma profissão para dedicar-se totalmente ao seu Estilo de Combate e a ajudar seus companheiros em suas tarefas. Você se torna incapaz de aprender qualquer profissão e recebe as seguintes características:</p><p><strong>Ajudante Perfeito</strong></p><p>Quando uma criatura fizer um Teste de Atributo relacionado a qualquer profissão, você pode ajudá-la e conceder um bônus de +5 na jogada (em combate, isso requer a ação 'Ajudar'). Essa característica pode ser usada 3 vezes, e todos os usos são recuperados ao final de um descanso longo.</p><p><strong>Foco</strong></p><p>Você se torna proficiente em 2 Perícias de sua escolha, com exceção de 'Haki', 'Sobrenatural' e 'Sorte'.</p><p><strong>Parceiro de Treino</strong></p><p>Você reduz pela metade (50%, arredondado para cima) o tempo de treinamento de uma criatura, desde que o treinamento não exija um tutor. Durante esse período, você não pode utilizar dias para seus próprios treinamentos.</p><p><strong>Tempo Livre</strong></p><p>Por não dedicar tempo ao estudo de uma Profissão, você pode assumir até 5 funções do navio (ver Capítulo 13) sem ser impedido de realizar treinamentos ou de ajudar seus companheiros nos deles.</p>"
  },
  {
    "code": "profissoes-regras-e-graduacoes",
    "name": "Profissões — Regras e Graduações",
    "requirements": "Referência",
    "desc": "<p><em>Item de referência. As Profissões representam ocupações em que o personagem se destaca. A partir do 1º nível você escolhe uma Profissão e recebe seus benefícios.</em></p><p><strong>Benefícios da Profissão</strong></p><ul><li>Pode adicionar o Bônus de Proficiência em Testes de Atributo relacionados à profissão escolhida (a critério do Narrador);</li><li>Recebe as características únicas da profissão escolhida;</li><li>Recebe proficiência nas ferramentas da profissão escolhida;</li><li>Apenas na profissão de 1º nível: escolha de 2 perícias e o conjunto de ferramentas/equipamento inicial.</li></ul><p><strong>Adquirindo Novas Profissões</strong></p><p>A cada 5 níveis de personagem (5º, 10º, 15º e 20º) você pode aprender uma nova profissão, desde que, antes de atingir esses níveis, tenha lido um Livro de Profissão (item raro) ou recebido instrução de um tutor — ao menos 2 horas por dia durante 90 dias, ou após o avanço de 2 níveis (o que ocorrer primeiro). Ao adquirir uma profissão após o 1º nível, você não recebe proficiências em perícias nem equipamento inicial; porém, pode substituir uma de suas perícias por uma das opções da nova profissão.</p><p><strong>Feitos, Reconhecimentos e Graduações</strong></p><p>O progresso de uma profissão segue: Profissional (inicial) → Especialista → Mestre → Grão-Mestre, mantendo os benefícios anteriores. As graduações podem ser conquistadas por Grandes Feitos (ações notáveis ou um Teste relacionado com CD 26+ em uma única jogada, sem vantagem/rerrolagem) ou por Avanço Planejado nos níveis 5/10/15/20 (elevar a graduação de uma profissão em vez de aprender uma nova).</p><p><em>Neste sistema, ao atingir os níveis 5/10/15/20 com uma profissão na ficha, surge um aviso para elevar a graduação de uma profissão à sua escolha (você também pode optar por aprender uma nova profissão arrastando-a para a ficha).</em></p><ul><li><strong>Especialista:</strong> você pode ter vantagem em qualquer Teste de Atributo relacionado à sua profissão — 3 vezes por descanso longo.</li><li><strong>Mestre:</strong> em Testes relacionados à sua profissão, trata qualquer resultado de 9 ou menos no d20 como 10.</li><li><strong>Grão-Mestre:</strong> ao falhar em um Teste relacionado à sua profissão, pode considerá-lo bem-sucedido — 3 vezes, recuperando 1 uso por descanso longo.</li></ul><p><strong>Aperfeiçoamento Profissional</strong> (substitui os valores anteriores conforme a graduação):</p><table><tr><td><strong>Graduação</strong></td><td><strong>Desconto em Valores</strong></td><td><strong>Redução na CD</strong></td><td><strong>Aumento de Passo</strong></td></tr><tr><td>Especialista</td><td>10%</td><td>−1</td><td>d8</td></tr><tr><td>Mestre</td><td>20%</td><td>−2</td><td>d10</td></tr><tr><td>Grão-Mestre</td><td>50%</td><td>−3</td><td>d12</td></tr></table><p>Desconto em Valores reduz custos predeterminados; Redução na CD diminui CDs predeterminadas; Aumento de Passo eleva o tipo de dado predeterminado das características da profissão.</p>"
  }
];

/* EQUIPMENT — Capítulo 8 (Equipamentos), gerado a partir do livro */
export const EQUIPMENT = [
  {
    "kind": "weapon",
    "code": "adaga",
    "name": "Adaga / Kunai",
    "wtype": "martialM",
    "props": [
      "fin",
      "thr"
    ],
    "damage": {
      "number": 1,
      "denomination": 4,
      "types": [
        "slashing"
      ]
    },
    "range": {
      "value": 6,
      "long": 15
    },
    "price": 20000,
    "weight": 0.5,
    "desc": "<p>Pequena lâmina afiada, eficaz em combate corpo a corpo ou arremessada. Versátil e fácil de ocultar.</p><p><em>Dano Cortante ou Perfurante (à escolha).</em></p><p><strong>✠ Expertise:</strong> A criatura atingida recebe a condição 'Sangramento'.</p>"
  },
  {
    "kind": "weapon",
    "code": "daito-katana",
    "name": "Daito / Katana",
    "wtype": "martialM",
    "props": [
      "fin",
      "ver"
    ],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "slashing"
      ]
    },
    "versatile": {
      "number": 1,
      "denomination": 8,
      "types": [
        "slashing"
      ]
    },
    "price": 80000,
    "weight": 1.6,
    "desc": "<p>Versão mais longa de uma katana.</p><p><strong>✠ Expertise:</strong> A próxima jogada de ataque (comum) feita contra você, até o final do seu próximo turno, falha.</p>"
  },
  {
    "kind": "weapon",
    "code": "espada-montante",
    "name": "Espada Montante",
    "wtype": "martialM",
    "props": [
      "rch",
      "two",
      "hvy"
    ],
    "damage": {
      "number": 2,
      "denomination": 6,
      "types": [
        "slashing"
      ]
    },
    "price": 150000,
    "weight": 6,
    "desc": "<p>Espada colossal de até 3m, usada para cortar fileiras inimigas ou como ferramenta de cerco.</p><p><em>Arma de Cerco: o dano final é dobrado contra estruturas.</em></p><p><strong>✠ Expertise:</strong> Você recebe +2 na Classe de Resistência, até o início do seu próximo turno.</p>"
  },
  {
    "kind": "weapon",
    "code": "katana",
    "name": "Katana",
    "wtype": "martialM",
    "props": [
      "fin"
    ],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "slashing"
      ]
    },
    "price": 70000,
    "weight": 1.2,
    "desc": "<p>Espada de lâmina curva e gume único, equilibrada para cortes precisos e rápidos.</p><p><strong>✠ Expertise:</strong> Os dados de dano da arma são maximizados.</p>"
  },
  {
    "kind": "weapon",
    "code": "kogatana",
    "name": "Kogatana",
    "wtype": "martialM",
    "props": [
      "fin"
    ],
    "damage": {
      "number": 1,
      "denomination": 4,
      "types": [
        "slashing"
      ]
    },
    "price": 30000,
    "weight": 0.5,
    "desc": "<p>Pequena katana portátil, semelhante a uma adaga, ideal para golpes ágeis ou como arma reserva.</p><p><strong>✠ Expertise:</strong> A criatura atingida recebe a condição 'Sangramento'.</p>"
  },
  {
    "kind": "weapon",
    "code": "machado",
    "name": "Machado",
    "wtype": "martialM",
    "props": [
      "thr"
    ],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "slashing"
      ]
    },
    "range": {
      "value": 6,
      "long": 15
    },
    "price": 55000,
    "weight": 1.5,
    "desc": "<p>Ferramenta de batalha com lâmina larga e afiada, capaz de ser arremessada ou usada em combate próximo.</p><p><strong>✠ Expertise:</strong> Você recebe a condição 'Empoderado', até o final do seu próximo turno.</p>"
  },
  {
    "kind": "weapon",
    "code": "machado-grande",
    "name": "Machado Grande",
    "wtype": "martialM",
    "props": [
      "rch",
      "two",
      "hvy"
    ],
    "damage": {
      "number": 1,
      "denomination": 12,
      "types": [
        "slashing"
      ]
    },
    "price": 90000,
    "weight": 3,
    "desc": "<p>Machado de lâmina dupla, exigindo força para golpes devastadores que atingem amplos alcances.</p><p><strong>✠ Expertise:</strong> Você causa 1d6 de dano em todas as criaturas a até 3 metros de você.</p>"
  },
  {
    "kind": "weapon",
    "code": "nodachi",
    "name": "Nodachi",
    "wtype": "martialM",
    "props": [
      "rch",
      "two",
      "hvy"
    ],
    "damage": {
      "number": 1,
      "denomination": 8,
      "types": [
        "slashing"
      ]
    },
    "price": 100000,
    "weight": 2.8,
    "desc": "<p>Katana alongada com lâmina pesada, projetada para cortes amplos e potentes, dominando o campo de batalha.</p><p><strong>✠ Expertise:</strong> Sua próxima jogada de ataque (comum), até o final do seu próximo turno, tem margem de acerto crítico 16-20.</p>"
  },
  {
    "kind": "weapon",
    "code": "rapieira",
    "name": "Rapieira",
    "wtype": "martialM",
    "props": [
      "fin"
    ],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "piercing"
      ]
    },
    "price": 70000,
    "weight": 1,
    "desc": "<p>Espada elegante e afiada, focada em estocadas precisas, com guarda elaborada para proteção da mão.</p><p><em>Dano Cortante ou Perfurante (à escolha).</em></p><p><strong>✠ Expertise:</strong> A próxima Salvaguarda de Destreza recebe sucesso automático, até o fim do encontro de combate.</p>"
  },
  {
    "kind": "weapon",
    "code": "sabre",
    "name": "Sabre",
    "wtype": "martialM",
    "props": [],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "slashing"
      ]
    },
    "price": 70000,
    "weight": 1.1,
    "desc": "<p>Espada curva de gume único, balanceada para cortes fluidos, com guarda robusta para defesa.</p><p><strong>✠ Expertise:</strong> Você recebe 20 Pontos de Vida temporários, que duram até o início do seu próximo turno.</p>"
  },
  {
    "kind": "weapon",
    "code": "shikomizue",
    "name": "Shikomizue",
    "wtype": "martialM",
    "props": [
      "fin"
    ],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "slashing"
      ]
    },
    "price": 75000,
    "weight": 1,
    "desc": "<p>Lâmina fina oculta dentro de uma bengala, perfeita para ataques sorrateiros ou defesa discreta.</p><p><strong>✠ Expertise:</strong> Sua próxima jogada de ataque (comum ou Técnicas), até o final do seu próximo turno, recebe +3 de acerto.</p>"
  },
  {
    "kind": "weapon",
    "code": "bastao",
    "name": "Bastão",
    "wtype": "simpleM",
    "props": [
      "rch",
      "two"
    ],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "bludgeoning"
      ]
    },
    "price": 40000,
    "weight": 1.5,
    "desc": "<p>Um pedaço simples de madeira ou metal, de forma cilíndrica, utilizado como arma de combate.</p><p><em>Dano de arma marcial = seu dano desarmado aumentado em 1 passo (1d6 é apenas referência).</em></p><p><strong>✠ Expertise:</strong> A criatura atingida recebe a condição 'Caído'.</p>"
  },
  {
    "kind": "weapon",
    "code": "kanabo-tacape",
    "name": "Kanabo / Tacape",
    "wtype": "simpleM",
    "props": [
      "two",
      "hvy"
    ],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "bludgeoning"
      ]
    },
    "price": 60000,
    "weight": 4.5,
    "desc": "<p>Um bastão robusto com a extremidade grossa, podendo conter espinhos ou saliências metálicas.</p><p><em>Dano de arma marcial = seu dano desarmado aumentado em 1 passo (1d6 é apenas referência).</em></p><p><em>Dano Contundente ou Perfurante (à escolha).</em></p><p><em>Arma de Cerco: o dano final é dobrado contra estruturas.</em></p><p><strong>✠ Expertise:</strong> Ao final do cálculo de dano, empurre a criatura por 6 metros ou adicione 1d8 de dano adicional.</p>"
  },
  {
    "kind": "weapon",
    "code": "luva-de-ferro",
    "name": "Luva de Ferro",
    "wtype": "simpleM",
    "props": [],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "bludgeoning"
      ]
    },
    "price": 20000,
    "weight": 0.8,
    "desc": "<p>Uma luva reforçada com placas metálicas sobre os dedos, podendo ter espinhos.</p><p><em>Dano de arma marcial = seu dano desarmado aumentado em 1 passo (1d6 é apenas referência).</em></p><p><em>Dano Contundente ou Perfurante (à escolha).</em></p><p><strong>✠ Expertise:</strong> Sua próxima jogada de ataque (comum ou Técnicas), até o final do seu próximo turno, recebe +3 de acerto.</p>"
  },
  {
    "kind": "weapon",
    "code": "nunchaku",
    "name": "Nunchaku",
    "wtype": "simpleM",
    "props": [
      "fin"
    ],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "bludgeoning"
      ]
    },
    "price": 25000,
    "weight": 1,
    "desc": "<p>Dois bastões curtos, geralmente de madeira ou metal, conectados por uma corrente ou corda.</p><p><em>Dano de arma marcial = seu dano desarmado aumentado em 1 passo (1d6 é apenas referência).</em></p><p><strong>✠ Expertise:</strong> Ao final do cálculo de dano, adicione 1d12 de dano Contundente.</p>"
  },
  {
    "kind": "weapon",
    "code": "par-de-tonfas",
    "name": "Par de Tonfas",
    "wtype": "simpleM",
    "props": [
      "two"
    ],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "bludgeoning"
      ]
    },
    "price": 42000,
    "weight": 2,
    "desc": "<p>Dois bastões alongados com empunhadura perpendicular, ideais para bloquear e contra-atacar golpes corpo a corpo.</p><p><em>Dano de arma marcial = seu dano desarmado aumentado em 1 passo (1d6 é apenas referência).</em></p><p><strong>✠ Expertise:</strong> Você recebe +2 na Classe de Resistência, até o início do seu próximo turno.</p>"
  },
  {
    "kind": "weapon",
    "code": "canhao-bazuca",
    "name": "Canhão / Bazuca",
    "wtype": "martialR",
    "props": [
      "two",
      "amm",
      "hvy",
      "lod",
      "fir"
    ],
    "damage": {
      "number": 3,
      "denomination": 10,
      "types": [
        "bludgeoning"
      ]
    },
    "range": {
      "value": 21,
      "long": 30
    },
    "price": 350000,
    "weight": 12,
    "desc": "<p>Uma poderosa arma que dispara bolas de chumbo ou explosivas. Eficaz contra estruturas e grupos.</p><p><em>Dano conforme a munição utilizada. Cada disparo consome 1 munição.</em></p><p><strong>✠ Expertise:</strong> Você recebe +6 metros de deslocamento, até o fim do seu próximo turno.</p>"
  },
  {
    "kind": "weapon",
    "code": "escopeta",
    "name": "Escopeta",
    "wtype": "martialR",
    "props": [
      "two",
      "amm",
      "lod",
      "fir"
    ],
    "damage": null,
    "range": {
      "value": 3
    },
    "price": 150000,
    "weight": 3.5,
    "desc": "<p>Arma de fogo de cano duplo que dispara múltiplos projéteis de uma vez, devastando alvos em curto alcance. Requer 10 munições esféricas por disparo.</p><p><em>Ataque em área: cone de 3 metros.</em></p><p><strong>✠ Expertise:</strong> Todos dentro da área (cone de 3 metros) devem fazer uma Salvaguarda de Destreza, sofrendo 3d8 de dano Contundente se falhar.</p>"
  },
  {
    "kind": "weapon",
    "code": "mosquete",
    "name": "Mosquete",
    "wtype": "martialR",
    "props": [
      "amm",
      "two",
      "fir"
    ],
    "damage": {
      "number": 1,
      "denomination": 8,
      "types": [
        "piercing"
      ]
    },
    "range": {
      "value": 18,
      "long": 24
    },
    "price": 100000,
    "weight": 4,
    "desc": "<p>Arma de pólvora de longo alcance, com dano variável conforme a munição.</p><p><em>Dano conforme a munição utilizada. Cada disparo consome 1 munição.</em></p><p><strong>✠ Expertise:</strong> Sua próxima jogada de ataque (comum), até o final do seu próximo turno, tem margem de acerto crítico 16-20.</p>"
  },
  {
    "kind": "weapon",
    "code": "metralhadora",
    "name": "Metralhadora",
    "wtype": "martialR",
    "props": [
      "two",
      "amm",
      "lod",
      "fir"
    ],
    "damage": null,
    "range": {
      "value": 6
    },
    "price": 380000,
    "weight": 5,
    "desc": "<p>Arma automática com carregador de alta capacidade, capaz de liberar rajadas letais em área. Gasta 20 munições perfurantes por disparo.</p><p><em>Ataque em área: cone de 6 metros.</em></p><p><strong>✠ Expertise:</strong> Todos dentro da área (cone de 6 metros) devem fazer uma Salvaguarda de Destreza, sofrendo 3d6 de dano Perfurante se falhar, ou metade se obtiver sucesso.</p>"
  },
  {
    "kind": "weapon",
    "code": "pistola",
    "name": "Pistola",
    "wtype": "martialR",
    "props": [
      "amm",
      "fir"
    ],
    "damage": {
      "number": 1,
      "denomination": 8,
      "types": [
        "piercing"
      ]
    },
    "range": {
      "value": 9,
      "long": 15
    },
    "price": 70000,
    "weight": 1.5,
    "desc": "<p>Arma de fogo curta e versátil, com dano determinado pela munição.</p><p><em>Dano conforme a munição utilizada. Cada disparo consome 1 munição.</em></p><p><strong>✠ Expertise:</strong> Caso tenha errado uma ou mais jogadas de ataque (comum ou Técnicas) no turno atual, você recebe 2 jogadas de ataque (comum) adicionais que causam apenas o dano da munição.</p>"
  },
  {
    "kind": "weapon",
    "code": "arco-estilingue",
    "name": "Arco / Estilingue",
    "wtype": "simpleR",
    "props": [
      "amm",
      "two"
    ],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "piercing"
      ]
    },
    "range": {
      "value": 18,
      "long": 24
    },
    "price": 22500,
    "weight": 0.5,
    "desc": "<p>Arma de longo alcance feita de madeira flexível e corda resistente, capaz de lançar flechas ou projéteis com precisão.</p><p><em>Dano conforme a munição utilizada. Cada disparo consome 1 munição.</em></p><p><strong>✠ Expertise:</strong> A criatura atingida recebe a condição 'Enfurecido', até o final do próximo turno da criatura.</p>"
  },
  {
    "kind": "weapon",
    "code": "dinamite",
    "name": "Dinamite",
    "wtype": "martialR",
    "props": [
      "thr"
    ],
    "damage": null,
    "range": {
      "value": 6
    },
    "price": 25000,
    "weight": 0.6,
    "desc": "<p>Uma banana de dinamite com pavio inflamável.</p><p><em>Com uma ação, acenda e arremesse: cada criatura a até 1,5 m do ponto de origem faz Salvaguarda de Destreza CD 15, sofrendo 3d6 de dano de Fogo (metade com sucesso). Bananas extras presas juntas aumentam o dano em +1d6 (até 10d6) e o raio em +1,5 m (até 6 m).</em></p>"
  },
  {
    "kind": "weapon",
    "code": "escudo-de-ferro",
    "name": "Escudo de Ferro",
    "wtype": "martialM",
    "props": [],
    "damage": {
      "number": 1,
      "denomination": 4,
      "types": [
        "bludgeoning"
      ]
    },
    "price": 50000,
    "weight": 4,
    "desc": "<p>Escudo redondo de metal usado para defesa e golpes.</p><p><em>Concede +1 na Classe de Resistência a você e a aliados a até 1,5 m (não acumula com outros escudos). Usar um escudo reduz em 1 a quantidade de ataques (comum) por turno (mínimo 1).</em></p><p><strong>✠ Expertise:</strong> Você recebe 20 Pontos de Vida temporários, que duram até o início do seu próximo turno.</p>"
  },
  {
    "kind": "weapon",
    "code": "chicote",
    "name": "Chicote",
    "wtype": "martialM",
    "props": [
      "fin",
      "rch"
    ],
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "slashing"
      ]
    },
    "price": 7500,
    "weight": 1.5,
    "desc": "<p>Corda ou tira de couro com ponta afiada, ideal para ataques à distância e desarmar oponentes.</p><p><strong>✠ Expertise:</strong> A criatura atingida recebe a condição 'Incapacitado', até o final do próximo turno da criatura.</p>"
  },
  {
    "kind": "weapon",
    "code": "foice",
    "name": "Foice",
    "wtype": "martialM",
    "props": [
      "rch",
      "two"
    ],
    "damage": {
      "number": 1,
      "denomination": 8,
      "types": [
        "slashing"
      ]
    },
    "price": 50000,
    "weight": 3,
    "desc": "<p>Lâmina curva montada em haste longa, usada tanto para combate quanto para colheita. Pode ser usada como requisito 'Arma Cortante'.</p><p><strong>✠ Expertise:</strong> Ao final do cálculo de dano, puxe a criatura para 1,5 metro de você ou adicione 1d8 de dano adicional.</p>"
  },
  {
    "kind": "weapon",
    "code": "lanca",
    "name": "Lança",
    "wtype": "martialM",
    "props": [
      "rch",
      "two",
      "thr"
    ],
    "damage": {
      "number": 1,
      "denomination": 10,
      "types": [
        "piercing"
      ]
    },
    "range": {
      "value": 6,
      "long": 12
    },
    "price": 70000,
    "weight": 2.5,
    "desc": "<p>Haste com ponta afiada, versátil para estocadas ou arremessos. Pode ser usada como requisito 'Arma Cortante'.</p><p><strong>✠ Expertise:</strong> Caso tenha errado uma ou mais jogadas de ataque (comum ou Técnicas) no turno atual, você recebe 2 jogadas de ataque (comum) adicionais que causam apenas o dano da lança.</p>"
  },
  {
    "kind": "weapon",
    "code": "mangual",
    "name": "Mangual",
    "wtype": "martialM",
    "props": [
      "hvy"
    ],
    "damage": {
      "number": 1,
      "denomination": 10,
      "types": [
        "piercing"
      ]
    },
    "price": 30000,
    "weight": 4.5,
    "desc": "<p>Um cabo de madeira ou metal com uma bola de ferro com espinhos conectado por uma corrente.</p><p><em>Arma de Cerco: o dano final é dobrado contra estruturas.</em></p><p><strong>✠ Expertise:</strong> Ao final do cálculo de dano, adicione pontos de dano extra em valor igual à metade da CR do alvo.</p>"
  },
  {
    "kind": "weapon",
    "code": "martelo-de-guerra",
    "name": "Martelo de Guerra",
    "wtype": "martialM",
    "props": [
      "two",
      "hvy"
    ],
    "damage": {
      "number": 1,
      "denomination": 12,
      "types": [
        "bludgeoning"
      ]
    },
    "price": 80000,
    "weight": 7,
    "desc": "<p>Um cabo de madeira ou metal com um grande e pesado pedaço de metal em sua extremidade.</p><p><em>Arma de Cerco: o dano final é dobrado contra estruturas.</em></p><p><strong>✠ Expertise:</strong> Ao final do cálculo de dano, empurre a criatura por 6 metros ou adicione 1d8 de dano adicional.</p>"
  },
  {
    "kind": "weapon",
    "code": "naginata-alabarda",
    "name": "Naginata / Alabarda",
    "wtype": "martialM",
    "props": [
      "rch",
      "hvy",
      "ver"
    ],
    "damage": {
      "number": 1,
      "denomination": 10,
      "types": [
        "slashing"
      ]
    },
    "versatile": {
      "number": 1,
      "denomination": 12,
      "types": [
        "slashing"
      ]
    },
    "price": 100000,
    "weight": 7.5,
    "desc": "<p>Haste com uma grande lâmina em sua ponta. Pode ser usada como requisito 'Arma Cortante'.</p><p><strong>✠ Expertise:</strong> Você causa 1d6 de dano em todas as criaturas a até 3 metros de você.</p>"
  },
  {
    "kind": "weapon",
    "code": "tridente",
    "name": "Tridente",
    "wtype": "martialM",
    "props": [
      "rch",
      "two"
    ],
    "damage": {
      "number": 1,
      "denomination": 10,
      "types": [
        "piercing"
      ]
    },
    "price": 70000,
    "weight": 3.5,
    "desc": "<p>Um bastão circular com 3 pontas em sua extremidade. Pode ser considerado arma marcial para criaturas aquáticas ou caratecas homem-peixe.</p><p><strong>✠ Expertise:</strong> A criatura atingida tem seu deslocamento reduzido pela metade, até o final do próximo turno dela.</p>"
  },
  {
    "kind": "weapon",
    "code": "zarabatana",
    "name": "Zarabatana",
    "wtype": "simpleR",
    "props": [
      "amm"
    ],
    "damage": {
      "number": 1,
      "denomination": null,
      "bonus": "1",
      "types": [
        "piercing"
      ]
    },
    "range": {
      "value": 6,
      "long": 9
    },
    "price": 8000,
    "weight": 0.3,
    "desc": "<p>Um pequeno cano feito com o propósito de atirar dardos silenciosamente. Cada sopro consome 1 munição.</p><p><em>Dano conforme a munição utilizada. Cada disparo consome 1 munição.</em></p><p><strong>✠ Expertise:</strong> A criatura atingida recebe a condição 'Impedido', até o final do próximo turno da criatura.</p>"
  },
  {
    "kind": "weapon",
    "code": "shuriken",
    "name": "Shuriken",
    "wtype": "simpleM",
    "props": [
      "fin",
      "thr"
    ],
    "damage": {
      "number": 1,
      "denomination": 4,
      "types": [
        "piercing"
      ]
    },
    "range": {
      "value": 6,
      "long": 12
    },
    "price": 500,
    "weight": 0.1,
    "desc": "<p>Uma pequena estrela de metal afiada.</p><p><strong>✠ Expertise:</strong> A criatura atingida recebe a condição 'Sangramento'.</p>"
  },
  {
    "kind": "ammo",
    "code": "bola-de-chumbo",
    "name": "Bola de Chumbo",
    "damage": {
      "number": 3,
      "denomination": 10,
      "types": [
        "bludgeoning"
      ]
    },
    "price": 15000,
    "weight": 3.5,
    "desc": "<p>Munição pesada usada em canhões ou bazucas, com altíssimo poder de impacto.</p><p><em>Arma de Cerco: o dano final é dobrado contra estruturas.</em></p>"
  },
  {
    "kind": "ammo",
    "code": "bola-explosiva",
    "name": "Bola Explosiva",
    "damage": {
      "number": 3,
      "denomination": 10,
      "types": [
        "bludgeoning"
      ]
    },
    "price": 32000,
    "weight": 3.8,
    "desc": "<p>Munição explosiva para canhões ou bazucas.</p><p>Causa 3d10 de dano Contundente e explode em área de 1,5 m de raio. Todos na área fazem Salvaguarda de Destreza, sofrendo 2d6 de dano de Fogo se falhar (metade com sucesso).</p><p><em>Arma de Cerco: o dano final é dobrado contra estruturas.</em></p>"
  },
  {
    "kind": "ammo",
    "code": "dardo",
    "name": "Dardo",
    "damage": {
      "number": 1,
      "denomination": null,
      "bonus": "1",
      "types": [
        "piercing"
      ]
    },
    "price": 200,
    "weight": 0.1,
    "desc": "<p>Pequena agulha lançada por zarabatanas, leve e silenciosa.</p>"
  },
  {
    "kind": "ammo",
    "code": "flecha",
    "name": "Flecha",
    "damage": {
      "number": 1,
      "denomination": 6,
      "types": [
        "piercing"
      ]
    },
    "price": 500,
    "weight": 0.2,
    "desc": "<p>Projétil de madeira com ponta de ferro, usado com arcos.</p>"
  },
  {
    "kind": "ammo",
    "code": "municao-de-kairoseki",
    "name": "Munição de Kairoseki",
    "damage": {
      "number": 1,
      "denomination": 8,
      "types": [
        "piercing"
      ]
    },
    "price": 1000000,
    "weight": 0.1,
    "desc": "<p>Munição feita de kairoseki para armas de disparo, como pistolas e mosquetes. Ao acertar um usuário de Akuma no Mi, anula imediatamente todos os seus poderes e impõe a condição 'Enfraquecido'.</p>"
  },
  {
    "kind": "ammo",
    "code": "municao-esferica",
    "name": "Munição Esférica",
    "damage": {
      "number": 1,
      "denomination": 8,
      "types": [
        "bludgeoning"
      ]
    },
    "price": 500,
    "weight": 0.1,
    "desc": "<p>Munição comum usada por pistolas, mosquetes e similares.</p>"
  },
  {
    "kind": "ammo",
    "code": "municao-para-estilingue",
    "name": "Munição para Estilingue",
    "damage": null,
    "price": 0,
    "weight": 0,
    "desc": "<p>Qualquer objeto que caiba no suporte preso ao elástico, como pedras, munições pequenas etc. Dano 1d4, 1d6 ou 1d8 (Contundente, Cortante ou Perfurante). Objetos diferentes de munições esféricas reduzem o alcance da arma pela metade.</p>"
  },
  {
    "kind": "ammo",
    "code": "municao-perfurante",
    "name": "Munição Perfurante",
    "damage": {
      "number": 1,
      "denomination": 8,
      "types": [
        "piercing"
      ]
    },
    "price": 1000,
    "weight": 0.1,
    "desc": "<p>Munição comum usada por pistolas, mosquetes e similares.</p>"
  },
  {
    "kind": "gear",
    "code": "ferramenta-de-profissao",
    "name": "Ferramenta de Profissão",
    "price": 80000,
    "weight": 4,
    "desc": "<p>Todos os instrumentos necessários para desempenhar as funções da profissão.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "livro-de-profissao",
    "name": "Livro de Profissão",
    "price": 500000,
    "weight": 3,
    "desc": "<p>Obra abrangente que oferece o conhecimento necessário para aprender uma profissão.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "kit-de-chaves",
    "name": "Kit de Chaves",
    "price": 10000,
    "weight": 3,
    "desc": "<p>Um conjunto variado de chaves mecânicas, utilizado para montagem e desmontagem de objetos.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "kit-de-construcao",
    "name": "Kit de Construção",
    "price": 3000,
    "weight": 2.5,
    "desc": "<p>Contém pregos, parafusos, porcas, arruelas, lixas e outros itens básicos de construção.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "kit-de-cozinha",
    "name": "Kit de Cozinha",
    "price": 60000,
    "weight": 6,
    "desc": "<p>Inclui facas, panelas e utensílios culinários para preparo de todos os tipos de refeições.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "kit-de-disfarce",
    "name": "Kit de Disfarce",
    "price": 45000,
    "weight": 3,
    "desc": "<p>Contém roupas, sapatos, perucas e um adereço peculiar à escolha do jogador.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "kit-de-escalada",
    "name": "Kit de Escalada",
    "price": 30000,
    "weight": 4.5,
    "desc": "<p>Inclui pítons, botas com solas pontiagudas, luvas e cinto de escalada. Permite se ancorar, limitando quedas e movimento vertical em até 7,5 metros.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "kit-de-falsificacao",
    "name": "Kit de Falsificação",
    "price": 0,
    "weight": 1,
    "desc": "<p>Contém moldes, tintas, materiais diversos. Permite falsificar documentos e itens.</p><p><em>Raridade: Mercado Negro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "kit-medico",
    "name": "Kit Médico",
    "price": 15000,
    "weight": 2,
    "desc": "<p>Contém materiais básicos para procedimentos médicos: seringas, agulhas de sutura, linhas, instrumentos cirúrgicos e medicamentos simples.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "kit-de-pesquisa",
    "name": "Kit de Pesquisa",
    "price": 60000,
    "weight": 3.5,
    "desc": "<p>Conjunto para pesquisas químicas e biológicas. Inclui tubos de ensaio, frascos, reagentes, pipetas, placas de Petri, entre outros.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "consumable",
    "code": "kit-de-primeiros-socorros",
    "name": "Kit de Primeiros Socorros",
    "price": 10000,
    "weight": 1,
    "desc": "<p>Kit de uso único com itens básicos para estabilização: gaze, bandagens, álcool, luvas, tesoura, máscara, etc. Pode restaurar um personagem desacordado a 1 PV.</p><p><em>Raridade: Comum.</em></p>",
    "uses": {
      "max": 1
    }
  },
  {
    "kind": "gear",
    "code": "kit-de-temperos",
    "name": "Kit de Temperos",
    "price": 15000,
    "weight": 1.5,
    "desc": "<p>Coleção de especiarias e condimentos diversos para culinária refinada.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "kit-para-abrir-cadeado",
    "name": "Kit para Abrir Cadeado",
    "price": 15000,
    "weight": 0.5,
    "desc": "<p>Ferramentas específicas com 10 usos para destrancar fechaduras comuns.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "kit-de-herbalismo",
    "name": "Kit de Herbalismo",
    "price": 50000,
    "weight": 1.5,
    "desc": "<p>Bolsas para armazenamento de ervas, tesouras e luvas de couro para coleta, almofariz e pilão, além de vários frascos de vidro.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "kit-de-venenos",
    "name": "Kit de Venenos",
    "price": 80000,
    "weight": 1.5,
    "desc": "<p>Frascos de vidro, almofariz, vareta de vidro, compostos químicos e outros instrumentos essenciais para a preparação de venenos.</p><p><em>Raridade: Mercado Negro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "algemas",
    "name": "Algemas",
    "price": 5000,
    "weight": 1,
    "desc": "<p>Par de algemas que restringe a movimentação dos membros. Presas nos braços, aplicam a condição 'Incapacitado'; presas nas pernas, reduzem o deslocamento para 1,5 metro.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "algemas-de-kairoseki",
    "name": "Algemas de Kairoseki",
    "price": 2000000,
    "weight": 3,
    "desc": "<p>Algemas especiais feitas com Kairoseki, ideais para conter usuários de Akuma no Mi. Aplicam as mesmas restrições das algemas e também a condição 'Enfraquecido'.</p><p><em>Raridade: Mercado Negro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "grilhoes-de-transporte",
    "name": "Grilhões de Transporte",
    "price": 15000,
    "weight": 7,
    "desc": "<p>Conjunto de algemas com correntes presas aos braços, cintura e pernas. Projetado para impedir fugas durante o transporte de prisioneiros. Aplicam as mesmas restrições de algemas nas mãos e pernas.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "rede-de-pesca-captura",
    "name": "Rede de Pesca/Captura",
    "price": 1500,
    "weight": 2,
    "desc": "<p>Rede trançada usada para pesca ou captura de criaturas. Arremessável a até 6 metros. Em caso de acerto, aplica a condição 'Impedido' à criatura atingida.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "rede-de-kairoseki",
    "name": "Rede de Kairoseki",
    "price": 3000000,
    "weight": 6,
    "desc": "<p>Rede especial para capturar usuários de Akuma no Mi. Pode ser lançada a até 6 metros de distância contra uma criatura Grande ou menor. Em caso de sucesso, aplica as condições 'Enfraquecido' e 'Impedido'.</p><p><em>Raridade: Mercado Negro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "cantil",
    "name": "Cantil",
    "price": 2000,
    "weight": 0.5,
    "desc": "<p>Recipiente com tampa e corda, com capacidade para 2 litros de líquido. Ideal para viagens.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "mochila-pequena",
    "name": "Mochila Pequena",
    "price": 10000,
    "weight": 1,
    "desc": "<p>Capacidade de até 30 kg de carga.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "mochila-media",
    "name": "Mochila Média",
    "price": 15000,
    "weight": 1.5,
    "desc": "<p>Suporta até 60 kg de carga.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "mochila-grande",
    "name": "Mochila Grande",
    "price": 20000,
    "weight": 2.5,
    "desc": "<p>Capacidade de carga de até 100 kg. Ideal para transporte pesado.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "chapa-metalica-de-aco",
    "name": "Chapa Metálica de Aço",
    "price": 8000,
    "weight": 12,
    "desc": "<p>Chapa de aço padrão utilizada em construções diversas.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "corda",
    "name": "Corda",
    "price": 1500,
    "weight": 3,
    "desc": "<p>Corda resistente de 15 metros, com múltiplas aplicações náuticas ou domésticas.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "corrente-de-elos",
    "name": "Corrente de Elos",
    "price": 1200,
    "weight": 2.5,
    "desc": "<p>Corrente metálica robusta, adaptável a diversas finalidades.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "lingote-de-metal",
    "name": "Lingote de Metal",
    "price": 6000,
    "weight": 1,
    "desc": "<p>Lingote de metal variado.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "tabua-de-madeira",
    "name": "Tábua de Madeira",
    "price": 2200,
    "weight": 5,
    "desc": "<p>Tábua de madeira de tamanho padrão usada em construções.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "asa-delta",
    "name": "Asa Delta",
    "price": 260000,
    "weight": 10,
    "desc": "<p>Usada para planar captando correntes de vento. Dependendo das condições climáticas, concede 9 metros de deslocamento de voo.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "equipamento-de-mergulho",
    "name": "Equipamento de Mergulho",
    "price": 15000,
    "weight": 36,
    "desc": "<p>Traje completo para mergulho com máscara, roupa térmica e pés de pato. Permite a qualquer personagem explorar o mar aberto, desde que o tanque seja periodicamente reabastecido.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "ganchos-de-escalada",
    "name": "Ganchos de Escalada",
    "price": 10000,
    "weight": 1.5,
    "desc": "<p>Par de ganchos afiados para mãos e pés. Permitem escalar superfícies verticais sem necessidade de Teste de Atributo e sem penalidades.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "lanterna",
    "name": "Lanterna",
    "price": 800,
    "weight": 0.5,
    "desc": "<p>Aparelho cilíndrico com foco de luz. Alimentado por pilhas ou baterias, ilumina um cone de até 4,5 metros com luz plena e mais 4,5 metros com penumbra.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "oculos-de-visao-noturna",
    "name": "Óculos de Visão Noturna",
    "price": 85000,
    "weight": 0.5,
    "desc": "<p>Dispositivo usado pela Marinha para missões noturnas, subaquáticas ou subterrâneas. Permite enxergar na escuridão total como se fosse penumbra.</p><p><em>Raridade: Mercado Negro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "bau",
    "name": "Baú",
    "price": 12000,
    "weight": 15,
    "desc": "<p>Contêiner resistente para armazenar itens de valor e dinheiro. Possui cadeado reforçado, mas pode ser arrombado por ladrões com tempo e ferramentas adequadas.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "caixa-de-maquiagem",
    "name": "Caixa de Maquiagem",
    "price": 5000,
    "weight": 1,
    "desc": "<p>Conjunto completo de maquiagens e produtos corporais. Pode ser usado para disfarces ou estética.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "cofre",
    "name": "Cofre",
    "price": 60000,
    "weight": 35,
    "desc": "<p>Semelhante ao baú, porém com sistema avançado de trancas e maior resistência. Ainda assim, pode ser arrombado por ladrões habilidosos com tempo suficiente.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "instrumento-musical",
    "name": "Instrumento Musical",
    "price": 10000,
    "weight": 1,
    "desc": "<p>Instrumento musical à escolha do jogador.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "pacote-de-isca-de-peixe",
    "name": "Pacote de Isca de Peixe",
    "price": 200,
    "weight": 0.2,
    "desc": "<p>Contém 20 iscas. Usado com vara de pescar para aumentar as chances de pesca.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "pacote-de-polvora",
    "name": "Pacote de Pólvora",
    "price": 20000,
    "weight": 1,
    "desc": "<p>Quantidade suficiente para carregar e disparar um único tiro de canhão.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "vara-de-pescar",
    "name": "Vara de Pescar",
    "price": 8000,
    "weight": 1,
    "desc": "<p>Vara simples feita de madeira, equipada com linha, boia e anzol.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "den-den-mushi-alto-falante",
    "name": "Den-Den Mushi Alto Falante",
    "price": 32000,
    "weight": 5,
    "desc": "<p>Dispositivo fixo usado em locais públicos para transmitir mensagens em voz alta a longas distâncias.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "den-den-mushi-bebe",
    "name": "Den-Den Mushi Bebê",
    "price": 50000,
    "weight": 0.2,
    "desc": "<p>Versão portátil, cabe na palma da mão. Permite comunicação dentro da mesma ilha ou área. Pode amplificar a voz do usuário para toda a região próxima.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "den-den-mushi-branco",
    "name": "Den-Den Mushi Branco",
    "price": 600000,
    "weight": 0.8,
    "desc": "<p>Possui duas funções únicas: interceptar conversas de outros den-den mushi na área (grampo) e proteger ligações ao ser conectado a outro den-den mushi, criando uma linha segura. Uso não autorizado pode resultar em prisão e confisco pelo Governo Mundial ou Marinha.</p><p><em>Raridade: Mercado Negro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "den-den-mushi-camera",
    "name": "Den-Den Mushi Câmera",
    "price": 40000,
    "weight": 2,
    "desc": "<p>Tira fotos emitindo flashes pelos olhos e imprime a imagem logo em seguida.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "den-den-mushi-fone",
    "name": "Den-Den Mushi Fone",
    "price": 20000,
    "weight": 0.3,
    "desc": "<p>Conectado diretamente ao den-den mushi principal. Ajuda a evitar interceptações durante ligações.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "den-den-mushi-padrao",
    "name": "Den-Den Mushi Padrão",
    "price": 50000,
    "weight": 0.5,
    "desc": "<p>Dispositivo padrão de comunicação com grande alcance. Permite chamadas entre qualquer outro den-den mushi conhecido.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "den-den-mushi-preto",
    "name": "Den-Den Mushi Preto",
    "price": 120000,
    "weight": 0.1,
    "desc": "<p>Portátil e discreto, pode ser usado como relógio. Muito utilizado por agentes secretos. Tem alcance limitado à mesma ilha.</p><p><em>Raridade: Mercado Negro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "eternal-pose",
    "name": "Eternal Pose",
    "price": 300000,
    "weight": 1,
    "desc": "<p>Similar ao Log Pose, mas aponta sempre para uma ilha específica.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "log-pose",
    "name": "Log Pose",
    "price": 50000,
    "weight": 0.2,
    "desc": "<p>Bússola especial usada na Grand Line. Memoriza o campo magnético da ilha atual (tempo de sincronização médio: 1 dia a 1 semana) e aponta para a próxima ilha da rota.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "log-pose-de-3-agulhas",
    "name": "Log Pose de 3 Agulhas",
    "price": 500000,
    "weight": 0.2,
    "desc": "<p>Versão aprimorada com 3 agulhas que apontam para diferentes ilhas. Usado no Novo Mundo, onde os campos magnéticos mudam com frequência. A agulha mais estável indica a ilha mais segura.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "vivre-card",
    "name": "Vivre Card",
    "price": 2000000,
    "weight": 0,
    "desc": "<p>Feito com material biológico de uma pessoa (como cabelo ou unha), sempre aponta em sua direção. Pode queimar caso a pessoa esteja em risco de morte.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "combustivel-de-motor",
    "name": "Combustível de Motor",
    "price": 90000,
    "weight": 0,
    "desc": "<p>Necessário para o funcionamento de motores. Cada unidade dura 10 dias.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "bateria-grande",
    "name": "Bateria Grande",
    "price": 500000,
    "weight": 15,
    "desc": "<p>Fonte de energia para máquinas de grande porte. Cada unidade dura 1 dia. Recarrega com luz solar após 1 semana.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "carvao",
    "name": "Carvão",
    "price": 200000,
    "weight": 10,
    "desc": "<p>Fonte de energia para máquinas à vapor.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "gear",
    "code": "nucleo-de-energia",
    "name": "Núcleo de Energia",
    "price": 500000,
    "weight": 3,
    "desc": "<p>Fonte de energia utilizada em Raid Suits. Cada unidade restaura 100 Pontos de Tecnologia.</p><p><em>Raridade: Raro.</em></p>"
  },
  {
    "kind": "gear",
    "code": "pilha-bateria",
    "name": "Pilha/Bateria",
    "price": 200,
    "weight": 0.1,
    "desc": "<p>Conjunto de pilhas e baterias para dispositivos elétricos simples. Serve como fonte de energia portátil.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "clothing",
    "code": "roupa-de-gala",
    "name": "Roupa de Gala",
    "price": 400000,
    "weight": 1,
    "desc": "<p>Traje elegante para eventos formais e reuniões sociais de alto nível.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "clothing",
    "code": "roupa-especial",
    "name": "Roupa Especial",
    "price": 40000,
    "weight": 1,
    "desc": "<p>Roupas específicas para ambientes hostis (desertos, neves intensas, mergulho profundo, etc.). Quando usadas corretamente, impedem penalidades por condições climáticas extremas.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "consumable",
    "code": "ampola-de-anestesia",
    "name": "Ampola de Anestesia",
    "price": 80000,
    "weight": 0.1,
    "desc": "<p>Frasco de 100 ml com tampa perfurável, contendo líquido anestésico. Deve ser usado com seringa apropriada.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "consumable",
    "code": "antidoto",
    "name": "Antídoto",
    "price": 40000,
    "weight": 0.2,
    "desc": "<p>Frasco de vidro com substâncias capazes de neutralizar venenos comuns ou servir como base para antídotos mais complexos.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "consumable",
    "code": "frasco-de-acido",
    "name": "Frasco de Ácido",
    "price": 20000,
    "weight": 0.3,
    "desc": "<p>Frasco pequeno contendo ácido altamente corrosivo. Pode ser arremessado até 6 metros como ataque à distância. Ao atingir um alvo, causa 14 (3d8) de dano Ácido.</p><p><em>Raridade: Raro.</em></p>",
    "damage": {
      "number": 3,
      "denomination": 8,
      "types": [
        "acid"
      ]
    }
  },
  {
    "kind": "consumable",
    "code": "tubo-de-ensaio",
    "name": "Tubo de Ensaio",
    "price": 500,
    "weight": 0.1,
    "desc": "<p>Tubo de vidro resistente usado para armazenar ou misturar substâncias.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "consumable",
    "code": "veneno-basico-dose",
    "name": "Veneno Básico – Dose",
    "price": 80000,
    "weight": 0.1,
    "desc": "<p>Pode ser aplicado em armas cortantes/perfurantes ou até 3 munições. Requer 1 ação. Ao atingir um alvo, este deve passar em uma Salvaguarda de Constituição CD 10, ou receberá a condição 'Envenenado'. O efeito dura até 1 minuto antes de secar.</p><p><em>Raridade: Mercado Negro.</em></p>"
  },
  {
    "kind": "consumable",
    "code": "bastao-de-fumaca",
    "name": "Bastão de Fumaça",
    "price": 10000,
    "weight": 0.4,
    "desc": "<p>Ao ser quebrado, libera uma nuvem de fumaça branca (ou colorida), com raio de 6 metros. Não tóxica.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "consumable",
    "code": "gas-do-sono",
    "name": "Gás do Sono",
    "price": 80000,
    "weight": 1.5,
    "desc": "<p>Ao abrir a válvula, libera gás em uma esfera de 1,5 metro, expandindo 1,5 m por rodada até atingir 9 metros de raio (dura até 1 minuto). Criaturas na área devem fazer Salvaguardas de Constituição a cada turno ou ganham a condição 'Sonolento'. Em caso de falha tirando resultado 1 no d20, caem inconscientes.</p><p><em>Raridade: Mercado Negro.</em></p>"
  },
  {
    "kind": "consumable",
    "code": "gas-inflamavel",
    "name": "Gás Inflamável",
    "price": 150000,
    "weight": 1.5,
    "desc": "<p>Idêntico ao gás do sono em expansão e duração. Caso entre em contato com fogo ou faísca, criaturas na área devem fazer Salvaguarda de Destreza ou sofrer 21 (6d6) de dano de Fogo.</p><p><em>Raridade: Raro.</em></p>",
    "damage": {
      "number": 6,
      "denomination": 6,
      "types": [
        "fire"
      ]
    }
  },
  {
    "kind": "consumable",
    "code": "racao-de-viagem",
    "name": "Ração de Viagem",
    "price": 2000,
    "weight": 0.5,
    "desc": "<p>Alimento conservado e nutritivo, suficiente para um dia. Pouco saboroso, mas eficaz.</p><p><em>Raridade: Comum.</em></p>"
  },
  {
    "kind": "consumable",
    "code": "racao-militar",
    "name": "Ração Militar",
    "price": 8000,
    "weight": 0.7,
    "desc": "<p>Desenvolvida pela Marinha, rica em proteínas e cafeína. Concede 20 Pontos de Vida temporários e mantém a saciedade por 1 dia.</p><p><em>Raridade: Incomum.</em></p>"
  },
  {
    "kind": "consumable",
    "code": "racao-para-animais",
    "name": "Ração para Animais",
    "price": 800,
    "weight": 0.5,
    "desc": "<p>Alimento balanceado para diversas espécies animais. Sacia por 1 dia.</p><p><em>Raridade: Comum.</em></p>"
  }
];

/* ============================================================
   AKUMA NO MI (Frutas do Diabo) — compêndio op-akuma-no-mi
   Cada fruta gera: o item akumaNoMi + Técnicas (spell, automatizadas
   com consumo de PP) + Manifestações de Poder (feat).
   Atributo de conjuração das técnicas: Vontade (int).
   ============================================================ */
export const AKUMAS = [
  /* ---------------- MERA-MERA NO MI (Logia / Fogo) ---------------- */
  {
    code: "MERA",
    name: "Mera-Mera no Mi (Fruto das Chamas)",
    img: "icons/magic/fire/flame-burning-fist-orange.webp",
    category: "logia",
    archetype: "advanced",
    aspectoInato: "Corpo Elemental (Intangibilidade) — o corpo do usuário se transforma em fogo; não pode ser tocado por ataques comuns, exceto os fortalecidos com Haki do Armamento, com Kairoseki, ou desferidos pelo inimigo natural (Água / Magma).",
    property: "Corporal, Criação, Manipulação",
    mpSlots: 12,
    awakening: false,
    weaknesses: { seawater: true, naturalEnemy: "Água / Magma" },
    description: `<p><strong>Akuma no Mi — Logia (Fogo).</strong> O usuário se torna, cria e controla fogo à vontade. Usuário Logia Avançado.</p><p><strong>Aspecto Inato — Intangibilidade:</strong> o corpo do usuário se transforma no elemento do fruto sempre que quiser; não pode ser tocado por ataques comuns (mesmo os que ignoram Resistência e Invulnerabilidade), exceto aqueles fortalecidos com Haki do Armamento, com Kairoseki, ou desferidos pelo inimigo natural.</p><hr><p><em>Fraqueza:</em> Água do mar e Kairoseki causam <strong>Enfraquecido</strong>. Inimigo natural: Água / Magma. (Usuário Logia Avançado — sem Estágio Desperto.)</p>`,
    manifestacoes: [
      {
        name: "Habilidade Refinada (Mera-Mera)",
        img: "icons/magic/fire/flame-burning-hand-orange.webp",
        desc: `<p><strong>Manifestação de Poder.</strong> Ao executar uma técnica que possua a Akuma no Mi como requisito, você escolhe uma das seguintes características:</p><ul><li>Receber vantagem na jogada de ataque executada diretamente pela técnica;</li><li>Impor desvantagem em uma Salvaguarda qualquer;</li><li>Escolher quais criaturas são afetadas dentro da área da técnica.</li></ul>`
      },
      {
        name: "Potencialização Elemental (Mera-Mera)",
        img: "icons/magic/fire/flame-burning-creature-orange.webp",
        desc: `<p><strong>Manifestação de Poder.</strong> Sempre que usar uma técnica da Akuma no Mi, você pode usar sua ação bônus e escolher um dos seguintes efeitos:</p><ul><li>Se a técnica causar dano, impor uma condição (condizente com o elemento e que custe até 2 PP) em até 3 criaturas que falhem em uma Salvaguarda de Constituição, desde que já tenham falhado em uma primeira Salvaguarda ou sido atingidas pela jogada de ataque da técnica;</li><li>Alcance "Cone": aumenta a área em 6 metros;</li><li>Alcance "Esfera" ou "Cilindro": aumenta a área em 3 metros;</li><li>Alcance "Linha": aumenta a distância em 9 metros;</li><li>Tipo de dano diferente de "Contundente": aumenta em um dado o dano da técnica.</li></ul>`
      }
    ],
    tecnicas: [
      {
        name: "Higan (Disparo de Fogo)", grau: 1, cost: 2, kind: "save", save: { targetAbility: "dex" },
        damage: { number: 2, die: 6, type: "fire" }, rangeUnits: "m", activation: "action",
        img: "icons/magic/fire/projectile-bolt-orange.webp",
        desc: `<p>Apontando seus dedos, você dispara balas de fogo contra seus inimigos. Toda criatura na área deve fazer uma Salvaguarda de Destreza, sofrendo todo o dano se falhar ou metade se obtiver sucesso.</p><p><em>Alternativamente:</em> você pode focar em uma única criatura, fazendo uma jogada de ataque à distância (9 metros, em linha) que causa 2d10 de dano de Fogo.</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Até 12 metros, Cone</p><p><strong>Requisito:</strong> Mera-Mera no Mi, Ação Poderosa</p><p><strong>Dano:</strong> 2d6 de dano de Fogo</p><p><strong>Custo:</strong> 2 PP</p>`
      },
      {
        name: "Hiken (Punho de Fogo)", grau: 2, cost: 4, kind: "save", save: { targetAbility: "dex" },
        damage: { number: 4, die: 6, type: "fire" }, rangeUnits: "m", activation: "action",
        img: "icons/magic/fire/projectile-fireball-orange.webp",
        desc: `<p>O usuário dispara um soco de fogo gigante. Toda criatura na área deve fazer uma Salvaguarda de Destreza, sofrendo todo o dano se falhar ou metade se obtiver sucesso.</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Até 15 metros, Cone</p><p><strong>Requisito:</strong> Mera-Mera no Mi, Ação Poderosa</p><p><strong>Dano:</strong> 4d6 de dano de Fogo</p><p><strong>Custo:</strong> 4 PP</p>`
      },
      {
        name: "Hidaruma", grau: 3, cost: 6, kind: "attack", attackType: "ranged",
        damage: { number: 5, die: 10, type: "fire" }, rangeUnits: "m", activation: "action",
        img: "icons/magic/fire/flame-burning-eye.webp",
        desc: `<p>Enquanto a técnica "Hotarubi" estiver ativa, você escolhe uma criatura que possa ver e que esteja dentro do alcance para acertá-la <strong>automaticamente</strong> com as chamas flutuantes.</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Até 21 metros, Linha</p><p><strong>Requisito:</strong> Mera-Mera no Mi, "Hotarubi", Ação Poderosa</p><p><strong>Dano:</strong> 5d10 de dano de Fogo</p><p><strong>Custo:</strong> 6 PP</p>`
      },
      {
        name: "Enkai: Hibashira", grau: 4, cost: 8, kind: "save", save: { targetAbility: "dex" },
        damage: { number: 8, die: 6, type: "fire" }, rangeUnits: "m", activation: "action",
        img: "icons/magic/fire/flame-burning-campfire-orange.webp",
        desc: `<p>Você cria um manto de chamas e libera um pilar de fogo contra seus inimigos, em qualquer direção. Toda criatura na área deve fazer uma Salvaguarda de Destreza, sofrendo todo o dano se falhar ou metade se obtiver sucesso.</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Até 27 m de comprimento por 3 m de largura, Linha</p><p><strong>Requisito:</strong> Mera-Mera no Mi, Ação Poderosa</p><p><strong>Dano:</strong> 8d6 de dano de Fogo</p><p><strong>Custo:</strong> 8 PP</p>`
      },
      {
        name: "Dai Enkai: Entei", grau: 5, cost: 10, kind: "save", save: { targetAbility: "dex" },
        damage: { number: 10, die: 6, type: "fire" }, rangeUnits: "m", activation: "action",
        img: "icons/magic/fire/explosion-fireball-large-orange.webp",
        desc: `<p>Usando uma grande quantidade de chamas, você cria uma bola de fogo gigante e a lança contra seus inimigos. Ela explode em um ponto de origem escolhido dentro do alcance, liberando uma explosão de 9 metros de raio. Toda criatura na área deve fazer uma Salvaguarda de Destreza, sofrendo todo o dano se falhar ou metade se obtiver sucesso.</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Até 33 metros (explosão de 9 m de raio)</p><p><strong>Requisito:</strong> Mera-Mera no Mi, Ação Poderosa</p><p><strong>Dano:</strong> 10d6 de dano de Fogo</p><p><strong>Custo:</strong> 10 PP</p>`
      },
      {
        name: "Hikyaku", grau: 1, cost: 2, kind: "utility", activation: "bonus", rangeUnits: "self",
        img: "icons/magic/movement/trail-streak-impact-orange.webp",
        desc: `<p>Técnica Auxiliar. Você impulsiona os próprios pés com fogo, garantindo 15 metros de deslocamento de voo enquanto a técnica durar.</p><hr><p><strong>Duração:</strong> Até o início do seu próximo turno</p><p><strong>Alcance:</strong> Pessoal</p><p><strong>Requisito:</strong> Mera-Mera no Mi, Ação Bônus</p><p><strong>Custo:</strong> 2 PP</p>`
      },
      {
        name: "Hotarubi", grau: 3, cost: 4, kind: "utility", activation: "bonus", rangeUnits: "m",
        img: "icons/magic/light/orbs-firefly-glow-green.webp",
        desc: `<p>Técnica Auxiliar. Você cria pequenas chamas esverdeadas, parecidas com vaga-lumes, que flutuam ao seu redor e se movem com você. Toda a área é iluminada com luz plena, mais 6 metros de raio de penumbra. Habilita a técnica "Hidaruma".</p><hr><p><strong>Duração:</strong> Até 1 minuto</p><p><strong>Alcance:</strong> Até 6 metros de raio, Esfera</p><p><strong>Requisito:</strong> Mera-Mera no Mi, Ação Bônus</p><p><strong>Custo:</strong> 4 PP</p>`
      },
      {
        name: "Onibi", grau: 5, cost: 7, kind: "utility", activation: "bonus", rangeUnits: "self",
        img: "icons/magic/fire/dragon-breath-fire-orange.webp",
        desc: `<p>Técnica Auxiliar. Você cria dragões de fogo que circulam os céus e intensificam suas chamas. Adiciona às suas Técnicas de Combate com duração "Instantâneo" 3 dados de dano extra, limitado pelo valor do grau da técnica (uma técnica de 1º Grau só recebe 1 dado extra, por exemplo). Os dados não utilizados reduzem o custo desta técnica em -1 PP cada.</p><hr><p><strong>Duração:</strong> Até 1 minuto</p><p><strong>Alcance:</strong> Pessoal</p><p><strong>Requisito:</strong> Mera-Mera no Mi, Ação Bônus</p><p><strong>Custo:</strong> 7 PP</p>`
      }
    ]
  },

  /* ---------------- OPE-OPE NO MI (Paramecia / Operação) ---------------- */
  {
    code: "OPE",
    name: "Ope-Ope no Mi (Fruto da Operação)",
    img: "icons/magic/light/explosion-star-glow-blue.webp",
    category: "paramecia",
    archetype: "advanced",
    aspectoInato: "Uso Alternativo — uma vez por descanso longo, você pode usar uma Técnica de qualquer grau ou uma Técnica Auxiliar sem gastar nenhum Ponto de Poder, desde que o requisito de duração seja \"Instantânea\".",
    property: "Criação, Espaço-Temporal, Extracorporal, Transformação",
    mpSlots: 18,
    awakening: true,
    weaknesses: { seawater: true, naturalEnemy: "" },
    description: `<p><strong>Akuma no Mi — Paramecia (Operação).</strong> Conhecida como a "Akuma no Mi Suprema". Dentro de uma "ROOM", o usuário manipula tudo livremente: troca, corta, opera e transforma. Usuário Paramecia Avançado.</p><p><strong>Aspecto Inato — Uso Alternativo:</strong> uma vez por descanso longo, use uma Técnica de qualquer grau ou Auxiliar sem gastar PP, desde que a duração seja "Instantânea".</p><hr><p><em>Fraqueza:</em> Água do mar e Kairoseki causam <strong>Enfraquecido</strong>. Despertar disponível a partir do 16º nível.</p>`,
    manifestacoes: [
      {
        name: "ROOM",
        img: "icons/magic/light/explosion-star-glow-blue-purple.webp",
        desc: `<p><strong>Manifestação de Poder.</strong> Com uma ação bônus, você cria uma redoma transparente e intangível que possibilita executar todas as técnicas da Ope-Ope no Mi e determina o alcance máximo de algumas delas.</p><p>A "ROOM" dura até que você a desfaça (sem ação). O raio é de <strong>3 metros × o nível do personagem</strong>, com ponto de origem no espaço onde você estava ao criá-la.</p><p>Alternativamente, você pode usar esta manifestação até 3 vezes por dia (apenas uma vez por turno), em conjunto com uma técnica, sem ação bônus. Recupera todos os usos ao término de um descanso longo.</p>`
      },
      {
        name: "Cirurgião da Morte",
        img: "icons/tools/cooking/knife-cleaver-steel-grey.webp",
        desc: `<p><strong>Manifestação de Poder.</strong> Com a profissão "Médico" (principal ou auxiliar, graduação Especialista ou maior), você cura qualquer doença, "Ferimento Persistente" (Cap. 12) e realiza cirurgias dentro da sua "ROOM" (o Narrador decide a duração).</p><p>Você também pode realizar o maior poder da fruta: garantir a juventude eterna a outra pessoa por meio de uma cirurgia — ao final dela, a vida do usuário é consumida.</p>`
      },
      {
        name: "Adrenalin (Estágio Desperto)",
        img: "icons/magic/life/heart-cross-blue.webp",
        desc: `<p><strong>Manifestação de Poder — apenas no Estágio Desperto.</strong> Você usa a "ROOM" de forma modificada e instantânea dentro do próprio corpo, recuperando 1 Ponto de Poder para cada 6 Pontos de Vida sacrificados. Você pode recuperar até 10 PP por turno com esta característica.</p>`
      }
    ],
    tecnicas: [
      {
        name: "Shambles", grau: 1, cost: 2, kind: "utility", activation: "bonus", rangeUnits: "m",
        img: "icons/magic/movement/chevrons-swirl-blue.webp",
        desc: `<p>Você troca de lugar qualquer criatura voluntária ou objeto dentro da "ROOM". Com criaturas/objetos Médios (ou menores), realiza um número de trocas igual ao seu modificador de Vontade (mínimo 1), simultaneamente. Uma criatura trocada não provoca reações de nenhum tipo.</p><p>Criaturas não voluntárias só podem ser movidas se surpresas ou sob "Despedaçado", falhando numa Salvaguarda de Vontade. Tamanhos maiores aumentam o custo: Grande +2 PP; Enorme +6 PP.</p><p><em>Alternativamente (Reação):</em> quando você ou uma criatura voluntária visível for alvo de uma jogada de ataque ou Salvaguarda, troque-a de lugar com outra criatura/objeto na "ROOM".</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Área dentro da "ROOM"</p><p><strong>Requisito:</strong> Ope-Ope no Mi, "ROOM", Ação Bônus ou Reação</p><p><strong>Dano:</strong> Nenhum</p><p><strong>Custo:</strong> 2 PP</p>`
      },
      {
        name: "Amputate", grau: 2, cost: 4, kind: "attack", attackType: "ranged", damage: null,
        rangeUnits: "m", activation: "action",
        img: "icons/skills/melee/strike-blade-knife-white-red.webp",
        desc: `<p>Você realiza vários cortes que separam seu alvo sem causar dano. Faça uma jogada de ataque à distância contra uma criatura na "ROOM". Se acertar, a criatura deve ser bem-sucedida em uma Salvaguarda de Destreza ou sofre a condição "Despedaçado", até que ela ou uma criatura próxima use uma ação para montá-la novamente.</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Área dentro da "ROOM"</p><p><strong>Requisito:</strong> Ope-Ope no Mi, "ROOM", Arma Cortante, Ação Poderosa</p><p><strong>Dano:</strong> Nenhum (impõe "Despedaçado")</p><p><strong>Custo:</strong> 4 PP</p>`
      },
      {
        name: "Injection Shot", grau: 3, cost: 6, kind: "attack", attackType: "melee",
        damage: { number: 6, die: 10, type: "true" }, rangeUnits: "touch", activation: "action",
        img: "icons/skills/melee/strike-dagger-arcane-blue.webp",
        desc: `<p>Você cria uma mira mental e apunhala uma única criatura com velocidade tão alta que se assemelha ao impacto de uma munição de pistola. Esta técnica <strong>não tem chance de errar</strong>.</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Toque</p><p><strong>Requisito:</strong> Ope-Ope no Mi, "ROOM", Arma Cortante, Ação Poderosa</p><p><strong>Dano:</strong> 6d10 de dano Verdadeiro</p><p><strong>Custo:</strong> 6 PP</p>`
      },
      {
        name: "Counter Shock", grau: 4, cost: 8, kind: "save", save: { targetAbility: "con" },
        damage: { number: 8, die: 8, type: "lightning" }, rangeUnits: "touch", activation: "action",
        img: "icons/magic/lightning/bolt-strike-blue.webp",
        desc: `<p>Você coloca as mãos próximas a um alvo e libera uma descarga elétrica poderosa. O alvo faz uma Salvaguarda de Constituição, sofrendo todo o dano se falhar ou metade se obtiver sucesso. Se falhar no primeiro teste, deve passar em uma nova Salvaguarda de Constituição ou recebe "Atordoado" até o fim do seu próximo turno.</p><p><em>Alternativamente:</em> você pode optar por não impor a condição "Atordoado".</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Toque</p><p><strong>Requisito:</strong> Ope-Ope no Mi, "ROOM", Ação Poderosa</p><p><strong>Dano:</strong> 8d8 de dano Elétrico</p><p><strong>Custo:</strong> 8 PP</p>`
      },
      {
        name: "Gamma Knife", grau: 5, cost: 10, kind: "attack", attackType: "melee",
        damage: { number: 10, die: 10, type: "true" }, rangeUnits: "touch", activation: "action",
        img: "icons/magic/light/beam-rays-blue-large.webp",
        desc: `<p>Você cria uma faca de pura radiação em uma das mãos e realiza uma jogada de ataque corpo-a-corpo contra uma criatura. Ao tocar o alvo, a faca explode internamente, causando grande dano.</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Toque</p><p><strong>Requisito:</strong> Ope-Ope no Mi, "ROOM", Ação Poderosa</p><p><strong>Dano:</strong> 10d10 de dano Verdadeiro</p><p><strong>Custo:</strong> 10 PP</p>`
      },
      {
        name: "Silent", grau: 6, cost: 12, kind: "utility", activation: "action", rangeUnits: "special",
        img: "icons/magic/control/no-speak-mute-gag-blue.webp",
        desc: `<p>Você escolhe uma criatura afetada pela "R-ROOM", fazendo com que ela não possa usar nenhuma técnica ou característica que consuma Pontos de Poder ou tenha limitação de usos por dia — mesmo as que anulam poderes de Akuma no Mi.</p><hr><p><strong>Duração:</strong> Até 1 minuto</p><p><strong>Alcance:</strong> Especial</p><p><strong>Requisito:</strong> Ope-Ope no Mi, "R-ROOM", Ação Poderosa</p><p><strong>Dano:</strong> Nenhum</p><p><strong>Custo:</strong> 12 PP</p>`
      },
      {
        name: "Anesthesia: Shock Wille", grau: 7, cost: 14, kind: "attack", attackType: "melee",
        damage: { number: 14, die: 10, type: "true" }, rangeUnits: "touch", activation: "action",
        img: "icons/magic/lightning/bolt-strike-sword-blue.webp",
        desc: `<p>Você atravessa um inimigo com uma lâmina, em uma jogada de ataque corpo-a-corpo, o que não o fere — mas permite causar uma descarga elétrica diretamente no corpo da criatura, sem nenhuma defesa. Qualquer redução de dano de Haki do Armamento ou Pontos de Vida temporários é ignorada.</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Toque</p><p><strong>Requisito:</strong> Ope-Ope no Mi, "K-ROOM", Arma Cortante, Ação Poderosa</p><p><strong>Dano:</strong> 14d10 de dano Verdadeiro</p><p><strong>Custo:</strong> 14 PP</p>`
      },
      {
        name: "Prazision", grau: 1, cost: 1, kind: "utility", activation: "special", rangeUnits: "m",
        img: "icons/magic/perception/eye-ringed-glow-angry-small-blue.webp",
        desc: `<p>Técnica Auxiliar. Usando um olhar afiado e precisão cirúrgica, você usa "Shambles" em momentos perfeitos, adicionando: vantagem na próxima jogada de ataque de uma criatura voluntária trocada; vantagem na próxima jogada de ataque contra uma criatura não voluntária trocada; ataques/técnicas contra a criatura trocada não podem ser impedidos. Você também pode usar "Shambles" como reação sem a "ROOM" ativa (ambas na mesma reação; a "ROOM" se desfaz ao final).</p><hr><p><strong>Duração:</strong> Instantâneo</p><p><strong>Alcance:</strong> Área dentro da "ROOM"</p><p><strong>Requisito:</strong> Ope-Ope no Mi, usar a técnica "Shambles"</p><p><strong>Custo:</strong> 1 PP</p>`
      },
      {
        name: "Radio Knife", grau: 2, cost: 2, kind: "utility", activation: "special", rangeUnits: "m",
        img: "icons/magic/lightning/bolt-blue.webp",
        desc: `<p>Técnica Auxiliar. Ao usar "Amputate", você imbui na lâmina uma grande carga elétrica que dificulta colar os pedaços separados. Uma criatura afetada só volta ao normal se passar em uma Salvaguarda de Vontade, em conjunto com a tentativa de remontagem.</p><hr><p><strong>Duração:</strong> Até 1 minuto</p><p><strong>Alcance:</strong> Área dentro da "ROOM"</p><p><strong>Requisito:</strong> Ope-Ope no Mi, "ROOM", usar a técnica "Amputate"</p><p><strong>Custo:</strong> 2 PP</p>`
      },
      {
        name: "Curtain", grau: 3, cost: 2, kind: "utility", activation: "reaction", rangeUnits: "self",
        img: "icons/magic/defensive/shield-barrier-glowing-blue.webp",
        desc: `<p>Técnica Auxiliar. Ao ser alvo de uma jogada de ataque (comum ou de técnica), você agarra e puxa o ar dentro da "ROOM", que assume a forma de uma cortina transparente e reduz <strong>4d8</strong> do dano recebido. Você pode gastar 1 PP para adicionar 2d8 de redução, até uma redução máxima total de 30d8.</p><hr><p><strong>Duração:</strong> Até o início do seu próximo turno</p><p><strong>Alcance:</strong> Pessoal</p><p><strong>Requisito:</strong> Ope-Ope no Mi, "ROOM", Reação</p><p><strong>Custo:</strong> 2 PP (+1 PP por 2d8 extra)</p>`
      },
      {
        name: "R-ROOM", grau: 6, cost: 10, kind: "utility", activation: "bonus", rangeUnits: "m",
        img: "icons/magic/control/energy-stream-link-large-blue.webp",
        desc: `<p>Técnica Auxiliar. Ao usar a Manifestação "ROOM", você pode usar esta técnica no lugar. A "R-ROOM" concentra a "ROOM" em uma única criatura visível dentro do alcance, movendo-se junto com ela. Qualquer técnica da Ope-Ope no Mi é ativada remotamente dentro da "R-ROOM", fazendo a criatura falhar em qualquer Salvaguarda contra seus efeitos. Enquanto a "R-ROOM" estiver ativa, você não pode usar a "ROOM".</p><hr><p><strong>Duração:</strong> Até 1 minuto, Concentração</p><p><strong>Alcance:</strong> Até 39 metros, Linha</p><p><strong>Requisito:</strong> Ope-Ope no Mi, Ação Bônus</p><p><strong>Custo:</strong> 10 PP</p>`
      },
      {
        name: "K-ROOM", grau: 7, cost: 15, kind: "utility", activation: "bonus", rangeUnits: "touch",
        img: "icons/magic/control/energy-stream-link-blue.webp",
        desc: `<p>Técnica Auxiliar. Ao usar a Manifestação "ROOM", você pode usar esta técnica no lugar. A "K-ROOM" concentra a "ROOM" em uma arma cortante à sua escolha, que pode ser estendida por até 60 metros em linha. Qualquer técnica da Ope-Ope no Mi é ativada na arma, com o alcance da arma e afetando apenas um alvo, recebendo: o dado de dano vira d12; o resultado é sempre o máximo; o dano da técnica aumenta em 5 dados. Enquanto ativa, você não pode usar a "ROOM".</p><hr><p><strong>Duração:</strong> Até 1 minuto</p><p><strong>Alcance:</strong> Toque (arma até 60 m em linha)</p><p><strong>Requisito:</strong> Ope-Ope no Mi, Ação Bônus</p><p><strong>Custo:</strong> 15 PP</p>`
      }
    ]
  }
];
