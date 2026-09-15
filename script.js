const rankSettings = {
  "Genin": { maxAttribute: 4, totalPoints: 10 },
  "Chūnin": { maxAttribute: 8, totalPoints: 20 },
  "Jōnin": { maxAttribute: 12, totalPoints: 30 }
};

let MAX_ATTRIBUTE = 4;
let TOTAL_POINTS = 10;
let isLoading = false;

const attributes = {
  FOR: 0,
  AGI: 0,
  NIN: 0,
  GEN: 0,
  CC: 0
};

function saveCharacterData() {
  if (isLoading) return;
  try {
    const data = {
      name: document.querySelector("#character-name").value,
      player: document.querySelector("#player-name").value,
      village: document.querySelector("#village").value,
      clan: document.querySelector("#clan").value,
      clanDisplay: document.querySelector("#clan-display").innerHTML,
      clanHasResult: document.querySelector("#clan-display").classList.contains("result"),
      element: document.querySelector("#element").value,
      elementDisplay: document.querySelector("#element-display").innerHTML,
      elementHasResult: document.querySelector("#element-display").classList.contains("result"),
      rank: document.querySelector("#rank").value,
      attributes: { ...attributes },
      background: document.querySelector("#background").value,
      notes: document.querySelector("#notes").value,
      kekkeiVisible: !document.querySelector("#kekkei-section").classList.contains("hidden"),
      element2: document.querySelector("#element2").value,
      element2Display: document.querySelector("#element2-display").innerHTML,
      element2HasResult: document.querySelector("#element2-display").classList.contains("result"),
      kekkeiResultVisible: !document.querySelector("#kekkei-result").classList.contains("hidden"),
      kekkeiName: document.querySelector("#kekkei-name").textContent,
      characterImageData: characterImageData
    };
    localStorage.setItem("narutoRPGCharacter", JSON.stringify(data));
  } catch (e) {
    console.error("Erro ao salvar:", e);
  }
}

function loadCharacterData() {
  const saved = localStorage.getItem("narutoRPGCharacter");
  if (!saved) return false;

  try {
    isLoading = true;
    const data = JSON.parse(saved);

    if (data.name) document.querySelector("#character-name").value = data.name;
    if (data.player) document.querySelector("#player-name").value = data.player;

    if (data.rank) {
      document.querySelector("#rank").value = data.rank;
      const settings = rankSettings[data.rank];
      if (settings) {
        MAX_ATTRIBUTE = settings.maxAttribute;
        TOTAL_POINTS = settings.totalPoints;
      }
    }

    if (data.village) {
      document.querySelector("#village").value = data.village;
    }

    if (data.attributes) {
      Object.keys(data.attributes).forEach((attr) => {
        attributes[attr] = data.attributes[attr];
        updateAttributeDisplay(attr);
      });
    }

    if (data.clan && data.clanHasResult) {
      document.querySelector("#clan").value = data.clan;
      if (data.clanDisplay) {
        document.querySelector("#clan-display").innerHTML = data.clanDisplay;
        document.querySelector("#clan-display").classList.add("result");
      }
      showClanInfo(data.clan);
    }

    if (data.element && data.elementHasResult) {
      document.querySelector("#element").value = data.element;
      if (data.elementDisplay) {
        document.querySelector("#element-display").innerHTML = data.elementDisplay;
        document.querySelector("#element-display").classList.add("result");
      }
    }

    if (data.kekkeiVisible && data.element) {
      kekkeiSection.classList.remove("hidden");
      if (data.element2 && data.element2HasResult) {
        document.querySelector("#element2").value = data.element2;
        if (data.element2Display) {
          element2Display.innerHTML = data.element2Display;
          element2Display.classList.add("result");
        }
      }
      if (data.kekkeiResultVisible && data.kekkeiName) {
        kekkeiResult.classList.remove("hidden");
        kekkeiName.textContent = data.kekkeiName;
      }
    }

    if (data.background) document.querySelector("#background").value = data.background;
    if (data.notes) document.querySelector("#notes").value = data.notes;

    if (data.characterImageData) {
      characterImageData = data.characterImageData;
      imagePreview.src = characterImageData;
      imagePreview.classList.remove("hidden");
      imagePlaceholder.classList.add("hidden");
    }

    updatePointsDisplay();
    updateResources();

    return true;
  } catch (e) {
    console.error("Erro ao carregar:", e);
    return false;
  } finally {
    isLoading = false;
  }
}

function clearSavedData() {
  localStorage.removeItem("narutoRPGCharacter");
}

