# Simulación 30c — Livery de carreras EDGE "Temporada 2026": colorway Cyan/rosa/blanco (adaptación de diseño sobre molde real, Tipo A)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md) · [← Caso hermano: simulación 30 (livery EDGE, molde real y otros colorways)](simulacion-30-edge-racing-livery.md)

Este archivo es un colorway adicional del caso de livery de carreras EDGE "Temporada 2026" documentado en `simulacion-30-edge-racing-livery.md`. Se arma como archivo separado y autocontenido (con su propia copia del molde real) para evitar conflictos de edición mientras varios colorways de este mismo caso se documentan en paralelo. Sigue el mismo pipeline Agente 0 → Generador → Auditor (Tipo A) documentado en `orquestacion-agentes-paralelos.md`.

**Pedido:** adaptar el colorway "Cyan/rosa/blanco EDGE" sobre el molde real de un casco full-face negro mate ya fotografiado (checkpoint), mismo molde usado en los demás colorways de este caso.

**Molde real (checkpoint), 2 vistas recibidas:**
- Vista lateral/3-4: casco full-face negro mate, pico frontal puntiagudo, visor transparente, correa roja, mentonera y ventilaciones en el mismo tono negro mate que la calota (sin piezas de plástico crudo visible como en otros moldes del catálogo).
- Vista trasera: calota negra mate, borde inferior negro, sin gráficos.

**Colorway 3 — Cyan/rosa/blanco "EDGE":** carcasa con base cyan/teal brillante en la parte superior de la calota y en el pico frontal, panel geométrico blanco/gris claro con líneas negras tipo hexágono en la zona central, franjas diagonales y formas tipo chevron en rosa/magenta en la parte inferior delantera, wordmark "EDGE" en gris oscuro/negro, tipografía bold itálica, sobre el panel blanco, visor tintado/oscuro (a diferencia del checkpoint, que tiene visor transparente — ver nota abajo), textura fina tipo malla/triángulos en la esquina superior. Vista trasera: parte superior de la calota cyan, banda inferior con patrón geométrico diagonal blanco/rosa/negro, wordmark "EDGE" centrado, sticker "DOT" pequeño en la parte más baja centrado, acentos cyan a los costados de la banda inferior.

**⚠️ Pregunta abierta para el usuario:** al igual que en los colorways 1 y 2 de `simulacion-30-edge-racing-livery.md`, la imagen de diseño de este colorway muestra visor oscuro/tintado, distinto del visor transparente del checkpoint. Se trata como parte intencional del diseño de esta línea de carreras (no como error) — confirmar si es así o si el visor debe quedar transparente como en el checkpoint real.

<details><summary>Prompt — Colorway 3 (cyan/rosa/blanco), vista lateral</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista lateral/3-4), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO (sin ningún gráfico encima) es la
  ÚNICA autoridad de FORMA — pico frontal, silueta de la calota,
  mentonera, ventilaciones, mecanismo de pivote del visor, todo tal
  cual está en esa foto. Copiala sin ninguna variación.
- La imagen del casco con el diseño CYAN/ROSA/BLANCO ya aplicado
  (sobre un casco de referencia, no necesariamente el mismo molde) es
  SOLO fuente de diseño gráfico — colores, patrones geométricos,
  wordmark "EDGE", nunca su forma. Si esa imagen muestra una forma de
  casco distinta a la del molde negro liso, ignorá esa forma por
  completo.

PASO 1 — FORMA: reproducí exactamente la forma del casco negro liso
(pico frontal, ventilaciones, mentonera, mecanismo de pivote, correa
roja) antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway cyan/rosa/blanco:
- Carcasa principal: base cyan/teal brillante en la parte superior de
  la calota y en el pico frontal.
- Panel geométrico blanco/gris claro con líneas negras tipo hexágono
  en la zona central de la calota.
- Franjas diagonales y formas tipo chevron en rosa/magenta en la
  parte inferior delantera.
- Wordmark "EDGE" en gris oscuro/negro, tipografía bold itálica,
  sobre el panel blanco (mismo estilo que en la referencia de
  diseño).
- Textura fina tipo malla/triángulos en la esquina superior de la
  calota.
- Sticker "DOT" en la parte trasera inferior (se agrega en la vista
  trasera, no en esta vista lateral si no es visible desde este
  ángulo).

VISOR: tintado/oscuro, igual que en la imagen de diseño de referencia
(cambio intencional de este colorway, confirmado como parte del
diseño de carreras, no un error).

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso: no
cambiar el ángulo de cámara ni la altura ni la rotación.

PROHIBIDO ABSOLUTO: no cambiar la forma, silueta, ventilaciones,
mentonera ni pico frontal del molde real. No copiar la forma del
casco de la imagen de diseño si es distinta a la del molde real. No
agregar elementos gráficos que no estén en la lista de arriba (nada
de franjas azules, rojas ni de otros colorways). No cambiar el color
de la correa roja.
```

</details>

<details><summary>Prompt — Colorway 3 (cyan/rosa/blanco), vista trasera</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista trasera), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO vista trasera es la ÚNICA autoridad
  de FORMA — silueta de la calota desde atrás, borde inferior, tal
  cual está en esa foto.
- La imagen de diseño cyan/rosa/blanco vista trasera es SOLO fuente
  de diseño gráfico, nunca de forma.

PASO 1 — FORMA: reproducí exactamente la forma trasera del casco
negro liso antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway cyan/rosa/blanco:
- Parte superior de la calota: cyan sólido.
- Banda inferior: patrón geométrico diagonal blanco/rosa/negro.
- Wordmark "EDGE" en gris oscuro/negro, centrado, sobre la banda
  inferior.
- Sticker "DOT" pequeño en la parte más baja, centrado.
- Acentos cyan a los costados de la banda inferior.

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso vista
trasera.

PROHIBIDO ABSOLUTO: no cambiar la forma ni la silueta trasera del
molde real. No copiar la forma del casco de la imagen de diseño si es
distinta. No agregar elementos gráficos fuera de la lista de arriba
(nada de franjas azules, rojas ni de otros colorways).
```

</details>

**Estado:** 🔴 pendientes de generar (los 2 prompts).

**Qué hay que hacer:** correr los 2 prompts (en sesiones aisladas) y mandar los resultados para auditoría. Ver también `simulacion-30-edge-racing-livery.md` para la pregunta abierta sobre el visor tintado (si es intencional o debe ser transparente como el checkpoint) y el estado general del caso de livery EDGE con sus otros colorways.

---

**Última actualización:** 2026-07-28 · colorway cyan/rosa/blanco agregado como archivo separado del caso de livery EDGE "Temporada 2026" (ver `simulacion-30-edge-racing-livery.md` para el molde real y los demás colorways). Se agrega la advertencia de abajo: los 2 prompts de este archivo todavía no tienen el "tercer eje" de realismo fotográfico.

> ⚠️ **Antes de correr estos prompts:** les falta el "tercer eje" de realismo fotográfico (forma / contenido gráfico / estilo de render), que se descubrió después de escribirlos. Sin él, el generador devuelve una ilustración plana y arrastra la forma del mockup en vez de la del molde real — defecto real documentado en `simulacion-30-edge-racing-livery.md` (Colorway 1, Intentos 2→3 de la lateral y 3→4 de la trasera). Antes de usarlos, copiales el bloque `CRÍTICO — EL RESULTADO ES UNA FOTOGRAFÍA, NO UNA ILUSTRACIÓN` y la versión de "DOS FUENTES, TRES ROLES" de los prompts corregidos de ese archivo.
