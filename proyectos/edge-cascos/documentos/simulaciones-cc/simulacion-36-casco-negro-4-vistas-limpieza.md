# Simulación 36 — Casco modular/flip up negro liso, 4 vistas: quitar stickers + visor 100% opaco negro + iluminación uniforme como set

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md) · [← Precedente directo: Simulación 24, quitar stickers del mismo molde](simulacion-24-edge-flipup-quitar-stickers.md) · [← Lección invertida: Simulación 31](simulacion-31-casco-bob-esponja-visor-transparente.md) · [← Lección invertida: Simulación 32](simulacion-32-visor-transparente-4k-laterales.md) · [← Regla de negocio DOT: Simulación 30](simulacion-30-edge-racing-livery.md)

**Tipo de prompt:** **D** (limpieza de producto: quitar stickers y etiquetas) + **A** (edición puntual sobre foto de producto real, geometría intacta). Los cuatro prompts son de **edición puntual**, no de generación nueva.

---

## Estado general del caso

| # | Vista | Qué se pide | Estado |
|---|---|---|---|
| **1** | **Frontal** | Quitar todas las etiquetas y el logo **del visor** (el film protector de fábrica completo) · iluminación uniforme · **visor 100% opaco negro** | 🔴 pendiente de generar |
| **2** | **Lateral** | Quitar los restos de stickers del visor · mejorar la iluminación · **visor 100% opaco negro** | 🔴 pendiente de generar |
| **3** | **Trasera** | Quitar los 2 stickers de la calota (escudo "EDGE HELMETS" + etiqueta DOT) · mejorar la iluminación | 🔴 pendiente de generar |
| **4** | **Superior** | **Solo** mejorar la iluminación (corregir el degradé centro claro → bordes negros) | 🔴 pendiente de generar |

**Requisito transversal a las cuatro:** *"que den la misma apreciación"* — tienen que leerse como **un mismo set fotográfico**, con la misma luz, el mismo fondo y el mismo tratamiento. Por eso el **bloque de iluminación está redactado con las mismas palabras exactas en los cuatro prompts** (ver la Decisión 4 y la lección nueva (b) del final).

🟡 **Tres asunciones declaradas y pendientes de confirmación del usuario** — ver la sección "Decisiones tomadas". Ninguna está confirmada: el caso no se da por aprobado hasta que el usuario conteste las tres.

---

## Contexto y pedido

Cuatro fotos de producto del **mismo casco integral modular / flip up, negro liso**, sobre fondo blanco, en cuatro vistas (frontal, lateral, trasera, superior). El usuario pidió por vista lo de la tabla de arriba y cerró el pedido con:

> *"que el casco no cambie nada, que se quede 100% igual"*

y, sobre el visor:

> *"full opaco negro, o sea no opaco como si fuera de mentira, sino que no se pueda ver a través de él"*

Es el mismo molde y el mismo tipo de trabajo que la [Simulación 24](simulacion-24-edge-flipup-quitar-stickers.md) (limpieza de stickers sobre un EDGE flip up), pero con dos capas nuevas encima: el **visor opaco** y la **homogeneización del set**.

---

## Las 4 imágenes de partida

⚠️ **Las imágenes todavía no están subidas al repo.** Esta descripción es la única fuente registrada — hay que subirlas como adjunto real (ver "Qué hay que hacer").

### Vista 1 — FRONTAL

| Elemento | Descripción |
|---|---|
| **Calota** | Casco negro mate de frente, fondo blanco. |
| **Logo de la calota** | En la frente de la calota, el logo **"EDGE®"** impreso en blanco. **Es branding del producto — NO se toca** (ver Decisión 1). |
| **Visor** | Bajado y **transparente**, pero cubierto por el **film protector de fábrica**. |
| **Lo que trae el film** | Un logo **"EDGE®"** grande en blanco/gris al centro; un escudo **"APPROVED DOT / FMVSS NO. 218 / CERTIFIED"** en rojo y azul arriba al centro; **flechas y formas gráficas azules y naranjas** cruzando el visor; **bloques de texto chico** de instrucciones y advertencias a izquierda y derecha; un **ícono de triángulo de advertencia** arriba a la derecha. |
| **Detrás del visor** | Se entrevé el interior del casco a través del visor transparente. |
| **Abajo** | Toma de aire de la mentonera con rejilla de listones. |

### Vista 2 — LATERAL (mirando hacia la derecha del encuadre)

| Elemento | Descripción |
|---|---|
| **Calota** | Negra mate. |
| **Spoiler** | Negro **brillante**, en la parte trasera (a la izquierda del encuadre). El contraste mate/brillante entre calota y spoiler es **real y de pieza** — se conserva (ver Decisión 3). |
| **Piezas** | Placa circular del mecanismo de pivote del visor; línea de separación de la mentonera abatible. |
| **Visor** | Conserva **restos del film protector**: manchas gráficas naranjas y azules y algo de texto sobre el **borde derecho** del visor. |
| **Borde inferior** | Asoma un **detalle rojo** del acolchado interior. |
| **Iluminación** | **Más oscura y más contrastada que la frontal** — es el defecto a corregir en esta vista. |

### Vista 3 — TRASERA

| Elemento | Descripción |
|---|---|
| **Calota** | Casco negro visto de atrás, con acabado que **se lee más brillante** que la frontal (ver Decisión 3: es luz, no pintura). |
| **Spoiler** | Cruza la parte alta. |
| **Sticker 1** | Centrado sobre la calota, un **sticker tipo escudo "EDGE HELMETS"** en rojo, azul y blanco. |
| **Sticker 2** | Debajo, un **sticker rectangular "DOT / FMVSS NO. 218 / CERTIFIED"**. |
| **Abajo** | Salidas de ventilación traseras con rejillas. |

### Vista 4 — SUPERIOR (desde arriba)

| Elemento | Descripción |
|---|---|
| **Calota** | Completa, con sus dos **entradas de ventilación superiores** de forma angular. |
| **Spoiler** | Asoma en el borde inferior del encuadre. |
| **Logo** | En el borde superior asoma, **invertido y cortado**, parte del logo **"EDGE"**. Es el logo de la calota — **se conserva tal cual, con su mismo recorte** (ver Decisión 1). |
| **Iluminación** | **Muy despareja: el centro de la calota se lava a gris claro y los bordes caen a negro**, con un degradé marcado que **no corresponde a la pintura sino a la luz**. Es el defecto a corregir. |
| **Stickers** | Ninguno. Esta vista es **solo** iluminación. |

---

## Decisiones tomadas — todas declaradas como asunciones, ninguna confirmada

### 🟡 Decisión 1 — El logo "EDGE®" impreso en la calota NO se toca

El usuario dijo *"las etiquetas y el logo"*, pero en la vista frontal hay **dos logos distintos** y no son la misma cosa:

| Logo | Qué es | Decisión |
|---|---|---|
| **"EDGE®" impreso en la frente de la calota** | **Branding del producto**, pintado/impreso sobre la pieza. Es parte del casco. | **SE CONSERVA** |
| **"EDGE®" grande sobre el visor** | Parte del **film protector de fábrica**, un sticker que se despega antes de usar el casco. No es parte del producto terminado. | **SE QUITA** |

**Razonamiento:** sacarle la marca al propio producto no tendría sentido en una foto de catálogo — el objetivo de estas fotos es vender un casco EDGE. Y el usuario habló de *"las etiquetas y el logo **del visor**"*, o sea que la frase estaba localizada en el visor, no en la calota. Bajo esa lectura, "quitar las etiquetas y el logo del visor" y "que el casco no cambie nada" son coherentes entre sí: se saca lo que sobra (el film de fábrica), no se modifica el producto.

**Alternativa no descartada:** que el usuario quiera el casco **totalmente sin marca** (unbranded), por ejemplo para una pieza genérica o de marca blanca. Si fuera eso, hay que rehacer los prompts de las vistas 1 y 4 agregando el logo de la calota a la lista de borrados, con su reconstrucción de pintura negra continua por debajo.

**Qué preguntarle al usuario:** *"cuando dijiste 'las etiquetas y el logo', ¿el logo EDGE® impreso en la frente de la calota se queda (es el branding del producto) o también se saca?"*. Hasta que conteste, el logo de la calota **se conserva** y así está escrito en los cuatro prompts.

### 🟡 Decisión 2 — Cómo se resuelve la tensión entre "mejorar la iluminación" y "que el casco no cambie nada"

Los dos pedidos son literalmente incompatibles si se leen a nivel de píxel: **reiluminar cambia píxeles por definición**. La resolución no es elegir uno de los dos, es **partir el objeto en dos listas** y escribirlas explícitamente en los cuatro prompts:

| **QUEDA INVARIANTE** | **SÍ CAMBIA** |
|---|---|
| Geometría, silueta y molde | La **distribución** de la luz sobre esas superficies |
| Proporciones y escala dentro del cuadro | La **exposición** y el **contraste** de la toma |
| Ángulo de cámara y encuadre | Dónde caen los reflejos y con qué dureza |
| Cada pieza física en su lugar (ventilaciones, spoiler, pivote, mentonera, goma, acolchado) | La uniformidad del fondo blanco |
| El **material y su acabado** (mate sigue siendo mate, brillante sigue siendo brillante) | — |
| El color base (negro) | — |
| El logo "EDGE®" de la calota | — |

**La frase operativa, que va textual en los cuatro prompts:** *"reiluminar NO es rehacer: es la misma fotografía del mismo objeto, con la luz mejor repartida"*. Esa es la línea que separa "reiluminar" de "rehacer", y si no está escrita, el generador la cruza sola.

**Por qué esto merece un bloque propio y no una aclaración al pasar:** es exactamente el modo de falla del ítem del checklist Tipo A sobre prompts de edición — *"en un prompt de edición no alcanza con proteger lo que no se toca: hay que declarar también qué cambia DENTRO de la zona que sí se edita"*. Acá la "zona que se edita" es **toda la imagen**, porque la luz cae sobre todo. Sin acotar el atributo, nombrar la iluminación como cosa a mejorar equivale a darle permiso para rehacer la foto entera.

### 🟡 Decisión 3 — El acabado real del casco: **negro mate**, y las diferencias entre fotos son de luz, no de pintura

