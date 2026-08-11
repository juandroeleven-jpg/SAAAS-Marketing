const projects = {
  "mobile-design": {
    title: "Mobile Design",
    pill: "Mobile Design · Visual Flow",
    summary: "Exploración mobile-first con tareas independientes; cada tarea carga su propio canvas.",
    accent: "#1e64ff",
    tasks: [
      {
        id: "brief-mobile",
        title: "Definir narrativa mobile",
        status: "In Progress",
        summary: "Convertir objetivo de campaña en historia visual corta.",
        nodes: [
          node("assets", "Assets", "Referencias internas, constraints de marca y archivos base.", 80, 96),
          node("story", "Story", "Concepto: interfaz mobile clara con escenas de descubrimiento, confianza y acción.", 380, 86, true),
          node("prompts", "Prompts", "Prompt base: generar rutas visuales originales para una experiencia mobile-first.", 700, 96, true),
          outputNode("outputs", "Outputs/Review", "Comparar tres direcciones mock antes de pedir nuevas variantes.", 850, 340)
        ],
        links: [
          ["assets", "story"],
          ["story", "prompts"],
          ["prompts", "outputs"]
        ]
      },
      {
        id: "motion-mobile",
        title: "Secuencia video corta",
        status: "New",
        summary: "Preparar subtareas para un video de 8 segundos.",
        nodes: [
          node("assets", "Assets", "Pantallas, fondos neutros y ritmo visual.", 120, 120),
          node("story", "Story", "Inicio: problema claro. Medio: transición visual. Cierre: CTA limpio.", 420, 110, true),
          node("prompts", "Prompts", "Prompt: storyboard en tres beats con movimiento suave y composición vertical.", 715, 120, true),
          outputNode("review", "Outputs/Review", "Placeholders para clips A/B/C y decisión de ritmo.", 780, 385)
        ],
        links: [
          ["assets", "story"],
          ["story", "prompts"],
          ["prompts", "review"]
        ]
      },
      {
        id: "review-mobile",
        title: "Revisión de outputs",
        status: "Review",
        summary: "Ordenar criterios humanos de aprobación.",
        nodes: [
          node("criteria", "Criterios", "Claridad, originalidad, lectura mobile y coherencia con la historia.", 110, 120),
          node("story", "Story", "Resumen editable de intención visual aprobable.", 390, 100, true),
          node("prompts", "Prompts", "Prompt de corrección: ajustar composición sin copiar referencias externas.", 690, 120, true),
          outputNode("review", "Outputs/Review", "Elegir versión candidata y anotar cambios pendientes.", 410, 390)
        ],
        links: [
          ["criteria", "story"],
          ["story", "prompts"],
          ["prompts", "review"]
        ]
      }
    ]
  },
  "validar-alcance": {
    title: "Validar alcance sin API",
    pill: "Alcance · Sin API",
    summary: "Proyecto para separar mocks, autorizaciones y límites antes de automatizar.",
    accent: "#b76511",
    tasks: [
      {
        id: "mapa-limites",
        title: "Mapa de límites",
        status: "Scope",
        summary: "Documentar qué puede simularse y qué requiere autorización.",
        nodes: [
          node("assets", "Entradas", "Prompts, referencias y outputs cargados manualmente.", 100, 110),
          node("story", "Reglas", "No prometer automatización real sin API o conector aprobado.", 410, 100, true),
          node("prompts", "Comandos Mock", "Botones solo registran intención; no ejecutan servicios externos.", 720, 125, true),
          node("review", "Revisión", "Validar con humano antes de conectar cualquier servicio.", 520, 390)
        ],
        links: [
          ["assets", "story"],
          ["story", "prompts"],
          ["prompts", "review"]
        ]
      },
      {
        id: "historial-prompts",
        title: "Historial Markdown",
        status: "In Progress",
        summary: "Asegurar que los prompts importantes tengan trazabilidad local.",
        nodes: [
          node("assets", "Prompt recibido", "Solicitud original del usuario y contexto del proyecto.", 120, 110),
          node("story", "Resumen", "Arquitectura: proyecto → tarea/canvas → subtarea/nodo.", 420, 120, true),
          node("prompts", "Markdown", "Guardar avances bajo proyectos/flowforge-visual/.", 720, 115, true),
          node("review", "Control", "No editar bitácora general ni Dashboard CxC.", 500, 390)
        ],
        links: [
          ["assets", "story"],
          ["story", "prompts"],
          ["prompts", "review"]
        ]
      }
    ]
  },
  "campana-lanzamiento": {
    title: "Campaña lanzamiento",
    pill: "Lanzamiento · Brief",
    summary: "Proyecto para convertir mensajes de lanzamiento en piezas visuales coordinadas.",
    accent: "#0f9f6e",
    tasks: [
      {
        id: "mensaje-central",
        title: "Mensaje central",
        status: "New",
        summary: "Traducir propuesta de valor en secuencia visual.",
        nodes: [
          node("assets", "Inputs", "Audiencia, oferta, tono y contexto de lanzamiento.", 90, 105),
          node("story", "Story", "Narrativa editable: promesa, prueba y acción.", 390, 110, true),
          node("prompts", "Prompts", "Prompt: crear escenas originales para anunciar un producto digital.", 700, 115, true),
          outputNode("review", "Outputs/Review", "Comparar direcciones de campaña sin usar marcas externas.", 830, 365)
        ],
        links: [
          ["assets", "story"],
          ["story", "prompts"],
          ["prompts", "review"]
        ]
      },
      {
        id: "piezas-sociales",
        title: "Piezas sociales",
        status: "Backlog",
        summary: "Diseñar variaciones para formatos vertical, square y banner.",
        nodes: [
          node("assets", "Formatos", "9:16, 1:1 y 16:9 como constraints de composición.", 110, 120),
          node("story", "Story", "Cada pieza mantiene la misma idea con diferente ritmo visual.", 400, 105, true),
          node("prompts", "Prompts", "Prompt: variantes por formato con composición nativa.", 710, 120, true),
          outputNode("review", "Outputs/Review", "Placeholder de piezas por formato.", 790, 380)
        ],
        links: [
          ["assets", "story"],
          ["story", "prompts"],
          ["prompts", "review"]
        ]
      }
    ]
  },
  "catalogo-experimental": {
    title: "Catálogo experimental",
    pill: "Catálogo · Lab",
    summary: "Banco de pruebas para estilos, prompts y outputs sin conexión real.",
    accent: "#7c3aed",
    tasks: [
      {
        id: "estilos-base",
        title: "Estilos base",
        status: "Experimental",
        summary: "Comparar familias visuales originales.",
        nodes: [
          node("assets", "Referencias internas", "Paletas propias, formas abstractas y reglas de no copia.", 100, 110),
          node("story", "Story", "El catálogo debe explicar por qué cada estilo existe.", 405, 100, true),
          node("prompts", "Prompts", "Prompt: generar descripciones de estilos visuales únicos.", 705, 125, true),
          outputNode("review", "Outputs/Review", "Casos A/B/C/D como placeholders visuales.", 820, 370, true)
        ],
        links: [
          ["assets", "story"],
          ["story", "prompts"],
          ["prompts", "review"]
        ]
      },
      {
        id: "matriz-prompts",
        title: "Matriz de prompts",
        status: "In Progress",
        summary: "Cruzar intención, formato y tono.",
        nodes: [
          node("assets", "Variables", "Formato, tono, audiencia y nivel de detalle.", 115, 120),
          node("story", "Story", "Cada combinación produce una hipótesis visual documentada.", 420, 105, true),
          node("prompts", "Prompts", "Prompt editable para matriz de exploraciones.", 720, 120, true),
          outputNode("review", "Outputs/Review", "Ranking manual de resultados simulados.", 500, 390)
        ],
        links: [
          ["assets", "story"],
          ["story", "prompts"],
          ["prompts", "review"]
        ]
      }
    ]
  }
};

