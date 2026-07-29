# Simulación 34 — Casco integral negro mate con visor dorado levantado: foto lifestyle en una cafetería (Tipo A, geometría intacta + traslado de escena)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

**Pedido del usuario:** *"un hombre fuera de una cafetería, sentado, con este casco"*, y el casco tiene que estar *"exactamente en la misma posición, el mismo ángulo y todo"* que en la imagen de referencia.

Es un caso **Tipo A** con la variante que ya se venía trabajando en la [Simulación 29](simulacion-29-tmnt-lifestyle.md): no se transfiere ningún diseño gráfico — el objeto ya está terminado y aprobado en la foto de producto, y lo único que cambia es **la escena alrededor**. La foto adjunta del casco es la **única autoridad de forma, color y acabado**; la escena de la cafetería no aporta absolutamente nada al objeto, solo lo rodea y lo ilumina.

---

## El casco (descripción del checkpoint, transcrita para que el prompt tenga contra qué verificar)

Foto de producto de catálogo, casco **integral (full face)**, sobre fondo claro. Vista de **3/4 delantero, ligeramente desde arriba**, con el casco mirando hacia la **izquierda** del encuadre.

| Pieza | Cómo está en el checkpoint |
|---|---|
| Calota | **Negro MATE uniforme**, absolutamente lisa: sin gráficos, sin logos, sin texto, sin franjas, sin degradés |
| Visor principal | **Espejado DORADO / IRIDISCENTE** (reflejos que van del dorado al violeta según el ángulo), **LEVANTADO / en posición abierta**, elevado por encima de la calota, dejando despejada la abertura de los ojos. En su borde inferior, una **fila de agujeritos de ventilación**; en el extremo delantero-izquierdo, una **pestaña / lengüeta** para levantarlo con el dedo |
| Segundo visor interno | **Solar, tintado oscuro, BAJADO**, visible a través de la abertura de los ojos por debajo del dorado levantado. Son **DOS piezas distintas** |
| Mecanismo de pivote lateral | Placa oscura con un **tornillo visible** y un **deslizador de ventilación** al lado |
| Piezas negras BRILLANTES | Panel lateral trasero / spoiler y zona del pivote — contrastan con el mate de la calota |
| Ventilaciones | Extractores en la parte alta-trasera de la calota; en la **mentonera**, una toma de aire central prominente con **rejilla de listones horizontales**, más tomas laterales a los costados |
| Borde inferior | **Goma negra perimetral**, con el acolchado interior gris/negro visible por dentro |

**Artefactos de maquetación que NO pertenecen al producto:** la imagen de referencia es un archivo de maquetación — tiene una **línea guía punteada vertical** sobre el margen izquierdo y **formas diagonales de fondo** decorativas. Nada de eso es parte del casco y nada de eso debe aparecer en el resultado. Es el mismo tipo de artefacto ya registrado en la [Simulación 31](simulacion-31-casco-bob-esponja-visor-transparente.md) (guía punteada vertical) y en la [Simulación 32](simulacion-32-visor-transparente-4k-laterales.md) (artefactos de captura).

---

## 🟡 AMBIGÜEDAD DEL PEDIDO — PENDIENTE DE CONFIRMACIÓN DEL USUARIO

> **"Sentado con este casco" admite dos lecturas, y no se elige ninguna por cuenta propia — se escriben las dos y el usuario confirma.**
>
> - **(A) El casco apoyado sobre la mesa**, junto al hombre sentado. → **Prompt principal.**
> - **(B) El hombre con el casco puesto**, sentado. → **Prompt variante.**
>
> **Por qué (A) queda como principal:** el usuario pidió explícitamente *"exactamente en la misma posición, el mismo ángulo y todo"*, y (A) es la única lectura que permite conservar **literalmente** el 3/4 delantero desde arriba de la foto de producto — el casco sigue siendo un objeto apoyado sobre una superficie, fotografiado desde la altura de una persona parada o sentada enfrente, exactamente como en el catálogo. Además es la única que **deja ver el visor dorado levantado y el interior**, que con una cabeza adentro se pierden.
>
> En (B) el ángulo del casco pasa a depender de la pose de la cabeza del modelo, que es justo lo que hace difícil que coincida con la referencia.
>
> **Nadie confirmó todavía cuál de las dos es. Antes de dar por bueno un resultado hay que preguntar.**

---

