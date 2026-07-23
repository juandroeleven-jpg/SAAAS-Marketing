# Simulación 5 — Cotizador tipo carrito (Fase 3 — Ventas/Cotización)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md)

Diseño del flujo y los campos del cotizador donde el cliente arma su pedido de cascos EDGE eligiendo modelo, colorway, talle y cantidad, con precio calculado.

**Nota explícita:** el usuario confirmó que el precio SÍ varía por colorway/talle en la realidad, pero para esta etapa de diseño se usan campos ficticios — ningún precio de esta simulación es un precio real de EDGE, son placeholders para probar la lógica del flujo.

## Roadmap por fases — de imagen estática a 3D

**Decisión de secuencia (22/07/2026): no arrancamos directo en 3D.** El cotizador se construye y se publica primero con imágenes 2D por colorway (rápido, sin dependencia de Meshy/Blender), y el visor 3D se suma como una fase posterior e independiente, nunca como bloqueante del lanzamiento.

```mermaid
flowchart LR
    subgraph F1["Fase 1 — Cotizador 2D (imagen estática)"]
        A1[Lógica de campos y fórmula<br/>ya definida, Pasos 1-4] --> A2[Galería de imagen por colorway<br/>una foto/render por combinación] --> A3[Publicar cotizador funcional<br/>con precios ficticios]
    end
    subgraph F2["Fase 2 — Visor 3D (mejora visual)"]
        B1[GLB de Meshy por modelo<br/>Simulación 4] --> B2[Integrar Three.js/React Three Fiber<br/>sobre el mismo cotizador de Fase 1] --> B3[Rotación libre + cambio de<br/>colorway en vivo sobre el 3D]
    end
    F1 --> F2
```

**Fase 1 — Cotizador 2D (arranca ya, no depende de nada externo):** ✅ construido y publicado en GitHub (`proyectos/edge-cascos/cotizador/`).
1. Lógica de campos y fórmula de precio — ya resuelta más abajo (Pasos 1-3), no requiere cambios.
2. Galería de imagen estática por colorway — **reemplazada por el sistema de capas de Fase 1.5** antes de completarse (ver abajo), no se llegó a usar fotos reales.
3. Publicar el cotizador funcionando de punta a punta con precios ficticios — ✅ hecho, con build verificado.

**Fase 1.5 — Sistema de capas (referencia: Fanatik Bike Builder), decidido 23/07/2026:**
En vez de una imagen estática por combinación modelo+colorway, el casco se compone de capas independientes — shell (color del colorway), visor (fijo), gráfico/decal (solo si el colorway es premium). Esto resuelve dos problemas a la vez: (a) no depende de tener una foto por cada combinación posible, (b) separa el logo/gráfico como pieza propia, evitando el problema de texto/logo mal generado que se documentó en las Simulaciones 6a-6d.

Implementado con SVG propio (`components/CascoCapas.tsx`) como mecanismo funcional inicial — reemplazable por fotos reales en capas (PNG con transparencia) sin cambiar la lógica de composición. Estado: ✅ mecanismo construido y funcionando; pendiente sustituir el SVG placeholder por assets reales cuando estén listos.

**Fase 2 — Visor 3D (solo después de que Fase 1 esté publicada y validada):**
1. Depende de que Meshy (Simulación 4) tenga el GLB del modelo correspondiente listo.
2. Se integra Three.js/React Three Fiber **sobre el mismo cotizador de Fase 1** — no se reconstruye desde cero, el 3D reemplaza la galería de imagen, la lógica de precio no cambia.
3. Mejora final: rotación libre del casco y cambio de colorway en vivo sobre el modelo 3D (nivel helmade.com).

### 🔴 Pendiente de tu parte

```mermaid
flowchart TD
    subgraph P1["No bloquea Fase 1 - se construye con datos ficticios"]
        T1["💲 precio_base_modelo real<br/>(placeholder mientras tanto)"]
        T2["🎨 Colorways premium/recargo<br/>(placeholder mientras tanto)"]
        T3["📦 Umbrales reales de<br/>descuento mayorista (placeholder)"]
        T4["📏 Tabla real de talles<br/>(placeholder genérico S/M/L/XL)"]
        T5["🚚 Envío en el mismo flujo o después<br/>(placeholder)"]
    end
    subgraph P2["Para Fase 2 - 3D (no antes)"]
        T6["🧊 GLB de Meshy listo por<br/>cada modelo a mostrar en 3D"]
    end
```

<details><summary>Pasos de la simulación</summary>

**Paso 1 — Definir los campos de selección del cliente**
- `modelo` (referencia al golden record de Etapa 0 — no se inventa un modelo que no exista en catálogo)
- `colorway` (depende del modelo elegido, limita las opciones disponibles)
- `talle` (S/M/L/XL — genérico por ahora, pendiente de tabla real de talles EDGE)
- `cantidad` (entero ≥1)

**Paso 2 — Definir campos de precio (FICTICIOS, placeholder)**

