# Mapa de Componentes Visuales — Dashboard CxC (referencia: shadcn-admin)

**Fecha:** 2026-08-10
**Agente:** Agente 1 — Capa visual (Paso 2 del plan maestro)
**Repo de referencia:** https://github.com/satnaing/shadcn-admin (React + Vite + TypeScript + TanStack Router/Table + shadcn/ui + Tailwind)

## Alcance

Este documento mapea, patrón por patrón, qué piezas visuales de `shadcn-admin` sirven de referencia para construir la capa visual del Dashboard de CxC, separada de la lógica funcional (que maneja otro agente). Es solo lectura del repo público vía `gh api`; no se copió código literal, se describe el patrón con palabras propias y se indica qué adaptar para CxC. No se usan datos reales de ninguna empresa — todos los ejemplos de KPIs, columnas y filtros abajo son genéricos/placeholder para CxC (facturas, clientes, saldos, vencimientos).

---

## 1. Navegación (sidebar, estructura de rutas)

**Referencia:** `src/components/layout/app-sidebar.tsx`, `src/components/layout/nav-group.tsx`, `src/components/layout/nav-user.tsx`, `src/components/layout/team-switcher.tsx`, `src/components/layout/data/sidebar-data.ts`, `src/components/ui/sidebar.tsx`.

El patrón es una barra lateral colapsable (componente `Sidebar` de shadcn/ui, con variante y modo "collapsible" configurables vía contexto `useLayout`). Se compone de tres bloques apilados: header (selector de equipo/marca, `TeamSwitcher`), contenido (una lista de grupos de navegación `NavGroup`, cada uno generado a partir de un arreglo de datos declarativo `sidebarData.navGroups` con título, ícono y sub-links) y footer (menú de usuario `NavUser` con avatar/dropdown). Existe un `SidebarRail` para poder arrastrar/colapsar. Las rutas viven en `src/routes` usando TanStack Router con grupos de carpetas: `(auth)`, `(errors)`, `_authenticated/*` (rutas protegidas: dashboard/index, apps, chats, settings, users, tasks, help-center).

**Adaptar para CxC:** reemplazar los grupos de navegación por las secciones del dashboard de CxC (ej. Resumen, Facturas, Clientes, Cobranza/Aging, Reportes, Configuración). El `TeamSwitcher` probablemente se simplifica a un logo/nombre de empresa fijo (o se reutiliza si se necesita multi-empresa). La estructura de rutas `_authenticated/*` es un buen molde para separar "requiere sesión" del resto, pero las rutas concretas hay que reconstruirlas desde cero según las páginas reales de CxC.

---

## 2. Layout general (header, contenedor principal, responsive)

**Referencia:** `src/components/layout/header.tsx`, `src/components/layout/main.tsx`, `src/components/layout/authenticated-layout.tsx`, `src/components/layout/top-nav.tsx`.

`Header` es una barra superior de 64px de alto (h-16), con un `SidebarTrigger` (botón hamburguesa) + separador + children (título/tabs, buscador, cambio de tema, dropdown de perfil). Soporta modo "fixed" con sombra que aparece al hacer scroll (listener de scroll con estado local) y un efecto de blur de fondo. `Main` es el contenedor de contenido: padding estándar, modo "fixed" (flex-grow, overflow oculto, para vistas tipo tabla que necesitan scroll interno) o modo fluido con ancho máximo centrado en breakpoints grandes (`max-w-7xl`). El layout completo (`authenticated-layout.tsx`) combina `AppSidebar` + `Header` + `Main` dentro de un `SidebarProvider`, con soporte responsive nativo de colapso a "sheet" en móvil.

**Adaptar para CxC:** el patrón Header+Main+Sidebar es directamente reutilizable como esqueleto. Habría que decidir si las vistas de tablas de CxC (facturas, pagos) usan `Main fixed` para scroll interno con header/tabla fija, y si se necesita un `TopNav` con tabs (ej. "Resumen / Vencidas / Al día") como en el dashboard de ejemplo.

---

## 3. Tarjetas KPI

**Referencia:** `src/features/dashboard/index.tsx` (sección "Overview" del Tabs), usando `src/components/ui/card.tsx`.

El patrón es una grilla responsive (`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`) de tarjetas `Card` idénticas en estructura: `CardHeader` con `CardTitle` (label pequeño, ej. "Total Revenue") a la izquierda y un ícono SVG pequeño (muted) a la derecha; `CardContent` con un número grande en bold (`text-2xl font-bold`) como valor principal y una línea secundaria pequeña en gris (`text-xs text-muted-foreground`) con la variación (ej. "+20.1% from last month"). Debajo de las tarjetas hay una fila con dos `Card` más grandes (grid de 7 columnas, 4+3) para un gráfico de resumen (`Overview`, un bar chart) y una lista de "Recent Sales".

**Adaptar para CxC:** mismo patrón de grilla de 4 tarjetas pero con KPIs de cuentas por cobrar: ej. "Cartera Total", "Facturas Vencidas", "Cobrado Este Mes", "DSO (días promedio de cobro)". El ícono y el texto de variación se adaptan a semántica de cobranza (ej. flechas rojas/verdes según si el saldo vencido sube o baja). El gráfico de "Overview" se reemplazaría por un gráfico de aging de cartera o cobranza mensual (esto lo define el agente de datos/lógica, aquí solo el contenedor visual).

