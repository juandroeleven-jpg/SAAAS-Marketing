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

## ✅ AMBIGÜEDAD DEL PEDIDO — CERRADA (2026-07-29, confirmada por el usuario): el casco va PUESTO

**Respuesta textual del usuario:** *"el casco en la cafetería es sobre una persona."*

"Sentado con este casco" admitía dos lecturas y se habían escrito las dos. **Gana la (B): un hombre sentado con el casco PUESTO.** Queda como **único prompt del caso**.

**La variante (A) —el casco apoyado sobre la mesa— queda ELIMINADA de este documento**, no archivada como alternativa: la decisión está tomada y dejarla escrita solo invita a correr el prompt equivocado.

### ⚠️ Consecuencia de la decisión, y por qué hay que dejarla escrita

**(A) era la lectura que conservaba LITERALMENTE el ángulo de la foto de producto.** Con el casco apoyado sobre una mesa, el 3/4 delantero desde arriba se sostiene solo: el objeto está quieto sobre una superficie y la cámara lo mira desde la altura de una persona sentada enfrente, igual que en el catálogo. Al ponerle el casco a una persona, **el ángulo pasa a depender de la pose de la cabeza**, que es exactamente el punto donde el pedido del usuario (*"exactamente en la misma posición, el mismo ángulo y todo"*) se puede romper.

**Cómo se resuelve:** con la regla ya establecida en el repo — **el ángulo del casco lo define la foto de producto, no la pose del modelo**. O sea que **primero se fija el ángulo del casco según la referencia, y después se construye la pose de la persona alrededor**. Nunca al revés. Ese bloque ya existía en el prompt y **se reforzó**, porque con esta decisión pasa a ser **el punto de riesgo principal de todo el caso**.

**Segunda consecuencia, menor pero real:** con una cabeza adentro se pierde la vista del interior del casco que (A) sí dejaba ver. El **visor dorado levantado sí se sigue viendo** —es la pieza que más importa comunicar— y por la abertura de los ojos se ve el **visor interno oscuro bajado**, que además es lo que resuelve el requisito de rostro no visible.

---

## Prompt definitivo — el hombre con el casco PUESTO, sentado en la cafetería

<details><summary>Prompt definitivo — hombre sentado con el casco puesto (copiar/pegar en Nano Banana Pro)</summary>

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

CRÍTICO — ESTE ES EL PUNTO MÁS IMPORTANTE DE TODO EL PROMPT: EL
ÁNGULO DEL CASCO LO DEFINE LA FOTO DE PRODUCTO, NO LA POSE DEL
MODELO. Leelo dos veces antes de componer la imagen.
- EL ÁNGULO ES LA CONSTANTE, LA POSE ES LA VARIABLE. El orden de
  construcción de la imagen es este y no otro:
  PASO 1 — fijar el casco en el ángulo EXACTO de la foto adjunta:
    3/4 DELANTERO, LIGERAMENTE DESDE ARRIBA, mirando hacia la
    IZQUIERDA del encuadre, con el mismo punto de vista, la misma
    altura de cámara y el mismo grado de rotación.
  PASO 2 — recién después, construir alrededor de ese casco la pose
    de la cabeza, el cuello, los hombros y el cuerpo del hombre, y la
    posición de la cámara, para que ese ángulo se cumpla.
  NUNCA al revés. NO elijas primero una pose "natural", "cómoda",
  "relajada" o "fotogénica" y después acomodes el casco encima: eso
  cambia el ángulo y rompe el pedido.
- POR QUÉ ESTE BLOQUE ES CRÍTICO ACÁ: el usuario pidió "exactamente
  la misma posición, el mismo ángulo y todo", y como el casco va
  PUESTO SOBRE UNA PERSONA, el ángulo deja de estar garantizado por
  el objeto —que en una foto de producto está simplemente apoyado— y
  pasa a depender de cómo esté la cabeza del modelo. Es el ÚNICO
  punto del caso donde la escena nueva puede arrastrar al objeto.
- La cabeza puede quedar en una posición poco habitual para una foto
  lifestyle (levemente girada, levemente inclinada, mirando hacia un
  costado): ESO ESTÁ BIEN Y ES LO PEDIDO. La naturalidad de la pose
  se sacrifica antes que el ángulo del casco, no al revés.
- "Parecido" no alcanza: tiene que ser verificable comparando lado a
  lado con la foto adjunta, superponiendo mentalmente las dos
  siluetas del casco.

