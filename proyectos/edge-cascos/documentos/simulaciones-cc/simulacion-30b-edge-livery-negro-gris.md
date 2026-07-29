# Simulación 30b — Livery de carreras EDGE "Temporada 2026": colorway negro/gris monocromático (Tipo A, múltiples vistas)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md) · [← Caso hermano: simulación 30 (livery EDGE, colorways 1 y 2)](simulacion-30-edge-racing-livery.md)

Archivo autocontenido para un colorway adicional del mismo caso documentado en `simulacion-30-edge-racing-livery.md` (livery de carreras EDGE "Temporada 2026", Tipo A, pipeline Agente 0 → Generador → Auditor documentado en `orquestacion-agentes-paralelos.md`). Se separa en su propio archivo para permitir generación en paralelo sin conflictos de merge con los otros colorways del mismo caso.

**Pedido:** adaptar el livery de carreras de marca EDGE ("Temporada 2026") sobre el molde real de un casco full-face negro mate ya fotografiado (checkpoint), para el colorway "Negro/gris monocromático EDGE".

**Molde real (checkpoint), 2 vistas recibidas:**
- Vista lateral/3-4: casco full-face negro mate, pico frontal puntiagudo, visor transparente, correa roja, mentonera y ventilaciones en el mismo tono negro mate que la calota (sin piezas de plástico crudo visible como en otros moldes del catálogo).
- Vista trasera: calota negra mate, borde inferior negro, sin gráficos.

**Colorway — Negro/gris monocromático EDGE:** carcasa predominantemente negra con patrones geométricos en gris gunmetal (líneas angulares concéntricas, formas tipo chevron/hexágono) cubriendo la calota, textura fina tipo malla/puntos en la zona superior cerca del pico frontal, wordmark "EDGE" en gris claro, tipografía bold itálica, sobre la zona inferior lateral, visor tintado/oscuro (a diferencia del checkpoint, que tiene visor transparente — ver nota abajo), un pequeño acento rojo puntual cerca de la ventilación (una marca/etiqueta chica roja, tipo "X-140", no un elemento grande), pico frontal en el mismo tono negro/gris del resto de la carcasa. Vista trasera: parte superior de la calota negra, banda inferior con patrón geométrico diagonal gris, wordmark "EDGE" centrado en gris sobre la banda inferior, sticker "DOT" pequeño en la parte más baja centrado, pequeños acentos rojos puntuales a los costados de la banda inferior (mismos acentos rojos chicos que en la vista lateral, no un color dominante).

**⚠️ Pregunta abierta para el usuario:** igual que en los colorways 1 y 2 del caso (ver `simulacion-30-edge-racing-livery.md`), esta imagen de diseño muestra visor oscuro/tintado, distinto del visor transparente del checkpoint. Como se repite en los tres colorways, se trata como parte intencional del diseño de esta línea de carreras (no como error) — confirmar si es así o si el visor debe quedar transparente como en el checkpoint real.

<details><summary>Prompt — Colorway negro/gris, vista lateral</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista lateral/3-4), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO (sin ningún gráfico encima) es la
  ÚNICA autoridad de FORMA — pico frontal, silueta de la calota,
  mentonera, ventilaciones, mecanismo de pivote del visor, todo tal
  cual está en esa foto. Copiala sin ninguna variación.
- La imagen del casco con el diseño NEGRO/GRIS MONOCROMÁTICO ya
  aplicado (sobre un casco de referencia, no necesariamente el mismo
  molde) es SOLO fuente de diseño gráfico — colores, patrones
  geométricos, wordmark "EDGE", nunca su forma. Si esa imagen muestra
  una forma de casco distinta a la del molde negro liso, ignorá esa
  forma por completo.

PASO 1 — FORMA: reproducí exactamente la forma del casco negro liso
(pico frontal, ventilaciones, mentonera, mecanismo de pivote, correa
roja) antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway negro/gris monocromático:
- Carcasa principal: negra, con patrones geométricos en gris
  gunmetal (líneas angulares concéntricas, formas tipo
  chevron/hexágono) cubriendo la calota.
- Textura fina tipo malla/puntos en la zona superior de la calota,
  cerca del pico frontal.
- Wordmark "EDGE" en gris claro, tipografía bold itálica, sobre la
  zona inferior lateral (mismo estilo que en la referencia de
  diseño).
- Un pequeño acento rojo puntual cerca de la zona de ventilación
  (una marca/etiqueta chica roja, tipo "X-140" — no un elemento
  grande ni un color dominante).
- Pico frontal: mismo tono negro/gris del resto de la carcasa (no
  un color sólido distinto).
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
agregar elementos gráficos que no estén en la lista de arriba. No
convertir el acento rojo chico en un color dominante ni en un panel
grande. No cambiar el color de la correa roja.
```

</details>

<details><summary>Prompt — Colorway negro/gris, vista trasera</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista trasera), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO vista trasera es la ÚNICA autoridad
  de FORMA — silueta de la calota desde atrás, borde inferior, tal
  cual está en esa foto.
- La imagen de diseño negro/gris monocromático vista trasera es SOLO
  fuente de diseño gráfico, nunca de forma.

PASO 1 — FORMA: reproducí exactamente la forma trasera del casco
negro liso antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway negro/gris monocromático:
- Parte superior de la calota: negra sólida.
- Banda inferior: patrón geométrico diagonal gris.
- Wordmark "EDGE" en gris, centrado, sobre la banda inferior.
- Sticker "DOT" pequeño en la parte más baja, centrado.
- Pequeños acentos rojos puntuales a los costados de la banda
  inferior (mismos acentos rojos chicos que en la vista lateral, no
  un color dominante).

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso vista
trasera.

PROHIBIDO ABSOLUTO: no cambiar la forma ni la silueta trasera del
molde real. No copiar la forma del casco de la imagen de diseño si es
distinta. No agregar elementos gráficos fuera de la lista de arriba.
No convertir los acentos rojos chicos en un color dominante ni en un
panel grande.
```

</details>

**Estado:** 🔴 pendientes de generar (los 2 prompts).

**Qué hay que hacer:** correr los 2 prompts (en sesiones aisladas) y mandar los resultados para auditoría. Ver también `simulacion-30-edge-racing-livery.md` para la pregunta abierta sobre el visor tintado (si es intencional o debe ser transparente como el checkpoint) y el estado general del caso de livery EDGE con sus otros colorways.

---

**Última actualización:** 2026-07-28 · colorway negro/gris monocromático agregado como archivo separado del caso de livery EDGE "Temporada 2026" (ver `simulacion-30-edge-racing-livery.md` para el molde real y los demás colorways).
