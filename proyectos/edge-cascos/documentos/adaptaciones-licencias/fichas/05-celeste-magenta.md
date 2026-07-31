# FICHA — EDGEPRO Kratos · Dakota · Variante 05 CELESTE/MAGENTA/BLANCO

**Delta aplicable:** [`DELTA-kratos-dakota.md`](DELTA-kratos-dakota.md)
**Estado global:** 🟡 en proceso — B aprobada con reserva menor, C rechazada
**Última actualización:** 2026-07-31

## 1. Mapa de color por pieza

| Pieza | Color declarado | RGB de referencia | Verificado contra la ilustración |
|---|---|---|---|
| Calota alta / zona trasera | azul petróleo oscuro + negro | — | ✅ |
| Spoiler / alerón | azul petróleo oscuro (teal profundo) | ≈ (0,72,96) | ✅ |
| Panel central grande (zona spoiler) | azul cyan medio ("celeste") | ≈ (0,160,215) | ✅ |
| Banda panel lateral bajo | blanco / gris medio (según vista) | ≈ (168,168,168) en B | ⚠️ ver Entrada 04 |
| Acento (galones / flechas / filetes) | rosa fucsia puro / magenta | ≈ (240,25,145) | ✅ |
| Pieza extractora superior | = spoiler (gemelos de color) | ≈ (0,72,96) | ✅ |
| Deflector de la mentonera | gris medio | — | ✅ (vista B) |
| **Logo EDGE** | ⚠️ **contradicción** | — | ❌ prompt pide azul, ilustración muestra negro — corregido en v3 de vista C |
| Visor | negro opaco | ≈ (19,19,19) | ⚠️ tiende a transparente al editar (Entrada 05) |

## 2. Plan por vista

| Vista | Prompt | Versión | Tareas por llamada | Orden del payload |
|---|---|---|---|---|
| A — 3/4 delantero | [`05-celeste-magenta-vista-a-3-4-delantero.md`](../kratos-dakota/05-celeste-magenta-vista-a-3-4-delantero.md) | v1 | — | ilustración → foto real |
| B — lateral | [`05-celeste-magenta-vista-b-lateral.md`](../kratos-dakota/05-celeste-magenta-vista-b-lateral.md) | v3 editado | 5 cambios tonales | ilustración → foto real |
| C — trasera | [`05-celeste-magenta-vista-c-trasera.md`](../kratos-dakota/05-celeste-magenta-vista-c-trasera.md) | v3 (pendiente de correr) | 2 cambios de origen + refuerzo anti-render | ilustración → foto real |

## 3. Estado por vista

| Vista | Estado | Reintentos | Defecto abierto | Análisis en el REGISTRO |
|---|---|---|---|---|
| A | ⚪ sin analizar | 0 | — | — |
| B | 🟢 aprobada (reserva menor) | 3 (v1 → v2 → v3 editado) | visor transparente en vez de negro opaco | Entradas 04 y 05 |
| C | 🔴 rechazada | 1 (v2) | se lee como render/ilustración, no fotografía; 2 contradicciones de origen (color del logo, sello DOT) ya corregidas en v3 | Entrada 06 |

**Qué autoriza cada estado:**

| Estado | Ficha técnica / e-commerce | Material de licencia / campaña |
|---|---|---|
| 🟢 aprobada | sí | sí, con el retoque de visor pendiente |
| 🔴 rechazada | no | no |

## 4. Archivo final

**Vista B:** `resultados/05-cel-v3-EDITADO-OK.webp` — aprobado, pendiente retoque del visor.
**Vista C:** ninguno aprobado todavía. El archivo `resultados/05-celeste-magenta-vista-c-RESULTADO.webp`
corresponde al intento con prompt v2, rechazado en la Entrada 06.

## 5. Licencia

**Autorización EDGE verificada:** ⬜ pendiente de confirmar contra los términos de la
licencia Dakota antes de producción (Lección 27).
