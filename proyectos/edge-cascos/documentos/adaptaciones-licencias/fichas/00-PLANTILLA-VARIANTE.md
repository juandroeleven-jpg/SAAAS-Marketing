# PLANTILLA — Ficha de variante (copiar/pegar)

Una ficha por colorway. Es el **estado actual** de la variante, no su historia:
se sobrescribe. La historia va al REGISTRO.

Los conflictos ilustración-vs-molde **no van acá**: van en el DELTA, que es
compartido por todas las variantes del mismo molde+licencia. Acá se linkea.

Si un campo no aplica, se pone `—`. No se borra.

---

```markdown
# FICHA — <Molde> · <Licencia> · Variante <NN> <NOMBRE DEL COLORWAY>

**Delta aplicable:** [`DELTA-<molde>-<licencia>.md`](DELTA-<molde>-<licencia>.md)
**Estado global:** 🟢 aprobada · 🟡 en proceso · 🔴 bloqueada · ⚪ sin empezar
**Última actualización:** AAAA-MM-DD

## 1. Mapa de color por pieza

Se llena MIRANDO la ilustración, pieza por pieza. Nunca se infiere del nombre de
la variante: "rojo/blanco/negro" no dice qué pieza lleva qué color (Lección 9).
Cada pieza grande lleva su propio renglón — nunca agrupada en una frase con
otras (Lección 13).

| Pieza | Color declarado | RGB de referencia | Verificado contra la ilustración |
|---|---|---|---|
| Calota alta / zona trasera | | | ⬜ |
| Spoiler / alerón | | | ⬜ |
| Paneles de fondo | | | ⬜ |
| Banda del panel lateral bajo | | | ⬜ |
| Acento (galones / flechas / filetes) | | | ⬜ |
| Pieza extractora superior | | | ⬜ |
| Deflector de la mentonera | | | ⬜ |
| Logo EDGE | | | ⬜ |
| Visor | | | ⬜ |

**Relaciones entre piezas** (funcionan mejor que nombrar colores — Lección 8):
- <pieza A> lleva EXACTAMENTE EL MISMO TONO que <pieza B>: son gemelos de color.

**Escala de tonos, de oscuro a claro** (regla de conteo contra el colapso de
contraste — Lección 7). Son N niveles distintos; si dos se parecen, está MAL:
1.
2.
3.

## 2. Plan por vista (nodos PLAN / BUDGET / ORDER)

| Vista | Prompt | Versión | Tareas por llamada | Orden del payload |
|---|---|---|---|---|
| A — 3/4 delantero | [`archivo.md`](../<carpeta>/archivo.md) | v1 | 2-3 | ilustración → foto real |
| B — lateral | | | | |
| C — trasera | | | | |

## 3. Estado por vista (nodos QA / RETRY / DONE)

| Vista | Estado | Reintentos | Defecto abierto | Análisis en el REGISTRO |
|---|---|---|---|---|
| A | ⚪ | 0 | — | — |
| B | ⚪ | 0 | — | — |
| C | ⚪ | 0 | — | — |

**Qué autoriza cada estado:**

| Estado | Ficha técnica / e-commerce | Material de licencia / campaña |
|---|---|---|
| 🟢 aprobada | sí | sí |
| 🟡 en proceso | caso por caso, indicar cuál | no |
| 🔴 bloqueada | no | no |

## 4. Archivo final

**Aprobado:** `resultados/<archivo>` — nombrar FINAL / DESCARTAR al generarlo,
nunca dos intentos casi idénticos sin marcar cuál es el bueno (Lección 26).

**Post-producción pendiente:** sello DOT y microtipografía se componen aparte,
nunca se dibujan (Lección 11).

## 5. Licencia

**Autorización EDGE verificada:** ⬜ sí / ⬜ no — solo se adapta material con
licencia ya autorizada, y cada variante se verifica contra los términos antes de
producción (Lección 27).
```
