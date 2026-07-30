# Verificación de ficha técnica — CARBEX ⚠️ 2 errores

Fecha de verificación: 2026-07-29
Fuentes: ficha técnica del Carbex (tarjeta + grid) vs. columna "Carbex" del Excel EDGEPRO.

## Veredicto general

- ❌ **Certificación:** la ficha dice "DOT — FNVSS 510"; el Excel dice DOT & ECE 22.06.
- ❌ **Falta "Con Pinlock":** X en el Excel, ausente en ambas piezas. Agregado a la tarjeta (pasa a 8 ítems).
- ✅ Todo lo demás coincide: tarjeta (anti scratch, anti empañante, ERS, liner, sistema de liberación rápida del visor = Quick Visor Release X, cubre barbilla, cubre nariz) y grid (canal para lentes, hebilla doble D, Bluetooth, kit mecanismo visor, ABS, EPS), más las exclusiones correctas (doble visera N/A, micrométrica N/A, LED N/A).

## Reparto final en los prompts corregidos

- Tarjeta (8): anti scratch, anti empañante, CON PINLOCK, ERS, liner, sistema de liberación rápida del visor, cubre barbilla, cubre nariz.
- Grid (6): canal para lentes, hebilla doble D, Bluetooth, kit mecanismo visor, ABS, EPS.

Prompts corregidos: `../prompts-catalogo/carbex-prompt-a-homologacion.md` y `carbex-prompt-b-grid-iconos.md`.

## Validación del resultado generado (2026-07-30)

- ✅ Grid B: cumplió todo — doble D con dos anillas en positivo, kit visor, ABS y EPS con íconos propios, sin micrométrica ni doble visera.
- ❌ Tarjeta A v1: conservó "FNVSS 510" en el banner (va "DOT & ECE 22.06") y fusionó "anti empañante + con Pinlock" en un renglón (Pinlock ES X para Carbex, pero va como renglón propio: 8 renglones, no 7).
- Mismos 2 vicios sistemáticos del generador que en Evolution 929. Prompt A v2 publicado con banner reforzado y regla "un ítem por renglón".
