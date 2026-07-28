# Simulación 22 — Casco negro mate con visera dorada iridiscente: 4 variantes de color de carcasa (Tipo A, geometría + visera intactas)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Casco de referencia: full face, negro mate, aleta/spoiler lateral tipo tiburón, ventilaciones superior y laterales, visera dorada/ámbar iridiscente con degradé azul-violeta en el borde superior. **Modelo sin nombre confirmado en esta sesión.**

Pedido explícito del usuario: 4 variantes de color de carcasa, visera SIN cambios en las 4 (a diferencia de Boston, acá no se pidió tocar el visor). El usuario pidió "gris" y "gris mate" como dos variantes separadas — se asumió que son dos grises distintos (medio y oscuro) para que no queden idénticas; **falta confirmar si esa distinción es la correcta o si el usuario quería dos veces el mismo gris por error.**

<details><summary>Prompt Variante 1 — Celeste claro</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: no cambies ningún componente físico —
misma forma de calota, misma aleta/spoiler lateral tipo tiburón, mismas
ventilaciones (superior y laterales), mismo mecanismo de pivote de la
visera, misma silueta general, mismo borde inferior.

CRÍTICO — VISERA SIN CAMBIOS: la visera dorada/ámbar iridiscente con
degradé azul-violeta en el borde superior queda EXACTAMENTE igual —
mismo color, mismo brillo, mismo degradé. No se toca en esta tarea.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa completa: CELESTE CLARO (uniforme, mismo tipo de acabado mate
  que el original).
- Todas las demás piezas (ventilaciones, pivote, borde) sin cambios de
  color.

PROHIBIDO ABSOLUTO: no tocar el color de la visera, no agregar gráficos,
logos, texto, ni cambiar forma/tamaño/posición de ningún componente.
Solo color de carcasa (celeste claro).
```

</details>

<details><summary>Prompt Variante 2 — Gris (medio)</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: misma aleta lateral, mismas ventilaciones,
mismo pivote, misma silueta, mismo borde — ningún componente cambia de
forma ni posición.

CRÍTICO — VISERA SIN CAMBIOS: la visera dorada/ámbar iridiscente con
degradé azul-violeta queda EXACTAMENTE igual — mismo color, mismo
brillo, mismo degradé.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa completa: GRIS MEDIO (tono gris estándar, ni muy claro ni muy
  oscuro, mismo acabado mate del original).

PROHIBIDO ABSOLUTO: no tocar el color de la visera, no agregar gráficos,
logos, texto, ni cambiar forma/tamaño/posición de ningún componente.
Solo color de carcasa (gris medio).
```

</details>

<details><summary>Prompt Variante 3 — Rosado neón</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: misma aleta lateral, mismas ventilaciones,
mismo pivote, misma silueta, mismo borde — ningún componente cambia de
forma ni posición.

CRÍTICO — VISERA SIN CAMBIOS: la visera dorada/ámbar iridiscente con
degradé azul-violeta queda EXACTAMENTE igual — mismo color, mismo
brillo, mismo degradé.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa completa: ROSADO NEÓN (color vibrante, saturado, mismo tipo
  de acabado mate del original — el neón está en la intensidad del
  color, no en un acabado brillante nuevo).

PROHIBIDO ABSOLUTO: no tocar el color de la visera, no agregar gráficos,
logos, texto, ni cambiar forma/tamaño/posición de ningún componente.
Solo color de carcasa (rosado neón).
```

</details>

<details><summary>Prompt Variante 4 — Gris mate oscuro</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: misma aleta lateral, mismas ventilaciones,
mismo pivote, misma silueta, mismo borde — ningún componente cambia de
forma ni posición.

CRÍTICO — VISERA SIN CAMBIOS: la visera dorada/ámbar iridiscente con
degradé azul-violeta queda EXACTAMENTE igual — mismo color, mismo
brillo, mismo degradé.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa completa: GRIS MATE OSCURO (tono gris más oscuro y apagado
  que un gris medio estándar, acabado mate uniforme — más cerca del
  gris carbón que del gris claro).

PROHIBIDO ABSOLUTO: no tocar el color de la visera, no agregar gráficos,
logos, texto, ni cambiar forma/tamaño/posición de ningún componente.
Solo color de carcasa (gris mate oscuro).
```

</details>

**Estado:** 🔴 pendientes de generar (los 4).

**Qué hay que hacer:**
1. Confirmar si "gris" (Variante 2) y "gris mate" (Variante 4) debían ser dos tonos distintos (como se asumió) o el usuario quiso pedir el mismo gris dos veces por error.
2. Confirmar a qué modelo del catálogo corresponde este casco (no asumido en esta sesión).
3. Correr los 4 prompts (idealmente en sesiones aisladas cada uno) y mandar los resultados para auditoría.
4. Subir la foto de referencia real como adjunto para versionarla.

---

**Última actualización:** 2026-07-28 · prompts armados directo (sin agente auditor separado, por pedido de velocidad del usuario).
