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
