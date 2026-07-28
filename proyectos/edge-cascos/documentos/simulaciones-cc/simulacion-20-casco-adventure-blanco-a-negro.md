# Simulación 20 — Casco adventure/dual-sport EDGE: recolor blanco → negro mate por vista (Tipo A, geometría intacta)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Caso nuevo: casco adventure/dual-sport (doble visera — externa iridiscente dorada/violeta abatible + interna ahumada), color original blanco perla, logo EDGE, ventilaciones negras. **Modelo sin nombre confirmado en esta sesión.**

Pedido explícito del usuario: **una tarea única por vista** — cada prompt cambia SOLO la superficie blanca a negro mate, preservando el 100% de todo lo demás (ambas viseras, ventilaciones, logo, geometría). 4 vistas provistas: 3/4 abierta (visera externa levantada), 3/4 cerrada, superior, frontal.

<details><summary>Prompt 1 — Vista 3/4 abierta (visera externa levantada)</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta
(vista 3/4 con la visera externa levantada, mostrando el visor interno
ahumado abatido), mismo ángulo, encuadre y fondo blanco.

TAREA ÚNICA — SOLO ESTO CAMBIA: la superficie blanca/perla de la carcasa
pasa a NEGRO MATE. Nada más cambia.

CRÍTICO — TODO LO DEMÁS QUEDA 100% IGUAL, SIN EXCEPCIÓN:
- Visera externa (la abatible, iridiscente dorada/violeta): EXACTAMENTE
  igual, mismo color iridiscente, mismo brillo, mismo mecanismo de
  pivote lateral, en la misma posición levantada.
- Visor interno ahumado (el que se ve abatido dentro): sin cambios,
  mismo tono ahumado, misma posición.
- Todas las piezas negras (ventilaciones frontales, mentonera, marco de
  la visera, logo/badge superior, base de la calota): sin cambios de
  color, forma ni posición — ya son negras, quedan igual.
- Geometría, forma, tamaño y proporciones del casco: 100% idénticas al
  original, ningún componente se mueve, agranda, achica ni se elimina.

PROHIBIDO ABSOLUTO: no tocar el color ni el brillo de ninguna de las dos
viseras (externa iridiscente, interna ahumada). No agregar logos, texto
ni gráficos nuevos. No cambiar ningún componente físico. El ÚNICO cambio
permitido en toda la imagen es: blanco/perla → negro mate en la carcasa.

Resolución 4K, fondo blanco limpio, mismo encuadre que la referencia.
```

</details>

<details><summary>Prompt 2 — Vista 3/4 lateral (casco cerrado, visera baja)</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta
(vista 3/4 lateral, casco cerrado, visera externa dorada/iridiscente
bajada), mismo ángulo, encuadre y fondo blanco.

TAREA ÚNICA — SOLO ESTO CAMBIA: la superficie blanca/perla de la carcasa
pasa a NEGRO MATE. Nada más cambia.

CRÍTICO — TODO LO DEMÁS QUEDA 100% IGUAL, SIN EXCEPCIÓN:
- Visera externa iridiscente dorada/violeta: EXACTAMENTE igual, mismo
  color, mismo brillo, misma transparencia degradada, en su posición
  cerrada.
- Ventilaciones negras laterales, base negra de la mentonera, badge/logo
  superior: sin cambios de color, forma ni posición.
- Geometría, forma, tamaño y proporciones: 100% idénticas al original.

PROHIBIDO ABSOLUTO: no tocar el color ni el brillo de la visera. No
agregar logos, texto ni gráficos nuevos. No cambiar ningún componente
físico. El ÚNICO cambio permitido es: blanco/perla → negro mate en la
carcasa.

Resolución 4K, fondo blanco limpio, mismo encuadre que la referencia.
```

</details>

<details><summary>Prompt 3 — Vista superior</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta
(vista superior, desde arriba), mismo ángulo, encuadre y fondo blanco.

TAREA ÚNICA — SOLO ESTO CAMBIA: la superficie blanca/perla de la carcasa
pasa a NEGRO MATE. Nada más cambia.

CRÍTICO — TODO LO DEMÁS QUEDA 100% IGUAL, SIN EXCEPCIÓN:
- Badge/logo negro central superior (con forma de escudo/máscara): sin
  cambios de color, forma ni posición.
- Franja/reborde oscuro de la base de la visera visible en este ángulo:
  sin cambios.
- Geometría, forma, tamaño y proporciones del casco vistas desde arriba:
  100% idénticas al original.

PROHIBIDO ABSOLUTO: no agregar logos, texto ni gráficos nuevos. No
cambiar ningún componente físico. El ÚNICO cambio permitido es:
blanco/perla → negro mate en la carcasa.

Resolución 4K, fondo blanco limpio, mismo encuadre que la referencia.
```

</details>

<details><summary>Prompt 4 — Vista frontal</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta
(vista frontal, casco cerrado, de frente), mismo ángulo, encuadre y fondo
blanco.

TAREA ÚNICA — SOLO ESTO CAMBIA: la superficie blanca/perla de la carcasa
pasa a NEGRO MATE. Nada más cambia.

CRÍTICO — TODO LO DEMÁS QUEDA 100% IGUAL, SIN EXCEPCIÓN:
- Visera externa iridiscente dorada/violeta: EXACTAMENTE igual, mismo
  degradé de color (dorado arriba, más oscuro/violeta hacia los bordes),
  mismo brillo, misma transparencia.
- Ventilaciones negras simétricas a ambos lados de la mentonera, badge
  superior: sin cambios de color, forma ni posición.
- Geometría, forma, tamaño y proporciones vistas de frente: 100%
  idénticas al original.

PROHIBIDO ABSOLUTO: no tocar el color ni el brillo de la visera. No
agregar logos, texto ni gráficos nuevos. No cambiar ningún componente
físico. El ÚNICO cambio permitido es: blanco/perla → negro mate en la
carcasa.

Resolución 4K, fondo blanco limpio, mismo encuadre que la referencia.
```

</details>

**Estado:** 🔴 pendientes de generar (los 4).

**Qué hay que hacer:**
1. Confirmar a qué modelo del catálogo corresponde este casco (no asumido en esta sesión).
2. Correr los 4 prompts, uno por vista (idealmente en sesiones aisladas cada uno, ver hallazgo de contaminación cruzada en `simulacion-11-vortex-verificacion.md`), y mandar los resultados para auditoría.
3. Subir las 4 fotos de referencia reales como adjunto para versionarlas.

---

**Última actualización:** 2026-07-28 · prompts armados directo (sin agente auditor separado, por pedido de velocidad del usuario) — un prompt por vista, tarea única cada uno.
