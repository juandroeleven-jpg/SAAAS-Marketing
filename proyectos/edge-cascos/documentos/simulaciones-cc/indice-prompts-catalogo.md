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
11. Completar con el fabricante las 9 celdas "sin dato" del excel para Hero antes de generar la tarjeta de homologación. (Nota: durante la sesión se creyó por un momento que "Cubre barbilla" y "Cubre nariz" estaban confirmadas, por una lectura errónea de una captura de baja resolución; una captura nítida posterior mostró que están vacías — ver la corrección en el archivo del caso.)
12. Resolver "Diseño modular" vs. "Open Face" confirmado en el excel — son categorías excluyentes, no solo falta de dato.
13. Resolver el tipo de hebilla: la ficha dice "micrométrica", el excel confirma "doble D" — son piezas físicas distintas.
14. Confirmar qué va en el rectángulo negro de la ficha Hero (mismo patrón que Vortex).
15. Confirmar si "Material exterior ABS alta resistencia" vacío para Hero es un dato real del producto o un olvido de carga del excel (es la única marca del catálogo sin X ahí).
- 🔤 **(nuevo, 2026-07-29) Falta de ortografía en la pieza original del cliente:** el título de la tarjeta de homologación de la ficha Hero dice **"HOMOLOGACÓN"**, sin la **I** — lo correcto es **"HOMOLOGACIÓN"**. Se detectó al auditar el Intento 1 del Prompt A: el generador copió la falta de la referencia, o sea que **el error es de la ficha original, no del generador**. Ya quedó corregido en el prompt. **Hay que revisar si la misma falta está replicada en las fichas de todos los demás modelos del catálogo** (Kratos, Vortex, Shanghai, Stellar, Shift, Evolution 929, Carbex...) y corregir el **template maestro**, no solo la ficha de Hero — mismo patrón sistémico que el rectángulo negro recurrente.

### Shanghai — [`simulacion-13-shanghai-verificacion.md`](simulacion-13-shanghai-verificacion.md)
16. Resolver certificación: la ficha dice "DOT FNVSS 510" (sin ECE), el excel dice "DOT & ECE" (sin el número 22.06) — ninguna de las dos fuentes está completa.
17. Revisar si el rectángulo negro (3er caso seguido: Vortex, Hero, Shanghai) es un problema del template maestro del catálogo, no de cada ficha individual.
18. Decidir si el grid de íconos de Shanghai queda en 4 ítems o se completa con un ítem de empaque (Master Box / Inner Box) — no hay más features físicas confirmadas disponibles.