function node(id, title, body, x, y, editable = false) {
  return { id, title, body, x, y, editable, kind: "text" };
}

function outputNode(id, title, body, x, y, extra = false) {
  return { id, title, body, x, y, editable: false, kind: "output", extra };
}

const stage = document.querySelector(".flow-stage");
const plane = document.querySelector("#canvas-plane");
const nodeLayer = document.querySelector("#node-layer");
const connectors = document.querySelector(".connectors");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const projectTitle = document.querySelector("#project-title");
const projectSummary = document.querySelector("#project-summary");
const projectPill = document.querySelector("#project-pill");
const canvasTitle = document.querySelector("#canvas-title");
const canvasDescription = document.querySelector("#canvas-description");
const zoomInButton = document.querySelector("#zoom-in");
const zoomOutButton = document.querySelector("#zoom-out");
const zoomResetButton = document.querySelector("#zoom-reset");
const zoomLabel = document.querySelector("#zoom-label");

const params = new URLSearchParams(window.location.search);
const projectKey = projects[params.get("project")] ? params.get("project") : "mobile-design";
const project = projects[projectKey];

let activeTask = project.tasks[0];
let activeNode = null;
let pointerOffset = { x: 0, y: 0 };
let zoom = 1;

function setProjectChrome() {
  document.title = `FlowForge Visual — ${project.title}`;
  projectTitle.textContent = project.title;
  projectSummary.textContent = project.summary;
  projectPill.textContent = project.pill;
  taskCount.textContent = project.tasks.length;
  document.documentElement.style.setProperty("--accent", project.accent);
}

