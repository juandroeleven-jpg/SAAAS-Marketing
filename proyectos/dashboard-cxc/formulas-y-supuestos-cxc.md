# Fórmulas y Supuestos — Dashboard CxC

**Fecha:** 2026-08-10
**Autor:** Agente 3 (Finanzas) — subagente de documentación
**Estado general del documento:** 🟡 BORRADOR PROPOSITIVO — NINGUNA fórmula aquí está aprobada. Todo requiere validación explícita de Finanzas antes de implementarse en el dashboard.

## Alcance

Este documento propone, para el Paso 2 del plan maestro del Dashboard de CxC, las fórmulas y supuestos de: Aging, DSO, CEI, Cartera vencida, Scoring/priorización de riesgo de cliente y Forecast. Se basa en la Fase 3 del plan maestro oficial (tomada como base normativa) y usa como referencia conceptual (no normativa) el worklist scoring del repo público Sebastianvalenza/ar-cockpit.

Regla de validación heredada del plan maestro, aplicable a todo lo aquí propuesto: **resultado del dashboard = resultado calculado manualmente = resultado aprobado por Finanzas.** Mientras Finanzas no valide, ningún KPI aquí descrito puede considerarse correcto ni usarse en producción.

---

## 1. Aging

🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS

**Fórmula:**
```
Días de atraso = Fecha de corte − Fecha de vencimiento
```

**Buckets propuestos:**
- Actual (no vencido): días de atraso ≤ 0
- 1–30 días
- 31–60 días
- 61–90 días
- 90+ días

**Datos que necesita:** fecha de corte del reporte, fecha de vencimiento por factura, saldo pendiente por factura.

**Qué falta definir con Finanzas:**
- ¿La fecha de corte es la fecha de generación del reporte o una fecha de cierre contable fija (ej. fin de mes)?
- ¿Facturas con nota de crédito parcial se re-clasifican por el saldo neto o se mantienen en su bucket original?
- ¿Facturas en disputa se excluyen de aging o se marcan aparte?

---

## 2. DSO (Days Sales Outstanding)

🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS

**Fórmula de referencia (dada por el plan maestro):**
```
DSO = CxC promedio / Ventas a crédito del período × Días del período
```

**Datos que necesita:** saldo de CxC al inicio y fin del período (para promedio), total de ventas a crédito del período, número de días del período (ej. 30, 90, 365).

**Qué falta definir con Finanzas:**
- ¿Qué cuenta exactamente como "ventas a crédito"? ¿Incluye ventas con condiciones de pago inmediato, o solo facturas a plazo?
- ¿Se excluyen impuestos (IVA u otros) del monto de ventas a crédito?
- ¿"CxC promedio" se calcula como (saldo inicial + saldo final)/2, o como promedio de saldos diarios/mensuales dentro del período?
- ¿El período de referencia es mensual, trimestral o anual, y es consistente entre KPIs?
- ¿Se excluyen clientes en litigio o cuentas incobrables castigadas del cálculo?

---

## 3. CEI (Collection Effectiveness Index)

🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS

**Fórmula propuesta (estructura estándar de industria, no fórmula propia validada):**
```
CEI = [(Saldo inicial + Ventas a crédito del período − Saldo final) /
       (Saldo inicial + Ventas a crédito del período − Cartera corriente al final del período)] × 100
```

**Datos que necesita:** saldo inicial de CxC, ventas a crédito del período, saldo final de CxC, monto de cartera corriente (no vencida) al final del período.

**Qué falta definir con Finanzas:**
- Definición operativa exacta de "cartera corriente" para efectos de este cálculo (¿es el bucket "Actual" del aging, o incluye algún otro criterio de política interna?).
- Si el CEI se calcula por período mensual, acumulado, o ambos.
- Tratamiento de ajustes, notas de crédito y devoluciones dentro del período.
- Política de la empresa sobre qué se considera "cobrado" (pago recibido vs. pago aplicado/conciliado).

---

## 4. Cartera vencida

🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS

**Cálculo propuesto:**
```
Cartera vencida = Σ (saldo pendiente de facturas con fecha de vencimiento < fecha de corte)
```
Equivalente a la suma de los buckets 1–30, 31–60, 61–90 y 90+ del aging (todo lo que no cae en "Actual").

**Datos que necesita:** los mismos que Aging (saldo pendiente por factura, fecha de vencimiento, fecha de corte).

**Qué falta definir con Finanzas:**
- ¿Se reporta como monto absoluto, como % del total de CxC, o ambos?
- ¿Se excluyen partidas en disputa formal o en proceso legal del monto de "vencida" para efectos de este KPI?
- ¿Existe un umbral de materialidad (ej. facturas menores a cierto monto no se reportan individualmente)?

---

## 5. Scoring / priorización de riesgo de cliente

🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS

Nota de origen: esta propuesta se inspira conceptualmente en el enfoque de priorización del worklist de AR Cockpit (repo público Sebastianvalenza/ar-cockpit), que combina monto, días de atraso, riesgo de default y peso estratégico. **No se copia su fórmula exacta**; se listan variables candidatas propias, todas como supuestos a validar.

