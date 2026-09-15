const clanList = [
  {
    name: "Uchiha",
    village: "Konoha",
    description: "Clã nobre e temido, portador do Sharingan — um dōjutsu que permite copiar técnicas, prever movimentos e dominar ilusões. Conhecido pela afinidade com Katon e pela sua linha de sangue lendária.",
    passive: "Após ver uma técnica uma vez, pode copiá-la. +1 NIN.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Hyūga",
    village: "Konoha",
    description: "Clã ancestral portador do Byakugan, que permite enxergar o sistema circulatório de chakra. Utilizam o Jūken (Gentle Fist) para bloquear pontos de chakra dos oponentes.",
    passive: "Ataques Jūken bloqueiam 1 ponto de chakra do oponente. +1 GEN.",
    bonuses: { GEN: 1 }
  },
  {
    name: "Senju",
    village: "Konoha",
    description: "Clã fundador de Konohagakure, conhecido como 'os que possuem todas as habilidades'. Versáteis em ninjutsu, taijutsu e genjutsu, com afinidade especial pela madeira.",
    passive: "Pode aprender técnicas de qualquer elemento. +1 a todos os atributos em florestas.",
    bonuses: { FOR: 1, AGI: 1, NIN: 1, GEN: 1, CC: 1 }
  },
  {
    name: "Uzumaki",
    village: "Konoha",
    description: "Clã de longevidade e reservas de chakra monstruosas. Mestres do Fūinjutsu (arte do selamento), seus corpos resistem a venenos e doenças.",
    passive: "+10 HP e +5 Chakra. Pode usar Fūinjutsu para prender oponentes.",
    bonuses: { HP: 10, Chakra: 5 }
  },
  {
    name: "Nara",
    village: "Konoha",
    description: "Clã de gênios estratégicos que controlam sombras. Seus membros são preguiçosos por natureza, mas brilham em situações que exigem raciocínio tático.",
    passive: "Pode congelar um oponente na sombra por 1 turno. +1 GEN na escuridão.",
    bonuses: { GEN: 1 }
  },
  {
    name: "Akimichi",
    village: "Konoha",
    description: "Clã que converte calorias em chakra para expandir partes do corpo. Seus golpes são devastadores, mas consomem muita energia.",
    passive: "+5 HP por ponto em FOR. Pode converter chakra em calorias para técnicas.",
    bonuses: { HP: 10 }
  },
  {
    name: "Yamanaka",
    village: "Konoha",
    description: "Clã de comunicadores psíquicos especializados em transferência de mente e invasão mental. Trabalham como suporte em equipes ninja.",
    passive: "Pode ler a próxima ação do oponente. +1 GEN.",
    bonuses: { GEN: 1 }
  },
  {
    name: "Aburame",
    village: "Konoha",
    description: "Clã que cria insetos ninja dentro do próprio corpo em simbiose. Os insetos se alimentam de chakra e podem rastrear, atacar e criar barreiras.",
    passive: "Insetos rastreamentam inimigos escondidos. +1 a detecção.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Inuzuka",
    village: "Konoha",
    description: "Clã de caçadores que lutam em dupla com cães ninja. Seus sentidos são aguçados e podem farejar odores de quilômetros de distância.",
    passive: "Luta com parceiro canino. +1 AGI quando ataca em grupo.",
    bonuses: { AGI: 1 }
  },
  {
    name: "Sarutobi",
    village: "Konoha",
    description: "Família real de Konoha, herdade do Terceiro Hokage. Conhecida por dominar múltiplos elementos e técnicas de fogo com maestria.",
    passive: "Pode usar qualquer elemento. +1 a todos os atributos.",
    bonuses: { FOR: 1, AGI: 1, NIN: 1, GEN: 1, CC: 1 }
  },
  {
    name: "Shimura",
    village: "Konoha",
    description: "Família disciplinada com tradição em taijutsu e códigos de honra. Membros são leais e seguiram o caminho shinobi com dedicação.",
    passive: "+1 FOR em combate corpo a corpo. Pode contra-atacar após ser atingido.",
    bonuses: { FOR: 1 }
  },
  {
    name: "Hatake",
    village: "Konoha",
    description: "Família de ninjas talentosos e adaptáveis, mais famosa por Kakashi, o Copy Ninja. Dominam múltiplas técnicas com facilidade.",
    passive: "Pode copiar 1 técnica por batalha. +1 NIN.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Kurama",
    village: "Konoha",
    description: "Clã especialista em genjutsu e técnicas ilusórias avançados. Seus membros possuem um olhar penetrante que confunde oponentes.",
    passive: "+2 GEN. Ilusões duram turnos extras.",
    bonuses: { GEN: 2 }
  },
  {
    name: "Kazekage",
    village: "Kazesuna",
    description: "Clã real de Sunagakure, ligado diretamente aos Kazekage. Possui domínio absoluto sobre a areia, que se move por conta própria para proteger seu mestre.",
    passive: "Areia bloqueia automaticamente 1 ataque por turno. +2 DEF.",
    bonuses: { DEF: 2 }
  },
  {
    name: "Shirogane",
    village: "Kazesuna",
    description: "Clã de marionetistas de Sunagakure, mestres na arte Kugutsu. Utilizam bonecos armados com lâminas venenosas e mecanismos mortíferos.",
    passive: "Pode usar marionete como membro extra da equipe. +1 a técnicas com kugutsu.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Hōki",
    village: "Kazesuna",
    description: "Família de rastreadores do deserto, especializada em localizar alvos através de tempestades de areia e terrenos áridos.",
    passive: "+1 NIN em terrenos arenosos. Pode rastrear em tempestades de areia.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Fūma",
    village: "Kazesuna",
    description: "Clã nômade conhecido por armas giratórias e técnicas de vento. Possuem uma tradição de guerreiros independentes.",
    passive: "Dano crítico com fūma shuriken. +1 com armas arremessáveis.",
    bonuses: { AGI: 1 }
  },
  {
    name: "Hōzuki",
    village: "Kiri",
    description: "Clã que domina a técnica de liquefação corporal, tornando-se água para desviar de ataques. Afinidade natural com Suiton.",
    passive: "Pode tornar-se líquido por 1 turno para desviar. +1 com Suiton.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Hoshigaki",
    village: "Kiri",
    description: "Clã de guerreiros brutais com força física devastadora e afinidade com técnicas aquáticas. Conhecidos por seus dentes afiados.",
    passive: "+1 FOR em água. Pode respirar debaixo d'água.",
    bonuses: { FOR: 1 }
  },
  {
    name: "Yuki",
    village: "Kiri",
    description: "Clã portador do Hyōton (Kekkei Genkai), que combina Suiton e Fūton para criar gelo. Perseguidos por seu poder proibido.",
    passive: "Pode congelar água ao contato. +1 com técnicas de gelo.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Kaguya",
    village: "Kiri",
    description: "Clã ancestral que manipula os ossos do próprio corpo, tornando-os mais duros que aço. Origem dos lendários Otsutsuki.",
    passive: "Ossos mais duros que aço. +1 com técnicas ósseas.",
    bonuses: { FOR: 1 }
  },
  {
    name: "Karatachi",
    village: "Kiri",
    description: "Família ligada à política e ao governo de Kirigakure. Membros ocupam posições de liderança e comando militar.",
    passive: "Pode inspirar aliados. +1 a habilidades de liderança.",
    bonuses: { GEN: 1 }
  },
  {
    name: "Kurosuki",
    village: "Kiri",
    description: "Clã de combatentes resistentes de Kirigakure, especializados em taijutsu e resistência a venenos.",
    passive: "+1 FOR em taijutsu. Resistência a venenos.",
    bonuses: { FOR: 1 }
  },
  {
    name: "Yotsuki",
    village: "Kumo",
    description: "Clã de guerreiros brutais de Kumogakure, conhecidos por força física descomunal e técnicas de Raiton devastadoras.",
    passive: "+1 FOR e +1 Raiton. Pode canalizar relâmpago nos punhos.",
    bonuses: { FOR: 1, NIN: 1 }
  },
  {
    name: "Aemi",
    village: "Kumo",
    description: "Clã de espadachins de Kumogakure que canalizam Raiton através de suas lâminas. Conhecidos por cortes que rasgam os céus.",
    passive: "Lâminas carregadas com relâmpago causam dano extra. +1 AGI.",
    bonuses: { AGI: 1 }
  },
  {
    name: "Bōsō",
    village: "Kumo",
    description: "Clã de rastreadores de Kumogakure que utilizam sensores de chakra de longo alcance. Podem detectar inimigos a quilômetros de distância.",
    passive: "Detecta inimigos escondidos em um raio amplo. +1 GEN.",
    bonuses: { GEN: 1 }
  },
  {
    name: "Raijin",
    village: "Kumo",
    description: "Clã lendário de Kumogakure, ancestral dos Raikage. Membros possuem corpos que canalizam relâmpago, concedendo velocidade e força sobre-humanas.",
    passive: "Modo relâmpago: +2 FOR e +1 AGI por 1 turno. Recarga de 3 turnos.",
    bonuses: { FOR: 2, AGI: 1 }
  },
  {
    name: "Chinoike",
    village: "Kumo",
    description: "Clã proscrito portador do Ketsuryūgan, um dōjutsu que permite manipular o sangue. Considerados perigosos e caçados.",
    passive: "Pode manipular sangue de oponentes feridos. +1 com técnicas de sangue.",
    bonuses: { GEN: 1 }
  },
  {
    name: "Kamizuru",
    village: "Iwa",
    description: "Clã de Iwagakure que utiliza abelhas ninja em combate. Mestres do rastreamento e controle de enxames.",
    passive: "Pode invocar abelhas para rastrear/atacar. +1 com técnicas de insetos.",
    bonuses: { NIN: 1 }
  },
  {
    name: "Ganryū",
    village: "Iwa",
    description: "Clã de guerreiros pesados de Iwagakure que utilizam armaduras de pedra e técnicas de gravidade. Seus golpes esmagam tudo ao redor.",
    passive: "Armadura de pedra absorve 1 ataque físico. +2 FOR.",
    bonuses: { FOR: 2 }
  },
  {
    name: "Kōsetsu",
    village: "Iwa",
    description: "Clã de artesãos e construtores de Iwagakure especializados em criação de golems e estátuas de pedra animadas por chakra.",
    passive: "Pode criar golem de pedra para defender. +1 DEF.",
    bonuses: { DEF: 1 }
  },
  {
    name: "Tetsuban",
    village: "Iwa",
    description: "Clã de mineradores e ferreiros de Iwagakure que manipulam minerais e metais encontrados nas montanhas. Suas técnicas controlam o ferro e a pedra.",
    passive: "Manipula minerais do ambiente para criar barreiras. +1 NIN.",
    bonuses: { NIN: 1 }
  }
];

