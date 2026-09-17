const clanJutsus = [
  {
    name: "Sharingan",
    clan: "Uchiha",
    village: "Konoha",
    type: "Dōjutsu",
    rank: "S",
    damage: 0,
    cooldown: 0,
    chakraCost: 5,
    description: "Dōjutsu lendário dos Uchiha que permite copiar técnicas, prever movimentos e lançar genjutsu com o olhar. Evolui de 1 para 3 tomoe, e por último, ao Mangekyō."
  },
  {
    name: "Byakugan",
    clan: "Hyūga",
    village: "Konoha",
    type: "Dōjutsu",
    rank: "S",
    damage: 0,
    cooldown: 0,
    chakraCost: 5,
    description: "Dōjutsu que permite enxergar 360° ao redor, ver o sistema circulatório de chakra e detectar pontos fracos."
  },
  {
    name: "Jūken",
    clan: "Hyūga",
    village: "Konoha",
    type: "Taijutsu",
    rank: "A",
    damage: 18,
    cooldown: 1,
    chakraCost: 6,
    description: "Gentle Fist — Golpes precisos que bloqueiam pontos de chakra e danificam o sistema circulatório interno."
  },
  {
    name: "Hakke Rokujūyon Shō",
    clan: "Hyūga",
    village: "Konoha",
    type: "Taijutsu",
    rank: "A",
    damage: 22,
    cooldown: 3,
    chakraCost: 12,
    description: "Sessenta e quatro palmas — Sequência de golpes que bloqueiam 64 pontos de chakra do oponente."
  },
  {
    name: "Hakke Kūshō",
    clan: "Hyūga",
    village: "Konoha",
    type: "Taijutsu",
    rank: "B",
    damage: 15,
    cooldown: 2,
    chakraCost: 8,
    description: "Palma oceânica — Golpe que atinge um ponto vital específico, causando dano interno severo."
  },
  {
    name: "Mokuton: Mokuryū no Jutsu",
    clan: "Senju",
    village: "Konoha",
    type: "Ninjutsu",
    rank: "A",
    damage: 20,
    cooldown: 4,
    chakraCost: 16,
    description: "Técnica de madeira que cria dragões de madeira para atacar e prender oponentes."
  },
  {
    name: "Mokuton: Shin Sūsenju",
    clan: "Senju",
    village: "Konoha",
    type: "Ninjutsu",
    rank: "S",
    damage: 28,
    cooldown: 5,
    chakraCost: 22,
    description: "Mil Mãos de Buda — Manifestação massiva de braços de madeira que atacam simultaneamente."
  },
  {
    name: "Fūinjutsu: Shiki Fūjin",
    clan: "Uzumaki",
    village: "Konoha",
    type: "Fūinjutsu",
    rank: "S",
    damage: 0,
    cooldown: 0,
    chakraCost: 30,
    description: "Selo da Morte — Técnica de selamento que prende a alma do alvo em um selo, mas custa a vida do usuário."
  },
  {
    name: "Adamantine Sealing Chain",
    clan: "Uzumaki",
    village: "Konoha",
    type: "Fūinjutsu",
    rank: "A",
    damage: 16,
    cooldown: 3,
    chakraCost: 14,
    description: "Cadeias de selamento que se projetam do corpo, capazes de prender e imobilizar oponentes."
  },
  {
    name: "Kage Mane no Jutsu",
    clan: "Nara",
    village: "Konoha",
    type: "Ninjutsu",
    rank: "B",
    damage: 12,
    cooldown: 3,
    chakraCost: 10,
    description: "Paralisia na Sombra — alonga a própria sombra para prender oponentes, imobilizando-os completamente."
  },
  {
    name: "Kage Kubi Shibari",
    clan: "Nara",
    village: "Konoha",
    type: "Ninjutsu",
    rank: "A",
    damage: 18,
    cooldown: 4,
    chakraCost: 14,
    description: "Cadeia de Sombra no Pescoço — A sombra envolve o pescoço do oponente, sufocando-o."
  },
  {
    name: "Baika no Jutsu",
    clan: "Akimichi",
    village: "Konoha",
    type: "Ninjutsu",
    rank: "B",
    damage: 16,
    cooldown: 2,
    chakraCost: 12,
    description: "Técnica de Expansão — Expande partes do corpo para aumentar o poder dos golpes."
  },
  {
    name: "Chō Bakuretsu",
    clan: "Akimichi",
    village: "Konoha",
    type: "Ninjutsu",
    rank: "A",
    damage: 24,
    cooldown: 4,
    chakraCost: 18,
    description: "Explosão Gigante — Expansão massiva do corpo que causa dano destrutivo ao redor."
  },
  {
    name: "Shintenshin no Jutsu",
    clan: "Yamanaka",
    village: "Konoha",
    type: "Ninjutsu",
    rank: "A",
    damage: 0,
    cooldown: 5,
    chakraCost: 15,
    description: "Transferência Mental — Transfere a consciência para o corpo de outro, permitindo controle total."
  },
  {
    name: "Mushizame",
    clan: "Aburame",
    village: "Konoha",
    type: "Ninjutsu",
    rank: "B",
    damage: 14,
    cooldown: 3,
    chakraCost: 10,
    description: "Insetos Ninja — Libera enxame de insetos que sugam chakra e atacam o oponente."
  },
  {
    name: "Gatsūga",
    clan: "Inuzuka",
    village: "Konoha",
    type: "Taijutsu",
    rank: "B",
    damage: 18,
    cooldown: 2,
    chakraCost: 8,
    description: "Fang Over Fang — Ataque combinado com o parceiro canino em espiral, perfurando defesas."
  },
  {
    name: "Sabaku Kyū",
    clan: "Kazesuna",
    village: "Kazesuna",
    type: "Ninjutsu",
    rank: "A",
    damage: 22,
    cooldown: 3,
    chakraCost: 14,
    description: "Sepultamento de Areia — A areia forma uma esfera ao redor do oponente, esmagando-o."
  },
  {
    name: "Sabaku Sō",
    clan: "Kazesuna",
    village: "Kazesuna",
    type: "Ninjutsu",
    rank: "B",
    damage: 16,
    cooldown: 3,
    chakraCost: 12,
    description: "Caixão de Areia — Prende o oponente em um caixão de areia compacta."
  },
  {
    name: "Sabaku Fuyu",
    clan: "Kazesuna",
    village: "Kazesuna",
    type: "Ninjutsu",
    rank: "S",
    damage: 30,
    cooldown: 6,
    chakraCost: 22,
    description: "Grande Sepultamento — Técnica devastadora que afunda o oponente em um poço de areia profundo."
  },
  {
    name: "Kugutsu no Jutsu",
    clan: "Shirogane",
    village: "Kazesuna",
    type: "Ninjutsu",
    rank: "B",
    damage: 14,
    cooldown: 2,
    chakraCost: 10,
    description: "Controle de Marionete — Manipula marionetes armadas com lâminas venenosas à distância."
  },
  {
    name: "Karakuri Henbō",
    clan: "Shirogane",
    village: "Kazesuna",
    type: "Ninjutsu",
    rank: "A",
    damage: 20,
    cooldown: 4,
    chakraCost: 16,
    description: "Transformação Mecânica — Transforma a marionete em formas devastadoras para surpreender o inimigo."
  },
  {
    name: "Suika no Jutsu",
    clan: "Hōzuki",
    village: "Kiri",
    type: "Ninjutsu",
    rank: "A",
    damage: 0,
    cooldown: 3,
    chakraCost: 12,
    description: "Liquefação Corporal — Transforma o corpo em água, permitindo desviar de ataques físicos."
  },
  {
    name: "Hyōton: Kokuryūheki",
    clan: "Yuki",
    village: "Kiri",
    type: "Ninjutsu",
    rank: "A",
    damage: 20,
    cooldown: 3,
    chakraCost: 14,
    description: "Muralha de Gelo Negro — Cria uma muralha de gelo negro que bloqueia ataques e congela o oponente."
  },
  {
    name: "Hyōton: Kamibraryūheki",
    clan: "Yuki",
    village: "Kiri",
    type: "Ninjutsu",
    rank: "B",
    damage: 16,
    cooldown: 2,
    chakraCost: 12,
    description: "Muralha de Gelo Branco — Cria uma muralha de gelo branco que prende o oponente."
  },
  {
    name: "Shikotsumyaku",
    clan: "Kaguya",
    village: "Kiri",
    type: "Taijutsu",
    rank: "A",
    damage: 22,
    cooldown: 3,
    chakraCost: 10,
    description: "Manipulação Óssea — Projeta ossos do próprio corpo como armas, cortando e perfurando."
  },
  {
    name: "Lariat",
    clan: "Raijin",
    village: "Kumo",
    type: "Taijutsu",
    rank: "A",
    damage: 26,
    cooldown: 4,
    chakraCost: 18,
    description: "Golpe Relâmpago — Ataque giratório com o braço carregado de relâmpago, devastador em combate."
  },
  {
    name: "Ketsuryūgan",
    clan: "Chinoike",
    village: "Kumo",
    type: "Dōjutsu",
    rank: "S",
    damage: 0,
    cooldown: 0,
    chakraCost: 5,
    description: "Dōjutsu que permite manipular o sangue de oponentes feridos, controlando seus movimentos."
  },
  {
    name: "Kumogakure no Jutsu",
    clan: "Kamizuru",
    village: "Iwa",
    type: "Ninjutsu",
    rank: "B",
    damage: 12,
    cooldown: 3,
    chakraCost: 8,
    description: "Invocação de Abelhas — Invoca enxame de abelhas ninja que atacam e rastreiam oponentes."
  }
];

