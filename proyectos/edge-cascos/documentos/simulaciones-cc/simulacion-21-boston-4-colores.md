# Simulación 21 — Boston (EDGE): 4 variantes de color + visor (Tipo A, geometría intacta)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Primer caso con **nombre de modelo confirmado por el usuario: Boston** (marca EDGE, ya mencionado en el excel del tab EDGE junto a "BOSTON 4.0" — confirmar si esta referencia es Boston o Boston 4.0, no se puede determinar solo por la imagen). Casco de referencia: full face, negro mate, panel lateral glossy negro con luces LED rojas de freno, cover de fibra de carbono en el pivote de la visera, visor ahumado.

Pedido explícito del usuario: 4 variantes de color de carcasa + tinte de visor. El panel lateral glossy con LEDs y el cover de carbono del pivote se asumieron como piezas de acabado fijo (no cambian de color en ninguna variante) — asunción a confirmar.

<details><summary>Prompt Variante 1 — Azul oscuro mate + visor celeste transparente</summary>

```
Genera una imagen de producto del mismo casco EDGE Boston de la
referencia adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: no cambies ningún componente físico —
misma forma de calota, mismo mecanismo de pivote lateral con cover de
fibra de carbono, misma ventilación superior, mismo panel lateral
glossy negro con las luces LED rojas de freno, misma silueta general,
mismo borde inferior. Es el mismo objeto 3D, solo cambia el color de la
carcasa principal y el tinte del visor.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa principal (la superficie mate grande de la calota y
  mentonera): AZUL OSCURO MATE (uniforme, mismo tipo de acabado mate
  que el original).
- Visor: CELESTE, medio transparente (semitransparente, se sigue viendo
  a través, tono celeste claro).
- El panel lateral glossy negro con las luces LED rojas de freno y el
  cover de fibra de carbono del pivote: SIN CAMBIOS, quedan negros
  como en el original (son piezas de acabado distinto, no parte de la
  carcasa principal).

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. No apagar ni cambiar el color de
las luces LED (siguen rojas). Solo color de carcasa principal (azul
oscuro mate) + tinte de visor (celeste transparente).
```

</details>

<details><summary>Prompt Variante 2 — Rojo brillante + visor negro</summary>

```
Genera una imagen de producto del mismo casco EDGE Boston de la
referencia adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo pivote con cover de carbono, misma
ventilación, misma silueta, mismo panel lateral glossy con LEDs rojas,
mismo borde — ningún componente cambia de forma ni posición. Solo cambia
el color.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa principal: ROJO BRILLANTE (acabado glossy, a diferencia del
  mate del original — este es el cambio de acabado pedido para esta
  variante).
- Visor: NEGRO (oscuro, opaco/muy oscurecido — no transparente en esta
  variante).
- Panel lateral glossy negro con LEDs rojas y cover de carbono del
  pivote: sin cambios.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. Solo color de carcasa (rojo
brillante) + visor (negro).
```

</details>

<details><summary>Prompt Variante 3 — Gris claro + visor azul oscuro transparente</summary>

```
Genera una imagen de producto del mismo casco EDGE Boston de la
referencia adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo pivote con cover de carbono, misma
ventilación, misma silueta, mismo panel lateral glossy con LEDs rojas,
mismo borde — ningún componente cambia de forma ni posición. Solo cambia
el color.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa principal: GRIS CLARO (uniforme, mismo acabado mate del
  original).
- Visor: AZUL OSCURO, transparente (se sigue viendo a través con
  claridad, tono azul oscuro).
- Panel lateral glossy negro con LEDs rojas y cover de carbono del
  pivote: sin cambios.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. Solo color de carcasa (gris
claro) + tinte de visor (azul oscuro transparente).
```

</details>

<details><summary>Prompt Variante 4 — Morado mate + visor rojo</summary>

```
Genera una imagen de producto del mismo casco EDGE Boston de la
referencia adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo pivote con cover de carbono, misma
ventilación, misma silueta, mismo panel lateral glossy con LEDs rojas,
mismo borde — ningún componente cambia de forma ni posición. Solo cambia
el color.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa principal: MORADO MATE (uniforme, mismo acabado mate del
  original).
- Visor: ROJO, semitransparente.
- Panel lateral glossy negro con LEDs rojas y cover de carbono del
  pivote: sin cambios.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. Solo color de carcasa (morado
mate) + tinte de visor (rojo).
```

</details>

**Estado:** 🔴 pendientes de generar (los 4).

**Qué hay que hacer:**
1. Confirmar si esta referencia es "Boston" o "Boston 4.0" (ambos están en el excel de marca EDGE, no se puede determinar solo por la foto).
2. Confirmar si el panel lateral glossy negro con LEDs y el cover de carbono del pivote deben cambiar de color en alguna variante, o quedan siempre negros como se asumió.
3. Correr los 4 prompts (idealmente en sesiones aisladas cada uno) y mandar los resultados para auditoría.
4. Subir la foto de referencia real como adjunto para versionarla.

---

**Última actualización:** 2026-07-28 · prompts armados directo (sin agente auditor separado, por pedido de velocidad del usuario).