const villageNamesClanList = {
  Konoha: "Konohagakure",
  Kazesuna: "Sunagakure",
  Kiri: "Kirigakure",
  Kumo: "Kumogakure",
  Iwa: "Iwagakure"
};

const clanColors = {
  "Uchiha": "#e83232",
  "Hyūga": "#e0e0e0",
  "Senju": "#4caf50",
  "Uzumaki": "#e87532",
  "Nara": "#6a5acd",
  "Akimichi": "#e8a032",
  "Yamanaka": "#e875b0",
  "Aburame": "#8b4513",
  "Inuzuka": "#a0522d",
  "Sarutobi": "#ff6b35",
  "Shimura": "#c0c0c0",
  "Hatake": "#909090",
  "Kurama": "#9b59b6",
  "Kazekage": "#d4a83a",
  "Shirogane": "#5a5a5a",
  "Hōki": "#c9a227",
  "Fūma": "#2ecc71",
  "Hōzuki": "#3498db",
  "Hoshigaki": "#2980b9",
  "Yuki": "#a8d8ea",
  "Kaguya": "#f5f5dc",
  "Karatachi": "#4a4a4a",
  "Kurosuki": "#8b0000",
  "Yotsuki": "#daa520",
  "Aemi": "#c0c0c0",
  "Bōsō": "#7f8c8d",
  "Raijin": "#f1c40f",
  "Chinoike": "#8b0000",
  "Kamizuru": "#f39c12",
  "Ganryū": "#8b7355",
  "Kōsetsu": "#a0522d",
  "Tetsuban": "#696969"
};

