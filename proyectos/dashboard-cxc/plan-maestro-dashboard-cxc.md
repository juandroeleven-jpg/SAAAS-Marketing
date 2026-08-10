# Proyecto: Dashboard de Cuentas por Cobrar

## Plan maestro de investigación, diseño y ejecución

> Objetivo: construir primero un prototipo funcional de CxC con datos ficticios, usando referencias existentes del mercado, y preparar una adaptación segura a los datos reales de la empresa.

<details>
<summary><strong>1. Principio de trabajo y distribución de responsabilidades</strong></summary>

### ChatGPT — planificación maestra

- Investiga estándares y referencias de la industria.
- Define el alcance y las fases.
- Revisa la lógica financiera.
- Identifica riesgos, supuestos y preguntas para Finanzas.
- Valida que cada decisión tenga una referencia o justificación.

### Claude — ejecución operativa

- Implementa tareas concretas.
- Genera y modifica código.
- Construye componentes, consultas y pruebas.
- Ejecuta instrucciones definidas en el plan maestro.

### GitHub — memoria y control del proyecto

- Conserva decisiones y referencias.
- Documenta cambios.
- Almacena código, capturas, datos ficticios y criterios de aceptación.
- Permite revisar el trabajo antes de conectarlo a datos reales.

### Principio

La automatización debe partir de una referencia funcional o de mercado, adaptarse al contexto de la empresa y documentar cada supuesto antes de ejecutarse.
</details>

<details>
<summary><strong>Verificación del trabajo reportado por Claude — 2026-08-10</strong></summary>

**Archivos revisados:** `mapa-componentes-visuales.md`, `mapa-modulos-funcionales.md`, `formulas-y-supuestos-cxc.md`, `borrador-modelo-datos.md` y `revision-paso-2.md`.

**Resultados por archivo:**

- `mapa-componentes-visuales.md`: consistente con el alcance visual; describe patrones con palabras propias, identifica placeholders genéricos y mantiene pendientes de adaptación.
- `mapa-modulos-funcionales.md`: cubre los seis módulos; distingue la demo sintética de las reglas reales y marca para reconstrucción los umbrales, scoring, forecast y datos faltantes.
- `formulas-y-supuestos-cxc.md`: Aging, DSO, CEI, cartera vencida, scoring y forecast están etiquetados como propuestas pendientes de validación por Finanzas; no se presenta una fórmula cerrada de scoring o forecast como aprobada.
- `borrador-modelo-datos.md`: está identificado como material preparatorio/adelantado del Paso 4 y deja decisiones de modelo pendientes; no se presenta como definición final.
- `revision-paso-2.md`: sus conclusiones coinciden con la evidencia revisada; no se detectan contradicciones materiales.

**Controles ejecutados:** búsqueda de marcadores de pendiente/supuesto; búsqueda de credenciales, secretos, tokens y claves; búsqueda de bloques o indicadores de código fuente; inspección de referencias a datos reales; comparación hash del plan maestro contra `HEAD` antes de esta anotación. No se encontraron datos reales ni credenciales, y no se encontraron fragmentos de código literal copiado.

**Diferencias/observaciones:** el modelo de datos es un adelanto fuera del entregable formal del Paso 2, pero lo declara expresamente. La validación financiera de fórmulas sigue pendiente; la evidencia disponible demuestra etiquetado y cautelas, no aprobación de negocio.

**Evidencia:** capturas nuevas en `proyectos/dashboard-cxc/evidencias-verificacion/` (nombres indicados en la entrega de esta verificación). No se sobrescribieron archivos existentes.

**Veredicto:** **listo para revisión humana**. Este veredicto no constituye aprobación definitiva ni sustituye la validación de Finanzas.
</details>

<details>
<summary><strong>2. Referencia funcional: AR Cockpit</strong></summary>

![Captura del repositorio AR Cockpit](./referencia-ar-cockpit-github.png)

