const jutsus = [
  {
    name: "Katon: Gōkakyū no Jutsu",
    nameEN: "Grande Bola de Fogo",
    element: "Katon",
    type: "Ninjutsu",
    rank: "C",
    damage: 12,
    cooldown: 2,
    chakraCost: 8,
    learnCost: "50 EXP",
    description: "Uma enorme bola de fogo é criada e lançada em direção ao oponente, causando queimaduras graves.",
    users: "Sasuke Uchiha, Kakashi Hatake, Asuma Sarutobi"
  },
  {
    name: "Katon: Hōsenka no Jutsu",
    nameEN: "Flor da Fênix",
    element: "Katon",
    type: "Ninjutsu",
    rank: "D",
    damage: 6,
    cooldown: 1,
    chakraCost: 4,
    learnCost: "20 EXP",
    description: "Várias pequenas bolas de fogo são disparadas, confundindo o oponente enquanto uma se aproxima silenciosamente.",
    users: "Sasuke Uchiha, Naruto Uzumaki"
  },
  {
    name: "Katon: Ryūka no Jutsu",
    nameEN: "Dragão de Fogo",
    element: "Katon",
    type: "Ninjutsu",
    rank: "B",
    damage: 16,
    cooldown: 3,
    chakraCost: 12,
    learnCost: "80 EXP",
    description: "Um dragão de fogo é expelido pela boca, perseguindo o alvo com força devastadora.",
    users: "Kakashi Hatake, Yamato"
  },
  {
    name: "Katon: Gōryūka no Jutsu",
    nameEN: "Grande Dragão de Fogo",
    element: "Katon",
    type: "Ninjutsu",
    rank: "A",
    damage: 22,
    cooldown: 4,
    chakraCost: 18,
    learnCost: "150 EXP",
    description: "Uma versão massiva do Ryūka, capaz de destruir edifícios inteiros com sua chama intensa.",
    users: "Orochimaru, Madara Uchiha"
  },
  {
    name: "Suiton: Suiryūdan no Jutsu",
    nameEN: "Dragão de Água",
    element: "Suiton",
    type: "Ninjutsu",
    rank: "B",
    damage: 14,
    cooldown: 2,
    chakraCost: 10,
    learnCost: "70 EXP",
    description: "Um dragão de água é formado a partir de uma fonte, atingindo o oponente com força esmagadora.",
    users: "Kisame Hoshigaki, Kakashi Hatake"
  },
  {
    name: "Suiton: Suijinheki",
    nameEN: "Muralha de Água",
    element: "Suiton",
    type: "Ninjutsu",
    rank: "C",
    damage: 0,
    cooldown: 3,
    chakraCost: 8,
    learnCost: "40 EXP",
    description: "Uma parede de água é criada para bloquear ataques. Pode ser usada defensivamente ou para evitar fogo.",
    users: "Kisame Hoshigaki, Zabuza Momochi"
  },
  {
    name: "Suiton: Bakusui Shōha",
    nameEN: "Onda Explosiva",
    element: "Suiton",
    type: "Ninjutsu",
    rank: "A",
    damage: 20,
    cooldown: 4,
    chakraCost: 16,
    learnCost: "130 EXP",
    description: "Uma explosão de água é liberada com força devastadora, afogando e empurrando todos ao redor.",
    users: "Kisame Hoshigaki, Mei Terumī"
  },
  {
    name: "Suiton: Kirigakure no Jutsu",
    nameEN: "Neblina de Kirigakure",
    element: "Suiton",
    type: "Ninjutsu",
    rank: "B",
    damage: 0,
    cooldown: 5,
    chakraCost: 10,
    learnCost: "75 EXP",
    description: "Uma névoa densa é criada, obscurecendo a visão de todos. Perfeito para emboscadas e assassinatos.",
    users: "Zabuza Momochi, Haku"
  },
  {
    name: "Fūton: Kazekiri",
    nameEN: "Lâmina do Vento",
    element: "Fūton",
    type: "Ninjutsu",
    rank: "B",
    damage: 15,
    cooldown: 2,
    chakraCost: 10,
    learnCost: "70 EXP",
    description: "Lâminas de vento afiadas como navalha são lançadas, capazes de cortar através de quase qualquer material.",
    users: "Temari, Asuma Sarutobi"
  },
  {
    name: "Fūton: Daitoppa",
    nameEN: "Grande Explosão",
    element: "Fūton",
    type: "Ninjutsu",
    rank: "A",
    damage: 18,
    cooldown: 3,
    chakraCost: 14,
    learnCost: "110 EXP",
    description: "Uma explosão de vento comprimido é liberada, empurrando e danificando tudo em seu caminho.",
    users: "Temari, Danzō Shimura"
  },
  {
    name: "Fūton: Rasenshuriken",
    nameEN: "Shuriken Espiral de Vento",
    element: "Fūton",
    type: "Ninjutsu",
    rank: "S",
    damage: 30,
    cooldown: 6,
    chakraCost: 25,
    learnCost: "250 EXP",
    description: "Uma combinação do Rasengan comelemento Fūton, criando uma tempestade de lâminas microscópicas que destroem as células do alvo.",
    users: "Naruto Uzumaki"
  },
  {
    name: "Doton: Doryūheki",
    nameEN: "Muralha de Terra",
    element: "Doton",
    type: "Ninjutsu",
    rank: "C",
    damage: 0,
    cooldown: 2,
    chakraCost: 6,
    learnCost: "30 EXP",
    description: "Uma parede de rocha é erguida do solo para bloquear ataques ou criar cobertura.",
    users: "Kakashi Hatake, Deidara"
  },
  {
    name: "Doton: Yomi Numa",
    nameEN: "Pântano do Submundo",
    element: "Doton",
    type: "Ninjutsu",
    rank: "B",
    damage: 8,
    cooldown: 4,
    chakraCost: 10,
    learnCost: "60 EXP",
    description: "O chão se transforma em um pântano viscoso, prendendo o oponente e afundando-o lentamente.",
    users: "Kakashi Hatake, Gaara"
  },
  {
    name: "Doton: Yūtan",
    nameEN: "Túnel de Terra",
    element: "Doton",
    type: "Ninjutsu",
    rank: "B",
    damage: 10,
    cooldown: 3,
    chakraCost: 8,
    learnCost: "55 EXP",
    description: "O usuário se move debaixo da terra como se fosse água, permitindo emboscadas e fugas.",
    users: "Kakashi Hatake, Onoki"
  },
  {
    name: "Doton: Mondō",
    nameEN: "Portão de Terra",
    element: "Doton",
    type: "Ninjutsu",
    rank: "A",
    damage: 24,
    cooldown: 5,
    chakraCost: 18,
    learnCost: "140 EXP",
    description: "Duas portas massivas de rocha se fecham sobre o oponente, esmagando-o com força brutal.",
    users: "Onoki, Tsuchikage"
  },
  {
    name: "Raiton: Chidori",
    nameEN: "Mil Pássaros",
    element: "Raiton",
    type: "Ninjutsu",
    rank: "A",
    damage: 20,
    cooldown: 3,
    chakraCost: 15,
    learnCost: "120 EXP",
    description: "Concentração massiva de relâmpago na mão, permitindo penetrar qualquer defesa com velocidade sobre-humana.",
    users: "Sasuke Uchiha, Kakashi Hatake"
  },
  {
    name: "Raiton: Raikiri",
    nameEN: "Raio Cortante",
    element: "Raiton",
    type: "Ninjutsu",
    rank: "S",
    damage: 28,
    cooldown: 4,
    chakraCost: 22,
    learnCost: "200 EXP",
    description: "Uma versão aprimorada do Chidori, com precisão e poder ainda maiores. Capaz de cortar o próprio relâmpago.",
    users: "Kakashi Hatake"
  },
  {
    name: "Raiton: Kage Bunshin no Jutsu",
    nameEN: "Clone das Sombras",
    element: "outros",
    type: "Ninjutsu",
    rank: "B",
    damage: 0,
    cooldown: 1,
    chakraCost: 5,
    learnCost: "35 EXP",
    description: "Cria cópias sólidas do usuário feitas de chakra. Podem lutar e transmitir informações ao original.",
    users: "Naruto Uzumaki, Kakashi Hatake"
  },
  {
    name: "Rasengan",
    nameEN: "Espiral",
    element: "outros",
    type: "Ninjutsu",
    rank: "A",
    damage: 22,
    cooldown: 3,
    chakraCost: 16,
    learnCost: "130 EXP",
    description: "Uma esfera de chakra girando em alta velocidade na palma da mão. Causa dano interno devastador.",
    users: "Naruto Uzumaki, Jiraiya, Minato Namikaze"
  },
  {
    name: "Katon: Haisui no Jutsu",
    nameEN: "Mar de Lava",
    element: "Katon",
    type: "Ninjutsu",
    rank: "S",
    damage: 26,
    cooldown: 5,
    chakraCost: 20,
    learnCost: "180 EXP",
    description: "Uma maré de lava é liberada, derretendo tudo em seu caminho com calor extremo.",
    users: "Mei Terumī, Ōnoki"
  },
  {
    name: "Suiton: Suikōdan no Jutsu",
    nameEN: "Tubarão de Água",
    element: "Suiton",
    type: "Ninjutsu",
    rank: "B",
    damage: 13,
    cooldown: 2,
    chakraCost: 9,
    learnCost: "65 EXP",
    description: "Um tubarão de água é criado e lançado contra o oponente, mordendo com força devastadora.",
    users: "Kisame Hoshigaki"
  },
  {
    name: "Fūton: Kazegami",
    nameEN: "Deus do Vento",
    element: "Fūton",
    type: "Ninjutsu",
    rank: "A",
    damage: 19,
    cooldown: 4,
    chakraCost: 15,
    learnCost: "120 EXP",
    description: "Turbilhões de vento são formados, criando tempestades que arrasam a área.",
    users: "Temari"
  },
  {
    name: "Doton: Daijuraku",
    nameEN: "Grande Praça",
    element: "Doton",
    type: "Ninjutsu",
    rank: "C",
    damage: 7,
    cooldown: 2,
    chakraCost: 5,
    learnCost: "25 EXP",
    description: "O chão se rompe e projeta estacas de rocha contra o oponente.",
    users: "Vários ninjas de terra"
  },
  {
    name: "Raiton: Jibashi",
    nameEN: "Onda Elétrica",
    element: "Raiton",
    type: "Ninjutsu",
    rank: "B",
    damage: 12,
    cooldown: 2,
    chakraCost: 8,
    learnCost: "55 EXP",
    description: "Uma onda de eletricidade é disparada pelo corpo, atingindo todos ao redor.",
    users: "Killer Bee, Raikage"
  },
  {
    name: "Genjutsu: Kai",
    nameEN: "Liberação de Ilusão",
    element: "outros",
    type: "Genjutsu",
    rank: "D",
    damage: 0,
    cooldown: 1,
    chakraCost: 3,
    learnCost: "15 EXP",
    description: "Quebra ilusões usando chakra proprioceptivo. Essencial para sobreviver a genjutsus.",
    users: "Todos os ninjas"
  },
  {
    name: "Bunshin no Jutsu",
    nameEN: "Clone",
    element: "outros",
    type: "Ninjutsu",
    rank: "E",
    damage: 0,
    cooldown: 1,
    chakraCost: 2,
    learnCost: "5 EXP",
    description: "Cria ilusões sonhadas de si mesmo para confundir o oponente.",
    users: "Todos os ninjas"
  },
  {
    name: "Henge no Jutsu",
    nameEN: "Transformação",
    element: "outros",
    type: "Ninjutsu",
    rank: "E",
    damage: 0,
    cooldown: 1,
    chakraCost: 2,
    learnCost: "5 EXP",
    description: "Permite assumir a aparência de qualquer pessoa ou objeto.",
    users: "Todos os ninjas"
  },
  {
    name: "Shunshin no Jutsu",
    nameEN: "Flash Step",
    element: "outros",
    type: "Taijutsu",
    rank: "D",
    damage: 0,
    cooldown: 1,
    chakraCost: 3,
    learnCost: "10 EXP",
    description: "Movimento ultrarrápido que permite se deslocar de um ponto a outro instantaneamente.",
    users: "Todos os ninjas"
  }
];