function formatBonuses(bonuses) {
  const bonusList = [];
  const attributeNames = {
    FOR: "Força",
    AGI: "Agilidade",
    NIN: "Ninjutsu",
    GEN: "Genjutsu",
    CC: "Controle de Chakra",
    HP: "HP",
    Chakra: "Chakra",
    DEF: "Defesa"
  };

  for (const [key, value] of Object.entries(bonuses)) {
    if (value > 0) {
      bonusList.push(`+${value} ${attributeNames[key] || key}`);
    }
  }

  return bonusList.join(", ") || "Nenhum";
}

function renderClanList(filter = "Konoha") {
  const list = document.querySelector("#clan-list");
  if (!list) return;

  const filtered = filter === "all"
    ? clanList
    : clanList.filter((c) => c.village === filter);

  if (filtered.length === 0) {
    list.innerHTML = `<div class="jutsu-empty">Nenhum clã encontrado para esta vila.</div>`;
    return;
  }

  list.innerHTML = filtered.map((clan) => {
    const color = clanColors[clan.name] || "#9b7ed8";
    const villageName = villageNamesClanList[clan.village] || clan.village;

    return `
      <div class="clan-card" style="border-left-color: ${color};">
        <div class="clan-card-header">
          <span class="clan-card-name" style="color: ${color};">${clan.name}</span>
          <span class="clan-card-village">${villageName}</span>
        </div>

        <p class="clan-card-description">${clan.description}</p>

        <div class="clan-card-passive">
          <strong>Passiva:</strong> ${clan.passive}
        </div>

        <div class="clan-card-bonuses">
          <strong>Bônus:</strong> ${formatBonuses(clan.bonuses)}
        </div>
      </div>
    `;
  }).join("");
}

function initClanListFilters() {
  const buttons = document.querySelectorAll(".clan-list-filter-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderClanList(btn.dataset.village);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initClanListFilters();
  renderClanList();
});
