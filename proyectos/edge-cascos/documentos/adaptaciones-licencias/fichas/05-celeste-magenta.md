# FICHA — EDGEPRO Kratos · Dakota · Variante 05 CELESTE/MAGENTA/BLANCO

**Delta aplicable:** [`DELTA-kratos-dakota.md`](DELTA-kratos-dakota.md)
**Estado global:** 🟡 en proceso — B aprobada con reserva menor, C aprobada con reservas (1 pieza)
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
| C — trasera | [`05-celeste-magenta-vista-c-trasera.md`](../kratos-dakota/05-celeste-magenta-vista-c-trasera.md) | v4 (edición del spoiler, pendiente de correr) | 1 cambio tonal puntual | ilustración → foto real |

## 3. Estado por vista

| Vista | Estado | Reintentos | Defecto abierto | Análisis en el REGISTRO |
|---|---|---|---|---|
| A | ⚪ sin analizar | 0 | — | — |
| B | 🟢 aprobada (reserva menor) | 3 (v1 → v2 → v3 editado) | visor transparente en vez de negro opaco | Entradas 04 y 05 |
| C | 🟡 aprobada con reservas | 2 (v2 → v3) | spoiler celeste en vez de azul petróleo oscuro (colapsó con el tono de la calota) | Entradas 06 y 07 |

**Qué autoriza cada estado:**

| Estado | Ficha técnica / e-commerce | Material de licencia / campaña |
|---|---|---|
| 🟢 aprobada | sí | sí, con el retoque de visor pendiente |
| 🟡 aprobada con reservas | caso por caso, indicar cuál | no, hasta resolver la reserva |
| 🔴 rechazada | no | no |

## 4. Archivo final

**Vista B:** `resultados/05-cel-v3-EDITADO-OK.webp` — aprobado, pendiente retoque del visor.
**Vista C:** el resultado del prompt v3 corrigió 6 de 7 ítems (Entrada 07); pendiente
subir al repo como `resultados/05-celeste-magenta-vista-c-RESULTADO-v3.webp` y aplicar
la edición del spoiler antes de aprobar sin reservas. El archivo
`resultados/05-celeste-magenta-vista-c-RESULTADO.webp` corresponde al intento anterior
con prompt v2, rechazado en la Entrada 06.

## 5. Licencia

**Autorización EDGE verificada:** ⬜ pendiente de confirmar contra los términos de la
licencia Dakota antes de producción (Lección 27).
