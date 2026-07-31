<!--
title: Plan de trabajo — Landing CodeFlow / SaaS de Marketing
-->

# Plan de trabajo: llevar la landing a nivel "levantar inversión"

Hoy la landing (`codeflow-landing`) tiene la estructura funcionando — scroll pineado, contador animado, tres pilares, mini caso de estudio, CTA final — pero corre con **datos placeholder** (`[MARCA]`, LinkedIn genérico, stats de ejemplo) y una capa visual que no refleja ni tu trayectoria ni la de tu socio. Este documento ordena el trabajo en tres vistas: **lluvia de ideas** (de dónde sacamos contenido real), **árbol de decisiones** (qué nivel de producción visual perseguimos y por qué) y **kanban** (quién hace qué, en qué orden).

---

## 1. Lluvia de ideas — de dónde sale el contenido real

Todo lo que hoy es placeholder tiene que salir de algo que ya existe: tu CV, el trabajo de tu socio en Copper, y los 15 productos que ya identificaron como vendibles.

```mermaid
mindmap
  root((Contenido real<br/>para la landing))
    Tu trayectoria
      Ingeniero de Analítica Financiera + IA
      Power BI / DAX avanzado
      n8n, React, Python, SQL
      NóminaPro: auditoría + escenarios de producción
      Multi-país: Panamá / Colombia / Ecuador — 97% ahorro de tiempo
      Cuentas por cobrar: cartera 7 cifras, 3 países
      NASA Conrad Challenge — coach y primer participante LATAM
    Trayectoria de tu socio en Copper
      Orquestador multi-agente tipo "digital workforce"
      Compras/reposición autónoma de inventario
      Pricing dinámico con IA
      Data warehouse multi-país / multi-moneda
      Forecasting de demanda con ML real
      Compliance y seguridad con IA
      SaaS vertical B2B — Copper Hub como producto
    Prueba social / caso de estudio
      Reposición de stock: 3 días → 3 horas
      Mismo equipo, sin contratar a nadie
      Reemplazo de reportes mensuales manuales
    Identidad de marca
      Nombre real de la marca -- no [MARCA]
      LinkedIn real -- tuyo y de tu socio
      Un párrafo "quiénes somos" de 2 líneas
```

**Acción inmediata:** de esta lista, elegir 3–4 proyectos (de los tuyos + los 15 de tu socio) como "casos" concretos para reemplazar el mini-caso genérico de retail, y decidir el nombre de marca definitivo.

---

## 2. Árbol de decisiones — qué nivel de producción visual

Pediste que "se vea súper pro" para pitch a inversionistas, con 3D y mockups vía Higgsfield/Sora. Esa ambición tiene tres caminos con costo y tiempo muy distintos — hay que elegir uno antes de tocar código, porque cambia la arquitectura de los componentes.

```mermaid
flowchart TD
    A["¿Para qué es la landing primero?"] -->|"Pitch a inversionistas"| B["¿Hay video/render 3D ya generado<br/>en Higgsfield/Sora?"]
    A -->|"Captar leads / clientes ya"| Z["Camino rápido:<br/>pulir lo que hay,<br/>datos reales, mejor motion 2D"]

    B -->|"Sí, ya existen assets"| C["Integrar como video de fondo<br/>/ mockup embebido (liviano, rápido)"]
    B -->|"No, hay que generarlos"| D["¿Cuánto tiempo hay antes del pitch?"]

    D -->|"Menos de 1 semana"| E["No alcanza para 3D real:<br/>reforzar motion 2D (parallax,<br/>micro-interacciones) + datos reales"]
    D -->|"1-2 semanas o más"| F["Generar 2-3 renders/mockups clave<br/>en Higgsfield, insertarlos como<br/>video/WebGL en Hero y Pilares"]

    C --> G["Nivel visual: Alto<br/>(video real, no CSS)"]
    F --> G
    E --> H["Nivel visual: Medio-alto<br/>(2D avanzado, sin 3D real)"]
    Z --> I["Nivel visual: Sólido<br/>(consistente, sin promesas 3D)"]

    style G fill:#10B981,color:#0F172A
    style H fill:#2563EB,color:#ffffff
    style I fill:#94a3b8,color:#0F172A
```

**Por qué importa decidir esto primero:** meter "3D animado" sin tener los assets generados es la trampa más común — se termina prometiendo un nivel de producción que el código solo no puede dar. Si el pitch es en menos de una semana, conviene ir por el camino E/H (motion 2D muy pulido + contenido real) en vez de bloquearse esperando renders.

---

## 3. Kanban — reparto de trabajo para el equipo

Asumiendo que va a haber varias personas metiendo mano (vos, tu socio, y quien sume al equipo), así se puede repartir. Cada tarjeta indica si depende de una decisión o contenido de las secciones 1 y 2.

```mermaid
flowchart LR
    subgraph BACKLOG["📋 Backlog"]
        b1["Definir nombre de marca final"]
        b2["Elegir 3-4 casos/proyectos<br/>a mostrar (de sección 1)"]
        b3["Generar mockups 3D en<br/>Higgsfield/Sora (si camino F)"]
        b4["Escribir bio corta 'quiénes somos'"]
    end

    subgraph PROGRESO["🔨 En progreso"]
        p1["Reemplazar [MARCA] y LinkedIn<br/>genérico por datos reales"]
        p2["Ajustar animaciones de<br/>PlaceholderDashboard / Hero"]
    end

    subgraph REVISION["👀 Revisión"]
        r1["Ver landing completa en<br/>mobile + desktop, scroll real"]
    end

    subgraph LISTO["✅ Listo"]
        l1["Estructura base:<br/>Hero, Pilares, Caso, CTA"]
        l2["Scroll pineado 3 etapas"]
        l3["Contador animado + widget flotante"]
    end

    b1 --> p1
    b4 --> p1
    b2 --> r1
    b3 --> p2
    p1 --> r1
    p2 --> r1
```

**Cómo leerlo:** nada en "Revisión" puede cerrarse hasta tener nombre de marca, bio y los casos elegidos — es decir, el trabajo de código (`p1`, `p2`) está bloqueado por decisiones de contenido, no por falta de tiempo de desarrollo. Ese es el cuello de botella real hoy.

---

## Siguiente paso concreto

Con esto ya tenés lo que pediste (kanban, árbol de decisiones, mapa de ideas) en un solo lugar para mostrarle al equipo. Cuando tengas:

1. Nombre de marca definitivo,
2. Los 3-4 casos elegidos, y
3. Definido si vas por el camino de 3D real o motion 2D reforzado,

...te reescribo `FinalCtaFooter.tsx`, `MiniCaseStudy.tsx` y refuerzo las animaciones de `Hero.tsx` / `PlaceholderDashboard.tsx` con esa información real en vez de placeholders.
