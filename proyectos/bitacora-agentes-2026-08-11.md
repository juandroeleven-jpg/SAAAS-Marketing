# Bitacora de agentes - 11 de agosto

Fecha de control: 2026-08-11  
Repositorio GitHub: https://github.com/juandroeleven-jpg/SAAAS-Marketing  
Ruta nueva sugerida en repo: `proyectos/bitacora-agentes-2026-08-11.md`  
Ruta anterior: `proyectos/dashboard-cxc/bitacora-agentes-dashboard-cxc.md`

Este documento funciona como bitacora general del dia para coordinar agentes, prompts, decisiones y avances dentro de SAAAS Marketing. Dashboard CxC queda como una linea de trabajo dentro de esta bitacora; FlowForge Visual queda como una segunda linea nueva. La regla base es simple: cada agente reporta avances aqui o en su documento asignado, pero no modifica el area de otro agente sin autorizacion.

## Estado general

```mermaid
kanban
  Pendiente
    [Crear carpeta propia para FlowForge Visual]
    [Guardar brief completo de Tesla en documento separado]
  En_progreso
    [Dashboard CxC - auditoria visual y narrativa ejecutiva]
    [FlowForge Visual - arquitectura de interfaz para imagen/video]
    [Coordinacion general - prompts guardados en Markdown]
  Bloqueado
    [Dalton/Boyle y Ampere/Dirac fallaron por capacidad del modelo]
  Hecho
    [Repo identificado: juandroeleven-jpg/SAAAS-Marketing]
    [Bitacora subida a GitHub]
    [Separacion de responsabilidades definida]
    [Prompt maestro de Tesla guardado]
```

## Lineas de trabajo

```mermaid
flowchart TD
    B["Bitacora de agentes<br/>11 de agosto"]

    B --> CXC["Dashboard CxC<br/>Estado: En progreso"]
    B --> FF["FlowForge Visual<br/>Estado: En progreso"]
    B --> COORD["Coordinacion de agentes<br/>Estado: En progreso"]

    CXC --> CXC_OBJ["Objetivo:<br/>Prototipo financiero de cuentas por cobrar,<br/>auditoria visual y narrativa ejecutiva"]
    CXC --> CXC_DOC["Documento esperado:<br/>Auditoria visual, guion ejecutivo,<br/>bitacora de decisiones"]

    FF --> FF_OBJ["Objetivo:<br/>Interfaz para procesos de imagen/video<br/>con agentes, prompts y tableros"]
    FF --> FF_DOC["Documento esperado:<br/>Brief UX, prompt implementador Vercel,<br/>bitacora propia"]

    COORD --> COORD_OBJ["Objetivo:<br/>Evitar que los agentes se pisen<br/>y guardar prompts/avances"]
    COORD --> COORD_DOC["Documento esperado:<br/>Bitacora diaria y documentos por proyecto"]
```

## Agentes

```mermaid
kanban
  En_progreso
    [Dalton / Boyle - Auditor visual CxC]
    [Cicero / Carson - Presentacion ejecutiva]
    [Tesla / Mencius - FlowForge Visual]
  Bloqueado
    [Ampere / Dirac - Agenda y proyecto, bloqueado por capacidad]
  Entregables
    [Dalton: hallazgos visuales, screenshots, mejoras UI]
    [Cicero: historia para jefes, guion demo, KPI y decisiones]
    [Ampere: prioridades, calendario, backlog, seguimiento de repo]
    [Tesla: brief UX, arquitectura, prompt Vercel]
  Limites
    [Dalton no toca logica, datos ni formulas]
    [Cicero no toca codigo de la app]
    [Ampere no toca servicios externos sin permiso]
    [Tesla no toca Dashboard CxC ni APIs externas]
```

## Registro historico

<details>
<summary>2026-08-11 - Identificacion del repositorio</summary>

- Se confirmo autenticacion local de GitHub como `juandroeleven-jpg`.
- Se encontro el repositorio `juandroeleven-jpg/SAAAS-Marketing`.
- Se confirmo que el repo contiene `proyectos/dashboard-cxc/`.
- No se hizo ningun cambio remoto.

</details>

<details>
<summary>2026-08-11 - Contexto funcional del Dashboard CxC</summary>

- El prototipo usa datos 100% ficticios.
- Modulos identificados:
  - Resumen de cartera
  - Aging
  - Clientes prioritarios
  - Forecast simulado
  - Seguimiento de cobros
  - Carga y calidad de datos
