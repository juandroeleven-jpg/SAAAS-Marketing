# Revisión de calidad — Paso 2: Separar la capa visual de la lógica de CxC

**Fecha:** 2026-08-10
**Agente:** Agente 5 — Control de calidad

## Alcance

Revisión de los 4 documentos generados por los Agentes 1-4 para el Paso 2 del plan maestro, contra el plan maestro oficial (`plan-maestro-dashboard-cxc.md`) y el Paso 1 aprobado (`paso-1-linea-base.md`). No se modificó ninguno de los 4 documentos ni el plan maestro ni el Paso 1. Se verificaron: alineación con el plan maestro, ausencia de hechos inventados presentados como reales, ausencia de código literal copiado, etiquetado explícito de "pendiente de validación" en fórmulas, marcado del modelo de datos como preparatorio del Paso 4, y ausencia de datos reales de empresa.

---

## 1. mapa-componentes-visuales.md (Agente 1)

**Cumple con el plan maestro:** Sí. El plan maestro pide usar shadcn-admin como referencia de navegación, tarjetas KPI, tablas y filtros, con la regla de que "la referencia visual no define las fórmulas financieras". El documento respeta exactamente esa frontera: describe patrones visuales (sidebar, header/main, KPI cards, data-table, paginación, estados vacío/carga/error, filtros) y en ningún punto propone una fórmula o KPI numérico como válido; los nombres de KPI que usa ("Cartera Total", "DSO") están explícitamente marcados como "ilustrativos y genéricos" en la sección de Decisiones.

**Código literal:** No se encontró ningún bloque de código copiado. Todas las referencias a archivos van acompañadas de descripción en prosa del patrón, no de fragmentos de JSX/TS transcritos.

**Datos reales de empresa:** No se encontraron.

**Incompleto:** Nada relevante al alcance pedido; el propio documento declara explícitamente qué no se exploró (features `apps`, `chats`, `settings`) y por qué, lo cual es correcto como delimitación de alcance, no como omisión oculta.

**Qué corregir:** Nada crítico. Sugerencia menor (no bloqueante): la sección "Pendientes" ya señala bien que el esquema de columnas depende del agente de lógica; sería más consistente que citara textualmente `mapa-modulos-funcionales.md` como fuente cuando ese esquema esté disponible, pero esto es una mejora cosmética, no un defecto.

**Evidencia faltante:** Ninguna. Cita URLs exactas de `gh api` consultadas y archivos leídos.

---

## 2. mapa-modulos-funcionales.md (Agente 2)

**Cumple con el plan maestro:** Sí. Cubre los seis módulos que pide el Paso 3 del plan maestro (Cartera, Aging, Clientes prioritarios, Forecast, Seguimiento de cobros, Calidad de datos) y respeta la lista explícita de "qué no debemos copiar sin validar" del punto 2 del plan maestro (KPIs fijos, DSO aproximado, forecast con supuestos artificiales, scores de riesgo sin historial real, fechas generadas automáticamente, datos sintéticos tratados como reales) — en cada uno de los 6 módulos hay una subsección "Reconstruir/validar" que marca explícitamente estos elementos como no transferibles.

**Código literal:** No se encontró. Las fórmulas del worklist (pesos 0.40/0.30/0.20, penalización 0.78) se mencionan solo para decir que son arbitrarias de la demo y deben descartarse, no se presentan como fórmula a usar; no hay bloques de código.

**Hechos sin evidencia:** Ninguno. El documento es cuidadoso distinguiendo lo que observó en el código ("251 cuentas B2B sintéticas generadas con `mulberry32`") de lo que propone, y aclara reiteradamente que ninguna cifra debe tratarse como validada para el negocio real.

**Datos reales de empresa:** No se encontraron.

**Incompleto:** Nada relevante. El documento señala sus propios pendientes (definir agrupador organizacional real, fuente de datos real, multi-moneda) de forma explícita.

**Qué corregir:** Nada crítico.

**Evidencia faltante:** Ninguna. Cita las URLs exactas de `gh api` y el README consultado.

---

## 3. formulas-y-supuestos-cxc.md (Agente 3)

**Cumple con el plan maestro:** Sí, y de forma especialmente rigurosa. Usa la fórmula de DSO dada textualmente por el plan maestro sin modificarla, no fija fórmula cerrada para el scoring de riesgo (solo lista variables candidatas) ni para el forecast (solo estructura de tres escenarios sin magnitudes), tal como exige el plan maestro al dejar esas decisiones a Finanzas/negocio.

**Verificación específica del punto 4 de la tarea — TODAS las fórmulas marcadas como pendientes:**
- Encabezado general del documento: "🟡 BORRADOR PROPOSITIVO — NINGUNA fórmula aquí está aprobada."
- Sección 1 (Aging): 🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS ✅
- Sección 2 (DSO): 🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS ✅
- Sección 3 (CEI): 🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS ✅
- Sección 4 (Cartera vencida): 🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS ✅
- Sección 5 (Scoring de riesgo): 🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS ✅ (además, correctamente, no llega a fórmula cerrada)
- Sección 6 (Forecast): 🟡 PROPUESTA — PENDIENTE DE VALIDACIÓN POR FINANZAS ✅ (tampoco fija fórmula cerrada, por diseño)