Las cuatro fotos no muestran el mismo acabado: la frontal y la lateral se leen **mate**, la trasera se lee **más brillante**.

**Decisión: el acabado real del casco es NEGRO MATE**, y las cuatro vistas convergen a ese acabado. Justificación:

1. **Mayoría de evidencia:** 2 de las 4 vistas (frontal y lateral) muestran mate de forma inequívoca, y la superior es consistente con mate (el "lavado a gris claro" del centro es exactamente lo que hace una luz cenital dura sobre una superficie **mate**: un realce ancho y difuso, no un destello puntual como daría una superficie glossy).
2. **La trasera es la excepción, y la excepción tiene explicación de luz:** una fuente más dura o más frontal sobre negro mate levanta el especular difuso y hace leer la superficie como más brillante. Es la misma causa que ya produce el otro defecto declarado de esa foto (contraste alto). O sea: **una sola causa explica los dos síntomas de la trasera**, mientras que "la trasera está pintada con otro acabado" exigiría creer que el mismo casco tiene dos pinturas distintas, lo cual no tiene sentido físico.
3. **Converger es obligatorio por el pedido de set:** el usuario pidió que las cuatro *"den la misma apreciación"*. Dejar que cada vista conserve su acabado aparente es justamente el resultado que pidió evitar — cuatro fotos que parecen sacadas en cuatro días distintos.

**Matiz importante que NO se toca:** el **spoiler negro brillante** de la vista lateral **sí es un contraste real de pieza** — es plástico brillante contra calota mate, y eso es parte del producto. Se conserva. La decisión de "todo mate" aplica a **la calota**, no a las piezas de plástico brillante.

**Cómo se escribe esto en el prompt sin que se vuelva un repintado:** no se le pide al generador "convertí el acabado glossy en mate" (eso sería cambiar el producto, contra el pedido explícito del usuario). Se le pide que **la respuesta del material a la luz sea la misma en las cuatro vistas**: realce ancho y difuso que sigue la curvatura, sin destello duro ni punto de luz quemado. El acabado no se repinta — se **deja de sobre-iluminar**, y el mate aparece solo.

**Alternativa no descartada:** que el casco real sea **glossy** y que las vistas frontal y lateral se vean mate por subexposición. Si el usuario confirma eso, la decisión se invierte entera (las cuatro convergen a glossy con reflejos nítidos), pero **la regla de fondo no cambia: las cuatro tienen que tener el mismo acabado, nunca una mezcla**.

**Qué preguntarle al usuario:** *"¿el casco real es negro mate o negro brillante? Lo estoy tomando como mate porque es lo que muestran 3 de las 4 fotos, y la trasera se ve más brillante por la luz, no por la pintura."*

### Decisión 4 (no es asunción, es regla de redacción) — el bloque de iluminación va **literalmente igual** en los cuatro prompts

El pedido de *"que den la misma apreciación"* no se cumple pidiéndole a cada vista "buena iluminación": si cada prompt describe su luz con palabras distintas, el generador produce cuatro interpretaciones distintas y el set no se lee como una familia. Por eso el bloque de iluminación es **el mismo texto exacto**, copiado sin variar una palabra, en los cuatro prompts. Lo único que cambia por vista es un **addendum corto** que nombra el defecto concreto de esa foto — porque cada foto tiene un defecto distinto y hay que decírselo.

### Regla de negocio aplicada — ningún render lleva stickers de certificación DOT

Regla ya vigente en el repo desde la [Simulación 30](simulacion-30-edge-racing-livery.md): **ningún render lleva sticker "DOT" ni ninguna otra marca de certificación u homologación** (DOT, ECE, SNELL, FMVSS, etiquetas normativas).

Acá se cruza con el pedido de forma directa: dos de las tres etiquetas a borrar **son** de certificación (el escudo "APPROVED DOT / FMVSS NO. 218 / CERTIFIED" del visor en la vista 1, y el sticker rectangular "DOT / FMVSS NO. 218 / CERTIFIED" de la calota en la vista 3). O sea que el pedido del usuario y la regla de negocio **apuntan al mismo lado** — pero la regla agrega algo que el pedido no dice: hay que **prohibir explícitamente que el generador las vuelva a dibujar**, porque un casco negro liso "le pide" al prior del generador una etiqueta de homologación en la nuca. Va en el `PROHIBIDO ABSOLUTO` de las cuatro vistas, incluida la superior, que no tiene ningún sticker que quitar.

---

## El punto técnico del caso — el visor opaco es la operación inversa de la 31 y la 32, y comparte la trampa

En la [Simulación 31](simulacion-31-casco-bob-esponja-visor-transparente.md) y la [Simulación 32](simulacion-32-visor-transparente-4k-laterales.md) el pedido era **volver transparente un visor opaco**, y la lección que dejaron —ya registrada en el checklist Tipo A— tiene **dos mitades**:

1. Al destapar una zona hay que **declarar en positivo qué se ve debajo** (no alcanza con prohibir la cara/el maniquí).
2. **Volver transparente una pieza no es borrarla:** hay que decir explícitamente que la pieza sigue existiendo, con su forma, su borde, su curvatura, su espesor y sus reflejos especulares.

**Acá el pedido es el inverso exacto** —volver opaco algo transparente— y **la mitad 2 se aplica dada vuelta, palabra por palabra**. El riesgo es simétrico y es el mismo mecanismo: si el prompt solo dice "que el visor sea negro opaco", el generador tiene una forma muy barata de cumplirlo, que es **pintar un agujero negro plano** en el lugar del visor. Y eso pasa la lectura literal de la instrucción (efectivamente no se ve a través) mientras **destruye la pieza**: sin borde, sin curvatura, sin espesor, sin reflejos, sin línea de separación contra la calota. Es exactamente el defecto que la 31 previene en la otra dirección, con el signo cambiado.

El usuario ya lo anticipó con su propia formulación: *"no opaco como si fuera de mentira"*. Eso es precisamente el agujero negro plano. **"De mentira" no describe la opacidad — describe la pérdida de la pieza.**

Por eso el bloque del visor de este caso está escrito en **dos mitades explícitas y etiquetadas como tales**:

- **Mitad 1 — el visor sigue existiendo como pieza física:** misma forma, mismo contorno, mismo borde perimetral, misma curvatura, mismo espesor, misma posición bajada, mismo montaje en el pivote, y **conserva sus reflejos especulares de la luz de estudio** (un policarbonato negro sigue siendo una superficie brillante y curva; los reflejos son lo que hace leer su volumen).
- **Mitad 2 — no se ve absolutamente nada a través de él:** ni el interior del casco, ni el acolchado, ni la abertura de los ojos, ni ninguna silueta, ni tenuemente, ni en los bordes, ni en las zonas oscuras. Opacidad total, de borde a borde.

**Y una tercera cosa que solo aparece en este caso, por el cruce con la limpieza:** en las vistas 1 y 2 el visor **además** tiene stickers encima. Hay una forma tramposa de "cumplir" los dos pedidos a la vez que hay que cerrar explícitamente: **tapar los stickers con el negro** en vez de eliminarlos. Si eso pasa, queda un fantasma —un relieve, un borde, un cambio de brillo, una textura distinta— visible bajo el negro en cuanto la luz lo cruza. El prompt tiene que decir el orden: **primero se elimina el film y se reconstruye superficie de visor limpia, y recién ese visor limpio pasa a negro opaco**. El negro no es una tapa.

**La regla general de borrado que se aplica en las tres vistas con stickers**, ya registrada en el checklist Tipo A: **un borrado son dos tareas** —eliminar sin dejar resto, borde, halo, contorno, recorte ni sombra fantasma, **y** reconstruir lo que había debajo—. Acá lo que va debajo cambia según la superficie:

- **Sobre el visor** (vistas 1 y 2) → superficie de visor continua, con su mismo material y su misma curvatura.
- **Sobre la calota** (vista 3) → **pintura negra continua, con su curvatura y su reflejo**, sin parche, sin costura y sin una zona de brillo distinto donde estaba el sticker.

---

## Los 4 prompts

Los cuatro se corren **adjuntando solo la imagen que le corresponde**, y **cada uno en una sesión aislada del generador** — regla de contaminación cruzada del checklist Tipo A (caso Vortex, `simulacion-11-vortex-verificacion.md`): correr las cuatro vistas seguidas en el mismo hilo hace que el generador arrastre elementos de la vista anterior.

<details><summary>Prompt 1 — Vista FRONTAL: quitar el film protector del visor + visor 100% opaco negro + iluminación uniforme</summary>