- Saldo pendiente mostrado en capturas: `$7,700.00`.
- Buckets vistos:
  - Al dia: `$3,500.00`
  - 1-30 dias: `$0.00`
  - 31-60 dias: `$2,200.00`
  - 61-90 dias: `$2,000.00`
  - 90+ dias: `$0.00`
- Existe una disputa activa que bloquea cobro normal.

</details>

<details>
<summary>2026-08-11 - Regla de no conflicto entre agentes</summary>

Cada agente debe escribir su avance en esta bitacora o en su propio archivo asignado. Nadie debe editar el mismo bloque, componente o documento que otro agente si no hay coordinacion previa.

Subreglas:

1. Dalton/Boyle revisa solo estetica, coherencia visual, contraste, responsive, cortes y capturas.
2. Cicero/Carson trabaja solo narrativa ejecutiva, presentacion, guion y explicacion para jefes.
3. Ampere/Dirac trabaja solo agenda personal, orden del proyecto, prioridades y seguimiento.
4. Ningun agente cambia datos, formulas, supuestos financieros o logica sin autorizacion explicita.

</details>

## Pasos operativos

<details>
<summary>Paso 1 - Conectar/revisar GitHub</summary>

Objetivo: usar el repo `SAAAS-Marketing` como fuente de verdad del proyecto.

Subpasos:

1. Confirmar acceso GitHub con la cuenta correcta.
2. Abrir `https://github.com/juandroeleven-jpg/SAAAS-Marketing`.
3. Revisar la carpeta `proyectos/dashboard-cxc/`.
4. Ubicar documentos existentes antes de crear duplicados.
5. Si se va a escribir en GitHub, definir si se hace commit directo o PR.

Estado actual: repo encontrado y pagina abierta en Codex. Escritura remota pendiente de autorizacion.

</details>

<details>
<summary>Paso 2 - Consolidar avances de agentes</summary>

Objetivo: que cada agente deje evidencia clara de que hizo y que falta.

Subpasos:

1. Pedir a Dalton/Boyle su ultimo reporte visual.
2. Pedir a Cicero/Carson su ultimo guion ejecutivo.
3. Pedir a Ampere/Dirac su plan de agenda y seguimiento.
4. Copiar los avances resumidos en "Registro historico".
5. Mover tarjetas del Kanban segun estado real.

Estado actual: roles definidos; falta consolidar entregables finales de cada agente.

</details>

<details>
<summary>Paso 3 - Definir tablero de proyecto</summary>

Objetivo: tener una vista simple de que esta pendiente, en progreso, bloqueado y hecho.

Subpasos:

1. Usar Mermaid Kanban como tablero principal.
2. Mantener una tarjeta por entregable, no por conversacion larga.
3. Marcar bloqueos solo cuando falta una decision, acceso o autorizacion.
4. Actualizar el tablero al cierre de cada sesion de agente.

Estado actual: tablero inicial creado.

</details>

<details>
<summary>Paso 4 - Preparar documento para GitHub</summary>

Objetivo: que este Markdown pueda vivir dentro del repo y servir como historial.

Subpasos:

1. Guardar este archivo en `proyectos/dashboard-cxc/`.
2. Revisar nombres y enlaces internos.
3. Confirmar con el usuario si se sube a GitHub.
4. Crear rama, commit y PR si se decide no tocar `main` directo.

Estado actual: documento creado localmente.

</details>

## Plantilla para reportes de agente

<details>
<summary>Formato obligatorio de actualizacion</summary>

```markdown
### Actualizacion - NOMBRE_AGENTE - YYYY-MM-DD HH:mm

Estado: Pendiente | En progreso | Bloqueado | Hecho

Avances:
- 

Evidencia:
- Archivo, screenshot, URL o nota

Riesgos:
- 

Proximo paso:
- 
```

</details>

## Proximas decisiones

1. Confirmar si este documento se sube al repo `SAAAS-Marketing`.
2. Confirmar si se sube directo a `main` o mediante una rama y PR.
3. Pedir a los tres agentes que usen este archivo como bitacora unica de avance.

## Nueva linea SAAAS Marketing - Interfaz de automatizacion visual

<details>
<summary>Proceso de verificacion de funcionalidad — automatizacion de creacion de cascos</summary>

**Estado:** Pendiente de definicion y validacion. Esta es una especificacion de trabajo para ChatGPT como agente dentro de la herramienta; no supone una API de agente ni autoriza cambios funcionales todavia.

