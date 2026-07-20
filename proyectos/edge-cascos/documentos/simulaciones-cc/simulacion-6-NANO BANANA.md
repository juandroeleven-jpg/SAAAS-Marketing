# Simulación 6 — Adaptación 2D con Nano Banana (Etapa 1 — Ilustración)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md)

Proyecto paraguas: adaptar varios cascos EDGE ya existentes usando el flujo ya validado de Nano Banana + prompts — no 3D, imágenes 2D listas para vender. Mismo patrón aditivo en todos los casos: casco base (molde real) + capas de colorway/gráficos superpuestas, no un diseño desde cero.

Cada caso tiene su propia subpágina, con su propia auditoría real de molde vs. resultado (no una simulación teórica — se leyeron los archivos reales de cada carpeta):

| Caso | Molde usado | Estado |
|---|---|---|
| [6a — Bob Esponja](simulacion-6a-bob-esponja.md) | Casco abierto/jet blanco | ✅ Geometría validada · 🧪 Fidelidad de diseño sin verificar (PDF no legible) |
| [6b — The Godfather / El Padrino](simulacion-6b-padrino.md) | Casco abierto/jet blanco (mismo molde que Bob Esponja) | ✅ Geometría validada · ⚠️ Hallazgo real: texto cortado por el borde |
| [6c — Top Gun: Maverick](simulacion-6c-top-gun.md) | Casco full-face/modular (molde distinto, sin logo EDGE visible) | ✅ Geometría validada · ⚠️ Hallazgo real: "logo malo" marcado por el usuario |
| [6d — Stellar](simulacion-6d-stellar.md) | Ver subpágina | Armado por agente en paralelo — ver detalle |

**Patrón repetido entre los 3 primeros casos (real, no hipotético):**
- El mismo molde blanco se reutiliza entre Bob Esponja y Padrino — confirma que EDGE trabaja con un catálogo chico de moldes base y varía el colorway/gráfico encima.
- En los 3 casos aparecieron **2 intentos casi idénticos** de la misma vista, sin que el nombre del archivo indique cuál es la versión final — recomendación operativa: nombrar los archivos con "FINAL" o "DESCARTAR" en el momento de generarlos.
- En los 3 casos, el PDF de referencia del arte original **no se pudo abrir** en este entorno (falta `pdftoppm`) — la fidelidad del diseño final contra el arte original queda sin verificar en los 3, no es un problema de un caso puntual.

