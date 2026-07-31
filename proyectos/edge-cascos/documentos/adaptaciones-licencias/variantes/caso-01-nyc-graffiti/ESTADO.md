# ESTADO — CASO 01 · NYC GRAFFITI · Molde abatible con spoiler LED

> Página independiente de esta adaptación. Intake del Agente 0, delta contra el
> molde real, clasificación, plan y los dos prompts. **Toda la evidencia visual va
> embebida acá**, no enlazada: se lee el análisis y se ve la prueba sin abrir otra
> pestaña.
>
> Índice del proyecto: [`../../indice-adaptaciones.md`](../../indice-adaptaciones.md)
> · Marco: [`../../00-anatomia-adaptacion.md`](../../00-anatomia-adaptacion.md)

**Fecha de intake:** 2026-07-31 · **Estado:** 🔴 **BLOQUEADO en el paso `CMP`** — no
pasa a `PLAN` hasta resolver B1 (dos colorways sin autoridad definida).

---

## 1. Ficha

| Campo | Valor |
|---|---|
| Caso | 01 — NYC Graffiti |
| Licencia / tema | Diseño temático NYC (Big Apple / Bronx / Brooklyn / Estatua de la Libertad) |
| Molde base | Casco **ABATIBLE / MODULAR** con spoiler trasero y **luces LED rojas** integradas. *(Nombre comercial a confirmar)* |
| Foto del molde | Negro mate, lateral izquierdo, fondo blanco de estudio |
| Vista con material | **B — lateral izquierdo** (única con ilustración y checkpoint real) |
| **Licencia verificada** | ⬜ **NO** — hay marcas de terceros implicadas (ver § 9, P1) |

---

## 2. Evidencia

### 2.1 — Molde real · autoridad de forma, piezas y fotografía

![molde real lateral](evidencia/00-molde-real-lateral.png)
*`00-molde-real-lateral.png` — Casco abatible negro mate, lateral izquierdo*

### 2.2 — Ilustración A · gris / naranja *(propuesta como autoridad)*

![ilustracion gris naranja](evidencia/01-nyc-ILUSTRACION-lateral-GRIS-NARANJA.png)
*`01-nyc-ILUSTRACION-lateral-GRIS-NARANJA.png` — base gris medio, acento naranja*

### 2.3 — Ilustración B · blanco / rojo *(mismo arte, otro colorway)*

![ilustracion blanco rojo](evidencia/02-nyc-ILUSTRACION-lateral-BLANCO-ROJO.png)
*`02-nyc-ILUSTRACION-lateral-BLANCO-ROJO.png` — base blanca, acento rojo*

### 2.4 — Screenshot del chat de origen

![screenshot chat](evidencia/03-screenshot-chat-caso-02-street-fighter.png)
*`03-screenshot-chat-caso-02-street-fighter.png` — Caso 02 (Street Fighter magenta/púrpura, vista frontal), pendiente de intake*

> ⚠️ **Los cuatro archivos están referenciados pero todavía no subidos.** Ver
> [`evidencia/README.md`](evidencia/README.md) con los nombres exactos.

---

## 3. Delta ilustración ↔ molde real

Elemento por elemento, **en las dos direcciones**.

### Dirección A — la ilustración OMITE (existe en el real → se conserva)

| # | Elemento | Ilustración | Molde real (autoridad) | Resolución |
|---|---|---|---|---|
| A1 | **Dos luces LED rojas del spoiler** | ❌ ausentes | ✅ presentes, encendidas | **Se conservan.** Es una prestación del producto, no un adorno |
| A2 | **Línea de apertura de la mentonera** | ❌ dibujado como integral | ✅ **el casco es ABATIBLE/MODULAR** | **Se conserva.** Es geometría, manda el real |
| A3 | Dial rotativo + tornillo central del mecanismo del visor | Simplificado a una forma negra | Dial completo con tornillo y textura | Manda el real |
| A4 | Borde inferior de goma con textura de puntos | Trazo negro liso | Goma texturada perimetral | Manda el real |
| A5 | Deflector lateral en flecha (pieza negra brillante) | Tapado por el graffiti | Pieza física con brillo propio | Manda el real: es pieza, no dibujo |
| A6 | Toma de aire superior de la calota | No se distingue | Presente | Manda el real |
| A7 | **Contraste de acabado** mate (calota) vs. brillante (spoiler, deflector, mecanismo) | Todo plano | Contraste marcado | Manda el real |

### Dirección B — la ilustración AGREGA (no existe en el real → no se dibuja)