### Objetivo

Validar y construir por etapas la funcionalidad principal de automatizacion para crear cascos. El primer flujo inicia con un documento que contiene las vistas del casco y termina preparando informacion visual y estructurada para los siguientes procesos de diseno.

### Flujo propuesto (primera iteracion)

1. El usuario carga un PDF con las vistas del casco.
2. La herramienta abre el PDF con el mecanismo que resulte mas eficiente y apropiado para el contexto (navegador/Playwright o procesamiento en codigo), sin fijar aun una implementacion.
3. Se generan dos tipos de capturas de paginas:
   - **Guiadas:** el usuario especifica el elemento o zona que se debe extraer, por ejemplo: “tomar este elemento como fondo del casco”.
   - **No guiadas:** el agente identifica y captura vistas o elementos relevantes sin una seleccion manual previa.
4. Antes de generar arte, existe un proceso previo de analisis de las vistas: identificar el fondo del casco y distinguir los elementos indispensables por vista, como spoiler, visor/elemento frontal, colores, piezas y otros rasgos estructurales.
5. Las imagenes y resultados deben mostrarse visualmente dentro de la interfaz. Cuando se habilite la integracion, se guardaran y renderizaran desde Supabase; se busca conservar la mayor calidad practica, sin prometer aun parametros de calidad, almacenamiento o transformacion.

### Modelo visual corregido

El mapa de procesos, sus limites y el historial Markdown no deben vivir en lienzos separados. Deben coexistir en **un unico lienzo grande** con agrupaciones navegables: al seleccionar una agrupacion, la interfaz hace enfoque/zoom hacia esa zona sin perder el contexto global. El flujo debe poder representarse visualmente con drag-and-drop y nodos conectados.

### Evidencia visual actual

Se capturo la version actual de Vercel en el proyecto **Validar alcance sin API**, incluyendo la tarjeta **Mapa de limites** y el canvas visible al momento de la revision.

![Captura de Validar alcance sin API — Mapa de limites](flowforge-visual/evidencia/2026-08-11-validar-alcance-mapa-limites.png)

Observacion de prueba: al seleccionar **Mapa de limites**, la tarjeta queda activa visualmente, pero el encabezado y el canvas permanecen en **Historial Markdown**. Esto queda registrado como pendiente de validar/corregir en la siguiente ronda; no se altero la aplicacion durante esta toma.

### Kanban interno de pendientes

```mermaid
kanban
  Pendiente
    [Definir contrato de carga de PDF y limites de tamano/formato]
    [Definir criterios para capturas guiadas y no guiadas]
    [Definir taxonomia de elementos del casco por vista]
    [Definir modelo de almacenamiento y renderizado en Supabase]
    [Disenar agrupaciones y zoom dentro de un lienzo unico]
  Validar
    [Corregir sincronizacion entre Mapa de limites y canvas visible]
    [Probar navegacion por enfoque sin perder contexto global]
    [Validar calidad y trazabilidad de imagenes renderizadas]
  Bloqueado
    [No implementar llamadas a API o servicios externos sin autorizacion]
  Hecho
    [Captura de referencia de Validar alcance sin API guardada]
    [Especificacion inicial registrada en la bitacora de agentes]
```

### Limites vigentes

- ChatGPT resuelve estas instrucciones como agente dentro del flujo, no mediante una API de agente ya existente.
- No se implementa en esta etapa carga real de PDF, procesamiento, Supabase ni automatizacion externa.
- No se modifican otras lineas de trabajo, incluido Dashboard CxC, sin una indicacion explicita.

### Primera funcion prioritaria — Mapa de vistas

**Cambio de nombre:** la primera tarea antes llamada **Mapa de limites** pasa a llamarse **Mapa de vistas**. Su objetivo es entender y preservar los componentes originales de un casco a partir de sus vistas de referencia; no es aun un flujo de generacion lifestyle, 3D ni fotorrealista.

**Entrada inicial:** una imagen PNG que contiene las cuatro vistas del casco. El flujo debe mostrar la imagen original grande y, como subproceso visible, recortarla en cuatro vistas separadas. El recorte y sus resultados deben ser visibles en vivo dentro del lienzo y quedar trazables. Para esta tarea simple se evaluara un modelo de vision de bajo costo y un prompt corto; la eleccion concreta de modelo queda pendiente de validar por costo, calidad y disponibilidad.