**Repositorio:** [AR Cockpit](https://github.com/Sebastianvalenza/ar-cockpit)

### Qué queremos estudiar

- Aging de cartera: actual, 1–30, 31–60, 61–90 y 90+.
- Priorización de clientes.
- Score de prioridad.
- Acciones de seguimiento.
- Forecast optimista, base y pesimista.
- Indicadores como DSO y CEI.
- Carga de datos y filtros.

### Qué no debemos copiar sin validar

- KPIs fijados manualmente.
- DSO calculado con aproximaciones.
- Forecast basado en supuestos artificiales.
- Scores de riesgo sin historial real.
- Fechas generadas automáticamente cuando faltan datos.
- Datos sintéticos tratados como si fueran resultados financieros reales.

### Conclusión

AR Cockpit sirve como referencia de experiencia y estructura de CxC, pero la lógica financiera debe reconstruirse, documentarse y validarse con Finanzas.
</details>

<details>
<summary><strong>3. Referencia visual: shadcn-admin</strong></summary>

![Captura del repositorio shadcn-admin](./referencia-shadcn-admin-github.png)

**Repositorio:** [shadcn-admin](https://github.com/satnaing/shadcn-admin)

### Qué queremos estudiar

- Jerarquía visual de dashboards.
- Navegación lateral.
- Tarjetas KPI.
- Tablas con filtros.
- Estados vacíos, carga y error.
- Diseño responsive.
- Componentes reutilizables.

### Regla de uso

La referencia visual no define las fórmulas financieras. Solo sirve para construir una interfaz clara, consistente y fácil de operar.

### Resultado esperado

Un dashboard con apariencia profesional, pero con datos, cálculos y estados claramente separados de la capa visual.
</details>

<details>
<summary><strong>4. Fase 1 — Definir el alcance del prototipo</strong></summary>

### Entregables

- Dashboard con datos ficticios.
- KPIs iniciales.
- Aging de facturas.
- Tabla priorizada de clientes.
- Filtros por cliente, estado, fecha y vencimiento.
- Forecast claramente marcado como simulado.

### Sin riesgo

Esta fase no utiliza datos reales, no modifica contabilidad y sirve para validar diseño, navegación y flujo de trabajo.
</details>

<details>
<summary><strong>5. Fase 2 — Diccionario y compatibilidad de datos</strong></summary>

### Campos mínimos

| Campo | Uso |
|---|---|
| Cliente | Agrupar cartera |
| ID de factura | Evitar duplicados |
| Fecha de emisión | Medir antigüedad |
| Fecha de vencimiento | Calcular atraso |
| Monto original | Medir exposición |
| Saldo pendiente | Calcular CxC real |
| Pagos aplicados | Reducir saldo |
| Fecha de pago | Medir comportamiento |
| Moneda | Consolidar correctamente |
| Estado de factura | Separar abierta, pagada, anulada o disputada |

### Campos recomendados

Notas de crédito, pagos no aplicados, condiciones de pago, estado de disputa y centro de costo.

### Pregunta crítica

Cada fila debe representar una factura, un pago o un cliente claramente identificado. Si una factura puede tener varios pagos, el modelo debe permitir una relación de uno a muchos.
</details>

<details>
<summary><strong>6. Fase 3 — Validar los KPIs y fórmulas</strong></summary>

### Aging

`Días de atraso = Fecha de corte − Fecha de vencimiento`

Clasificación: actual, 1–30, 31–60, 61–90 y 90+.

### DSO

Debe definirse con Finanzas, por ejemplo:

`DSO = CxC promedio / ventas a crédito del período × días del período`

### CEI

Debe calcularse con saldo inicial, ventas a crédito, saldo final y cartera corriente según la política de la empresa.

### Riesgo

Debe considerar historial de pagos, atrasos, pagos parciales, disputas, crédito aprobado, saldo pendiente e incumplimientos.

### Regla de validación

Para cada KPI: resultado del dashboard = resultado calculado manualmente = resultado aprobado por Finanzas.
</details>

<details>
<summary><strong>7. Fase 4 — Prueba histórica con datos anonimizados</strong></summary>

### Proceso

1. Recibir entre 3 y 12 meses de datos anonimizados.
2. Cargar los datos sin modificar el archivo original.
3. Comparar dashboard contra Excel o ERP actual.
4. Revisar diferencias de saldo, aging y pagos.
5. Documentar cada transformación.
6. Corregir y repetir la conciliación.

### Sin riesgo

La prueba debe ejecutarse en un entorno separado, con acceso limitado y datos anonimizados. No se debe conectar el sistema a producción en esta fase.
</details>

<details>
<summary><strong>8. Fase 5 — Piloto operativo</strong></summary>

### Duración sugerida

30 días con el equipo de CxC.

### Métricas

- Tiempo ahorrado en reportes.
- Clientes contactados.
- Monto recuperado.
- Disminución de cartera vencida.
- Precisión del forecast.
- Facilidad de uso.
- Diferencias contra el sistema oficial.
</details>

<details>
<summary><strong>9. Riesgos y controles</strong></summary>

| Riesgo | Control |
|---|---|
| Saldos incorrectos | Conciliación contra ERP |
| Pagos parciales mal aplicados | Modelo separado de facturas y pagos |
| Notas de crédito ignoradas | Campo y regla documentados |
| DSO artificial | Fórmula aprobada por Finanzas |
| Forecast exagerado | Supuestos visibles y escenarios limitados |
| Datos incompletos | Semáforo de calidad de datos |
| Acceso indebido | Entorno aislado y permisos mínimos |
</details>

<details>
<summary><strong>10. Criterios de aceptación</strong></summary>

El prototipo puede avanzar a piloto solo cuando:

- Los saldos coinciden con la fuente oficial.
- Las fórmulas fueron aprobadas.
- No se generan fechas aleatorias.
- Los pagos parciales se manejan correctamente.
- Las notas de crédito no inflan la cartera.
- El forecast documenta sus supuestos.
- Los datos ficticios están claramente identificados.
- El equipo financiero entiende y acepta los resultados.
</details>

<details>
<summary><strong>11. Referencias de industria</strong></summary>

- [APQC — Measuring Order-to-Cash](https://www.apqc.org/resource-library/resource-listing/measuring-order-cash)
- [Microsoft — Star schema guidance](https://learn.microsoft.com/en-us/power-bi/guidance/star-schema)
- [Oracle — Accounts Receivable Aging](https://docs.oracle.com/en/industries/hospitality/opera-cloud/21.4/ocsuh/c_accounts_receivable_accounts_receivable_aging.htm)
- [SAP — Days Sales Outstanding](https://help.sap.com/docs/SAP_S4HANA_CLOUD/918bca53037f408f91a2295d04ac16bc/a9453358fde89244e10000000a4450e5.html)
- [IFRS Foundation — IFRS 9](https://www.ifrs.org/content/dam/ifrs/publications/html-standards/english/2024/issued/ifrs9.html)
</details>

## Veredicto inicial

El proyecto es viable como prototipo y puede convertirse en una herramienta empresarial, pero solo después de reconstruir y validar la lógica financiera con datos anonimizados. AR Cockpit aporta la referencia funcional; shadcn-admin aporta la referencia visual; ChatGPT organiza la planificación; Claude ejecuta las tareas operativas; GitHub conserva la memoria y las decisiones del sistema.

## Primeros 10 pasos de adaptación

> Estos pasos describen qué se adaptaría, por qué se haría y qué material se necesita. No significan que el código de los repositorios deba copiarse directamente ni que ya se hayan conectado datos reales.

<details>
<summary><strong>Paso 1 — Congelar las referencias y crear una línea base</strong></summary>

### Acción

- Revisar la estructura visual de [shadcn-admin](https://github.com/satnaing/shadcn-admin).
- Revisar los módulos funcionales de [AR Cockpit](https://github.com/Sebastianvalenza/ar-cockpit).
- Guardar commit, URL y captura de cada referencia.

### Por qué

Evita que el equipo cambie de referencia a mitad del proyecto y permite comparar qué se tomó de cada repositorio.

### Materiales

- Captura de AR Cockpit: `referencia-ar-cockpit-github.png`.
- Captura de shadcn-admin: `referencia-shadcn-admin-github.png`.
- Tabla de decisiones en este documento.
</details>

<details>
<summary><strong>Paso 2 — Separar la capa visual de la lógica de CxC</strong></summary>

### Acción

- Usar shadcn-admin como referencia de navegación, tarjetas, tablas y filtros.
- Usar AR Cockpit como referencia de módulos de cartera.
- Crear una capa propia para cálculos financieros.

### Por qué

La interfaz puede reutilizar patrones visuales, pero los KPIs no deben heredarse sin comprobar sus fórmulas.

### Materiales

- Mapa de componentes visuales.
- Mapa de módulos funcionales.
- Documento de fórmulas aprobadas.
</details>

<details>
<summary><strong>Paso 3 — Convertir la pantalla de AR Cockpit en módulos propios</strong></summary>

### Acción

Separar en módulos independientes:

- Resumen de cartera.
- Aging.
- Clientes prioritarios.
- Forecast.
- Seguimiento de cobros.
- Carga y calidad de datos.

### Por qué

Permite sustituir una parte simulada sin tener que reconstruir todo el dashboard.

### Materiales

- Inventario de pantallas.
- Lista de componentes.
- Diagrama de navegación.
</details>

<details>
<summary><strong>Paso 4 — Diseñar el modelo de datos compatible</strong></summary>

### Acción

Crear tablas separadas para:

- clientes;
- facturas;
- pagos;
- notas de crédito;
- disputas;
- condiciones de pago;
- monedas y tipos de cambio.

### Por qué

Una hoja plana puede ocultar pagos parciales, duplicados y relaciones entre facturas y pagos.

### Materiales

- Diccionario de datos.
- Diagrama entidad-relación.
- Plantilla CSV ficticia.
- Reglas de identificación única.
</details>

<details>
<summary><strong>Paso 5 — Reemplazar los datos demo por datos ficticios controlados</strong></summary>

### Acción

Crear casos de prueba para:

- factura vigente;
- factura vencida;
- pago parcial;
- factura pagada;
- nota de crédito;
- factura disputada;
- cliente con varias facturas;
- cliente con historial de atraso.

### Por qué

Los datos sintéticos deben probar comportamientos concretos, no solo llenar tarjetas visuales.

### Materiales

- CSV de prueba.
- Casos esperados.
- Totales de control calculados manualmente.
</details>

<details>
<summary><strong>Paso 6 — Reconstruir el aging</strong></summary>

### Acción

Aplicar una fecha de corte definida y calcular:

`Días de atraso = Fecha de corte − Fecha de vencimiento`

Clasificar en actual, 1–30, 31–60, 61–90 y 90+.

### Por qué

El aging es una de las funciones principales de AR Cockpit, pero solo es confiable si existen fecha de vencimiento, saldo pendiente y fecha de corte.

### Materiales

- Fórmula documentada.
- Casos manuales.
- Tabla de resultados esperados.
- Captura del módulo de aging de la referencia funcional.
</details>

<details>
<summary><strong>Paso 7 — Reconstruir los KPIs y el forecast</strong></summary>

### Acción

- Definir DSO y CEI con Finanzas.
- Calcular cartera vencida sobre saldo pendiente.
- Crear forecast base, optimista y pesimista solo con supuestos visibles.
- Marcar claramente los valores simulados.

### Por qué

El dashboard de referencia demuestra cómo presentar los KPIs, pero no garantiza que sus valores demo sean adecuados para la empresa.

### Materiales

- Hoja de cálculo de validación.
- Definiciones aprobadas.
- Supuestos de forecast.
- Pruebas unitarias.
</details>

<details>
<summary><strong>Paso 8 — Aplicar el sistema visual de shadcn-admin</strong></summary>

### Acción

- Adaptar navegación lateral.
- Crear tarjetas KPI.
- Construir tablas con filtros.
- Añadir estados de carga, error y datos vacíos.
- Mantener consistencia de colores, tipografía y espaciado.

### Por qué

La referencia visual ayuda a que el sistema sea usable, pero no debe ocultar advertencias de calidad ni datos faltantes.

### Materiales

- Captura del repositorio visual.
- Inventario de componentes.
- Guía de tokens visuales.
- Prototipo de cada pantalla.
</details>

<details>
<summary><strong>Paso 9 — Probar compatibilidad con datos anonimizados</strong></summary>

### Acción

- Recibir una muestra de 3 a 12 meses.
- Anonimizar clientes y facturas.
- Mapear columnas al diccionario.
- Detectar campos faltantes y duplicados.
- Comparar los totales con Excel o ERP.

### Por qué

Este paso revela si el dashboard puede adaptarse realmente a la empresa sin tocar todavía la operación productiva.

### Materiales

- Archivo anonimizados.
- Mapa de transformación.
- Reporte de errores.
- Tabla de conciliación.
</details>

<details>
<summary><strong>Paso 10 — Ejecutar piloto y decidir si pasa a producción</strong></summary>

### Acción

- Usar el dashboard durante 30 días en un entorno controlado.
- Compararlo contra el proceso actual.
- Medir tiempo, recuperación, precisión y diferencias.
- Registrar comentarios del equipo.
- Aprobar, corregir o detener el avance.

### Por qué

La calidad visual no demuestra viabilidad empresarial. La decisión debe basarse en coincidencia de saldos, fórmulas aprobadas y utilidad para el equipo.

### Materiales

- Checklist de aceptación.
- Registro de incidencias.
- Métricas antes y después.
- Acta de aprobación de Finanzas.
</details>

<details>
<summary><strong>Mapa de fuentes de cada adaptación</strong></summary>

| Adaptación | Referencia principal | Qué se toma | Qué se debe reconstruir |
|---|---|---|---|
| Navegación y componentes | shadcn-admin | Patrón visual y estructura de interfaz | Textos, estados y componentes del proyecto |
| Aging | AR Cockpit + Oracle | Organización por antigüedad | Fórmula y fecha de corte |
| DSO | AR Cockpit + SAP | Presentación del KPI | Cálculo aprobado por Finanzas |
| CEI | AR Cockpit + política interna | Indicador de eficiencia | Variables y definición empresarial |
| Riesgo | AR Cockpit + IFRS 9 | Forma de priorizar | Datos reales y matriz de provisiones |
| Forecast | AR Cockpit | Escenarios visuales | Supuestos y comportamiento histórico |
| Modelo de datos | Microsoft star schema | Separación de hechos y dimensiones | Tablas y relaciones de la empresa |
</details>