## Prompt principal — Lectura (A): el casco apoyado sobre la mesa, junto al hombre sentado

<details><summary>Prompt usado — (A) casco sobre la mesa</summary>

```
Genera una FOTOGRAFÍA REAL tipo lifestyle en 4K, ultra nítida, formato
horizontal o 4:5, de un hombre sentado en la vereda/terraza de una
cafetería, con el casco de la foto adjunta apoyado sobre la mesa junto
a él.

AUTORIDAD DE FORMA — LA FOTO ADJUNTA DEL CASCO ES LA ÚNICA FUENTE DE
GEOMETRÍA, COLOR Y ACABADO. Nada de la escena nueva, ni de tu propio
criterio sobre "cómo suele ser un casco", puede modificar el objeto.
El casco de esta imagen tiene que ser una copia EXACTA, pieza por
pieza, del casco de la foto adjunta. Enumerado explícito de lo que NO
puede cambiar:
- CALOTA: negro MATE uniforme, absolutamente lisa. Sin gráficos, sin
  logos, sin texto, sin franjas, sin degradés, sin textura de fibra de
  carbono, sin brillo glossy. Mate y lisa, punto.
- VISOR PRINCIPAL: espejado DORADO / IRIDISCENTE, con reflejos que van
  del dorado al violeta según el ángulo. LEVANTADO, en posición
  abierta (ver bloque siguiente).
- FILA DE AGUJERITOS DE VENTILACIÓN en el borde inferior del visor
  dorado, y PESTAÑA / LENGÜETA para levantarlo con el dedo en su
  extremo delantero-izquierdo. Las dos cosas están y se ven.
- SEGUNDO VISOR INTERNO SOLAR: tintado oscuro, BAJADO, visible a
  través de la abertura de los ojos por debajo del dorado.
- MECANISMO DE PIVOTE LATERAL: placa oscura con un tornillo visible y
  un deslizador de ventilación al lado, en su posición exacta.
- PIEZAS NEGRAS BRILLANTES que contrastan con el mate de la calota: el
  panel lateral trasero / spoiler y la zona del pivote. Ese contraste
  mate vs. brillante se conserva.
- VENTILACIONES: extractores en la parte alta-trasera de la calota; en
  la MENTONERA, una toma de aire central prominente con rejilla de
  listones horizontales, más tomas laterales a los costados.
- BORDE INFERIOR: goma negra perimetral, con el acolchado interior
  gris/negro visible por dentro.
No inventes, no "mejores", no agregues ni quites ninguna pieza, ni un
tornillo, ni una ranura, ni un borde. Si dudás de cómo se ve un
detalle, copiá exactamente lo que se ve en la foto adjunta, no lo que
"normalmente" tendría un casco de este estilo.

CRÍTICO — DOS VISORES, DOS PIEZAS DISTINTAS: EL DORADO ARRIBA Y
LEVANTADO, EL OSCURO ADENTRO Y BAJADO. Declarado en positivo, porque
es el punto donde este tipo de casco falla siempre (defecto real ya
vivido en el caso Turtles, `simulacion-29-tmnt-lifestyle.md`, donde el
generador primero agregó un segundo visor que no existía y después no
respetó la opacidad pedida — acá el problema es el simétrico: los dos
visores SÍ existen y hay que mantenerlos separados):
- El VISOR PRINCIPAL es una pieza espejada DORADA/IRIDISCENTE que está
  LEVANTADA, elevada POR ENCIMA de la calota, con la abertura de los
  ojos despejada debajo de él. Sigue levantado en la imagen final.
- El VISOR INTERNO SOLAR es una SEGUNDA pieza, distinta, tintada
  OSCURA, que está BAJADA y se ve a través de la abertura de los ojos,
  por debajo del dorado.
- Son DOS piezas separadas, con dos posiciones distintas y dos
  materiales distintos. Se ven las dos al mismo tiempo.
Prohibido fusionarlas en una sola. Prohibido bajar el visor dorado.
Prohibido eliminar el visor interno oscuro. Prohibido cambiar el
dorado por transparente, por ahumado, por negro o por cualquier otro
color. Prohibido cambiar el interno oscuro por dorado. Prohibido
agregar un TERCER visor.

CRÍTICO — ÁNGULO DEL CASCO: EL MISMO EXACTO DE LA FOTO DE PRODUCTO. El
casco se ve en 3/4 DELANTERO, LIGERAMENTE DESDE ARRIBA, mirando hacia
la IZQUIERDA del encuadre — el mismo punto de vista, la misma altura
de cámara y el mismo grado de rotación de la foto adjunta. El usuario
pidió "exactamente la misma posición, el mismo ángulo y todo": no lo
gires para "mostrar mejor" otro lado, no lo pongas de perfil, no lo
pongas de frente, no lo mires desde abajo. Como el casco está apoyado
sobre la mesa y la cámara está a la altura de una persona sentada o
parada enfrente, ese ángulo se conserva de forma natural.
"Parecido" no alcanza: tiene que ser verificable comparando lado a
lado con la foto adjunta.

ESCENA: la vereda o terraza de una cafetería, de día. Un HOMBRE
SENTADO en una silla, junto a una mesa; el casco apoyado sobre la mesa
a su lado, bien visible y nítido, en primer plano. Ambiente urbano
alrededor: fachada de la cafetería, otras mesas, gente y calle al
fondo. El hombre puede tener una taza de café en la mesa y estar en
una actitud relajada y natural.
- ILUMINACIÓN: luz natural de día, suave, sin sol duro que queme las
  altas luces.
- El FONDO va DESENFOCADO (profundidad de campo baja, bokeh suave) y
  no compite con el casco: el casco es el elemento nítido y el punto
  de atención de la foto.
- Sin logos de marcas reales, sin carteles con texto legible, sin
  texto superpuesto, sin marca de agua.

LIMPIEZA DE LA REFERENCIA — LO QUE ES MAQUETACIÓN NO EXISTE EN LA
ESCENA NUEVA. La foto adjunta del casco es un archivo de maquetación y
trae elementos que NO son parte del producto:
- una LÍNEA GUÍA PUNTEADA VERTICAL sobre el margen izquierdo,
- FORMAS DIAGONALES DE FONDO decorativas,
- el FONDO CLARO DE ESTUDIO.
Ninguno de los tres aparece en la imagen final. No hay ninguna línea
punteada, ninguna guía, ninguna marca de recorte, ninguna forma
geométrica decorativa flotando y ningún resto del fondo de estudio.
El fondo de esta imagen es la cafetería y nada más.

REALISMO — FOTOGRAFÍA REAL, Y EL VISOR ESPEJADO REFLEJA LA CAFETERÍA.
El resultado es una FOTOGRAFÍA real tomada con cámara, no una
ilustración, no un render 3D, no un collage, no un recorte pegado
sobre un fondo. El casco es un OBJETO FÍSICO que está dentro de la
escena:
- recibe la MISMA luz natural que el hombre, la mesa y el resto de la
  escena, con la misma dirección y la misma temperatura de color;
- APOYA sobre la mesa y PROYECTA SU SOMBRA sobre ella, con contacto
  real entre la goma del borde inferior y la superficie;
- la calota MATE devuelve un realce de luz suave y difuso siguiendo su
  curvatura, nunca un brillo especular duro (es mate, no glossy);
- las piezas NEGRAS BRILLANTES sí devuelven reflejos especulares
  nítidos, y ese contraste con el mate es parte del objeto;
- y el punto que decide si la foto se lee como real o como un pegote:
  el VISOR DORADO ESPEJADO REFLEJA EL ENTORNO DE LA CAFETERÍA — la
  mesa, la fachada, los toldos, la calle, el cielo, la silueta de las
  personas alrededor — NO el fondo claro del estudio de la foto de
  producto, y NO un reflejo genérico. Es un espejo dorado/iridiscente:
  lo que se ve adentro es esta escena, deformada por su curvatura.
  Mismo criterio, más tenue, para el visor interno oscuro.
Si el visor sigue reflejando un fondo de estudio liso, el casco se lee
como un recorte pegado por más que su forma sea perfecta.

PROHIBIDO ABSOLUTO:
- Cambiar la geometría, el color, el acabado o cualquier detalle
  físico del casco respecto de la foto adjunta, por más chico que sea.
- Agregar gráficos, logos, texto, franjas, degradés, stickers o
  textura de carbono sobre la calota — es negra mate y lisa.
- Cambiar el mate de la calota por brillante/glossy.
- Bajar el visor dorado, quitarlo, volverlo transparente, ahumado o
  negro, o cambiarle el color iridiscente.
- Eliminar el visor interno oscuro, subirlo, o fusionarlo con el
  dorado en una sola pieza.
- Omitir la fila de agujeritos del borde inferior del visor dorado o
  la pestaña/lengüeta.
- Cambiar el ángulo del casco respecto de la foto adjunta, ni
  "aproximarlo".
- Dibujar la línea punteada de maquetación, las formas diagonales
  decorativas o el fondo de estudio.
- Poner logos de marcas reales, carteles con texto legible, texto
  superpuesto o marca de agua.
- Entregar una ilustración, un render 3D o un casco flotando/recortado
  sin sombra de contacto sobre la mesa.

VERIFICACIÓN FINAL — ANTES DE ENTREGAR, CHEQUEÁ ESTAS 8 COSAS:
1. ¿El visor principal sigue LEVANTADO y sigue siendo ESPEJADO
   DORADO/IRIDISCENTE? ¿Se le ven la fila de agujeritos y la pestaña?
2. ¿El segundo visor interno sigue BAJADO y sigue siendo OSCURO, y se
   distingue como una pieza SEPARADA del dorado?
3. ¿La calota sigue siendo NEGRA MATE y LISA, sin ningún gráfico,
   logo, texto, franja ni degradé?
4. ¿El ángulo del casco es 3/4 delantero, ligeramente desde arriba,
   mirando a la izquierda — el mismo de la foto adjunta?
5. ¿Están el pivote con su tornillo y su deslizador, los extractores
   traseros, la toma de aire de la mentonera con sus listones
   horizontales y la goma negra del borde inferior?
6. ¿Aparece algún ARTEFACTO DE MAQUETACIÓN (línea punteada, guía,
   formas diagonales, fondo de estudio)? No debe haber ninguno.
7. ¿El reflejo del visor dorado corresponde a la ESCENA NUEVA (mesa,
   fachada, calle, cielo de la cafetería) y no al fondo del estudio?
8. ¿El casco apoya sobre la mesa con su sombra de contacto, iluminado
   por la misma luz que el resto de la escena?

Orden de imágenes en el payload: la foto real del casco (checkpoint,
autoridad final de geometría, color, acabado y ángulo) — manda sobre
cualquier otro detalle. Toda la escena de la cafetería se genera a
partir del texto de arriba.
```