```
Esto es una EDICIÓN PUNTUAL sobre la imagen adjunta, NO una generación
nueva desde cero, NO un render, NO una reinterpretación. La imagen
adjunta es una FOTOGRAFÍA DE PRODUCTO REAL de un casco integral
modular / flip up negro, vista frontal, sobre fondo blanco. Se devuelve
la MISMA fotografía, del MISMO casco, con el MISMO ángulo y el MISMO
encuadre, con solo los cambios que se enumeran abajo. No inventes nada,
no agregues nada, no rediseñes nada, no cambies el casco.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE IGUAL:
- La FORMA Y LA SILUETA del casco: es un integral modular / flip up,
  mismo molde, mismas proporciones, misma curvatura de calota, misma
  mentonera, mismo ancho, mismo alto.
- La LÍNEA DE SEPARACIÓN Y EL MECANISMO DEL FLIP UP (la junta de la
  mentonera abatible), en su misma posición y con su mismo trazado.
- Las VENTILACIONES: la toma de aire de la mentonera con su rejilla de
  listones, y cualquier otra entrada o salida de aire visible. Mismo
  conteo, misma forma, misma posición, mismo tamaño.
- El SPOILER trasero.
- La PLACA CIRCULAR DEL MECANISMO DE PIVOTE del visor, a los costados.
- La GOMA DEL BORDE INFERIOR de la calota.
- El ACOLCHADO INTERIOR y cualquier detalle de color que asome en el
  borde inferior.
- EL LOGO "EDGE®" IMPRESO EN LA FRENTE DE LA CALOTA: ese logo ES DEL
  PRODUCTO y SE CONSERVA tal cual está, con su misma posición, su mismo
  tamaño, su mismo color blanco y su misma tipografía. NO lo borres, NO
  lo muevas, NO lo agrandes, NO lo achiques, NO lo redibujes. Es
  DISTINTO del logo que está pegado sobre el visor, que sí se elimina.
- El COLOR NEGRO del casco y su ACABADO MATE.
- El ÁNGULO DE CÁMARA, el ENCUADRE, el RECORTE y la ESCALA del casco
  dentro del cuadro.
- El FONDO BLANCO.

CAMBIO 1 — ELIMINAR EL FILM PROTECTOR DE FÁBRICA DEL VISOR, COMPLETO:
El visor está cubierto por el FILM PROTECTOR DE FÁBRICA, que trae
impreso todo esto. Hay que eliminarlo ENTERO, elemento por elemento:
  a) El logo "EDGE®" GRANDE en blanco/gris del CENTRO del visor.
  b) El escudo "APPROVED DOT / FMVSS NO. 218 / CERTIFIED" en rojo y
     azul, ARRIBA AL CENTRO.
  c) Las FLECHAS Y FORMAS GRÁFICAS AZULES Y NARANJAS que cruzan el
     visor.
  d) Los BLOQUES DE TEXTO CHICO de instrucciones y advertencias, a la
     IZQUIERDA y a la DERECHA.
  e) El ÍCONO DE TRIÁNGULO DE ADVERTENCIA de ARRIBA A LA DERECHA.
  f) El film en sí: su lámina, su borde, su brillo distinto, sus
     arrugas y cualquier pestaña o solapa que asome.

ESTO SON DOS TAREAS, NO UNA — HACÉ LAS DOS:
  TAREA A — ELIMINAR SIN DEJAR RESTO: ni una letra suelta, ni un tramo
  de flecha, ni un pedazo de escudo, ni un fantasma, ni un halo, ni un
  contorno, ni una sombra, ni una silueta tenue, ni un recorte, ni una
  zona de brillo o de color ligeramente distinto donde estaba cada
  elemento.
  TAREA B — RECONSTRUIR LO QUE VA DEBAJO: debajo del film hay
  SUPERFICIE DE VISOR. Esa superficie se reconstruye continua, con la
  misma curvatura y el mismo material del resto del visor, sin parche,
  sin costura y sin cambio de textura.

ORDEN OBLIGATORIO Y NO NEGOCIABLE ENTRE EL CAMBIO 1 Y EL CAMBIO 2:
PRIMERO se elimina el film y queda un visor LIMPIO; RECIÉN DESPUÉS ese
visor limpio pasa a ser negro opaco. EL NEGRO NO ES UNA TAPA: está
PROHIBIDO "resolver" los stickers pintándolos de negro o cubriéndolos
con el negro del visor. Si el negro tapa los stickers en vez de
eliminarlos, va a quedar un FANTASMA debajo —un relieve, un borde, un
cambio de brillo, una textura distinta, una silueta que reaparece
cuando la luz la cruza— y eso es un ERROR. Debajo del negro no puede
quedar NADA del film.

CAMBIO 2 — EL VISOR PASA A NEGRO 100% OPACO (ESTE ES EL CORAZÓN DEL
PEDIDO):
El visor está bajado y hoy es TRANSPARENTE: se entrevé el interior del
casco a través de él. Tiene que pasar a ser NEGRO TOTALMENTE OPACO.
Textual de quien lo pidió: "full opaco negro, o sea no opaco como si
fuera de mentira, sino que no se pueda ver a través de él".

  MITAD 1 — EL VISOR SIGUE EXISTIENDO COMO PIEZA FÍSICA:
  - Es la MISMA PIEZA, en la MISMA POSICIÓN (bajada), con su MISMA
    FORMA, su MISMO CONTORNO, su MISMO BORDE PERIMETRAL, su MISMA
    CURVATURA y su MISMO ESPESOR de material.
  - CONSERVA SUS REFLEJOS ESPECULARES de la luz de estudio: un visor de
    policarbonato negro sigue siendo una superficie BRILLANTE y CURVA
    que refleja la luz. Los reflejos son lo que hace leer su curvatura y
    su volumen — sin ellos la pieza desaparece.
  - Sigue siendo una PIEZA APARTE del resto del casco: se ve su línea de
    borde contra la abertura de la calota, y su montaje en el mecanismo
    de pivote.
  - NO es un agujero negro. NO es una mancha plana pegada. NO es una
    silueta recortada. NO es una zona borrada. NO es un vacío. EL VISOR
    NO DESAPARECE.

  MITAD 2 — NO SE VE ABSOLUTAMENTE NADA A TRAVÉS DE ÉL:
  - No se ve el interior del casco.
  - No se ve el acolchado interior.
  - No se ve la abertura de los ojos ni ninguna abertura de visión.
  - No se ve ninguna silueta, ninguna forma, ninguna sombra ni ningún
    contorno de nada que esté detrás.
  - No se transparenta nada: ni tenuemente, ni en los bordes, ni en las
    zonas más oscuras, ni en ningún punto. La opacidad es TOTAL, del
    100%, en TODA la superficie del visor, de borde a borde.

  POR QUÉ ESTAS DOS MITADES VAN JUNTAS: cambiar la opacidad de una pieza
  NUNCA es eliminarla. Lo que cambia es QUÉ DEJA PASAR, no SI ESTÁ. Un
  hueco negro plano sin borde y sin reflejos NO es un visor opaco: es un
  visor borrado, y es un error.

CAMBIO 3 — ILUMINACIÓN:
[BLOQUE DE ILUMINACIÓN — IDÉNTICO EN LAS CUATRO VISTAS DEL SET. Este
bloque está redactado con las MISMAS PALABRAS en los cuatro prompts a
propósito: las cuatro fotos tienen que leerse como UN MISMO SET
FOTOGRÁFICO, sacado el mismo día, con el mismo equipo y el mismo
tratamiento. No lo reinterpretes.]

LO ÚNICO QUE CAMBIA ES LA DISTRIBUCIÓN DE LA LUZ SOBRE LAS SUPERFICIES
QUE YA ESTÁN EN LA FOTO. No cambia la geometría, no cambian las
proporciones, no cambia el ángulo, no cambia el encuadre, no cambia el
material ni el acabado, no cambia ninguna pieza de lugar, no cambia el
color base. REILUMINAR NO ES REHACER: es la MISMA fotografía del MISMO
objeto, con la luz mejor repartida.

CÓMO TIENE QUE QUEDAR LA LUZ:
- Luz de estudio SUAVE Y UNIFORME sobre todo el casco, tipo softbox
  grande y envolvente. Sin fuente dura, sin luz puntual, sin flash
  directo.
- SIN ZONAS LAVADAS: ninguna parte de la superficie se va a gris claro
  ni a blanco por sobreexposición.
- SIN CAÍDAS A NEGRO: ningún borde ni ninguna zona se hunde en negro
  plano sin detalle. En TODA la extensión del casco se tiene que leer la
  forma y el material.
- El negro del casco es un NEGRO PAREJO CON DETALLE, de punta a punta,
  bordes incluidos.
- REFLEJOS ESPECULARES SUAVES Y ANCHOS que describan la curvatura de las
  superficies, nunca destellos duros ni puntos de luz quemados.
- SOMBRA DE CONTACTO DISCRETA debajo del casco: suave, corta y neutra,
  que lo apoye sobre la superficie sin dramatismo.
- FONDO BLANCO LIMPIO Y PAREJO: sin viñeteo, sin degradé, sin manchas y
  sin sombras proyectadas encima.
- BALANCE DE BLANCOS NEUTRO: el negro es negro neutro, sin dominante
  cálida ni fría.
- EXPOSICIÓN, CONTRASTE Y TEMPERATURA DE COLOR consistentes con las
  otras tres vistas del mismo set.
- El ACABADO DEL MATERIAL NO SE REPINTA: la calota es NEGRO MATE y
  responde a la luz como mate (realce ancho y difuso que sigue la
  curvatura). Las piezas de plástico brillante que el casco ya tiene
  siguen siendo brillantes: ese contraste entre mate y brillante es del
  producto y se conserva.
[FIN DEL BLOQUE COMÚN DE ILUMINACIÓN]

DEFECTO CONCRETO DE ESTA FOTO: esta vista frontal es la que mejor luz
tiene del set y sirve de referencia, pero igual hay que emparejarla al
estándar de arriba: quitarle cualquier zona sobreexpuesta y cualquier
caída a negro en los bordes de la calota y de la mentonera, y dejar el
fondo blanco perfectamente parejo.

CRÍTICO — LAS ZONAS EDITADAS TAMPOCO SE REDIBUJAN:
Que una zona esté en la lista de cambios NO es permiso para rehacerla.
En el visor, lo ÚNICO que cambia es que el film ya no está y que el
material pasó a ser negro opaco: su forma, su borde, su curvatura, su
espesor y su montaje siguen idénticos. En el resto de la imagen, lo
ÚNICO que cambia es cómo cae la luz. Nada se rediseña, nada se
simplifica, nada se reinterpreta.

PROHIBIDO ABSOLUTO:
- Borrar, mover, achicar, agrandar o redibujar el logo "EDGE®" IMPRESO
  EN LA FRENTE DE LA CALOTA. Ese se queda.
- Dejar el visor como un agujero negro plano, sin borde, sin curvatura y
  sin reflejos.
- Que se vea ALGO a través del visor: interior, acolchado, abertura de
  los ojos, silueta, sombra o contorno de cualquier cosa.
- Dibujar una cabeza, una cara, ojos, piel, pelo, una persona o un
  maniquí en ninguna parte de la imagen.
- Dejar cualquier resto, fantasma, halo, borde, recorte o sombra de los
  stickers eliminados, ni sobre el visor ni debajo del negro.
- Tapar los stickers con el negro en vez de eliminarlos.
- Volver a dibujar CUALQUIER sticker, etiqueta, logo, texto, escudo o
  marca de CERTIFICACIÓN U HOMOLOGACIÓN (DOT, FMVSS, ECE, SNELL,
  etiquetas normativas): regla de negocio, ningún render de este
  catálogo las lleva. Ni sobre el visor, ni sobre la calota, ni en
  ningún lado.
- Agregar texto, logos, sellos, firmas, marcas de agua o gráficos nuevos
  de cualquier tipo.
- Cambiar la geometría, la silueta, las proporciones o el molde del
  casco.
- Cambiar el conteo, la forma, el tamaño o la posición de las
  ventilaciones, el spoiler, la placa del pivote, la línea del flip up,
  la goma del borde inferior o el acolchado interior.
- Cambiar el ángulo de cámara, el encuadre, el recorte, la escala del
  casco dentro del cuadro o el aspect ratio.
- Cambiar el color base del casco o repintar su acabado.
- Convertir la foto en una ilustración, un render 3D, un dibujo o un
  mockup: sigue siendo la MISMA FOTOGRAFÍA DE PRODUCTO.

VERIFICACIÓN FINAL ANTES DE ENTREGAR — compará tu resultado contra la
imagen adjunta, al lado, y contestá una por una:
1. ¿Desapareció el 100% del film protector del visor —el logo "EDGE®"
   grande, el escudo DOT/FMVSS, las flechas y formas azules y naranjas,
   los dos bloques de texto chico y el triángulo de advertencia— sin
   dejar NI UN resto, fantasma, halo, borde, recorte ni sombra?
2. ¿La superficie del visor quedó reconstruida continua, sin parche, sin
   costura y sin cambio de textura — y sin ningún relieve ni cambio de
   brillo que delate dónde estaban los stickers debajo del negro?
3. ¿El visor es TOTALMENTE OPACO (no se ve absolutamente nada a través
   de él, ni tenuemente, ni en los bordes) Y AL MISMO TIEMPO sigue
   teniendo su BORDE, su CONTORNO, su CURVATURA, su ESPESOR y sus
   REFLEJOS ESPECULARES? Si es un agujero negro plano, está MAL.
4. ¿El logo "EDGE®" impreso en la frente de la calota SIGUE AHÍ, en la
   misma posición, del mismo tamaño y del mismo color?
5. ¿Cambió algo de la FORMA? Silueta, proporciones, molde, ventilaciones
   (conteo y forma), spoiler, placa del pivote, línea del flip up, goma
   del borde inferior, ángulo, encuadre y escala: ¿todo igual?
6. ¿La luz quedó PAREJA en toda la superficie, sin zonas lavadas y sin
   caídas a negro en los bordes, con el fondo blanco limpio y uniforme?
7. ¿Aparece algún sticker, etiqueta, texto o marca de certificación que
   no estaba pedido? Si aparece algo nuevo, lo inventaste.
Cualquier diferencia que no sean los 3 cambios pedidos es un ERROR:
corregila antes de entregar.
```