const villageNamesClans = {
  Konoha: "Konohagakure",
  Kazesuna: "Sunagakure",
  Kiri: "Kirigakure",
  Kumo: "Kumogakure",
  Iwa: "Iwagakure"
};

const typeColors = {
  "Dōjutsu": "#9b7ed8",
  "Ninjutsu": "#e85d32",
  "Taijutsu": "#4b9acb",
  "Fūinjutsu": "#e9bd55",
  "Genjutsu": "#d45a8a"
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
  "Haruno": "#ff69b4",
  "Lee": "#2ecc71",
  "Kazesuna": "#d4a83a",
  "Fae": "#cd853f",
  "Shirogane": "#5a5a5a",
  "Hōki": "#c9a227",
  "Fūma": "#2ecc71",
  "Hōzuki": "#3498db",
  "Hoshigaki": "#2980b9",
  "Yuki": "#a8d8ea",
  "Kaguya": "#f5f5dc",
  "Kurosuki": "#8b0000",
  "Yotsuki": "#daa520",
  "Aemi": "#c0c0c0",
  "Bōsō": "#7f8c8d",
  "Raijin": "#f1c40f",
  "Kamizuru": "#f39c12",
  "Ganryū": "#8b7355",
  "Kōsetsu": "#a0522d",
  "Tetsuban": "#696969",
  "Chinoike": "#8b0000"
};