CRÍTICO — NO SE VE EL ROSTRO DEL HOMBRE. Declarado EN POSITIVO
primero, y recién después en negativo:
- EN POSITIVO: el hombre lleva el casco PUESTO, con el visor dorado
  LEVANTADO y el visor interno solar OSCURO BAJADO. Por lo tanto, lo
  que se ve en la abertura de los ojos es LA SUPERFICIE OSCURA DEL
  VISOR INTERNO y NADA MÁS: una superficie tintada, curva, con los
  reflejos tenues de la cafetería. El casco con el visor interno
  bajado es lo que resuelve el encuadre — no hace falta ningún
  recurso extra: ni recortar la cabeza, ni tapar con un objeto, ni
  desenfocar la cara, ni poner al hombre a contraluz.
- EN NEGATIVO, como refuerzo: está PROHIBIDO que aparezca cualquier
  rasgo facial, ojos, cejas, nariz, piel visible de la cara, una
  silueta o sombra de rostro insinuada por detrás del visor interno,
  o un reflejo con forma de rostro sobre cualquiera de los dos
  visores. Ninguna de esas cosas existe en esta imagen.
- La MENTONERA del casco es una pieza sólida y cubre la zona de la
  boca y el mentón: por debajo de la línea del visor no asoma nada de
  la cara.
Defecto real ya vivido: `simulacion-29-tmnt-lifestyle.md`, Intento 1 —
el visor salió transparente y se alcanzaba a ver a la persona adentro.

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

VERIFICACIÓN FINAL — ANTES DE ENTREGAR, CHEQUEÁ ESTAS 9 COSAS. LA 1
ES LA MÁS IMPORTANTE Y VA PRIMERO A PROPÓSITO:
1. ¿El ÁNGULO del casco es 3/4 delantero, ligeramente desde arriba,
   mirando a la izquierda — el MISMO de la foto adjunta — y NO uno
   que salió de elegir primero una pose cómoda para el modelo? Poné
   las dos imágenes lado a lado y compará la silueta del casco. Si el
   ángulo no coincide, la imagen está MAL aunque todo lo demás esté
   bien: rehacela acomodando la pose del hombre, no el casco.
2. ¿El visor principal sigue LEVANTADO y sigue siendo ESPEJADO
   DORADO/IRIDISCENTE? ¿Se le ven la fila de agujeritos y la pestaña?
3. ¿El segundo visor interno sigue BAJADO y sigue siendo OSCURO, y se
   distingue como una pieza SEPARADA del dorado?
4. ¿Se ve algún rasgo de CARA —ojos, cejas, nariz, piel, silueta
   insinuada detrás del visor interno o reflejo con forma de rostro
   sobre alguno de los dos visores—? No debe haber ninguno.
5. ¿La calota sigue siendo NEGRA MATE y LISA, sin ningún gráfico,
   logo, texto, franja ni degradé?
6. ¿Están el pivote con su tornillo y su deslizador, los extractores
   traseros, la toma de aire de la mentonera con sus listones
   horizontales y la goma negra del borde inferior?
7. ¿Aparece algún ARTEFACTO DE MAQUETACIÓN (línea punteada, guía,
   formas diagonales, fondo de estudio)? No debe haber ninguno.
8. ¿El reflejo del visor dorado corresponde a la ESCENA NUEVA (mesa,
   fachada, calle, cielo de la cafetería) y no al fondo del estudio?
9. ¿La proporción de la calota es la misma de la foto adjunta, sin
   estirar ni achatar para que "entre" en la cabeza del modelo?