</details>

<details><summary>Prompt 2 — Vista LATERAL: quitar los restos del film del visor + visor 100% opaco negro + iluminación uniforme</summary>

```
Esto es una EDICIÓN PUNTUAL sobre la imagen adjunta, NO una generación
nueva desde cero, NO un render, NO una reinterpretación. La imagen
adjunta es una FOTOGRAFÍA DE PRODUCTO REAL de un casco integral
modular / flip up negro, VISTA LATERAL mirando hacia la derecha del
encuadre, sobre fondo blanco. Se devuelve la MISMA fotografía, del
MISMO casco, con el MISMO ángulo y el MISMO encuadre, con solo los
cambios que se enumeran abajo. No inventes nada, no agregues nada, no
rediseñes nada, no cambies el casco.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE IGUAL:
- La FORMA Y LA SILUETA del casco: es un integral modular / flip up,
  mismo molde, mismas proporciones, misma curvatura de calota, misma
  mentonera, mismo perfil.
- La LÍNEA DE SEPARACIÓN Y EL MECANISMO DEL FLIP UP (la junta de la
  mentonera abatible), en su misma posición y con su mismo trazado.
- Las VENTILACIONES visibles en esta vista: mismo conteo, misma forma,
  misma posición, mismo tamaño.
- El SPOILER NEGRO BRILLANTE de la parte trasera (a la izquierda del
  encuadre): misma forma, mismo perfil, misma extensión, mismo tamaño y
  MISMO ACABADO BRILLANTE. Ese contraste entre el spoiler brillante y la
  calota mate es REAL y del producto: se conserva.
- La PLACA CIRCULAR DEL MECANISMO DE PIVOTE del visor, con su forma, su
  tamaño y su posición.
- La GOMA DEL BORDE INFERIOR de la calota.
- El DETALLE ROJO DEL ACOLCHADO INTERIOR que asoma en el borde inferior:
  se conserva, con su mismo color, su misma posición y su mismo tamaño.
- El COLOR NEGRO del casco y su ACABADO MATE en la calota.
- Cualquier logo "EDGE®" IMPRESO EN LA CALOTA que sea visible en esta
  vista: es branding DEL PRODUCTO y SE CONSERVA tal cual. NO lo borres,
  NO lo muevas, NO lo redibujes. Es DISTINTO de los stickers pegados
  sobre el visor, que sí se eliminan.
- El ÁNGULO DE CÁMARA, el ENCUADRE, el RECORTE y la ESCALA del casco
  dentro del cuadro.
- El FONDO BLANCO.

CAMBIO 1 — ELIMINAR LOS RESTOS DEL FILM PROTECTOR SOBRE EL VISOR:
Sobre el visor quedan RESTOS DEL FILM PROTECTOR DE FÁBRICA: MANCHAS
GRÁFICAS NARANJAS Y AZULES y algo de TEXTO, concentradas sobre el BORDE
DERECHO del visor. Hay que eliminarlos POR COMPLETO, junto con
cualquier pestaña, solapa, arruga o borde de lámina que asome.

ESTO SON DOS TAREAS, NO UNA — HACÉ LAS DOS:
  TAREA A — ELIMINAR SIN DEJAR RESTO: ni una mancha suelta, ni una
  letra, ni un tramo de gráfico, ni un fantasma, ni un halo, ni un
  contorno, ni una sombra, ni un recorte, ni una zona de brillo o de
  color ligeramente distinto donde estaban.
  TAREA B — RECONSTRUIR LO QUE VA DEBAJO: debajo de los restos hay
  SUPERFICIE DE VISOR. Se reconstruye continua, con la misma curvatura y
  el mismo material del resto del visor, sin parche, sin costura y sin
  cambio de textura.

ORDEN OBLIGATORIO Y NO NEGOCIABLE ENTRE EL CAMBIO 1 Y EL CAMBIO 2:
PRIMERO se eliminan los restos del film y queda un visor LIMPIO; RECIÉN
DESPUÉS ese visor limpio pasa a ser negro opaco. EL NEGRO NO ES UNA
TAPA: está PROHIBIDO "resolver" los restos pintándolos de negro o
cubriéndolos con el negro del visor. Si el negro los tapa en vez de
eliminarlos, va a quedar un FANTASMA debajo —un relieve, un borde, un
cambio de brillo, una textura distinta, una mancha que reaparece cuando
la luz la cruza— y eso es un ERROR. Debajo del negro no puede quedar
NADA del film.

CAMBIO 2 — EL VISOR PASA A NEGRO 100% OPACO (ESTE ES EL CORAZÓN DEL
PEDIDO):
El visor está bajado. Tiene que ser NEGRO TOTALMENTE OPACO. Textual de
quien lo pidió: "full opaco negro, o sea no opaco como si fuera de
mentira, sino que no se pueda ver a través de él".

  MITAD 1 — EL VISOR SIGUE EXISTIENDO COMO PIEZA FÍSICA:
  - Es la MISMA PIEZA, en la MISMA POSICIÓN (bajada), con su MISMA
    FORMA, su MISMO CONTORNO, su MISMO BORDE PERIMETRAL, su MISMA
    CURVATURA y su MISMO ESPESOR de material.
  - CONSERVA SUS REFLEJOS ESPECULARES de la luz de estudio: un visor de
    policarbonato negro sigue siendo una superficie BRILLANTE y CURVA
    que refleja la luz. En una vista lateral el reflejo alargado que
    recorre el visor es lo que hace leer su curvatura — sin él la pieza
    se aplana y desaparece.
  - Sigue siendo una PIEZA APARTE del resto del casco: se ve su línea de
    borde contra la abertura de la calota y su montaje en la PLACA
    CIRCULAR DEL PIVOTE.
  - NO es un agujero negro. NO es una mancha plana pegada. NO es una
    silueta recortada. NO es una zona borrada. EL VISOR NO DESAPARECE.
  - OJO CON ESTA VISTA EN PARTICULAR: el visor negro opaco y la calota
    negra mate son los dos negros, y tienen que SEGUIR DISTINGUIÉNDOSE
    como dos piezas distintas. El visor no se funde con la calota en una
    sola masa negra: conserva su línea de borde y su brillo propio,
    distinto del mate de la calota.

  MITAD 2 — NO SE VE ABSOLUTAMENTE NADA A TRAVÉS DE ÉL:
  - No se ve el interior del casco.
  - No se ve el acolchado interior.
  - No se ve la abertura de los ojos ni ninguna abertura de visión.
  - No se ve ninguna silueta, ninguna forma, ninguna sombra ni ningún
    contorno de nada que esté detrás.
  - No se transparenta nada: ni tenuemente, ni en los bordes, ni en las
    zonas más oscuras, ni en ningún punto. La opacidad es TOTAL, del
    100%, en TODA la superficie del visor, de borde a borde.

  POR QUÉ ESTAS DOS MITADES VAN JUNTAS: cambiar la opacidad de una pieza
  NUNCA es eliminarla. Lo que cambia es QUÉ DEJA PASAR, no SI ESTÁ. Un
  hueco negro plano sin borde y sin reflejos NO es un visor opaco: es un
  visor borrado, y es un error.

CAMBIO 3 — ILUMINACIÓN:
[BLOQUE DE ILUMINACIÓN — IDÉNTICO EN LAS CUATRO VISTAS DEL SET. Este
bloque está redactado con las MISMAS PALABRAS en los cuatro prompts a
propósito: las cuatro fotos tienen que leerse como UN MISMO SET
FOTOGRÁFICO, sacado el mismo día, con el mismo equipo y el mismo
tratamiento. No lo reinterpretes.]

LO ÚNICO QUE CAMBIA ES LA DISTRIBUCIÓN DE LA LUZ SOBRE LAS SUPERFICIES
QUE YA ESTÁN EN LA FOTO. No cambia la geometría, no cambian las
proporciones, no cambia el ángulo, no cambia el encuadre, no cambia el
material ni el acabado, no cambia ninguna pieza de lugar, no cambia el
color base. REILUMINAR NO ES REHACER: es la MISMA fotografía del MISMO
objeto, con la luz mejor repartida.

CÓMO TIENE QUE QUEDAR LA LUZ:
- Luz de estudio SUAVE Y UNIFORME sobre todo el casco, tipo softbox
  grande y envolvente. Sin fuente dura, sin luz puntual, sin flash
  directo.
- SIN ZONAS LAVADAS: ninguna parte de la superficie se va a gris claro
  ni a blanco por sobreexposición.
- SIN CAÍDAS A NEGRO: ningún borde ni ninguna zona se hunde en negro
  plano sin detalle. En TODA la extensión del casco se tiene que leer la
  forma y el material.
- El negro del casco es un NEGRO PAREJO CON DETALLE, de punta a punta,
  bordes incluidos.
- REFLEJOS ESPECULARES SUAVES Y ANCHOS que describan la curvatura de las
  superficies, nunca destellos duros ni puntos de luz quemados.
- SOMBRA DE CONTACTO DISCRETA debajo del casco: suave, corta y neutra,
  que lo apoye sobre la superficie sin dramatismo.
- FONDO BLANCO LIMPIO Y PAREJO: sin viñeteo, sin degradé, sin manchas y
  sin sombras proyectadas encima.
- BALANCE DE BLANCOS NEUTRO: el negro es negro neutro, sin dominante
  cálida ni fría.
- EXPOSICIÓN, CONTRASTE Y TEMPERATURA DE COLOR consistentes con las
  otras tres vistas del mismo set.
- El ACABADO DEL MATERIAL NO SE REPINTA: la calota es NEGRO MATE y
  responde a la luz como mate (realce ancho y difuso que sigue la
  curvatura). Las piezas de plástico brillante que el casco ya tiene
  siguen siendo brillantes: ese contraste entre mate y brillante es del
  producto y se conserva.
[FIN DEL BLOQUE COMÚN DE ILUMINACIÓN]

DEFECTO CONCRETO DE ESTA FOTO: esta vista lateral está MÁS OSCURA Y MÁS
CONTRASTADA que la vista frontal del mismo set. Hay que SUBIRLA al mismo
nivel de exposición que las otras tres y BAJARLE el contraste, abriendo
las sombras de la parte baja de la calota y de la mentonera para que
recuperen detalle, sin quemar la parte alta. El objetivo es que puesta
al lado de las otras tres se lea como la misma sesión de fotos.

CRÍTICO — LAS ZONAS EDITADAS TAMPOCO SE REDIBUJAN:
Que una zona esté en la lista de cambios NO es permiso para rehacerla.
En el visor, lo ÚNICO que cambia es que los restos del film ya no están
y que el material pasó a ser negro opaco: su forma, su borde, su
curvatura, su espesor y su montaje siguen idénticos. En el resto de la
imagen, lo ÚNICO que cambia es cómo cae la luz. Nada se rediseña, nada
se simplifica, nada se reinterpreta.

PROHIBIDO ABSOLUTO:
- Borrar, mover o redibujar cualquier logo "EDGE®" IMPRESO EN LA CALOTA
  visible en esta vista. Ese se queda.
- Dejar el visor como un agujero negro plano, sin borde, sin curvatura y
  sin reflejos.
- Fundir el visor con la calota en una sola masa negra sin línea de
  separación.
- Que se vea ALGO a través del visor: interior, acolchado, abertura de
  los ojos, silueta, sombra o contorno de cualquier cosa.
- Dibujar una cabeza, una cara, ojos, piel, pelo, una persona o un
  maniquí en ninguna parte de la imagen.
- Dejar cualquier resto, fantasma, halo, borde, recorte o sombra de los
  restos del film eliminados, ni sobre el visor ni debajo del negro.
- Tapar los restos del film con el negro en vez de eliminarlos.
- Cambiar el SPOILER: ni su forma, ni su tamaño, ni su extensión, ni su
  perfil, ni su ACABADO BRILLANTE.
- Quitar, mover o cambiar de color el DETALLE ROJO del acolchado
  interior del borde inferior.
- Volver a dibujar CUALQUIER sticker, etiqueta, logo, texto, escudo o
  marca de CERTIFICACIÓN U HOMOLOGACIÓN (DOT, FMVSS, ECE, SNELL,
  etiquetas normativas): regla de negocio, ningún render de este
  catálogo las lleva.
- Agregar texto, logos, sellos, firmas, marcas de agua o gráficos nuevos
  de cualquier tipo.
- Cambiar la geometría, la silueta, las proporciones o el molde del
  casco.
- Cambiar el conteo, la forma, el tamaño o la posición de las
  ventilaciones, la placa del pivote, la línea del flip up o la goma del
  borde inferior.
- Cambiar el ángulo de cámara, el encuadre, el recorte, la escala del
  casco dentro del cuadro o el aspect ratio.
- Cambiar el color base del casco o repintar su acabado.
- Convertir la foto en una ilustración, un render 3D, un dibujo o un
  mockup: sigue siendo la MISMA FOTOGRAFÍA DE PRODUCTO.

VERIFICACIÓN FINAL ANTES DE ENTREGAR — compará tu resultado contra la
imagen adjunta, al lado, y contestá una por una:
1. ¿Desaparecieron el 100% de los restos del film sobre el visor —las
   manchas naranjas y azules y el texto del borde derecho— sin dejar NI
   UN resto, fantasma, halo, borde, recorte ni sombra?
2. ¿La superficie del visor quedó reconstruida continua, sin parche, sin
   costura y sin cambio de textura — y sin ningún relieve ni cambio de
   brillo que delate dónde estaban los restos debajo del negro?
3. ¿El visor es TOTALMENTE OPACO (no se ve absolutamente nada a través
   de él) Y AL MISMO TIEMPO sigue teniendo su BORDE, su CONTORNO, su
   CURVATURA, su ESPESOR y sus REFLEJOS ESPECULARES? ¿Se sigue
   distinguiendo del negro mate de la calota como pieza aparte? Si es un
   agujero negro plano o una masa negra fundida con la calota, está MAL.
4. ¿El logo "EDGE®" impreso en la calota (si es visible en esta vista)
   SIGUE AHÍ, igual que en el original?
5. ¿Cambió algo de la FORMA? Silueta, proporciones, molde, ventilaciones,
   SPOILER (forma, tamaño, extensión y acabado brillante), placa del
   pivote, línea del flip up, goma del borde inferior, detalle rojo del
   acolchado, ángulo, encuadre y escala: ¿todo igual?
6. ¿La luz quedó PAREJA en toda la superficie, con la exposición y el
   contraste al mismo nivel que las otras vistas del set, sin sombras
   cerradas en la parte baja y con el fondo blanco limpio y uniforme?
7. ¿Aparece algún sticker, etiqueta, texto o marca de certificación que
   no estaba pedido? Si aparece algo nuevo, lo inventaste.
Cualquier diferencia que no sean los 3 cambios pedidos es un ERROR:
corregila antes de entregar.
```