</details>

**Estado:** 🔴 pendiente de generar · 🟡 lectura (A) pendiente de confirmación del usuario.

**Qué hay que hacer:** confirmar con el usuario que la lectura correcta es (A), correr el prompt y mandar el resultado para auditoría usando los 8 chequeos de la verificación final.

---

## Prompt variante — Lectura (B): el hombre con el casco puesto, sentado

<details><summary>Prompt usado — (B) casco puesto</summary>

```
Genera una FOTOGRAFÍA REAL tipo lifestyle en 4K, ultra nítida, formato
horizontal o 4:5, de un hombre sentado en la vereda/terraza de una
cafetería, con el casco de la foto adjunta PUESTO.

AUTORIDAD DE FORMA — LA FOTO ADJUNTA DEL CASCO ES LA ÚNICA FUENTE DE
GEOMETRÍA, COLOR Y ACABADO. Nada de la escena nueva, ni de tu propio
criterio sobre "cómo suele ser un casco", puede modificar el objeto.
El casco de esta imagen tiene que ser una copia EXACTA, pieza por
pieza, del casco de la foto adjunta. Enumerado explícito de lo que NO
puede cambiar:
- CALOTA: negro MATE uniforme, absolutamente lisa. Sin gráficos, sin
  logos, sin texto, sin franjas, sin degradés, sin textura de fibra de
  carbono, sin brillo glossy. Mate y lisa, punto.
- VISOR PRINCIPAL: espejado DORADO / IRIDISCENTE, con reflejos que van
  del dorado al violeta según el ángulo. LEVANTADO, en posición
  abierta (ver bloque siguiente).
- FILA DE AGUJERITOS DE VENTILACIÓN en el borde inferior del visor
  dorado, y PESTAÑA / LENGÜETA para levantarlo con el dedo en su
  extremo delantero-izquierdo. Las dos cosas están y se ven.
- SEGUNDO VISOR INTERNO SOLAR: tintado oscuro, BAJADO, visible a
  través de la abertura de los ojos por debajo del dorado.
- MECANISMO DE PIVOTE LATERAL: placa oscura con un tornillo visible y
  un deslizador de ventilación al lado, en su posición exacta.
- PIEZAS NEGRAS BRILLANTES que contrastan con el mate de la calota: el
  panel lateral trasero / spoiler y la zona del pivote.
- VENTILACIONES: extractores en la parte alta-trasera de la calota; en
  la MENTONERA, una toma de aire central prominente con rejilla de
  listones horizontales, más tomas laterales a los costados.
- BORDE INFERIOR: goma negra perimetral.
No inventes, no "mejores", no agregues ni quites ninguna pieza. Si
dudás de cómo se ve un detalle, copiá exactamente lo que se ve en la
foto adjunta.

CRÍTICO — DOS VISORES, DOS PIEZAS DISTINTAS: EL DORADO ARRIBA Y
LEVANTADO, EL OSCURO ADENTRO Y BAJADO. Declarado en positivo, porque
es el punto donde este tipo de casco falla siempre (defecto real ya
vivido en el caso Turtles, `simulacion-29-tmnt-lifestyle.md`, donde el
generador primero agregó un segundo visor que no existía y después no
respetó la opacidad pedida — acá el problema es el simétrico: los dos
visores SÍ existen y hay que mantenerlos separados):
- El VISOR PRINCIPAL es una pieza espejada DORADA/IRIDISCENTE que está
  LEVANTADA, elevada POR ENCIMA de la calota, con la abertura de los
  ojos despejada debajo de él. Sigue levantado en la imagen final.
- El VISOR INTERNO SOLAR es una SEGUNDA pieza, distinta, tintada
  OSCURA, que está BAJADA y se ve a través de la abertura de los ojos,
  por debajo del dorado.
- Son DOS piezas separadas, con dos posiciones distintas y dos
  materiales distintos. Se ven las dos al mismo tiempo.
Prohibido fusionarlas. Prohibido bajar el visor dorado. Prohibido
eliminar el visor interno oscuro. Prohibido cambiar el dorado por
transparente, ahumado o negro. Prohibido agregar un TERCER visor.
Como el casco está PUESTO y el visor dorado está levantado, por la
abertura de los ojos se ve el VISOR INTERNO OSCURO BAJADO — o sea que
la cara del hombre queda cubierta por ese visor oscuro, no visible. No
dibujes ojos ni rasgos a través del visor interno.

CRÍTICO — EL ÁNGULO DEL CASCO LO DEFINE LA FOTO DE PRODUCTO, NO LA
POSE DEL MODELO. El casco se ve en 3/4 DELANTERO, LIGERAMENTE DESDE
ARRIBA, mirando hacia la IZQUIERDA del encuadre — el mismo punto de
vista, la misma altura de cámara y el mismo grado de rotación de la
foto adjunta. El usuario pidió "exactamente la misma posición, el
mismo ángulo y todo". La pose de la cabeza y del cuerpo del hombre se
ACOMODAN para que ese ángulo se cumpla: primero se fija el ángulo del
casco según la foto adjunta, y después se construye la pose del modelo
alrededor. NO al revés. No elijas una pose "más natural" o "más
fotogénica" que cambie el ángulo del casco. "Parecido" no alcanza:
tiene que ser verificable comparando lado a lado con la foto adjunta.

ESCENA: la vereda o terraza de una cafetería, de día. Un HOMBRE
SENTADO en una silla, junto a una mesa, con el casco puesto, en
actitud relajada y natural. Ambiente urbano alrededor: fachada de la
cafetería, otras mesas, gente y calle al fondo. Puede haber una taza
de café sobre la mesa.
- ILUMINACIÓN: luz natural de día, suave, sin sol duro que queme las
  altas luces.
- El FONDO va DESENFOCADO (profundidad de campo baja, bokeh suave) y
  no compite con el casco: el casco es el elemento nítido y el punto
  de atención de la foto.
- Sin logos de marcas reales, sin carteles con texto legible, sin
  texto superpuesto, sin marca de agua.

LIMPIEZA DE LA REFERENCIA — LO QUE ES MAQUETACIÓN NO EXISTE EN LA
ESCENA NUEVA. La foto adjunta del casco es un archivo de maquetación y
trae elementos que NO son parte del producto:
- una LÍNEA GUÍA PUNTEADA VERTICAL sobre el margen izquierdo,
- FORMAS DIAGONALES DE FONDO decorativas,
- el FONDO CLARO DE ESTUDIO.
Ninguno de los tres aparece en la imagen final. No hay ninguna línea
punteada, ninguna guía, ninguna marca de recorte, ninguna forma
geométrica decorativa flotando y ningún resto del fondo de estudio.
El fondo de esta imagen es la cafetería y nada más.

REALISMO — FOTOGRAFÍA REAL, Y EL VISOR ESPEJADO REFLEJA LA CAFETERÍA.
El resultado es una FOTOGRAFÍA real tomada con cámara, no una
ilustración, no un render 3D, no un collage, no un recorte pegado
sobre un fondo. El casco es un OBJETO FÍSICO que está dentro de la
escena:
- recibe la MISMA luz natural que el hombre, la mesa y el resto de la
  escena, con la misma dirección y la misma temperatura de color;
- proyecta SOMBRA sobre los hombros y el cuello del hombre, y el
  conjunto proyecta sombra sobre la silla y la mesa;
- la calota MATE devuelve un realce de luz suave y difuso siguiendo su
  curvatura, nunca un brillo especular duro (es mate, no glossy);
- las piezas NEGRAS BRILLANTES sí devuelven reflejos especulares
  nítidos, y ese contraste con el mate es parte del objeto;
- y el punto que decide si la foto se lee como real o como un pegote:
  el VISOR DORADO ESPEJADO REFLEJA EL ENTORNO DE LA CAFETERÍA — la
  mesa, la fachada, los toldos, la calle, el cielo, la silueta de las
  personas alrededor — NO el fondo claro del estudio de la foto de
  producto, y NO un reflejo genérico. Es un espejo dorado/iridiscente:
  lo que se ve adentro es esta escena, deformada por su curvatura.
  Mismo criterio, más tenue, para el visor interno oscuro.
Si el visor sigue reflejando un fondo de estudio liso, el casco se lee
como un recorte pegado sobre la cabeza del modelo por más que su forma
sea perfecta.

PROHIBIDO ABSOLUTO:
- Cambiar la geometría, el color, el acabado o cualquier detalle
  físico del casco respecto de la foto adjunta, por más chico que sea.
- Agregar gráficos, logos, texto, franjas, degradés, stickers o
  textura de carbono sobre la calota — es negra mate y lisa.
- Cambiar el mate de la calota por brillante/glossy.
- Bajar el visor dorado, quitarlo, volverlo transparente, ahumado o
  negro, o cambiarle el color iridiscente.
- Eliminar el visor interno oscuro, subirlo, o fusionarlo con el
  dorado en una sola pieza.
- Omitir la fila de agujeritos del borde inferior del visor dorado o
  la pestaña/lengüeta.
- Cambiar el ángulo del casco para acomodar la pose del modelo — el
  ángulo lo manda la foto adjunta.
- Mostrar la cara, los ojos o los rasgos del hombre a través del visor
  interno oscuro.
- Alargar, estirar o achatar la proporción de la calota para que
  "entre" mejor en la cabeza del modelo.
- Dibujar la línea punteada de maquetación, las formas diagonales
  decorativas o el fondo de estudio.
- Poner logos de marcas reales, carteles con texto legible, texto
  superpuesto o marca de agua.
- Entregar una ilustración o un render 3D.

VERIFICACIÓN FINAL — ANTES DE ENTREGAR, CHEQUEÁ ESTAS 8 COSAS:
1. ¿El visor principal sigue LEVANTADO y sigue siendo ESPEJADO
   DORADO/IRIDISCENTE? ¿Se le ven la fila de agujeritos y la pestaña?
2. ¿El segundo visor interno sigue BAJADO y sigue siendo OSCURO, y se
   distingue como una pieza SEPARADA del dorado? ¿Tapa la cara?
3. ¿La calota sigue siendo NEGRA MATE y LISA, sin ningún gráfico,
   logo, texto, franja ni degradé?
4. ¿El ángulo del casco es 3/4 delantero, ligeramente desde arriba,
   mirando a la izquierda — el mismo de la foto adjunta — y NO uno que
   salió de elegir primero la pose del modelo?
5. ¿Están el pivote con su tornillo y su deslizador, los extractores
   traseros, la toma de aire de la mentonera con sus listones
   horizontales y la goma negra del borde inferior?
6. ¿Aparece algún ARTEFACTO DE MAQUETACIÓN (línea punteada, guía,
   formas diagonales, fondo de estudio)? No debe haber ninguno.
7. ¿El reflejo del visor dorado corresponde a la ESCENA NUEVA (mesa,
   fachada, calle, cielo de la cafetería) y no al fondo del estudio?
8. ¿La proporción de la calota es la misma de la foto adjunta, sin
   estirar ni achatar?

Orden de imágenes en el payload: la foto real del casco (checkpoint,
autoridad final de geometría, color, acabado y ángulo) — manda sobre
cualquier otro detalle, incluida la pose del modelo. Toda la escena de
la cafetería se genera a partir del texto de arriba.
```

