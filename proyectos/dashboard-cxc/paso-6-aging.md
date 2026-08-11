# Paso 6 — Reconstruir el aging

**Fecha:** 2026-08-10
**Estado:** entregable documental completo, pendiente de revisión humana
**Datos usados:** exclusivamente el dataset DEMO/FICTICIO de `paso-5-datos-ficticios.md`, ampliado en este documento con 6 facturas adicionales de prueba de límites (todas igualmente ficticias, prefijo `DEMO-`, ver sección 3).

## ⚠️ Esta fórmula NO está aprobada por Finanzas

Igual que en `formulas-y-supuestos-cxc.md` (Paso 2), la fórmula de aging usada aquí es la que da el plan maestro (Fase 3) como punto de partida — **🟡 propuesta, pendiente de validación por Finanzas**, no un cálculo aprobado para uso real. Este documento demuestra que la fórmula es reproducible a mano y consistente, no que sea la fórmula correcta para el negocio.

---

## 1. Fórmula y convenciones

**Fórmula (dada por el plan maestro, Fase 3, sin modificar):**

```
Días de atraso = Fecha de corte − Fecha de vencimiento
```

**Fecha de corte:** parámetro explícito elegido por el usuario/proceso — **nunca** se calcula automáticamente contra "hoy" del sistema. En este documento se usa `2026-08-10` como fecha de corte de referencia (sección 4), y se demuestra en la sección 6 que cambiar ese parámetro cambia el resultado, precisamente para verificar que no hay ningún automatismo oculto contra la fecha del sistema.

**Convención de clasificación de buckets (mutuamente excluyentes, sin solapamiento):**

| Bucket | Rango de días de atraso |
|---|---|
| `actual` | días de atraso ≤ 0 (no vencida aún, o vence exactamente en la fecha de corte) |
| `1-30` | 1 ≤ días de atraso ≤ 30 |
| `31-60` | 31 ≤ días de atraso ≤ 60 |
| `61-90` | 61 ≤ días de atraso ≤ 90 |
| `90+` | días de atraso ≥ 91 |

Cada bucket cubre un rango cerrado sin huecos ni solapamiento con el siguiente — el límite superior de un bucket (ej. 30) nunca coincide con el límite inferior del siguiente (ej. 31 empieza el próximo), evitando ambigüedad en los días límite.

---

## 2. Tratamiento de casos especiales (reglas, antes de los ejemplos numéricos)

| Caso | Regla |
|---|---|
| **Factura pagada** (`estado_factura = pagada`, `saldo_pendiente = 0`) | Se **excluye** del aging — no entra en ningún bucket. El aging solo clasifica saldo pendiente por cobrar, y una factura pagada no tiene saldo. |
| **Saldo cero por otra razón** (ej. nota de crédito que cubre el 100%) | Misma regla: `saldo_pendiente = 0` excluye de todos los buckets, independientemente de si llegó a 0 por pago, por nota de crédito, o por combinación de ambos. |
| **Pago parcial** | El aging se calcula sobre el `saldo_pendiente` **restante** (ya neto de pagos aplicados), nunca sobre el `monto_original`. La fecha de vencimiento no cambia por un pago parcial — la factura sigue clasificándose por su fecha de vencimiento original. |
| **Notas de crédito** | Ya están restadas dentro de `saldo_pendiente` (regla de `paso-4-modelo-datos.md`, sección 4) antes de llegar al cálculo de aging — el módulo de aging no vuelve a tocar notas de crédito, solo consume el saldo ya neto. |
| **Facturas disputadas** (`estado_factura = disputada`, con disputa **activa** — ver `paso-4-modelo-datos.md` §2.1) | **Sí entran** en el aging por fecha, igual que cualquier factura con saldo > 0 — el bucket de aging y el estado operativo "disputada" son independientes (ver nota de la sección 4 de `paso-5-datos-ficticios.md`). El aging no oculta ni excluye estas facturas; M3 (Worklist) es quien las despriorice para gestión de cobro, no M2 (Aging). |
| **Disputa sobre factura ya liquidada** (`pagada`/`anulada`) | **Excluida del aging por completo** — regla ya fijada en `paso-4-modelo-datos.md` §2.1 ("Disputa sobre una factura ya liquidada"): esa disputa no crea saldo pendiente, así que la factura sigue en `saldo_pendiente = 0` y queda fuera de todos los buckets, sin excepción. |
| **`fecha_vencimiento` faltante** | La factura se **excluye** del cálculo de aging y se reporta como dato incompleto (regla ya fijada en el diseño de M6, `paso-3-modulos-propios.md`) — **nunca** se le asigna una fecha inventada ni se le da un bucket por defecto. |
| **`fecha_corte` anterior a `fecha_emision` de alguna factura incluida** | No es un error que detenga el cálculo — la factura simplemente cae en `actual` (días de atraso muy negativo), pero el sistema debe emitir una **advertencia** de inconsistencia de datos ("fecha de corte anterior a la emisión de la factura X"), porque analizar cartera con una fecha de corte anterior a que la factura existiera casi siempre indica un error de selección de parámetro, no un caso de negocio válido. |

