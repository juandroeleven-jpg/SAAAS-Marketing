# Mapa de módulos funcionales — referencia AR Cockpit

**Fecha:** 2026-08-10
**Agente:** Agente 2 - Módulos funcionales (Paso 2 del plan maestro Dashboard CxC)

**Fuentes consultadas (URLs exactas vía `gh api`):**
- `repos/Sebastianvalenza/ar-cockpit/contents/index.html` (rama por defecto, ~783 líneas, vanilla JS + Chart.js + PapaParse, sin backend)
- `repos/Sebastianvalenza/ar-cockpit/contents/README.md`
- Demo pública referenciada en el README: https://sebastianvalenza.github.io/ar-cockpit/

## Alcance

Este documento mapea, a nivel de **lógica y propósito** (no de código ni fórmulas literales), los seis módulos funcionales solicitados de la referencia AR Cockpit, para usarlos como punto de partida estructural del Dashboard de Cuentas por Cobrar (CxC) real. Ningún número, umbral o fórmula aquí descrito debe tratarse como validado para el negocio real: en la demo, todos los datos son 251 cuentas B2B sintéticas generadas con un generador pseudoaleatorio de semilla fija (`mulberry32`), no datos reales de ninguna empresa. Este mapa es insumo para el diseño del dashboard real, sujeto a validación con el equipo de finanzas/cobranza antes de construir cualquier lógica de negocio.

No se copió código fuente ni fórmulas exactas; las descripciones abajo son una paráfrasis de la intención de cada función tal como aparece en `index.html`.

---

## 1. Cartera (Aging tab — resumen general de la exposición / AR book)

**Qué hace en la referencia:**
Presenta un resumen ejecutivo de la exposición total: total de cartera (AR book), % de saldo "current" (al día), monto y % en el bucket 90+, y número de "cuentas en riesgo". Debajo, dos vistas: (a) la distribución de saldo por bucket de antigüedad como barras horizontales, y (b) un mapa de calor de "pasado-vencido por desk/oficina" ordenado de peor a mejor, más una lista de las cuentas con mayor exposición abierta.

**Variables/inputs que necesita:**
- Lista de cuentas, cada una con lista de facturas abiertas (monto, días vencidos, fecha de emisión/vencimiento).
- Agrupador organizacional (en la demo: "desk"/oficina de cobranza; en un caso real podría ser: cobrador asignado, línea de negocio, región, entidad legal).
- Filtros activos (por desk, por mercado, por búsqueda de cuenta) que recalculan el resumen sobre el subconjunto visible.
- Un umbral de "cuenta en riesgo" (en la demo: más de 60 días vencido O score de riesgo de default por encima de cierto nivel — valor no validado).

**Qué se propone tomar vs qué debe reconstruirse:**
- Tomar: la idea de un resumen tipo "cartera total + % al día + monto crítico (90+) + conteo de cuentas en riesgo" como tarjetas de cabecera, y la de mostrar exposición por agrupador organizacional además del total.
- Reconstruir/validar: la definición de "cuenta en riesgo" debe salir de criterios reales del negocio (política de crédito, castigo/write-off, límites de exposición por cliente), no del umbral arbitrario de la demo. También debe validarse qué agrupador organizacional es relevante (vendedor, cobrador, entidad, región) en lugar de asumir "desks" ficticios.

---

## 2. Aging (buckets 0-30/31-60/61-90/90+, riesgo de castigo)

**Qué hace en la referencia:**
Clasifica cada factura abierta en un bucket según sus días vencidos: al día (current), 1-30, 31-60, 61-90 y 90+. Suma los montos por bucket para obtener la distribución total, y marca el bucket 90+ explícitamente como el indicador de "riesgo de castigo/write-off" en el texto de la interfaz (nota explicativa junto al gráfico). Los cortes de bucket son fijos y no configurables en la demo.

**Variables/inputs que necesita:**
- Por factura: monto abierto y días vencidos (o fecha de vencimiento vs. fecha de corte).
- Fecha de corte de análisis (ancla temporal fija en la demo, `Jun 6 2026`; en producción sería "hoy" o el cierre contable elegido).

**Qué se propone tomar vs qué debe reconstruirse:**
- Tomar: la estructura de 5 buckets (current, 1-30, 31-60, 61-90, 90+) como convención estándar de aging, y la visualización de barras con monto + % del total por bucket.
- Reconstruir/validar: los cortes de días pueden necesitar ajustarse a la política de crédito real (algunas empresas usan 0-30/31-60/61-90/91-120/120+, u otros cortes). El vínculo "90+ = riesgo de castigo" es una convención de la demo, no una regla contable; debe validarse contra la política de provisión/castigo real de la empresa. También falta en la demo cualquier lógica de provisión para cuentas incobrables (bad debt reserve), que si es requerida debe construirse desde cero.