| Campo | Valor ficticio | Nota |
|---|---|---|
| `precio_base_modelo` | $XX.XX (placeholder) | Varía por modelo — dato real pendiente de EDGE |
| `recargo_colorway_especial` | +$X.XX (placeholder) | Solo aplica a colorways premium/edición limitada — a confirmar cuáles |
| `descuento_por_cantidad` | 0% (1-4u) / X% (5-9u) / X% (10+u) | Umbrales ficticios, pendiente de política real de mayorista |
| `costo_envio` | $X.XX o "a definir por destino" | Pendiente de definir si se cotiza en el mismo flujo o después |

**Paso 3 — Definir la fórmula de cálculo (con placeholders)**
```
precio_unitario = precio_base_modelo + recargo_colorway_especial
subtotal = precio_unitario × cantidad
descuento = subtotal × descuento_por_cantidad
total = subtotal − descuento + costo_envio
```

**Paso 4 — Definir el flujo paso a paso del "carrito"**
1. Cliente elige modelo → sistema muestra colorways disponibles para ese modelo
2. Cliente elige colorway → (a futuro) se actualiza vista 3D/imagen del casco
3. Cliente elige talle y cantidad → sistema calcula precio en vivo
4. Cliente confirma → se genera cotización con desglose visible (no solo el total)

**Paso 5 — Fase 1: galería de imagen estática por colorway**
El cotizador se construye y publica completo con imágenes estáticas por colorway. El 3D de Meshy ([Simulación 4](simulacion-4-meshy-3d.md)) NO es requisito para esta fase — se suma después, en Fase 2, como mejora visual sobre el mismo cotizador ya funcionando.

**Paso 6 — Investigación de mercado: mejores sistemas de cotización para nichos**
Investigado (ver bitácora): helmade.com es la referencia directa más cercana (configurador 3D real de cascos de moto de marcas reales). Opciones evaluadas de más barata a más cara: Three.js/React Three Fiber + GLB de Meshy (gratis, requiere desarrollo propio) → Zakeke (~$68-340/mes, SaaS Shopify) → Threekit (enterprise, 3-6 meses de implementación). Meshy exporta GLB compatible sin conversión con cualquiera de las 3. Decisión: empezar por la ruta low-cost (Three.js + GLB de Meshy).

</details>

<details><summary>Línea de tiempo interna (Mermaid)</summary>

```mermaid
timeline
    title Simulación 5 — Avance interno (roadmap por fases)
    Definición de campos : Paso 1 - Campos de selección (completo) : Paso 2 - Campos de precio ficticios (completo)
    Lógica de cálculo : Paso 3 - Fórmula de precio (completo)
    Diseño de flujo : Paso 4 - Flujo paso a paso del carrito (completo)
    Investigación de mercado : Paso 6 - helmade.com y comparación Zakeke/Threekit/Three.js (completo) : Decisión low-cost confirmada
    Decisión de secuencia : 22 jul 2026 - no se arranca en 3D, primero Fase 1 en 2D
    Fase 1 - Cotizador 2D : Paso 5a - Galeria de imagen por colorway (siguiente hito real) : Publicar con precios ficticios
    Fase 2 - Visor 3D : Paso 5b - Integrar Three.js/R3F sobre GLB de Meshy (a futuro, no bloqueante)
```

</details>

<details><summary>Kanban de progreso (Mermaid)</summary>

```mermaid
kanban
  Diseñado
    Paso5b[Fase 2 - Visor 3D sobre GLB de Meshy]
  Simulado_Analizado
    Paso1[Paso 1 - Campos de selección]
    Paso2[Paso 2 - Campos de precio ficticios]
    Paso3[Paso 3 - Fórmula de cálculo]
    Paso4[Paso 4 - Flujo del carrito]
    Paso6[Paso 6 - Investigación de mercado, decisión low-cost]
  Falta_Ejecutar
    Paso5a[Fase 1 - Galería de imagen por colorway y publicación 2D]
  Ejecutado_Real
```

Checklist de respaldo:
- [x] Paso 1 — Campos de selección (modelo, colorway, talle, cantidad)
- [x] Paso 2 — Campos de precio ficticios definidos
- [x] Paso 3 — Fórmula de cálculo definida
- [x] Paso 4 — Flujo paso a paso del carrito
- [x] Paso 6 — Investigación de mercado completa, decisión low-cost tomada
- [x] Decisión de secuencia — Fase 1 (2D) antes que Fase 2 (3D), 22/07/2026
- [ ] Paso 5a — Fase 1: galería de imagen + cotizador publicado con precios ficticios
- [ ] Paso 5b — Fase 2: integrar Three.js/R3F sobre GLB de Meshy
- [ ] Ejecución real contra base de datos de catálogo (precios reales)

</details>

🧪 **SIMULACIÓN — todos los precios son placeholders ficticios, no representan precios reales de EDGE. La lógica del flujo y la investigación de mercado son la parte validable hoy; los números deben reemplazarse antes de producción. El orden de construcción es Fase 1 (2D) → Fase 2 (3D), nunca al revés.**