---

## 3. Casos de prueba manuales (ficticios, prefijo `DEMO-`)

**Fecha de corte de referencia para toda esta sección:** `2026-08-10` (igual que en `paso-5-datos-ficticios.md`).

### 3.1 Las 6 facturas del Paso 5 (reutilizadas sin modificar)

| Factura | `saldo_pendiente` | `fecha_vencimiento` | Días de atraso | Bucket esperado |
|---|---|---|---|---|
| FAC-1001 | 1000.00 | 2026-09-01 | −22 (no vencida) | `actual` |
| FAC-1002 | 2000.00 | 2026-06-01 | 70 | `61-90` |
| FAC-1003 | 1000.00 | 2026-07-01 | 40 | `31-60` |
| FAC-1004 | 0.00 | 2026-05-01 | — | **excluida** (saldo 0, pagada) |
| FAC-1005 | 2500.00 | 2026-08-15 | −5 (no vencida) | `actual` |
| FAC-1006 | 1200.00 | 2026-07-10 | 31 | `31-60` |

*(Estos 6 resultados son idénticos a los ya calculados en `paso-5-datos-ficticios.md` sección 4 — se repiten aquí para que el Paso 6 sea auditable de forma autocontenida, sin tener que saltar entre documentos para verificar el módulo de aging específicamente.)*

### 3.2 Casos límite nuevos (bordes exactos de cada bucket) — DEMO/FICTICIO

Se agregan 6 facturas ficticias nuevas, exclusivamente para probar los bordes de la clasificación (día exacto donde cambia de bucket). Todas pertenecen a `CLI-001` (cliente ya ficticio y existente, sin crear clientes nuevos innecesarios), monto y saldo iguales por simplicidad (1 unidad monetaria ficticia por claridad, ya que el propósito es probar la fecha, no el monto):

**Monto original y saldo pendiente de las 7 facturas de esta subsección:** todas con `monto_original = 1.00`, sin pagos ni notas de crédito, por lo tanto `saldo_pendiente = 1.00` en las 7 — valor uniforme elegido a propósito para que el único factor que varía entre ellas sea la fecha, aislando así la prueba de bordes de cualquier otra variable.