const clans = [
  {
    name: "Uchiha",
    village: "Konoha",
    description: "Clã nobre e temido, portador do Sharingan — um dōjutsu que permite copiar técnicas, prever movimentos e dominar ilusões. Conhecido pela afinidade com Katon e pela sua linha de sangue lendária.",
    passive: "Após ver uma técnica uma vez, pode copiá-la. +1 GEN.",
    techniques: "Sharingan, Katon: Gōkakyū no Jutsu, Katon: Hōsenka no Jutsu, Genjutsu: Kai.",
    bonuses: { GEN: 1 }
  },
  {
    name: "Hyūga",
    village: "Konoha",
    description: "Clã ancestral portador do Byakugan, que permite enxergar o sistema circulatório de chakra. Utilizam o Jūken (Gentle Fist) para bloquear pontos de chakra dos oponentes.",
    passive: "Ataques Jūken bloqueiam 1 ponto de chakra do oponente. +1 NIN.",
    techniques: "Byakugan, Jūken, Hakke Rokujūyon Shō, Hakke Kūshō.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Senju",
    village: "Konoha",
    description: "Clã fundador de Konohagakure, conhecido como 'os que possuem todas as habilidades'. Versáteis em ninjutsu, taijutsu e genjutsu, com afinidade especial pela madeira.",
    passive: "Pode aprender técnicas de qualquer elemento. +1 a todos os atributos em florestas.",
    techniques: "Mokuton: Mokuryū no Jutsu, Ninjutsu variado, Taijutsu.",
    bonuses: { FOR: 1, AGI: 1, NIN: 1, GEN: 1, CC: 1 }
  },
  {
    name: "Uzumaki",
    village: "Konoha",
    description: "Clã de longevidade e reservas de chakra monstruosas. Mestres do Fūinjutsu (arte do selamento), seus corpos resistem a venenos e doenças.",
    passive: "+10 HP e +5 Chakra. Pode usar Fūinjutsu para prender oponentes.",
    techniques: "Fūinjutsu, Chōdama Jūheki, Karada Doshi, Adamantine Sealing Chain.",
    bonuses: { HP: 10, Chakra: 5 }
  },
  {
    name: "Nara",
    village: "Konoha",
    description: "Clã de gênios estratégicos que controlam sombras. Seus membros são preguiçosos por natureza, mas brilham em situações que exigem raciocínio tático.",
    passive: "Pode congelar um oponente na sombra por 1 turno. +1 GEN na escuridão.",
    techniques: "Kage Mane no Jutsu, Kage Kubi Shibari, Kage Nui.",
    bonuses: { GEN: 1 }
  },
  {
    name: "Akimichi",
    village: "Konoha",
    description: "Clã que converte calorias em chakra para expandir partes do corpo. Seus golpes são devastadores, mas consomem muita energia.",
    passive: "+5 HP por ponto em FOR. Pode converter chakra em calorias para técnicas.",
    techniques: "Baika no Jutsu, Chō Bakuretsu, Chō Ōdama, Human Bullet Tank.",
    bonuses: { HP: 10 }
  },
  {
    name: "Yamanaka",
    village: "Konoha",
    description: "Clã de comunicadores psíquicos especializados em transferência de mente e invasão mental. Trabalham como suporte em equipes ninja.",
    passive: "Pode ler a próxima ação do oponente. +1 GEN.",
    techniques: "Shintenshin no Jutsu, Kokū no Jutsu, Sensing Technique.",
    bonuses: { GEN: 1 }
  },
  {
    name: "Aburame",
    village: "Konoha",
    description: "Clã que cria insetos ninja dentro do próprio corpo em simbiose. Os insetos se alimentam de chakra e podem rastrear, atacar e criar barreiras.",
    passive: "Insetos rastreamentam inimigos escondidos. +1 a detecção.",
    techniques: "Mushizame, Kawarim no Jutsu, Doku Mushikame, Iron Mountain Leech.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Inuzuka",
    village: "Konoha",
    description: "Clã de caçadores que lutam em dupla com cães ninja. Seus sentidos são aguçados e podem farejar odores de quilômetros de distância.",
    passive: "Luta com parceiro canino. +1 AGI quando ataca em grupo.",
    techniques: "Gatsūga, Garōga, Man-Eating Wolves, Fang Over Fang.",
    bonuses: { AGI: 1 }
  },
  {
    name: "Sarutobi",
    village: "Konoha",
    description: "Família real de Konoha, herdade do Terceiro Hokage. Conhecida por dominar múltiplos elementos e técnicas de fogo com maestria.",
    passive: "Pode usar qualquer elemento. +1 a todos os atributos.",
    techniques: "Katon: Goen no Jutsu, Bunshin no Jutsu, En no Jutsu.",
    bonuses: { FOR: 1, AGI: 1, NIN: 1, GEN: 1, CC: 1 }
  },
  {
    name: "Shimura",
    village: "Konoha",
    description: "Família disciplinada com tradição em taijutsu e códigos de honra. Membros são leais e seguiram o caminho shinobi com dedicação.",
    passive: "+1 FOR em combate corpo a corpo. Pode contra-atacar após ser atingido.",
    techniques: "Konoha Senpū, Taijutsu variado, kombos de golpes.",
    bonuses: { FOR: 1 }
  },
  {
    name: "Hatake",
    village: "Konoha",
    description: "Família de ninjas talentosos e adaptáveis, mais famosa por Kakashi, o Copy Ninja. Dominam múltiplas técnicas com facilidade.",
    passive: "Pode copiar 1 técnica por batalha. +1 NIN.",
    techniques: "Chidori, Raikiri, Ninjutsu variado, Sharingan (via empréstimo).",
    bonuses: { NIN: 1 }
  },
  {
    name: "Kurama",
    village: "Konoha",
    description: "Clã especialista em genjutsu e técnicas ilusórias avançados. Seus membros possuem um olhar penetrante que confunde oponentes.",
    passive: "+2 GEN. Ilusões duram turnos extras.",
    techniques: "Genjutsu: Kagura Kessatsu, Illusion Wave, Genjutsu: Brick Burying.",
    bonuses: { GEN: 2 }
  },
  {
    name: "Kazekage",
    village: "Kazesuna",
    description: "Clã real de Sunagakure, ligado diretamente aos Kazekage. Possui domínio absoluto sobre a areia, que se move por conta própria para proteger seu mestre. Inspirado no poder de Gaara e sua defesa automática.",
    passive: "Areia bloqueia automaticamente 1 ataque por turno. +2 DEF.",
    techniques: "Sabaku Kyū (Sepultamento de Areia), Sabaku Sō (Caixão de Areia), Sabaku Fuyu (Grande Sepultamento), Kajō no Tate.",
    bonuses: { DEF: 2 }
  },
  {
    name: "Shirogane",
    village: "Kazesuna",
    description: "Clã de marionetistas de Sunagakure, mestres na arte Kugutsu. Utilizam bonecos armados com lâminas venenosas e mecanismos mortíferos. Inspirado em Kankuro e suas marionetes Crow, Black Ant e Sanshōuo.",
    passive: "Pode usar marionete como membro extra da equipe. +1 a técnicas com kugutsu.",
    techniques: "Kugutsu no Jutsu (Controle de Marionete), Karakuri Henbō (Transformação Mecânica), Poison Blade, Crow Silk Binding.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Hōki",
    village: "Kazesuna",
    description: "Família de rastreadores do deserto, especializada em localizar alvos através de tempestades de areia e terrenos áridos.",
    passive: "+1 NIN em terrenos arenosos. Pode rastrear em tempestades de areia.",
    techniques: "Sabaku no Seishin, Senketsu no Jutsu, Desert Tracking.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Fūma",
    village: "Kazesuna",
    description: "Clã nômade conhecido por armas giratórias e técnicas de vento. Possuem uma tradição de guerreiros independentes.",
    passive: "Dano crítico com fūma shuriken. +1 com armas arremessáveis.",
    techniques: "Fūma Shuriken, Katon, Fūton: Kazekiri no Jutsu.",
    bonuses: { AGI: 1 }
  },
  {
    name: "Hōzuki",
    village: "Kiri",
    description: "Clã que domina a técnica de liquefação corporal, tornando-se água para desviar de ataques. Afinidade natural com Suiton.",
    passive: "Pode tornar-se líquido por 1 turno para desviar. +1 com Suiton.",
    techniques: "Suika no Jutsu (Liquefação), Hydrification, Suiton: Suiryūdan.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Hoshigaki",
    village: "Kiri",
    description: "Clã de guerreiros brutais com força física devastadora e afinidade com técnicas aquáticas. Conhecidos por seus dentes afiados.",
    passive: "+1 FOR em água. Pode respirar debaixo d'água.",
    techniques: "Suiton: Suijinheki, Kirigakure no Jutsu, Water Shark Bullet.",
    bonuses: { FOR: 1 }
  },
  {
    name: "Yuki",
    village: "Kiri",
    description: "Clã portador do Hyōton (Kekkei Genkai), que combina Suiton e Fūton para criar gelo. Perseguidos por seu poder proibido.",
    passive: "Pode congelar água ao contato. +1 com técnicas de gelo.",
    techniques: "Hyōton: Kokuryūheki, Hyōton: Kamibraryūheki, Ice Cocoon.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Kaguya",
    village: "Kiri",
    description: "Clã ancestral que manipula os ossos do próprio corpo, tornando-os mais duros que aço. Origem dos lendários Otsutsuki.",
    passive: "Ossos mais duros que aço. +1 com técnicas ósseas.",
    techniques: "Shikotsumyaku, Kikai Totsuka, Deer Skull Agony.",
    bonuses: { FOR: 1 }
  },
  {
    name: "Karatachi",
    village: "Kiri",
    description: "Família ligada à política e ao governo de Kirigakure. Membros ocupam posições de liderança e comando militar.",
    passive: "Pode inspirar aliados. +1 a habilidades de liderança.",
    techniques: "Táticas militares, manipulação política, combate corporal.",
    bonuses: { GEN: 1 }
  },
  {
    name: "Kurosuki",
    village: "Kiri",
    description: "Clã de combatentes resistentes de Kirigakure, especializados em taijutsu e resistência a venenos.",
    passive: "+1 FOR em taijutsu. Resistência a venenos.",
    techniques: "Taijutsu, Close Combat, Poison Resistance.",
    bonuses: { FOR: 1 }
  },
  {
    name: "Yotsuki",
    village: "Kumo",
    description: "Clã de guerreiros brutais de Kumogakure, conhecidos por força física descomunal e técnicas de Raiton devastadoras.",
    passive: "+1 FOR e +1 Raiton. Pode canalizar relâmpago nos punhos.",
    techniques: "Raiton: Jiriki Karenna, Taijutsu, Lightning Armor.",
    bonuses: { FOR: 1, NIN: 1 }
  },
  {
    name: "Aemi",
    village: "Kumo",
    description: "Clã de espadachins de Kumogakure que canalizam Raiton através de suas lâminas. Conhecidos por cortes que rasgam os céus.",
    passive: "Lâminas carregadas com relâmpago causam dano extra. +1 AGI.",
    techniques: "Raiton: Raijin no Ken, Lightning Blade Dance, Thunderclap Slash.",
    bonuses: { AGI: 1 }
  },
  {
    name: "Bōsō",
    village: "Kumo",
    description: "Clã de rastreadores de Kumogakure que utilizam sensores de chakra de longo alcance. Podem detectar inimigos a quilômetros de distância.",
    passive: "Detecta inimigos escondidos em um raio amplo. +1 GEN.",
    techniques: "Sensing Technique, Thunder Pulse Detection, Cloud Track.",
    bonuses: { GEN: 1 }
  },
  {
    name: "Raijin",
    village: "Kumo",
    description: "Clã lendário de Kumogakure, ancestral dos Raikage. Membros possuem corpos que canalizam relâmpago, concedendo velocidade e força sobre-humanas.",
    passive: "Modo relâmpago: +2 FOR e +1 AGI por 1 turno. Recarga de 3 turnos.",
    techniques: "Raiton: Lightning Armor, Lariat, Doble Lariat, Swift Attack.",
    bonuses: { FOR: 2, AGI: 1 }
  },
  {
    name: "Kamizuru",
    village: "Iwa",
    description: "Clã de Iwagakure que utiliza abelhas ninja em combate. Mestres do rastreamento e controle de enxames.",
    passive: "Pode invocar abelhas para rastrear/atacar. +1 com técnicas de insetos.",
    techniques: "Kumogakure no Jutsu, Bee Summoning, Swarm Attack.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Ganryū",
    village: "Iwa",
    description: "Clã de guerreiros pesados de Iwagakure que utilizam armaduras de pedra e técnicas de gravidade. Seus golpes esmagam tudo ao redor.",
    passive: "Armadura de pedra absorve 1 ataque físico. +2 FOR.",
    techniques: "Doton: Yomi Numa, Stone Fist, Gravity Crush, Earth Wave.",
    bonuses: { FOR: 2 }
  },
  {
    name: "Kōsetsu",
    village: "Iwa",
    description: "Clã de artesãos e construtores de Iwagakure especializados em criação de golems e estátuas de pedra animadas por chakra.",
    passive: "Pode criar golem de pedra para defender. +1 DEF.",
    techniques: "Doton: Golem Creation, Stone Statue Animation, Rock Blast.",
    bonuses: { DEF: 1 }
  },
  {
    name: "Tetsuban",
    village: "Iwa",
    description: "Clã de mineradores e ferreiros de Iwagakure que manipulam minerais e metais encontrados nas montanhas. Suas técnicas controlam o ferro e a pedra.",
    passive: "Manipula minerais do ambiente para criar barreiras. +1 NIN.",
    techniques: "Doton: Iron Ore Control, Magnetic Release, Stone Chain.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Chinoike",
    village: "other",
    description: "Clã proscrito portador do Ketsuryūgan, um dōjutsu que permite manipular o sangue. Considerados perigosos e caçados.",
    passive: "Pode manipular sangue de oponentes feridos. +1 com técnicas de sangue.",
    techniques: "Ketsuryūgan, Chikara no Suiheisen, Blood Containment.",
    bonuses: { GEN: 1 }
  }
];