</details>

<details><summary>Prompt 3 — Vista TRASERA: quitar los 2 stickers de la calota + iluminación uniforme</summary>

```
Esto es una EDICIÓN PUNTUAL sobre la imagen adjunta, NO una generación
nueva desde cero, NO un render, NO una reinterpretación. La imagen
adjunta es una FOTOGRAFÍA DE PRODUCTO REAL de un casco integral
modular / flip up negro, VISTA TRASERA, sobre fondo blanco. Se devuelve
la MISMA fotografía, del MISMO casco, con el MISMO ángulo y el MISMO
encuadre, con solo los cambios que se enumeran abajo. No inventes nada,
no agregues nada, no rediseñes nada, no cambies el casco.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE IGUAL:
- La FORMA Y LA SILUETA del casco vista desde atrás: mismo molde, mismas
  proporciones, misma curvatura de calota, mismo ancho, mismo alto.
- El SPOILER que cruza la parte alta: misma forma, mismo perfil, misma
  extensión de punta a punta, mismo tamaño y mismo acabado.
- Las SALIDAS DE VENTILACIÓN TRASERAS con sus REJILLAS, en la parte
  baja: mismo conteo, misma forma, misma posición, mismo tamaño y mismo
  dibujo interno de las rejillas.
- La LÍNEA DE SEPARACIÓN DEL FLIP UP y la GOMA DEL BORDE INFERIOR, si
  son visibles en esta vista.
- El ACOLCHADO INTERIOR y cualquier detalle de color que asome por
  abajo.
- El COLOR NEGRO del casco y su ACABADO.
- El ÁNGULO DE CÁMARA, el ENCUADRE, el RECORTE y la ESCALA del casco
  dentro del cuadro.
- El FONDO BLANCO.

CAMBIO 1 — ELIMINAR LOS DOS STICKERS DE LA CALOTA:
Sobre la calota, en la parte alta-central, hay DOS STICKERS PEGADOS que
hay que eliminar por completo:
  a) El STICKER TIPO ESCUDO "EDGE HELMETS", en rojo, azul y blanco,
     centrado sobre la calota.
  b) Debajo, el STICKER RECTANGULAR "DOT / FMVSS NO. 218 / CERTIFIED".
Los dos se van. Y con ellos se va cualquier borde de lámina, brillo
distinto, arruga o pestaña que tengan alrededor.

ESTO SON DOS TAREAS, NO UNA — HACÉ LAS DOS:
  TAREA A — ELIMINAR SIN DEJAR RESTO: ni una letra suelta, ni un tramo
  del escudo, ni un pedazo de marco, ni un fantasma, ni un halo, ni un
  contorno, ni un recorte, ni una sombra, ni un rectángulo más claro o
  más oscuro donde estaba cada sticker. Recorré el perímetro de los dos
  y confirmá que no quedó borde.
  TAREA B — RECONSTRUIR LO QUE VA DEBAJO: debajo de los dos stickers hay
  PINTURA NEGRA DE LA CALOTA. Esa superficie se reconstruye CONTINUA,
  con la MISMA CURVATURA de la calota y con EL REFLEJO DE LUZ QUE LE
  CORRESPONDE A ESA ZONA por su posición en la curva. No es un parche
  negro plano: es superficie curva pintada, que recibe la luz del
  estudio igual que la superficie de al lado, sin costura, sin cambio de
  tono y sin cambio de textura. Si la zona vecina tiene un degradé de
  luz, ese degradé CONTINÚA por encima del área limpiada sin
  interrupción.

CAMBIO 2 — ILUMINACIÓN:
[BLOQUE DE ILUMINACIÓN — IDÉNTICO EN LAS CUATRO VISTAS DEL SET. Este
bloque está redactado con las MISMAS PALABRAS en los cuatro prompts a
propósito: las cuatro fotos tienen que leerse como UN MISMO SET
FOTOGRÁFICO, sacado el mismo día, con el mismo equipo y el mismo
tratamiento. No lo reinterpretes.]

LO ÚNICO QUE CAMBIA ES LA DISTRIBUCIÓN DE LA LUZ SOBRE LAS SUPERFICIES
QUE YA ESTÁN EN LA FOTO. No cambia la geometría, no cambian las
proporciones, no cambia el ángulo, no cambia el encuadre, no cambia el
material ni el acabado, no cambia ninguna pieza de lugar, no cambia el
color base. REILUMINAR NO ES REHACER: es la MISMA fotografía del MISMO
objeto, con la luz mejor repartida.

CÓMO TIENE QUE QUEDAR LA LUZ:
- Luz de estudio SUAVE Y UNIFORME sobre todo el casco, tipo softbox
  grande y envolvente. Sin fuente dura, sin luz puntual, sin flash
  directo.
- SIN ZONAS LAVADAS: ninguna parte de la superficie se va a gris claro
  ni a blanco por sobreexposición.
- SIN CAÍDAS A NEGRO: ningún borde ni ninguna zona se hunde en negro
  plano sin detalle. En TODA la extensión del casco se tiene que leer la
  forma y el material.
- El negro del casco es un NEGRO PAREJO CON DETALLE, de punta a punta,
  bordes incluidos.
- REFLEJOS ESPECULARES SUAVES Y ANCHOS que describan la curvatura de las
  superficies, nunca destellos duros ni puntos de luz quemados.
- SOMBRA DE CONTACTO DISCRETA debajo del casco: suave, corta y neutra,
  que lo apoye sobre la superficie sin dramatismo.
- FONDO BLANCO LIMPIO Y PAREJO: sin viñeteo, sin degradé, sin manchas y
  sin sombras proyectadas encima.
- BALANCE DE BLANCOS NEUTRO: el negro es negro neutro, sin dominante
  cálida ni fría.
- EXPOSICIÓN, CONTRASTE Y TEMPERATURA DE COLOR consistentes con las
  otras tres vistas del mismo set.
- El ACABADO DEL MATERIAL NO SE REPINTA: la calota es NEGRO MATE y
  responde a la luz como mate (realce ancho y difuso que sigue la
  curvatura). Las piezas de plástico brillante que el casco ya tiene
  siguen siendo brillantes: ese contraste entre mate y brillante es del
  producto y se conserva.
[FIN DEL BLOQUE COMÚN DE ILUMINACIÓN]

DEFECTO CONCRETO DE ESTA FOTO: esta vista trasera se lee MÁS BRILLANTE
Y MÁS CONTRASTADA que la frontal y la lateral del mismo set. Ese brillo
extra ES DE LA LUZ, NO DE LA PINTURA: es la MISMA calota negra mate de
las otras vistas, iluminada con una fuente más dura y más directa que
le levanta un especular fuerte. Hay que ABLANDAR Y ENSANCHAR ese
especular hasta que la superficie responda como mate —realce amplio y
difuso siguiendo la curvatura, sin destello duro— y bajar el contraste
al nivel de las otras vistas, de modo que las cuatro se lean como el
MISMO acabado. IMPORTANTE: esto NO es repintar el casco ni cambiarle el
acabado — el acabado ya es el mismo, lo que se corrige es la luz que lo
hacía parecer distinto. NO conviertas la superficie en un mate plano y
apagado sin reflejos: los reflejos suaves siguen estando.

CRÍTICO — LAS ZONAS EDITADAS TAMPOCO SE REDIBUJAN:
Que una zona esté en la lista de cambios NO es permiso para rehacerla.
En la zona donde estaban los stickers, lo ÚNICO que cambia es que los
stickers ya no están: la curvatura de la calota, su material y su
degradé de luz siguen siendo los de la superficie vecina. En el resto de
la imagen, lo ÚNICO que cambia es cómo cae la luz. Nada se rediseña,
nada se simplifica, nada se reinterpreta.

PROHIBIDO ABSOLUTO:
- Dejar cualquier resto, fantasma, halo, borde, recorte, rectángulo o
  sombra de los dos stickers eliminados.
- Reemplazar la zona limpiada por un PARCHE NEGRO PLANO sin curvatura y
  sin reflejo.
- Volver a dibujar CUALQUIER sticker, etiqueta, logo, texto, escudo o
  marca de CERTIFICACIÓN U HOMOLOGACIÓN (DOT, FMVSS, ECE, SNELL,
  etiquetas normativas): regla de negocio, ningún render de este
  catálogo las lleva. En particular, NO vuelvas a poner el sticker
  "DOT / FMVSS NO. 218 / CERTIFIED" ni ninguna versión suya.
- Reemplazar el escudo "EDGE HELMETS" borrado por un logo "EDGE" nuevo,
  ni impreso, ni pintado, ni en relieve. La calota trasera queda LISA y
  SIN NINGUNA MARCA.
- Agregar texto, logos, sellos, firmas, marcas de agua o gráficos nuevos
  de cualquier tipo.
- Cambiar la geometría, la silueta, las proporciones o el molde del
  casco.
- Cambiar el SPOILER: ni su forma, ni su tamaño, ni su extensión de
  punta a punta, ni su perfil.
- Cambiar el conteo, la forma, el tamaño, la posición o el dibujo
  interno de las SALIDAS DE VENTILACIÓN TRASERAS y sus rejillas.
- Cambiar el ángulo de cámara, el encuadre, el recorte, la escala del
  casco dentro del cuadro o el aspect ratio.
- Cambiar el color base del casco o REPINTAR su acabado (lo que se
  corrige es la luz, no la pintura).
- Convertir la foto en una ilustración, un render 3D, un dibujo o un
  mockup: sigue siendo la MISMA FOTOGRAFÍA DE PRODUCTO.

VERIFICACIÓN FINAL ANTES DE ENTREGAR — compará tu resultado contra la
imagen adjunta, al lado, y contestá una por una:
1. ¿Desaparecieron los DOS stickers al 100% —el escudo "EDGE HELMETS" y
   el rectángulo "DOT / FMVSS NO. 218 / CERTIFIED"— sin dejar NI UN
   resto, letra, fantasma, halo, borde, recorte, rectángulo más claro ni
   sombra? Recorré el perímetro de los dos.
2. ¿La superficie de abajo quedó RECONSTRUIDA como pintura negra
   continua con la CURVATURA de la calota y el REFLEJO que le
   corresponde, sin parche plano, sin costura y sin cambio de tono ni de
   textura respecto de la superficie vecina?
3. ¿Cambió algo de la FORMA? Silueta, proporciones, molde, SPOILER
   (forma, tamaño y extensión de punta a punta), salidas de ventilación
   traseras (conteo, forma y rejillas), goma del borde inferior, ángulo,
   encuadre y escala: ¿todo igual?
4. ¿La luz quedó PAREJA en toda la superficie, con el especular ablandado
   y ensanchado, sin destello duro, con el contraste al mismo nivel que
   las otras vistas del set y con el fondo blanco limpio y uniforme?
5. ¿La superficie sigue teniendo REFLEJOS SUAVES que describen la
   curvatura, o quedó un mate plano y apagado sin volumen? Lo segundo es
   un ERROR.
6. ¿Aparece algún sticker, etiqueta, logo, texto o marca de certificación
   que no estaba pedido? Si aparece algo nuevo, lo inventaste.
Cualquier diferencia que no sean los 2 cambios pedidos es un ERROR:
corregila antes de entregar.
```

