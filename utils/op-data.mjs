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
