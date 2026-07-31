# DELTA — Molde EDGEPRO KRATOS × Licencia DAKOTA

**Qué es esto:** los conflictos entre la ilustración Dakota y el molde real
Kratos. Es el nodo `CMP → RULES → CLASS` del pipeline del Agente 0.

**Alcance:** aplica a **las 5 variantes** de color. Estos conflictos no dependen
del colorway. Verificado: los bloques de conflicto de los 15 prompts
(`../kratos-dakota/*.md`) son idénticos palabra por palabra en las 5 variantes.

**Estado:** delta cerrado · 2 acciones pendientes (ver § Acciones pendientes)
**Última actualización:** 2026-07-31

---

## 1. Inventario de insumos (nodos G1 / G2)

### Ilustraciones Dakota

| Vista | 01 azul | 02 gris | 03 rojo/gris | 04 rojo/blanco | 05 celeste |
|---|---|---|---|---|---|
| A — 3/4 delantero | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| B — lateral | ⬜ | ✅ | ⬜ | ⬜ | ✅ |
| C — trasera | ✅ | ⬜ | ⬜ | ✅ | ✅ |

⬜ = existe el prompt pero no hay archivo de ilustración en `resultados/`.
Los prompts se escribieron contra ilustraciones que están en el hilo de trabajo,
no en el repo. **Antes de regenerar cualquier vista hay que subirlas**, o el
delta no se puede reverificar.

### Checkpoints reales del molde (autoridad de forma)

| Vista | Archivo | Estado |
|---|---|---|
| 3/4 delantero | [`00-molde-real.webp`](../kratos-dakota/resultados/00-molde-real.webp) | ✅ |
| Lateral | [`00-kratos-real-lateral.png`](../kratos-dakota/resultados/00-kratos-real-lateral.png) · [`00-molde-real-lateral.png`](../kratos-dakota/resultados/00-molde-real-lateral.png) | ✅ **pero sin usar — ver acción P1** |
| Trasera | [`00-kratos-real-trasera-CHECKPOINT.webp`](../kratos-dakota/resultados/00-kratos-real-trasera-CHECKPOINT.webp) | ✅ |
| Superior | — | ❌ no existe |

---

## 2. Tabla delta — ilustración vs. molde real

Las dos direcciones, como manda la regla general del REGISTRO.

### 2.a — Lo que la ilustración OMITE (existe en el casco real, hay que conservarlo)

| # | Elemento | Qué dice el molde real | Qué hace la ilustración | Clasificación |
|---|---|---|---|---|
| O1 | Placa del pivote del visor | textura de **fibra de carbono** + dial rotativo circular | simplifica la pieza y le saca el carbono | textura real, **no** decal → se conserva |
| O2 | Ranuras de ventilación traseras bajas | listones horizontales en la parte baja trasera | no aparecen | geometría real → se conserva |
| O3 | Correa con detalle rojo y hebilla | visible en la parte baja | falta | geometría real → se conserva |
| O4 | Cuello, lengüetas ERS, costuras (vista C) | presentes | el dibujo está recortado, no los muestra | geometría real → se conserva |

### 2.b — Lo que la ilustración AGREGA DE MÁS (no existe en el casco real, no hay que dibujarlo)

| # | Elemento | Qué dice el molde real | Qué hace la ilustración | Clasificación |
|---|---|---|---|---|
| A1 | Pestaña negra rectangular bajo el borde del visor | **no existe nada colgando ahí** | la dibuja, en la zona del mecanismo | artefacto del dibujo → prohibido |

> **Historia de A1 — vale la pena leerla.** Se creyó defecto aleatorio del
> generador (apareció en 4 de 4 laterales) y se concluyó que no se controlaba
> por prompt. Al comparar la ilustración contra la foto real se vio que **estaba
> dibujada en la ilustración**: el generador la copiaba porque la ilustración
> está declarada como autoridad de gráfico y nadie declaró que era un artefacto.
> Sí se controla. La Lección 20 del REGISTRO quedó desmentida por este hallazgo.