</details>

<details><summary>Prompt 4 — Vista SUPERIOR: SOLO iluminación (corregir el degradé centro claro → bordes negros)</summary>

```
Esto es una EDICIÓN PUNTUAL sobre la imagen adjunta, NO una generación
nueva desde cero, NO un render, NO una reinterpretación. La imagen
adjunta es una FOTOGRAFÍA DE PRODUCTO REAL de un casco integral
modular / flip up negro, VISTA SUPERIOR (desde arriba), sobre fondo
blanco. Se devuelve la MISMA fotografía, del MISMO casco, con el MISMO
ángulo y el MISMO encuadre. HAY UN SOLO CAMBIO EN ESTA VISTA: LA
ILUMINACIÓN. Nada más se toca. No inventes nada, no agregues nada, no
saques nada, no rediseñes nada.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE IGUAL:
- La FORMA Y LA SILUETA de la calota vista desde arriba: mismo molde,
  mismas proporciones, misma curvatura, mismo contorno.
- Las DOS ENTRADAS DE VENTILACIÓN SUPERIORES CON FORMA ANGULAR: EXACTA-
  MENTE DOS, con su misma forma angular, su mismo tamaño, su misma
  posición y su mismo dibujo interno. Ni una más, ni una menos, ni
  cambiadas de forma.
- El SPOILER que asoma en el BORDE INFERIOR del encuadre: misma forma,
  mismo tamaño y MISMO RECORTE — sigue asomando igual, no se completa,
  no se agranda y no se mueve hacia adentro del cuadro.
- EL LOGO "EDGE" QUE ASOMA EN EL BORDE SUPERIOR, INVERTIDO Y CORTADO: ese
  logo ES DEL PRODUCTO y SE CONSERVA TAL CUAL, con su MISMA POSICIÓN, su
  MISMO TAMAÑO, su MISMA ORIENTACIÓN INVERTIDA y EL MISMO RECORTE por el
  borde del cuadro. NO lo borres, NO lo completes, NO lo enderezes, NO lo
  muevas y NO lo redibujes. Que esté cortado por el encuadre es como es
  la foto, no un defecto a corregir.
- La LÍNEA DE SEPARACIÓN DEL FLIP UP y cualquier otra junta o pieza
  visible desde arriba.
- El COLOR NEGRO del casco y su ACABADO MATE.
- El ÁNGULO DE CÁMARA, el ENCUADRE, el RECORTE y la ESCALA del casco
  dentro del cuadro.
- El FONDO BLANCO.

CAMBIO ÚNICO — ILUMINACIÓN:
[BLOQUE DE ILUMINACIÓN — IDÉNTICO EN LAS CUATRO VISTAS DEL SET. Este
bloque está redactado con las MISMAS PALABRAS en los cuatro prompts a
propósito: las cuatro fotos tienen que leerse como UN MISMO SET
FOTOGRÁFICO, sacado el mismo día, con el mismo equipo y el mismo
tratamiento. No lo reinterpretes.]

LO ÚNICO QUE CAMBIA ES LA DISTRIBUCIÓN DE LA LUZ SOBRE LAS SUPERFICIES
QUE YA ESTÁN EN LA FOTO. No cambia la geometría, no cambian las
proporciones, no cambia el ángulo, no cambia el encuadre, no cambia el
material ni el acabado, no cambia ninguna pieza de lugar, no cambia el
color base. REILUMINAR NO ES REHACER: es la MISMA fotografía del MISMO
objeto, con la luz mejor repartida.

CÓMO TIENE QUE QUEDAR LA LUZ:
- Luz de estudio SUAVE Y UNIFORME sobre todo el casco, tipo softbox
  grande y envolvente. Sin fuente dura, sin luz puntual, sin flash
  directo.
- SIN ZONAS LAVADAS: ninguna parte de la superficie se va a gris claro
  ni a blanco por sobreexposición.
- SIN CAÍDAS A NEGRO: ningún borde ni ninguna zona se hunde en negro
  plano sin detalle. En TODA la extensión del casco se tiene que leer la
  forma y el material.
- El negro del casco es un NEGRO PAREJO CON DETALLE, de punta a punta,
  bordes incluidos.
- REFLEJOS ESPECULARES SUAVES Y ANCHOS que describan la curvatura de las
  superficies, nunca destellos duros ni puntos de luz quemados.
- SOMBRA DE CONTACTO DISCRETA debajo del casco: suave, corta y neutra,
  que lo apoye sobre la superficie sin dramatismo.
- FONDO BLANCO LIMPIO Y PAREJO: sin viñeteo, sin degradé, sin manchas y
  sin sombras proyectadas encima.
- BALANCE DE BLANCOS NEUTRO: el negro es negro neutro, sin dominante
  cálida ni fría.
- EXPOSICIÓN, CONTRASTE Y TEMPERATURA DE COLOR consistentes con las
  otras tres vistas del mismo set.
- El ACABADO DEL MATERIAL NO SE REPINTA: la calota es NEGRO MATE y
  responde a la luz como mate (realce ancho y difuso que sigue la
  curvatura). Las piezas de plástico brillante que el casco ya tiene
  siguen siendo brillantes: ese contraste entre mate y brillante es del
  producto y se conserva.
[FIN DEL BLOQUE COMÚN DE ILUMINACIÓN]

DEFECTO CONCRETO DE ESTA FOTO — ES EL PEOR DEL SET Y HAY QUE NOMBRARLO:
La iluminación de esta vista superior está MUY DESPAREJA. El CENTRO DE
LA CALOTA SE LAVA A GRIS CLARO y LOS BORDES CAEN A NEGRO, con un
DEGRADÉ MARCADO del centro hacia afuera.

ESE DEGRADÉ ES DE LA LUZ, NO DE LA PINTURA. La calota está pintada de un
ÚNICO NEGRO PAREJO en toda su superficie: el gris claro del centro es
una sobreexposición por una fuente cenital demasiado directa, y el negro
de los bordes es la caída de esa misma fuente. NO ES UN EFECTO DE
PINTURA, NO ES UN DEGRADÉ DE DISEÑO, NO ES UN AIRBRUSH Y NO ES UNA
TRANSICIÓN DE COLOR DEL PRODUCTO. Hay que CORREGIRLO:
- El centro BAJA: deja de estar lavado y vuelve a ser negro con detalle,
  con un realce ancho y suave en vez de una mancha gris clara.
- Los bordes SUBEN: dejan de hundirse en negro plano y recuperan
  detalle, forma y material.
- El resultado es una CALOTA DE UN SOLO NEGRO PAREJO de borde a borde,
  con reflejos suaves que describen su curvatura de domo.
- ATENCIÓN, LOS DOS LÍMITES A LA VEZ: no la dejes lavada (defecto
  actual) NI la vuelvas un negro plano y muerto sin volumen (defecto
  opuesto). El objetivo está EN EL MEDIO: negro parejo CON relieve de
  luz suave que se lee como un domo curvo.

CRÍTICO — QUE LA LUZ CAMBIE NO AUTORIZA A REDIBUJAR NADA:
Esta vista NO tiene ningún sticker que quitar, ninguna pieza que agregar
y ninguna pieza que cambiar. Lo ÚNICO que cambia en toda la imagen es
cómo cae la luz sobre las superficies que ya están. Las dos entradas de
ventilación, el spoiler recortado por el borde, el logo "EDGE" invertido
y cortado del borde superior, y la silueta de la calota se conservan
IDÉNTICOS. Nada se rediseña, nada se simplifica, nada se completa y nada
se reinterpreta.

PROHIBIDO ABSOLUTO:
- Borrar, completar, enderezar, mover o redibujar el LOGO "EDGE"
  INVERTIDO Y CORTADO del borde superior. Se queda exactamente como
  está, con su mismo recorte.
- Cambiar el conteo, la forma angular, el tamaño, la posición o el dibujo
  interno de las DOS ENTRADAS DE VENTILACIÓN SUPERIORES. Antes de
  entregar contalas: tienen que ser EXACTAMENTE DOS.
- Completar, agrandar o mover el SPOILER que asoma en el borde inferior:
  sigue asomando con el mismo recorte.
- Interpretar el degradé de luz como un diseño de pintura y "conservarlo"
  o acentuarlo.
- Dejar la calota como un negro plano y muerto, sin reflejos y sin
  volumen.
- Agregar o quitar CUALQUIER sticker, etiqueta, logo, texto, sello,
  firma, marca de agua o gráfico. En particular, NO agregues NINGUNA
  marca de CERTIFICACIÓN U HOMOLOGACIÓN (DOT, FMVSS, ECE, SNELL,
  etiquetas normativas): regla de negocio, ningún render de este
  catálogo las lleva.
- Cambiar la geometría, la silueta, las proporciones o el molde del
  casco.
- Cambiar el ángulo de cámara, el encuadre, el recorte, la escala del
  casco dentro del cuadro o el aspect ratio.
- Cambiar el color base del casco o repintar su acabado.
- Convertir la foto en una ilustración, un render 3D, un dibujo o un
  mockup: sigue siendo la MISMA FOTOGRAFÍA DE PRODUCTO.

VERIFICACIÓN FINAL ANTES DE ENTREGAR — compará tu resultado contra la
imagen adjunta, al lado, y contestá una por una:
1. ¿DESAPARECIÓ el degradé de gris claro en el centro a negro en los
   bordes? ¿La calota quedó de un SOLO NEGRO PAREJO de borde a borde?
2. ¿El centro dejó de estar lavado Y los bordes dejaron de hundirse en
   negro plano, los dos a la vez?
3. ¿La calota sigue teniendo REFLEJOS SUAVES que describen su curvatura
   de domo, o quedó un negro plano y muerto sin volumen? Lo segundo es
   un ERROR tan grave como el degradé original.
4. ¿Hay EXACTAMENTE DOS entradas de ventilación superiores, con su misma
   forma angular, su mismo tamaño y su misma posición? Contalas.
5. ¿El logo "EDGE" del borde superior SIGUE AHÍ, invertido y cortado
   exactamente igual que en el original?
6. ¿El spoiler sigue asomando en el borde inferior con el MISMO recorte,
   sin completarse ni agrandarse?
7. ¿Cambió algo de la FORMA, del ángulo, del encuadre o de la escala?
8. ¿El fondo blanco quedó limpio y parejo, sin viñeteo ni degradé?
9. ¿Apareció algún elemento, sticker, texto o marca que NO estaba en la
   imagen adjunta? Si apareció algo nuevo, lo inventaste.
Cualquier diferencia que no sea el cambio de iluminación es un ERROR:
corregila antes de entregar.
```

