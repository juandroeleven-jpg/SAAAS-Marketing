# Índice maestro de prompts — Catálogo EDGE/EDGEPRO (Simulaciones 10-19)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md)

**Qué es esto:** punto de entrada único a **todos** los prompts ya armados en las Simulaciones 10 a 19 (los 7 casos con nombre confirmado del catálogo — Kratos, Vortex, Hero, Shanghai, Stellar, Shift, Evolution 929 — más los 3 cascos sin nombre confirmado: carbono/moteado camo, flip-up 4 colores, carbono glossy 4 colores). No agrega prompts nuevos ni cambia ningún contenido de los 10 archivos originales — solo organiza y enlaza lo que ya existe, para no tener que abrir los 10 archivos uno por uno.

**Cómo leer los links:** cada fila enlaza al archivo del caso y, cuando el formato de encabezados del documento original lo permite, a un anchor de esa sección exacta. Los anchors son de mejor esfuerzo (slug estilo GitHub a partir del título de la sección) — si el salto no cae exactamente sobre el texto, el nombre de sección indicado en la fila alcanza para ubicarlo con buscar-en-página (Ctrl/Cmd+F) dentro del archivo.

**Convención de estado usada en este índice** (mapeada a los estados reales que documenta cada archivo):
- ✅ **listo para usar** — el texto del prompt está confirmado/corregido y no tiene un intento de generación fallido pendiente de resolver (incluye prompts nunca corridos todavía, listos para mandar al generador).
- ⚠️ **con reintento pendiente** — ya se generó una imagen con este prompt (o una versión anterior) y falló total o parcialmente; hay un prompt corregido para reintentar.
- 🔴 **bloqueado** — no se puede generar (o no se puede dar por definitivo) porque falta un dato, una decisión o una confirmación del usuario/fabricante.

---

## Pendientes de confirmación del usuario

Todo lo que quedó abierto esperando respuesta del usuario o del fabricante, juntado de los 10 archivos, para no tener que releerlos. Agrupado por caso.

### Kratos — [`simulacion-10-kratos-verificacion.md`](simulacion-10-kratos-verificacion.md)
1. Subir los 2 archivos originales (ficha + excel) como adjunto real, no solo pegados en el chat.
2. Confirmar con fabricante/producto si Kratos es full face o modular, si tiene liberación rápida de visor, luz LED y doble visera.
3. Resolver la discrepancia de certificación: ficha dice "DOT FNVSS 510", excel dice "DOT & ECE 22.06".
4. Confirmar visualmente si el ícono de "Hebilla micrométrica" en la ficha corregida tiene un tache/X superpuesto — no se puede verificar solo transcribiendo texto.
5. Decidir si se incorporan a la ficha las 4 features confirmadas por el excel pero nunca reclamadas (Con Pinlock, Master Box, Inner Box, y sobre todo **Con maletín de lujo**).
6. Resolver el rectángulo negro que persiste incluso en la versión "corregida" de la ficha.
7. Confirmar naming de marca: la ficha dice "EDGE", el excel dice "EDGEPRO" — no se sabe si es error o acortamiento comercial.

### Vortex — [`simulacion-11-vortex-verificacion.md`](simulacion-11-vortex-verificacion.md)
8. Confirmar qué va en el rectángulo negro de la ficha Vortex (¿foto lifestyle faltante, como en Kratos, o elemento intencional?).
9. Subir la imagen de la ficha Vortex y el excel como adjunto real.
10. Confirmar si "FNVSS 510" (agregado en el bloque de certificación de la ficha Vortex) tiene respaldo en alguna fuente — el excel nunca escribe ese número, solo "DOT & ECE 22.06".

### Hero — [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md)
11. Completar con el fabricante las 9 celdas "sin dato" del excel para Hero antes de generar cualquier imagen nueva de specs.
12. Resolver "Diseño modular" vs. "Open Face" confirmado en el excel — son categorías excluyentes, no solo falta de dato.
13. Resolver el tipo de hebilla: la ficha dice "micrométrica", el excel confirma "doble D" — son piezas físicas distintas.
14. Confirmar qué va en el rectángulo negro de la ficha Hero (mismo patrón que Vortex).
15. Confirmar si "Material exterior ABS alta resistencia" vacío para Hero es un dato real del producto o un olvido de carga del excel (es la única marca del catálogo sin X ahí).

