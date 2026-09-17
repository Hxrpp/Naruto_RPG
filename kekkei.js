const elementKekkei = [
  {
    name: "Shakuton",
    nameEN: "Calor",
    elements: ["Katon", "Fūton"],
    description: "Combinação de fogo e vento que cria calor extremo capaz de derreter tudo ao redor. O usuário pode liberar ondas de calor devastadoras."
  },
  {
    name: "Yōton",
    nameEN: "Lava",
    elements: ["Katon", "Doton"],
    description: "Combinação de fogo e terra que cria lava. O usuário pode manipular lava em diversas formas, desde projéteis até barreiras protetoras."
  },
  {
    name: "Futton",
    nameEN: "Vapor",
    elements: ["Katon", "Suiton"],
    description: "Combinação de fogo e água que cria vapor superaquecido. Pode ser usado para criar nuvens de vapor que obscurecem a visão e queimam."
  },
  {
    name: "Ranton",
    nameEN: "Tempestade",
    elements: ["Fūton", "Raiton"],
    description: "Combinação de vento e relâmpago que cria tempestades elétricas. O usuário pode controlar raios e ventos simultaneamente."
  },
  {
    name: "Jiton",
    nameEN: "Magnetismo",
    elements: ["Fūton", "Doton"],
    description: "Combinação de vento e terra que cria campos magnéticos. O usuário pode controlar metais e criar forças magnéticas."
  },
  {
    name: "Hyōton",
    nameEN: "Gelo",
    elements: ["Fūton", "Suiton"],
    description: "Combinação de vento e água que cria gelo. O usuário pode criar estruturas de gelo, congelar oponentes e criar armas glaciais."
  },
  {
    name: "Bakuton",
    nameEN: "Explosão",
    elements: ["Raiton", "Doton"],
    description: "Combinação de relâmpago e terra que cria explosões. O usuário pode detonar substâncias com choques elétricos."
  },
  {
    name: "Deiton",
    nameEN: "Lama",
    elements: ["Doton", "Suiton"],
    description: "Combinação de terra e água que cria lama. O usuário pode afundar oponentes em pântanos e criar superfícies viscosas."
  },
  {
    name: "Mokuton",
    nameEN: "Madeira",
    elements: ["Suiton", "Doton"],
    description: "Kekkei Genkai exclusiva do clã Senju que combina elementos para criar madeira viva. O usuário pode construir estruturas, armas e até invocar criaturas de madeira com poder controlador de bijūs.",
    clanRestriction: "Senju"
  },
  {
    name: "Jinton",
    nameEN: "Poeira",
    elements: ["Katon", "Fūton", "Doton"],
    description: "Kekkei Genkai exclusiva do clã Shokyo que combina Katon, Fūton e Doton para criar calor extremo capaz de desintegrar matéria. Uma das técnicas mais devastadoras do mundo ninja.",
    clanRestriction: "Shokyo"
  }
];

const doujutsuList = [
  {
    name: "Sharingan",
    clan: "Uchiha",
    village: "Konoha",
    description: "Dōjutsu lendário dos Uchiha que concede capacidades sobre-humanas de percepção e cópia. Permite copiar qualquer técnica, prever movimentos e lançar genjutsu com o olhar.",
    stages: [
      { name: "1 Tomoe", ability: "Percepção aprimorada e cópia básica", exp: 50 },
      { name: "2 Tomoe", ability: "Previsão de movimentos e cópia avançada", exp: 100 },
      { name: "3 Tomoe", ability: "Cópia perfeita e genjutsu poderoso", exp: 200 }
    ],
    special: "Mangekyō Sharingan — Desbloqueia técnicas únicas como Amaterasu e Tsukuyomi"
  },
  {
    name: "Byakugan",
    clan: "Hyūga",
    village: "Konoha",
    description: "Dōjutsu ancestral dos Hyūga que concede visão quase 360° e a capacidade de ver o sistema circulatório de chakra. Fundamental para o estilo Jūken.",
    stages: [
      { name: "Básico", ability: "Visão de 360° com ponto cego traseiro", exp: 40 },
      { name: "Evoluído", ability: "Visão sem pontos cegos e maior alcance", exp: 120 }
    ],
    special: "Pode ver barreiras de chakra e pontos fracos no corpo"
  },
  {
    name: "Ketsuryūgan",
    clan: "Chinoike",
    village: "Kumo",
    description: "Dōjutsu raro que permite manipular o sangue de oponentes feridos. Concede controle sobre fluídos corporais e capacidade de criar ilusões de sangue.",
    stages: [
      { name: "Básico", ability: "Detecção de sangue e manipulação básica", exp: 60 },
      { name: "Avançado", ability: "Controle total sobre fluídos corporais", exp: 150 }
    ],
    special: "Pode prender oponentes em veias de sangue solidificadas"
  },
  {
    name: "Jūryoku",
    clan: "Ganryū",
    village: "Iwa",
    description: "Kekkei Genkai capaz de manipular a gravidade até certo nível. Permite criar campos gravitacionais que esmagam, levitam ou distorcem o espaço ao redor.",
    stages: [
      { name: "Básico", ability: "Manipulação básica de gravidade e levitação", exp: 80 },
      { name: "Avançado", ability: "Campos gravitacionais devastadores e distorção espacial", exp: 180 }
    ],
    special: "Pode criar zonas de gravidade zero ou compressão extrema"
  },
  {
    name: "Shikotsumyaku",
    clan: "Kaguya",
    village: "Kiri",
    description: "Kekkei Genkai ancestral que permite manipular os ossos do próprio corpo. Os ossos podem ser projetados como armas, fortalecidos ou removidos para atacar.",
    stages: [
      { name: "Básico", ability: "Fortalecimento ósseo e projéteis de ossos", exp: 70 },
      { name: "Avançado", ability: "Controle total sobre ossos corporais e armas ósseas", exp: 160 }
    ],
    special: "Pode extrair e manipular ossos como lâminas perfurantes"
  }
];