const elementEmoji = {
  Katon: "&#x1F525;",
  Suiton: "&#x1F4A7;",
  "Fūton": "&#x1F4A8;",
  Doton: "&#x1F3D4;",
  Raiton: "&#x26A1;",
  outros: "&#x2728;"
};

const elementColors = {
  Katon: "#e85d32",
  Suiton: "#3a8fd4",
  "Fūton": "#6abf6a",
  Doton: "#a0855b",
  Raiton: "#d4a83a",
  outros: "#9b7ed8"
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

function renderJutsuList(filter = "all") {
  const list = document.querySelector("#jutsu-list");
  if (!list) return;

  const filtered = filter === "all"
    ? jutsus
    : jutsus.filter((j) => j.element === filter);

  if (filtered.length === 0) {
    list.innerHTML = `<div class="jutsu-empty">Nenhum jutsu encontrado para este elemento.</div>`;
    return;
  }

  list.innerHTML = filtered.map((jutsu) => {
    const color = elementColors[jutsu.element] || "#9b7ed8";
    const emoji = elementEmoji[jutsu.element] || "&#x2728;";

    return `
      <div class="jutsu-card" style="border-left-color: ${color};">
        <div class="jutsu-header">
          <div class="jutsu-name">
            <span class="jutsu-element-badge" style="background: ${color};">${emoji} ${jutsu.element}</span>
            <h3>${jutsu.name}</h3>
            <span class="jutsu-name-en">${jutsu.nameEN}</span>
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
            <span class="stat-value">${jutsu.cooldown} turno${jutsu.cooldown > 1 ? "s" : ""}</span>
          </div>
          <div class="jutsu-stat">
            <span class="stat-label">Chakra</span>
            <span class="stat-value chakra">${jutsu.chakraCost}</span>
          </div>
          <div class="jutsu-stat">
            <span class="stat-label">Aprender</span>
            <span class="stat-value learn">${jutsu.learnCost}</span>
          </div>
        </div>

        <p class="jutsu-description">${highlightKeywords(jutsu.description)}</p>
      </div>
    `;
  }).join("");
}

function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderJutsuList(btn.dataset.element);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  renderJutsuList();
});