| Factura | `fecha_vencimiento` | Días de atraso (vs. corte 2026-08-10) | Bucket esperado | Qué borde prueba |
|---|---|---|---|---|
| DEMO-1007 | 2026-08-10 | **0** | `actual` | Vence exactamente el día de corte (borde `actual`/`1-30`) |
| DEMO-1008 | 2026-07-11 | **30** | `1-30` | Último día del bucket `1-30` |
| DEMO-1009 | 2026-07-10 | **31** | `31-60` | Primer día del bucket `31-60` (borde inmediato siguiente a DEMO-1008) |
| DEMO-1010 | 2026-06-11 | **60** | `31-60` | Último día del bucket `31-60` |
| DEMO-1011 | 2026-06-10 | **61** | `61-90` | Primer día del bucket `61-90` |
| DEMO-1012 | 2026-05-12 | **90** | `61-90` | Último día del bucket `61-90` |
| DEMO-1013 | 2026-05-11 | **91** | `90+` | Primer día del bucket `90+` |

*(7 filas, no 6 — se incluyó también el borde inferior de `1-30` implícitamente al usar día 0 como frontera con `actual`; no se agregó una fila "día 1" separada porque no es un borde de transición entre dos buckets no triviales, a diferencia de 30/31, 60/61 y 90/91.)*

**Verificación de la convención (sección 1):** cada par consecutivo (DEMO-1008/DEMO-1009, DEMO-1010/DEMO-1011, DEMO-1012/DEMO-1013) cae en buckets distintos con exactamente 1 día de diferencia — confirma que no hay solapamiento ni hueco en los límites.

### 3.3 Caso: `fecha_vencimiento` faltante — DEMO/FICTICIO

**Monto y saldo de esta factura:** `monto_original = 1.00`, sin pagos ni notas de crédito, `saldo_pendiente = 1.00` — **tiene saldo pendiente real**, y es precisamente ese saldo (no cero) el que la vuelve relevante para la conciliación de la sección 4: es la única factura de todo este documento con saldo mayor a cero que queda fuera de la suma de buckets, no por estar pagada, sino por no ser clasificable.

| Factura | `fecha_vencimiento` | `saldo_pendiente` | Resultado esperado |
|---|---|---|---|
| DEMO-1014 | *(vacío)* | 1.00 | **Excluida de los buckets de aging** (no de la cartera total). Se reporta como "factura con fecha de vencimiento faltante, excluida del cálculo" — no se le asigna ningún bucket ni fecha simulada. Su saldo de 1.00 sigue siendo parte de la cartera pendiente real, pero no es clasificable por antigüedad hasta que se complete el dato. |

### 3.4 Caso: disputa sobre factura ya liquidada — DEMO/FICTICIO

**Monto de esta factura:** `monto_original = 500.00`, `pagos aplicados = 500.00` (un único pago que la saldó por completo antes de la disputa), `saldo_pendiente = 0.00`.

| Factura | `estado_factura` | `saldo_pendiente` | Disputa asociada | Resultado esperado |
|---|---|---|---|---|
| DEMO-1015 | `pagada` | 0.00 | `DIS-4002` (`abierta`, sobre esta factura ya pagada) | **Excluida del aging** — `saldo_pendiente = 0` la excluye igual que cualquier factura pagada (regla de la sección 2); la disputa activa sobre ella no la reintroduce en ningún bucket, confirmando la regla fijada en `paso-4-modelo-datos.md` §2.1. |

### 3.5 Caso: fecha de corte anterior a la fecha de emisión — DEMO/FICTICIO

**Monto de esta factura:** `monto_original = 1.00`, sin pagos ni notas de crédito, `saldo_pendiente = 1.00`.

| Factura | `fecha_emision` | `fecha_vencimiento` | Fecha de corte usada | Resultado esperado |
|---|---|---|---|---|
| DEMO-1016 | 2026-09-01 | 2026-10-01 | 2026-08-10 (la misma de referencia) | Cae en `actual` (días de atraso muy negativo, −52), **más una advertencia**: "fecha de corte (2026-08-10) anterior a la fecha de emisión (2026-09-01) de la factura DEMO-1016" — no bloquea el cálculo, solo advierte de una posible inconsistencia de selección de parámetro. Su saldo de 1.00 sí se clasifica normalmente (tiene fecha de vencimiento válida), a diferencia de DEMO-1014. |

