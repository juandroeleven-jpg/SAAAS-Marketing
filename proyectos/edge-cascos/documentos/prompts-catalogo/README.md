# Catálogo de prompts — generación de imágenes EDGE (Nano Banana)

[← Volver al índice del proyecto EDGE](../../indice-proyecto-edge.md)

**Qué es esto:** el registro versionado de los prompts de edición/generación de imágenes del pipeline EDGE. Dentro del proceso hay muchísimos prompts distintos que producir — este catálogo los organiza por **familia** (tipo de operación), no por casco puntual. Cada familia tiene una plantilla con bloques fijos y slots variables; cada prompt concreto es una instancia de su familia.

## Familias

| Familia | Operación | Documento | Instancias registradas |
|---|---|---|---|
| 1 — Colorway sobre molde | Cambio de color sobre foto de producto de un molde real (forma intocable) | [familia-1-colorway-molde.md](familia-1-colorway-molde.md) | 23 — Molde A flip-up (3) · Molde B modular spoiler (4) · Molde C modular gunmetal (4) · Molde D jet Cyril liso (4) · Molde E integral tigre liso (4) · Molde F jet SYM liso (4) |
| 2 — Swap de casco en escena | Reemplazo del casco dentro de una foto lifestyle real (escena intocable) | [familia-2-swap-escena.md](familia-2-swap-escena.md) | 1 (moto + rosas → casco spoiler visor dorado) |
| 3 — Goma inferior a negro | Corrección mínima de una sola pieza: la goma perimetral de la base pasa a negro, nada más cambia | [familia-3-goma-negra.md](familia-3-goma-negra.md) | 4 (dual-sport rojo, gris/azul, blanco/beige, verde/marrón) |
| 4 — Escena generada alrededor de un casco real | Generación de una escena lifestyle nueva desde cero con el casco exacto de una foto de producto | [familia-4-escena-generada.md](familia-4-escena-generada.md) | 3 (mujer bajándose de la moto; hombre de smoking con visor opaco; photoshoot de chica con el modular) + 1 fix |
| 5 — Limpieza de foto real de producto | Quitar logos/adhesivos, corregir iluminación a estudio y fondo blanco puro sobre fotos reales | [familia-5-limpieza-producto.md](familia-5-limpieza-producto.md) | 4 (frontal, trasera, lateral, superior del EDGE negro mate) |
| 6 — Despersonalización a molde liso | Vaciar todos los gráficos, logos y stickers de la calota y llevarla a un color liso (negro mate), estructura 100% preservada | [familia-6-despersonalizacion.md](familia-6-despersonalizacion.md) | 10 — jet Cyril (3 vistas) · integral tigre (3 vistas) · jet SYM (4 vistas) |

## Anatomía común de todas las familias

Todos los prompts comparten la misma espina, derivada de las fallas reales documentadas en las Simulaciones 2 y 6a–6d:

1. **Declaración de la operación** — qué ES y qué NO ES la tarea (cambio de color, no rediseño; swap, no imagen nueva).
2. **Autoridad de cada imagen adjunta** — qué imagen manda sobre qué (forma, escena, color) y qué NO se toma de cada una.
3. **Bloque intocable** — lista explícita de todo lo que queda exactamente igual.
4. **Bloque variable** — el cambio pedido, con las piezas identificadas **por ubicación y función, nunca por su color actual**.
5. **Advertencia específica del caso** — el riesgo particular de esa combinación (ej.: chocolate confundible con negro; blanco que se "derrama" sobre la goma).
6. **Limpieza de artefactos** — los archivos fuente suelen ser maquetación de catálogo con basura de layout que no debe aparecer.
7. **PROHIBIDO ABSOLUTO** — prohibiciones que mapean 1 a 1 contra la taxonomía de 10 modos de fallo (Simulación 2) y las fallas vistas en 6d (visor tintado, logos duplicados, texto corrupto).
8. **Verificación final** — checklist de 6 chequeos que el modelo debe repasar antes de entregar.

## Convenciones operativas

- **Orden de las imágenes adjuntas importa:** en la Familia 2 la escena va PRIMERO y el casco de producto SEGUNDO, y el prompt las nombra como IMAGEN 1 / IMAGEN 2.
- **Nombrar los resultados** con `FINAL` o `DESCARTAR` al momento de generarlos (hallazgo repetido de las Simulaciones 6a–6c: intentos casi idénticos sin saber cuál es el vigente).
- **La lista de piezas es específica de cada molde.** Los 6 elementos de la Familia 1 corresponden al molde modular/flip-up; para otro molde (Stellar integral, jet) la lista se rehace mirando su foto. Pendiente: una "ficha de molde" por casco con sus piezas nombradas.

---

**Última actualización:** 2026-07-29 — creado el catálogo con las Familias 1 y 2; agregadas la Familia 3 (goma inferior a negro, 4 instancias del molde dual-sport) la Familia 4 (escena generada alrededor de un casco real) y la Familia 5 (limpieza de foto real de producto, 4 vistas del EDGE negro mate).