---

## 3. Clientes prioritarios (Worklist — cómo se prioriza y qué variables usa el scoring)

**Qué hace en la referencia:**
Genera una lista de cuentas ordenada por un "score de prioridad" que combina, de forma ponderada, cuatro señales por cuenta: el monto abierto (normalizado a un techo), qué tan vencida está la factura más antigua (normalizado a un techo), un "riesgo de default" calculado a partir del historial de mora y la severidad de la mora actual, y un "peso estratégico" según el nivel de tamaño/importancia de la cuenta (p.ej. cuenta estratégica vs. mediana vs. volumen). Las cuentas en disputa reciben una penalización al score (bajan de prioridad) porque la lógica asume que no tiene sentido "perseguir" un cobro que está legalmente/comercialmente bloqueado. A cada cuenta también se le asigna una "próxima acción" sugerida (llamar hoy, recordatorio, escalar a legal, resolver disputa, seguimiento de promesa de pago) según reglas simples sobre días vencidos, riesgo de default y si está en disputa o tiene una promesa de pago activa. La tabla resultante es ordenable por score, monto o días vencidos, y muestra solo el top N (12 en la demo).

**Variables/inputs que necesita:**
- Monto abierto por cuenta.
- Días de la factura más vencida por cuenta.
- Un indicador/score de "riesgo de default" (en la demo se deriva de mora histórica + severidad de mora actual + ruido aleatorio — no es un modelo de crédito real).
- Clasificación de tamaño/tier de cliente (para el "peso estratégico").
- Flags de estado: en disputa (sí/no), tiene promesa de pago activa (sí/no).
- Reglas de "próxima acción" que combinan esos flags con umbrales de días vencidos y riesgo.

**Qué se propone tomar vs qué debe reconstruirse:**
- Tomar: el concepto de un worklist único que combina monto + antigüedad + riesgo + importancia del cliente en un solo score accionable, con una "próxima acción" explícita por fila en vez de solo una lista ordenada por monto. También el patrón de despriorizar/re-rutear cuentas en disputa en vez de tratarlas como cobro normal.
- Reconstruir/validar totalmente: la fórmula de riesgo de default de la demo es un mecanismo sintético (combina mora histórica ficticia + número aleatorio) y NO debe usarse tal cual — en el proyecto real se necesita definir con el negocio qué señales de riesgo existen de verdad (historial de pago, score de buró/crédito si aplica, límite de crédito, sector, etc.) y cómo ponderarlas. Los pesos de la fórmula (0.40/0.30/0.20, penalización de disputa 0.78, techos de normalización) son arbitrarios de la demo y deben descartarse como referencia numérica; solo se conserva la idea estructural (combinar variables normalizadas con pesos). Las reglas de "próxima acción" también deben mapearse a los procesos de cobranza reales de la empresa (SLA de contacto, escalamiento a legal, política de disputas).

---

## 4. Forecast (horizontes 4w/13w/6m/12m, bandas optimista/base/pesimista)

**Qué hace en la referencia:**
Proyecta el cobro acumulado de efectivo a futuro bajo tres escenarios (optimista, base, pesimista) en un horizonte seleccionable por el usuario: 4 semanas, 13 semanas, 6 meses o 12 meses (13 semanas es el default, descrito como "estándar de tesorería"). Para facturas ya vencidas, cada escenario asume un número distinto de días adicionales hasta el cobro, derivado de la mora histórica de la cuenta y de si está en disputa (el escenario pesimista añade más días si hay disputa). Para facturas no vencidas, cada escenario asume un desplazamiento distinto respecto a la fecha de vencimiento contractual. Los horizontes mensuales (6m/12m) además agregan un componente adicional de "cobro recurrente" sobre el total de cartera para simular ingresos de facturación futura, no solo cobro de lo ya facturado. El resultado se grafica como curvas acumuladas por escenario, con totales resumidos como tarjetas.

**Variables/inputs que necesita:**
- Cartera de facturas abiertas con monto, días vencidos, términos de pago.
- Mora histórica por cuenta (para calibrar velocidad de cobro esperada).
- Flag de disputa (afecta el escenario pesimista).
- Horizonte elegido (determina granularidad: semanal vs. mensual) y número de periodos.

