# ESTADO — Variante 05 · Dakota CELESTE / MAGENTA / BLANCO

> **Página independiente de esta variante.** Todo lo que se sabe de este casco vive
> acá: intake del Agente 0, delta contra el molde real, conflictos declarados,
> plan por vista y la bitácora de cada pasada. Es el único archivo que hay que
> abrir para trabajar esta variante, y el único que se actualiza cuando avanza.
>
> Punto de entrada global: [`../../indice-adaptaciones.md`](../../indice-adaptaciones.md)
> · Marco metodológico: [`../../00-anatomia-adaptacion.md`](../../00-anatomia-adaptacion.md)

**Última actualización:** 2026-07-30 · **Estado general:** 🟡 en curso (1 de 3 vistas cerrada)

---

## 1. Ficha

| Campo | Valor |
|---|---|
| Variante | 05 — Dakota Celeste / Magenta / Blanco |
| Licencia | Dakota (diseños temporada 2026) |
| Molde base | EDGEPRO **KRATOS** — full face con spoiler |
| Foto de producto del molde | Kratos negro mate, 3/4 delantero |
| Paleta | Negro mate base · azul petróleo (0,72,96) · azul cyan medio (0,160,215) · fucsia (240,25,145) · gris medio (168,168,168) · blanco |
| Vistas objetivo | A (3/4 delantero) · B (lateral) · C (trasera) |
| **Licencia verificada** | ⬜ **NO VERIFICADA** — pendiente de cotejo contra los términos de la licencia Dakota antes de producción |

> ⚠️ **Gate de IP.** Mientras la fila "Licencia verificada" esté en ⬜, el material
> de esta variante no sale a producción ni a campaña. Regla fijada en
> `00-anatomia-adaptacion.md` § Restricción de IP.

---

## 2. Inventario de insumos

### Ilustraciones de referencia (autoridad de gráfico y de encuadre)

| Vista | Archivo | Estado |
|---|---|---|
| A (3/4) | — | ❌ no registrada |
| B (lateral) | `05-celeste-magenta-vista-b-ILUSTRACION.webp` · `05-cel-ref-ilustracion.webp` | ✅ |
| C (trasera) | `05-celeste-magenta-vista-c-ILUSTRACION.webp` | ✅ |

![referencia lateral](../../kratos-dakota/resultados/05-cel-ref-ilustracion.webp)
*Ilustración de referencia — Vista B lateral*

### Checkpoints reales del molde (autoridad de forma, piezas y fotografía)

| Vista | Checkpoint | Estado |
|---|---|---|
| A (3/4) | foto real del Kratos negro mate | ✅ disponible |
| B (lateral) | — | ❌ **NO EXISTE.** La vista se derivó rotando el mismo objeto y declarándolo explícito en el prompt. **Pedido abierto al cliente: foto real del Kratos en perfil** |
| C (trasera) | foto real del Kratos negro mate (recibida 2026-07-30) | ✅ disponible |

![molde real](../../kratos-dakota/resultados/00-molde-real-lateral.png)
*Molde real — referencia de forma*

---

## 3. Delta ilustración ↔ molde real

**Capa 0 de la metodología: antes de escribir cualquier prompt, el delta se hace en
las DOS direcciones** — lo que la ilustración omite y lo que la ilustración agrega
de más. La lección más cara del proyecto (la pestaña bajo el visor, 4 de 4 laterales
arruinados) salió de no haber hecho la segunda dirección.

### Dirección A — la ilustración OMITE (existe en el casco real, se conserva)

| Elemento | Ilustración | Molde real (autoridad) | Resolución |
|---|---|---|---|
| Placa del pivote del visor | Simplificada, sin carbono | Fibra de carbono + dial rotativo | Manda el real: conserva carbono y dial |
| Ranuras de ventilación traseras bajas | Ausentes | Presentes (listones horizontales) | Se conservan del real |
| Correa con detalle rojo y hebilla | Ausente | Presente | Se conserva del real |
| Tomas de aire superiores y entrada lateral | Simplificadas | Presentes | Se conservan del real |
| Borde inferior de goma perimetral | Sugerido | Presente | Se conserva del real |

### Dirección B — la ilustración AGREGA (no existe en el casco real, NO se dibuja)

| Elemento | Ilustración | Molde real (autoridad) | Resolución |
|---|---|---|---|
| **Pestaña negra rectangular bajo el borde del visor** | **Dibujada**, colgando en la zona del mecanismo | **No existe** | ⛔ **Artefacto del dibujo.** Se declara conflicto explícito y se prohíbe dibujarla |