**Variables candidatas propuestas (todas 🟡 supuesto, no aprobadas):**
1. Historial de pagos (ej. % de facturas pagadas a tiempo en los últimos N meses) — SUPUESTO: ventana de tiempo (¿6 meses? ¿12 meses?) sin definir.
2. Frecuencia y magnitud de atrasos pasados — SUPUESTO: cómo ponderar un atraso de 5 días vs. uno de 90 días.
3. Pagos parciales (frecuencia de pagos incompletos) — SUPUESTO: umbral de qué se considera "parcial" (ej. <95% del monto facturado).
4. Disputas abiertas o históricas — SUPUESTO: si una disputa resuelta a favor del cliente debe penalizar igual que una activa.
5. Crédito aprobado vs. saldo pendiente actual (utilización de línea de crédito) — SUPUESTO: cómo se obtiene el dato de línea de crédito aprobada (¿sistema de crédito, ERP, manual?).
6. Saldo pendiente total y su concentración en buckets de aging altos (61–90, 90+).
7. Incumplimientos históricos (defaults, cuentas enviadas a cobranza legal o castigadas).
8. Peso estratégico del cliente (ej. volumen de negocio, relación comercial) — SUPUESTO: esta variable es subjetiva/comercial, no contable; requiere definición de negocio, no solo de Finanzas.

**Qué falta definir con Finanzas (y posiblemente Comercial):**
- Cómo se combinan estas variables en un score único (¿suma ponderada, multiplicación, modelo estadístico?) y qué pesos se le asignan a cada una — no se propone una fórmula matemática cerrada aquí porque eso constituiría una fórmula no validada presentada como definitiva.
- Qué constituye "riesgo alto/medio/bajo" en términos de rangos de score.
- Si el peso estratégico (variable 8) debe entrar al score de riesgo financiero o mantenerse como una capa separada de priorización comercial.
- Fuente de datos para cada variable (¿todas están disponibles en el sistema actual o hay que capturarlas manualmente?).

---

## 6. Forecast

🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS

**Estructura propuesta: tres escenarios (optimista / base / pesimista)**

- **Escenario base:** proyección de cobros asumiendo que el comportamiento histórico de pago de cada cliente/segmento se mantiene igual (ej. basado en el % histórico de cobro dentro de cada bucket de aging).
  - SUPUESTO pendiente: ventana histórica a usar como referencia (¿últimos 3, 6, 12 meses?).

- **Escenario optimista:** asume una mejora en la tasa de cobro (ej. reducción de X% en días de atraso promedio, o aumento de X puntos porcentuales en cobros dentro de plazo).
  - SUPUESTO pendiente: magnitud del "X" — debe definirla Finanzas según metas de cobranza o iniciativas planeadas (ej. nuevas políticas de cobranza, descuentos por pronto pago).

- **Escenario pesimista:** asume deterioro en la tasa de cobro (ej. aumento de cartera en buckets 61–90/90+, o incremento de incumplimientos).
  - SUPUESTO pendiente: magnitud del deterioro a modelar, y si debe basarse en algún evento de riesgo conocido (ej. estacionalidad, concentración en clientes de alto riesgo) o en un porcentaje genérico.

**Datos que necesita en general:** aging histórico, tasas de cobro históricas por bucket/segmento, calendario de vencimientos futuros, y las metas o supuestos de mejora/deterioro que Finanzas defina para cada escenario.

**Qué falta definir con Finanzas:**
- Horizonte del forecast (¿30, 60, 90 días?).
- Nivel de granularidad (¿por cliente, por segmento, o total de cartera?).
- Si el forecast debe excluir clientes en default/castigados o modelarlos aparte.
- Método de cálculo formal para cada escenario (regla simple basada en % histórico vs. modelo estadístico) — no se fija aquí para evitar presentar un método no validado como definitivo.

---

## Decisiones tomadas en este documento

- Se documentan las fórmulas como propuestas explícitas, no como especificación final, siguiendo instrucción directa de no presentar nada como aprobado.
- Se usa la fórmula de DSO dada textualmente por el plan maestro como punto de partida, sin modificarla.
- Se usa la estructura estándar de industria para CEI (no inventada, pero tampoco tomada de una fuente única validada) ya que el plan maestro no proveyó una fórmula de referencia para CEI.
- Se evita copiar la fórmula exacta de AR Cockpit para el scoring de riesgo; en su lugar se listan variables candidatas inspiradas en ese concepto, dejando la ponderación/combinación sin definir.
- No se proponen fórmulas cerradas para el forecast de escenarios optimista/pesimista, porque su magnitud depende de política de negocio que solo Finanzas puede fijar.

## Supuestos

- Existe una "fecha de corte" única y consistente disponible en los datos para todos los cálculos de aging.
- Existen registros históricos suficientes (al menos varios meses) para calcular tasas de cobro históricas usadas en DSO, CEI y forecast.
- El sistema de origen de datos distingue ventas a crédito de otras ventas (a confirmar con Finanzas).
- Existe o puede obtenerse un dato de línea de crédito aprobada por cliente para el scoring de riesgo.
- Ninguna de estas fórmulas se implementa en el dashboard sin aprobación explícita de Finanzas.

## Riesgos

- Riesgo de que el equipo de desarrollo implemente estas fórmulas propuestas como si fueran definitivas si no se refuerza la etiqueta de "pendiente de validación" en el dashboard mismo.
- Riesgo de inconsistencia entre KPIs si "ventas a crédito", "período" o "fecha de corte" se definen de forma distinta para DSO, CEI y Aging.
- Riesgo de copiar implícitamente lógica de AR Cockpit sin adaptarla a la política real de la empresa, especialmente en el scoring de riesgo.
- Riesgo de que el forecast dé una falsa sensación de precisión si los supuestos de cada escenario no quedan documentados junto con el número que se muestre en el dashboard.

## Pendientes

- Validación formal de todas las fórmulas por parte de Finanzas (reunión o revisión documentada).
- Definición de "ventas a crédito" para DSO y CEI.
- Definición de "cartera corriente" y política de reconocimiento de cobro para CEI.
- Definición de ponderación y método de combinación para el score de riesgo de cliente.
- Definición de magnitudes de mejora/deterioro para los escenarios optimista y pesimista del forecast.
- Confirmación de disponibilidad real de los datos requeridos (línea de crédito aprobada, historial de disputas, etc.) en los sistemas de origen.