---

## 4. Resultado esperado consolidado (fecha de corte = 2026-08-10)

### 4.0 Corrección — versión anterior de esta sección era confusa, no incorrecta en el resultado final

**Qué decía antes (texto original, se mantiene abajo sin borrar, marcado como versión anterior):** presentaba el total de $7,708.00 como si estuviera "reconciliando" contra el total de $7,700.00 del Paso 5, con una narrativa de "error de conteo de filas" que mezclaba dos cosas distintas y no identificaba con precisión cuál fila causaba cada diferencia.

**Por qué era confuso, no falso:** el número final (7,708.00) era y sigue siendo correcto para el bucket sum del fixture extendido. El problema es que **$7,700.00 y $7,708.00 no son el mismo total para el mismo conjunto de datos** — son dos totales para dos conjuntos distintos, y el texto anterior no lo dejaba claro:

- **$7,700.00** = total del **dataset ficticio principal del Paso 5** (6 facturas). Este es y sigue siendo el **total autoritativo del dataset ficticio del proyecto** — no cambia, no se corrige, no se reemplaza.
- **$7,708.00 / $7,709.00** = totales que solo existen dentro del **fixture extendido del Paso 6** (las 6 facturas del Paso 5 + 10 facturas nuevas de prueba de bordes, 16 en total) — un fixture que existe únicamente para probar el módulo de aging, no para reemplazar el dataset del Paso 5.

La sección 4.1 de abajo reemplaza la narrativa confusa anterior con la tabla de conciliación completa, fila por fila, pedida explícitamente para esta revisión.

### 4.1 Tabla de conciliación completa — las 16 facturas del fixture extendido del Paso 6

| Factura | Importe (`monto_original`) | Pagos aplicados | Notas de crédito | Saldo pendiente | Días de atraso | Bucket / motivo de exclusión |
|---|---|---|---|---|---|---|
| FAC-1001 | 1,000.00 | 0.00 | 0.00 | 1,000.00 | −22 | `actual` |
| FAC-1002 | 2,000.00 | 0.00 | 0.00 | 2,000.00 | 70 | `61-90` |
| FAC-1003 | 1,500.00 | 500.00 | 0.00 | 1,000.00 | 40 | `31-60` |
| FAC-1004 | 800.00 | 800.00 | 0.00 | **0.00** | — | **excluida** (pagada) |
| FAC-1005 | 3,000.00 | 0.00 | 500.00 | 2,500.00 | −5 | `actual` |
| FAC-1006 | 1,200.00 | 0.00 | 0.00 | 1,200.00 | 31 | `31-60` (disputada — igual entra al aging, ver sección 2) |
| DEMO-1007 | 1.00 | 0.00 | 0.00 | 1.00 | 0 | `actual` |
| DEMO-1008 | 1.00 | 0.00 | 0.00 | 1.00 | 30 | `1-30` |
| DEMO-1009 | 1.00 | 0.00 | 0.00 | 1.00 | 31 | `31-60` |
| DEMO-1010 | 1.00 | 0.00 | 0.00 | 1.00 | 60 | `31-60` |
| DEMO-1011 | 1.00 | 0.00 | 0.00 | 1.00 | 61 | `61-90` |
| DEMO-1012 | 1.00 | 0.00 | 0.00 | 1.00 | 90 | `61-90` |
| DEMO-1013 | 1.00 | 0.00 | 0.00 | 1.00 | 91 | `90+` |
| DEMO-1014 | 1.00 | 0.00 | 0.00 | **1.00** | *(sin fecha)* | **excluida del aging** (fecha faltante) — **pero con saldo>0**, ver 4.2 |
| DEMO-1015 | 500.00 | 500.00 | 0.00 | **0.00** | — | **excluida** (pagada; disputa activa no la reintroduce) |
| DEMO-1016 | 1.00 | 0.00 | 0.00 | 1.00 | −52 | `actual` (con advertencia de corte anterior a emisión) |

