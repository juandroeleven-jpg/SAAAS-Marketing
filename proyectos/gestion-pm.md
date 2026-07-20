# Gestión del proyecto — Tablero de PM (SAAAS-Marketing)

**Qué es esto y qué NO es:** el índice general (`indice-general.md`) mapea contenido — qué documento existe y dónde vive. Esta página es distinta: es el tablero de **ejecución**. Agrega en un solo lugar cada pendiente real repartido en los 11 documentos del repo, con fecha estimada y con el filtro más importante: ¿esto depende de una decisión/acción tuya, o lo puede resolver un agente sin esperarte?

📂 **GitHub de este archivo:** https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/gestion-pm.md
📦 **Repositorio completo:** https://github.com/juandroeleven-jpg/SAAAS-Marketing

---

## 1. Diagnóstico crítico — dónde estamos de verdad

Ningún frente tiene todavía un acto que genere ingresos. Lo que existe es investigación de calidad y varios prototipos con geometría/diseño validados — pero cero fichas de catálogo reales, cero cotizaciones reales, cero mensajes de LinkedIn enviados, cero web publicada. Eso es lo que separa hoy de los $5,000/mes: no falta investigar más, falta convertir en acto lo que ya está diseñado.

Puntos débiles concretos, sin suavizar:

- **Calidad de output con fallas confirmadas, no solo pendientes de decisión:** Simulación 6d (Stellar) tiene errores de texto reales ("APOL•GIZE", ">OUR MY FAMILY") y visera mal coloreada — si esto se mostrara a un cliente hoy, fallaría. Simulación 6c (Top Gun) tiene un logo marcado "malo" sin causa identificada todavía.
- **Cotizador y ficha de catálogo:** 100% diseño, 0% ejecución real. El cotizador tiene precios ficticios; nunca se generó una ficha real de punta a punta.
- **LinkedIn:** de 13 a 15 leads reales (mejora real de la otra sesión), con comentarios ya redactados — pero las 15 filas del tracker siguen en cero envíos reales y 15/15 sin la segunda publicación de respaldo.
- **Marca personal:** landing con esqueleto visual pero sin las 2 secciones que prueban el trabajo real — no publicada.
- **Seguridad:** token de Notion expuesto sigue sin rotar, marcado urgente desde hace varias sesiones.
- **Cronograma:** hasta este documento, el único "cronograma" era ordinal (fases en orden), sin fechas — imposible saber si vas atrasado o a tiempo.

---

## 2. Cronograma — próximas 6 semanas desde hoy

**Asunción a corregir:** no tengo la fecha real de inicio de tu contrato de 6 meses, así que este Gantt parte de hoy (2026-07-20) y prioriza por urgencia/dependencia, no por una fecha contractual real. Si me das la fecha de inicio real, reconstruyo esto contra el calendario real del contrato.

