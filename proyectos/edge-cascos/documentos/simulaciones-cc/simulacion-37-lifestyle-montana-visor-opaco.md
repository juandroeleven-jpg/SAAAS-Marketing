# Simulación 37 — Casco modular/flip-up negro mate con visor opaco y LED rojo trasero: 2 fotos lifestyle (montaña de día + estudio oscuro con LED rojo y azul) (Tipo A, geometría intacta + traslado de escena)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

**Pedido del usuario — 2 escenas sobre el mismo casco y la misma foto de referencia:**

- **Escena 1 — montaña:** una **foto lifestyle** con este casco, **de día**, al aire libre, **en una montaña**, con la persona **conduciendo**, e **iluminación ultrarrealista, natural y tenue**.
- **Escena 2 — estudio oscuro con LED:** *"una segunda lifestyle, en fondo de tipo sesión de fotos, con colores LED rojo y azul detrás, pero en un cuarto negro. Que sea la misma posición y todo, pero que el visor siga opaco."*

Tres requisitos duros que el usuario marcó explícitamente, y que valen para **las dos escenas**:

1. **El casco no cambia nada.**
2. **El visor se mantiene opaco.**
3. **No se puede ver el rostro de la persona.**

Es un caso **Tipo A** con la variante de **traslado de escena** que ya se venía trabajando en la [Simulación 29](simulacion-29-tmnt-lifestyle.md) y en la [Simulación 34](simulacion-34-lifestyle-cafeteria-casco-negro.md): no se transfiere ningún diseño gráfico — el objeto ya está terminado y aprobado en la foto de producto, y lo único que cambia es **la escena alrededor**. La foto adjunta del casco es la **única autoridad de forma, color y acabado**; ni la montaña ni el set de estudio aportan absolutamente nada al objeto, solo lo rodean y lo iluminan.

---

## Estado general del caso

| | |
|---|---|
| **Estado** | 🔴 **pendiente de generar** (las 2 escenas) — esta sesión no tiene conectada una herramienta de generación de imagen; los prompts quedan listos para copiar/pegar en Nano Banana Pro |
| **Tipo** | A — geometría intacta + traslado de escena |
| **Escenas** | **2** — (1) montaña de día, conduciendo · (2) estudio oscuro con contraluz LED rojo y azul |
| **Prompts** | **3** — Escena 1: 1 prompt (bloque de vehículo aislado) · Escena 2: 2 prompts, (A) casco solo *(principal)* y (B) con persona *(variante)* |
| **Requisitos duros del usuario** | casco intacto · visor opaco · rostro no visible |
| **Ambigüedades abiertas** | 🟡 **Escena 2: casco solo (A) vs. con persona (B)** — pendiente de confirmación del usuario · *(la de la Escena 1, moto vs. bici, quedó ✅ cerrada el 2026-07-29)* |

### ✅ AMBIGÜEDAD DE LA ESCENA 1 (MONTAÑA) — CERRADA (2026-07-29, confirmada por el usuario): es MOTO

> **Respuesta textual del usuario:** *"moto en la montaña."*
>
> Queda confirmada **la lectura con la que el prompt ya estaba escrito**: la persona va **conduciendo una MOTOCICLETA** por un camino de montaña. **El prompt de la Escena 1 no cambia.**
>
> Se descarta la lectura literal de la frase original (*"como si manejara bici en una montaña"*). La razón por la que se había elegido moto queda confirmada por el usuario: este es un **casco integral modular / flip-up de motocicleta**, y sus tres piezas más distintivas —la **mentonera abatible**, el **visor** y la **luz LED roja del spoiler**— son piezas de casco de moto; en una bicicleta comunicaría el producto equivocado.
>
> *(El `BLOQUE DE VEHÍCULO` sigue aislado en un solo párrafo, pero ya no como preparación para un posible cambio: queda así por prolijidad.)*

### 🟡 AMBIGÜEDAD DE LA ESCENA 2 (ESTUDIO OSCURO CON LED) — PENDIENTE DE CONFIRMACIÓN DEL USUARIO

> **El usuario dijo *"lifestyle"* pero describió un **set de estudio**, y además pidió *"la misma posición y todo"*. Esas dos cosas tiran para lados distintos, y no se elige por cuenta propia — se escriben las dos y el usuario confirma.**
>
> - **(A) El casco solo**, como objeto protagonista sobre una superficie o un soporte, en el cuarto oscuro con el contraluz LED. → **Prompt principal.**
> - **(B) Con una persona** con el casco puesto, en el set. → **Prompt variante.**
>
> **Por qué (A) queda como principal:** el usuario pidió explícitamente *"la misma posición y todo"*, y (A) es la única lectura que permite conservar **literalmente** la vista lateral de la foto de producto — el casco sigue siendo un objeto apoyado, fotografiado desde el costado, exactamente como en el catálogo. En (B) el ángulo del casco pasa a depender de la pose de la cabeza del modelo, que es justo lo que hace difícil que coincida con la referencia. Además, un set de fotografía con contraluz de color es un formato de **producto**, no de lifestyle en sentido estricto.
>
> **Nadie confirmó todavía cuál de las dos es. Antes de dar por bueno un resultado hay que preguntar.** Si el usuario confirma (B), el prompt variante ya está escrito y aplica el mismo bloque de "no se ve el rostro" de la escena de montaña.

---

## El casco (descripción del checkpoint, transcrita para que el prompt tenga contra qué verificar)

Foto de producto de catálogo, **vista lateral**, casco mirando hacia la **izquierda** del encuadre. Casco **integral MODULAR / FLIP UP** — se ve la línea de separación de la **mentonera abatible**.

| Pieza | Cómo está en el checkpoint |
|---|---|
| Calota | **Negro MATE**, lisa, sin gráficos, sin logos visibles en esta vista, sin franjas |
| Mentonera | **Abatible (flip up)**, cerrada/abajo, con su **línea de separación** visible |
| Visor | **BAJADO y ya OPACO / muy oscuro** — no se ve nada a través de él. **No hay que cambiarlo: hay que conservarlo así** |
| Placa del pivote | Placa **circular** del mecanismo del visor, negra, con su **tornillo central** |
| Piezas negras BRILLANTES | El **panel lateral inferior** y el **spoiler trasero** — contrastan con el mate de la calota |
| Spoiler trasero | En la parte alta-trasera, y **sobre él una luz LED ROJA ENCENDIDA: tres puntos rojos alineados**. Es una **pieza real del producto**, tiene que seguir ahí y encendida |
| Ventilación superior | Con **listones**, en la parte alta de la calota |
| Borde inferior | **Goma negra perimetral** |

**Artefactos de maquetación que NO pertenecen al producto:** la imagen de referencia es un **archivo de maquetación** y trae, además del casco, **formas diagonales decorativas de fondo**, una **línea guía punteada vertical** sobre el margen izquierdo, **barras negras** en el borde inferior y, abajo a la derecha, una **tarjeta con "HOMOLOGACÓN / DOT / FNVSS 510"** que pertenece a otra pieza del catálogo. **Nada de eso es parte del producto y nada de eso debe aparecer en el resultado.** Es el mismo tipo de artefacto ya registrado en la [Simulación 31](simulacion-31-casco-bob-esponja-visor-transparente.md) (guía punteada vertical), la [Simulación 32](simulacion-32-visor-transparente-4k-laterales.md) (artefactos de captura) y la [Simulación 34](simulacion-34-lifestyle-cafeteria-casco-negro.md) (línea punteada + formas diagonales).

> 🔤 Nota al margen: la tarjeta de la referencia dice **"HOMOLOGACÓN"**, sin la I — es la misma falta de ortografía de la pieza original del cliente ya registrada en la [Simulación 12](simulacion-12-hero-verificacion.md). Acá no hay que corregirla: hay que **eliminar la tarjeta entera**, no arreglarle el texto.

---

## Escena 1 — Foto lifestyle conduciendo en la montaña, de día, visor opaco, rostro no visible

<details><summary>Prompt Escena 1 — montaña de día (copiar/pegar en Nano Banana Pro)</summary>