**Qué se propone tomar vs qué debe reconstruirse:**
- Tomar: el patrón de mostrar tres bandas (optimista/base/pesimista) en vez de un número único, y ofrecer horizontes múltiples con distinta granularidad (semanal para corto plazo, mensual para largo plazo) — esto comunica incertidumbre real de forma útil para tesorería.
- Reconstruir totalmente: los "días adicionales hasta cobro" por escenario (fórmulas con coeficientes fijos sobre mora histórica y días vencidos) son inventados para la demo y no reflejan ningún patrón de cobro real. El componente de "cobro recurrente" en horizontes largos (58% del total de cartera repetido por periodo) es una simplificación arbitraria de la demo, no un modelo de facturación futura — el proyecto real necesitaría, si se requiere forecast de largo plazo, integrar pipeline de ventas/facturación proyectada real, no derivarlo de la cartera actual. Cualquier modelo de forecast de cobro real debería basarse en tasas de cobro históricas reales de la empresa por segmento/antigüedad (curvas de cobro / roll-rate analysis), no en coeficientes arbitrarios.

---

## 5. Seguimiento de cobros (next action, ruteo de disputas)

**Qué hace en la referencia:**
Está integrado dentro del módulo de Worklist (no es una pestaña separada en la demo): cada cuenta recibe una etiqueta de "próxima acción" (llamar hoy, segundo recordatorio, escalar a legal, resolver disputa, dar seguimiento a promesa de pago) mediante una cascada de reglas simples evaluadas en orden de prioridad: primero revisa si está en disputa (→ resolver disputa, no cobrar), luego si tiene promesa de pago activa (→ seguimiento de promesa), luego si la mora es alta y el riesgo de default es alto (→ escalar a legal), luego si hay mora moderada (→ llamar hoy), mora leve (→ segundo recordatorio) o nada vencido (→ primer recordatorio). No hay bitácora de contactos, historial de interacciones ni asignación real de tareas a personas — es solo una etiqueta calculada dinámicamente cada vez que se recalcula la vista.

**Variables/inputs que necesita:**
- Flags de estado por cuenta: en disputa, tiene promesa de pago activa.
- Días de mora máximos de la cuenta y su score de riesgo de default.
- (No usa historial de contactos previos, porque la demo no lo modela.)

**Qué se propone tomar vs qué debe reconstruirse:**
- Tomar: la idea de una cascada de reglas ordenada por prioridad que produce una acción sugerida única y legible por fila, y el principio de que una disputa bloquea el flujo normal de cobro.
- Reconstruir desde cero: la demo no tiene bitácora de gestiones, ni historial de interacciones, ni asignación de responsable, ni fechas de próximo contacto ni SLA — todo eso es indispensable en un dashboard de cobranza real y debe diseñarse como módulo nuevo (probablemente con persistencia, no solo cálculo en memoria del navegador). Las reglas de la cascada (umbrales de días, combinación con riesgo) deben mapearse al proceso de cobranza real de la empresa, no copiarse de la demo.

---

## 6. Calidad de datos (import CSV, auto-detección de columnas, manejo de formatos, reporte de errores)

**Qué hace en la referencia:**
Ofrece un flujo de importación de CSV/TSV completamente client-side (nada sale del navegador): el usuario sube un archivo, la herramienta lo parsea (biblioteca PapaParse) y trata de adivinar automáticamente a qué columna estándar (nombre de cuenta, monto, fecha de factura, fecha de vencimiento, términos, estado/disputa) corresponde cada encabezado del archivo, comparando el texto del encabezado contra listas de palabras clave típicas por idioma/convención. El usuario puede corregir manualmente el mapeo de columnas en un modal antes de aplicar. Al aplicar:
- Limpia y normaliza montos que pueden venir en formato europeo (`1.234,56`) o estadounidense (`1,234.56`), detectando cuál separador es el decimal según su posición.
- Detecta el orden de fecha (día/mes/año vs. mes/día/año) inspeccionando los valores de la columna de fecha en busca de números que solo pueden ser un día (>12), con opción de forzar el modo manualmente si la detección es ambigua.
- Descarta (no calcula) cualquier fila sin nombre de cuenta o con un monto no interpretable como número, y lleva un contador de motivo de descarte (sin nombre / monto ilegible).
- Al terminar, muestra un banner con cuántas filas se omitieron y por qué motivo, en vez de fallar silenciosamente o interrumpir la carga completa.
- Si no hay mapeo de fecha, asigna una antigüedad de factura aleatoria dentro del rango de términos de pago — es un relleno sintético para que la demo siga funcionando, no una regla de negocio.
- Permite exportar el worklist calculado como CSV de vuelta.