function renderTasks() {
  taskList.innerHTML = "";

  project.tasks.forEach((task) => {
    const wrapper = document.createElement("article");
    wrapper.className = `task-item${task.id === activeTask.id ? " active expanded" : ""}`;

    const button = document.createElement("button");
    button.className = "task-main";
    button.type = "button";
    button.innerHTML = `
      <span>${task.status}</span>
      <div>
        <strong>${task.title}</strong>
        <small>${task.summary}</small>
      </div>
    `;

    button.addEventListener("click", () => {
      activeTask = task;
      renderTasks();
      renderCanvas();
    });

    const subtasks = document.createElement("ul");
    subtasks.className = "subtask-list";
    task.nodes.forEach((taskNode) => {
      const item = document.createElement("li");
      item.textContent = taskNode.title;
      subtasks.appendChild(item);
    });

    wrapper.appendChild(button);
    wrapper.appendChild(subtasks);
    taskList.appendChild(wrapper);
  });
}

function renderCanvas() {
  canvasTitle.textContent = activeTask.title;
  canvasDescription.textContent = activeTask.summary;
  nodeLayer.innerHTML = "";
  connectors.innerHTML = "";

  activeTask.links.forEach(([from, to]) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.dataset.from = from;
    path.dataset.to = to;
    connectors.appendChild(path);
  });

  activeTask.nodes.forEach((taskNode) => {
    const element = document.createElement("article");
    element.className = [
      "flow-node",
      taskNode.editable ? "editable-node" : "",
      taskNode.kind === "output" ? "wide-node review-node" : ""
    ]
      .filter(Boolean)
      .join(" ");
    element.dataset.node = taskNode.id;
    element.style.left = `${taskNode.x}px`;
    element.style.top = `${taskNode.y}px`;
    element.style.setProperty("--node-color", project.accent);

    if (taskNode.kind === "output") {
      element.innerHTML = `
        <span>${taskNode.title}</span>
        <small>${taskNode.body}</small>
        <div class="output-grid">
          <div class="visual-placeholder sunrise">Case A</div>
          <div class="visual-placeholder mint">Case B</div>
          <div class="visual-placeholder violet">Case C</div>
          ${taskNode.extra ? '<div class="visual-placeholder amber">Case D</div>' : ""}
        </div>
      `;
    } else {
      element.innerHTML = `
        <span>${taskNode.title}</span>
        <p ${taskNode.editable ? 'contenteditable="true" spellcheck="false"' : ""}>${taskNode.body}</p>
      `;
    }

    attachNodeDrag(element, taskNode);
    attachEditableSync(element, taskNode);
    nodeLayer.appendChild(element);
  });

  updateConnectors();
}

