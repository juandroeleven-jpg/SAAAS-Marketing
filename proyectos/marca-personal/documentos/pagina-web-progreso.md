# Estado y plan de contenido — codeflow-landing

Esta subpágina profundiza la Simulación A del índice general (`indice-simulaciones.md`): el estado exacto de la landing y los 4 cambios concretos que aplicarían a sus secciones con la información ya disponible (CV, evidencia EDGE, portfolio Copper).

<details>
<summary><strong>▸ Pasos de la simulación</strong></summary>

1. Confirmar qué está construido hoy: `Hero.tsx` y `PlaceholderDashboard.tsx`.
2. Decidir, sección por sección, si cambia o no con la información ya disponible.
3. Crear la sección de Logros (Copper + EDGE) como prueba, no como promesa.
4. Crear la sección de CV con el track record ya verificado.
5. Mantener el mockup del dashboard etiquetado honestamente como vista conceptual, con el reemplazo por captura real marcado como pendiente explícito.
6. Publicar solo cuando las 4 secciones estén cerradas — no antes.

</details>

<details>
<summary><strong>▸ Línea de tiempo interna (Mermaid)</strong></summary>

```mermaid
timeline
    title codeflow-landing - Avance interno
    Construido : Hero.tsx terminado : PlaceholderDashboard.tsx, mockup provisional etiquetado en el propio codigo
    Contenido definido : seccion CV redactada : seccion Logros con Copper y EDGE redactada
    Pendiente : integrar las 2 secciones nuevas al codigo : decidir cuando reemplazar el mockup por captura real
    Publicacion real : aun no publicada
```

</details>

<details>
<summary><strong>▸ Kanban de progreso (Mermaid)</strong></summary>

```mermaid
kanban
  Construido
    w1[Hero.tsx]
    w2[PlaceholderDashboard.tsx, mockup provisional]
  Falta integrar
    w3[Seccion CV: NominaPro, multi-pais 97%, Power BI, cuentas por cobrar 20%]
    w4[Seccion Logros: EDGE 95-98% precision, Copper 15 sistemas entregados]
  Pendiente de decision
    w5[Cuando reemplazar el mockup por captura real]
    w6[Que captura usar primero, EDGE o Copper]
  Publicado
```

</details>

<details>
<summary><strong>▸ Flowchart de decisión por sección (Mermaid)</strong></summary>

```mermaid
flowchart TD
  ROOT["4 secciones de la web"]

  ROOT --> HERO["Seccion Hero"]
  ROOT --> DASH["Seccion Dashboard / mockup"]
  ROOT --> LOGROS["Seccion de logros, nueva"]
  ROOT --> CV["Seccion CV, nueva"]

  HERO --> HERO_D{"Cambia?"}
  HERO_D -->|No cambia| HERO_OK["Ya comunica la propuesta de valor central. Se mantiene tal cual."]

  DASH --> DASH_D{"Cambia?"}
  DASH_D -->|Cambia luego, no ahora| DASH_CHG["Se mantiene el mockup, pero se agrega rotulo sutil 'vista conceptual' y el reemplazo por captura real queda como tarea pendiente explicita, no indefinida."]

  LOGROS --> LOGROS_D{"Cambia?"}
  LOGROS_D -->|Se crea, no existia| LOGROS_CHG["Copper/1HVAC: 15 sistemas de IA ya construidos y entregados. EDGE Helmet: 95-98% precision, 5-10 min por casco, aprobacion real de Jimmy Benzaquen y Jim Garzon. Es la prueba central de la landing."]

  CV --> CV_D{"Cambia?"}
  CV_D -->|Se agrega, no existia| CV_CHG["NominaPro, automatizacion multi-pais 97% ahorro de tiempo, dashboard Power BI, cuentas por cobrar 20% cartera optimizada. Ancla la credibilidad operativa previa."]
```

</details>

<details>
<summary><strong>▸ Análisis según Tomás de Aquino</strong></summary>

```mermaid
flowchart TD
    N1["Capa normal: el esqueleto visual esta listo, el contenido que prueba quien sos todavia no esta integrado"] --> T1["Capa tomista: Hero y mockup son la forma; CV, EDGE y Copper son la materia que falta para que la landing sea acto completo"]
    T1 --> T2["Aquino: la forma sin materia no constituye la cosa completa. Una landing bonita sin prueba real de trabajo es forma vacia"]
    T2 --> B1["Mateo 7:16 - por sus frutos los conocereis. Los 15 sistemas de Copper y el 95-98% de EDGE son los frutos que la pagina debe mostrar, no prometer"]
    B1 --> R1["Resolucion: no publicar hasta integrar el contenido real, aunque el esqueleto visual ya este listo"]
```

</details>

---

## Nueva estructura de la página (resultado profesional)

Con los 4 cambios aplicados, la landing deja de ser un portfolio genérico y se estructura como un caso de venta: **Hero** (propuesta de valor, sin cambios) → **Dashboard** (se mantiene como vista conceptual, etiquetada honestamente, con el reemplazo por captura real marcado como pendiente concreto) → **Logros** (sección nueva y central: 15 sistemas de IA ya construidos y entregados en Copper/1HVAC, más evidencia verificable de EDGE Helmet con precisión medida y aprobación real de clientes) → **CV** (sección nueva que ancla la credibilidad operativa previa: NóminaPro, automatización multi-país, 97% de ahorro de tiempo, Power BI, optimización de cartera).

El resultado es una narrativa de **prueba antes que de promesa**: primero quién sos, luego qué construiste, y recién después la animación conceptual como complemento visual — no como sustituto de evidencia.