const villageSymbols = {
  Konoha: `
    <svg viewBox="0 0 100 100" aria-label="Símbolo de Konoha">
      <path
        d="M 50 12 C 50 12 28 28 28 50 C 28 62 36 70 46 64 C 52 60 50 52 44 50 C 38 48 34 54 36 60"
        fill="none"
        stroke="#222"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M 36 60 C 24 72 32 86 50 90"
        fill="none"
        stroke="#222"
        stroke-width="5"
        stroke-linecap="round"
      />
      <path
        d="M 50 12 L 50 6"
        fill="none"
        stroke="#222"
        stroke-width="5"
        stroke-linecap="round"
      />
    </svg>
  `,

  Kazesuna: `
    <svg viewBox="0 0 100 100" aria-label="Símbolo de Kazesuna">
      <path
        d="M 17 20 L 83 20 L 83 28 C 79 43 66 43 66 57 C 66 71 80 71 83 85 L 83 93 L 17 93 L 17 85 C 20 71 34 71 34 57 C 34 43 21 43 17 28 Z"
        fill="none"
        stroke="#222"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,

  Kiri: `
    <svg viewBox="0 0 125 100" aria-label="Símbolo de Kiri">
      <path
        d="M 18 40 C 44 27 29 19 55 5"
        fill="none"
        stroke="#222"
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        d="M 5 95 C 30 82 15 74 41 60"
        fill="none"
        stroke="#222"
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        d="M 84 40 C 110 26 95 18 121 5"
        fill="none"
        stroke="#222"
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        d="M 70 95 C 96 82 81 74 107 60"
        fill="none"
        stroke="#222"
        stroke-width="8"
        stroke-linecap="round"
      />
    </svg>
  `,

  Kumo: `
    <svg viewBox="0 0 100 100" aria-label="Símbolo de Kumo">
      <ellipse
        cx="30" cy="30" rx="14" ry="8"
        fill="none"
        stroke="#222"
        stroke-width="5"
      />
      <path
        d="M 30 38 L 30 54 C 30 54 16 54 16 44 C 16 36 30 36 30 38 Z"
        fill="none"
        stroke="#222"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        d="M 30 54 L 30 70 C 30 78 16 78 16 70 L 16 54"
        fill="none"
        stroke="#222"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        d="M 50 20 C 50 12 64 12 64 20 C 64 26 56 26 54 24 C 52 22 50 21 50 20 Z"
        fill="none"
        stroke="#222"
        stroke-width="4"
        stroke-linejoin="round"
      />
    </svg>
  `,

  Iwa: `
    <svg viewBox="0 0 100 100" aria-label="Símbolo de Iwa">
      <path
        d="M 30 75 L 30 42 L 50 25 L 70 42 L 70 75 Z"
        fill="none"
        stroke="#222"
        stroke-width="5"
        stroke-linejoin="round"
      />
      <path
        d="M 40 75 L 40 52 L 50 44 L 60 52 L 60 75"
        fill="none"
        stroke="#222"
        stroke-width="4"
        stroke-linejoin="round"
      />
    </svg>
  `,

  other: `
    <svg viewBox="0 0 100 100" aria-label="Símbolo de origem desconhecida">
      <circle cx="50" cy="50" r="35" fill="none" stroke="#222" stroke-width="5"/>
      <path
        d="M 35 35 L 65 65 M 65 35 L 35 65"
        stroke="#222"
        stroke-width="5"
        stroke-linecap="round"
      />
    </svg>
  `
};

const villageSelect = document.querySelector("#village");
const clanSelect = document.querySelector("#clan");
const clanDisplay = document.querySelector("#clan-display");
const spinClanButton = document.querySelector("#spin-clan");
const elementSelect = document.querySelector("#element");
const elementDisplay = document.querySelector("#element-display");
const spinElementButton = document.querySelector("#spin-element");
const kekkeiSection = document.querySelector("#kekkei-section");
const element2Display = document.querySelector("#element2-display");
const element2Select = document.querySelector("#element2");
const spinElement2Button = document.querySelector("#spin-element2");
const kekkeiResult = document.querySelector("#kekkei-result");
const kekkeiName = document.querySelector("#kekkei-name");
const clanInfo = document.querySelector("#clan-info");
const form = document.querySelector("#character-form");
const formMessage = document.querySelector("#form-message");

const imageInput = document.querySelector("#character-image");
const imagePreview = document.querySelector("#character-image-preview");
const imagePlaceholder = document.querySelector("#image-placeholder");
const removeImageButton = document.querySelector("#remove-image-button");

let characterImageData = "";

const elementNames = {
  Katon: "Katon — Fogo",
  Suiton: "Suiton — Água",
  "Fūton": "Fūton — Vento",
  Doton: "Doton — Terra",
  Raiton: "Raiton — Relâmpago"
};

const allElements = ["Katon", "Suiton", "Fūton", "Doton", "Raiton"];

const kekkeiCombinations = {
  "Katon+Fūton": "Shakuton",
  "Fūton+Katon": "Shakuton",
  "Katon+Doton": "Yōton",
  "Doton+Katon": "Yōton",
  "Katon+Suiton": "Futton",
  "Suiton+Katon": "Futton",
  "Fūton+Raiton": "Ranton",
  "Raiton+Fūton": "Ranton",
  "Fūton+Doton": "Jiton",
  "Doton+Fūton": "Jiton",
  "Fūton+Suiton": "Hyōton",
  "Suiton+Fūton": "Hyōton",
  "Raiton+Doton": "Bakuton",
  "Doton+Raiton": "Bakuton",
  "Raiton+Suiton": "Ranton",
  "Suiton+Raiton": "Ranton",
  "Doton+Suiton": "Deiton",
  "Suiton+Doton": "Deiton"
};

function getKekkeiGenkai(element1, element2) {
  const key = `${element1}+${element2}`;
  return kekkeiCombinations[key] || null;
}

function spinRoulette(displayElement, hiddenInput, options, callback) {
  if (options.length === 0) {
    displayElement.innerHTML = `<span class="roulette-placeholder">Nenhuma opção disponível</span>`;
    hiddenInput.value = "";
    return;
  }

  spinClanButton.disabled = true;
  spinElementButton.disabled = true;
  spinElement2Button.disabled = true;
  displayElement.classList.add("spinning");
  displayElement.classList.remove("result");

  let count = 0;
  const maxCycles = 15;
  const interval = setInterval(() => {
    const randomOption = options[Math.floor(Math.random() * options.length)];
    displayElement.innerHTML = `<span class="roulette-text">${randomOption}</span>`;
    count++;

    if (count >= maxCycles) {
      clearInterval(interval);
      const finalOption = options[Math.floor(Math.random() * options.length)];
      displayElement.innerHTML = `<span class="roulette-text">${finalOption}</span>`;
      displayElement.classList.remove("spinning");
      displayElement.classList.add("result");
      hiddenInput.value = finalOption;
      spinClanButton.disabled = false;
      spinElementButton.disabled = false;
      spinElement2Button.disabled = false;

      if (callback) callback(finalOption);
      saveCharacterData();
    }
  }, 100);
}

function updateKekkeiSection() {
  const selectedElement = elementSelect.value;

  if (!selectedElement) {
    kekkeiSection.classList.add("hidden");
    element2Select.value = "";
    kekkeiResult.classList.add("hidden");
    return;
  }

  kekkeiSection.classList.remove("hidden");
  element2Display.innerHTML = `<span class="roulette-placeholder">Gire para descobrir</span>`;
  element2Display.classList.remove("result", "spinning");
  element2Select.value = "";
  kekkeiResult.classList.add("hidden");
}

function spinElement2() {
  const primaryElement = elementSelect.value;

  if (!primaryElement) {
    formMessage.textContent = "Gire o elemento principal primeiro!";
    return;
  }

  const secondaryOptions = allElements.filter((el) => el !== primaryElement);
  const fullOptions = [
    "Não Possui", "Não Possui", "Não Possui", "Não Possui", "Não Possui",
    "Não Possui", "Não Possui", "Não Possui", "Não Possui", "Não Possui",
    ...secondaryOptions
  ];

  spinRoulette(element2Display, element2Select, fullOptions, (selected) => {
    if (selected === "Não Possui") {
      kekkeiResult.classList.add("hidden");
    } else {
      const kekkei = getKekkeiGenkai(primaryElement, selected);
      if (kekkei) {
        kekkeiName.textContent = kekkei;
        kekkeiResult.classList.remove("hidden");
      } else {
        kekkeiResult.classList.add("hidden");
      }
    }
  });
}

function spinClan() {
  const selectedVillage = villageSelect.value;

  if (!selectedVillage) {
    formMessage.textContent = "Selecione uma vila primeiro!";
    return;
  }

  const availableClans = clans
    .filter((clan) => clan.village === selectedVillage)
    .map((clan) => clan.name);

  if (availableClans.length === 0) {
    clanDisplay.innerHTML = `<span class="roulette-placeholder">Nenhum clã para esta vila</span>`;
    clanSelect.value = "";
    return;
  }

  spinRoulette(clanDisplay, clanSelect, availableClans, (selectedClan) => {
    showClanInfo(selectedClan);
  });
}

function spinElement() {
  spinRoulette(elementDisplay, elementSelect, allElements, () => {
    updateKekkeiSection();
  });
}

function showEmptyClanInfo() {
  clanInfo.classList.add("empty");
  clanInfo.innerHTML = `
    Gire a roleta do clã para visualizar as informações.
  `;
}

function showClanInfo(clanName) {
  const selectedClanName = clanName || clanSelect.value;
  const selectedClan = clans.find(
    (clan) =>
      clan.village === villageSelect.value &&
      clan.name === selectedClanName
  );

  if (!selectedClan) {
    showEmptyClanInfo();
    return;
  }

  clanInfo.classList.remove("empty");

  clanInfo.innerHTML = `
    <h3>${selectedClan.name}</h3>
    <p>${selectedClan.description}</p>
    <p><strong>Passiva:</strong> ${selectedClan.passive}</p>
    <p><strong>Técnicas:</strong> ${selectedClan.techniques}</p>
  `;
}

function updateAttributeDisplay(attribute) {
  const value = attributes[attribute];

  const valueElement = document.querySelector(`#${attribute}-value`);
  const barElement = document.querySelector(`#${attribute}-bar`);

  valueElement.textContent = value;
  barElement.style.width = `${(value / MAX_ATTRIBUTE) * 100}%`;
}