</details>

---

## Auditoría anticipada — qué mirar cuando lleguen los resultados

Checklist para el **Agente Auditor**, que **no** puede ser el mismo que generó (regla dura del pipeline).

| # | Chequeo | V1 Frontal | V2 Lateral | V3 Trasera | V4 Superior |
|---|---|---|---|---|---|
| 1 | Stickers eliminados al 100%, sin resto ni fantasma | 🔴 (film completo) | 🔴 (restos del film) | 🔴 (2 stickers) | n/a |
| 2 | Superficie de abajo reconstruida sin parche ni costura | 🔴 (visor) | 🔴 (visor) | 🔴 (pintura curva + reflejo) | n/a |
| 3 | Nada del sticker tapado bajo el negro (relieve/brillo fantasma) | 🔴 **riesgo máximo** | 🔴 | n/a | n/a |
| 4 | Visor **totalmente opaco** (no se ve nada a través) | 🔴 | 🔴 | n/a | n/a |
| 5 | Visor **sigue siendo pieza**: borde, contorno, curvatura, espesor, reflejos | 🔴 **riesgo máximo** | 🔴 **riesgo máximo** | n/a | n/a |
| 6 | El visor no se funde con la calota en una masa negra única | 🔴 | 🔴 **riesgo máximo** | n/a | n/a |
| 7 | Logo "EDGE®" de la calota conservado | 🔴 | 🔴 (si visible) | n/a (no hay) | 🔴 (invertido y cortado) |
| 8 | Ninguna marca de certificación redibujada (DOT/FMVSS/ECE/SNELL) | 🔴 | 🔴 | 🔴 **riesgo máximo** | 🔴 |
| 9 | Geometría intacta: silueta, molde, proporciones, escala | 🔴 | 🔴 | 🔴 | 🔴 |
| 10 | Piezas en su lugar (ventilaciones con conteo, spoiler, pivote, flip up, goma, acolchado) | 🔴 | 🔴 (spoiler brillante) | 🔴 (rejillas traseras) | 🔴 (2 ventilaciones, spoiler recortado) |
| 11 | Ángulo, encuadre, recorte y aspect ratio sin cambios | 🔴 | 🔴 | 🔴 | 🔴 |
| 12 | Luz pareja: sin zonas lavadas y sin caídas a negro | 🔴 | 🔴 | 🔴 | 🔴 **riesgo máximo** |
| 13 | No quedó un negro plano y muerto (defecto opuesto de la reiluminación) | 🔴 | 🔴 | 🔴 **riesgo máximo** | 🔴 **riesgo máximo** |
| 14 | Fondo blanco limpio y parejo, sombra de contacto discreta | 🔴 | 🔴 | 🔴 | 🔴 |
| 15 | **Las 4 juntas se leen como un mismo set** (misma exposición, mismo contraste, mismo acabado, mismo fondo) | 🔴 — se audita con las cuatro puestas una al lado de la otra, no vista por vista | | | |