```
Genera una FOTOGRAFÍA REAL tipo lifestyle en 4K, ultra nítida, formato
horizontal (apaisado, relación aproximada 3:2 o 16:9), de una persona
CONDUCIENDO por un camino de montaña, de día, con el casco de la foto
adjunta PUESTO y CERRADO.

ADVERTENCIA MÁXIMA — LEER PRIMERO: EL CASCO NO CAMBIA ABSOLUTAMENTE
NADA. Ni su geometría, ni su forma, ni sus proporciones, ni su color,
ni su acabado, ni la posición de ninguna de sus piezas. Lo único que
cambia en esta imagen es el ENTORNO, la ILUMINACIÓN y la PERSONA — el
casco es el mismo objeto físico, solo re-iluminado y fotografiado en un
escenario nuevo, nunca rediseñado ni reinterpretado.

AUTORIDAD DE FORMA — LA FOTO ADJUNTA DEL CASCO ES LA ÚNICA FUENTE DE
GEOMETRÍA, COLOR Y ACABADO. Nada de la escena nueva, ni tu propio
criterio sobre "cómo suele ser un casco de moto", puede modificar el
objeto. El casco de esta imagen tiene que ser una copia EXACTA, pieza
por pieza, del casco de la foto adjunta. Enumerado explícito de lo que
NO puede cambiar:
- TIPO DE CASCO: integral MODULAR / FLIP UP, con la LÍNEA DE SEPARACIÓN
  DE LA MENTONERA ABATIBLE visible, en su recorrido y posición exactos.
  La mentonera está CERRADA / ABAJO.
- CALOTA: negro MATE, lisa. Sin gráficos, sin logos, sin texto, sin
  franjas, sin degradés, sin textura de fibra de carbono, sin brillo
  glossy. Mate y lisa, punto.
- VISOR: BAJADO y OPACO (ver el bloque dedicado más abajo — es el punto
  más importante de este prompt junto con el del rostro).
- PLACA CIRCULAR DEL MECANISMO DE PIVOTE del visor: negra, redonda, con
  su TORNILLO CENTRAL visible, en su posición exacta.
- LUZ LED ROJA ENCENDIDA SOBRE EL SPOILER TRASERO: TRES PUNTOS ROJOS
  ALINEADOS, encendidos y emitiendo luz roja. Esto NO es un reflejo, NO
  es un destello de la foto de estudio y NO es un artefacto: es una
  PIEZA REAL DEL PRODUCTO. Está en el resultado final, en el mismo
  lugar, con los mismos TRES puntos —ni dos, ni cuatro— y ENCENDIDA.
  Contalos antes de entregar. Eliminarla es un error grave.
- CONTRASTE DE ACABADOS — MATE vs. BRILLANTE: la CALOTA es MATE; el
  PANEL LATERAL INFERIOR y el SPOILER TRASERO son NEGRO BRILLANTE. Son
  dos acabados distintos sobre el mismo color negro, y ese contraste
  entre superficies mate y superficies brillantes es parte del objeto y
  se conserva. No unifiques todo en mate. No unifiques todo en
  brillante.
- VENTILACIÓN SUPERIOR CON LISTONES en la parte alta de la calota, con
  la misma cantidad y la misma forma de listones.
- BORDE INFERIOR: goma negra perimetral.
No inventes, no "mejores", no agregues ni quites ninguna pieza, ni un
tornillo, ni una ranura, ni un borde, ni una toma de aire. Si dudás de
cómo se ve un detalle, copiá exactamente lo que se ve en la foto
adjunta, no lo que "normalmente" tendría un casco de este estilo.

CRÍTICO — EL VISOR SIGUE TOTALMENTE OPACO, Y SIGUE SIENDO UNA PIEZA
FÍSICA REAL. Declarado EN POSITIVO, porque es el punto donde este tipo
de casco falla siempre. Las dos mitades de esta instrucción valen lo
mismo:
(1) OPACIDAD: el visor está BAJADO y es TOTALMENTE OPACO. No se ve
    absolutamente nada a través de él: ni el interior del casco, ni el
    acolchado, ni una cabeza, ni un rostro, ni una sombra, ni una
    silueta insinuada. Es un policarbonato ahumado al 100 %, no
    translúcido, no semitransparente.
(2) MATERIALIDAD: OPACO NO SIGNIFICA PLANO. El visor SIGUE EXISTIENDO
    COMO PIEZA FÍSICA y conserva:
    - su FORMA y su recorrido exactos, los mismos de la foto adjunta;
    - su BORDE y su CONTORNO, con la junta o goma perimetral donde
      apoya contra la carcasa;
    - su CURVATURA, con el volumen de una superficie curva real;
    - su ESPESOR / CANTO visible en el borde, con el grosor del
      plástico inyectado;
    - y sus REFLEJOS ESPECULARES: es una superficie oscura pulida y
      REFLEJA LA MONTAÑA — el cielo, la línea del horizonte, las
      laderas, la vegetación, la luz del día — en reflejos suaves,
      alargados y deformados por su curvatura.
    NO es un agujero negro. NO es una mancha negra plana. NO es una
    silueta vectorial recortada. Es un visor real, oscuro y reflectante,
    fotografiado con luz natural.
Esta es exactamente la misma lógica de las lecciones de
`simulacion-31-casco-bob-esponja-visor-transparente.md` y
`simulacion-32-visor-transparente-4k-laterales.md`, aplicada al revés:
allá se pedía volver TRANSPARENTE un visor opaco y la regla era que
"volver transparente una pieza no es borrarla — conserva su forma, su
borde, su curvatura, su espesor y sus reflejos especulares". Acá el
visor se queda OPACO y la regla es la misma: la opacidad es una
propiedad del MATERIAL, no una licencia para dibujar una forma negra
sin volumen. Defecto real ya vivido:
`simulacion-29-tmnt-lifestyle.md`, Intento 4, defecto 1 — el visor
salió como una forma negra plana tipo caricatura, sin material.

CRÍTICO — NO SE VE EL ROSTRO DE LA PERSONA. Declarado EN POSITIVO
primero, y recién después en negativo:
- EN POSITIVO: la persona lleva el casco PUESTO y CERRADO — la
  MENTONERA ABATIBLE está ABAJO y el VISOR está BAJADO. Por lo tanto,
  lo que se ve en la abertura de los ojos es LA SUPERFICIE OPACA DEL
  VISOR y NADA MÁS: una superficie oscura, curva, con los reflejos de
  la montaña descritos arriba. El casco cerrado es lo que resuelve el
  encuadre — no hace falta ningún recurso extra, ni recortar la cabeza,
  ni tapar con un objeto, ni desenfocar la cara.
- EN NEGATIVO, como refuerzo: está PROHIBIDO que aparezca cualquier
  rasgo facial, ojos, cejas, nariz, boca, mentón, piel visible de la
  cara, una silueta o sombra de rostro insinuada por detrás del visor,
  o un reflejo con forma de rostro sobre el visor. Ninguna de esas
  cosas existe en esta imagen.
Defecto real ya vivido: `simulacion-29-tmnt-lifestyle.md`, Intento 1 —
el visor salió transparente y se alcanzaba a ver a la persona adentro,
que es justo lo que el usuario no quiere.

BLOQUE DE VEHÍCULO: la persona va CONDUCIENDO UNA MOTOCICLETA por un
camino o ruta de montaña. Se la ve sobre la moto, en posición de
conducción, con las manos en el manubrio. La moto puede verse entera o
parcialmente según el encuadre, pero se entiende claramente que está
manejando y en movimiento. Sin logos ni marcas identificables en la
moto.

ESCENA: DE DÍA, AL AIRE LIBRE, EN LA MONTAÑA. Un camino o ruta de
montaña que sube o serpentea, con vegetación a los costados (pasto,
arbustos, árboles), formaciones de ROCA visibles, y un HORIZONTE DE
MONTAÑAS al fondo, en capas, con la profundidad atmosférica propia de
un paisaje de altura. La persona lleva ropa de moto coherente: campera
de moto, guantes. El casco es el elemento nítido y el punto de atención
de la foto; el fondo puede tener un leve desenfoque de movimiento o de
profundidad de campo, sin competir con el casco.
- Sin logos de marcas reales, sin carteles con texto legible, sin texto
  superpuesto, sin marca de agua.

ILUMINACIÓN — LUZ NATURAL DE DÍA, TENUE Y DIFUSA, ULTRARREALISTA:
- Es DE DÍA y la luz es NATURAL: cielo cubierto/velado o sol bajo
  (primera hora de la mañana o última de la tarde). NO es sol duro de
  mediodía, NO hay luz artificial, NO hay flash, NO hay iluminación de
  estudio.
- SOMBRAS SUAVES, de borde difuso, sin negros aplastados ni altas luces
  quemadas. CONTRASTE MODERADO. TEMPERATURA DE COLOR NATURAL, ni
  virada al naranja de postal ni al azul frío.
- ULTRARREALISTA: el resultado es una FOTOGRAFÍA tomada con cámara —
  con su profundidad de campo, su grano fino y su rango dinámico
  reales. NO es un render 3D, NO es una ilustración, NO es arte
  digital, NO es una imagen de videojuego, NO es un collage.
- EL CASCO RECIBE EXACTAMENTE LA MISMA LUZ QUE EL RESTO DE LA ESCENA:
  misma dirección, misma dureza, misma temperatura de color que la
  persona, la moto, el camino y el paisaje.

INTEGRACIÓN EN LA ESCENA — EL CASCO ES UN OBJETO FÍSICO DENTRO DE ESTA
FOTO, NO UN RECORTE PEGADO ENCIMA. Este bloque es el que decide si la
imagen se lee como real:
- El casco RECIBE la luz del ambiente de la montaña, con la misma
  dirección y la misma temperatura de color que todo lo demás.
- El casco PROYECTA SOMBRA sobre los hombros, el cuello y la campera de
  la persona, y RECIBE sombra y rebote de luz del entorno (por ejemplo,
  el verde de la vegetación o el gris de la roca rebotando suavemente
  en su parte baja).
- La CALOTA MATE devuelve un realce de luz SUAVE Y DIFUSO que sigue su
  curvatura — nunca un brillo especular duro, porque es mate.
- Las PIEZAS NEGRAS BRILLANTES (panel lateral inferior y spoiler
  trasero) SÍ devuelven REFLEJOS ESPECULARES NÍTIDOS, y en esos
  reflejos se ve LA MONTAÑA: el cielo, el horizonte, las laderas, la
  vegetación.
- El VISOR OPACO, por ser una superficie oscura pulida, TAMBIÉN REFLEJA
  LA MONTAÑA, en reflejos tenues y alargados deformados por su
  curvatura, sin perder ni un poco de su opacidad.
- La LUZ LED ROJA del spoiler, al estar encendida, aporta un leve halo
  rojo sobre la superficie negra brillante que la rodea.
PROHIBIDO que cualquiera de estas superficies siga reflejando EL FONDO
BLANCO DEL ESTUDIO de la foto de producto, o un reflejo genérico de
estudio. Lo que se conserva del checkpoint es el MATERIAL y su
comportamiento (qué tan mate, qué tan especular, cómo se curva el
reflejo); lo que CAMBIA es el CONTENIDO de ese reflejo, que ahora es la
montaña. Si el visor o las piezas brillantes siguen reflejando un fondo
liso de estudio, el casco se lee como un recorte pegado sobre la cabeza
de la persona por más que su forma sea perfecta.

LIMPIEZA DE LA REFERENCIA — LO QUE ES MAQUETACIÓN NO EXISTE EN LA
ESCENA NUEVA. La foto adjunta del casco es un ARCHIVO DE MAQUETACIÓN y
trae elementos que NO son parte del producto:
- una LÍNEA GUÍA PUNTEADA VERTICAL sobre el margen izquierdo,
- FORMAS DIAGONALES DECORATIVAS de fondo,
- BARRAS NEGRAS en el borde inferior,
- una TARJETA abajo a la derecha con el texto "HOMOLOGACÓN / DOT /
  FNVSS 510", que pertenece a otra pieza del catálogo,
- y el FONDO BLANCO DE ESTUDIO.
NINGUNO de los cinco aparece en la imagen final. No hay ninguna línea
punteada, ninguna guía, ninguna marca de recorte, ninguna forma
geométrica decorativa flotando, ninguna barra negra, ninguna tarjeta,
ningún texto de homologación ni certificación, y ningún resto del fondo
blanco de estudio. El fondo de esta imagen es la montaña y nada más.

PROHIBIDO ABSOLUTO:
- Cambiar la geometría, el color, el acabado o cualquier detalle físico
  del casco respecto de la foto adjunta, por más chico que sea.
- Agregar gráficos, logos, texto, franjas, degradés, stickers o textura
  de carbono sobre la calota — es negra mate y lisa.
- Cambiar el MATE de la calota por brillante/glossy, o el BRILLANTE del
  panel lateral inferior y del spoiler por mate. El contraste entre los
  dos acabados se conserva.
- ELIMINAR, APAGAR, MOVER o CAMBIAR DE COLOR la LUZ LED ROJA del
  spoiler, o cambiar la cantidad de puntos. Son TRES puntos rojos
  alineados y ENCENDIDOS. No la interpretes como un reflejo ni como un
  artefacto de la foto de producto.
- Levantar el visor, abrirlo, quitarlo, volverlo transparente,
  translúcido, ahumado claro o de cualquier otro color.
- Dibujar el visor como una forma negra plana, vectorial o sin
  material, sin borde, sin canto, sin curvatura y sin reflejos.
- Abrir o levantar la MENTONERA ABATIBLE — está cerrada, abajo.
- Mostrar el rostro, los ojos, la boca, la piel de la cara, una silueta
  de cara insinuada detrás del visor o un reflejo con forma de rostro.
- Omitir la placa circular del pivote con su tornillo, la ventilación
  superior con listones, la línea de la mentonera abatible o la goma
  negra del borde inferior.
- Alargar, estirar o achatar la proporción de la calota para que
  "entre" mejor en la cabeza de la persona.
- Usar sol duro de mediodía, luz de estudio, flash, luz artificial o
  una paleta virada/de postal — la luz es natural, de día, tenue y
  difusa.
- Entregar un render 3D, una ilustración, arte digital, una imagen tipo
  videojuego o un collage — es una FOTOGRAFÍA.
- Dibujar la línea punteada de maquetación, las formas diagonales, las
  barras negras, la tarjeta "HOMOLOGACÓN / DOT / FNVSS 510" o el fondo
  blanco de estudio.
- Poner logos de marcas reales, carteles con texto legible, texto
  superpuesto o marca de agua.

VERIFICACIÓN FINAL — ANTES DE ENTREGAR, CHEQUEÁ ESTAS 8 COSAS:
1. ¿El VISOR sigue 100 % OPACO —no se ve absolutamente nada a través de
   él— y a la vez tiene BORDE, CANTO, CURVATURA y REFLEJOS, en vez de
   ser una mancha negra plana?
2. ¿Se ve algún rasgo de CARA —ojos, boca, nariz, piel, silueta
   insinuada o reflejo con forma de rostro—? No debe haber ninguno.
3. ¿La LUZ LED ROJA sigue ENCENDIDA sobre el spoiler? ¿Son EXACTAMENTE
   TRES puntos rojos alineados? Contalos.
4. ¿Se mantiene el CONTRASTE MATE / BRILLANTE — calota mate, panel
   lateral inferior y spoiler brillantes?
5. ¿Cambió algo de la FORMA o de alguna PIEZA respecto de la foto
   adjunta: la línea de la mentonera abatible, la placa circular del
   pivote con su tornillo, la ventilación superior con listones, la
   goma negra del borde inferior, la proporción de la calota?
6. ¿Quedó algún ARTEFACTO DE MAQUETACIÓN — línea punteada, formas
   diagonales, barras negras, la tarjeta "HOMOLOGACÓN / DOT / FNVSS
   510", el fondo blanco de estudio? No debe haber ninguno.
7. ¿Los REFLEJOS del visor y de las piezas brillantes corresponden a LA
   MONTAÑA (cielo, horizonte, laderas, vegetación) y NO al fondo blanco
   del estudio ni a un reflejo genérico?
8. ¿La luz es NATURAL, DE DÍA, TENUE Y DIFUSA, con sombras suaves y
   contraste moderado, y el casco recibe la MISMA luz que el resto de
   la escena? ¿Se lee como FOTOGRAFÍA y no como render?

Orden de imágenes en el payload: la foto real del casco (checkpoint,
autoridad final de geometría, color y acabado) — manda sobre cualquier
otro detalle. Toda la escena de la montaña se genera a partir del texto
de arriba.
```