### Shanghai — [`simulacion-13-shanghai-verificacion.md`](simulacion-13-shanghai-verificacion.md)
16. Resolver certificación: la ficha dice "DOT FNVSS 510" (sin ECE), el excel dice "DOT & ECE" (sin el número 22.06) — ninguna de las dos fuentes está completa.
17. Revisar si el rectángulo negro (3er caso seguido: Vortex, Hero, Shanghai) es un problema del template maestro del catálogo, no de cada ficha individual.
18. Decidir si el grid de íconos de Shanghai queda en 4 ítems o se completa con un ítem de empaque (Master Box / Inner Box) — no hay más features físicas confirmadas disponibles.

### Stellar — [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md)
19. Completar la certificación en la ficha Stellar — falta "& ECE 22.06", solo dice "DOT FNVSS 510".
20. Subir la ficha Stellar real y confirmar los 2 prompts corregidos antes de generar.

### Shift — [`simulacion-15-shift-verificacion.md`](simulacion-15-shift-verificacion.md)
21. Completar la certificación en la ficha Shift — falta "& ECE 22.06", solo dice "DOT FNVSS 510".
22. Confirmar si el ícono tachado de "hebilla micrométrica" en la ficha real de Shift es intencional (comunicar "no disponible") o un reciclado de plantilla sin verificar el dato.
23. Revisar el rectángulo negro a nivel de proceso/template — ya es el 4to caso seguido (Vortex, Hero, Shanghai, Shift), no un caso aislado.

### Evolution 929 — [`simulacion-16-evolution929-verificacion.md`](simulacion-16-evolution929-verificacion.md)
24. Subir la ficha real de Evolution 929 y el excel (tab EDGE) como adjunto real.
25. Confirmar con el fabricante el número de norma "FNVSS 510" — el excel solo confirma "DOT", sin número específico ni ECE.

### Casco carbono/camo sin nombre confirmado — [`simulacion-17-casco-carbono-camo.md`](simulacion-17-casco-carbono-camo.md)
26. **Confirmar a qué modelo del catálogo corresponde este casco** — no asumido en ninguna parte de esta simulación.
27. Subir la foto de referencia real del casco de carbono forjado como adjunto real.

### Casco flip-up 4 colores sin nombre confirmado — [`simulacion-18-casco-flipup-4-colores.md`](simulacion-18-casco-flipup-4-colores.md)
28. **Confirmar a qué modelo del catálogo corresponde este casco** — no asumido en ninguna parte de esta simulación.
29. Subir la foto de referencia real del casco flip-up como adjunto real.

### Casco carbono glossy 4 colores sin nombre confirmado — [`simulacion-19-casco-carbono-glossy-4-colores.md`](simulacion-19-casco-carbono-glossy-4-colores.md)
30. Confirmar la división de color en las 2 variantes de dos tonos (Variante 2 beige/chocolate y Variante 4 blanco/gris) — se asumió calota arriba / mentonera abajo, sin confirmación explícita del usuario.
31. **Confirmar a qué modelo del catálogo corresponde este casco** — no asumido en ninguna parte de esta simulación.
32. Subir la foto de referencia real del casco carbono glossy como adjunto real.

**Total: 32 puntos pendientes de confirmación** repartidos en los 10 casos (el detalle completo de cada uno está en la sección "🔴 Pendiente de tu parte" / "Qué hay que hacer" del archivo correspondiente).

---

## Índice de prompts por caso

