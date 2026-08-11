const portfolioSupabase = window.FlowForgeSupabase;
const projectGrid = document.querySelector("#project-grid");
const apiMetric = document.querySelector("#api-metric");
const projectMetric = document.querySelector("#project-metric");

const cardThemes = ["project-blue", "project-amber", "project-green", "project-violet"];

async function loadPortfolio() {
  if (!portfolioSupabase?.enabled || !projectGrid) return;

  const projects = await portfolioSupabase.read(
    "flowforge_projects?select=id,title,summary,accent,sort_order&order=sort_order.asc"
  );

  projectMetric.textContent = projects.length;
  apiMetric.textContent = "Supabase";
  projectGrid.innerHTML = projects
    .map((project, index) => {
      const theme = cardThemes[index % cardThemes.length];
      return `
        <a class="project-card ${theme}" href="./design-project.html?project=${project.id}">
          <span class="status-pill active">Conectado</span>
          <h2>${project.title}</h2>
          <p>${project.summary}</p>
          <div class="project-meta">
            <span>Supabase</span>
            <span>Canvas editable</span>
          </div>
        </a>
      `;
    })
    .join("");
}

loadPortfolio().catch(() => {
  if (apiMetric) apiMetric.textContent = "Local";
});