Orden de imágenes en el payload: la foto real del casco (checkpoint,
autoridad final de geometría, color, acabado y ángulo) — manda sobre
cualquier otro detalle, incluida la pose del modelo. Toda la escena de
la cafetería se genera a partir del texto de arriba.
```

</details>

**Estado:** 🔴 pendiente de generar. **Sin bloqueos:** la lectura quedó confirmada por el usuario el 2026-07-29 (*"el casco en la cafetería es sobre una persona"*) y este es el prompt definitivo del caso.

**Qué hay que hacer:** correrlo en sesión aislada y auditar con los **9 chequeos** de la verificación final, con atención máxima al **1** (que el ángulo no lo haya definido la pose — es el punto de riesgo principal del caso desde que el casco va puesto), al **4** (rostro no visible) y al **9** (proporción de la calota, defecto real del caso Turtles, Intento 4).

---

## Riesgos anticipados (para la auditoría, antes de ver el resultado)

| Riesgo | De dónde viene | Chequeo que lo cubre |
|---|---|---|
| **El ángulo del casco lo termina definiendo la pose del modelo** — riesgo #1 del caso desde que se confirmó que el casco va PUESTO | `simulacion-29`, Intentos 3 y 4; `simulacion-12`, Intento 1. Con el casco apoyado (variante descartada) el ángulo se sostenía solo; con el casco puesto depende de la cabeza | **Verificación 1** |
| El generador baja el visor dorado "porque un casco se usa así" | Defecto de posición de pieza; el prior del modelo pesa más que la foto | Verificación 2 |
| Fusiona los dos visores en uno solo, o elimina el interno | `simulacion-29-tmnt-lifestyle.md` (agregó un visor que no iba; después no respetó la opacidad) | Verificación 3 |
| Se ve la cara / una silueta a través del visor interno oscuro | `simulacion-29`, Intento 1 | Verificación 4 |
| Agrega gráficos/franjas sobre la calota negra lisa | Toda superficie grande y vacía invita a rellenar — mismo mecanismo que los adornos inventados del Tipo B | Verificación 5 |
| Aparece la línea punteada o las formas diagonales de maquetación | `simulacion-31` y `simulacion-32` | Verificación 7 |
| El visor sigue reflejando el fondo de estudio → el casco se lee como recorte pegado | **Riesgo nuevo de este caso** — ver lección abajo | Verificación 8 |
| La calota sale estirada/alargada al ponerla sobre una cabeza | `simulacion-29`, Intento 4, defecto 2 | Verificación 9 |

---

## Lección generalizable que deja este caso

**Cuando el objeto se traslada a una escena nueva, sus superficies reflectantes tienen que reflejar la escena nueva, no la del estudio de origen.** Si no, el objeto se lee como un recorte pegado por más que su forma sea perfecta.

No estaba cubierta por el eje de *estilo de render y realismo de material* del checklist Tipo A: ese ítem nació del caso opuesto —un mockup vectorial plano contaminando una foto— y lo que pide es **conservar el tratamiento fotográfico del checkpoint**, incluidos "los mismos reflejos especulares". Aplicado sin matiz a un traslado de escena, empuja justo al defecto contrario: conservar el reflejo del estudio dentro de un visor espejado que ahora está en una cafetería. Se registra como ítem nuevo del checklist **Tipo A** en [`orquestacion-agentes-paralelos.md`](../orquestacion-agentes-paralelos.md).

---

**Última actualización:** 2026-07-29 · caso creado desde cero a partir del pedido de foto lifestyle en una cafetería. Se escribieron **2 prompts** —(A) casco apoyado sobre la mesa y (B) casco puesto— con la ambigüedad del pedido registrada, porque "sentado con este casco" admitía las dos lecturas. Los dos compartían el bloque de autoridad de forma pieza por pieza, el bloque de los dos visores declarado **en positivo** (dorado levantado + interno oscuro bajado, referenciando los defectos de visor ya vividos en `simulacion-29-tmnt-lifestyle.md`), el bloque de limpieza de artefactos de maquetación (`simulacion-31` / `simulacion-32`) y el bloque de realismo con el reflejo de la escena nueva sobre el visor espejado. Deja **1 lección nueva** para el checklist Tipo A: las superficies reflectantes de un objeto trasladado reflejan la escena nueva, no el estudio de origen.

**2026-07-29 (segunda pasada — respuesta del usuario) — ✅ decidido: el casco va PUESTO.** Textual: *"el casco en la cafetería es sobre una persona."* Gana la lectura **(B)**, que pasa a ser el **prompt definitivo y único del caso**; la variante **(A) —casco apoyado sobre la mesa— se eliminó del documento**, no se archivó como alternativa. El caso sale del estado 🟡. **Consecuencia que quedó escrita, porque es la parte cara de la decisión:** (A) era la lectura que conservaba **literalmente** el 3/4 delantero desde arriba de la foto de producto —un objeto apoyado mantiene su ángulo solo—, mientras que con el casco puesto **el ángulo pasa a depender de la pose de la cabeza del modelo**. Se resolvió aplicando la regla ya establecida en el repo —**el ángulo del casco lo define la foto de producto, no la pose del modelo**— y **reforzando ese bloque del prompt**: ahora declara el orden de construcción en dos pasos (primero se fija el casco, después se construye la pose alrededor), avisa explícitamente que una pose poco habitual es aceptable si eso es lo que hace falta para respetar el ángulo, y su chequeo pasó a ser **el número 1** de la verificación final, con comparación lado a lado. Se sumó además el bloque de **rostro no visible** declarado en positivo, coherente con la decisión del centro comercial de la [Simulación 39](simulacion-39-lifestyle-avenida-y-centro-comercial.md): lo que se ve en la abertura de los ojos es la superficie del visor interno oscuro bajado y nada más.