**Analisis por vista:** el modelo de vision debe describir la imagen y construir nodos conectados a cada vista. Como minimo:

- **Elementos clave:** piezas y rasgos identificables de la vista.
- **Elementos que no pueden variar:** estructura, proporciones, silueta, textura y propiedades fisicas que deben conservarse.
- **Elementos que si pueden variar:** atributos autorizables, como color, iluminacion o elementos de diseno, con sus restricciones.

Ejemplos de restricciones: el visor puede cambiar de color si se autoriza, pero no puede verse mas ancho o corto ni perder las propiedades visuales que definen su densidad; la iluminacion puede cambiar, pero no la textura, geometria ni componentes estructurales del casco. Para esta fase basada en material de Illustrator, las salidas deben mantener el estilo vectorial original y no reinterpretarlo como una imagen lifestyle, 3D o realista.

**Prompt visible y desplegable:** dentro del canvas, cada vista debe incluir un desplegable que revele la instruccion enviada al modelo de vision. El prompt debe pedir una descripcion factual de la vista, identificar componentes y separar de forma explicita lo que puede variar de lo que no puede variar. El usuario debe poder inspeccionar ese prompt sin salir del lienzo.

**Segundo proceso de referencias:** una vez obtenidas las cuatro vistas, se carga un PDF y se extraen capturas de alta calidad de las paginas o elementos de referencia que se indiquen. Para cada vista se crean decisiones visuales separadas y visibles:

1. Una decision dirigida por el usuario: por ejemplo, elemento “boe esponja”, textura o fondo y la ubicacion exacta dentro de la vista.
2. Una decision aleatoria, limitada por instrucciones y por las restricciones de la vista.

Cada decision se representa con una copia anotada de la misma vista: una para marcar con flecha la ubicacion del elemento y otra para señalar el fondo. Estas copias no sustituyen la vista original; sirven como referencias de composicion y deben repetirse para cada vista y elemento necesario.

**Arquitectura de lienzo:** Mapa de vistas, recortes, prompts desplegables, limites, historial Markdown y decisiones de referencia permanecen en un unico lienzo navegable. Cada grupo se enfoca mediante zoom al hacer clic, conservando el mapa global.

### Coordinacion prevista, sin agentes iniciados

No se lanzan agentes con esta entrada. Cuando se autorice la implementacion, el trabajo se separara sin copiar/pegar funcionalidades ni mezclar responsabilidades:

- **Rama principal:** integra la estructura del proyecto y las interfaces ya aprobadas; conserva el contrato comun, datos de prueba y el lienzo unico.
- **Rama de funcionalidad A:** trabaja de forma aislada en carga PNG, recorte visible en cuatro vistas, nodos de analisis y prompt desplegable.
- **Rama de funcionalidad B:** trabaja de forma aislada en carga PDF, capturas de referencia, decisiones dirigidas/aleatorias y anotaciones por vista.

Cada rama debe poder probarse localmente antes de proponer una integracion hacia la rama principal. La integracion se hara por cambios revisables y no mediante copias manuales. Cualquier modificacion de VS/Vercel, Supabase o servicios externos debe ser controlada, documentada y autorizada antes de aplicarse.

</details>

<details>
<summary>2026-08-11 - Nueva tarea: interfaz tipo tablero para procesos de imagen</summary>

Objetivo: crear una app/interfaz en Vercel para organizar procesos de generacion y edicion de imagenes, sin depender de API propia al inicio. ChatGPT se conectaria de forma operativa mediante tareas/agentes y prompts, no mediante integracion API.

Inspiracion visual/funcional recibida:

- Referencia 1: tablero oscuro tipo canvas con nodos conectados, assets, story, prompts e imagen/video gen.
- Referencia 2: interfaz clara tipo proyecto/kanban con columnas, tarjetas, tareas, archivos, responsables y estados.
- Referencia 3: bitacora actual en GitHub con Mermaid, que muestra la necesidad de guardar avances, prompts y decisiones.

Concepto del producto:

- Una interfaz general de procesos visuales.
- Cada proceso puede tener subprocesos.
- Cada subproceso puede tener subventanas.
- Las subventanas internas pueden abrir un tablero de edicion tipo canvas.
- La experiencia debe sentirse como un sistema de produccion visual, no como una lista plana.

Ejemplo de proceso:

1. Proceso principal: crear catalogo.
2. Subproceso: recopilar assets.
3. Subproceso: generar story / concepto.
4. Subproceso: crear prompts.
5. Subproceso: generar imagenes o video.
6. Subproceso interno: tablero de edicion con nodos, conexiones, outputs y versiones.

Regla importante aprendida:

Los prompts enviados a agentes no deben vivir solo en chats. Cada prompt operativo debe guardarse tambien en Markdown, con fecha, agente, objetivo, alcance, archivos permitidos y resultado esperado.

</details>

<details>
<summary>2026-08-11 - Resultado recibido de Tesla: FlowForge Visual</summary>

Tesla propuso el producto provisional **FlowForge Visual**.

Resumen:

- Interfaz web para disenar, operar y documentar procesos visuales de imagen/video.
- Estructura central: `Proceso -> Subproceso -> Ventana -> Tablero -> Outputs/versiones -> Historial de prompts`.
- Primera version sin API propia.
- ChatGPT se usaria mediante tareas/agentes y prompts manuales.
- Todo prompt importante debe guardarse en Markdown.

Entregables propuestos por Tesla:

1. Vista general de procesos tipo canvas oscuro.
2. Vista de proceso con nodos: Assets, Story, Prompts, Image Gen, Video Gen, Review, Publish Prep.
3. Subprocesos y subventanas internas.
4. Tablero kanban interno.
5. Historial Markdown de prompts.
6. Panel de outputs/versiones.
7. Prompt tecnico para futuro agente implementador en Next.js/Vercel.

Proximo paso recomendado:

Crear una carpeta separada para este proyecto:

```text
proyectos/flowforge-visual/
```

Y guardar alli:

- `brief-flowforge-visual.md`
- `prompt-implementador-vercel.md`
- `bitacora-flowforge-visual.md`

</details>

<details>
<summary>Prompt maestro para nuevo agente Tesla</summary>

```text
Trabaja como agente separado para SAAAS Marketing. Tu nombre de trabajo es Tesla.

Tu mision es disenar la primera version conceptual y operativa de una interfaz web para automatizacion de procesos visuales de imagen/video.

Contexto:
- Esto pertenece al repo SAAAS Marketing, no al Dashboard CxC.
- La app se quiere desplegar rapidamente en Vercel.
- Al inicio no debe depender de una API propia.
- ChatGPT se usaria mediante tareas/agentes y prompts, no mediante integracion API directa.
- Todo prompt importante que se envie a agentes debe quedar guardado en Markdown como historial del proyecto.

Referencias visuales:
- Una referencia oscura tipo canvas con nodos conectados: Assets -> Story -> Prompts -> Img/Video Gen.
- Una referencia clara tipo kanban/proyecto con columnas, tarjetas, archivos, estados, responsables y tareas.
- La idea de proceso/subproceso/subventana/tablero interno debe ser central.

Debes entregar:
1. Nombre provisional del producto/interfaz.
2. Descripcion corta del problema que resuelve.
3. Arquitectura UX:
   - vista general de procesos;
   - vista de proceso;
   - subprocesos;
   - subventanas;
   - tablero interno de edicion;
   - historial de prompts;
   - panel de outputs/versiones.
4. Modelo de navegacion tipo "proceso -> subproceso -> ventana -> tablero".
5. Componentes principales de la interfaz.
6. Mermaid con flujo del proceso.
7. Mermaid tipo kanban con estado inicial del proyecto.
8. Prompt tecnico para un futuro agente implementador que cree el prototipo en Vercel.
9. Riesgos y limites: no prometer automatizacion real sin API, no tocar servicios externos sin autorizacion, no mezclar con Dashboard CxC.

No modifiques archivos, GitHub, calendario, Gmail ni servicios externos sin autorizacion. Puedes proponer el Markdown que deberia guardarse y reportar tu avance usando la plantilla de bitacora.
```

</details>

### Actualizacion - Cicero / Carson - 2026-08-11 13:00

Estado: En progreso