const keywordColors = {
  "Katon": "#e85d32",
  "Suiton": "#3a8fd4",
  "Fūton": "#5aa85a",
  "Doton": "#a0855b",
  "Raiton": "#cf9b2e",
  "Sombras": "#4a4a6a",
  "Sombra": "#4a4a6a",
  "Areia": "#c2a87d",
  "Insetos": "#6b8e23",
  "Marionete": "#8b7355",
  "Mental": "#9b59b6",
  "Corporal": "#cd853f",
  "Explosão": "#e85d32",
  "Selamento": "#9b59b6",
  "Lâminas": "#c0c0c0",
  "Veneno": "#6b8e23",
  "Elétricidade": "#cf9b2e",
  "Fūton": "#5aa85a",
  "Ossos": "#d4c5a9"
};

function highlightKeywords(text) {
  let result = text;
  const sorted = Object.keys(keywordColors).sort((a, b) => b.length - a.length);
  for (const keyword of sorted) {
    const color = keywordColors[keyword];
    const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
    result = result.replace(regex, (match) => {
      const capitalized = match.charAt(0).toUpperCase() + match.slice(1);
      return `<span style="color: ${color}; font-weight: 600;">${capitalized}</span>`;
    });
  }
  return result;
}
  return result;
}

function renderClanJutsuList(filter = "all") {
  const list = document.querySelector("#clan-jutsu-list");
  if (!list) return;

  const filtered = filter === "all"
    ? clanJutsus
    : clanJutsus.filter((j) => j.village === filter);

  if (filtered.length === 0) {
    list.innerHTML = `<div class="jutsu-empty">Nenhum jutsu de clã encontrado para esta vila.</div>`;
    return;
  }

  list.innerHTML = filtered.map((jutsu) => {
    const color = typeColors[jutsu.type] || "#9b7ed8";
    const clanColor = clanColors[jutsu.clan] || "#9b7ed8";

    return `
      <div class="jutsu-card" style="border-left-color: ${color};">
        <div class="jutsu-header">
          <div class="jutsu-name">
            <div class="jutsu-badges">
              <span class="jutsu-type-badge" style="background: ${color};">${jutsu.type}</span>
              <span class="jutsu-clan-badge" style="background: ${clanColor};">${jutsu.clan}</span>
            </div>
            <h3>${jutsu.name}</h3>
          </div>
          <div class="jutsu-rank" style="color: ${color};">${jutsu.rank}</div>
        </div>

        <div class="jutsu-stats">
          <div class="jutsu-stat">
            <span class="stat-label">Dano</span>
            <span class="stat-value damage">${jutsu.damage > 0 ? jutsu.damage : "—"}</span>
          </div>
          <div class="jutsu-stat">
            <span class="stat-label">Cooldown</span>
            <span class="stat-value">${jutsu.cooldown > 0 ? jutsu.cooldown + " turno" + (jutsu.cooldown > 1 ? "s" : "") : "—"}</span>
          </div>
          <div class="jutsu-stat">
            <span class="stat-label">Chakra</span>
            <span class="stat-value chakra">${jutsu.chakraCost}</span>
          </div>
          <div class="jutsu-stat">
            <span class="stat-label">Aprender</span>
            <span class="stat-value clan-learn">Clã</span>
          </div>
        </div>

        <p class="jutsu-description">${highlightKeywords(jutsu.description)}</p>
      </div>
    `;
  }).join("");
}

function initClanFilters() {
  const buttons = document.querySelectorAll(".clan-filter-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderClanJutsuList(btn.dataset.village);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initClanFilters();
  renderClanJutsuList();
});