### Stellar — [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md)
19. ~~Completar la certificación en la ficha Stellar — falta "& ECE 22.06", solo dice "DOT FNVSS 510".~~ ✅ **CERRADO en la Revisión 2026-07-29**: la captura nítida muestra que la ficha vigente ya tiene el banner "DOT" + "& ECE 22.06", exactamente como el excel. La pieza con "DOT FNVSS 510" que se auditó en la primera pasada no era la ficha vigente.
20. Sacar el **tache/X rojo del ícono de "hebilla micrométrica"** del grid del Stellar — es un defecto de **arte**, no de dato: el excel confirma la feature con X y el texto del ítem es correcto. Mismo defecto ya documentado en Vortex (Pieza 1 e Intento 1 del Prompt B) y sospechado en Kratos (#4) y Shift (#24) — **con Stellar ya son 4 modelos, tratarlo como defecto de la plantilla maestra, no de cada ficha**.
21. Confirmar el reemplazo elegido para la 6ª celda del grid del Stellar: **"Material exterior ABS alta resistencia"** (suplente inmediato: "Interior EPS de alta resistencia"), que ocupa el lugar de la "doble visera" retirada.
22. Subir la ficha Stellar real y el excel como adjunto real y confirmar los 2 prompts de la Revisión 2026-07-29 antes de generar.

> 🟦 **Decisión de negocio registrada (Stellar) — no es un pendiente ni un mismatch:** el usuario pidió que **"DOBLE VISERA" no se comunique**, ni en la lista de homologación ni en el grid de íconos. El excel **sí la confirma con X** para este modelo, así que **no la devuelvas al grid** en una auditoría posterior creyendo que es una oportunidad no usada o un olvido: es una decisión comercial explícita. Si alguien la quiere reponer, preguntar al usuario primero.

### Shift — [`simulacion-15-shift-verificacion.md`](simulacion-15-shift-verificacion.md)
23. Completar la certificación en la ficha Shift — falta "& ECE 22.06" y sobra "FNVSS 510", número que el excel nunca escribe. **(actualizado 2026-07-29)** Con Shift ya son **6 apariciones confirmadas** del mismo defecto (Kratos, Shanghai, Vortex Pieza 1, Hero, Carbex, Shift): **arreglarlo en el template maestro, no ficha por ficha**.
24. ~~Confirmar si el ícono tachado de "hebilla micrométrica" en la ficha real de Shift es intencional o un reciclado de plantilla sin verificar.~~ ✅ **RESUELTO en la Revisión 2026-07-29:** es **las dos cosas a la vez** — un reciclado de plantilla que **además resulta ser correcto**, porque el excel marca la hebilla micrométrica como **N/A** para Shift. **Es el único elemento de arte de esa ficha que dice la verdad, y acierta por casualidad:** el mismo tache es un defecto en Stellar (#20, excel = X), en la Pieza 1 de Vortex y probablemente en Kratos. Mismo arte, veredictos opuestos — deja la lección nueva del checklist Tipo C sobre elementos de arte heredados de una plantilla.
25. Revisar el rectángulo negro a nivel de proceso/template — ya es el 4to caso seguido (Vortex, Hero, Shanghai, Shift), no un caso aislado.
- 🔴 **(nuevo, 2026-07-29) Decisión de negocio pendiente — Shift:** ¿vale gastar **1 de las 6 celdas** del grid en comunicar una feature que el casco **NO** tiene? El reemplazo recomendado es **"HEBILLA DOBLE D"** (confirmada con X para Shift, el dato positivo equivalente, mismo cambio ya hecho en Hero y Carbex), y **ya está aplicado en el Prompt B**, pero **nadie lo confirmó todavía**. Si se decide mantener la celda tachada, registrarlo como **decisión de negocio** —el excel respalda las dos opciones— para que una auditoría futura no lo "corrija".

> 🔎 **Hallazgo de la Revisión 2026-07-29 (Shift) — afecta a todo el catálogo, no solo a este caso:** la prueba de huella digital de los 13 claims contra las 6 columnas EDGEPRO transcritas muestra que **la pieza atribuida al Shift no es la ficha de ningún modelo**: da 9/13 contra la columna Shift y **10/13 contra la de Stellar**, y esos mismos 13 claims ya se auditaron como fichas de Hero, Kratos, Stellar (1ª pasada) y de la Pieza 1 de Vortex. Es la **plantilla genérica del catálogo publicada sin instanciar**. La corrección no es "arreglarle 4 ítems a la ficha del Shift", es **instanciar la plantilla contra la columna de cada modelo** — y de paso arreglar en el template la certificación, la falta de ortografía y el tache heredado, en vez de repetir siete veces el mismo parche.

### Evolution 929 — [`simulacion-16-evolution929-verificacion.md`](simulacion-16-evolution929-verificacion.md)
26. Subir la ficha real de Evolution 929 y el excel (tab EDGE) como adjunto real.
27. Confirmar con el fabricante el número de norma "FNVSS 510" — el excel solo confirma "DOT", sin número específico ni ECE.

### Casco carbono/camo sin nombre confirmado — [`simulacion-17-casco-carbono-camo.md`](simulacion-17-casco-carbono-camo.md)
28. **Confirmar a qué modelo del catálogo corresponde este casco** — no asumido en ninguna parte de esta simulación.
29. Subir la foto de referencia real del casco de carbono forjado como adjunto real.

### Casco flip-up 4 colores sin nombre confirmado — [`simulacion-18-casco-flipup-4-colores.md`](simulacion-18-casco-flipup-4-colores.md)
30. **Confirmar a qué modelo del catálogo corresponde este casco** — no asumido en ninguna parte de esta simulación.
31. Subir la foto de referencia real del casco flip-up como adjunto real.

### Casco carbono glossy 4 colores sin nombre confirmado — [`simulacion-19-casco-carbono-glossy-4-colores.md`](simulacion-19-casco-carbono-glossy-4-colores.md)
32. Confirmar la división de color en las 2 variantes de dos tonos (Variante 2 beige/chocolate y Variante 4 blanco/gris) — se asumió calota arriba / mentonera abajo, sin confirmación explícita del usuario.
33. **Confirmar a qué modelo del catálogo corresponde este casco** — no asumido en ninguna parte de esta simulación.
34. Subir la foto de referencia real del casco carbono glossy como adjunto real.

**Total: 35 puntos pendientes de confirmación** (33 abiertos + el punto nuevo sin numerar de la falta de ortografía "HOMOLOGACÓN" del caso Hero + el #19 ya cerrado en la Revisión 2026-07-29 del Stellar) repartidos en los 10 casos (el detalle completo de cada uno está en la sección "🔴 Pendiente de tu parte" / "Qué hay que hacer" del archivo correspondiente).

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
| Prompt A — Homologación Vortex 6/6 (estructura de 3 bloques, corrige las 2 piezas circulantes) | Homologación | ✅ listo para usar — todavía no corrido | [`simulacion-11-vortex-verificacion.md`](simulacion-11-vortex-verificacion.md), sección `## Prompts corregidos para Vortex (12/12 confirmados)` |
| Prompt B — Grid Vortex 6/6 (2x3, hebilla micrométrica sin tache) | Grid íconos | ✅ listo para usar — todavía no corrido | [`simulacion-11-vortex-verificacion.md`](simulacion-11-vortex-verificacion.md), sección `## Prompts corregidos para Vortex (12/12 confirmados)` |

### Hero (Simulación 12) — Tipo C, ficha vs. excel (2 tarjetas definitivas, reparto 3 + 3) + foto lifestyle
[`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt A — Tarjeta de homologación Hero, **Intento 1** (3 ítems + "DOT & ECE 22.06") | Homologación | ⚠️ **CORRIDO — falló solo en LAYOUT**. El contenido salió perfecto (certificación corregida, sin "FNVSS 510", los 3 ítems exactos, paleta OK) pero el lienzo salió **estirado a 1 : 2,47** (415 x 1024 px) contra el 1 : 2 de la referencia, los separadores se volvieron **bandas de ancho completo**, el espaciado quedó desmesurado y apareció una **estrella blanca inventada**. Reemplazado por el Intento 2 | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `### Prompt A — Intento 1 — resultado auditado` |
| **Prompt A — Tarjeta de homologación Hero, Intento 2 (layout en números y geometría)** | Homologación | ✅ listo para usar — todavía no corrido. Agrega los bloques `CRÍTICO — EL LIENZO ES UNA CONSTANTE, NO SE ESTIRA` (relación 1 : 2 en números, "bajar de 7 ítems a 3 NO agranda la tarjeta"), `CRÍTICO — LOS SEPARADORES SON LÍNEAS FINAS, NO BANDAS` (guion de 1-2 px, 15-25 % del ancho, centrado), proporciones internas de los 3 bloques, ritmo vertical acotado, `PROHIBIDO ABSOLUTO` ampliado (nada de destellos/estrellas) y `VERIFICACIÓN FINAL` de 6 chequeos. Corrige además la falta de ortografía **"HOMOLOGACÓN" → "HOMOLOGACIÓN"** heredada de la pieza original | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `### Prompt A — Intento 2 — layout declarado en números y geometría` |
| **Prompt B definitivo — Grid de íconos Hero (3 ítems, 1 fila x 3 columnas)** | Grid íconos | ✅ listo para usar — todavía no corrido. Open face / Espacio para Bluetooth / Hebilla doble D. Corrige los 2 claims falsos: "diseño modular" → "open face" y "hebilla micrométrica" (con tache) → "hebilla doble D" (sin tache). **Corregido preventivamente por analogía con el fallo del Prompt A**: se le agregó el bloque `CRÍTICO — EL LIENZO NO SE ESTIRA NI SE INFLA POR TENER MENOS CELDAS` + `VERIFICACIÓN FINAL` de 4 chequeos | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `## ✅ Versión definitiva de las 2 tarjetas de Hero — reparto 3 + 3` |
| Prompt A — versión de 3 ítems con cubre barbilla / cubre nariz | Homologación | ⛔ OBSOLETO — armado sobre una lectura errónea que daba esas 2 celdas como confirmadas, cuando están vacías para Hero. Reemplazado por el Prompt A definitivo | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), bloque `⚠️ OBSOLETO — Prompt A de 3 ítems` |
| Prompt B — Grid Hero, Intento 2 (2x2, 4 ítems) | Grid íconos | ⛔ SUPERADO — repetía "Canal para lentes" y "Kit de mecanismo visor", que van en la tarjeta de homologación; en la ficha original los dos bloques nunca comparten ítems. Reemplazado por el Prompt B definitivo | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `### Intento 2 — prompt corregido, nombrando los ítems que se duplicaron` |
| Prompt B — Grid de íconos, versión reducida 2x2 (4 ítems, no 6) | Grid íconos | ⛔ SUPERADO — Intento 1 salió con 6 celdas (2x3) en vez de 4, duplicando "Kit de mecanismo visor" y "Hebilla doble D" con ícono distinto en cada repetición. El fallo de conteo de celdas quedó registrado como advertencia dentro del Prompt B definitivo | [`simulacion-12-hero-verificacion.md`](simulacion-12-hero-verificacion.md), sección `## Prompts del catálogo (Agente Generador) — A bloqueado, B reducido a 4 ítems` |
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
[`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md) — ✅ **12/12 tras la Revisión 2026-07-29 con captura nítida** (antes 10/13; la pieza de la 1ª pasada no era la ficha vigente)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| **Prompt A definitivo — Tarjeta de homologación Stellar (6/6, reproducción fiel)** | Homologación (Tipo B) | ✅ listo para usar — todavía no corrido. Los 6 ítems vigentes son 6/6 MATCH y la certificación del banner ya es exacta, así que **no cambia el contenido**: solo agrega los blindajes de generación (mismo lienzo en píxeles, banner negro "DOT" + "& ECE 22.06", espaciado uniforme, texto completo y **conteo forzado de 6 ítems**) | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `# Revisión 2026-07-29`, subsección `### Prompt A` |
| **Prompt B definitivo — Grid de íconos Stellar (2x3, 6/6, sin doble visera, sin taches)** | Grid íconos (Tipo B) | ✅ listo para usar — todavía no corrido. Saca **"Doble visera"** (decisión comercial del usuario, no mismatch) y el **tache rojo del ícono de "Hebilla micrométrica"** (defecto de arte); la celda libre la ocupa **"Material exterior ABS alta resistencia"**. Incluye conteo forzado de celdas y prohibición explícita de cualquier X/tache/marca de negación sobre los íconos | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `# Revisión 2026-07-29`, subsección `### Prompt B` |
| Prompt A — Homologación Stellar (6/6, versión 2026-07-28, hasta Intento 3) | Homologación | ⛔ SUPERADO — armado sobre la pieza equivocada (7 ítems y certificación "DOT FNVSS 510"); sus 3 intentos quedan como registro histórico del defecto de espaciado y del de estructura de bloques. Reemplazado por el Prompt A definitivo | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `### Prompts corregidos (🕘 históricos…)` |
| Prompt B — Grid de íconos Stellar (2x3, incluía "Doble visera") | Grid íconos | ⛔ SUPERADO — incluía "Doble visera", que el usuario decidió no comunicar, y no prohibía las marcas de negación sobre los íconos. Reemplazado por el Prompt B definitivo | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `### Prompts corregidos (🕘 históricos…)` |
| Variante 1 — Blanco + azul oscuro, visera sin cambios | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `## Sub-caso — 4 variantes de color` |
| Variante 2 — Gris total, visera ahumada azul | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `## Sub-caso — 4 variantes de color` |
| Variante 3 — Morado pastel + detalles rosados | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `## Sub-caso — 4 variantes de color` |
| Variante 4 — Azul oscuro brillante/glossy (único que cambia de mate a glossy) | Variantes de color | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `## Sub-caso — 4 variantes de color` |
| Foto lifestyle en la playa, ultra realista, golden hour | Foto lifestyle | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `## Sub-caso — Foto lifestyle en la playa, ultra realista, luz cálida` |
| Sub-caso — Logo "BOSTON 4.0" → "STELLAR" (mismas dimensiones) | Tipo A (logo/título) | ✅ listo para usar — todavía no corrido | [`simulacion-14-stellar-verificacion.md`](simulacion-14-stellar-verificacion.md), sección `## Sub-caso — Logo/título de marca "BOSTON 4.0" → "STELLAR"` |

### Shift (Simulación 15) — Tipo C, ficha vs. excel
[`simulacion-15-shift-verificacion.md`](simulacion-15-shift-verificacion.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| **Prompt A — Tarjeta de homologación Shift (7/7 confirmados)** — *vigente, Revisión 2026-07-29* | Homologación | ✅ listo para usar — todavía no corrido | [`simulacion-15-shift-verificacion.md`](simulacion-15-shift-verificacion.md), sección `## 5. Prompts corregidos — Revisión 2026-07-29` |
| **Prompt B — Grid de íconos Shift 2x3 (6/6 confirmados, sin taches)** — *vigente, Revisión 2026-07-29* | Grid íconos | ✅ listo para usar — 🔴 confirmar antes la decisión de "HEBILLA DOBLE D" vs. celda tachada | [`simulacion-15-shift-verificacion.md`](simulacion-15-shift-verificacion.md), sección `## 5. Prompts corregidos — Revisión 2026-07-29` |
| ~~Prompt A — Homologación Shift (6/6)~~ · ~~Prompt B — Grid 2x3 (6/6)~~ | 🕘 históricos | ⛔ **superados** por la Revisión 2026-07-29 — no usar | [`simulacion-15-shift-verificacion.md`](simulacion-15-shift-verificacion.md), sección `### Prompts corregidos` (registro histórico) |

### Evolution 929 (Simulación 16) — Tipo C, ficha vs. excel (tab EDGE)
[`simulacion-16-evolution929-verificacion.md`](simulacion-16-evolution929-verificacion.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt A — Homologación Evolution 929 (6/6, completo, certificación "DOT" solo) | Homologación | ✅ listo para usar — todavía no corrido | [`simulacion-16-evolution929-verificacion.md`](simulacion-16-evolution929-verificacion.md), sección `### Prompts corregidos` |
| Prompt B — Grid de íconos Evolution 929 (2x3, 6/6, incluye "Diseño modular" real por ser Flip Up) | Grid íconos | ✅ listo para usar — todavía no corrido | [`simulacion-16-evolution929-verificacion.md`](simulacion-16-evolution929-verificacion.md), sección `### Prompts corregidos` |

### Boston (Simulación 33) — Tipo C, ficha vs. excel (hoja "FICHA DE CASCOS", marca EDGE)
[`simulacion-33-boston-verificacion.md`](simulacion-33-boston-verificacion.md) — ⚠️ **11 MATCH / 2 MISMATCH / 0 SIN DATO**; identificado por huella digital como Boston (único modelo del catálogo con **LED confirmado**, y única columna de la hoja donde "Diseño modular" y "Con luz LED" son MATCH a la vez) · 🧭 **primer caso auditado explícitamente contra la hoja EDGE con comparación fila por fila contra la EDGEPRO** · caso hermano de colorways: [`simulacion-21-boston-4-colores.md`](simulacion-21-boston-4-colores.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt A — Tarjeta de homologación Boston (7 ítems, 7/7 confirmados) | Homologación (Tipo B) | ✅ listo para usar — todavía no corrido. Saca "Sistema de liberación rápida del visor" (N/A) y lo reemplaza por **"Interior EPS de alta resistencia"**; certificación corregida a **"DOT & ECE"** exacto (sin "22.06" y sin "FNVSS 510"); título **"HOMOLOGACIÓN"** bien escrito. Incluye lienzo constante en números, geometría de separadores, conteo forzado de ítems y prohibición de adornos | [`simulacion-33-boston-verificacion.md`](simulacion-33-boston-verificacion.md), sección `## 5. Prompts corregidos` |
| Prompt B — Grid de íconos Boston (2x3, 6/6 confirmados, sin tache) | Grid íconos (Tipo B) | ✅ listo para usar — todavía no corrido. Saca "Canal para lentes" (N/A) y lo reemplaza por **"Material exterior ABS alta resistencia"**; **conserva "Diseño modular" y "Con luz LED"**, que acá son datos reales; prohibición explícita del **tache rojo** sobre "Hebilla micrométrica" (feature confirmada con X) | [`simulacion-33-boston-verificacion.md`](simulacion-33-boston-verificacion.md), sección `## 5. Prompts corregidos` |

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

## Boston 4.0 (EDGE) — Simulación 21

Primer caso con **nombre de modelo confirmado por el usuario** (confirmado como "Boston 4.0" vía logo real, ver sub-caso de logo en Simulación 25). Full face, negro mate, panel lateral glossy con LEDs rojas de freno, cover de carbono en el pivote. 4 variantes de color + tinte de visor.

[`simulacion-21-boston-4-colores.md`](simulacion-21-boston-4-colores.md) — ⚠️ confirmar si el panel LED/cover de carbono cambia de color en alguna variante

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

## Carbex — Simulación 25

Octavo caso EDGEPRO, el con más features confirmadas del catálogo (17). Prompts genéricos casi funcionaban tal cual — solo 1 mismatch real (hebilla micrométrica → doble D) + 2 prohibiciones factualmente incorrectas limpiadas (preparado anti empañante y con pinlock sí son reales para Carbex, solo no van en la lista de 6).

[`simulacion-25-carbex-verificacion.md`](simulacion-25-carbex-verificacion.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Prompt A — Homologación (6/6) | Tipo B/C | ✅ listo para usar — todavía no corrido | `simulacion-25-carbex-verificacion.md` |
| Prompt B — Grid (6/6, hebilla doble D) | Tipo B/C | ✅ listo para usar — todavía no corrido | `simulacion-25-carbex-verificacion.md` |
| Sub-caso — Logo "BOSTON 4.0" → "CARBEX" (mismas dimensiones) | Tipo A (logo/título) | ✅ listo para usar — todavía no corrido | `simulacion-25-carbex-verificacion.md` |

---

## Casco retro/redondo — Simulación 26

Primer molde de casco retro/redondo (estilo café racer, calota lisa, pivote cromado) del catálogo. Pedido puntual: cambiar solo la goma del borde inferior a negro, sin tocar nada más de la imagen. **Prompts v2 (2026-07-29): edición puntual, no regeneración**, con bloque propio de desambiguación entre las dos piezas del mismo color de cada casco (contorno de la abertura del visor, que conserva su color, vs. goma del borde inferior, que pasa a negro).

[`simulacion-26-casco-retro-goma-negra.md`](simulacion-26-casco-retro-goma-negra.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Casco 1 lila/rosa — goma inferior a negro (v2, edición) | Tipo A (edición puntual de color) | ✅ listo para usar — todavía no corrido | `simulacion-26-casco-retro-goma-negra.md` |
| Casco 2 blanco/azul marino — goma inferior a negro (v2, edición) | Tipo A (edición puntual de color) | ✅ listo para usar — todavía no corrido | `simulacion-26-casco-retro-goma-negra.md` |
| Limpieza de artefactos de la captura (título, líneas violetas, guía punteada, avatar "J", banda negra + miniaturas) | Tipo D (limpieza) | 🟡 opcional — decisión abierta, el usuario no lo pidió | `simulacion-26-casco-retro-goma-negra.md` |

---

## Casco blanco glossy con detalles tostados — goma del borde inferior a negro — Simulación 27

Casco blanco perlado/glossy con pico frontal y ventilación lateral beige/tostados, visor azul espejado. Primer caso donde se aplica explícitamente la nueva regla general del equipo (comentario de "jimgarzons"): la goma del borde inferior siempre pasa a negro, sin tocar los demás accesorios de color (ver sección 9 de `orquestacion-agentes-paralelos.md`).

[`simulacion-27-casco-blanco-glossy-goma-negra.md`](simulacion-27-casco-blanco-glossy-goma-negra.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Goma del borde inferior a negro (accesorios tostados sin cambios) | Tipo A (cambio puntual de color) | ✅ listo para usar — todavía no corrido | `simulacion-27-casco-blanco-glossy-goma-negra.md` |

---

## Banner de marca "Diseñado para superar tus límites" — Simulación 28

Pieza de marketing/marca (no casco): banner con comilla roja, texto "DISEÑADO PARA / SUPERAR TUS LÍMITES." y fila de 3 íconos (RACING, URBANO, TOURING). La referencia real está borrosa con ghosting — pedido de mejora de calidad/nitidez del mismo contenido, variante del Tipo B.

[`simulacion-28-banner-superar-limites.md`](simulacion-28-banner-superar-limites.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Mejora de calidad del banner (mismo contenido, sin blur) | Tipo B (mejora de calidad/nitidez) | ✅ listo para usar — todavía no corrido | `simulacion-28-banner-superar-limites.md` |

---

## Casco jet arte Bob Esponja — visor transparente + quitar la línea punteada — Simulación 31

Casco abierto/jet, vista frontal, calota amarillo lima con arte grafiti tipo Bob Esponja, visor grande ahumado y fondo de plantilla con formas geométricas grises tenues. Edición puntual de **2 cambios** sobre una foto ya aprobada: el visor pasa de ahumado a transparente (revelando el interior del casco **vacío**) y se elimina una guía de maquetación punteada vertical que cruza toda la imagen. Tipo A (edición puntual) con componente Tipo D (limpieza). Caso hermano de la Simulación 6a, en un archivo propio porque aquella es una auditoría de Etapa 1 y esta es una edición.

[`simulacion-31-casco-bob-esponja-visor-transparente.md`](simulacion-31-casco-bob-esponja-visor-transparente.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Edición puntual — visor ahumado → transparente + quitar la línea punteada | Tipo A (edición puntual) + D (limpieza) | 🔴 bloqueado — falta confirmar qué es "el palo" antes de dar por bueno el resultado (el texto del prompt ya está listo para correr) | `simulacion-31-casco-bob-esponja-visor-transparente.md` |

---

## Casco integral negro mate con visor dorado levantado — foto lifestyle en una cafetería — Simulación 34

Casco integral (full face) negro mate liso, vista de 3/4 delantero ligeramente desde arriba, con **visor espejado dorado/iridiscente LEVANTADO** y un **segundo visor interno solar oscuro BAJADO** — dos piezas distintas. Pedido de **foto lifestyle**: un hombre sentado fuera de una cafetería, con el casco "exactamente en la misma posición, el mismo ángulo y todo" que en la foto de producto. Tipo A con **traslado de escena**: no se transfiere ningún diseño, el objeto ya está terminado y lo único que cambia es el entorno.

🟡 **Ambigüedad pendiente de confirmación del usuario:** "sentado con este casco" admite dos lecturas y se escribieron las dos. **(A) el casco apoyado sobre la mesa** queda como principal porque es la única que conserva **literalmente** el ángulo de 3/4 delantero desde arriba que el usuario pidió, y la única que deja ver el visor dorado levantado y el interior; **(B) el hombre con el casco puesto** queda como variante, donde el ángulo depende de la pose de la cabeza. **Nadie eligió todavía** — hay que preguntar antes de dar por bueno un resultado.

[`simulacion-34-lifestyle-cafeteria-casco-negro.md`](simulacion-34-lifestyle-cafeteria-casco-negro.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| (A) Lifestyle en cafetería — casco apoyado sobre la mesa (principal) | Tipo A (traslado de escena, geometría intacta) | 🔴 bloqueado — el texto del prompt ya está listo para correr; falta confirmar la lectura (A) vs. (B) | `simulacion-34-lifestyle-cafeteria-casco-negro.md` |
| (B) Lifestyle en cafetería — hombre con el casco puesto (variante) | Tipo A (traslado de escena, geometría intacta) | 🔴 bloqueado — no correr por default; solo si el usuario confirma la lectura (B) | `simulacion-34-lifestyle-cafeteria-casco-negro.md` |

---

## Casco modular / flip up negro mate — 4 colorways — Simulación 35

Casco integral **modular / flip up** (mentonera abatible, con línea de separación y mecanismo visibles), **negro mate uniforme y liso** en toda la calota, vista de 3/4 delantero, visor transparente bajado. Pedido de **4 colorways** sobre el mismo molde: cambian solo el color de la **calota** y el de los **elementos**, mientras la **goma del borde inferior queda NEGRA en los cuatro** (regla de negocio de la sección 9 de `orquestacion-agentes-paralelos.md`, repetida explícitamente por el usuario). La imagen de partida es un archivo de maquetación, así que los 4 prompts incluyen bloque de **limpieza de artefactos** (formas diagonales, texto rosa cortado, barras negras con "HOMOLOGACÓN") y bloque de **integridad** ("que el casco no se vea alterado o dañado", pedido textual del usuario).

Caso extremo del problema de selección por color: **el molde de partida es monocromo**, o sea que todas las piezas comparten el negro de origen y ninguna se puede seleccionar diciendo "lo que hoy es X". Por eso los 4 prompts declaran **tres categorías separadas por ubicación y función** (calota / elementos / goma) y una **lista cerrada de 6 elementos, idéntica en los cuatro**, para que los colorways se lean como una familia.

⚠️ **Correr cada prompt en una sesión aislada** del generador (contaminación cruzada, caso Vortex).

[`simulacion-35-casco-modular-4-colorways.md`](simulacion-35-casco-modular-4-colorways.md)

| Prompt / pieza | Tipo de pieza | Estado | Ubicación |
|---|---|---|---|
| Colorway 1 — calota celeste pastel + elementos azul oscuro + visor azul oscuro (goma NEGRA) | Tipo A (cambio de color sobre molde real) | ✅ listo para usar — todavía no corrido · 🟡 lista de "elementos" pendiente de confirmar | `simulacion-35-casco-modular-4-colorways.md` |
| Colorway 2 — calota gris ratón + elementos rojos + visor transparente (goma NEGRA) | Tipo A (cambio de color sobre molde real) | ✅ listo para usar — todavía no corrido · 🟡 lista de "elementos" pendiente de confirmar | `simulacion-35-casco-modular-4-colorways.md` |
| Colorway 3 — calota beige claro + elementos chocolate + visor transparente (goma NEGRA) | Tipo A (cambio de color sobre molde real) | ✅ listo para usar — todavía no corrido · 🟡 lista de "elementos" + visor asumido transparente, ambos pendientes de confirmar | `simulacion-35-casco-modular-4-colorways.md` |
| Colorway 4 — calota blanca + elementos negros + visor transparente (goma NEGRA) | Tipo A (cambio de color sobre molde real) | ✅ listo para usar — todavía no corrido · 🟡 lista de "elementos" + visor asumido transparente, ambos pendientes de confirmar | `simulacion-35-casco-modular-4-colorways.md` |

---

## Resumen numérico

| Caso | Prompts indexados | ✅ Listo | ⚠️ Con reintento | 🔴 Bloqueado |
|---|---|---|---|---|
| Kratos | 2 | 1 | 1 | 0 |
| Vortex | 6 | 4 | 2 | 0 |
| Hero | 9 | 7 | 1 | 1 |
| Shanghai | 2 | 1 | 0 | 1 |
| Stellar | 10 | 8 | 0 | 0 |
| Shift | 4 | 2 | 0 | 0 |
| Evolution 929 | 2 | 2 | 0 | 0 |
| Casco carbono/camo | 5 | 4 | 1 | 0 |
| Casco flip-up | 4 | 4 | 0 | 0 |
| Casco carbono glossy | 4 | 2 | 0 | 2 |
| Casco adventure (blanco→negro) | 4 | 4 | 0 | 0 |
| Boston 4.0 | 4 | 4 | 0 | 0 |
| Casco dorado iridiscente | 4 | 2 | 2 | 0 |
| Casco adventure con pico | 4 | 1 | 3 | 0 |
| Casco EDGE flip-up (quitar stickers) | 3 | 3 | 0 | 0 |
| Carbex | 3 | 3 | 0 | 0 |
| Casco retro/redondo | 2 | 2 | 0 | 0 |
| Casco blanco glossy (goma negra) | 1 | 1 | 0 | 0 |
| Banner "Superar tus límites" | 1 | 1 | 0 | 0 |
| Casco jet Bob Esponja (visor transparente) | 1 | 0 | 0 | 1 |
| Casco negro mate visor dorado (lifestyle cafetería) | 2 | 0 | 0 | 2 |
| Casco modular/flip up (4 colorways, goma negra) | 4 | 4 | 0 | 0 |
| **Total** | **81** | **59** | **10** | **7** |

---

*(los prompts ⛔ SUPERADOS del Stellar y del Shift se cuentan en la columna "Prompts indexados" pero no en ✅/⚠️/🔴, mismo criterio que los ⛔ de Hero.)*

---

**Última actualización:** 2026-07-29 · **Shift (Simulación 15) actualizado tras la revisión con transcripción nítida**: el veredicto Tipo C **se mantiene en 9 MATCH / 4 MISMATCH / 0 SIN DATO**, pero la **prueba de huella digital** contra las 6 columnas EDGEPRO transcritas muestra que **la pieza no es la ficha del Shift ni de ningún modelo** (9/13 contra Shift, 10/13 contra Stellar, y los mismos 13 claims ya atribuidos a Hero, Kratos, Stellar y Vortex): es la **plantilla genérica publicada sin instanciar**. Se cerró el pendiente #24 —el **tache del ícono de hebilla micrométrica es correcto para Shift** (N/A) y falso para Stellar (X), **siendo el mismo arte**, o sea que acierta por casualidad—, se actualizó el #23 con el recuento de la certificación (6ª aparición de "DOT / FNVSS 510") y se agregó un **pendiente de decisión de negocio**: si conviene gastar 1 de las 6 celdas del grid en una feature ausente o pasarla a "HEBILLA DOBLE D" (recomendado, ya aplicado en el Prompt B, sin confirmar). Los 2 prompts del Shift se reemplazaron por sus versiones vigentes —**A con 7 ítems, B con 6 celdas**, manteniendo el tamaño original de las 2 piezas, con lienzo en números, geometría de separadores, conteo forzado, prohibición de adornos, los 3 bloques descritos por separado con "HOMOLOGACIÓN" bien escrito y la regla de taches matizada— y los 2 anteriores quedaron marcados ⛔ superados. · agregada la sección de la **Simulación 34** (casco integral negro mate con visor dorado levantado, foto lifestyle en una cafetería): **2 prompts** —(A) casco apoyado sobre la mesa, principal, y (B) hombre con el casco puesto, variante—, los dos marcados 🔴 bloqueados hasta que el usuario confirme cuál de las dos lecturas de "sentado con este casco" es la correcta; el total pasa de 73 a **75** prompts indexados. Es el primer caso de **traslado de escena** con superficie espejada, y deja una lección nueva para el checklist Tipo A: las superficies reflectantes de un objeto trasladado tienen que reflejar la escena nueva y no la del estudio de origen. · agregada la sección de la **Simulación 31** (casco jet con arte grafiti tipo Bob Esponja: edición puntual de 2 cambios — visor ahumado → transparente y quitar la guía de maquetación punteada), con su prompt marcado 🔴 bloqueado hasta confirmar con el usuario qué es "el palo"; el total pasa de 72 a 73 prompts indexados. · **Stellar (Simulación 14) actualizado tras la revisión con captura nítida**: el veredicto Tipo C pasó de 10/13 a **12 MATCH / 0 MISMATCH / 0 SIN DATO** porque la pieza auditada en la primera pasada no era la ficha vigente; se reemplazaron los Prompts A y B por sus versiones definitivas (A de reproducción fiel; B sin "doble visera", sin taches y con "Material exterior ABS alta resistencia" en la 6ª celda), se marcaron los 2 anteriores como ⛔ SUPERADOS, se cerró el pendiente de certificación (#19), se agregaron 3 pendientes nuevos (tache de arte, confirmación del ítem de reemplazo, subida de archivos) y se registró en un bloque aparte la **decisión de negocio de no comunicar "doble visera"** para que una auditoría posterior no la devuelva creyendo que es un olvido.
· *(2026-07-29, mismo día)* agregada la sección de la **Simulación 35** (casco modular / flip up negro mate: 4 colorways de calota + elementos, con la goma del borde inferior negra en los cuatro), con sus **4 prompts** marcados ✅ listos para usar y 🟡 dos decisiones pendientes de confirmación —la **lista cerrada de 6 "elementos"**, idéntica en los 4 prompts, y el **visor de los colorways 3 y 4** asumido transparente—; el total pasa de 77 a **81 prompts indexados**. Es el primer caso donde la regla de la goma negra se aplica dentro de un pedido de **variantes de color** y no como edición puntual, y deja la lección nueva del Tipo A sobre el **molde monocromo de partida** (si todas las piezas comparten el color de origen, ninguna se puede seleccionar por color: hace falta una lista cerrada por ubicación y función, compartida entre todas las variantes para que los colorways sean una familia).
· *(2026-07-28, registro previo)* índice maestro armado a pedido explícito del usuario para organizar todos los prompts de las Simulaciones 10-19 en un único punto de entrada, sin modificar el contenido de ninguno de los 10 archivos originales · agregadas las secciones de Simulación 27 (casco blanco glossy, goma del borde inferior a negro) y Simulación 28 (banner de marca "Diseñado para superar tus límites"). · **Hero (Simulación 12) actualizado tras correr el Prompt A**: el intento **falló solo en el LAYOUT** —lienzo estirado a 1 : 2,47 (415 x 1024 px) contra el 1 : 2 de la referencia, separadores convertidos en bandas horizontales de ancho completo, espaciado desmesurado y una estrella blanca de cuatro puntas inventada— mientras que **todo el contenido salió perfecto** (certificación corregida a "DOT & ECE 22.06" sin rastro de "FNVSS 510", los 3 ítems exactos y en orden, sin ítems inventados, paleta respetada). Se agregó la auditoría con tabla de 5 defectos y causa raíz por fila, se escribió el **Intento 2 del Prompt A** (bloques nuevos de lienzo-constante en números, geometría de los separadores, proporciones internas de los 3 bloques, ritmo vertical acotado, prohibido absoluto ampliado y verificación final de 6 chequeos), se **corrigió el Prompt B preventivamente por analogía** (bloque de lienzo que no se estira al bajar de 6 celdas a 3 + verificación final de 4 chequeos) y se registró un **pendiente nuevo**: la falta de ortografía **"HOMOLOGACÓN"** viene de la pieza original del cliente y probablemente esté replicada en las fichas de todo el catálogo.