function getUsedPoints() {
  return Object.values(attributes).reduce(
    (total, value) => total + value,
    0
  );
}

function updatePointsDisplay() {
  const usedPoints = getUsedPoints();

  document.querySelector("#points-used").textContent = usedPoints;

  document.querySelectorAll(".increase").forEach((button) => {
    const attribute = button.dataset.attribute;

    button.disabled =
      attributes[attribute] >= MAX_ATTRIBUTE ||
      usedPoints >= TOTAL_POINTS;
  });

  document.querySelectorAll(".decrease").forEach((button) => {
    const attribute = button.dataset.attribute;

    button.disabled = attributes[attribute] <= 0;
  });
}

function updateResources() {
  document.querySelector("#health-value").textContent =
    20 + attributes.FOR * 5;

  document.querySelector("#chakra-value").textContent =
    20 + attributes.CC * 5;

  document.querySelector("#defense-value").textContent =
    10 + attributes.AGI;
}

function changeAttribute(attribute, amount) {
  const nextValue = attributes[attribute] + amount;

  if (nextValue < 0 || nextValue > MAX_ATTRIBUTE) {
    return;
  }

  if (amount > 0 && getUsedPoints() >= TOTAL_POINTS) {
    return;
  }

  attributes[attribute] = nextValue;

  updateAttributeDisplay(attribute);
  updatePointsDisplay();
  updateResources();
  saveCharacterData();
}