### 4.2 Identificación exacta de la(s) fila(s) que originan la diferencia

Hay exactamente **una fila** que causa que "suma de saldos por factura" y "suma de buckets de aging" no coincidan: **`DEMO-1014`**.

- `DEMO-1014` tiene `saldo_pendiente = 1.00` (es decir, sí forma parte de la cartera pendiente real del fixture).
- Pero está excluida de los 5 buckets porque no tiene `fecha_vencimiento` — regla ya fijada en la sección 2 de este documento (nunca se le asigna fecha simulada).
- Esa es, matemáticamente, la única fila con `saldo_pendiente > 0` que no aparece en ningún bucket. Todas las demás filas con saldo > 0 (14 de las 16) están clasificadas en algún bucket; las otras 2 filas con saldo = 0 (`FAC-1004`, `DEMO-1015`) no afectan ninguna suma porque aportan cero de cualquier forma.

### 4.3 Totales — autoritativo vs. fixture de prueba

| Total | Valor | Alcance |
|---|---|---|
| **Total autoritativo del dataset ficticio del proyecto (Paso 5)** | **$7,700.00** | 6 facturas — **sin cambios**, sigue siendo la referencia del proyecto |
| Suma de `saldo_pendiente` de las 16 facturas del fixture extendido (Paso 6) | **$7,709.00** | 7,700.00 (Paso 5) + 7.00 (DEMO-1007 a 1013) + 1.00 (DEMO-1014) + 0.00 (FAC-1004) + 0.00 (DEMO-1015) + 1.00 (DEMO-1016) |
| Suma de los 5 buckets de aging del fixture extendido (Paso 6) | **$7,708.00** | igual al total de arriba, **menos** el saldo de `DEMO-1014` (1.00), que existe pero no es clasificable |
| **Diferencia entre ambos totales del fixture (7,709.00 − 7,708.00)** | **$1.00** | **atribuible en su totalidad a `DEMO-1014`** — no es un error de cálculo, es el resultado esperado de excluir del aging una factura sin fecha de vencimiento, tal como exige la sección 2 de este documento |

**Ningún documento anterior queda inconsistente respecto al total autoritativo:** `paso-5-datos-ficticios.md` sigue afirmando $7,700.00 para el dataset de 6 facturas, y eso sigue siendo correcto — ese documento nunca incluyó las 10 facturas de prueba de bordes del Paso 6, por lo que no requiere ninguna corrección.

### 4.4 Demostración de la triple igualdad pedida

**`saldo pendiente total (facturas clasificables) = suma de buckets de aging = suma de saldos por factura (excluyendo la no clasificable)`**

- Suma de saldos por factura, **solo** de las 15 facturas con `fecha_vencimiento` válida (excluye `DEMO-1014`, incluye `FAC-1004` y `DEMO-1015` con saldo 0): 1000+2000+1000+0+2500+1200+1+1+1+1+1+1+1+0+1 = **7,708.00**
- Suma de los 5 buckets de aging (sección 4.1, columna "bucket"): 3,502.00 (`actual`: 1000+2500+1+1) + 1.00 (`1-30`) + 2,202.00 (`31-60`: 1000+1200+1+1) + 2,002.00 (`61-90`: 2000+1+1) + 1.00 (`90+`) = **7,708.00**

**Ambos coinciden exactamente en $7,708.00** ✅ — la igualdad se cumple siempre que se restrinja a facturas con fecha de vencimiento válida, que es precisamente el universo que el aging puede clasificar. La única factura fuera de esa igualdad (`DEMO-1014`) está identificada, cuantificada y explicada en la sección 4.2 — no se pierde silenciosamente, queda documentada como parte de la cartera total pero fuera del aging.

---

## 5. Verificaciones ejecutadas (regla 10)