function renderElementKekkei() {
  const list = document.querySelector("#element-kekkei-list");
  if (!list) return;

  const elementColors = {
    "Katon": "#e85d32",
    "Suiton": "#3a8fd4",
    "Fūton": "#6abf6a",
    "Doton": "#a0855b",
    "Raiton": "#d4a83a"
  };

  list.innerHTML = elementKekkei.map((kekkei) => {
    const colors = kekkei.elements.map((el) => elementColors[el] || "#9b7ed8");
    const gradient = colors.length > 2
      ? `linear-gradient(135deg, ${colors[0]}33, ${colors[1]}33, ${colors[2]}33)`
      : `linear-gradient(135deg, ${colors[0]}33, ${colors[1]}33)`;
    const clanRestriction = kekkei.clanRestriction
      ? `<span class="clan-restriction-badge">${kekkei.clanRestriction}</span>`
      : "";

    return `
      <div class="kekkei-card element-card" style="border-left-color: ${colors[0]}; background: ${gradient};">
        <div class="kekkei-header">
          <div class="kekkei-title">
            <h3>${kekkei.name}</h3>
            <span class="kekkei-name-en">${kekkei.nameEN}</span>
            ${clanRestriction}
          </div>
          <div class="kekkei-elements">
            ${kekkei.elements.map((el) => `
              <span class="element-badge" style="background: ${elementColors[el] || "#9b7ed8"};">${el}</span>
            `).join(" + ")}
          </div>
        </div>

        <p class="kekkei-description">${kekkei.description}</p>
      </div>
    `;
  }).join("");
}

function renderDoujutsu() {
  const list = document.querySelector("#doujutsu-list");
  if (!list) return;

  const clanColors = {
    "Uchiha": "#e83232",
    "Hyūga": "#e0e0e0",
    "Chinoike": "#8b0000",
    "Ganryū": "#8b7355",
    "Kaguya": "#d4c5a9",
    "Shokyo": "#b8860b"
  };

  list.innerHTML = doujutsuList.map((doujutsu) => {
    const color = clanColors[doujutsu.clan] || "#9b7ed8";

    return `
      <div class="kekkei-card doujutsu-card" style="border-left-color: ${color};">
        <div class="kekkei-header">
          <div class="kekkei-title">
            <h3>${doujutsu.name}</h3>
            <span class="kekkei-clan-badge" style="background: ${color};">${doujutsu.clan}</span>
          </div>
        </div>

        <p class="kekkei-description">${doujutsu.description}</p>

        <div class="doujutsu-stages">
          <strong>Estágios:</strong>
          <div class="stages-list">
            ${doujutsu.stages.map((stage) => `
              <div class="stage-item">
                <span class="stage-name">${stage.name}</span>
                <span class="stage-ability">${stage.ability}</span>
                <span class="stage-exp">${stage.exp} EXP</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="kekkei-special">
          <strong>Especial:</strong> ${doujutsu.special}
        </div>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderElementKekkei();
  renderDoujutsu();
});