| # | Elemento | Veredicto |
|---|---|---|
| B1 | — | **Ninguno detectado en esta vista.** |

> 🟢 **Atención — no aplicar la lección de la pestaña por inercia.** La pieza
> rectangular con ranuras que aparece bajo el mecanismo del visor en la ilustración
> **SÍ EXISTE en este molde**: es la palanca del visor solar interno, visible en la
> foto real. En el lote Dakota/Kratos esa pieza era un artefacto del dibujo y se
> prohibía; **acá es real y se conserva.** El delta se hace por molde, no se hereda.

### Dirección C — conflictos de criterio (decisión de producto)

| # | Elemento | Ilustración | Molde real | Resolución propuesta |
|---|---|---|---|---|
| C1 | Base de la calota | Gris medio (o blanco, ver § 4) | Negro mate | **Manda la ilustración**: es el arte |
| C2 | Visor | Gris oscuro con degradado, semitransparente | Negro opaco | **Negro opaco** — coherencia de catálogo y con la foto real |
| C3 | Medio | Vector plano | Fotografía de estudio | El output es **fotográfico** |

---

## 4. 🔴 BLOQUEO — dos colorways sin autoridad definida

Llegaron **dos versiones de la misma ilustración**, con el mismo arte y distinta paleta:

| Zona | Ilustración A (gris/naranja) | Ilustración B (blanco/rojo) |
|---|---|---|
| Base de la calota | **Gris medio** | **Blanco** |
| Acento dominante | **Naranja** | **Rojo** |
| "Bronx", "BIG APPLE", estrella, corazones | Naranja | Rojo |
| "NYC", Estatua, estrellas | Azul petróleo / navy | Azul marino |
| Acento menor | Turquesa | Turquesa |

**Por qué esto frena el pipeline.** El fallo más caro del lote Dakota fue el spoiler
negro de la variante 04: el prompt declaró un color que la ilustración no tenía, el
generador obedeció, y se perdió una generación entera. La lección que salió de ahí es
literal: *"verificar el color de cada pieza grande por separado contra la ilustración;
nunca inferirlo del tema de la variante"*. Con dos ilustraciones vivas, **cualquier
prompt que escriba tiene 50% de probabilidad de estar transcribiendo la equivocada.**

→ **Decime cuál es la autoridad y desbloqueo.** Los prompts de la § 7 están escritos
sobre la **A (gris/naranja)** y marcados en los puntos exactos donde cambiarían.

---

## 5. Cruce con las lecciones

| Pregunta | Respuesta para este caso |
|---|---|
| **R1 — ¿Existe geometría real equivalente?** | Sí en 7 elementos (A1-A7). La ilustración simplifica por convención de dibujo, no por diseño. Todos se conservan. |
| **R2 — ¿Textura/relieve real o pintura plana?** | **Mixto, y es el punto fino de este caso.** El graffiti es **pintura** → se deforma con la curvatura. El spoiler, el deflector y el mecanismo son **piezas físicas con brillo propio** → no se pintan encima. Los LED son **luz emitida** → no son un decal rojo. |
| **R3 — ¿Estructura o superficie?** | **100% superficie**, con una excepción: la ilustración dibuja el casco como integral cuando es **modular**. Eso es estructura y manda el real. |

---

## 6. Clasificación de elementos

| Clasificación | Elementos |
|---|---|
| **Réplica fiel** | Silueta · spoiler · deflector lateral · mecanismo del visor con dial · palanca del visor solar · borde de goma · toma de aire superior |
| **Aproximación mejorable → manda el real** | Línea de apertura modular (A2) · dial y tornillo (A3) · contraste mate/brillo (A7) |
| **Faltante en ilustración → se conserva del real** | Luces LED rojas (A1) · goma texturada (A4) |
| **Pendiente de ejecución** | Vistas A (3/4), C (trasera) y superior: sin ilustración ni checkpoint |
| **⛔ Fuera del alcance del generador → post-producción** | **Los 14 textos legibles y el personaje** (ver § 6.1) |
| **Imposible por geometría** | — ninguno |

### 6.1 — El riesgo dominante de este caso: densidad de texto

Este diseño choca de frente con dos lecciones ya documentadas del proyecto:

> **Lección 11** — el sello DOT y la microtipografía **siempre** salen corruptos
> ("CENTIFIED", "FMVES"). No se dibujan: se componen en post-producción.
>
> **Lección 12** — el generador **"resume" cuando la superficie tiene mucha
> información**: baja la densidad gráfica, se come piezas chicas y omite textos.