</details>

**Estado:** 🔴 pendiente de generar. **Sin bloqueos:** el vehículo quedó ✅ confirmado como **moto** por el usuario el 2026-07-29 (*"moto en la montaña"*) y **el prompt no cambió** — ya estaba escrito con esa lectura.

**Qué hay que hacer:**
1. Correr el prompt y auditar el resultado con los **8 chequeos de la verificación final**.
2. Subir la foto real del casco como adjunto del repo para versionarla.

---

## Escena 2 — Set de fotografía en un cuarto negro, con contraluz LED rojo y azul

Mismo casco, misma foto de referencia lateral, mismos tres requisitos duros. Lo que cambia respecto de la Escena 1 es el **entorno** y la **iluminación**: cuarto oscuro, paredes y fondo negros, y detrás del casco **luces LED de color rojo y azul** haciendo contraluz, tipo sesión de fotos moody / editorial.

**El punto más delicado de esta escena, y el que la distingue de la de montaña:** la escena tiene **luces LED rojas propias**, y el casco tiene **su propia luz LED roja** en el spoiler. Son cosas distintas y el prompt tiene que separarlas explícitamente, porque el riesgo concreto es que el generador **absorba la pieza del producto dentro de la iluminación de la escena** y la pierda, leyéndola como un reflejo del contraluz rojo.

### Prompt principal — Lectura (A): el casco solo, sin persona

<details><summary>Prompt Escena 2 (A) — casco solo en el cuarto negro con LED rojo y azul</summary>

