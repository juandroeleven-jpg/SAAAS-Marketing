# Codeflow — Pitch revisado

<details>
<summary><strong>Datos que faltan para validar Codeflow</strong></summary>

| Hipótesis | Qué medir | Evidencia aceptable | Umbral inicial |
|---|---|---|---|
| Demanda B2B real | 20–30 entrevistas con compradores | problema, urgencia y presupuesto registrados | 10 problemas recurrentes; 6 urgentes |
| Diagnóstico pagado | propuestas, pagos e informes entregados | cotización aceptada y pago recibido | 3 pagados; 2 avanzan |
| Flujo resoluble | pilotos con línea base | demo, logs y aceptación del usuario | 3 pilotos; 2 cumplen el resultado |
| Valor medible | horas, errores, tiempo o costo antes/después | datos del sistema y validación del cliente | ≥20% de mejora sin perder calidad |
| Entrega con margen | horas, excepciones y costos variables | time tracking, runbook y facturas | ≥70% repetible; margen bruto ≥50% |
| Recurrencia | uso, soporte y renovación | contrato, factura, actividad y backlog | 2 de 3 pilotos renuevan |
| Comunidad útil | onboarding, uso y casos resueltos | cohortes, asistencia y referidos | 70% onboarding; 60% uso mensual |
| Seguridad | secretos, accesos y aprobación humana | rotación, matriz de acceso y logs | cero secretos expuestos |
| Economía | CAC, costos, margen y churn | facturas, horas y cohortes | LTV/CAC ≥3; payback ≤6 meses |

**Orden:** seguridad → entrevistas → diagnósticos → 3–5 pilotos pagados → medición antes/después → continuidad → renovación a 30/90 días.

**Estado:** las fuentes externas validan la brecha entre uso de IA e impacto y muestran modelos de comunidad; todavía no prueban demanda, precio, retención ni capacidad operativa de Codeflow.
</details>

<details>
<summary><strong>Pitch completo</strong></summary>

1. **Contexto:** cerca del 80% usa herramientas de IA; 23% afirma obtener réditos económicos; 6% percibe impacto significativo.
2. **Interés regional:** 14% de visitas globales a soluciones de IA frente a 11% de usuarios globales de Internet; proxy, no adopción empresarial.
3. **Problema:** herramientas y procesos fragmentados pierden contexto, tiempo y control.
4. **Insight:** usar IA no es operar con IA; el valor aparece al integrar, medir, gobernar y mantener.
5. **Solución:** Codeflow ayuda a empresas latinoamericanas a pasar de herramientas aisladas a procesos conectados, medibles y mantenibles.
6. **Evidencia:** 3 horas → 10 minutos, 97% menos tiempo, 20% de cartera optimizada, 15 sistemas y 95–98% de precisión; publicar solo con contexto y autorización.
7. **Cliente:** empresas medianas de Panamá con procesos financieros, operativos o comerciales repetitivos; compradores en dirección, finanzas, operaciones o tecnología.
8. **Oferta:** diagnóstico → sprint conectado → operación continua; la comunidad acompaña la adopción.
9. **Validación:** 3–5 empresas, un proceso por empresa, línea base, piloto pagado, métrica primaria y decisión de renovación.
10. **Cierre:** **Empieza con un proceso crítico. Construye el sistema. Evoluciona con evidencia.** CTA: **Agendar diagnóstico.**
</details>

<details open>
<summary><strong>01 · La cifra de apertura — adopción no es impacto</strong></summary>

> **80%** usa herramientas de IA.
>
> Solo **23%** reporta réditos económicos.
>
> Apenas **6%** percibe impacto significativo.

