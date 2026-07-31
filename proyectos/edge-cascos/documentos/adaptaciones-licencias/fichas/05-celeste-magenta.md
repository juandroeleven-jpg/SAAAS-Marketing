# FICHA — EDGEPRO Kratos · Dakota · Variante 05 CELESTE/MAGENTA/BLANCO

**Delta aplicable:** [`DELTA-kratos-dakota.md`](DELTA-kratos-dakota.md)
**Estado global:** 🟡 en proceso — B aprobada con reserva menor, C rechazada (confusión de
identificación del spoiler, no un desvío de tono; pendiente regenerar con prompt v5)
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
| C — trasera | [`05-celeste-magenta-vista-c-trasera.md`](../kratos-dakota/05-celeste-magenta-vista-c-trasera.md) | v5 (regeneración, corrige confusión de identificación del spoiler) | geometría / color+gráfico (nombres exclusivos ala vs. fondo) / adaptación / fotografía | ilustración → foto real |

## 3. Estado por vista

| Vista | Estado | Reintentos | Defecto abierto | Análisis en el REGISTRO |
|---|---|---|---|---|
| A | ⚪ sin analizar | 0 | — | — |
| B | 🟢 aprobada (reserva menor) | 3 (v1 → v2 → v3 editado) | visor transparente en vez de negro opaco | Entradas 04 y 05 |
| C | 🔴 rechazada | 3 (v2 → v3 → edición sobre v3, lógica "v4") | **confusión de qué pieza física es el spoiler, no un desvío de tono**: el ala protuberante con las dos rejillas laterales salió celeste y el fondo que la rodea salió petróleo — colores exactamente invertidos respecto de lo declarado | Entradas 06, 07 y 08 |

**Qué autoriza cada estado:**

| Estado | Ficha técnica / e-commerce | Material de licencia / campaña |
|---|---|---|
| 🟢 aprobada | sí | sí, con el retoque de visor pendiente |
| 🟡 aprobada con reservas | caso por caso, indicar cuál | no, hasta resolver la reserva |
| 🔴 rechazada | no | no |

## 4. Archivo final

**Vista B:** `resultados/05-cel-v3-EDITADO-OK.webp` — aprobado, pendiente retoque del visor.
**Vista C:** el resultado del prompt v3 corrigió 6 de 7 ítems (Entrada 07), pero el
intento de edición del spoiler sobre ese resultado (lógica "v4") invirtió los colores
en vez de corregirlos: el ala protuberante quedó celeste y el fondo quedó petróleo
(Entrada 08). Ninguno de los dos resultados (v3, ni la edición sobre v3) está subido al
repo — ambos se vieron en el hilo de trabajo. Pendiente: regenerar con el prompt v5 de
[`05-celeste-magenta-vista-c-trasera.md`](../kratos-dakota/05-celeste-magenta-vista-c-trasera.md)
(o intentar primero el prompt de edición v2 de intercambio de colores del mismo
archivo) y recién ahí subir el resultado final al repo. El archivo
`resultados/05-celeste-magenta-vista-c-RESULTADO.webp` corresponde al intento más
antiguo con prompt v2, rechazado en la Entrada 06.

## 5. Licencia

**Autorización EDGE verificada:** ⬜ pendiente de confirmar contra los términos de la
licencia Dakota antes de producción (Lección 27).
