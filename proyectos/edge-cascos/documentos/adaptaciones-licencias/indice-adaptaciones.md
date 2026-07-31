# ÍNDICE DE ADAPTACIONES — EDGE

**Punto de entrada único.** Una fila por variante, una columna por vista. El detalle
de cada casco vive en su propia página de estado; acá solo se ve el tablero y lo que
falta.

**Última actualización:** 2026-07-31

---

## LOTE 2 — Molde abatible con spoiler LED · casos temáticos

| # | Caso | Página de estado | Vista con material | Estado |
|---|---|---|---|---|
| 01 | **NYC Graffiti** | ✅ [`variantes/caso-01-nyc-graffiti/ESTADO.md`](variantes/caso-01-nyc-graffiti/ESTADO.md) | B (lateral izq.) | 🔴 **bloqueado en `CMP`** — dos colorways sin autoridad definida |
| 02 | Street Fighter Magenta / Púrpura | ⬜ sin intake | A (frontal) | ⏳ pendiente de intake |

**Lecciones nuevas que aportó el Lote 2** (ver § 10 del caso 01): el delta se hace
**por molde y no se hereda** · existe una tercera categoría además de pieza y pintura,
la **luz emitida** (LED) · la **densidad de texto es un criterio de admisión**, no un
defecto a corregir después.

---

## LOTE 1 — EDGEPRO Kratos · Dakota temporada 2026

**Molde base:** EDGEPRO Kratos (full face con spoiler)

### Tablero

| # | Variante | Página de estado | A (3/4) | B (lateral) | C (trasera) | Licencia |
|---|---|---|---|---|---|---|
| 01 | Azul / Rojo / Blanco | ✅ [`variantes/01-azul-rojo-blanco/ESTADO.md`](variantes/01-azul-rojo-blanco/ESTADO.md) | ❓ | ⚠️ v? — 3 correcciones | 🟡 v3 ejecutada — mejoró mucho (mate, spoiler, sello OK); quedan 2 defectos: extractor superior sin pintar y silueta del panel del spoiler tomada de la ilustración (redondeada) en vez del molde real (chaflanada); prompt v5 con ambos fixes listo, sin ejecutar | ⬜ |
| 02 | Gris / Negro monocromo | ⬜ sin migrar | ❓ | ⚠️ v2b — "mejoró pero sigue lavado" | ❓ | ⬜ |
| 03 | Rojo / Gris (spoiler vino) | ⬜ sin migrar | ❓ | ✅ v3 FINAL — falta 1 edición | ❓ | ⬜ |
| 04 | Rojo / Blanco / Negro | ✅ [`variantes/04-rojo-blanco-negro/ESTADO.md`](variantes/04-rojo-blanco-negro/ESTADO.md) | ❓ | ⚠️ v3 — color desviado + pieza inventada | 🔴 intento 1 con 4 regresiones — prompt 3 listo, sin ejecutar | ⬜ |
| 05 | Celeste / Magenta / Blanco | ✅ [`variantes/05-celeste-magenta/ESTADO.md`](variantes/05-celeste-magenta/ESTADO.md) | ⏳ sin ejecutar | ✅ **v3 aprobado** (reserva: visor) | ❓ resultado sin auditar | ⬜ |

**Leyenda:** ✅ aprobado · ⚠️ aprobado con reservas o rechazado con decisión tomada ·
⏳ prompt escrito, sin ejecutar · ❓ **estado desconocido o sin auditoría registrada** ·
⬜ pendiente

---

### Recuento

| Métrica | Valor |
|---|---|
| Celdas del lote (5 variantes × 3 vistas) | 15 |
| Cerradas con ✅ | **2** de 15 |
| Con reservas o rechazadas, con decisión tomada | 5 |
| **Sin auditoría registrada o estado desconocido** | **7** |
| Sin ejecutar | 1 |
| Aprobadas en la primera pasada | **0** — las 2 aprobadas llegaron en v3 |
| Variantes con licencia verificada | **0** de 5 |

> **Lectura:** ninguna vista salió bien de una. Las dos que cerraron necesitaron tres
> pasadas, y en los dos casos la tercera fue una **edición**, no una regeneración.
> Eso confirma la regla FORMA vs. TONO como el criterio central del pipeline.

---

### Huecos detectados

Esto es lo que el tablero deja ver y que hasta ahora no se veía desde ningún archivo:

1. **7 de 15 celdas no tienen auditoría registrada.** No es que estén mal — es que no
   se sabe. Ninguna vista A del lote tiene resultado documentado, y de las vistas C
   solo hay dos auditadas (variantes 01 y 04).
2. **La Vista C de la 05 tiene resultado generado y ninguna auditoría.** El archivo
   `05-celeste-magenta-vista-c-RESULTADO.webp` existe en `resultados/` y no aparece en
   ningún análisis.
3. **La variante 03 (rojo/gris vino) está aprobada y no figura en el `REGISTRO`.** Su
   análisis vive solo en `analisis/03-rojo-gris-vino-vista-b-lateral.md`. El mejor
   resultado del lote junto con la 05 y no está en el registro que se declara "único
   y acumulativo".
4. **Cuatro análisis de vista B viven fuera del `REGISTRO`** (`analisis/01`, `02`,
   `03`, `04`). La regla "nunca se crea un archivo suelto nuevo" está declarada en el
   `REGISTRO` y ya se rompió cuatro veces.
5. **Ninguna variante tiene la licencia verificada.** Es un lote de adaptaciones
   licenciadas y no hay un solo registro de cotejo contra los términos.
6. **No hay checkpoint real lateral para ninguna variante.** Las 5 vistas B se
   derivaron por rotación. Pedido abierto al cliente.

---

## Estructura

```
adaptaciones-licencias/
├── indice-adaptaciones.md        ← este archivo: tablero y punto de entrada
├── 00-anatomia-adaptacion.md     ← marco metodológico estable
├── REGISTRO-DE-ANALISIS.md       ← registro histórico (se migra a las páginas de variante)
├── variantes/
│   └── 05-celeste-magenta/
│       └── ESTADO.md             ← ✅ piloto: la página independiente de una variante
├── kratos-dakota/                ← prompts, auditorías y resultados (sin migrar)
├── analisis/                     ← análisis de vista B (sin migrar)
└── casos-de-exito/               ← casos de éxito (sin migrar)
```

---

## Cómo se actualiza

Por cada pasada de trabajo, en este orden:

1. **Intake** — si la variante no tiene página, se crea su `ESTADO.md` con las
   secciones 1 a 7: ficha, inventario, delta en las dos direcciones, cruce con
   lecciones, clasificación, bloques de prompt y plan por vista.
2. **Generación** — se ejecuta el prompt de UNA vista. Nunca varias juntas.
3. **Auditoría** — pasada separada de la que generó, con zoom y valores RGB o
   histograma. Se appenda a la bitácora (§ 8) de la variante.
4. **Tablero** — se actualiza la fila de esta página.
5. **Lecciones** — si salió una lección nueva, se registra en la § 10 de la variante
   y sube al archivo de lecciones consolidado.
6. **Commit** — uno por pasada, para que el historial de cada casco quede en git.

**Gate de IP:** ninguna variante pasa a producción con la columna "Licencia" en ⬜.
