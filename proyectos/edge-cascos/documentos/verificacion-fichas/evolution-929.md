# Verificación de ficha técnica — EVOLUTION 929 (marca EDGE) ⚠️ 3 contradicciones + 3 faltantes

Fecha de verificación: 2026-07-29
Fuentes: ficha técnica del Evolution 929 vs. columna "Evolution 929" de la sección EDGE del Excel (hoja FICHAS).

## Veredicto general

- ❌ **Con luz LED:** en la ficha, pero N/A en el Excel → se elimina.
- ❌ **Hebilla micrométrica:** tachada con X roja en la ficha, pero X (SÍ la tiene) en el Excel → va en positivo.
- ❌ **Quick Visor Release ("sistema de liberación rápida del visor"):** en la tarjeta de la ficha, pero N/A en el Excel → se elimina.
- ❌ Faltantes (X en Excel, ausentes en la ficha): **Con Pinlock, ABS, EPS** → agregados.
- ⚠️ **Certificación:** el Excel dice solo "DOT" (sin ECE). La ficha dice "DOT — FNVSS 510" (número inexistente). El banner corregido queda solo "DOT".
- ✅ Coinciden: diseño modular (= Flip Up), anti scratch, anti empañante, ERS, liner, cubre barbilla, cubre nariz, canal para lentes, doble visera, Bluetooth. Exclusión correcta: doble D N/A.

## Reparto en los prompts corregidos

- Tarjeta (8): anti scratch, anti empañante, con Pinlock, ERS, liner, interior EPS, cubre barbilla, cubre nariz. Banner: solo "DOT".
- Grid (6): diseño modular, canal para lentes, hebilla micrométrica (positivo), doble visera, Bluetooth, material ABS.

Prompts: `../prompts-catalogo/evolution-929-prompt-a-homologacion.md` y `evolution-929-prompt-b-grid-iconos.md`.

## Nota adicional — Boston resuelto

La sección EDGE del Excel contiene la columna Boston: la ficha recibida antes como "Boston" verifica bien (Flip Up, LED X, doble visera X, micrométrica X, ABS/EPS X, canal lentes N/A, Pinlock N/A, quick visor N/A) y su certificación es "DOT & ECE". Se actualizó el prompt A del Boston reemplazando el marcador [CERTIFICACIÓN].

## Validación del resultado generado (2026-07-30)

- ✅ Grid B: cumplió todo (LED eliminado, micrométrica en positivo, ABS agregado).
- ❌ Tarjeta A v1: conservó "FNVSS 510" en el banner y fusionó "anti empañante + con Pinlock" en un renglón.
- Excel actualizado: CON PINLOCK pasó a N/A en toda la línea EDGE → Pinlock se elimina de la tarjeta (7 ítems). Prompt A v2 publicado con banner "solo DOT" reforzado.