```mermaid
gantt
    title Próximas 6 semanas desde 2026-07-20 — por urgencia y dependencia
    dateFormat YYYY-MM-DD
    axisFormat %d-%b

    section Seguridad (ya, cualquier día)
    Rotar token de Notion expuesto                        :crit, d1, 2026-07-20, 1d

    section EDGE — decisiones rápidas (semana 1)
    Confirmar traseras/logos ambiguos 6a-6d               :a1, 2026-07-20, 3d
    Resolver ambigüedad Stellar vs Boston                 :a2, 2026-07-20, 2d
    Cancelar o mantener Meshy Pro                          :a3, 2026-07-20, 1d

    section EDGE — primer acto real (semana 1-2)
    Pasar precios reales al cotizador                     :b1, after a3, 5d
    Generar primera ficha técnica real                    :b2, after a3, 4d
    Conectar cuenta Claude Code Pro para Blender           :b3, 2026-07-22, 3d

    section Marca personal — primer acto real (semana 1-2)
    Integrar secciones CV y Logros a la landing            :c1, 2026-07-20, 4d
    Publicar codeflow-landing                              :c2, after c1, 1d
    Primer día real de envíos LinkedIn                     :c3, 2026-07-21, 1d

    click d1 href "https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/edge-cascos/indice-proyecto-edge.md" "Ver bloqueo de Etapa 6 — Infraestructura"
    click a1 href "https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/edge-cascos/documentos/simulaciones-cc/simulacion-6-NANO%20BANANA.md" "Ver índice de casos 6a-6d"
    click a2 href "https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/edge-cascos/documentos/simulaciones-cc/simulacion-6d-stellar.md" "Ver Simulación 6d — Stellar"
    click a3 href "https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/edge-cascos/documentos/simulaciones-cc/simulacion-4-meshy-3d.md" "Ver Simulación 4 — Meshy 3D"
    click b1 href "https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/edge-cascos/documentos/simulaciones-cc/simulacion-5-cotizador.md" "Ver Simulación 5 — Cotizador"
    click b2 href "https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/edge-cascos/documentos/simulaciones-cc/simulacion-7-catalogo.md" "Ver Simulación 7 — Catálogo"
    click b3 href "https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/edge-cascos/documentos/simulaciones-cc/simulacion-8-meshy-blender.md" "Ver Simulación 8 — Meshy+Blender"
    click c1 href "https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/marca-personal/documentos/pagina-web-progreso.md" "Ver progreso de la landing"
    click c2 href "https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/marca-personal/documentos/pagina-web-progreso.md" "Ver progreso de la landing"
    click c3 href "https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/marca-personal/documentos/linkedin-networking.md" "Ver tracker de LinkedIn"
```

Cada barra del Gantt es clickeable y lleva directo al documento fuente de esa tarea (el mismo documento donde se armó y se dejó el trabajo en curso) — no a otro chat.

---

## 3. Checklist maestro de pendientes

### 🟠 Depende de tu decisión/acción — nadie más lo resuelve

| # | Pendiente | Fuente |
|---|---|---|
| 1 | Rotar el token de Notion expuesto (urgente) | seguridad, arrastrado desde hace varias sesiones |
| 2 | Cancelar suscripción Meshy Pro antes del próximo cobro ($20.80) o decidir seguir | Simulación 4 |
| 3 | Decidir si vale la pena recortar la base/soporte del modelo 3D | Simulación 4 |
| 4 | Pasar precio_base_modelo real por cada modelo EDGE | Simulación 5 |
| 5 | Confirmar qué colorways son premium/edición limitada (recargo) | Simulación 5 |
| 6 | Definir umbrales reales de descuento por cantidad mayorista | Simulación 5 |
| 7 | Pasar tabla real de talles disponibles por modelo | Simulación 5 |
| 8 | Definir si el envío se cotiza en el mismo flujo o después | Simulación 5 |
| 9 | Confirmar cuál trasera de Bob Esponja es la buena (intento-perfecto vs. fallida) | Simulación 6a |
| 10 | Confirmar cuál intento 3/4 de Padrino es el definitivo | Simulación 6b |
| 11 | Confirmar qué está mal en el logo de Top Gun (`maver-mal-logo.jpg`) | Simulación 6c |
| 12 | Confirmar si las fotos negra/azul de Top Gun son molde físico real de EDGE o referencia de proveedor | Simulación 6c |
| 13 | Resolver si "Stellar" y "Boston" son el mismo molde o dos distintos | Simulación 6d |
| 14 | Confirmar si `download.jpg` (con errores de texto) es el intento vigente o hay que regenerar | Simulación 6d |
| 15 | Contar un caso real donde Canva o full-IA fallaron/tardaron de más | Simulación 7 |
| 16 | Elegir 1 modelo EDGE para generar la primera ficha real | Simulación 7 |
| 17 | Conectar tu cuenta Claude Code Pro ($100/mes) al repositorio | Simulación 8 |
| 18 | Confirmar si Blender está instalado en la máquina que usará esa cuenta | Simulación 8 |
| 19 | Decidir entre Substance 3D Painter/RizomUV o solo Blender nativo | Simulación 8 |
| 20 | Aprobar la corrección de la cita Belanche/Ibáñez-Sánchez (Etapa 2, Hallazgo 4) | pipeline-edge-6-meses.md, pendiente desde antes |
| 21 | Primer día real de envíos LinkedIn (Motor 1 y 2) — nadie más puede enviarlos por ti | linkedin-networking.md |
| 22 | Publicar la landing una vez integradas las secciones CV/Logros | pagina-web-progreso.md |

