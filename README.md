# One Piece RPG — Sistema para Foundry VTT

Sistema de RPG de mesa inspirado em **One Piece** para o Foundry Virtual Tabletop (v14), adaptado de **D&D 5e** e baseado no *Livro do Jogador OP RPG 2.0*.

> ⚠️ **Projeto de fã, sem afiliação oficial.** One Piece é propriedade de Eiichiro Oda / Shueisha / Toei Animation. Este sistema não distribui nem reproduz a obra; apenas implementa regras de uma adaptação de mesa.

## O que está incluído (v1)

- **Atributos** de One Piece (Força, Destreza, Constituição, Sabedoria, **Vontade**, Presença).
- **Perícias** próprias (incl. Haki, Sobrenatural, Sorte, Provocação).
- Moeda **Berries (฿)**, **Pontos de Poder (PP)** = 4 × nível, **Técnicas** (Grau 1–7), nível máximo 20.
- **Estilos de Combate** (classes jogáveis) com exemplos.
- **Akuma no Mi** (Frutas do Diabo): aba na ficha, tipos Logia/Paramecia/Zoan, Manifestações de Poder e **Despertar / Estágio Desperto**.

## Compêndios (v2)

O sistema já traz **compêndios prontos**, importáveis para a ficha de forma automatizada (como no dnd5e — arraste da aba Compêndios para a ficha):

- **Estilos de Combate** (`op-classes`) — as 12 classes (Atirador, Aventureiro, Brutamontes, Carateca Homem-Peixe, Ciborgue, Espadachim, Guerrilheiro, Lutador, Ninja, Okama Kenpo, Rokushiki, Samurai) com Dado de Vida, Atributo Primário, proficiências (Salvaguardas/armas/perícias), **evolução por nível** (Avanços: Pontos de Vida, Aumentos de Atributo, concessão automática de características e Técnicas) e 1+ Caminho.
- **Caminhos** (`op-subclasses`) — subclasses dos estilos.
- **Características de Estilo** (`op-features`) — as características de classe/espécie concedidas pelos Avanços.
- **Técnicas** (`op-techniques`) — Técnicas (Grau 1–7) com **atividade rolável** (ataque ou salvaguarda + dano) que **consome Pontos de Poder** automaticamente.
- **Espécies** (`op-species`) — Anões, Celestiais, Gigantes, Humanos, Lunarianos, Minks, Povo do Mar e Mestiços, com tamanho, deslocamento, traços e aumento de atributo.
- **Antecedentes, Caminhos, Singularidades, Defeitos, Códigos de Honra, Profissões e Equipamentos** — compêndios de personalização e itens (Cap. 4, 5 e 8 do livro).

**Uso:** arraste um Estilo de Combate para a ficha → o assistente de Avanços concede Técnicas e características conforme o nível. Arraste uma Espécie → ganha traços e o aumento de atributo. Suba de nível pelo XP/nível e o sistema concede o próximo Avanço.

### Criação de Personagem (assistente)

Fichas de **nível 0 / sem classe** mostram o botão **"Criar Personagem"** no topo. Ele abre um assistente passo-a-passo — **Espécie → Estilo de Combate → Antecedente → Atributos → Descrição → Equipamento** — que monta a ficha inteira automaticamente seguindo as regras do livro (distribui atributos, aplica espécie/antecedente/classe e suas escolhas, concede Técnicas e características, e linka tudo na ficha).

### Regerar os compêndios (manutenção)

O conteúdo é gerado a partir de dados compactos:

```
node ./utils/gen-op-content.mjs      # utils/op-data.mjs → packs/_source/op-*/*.yml
node ./utils/packs.mjs package pack op-classes   # (e op-features, op-techniques, op-subclasses, op-species)
```

Edite `utils/op-data.mjs` (classes/espécies) e regere. Os `_id` e as referências de ItemGrant são gerados de forma determinística.

Roadmap (v3): Haki dedicado (Pontos de Ambição), conteúdo de frutas, equipamentos e embarcações.

## Instalação

No Foundry VTT, vá em **Configuração → Sistemas de Jogo → Instalar Sistema** e cole a URL do **manifesto**:

```
https://github.com/rezendesjoao/oprpg-system/releases/latest/download/system.json
```

O Foundry instala e mantém atualizada a versão mais recente automaticamente. Depois, crie um mundo com o sistema **One Piece RPG**.

### Instalação manual (alternativa)

Copie (ou crie um symlink d)esta pasta para o diretório de sistemas do Foundry:

```
<Foundry Data>/Data/systems/onepiece-system
```

Reinicie o Foundry e crie um mundo com o sistema **One Piece RPG**.

## Build

- Editar `*.mjs` / `*.hbs` / `lang/*.json`: **não precisa build**, apenas recarregar o Foundry.
- Editar `less/dnd5e.less`: `npm run build:css`.
- Empacotar compêndios (mundo → pack): `npm run build:db`.

## Créditos & Licenças

- Motor base: **dnd5e** system para Foundry VTT — © Atropos / Foundry, licença **MIT**.
- Regras SRD 5.1 / 5.2 — Wizards of the Coast, **CC-BY-4.0**.
- Motor de mecânicas customizadas adaptado do **jujutsu-system** (Jujutsu Legacy RPG, por Noroi).
- Regras de One Piece RPG: *Livro do Jogador 2.0* — Brendo Neves (OP RPG).
- Artes de token: Forgotten Adventures (ver `compendiumArtMappings`).

O código herdado do dnd5e permanece sob a licença MIT original.