```
Genera una FOTOGRAFÍA REAL de producto tipo sesión de fotos / editorial
en 4K, ultra nítida, formato horizontal o 4:5, del casco de la foto
adjunta, SOLO (sin persona), en un CUARTO NEGRO con contraluz de LUCES
LED ROJAS Y AZULES detrás.

ADVERTENCIA MÁXIMA — LEER PRIMERO: EL CASCO NO CAMBIA ABSOLUTAMENTE
NADA. Ni su geometría, ni su forma, ni sus proporciones, ni su color,
ni su acabado, ni la posición de ninguna de sus piezas. Lo único que
cambia en esta imagen es el ENTORNO y la ILUMINACIÓN — el casco es el
mismo objeto físico, solo re-iluminado y fotografiado en un escenario
nuevo, nunca rediseñado ni reinterpretado.

CRÍTICO — LA MISMA POSICIÓN Y TODO: MISMO ÁNGULO, MISMA POSE, MISMO
ENCUADRE QUE LA FOTO DE PRODUCTO ADJUNTA. El usuario pidió
textualmente "la misma posición y todo". El casco se ve en VISTA
LATERAL, de costado, MIRANDO HACIA LA IZQUIERDA del encuadre — el mismo
punto de vista, la misma altura de cámara y el mismo grado de rotación
de la foto adjunta. NO lo gires para "mostrar mejor" otro lado, NO lo
pongas en 3/4, NO lo pongas de frente, NO lo pongas de atrás, NO lo
mires desde arriba ni desde abajo. "Parecido" no alcanza: tiene que ser
verificable comparando lado a lado con la foto adjunta. Lo único que
cambia es el ENTORNO y la ILUMINACIÓN.

AUTORIDAD DE FORMA — LA FOTO ADJUNTA DEL CASCO ES LA ÚNICA FUENTE DE
GEOMETRÍA, COLOR Y ACABADO. Nada de la escena nueva, ni tu propio
criterio sobre "cómo suele ser un casco de moto", puede modificar el
objeto. El casco de esta imagen tiene que ser una copia EXACTA, pieza
por pieza, del casco de la foto adjunta. Enumerado explícito de lo que
NO puede cambiar:
- TIPO DE CASCO: integral MODULAR / FLIP UP, con la LÍNEA DE SEPARACIÓN
  DE LA MENTONERA ABATIBLE visible, en su recorrido y posición exactos.
  La mentonera está CERRADA / ABAJO.
- CALOTA: negro MATE, lisa. Sin gráficos, sin logos, sin texto, sin
  franjas, sin degradés, sin textura de fibra de carbono, sin brillo
  glossy. Mate y lisa, punto.
- VISOR: BAJADO y OPACO (ver el bloque dedicado más abajo).
- PLACA CIRCULAR DEL MECANISMO DE PIVOTE del visor: negra, redonda, con
  su TORNILLO CENTRAL visible, en su posición exacta.
- LUZ LED ROJA ENCENDIDA SOBRE EL SPOILER TRASERO (ver el bloque
  dedicado más abajo — en esta escena es el punto más delicado).
- CONTRASTE DE ACABADOS — MATE vs. BRILLANTE: la CALOTA es MATE; el
  PANEL LATERAL INFERIOR y el SPOILER TRASERO son NEGRO BRILLANTE. Son
  dos acabados distintos sobre el mismo color negro, y ese contraste se
  conserva. No unifiques todo en mate. No unifiques todo en brillante.
  En una escena oscura con contraluz de color, esta diferencia es lo
  que da volumen al objeto: el mate absorbe y difunde la luz de color,
  el brillante la devuelve en reflejos nítidos.
- VENTILACIÓN SUPERIOR CON LISTONES en la parte alta de la calota, con
  la misma cantidad y la misma forma de listones.
- BORDE INFERIOR: goma negra perimetral.
No inventes, no "mejores", no agregues ni quites ninguna pieza, ni un
tornillo, ni una ranura, ni un borde, ni una toma de aire. Si dudás de
cómo se ve un detalle, copiá exactamente lo que se ve en la foto
adjunta, no lo que "normalmente" tendría un casco de este estilo.

CRÍTICO — LA LUZ LED ROJA DEL SPOILER ES UNA PIEZA DEL CASCO, NO UN
EFECTO DE LA ILUMINACIÓN DE LA ESCENA. Este bloque existe porque en
esta escena hay LUCES LED ROJAS EN EL FONDO, y el riesgo concreto es
que confundas la pieza con la escena y la elimines:
- El casco tiene, SOBRE EL SPOILER TRASERO, una LUZ LED ROJA ENCENDIDA
  formada por TRES PUNTOS ROJOS ALINEADOS. Es una PIEZA FÍSICA REAL DEL
  PRODUCTO, fabricada, montada sobre el spoiler, que EMITE luz roja
  propia.
- NO es un reflejo del contraluz rojo de la escena. NO es un destello.
  NO es un artefacto de la foto de producto. NO es parte de la
  iluminación del set.
- Está en el resultado final, en el mismo lugar del spoiler, con los
  mismos TRES puntos —ni dos, ni cuatro— y ENCENDIDA. Contalos antes de
  entregar.
- Tiene que DISTINGUIRSE CLARAMENTE de las luces LED rojas del fondo:
  es una fuente puntual, chica, nítida, adherida a la superficie del
  spoiler y en foco junto con el casco, mientras que las luces de la
  escena están DETRÁS, difusas y fuera de foco. Se leen como dos cosas
  distintas.
Eliminarla, apagarla, fundirla con el contraluz rojo del fondo o
"resolverla" como un brillo de la escena es un error grave.

CRÍTICO — EL VISOR SIGUE TOTALMENTE OPACO, Y SIGUE SIENDO UNA PIEZA
FÍSICA REAL. Declarado EN POSITIVO. Las dos mitades valen lo mismo:
(1) OPACIDAD: el visor está BAJADO y es TOTALMENTE OPACO. No se ve
    absolutamente nada a través de él: ni el interior del casco, ni el
    acolchado, ni una cabeza, ni un rostro, ni una sombra, ni una
    silueta insinuada. Es un policarbonato ahumado al 100 %, no
    translúcido, no semitransparente.
(2) MATERIALIDAD: OPACO NO SIGNIFICA PLANO. El visor SIGUE EXISTIENDO
    COMO PIEZA FÍSICA y conserva:
    - su FORMA y su recorrido exactos, los mismos de la foto adjunta;
    - su BORDE y su CONTORNO, con la junta o goma perimetral donde
      apoya contra la carcasa;
    - su CURVATURA, con el volumen de una superficie curva real;
    - su ESPESOR / CANTO visible en el borde, con el grosor del
      plástico inyectado;
    - y sus REFLEJOS ESPECULARES: es una superficie oscura pulida y
      REFLEJA LAS LUCES LED ROJAS Y AZULES DEL SET y la penumbra del
      cuarto negro, en franjas de luz de color alargadas, suaves y
      deformadas por su curvatura.
    NO es un agujero negro. NO es una mancha negra plana. NO es una
    silueta vectorial recortada. Es un visor real, oscuro y reflectante,
    fotografiado en un set con luz de color.
Esta es exactamente la misma lógica de las lecciones de
`simulacion-31-casco-bob-esponja-visor-transparente.md` y
`simulacion-32-visor-transparente-4k-laterales.md`, aplicada al revés:
allá se pedía volver TRANSPARENTE un visor opaco y la regla era que
"volver transparente una pieza no es borrarla — conserva su forma, su
borde, su curvatura, su espesor y sus reflejos especulares". Acá el
visor se queda OPACO y la regla es la misma: la opacidad es una
propiedad del MATERIAL, no una licencia para dibujar una forma negra
sin volumen. Defecto real ya vivido:
`simulacion-29-tmnt-lifestyle.md`, Intento 4, defecto 1 — el visor
salió como una forma negra plana tipo caricatura, sin material. Ojo
especial en esta escena: sobre un fondo negro, un visor negro sin
reflejos desaparece directamente del cuadro.

ESCENA: un SET DE FOTOGRAFÍA en un CUARTO NEGRO — paredes, piso y fondo
NEGROS o casi negros, sin muebles, sin decoración, sin textura
reconocible. El casco apoyado sobre una superficie oscura o sobre un
soporte discreto de producto, en el centro del encuadre, como objeto
protagonista. DETRÁS del casco, LUCES LED DE COLOR haciendo CONTRALUZ:
ROJO de un lado y AZUL del otro, en tiras o paneles LED fuera de foco,
que tiñen el fondo negro con halos de color y recortan la silueta del
casco. Estética de sesión de fotos moody / editorial de producto.
- Sin logos de marcas reales, sin carteles con texto legible, sin texto
  superpuesto, sin marca de agua.

ILUMINACIÓN — CONTRALUZ LED DE COLOR SOBRE FONDO NEGRO, ULTRARREALISTA:
- Iluminación LOW-KEY: la mayor parte de la imagen es negro profundo, y
  la luz de color trabaja como CONTRALUZ / RIM LIGHT recortando el
  contorno superior y trasero del casco.
- Las dos fuentes son de COLOR: una ROJA y una AZUL, ubicadas DETRÁS y
  a los costados del casco, fuera de foco. El rojo y el azul se mezclan
  suavemente sobre el fondo negro, con degradés y halos, sin bandas
  duras.
- Sobre el casco hay además un realce frontal muy tenue —apenas lo
  suficiente para que el objeto no quede en silueta pura y se lean sus
  piezas, sus acabados y su geometría. El casco NO es una silueta
  negra: se distinguen la calota, la mentonera, el visor, el pivote, la
  ventilación y el spoiler.
- ULTRARREALISTA: el resultado es una FOTOGRAFÍA tomada con cámara —
  con su profundidad de campo, su grano fino y su rango dinámico
  reales. NO es un render 3D, NO es una ilustración, NO es arte
  digital, NO es una imagen de videojuego, NO es un collage.

INTEGRACIÓN EN LA ESCENA — EL CASCO ES UN OBJETO FÍSICO DENTRO DE ESTA
FOTO, NO UN RECORTE PEGADO ENCIMA. Este bloque es el que decide si la
imagen se lee como real:
- El casco RECIBE la luz del set: el contraluz rojo y azul le toca el
  contorno superior y trasero, con la misma dirección y la misma
  temperatura de color que el resto de la escena.
- El casco APOYA sobre la superficie oscura y PROYECTA SU SOMBRA DE
  CONTACTO sobre ella, con contacto real entre la goma del borde
  inferior y la superficie. No flota.
- La CALOTA MATE devuelve un realce de luz SUAVE Y DIFUSO que sigue su
  curvatura, teñido de rojo de un lado y de azul del otro — nunca un
  brillo especular duro, porque es mate.
- Las PIEZAS NEGRAS BRILLANTES (panel lateral inferior y spoiler
  trasero) SÍ devuelven REFLEJOS ESPECULARES NÍTIDOS de las luces LED
  rojas y azules, con sus bordes definidos.
- El VISOR OPACO, por ser una superficie oscura pulida, TAMBIÉN REFLEJA
  las luces LED rojas y azules y la penumbra del cuarto, en franjas
  alargadas y deformadas por su curvatura, sin perder ni un poco de su
  opacidad.
PROHIBIDO que cualquiera de estas superficies siga reflejando EL FONDO
BLANCO DEL ESTUDIO de la foto de producto, o un reflejo genérico de
estudio claro. Lo que se conserva del checkpoint es el MATERIAL y su
comportamiento (qué tan mate, qué tan especular, cómo se curva el
reflejo); lo que CAMBIA es el CONTENIDO de ese reflejo, que ahora es el
cuarto negro con sus LED rojos y azules. Si el visor o las piezas
brillantes siguen reflejando un fondo blanco liso, el casco se lee como
un recorte pegado por más que su forma sea perfecta.

LIMPIEZA DE LA REFERENCIA — LO QUE ES MAQUETACIÓN NO EXISTE EN LA
ESCENA NUEVA. La foto adjunta del casco es un ARCHIVO DE MAQUETACIÓN y
trae elementos que NO son parte del producto:
- una LÍNEA GUÍA PUNTEADA VERTICAL sobre el margen izquierdo,
- FORMAS DIAGONALES DECORATIVAS de fondo,
- BARRAS NEGRAS en el borde inferior,
- una TARJETA abajo a la derecha con el texto "HOMOLOGACÓN / DOT /
  FNVSS 510", que pertenece a otra pieza del catálogo,
- y el FONDO BLANCO DE ESTUDIO.
NINGUNO de los cinco aparece en la imagen final. No hay ninguna línea
punteada, ninguna guía, ninguna marca de recorte, ninguna forma
geométrica decorativa flotando, ninguna barra negra, ninguna tarjeta,
ningún texto de homologación ni certificación, y ningún resto del fondo
blanco de estudio. El fondo de esta imagen es el cuarto negro con las
luces LED y nada más.

PROHIBIDO ABSOLUTO:
- Cambiar la geometría, el color, el acabado o cualquier detalle físico
  del casco respecto de la foto adjunta, por más chico que sea.
- Cambiar el ÁNGULO, la POSE o el ENCUADRE del casco respecto de la
  foto adjunta, ni "aproximarlos" — es vista lateral, mirando a la
  izquierda, la misma posición y todo.
- Agregar gráficos, logos, texto, franjas, degradés, stickers o textura
  de carbono sobre la calota — es negra mate y lisa.
- Cambiar el MATE de la calota por brillante/glossy, o el BRILLANTE del
  panel lateral inferior y del spoiler por mate.
- ELIMINAR, APAGAR, MOVER, CAMBIAR DE COLOR o FUNDIR CON LA
  ILUMINACIÓN DE LA ESCENA la LUZ LED ROJA DEL SPOILER, o cambiar la
  cantidad de puntos. Son TRES puntos rojos alineados y ENCENDIDOS, y
  son una PIEZA DEL CASCO, no un efecto de luz del set.
- Levantar el visor, abrirlo, quitarlo, volverlo transparente,
  translúcido, ahumado claro o de cualquier otro color.
- Dibujar el visor como una forma negra plana, vectorial o sin
  material, sin borde, sin canto, sin curvatura y sin reflejos.
- Abrir o levantar la MENTONERA ABATIBLE — está cerrada, abajo.
- Dejar el casco como una SILUETA NEGRA ilegible contra el fondo: se
  tienen que leer sus piezas y sus acabados.
- Omitir la placa circular del pivote con su tornillo, la ventilación
  superior con listones, la línea de la mentonera abatible o la goma
  negra del borde inferior.
- Alargar, estirar o achatar la proporción de la calota.
- Poner una persona, una cabeza, un maniquí o una silueta humana — en
  esta versión el casco va SOLO.
- Usar luz de día, luz natural, un fondo claro o un fondo de color que
  no sea el cuarto negro con los LED rojo y azul.
- Entregar un render 3D, una ilustración, arte digital, una imagen tipo
  videojuego o un collage — es una FOTOGRAFÍA.
- Dibujar la línea punteada de maquetación, las formas diagonales, las
  barras negras, la tarjeta "HOMOLOGACÓN / DOT / FNVSS 510" o el fondo
  blanco de estudio.
- Poner logos de marcas reales, carteles con texto legible, texto
  superpuesto o marca de agua.

VERIFICACIÓN FINAL — ANTES DE ENTREGAR, CHEQUEÁ ESTAS 9 COSAS:
1. ¿El ÁNGULO, la POSE y el ENCUADRE del casco son los mismos de la
   foto adjunta —vista lateral, mirando a la izquierda—, verificable
   comparando lado a lado?
2. ¿El VISOR sigue 100 % OPACO —no se ve absolutamente nada a través de
   él— y a la vez tiene BORDE, CANTO, CURVATURA y REFLEJOS de las luces
   de color, en vez de ser una mancha negra plana?
3. ¿La LUZ LED ROJA DEL SPOILER sigue ENCENDIDA, con EXACTAMENTE TRES
   puntos rojos alineados, y se DISTINGUE CLARAMENTE de las luces
   rojas de la escena —fuente puntual y nítida sobre el spoiler, contra
   halos difusos y fuera de foco en el fondo—? Contalos.
4. ¿Se mantiene el CONTRASTE MATE / BRILLANTE — calota mate, panel
   lateral inferior y spoiler brillantes?
5. ¿Cambió algo de la FORMA o de alguna PIEZA respecto de la foto
   adjunta: la línea de la mentonera abatible, la placa circular del
   pivote con su tornillo, la ventilación superior con listones, la
   goma negra del borde inferior, la proporción de la calota?
6. ¿Quedó algún ARTEFACTO DE MAQUETACIÓN — línea punteada, formas
   diagonales, barras negras, la tarjeta "HOMOLOGACÓN / DOT / FNVSS
   510", el fondo blanco de estudio? No debe haber ninguno.
7. ¿Los REFLEJOS del visor y de las piezas brillantes corresponden al
   CUARTO OSCURO CON LED ROJO Y AZUL, y NO al fondo blanco del estudio
   ni a un reflejo genérico?
8. ¿El casco APOYA con su sombra de contacto, en vez de flotar, y se
   leen sus piezas en vez de quedar como una silueta negra?
9. ¿Se lee como FOTOGRAFÍA de sesión de fotos y no como render 3D o
   ilustración?

Orden de imágenes en el payload: la foto real del casco (checkpoint,
autoridad final de geometría, color, acabado y ángulo) — manda sobre
cualquier otro detalle. Todo el set del cuarto negro con las luces LED
se genera a partir del texto de arriba.
```