---

## 4. Tablas (data-table: filtros, columnas, orden)

**Referencia:** `src/components/data-table/*` (toolbar.tsx, faceted-filter.tsx, column-header.tsx, view-options.tsx, bulk-actions.tsx, index.ts) + ejemplo de uso en `src/features/users/components/users-table.tsx` y `users-columns.tsx`, sobre TanStack Table + `src/components/ui/table.tsx`.

El patrón separa responsabilidades: `DataTableToolbar` arriba de la tabla (buscador de texto libre + filtros facetados + botón de reset + botón de opciones de columnas visibles); `DataTableFacetedFilter` es un popover con checklist tipo combobox (usando `Command`) que muestra badges de conteo por valor (ej. cuántas filas hay por cada estado) y permite selección múltiple; `column-header.tsx` (no leído en detalle pero es el patrón estándar de shadcn) agrega el control de orden ascendente/descendente/ninguno por columna, clicable en el título. Las columnas se definen de forma declarativa como un arreglo de `ColumnDef` (ver `users-columns.tsx`), separando la definición de datos/celda de la tabla en sí. Existe también `DataTableBulkActions` para acciones sobre filas seleccionadas (checkbox de selección).

**Adaptar para CxC:** las columnas cambian completamente — para una tabla de facturas: cliente, número de factura, fecha de emisión, fecha de vencimiento, monto, saldo pendiente, días de atraso, estado (al día/vencida/pagada). Los filtros facetados se reutilizan para "estado" y posiblemente "cliente" o "rango de vencimiento". El patrón de toolbar + filtros + columnas ordenables es directamente trasladable; lo que cambia es 100% el esquema de datos (que define el agente de lógica de CxC).

---

## 5. Paginación

**Referencia:** `src/components/data-table/pagination.tsx`.

Patrón: barra inferior de la tabla con selector de tamaño de página (`Select` con opciones 10/20/30/40/50), indicador "Page X of Y" (que se reubica según el ancho disponible con clases de container query `@2xl/content`, mostrando versión compacta en pantallas chicas), y botones de navegación (primera página, anterior, números de página con elipsis cuando hay muchas, siguiente, última). Usa utilidades de TanStack Table (`table.getPageCount()`, `setPageIndex`, `previousPage/nextPage`) y una función local `getPageNumbers` para calcular qué números mostrar con "...".

**Adaptar para CxC:** reutilizable tal cual como patrón visual; solo se conecta a los datos reales de facturas/clientes paginados (posiblemente paginación server-side si el volumen de CxC es grande, en cuyo caso la lógica interna cambia pero el componente visual de botones/selector se mantiene igual).

---

## 6. Estados de carga, error y vacío (loading / error / empty)

**Referencia:** `src/components/ui/skeleton.tsx`, `src/features/errors/*` (not-found-error.tsx, general-error.tsx, forbidden.tsx, maintenance-error.tsx, unauthorized-error.tsx), patrón "No results." visto en `users-table.tsx`.

- **Carga (loading):** patrón `Skeleton` — un `div` con animación de pulso (`animate-pulse`) y fondo tenue (`bg-accent`), usado como placeholder de forma/tamaño mientras cargan los datos reales (filas de tabla, tarjetas KPI, etc.).
- **Error:** páginas dedicadas de pantalla completa (`h-svh`, contenido centrado vertical y horizontalmente) con título grande, mensaje corto, descripción en gris y 1-2 botones de acción ("Go Back" / "Back to Home"). Hay variantes específicas para 404, error general, mantenimiento y no autorizado/prohibido, todas con la misma estructura visual, solo cambia el texto/código.
- **Vacío (empty):** dentro de la tabla, cuando no hay filas que coincidan con los filtros, se muestra una fila única con texto centrado "No results." dentro del `<Table>` (mismo componente de tabla, sin componente separado).

**Adaptar para CxC:** el patrón `Skeleton` se reutiliza para las tarjetas KPI y filas de tabla mientras cargan facturas/pagos. Las páginas de error se pueden reutilizar casi sin cambios (son genéricas, no dependen del dominio). El estado vacío de tabla se reutiliza igual, pero conviene un mensaje más específico para CxC (ej. "No hay facturas vencidas" o "No se encontraron resultados con estos filtros") en vez del genérico "No results."; esto es contenido/copy, no cambio estructural.

---

## 7. Filtros (cómo se aplican en la UI)

**Referencia:** `src/components/data-table/toolbar.tsx`, `src/components/data-table/faceted-filter.tsx`.

Dos mecanismos combinados: (1) filtro de texto libre en un `Input` que filtra por una columna específica (`searchKey`) o de forma global (`globalFilter`) si no se especifica columna; (2) filtros facetados por columna vía popover con checklist multi-selección (`DataTableFacetedFilter`), que muestra badges con el conteo de valores y permite "Clear filters". Cuando hay algún filtro activo (columna o global), aparece un botón "Reset" que limpia todo. La lista de filtros disponibles se pasa como configuración declarativa (arreglo de `{columnId, title, options}`) al toolbar, no está hardcodeada dentro del componente.