Conté los textos legibles de la ilustración: **NYC · BIG APPLE · NEW YORK · USA ·
EDGE · HOT DOG · I ♥ NY · NY · LOVE · Bronx · EDGE · BROOKLYN · new york · NEWYORK**
— **14 textos**, más el graffiti tipográfico ilegible del faldón, más un **personaje
con cara** (el grafitero con gorra y aerosol).

En el lote Dakota, con **un solo** microtexto ("FOR EXPLORING RUNNERS"), hicieron falta
**tres pasadas** para que saliera legible, y fue "la primera vez en todo el lote".

**Conclusión honesta: este diseño no sale entero de una generación.** Pedirle los 14
textos al generador es garantizar 14 palabras mal escritas. Por eso el plan lo parte
en dos capas — y por eso el Prompt 1 declara los textos chicos como **textura**, no
como texto.

---

## 7. Los dos prompts

**Payload (invariable):** imagen 1 = ilustración NYC lateral (autoridad de gráfico y
encuadre) · imagen 2 = foto real del molde (autoridad de forma, piezas y fotografía).
**El orden se declara dentro del prompt**, no solo en el adjunto.

**Presupuesto de atención:** una vista por llamada. No pedir varias juntas.

---

### PROMPT 1 — GENERACIÓN · Vista B lateral

