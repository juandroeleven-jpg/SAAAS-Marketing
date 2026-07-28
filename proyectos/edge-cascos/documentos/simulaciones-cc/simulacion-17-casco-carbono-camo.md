# Simulación 17 — Casco carbono/racing: 4 variantes de camuflaje militar (Tipo A, geometría intacta)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md)

Sub-caso de variantes de color/patrón, mismo patrón que las 4 variantes de Stellar (`simulacion-14-stellar-verificacion.md`), pero con **patrón de camuflaje militar** en vez de color sólido. Casco de referencia: full face, textura de fibra de carbono, spoiler/aleta trasera puntiaguda, mecanismo de pivote de visera visible, borde inferior negro — **modelo sin nombre confirmado en esta sesión**, no asumir a qué caso del catálogo (Kratos/Vortex/Stellar/etc.) corresponde hasta que el usuario lo confirme.

Hecho en primer plano (no en segundo plano) a pedido explícito de velocidad del usuario.

<details><summary>Prompt Variante 1 — Camuflaje gris + turquesa</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo y encuadre 3/4, mismo fondo.

CRÍTICO — GEOMETRÍA INTACTA: no cambies ningún componente físico — misma
forma de calota, mismo spoiler/aleta trasera, mismo mecanismo de pivote
de la visera, misma ventilación superior, mismo borde inferior negro,
misma silueta general. Es el mismo objeto 3D, solo cambia el
patrón/color de la superficie de la carcasa.

CAMBIO DE SUPERFICIE — ÚNICO cambio permitido:
- Reemplazá la textura de carbono de la carcasa por un PATRÓN
  CAMUFLAJE MILITAR tipo disruptivo: manchas orgánicas irregulares
  (no geométricas, no simétricas), en dos tonos: GRIS y TURQUESA,
  distribuidas de forma natural sobre toda la calota, mentonera y
  spoiler trasero.
- Las piezas que ya son negras en el original (borde inferior, detalle
  de ventilación, acabado del spoiler) se mantienen negras, el patrón
  no las cubre.
- Visera: SIN CAMBIOS — transparente como en la referencia.
- Herrajes/tornillos del pivote: sin cambios (metálicos).

PROHIBIDO ABSOLUTO: no agregar logos, texto, gráficos figurativos ni
cambiar forma/tamaño/posición de ningún componente. Solo el patrón
camuflaje gris/turquesa sobre la carcasa. Visera intacta.
```

</details>

<details><summary>Prompt Variante 2 — Camuflaje gris + rojo</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo spoiler trasero, mismo pivote, misma
ventilación, misma silueta, mismo borde — ningún componente cambia de
forma ni posición. Solo cambia el patrón/color de superficie.

CAMBIO DE SUPERFICIE — ÚNICO cambio permitido:
- Patrón camuflaje militar disruptivo (manchas orgánicas irregulares) en
  dos tonos: GRIS y ROJO, sobre toda la carcasa (calota, mentonera,
  spoiler trasero).
- Piezas ya negras del original se mantienen negras.
- Visera: SIN CAMBIOS — transparente.
- Herrajes del pivote: sin cambios.

PROHIBIDO ABSOLUTO: no agregar logos, texto ni gráficos figurativos, no
cambiar forma/tamaño/posición de ningún componente. Solo el patrón
camuflaje gris/rojo. Visera intacta.
```

</details>

<details><summary>Prompt Variante 3 — Camuflaje blanco + negro</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo spoiler, mismo pivote, misma
ventilación, misma silueta, mismo borde — sin cambios de forma/posición
en ningún componente. Solo cambia el patrón/color de superficie.

CAMBIO DE SUPERFICIE — ÚNICO cambio permitido:
- Patrón camuflaje militar disruptivo (manchas orgánicas irregulares) en
  BLANCO y NEGRO, alto contraste, sobre toda la carcasa (calota,
  mentonera, spoiler trasero).
- El resto de piezas negras del casco (borde, detalles) se integran de
  forma natural con el negro del patrón.
- Visera: SIN CAMBIOS — transparente.
- Herrajes del pivote: sin cambios.

PROHIBIDO ABSOLUTO: no agregar logos, texto ni gráficos figurativos, no
cambiar forma/tamaño/posición de ningún componente. Solo el patrón
camuflaje blanco/negro. Visera intacta.
```

</details>

<details><summary>Prompt Variante 4 — Camuflaje monocromático azul claro/azul oscuro</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo spoiler, mismo pivote, misma
ventilación, misma silueta, mismo borde — sin cambios de forma/posición
en ningún componente. Solo cambia el patrón/color de superficie.

CAMBIO DE SUPERFICIE — ÚNICO cambio permitido:
- Patrón camuflaje militar disruptivo (manchas orgánicas irregulares),
  monocromático en tonos AZULES: mezcla de AZUL CLARO y AZUL OSCURO
  únicamente (sin gris, sin otro color), sobre toda la carcasa (calota,
  mentonera, spoiler trasero).
- Piezas ya negras del original se mantienen negras.
- Visera: SIN CAMBIOS — transparente.
- Herrajes del pivote: sin cambios.

PROHIBIDO ABSOLUTO: no agregar logos, texto ni gráficos figurativos, no
cambiar forma/tamaño/posición de ningún componente. Solo el patrón
camuflaje azul claro/azul oscuro. Visera intacta.
```

</details>

**Estado:** 🔴 pendientes de generar (los 4).

**Qué hay que hacer:**
1. Confirmar a qué modelo del catálogo corresponde este casco (no asumido en esta sesión).
2. Correr los 4 prompts (idealmente en sesiones aisladas, ver hallazgo de contaminación cruzada documentado en `simulacion-11-vortex-verificacion.md`) y mandar los resultados para auditoría.
3. Subir la foto de referencia real como adjunto para versionarla.

---

**Última actualización:** 2026-07-28 · prompts armados en primer plano (sin agente) a pedido explícito de velocidad del usuario.