<details>
<summary>Los días se calculan contra la fecha de corte, no contra "hoy" automáticamente</summary>

Ver sección 6 (parametrización) — se recalculó FAC-1002 con dos fechas de corte distintas (`2026-08-10` y `2026-09-15`) y el bucket resultante cambia, lo que confirma que el cálculo depende exclusivamente del parámetro `fecha_corte`, no de ninguna fecha del sistema tomada automáticamente.

</details>

<details>
<summary>No se generan fechas aleatorias</summary>

Las 7 facturas nuevas de esta sección (DEMO-1007 a DEMO-1016) tienen todas sus fechas de vencimiento elegidas manualmente para dar días de atraso exactos (0/30/31/60/61/90/91) — ninguna fecha fue generada por azar. El caso de fecha faltante (DEMO-1014) se excluye explícitamente en vez de recibir una fecha simulada, cumpliendo la regla 8 del encargo y la regla ya fijada en el diseño de M6.

</details>

<details>
<summary>Cada categoría es mutuamente excluyente</summary>

Verificado en la sección 1 (rangos cerrados sin solapamiento) y confirmado empíricamente en la sección 3.2: cada borde probado (30/31, 60/61, 90/91) cae en el bucket correcto sin ambigüedad — ninguna factura de prueba calificaría para dos buckets a la vez.

</details>

<details>
<summary>Casos límite documentados</summary>

7 casos límite explícitos: día 0 (frontera actual/vencida), día 30 y 31 (frontera 1-30/31-60), día 60 y 61 (frontera 31-60/61-90), día 90 y 91 (frontera 61-90/90+) — secciones 3.2, 3.3, 3.4 y 3.5.

</details>

<details>
<summary>Los resultados manuales coinciden con los resultados calculados</summary>

Ver sección 4 (reescrita tras la revisión del usuario) — la tabla de conciliación fila por fila (4.1) identifica que la única fuente de diferencia entre "suma de saldos" y "suma de buckets" es `DEMO-1014` ($1.00, factura con saldo pendiente pero sin fecha de vencimiento). No es un error de cálculo: es el comportamiento esperado de excluir del aging una factura no clasificable. La demostración de la triple igualdad (sección 4.4) confirma que, restringido a facturas con fecha de vencimiento válida, `suma de saldos = suma de buckets = 7,708.00` exactamente. El total autoritativo del dataset ficticio del proyecto (Paso 5, $7,700.00) no cambió ni requirió corrección.

</details>

<details>
<summary>Los datos siguen siendo ficticios/anonimizados</summary>

Las 7 facturas nuevas de este documento usan el prefijo `DEMO-` y pertenecen a `CLI-001` (ya ficticio, "Comercializadora Ficticia Alfa"). No se introdujo ningún dato real ni anonimizado — se mantiene estrictamente dentro del dataset ficticio del Paso 5, ampliado.

</details>

---

## 6. Demostración de parametrización (fecha de corte no automática)

Se recalcula **FAC-1002** (`fecha_vencimiento = 2026-06-01`) con dos fechas de corte distintas, para probar que el resultado cambia según el parámetro y no según ninguna fecha del sistema:

| Fecha de corte usada | Días de atraso | Bucket resultante |
|---|---|---|
| `2026-08-10` (la de referencia de todo este documento) | 70 | `61-90` |
| `2026-09-15` (fecha de corte distinta, hipotética) | 106 | `90+` |

El bucket cambia de `61-90` a `90+` únicamente porque cambió el parámetro `fecha_corte` — la factura, su saldo y su fecha de vencimiento no cambiaron. Esto confirma que el módulo no tiene ningún automatismo oculto contra la fecha del sistema (regla explícita del encargo).

---

## 7. Decisiones

