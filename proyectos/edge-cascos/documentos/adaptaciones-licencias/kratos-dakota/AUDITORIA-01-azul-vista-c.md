# Auditoría — Dakota AZUL · Vista C (trasera) — primer resultado

Fecha: 2026-07-30. Auditor: pasada independiente del generador (Lecciones 6 y 12).
Fuentes cotejadas: resultado generado · foto real del Kratos trasera · ilustración Dakota azul trasera.

## Veredicto: APROBADO CON RESERVAS

Usable para ficha técnica / e-commerce. Regenerar con el prompt v2 antes de material de licencia o campaña comparable contra el arte aprobado.

## Chequeos del prompt

| # | Chequeo | Veredicto | Nota |
|---|---|---|---|
| 1 | Silueta real, no la del dibujo | ✅ | **El riesgo crítico se resolvió.** Trasera ancha con hombros marcados, como la foto real. El bloque de conflicto declarado funcionó |
| 2 | Fotografía, no ilustración | ✅ | Luz de estudio, especulares, sombra propia, interior fotográfico |
| 3 | Extractor / 2 ranuras / tornillo / pieza ranurada baja | ⚠️ | Extractor y tornillo sí. Las dos ranuras pequeñas y la pieza ranurada baja quedaron absorbidas por el gráfico |
| 4 | Cuello, lengüetas rojas ERS, correa | ✅ | Lo mejor conservado del checkpoint real |
| 5 | Gráfico completo y simétrico | ⚠️ | Cobertura y simetría OK, pero **densidad de detalle simplificada** y **marcas "X40" omitidas** |
| 6 | Logo EDGE y sello DOT | ✅ | Excelente: EDGE completo y bien escrito; DOT legible con su microtipografía. No se repitieron los fallos de Padrino/Top Gun |
| 7 | Fondo, sombra, acabado mate | ⚠️ | Fondo y sombra OK. **Acabado satinado/brillante en vez de mate** |
| 8 | Coherencia de serie | ✅ (provisorio) | Se confirma con A y B generadas |

## Diagnóstico

Los tres desvíos tienen una raíz común: **el generador "resume" cuando la superficie tiene mucha información** — baja densidad gráfica, se come piezas chicas, omite textos pequeños. Aparte, interpretó "fotografía de producto" como "producto lustroso", ignorando el mate declarado.

## Correcciones aplicadas al v2 (los 5 prompts de Vista C)

1. Bloque **PROHIBIDO SIMPLIFICAR EL GRÁFICO**: misma densidad de líneas, malla triangular completa, comparación zona por zona contra la ilustración.
2. **Marcas pequeñas de texto de los costados** declaradas obligatorias y nominales.
3. **ACABADO MATE ABSOLUTO** con criterio de rechazo explícito ("si refleja como un espejo, está mal").
4. Ranuras pequeñas y pieza ranurada baja **desagregadas en chequeos propios** (3b), fuera de la lista larga.

---

# Auditoría 2 — Dakota ROJO/BLANCO/NEGRO · Vista C (trasera)

Fecha: 2026-07-30.

## Veredicto: 9 cumplen · 3 parciales · 1 falla · 2 a verificar con zoom

## 🔴 Causa raíz de la única falla: ERROR DEL PROMPT, no del generador

El prompt v1 de la variante 04 asignaba **NEGRO** al panel central del spoiler. La ilustración lo muestra en **ROJO INTENSO** — es la masa de color protagonista del diseño. El generador obedeció el prompt al pie de la letra. Error de transcripción del Agente 0 al leer la ilustración.

**Corregido:** los 3 prompts de la variante 04 ahora declaran spoiler ROJO, y el logo EDGE pasa a BLANCO con contorno oscuro (segundo posible error de transcripción detectado en la misma pasada).

**Lección nueva para el Agente 0:** al transcribir una ilustración, verificar el color de CADA pieza grande por separado contra el dibujo — no inferirlo del "tema" de la variante. El nombre de la variante ("rojo/blanco/negro") no dice qué pieza lleva qué color.

## Chequeos

| # | Chequeo | Veredicto |
|---|---|---|
| 1 | Silueta real, no del dibujo | ✅ |
| 2 | Fotografía, no ilustración | ✅ |
| 3a | Extractor superior | ✅ |
| 3b | Dos ranuras pequeñas | ⚠️ invadidas por el gráfico |
| 3c | Tornillo central | ✅ mejor que en la azul |
| 3d | Pieza ranurada trasera baja | ⚠️ resuelta como negro plano |
| 4 | Cuello, lengüetas ERS, correa | ✅ muy bien |
| 5a | Cobertura y simetría | ✅ |
| 5b | Densidad de detalle | ✅ **mejoró mucho** vs. la azul |
| 5c | Marcas "X40" | ✅ presentes (faltaban en la azul) |
| 5d | Color del spoiler | ❌ negro en vez de rojo — culpa del prompt |
| 6a | Logo EDGE | ⚠️ negro; en la ilustración se lee blanco con contorno |
| 6b | Sello DOT | ⚠️ posible "CENTIFIED" en vez de "CERTIFIED" — verificar con zoom |
| 7 | Acabado mate | ✅ corrigió solo el defecto de la azul |
| 8 | Coherencia de serie | ⏳ pendiente de A y B |

## Decisión

No regenerar: el resultado ganó en mate, densidad, X40 y tornillo central. Se aplica **edición quirúrgica** sobre la foto final para repintar solo el panel del spoiler de negro a rojo, conservando el tornillo, los bordes de pieza y el resto de la imagen. Prompt de edición entregado en chat el 2026-07-30.

## Pendiente de verificación con zoom (Lección 12)

1. Texto exacto del sello DOT (¿"CERTIFIED" o "CENTIFIED"?).
2. Color real del logo EDGE en la ilustración (blanco con contorno vs. negro).
3. Revisar el color del spoiler declarado en las variantes 02, 03 y 05 contra sus ilustraciones, por el mismo tipo de error.