### Dirección C — conflictos de criterio (decisión de producto)

| Elemento | Ilustración | Molde real | Resolución |
|---|---|---|---|
| Visor | Negro opaco | Transparente | **Manda la ilustración**: negro opaco. Decisión de producto, declarada explícita |
| Medio | Vector plano | Fotografía de estudio | El output es fotográfico |
| Sello DOT / microtipografía | Presentes | — | ⛔ **No se dibujan.** Se componen en post-producción con el PNG oficial |

---

## 4. Cruce con las lecciones

| Pregunta del pipeline | Respuesta para esta variante |
|---|---|
| **R1 — ¿Existe geometría real equivalente en otra ubicación?** | Sí para placa de carbono, ranuras traseras y correa: la ilustración las omite por simplificación de dibujo, no por diseño. Se conservan. |
| **R2 — ¿Es textura/relieve real o pintura/decal plano?** | El carbono de la placa es **textura real** → no se pinta encima. El gráfico Dakota es **pintura** → se deforma con la curvatura. |
| **R3 — ¿El cambio es de estructura o de superficie?** | **100% superficie.** Cero cambios de geometría. |

---

## 5. Clasificación de elementos

| Clasificación | Elementos |
|---|---|
| **Réplica fiel** | Spoiler puntiagudo con tornillo · línea de relieve lateral · tomas de aire · borde de goma · trama geométrica de la calota |
| **Aproximación mejorable → manda el real** | Placa del pivote del visor (recupera carbono + dial) |
| **Faltante en ilustración → se conserva del real** | Ranuras traseras bajas · correa con detalle rojo |
| **Artefacto del dibujo → se prohíbe** | Pestaña negra bajo el visor |
| **Fuera del generador → post-producción** | Sello DOT · microtipografía "FOR EXPLORING RUNNERS" |
| **Imposible por geometría** | — ninguno |

---

## 6. Conflictos declarados → bloques de prompt

Bloques listos para copiar y pegar. **Cada uno nace de una fila del delta de la § 3.**

**6.1 — Gemelos de color** (relación entre piezas, no nombre de color)

    AZUL PETRÓLEO OSCURO (teal profundo, apagado) en el SPOILER COMPLETO y en la
    PIEZA EXTRACTORA SUPERIOR de la calota. Estas DOS piezas llevan EXACTAMENTE
    EL MISMO TONO. El spoiler NO es celeste brillante; la pieza superior NO es negra.

**6.2 — Regla de conteo de tonos** (blindaje contra el colapso de contraste)

    SEPARACIÓN DE TONOS — REGLA DE CONTEO: los tonos declarados arriba son niveles
    SEPARADOS y tienen que poder CONTARSE a simple vista en el resultado final. El
    error típico de este generador es apelotonarlos todos en valores medios y
    devolver un casco LAVADO. Si dos de los tonos declarados terminan pareciéndose
    entre sí, el resultado está MAL. Los oscuros van OSCUROS y los claros van
    CLAROS: no promediar.

**6.3 — Criterios de rechazo por color** (cada color con su prueba de falsación)

    AZUL CYAN MEDIO: saturado, claramente AZUL, SIN nada de verde adentro. Si
    parece turquesa, aguamarina o menta, está MAL.
    ROSA FUCSIA PURO: magenta brillante, del lado del rojo, SIN nada de azul ni de
    violeta adentro. Si tira a morado está MAL.

**6.4 — La pestaña bajo el visor** (dirección B del delta)

    LA PESTAÑA NEGRA DEBAJO DEL VISOR NO EXISTE — ATENCIÓN MÁXIMA:
    En la ILUSTRACIÓN aparece una pequeña PIEZA/PESTAÑA NEGRA RECTANGULAR colgando
    por debajo del borde del visor, en la zona del mecanismo. ESA PIEZA NO EXISTE
    EN EL CASCO REAL. Es un artefacto del dibujo, NO una indicación de diseño.
    Mirá la foto real: ahí no hay nada colgando. NO LA DIBUJES.

**6.5 — El visor** (bloque propio, NO renglón de una lista — ver Lección de la § 9)

    EL VISOR queda TOTALMENTE NEGRO / AHUMADO OSCURO, opaco, como en la
    ilustración: no se ve el interior del casco a través de él. Conserva su MISMA
    forma, curvatura y posición (bajado, cerrado) de la foto real. Puede tener un
    leve reflejo de estudio, pero NO transparencia.