No se encontró ninguna fórmula sin la etiqueta de pendiente. No hay hallazgo crítico en este punto.

**Código literal:** No aplica (documento de fórmulas en notación matemática/texto, no código); no se copiaron fórmulas exactas de AR Cockpit, solo la estructura conceptual del worklist con aclaración explícita de "no se copia su fórmula exacta".

**Hechos sin evidencia:** Ninguno. La fórmula de CEI se declara explícitamente como "estructura estándar de industria, no fórmula propia validada" en vez de presentarse como dato duro.

**Datos reales de empresa:** No se encontraron.

**Qué corregir:** Nada crítico.

**Evidencia faltante:** Ninguna relevante — el documento cita como base normativa la Fase 3 del plan maestro y como referencia conceptual (no normativa) el repo de AR Cockpit, consistente con lo pedido.

---

## 4. borrador-modelo-datos.md (Agente 4)

**Cumple con el plan maestro:** Sí. Cubre las 5 entidades centrales pedidas por la Fase 2/Paso 4 del plan maestro (Clientes, Facturas, Pagos, Notas de crédito, Disputas), incluye todos los campos mínimos y recomendados listados en la Fase 2, y resuelve correctamente la "pregunta crítica" del plan maestro (relación 1 factura : muchos pagos) con diseño de PK/FK explícito.

**Verificación específica del punto 5 de la tarea — marcado como material preparatorio del Paso 4:**
El propio título del documento (línea 1) es: "📋 MATERIAL PREPARATORIO DEL PASO 4 — borrador adelantado, no es la definición final del modelo de datos." Además la sección de Alcance repite "antes de que el Paso 4 formal defina el modelo definitivo", y la sección final "Pendientes (para el Paso 4 formal)" refuerza el carácter no definitivo. Correcto, sin hallazgo.

Nota: este documento se genera formalmente como parte del Paso 2 (el plan maestro pide "Mapa de componentes visuales" + "Mapa de módulos funcionales" + "Documento de fórmulas aprobadas" como materiales del Paso 2, y el modelo de datos formal es del Paso 4). El propio Agente 4 es transparente sobre esto: se trata de un adelanto/borrador entregado ahora para apoyar el diseño, no un entregable formal del Paso 2 exigido por el plan maestro. Esto no es un incumplimiento — es coherente con la lista de materiales del Paso 2 ("Mapa de componentes visuales", "Mapa de módulos funcionales", "Documento de fórmulas aprobadas") en la que el modelo de datos no aparece, y el documento lo señala honestamente en su propio título en vez de presentarse como si fuera un entregable exigido. Se registra como observación, no como hallazgo crítico.

**Código literal:** No aplica (tablas de campos, no código).

**Hechos sin evidencia:** Ninguno; tipos de dato y catálogos se marcan explícitamente como "ejemplo"/"ilustrativos, no un catálogo cerrado".

**Datos reales de empresa:** No se encontraron.

**Qué corregir:** Nada crítico. Sugerencia menor: cuando el Paso 4 formal se ejecute, debería referenciar y reconciliar explícitamente este borrador en vez de partir de cero, para no duplicar trabajo — esto ya está implícito pero podría hacerse explícito en ese momento.

**Evidencia faltante:** Ninguna.

---

## Hallazgos transversales

1. **No se encontraron afirmaciones presentadas como hechos sin fuente o número inventado como si fuera real** en ninguno de los 4 documentos. Todos distinguen consistentemente entre "lo que observé en el repo de referencia" y "lo que propongo", con marcas 🟡/✅/❌/🔒 usadas de forma consistente entre agentes.
2. **No se encontró código literal copiado** de shadcn-admin ni de AR Cockpit en ningún documento. Las referencias a rutas de archivo van siempre acompañadas de descripción propia del patrón, nunca de fragmentos de código transcritos.
3. **No se encontraron datos reales de ninguna empresa** en ningún documento; todos los ejemplos de KPIs, columnas, nombres de cliente y catálogos están marcados como ilustrativos/genéricos.
4. Los 4 documentos están fechados correctamente (2026-08-10) y referencian correctamente el Paso 1 aprobado y el plan maestro.
5. Los 4 agentes documentaron supuestos, riesgos y pendientes de forma consistente con el estándar establecido en el Paso 1.

## Hallazgos críticos

Ninguno.

## Veredicto general

**El Paso 2 está listo para pasar a revisión humana.** Los 4 documentos cumplen con lo que pide el plan maestro para este paso, no contienen código copiado, no presentan datos ficticios o cifras de la demo como hechos reales, todas las fórmulas en `formulas-y-supuestos-cxc.md` están marcadas explícitamente como pendientes de validación por Finanzas (sin excepción), y `borrador-modelo-datos.md` está claramente etiquetado como material preparatorio del Paso 4, no como definición final. No se requieren correcciones antes de pasar a revisión humana; las sugerencias señaladas arriba son mejoras menores, no bloqueantes.