**El chequeo 15 es el único que no se puede hacer vista por vista.** Hay que poner las cuatro imágenes finales una al lado de la otra y mirarlas como una tira: si alguna salta —más oscura, más contrastada, más brillante, con otro blanco de fondo— hay que reprocesar esa vista, no las cuatro.

---

## Lecciones generalizables que deja este caso

Validadas contra el checklist vigente de `../orquestacion-agentes-paralelos.md` para no duplicar.

### (a) 🆕 Volver OPACO algo transparente es la operación inversa de volverlo transparente, y comparte su trampa

**No está cubierta.** El checklist Tipo A ya tiene el ítem *"hacer TRANSPARENTE algo opaco no es un cambio de color: es REVELAR CONTENIDO QUE NO EXISTE"* (casos 31 y 32), y su segundo blindaje dice que *"volver transparente una pieza no es borrarla"*. Pero **ese ítem está escrito en una sola dirección**. La dirección inversa tiene su propio modo de falla y no está registrada.

**El enunciado:** en los dos sentidos, **la pieza tiene que seguir existiendo con su forma, su borde, su curvatura, su espesor y sus reflejos — lo que cambia es QUÉ DEJA PASAR, no SI ESTÁ**. Cambiar la opacidad de una pieza nunca es eliminarla.

**Por qué la dirección "hacia opaco" necesita su propio texto y no se deduce de la otra:** volver algo opaco le da al generador **un atajo barato para cumplir la instrucción literal**: pintar un agujero negro plano en el lugar de la pieza. Eso satisface "no se ve a través" al 100% y a la vez destruye la pieza. En la dirección contraria el atajo era otro (rellenar el hueco con una cara), así que la prevención también tiene que ser otra. El prompt tiene que escribir el bloque **en dos mitades etiquetadas**: **mitad 1, la pieza sigue existiendo** (forma, contorno, borde perimetral, curvatura, espesor, posición, montaje y **reflejos especulares** — un policarbonato negro sigue siendo una superficie brillante y curva); **mitad 2, opacidad total** (nada a través, ni tenuemente, ni en los bordes, de borde a borde). Y cerrar con la frase que las une: *"un hueco negro plano sin borde y sin reflejos NO es un visor opaco: es un visor borrado"*.

**Dos refuerzos propios de esta dirección, que no tienen equivalente en la otra:**
1. **Si la pieza que se vuelve opaca queda del mismo color que la pieza vecina** (visor negro contra calota negra), hay que pedir explícitamente que **sigan distinguiéndose como dos piezas**, con su línea de borde y su brillo propio. Si no, se funden en una sola masa negra y la silueta del producto se pierde. Es pariente del ítem de *"dos piezas del mismo color"* del checklist, pero acá el color compartido no lo trae la foto: **lo crea la propia edición**.
2. **Si además hay que limpiar stickers sobre la pieza que se vuelve opaca, hay que declarar el ORDEN**: primero eliminar y reconstruir, después opacar. Si no, el generador **tapa los stickers con el negro** en vez de borrarlos y queda un fantasma —relieve, borde, cambio de brillo— visible en cuanto la luz lo cruza. Es la interacción de esta lección con el ítem de *"un borrado son dos tareas"*, y solo aparece cuando los dos cambios caen sobre la misma superficie.

### (b) 🆕 Cuando se piden varias vistas del mismo producto como un SET, el bloque de iluminación tiene que estar redactado con las MISMAS PALABRAS en todos los prompts

**No está cubierta, aunque tiene un vecino cercano.** El checklist Tipo A ya tiene *"toda regla nueva se propaga en el acto a los prompts de TODAS las vistas y colorways del mismo caso"*, pero **ese ítem es sobre CORRECCIÓN**: una regla que evita un defecto conocido hay que copiarla a las demás vistas para no redescubrirlo. Esto es distinto y complementario: acá **no hay ninguna regla correctiva** — es un bloque **puramente descriptivo** (cómo tiene que ser la luz) que igual hay que copiar **literal**, y no por corrección sino por **coherencia visual del conjunto**.

**El enunciado:** cuando el entregable no es una imagen sino un **set** (un carrusel de producto, cuatro vistas de catálogo, una familia de colorways), el pedido de *"que den la misma apreciación"* **no se cumple pidiéndole buena luz a cada vista por separado**. Si cada prompt describe su luz con palabras distintas —aunque las tres descripciones sean correctas—, el generador produce tres interpretaciones distintas y el set no se lee como una familia: parecen fotos sacadas en días distintos. **La coherencia del set es una propiedad del conjunto, y no emerge de optimizar cada pieza por separado.**

**Cómo se implementa:** un **bloque común, copiado sin variar una palabra** en todos los prompts del set, delimitado con marcadores explícitos (`[BLOQUE COMÚN — IDÉNTICO EN LAS N VISTAS]` … `[FIN DEL BLOQUE COMÚN]`) y con la instrucción de **no reinterpretarlo**, más los parámetros que fijan la coherencia dichos en números o en absolutos y no en adjetivos: misma exposición, mismo contraste, misma temperatura de color, mismo fondo, mismo tipo de sombra de contacto, mismo comportamiento del material. Lo único que varía por vista es un **addendum corto** que **nombra el defecto concreto de esa foto** —porque cada foto llega con un defecto distinto y hay que decírselo—, nunca una redescripción del objetivo.

**Y una advertencia que sale del mismo razonamiento:** cuando el set llega con **acabados aparentemente distintos entre vistas** (una se ve mate y otra glossy), hay que **decidir y declarar cuál es el acabado real** y hacer converger las cuatro, en vez de dejar que cada una conserve el suyo. Dejar que cada vista se quede con su acabado aparente es exactamente el resultado que el pedido de set busca evitar. La decisión se declara como **asunción pendiente de confirmación**, no como hecho.

**Corolario de auditoría:** un set tiene un chequeo que **no se puede hacer vista por vista** — hay que poner las N imágenes finales una al lado de la otra y mirarlas como una tira. Una vista puede pasar sus 8 chequeos individuales y aun así romper el set.

---

**Estado:** 🔴 los 4 prompts pendientes de generar · 🟡 tres asunciones pendientes de confirmación del usuario (logo de la calota, acabado real del casco, y el criterio de que reiluminar no cuenta como "cambiar el casco").

**Qué hay que hacer:**
1. **Preguntarle al usuario las tres cosas de la sección de decisiones**, antes de dar por bueno cualquier resultado:
   - ¿el logo "EDGE®" impreso en la calota se conserva (branding del producto) o también se saca?
   - ¿el casco real es negro **mate** o negro **brillante**? (se está asumiendo mate)
   - ¿reiluminar entra dentro de "que el casco no cambie nada"? (se está asumiendo que sí, entendiendo que lo que cambia es solo la distribución de la luz)
2. Correr los **4 prompts, cada uno en sesión aislada** del generador y adjuntando **solo** su imagen (regla de contaminación cruzada, caso Vortex).
3. Auditar con la tabla de la sección de auditoría anticipada, empezando por los chequeos marcados **riesgo máximo**: el visor convertido en agujero negro plano (V1 y V2), el fantasma de sticker debajo del negro (V1), el visor fundido con la calota (V2), la etiqueta DOT redibujada (V3) y el degradé de luz de la superior (V4).
4. **Hacer el chequeo 15 con las cuatro juntas**, en tira, que es el único que valida el pedido de *"que den la misma apreciación"*.
5. **Subir las 4 imágenes de partida como adjunto real** para versionarlas — hoy la descripción de este documento es la única fuente en el repo.

---

**Última actualización:** 2026-07-29 · primer registro del caso. Primer caso del repo donde el pedido es **volver OPACO algo transparente** (la operación inversa de las Simulaciones 31 y 32) y primer caso donde se pide explícitamente que **un conjunto de vistas se lea como un mismo set fotográfico**. Deja **2 lecciones nuevas** para `../orquestacion-agentes-paralelos.md`: (a) volver opaco algo transparente comparte la trampa de la operación inversa —la pieza tiene que seguir existiendo con su forma, su borde y sus reflejos; lo que cambia es qué deja pasar, no si está—, con dos refuerzos propios (que la pieza opacada no se funda con una vecina del mismo color, y el orden obligatorio entre limpiar y opacar cuando los dos cambios caen sobre la misma superficie); y (b) cuando se piden varias vistas como un set, el bloque de iluminación va redactado con las mismas palabras en todos los prompts, porque la coherencia del conjunto no emerge de optimizar cada pieza por separado. Se aplica además la **regla de negocio de la Simulación 30** (ningún render lleva stickers DOT ni marcas de certificación), que acá coincide con el pedido del usuario pero agrega la prohibición explícita de volver a dibujarlas.