**6.6 — Sellos y microtipografía fuera del generador**

    EL SELLO DOT NO SE DIBUJA: no incluir calcomanías de homologación, sellos
    normativos ni texto legal de certificación. Este generador siempre los escribe
    mal. Se componen después en post-producción con el PNG oficial. Lo mismo vale
    para la MICROTIPOGRAFÍA fina: se dibuja como textura, sin pretender que sea
    legible.

---

## 7. Plan por vista

**Presupuesto de atención:** un prompt por vista, entrega escalonada. Máximo 2-3
tareas por llamada. Las vistas juntas degradan todo.

**Orden del payload (invariable):** imagen 1 = ilustración de la variante en esa
vista (autoridad de gráfico y encuadre) · imagen 2 = foto real del molde (autoridad
de forma, piezas y fotografía). **Declarado dentro del prompt**, no solo en el orden.

| Vista | Prompt | Estado del plan |
|---|---|---|
| A (3/4) | [`../../kratos-dakota/05-celeste-magenta-vista-a-3-4-delantero.md`](../../kratos-dakota/05-celeste-magenta-vista-a-3-4-delantero.md) | ⏳ prompt escrito, sin ejecutar registrado |
| B (lateral) | [`../../kratos-dakota/05-celeste-magenta-vista-b-lateral.md`](../../kratos-dakota/05-celeste-magenta-vista-b-lateral.md) | ✅ ejecutado y cerrado (v3) |
| C (trasera) | [`../../kratos-dakota/05-celeste-magenta-vista-c-trasera.md`](../../kratos-dakota/05-celeste-magenta-vista-c-trasera.md) | ⚠️ ejecutado, **auditoría sin registrar** |

---

## 8. Bitácora

| Vista | Versión | Fecha | Estado | Decisión |
|---|---|---|---|---|
| B lateral | v1 | 2026-07-30 | — | superada por v2 |
| B lateral | v2 | 2026-07-30 | ⚠️ aprobado con reservas — 5 desvíos tonales | **editar** (no regenerar) |
| B lateral | **v3 editado** | 2026-07-30 | ✅ **aprobado** — reserva menor: visor | **aceptar** + retoque del visor |
| C trasera | v1 | 2026-07-30 | ❓ **resultado existe, sin auditoría registrada** | pendiente de auditar |
| A 3/4 | — | — | ⏳ sin ejecutar registrado | — |

---

### Pasada B-v2 — auditoría

Método: muestreo de píxel sobre ilustración vs. resultado. Auditor separado del
generador.

![antes v2](../../kratos-dakota/resultados/05-cel-v2-previo.webp)
*Resultado v2 — forma correcta, tonos desviados*

| # | Zona | Referencia | Resultado | Veredicto |
|---|---|---|---|---|
| 1 | Celeste de flechas/galones | RGB ≈ (0,160,215) azul cyan medio | Turquesa/aqua más claro y verdoso | ❌ |
| 2 | Magenta | RGB ≈ (240,25,145) fucsia puro | Violeta/púrpura | ❌ |
| 3 | Pieza superior (extractor de la calota) | Petróleo del spoiler ≈ (0,72,96) | NEGRA | ❌ |
| 4 | Banda "FOR EXPLORING RUNNERS" | Gris medio ≈ (168,168,168) | BLANCA | ❌ |
| 5 | Deflector / respiradero frontal de la mentonera | Gris medio | NEGRO | ❌ |
| — | Spoiler | Azul petróleo oscuro | Correcto | ✅ |
| — | Pestaña bajo el visor | No debe existir | No aparece | ✅ |
| — | Geometría, piezas, gráfico | — | Correctos | ✅ |

**Decisión: EDITAR.** Los 5 defectos son ajustes tonales globales — la clase de
cambio que el generador SÍ ejecuta bien. Ningún error de geometría justifica
regenerar. *(Regla FORMA vs. TONO.)*

---

### Pasada B-v3 editado — auditoría · CASO DE ÉXITO 01

Una única edición tonal corrigió los 5 desvíos de golpe, sin degradar geometría ni
gráfico. **Es la pasada que define el método del proyecto.**

![después v3](../../kratos-dakota/resultados/05-cel-v3-EDITADO-OK.webp)
*Resultado v3 editado — aprobado*

