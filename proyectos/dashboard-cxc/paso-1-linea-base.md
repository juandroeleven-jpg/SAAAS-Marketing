# Paso 1 — Congelar las referencias y crear una línea base

**Estado:** completado, pendiente de revisión (GPT / usuario) antes de avanzar al Paso 2.

---

## 1. Archivos revisados

### AR Cockpit — `Sebastianvalenza/ar-cockpit`
- `README.md` — descripción completa del propósito, módulos y stack
- `index.html` (782 líneas) — código fuente completo revisado (solo lectura, no se copió nada)
- `LICENSE` — MIT

### shadcn-admin — `satnaing/shadcn-admin`
- Estructura de `src/` (nivel raíz y subcarpetas `components/` y `features/`)
- No se leyó el código interno línea por línea de cada componente — se identificó el mapa de carpetas y su propósito por nombre, suficiente para el Paso 1 (línea base). Revisión de código detallado queda para el Paso 2/3 cuando se definan los componentes a adaptar.

---

## 2. Capturas

Ya existían en el repo (`proyectos/dashboard-cxc/`), tomadas antes de este paso:
- `referencia-ar-cockpit-github.png`
- `referencia-shadcn-admin-github.png`

Las revisé y confirman lo documentado abajo (nombre del repo, stars, licencia, último commit visibles en la captura). No tomé capturas nuevas — reutilicé las existentes porque ya cumplen el propósito del Paso 1.

---

## 3. Línea base — commit y versión exacta

| Repo | URL | Último commit visto | Stars | Licencia |
|---|---|---|---|---|
| AR Cockpit | https://github.com/Sebastianvalenza/ar-cockpit | `563be80` (2 meses atrás, "Update README.md") | 0 | MIT |
| shadcn-admin | https://github.com/satnaing/shadcn-admin | `e16c87f` (2 meses atrás, PR #303 bump deps) | 13.8k | MIT |

**Nota importante sobre AR Cockpit:** es un repo joven (creado 2026-06-14), sin adopción (0 stars), pero el código es funcionalmente completo y coincide exacto con lo que el plan maestro busca estudiar (aging, DSO/CEI, worklist, forecast). Es un solo archivo `index.html` (vanilla JS + Chart.js + PapaParse) — **no** es un proyecto con arquitectura de carpetas, backend ni framework. Esto es clave: la "referencia funcional" es lógica/UX, no estructura de código a imitar.

---

## 4. Tabla de decisiones