**Fuente:** [`investigacion-codeflow-datos.md`](../investigacion-codeflow-datos.md), [`evidencia-estudios-oficiales-codeflow.md`](../evidencia-estudios-oficiales-codeflow.md), [BID](https://www.iadb.org/es/blog/analisis-economico/inteligencia-artificial-motor-de-productividad-o-de-desigualdad).

![BID — 80%, 23% y 6%](../codeflow-evidencia/bid-80-23-6.png)

**Tesis:** el mercado no necesita otra herramienta aislada; necesita convertir uso de IA en valor operativo. En los documentos fuente aparece 23%, no 26%.
</details>

<details>
<summary><strong>02 · Latinoamérica ya está dentro de la conversación</strong></summary>

**Texto:** Latinoamérica ya muestra interés por la IA. El reto es transformar ese interés en capacidades, gobierno e integración empresarial.

**Dato visual:** 14% de visitas globales a soluciones de IA frente a 11% de usuarios globales de Internet en ALC.

**Fuente/captura:** [`evidencia-estudios-oficiales-codeflow.md`](../evidencia-estudios-oficiales-codeflow.md), [`codeflow-evidencia/cepal-14-11.png`](../codeflow-evidencia/cepal-14-11.png), [CEPAL](https://www.cepal.org/es/comunicados/america-latina-caribe-acelera-la-adopcion-la-inteligencia-artificial-aunque-desafios).

![CEPAL — 14% de visitas y 11% de usuarios](../codeflow-evidencia/cepal-14-11.png)

**Límite:** es un proxy de interés, no 14% de empresas implementando IA.

**Prompt:** `Pitch deck B2B 16:9, zoom desde Panamá hacia Latinoamérica, mapa oscuro, 14% visitas y 11% usuarios como cifras editoriales, nota proxy de interés, sin logos ni texto inventado.`
</details>

<details>
<summary><strong>03 · El mundo experimenta; el valor exige operación</strong></summary>

**Texto:** El mundo ya experimenta con IA. La ventaja está en convertirla en una operación que funcione.

**Visual:** cascada 80% usa → 23% obtiene réditos → 6% percibe impacto, terminando en “operación integrada”.

**Fuente:** [`analisis-critico-codeflow-marca-personal.md`](../analisis-critico-codeflow-marca-personal.md), [`evidencia-estudios-oficiales-codeflow.md`](../evidencia-estudios-oficiales-codeflow.md), [BID](https://www.iadb.org/es/blog/analisis-economico/inteligencia-artificial-motor-de-productividad-o-de-desigualdad).

![BID — 80%, 23% y 6%](../codeflow-evidencia/bid-80-23-6.png)

**Prompt:** `Globo terráqueo oscuro, cascada tipográfica 80% usa, 23% obtiene réditos, 6% percibe impacto significativo, zona final operación integrada, estilo venture deck, sin cifras adicionales.`
</details>

<details>
<summary><strong>04 · La brecha — de probar a integrar y mantener</strong></summary>

**Texto:** La brecha no está entre sin IA y con IA. Está entre probar una herramienta y operar un sistema.

**Etapas:** conocer → experimentar → implementar → integrar → medir, gobernar y mantener.

**Fuente:** [`analisis-critico-codeflow-marca-personal.md`](../analisis-critico-codeflow-marca-personal.md), [`comparacion-pitch-codeflow.md`](../comparacion-pitch-codeflow.md), [`pitch-flow-ecosistema-ia.md`](../pitch-flow-ecosistema-ia.md).

**Límite:** las etapas son modelo narrativo; no asignar porcentajes sin fuente específica.
</details>

<details>
<summary><strong>05 · Las comunidades venden progreso, no solo contenido</strong></summary>

**Texto:** Contenido atrae. Acompañamiento retiene.

**Evidencia externa:** Angelica Automates, Learn.Community y Justin Welsh muestran modelos de contenido, acceso, eventos, pares, admisión y soporte.

![Angelica Automates — captura de referencia](../investigacion-externa-codeflow/capturas/angelica-ai-membership.png)

![Learn.Community — captura de referencia](../investigacion-externa-codeflow/capturas/learn-community.png)

![Justin Welsh — captura de referencia](../investigacion-externa-codeflow/capturas/justin-welsh.png)

**Fuentes:** [`investigacion-externa-codeflow/investigacion-modelo-comunidad-y-referentes.md`](../investigacion-externa-codeflow/investigacion-modelo-comunidad-y-referentes.md), [Circle — Angelica Automates](https://circle.so/blog/angelica-automates-membership), [Learn.Community](https://circle.so/customer-stories/learn-community), [Justin Welsh](https://www.outseta.com/customers/building-audience-income-with-justin-welsh).

**Capturas:** usar las imágenes existentes en `investigacion-externa-codeflow/capturas/` y etiquetarlas como señales externas, no como validación de Codeflow.

**Prompt:** `Pitch deck Silicon Valley, fondo claro, tres capturas auténticas alineadas a la derecha, frase Contenido atrae. Acompañamiento retiene. a la izquierda, sin métricas inventadas.`
</details>

<details>
<summary><strong>06 · Codeflow convierte la comunidad en una capa operativa</strong></summary>

**Texto:** Codeflow no añade otro grupo: conecta el ciclo completo de adopción.

**Ruta:** diagnosticar → implementar → capacitar → usar → medir → mejorar.

**Producto:** comunidad para aprendizaje y soporte; aplicación para revisión y office hours; operación para monitoreo, mantenimiento y mejoras.

![AI Automation Society — captura de referencia](../investigacion-externa-codeflow/capturas-profundizacion/ai-automation-society.png)

![Circle — customer community](../investigacion-externa-codeflow/capturas-profundizacion/circle-customer-community.png)

**Fuentes:** [`investigacion-externa-codeflow/investigacion-modelo-comunidad-y-referentes.md`](../investigacion-externa-codeflow/investigacion-modelo-comunidad-y-referentes.md), [`investigacion-profunda-modelo-codeflow.md`](../investigacion-externa-codeflow/investigacion-profunda-modelo-codeflow.md), [AI Automation Society](https://aiautomationsociety.ai/).

**Prompt:** `Fondo oscuro, ruta luminosa de seis verbos, una captura real de comunidad a la derecha, estilo SaaS B2B premium, sin dashboards genéricos.`
</details>

<details>
<summary><strong>07 · La hipótesis se valida con un piloto</strong></summary>

**Texto:** El siguiente paso no es construir más contenido: es probar recurrencia.

**Experimento:** 3–5 empresas → 1 proceso prioritario → línea base → piloto pagado → renovación o churn.

**Métricas:** activación, uso, horas ahorradas, errores evitados, retención a 30/90 días y expansión.

**Límite:** los rangos de precio y retención son hipótesis, no tracción validada.

![Skool — precios de referencia](../investigacion-externa-codeflow/capturas/skool-pricing.png)

![Circle — precios de membresía](../investigacion-externa-codeflow/capturas-profundizacion/circle-membership-pricing.png)

**Fuente:** [`investigacion-externa-codeflow/investigacion-modelo-comunidad-y-referentes.md`](../investigacion-externa-codeflow/investigacion-modelo-comunidad-y-referentes.md), [`borrador-modelo-comercial.md`](./borrador-modelo-comercial.md), [Skool pricing](https://www.skool.com/pricing).
</details>

<details>
<summary><strong>08 · La diferencia ocurre después del piloto</strong></summary>

**Texto:** Una automatización resuelve un paso. Codeflow sostiene el sistema.

**Contraste:** aislado: prompt → tarea. Codeflow: datos → reglas → revisión → resultado → aprendizaje.

**Fuente:** [`evidencia-estudios-oficiales-codeflow.md`](../evidencia-estudios-oficiales-codeflow.md), [`comparacion-pitch-codeflow.md`](../comparacion-pitch-codeflow.md).

**Visual:** nodo aislado frente a trayectoria conectada con revisión humana y resultado medible. Usar únicamente capturas existentes del repositorio como textura de interfaz, no como prueba de arquitectura.
</details>

<details>
<summary><strong>09 · El cliente entra por un proceso que ya siente</strong></summary>

**Texto:** Empieza con un proceso crítico; escala cuando la evidencia lo justifica.

**A:** diagnóstico — mapa, riesgos y línea base.

**B:** sprint conectado — un flujo implementado y medido.

**C:** operación continua — monitoreo, gobierno y mejora.

**Fuente:** [`investigacion-profunda-modelo-codeflow.md`](../investigacion-externa-codeflow/investigacion-profunda-modelo-codeflow.md), [`caso-estudio-anonimizado.md`](../caso-estudio-anonimizado.md).

**Límite:** no presentar precios como hechos hasta probar disposición a pagar.
</details>

<details>
<summary><strong>10 · Cierre — la oferta se valida en un flujo</strong></summary>

**Texto:** El siguiente paso es encontrar dónde se pierden horas, contexto o control.

**Preguntas:** ¿Qué flujo cruza áreas? ¿Dónde se copia o espera? ¿Qué métrica demostraría mejora?

**CTA:** **Agendar diagnóstico de un proceso prioritario.**

**Fuente:** [`caso-estudio-anonimizado.md`](../caso-estudio-anonimizado.md), [`pitch-flow-ecosistema-ia.md`](../pitch-flow-ecosistema-ia.md).

**Prompt:** `Diapositiva final B2B 16:9, fondo azul marino, línea cian atravesando tres puntos de control, captura real de interfaz a la derecha, CTA único Agendar diagnóstico, sin datos inventados.`
</details>

<details>
<summary><strong>Anexo visual — capturas originales usadas como evidencia</strong></summary>

### BID y CEPAL

![BID — adopción, réditos e impacto](../codeflow-evidencia/bid-80-23-6.png)

![CEPAL — visitas y usuarios de Internet](../codeflow-evidencia/cepal-14-11.png)

### Referentes de comunidad

![Angelica Automates](../investigacion-externa-codeflow/capturas/angelica-ai-membership.png)

![Learn.Community](../investigacion-externa-codeflow/capturas/learn-community.png)

![Justin Welsh](../investigacion-externa-codeflow/capturas/justin-welsh.png)

![Skool pricing](../investigacion-externa-codeflow/capturas/skool-pricing.png)

![Pat Flynn](../investigacion-externa-codeflow/capturas/spi-pat-flynn.png)

### Comunidades y plataformas

![AI Automation Society](../investigacion-externa-codeflow/capturas-profundizacion/ai-automation-society.png)

![Circle customer community](../investigacion-externa-codeflow/capturas-profundizacion/circle-customer-community.png)

![Circle membership pricing](../investigacion-externa-codeflow/capturas-profundizacion/circle-membership-pricing.png)

### Fuentes de investigación completas

- [`investigacion-modelo-comunidad-y-referentes.md`](../investigacion-externa-codeflow/investigacion-modelo-comunidad-y-referentes.md)
- [`investigacion-profunda-modelo-codeflow.md`](../investigacion-externa-codeflow/investigacion-profunda-modelo-codeflow.md)
- [`evidencia-estudios-oficiales-codeflow.md`](../evidencia-estudios-oficiales-codeflow.md)

Estas capturas son referencias de las fuentes investigadas. Las cifras de terceros deben conservar su atribución; no son tracción propia de Codeflow.
</details>
