# Mis pruebas — Claude Code (VS Code local)

**Qué es este documento:** índice de simulaciones/pruebas que yo (esta sesión de Claude Code, local en VS Code) corro y registro directamente — separado de `simulaciones-ejecucion.md` (el índice original). Cada simulación es ahora su propia página, no un bloque más dentro de este archivo — este documento solo enlaza y da el estado.

**Regla:** toda simulación lleva la marca 🧪 **SIMULACIÓN — no ejecutado contra datos/API real** hasta que se valide con ejecución real, momento en que pasa a ✅ **VALIDADO**.

---

## Simulaciones

| # | Simulación | Etapa/Fase | Estado |
|---|---|---|---|
| 4 | [Reconstrucción 3D del casco con Meshy AI](simulaciones-cc/simulacion-4-meshy-3d.md) | Etapa 2 — Turntable | ✅ Geometría validada · 🧪 Retexturizado pendiente de Blender |
| 5 | [Cotizador tipo carrito](simulaciones-cc/simulacion-5-cotizador.md) | Fase 3 — Ventas/Cotización | 🧪 Lógica y mercado listos, precios ficticios |
| 6 | [Adaptación 2D con Nano Banana (paraguas)](simulaciones-cc/simulacion-6-NANO%20BANANA.md) | Etapa 1 — Ilustración | ✅ Geometría validada en 3 casos reales, 1 más en curso |
| 6a | [↳ Bob Esponja](simulaciones-cc/simulacion-6a-bob-esponja.md) | Etapa 1 | ✅ Geometría validada · 🧪 PDF de referencia no legible |
| 6b | [↳ The Godfather / El Padrino](simulaciones-cc/simulacion-6b-padrino.md) | Etapa 1 | ✅ Geometría validada · ⚠️ Texto cortado por el borde |
| 6c | [↳ Top Gun: Maverick](simulaciones-cc/simulacion-6c-top-gun.md) | Etapa 1 | ✅ Geometría validada · ⚠️ "Logo malo" marcado por el usuario |
| 6d | [↳ Stellar](simulaciones-cc/simulacion-6d-stellar.md) | Etapa 1 | Armado por agente en paralelo |
| 7 | [Catálogo / ficha técnica automatizada](simulaciones-cc/simulacion-7-catalogo.md) | Etapa 3 — Catálogo/ficha | 🧪 Método confirmado, falta primera ficha real |
| 8 | [Pipeline Meshy AI + Blender para mapeo de textura exacto](simulaciones-cc/simulacion-8-meshy-blender.md) | Etapa 2 — Turntable (continuación) | 🧪 Flujo definido, falta conectar cuenta dedicada del usuario |
| 9 | [Sistema Ilustrador Automático (licencia → collage → variantes)](simulaciones-cc/simulacion-9-ilustrador-automatico.md) | Etapa 0.5 — previa a Ilustración | 🧪 Diseño sin ejecutar |
| 10 | [Kratos — verificación ficha vs. excel maestro](simulaciones-cc/simulacion-10-kratos-verificacion.md) | Etapa 3 — Catálogo | ⚠️ 4 de 13 claims + certificación no coinciden con el excel |
| 11 | [Vortex — verificación ficha vs. excel maestro](simulaciones-cc/simulacion-11-vortex-verificacion.md) | Etapa 3 — Catálogo | ✅ 12 de 12 claims coinciden — prompts de plantilla confirmados correctos |
| 12 | [Hero — verificación ficha vs. excel maestro](simulaciones-cc/simulacion-12-hero-verificacion.md) | Etapa 3 — Catálogo | ⚠️ 7 de 13 claims sin dato (bajó de 9), "diseño modular" contradice "open face" confirmado — versión reducida de prompts ya generable, versión completa sigue esperando excel |
| 13 | [Shanghai — verificación ficha vs. excel maestro](simulaciones-cc/simulacion-13-shanghai-verificacion.md) | Etapa 3 — Catálogo | ⚠️ 8 de 13 claims coinciden; 3er caso seguido con rectángulo negro recurrente en el layout |
| 14 | [Stellar — verificación ficha vs. excel maestro](simulaciones-cc/simulacion-14-stellar-verificacion.md) | Etapa 3 — Catálogo | ⚠️ 10 de 13 claims coinciden — mejor resultado del catálogo hasta ahora, prompts completados sin ítems de empaque |
| 15 | [Shift — verificación ficha vs. excel maestro](simulaciones-cc/simulacion-15-shift-verificacion.md) | Etapa 3 — Catálogo | ⚠️ 9 de 13 claims coinciden; "hebilla micrométrica" N/A para este modelo (caso distinto a los demás); 4to caso seguido con rectángulo negro recurrente |
| 16 | [Evolution 929 — verificación ficha vs. excel maestro](simulaciones-cc/simulacion-16-evolution929-verificacion.md) | Etapa 3 — Catálogo | ✅ 11 de 13 claims coinciden — mejor resultado del catálogo; primer caso con "Diseño modular" real (tipo Flip Up); primer caso de la marca EDGE (no EDGEPRO) |
| 26 | [Casco retro/redondo — goma del borde inferior a negro](simulaciones-cc/simulacion-26-casco-retro-goma-negra.md) | Etapa 1 — Ilustración | 🔴 pendientes de generar (2 coloways) — primer molde de casco retro/redondo del catálogo |
| 27 | [Casco blanco glossy con detalles tostados — goma del borde inferior a negro](simulaciones-cc/simulacion-27-casco-blanco-glossy-goma-negra.md) | Etapa 1 — Ilustración | 🔴 pendiente de generar — primer caso donde se aplica la regla general de goma del borde inferior a negro |
| 28 | [Banner de marca "Diseñado para superar tus límites"](simulaciones-cc/simulacion-28-banner-superar-limites.md) | Etapa 1 — Ilustración | 🔴 pendiente de generar — mejora de calidad/nitidez, Tipo B |
| 29 | [Casco Teenage Mutant Ninja Turtles — foto lifestyle photoshoot](simulaciones-cc/simulacion-29-tmnt-lifestyle.md) | Etapa 1 — Ilustración | 🔴 pendiente de generar — primer registro de este caso, línea de licencias de marca |
| 30 | [Livery de carreras EDGE "Temporada 2026" — múltiples colorways](simulaciones-cc/simulacion-30-edge-racing-livery.md) | Etapa 1 — Ilustración | 🔴 pendientes de generar — molde real + colorway azul/blanco/rojo; colorways adicionales en archivos `simulacion-30b/c/d` |

📚 **[Índice maestro de prompts del catálogo (Simulaciones 10-19)](simulaciones-cc/indice-prompts-catalogo.md)** — todos los prompts ya armados en las simulaciones 10 a 19 (incluye las 17, 18 y 19, sin fila propia en esta tabla), organizados por caso con estado y pendientes de confirmación, en un solo lugar.

---

**Última actualización:** 2026-07-20 · registrado por Claude Code (sesión local VS Code), separado del índice de simulaciones original.
