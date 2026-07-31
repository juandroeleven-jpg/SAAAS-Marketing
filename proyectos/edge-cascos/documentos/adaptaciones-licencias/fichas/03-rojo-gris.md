# FICHA — EDGEPRO Kratos · Dakota · Variante 03 ROJO/GRIS/NEGRO

**Delta aplicable:** [`DELTA-kratos-dakota.md`](DELTA-kratos-dakota.md)
**Estado global:** 🔴 bloqueada — vista C rechazada dos veces, resto sin analizar
**Última actualización:** 2026-07-31

## 1. Mapa de color por pieza

| Pieza | Color declarado | RGB de referencia | Verificado contra la ilustración |
|---|---|---|---|
| Calota alta / zona trasera | negro (base dominante) | — | ✅ |
| **EL ALA protuberante (el spoiler real)** | rojo intenso | — | ✅ declarado, ❌ el generador lo confundió 2 veces (Entradas 09 y 10) |
| Paneles de fondo | gris grafito | — | ✅ |
| Banda panel lateral bajo | gris claro | — | ✅ |
| Acento (galones / filetes / marcas de texto) | rojo | — | ✅ |
| Logo EDGE | gris oscuro | — | ✅ sin contradicción con la ilustración |
| Visor | — | — | ⬜ sin verificar todavía |

## 2. Plan por vista

| Vista | Prompt | Versión | Tareas por llamada | Orden del payload |
|---|---|---|---|---|
| A — 3/4 delantero | [`03-rojo-gris-vista-a-3-4-delantero.md`](../kratos-dakota/03-rojo-gris-vista-a-3-4-delantero.md) | v1 | — | ilustración → foto real |
| B — lateral | [`03-rojo-gris-vista-b-lateral.md`](../kratos-dakota/03-rojo-gris-vista-b-lateral.md) | editado (Entrada 03 del REGISTRO: rechazado por tonos, editar antes de regenerar) | — | ilustración → foto real |
| C — trasera | [`03-rojo-gris-vista-c-trasera.md`](../kratos-dakota/03-rojo-gris-vista-c-trasera.md) | v4 (desambigua EL ALA / EL FONDO, pendiente de correr) | geometría / color+gráfico (nombres exclusivos) / adaptación / fotografía | ilustración → foto real |

## 3. Estado por vista

| Vista | Estado | Reintentos | Defecto abierto | Análisis en el REGISTRO |
|---|---|---|---|---|
| A | ⚪ sin analizar | 0 | — | — |
| B | ⚠️ sin cerrar | 1 | rechazado por colapso de contraste (tonos), pendiente de reverificar tras edición | Entrada 03 |
| C | 🔴 rechazada | 2 (v3 → v3 de nuevo con prompt viejo → tras v3 corregido) | confusión de identificación del spoiler: el rojo terminó en la zona equivocada, no en EL ALA protuberante | Entradas 09 y 10 |

**Qué autoriza cada estado:**

| Estado | Ficha técnica / e-commerce | Material de licencia / campaña |
|---|---|---|
| 🟢 aprobada | sí | sí |
| ⚠️ sin cerrar | no | no |
| 🔴 rechazada | no | no |

## 4. Archivo final

Ninguna vista tiene un archivo aprobado todavía. Ningún resultado de esta variante
está subido a `resultados/` — todos los intentos vistos hasta ahora se compartieron
directamente en el hilo de trabajo.

## 5. Licencia

**Autorización EDGE verificada:** ⬜ pendiente de confirmar contra los términos de la
licencia Dakota antes de producción (Lección 27).
