# Simulación 26 — Casco retro/redondo: goma del borde inferior a negro (Tipo A, geometría 100% intacta)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Dos coloways del mismo molde de casco retro/redondo (estilo café racer, calota lisa, pivote cromado circular, visor transparente): uno lila/rosa, otro blanco/azul marino. Pedido explícito del usuario: cambiar **únicamente** la goma/tira del borde inferior del casco a **negro**, sin alterar absolutamente nada más de la imagen (ni la carcasa, ni el marco del visor, ni la pieza de ventilación de la sien, ni el pivote, ni el visor).

<details><summary>Prompt — Variante lila/rosa: goma inferior a negro</summary>

```
Genera una imagen de producto del mismo casco lila/lavanda de la
referencia adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA Y COLOR INTACTOS, CAMBIO ÚNICO Y PUNTUAL: no
modifiques absolutamente nada de la imagen excepto la pieza indicada
abajo. Todo lo demás queda EXACTAMENTE igual:
- Carcasa principal lila/lavanda mate: SIN CAMBIOS.
- Marco del visor y la pieza de ventilación con forma hexagonal cerca
  de la sien (actualmente rosa): SIN CAMBIOS, quedan rosa.
- Visor transparente: SIN CAMBIOS.
- Pivote circular cromado: SIN CAMBIOS.
- Silueta, forma y tamaño del casco: SIN CAMBIOS, es el mismo objeto
  3D exacto.

ÚNICO CAMBIO PERMITIDO: la tira/goma que recorre el borde inferior del
casco (el faldón inferior, actualmente de color ROSA) pasa a ser
NEGRA — negro sólido, mate, mismo tipo de acabado de goma que tiene
ahora, solo cambia el color de rosa a negro. No toques ninguna otra
pieza rosa de la imagen (el marco del visor y la pieza hexagonal de la
sien siguen rosa, NO se cambian).

PROHIBIDO ABSOLUTO: no agregar gráficos, logos ni texto. No cambiar
forma, tamaño ni posición de ningún componente. No cambiar el color de
ninguna otra pieza que no sea la goma del borde inferior.
```

</details>

<details><summary>Prompt — Variante blanco/azul marino: goma inferior a negro</summary>

```
Genera una imagen de producto del mismo casco blanco de la referencia
adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA Y COLOR INTACTOS, CAMBIO ÚNICO Y PUNTUAL: no
modifiques absolutamente nada de la imagen excepto la pieza indicada
abajo. Todo lo demás queda EXACTAMENTE igual:
- Carcasa principal blanca: SIN CAMBIOS.
- Marco del visor y la pieza de ventilación con forma hexagonal cerca
  de la sien (actualmente azul marino): SIN CAMBIOS, quedan azul
  marino.
- Visor transparente: SIN CAMBIOS.
- Pivote circular cromado: SIN CAMBIOS.
- Silueta, forma y tamaño del casco: SIN CAMBIOS, es el mismo objeto
  3D exacto.

ÚNICO CAMBIO PERMITIDO: la tira/goma que recorre el borde inferior del
casco (el faldón inferior, actualmente de color AZUL MARINO) pasa a
ser NEGRA — negro sólido, mate, mismo tipo de acabado de goma que
tiene ahora, solo cambia el color de azul marino a negro. Si el panel
lateral azul marino de la mejilla y la goma del borde inferior son la
misma pieza continua en esta referencia, cambiá a negro SOLO la franja
más baja (el faldón/borde inferior), dejando el resto del panel
lateral azul marino sin cambios. No toques la pieza hexagonal de la
sien, que sigue azul marino.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos ni texto. No cambiar
forma, tamaño ni posición de ningún componente. No cambiar el color de
ninguna otra pieza que no sea la goma del borde inferior.
```

</details>

**Estado:** 🔴 pendientes de generar (las 2).

**Qué hay que hacer:**
1. Correr los 2 prompts (en sesiones aisladas cada uno, ver hallazgo de contaminación cruzada del catálogo) y mandar los resultados para auditoría.
2. Si en la variante blanco/azul la goma inferior y el panel lateral de la mejilla resultan ser una sola pieza continua (no separable visualmente), confirmar con el usuario si el negro debe cubrir todo ese bloque o solo la franja más baja.
3. Subir las 2 imágenes de referencia como adjuntos para versionarlas.

---

**Última actualización:** 2026-07-28 · primer caso de un molde de casco retro/redondo en el catálogo, armado directo a pedido de velocidad del usuario.