</details>

**Estado:** 🔴 pendiente de generar · 🟡 variante, solo si el usuario confirma la lectura (B).

**Qué hay que hacer:** no correrlo por default. Si el usuario confirma que quería el casco puesto, correr este y auditar con especial atención al chequeo 4 (que el ángulo no lo haya definido la pose) y al 8 (proporción de la calota, defecto real del caso Turtles, Intento 4).

---

## Riesgos anticipados (para la auditoría, antes de ver el resultado)

| Riesgo | De dónde viene | Chequeo que lo cubre |
|---|---|---|
| El generador baja el visor dorado "porque un casco se usa así" | Defecto de posición de pieza; el prior del modelo pesa más que la foto | Verificación 1 |
| Fusiona los dos visores en uno solo, o elimina el interno | `simulacion-29-tmnt-lifestyle.md` (agregó un visor que no iba; después no respetó la opacidad) | Verificación 2 |
| Agrega gráficos/franjas sobre la calota negra lisa | Toda superficie grande y vacía invita a rellenar — mismo mecanismo que los adornos inventados del Tipo B | Verificación 3 |
| El ángulo se corre para "mejorar" la composición | `simulacion-29`, Intentos 3 y 4; `simulacion-12`, Intento 1 | Verificación 4 |
| Aparece la línea punteada o las formas diagonales de maquetación | `simulacion-31` y `simulacion-32` | Verificación 6 |
| El visor sigue reflejando el fondo de estudio → el casco se lee como recorte pegado | **Riesgo nuevo de este caso** — ver lección abajo | Verificación 7 |
| La calota sale estirada/alargada (solo en la variante B) | `simulacion-29`, Intento 4, defecto 2 | Verificación 8 (variante B) |