### 2.c — Conflicto de silueta (solo vista C)

| # | Elemento | Molde real | Ilustración | Clasificación |
|---|---|---|---|---|
| S1 | Silueta trasera | ancha, con hombros marcados | angosta (el dibujo está recortado) | manda el molde → conflicto declarado |

---

## 3. Bloques de prompt derivados del delta

Texto exacto ya incorporado a los 15 prompts. **No reescribir de memoria: copiar
de acá.** Si un bloque cambia, cambia acá primero y después se propaga.

### Bloque O1-O4 — piezas que la ilustración omite

```
- La PLACA DEL PIVOTE DEL VISOR con su TEXTURA DE FIBRA DE CARBONO y
  su DIAL ROTATIVO circular. ATENCIÓN: la ilustración simplifica esta
  pieza y le quita el carbono. Eso es una carencia de la ilustración,
  NO una indicación de diseño: la placa conserva su carbono y su dial
  tal como están en la foto real.
- Las RANURAS DE VENTILACIÓN TRASERAS BAJAS (los listones
  horizontales de la parte baja trasera). ATENCIÓN: no aparecen en la
  ilustración; se conservan igual, porque existen en el casco real.
- La CORREA con su detalle ROJO y su hebilla, visible en la parte
  baja. También falta en la ilustración: se conserva.
```

### Bloque A1 — la pestaña que no existe

```
LA PESTAÑA NEGRA DEBAJO DEL VISOR NO EXISTE — ATENCIÓN MÁXIMA:
En la ILUSTRACIÓN aparece una pequeña PIEZA/PESTAÑA NEGRA RECTANGULAR
colgando por debajo del borde del visor, en la zona del mecanismo.
ESA PIEZA NO EXISTE EN EL CASCO REAL. Es un artefacto del dibujo, NO
una indicación de diseño. Mirá la foto real: ahí no hay nada colgando.
NO LA DIBUJES. Esa zona es superficie limpia de la calota, con la
placa de fibra de carbono y su dial, y nada más.
Si en el resultado aparece cualquier pieza, pestaña, lengüeta, aleta o
tapa colgando debajo del visor, el resultado está MAL y hay que
rehacerlo.
```

### Bloque transversal — el sello DOT no se dibuja

```
EL SELLO DOT NO SE DIBUJA:
No incluir calcomanías de homologación, sellos normativos ni texto
legal de certificación. Este generador siempre los escribe mal. Se
componen después en post-producción con el PNG oficial.
Lo mismo vale para la MICROTIPOGRAFÍA fina: se dibuja como textura,
sin pretender que sea legible.
```

---

## 4. Mapa de color por pieza × variante

Lo único de esta página que **sí** es propio de cada colorway. Está acá y no en
las fichas por una razón: puesto en matriz, un error de transcripción salta a la
vista. Puesto en 5 páginas separadas, no.

Fuente: bloque 3 de los prompts de vista B (lateral).

| Pieza | 01 azul | 02 gris | 03 rojo/gris | 04 rojo/blanco | 05 celeste |
|---|---|---|---|---|---|
| Calota alta / zona trasera | azul royal | negro | — | — | — |
| **Spoiler** | azul royal | negro | **rojo intenso** | **rojo intenso** | **azul petróleo oscuro** |
| Paneles de fondo | azul marino oscuro | gris grafito oscuro | — | — | — |
| Banda panel lateral bajo | blanco | gris medio | — | — | gris medio |
| Acento (galones / flechas) | rojo | gris claro casi blanco | rojo intenso | — | celeste ≈ (0,160,215) |
| Pieza extractora superior | — | — | — | — | = spoiler (gemelos) |
| Deflector mentonera | — | — | — | — | gris medio |

Celdas en `—`: el prompt de esa variante no declara esa pieza por separado.
**Eso es deuda, no ausencia de color.** Cada `—` es una pieza cuyo color el
generador va a inventar o inferir del tema de la variante — que es exactamente
como nació el error del spoiler negro de la 04.