</details>

**Estado:** 🔴 pendiente de generar · 🟡 lectura (A) pendiente de confirmación del usuario.

**Qué hay que hacer:** confirmar con el usuario que la lectura correcta es (A), correr el prompt y auditar con los **9 chequeos** de la verificación final, con atención especial al chequeo 3 (la LED del spoiler contra las LED de la escena).

### Prompt variante — Lectura (B): con una persona con el casco puesto

<details><summary>Prompt Escena 2 (B) — persona con el casco puesto en el cuarto negro con LED</summary>

```
Genera una FOTOGRAFÍA REAL tipo lifestyle / sesión de fotos editorial en
4K, ultra nítida, formato vertical o 4:5, de una PERSONA con el casco de
la foto adjunta PUESTO y CERRADO, en un CUARTO NEGRO con contraluz de
LUCES LED ROJAS Y AZULES detrás.

ADVERTENCIA MÁXIMA — LEER PRIMERO: EL CASCO NO CAMBIA ABSOLUTAMENTE
NADA. Ni su geometría, ni su forma, ni sus proporciones, ni su color,
ni su acabado, ni la posición de ninguna de sus piezas. Lo único que
cambia en esta imagen es el ENTORNO, la ILUMINACIÓN y la PERSONA — el
casco es el mismo objeto físico, solo re-iluminado y fotografiado en un
escenario nuevo, nunca rediseñado ni reinterpretado.

CRÍTICO — EL ÁNGULO DEL CASCO LO DEFINE LA FOTO DE PRODUCTO, NO LA POSE
DEL MODELO. El usuario pidió textualmente "la misma posición y todo". El
casco se ve en VISTA LATERAL, de costado, MIRANDO HACIA LA IZQUIERDA del
encuadre — el mismo punto de vista, la misma altura de cámara y el mismo
grado de rotación de la foto adjunta. La pose de la cabeza y del cuerpo
de la persona se ACOMODAN para que ese ángulo se cumpla: primero se fija
el ángulo del casco según la foto adjunta, y después se construye la
pose del modelo alrededor. NO al revés. No elijas una pose "más natural"
o "más fotogénica" que cambie el ángulo del casco. "Parecido" no
alcanza: tiene que ser verificable comparando lado a lado con la foto
adjunta.

AUTORIDAD DE FORMA — LA FOTO ADJUNTA DEL CASCO ES LA ÚNICA FUENTE DE
GEOMETRÍA, COLOR Y ACABADO. El casco de esta imagen tiene que ser una
copia EXACTA, pieza por pieza, del casco de la foto adjunta. Enumerado
explícito de lo que NO puede cambiar:
- TIPO DE CASCO: integral MODULAR / FLIP UP, con la LÍNEA DE SEPARACIÓN
  DE LA MENTONERA ABATIBLE visible, en su recorrido y posición exactos.
  La mentonera está CERRADA / ABAJO.
- CALOTA: negro MATE, lisa. Sin gráficos, sin logos, sin texto, sin
  franjas, sin degradés, sin textura de fibra de carbono, sin brillo
  glossy. Mate y lisa, punto.
- VISOR: BAJADO y OPACO (ver el bloque dedicado más abajo).
- PLACA CIRCULAR DEL MECANISMO DE PIVOTE del visor: negra, redonda, con
  su TORNILLO CENTRAL visible, en su posición exacta.
- LUZ LED ROJA ENCENDIDA SOBRE EL SPOILER TRASERO (ver el bloque
  dedicado más abajo).
- CONTRASTE DE ACABADOS — MATE vs. BRILLANTE: la CALOTA es MATE; el
  PANEL LATERAL INFERIOR y el SPOILER TRASERO son NEGRO BRILLANTE. Ese
  contraste se conserva. No unifiques todo en mate ni todo en
  brillante.
- VENTILACIÓN SUPERIOR CON LISTONES en la parte alta de la calota, con
  la misma cantidad y la misma forma de listones.
- BORDE INFERIOR: goma negra perimetral.
No inventes, no "mejores", no agregues ni quites ninguna pieza. Si dudás
de cómo se ve un detalle, copiá exactamente lo que se ve en la foto
adjunta, no lo que "normalmente" tendría un casco de este estilo.

CRÍTICO — LA LUZ LED ROJA DEL SPOILER ES UNA PIEZA DEL CASCO, NO UN
EFECTO DE LA ILUMINACIÓN DE LA ESCENA. Este bloque existe porque en esta
escena hay LUCES LED ROJAS EN EL FONDO, y el riesgo concreto es que
confundas la pieza con la escena y la elimines:
- El casco tiene, SOBRE EL SPOILER TRASERO, una LUZ LED ROJA ENCENDIDA
  formada por TRES PUNTOS ROJOS ALINEADOS. Es una PIEZA FÍSICA REAL DEL
  PRODUCTO, montada sobre el spoiler, que EMITE luz roja propia.
- NO es un reflejo del contraluz rojo de la escena. NO es un destello.
  NO es un artefacto de la foto de producto. NO es parte de la
  iluminación del set.
- Está en el resultado final, en el mismo lugar, con los mismos TRES
  puntos —ni dos, ni cuatro— y ENCENDIDA. Contalos antes de entregar.
- Tiene que DISTINGUIRSE CLARAMENTE de las luces LED rojas del fondo:
  fuente puntual, chica, nítida, adherida al spoiler y en foco junto
  con el casco; las luces de la escena están DETRÁS, difusas y fuera de
  foco.
Eliminarla, apagarla o fundirla con el contraluz rojo del fondo es un
error grave.

CRÍTICO — EL VISOR SIGUE TOTALMENTE OPACO, Y SIGUE SIENDO UNA PIEZA
FÍSICA REAL. Declarado EN POSITIVO. Las dos mitades valen lo mismo:
(1) OPACIDAD: el visor está BAJADO y es TOTALMENTE OPACO. No se ve
    absolutamente nada a través de él: ni el interior del casco, ni el
    acolchado, ni la cabeza de la persona, ni un rostro, ni una sombra,
    ni una silueta insinuada. Es un policarbonato ahumado al 100 %.
(2) MATERIALIDAD: OPACO NO SIGNIFICA PLANO. El visor SIGUE EXISTIENDO
    COMO PIEZA FÍSICA y conserva su FORMA, su BORDE y CONTORNO con la
    junta perimetral, su CURVATURA, su ESPESOR / CANTO visible, y sus
    REFLEJOS ESPECULARES: refleja LAS LUCES LED ROJAS Y AZULES DEL SET
    y la penumbra del cuarto negro, en franjas de luz de color
    alargadas y deformadas por su curvatura.
    NO es un agujero negro. NO es una mancha negra plana. NO es una
    silueta vectorial recortada.
Misma lógica que las lecciones de
`simulacion-31-casco-bob-esponja-visor-transparente.md` y
`simulacion-32-visor-transparente-4k-laterales.md`, aplicada al revés:
la opacidad es una propiedad del MATERIAL, no una licencia para dibujar
una forma negra sin volumen. Defecto real ya vivido:
`simulacion-29-tmnt-lifestyle.md`, Intento 4, defecto 1. Ojo especial en
esta escena: sobre un fondo negro, un visor negro sin reflejos
desaparece del cuadro.

CRÍTICO — NO SE VE EL ROSTRO DE LA PERSONA. Declarado EN POSITIVO
primero, y recién después en negativo:
- EN POSITIVO: la persona lleva el casco PUESTO y CERRADO — la MENTONERA
  ABATIBLE está ABAJO y el VISOR está BAJADO. Por lo tanto, lo que se ve
  en la abertura de los ojos es LA SUPERFICIE OPACA DEL VISOR y NADA
  MÁS: una superficie oscura, curva, con los reflejos de las luces LED
  rojas y azules descritos arriba. El casco cerrado es lo que resuelve
  el encuadre — no hace falta ningún recurso extra, ni recortar la
  cabeza, ni tapar con un objeto, ni desenfocar la cara.
- EN NEGATIVO, como refuerzo: está PROHIBIDO que aparezca cualquier
  rasgo facial, ojos, cejas, nariz, boca, mentón, piel visible de la
  cara, una silueta o sombra de rostro insinuada por detrás del visor, o
  un reflejo con forma de rostro sobre el visor. Ninguna de esas cosas
  existe en esta imagen.
Defecto real ya vivido: `simulacion-29-tmnt-lifestyle.md`, Intento 1 —
el visor salió transparente y se alcanzaba a ver a la persona adentro.

ESCENA: un SET DE FOTOGRAFÍA en un CUARTO NEGRO — paredes, piso y fondo
NEGROS o casi negros, sin muebles, sin decoración, sin textura
reconocible. Una PERSONA con el casco puesto, de perfil/lateral según lo
que exija el ángulo del casco, encuadre de busto o medio cuerpo, con los
hombros completos dentro del cuadro (nada de cortes bruscos por el
borde). Ropa oscura y neutra: campera de moto o buzo negro, sin logos.
DETRÁS, LUCES LED DE COLOR haciendo CONTRALUZ: ROJO de un lado y AZUL
del otro, en tiras o paneles LED fuera de foco, que tiñen el fondo negro
con halos de color y recortan la silueta de la persona y del casco.
Estética de sesión de fotos moody / editorial.
- Sin logos de marcas reales, sin carteles con texto legible, sin texto
  superpuesto, sin marca de agua.

ILUMINACIÓN — CONTRALUZ LED DE COLOR SOBRE FONDO NEGRO, ULTRARREALISTA:
- Iluminación LOW-KEY: la mayor parte de la imagen es negro profundo, y
  la luz de color trabaja como CONTRALUZ / RIM LIGHT recortando el
  contorno superior y trasero del casco y de los hombros.
- Las dos fuentes son de COLOR: una ROJA y una AZUL, DETRÁS y a los
  costados, fuera de foco, mezclándose suavemente sobre el fondo negro
  con degradés y halos, sin bandas duras.
- Sobre el casco hay además un realce frontal muy tenue —apenas lo
  suficiente para que se lean sus piezas, sus acabados y su geometría.
  El casco NO es una silueta negra.
- ULTRARREALISTA: es una FOTOGRAFÍA tomada con cámara, con su
  profundidad de campo, su grano fino y su rango dinámico reales. NO es
  un render 3D, NO es una ilustración, NO es arte digital, NO es una
  imagen tipo videojuego, NO es un collage.

INTEGRACIÓN EN LA ESCENA — EL CASCO ES UN OBJETO FÍSICO DENTRO DE ESTA
FOTO, NO UN RECORTE PEGADO SOBRE LA CABEZA DEL MODELO:
- El casco RECIBE la MISMA luz del set que la persona: mismo contraluz
  rojo y azul, misma dirección, misma temperatura de color.
- El casco PROYECTA SOMBRA sobre los hombros y el cuello de la persona,
  y el conjunto se recorta contra el fondo negro con el mismo rim light.
- La CALOTA MATE devuelve un realce SUAVE Y DIFUSO que sigue su
  curvatura, teñido de rojo de un lado y de azul del otro — nunca un
  especular duro, porque es mate.
- Las PIEZAS NEGRAS BRILLANTES (panel lateral inferior y spoiler
  trasero) SÍ devuelven REFLEJOS ESPECULARES NÍTIDOS de las luces LED.
- El VISOR OPACO TAMBIÉN REFLEJA las luces LED rojas y azules y la
  penumbra del cuarto, sin perder ni un poco de su opacidad.
PROHIBIDO que cualquiera de estas superficies siga reflejando EL FONDO
BLANCO DEL ESTUDIO de la foto de producto, o un reflejo genérico de
estudio claro. Lo que se conserva del checkpoint es el MATERIAL y su
comportamiento; lo que CAMBIA es el CONTENIDO del reflejo, que ahora es
el cuarto negro con sus LED rojos y azules.

LIMPIEZA DE LA REFERENCIA — LO QUE ES MAQUETACIÓN NO EXISTE EN LA ESCENA
NUEVA. La foto adjunta del casco es un ARCHIVO DE MAQUETACIÓN y trae:
- una LÍNEA GUÍA PUNTEADA VERTICAL sobre el margen izquierdo,
- FORMAS DIAGONALES DECORATIVAS de fondo,
- BARRAS NEGRAS en el borde inferior,
- una TARJETA abajo a la derecha con "HOMOLOGACÓN / DOT / FNVSS 510",
  que pertenece a otra pieza del catálogo,
- y el FONDO BLANCO DE ESTUDIO.
NINGUNO de los cinco aparece en la imagen final. El fondo de esta imagen
es el cuarto negro con las luces LED y nada más.

PROHIBIDO ABSOLUTO:
- Cambiar la geometría, el color, el acabado o cualquier detalle físico
  del casco respecto de la foto adjunta, por más chico que sea.
- Cambiar el ÁNGULO del casco para acomodar la pose del modelo — el
  ángulo lo manda la foto adjunta.
- Agregar gráficos, logos, texto, franjas, degradés, stickers o textura
  de carbono sobre la calota — es negra mate y lisa.
- Cambiar el MATE de la calota por brillante/glossy, o el BRILLANTE del
  panel lateral inferior y del spoiler por mate.
- ELIMINAR, APAGAR, MOVER, CAMBIAR DE COLOR o FUNDIR CON LA ILUMINACIÓN
  DE LA ESCENA la LUZ LED ROJA DEL SPOILER, o cambiar la cantidad de
  puntos. Son TRES puntos rojos alineados y ENCENDIDOS, y son una PIEZA
  DEL CASCO.
- Levantar el visor, abrirlo, quitarlo, volverlo transparente,
  translúcido, ahumado claro o de cualquier otro color.
- Dibujar el visor como una forma negra plana, vectorial o sin material.
- Abrir o levantar la MENTONERA ABATIBLE — está cerrada, abajo.
- Mostrar el rostro, los ojos, la boca, la piel de la cara, una silueta
  de cara insinuada detrás del visor o un reflejo con forma de rostro.
- Dejar el casco como una SILUETA NEGRA ilegible contra el fondo.
- Omitir la placa circular del pivote con su tornillo, la ventilación
  superior con listones, la línea de la mentonera abatible o la goma
  negra del borde inferior.
- Alargar, estirar o achatar la proporción de la calota para que "entre"
  mejor en la cabeza del modelo.
- Cortar el cuerpo de la persona de forma abrupta con el borde del
  cuadro.
- Usar luz de día, luz natural, un fondo claro o un fondo de color que
  no sea el cuarto negro con los LED rojo y azul.
- Entregar un render 3D, una ilustración, arte digital, una imagen tipo
  videojuego o un collage — es una FOTOGRAFÍA.
- Dibujar la línea punteada de maquetación, las formas diagonales, las
  barras negras, la tarjeta "HOMOLOGACÓN / DOT / FNVSS 510" o el fondo
  blanco de estudio.
- Poner logos de marcas reales, carteles con texto legible, texto
  superpuesto o marca de agua.

VERIFICACIÓN FINAL — ANTES DE ENTREGAR, CHEQUEÁ ESTAS 9 COSAS:
1. ¿El ÁNGULO del casco es el mismo de la foto adjunta —vista lateral,
   mirando a la izquierda— y NO uno que salió de elegir primero la pose
   del modelo?
2. ¿El VISOR sigue 100 % OPACO —no se ve absolutamente nada a través de
   él— y a la vez tiene BORDE, CANTO, CURVATURA y REFLEJOS de las luces
   de color, en vez de ser una mancha negra plana?
3. ¿Se ve algún rasgo de CARA —ojos, boca, nariz, piel, silueta
   insinuada o reflejo con forma de rostro—? No debe haber ninguno.
4. ¿La LUZ LED ROJA DEL SPOILER sigue ENCENDIDA, con EXACTAMENTE TRES
   puntos rojos alineados, y se DISTINGUE CLARAMENTE de las luces rojas
   de la escena? Contalos.
5. ¿Se mantiene el CONTRASTE MATE / BRILLANTE — calota mate, panel
   lateral inferior y spoiler brillantes?
6. ¿Cambió algo de la FORMA o de alguna PIEZA respecto de la foto
   adjunta, incluida la proporción de la calota?
7. ¿Quedó algún ARTEFACTO DE MAQUETACIÓN — línea punteada, formas
   diagonales, barras negras, la tarjeta "HOMOLOGACÓN / DOT / FNVSS
   510", el fondo blanco de estudio? No debe haber ninguno.
8. ¿Los REFLEJOS del visor y de las piezas brillantes corresponden al
   CUARTO OSCURO CON LED ROJO Y AZUL, y NO al fondo blanco del estudio?
9. ¿Se lee como FOTOGRAFÍA de sesión de fotos y no como render 3D o
   ilustración? ¿Entran los hombros completos, sin cortes bruscos?

Orden de imágenes en el payload: la foto real del casco (checkpoint,
autoridad final de geometría, color, acabado y ángulo) — manda sobre
cualquier otro detalle, incluida la pose del modelo. Todo el set del
cuarto negro con las luces LED se genera a partir del texto de arriba.
```