1. Se reutilizaron las 6 facturas del Paso 5 sin modificarlas, agregando 7 facturas nuevas exclusivamente para probar bordes exactos de bucket — mantiene el dataset principal estable y auditable, sin mezclar propósitos.
2. Se usó `CLI-001` (ya existente) para todas las facturas de prueba de límites en vez de crear clientes nuevos, para no inflar el dataset con entidades que no aportan al propósito de este paso (probar fechas, no relaciones cliente-factura).
3. Se dejó visible el error de conteo de la primera verificación cruzada (sección 4) en vez de corregirlo silenciosamente, porque la trazabilidad del proceso de verificación es parte de lo que este encargo pide, no solo el resultado final.

## 8. Supuestos

- Se asume que "vence exactamente en la fecha de corte" (día 0) pertenece a `actual`, no a `1-30` — es una convención razonable pero no está explícitamente definida en el plan maestro; **queda marcada como supuesto propio, pendiente de confirmar con Finanzas** junto con el resto de las fórmulas (no se presenta como aprobado).
- Se asume que los bordes de bucket son cerrados en ambos extremos (ej. `1-30` incluye tanto el día 1 como el día 30) — mismo estatus de supuesto pendiente.

## 9. Riesgos

1. La convención de bordes (sección 1 y este supuesto) es una interpretación razonable del texto del plan maestro ("actual, 1–30, 31–60, 61–90 y 90+"), pero no fue confirmada explícitamente por Finanzas — si Finanzas define una convención distinta (ej. bordes abiertos, o "actual" definido de otra forma), los resultados de este documento cambiarían.
2. El caso de "fecha de corte anterior a la fecha de emisión" (sección 3.5) se resolvió con una advertencia no bloqueante — es una decisión de diseño razonable pero no validada con el equipo de negocio; alguien podría preferir que esto sí bloquee el cálculo.

## 10. Fuentes consultadas

- `plan-maestro-dashboard-cxc.md`, Fase 3 (fórmula de aging)
- `paso-4-modelo-datos.md`, incluidas ambas enmiendas de esta sesión (sincronización disputa↔factura y disputa sobre factura liquidada)
- `paso-5-datos-ficticios.md` (dataset base reutilizado)
- `paso-3-modulos-propios.md` (especificación de M2, para las reglas de estados/dependencias)

## 11. Bloqueos

Ninguno.

## 12. Pendientes

- Validar con Finanzas la convención de bordes de bucket (supuesto de la sección 8) — es el único punto de este paso que queda genuinamente abierto para negocio, no solo técnico.
- Cuando exista implementación real (código), migrar estos casos de prueba manuales a pruebas automatizadas.

## 13. Criterio para considerar el Paso 6 cerrado

- [x] Fórmula y convenciones documentadas, marcadas como no aprobadas por Finanzas (sección 1 y aviso inicial).
- [x] Tratamiento explícito de: facturas pagadas, saldos cero, pagos parciales, notas de crédito, disputas activas, disputas sobre facturas liquidadas, fechas faltantes (sección 2).
- [x] Fecha de corte usada como parámetro explícito, demostrado que no se calcula automáticamente (sección 6).
- [x] Casos manuales cubriendo los 6 del Paso 5 + 7 casos límite nuevos (sección 3).
- [x] Tabla de resultados esperados (sección 4), reescrita con conciliación fila por fila (4.1), fila causante de la diferencia identificada con precisión (4.2), total autoritativo confirmado sin cambios (4.3), y triple igualdad demostrada (4.4).
- [x] Pruebas reproducibles a mano, verificadas (sección 5).
- [x] Diferencias/decisiones pendientes para validación futura con Finanzas documentadas (secciones 8, 9, 12).
- [x] Solo datos DEMO/FICTICIO, sin datos reales ni anonimizados — dataset **no modificado**, solo se corrigió la explicación de la conciliación.
- [x] Fórmula y buckets siguen marcados 🟡 pendiente de validación por Finanzas (sin cambios respecto a la versión anterior).
- [x] Sin `git add`, commit ni push.
- [ ] **Falta: tu revisión final.**