```
ORDEN DE LAS IMÁGENES ADJUNTAS — LEER ASÍ:
- Imagen 1 (ilustración NYC graffiti, vista lateral): AUTORIDAD DE GRÁFICO y
  AUTORIDAD DE ENCUADRE. De acá se toma QUÉ dibujo va, con qué colores, en qué
  zonas, y desde qué ángulo se ve el casco.
- Imagen 2 (foto de producto del casco negro mate, lateral): AUTORIDAD DE FORMA,
  DE PIEZAS y DE FOTOGRAFÍA. De acá se toma el objeto físico real, cada pieza,
  el acabado, la luz y el tipo de imagen.
Ante cualquier contradicción sobre CÓMO ES EL CASCO, manda la imagen 2.
Ante cualquier duda sobre EL DIBUJO y EL ÁNGULO, manda la imagen 1.

QUÉ ES ESTA TAREA:
Fotografiar EL MISMO OBJETO FÍSICO de la imagen 2, con el diseño de la imagen 1
aplicado sobre su superficie. El resultado es una FOTOGRAFÍA de producto de
catálogo, fotorrealista. NO es una ilustración, NO es un vector, NO es un render
plano.

BLOQUE 1 — GEOMETRÍA: ES UN CASCO ABATIBLE (autoridad = imagen 2)
- El casco de la imagen 2 es MODULAR / ABATIBLE: la mentonera se levanta y por
  eso tiene una LÍNEA DE APERTURA que recorre el borde de la mentonera y sube
  hacia el mecanismo lateral. ESA LÍNEA EXISTE Y SE VE. La ilustración lo dibuja
  como si fuera un casco integral de una sola pieza: eso es una simplificación
  del dibujo, NO una indicación de diseño. Mirá la foto real.
- PIEZAS OBLIGATORIAS, con su forma real de la imagen 2:
  1. El SPOILER trasero, con sus DOS LUCES LED ROJAS ENCENDIDAS.
  2. El DEFLECTOR LATERAL en forma de flecha, sobre la zona trasera del flanco.
  3. El MECANISMO DEL VISOR: pieza circular grande con su DIAL ROTATIVO y su
     TORNILLO CENTRAL. La ilustración lo simplifica a una mancha negra: se
     conserva completo, como en la foto real.
  4. La PALANCA DEL VISOR SOLAR: la pieza rectangular con ranuras que está
     debajo del mecanismo. ESTA PIEZA SÍ EXISTE, está en las dos imágenes: se
     conserva.
  5. El BORDE INFERIOR DE GOMA perimetral, con su TEXTURA DE PUNTOS.
  6. La TOMA DE AIRE SUPERIOR de la calota.
- PROHIBIDO agregar, quitar, mover, agrandar o achicar piezas.
- PROHIBIDO inventar tomas de aire, aletas o salientes que no estén en la imagen 2.

BLOQUE 2 — LAS LUCES LED NO SON PINTURA — ATENCIÓN MÁXIMA:
En el spoiler hay DOS LUCES LED ROJAS ENCENDIDAS. Son LUZ EMITIDA, no una
calcomanía roja ni una franja pintada: tienen brillo propio, núcleo saturado y
un leve halo sobre la pieza negra. La ilustración NO las muestra, porque es un
dibujo plano: eso es una carencia del dibujo, NO una indicación de diseño.
Si en el resultado el spoiler no tiene las dos luces rojas encendidas, está MAL.

BLOQUE 3 — COLOR Y GRÁFICO (autoridad = imagen 1)
Escala de color, de oscuro a claro — son SEIS niveles SEPARADOS:
  1. NEGRO — mentonera baja, spoiler, deflector, mecanismo, borde de goma.
  2. AZUL PETRÓLEO / NAVY — el lettering "NYC", la Estatua de la Libertad, las
     estrellas, "HOT DOG".
  3. GRIS MEDIO — la BASE de toda la calota. Es el fondo del diseño.
  4. NARANJA SATURADO — el acento dominante: "Bronx", "BIG APPLE", la "C"
     grande, los corazones, la estrella, el graffiti del faldón bajo.
  5. TURQUESA / VERDE AGUA — acento menor: "USA", "NEWYORK" del faldón.
  6. BLANCO — "NEW YORK" cursiva, los brillos de la Estatua, el damero.
SEPARACIÓN DE TONOS — REGLA DE CONTEO: son SEIS niveles distintos y tienen que
poder CONTARSE a simple vista en el resultado. Si dos de ellos terminan
pareciéndose entre sí, el resultado está MAL. Los oscuros van OSCUROS y los
claros van CLAROS: no promediar.
CRITERIO DE RECHAZO DEL NARANJA: es NARANJA, del lado del amarillo. Si sale
rojo, bermellón o coral, está MAL.
CRITERIO DE RECHAZO DE LA BASE: la base es GRIS MEDIO. Si sale blanca, está MAL.

BLOQUE 4 — LOS TEXTOS: QUÉ SE DIBUJA Y QUÉ NO
Este diseño tiene MUCHO texto. Se divide en dos grupos y se tratan distinto:
- SE DIBUJAN, completos y bien escritos, porque son las masas grandes:
  "NYC" · "BIG APPLE" · "Bronx" · "BROOKLYN"
  Estos cuatro entran ENTEROS dentro de la superficie visible, con margen
  respecto del borde de la pieza, sin cortarse y sin deformarse.
- NO SE PRETENDE QUE SEAN LEGIBLES — se dibujan como TEXTURA de graffiti, con
  el ritmo, el color y la densidad correctos, pero sin exigir que las letras se
  lean: todo el resto del lettering chico y el graffiti del faldón.
NO INVENTES PALABRAS NUEVAS. No agregues textos, logos, sponsors ni marcas que
no estén en la ilustración.
NO DIBUJES SELLOS DE HOMOLOGACIÓN (DOT / ECE) ni texto legal de certificación:
se componen después en post-producción con el archivo oficial.

BLOQUE 5 — EL PERSONAJE
En la zona trasera baja del flanco hay un PERSONAJE (un grafitero con gorra,
campera y un aerosol en la mano). Se reproduce FIEL al arte de la imagen 1, con
su misma pose, su misma ropa y sus mismos colores. NO se redibuja de memoria y
NO se le cambia la cara. Si el personaje sale deformado o con otra cara, está MAL.

BLOQUE 6 — ADAPTACIÓN DEL GRÁFICO A LA SUPERFICIE REAL
El graffiti es PINTURA sobre una superficie curva, no una calcomanía plana ni
una imagen pegada encima:
- Se deforma siguiendo la curvatura real de la calota y la perspectiva del perfil.
- Recibe la MISMA luz de estudio: reflejo especular arriba, sombra propia abajo.
- Respeta los quiebres del molde y los cambios de plano.
- Cubre TODO el flanco sin dejar parches del negro original, salvo las zonas
  declaradas negras.
DENSIDAD: la cantidad de elementos, trazos y salpicaduras de la ilustración se
RESPETA. PROHIBIDO SIMPLIFICAR EL GRÁFICO: prohibido reducir la cantidad de
elementos, bajar la densidad de salpicaduras o dejar vacías zonas que en la
ilustración tienen dibujo. Comparar zona por zona contra la imagen 1.

ZONAS QUE NO LLEVAN GRÁFICO (quedan negras, son piezas):
- El spoiler, el deflector lateral y el mecanismo del visor.
- El borde inferior de goma.
- Las rejillas y ranuras de ventilación, por dentro.

EL VISOR:
Queda TOTALMENTE NEGRO / AHUMADO OSCURO, OPACO: no se ve el interior del casco
a través de él. Conserva su misma forma, curvatura y posición (bajado, cerrado)
de la foto real. Puede tener un leve reflejo de estudio, pero NO transparencia
y NO degradado.

BLOQUE 7 — ACABADO Y FOTOGRAFÍA
- La CALOTA pintada va MATE, igual que el mate del casco real: sin barniz
  espejado. Si refleja como un espejo, está MAL.
- Las PIEZAS (spoiler, deflector, mecanismo) van BRILLANTES, con reflejo
  especular marcado. Ese contraste mate/brillo es lo que hace que se lea como
  producto real y no como render.
- Fondo blanco liso de estudio, con sombra suave, igual que la imagen 2.
- Nitidez y nivel de detalle de fotografía de producto.

VERIFICACIÓN FINAL — respondé estos ocho chequeos antes de entregar:
1. ¿Es una FOTOGRAFÍA de producto y no una ilustración?
2. ¿Se ve la LÍNEA DE APERTURA de la mentonera abatible?
3. ¿El spoiler tiene las DOS LUCES LED ROJAS ENCENDIDAS?
4. ¿Están el dial con su tornillo, la palanca del visor solar y la goma texturada?
5. ¿Se cuentan los SEIS niveles de color, con la base GRIS y el acento NARANJA?
6. ¿"NYC", "BIG APPLE", "Bronx" y "BROOKLYN" están completos, bien escritos y
   sin cortarse?
7. ¿El personaje es el mismo de la ilustración, sin deformar?
8. ¿La calota quedó MATE y las piezas BRILLANTES, con el fondo y la sombra de
   la foto real?
```

