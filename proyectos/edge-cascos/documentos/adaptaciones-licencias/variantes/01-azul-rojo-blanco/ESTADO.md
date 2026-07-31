# ESTADO — Variante 01 · Dakota AZUL / ROJO / BLANCO · Vista C (trasera)

> Es la **Entrada 01** del `REGISTRO-DE-ANALISIS.md` — el primer resultado del lote,
> ya documentado como *"aprobado con reservas, regenerar con prompt v2"*. Esta página
> retoma esa auditoría, confirma que la corrección v2 ya está aplicada en el archivo
> de generación, y encuentra un defecto sistémico que la v2 no corrigió.
>
> Índice: [`../../indice-adaptaciones.md`](../../indice-adaptaciones.md)

**Fecha de este cierre:** 2026-07-31 · **Estado:** 🟡 corrección lista, sin ejecutar

---

## 1. La secuencia

![secuencia](CMP-01-vista-c-secuencia.png)
*Molde real · Ilustración (autoridad de gráfico) · Resultado v1 (el que está documentado en la Entrada 01)*

---

## 2. Los 4 defectos de la Entrada 01 — qué está corregido y qué no

| # | Defecto (Entrada 01, 2026-07-30) | ¿Ya corregido en el archivo de generación? |
|---|---|---|
| 1 | Ranuras pequeñas y pieza ranurada baja comidas por el gráfico | ⚠️ Parcial — desagregadas como chequeo 3b propio, sin bloque de recuperación dedicado |
| 2 | Densidad del gráfico simplificada | ✅ Bloque "PROHIBIDO SIMPLIFICAR EL GRÁFICO" agregado en v2 |
| 3 | Marcas "X40" de los costados omitidas | ✅ Declaradas obligatorias en v2 — pero ver § 3, quedan dudas de legibilidad |
| 4 | Acabado satinado en vez de mate | ✅ Bloque "ACABADO MATE ABSOLUTO — CRÍTICO" agregado en v2 |

La v2 ya está en el repo (`kratos-dakota/01-azul-vista-c-trasera.md`) y corrige 3 de
4. Lo que **no** corrigió, porque nadie lo había encontrado todavía, es esto:

---

## 3. Hallazgo nuevo — el mismo defecto sistémico de la variante 04

El archivo de generación de esta vista tiene **la misma contradicción de tres
puntas sobre el sello DOT** que encontré y corregí en
[`variantes/04-rojo-blanco-negro/`](../04-rojo-blanco-negro/ESTADO.md): un bloque
pide el sello "con el texto DOT", otro bloque más abajo prohíbe texto legible ahí, y
el checklist final vuelve a pedir "el sello DOT está presente y legible".

Confirma la hipótesis P4 que había dejado abierta en la variante 04: **es un defecto
copiado en (al menos) estos dos prompts del lote, probablemente en los 15**. Zoom
del resultado v1 de esta variante:

- "DOT" sale legible.
- La línea de arriba y la de abajo del sello salen **corruptas** (ilegibles),
  igual que "CENTIFIED" en la variante 04.

Sobre las marcas "X40" de los costados: en el resultado v1 se ven dos marcas
pequeñas rojas cerca de las flechas de ambos costados — **no tengo resolución
suficiente para confirmar si dicen "X40" con claridad o si también salieron
corruptas**. Lo marco como pendiente de zoom dedicado en el próximo resultado, no
como defecto confirmado.

---

## 4. Los dos prompts

Van completos en el chat (no como archivo adjunto), y quedan también guardados acá
para consistencia del registro:
[`prompts/01-edicion.md`](prompts/01-edicion.md) ·
[`prompts/02-regeneracion-completa.md`](prompts/02-regeneracion-completa.md)

**Por qué el de edición es más acotado que el de la variante 04:** de los 4
defectos, dos son ajustes acotables sin riesgo (mate, recuperar detalle de una
zona) y dos son microtipografía (sello, marcas X40). La Lección de la variante 04
mostró que **editar microtexto ya arruinado genera typos nuevos** en vez de
arreglarlo — por eso el sello y las marcas **no** van en el prompt de edición: van
en la regeneración completa, con el bloque corregido, o se componen en
post-producción.

---

## 5. Pendientes

| # | Pendiente |
|---|---|
| P1 | Ejecutar uno de los dos prompts sobre `01-azul-vista-c-RESULTADO.png` |
| P2 | Confirmar con zoom dedicado si las marcas "X40" del resultado v1 son legibles o corruptas |
| P3 | Revisar el mismo bloque contradictorio del sello DOT en los 13 prompts restantes del lote (P4 de la variante 04, todavía abierto) |