### Kratos (Simulación 10) — Tipo C, ficha vs. excel
[`simulacion-10-kratos-verificacion.md`](simulacion-10-kratos-verificacion.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt A — Tarjeta HOMOLOGACIÓN (corregido, 6 ítems) | Homologación | ⚠️ con reintento pendiente — Intento 1 duplicó un ítem (7 líneas en vez de 6); el usuario mandó una versión ya corregida cuyo texto verificó 100% contra el excel, pero la ficha completa sigue sin ser aprobable por el rectángulo negro sin resolver, el ícono de hebilla sin verificar visualmente y el typo heredado "HOMOLOGACÓN" | [`simulacion-10-kratos-verificacion.md`](simulacion-10-kratos-verificacion.md), sección `## Prompts corregidos (Agente Generador, tras auditoría)` |
| Prompt B — Grid de íconos (corregido, 2x3, 6 ítems) | Grid íconos | ✅ listo para usar — Intento 1 aprobado, sin duplicados ni ítems extra | [`simulacion-10-kratos-verificacion.md`](simulacion-10-kratos-verificacion.md), sección `## Prompts corregidos (Agente Generador, tras auditoría)` |

### Vortex (Simulación 11) — Tipo C, ficha vs. excel + foto lifestyle
[`simulacion-11-vortex-verificacion.md`](simulacion-11-vortex-verificacion.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt A — Tarjeta HOMOLOGACIÓN (confirmado, sin cambios) | Homologación | ⚠️ con reintento pendiente — texto 12/12 correcto, pero el Intento 1 de generación sustituyó un ítem por el de Kratos (contaminación cruzada entre generaciones de la misma sesión); reintentar en sesión de generación aislada | [`simulacion-11-vortex-verificacion.md`](simulacion-11-vortex-verificacion.md), sección `## Prompts confirmados (sin cambios — ya pasaron la auditoría)` |
| Prompt B — Grid de íconos (confirmado, sin cambios) | Grid íconos | ⚠️ con reintento pendiente — Intento 1: ícono de "Hebilla micrométrica" salió tachado con X roja + 2 etiquetas de texto truncadas ("alta resistencia" faltante) | [`simulacion-11-vortex-verificacion.md`](simulacion-11-vortex-verificacion.md), sección `## Prompts confirmados (sin cambios — ya pasaron la auditoría)` |
| Foto lifestyle — Intento 1 (mujer, campera blanca "STREET", perfil 90°) | Foto lifestyle | ⚠️ con reintento pendiente — casco salió con mentonera más alargada/puntiaguda que el real; superado por el Intento 2 | [`simulacion-11-vortex-verificacion.md`](simulacion-11-vortex-verificacion.md), sección `## Sub-caso — Foto lifestyle inspirada`, subsección `### Intento 1 — resultado auditado` |
| Foto lifestyle — Intento 2 (mismo prompt + bloqueo de proporción de mentonera) | Foto lifestyle | ✅ listo para usar — corrige el defecto del Intento 1, todavía no corrido | [`simulacion-11-vortex-verificacion.md`](simulacion-11-vortex-verificacion.md), sección `## Sub-caso — Foto lifestyle inspirada`, subsección `### Intento 2 — prompt corregido con bloqueo de proporción de mentonera` |

### Hero (Simulación 12) — Tipo C, ficha vs. excel (bloqueada) + foto lifestyle
[`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt A — Tarjeta HOMOLOGACIÓN | Homologación | 🔴 bloqueado — no llegó a escribirse texto de prompt; solo 1 de 6 ítems originales está confirmado con dato ("Liner desmontable y lavable"), los otros 5 están vacíos en el excel | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `### Cómo adaptar los 2 prompts de generación para Hero` |
| Prompt B — Grid de íconos, versión reducida 2x2 (4 ítems, no 6) | Grid íconos | 🔴 bloqueado (parcial) — prompt completo y listo para los 4 ítems confirmados (Canal para lentes, Bluetooth, Kit de mecanismo visor, Hebilla doble D), pero la versión completa de 6 sigue bloqueada por falta de dato en el excel | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `## Prompts del catálogo (Agente Generador) — A bloqueado, B reducido a 4 ítems` |
| Foto lifestyle — Intento 1 (contrapicado, inspirado en referencia ajena) | Foto lifestyle | ⚠️ con reintento pendiente — formato vertical en vez de horizontal, ángulo 3/4 en vez de perfil, degradé bronce/dorado inexistente en el casco real, ventilación con forma distinta | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `## Sub-caso — Foto lifestyle inspirada`, subsección `### Intento 1 — resultado auditado` |
| Foto lifestyle — Intento 2 (perfil lateral, corrige color/ventilación) | Foto lifestyle | ✅ listo para usar — corrige los 4 defectos del Intento 1, todavía no corrido | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `### Intento 2 — prompt corregido` |
| Foto lifestyle — Intento 3 (nueva referencia de estilo, mood urbano) | Foto lifestyle | ✅ listo para usar — mismo casco, cambia solo la referencia de mood/vestuario tomada | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `### Intento 3 — mismo casco, nueva referencia de estilo (moody urbano)` |
| Foto lifestyle — Intento 4 (nocturno urbano, sin adjuntar foto de referencia) | Foto lifestyle | ✅ listo para usar — el usuario confirmó que el texto de este prompt "quedó muy bien"; imagen aún no generada/auditada | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `### Intento 4 — mismo casco, mood/iluminación nocturna descrita SIN adjuntar la foto de referencia` |
| Foto lifestyle — Intento 5 (variante diurna del Intento 4) | Foto lifestyle | ✅ listo para usar — mismo prompt del Intento 4 aprobado por el usuario, solo cambia el bloque de iluminación de noche a día | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `### Intento 5 — variante diurna del Intento 4` |

### Shanghai (Simulación 13) — Tipo C, ficha vs. excel (otro tab)
[`simulacion-13-shanghai-verificacion.md`](simulacion-13-shanghai-verificacion.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt A — Homologación Shanghai (6/6, completo) | Homologación | ✅ listo para usar — todavía no corrido | [`simulacion-13-shanghai-verificacion.md`](simulacion-13-shanghai-verificacion.md), sección `### Prompts corregidos` |
| Prompt B — Grid de íconos Shanghai (2x2, 4/6 ítems) | Grid íconos | 🔴 bloqueado (parcial) — solo 4 de 6 ítems tienen feature física confirmada; falta decidir si se completa con un ítem de empaque o queda en 4 (ver pendiente #18) | [`simulacion-13-shanghai-verificacion.md`](simulacion-13-shanghai-verificacion.md), sección `### Prompts corregidos` |

### Stellar (Simulación 14) — Tipo C, ficha vs. excel + 4 variantes de color + foto playa
[`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt A — Homologación Stellar (6/6, completo) | Homologación | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `### Prompts corregidos` |
| Prompt B — Grid de íconos Stellar (2x3, 6/6, incluye "Doble visera" real) | Grid íconos | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `### Prompts corregidos` |
| Variante 1 — Blanco + azul oscuro, visera sin cambios | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `## Sub-caso — 4 variantes de color` |
| Variante 2 — Gris total, visera ahumada azul | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `## Sub-caso — 4 variantes de color` |
| Variante 3 — Morado pastel + detalles rosados | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `## Sub-caso — 4 variantes de color` |
| Variante 4 — Azul oscuro brillante/glossy (único que cambia de mate a glossy) | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `## Sub-caso — 4 variantes de color` |
| Foto lifestyle en la playa, ultra realista, golden hour | Foto lifestyle | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `## Sub-caso — Foto lifestyle en la playa, ultra realista, luz cálida` |

### Shift (Simulación 15) — Tipo C, ficha vs. excel
[`simulacion-15-shift-verificacion.md`](simulacion-15-shift-verificacion.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt A — Homologación Shift (6/6, completo) | Homologación | ✅ listo para usar — todavía no corrido | [`simulacion-15-shift-verificacion.md`](simulacion-15-shift-verificacion.md), sección `### Prompts corregidos` |
| Prompt B — Grid de íconos Shift (2x3, 6/6, "Hebilla micrométrica" reemplazada por "Hebilla doble D") | Grid íconos | ✅ listo para usar — todavía no corrido | [`simulacion-15-shift-verificacion.md`](simulacion-15-shift-verificacion.md), sección `### Prompts corregidos` |

### Evolution 929 (Simulación 16) — Tipo C, ficha vs. excel (tab EDGE)
[`simulacion-16-evolution929-verificacion.md`](simulacion-16-evolution929-verificacion.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt A — Homologación Evolution 929 (6/6, completo, certificación "DOT" solo) | Homologación | ✅ listo para usar — todavía no corrido | [`simulacion-16-evolution929-verificacion.md`](simulacion-16-evolution929-verificacion.md), sección `### Prompts corregidos` |
| Prompt B — Grid de íconos Evolution 929 (2x3, 6/6, incluye "Diseño modular" real por ser Flip Up) | Grid íconos | ✅ listo para usar — todavía no corrido | [`simulacion-16-evolution929-verificacion.md`](simulacion-16-evolution929-verificacion.md), sección `### Prompts corregidos` |

### Casco carbono/camo sin nombre confirmado (Simulación 17) — Tipo A, moteado real recoloreado + foto lifestyle
[`simulacion-17-casco-carbono-camo.md`](simulacion-17-casco-carbono-camo.md) — ⚠️ ver pendiente #26, modelo sin confirmar

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Variante 1 — Moteado real recoloreado gris + turquesa | Variantes de color | ✅ listo para usar — nunca corrido con este prompt | [`simulacion-17-casco-carbono-camo.md`](simulacion-17-casco-carbono-camo.md), sección `### Corrección 2 — no es un camuflaje militar inventado...` |
| Variante 2 — Moteado real recoloreado gris + rojo | Variantes de color | ⚠️ con reintento pendiente — ya se corrió una vez en Gemini con un prompt viejo ("camuflaje militar" mal interpretado); reintentar con el prompt corregido de esta sección | [`simulacion-17-casco-carbono-camo.md`](simulacion-17-casco-carbono-camo.md), sección `### Corrección 2 — no es un camuflaje militar inventado...` |
| Variante 3 — Moteado real recoloreado blanco + negro, alto contraste | Variantes de color | ✅ listo para usar — nunca corrido con este prompt | [`simulacion-17-casco-carbono-camo.md`](simulacion-17-casco-carbono-camo.md), sección `### Corrección 2 — no es un camuflaje militar inventado...` |
| Variante 4 — Moteado real recoloreado azul claro + azul oscuro | Variantes de color | ✅ listo para usar — nunca corrido con este prompt | [`simulacion-17-casco-carbono-camo.md`](simulacion-17-casco-carbono-camo.md), sección `### Corrección 2 — no es un camuflaje militar inventado...` |
| Foto lifestyle — fondo degradado atardecer (violeta→naranja), perfil completo | Foto lifestyle | ✅ listo para usar — todavía no corrido | [`simulacion-17-casco-carbono-camo.md`](simulacion-17-casco-carbono-camo.md), sección `## Sub-caso — Foto lifestyle con fondo degradado atardecer` |

### Casco flip-up 4 colores sin nombre confirmado (Simulación 18) — Tipo A, color de carcasa + tinte de visor
[`simulacion-18-casco-flipup-4-colores.md`](simulacion-18-casco-flipup-4-colores.md) — ⚠️ ver pendiente #28, modelo sin confirmar

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Variante 1 — Amarillo mate + visor azul | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-18-casco-flipup-4-colores.md`](simulacion-18-casco-flipup-4-colores.md), primer bloque de prompts del documento |
| Variante 2 — Gris + visor rojo | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-18-casco-flipup-4-colores.md`](simulacion-18-casco-flipup-4-colores.md), primer bloque de prompts del documento |
| Variante 3 — Blanco + visor azul | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-18-casco-flipup-4-colores.md`](simulacion-18-casco-flipup-4-colores.md), primer bloque de prompts del documento |
| Variante 4 — Cromado rosado + visor azul | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-18-casco-flipup-4-colores.md`](simulacion-18-casco-flipup-4-colores.md), primer bloque de prompts del documento |

### Casco carbono glossy 4 colores sin nombre confirmado (Simulación 19) — Tipo A, color + tejido hexagonal + brillo intactos
[`simulacion-19-casco-carbono-glossy-4-colores.md`](simulacion-19-casco-carbono-glossy-4-colores.md) — ⚠️ ver pendiente #31, modelo sin confirmar

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Variante 1 — Rosa pastel | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-19-casco-carbono-glossy-4-colores.md`](simulacion-19-casco-carbono-glossy-4-colores.md), primer bloque de prompts del documento |
| Variante 2 — Beige (calota) + chocolate (mentonera), dos tonos | Variantes de color | 🔴 bloqueado — división de color calota/mentonera asumida, no confirmada por el usuario (ver pendiente #30) | [`simulacion-19-casco-carbono-glossy-4-colores.md`](simulacion-19-casco-carbono-glossy-4-colores.md), primer bloque de prompts del documento |
| Variante 3 — Azul oscuro | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-19-casco-carbono-glossy-4-colores.md`](simulacion-19-casco-carbono-glossy-4-colores.md), primer bloque de prompts del documento |
| Variante 4 — Blanco (calota) + gris (mentonera), dos tonos | Variantes de color | 🔴 bloqueado — misma división de color sin confirmar que la Variante 2 (ver pendiente #30) | [`simulacion-19-casco-carbono-glossy-4-colores.md`](simulacion-19-casco-carbono-glossy-4-colores.md), primer bloque de prompts del documento |

---

## Casco adventure/dual-sport (blanco → negro mate) — Simulación 20

Doble visera (externa iridiscente dorada/violeta + interna ahumada), color original blanco perla, logo EDGE. **Modelo sin nombre confirmado.** 4 prompts, uno por vista, tarea única cada uno: solo cambia blanco→negro mate, todo lo demás (ambas viseras, ventilaciones, logo, geometría) 100% intacto.

[`simulacion-20-casco-adventure-blanco-a-negro.md`](simulacion-20-casco-adventure-blanco-a-negro.md) — ⚠️ modelo sin confirmar (ver pendientes)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt 1 — Vista 3/4 abierta (visera externa levantada) | Recolor por vista | ✅ listo para usar — todavía no corrido | `simulacion-20-casco-adventure-blanco-a-negro.md` |
| Prompt 2 — Vista 3/4 lateral (casco cerrado) | Recolor por vista | ✅ listo para usar — todavía no corrido | `simulacion-20-casco-adventure-blanco-a-negro.md` |
| Prompt 3 — Vista superior | Recolor por vista | ✅ listo para usar — todavía no corrido | `simulacion-20-casco-adventure-blanco-a-negro.md` |
| Prompt 4 — Vista frontal | Recolor por vista | ✅ listo para usar — todavía no corrido | `simulacion-20-casco-adventure-blanco-a-negro.md` |

---

## Boston (EDGE) — Simulación 21

Primer caso con **nombre de modelo confirmado por el usuario**. Full face, negro mate, panel lateral glossy con LEDs rojas de freno, cover de carbono en el pivote. 4 variantes de color + tinte de visor.

[`simulacion-21-boston-4-colores.md`](simulacion-21-boston-4-colores.md) — ⚠️ confirmar si es Boston o Boston 4.0, y si el panel LED/cover de carbono cambia de color

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Variante 1 — Azul oscuro mate + visor celeste transparente | Variantes de color | ✅ listo para usar — todavía no corrido | `simulacion-21-boston-4-colores.md` |
| Variante 2 — Rojo brillante + visor negro | Variantes de color | ✅ listo para usar — todavía no corrido | `simulacion-21-boston-4-colores.md` |
| Variante 3 — Gris claro + visor azul oscuro transparente | Variantes de color | ✅ listo para usar — todavía no corrido | `simulacion-21-boston-4-colores.md` |
| Variante 4 — Morado mate + visor rojo | Variantes de color | ✅ listo para usar — todavía no corrido | `simulacion-21-boston-4-colores.md` |

---

## Casco negro mate + visera dorada iridiscente — Simulación 22

Full face negro mate, aleta lateral tipo tiburón, visera dorada/ámbar iridiscente con degradé azul-violeta. **Modelo sin nombre confirmado.** 4 variantes de color de carcasa, visera sin cambios en todas.

[`simulacion-22-casco-dorado-4-colores.md`](simulacion-22-casco-dorado-4-colores.md) — ⚠️ confirmar si "gris" y "gris mate" eran dos tonos distintos o el mismo pedido dos veces

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Variante 1 — Celeste claro | Variantes de color | ✅ listo para usar — todavía no corrido | `simulacion-22-casco-dorado-4-colores.md` |
| Variante 2 — Gris medio | Variantes de color | ⚠️ tono asumido, confirmar | `simulacion-22-casco-dorado-4-colores.md` |
| Variante 3 — Rosado neón | Variantes de color | ✅ listo para usar — todavía no corrido | `simulacion-22-casco-dorado-4-colores.md` |
| Variante 4 — Gris mate oscuro | Variantes de color | ⚠️ tono asumido, confirmar | `simulacion-22-casco-dorado-4-colores.md` |

---

## Casco adventure/motocross con pico solar — Simulación 23

Negro mate, pico/visera solar, mentonera con ventilaciones, acolchado interior naranja. **Modelo sin nombre confirmado.** 4 variantes, 3 de dos tonos (carcasa + "detalles" — división asumida, sin confirmar).

[`simulacion-23-casco-adventure-pico-4-colores.md`](simulacion-23-casco-adventure-pico-4-colores.md) — ⚠️ confirmar qué piezas exactas son "los detalles"

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Variante 1 — Blanco + detalles beige | Variantes de color | ⚠️ división de "detalles" asumida, confirmar | `simulacion-23-casco-adventure-pico-4-colores.md` |
| Variante 2 — Gris + detalles azul oscuro | Variantes de color | ⚠️ división de "detalles" asumida, confirmar | `simulacion-23-casco-adventure-pico-4-colores.md` |
| Variante 3 — Verde claro + detalles chocolate | Variantes de color | ⚠️ división de "detalles" asumida, confirmar | `simulacion-23-casco-adventure-pico-4-colores.md` |
| Variante 4 — Rojo mate (color único) | Variantes de color | ✅ listo para usar — todavía no corrido | `simulacion-23-casco-adventure-pico-4-colores.md` |

---

## Casco EDGE flip-up — quitar stickers/logos — Simulación 24

Modular/flip-up marca EDGE, negro mate, cromado en el pico, acolchado rojo. **Modelo sin nombre confirmado.** Primer caso de tipo "limpieza de producto" (no cambio de color): sacar todos los stickers/logos/etiquetas, preservar el resto 100%. 3 vistas (trasera, 3/4 lateral, frontal).

[`simulacion-24-edge-flipup-quitar-stickers.md`](simulacion-24-edge-flipup-quitar-stickers.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt 1 — Vista trasera (sacar logo EDGE + sticker DOT) | Limpieza de producto | ✅ listo para usar — todavía no corrido | `simulacion-24-edge-flipup-quitar-stickers.md` |
| Prompt 2 — Vista 3/4 lateral (sacar cualquier logo visible) | Limpieza de producto | ✅ listo para usar — todavía no corrido | `simulacion-24-edge-flipup-quitar-stickers.md` |
| Prompt 3 — Vista frontal (sacar logo calota + sticker de visera) | Limpieza de producto | ✅ listo para usar — todavía no corrido | `simulacion-24-edge-flipup-quitar-stickers.md` |

---

## Resumen numérico

| Caso | Prompts indexados | ✅ Listo | ⚠️ Con reintento | 🔴 Bloqueado |
|---|---|---|---|---|
| Kratos | 2 | 1 | 1 | 0 |
| Vortex | 4 | 2 | 2 | 0 |
| Hero | 7 | 5 | 1 | 1 |
| Shanghai | 2 | 1 | 0 | 1 |
| Stellar | 7 | 7 | 0 | 0 |
| Shift | 2 | 2 | 0 | 0 |
| Evolution 929 | 2 | 2 | 0 | 0 |
| Casco carbono/camo | 5 | 4 | 1 | 0 |
| Casco flip-up | 4 | 4 | 0 | 0 |
| Casco carbono glossy | 4 | 2 | 0 | 2 |
| Casco adventure (blanco→negro) | 4 | 4 | 0 | 0 |
| Boston | 4 | 4 | 0 | 0 |
| Casco dorado iridiscente | 4 | 2 | 2 | 0 |
| Casco adventure con pico | 4 | 1 | 3 | 0 |
| Casco EDGE flip-up (quitar stickers) | 3 | 3 | 0 | 0 |
| **Total** | **58** | **44** | **10** | **4** |

---

**Última actualización:** 2026-07-28 · índice maestro armado a pedido explícito del usuario para organizar todos los prompts de las Simulaciones 10-19 en un único punto de entrada, sin modificar el contenido de ninguno de los 10 archivos originales.