---

## Lección generalizable que deja este caso

**Cuando el objeto se traslada a una escena nueva, sus superficies reflectantes tienen que reflejar la escena nueva, no la del estudio de origen.** Si no, el objeto se lee como un recorte pegado por más que su forma sea perfecta.

No estaba cubierta por el eje de *estilo de render y realismo de material* del checklist Tipo A: ese ítem nació del caso opuesto —un mockup vectorial plano contaminando una foto— y lo que pide es **conservar el tratamiento fotográfico del checkpoint**, incluidos "los mismos reflejos especulares". Aplicado sin matiz a un traslado de escena, empuja justo al defecto contrario: conservar el reflejo del estudio dentro de un visor espejado que ahora está en una cafetería. Se registra como ítem nuevo del checklist **Tipo A** en [`orquestacion-agentes-paralelos.md`](../orquestacion-agentes-paralelos.md).

---

**Última actualización:** 2026-07-29 · caso creado desde cero a partir del pedido de foto lifestyle en una cafetería. Se escribieron **2 prompts** —(A) casco apoyado sobre la mesa, principal, y (B) casco puesto, variante— con la **ambigüedad del pedido registrada y pendiente de confirmación del usuario**: nadie eligió todavía cuál de las dos lecturas es la correcta, y (A) queda como principal solo porque es la única que permite conservar literalmente el ángulo de 3/4 delantero desde arriba que el usuario pidió ("el mismo ángulo y todo"), además de ser la única que deja ver el visor dorado levantado y el interior. Los dos prompts comparten el bloque de autoridad de forma pieza por pieza, el bloque de los dos visores declarado **en positivo** (dorado levantado + interno oscuro bajado, referenciando los defectos de visor ya vividos en `simulacion-29-tmnt-lifestyle.md`), el bloque de limpieza de artefactos de maquetación (`simulacion-31` / `simulacion-32`) y el bloque de realismo con el reflejo de la escena nueva sobre el visor espejado. Deja **1 lección nueva** para el checklist Tipo A: las superficies reflectantes de un objeto trasladado reflejan la escena nueva, no el estudio de origen.
