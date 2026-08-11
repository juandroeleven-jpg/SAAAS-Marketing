# FlowForge Visual

Versión conceptual y operativa inicial creada por Tesla para SAAAS Marketing.

## Qué contiene

- `app/index.html`: portafolio de proyectos visuales con estado y resumen.
- `app/design-project.html`: Visual Flow del proyecto seleccionado, con microtablero de tareas y canvas por tarea.
- `app/styles.css`: diseño visual propio, limpio y responsive.
- `app/shared.js`: comandos mock sin conexión externa.
- `app/flow.js`: datos locales de proyectos/tareas, carga de canvas, movimiento de nodos, edición y zoom.
- `prompts/`: historial Markdown de prompts importantes.
- `bitacora/`: avances del proyecto.

## Cómo abrir

Abrir `app/index.html` en el navegador o servir la carpeta `app` como sitio estático. Desde el portafolio se puede entrar a cada proyecto mediante `design-project.html?project=...`.

## Modelo actual

Portafolio -> Proyecto -> Visual Flow -> Tarea seleccionada -> Canvas propio -> Subtareas como nodos.

## Límites actuales

- No usa API propia.
- No conecta con ChatGPT ni otros servicios externos.
- Los comandos son mocks explícitos para futura integración autorizada.
- No pertenece a Dashboard CxC.