| # | Cambio pedido | Veredicto | Nota |
|---|---|---|---|
| 1 | Celeste turquesa → azul cyan medio | ✅ | |
| 2 | Magenta violeta → fucsia | ✅ | Queda un resto leve de violeta |
| 3 | Pieza extractora superior negra → petróleo del spoiler | ✅ | Resuelto con la regla de "gemelos de color" (§ 6.1) |
| 4 | Banda "FOR EXPLORING RUNNERS" blanca → gris medio | ✅ | |
| 5 | Deflector frontal negro → gris medio | ✅ | |
| — | Geometría, piezas, encuadre, logo, fondo intactos | ✅ | La edición no derramó |
| — | Ninguna pieza inventada bajo el visor | ✅ | |
| — | Microtipografía legible | ✅ | Primera vez en todo el lote |
| — | Visor negro opaco | ❌ | Salió transparente: RGB ~(242,241,246) vs. (19,19,19) en la referencia |

**Por qué funcionó — el patrón a replicar en toda edición:**

1. **Declarar que la forma ya está bien** y que esto NO es una regeneración. Sin esa
   declaración el modelo redibuja y rompe todo.
2. **Un cambio = un bloque numerado**, nombrando la pieza por su **nombre físico**
   ("la banda que lleva el texto FOR EXPLORING RUNNERS", "el deflector de la
   mentonera"), nunca por ubicación vaga.
3. **Decir qué está mal Y qué debe quedar**, con la operación explícita ("sacale el
   componente verde y bajale la luminosidad").
4. **Criterio de rechazo por cambio**: "si sigue pareciendo agua de pileta, está MAL".
5. **Escala de tonos ordenada de oscuro a claro, con N niveles numerados** + regla de
   conteo (§ 6.2). Es lo que impide el colapso de contraste.
6. **Relaciones entre piezas en vez de nombres de color** (§ 6.1).
7. **Bloque explícito de lo que NO se toca**, nominando cada pieza. Sin esto el
   cambio se derrama (lección del rojo vino).
8. **Checklist final de preguntas** que el modelo debe responder antes de entregar.

**Decisión: ACEPTAR** + retoque puntual del visor.

---

## 9. Pendientes

| # | Pendiente | Origen | Dueño | Estado |
|---|---|---|---|---|
| P1 | Retoque del **visor** a negro opaco — con bloque numerado propio (§ 6.5) o post-producción | Pasada B-v3 | — | 🔴 abierto |
| P2 | **Auditar la Vista C**: el resultado existe (`05-celeste-magenta-vista-c-RESULTADO.webp`) pero no hay auditoría registrada en ningún lado | Inventario | — | 🔴 abierto |
| P3 | **Ejecutar la Vista A** (3/4 delantero) — prompt escrito, sin resultado registrado | Plan § 7 | — | 🔴 abierto |
| P4 | **Pedir al cliente la foto real del Kratos en perfil** — la Vista B se derivó sin checkpoint real | Inventario § 2 | — | 🔴 abierto |
| P5 | **Verificar la licencia** contra sus términos antes de producción | Ficha § 1 | — | 🔴 abierto |
| P6 | **Composición del DOT y la microtipografía** en post-producción con el PNG oficial | § 6.6 | — | 🔴 abierto |
| P7 | Coherencia de serie A ↔ B ↔ C — verificable recién con las 3 vistas cerradas | Plan § 7 | — | ⏳ bloqueado por P2 y P3 |

---

## 10. Lecciones nuevas aportadas por esta variante

Estas suben al archivo de lecciones consolidado; acá queda la traza de dónde salieron.

1. **Al editar, el modelo puede revertir una pieza al estado del molde real.** El
   visor volvió a transparente porque así está en la foto del Kratos negro. La lista
   de "lo que NO se toca" decía "el VISOR sigue negro opaco", pero **como renglón
   suelto dentro de una lista no alcanzó**. → Cada pieza crítica necesita su propio
   bloque numerado.
2. **Cuando la forma ya está bien, hay que resistir la tentación de regenerar.** Un
   desvío de color no es motivo de regeneración: separar siempre el diagnóstico en
   **FORMA vs. TONO** y elegir la herramienta según eso.
3. **Declarar relaciones entre piezas funciona mejor que nombrar colores.** "Son
   gemelos de color" resolvió en una pasada lo que el nombre del tono no resolvía.

---

## Fuentes consolidadas en esta página

Esta página reemplaza como punto de entrada a cuatro archivos que hoy contienen
partes del mismo análisis. Se mantienen en su lugar hasta que confirmes la migración:

- `../../kratos-dakota/05-celeste-magenta-vista-b-lateral.md` — el prompt
- `../../kratos-dakota/AUDITORIA-05-celeste-vista-b-v2.md` — la auditoría de v2
- `../../casos-de-exito/01-celeste-magenta-vista-b.md` — el caso de éxito
- `../../REGISTRO-DE-ANALISIS.md` — Entradas 04 y 05