</details>

**Estado:** 🔴 pendiente de generar · 🟡 variante, solo si el usuario confirma la lectura (B).

**Qué hay que hacer:** no correrlo por default. Si el usuario confirma que quería una persona en el set, correr este y auditar con atención especial a los chequeos 1 (que el ángulo no lo haya definido la pose), 3 (rostro) y 4 (la LED del spoiler contra las LED de la escena).

---

## Riesgos anticipados (para la auditoría, antes de ver el resultado)

### Comunes a las 2 escenas

| Riesgo | De dónde viene | Chequeo que lo cubre |
|---|---|---|
| El visor sale como una mancha negra plana, sin material | [`simulacion-29`](simulacion-29-tmnt-lifestyle.md), Intento 4, defecto 1 | Escena 1: verificación 1 · Escena 2: verificación 2 |
| Se ve la cara / una silueta detrás del visor | [`simulacion-29`](simulacion-29-tmnt-lifestyle.md), Intento 1 | Escena 1: verificación 2 · Escena 2 (B): verificación 3 |
| El generador **elimina la luz LED roja** por leerla como un reflejo o un artefacto de la foto de producto | Riesgo propio de este caso: un detalle chico, luminoso y de color distinto sobre una superficie negra brillante es exactamente lo que un generador "limpia" | Escena 1: verificación 3 · Escena 2: verificación 3/4 |
| Unifica el acabado: todo mate o todo brillante | [`simulacion-34`](simulacion-34-lifestyle-cafeteria-casco-negro.md) (mismo par mate/brillante) | Escena 1: verificación 4 · Escena 2: verificación 4/5 |
| La calota sale estirada/alargada al ponerla sobre una cabeza | [`simulacion-29`](simulacion-29-tmnt-lifestyle.md), Intento 4, defecto 2 | Escena 1: verificación 5 · Escena 2: verificación 5/6 |
| Aparecen la línea punteada, las formas diagonales, las barras o la tarjeta de homologación | [`simulacion-31`](simulacion-31-casco-bob-esponja-visor-transparente.md), [`simulacion-32`](simulacion-32-visor-transparente-4k-laterales.md), [`simulacion-34`](simulacion-34-lifestyle-cafeteria-casco-negro.md) | Escena 1: verificación 6 · Escena 2: verificación 6/7 |
| El visor y las piezas brillantes siguen reflejando el fondo blanco del estudio → el casco se lee como recorte pegado | [`simulacion-34`](simulacion-34-lifestyle-cafeteria-casco-negro.md) — **lección ya registrada en el checklist Tipo A** | Escena 1: verificación 7 · Escena 2: verificación 7/8 |
| El resultado sale como render 3D en vez de fotografía | [`simulacion-12`](simulacion-12-hero-verificacion.md), Sub-caso lifestyle (el mood se logra solo por descripción de texto) | Escena 1: verificación 8 · Escena 2: verificación 9 |

