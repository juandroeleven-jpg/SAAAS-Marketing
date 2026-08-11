const portfolioSupabase = window.FlowForgeSupabase;
const projectGrid = document.querySelector("#project-grid");
const apiMetric = document.querySelector("#api-metric");
const projectMetric = document.querySelector("#project-metric");
const cardThemes = ["project-blue", "project-amber", "project-green", "project-violet"];
const cardTimers = new Map();

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function editable(value, field) {
  return `contenteditable="true" spellcheck="false" data-edit-field="${field}" tabindex="0">${escapeHtml(value)}`;
}

function saveCardProject(project, card) {
  clearTimeout(cardTimers.get(project.id));
  card.dataset.saveState = "Guardando";
  cardTimers.set(
    project.id,
    setTimeout(async () => {
      try {
        await portfolioSupabase.upsert("flowforge_projects", project, "id");
        card.dataset.saveState = "Guardado";
      } catch (error) {
        card.dataset.saveState = "Local";
      }
    }, 500)
  );
}

function bindCards(projects) {
  projectGrid.querySelectorAll(".project-card").forEach((card) => {
    const project = projects.find((item) => item.id === card.dataset.projectId);
    if (!project) return;

    card.querySelectorAll("[data-edit-field]").forEach((field) => {
      field.addEventListener("click", (event) => event.preventDefault());
      field.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          field.blur();
        }
      });
      field.addEventListener("input", () => {
        project[field.dataset.editField] = field.textContent.trim();
        saveCardProject(project, card);
      });
    });
  });
}

async function loadPortfolio() {
  if (!portfolioSupabase?.enabled || !projectGrid) return;

  const projects = await portfolioSupabase.read(
    "flowforge_projects?select=id,title,pill,summary,accent,sort_order&order=sort_order.asc"
  );

  projectMetric.textContent = projects.length;
  apiMetric.textContent = "Supabase";
  projectGrid.innerHTML = projects
    .map((project, index) => {
      const theme = cardThemes[index % cardThemes.length];
      return `
        <a class="project-card ${theme}" data-project-id="${project.id}" href="./design-project.html?project=${project.id}">
          <span class="status-pill active" ${editable(project.pill, "pill")}</span>
          <h2 ${editable(project.title, "title")}</h2>
          <p ${editable(project.summary, "summary")}</p>
          <div class="project-meta">
            <span>Supabase</span>
            <span>Canvas editable</span>
          </div>
        </a>
      `;
    })
    .join("");
  bindCards(projects);
}

loadPortfolio().catch(() => {
  if (apiMetric) apiMetric.textContent = "Local";
});