**Adaptar para CxC:** el buscador de texto libre serviría para buscar por nombre de cliente o número de factura. Los filtros facetados se adaptan a los campos relevantes de cobranza: estado de factura (vigente/vencida/pagada/parcial), rango de días de atraso (bucket de aging: 0-30/31-60/61-90/90+), y posiblemente vendedor/cliente/sucursal según cómo esté estructurado el negocio (esto lo confirma el agente de lógica funcional).

---

## Decisiones

- Se documenta el patrón visual con descripción propia (no código copiado) para poder reconstruirlo en el stack que se decida para CxC, manteniendo la separación estricta entre capa visual (este agente) y lógica de datos/negocio (otro agente).
- Se prioriza leer los archivos que ilustran cada patrón pedido (dashboard KPIs, header/main, toolbar/pagination/faceted-filter de data-table, skeleton, páginas de error, sidebar) en lugar de recorrer el repo completo, para mantener foco en el entregable.
- Los nombres de columnas/KPIs de ejemplo usados aquí (Cartera Total, Facturas Vencidas, DSO, etc.) son ilustrativos y genéricos — no representan datos ni terminología confirmada del cliente real de CxC.

## Supuestos

- El stack final del dashboard de CxC usará (o será compatible con) React + Tailwind + un sistema de componentes tipo shadcn/ui, dado que el repo de referencia fue elegido explícitamente para ese propósito. Si el stack real es distinto (ej. otro framework), estos patrones siguen siendo válidos conceptualmente pero requieren traducción de implementación.
- El otro agente (lógica funcional) definirá el esquema de datos real de facturas/clientes/pagos; este documento asume campos típicos de CxC como placeholder.
- No se navegó exhaustivamente cada subcarpeta de `src/features` (ej. `apps`, `chats`, `settings`) por no ser relevante al alcance pedido (KPIs, tabla, paginación, estados, filtros, navegación, layout).

## Riesgos

- shadcn-admin usa TanStack Router (basado en generación de árbol de rutas `routeTree.gen.ts`) y TanStack Table; si el proyecto de CxC usa otro router/tabla, la lógica de conexión (no la visual) deberá reescribirse, aunque el patrón visual descrito aquí siga aplicando.
- Las clases de Tailwind usan utilidades relativamente recientes (ej. `size-8`, unidades arbitrarias como `w-37.5`, container queries `@2xl/content`) que requieren una versión de Tailwind CSS v4+; si el proyecto CxC fija una versión distinta, algunas clases no aplican igual y habría que adaptar.
- Este documento describe el estado del repo de referencia al momento de la consulta (2026-08-10); si el repo cambia de estructura después, el mapeo podría desactualizarse.

## Pendientes

- Definir con el agente de lógica funcional el esquema exacto de columnas para la tabla de facturas/cuentas por cobrar antes de construir `column-header`/`faceted-filter` reales.
- Decidir si el dashboard de CxC necesita autenticación con roles (el patrón `_authenticated` de shadcn-admin lo soporta) o es de acceso único.
- Confirmar el stack final (framework, librería de componentes, librería de tabla) para saber si estos patrones se implementan literalmente o se traducen a otra tecnología.

---

## Archivos y URLs consultadas (GitHub API, solo lectura)

- `repos/satnaing/shadcn-admin/contents/src`
- `repos/satnaing/shadcn-admin/contents/src/components`
- `repos/satnaing/shadcn-admin/contents/src/components/layout`
- `repos/satnaing/shadcn-admin/contents/src/components/data-table`
- `repos/satnaing/shadcn-admin/contents/src/components/ui`
- `repos/satnaing/shadcn-admin/contents/src/routes`
- `repos/satnaing/shadcn-admin/contents/src/features`
- `repos/satnaing/shadcn-admin/contents/src/features/dashboard`
- `repos/satnaing/shadcn-admin/contents/src/features/dashboard/components`
- `repos/satnaing/shadcn-admin/contents/src/features/tasks`
- `repos/satnaing/shadcn-admin/contents/src/features/users`
- `repos/satnaing/shadcn-admin/contents/src/features/users/components`
- `repos/satnaing/shadcn-admin/contents/src/features/users/data`
- `repos/satnaing/shadcn-admin/contents/src/routes/_authenticated`
- `repos/satnaing/shadcn-admin/contents/src/features/errors`
- `repos/satnaing/shadcn-admin/contents/src/components/layout/data`
- Contenido leído: `src/features/dashboard/index.tsx`, `src/components/layout/header.tsx`, `src/components/layout/main.tsx`, `src/components/data-table/toolbar.tsx`, `src/components/data-table/pagination.tsx`, `src/components/data-table/faceted-filter.tsx`, `src/components/ui/skeleton.tsx`, `src/components/layout/app-sidebar.tsx`, `src/features/errors/not-found-error.tsx`, `src/features/users/components/users-table.tsx` (grep de patrón "No results.")