### Propios de la Escena 1 (montaña)

| Riesgo | De dónde viene | Chequeo que lo cubre |
|---|---|---|
| La luz sale dura, de mediodía, de estudio o virada a postal | Pedido explícito del usuario: luz natural, tenue y difusa | Verificación 8 |

### Propios de la Escena 2 (estudio oscuro con LED)

| Riesgo | De dónde viene | Chequeo que lo cubre |
|---|---|---|
| **La LED roja del spoiler se funde con las luces LED rojas de la escena y desaparece** — la escena contiene un elemento del mismo tipo que una pieza del producto | **Riesgo nuevo de este caso** — ver lección abajo | (A) verificación 3 · (B) verificación 4 |
| El casco queda como una **silueta negra ilegible** contra el fondo negro, sin que se lean sus piezas ni el contraste de acabados | Riesgo propio de una escena low-key: un objeto negro sobre fondo negro necesita que el prompt pida explícitamente el realce frontal tenue | (A) verificación 8 · (B) verificación 9 |
| El casco **flota** sin sombra de contacto sobre la superficie oscura | [`simulacion-34`](simulacion-34-lifestyle-cafeteria-casco-negro.md), verificación 8 | (A) verificación 8 |
| El ángulo se corre respecto de la foto de producto pese al pedido de "la misma posición y todo" | [`simulacion-29`](simulacion-29-tmnt-lifestyle.md), Intentos 3 y 4 · [`simulacion-34`](simulacion-34-lifestyle-cafeteria-casco-negro.md), verificación 4 | (A) verificación 1 · (B) verificación 1 |