**Variables/inputs que necesita:**
- Archivo CSV/TSV crudo del usuario, con encabezados en cualquier idioma/convención razonable.
- Diccionario de palabras clave por campo estándar (para la auto-detección de columnas).
- Selección/override manual del usuario sobre el mapeo de columnas y el formato de fecha.

**Qué se propone tomar vs qué debe reconstruirse:**
- Tomar: el patrón completo de auto-detección de columnas con mapeo manual editable antes de confirmar; la limpieza tolerante de formatos numéricos europeo/US; la detección heurística de orden de fecha con override manual; y sobre todo el principio de "reportar filas descartadas con motivo" en vez de fallar en silencio o abortar toda la carga — esto es directamente aplicable y de alto valor para el proyecto real.
- Reconstruir/validar: el asignar una antigüedad de factura aleatoria cuando falta fecha es un parche de demo inaceptable en producción — en el proyecto real una fila sin fecha de factura/vencimiento debería marcarse como dato incompleto y excluirse del cálculo de aging/forecast (o pedirse explícitamente al usuario), nunca simularse con un número aleatorio. También hace falta decidir, para el proyecto real: origen de los datos (¿integración directa con ERP/contabilidad vs. carga manual de CSV?), validación de duplicados, manejo de multi-moneda (la demo asume una sola moneda, EUR, implícitamente) y trazabilidad/auditoría de qué se importó y cuándo — nada de esto existe en la demo.

---

## Decisiones tomadas en este mapeo

1. Se documentó por lógica/propósito, sin transcribir código ni fórmulas exactas, cumpliendo la restricción del encargo.
2. Se trató "Cartera" y "Aging" como aspectos del mismo tab (`Aging`) en la demo, pero se separaron en dos secciones porque el encargo los pide como módulos distintos — en el diseño real podrían seguir combinados o separarse, es una decisión de UX pendiente.
3. "Seguimiento de cobros" se identificó como una funcionalidad incrustada en el Worklist de la demo (no una pestaña propia); se señala explícitamente que el proyecto real probablemente necesite un módulo separado y más completo (bitácora, SLA, asignación).

## Supuestos

- Se asume que "AR Cockpit" (Sebastianvalenza/ar-cockpit) es la referencia correcta indicada por el plan maestro; no se validó contra otras posibles referencias.
- Se asume que el repo consultado en GitHub (rama por defecto al momento de la consulta, 2026-08-10) refleja la versión vigente de la demo pública enlazada en el README.
- Se asume que ninguna cifra, umbral, peso o fórmula de la demo debe usarse como base numérica para el proyecto real (consistente con la instrucción explícita del encargo).

## Riesgos

- Si el repo se actualiza después de esta consulta, este mapeo podría quedar desalineado con la versión más nueva del código — se recomienda re-consultar antes de construir si pasa mucho tiempo.
- Existe riesgo de que el equipo de negocio real tenga procesos de cobranza sustancialmente distintos a los modelados aquí (ej. multi-moneda, multi-entidad legal, provisión contable formal), lo cual no está cubierto por esta referencia y requerirá diseño adicional, no solo adaptación.
- El módulo de Forecast es el que tiene menor transferibilidad directa: su lógica es más una simulación ilustrativa que un modelo de cobro real, y requiere el mayor trabajo de reconstrucción con datos/reglas reales de la empresa.

## Pendientes

- Validar con el equipo de finanzas/cobranza real los cortes de aging, la definición de "cuenta en riesgo", las señales de riesgo de crédito disponibles, y el proceso real de escalamiento/disputas.
- Definir la fuente de datos real (integración ERP/contable vs. CSV manual) antes de diseñar el módulo de calidad de datos a detalle.
- Decidir si "Seguimiento de cobros" será un módulo con persistencia (bitácora, asignación, SLA) desde el inicio del proyecto, dado que la demo no lo modela así.
- Definir manejo de multi-moneda y multi-entidad si aplica al negocio real (no cubierto por la referencia).

## Archivos revisados

- `index.html` del repo `Sebastianvalenza/ar-cockpit` (obtenido vía `gh api repos/Sebastianvalenza/ar-cockpit/contents/index.html --jq '.content' | base64 -d`), 783 líneas.
- `README.md` del mismo repo (obtenido vía `gh api repos/Sebastianvalenza/ar-cockpit/contents/README.md --jq '.content' | base64 -d`).