> **Si la autoridad pasa a ser la ilustración B (blanco/rojo)**, cambian solo dos
> renglones del Bloque 3: nivel 3 `GRIS MEDIO` → `BLANCO`, nivel 4 `NARANJA
> SATURADO` → `ROJO`, y los dos criterios de rechazo correspondientes. Nada más.

---

### PROMPT 2 — EDICIÓN CORRECTIVA

Se usa **después** de la auditoría, sobre el resultado ya generado. Sigue el patrón
del Caso de Éxito 01: una sola edición tonal corrigió cinco desvíos sin degradar
geometría ni gráfico. **Los `<corchetes>` se completan con lo que la auditoría midió.**

```
ESTO NO ES UNA REGENERACIÓN. La foto que te paso ya tiene la FORMA CORRECTA:
el casco, sus piezas, el encuadre, la luz, el fondo y la composición del gráfico
están BIEN y NO SE TOCAN. Lo único que hay que corregir son los puntos numerados
de abajo. No redibujes nada.

CAMBIO 1 — <PIEZA POR SU NOMBRE FÍSICO>
Ahora está: <lo que salió mal, con el valor medido>
Tiene que quedar: <lo que corresponde, con el valor de la referencia>
Operación: <la instrucción concreta — "sacale el componente rojo y subile la
luminosidad", "oscurecelo dos niveles">
Criterio de rechazo: si <sigue pareciendo X>, está MAL.

CAMBIO 2 — <PIEZA POR SU NOMBRE FÍSICO>
Ahora está: <...>
Tiene que quedar: <...>
Operación: <...>
Criterio de rechazo: <...>

[un bloque numerado por cambio — nunca dos cambios en el mismo bloque]

ESCALA DE TONOS RESULTANTE, de oscuro a claro:
1. NEGRO (piezas)  2. AZUL PETRÓLEO  3. GRIS MEDIO (base)  4. NARANJA
5. TURQUESA  6. BLANCO
Son SEIS niveles distintos. Si dos se parecen entre sí, está MAL.

RELACIONES QUE SE MANTIENEN:
- El spoiler, el deflector y el mecanismo del visor llevan EXACTAMENTE EL MISMO
  negro: son GEMELOS de color.
- Las dos luces LED llevan el MISMO rojo, con el MISMO brillo.

LO QUE NO SE TOCA — cada pieza tiene su propio bloque, no es una lista al pasar:

  NO SE TOCA 1 — EL VISOR sigue NEGRO OPACO. No se vuelve transparente, no se
  aclara, no se le pone degradado y no se ve el interior del casco a través de
  él. Si se transparenta, está MAL.

  NO SE TOCA 2 — LAS DOS LUCES LED ROJAS del spoiler siguen ENCENDIDAS, con su
  brillo propio y su halo. No se apagan y no se convierten en pintura roja.

  NO SE TOCA 3 — LA LÍNEA DE APERTURA de la mentonera abatible sigue visible.
  No se borra ni se alisa.

  NO SE TOCA 4 — LA GEOMETRÍA: forma del casco, posición y tamaño de cada pieza,
  encuadre, fondo blanco, sombra y luz de estudio quedan EXACTAMENTE IGUAL.

  NO SE TOCA 5 — EL GRÁFICO: la posición, el tamaño y la densidad de cada
  elemento del graffiti quedan igual. Los textos "NYC", "BIG APPLE", "Bronx" y
  "BROOKLYN" NO se reescriben ni se reubican.

  NO SE TOCA 6 — EL PERSONAJE queda idéntico: misma pose, misma cara, misma ropa.

  NO SE TOCA 7 — EL ACABADO: calota MATE, piezas BRILLANTES. El contraste se
  mantiene.

CHECKLIST FINAL — respondé antes de entregar:
1. ¿Se aplicaron TODOS los cambios numerados?
2. ¿Se cuentan los seis niveles de tono?
3. ¿El cambio se derramó a alguna pieza vecina que no estaba en la lista?
4. ¿El visor sigue negro opaco y los LED siguen encendidos?
5. ¿La geometría, el encuadre y el fondo están intactos?
```