### 🔵 Delegable a un agente — no necesita que decidas vos primero

| # | Pendiente | Fuente |
|---|---|---|
| 1 | Abrir y renderizar los 3 PDF de referencia no legibles en este entorno (falta `pdftoppm`) y comparar contra los resultados generados | Simulaciones 6a, 6b, 6c |
| 2 | Integrar el código de las secciones CV y Logros en la landing, con el contenido ya redactado | pagina-web-progreso.md |

---

## 4. Prompts listos para delegar

Corrección sobre la versión anterior: estos prompts no son tutoriales genéricos para un chat nuevo sin contexto — son prompts de **continuación**, para pegar en la misma sesión de Claude Code local (VS Code) que ya armó cada documento y ya tiene todo el contexto (las carpetas físicas, las fotos, el repo). Por eso son cortos: solo señalan qué archivo retomar y qué punto concreto falta cerrar, sin repetirle a esa sesión lo que ya sabe.

<details>
<summary><strong>Prompt 1 — Continuar la auditoría de PDF en Simulaciones 6a/6b/6c</strong></summary>

```
Retomá simulacion-6a-bob-esponja.md, simulacion-6b-padrino.md y simulacion-6c-top-gun.md (proyectos/edge-cascos/documentos/simulaciones-cc/). En los 3 quedó pendiente el mismo bloqueo: el PDF de referencia no se pudo renderizar por falta de pdftoppm/poppler-utils en ese entorno remoto. Vos sí tenés acceso a los archivos físicos originales.

Instalá poppler-utils si falta, renderizá los 3 PDF (BOB ESPONJA - HERO.pdf, GODFATHER - HERO.ai.pdf, TOP GUN - EVOLUTION.pdf) y cerrá los 3 puntos que cada documento dejó abiertos:
- 6a: ¿cuál trasera es la buena, intento-perfecto o fallida?
- 6b: ¿cuál de los 2 intentos 3/4 es el definitivo?
- 6c: ¿qué está mal exactamente en maver-mal-logo.jpg?

Agregá la respuesta directo en cada archivo (sección nueva "## Auditoría contra PDF original") y cerrá esos 3 checkboxes en el checklist de cada uno.
```

</details>

<details>
<summary><strong>Prompt 2 — Continuar la integración de la landing (codeflow-landing)</strong></summary>

```
Retomá pagina-web-progreso.md (proyectos/marca-personal/documentos/). Ya quedó redactado el contenido de las secciones Logros y CV — falta integrarlas al código real de codeflow-landing, en el orden Hero → Dashboard → Logros → CV, sin tocar Hero.tsx ni el rótulo de PlaceholderDashboard.tsx.

Cuando esté, actualizá el kanban del documento y decime si ya queda lista para publicar o si falta algo más.
```

</details>

---

## 5. Revisión semanal

| Semana (desde 2026-07-20) | Qué se cerró de verdad (acto, no investigación) | Bloqueo |
|---|---|---|
| 1 | — | — |
| 2 | — | — |
| 3 | — | — |
| 4 | — | — |
| 5 | — | — |
| 6 | — | — |

---

**Última actualización:** 2026-07-20 · primera versión de este tablero, construida a pedido explícito de agregar todos los pendientes del repo en un solo lugar y ser crítico con el estado real de avance.
