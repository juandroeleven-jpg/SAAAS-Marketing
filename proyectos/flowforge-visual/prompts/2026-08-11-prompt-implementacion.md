# Prompt de implementación — FlowForge Visual

## Fecha

2026-08-11

## Agente

Tesla

## Solicitud del usuario

Implementar una versión original de FlowForge Visual dentro de `proyectos/flowforge-visual/app`, sin copiar interfaces de terceros, con tablero de proyecto, vista Design Project, lienzo de nodos conectados, nodos Story y Prompts editables, drag-and-drop, placeholders visuales experimentales, capa mock de comandos y documentación Markdown local.

## Decisiones técnicas

- Se eligió implementación estática HTML/CSS/JS autocontenida para no tocar configuración global del repo.
- La app queda lista para servir como sitio estático y adaptable a Vercel.
- Se mantiene toda la funcionalidad dentro de `proyectos/flowforge-visual/`.
- No se creó integración API ni conexión real con ChatGPT.

## Capa mock prevista

Los comandos disponibles simulan intenciones futuras:

- Exportar prompts a Markdown.
- Preparar prompt para agente.
- Simular cola visual.
- Guardar Markdown mock.
- Crear snapshot del flujo.
- Componer prompts para Story o Image/Video Gen.
- Marcar revisión lista.