Avances:
- Se definio la narrativa ejecutiva para jefatura alrededor de una idea central: el Dashboard CxC convierte la cartera en prioridades de gestion y no solo en un reporte.
- Problema a presentar: informacion dispersa, reaccion tardia ante vencimientos, seguimiento manual y poca visibilidad sobre riesgo, responsables y compromisos.
- Solucion a presentar: una vista integrada de resumen de cartera, aging, clientes prioritarios, forecast simulado, seguimiento de cobros y carga/calidad de datos.
- KPI propuestos para la conversacion ejecutiva: saldo pendiente, cartera vencida, porcentaje vencido, aging por bucket, concentracion en clientes prioritarios, recaudo, cumplimiento de compromisos y calidad/oportunidad de datos. Las definiciones finales deben validarse antes de convertirlos en KPI oficiales.
- Beneficio ejecutivo: mejorar visibilidad, priorizacion, velocidad de gestion y control del avance de cobranza, con foco en recuperacion de caja y reduccion de riesgo.
- Limites declarados: el prototipo usa datos 100% ficticios, el forecast es simulado, la disputa activa puede bloquear el cobro normal y el tablero depende de la calidad y frecuencia de actualizacion de las fuentes.
- Guion de demo propuesto: iniciar en Resumen de cartera, explicar el saldo pendiente de `$7,700.00`, recorrer los buckets de aging, bajar a Clientes prioritarios, mostrar la disputa y el Seguimiento de cobros, y cerrar con Forecast y Calidad de datos.
- Decisiones solicitadas a jefatura: validar KPI y definiciones, confirmar fuentes y frecuencia de actualizacion, acordar criterios de prioridad/escalamiento, nombrar responsables y autorizar un piloto con datos reales.

Evidencia:
- Contexto funcional registrado en esta bitacora, seccion "2026-08-11 - Contexto funcional del Dashboard CxC".
- Modulos identificados: Resumen de cartera, Aging, Clientes prioritarios, Forecast simulado, Seguimiento de cobros y Carga y calidad de datos.
- Cifras de referencia registradas: saldo pendiente `$7,700.00`; Al dia `$3,500.00`; 31-60 dias `$2,200.00`; 61-90 dias `$2,000.00`; 1-30 y 90+ en `$0.00`.

Riesgos:
- Presentar datos ficticios como resultados reales podria generar una conclusion incorrecta sobre la efectividad de cobranza.
- No se deben prometer automatizaciones, precision de forecast ni integraciones que no esten confirmadas en el prototipo.
- Sin definiciones comunes de KPI, jefatura podria interpretar de forma distinta vencido, recaudo, promesa cumplida o calidad de datos.

Proximo paso:
- Convertir esta narrativa en un guion final de 5-7 minutos y una lista de decisiones para la reunion, una vez confirmados los KPI visibles y el flujo exacto de la demo.

## Cierres y avances desplegables

<details>
<summary>2026-08-11 — Tesla / Mencius — FlowForge Visual (terminado)</summary>

**Estado:** Terminado — primera versión funcional local.

**Qué construyó:**

- Un tablero original de proyecto “Mobile Design” con columnas Backlog, New e In Progress.
- Una navegación funcional hacia **Design Project**.
- Un lienzo de edición blanco con puntos negros tenues y nodos conectados: Assets, Story, Prompts, Image/Video Gen y Review.
- Edición directa de Story y Prompts, además de movimiento mediante arrastrar y soltar de nodos y tarjetas.
- Placeholders originales para resultados experimentales; no usa API ni conexión real a ChatGPT.
- Documentación de prompt y bitácora específica del proyecto en Markdown.

**Archivos entregados:**

- `proyectos/flowforge-visual/app/index.html`
- `proyectos/flowforge-visual/app/design-project.html`
- `proyectos/flowforge-visual/app/styles.css`
- `proyectos/flowforge-visual/app/shared.js`
- `proyectos/flowforge-visual/app/flow.js`
- `proyectos/flowforge-visual/README.md`
- `proyectos/flowforge-visual/prompts/2026-08-11-prompt-implementacion.md`
- `proyectos/flowforge-visual/bitacora/2026-08-11-avance-tesla.md`

**Validación realizada:** sintaxis de JavaScript comprobada con `node --check`; sin referencias a APIs ni servicios externos.

**Siguiente paso:** revisión visual local y, si se aprueba, integrar el proyecto en el repositorio remoto y preparar su despliegue.

</details>

<details>
<summary>Plantilla obligatoria — Agente de login (pendiente de asignar)</summary>

**Estado:** No hay un agente de login identificado como activo en esta bitácora todavía.

Cuando se asigne, deberá cerrar su tarea aquí indicando: qué pantalla creó, flujo de acceso, archivos tocados, cómo se probó, límites de seguridad y el siguiente paso. No debe declarar un login real, autenticación ni almacenamiento de contraseñas sin autorización e implementación específica.

</details>
