# Índice del proyecto — EDGE (automatización de marketing/producto)

Este documento no repite contenido de los otros — solo enlaza y da contexto general del avance. El detalle completo vive en los documentos originales.

📂 **GitHub de este archivo:** https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/edge-cascos/indice-proyecto-edge.md
📦 **Repositorio completo:** https://github.com/juandroeleven-jpg/SAAAS-Marketing

## Documentos del proyecto

- **[Pipeline EDGE — 8 etapas, árboles de decisión, 40 hallazgos](https://claude.ai/code/artifact/b6456d96-242c-472b-8c24-71cc55306aed)** — el mapa completo de investigación de mercado, con Mermaid de decisión por etapa — [GitHub](https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/edge-cascos/pipeline-edge-6-meses.md)
- **[Simulaciones de ejecución](https://claude.ai/code/artifact/8c823f87-aa50-415d-8415-a52b413e6e07)** — prompts, taxonomías y políticas construidas y analizadas en papel, antes de correr contra la API real — [GitHub](https://github.com/juandroeleven-jpg/SAAAS-Marketing/blob/main/proyectos/edge-cascos/simulaciones-ejecucion.md)

---

## Línea de tiempo del proyecto

```mermaid
timeline
    title Ruta hacia el sistema de $5,000/mes
    section Fase 1 — Núcleo técnico (Etapas 0-3)
        Etapa 0 Intake : investigación 7/10 en acto : 0/5 pruebas ejecutadas
        Etapa 1 Ilustración : 2/20 en acto : anchor visual y batch processing cerrados
        Etapa 2 Turntable : 3/20 en acto : Photta descartado, rig identificado
        Etapa 3 Catálogo/ficha : 10/10 decisiones cerradas : ejecución pendiente
    section Fase 2 — Ciclo de confianza (Etapa 4-5)
        Etapa 4 Feedback humano : hallazgo cold-start cierra la ruta crítica
        Etapa 5 Marca/mercado : benchmark de nicho agotado honestamente
    section Fase 3 — Capa comercial (nueva, sin diagramas aún)
        Ventas : sin investigación iniciada
        Pedidos : sin investigación iniciada
        Cotización : herramienta identificada, flujo sin diseñar
    section Fase 4 — Infraestructura y multi-cliente (Etapa 6)
        Etapa 6 Infraestructura : self-hosting pospuesto con evidencia : OmniRoute descartado : token pendiente de rotar
    section Fase 5 — Sistema operativo (Etapa 7)
        Etapa 7 Sistema operativo : Softr validado sobre Retool : resto depende de Etapas 0-6
```

---

## Estado resumido por etapa

| Etapa | Pasos en acto (de 20*) | Bloqueo principal |
|---|---|---|
| 0 — Intake | 7 | Falta comprar/medir casco competidor físico |
| 1 — Ilustración | 2 | Faltan bocetos/imágenes reales de EDGE |
| 2 — Turntable | 3 | Falta ejecutar el montaje físico del rig |
| 3 — Catálogo/ficha | 10 (decisión) | Falta generar la primera ficha real |
| 4 — Feedback humano | 1 (el más crítico) | Falta empezar a registrar decisiones reales |
| 5 — Marca/mercado | 1 | Falta cuenta EDGE en producción |
| 6 — Infraestructura | 2 | Falta rotar el token expuesto (urgente) |
| 7 — Sistema operativo | 1 | Depende de que Etapas 0-6 generen datos |

*Etapa 0 tiene 15 pasos reales (10+5), no 20 — ver documento completo.

## Simulaciones ya construidas (documento de simulaciones)

1. Prompt real de render Nano Banana Pro (Etapa 1) — con 3 riesgos predichos y v2 con mitigaciones
2. Taxonomía de 10 modos de fallo de fidelidad de producto (Etapa 4)
3. Política de mezcla IA/físico en catálogo (Etapa 2)

---

**Última actualización de este índice:** se actualiza manualmente cada vez que se cierra un hallazgo o se agrega una simulación nueva — no es automático.