function attachEditableSync(element, taskNode) {
  const editable = element.querySelector("[contenteditable]");
  if (!editable) return;

  editable.addEventListener("input", () => {
    taskNode.body = editable.textContent.trim();
  });
}

function attachNodeDrag(element, taskNode) {
  element.addEventListener("pointerdown", (event) => {
    if (event.target.matches("p, select, option, [contenteditable]")) return;
    activeNode = { element, taskNode };
    const rect = element.getBoundingClientRect();
    pointerOffset = {
      x: (event.clientX - rect.left) / zoom,
      y: (event.clientY - rect.top) / zoom
    };
    element.setPointerCapture(event.pointerId);
    element.classList.add("dragging");
  });

  element.addEventListener("pointermove", (event) => {
    if (!activeNode || activeNode.element !== element) return;
    const stageRect = stage.getBoundingClientRect();
    const scrollLeft = stage.scrollLeft;
    const scrollTop = stage.scrollTop;
    const nextLeft = (event.clientX - stageRect.left + scrollLeft) / zoom - pointerOffset.x;
    const nextTop = (event.clientY - stageRect.top + scrollTop) / zoom - pointerOffset.y;
    const maxLeft = plane.offsetWidth - element.offsetWidth - 12;
    const maxTop = plane.offsetHeight - element.offsetHeight - 12;

    taskNode.x = Math.min(Math.max(12, nextLeft), maxLeft);
    taskNode.y = Math.min(Math.max(12, nextTop), maxTop);
    element.style.left = `${taskNode.x}px`;
    element.style.top = `${taskNode.y}px`;
    updateConnectors();
  });

  element.addEventListener("pointerup", () => {
    element.classList.remove("dragging");
    activeNode = null;
  });
}

function centerOf(nodeElement) {
  return {
    x: nodeElement.offsetLeft + nodeElement.offsetWidth / 2,
    y: nodeElement.offsetTop + nodeElement.offsetHeight / 2
  };
}

function updateConnectors() {
  connectors.querySelectorAll("path").forEach((line) => {
    const from = nodeLayer.querySelector(`[data-node="${line.dataset.from}"]`);
    const to = nodeLayer.querySelector(`[data-node="${line.dataset.to}"]`);
    if (!from || !to) return;

    const a = centerOf(from);
    const b = centerOf(to);
    const distance = Math.max(90, Math.abs(b.x - a.x) * 0.42);
    line.setAttribute(
      "d",
      `M${a.x} ${a.y} C${a.x + distance} ${a.y}, ${b.x - distance} ${b.y}, ${b.x} ${b.y}`
    );
  });
}

function applyZoom(nextZoom) {
  zoom = Math.min(1.6, Math.max(0.55, nextZoom));
  plane.style.transform = `scale(${zoom})`;
  plane.style.width = "1200px";
  plane.style.height = "720px";
  zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
  updateConnectors();
}

zoomInButton.addEventListener("click", () => applyZoom(zoom + 0.1));
zoomOutButton.addEventListener("click", () => applyZoom(zoom - 0.1));
zoomResetButton.addEventListener("click", () => applyZoom(1));
window.addEventListener("resize", updateConnectors);

setProjectChrome();
renderTasks();
renderCanvas();
applyZoom(1);