### Verificación del spoiler — pendiente cerrado ✅

La Entrada 02 del REGISTRO dejó abierto: *"revisar el color del spoiler
declarado en las variantes 02, 03 y 05 contra sus ilustraciones, por el mismo
tipo de error"*. Resultado:

| Variante | Declarado | Veredicto |
|---|---|---|
| 01 azul | azul royal | ✅ sin error — **pero declarado dentro de una lista agrupada** |
| 02 gris | negro | ✅ sin error — cotejado contra la ilustración: el spoiler es negro. En un diseño monocromo el negro es correcto, no es el error de la 04. **También declarado dentro de una lista agrupada** |
| 03 rojo/gris | rojo intenso | ✅ sin error — renglón propio |
| 04 rojo/blanco | rojo intenso | ✅ corregido tras el fallo |
| 05 celeste | azul petróleo oscuro | ✅ sin error — renglón propio, con regla de gemelos |

**Ninguna variante repite el error de la 04.** Pero queda un riesgo estructural:
en 01 y 02 el spoiler viaja adentro de la frase *"parte alta de la calota, zona
trasera y spoiler"*. Es precisamente el patrón que la Lección 13 declara
peligroso — *cada ítem chico va en su propio chequeo numerado; dentro de una
lista larga se pierde*. En 03, 04 y 05 el spoiler tiene renglón propio.
→ Ver acción P2.

---

## 5. Acciones pendientes

### P1 — El checkpoint lateral real existe y los prompts no lo usan

Los 5 prompts de vista B dicen en su encabezado:

> *"Checkpoint real: NO hay foto lateral del molde. La vista se deriva rotando
> el mismo objeto; pedir al cliente la foto real de perfil."*

y en el bloque de orden de imágenes declaran como imagen 2 la *"foto de producto
del casco Kratos negro mate, **3/4 delantero**"* — o sea, generan el lateral con
la autoridad de forma equivocada.

Pero en `resultados/` hay **dos** archivos de lateral real
([`00-kratos-real-lateral.png`](../kratos-dakota/resultados/00-kratos-real-lateral.png),
[`00-molde-real-lateral.png`](../kratos-dakota/resultados/00-molde-real-lateral.png)),
y el primero es una foto de producto de perfil completa: se ven la placa de
carbono con su dial, la correa con el detalle rojo, las ranuras traseras bajas,
el spoiler entero y el visor transparente.

Esto es relevante porque **A1 (la pestaña inventada) apareció en 4 de 4
laterales** — las mismas vistas generadas sin foto lateral de autoridad.

→ **Acción:** confirmar que ese archivo es la foto real del producto (no una
generación), y si lo es, actualizar el encabezado y el bloque de payload de los
5 prompts de vista B para adjuntarla como imagen 2. Después reverificar si A1
sigue apareciendo.

### P2 — Sacar el spoiler de las listas agrupadas en 01 y 02

Darle renglón propio en los prompts de las variantes 01 y 02, como ya lo tienen
03, 04 y 05. No es un error activo: es blindaje contra la Lección 13.

### P3 — Completar las celdas `—` del mapa de color

Cada celda vacía es una pieza sin color declarado. Se llenan mirando la
ilustración pieza por pieza, nunca infiriendo del nombre de la variante.

### P4 — Subir las ilustraciones faltantes al repo

9 de 15 combinaciones variante×vista no tienen ilustración en `resultados/`.
Sin ellas el delta no se puede reverificar ni auditar.

---

## 6. Trazabilidad

- Marco metodológico: [`00-anatomia-adaptacion.md`](../00-anatomia-adaptacion.md)
- Análisis que originaron este delta: Entradas 01-05 del
  [`REGISTRO-DE-ANALISIS.md`](../REGISTRO-DE-ANALISIS.md)
- Hallazgo de A1: sección "Lección crítica agregada" del REGISTRO
- Prompts que consumen este delta: [`../kratos-dakota/`](../kratos-dakota/)