function handleImageUpload(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    formMessage.textContent = "Selecione um arquivo de imagem válido.";
    imageInput.value = "";
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    characterImageData = reader.result;

    imagePreview.src = characterImageData;
    imagePreview.classList.remove("hidden");
    imagePlaceholder.classList.add("hidden");

    formMessage.textContent = "";
  });

  reader.readAsDataURL(file);
}

function removeImage() {
  characterImageData = "";
  imageInput.value = "";
  imagePreview.src = "";

  imagePreview.classList.add("hidden");
  imagePlaceholder.classList.remove("hidden");
  saveCharacterData();
}

function getClanBonuses() {
  const selectedClanName = clanSelect.value;
  const selectedVillage = villageSelect.value;

  if (!selectedClanName || !selectedVillage) {
    return { FOR: 0, AGI: 0, NIN: 0, GEN: 0, CC: 0, HP: 0, Chakra: 0, DEF: 0 };
  }

  const clan = clans.find(
    (c) => c.village === selectedVillage && c.name === selectedClanName
  );

  if (!clan || !clan.bonuses) {
    return { FOR: 0, AGI: 0, NIN: 0, GEN: 0, CC: 0, HP: 0, Chakra: 0, DEF: 0 };
  }

  return {
    FOR: clan.bonuses.FOR || 0,
    AGI: clan.bonuses.AGI || 0,
    NIN: clan.bonuses.NIN || 0,
    GEN: clan.bonuses.GEN || 0,
    CC: clan.bonuses.CC || 0,
    HP: clan.bonuses.HP || 0,
    Chakra: clan.bonuses.Chakra || 0,
    DEF: clan.bonuses.DEF || 0
  };
}

