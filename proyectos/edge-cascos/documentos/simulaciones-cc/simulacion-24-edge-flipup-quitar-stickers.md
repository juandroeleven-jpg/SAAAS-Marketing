# Simulación 24 — Casco EDGE flip-up: quitar stickers/logos por vista (Tipo A, geometría intacta)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Casco de referencia: modular/flip-up marca EDGE, negro mate, acabado cromado en el pico frontal, acolchado interior rojo, visera transparente. **Modelo sin nombre confirmado en esta sesión.**

Pedido explícito del usuario: no es un cambio de color/patrón como los casos anteriores — es **limpieza de producto**: sacar todos los stickers, logos y etiquetas visibles (el escudo "EDGE HELMETS", el sticker "DOT FMVSS NO. 218 CERTIFIED", el sticker grande de protección sobre la visera con el wordmark "EDGE" y gráfico naranja/violeta), preservando el 100% del resto (geometría, color, cromado, acolchado, visera en sí). 3 vistas provistas: trasera, 3/4 lateral, frontal.

<details><summary>Prompt 1 — Vista trasera (sacar sticker de logo EDGE + certificación DOT)</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta
(vista trasera), mismo ángulo, encuadre y fondo.

TAREA ÚNICA: eliminar el sticker/calcomanía del logo "EDGE HELMETS" (el
escudo rojo/azul/blanco) y el sticker "DOT FMVSS NO. 218 CERTIFIED" que
aparecen en el panel inferior trasero — dejar esa superficie limpia,
lisa, negro mate, sin ningún texto ni logo ni marca.

CRÍTICO — TODO LO DEMÁS QUEDA 100% IGUAL, SIN EXCEPCIÓN: misma
geometría, misma forma de calota, mismo borde superior con la línea de
la visera, mismos detalles de ventilación de la mentonera, mismo
acabado (negro mate arriba, panel gris/mate abajo donde estaban los
stickers), mismo brillo de la visera visible desde atrás.

PROHIBIDO ABSOLUTO: no agregar texto, logos ni gráficos nuevos en
ningún lugar. No cambiar geometría, color base, forma ni posición de
ningún componente. El ÚNICO cambio es: eliminar los 2 stickers/logos y
dejar esa zona lisa.
```

</details>

<details><summary>Prompt 2 — Vista 3/4 lateral (sacar cualquier logo/texto visible)</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta
(vista 3/4 lateral, visera abierta), mismo ángulo, encuadre y fondo.

TAREA ÚNICA: eliminar cualquier logo, texto o sticker visible en esta
vista (si hay alguna marca, etiqueta o calcomanía en la visera, el
borde o la carcasa) — dejar esas superficies limpias, sin texto ni
logos.

CRÍTICO — TODO LO DEMÁS QUEDA 100% IGUAL, SIN EXCEPCIÓN: misma
geometría, mismo acabado negro mate, mismo detalle cromado en el
pico/frente, mismo mecanismo de bisagra de la mentonera, mismo
acolchado interior rojo visible, misma visera transparente y su
mecanismo de pivote.

PROHIBIDO ABSOLUTO: no agregar texto, logos ni gráficos nuevos en
ningún lugar. No cambiar geometría, color, forma ni posición de ningún
componente. El ÚNICO cambio es: eliminar cualquier logo/texto/sticker
visible.
```

</details>

<details><summary>Prompt 3 — Vista frontal (sacar logo "EDGE" de la calota + sticker grande de la visera)</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta
(vista frontal), mismo ángulo, encuadre y fondo.

TAREA ÚNICA: eliminar el texto/logo "EDGE" impreso en la parte superior
frontal de la calota, Y eliminar por completo el sticker/calcomanía
grande que está pegado sobre la visera (el que dice "APPROVED DOT FMVSS
NO. 218 CERTIFIED", el wordmark "EDGE" y el gráfico naranja/violeta) —
la visera debe quedar TOTALMENTE TRANSPARENTE y limpia, como visor
nuevo sin ningún sticker de protección ni etiqueta.

CRÍTICO — TODO LO DEMÁS QUEDA 100% IGUAL, SIN EXCEPCIÓN: misma
geometría de la calota y la mentonera, mismas ventilaciones frontales,
mismo acabado negro mate, mismo mecanismo de pivote de la visera, misma
forma y curvatura de la visera (solo se limpia, no cambia de forma).

PROHIBIDO ABSOLUTO: no agregar texto, logos ni gráficos nuevos en
ningún lugar, ni en la carcasa ni en la visera. No cambiar geometría,
color, forma ni posición de ningún componente. El ÚNICO cambio es:
eliminar el logo de la calota y el sticker completo de la visera,
dejando la visera transparente y limpia.
```

</details>

**Estado:** 🔴 pendientes de generar (los 3).

**Qué hay que hacer:**
1. Confirmar a qué modelo del catálogo corresponde este casco (no asumido en esta sesión).
2. Correr los 3 prompts (idealmente en sesiones aisladas cada uno) y mandar los resultados para auditoría — prestar especial atención a que no queden restos de texto/logo ni sombras fantasma donde estaban los stickers.
3. Subir las 3 fotos de referencia reales como adjunto para versionarlas.

---

**Última actualización:** 2026-07-28 · prompts armados directo (sin agente auditor separado, por pedido de velocidad del usuario). Primer caso del catálogo de tipo "limpieza de producto" (quitar stickers/logos), distinto de los casos de cambio de color.