| Elemento | Origen | Tipo | Decisión |
|---|---|---|---|
| Aging (0-30/31-60/61-90/90+, buckets, 90+ como "write-off risk") | AR Cockpit | Funcional | ✅ Tomar como referencia de estructura/lógica de negocio |
| DSO + CEI + ADD, tracking contra target band 90 días | AR Cockpit | Funcional | ✅ Tomar como referencia; **fórmulas deben validarse con Finanzas** (regla del plan maestro) |
| Worklist priorizado (`amount × days overdue × default risk × strategic weight`) | AR Cockpit | Funcional | ✅ Tomar como referencia de concepto; el scoring exacto es un supuesto de la demo, no dato validado |
| Ruteo de cuentas en disputa (no se cobran, se resuelven primero) | AR Cockpit | Funcional | ✅ Regla de negocio útil, revisar si aplica igual en la empresa |
| Cash Forecast (4w/13w/6m/12m, banda optimista/base/pesimista) | AR Cockpit | Funcional | ✅ Tomar como referencia visual del concepto; supuestos deben ser explícitos y propios |
| Import CSV con auto-detección de columnas, multi-formato (fechas EU/US, separadores) | AR Cockpit | Funcional | ✅ Buena práctica a replicar — reduce fricción de carga de datos |
| Datos sintéticos generados con seed fijo (`mulberry32`) | AR Cockpit | Funcional | ✅ Tomar el enfoque (datos ficticios reproducibles), no el generador exacto |
| Arquitectura single-file vanilla JS / Chart.js / PapaParse | AR Cockpit | Técnico | ❌ No aplica — nuestro proyecto usará el stack de shadcn-admin (React/Vite/TS), no un archivo único |
| Sidebar de navegación, layout general | shadcn-admin | Visual | ✅ Tomar como referencia de estructura |
| `components/data-table` (tablas con filtros) | shadcn-admin | Visual | ✅ Tomar como referencia para la tabla de clientes/facturas |
| `components/ui` (primitivos shadcn) | shadcn-admin | Visual | ✅ Tomar como base de componentes |
| `features/dashboard` (tarjetas KPI, layout de resumen) | shadcn-admin | Visual | ✅ Tomar como referencia de layout de KPIs |
| `features/auth` | shadcn-admin | Visual/Funcional | ⚠️ No prioritario en el prototipo (Fase 1 no requiere auth real) |
| `features/tasks` (patrón de tabla+filtros genérico) | shadcn-admin | Visual | ✅ Útil como patrón general de tabla, no específico de CxC |
| Fórmulas de DSO/CEI exactas del código de AR Cockpit | AR Cockpit | — | 🔒 **No copiar sin validar** — explícito en el plan maestro (Fase 3) |
| Scores de riesgo sin historial real | AR Cockpit | — | 🔒 **No copiar sin validar** |
| Fechas generadas automáticamente cuando faltan datos | AR Cockpit | — | 🔒 **No copiar sin validar** |
| Modelo de datos (clientes, facturas, pagos, notas de crédito, disputas) | — | A construir | 🔨 No existe en ninguna referencia con el detalle que pide el plan (relación 1 factura : muchos pagos) — se construye en Paso 4 |
| Capa de cálculos financieros (aging, DSO, CEI, forecast) | — | A construir | 🔨 Se reconstruye desde cero, validada con Finanzas — Pasos 6-7 |

---

## 5. Riesgos encontrados

1. **AR Cockpit es un proyecto sin tracción/validación externa** (0 stars, 1 mes de vida). Su valor es como referencia de UX/estructura de decisión, no como fuente de verdad de fórmulas financieras — esto refuerza (no contradice) la regla del plan maestro de no copiar KPIs sin validar.
2. **Diferencia de stack:** AR Cockpit es vanilla JS sin build step; shadcn-admin es React/Vite/TS. No hay compatibilidad directa de código entre ambos — la adaptación funcional de AR Cockpit deberá reescribirse por completo en el stack visual elegido, no portarse.
3. **El worklist prioritized-scoring de AR Cockpit** (`amount × days overdue × default risk × strategic weight`) usa "default risk" y "strategic weight" que en la demo son sintéticos — si se toma el concepto, hay que definir de dónde saldrían esos valores con datos reales (esto es una pregunta pendiente para Finanzas, no una decisión técnica).
4. **`features/auth` de shadcn-admin** usa Clerk (dependencia externa de autenticación) — evaluar si es la solución de auth deseada para la empresa o si se reemplaza, antes del Paso 8.

---

## 6. Confirmación de completado / pendiente

**Completado:**
- ✅ Revisión de estructura funcional de AR Cockpit (README + código fuente)
- ✅ Revisión de estructura visual de shadcn-admin (mapa de carpetas `src/`)
- ✅ URL exacta y commit de cada repositorio documentados
- ✅ Capturas confirmadas (ya existentes en el repo, verificadas contra lo documentado)
- ✅ Tabla de decisiones (funcional / visual / a construir)
- ✅ Riesgos identificados
- ✅ Sin código escrito, sin datos reales, sin copia directa de código — cumplido

**Pendiente (fuera del alcance del Paso 1, corresponde a pasos siguientes):**
- Mapa detallado de componentes visuales de shadcn-admin línea por línea (Paso 2)
- Definición de fórmulas aprobadas por Finanzas (Paso 3/6/7)
- Diagrama de navegación e inventario de pantallas (Paso 3)

**Esperando revisión antes de avanzar al Paso 2.**