function buildCharacterSheet() {
  const bonuses = getClanBonuses();
  const primaryElement = elementSelect.value;
  const secondaryElement = element2Select.value || "Não Possui";
  const kekkeiGenkai = secondaryElement !== "Não Possui"
    ? getKekkeiGenkai(primaryElement, secondaryElement) || "Nenhum"
    : "Nenhum";

  return {
    name: document.querySelector("#character-name").value.trim(),
    player: document.querySelector("#player-name").value.trim(),
    village: villageSelect.value,
    clan: clanSelect.value,
    element: primaryElement,
    element2: secondaryElement,
    rank: document.querySelector("#rank").value,
    kekkeiGenkai: kekkeiGenkai,
    attributes: {
      FOR: attributes.FOR + bonuses.FOR,
      AGI: attributes.AGI + bonuses.AGI,
      NIN: attributes.NIN + bonuses.NIN,
      GEN: attributes.GEN + bonuses.GEN,
      CC: attributes.CC + bonuses.CC
    },
    baseAttributes: { ...attributes },
    bonuses: bonuses,
    health: 20 + attributes.FOR * 5 + bonuses.HP,
    chakra: 20 + attributes.CC * 5 + bonuses.Chakra,
    defense: 10 + attributes.AGI + bonuses.DEF,
    background: document.querySelector("#background").value.trim(),
    notes: document.querySelector("#notes").value.trim(),
    image: characterImageData
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatText(value) {
  if (!value) {
    return "<em>Não informado.</em>";
  }

  return escapeHtml(value).replaceAll("\n", "<br>");
}

function exportCharacterSheet() {
  const character = buildCharacterSheet();

  const imageHtml = character.image
    ? `
      <div class="character-image">
        <img src="${character.image}" alt="Imagem do personagem">
      </div>
    `
    : `
      <div class="character-image empty-image">
        <span class="empty-kanji">忍</span>
      </div>
    `;

  const villageSymbolHtml =
    villageSymbols[character.village] || villageSymbols.other;

  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    formMessage.textContent =
      "Não foi possível abrir a janela de impressão. Verifique o bloqueador de pop-ups.";
    return;
  }

  const villageNames = {
    Konoha: "Konohagakure",
    Kazesuna: "Sunagakure",
    Kiri: "Kirigakure",
    Kumo: "Kumogakure",
    Iwa: "Iwagakure",
    other: "Desconhecida"
  };

  const elementNames = {
    Katon: "Katon (Fogo)",
    Suiton: "Suiton (Água)",
    "Fūton": "Fūton (Vento)",
    Doton: "Doton (Terra)",
    Raiton: "Raiton (Relâmpago)"
  };

  const printContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ficha de Personagem - ${escapeHtml(character.name)}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Inter:wght@400;500;600&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      color: #1a1a2e;
      background: #f5f0e8;
      font-family: 'Inter', Arial, sans-serif;
      line-height: 1.5;
      padding: 0;
    }

    .page {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
      background: white;
      min-height: 100vh;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 25px 30px;
      margin-bottom: 30px;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 12px;
      position: relative;
      overflow: hidden;
    }

    .header::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #e87532, #e9bd55, #e87532);
    }

    .header::after {
      content: "忍";
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 80px;
      color: rgba(232, 117, 50, 0.08);
      font-family: serif;
      pointer-events: none;
    }

    .header-content {
      flex: 1;
      z-index: 1;
    }

    .header-title {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 28px;
      font-weight: 900;
      color: #e87532;
      letter-spacing: 1px;
      text-shadow: 2px 2px 0 rgba(0,0,0,0.3);
      margin-bottom: 4px;
    }

    .header-subtitle {
      font-size: 12px;
      color: #b6bdc8;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    .header-symbol {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      z-index: 1;
      background: rgba(255,255,255,0.95);
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }

    .header-symbol svg {
      width: 100%;
      height: 100%;
    }

    .section {
      margin-bottom: 28px;
    }

    .section-title {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 18px;
      font-weight: 700;
      color: #e87532;
      padding-bottom: 8px;
      margin-bottom: 16px;
      border-bottom: 3px solid #e87532;
      position: relative;
    }

    .section-title::after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 70px;
      width: 30px;
      height: 3px;
      background: #a83232;
    }

    .info-with-image {
      display: flex;
      gap: 25px;
      align-items: flex-start;
    }

    .info-section {
      flex: 1;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .info-item {
      padding: 10px 12px;
      background: #f8f6f2;
      border-radius: 8px;
      border-left: 3px solid #e87532;
    }

    .info-item strong {
      display: block;
      font-size: 11px;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 2px;
    }

    .info-item span {
      font-size: 14px;
      color: #1a1a2e;
      font-weight: 500;
    }

    .character-image {
      width: 160px;
      height: 200px;
      overflow: hidden;
      border-radius: 10px;
      border: 3px solid #e87532;
      flex-shrink: 0;
      box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    }

    .character-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .empty-image {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f8f6f2, #ebe8e0);
    }

    .empty-kanji {
      font-size: 48px;
      color: #e87532;
      opacity: 0.3;
      font-family: serif;
    }

    .attributes-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
    }

    .attribute-box {
      text-align: center;
      padding: 15px 8px;
      background: linear-gradient(180deg, #1a1a2e, #16213e);
      border-radius: 10px;
      color: white;
    }

    .attribute-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #b6bdc8;
      margin-bottom: 6px;
    }

    .attribute-value {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 28px;
      font-weight: 900;
      color: #e87532;
      text-shadow: 2px 2px 0 rgba(0,0,0,0.3);
    }

    .attribute-bonus {
      font-size: 10px;
      color: #e9bd55;
      font-weight: 600;
      margin-top: 4px;
    }

    .resources-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .resource-box {
      text-align: center;
      padding: 18px 12px;
      background: #f8f6f2;
      border-radius: 10px;
      border-top: 4px solid #4b9acb;
    }

    .resource-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #888;
      margin-bottom: 6px;
    }

    .resource-value {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 26px;
      font-weight: 700;
      color: #4b9acb;
    }

    .resource-formula {
      font-size: 11px;
      color: #aaa;
      margin-top: 4px;
    }

    .resource-bonus {
      font-size: 11px;
      color: #e87532;
      font-weight: 600;
      margin-top: 4px;
    }

    .text-box {
      padding: 16px;
      background: #f8f6f2;
      border-radius: 10px;
      min-height: 80px;
      font-size: 14px;
      line-height: 1.6;
      color: #333;
      overflow-wrap: anywhere;
    }

    .text-box em {
      color: #999;
      font-style: italic;
    }

    .clan-passive-box {
      padding: 14px 18px;
      background: linear-gradient(135deg, #fdf6ec, #f8f0e0);
      border-left: 4px solid #e87532;
      border-radius: 8px;
      font-size: 14px;
      line-height: 1.6;
      color: #5a4a3a;
    }

    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #e8e5de;
      text-align: center;
      font-size: 11px;
      color: #aaa;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    @media print {
      body {
        background: white;
      }

      .page {
        padding: 20px;
        box-shadow: none;
      }
    }

    @media (max-width: 700px) {
      .page {
        padding: 20px;
      }

      .header {
        flex-direction: column;
        text-align: center;
        gap: 15px;
      }

      .info-with-image {
        flex-direction: column;
        align-items: center;
      }

      .character-image {
        width: 100%;
        max-width: 200px;
        height: auto;
        aspect-ratio: 4 / 5;
      }

      .attributes-grid,
      .resources-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .info-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .attributes-grid,
      .resources-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="page">

    <div class="header">
      <div class="header-content">
        <div class="header-title">${escapeHtml(character.name || "Personagem")}</div>
        <div class="header-subtitle">Ficha de Personagem Ninja</div>
      </div>
      <div class="header-symbol">
        ${villageSymbolHtml}
      </div>
    </div>

    <div class="section">
      <div class="info-with-image">
        <div class="info-section">
          <div class="section-title">Identificação</div>
          <div class="info-grid">
            <div class="info-item">
              <strong>Jogador</strong>
              <span>${escapeHtml(character.player)}</span>
            </div>
            <div class="info-item">
              <strong>Vila</strong>
              <span>${villageNames[character.village] || character.village}</span>
            </div>
            <div class="info-item">
              <strong>Clã</strong>
              <span>${escapeHtml(character.clan)}</span>
            </div>
            <div class="info-item">
              <strong>Elemento</strong>
              <span>${elementNames[character.element] || character.element}</span>
            </div>
            <div class="info-item">
              <strong>Elemento Secundário</strong>
              <span>${character.element2 !== "Não Possui" ? (elementNames[character.element2] || character.element2) : "Não Possui"}</span>
            </div>
            <div class="info-item">
              <strong>Patente</strong>
              <span>${escapeHtml(character.rank)}</span>
            </div>
            <div class="info-item">
              <strong>Kekkei Genkai</strong>
              <span>${escapeHtml(character.kekkeiGenkai)}</span>
            </div>
          </div>
        </div>
        ${imageHtml}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Clã — ${escapeHtml(character.clan)}</div>
      <div class="clan-passive-box">
        <div class="clan-passive-text">${escapeHtml(clans.find(c => c.name === character.clan && c.village === character.village)?.passive || "")}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Atributos</div>
      <div class="attributes-grid">
        <div class="attribute-box">
          <div class="attribute-label">Força</div>
          <div class="attribute-value">${character.attributes.FOR}</div>
          ${character.bonuses.FOR > 0 ? `<div class="attribute-bonus">+${character.bonuses.FOR} clã</div>` : ""}
        </div>
        <div class="attribute-box">
          <div class="attribute-label">Agilidade</div>
          <div class="attribute-value">${character.attributes.AGI}</div>
          ${character.bonuses.AGI > 0 ? `<div class="attribute-bonus">+${character.bonuses.AGI} clã</div>` : ""}
        </div>
        <div class="attribute-box">
          <div class="attribute-label">Ninjutsu</div>
          <div class="attribute-value">${character.attributes.NIN}</div>
          ${character.bonuses.NIN > 0 ? `<div class="attribute-bonus">+${character.bonuses.NIN} clã</div>` : ""}
        </div>
        <div class="attribute-box">
          <div class="attribute-label">Genjutsu</div>
          <div class="attribute-value">${character.attributes.GEN}</div>
          ${character.bonuses.GEN > 0 ? `<div class="attribute-bonus">+${character.bonuses.GEN} clã</div>` : ""}
        </div>
        <div class="attribute-box">
          <div class="attribute-label">Chakra</div>
          <div class="attribute-value">${character.attributes.CC}</div>
          ${character.bonuses.CC > 0 ? `<div class="attribute-bonus">+${character.bonuses.CC} clã</div>` : ""}
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Recursos</div>
      <div class="resources-grid">
        <div class="resource-box">
          <div class="resource-label">Vida</div>
          <div class="resource-value">${character.health}</div>
          ${character.bonuses.HP > 0 ? `<div class="resource-bonus">+${character.bonuses.HP} do clã</div>` : `<div class="resource-formula">20 + FOR × 5</div>`}
        </div>
        <div class="resource-box">
          <div class="resource-label">Chakra</div>
          <div class="resource-value">${character.chakra}</div>
          ${character.bonuses.Chakra > 0 ? `<div class="resource-bonus">+${character.bonuses.Chakra} do clã</div>` : `<div class="resource-formula">20 + CC × 5</div>`}
        </div>
        <div class="resource-box">
          <div class="resource-label">Defesa</div>
          <div class="resource-value">${character.defense}</div>
          ${character.bonuses.DEF > 0 ? `<div class="resource-bonus">+${character.bonuses.DEF} do clã</div>` : `<div class="resource-formula">10 + AGI</div>`}
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">História do Personagem</div>
      <div class="text-box">
        ${formatText(character.background)}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Observações</div>
      <div class="text-box">
        ${formatText(character.notes)}
      </div>
    </div>

    <div class="footer">
      Naruto RPG — Ficha de Personagem
    </div>

  </div>
</body>
</html>`;

  printWindow.document.write(printContent);
  printWindow.document.close();

  printWindow.addEventListener("load", () => {
    printWindow.focus();
    printWindow.print();
  });
}

function resetForm() {
  form.reset();

  MAX_ATTRIBUTE = rankSettings["Genin"].maxAttribute;
  TOTAL_POINTS = rankSettings["Genin"].totalPoints;

  Object.keys(attributes).forEach((attribute) => {
    attributes[attribute] = 0;
    updateAttributeDisplay(attribute);
  });

  updatePointsDisplay();
  updateResources();
  showEmptyClanInfo();
  removeImage();

  clanDisplay.innerHTML = `<span class="roulette-placeholder">Gire para descobrir</span>`;
  clanDisplay.classList.remove("result", "spinning");
  elementDisplay.innerHTML = `<span class="roulette-placeholder">Gire para descobrir</span>`;
  elementDisplay.classList.remove("result", "spinning");

  kekkeiSection.classList.add("hidden");
  element2Display.innerHTML = `<span class="roulette-placeholder">Gire para descobrir</span>`;
  element2Display.classList.remove("result", "spinning");
  element2Select.value = "";
  kekkeiResult.classList.add("hidden");

  formMessage.textContent = "";
  clearSavedData();
}

document.querySelectorAll(".increase").forEach((button) => {
  button.addEventListener("click", () => {
    changeAttribute(button.dataset.attribute, 1);
  });
});

document.querySelectorAll(".decrease").forEach((button) => {
  button.addEventListener("click", () => {
    changeAttribute(button.dataset.attribute, -1);
  });
});

villageSelect.addEventListener("change", () => {
  if (isLoading) return;
  showEmptyClanInfo();
  clanDisplay.innerHTML = `<span class="roulette-placeholder">Gire para descobrir</span>`;
  clanDisplay.classList.remove("result", "spinning");
  clanSelect.value = "";
  kekkeiSection.classList.add("hidden");
  element2Select.value = "";
  kekkeiResult.classList.add("hidden");
  saveCharacterData();
});

document.querySelector("#rank").addEventListener("change", (event) => {
  const rank = event.target.value;
  const settings = rankSettings[rank];

  if (settings) {
    MAX_ATTRIBUTE = settings.maxAttribute;
    TOTAL_POINTS = settings.totalPoints;

    Object.keys(attributes).forEach((attr) => {
      if (attributes[attr] > MAX_ATTRIBUTE) {
        attributes[attr] = MAX_ATTRIBUTE;
      }
      updateAttributeDisplay(attr);
    });

    updatePointsDisplay();
    updateResources();
    saveCharacterData();
  }
});

spinClanButton.addEventListener("click", spinClan);
spinElementButton.addEventListener("click", spinElement);
spinElement2Button.addEventListener("click", spinElement2);

imageInput.addEventListener("change", handleImageUpload);
removeImageButton.addEventListener("click", removeImage);

document.querySelectorAll("input[type='text'], textarea").forEach((input) => {
  input.addEventListener("input", saveCharacterData);
});

document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("change", saveCharacterData);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  exportCharacterSheet();
});

document.querySelector("#reset-button").addEventListener("click", resetForm);

Object.keys(attributes).forEach((attribute) => {
  updateAttributeDisplay(attribute);
});

updatePointsDisplay();
updateResources();
showEmptyClanInfo();
loadCharacterData();