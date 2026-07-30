# Verificación de ficha técnica — SHIFT ⚠️ 2 errores

Fecha de verificación: 2026-07-29
Fuentes: ficha técnica del Shift (tarjeta + grid) vs. columna "Shift" del Excel EDGEPRO.

## Veredicto general

- ❌ **Certificación:** la ficha dice "DOT — FNVSS 510"; el Excel dice DOT & ECE 22.06.
- ❌ **Falta "Interior EPS de alta resistencia":** X en el Excel, ausente en ambas piezas.
- ✅ Todo lo demás coincide: tarjeta (anti scratch, anti empañante, ERS, liner, ABS, cubre barbilla, cubre nariz) y grid (kit mecanismo visor, con Pinlock, canal para lentes, hebilla doble D en positivo, doble visera, Bluetooth), más las exclusiones correctas (micrométrica N/A, quick visor N/A, LED N/A).

## Corrección

Los prompts corregidos ya existen en `../prompts-catalogo/shift-prompt-a-homologacion.md` (8 ítems, incluye EPS, banner "DOT & ECE 22.06") y `shift-prompt-b-grid-iconos.md`. Cubren exactamente los 2 errores encontrados.

## Validación del resultado generado (2026-07-30)

- ✅ Grid B: información correcta y completa — kit visor, Pinlock, canal lentes, doble D (dos anillas, positivo), doble visera, Bluetooth.
- ❌ Tarjeta A v1: 3 errores — banner "FNVSS 510" (va "DOT & ECE 22.06"), ítem corrupto "PREPARADO PARA PINLOCK" (va "PREPARADO PARA ANTI EMPAÑANTE"; Pinlock es del grid), y omitió "CUBRE NARIZ" (X en Excel).
- Prompt A v2 publicado: banner reforzado, un ítem por renglón con texto exacto, PINLOCK prohibido en la tarjeta, CUBRE NARIZ marcado obligatorio.