**Por qué el Prompt 2 está escrito así** — los siete puntos vienen del Caso de Éxito 01:
declarar que no es regeneración · un cambio por bloque numerado · nombre físico de la
pieza · qué está mal *y* qué debe quedar · criterio de rechazo por cambio · escala con
regla de conteo · relaciones entre piezas · **bloque propio para cada pieza que no se
toca** (el visor volvió a transparente justamente por ir como renglón suelto dentro de
una lista).

---

## 8. Plan y bitácora

| Vista | Ilustración | Checkpoint real | Estado |
|---|---|---|---|
| B — lateral izq. | ✅ (dos colorways) | ✅ | 🔴 bloqueado por § 4 |
| A — 3/4 delantero | ❌ | ❌ | sin material |
| C — trasera | ❌ | ❌ | sin material |
| Superior | ❌ | ❌ | sin material |

**Bitácora:** sin pasadas ejecutadas. La primera generación se registra acá.

---

## 9. Pendientes

| # | Pendiente | Prioridad |
|---|---|---|
| **P0** | **Definir cuál de los dos colorways es la autoridad** (§ 4). Bloquea todo. | 🔴 bloqueante |
| **P1** | **Verificar la licencia.** "I ♥ NY" es marca registrada del estado de Nueva York y "Brooklyn"/"Bronx" con tipografías propias pueden tener titular. Antes de producción hay que cotejar contra los términos. | 🔴 bloqueante para producción |
| P2 | Confirmar el **nombre comercial del molde** abatible con LED | 🟡 |
| P3 | Pedir ilustraciones y checkpoints de las vistas A, C y superior | 🟡 |
| P4 | Confirmar el criterio del **visor** (C2): negro opaco vs. degradado de la ilustración | 🟡 |
| P5 | Preparar los **vectores de los textos chicos** para post-producción (§ 6.1) | 🟡 |
| P6 | Subir los 4 archivos de evidencia (`evidencia/README.md`) | 🟡 |
| P7 | Intake del **Caso 02 — Street Fighter magenta/púrpura** (screenshot § 2.4) | 🟢 |

---

## 10. Lecciones nuevas que aporta este caso

1. **El delta se hace por molde, no se hereda.** La pieza bajo el mecanismo del visor
   era un artefacto del dibujo en el Kratos y es una **palanca real** en este molde.
   Aplicar la prohibición por inercia habría borrado una pieza que existe.
2. **Hay una tercera categoría además de "pieza" y "pintura": LUZ EMITIDA.** Los LED no
   son un decal rojo. Si no se declaran como luz con brillo propio, el generador los
   devuelve como una franja pintada — o directamente los omite, porque la ilustración
   no los tiene.
3. **La densidad de texto es un criterio de admisión, no un defecto a corregir.** Un
   diseño con 14 textos legibles no se manda entero al generador: se decide de
   antemano cuáles se dibujan y cuáles se componen en post. Contar los textos debería
   ser parte del intake de toda adaptación.
4. **Un colorway sin autoridad definida frena el pipeline en `CMP`.** No se avanza a
   `PLAN` con dos referencias vivas: es exactamente el error que costó la variante 04.