---

## Lecciones — qué aporta este caso al checklist

### 🆕 Lección nueva (la trae la Escena 2)

**Cuando la escena nueva contiene un elemento del MISMO TIPO que una pieza del producto, hay que declarar la pieza del producto COMO PIEZA y no como efecto — si no, el generador la absorbe dentro de la escena y la pierde.**

Acá el cruce es literal: el casco tiene una **luz LED roja encendida** en el spoiler, y la Escena 2 pide **luces LED rojas y azules** como contraluz del set. Para el generador las dos cosas son "luz roja en la imagen", y la resolución barata del conflicto es tratar la del spoiler como un **reflejo o un halo del contraluz** y no dibujarla — una falla silenciosa, porque el resultado queda coherente y bonito, solo que sin la pieza. Se registra como ítem nuevo del checklist **Tipo A** en [`orquestacion-agentes-paralelos.md`](../orquestacion-agentes-paralelos.md).

Es **distinta** de la lección de [`simulacion-26`](simulacion-26-casco-retro-goma-negra.md) (*"cuando dos piezas comparten el mismo color y solo una cambia, la que cambia se identifica por su ubicación, nunca por su color"*): allá las dos piezas pertenecen **al objeto** y el problema es de **selección** dentro de una edición; acá el elemento gemelo pertenece **a la escena** y el problema es de **absorción** en un traslado. También es distinta de la lección de los reflejos: aquella dice qué **contenido** tiene que tener un reflejo, esta dice qué **no es** un reflejo.

### Lecciones ya cubiertas que este caso confirma

Las otras dos que este caso pone en juego ya están escritas en el checklist **Tipo A**, y este caso las confirma en vez de duplicarlas:

1. **Reflejos de la escena nueva, no del estudio de origen.** Es el ítem *"cuando el objeto se TRASLADA a una escena nueva, sus superficies reflectantes tienen que reflejar la ESCENA NUEVA y no el estudio de origen"*, registrado a partir de la [Simulación 34](simulacion-34-lifestyle-cafeteria-casco-negro.md). **Este caso es su segunda aparición**, y aporta un matiz que vale registrar: allá la superficie delatora era un **visor espejado dorado**, o sea una superficie obviamente reflectante; acá es un **visor opaco negro** y unas **piezas negras brillantes**, que son mucho menos evidentes como "espejos" pero fallan igual — un negro pulido también es una imagen del entorno, y si sigue devolviendo el blanco liso del estudio delata el recorte con la misma fuerza. La regla vale para toda superficie **pulida**, no solo para las que se leen como espejo. Este caso además la aplica **dos veces sobre el mismo objeto con contenidos distintos** (la montaña en la Escena 1, el cuarto negro con LED rojo y azul en la Escena 2), lo que deja claro que el contenido del reflejo es un parámetro **por escena**, no una propiedad del objeto.

2. **Opaco no es plano — una pieza mantiene su materialidad aunque no se vea a través de ella.** Es la aplicación **inversa** del ítem de *"hacer TRANSPARENTE algo opaco no es un cambio de color"* ([Simulación 31](simulacion-31-casco-bob-esponja-visor-transparente.md) y [Simulación 32](simulacion-32-visor-transparente-4k-laterales.md)), cuyo segundo blindaje ya dice que *"volver transparente una pieza no es borrarla — se conservan su forma, su contorno, su borde, su curvatura, su espesor y sus reflejos especulares"*. Acá el pedido va en la dirección contraria —el visor **se queda** opaco— y la conclusión es la misma: la opacidad es una propiedad del **material**, no un permiso para dibujar una silueta negra sin volumen. El ítem existente ya cubre el principio; este caso queda como su **caso espejo**, y la redacción del prompt lo referencia explícitamente para que no haya que redescubrirlo.

---

**Última actualización:** 2026-07-29 · caso creado desde cero a partir del pedido de foto lifestyle en la montaña. **1 prompt** escrito con la estructura del [Intento 4 de la Simulación 12](simulacion-12-hero-verificacion.md) (el prompt lifestyle que el usuario confirmó como el mejor del repo): advertencia máxima de entrada, autoridad de forma pieza por pieza, bloques temáticos en MAYÚSCULAS, prohibido absoluto y verificación final. Los **tres requisitos duros** del usuario —casco intacto, visor opaco, rostro no visible— tienen cada uno su bloque propio, y los dos últimos están **declarados en positivo** antes de prohibir nada. Quedaba **1 ambigüedad abierta** —el usuario escribió *"como si manejara bici"* pero el producto es un casco integral modular de moto, así que el prompt se escribió para **motocicleta** y el `BLOQUE DE VEHÍCULO` quedó **aislado en un solo párrafo** por si había que cambiarlo—: **✅ cerrada el mismo día (2026-07-29), confirmada por el usuario: *"moto en la montaña"*. El prompt no cambió.** **De la Escena 1 no salen lecciones nuevas al checklist**: la de los reflejos de la escena nueva ya la registró la [Simulación 34](simulacion-34-lifestyle-cafeteria-casco-negro.md) y este caso queda como su **segunda aparición** (con el matiz de que también aplica a superficies negras pulidas, no solo a espejos evidentes), y la de "opaco no es plano" ya está cubierta como el reverso del ítem de las Simulaciones 31 y 32. La **lección nueva del caso la trae la Escena 2** (ver la segunda pasada, abajo).

**2026-07-29 (segunda pasada) —** el usuario pidió una **SEGUNDA foto lifestyle** del mismo casco: *"en fondo de tipo sesión de fotos, con colores LED rojo y azul detrás, pero en un cuarto negro. Que sea la misma posición y todo, pero que el visor siga opaco."* Se agregó la **Escena 2** con **2 prompts** —(A) **el casco solo**, principal, y (B) **con una persona**, variante— y la **ambigüedad registrada y pendiente de confirmación del usuario**: el usuario dijo "lifestyle" pero describió un set de estudio y además pidió "la misma posición y todo", y (A) queda como principal solo porque es la única lectura que permite conservar **literalmente** la vista lateral de la foto de producto; en (B) el ángulo pasa a depender de la pose de la cabeza. **Nadie eligió todavía.** Los dos prompts reusan sin cambios el bloque de autoridad de forma pieza por pieza, el bloque del visor opaco declarado en positivo, el contraste mate/brillante, la limpieza de artefactos de maquetación y el realismo fotográfico; (B) suma además el bloque de "no se ve el rostro" de la Escena 1. Lo **nuevo y propio de esta escena** es el bloque `LA LUZ LED ROJA DEL SPOILER ES UNA PIEZA DEL CASCO, NO UN EFECTO DE LA ILUMINACIÓN DE LA ESCENA`: como el set tiene luces LED rojas propias, hubo que declarar que la del spoiler es una **pieza física** —tres puntos, encendida, en foco y adherida al spoiler— y que se **distingue** de los halos difusos y fuera de foco del fondo. De ahí sale la **lección nueva** para el checklist Tipo A: cuando la escena nueva contiene un elemento del mismo tipo que una pieza del producto, hay que declarar la pieza como pieza o el generador la absorbe en la escena. Se sumaron además 2 chequeos propios a la verificación final de cada prompt (la LED del spoiler contra las LED de la escena, y los reflejos correspondiendo al cuarto oscuro con LED rojo y azul).
