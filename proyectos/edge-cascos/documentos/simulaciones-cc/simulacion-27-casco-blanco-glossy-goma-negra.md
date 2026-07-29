# Simulación 27 — Casco blanco glossy con detalles tostados: goma del borde inferior a negro (Tipo A, cambio único y puntual)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Casco full-face con carcasa blanca perlada/glossy (brillo tipo perla), pico frontal (spoiler) y pieza de ventilación lateral en color beige/tostado, visor azul espejado/tintado, pivote cromado/plateado junto al visor, y una tira/goma en el borde inferior de la calota actualmente también beige/tostada. Pedido explícito del usuario, dejado como comentario directo sobre la imagen de referencia en la herramienta de diseño (compañero de equipo "jimgarzons"): **"LA GOMA DE ABAJO DEL CASCO DEBE SER COLOR NEGRO. LOS ACCESORIOS SI PUEDEN QUEDARSE DE ESE COLOR, SOLO CAMBIAR LA GOMA DE ABAJO A COLOR NEGRO. ESTO APLICAR PARA TODOS LOS CASOS"** — es decir, la goma del borde inferior pasa a negro, pero el pico frontal y la pieza de ventilación lateral (los "accesorios" tostados) quedan sin cambios. Este comentario formalizó una regla general para todo el catálogo (ver sección 9 de `orquestacion-agentes-paralelos.md`), y este caso es el primero donde se aplica explícitamente.

<details><summary>Prompt — Goma del borde inferior a negro (accesorios tostados sin cambios)</summary>

```
Genera una imagen de producto del mismo casco blanco perlado/glossy de
la referencia adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA Y COLOR INTACTOS, CAMBIO ÚNICO Y PUNTUAL: no
modifiques absolutamente nada de la imagen excepto la pieza indicada
abajo. Todo lo demás queda EXACTAMENTE igual:
- Carcasa principal blanca perlada/glossy: SIN CAMBIOS.
- Pico frontal (spoiler) beige/tostado: SIN CAMBIOS, queda del mismo
  color — es un accesorio, no la goma del borde.
- Pieza de ventilación lateral beige/tostada: SIN CAMBIOS — también es
  un accesorio, no se toca.
- Visor azul espejado/tintado: SIN CAMBIOS.
- Pivote cromado/plateado junto al visor: SIN CAMBIOS.
- Silueta, forma y tamaño del casco: SIN CAMBIOS, es el mismo objeto
  3D exacto.

ÚNICO CAMBIO PERMITIDO: la goma/tira del borde inferior de la calota
(el faldón que recorre el borde bajo del casco, actualmente
beige/tostado) pasa a ser NEGRA — negro sólido, mismo tipo de acabado
que tiene ahora, solo cambia el color. No confundir esta pieza con el
pico frontal ni con la ventilación lateral — esos accesorios quedan
tostados, solo la goma del borde inferior cambia.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos ni texto. No cambiar
forma, tamaño ni posición de ningún componente. No cambiar el color
del pico frontal ni de la pieza de ventilación lateral (quedan
tostados). No cambiar el color de ninguna otra pieza que no sea la
goma del borde inferior.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:**
1. Correr el prompt y mandar el resultado para auditoría.
2. Subir la foto de referencia real como adjunto para versionarla.
3. Ver también la nueva regla general del comentario de "jimgarzons" (goma del borde inferior siempre a negro, aplica a todos los casos del catálogo — sección 9 de `orquestacion-agentes-paralelos.md`) — este caso es el primero donde se aplica explícitamente.

## Segundo casco — molde blanco/celeste futurista, goma del borde inferior a negro

Segundo caso donde se aplica la misma regla general, sobre un molde de casco totalmente distinto: full-face de líneas futuristas, carcasa principal blanca glossy, con piezas de acabado en CELESTE (azul clarito) — una pieza de ventilación tipo aleta cerca de la sien, otra pieza similar más abajo cerca de la mejilla, el área del mecanismo de pivote junto al visor (con textura de engranaje visible), el visor tintado/transparente, y una tira/borde que recorre el borde inferior de la calota, actualmente también celeste. Mismo pedido: la goma del borde inferior pasa a negro, el resto de las piezas celestes (ventilaciones, pivote, visor) quedan sin cambios — son accesorios, no la goma del borde.

<details><summary>Prompt — Goma del borde inferior a negro (casco blanco/celeste, accesorios celestes sin cambios)</summary>

```
Genera una imagen de producto del mismo casco blanco glossy de la
referencia adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA Y COLOR INTACTOS, CAMBIO ÚNICO Y PUNTUAL: no
modifiques absolutamente nada de la imagen excepto la pieza indicada
abajo. Todo lo demás queda EXACTAMENTE igual:
- Carcasa principal blanca glossy: SIN CAMBIOS.
- Pieza de ventilación tipo aleta cerca de la sien (celeste): SIN
  CAMBIOS, queda del mismo color — es un accesorio, no la goma del
  borde.
- Segunda pieza de ventilación cerca de la mejilla (celeste): SIN
  CAMBIOS — también es un accesorio, no se toca.
- Área del mecanismo de pivote junto al visor, con textura de
  engranaje visible (celeste): SIN CAMBIOS.
- Visor tintado/transparente celeste: SIN CAMBIOS.
- Silueta, forma y tamaño del casco: SIN CAMBIOS, es el mismo objeto
  3D exacto.

ÚNICO CAMBIO PERMITIDO: la tira/borde que recorre el borde inferior
de la calota (el faldón que rodea la parte baja del casco, actualmente
celeste) pasa a ser NEGRA — negro sólido, mismo tipo de acabado que
tiene ahora, solo cambia el color. No confundir esta pieza con las
ventilaciones, el pivote ni el visor — esos accesorios quedan
celestes, solo el borde inferior cambia.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos ni texto. No cambiar
forma, tamaño ni posición de ningún componente. No cambiar el color
de las ventilaciones, el pivote ni el visor (quedan celestes). No
cambiar el color de ninguna otra pieza que no sea la goma del borde
inferior.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt y mandar el resultado para auditoría.

---

**Última actualización:** 2026-07-28 · se agrega un segundo casco (molde blanco/celeste futurista) aplicando la misma regla general de goma del borde inferior a negro — primer caso donde se aplica explícitamente la regla general de goma del borde inferior a negro, confirmada por comentario directo del equipo sobre la imagen real.
