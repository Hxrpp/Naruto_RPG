const rankExp = {
  D: 30,
  C: 60,
  B: 100,
  A: 150,
  S: 220
};

const typeExpModifier = {
  "Ninjutsu": 1.0,
  "Genjutsu": 1.0,
  "Taijutsu": 0.7,
  "Kenjutsu": 0.9,
  "Fūinjutsu": 1.2,
  "Subjutsu": 1.1,
  "Kekkei Genkai": 1.5
};

let isLoading = false;

const form = document.querySelector("#jutsu-form");
const formMessage = document.querySelector("#form-message");
const rankInput = document.querySelector("#jutsu-rank");
const typeSelect = document.querySelector("#jutsu-type");
const expDisplay = document.querySelector("#exp-cost");

function selectRank(rank) {
  rankInput.value = rank;

  document.querySelectorAll(".rank-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.rank === rank);
  });

  updateExpDisplay();
  saveJutsuData();
}

function updateExpDisplay() {
  const rank = rankInput.value;
  const type = typeSelect.value;
  const baseExp = rankExp[rank] || 0;
  const modifier = typeExpModifier[type] || 1.0;
  const finalExp = Math.round(baseExp * modifier);
  expDisplay.textContent = finalExp;
}

function saveJutsuData() {
  if (isLoading) return;
  try {
    const data = {
      name: document.querySelector("#jutsu-name").value,
      user: document.querySelector("#jutsu-user").value,
      rank: rankInput.value,
      type: typeSelect.value,
      description: document.querySelector("#jutsu-description").value,
      notes: document.querySelector("#jutsu-notes").value
    };
    localStorage.setItem("narutoRPGJutsu", JSON.stringify(data));
  } catch (e) {
    console.error("Erro ao salvar jutsu:", e);
  }
}

function loadJutsuData() {
  const saved = localStorage.getItem("narutoRPGJutsu");
  if (!saved) return;

  try {
    isLoading = true;
    const data = JSON.parse(saved);

    if (data.name) document.querySelector("#jutsu-name").value = data.name;
    if (data.user) document.querySelector("#jutsu-user").value = data.user;
    if (data.description) document.querySelector("#jutsu-description").value = data.description;
    if (data.notes) document.querySelector("#jutsu-notes").value = data.notes;
    if (data.type) typeSelect.value = data.type;
    if (data.rank) selectRank(data.rank);
  } catch (e) {
    console.error("Erro ao carregar jutsu:", e);
  } finally {
    isLoading = false;
  }
}

function clearSavedData() {
  try {
    localStorage.removeItem("narutoRPGJutsu");
  } catch (e) {
    console.error("Erro ao limpar:", e);
  }
}

function resetForm() {
  form.reset();
  selectRank("D");
  formMessage.textContent = "";
  clearSavedData();
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
  if (!value) return "<em>Nenhuma informação.</em>";
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function exportJutsuSheet() {
  const data = {
    name: document.querySelector("#jutsu-name").value.trim(),
    user: document.querySelector("#jutsu-user").value.trim(),
    rank: rankInput.value,
    type: typeSelect.value,
    exp: rankExp[rankInput.value] || 0,
    description: document.querySelector("#jutsu-description").value.trim(),
    notes: document.querySelector("#jutsu-notes").value.trim()
  };

  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    formMessage.textContent =
      "Não foi possível abrir a janela de impressão. Verifique o bloqueador de pop-ups.";
    return;
  }

  const printContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ficha de Jutsu - ${escapeHtml(data.name)}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Inter:wght@400;500;600&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: #f5f3ee;
      color: #1a1a2e;
      padding: 0;
      margin: 0;
    }

    .page {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      box-shadow: 0 0 30px rgba(0,0,0,0.08);
      min-height: 100vh;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 3px solid #e87532;
    }

    .header-title {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 28px;
      font-weight: 900;
      color: #1a1a2e;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .header-subtitle {
      font-size: 12px;
      color: #9a927f;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 4px;
    }

    .header-symbol {
      width: 70px;
      height: 70px;
      opacity: 0.9;
    }

    .section {
      margin-bottom: 28px;
    }

    .section-title {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #e87532;
      margin-bottom: 14px;
      font-weight: 700;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .info-item {
      padding: 10px 14px;
      background: #faf9f6;
      border: 1px solid #eee9df;
      border-left: 3px solid #e87532;
      border-radius: 8px;
    }

    .info-item.full-width {
      grid-column: 1 / -1;
    }

    .info-item strong {
      display: block;
      font-size: 10px;
      color: #9a927f;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 3px;
    }

    .info-item span {
      font-size: 14px;
      color: #1a1a2e;
      font-weight: 600;
      display: inline-block;
    }

    .rank-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 14px;
      color: white;
    }

    .rank-D { background: #6b7280; }
    .rank-C { background: #3b82f6; }
    .rank-B { background: #22c55e; }
    .rank-A { background: #ef4444; }
    .rank-S { background: #a855f7; }

    .exp-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 6px;
      background: #f59e0b;
      color: white;
      font-weight: 700;
      font-size: 14px;
    }

    .text-box {
      padding: 16px;
      background: #faf9f6;
      border: 1px solid #eee9df;
      border-radius: 10px;
      min-height: 80px;
      font-size: 14px;
      line-height: 1.7;
      color: #333;
      overflow-wrap: anywhere;
    }

    .text-box em {
      color: #999;
      font-style: italic;
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
      body { background: white; }
      .page { padding: 20px; box-shadow: none; }
    }
  </style>
</head>
<body>
  <div class="page">

    <div class="header">
      <div>
        <div class="header-title">${escapeHtml(data.name || "Nova Técnica")}</div>
        <div class="header-subtitle">Ficha de Jutsu</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Classificação</div>
      <div class="info-grid">
        <div class="info-item">
          <strong>Rank</strong>
          <span><span class="rank-badge rank-${data.rank}">${data.rank}</span></span>
        </div>
        <div class="info-item">
          <strong>EXP Necessária</strong>
          <span><span class="exp-badge">${data.exp} EXP</span></span>
        </div>
        <div class="info-item">
          <strong>Tipo</strong>
          <span>${escapeHtml(data.type)}</span>
        </div>
        <div class="info-item">
          <strong>Usuário</strong>
          <span>${escapeHtml(data.user) || "<em>Não definido</em>"}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Descrição</div>
      <div class="text-box">
        ${formatText(data.description)}
      </div>
    </div>

    ${data.notes ? `
    <div class="section">
      <div class="section-title">Notas Adicionais</div>
      <div class="text-box">
        ${formatText(data.notes)}
      </div>
    </div>
    ` : ""}

    <div class="footer">
      Naruto RPG — Sistema de Jogo
    </div>

  </div>
</body>
</html>`;

  printWindow.document.write(printContent);
  printWindow.document.close();
}

document.querySelectorAll(".rank-btn").forEach((button) => {
  button.addEventListener("click", () => {
    selectRank(button.dataset.rank);
  });
});

typeSelect.addEventListener("change", () => {
  updateExpDisplay();
  saveJutsuData();
});

form.addEventListener("submit", (e) => e.preventDefault());

document.querySelector("#export-button").addEventListener("click", exportJutsuSheet);
document.querySelector("#reset-button").addEventListener("click", resetForm);

["#jutsu-name", "#jutsu-user", "#jutsu-type", "#jutsu-description", "#jutsu-notes"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", saveJutsuData);
  document.querySelector(selector).addEventListener("change", saveJutsuData);
});

loadJutsuData();
