# PLANTILLA — Delta de molde + licencia (copiar/pegar)

Un delta por combinación molde×licencia, **no** por variante de color. Los
conflictos entre la ilustración y el molde real no dependen del colorway.

**Regla de orden:** sin delta cerrado no se escribe ningún prompt. Es la regla
general que dejó el REGISTRO — *antes de escribir cualquier prompt de
adaptación, hacer el delta ilustración-vs-molde real y declarar TODOS los
conflictos, en las dos direcciones*.

---

```markdown
# DELTA — Molde <MOLDE> × Licencia <LICENCIA>

**Alcance:** aplica a las N variantes de color. Estos conflictos no dependen del
colorway.
**Estado:** ⬜ abierto / ⬜ cerrado · N acciones pendientes
**Última actualización:** AAAA-MM-DD

## 1. Inventario de insumos (nodos G1 / G2)

### Ilustraciones

| Vista | var 01 | var 02 | ... |
|---|---|---|---|
| A — 3/4 delantero | ⬜ | ⬜ | |
| B — lateral | ⬜ | ⬜ | |
| C — trasera | ⬜ | ⬜ | |

### Checkpoints reales del molde (autoridad de forma)

| Vista | Archivo | Estado |
|---|---|---|
| 3/4 delantero | | |
| Lateral | | |
| Trasera | | |
| Superior | | |

> Un hueco acá es un bloqueo, no un detalle: sin foto real de esa vista, el
> generador no tiene autoridad de forma y va a copiar los errores del dibujo.

## 2. Tabla delta — las dos direcciones

### 2.a — Lo que la ilustración OMITE (existe en el real, se conserva)

| # | Elemento | Qué dice el molde real | Qué hace la ilustración | Clasificación |
|---|---|---|---|---|
| O1 | | | | |

### 2.b — Lo que la ilustración AGREGA DE MÁS (no existe, se prohíbe)

| # | Elemento | Qué dice el molde real | Qué hace la ilustración | Clasificación |
|---|---|---|---|---|
| A1 | | | | |

### 2.c — Conflictos de silueta o encuadre

| # | Elemento | Molde real | Ilustración | Clasificación |
|---|---|---|---|---|
| S1 | | | | |

**Clasificación** de cada elemento (nodo CLASS), según los tres cortes:
- ¿existe geometría real equivalente en otra ubicación? → réplica fiel
- ¿es textura/relieve real o pintura/decal plano? → la textura no se pinta
  encima; la pintura se deforma con la curvatura
- ¿el cambio es de estructura o de diseño de superficie? → solo la estructura
  rota justifica regenerar

Valores: `réplica fiel` · `aproximación mejorable` · `pendiente de ejecución` ·
`imposible por geometría`

## 3. Bloques de prompt derivados

Texto exacto para pegar en los prompts. Si un bloque cambia, cambia **acá
primero** y después se propaga. Nunca se reescribe de memoria.

​```
<bloque>
​```

## 4. Mapa de color por pieza × variante

En matriz, no en páginas separadas: así un error de transcripción salta a la
vista.

| Pieza | var 01 | var 02 | ... |
|---|---|---|---|
| Spoiler | | | |

Toda celda en `—` es deuda: una pieza cuyo color el generador va a inventar.

## 5. Acciones pendientes

| # | Acción | Por qué | Estado |
|---|---|---|---|
| P1 | | | ⬜ |

## 6. Trazabilidad

- Marco metodológico: [`00-anatomia-adaptacion.md`](../00-anatomia-adaptacion.md)
- Análisis de origen: entradas NN-NN del [`REGISTRO-DE-ANALISIS.md`](../REGISTRO-DE-ANALISIS.md)
- Prompts que consumen este delta: [`../<carpeta>/`](../<carpeta>/)
```
