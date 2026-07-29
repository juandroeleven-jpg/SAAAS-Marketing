# Simulación 39 — Casco modular/flip up negro mate en DOS ESTADOS distintos: 2 fotos lifestyle (avenida pública con tráfico + centro comercial con visor opaco) (Tipo A, geometría intacta + traslado de escena)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

**Pedido del usuario — 2 fotos, cada una con SU PROPIA imagen de referencia:**

- **Foto 1 — avenida pública** (usa la **imagen de referencia LATERAL**): *"Una foto en una avenida pública con tráfico, de una mujer, con el fondo medio borroso pero suave, usando este casco así full en negro, con el mismo ángulo. La mujer debe adaptarse al mismo ángulo del casco. Y no se debe inventar nada con respecto al casco: debe quedar igual."*
- **Foto 2 — centro comercial** (usa la **imagen de referencia FRONTAL**): *"Un hombre mirando de frente, que no se le vea el rostro por debajo del visor, en un fondo de un centro comercial con este casco, pero que el visor sea completamente negro y no se vea a través de él."*

Es un caso **Tipo A** con la variante de **traslado de escena** que ya venían trabajando la [Simulación 29](simulacion-29-tmnt-lifestyle.md), la [Simulación 34](simulacion-34-lifestyle-cafeteria-casco-negro.md) y la [Simulación 37](simulacion-37-lifestyle-montana-visor-opaco.md): no se transfiere ningún diseño gráfico — el objeto ya está terminado y aprobado en la foto de producto, y lo único que cambia es **la escena alrededor**. Cada foto adjunta del casco es la **única autoridad de forma, color y acabado** de su prompt; ni la avenida ni el centro comercial aportan nada al objeto, solo lo rodean y lo iluminan.

**La diferencia más importante de este caso, y donde más fácil se rompe:** las dos fotos NO usan el mismo estado del casco. Son **dos referencias distintas del mismo modelo, en dos configuraciones físicas distintas** — mentonera **levantada** en una, **bajada** en la otra — y cada prompt tiene que declarar la suya y prohibir explícitamente la otra.

---

## Estado general del caso

| | |
|---|---|
| **Estado** | 🔴 **pendiente de generar** (las 2 fotos) — esta sesión no tiene conectada una herramienta de generación de imagen; los prompts quedan listos para copiar/pegar en Nano Banana Pro |
| **Tipo** | A — geometría intacta + traslado de escena |
| **Fotos** | **2** — (1) avenida pública con tráfico, mujer, referencia **LATERAL** · (2) centro comercial, hombre de frente, referencia **FRONTAL** |
| **Prompts** | **2** — uno por foto, **cada uno en sesión aislada** del generador (contaminación cruzada, caso Vortex, [`simulacion-11`](simulacion-11-vortex-verificacion.md)) |
| **Referencias** | **2 imágenes distintas**, una por foto. **No son intercambiables** |
| **Requisitos duros del usuario** | el casco no cambia nada (Foto 1 y 2) · el ángulo del casco manda sobre la pose de la modelo (Foto 1) · visor 100 % opaco y rostro no visible (Foto 2) |
| **Ambigüedades abiertas** | 🟡 **Foto 2: "que (no) se vea por debajo del visor"** — pendiente de confirmación del usuario |

### 🟡 AMBIGÜEDAD DE LA FOTO 2 — PENDIENTE DE CONFIRMACIÓN DEL USUARIO

> **El usuario escribió, con errores de tipeo, una frase que admite dos lecturas opuestas — y no se elige por cuenta propia.**
>
> La frase fue: *"un hombre mirando de frente que se vea por debajo del visor"*, que puede leerse como **"que SÍ se vea"** algo por debajo de la línea del visor, o como **"que NO se vea"** nada.
>
> **Por qué el prompt se escribió con la lectura "NO se ve nada":** porque el propio usuario **cerró la frase sin ambigüedad**, dos renglones después: *"que el visor sea completamente negro y no se vea a través de él"*. Con esa segunda frase la intención global queda clara — **visor totalmente opaco, rostro no visible** — y es la que está escrita en el prompt.
>
> **Qué queda pendiente:** confirmar si además quería que **se le viera el mentón o la boca por debajo de la línea del visor**, o sea la parte baja de la cara asomando bajo el borde inferior del visor. **Si confirma esa segunda lectura, el prompt de la Foto 2 NO se puede parchear**: con la **mentonera CERRADA** de la referencia frontal, la boca y el mentón están **físicamente tapados por la mentonera**, así que no hay ninguna redacción que lo resuelva. Habría que **partir de la referencia LATERAL, con la mentonera abierta** (la de la Foto 1), que es la única configuración de este casco donde la zona de la boca y el mentón queda descubierta — y rehacer el encuadre desde ahí.
>
> **Nadie confirmó todavía cuál de las dos es. Antes de dar por bueno un resultado hay que preguntar.**

### 🔎 Nota derivada (no es una elección del usuario, es una consecuencia física)

> En la **Foto 1** la mentonera va **levantada**, así que la zona de la boca y el mentón de la modelo queda **abierta y visible**, y los ojos quedan **cubiertos por el visor interno solar oscuro bajado**. Eso no es una decisión de redacción: es lo que se ve cuando alguien usa este casco en esa configuración. **El usuario no pidió ocultar el rostro en la Foto 1** — ese requisito lo puso solo en la Foto 2 —, así que el prompt lo escribe así, en positivo. Si más adelante pidiera que en la avenida tampoco se le vea nada de la cara, eso implicaría **bajar la mentonera**, o sea cambiar el estado del casco, y habría que partir de la referencia frontal. Queda anotado para que nadie lo "corrija" en silencio.

---

## Las dos referencias — descripción transcrita, para que cada prompt tenga contra qué verificar

Es el **mismo modelo de casco**, negro mate, **integral MODULAR / FLIP UP**, fotografiado en dos vistas y en **dos estados distintos**. Las dos imágenes son **archivos de maquetación**, no fotos de catálogo limpias.

### Referencia 1 — LATERAL, para la Foto 1 (mentonera ABIERTA)

| Pieza | Cómo está en el checkpoint |
|---|---|
| Vista / ángulo | **Lateral 3/4**, casco mirando hacia la **izquierda** del encuadre |
| Calota | **Negro MATE**, lisa, sin gráficos, sin logos, sin franjas |
| **Mentonera** | **LEVANTADA / ABIERTA** — el arco de la mentonera está **rotado hacia arriba y hacia atrás**, apoyado sobre la parte alta de la calota. La zona de la **boca y el mentón queda completamente abierta** |
| Visor principal | **Transparente / ahumado claro**, y **LEVANTADO junto con la mentonera** (sube con ella, es un flip up) |
| Segundo visor interno | **Solar, oscuro, BAJADO**, cubriendo la zona de los ojos, visible por debajo del conjunto levantado. Son **DOS piezas distintas, en dos posiciones distintas** |
| **Acolchado interior** | **ROJO**, asomando en el borde inferior del casco. Es una **pieza real del producto** |
| Correa | Abajo del todo, con sus **herrajes** visibles |

### Referencia 2 — FRONTAL, para la Foto 2 (mentonera CERRADA)

| Pieza | Cómo está en el checkpoint |
|---|---|
| Vista / ángulo | **De frente** |
| Calota | **Negro MATE**, lisa, con las **líneas de la calota** visibles |
| **Mentonera** | **BAJADA y CERRADA** — posición normal de casco integral |
| Visor principal | **BAJADO**, y **transparente / ahumado muy claro**: a través de él **se ve el interior del casco, incluido el acolchado ROJO** |
| **Acolchado interior** | **ROJO**, visible a través del visor transparente |
| Toma de aire | En la **mentonera**, abajo |

**Artefactos de maquetación que NO pertenecen al producto — en las DOS imágenes:**

- **LÍNEAS GUÍA PUNTEADAS**, verticales y horizontales;
- una **LÍNEA VIOLETA** en el borde inferior (referencia 1);
- y, asomando en el borde inferior, **PARTE DE OTRO CASCO** de la misma lámina de catálogo;
- más el **FONDO BLANCO DE ESTUDIO**.

⚠️ **El artefacto más peligroso es el segundo casco.** Una línea punteada el generador la lee como ruido y la descarta con facilidad; **un casco que asoma en el borde es un objeto plausible**, y el generador lo puede incorporar como un objeto real de la escena nueva — un casco apoyado en la vereda, sobre un banco del shopping, o un segundo motociclista. Hay que **nombrarlo y excluirlo explícitamente**; no alcanza con pedir "fondo limpio". Mismo tipo de artefacto ya registrado en la [Simulación 31](simulacion-31-casco-bob-esponja-visor-transparente.md) (guía punteada vertical), la [Simulación 32](simulacion-32-visor-transparente-4k-laterales.md) (artefactos de captura), la [Simulación 34](simulacion-34-lifestyle-cafeteria-casco-negro.md) (línea punteada + formas diagonales) y la [Simulación 37](simulacion-37-lifestyle-montana-visor-opaco.md) (tarjeta de homologación de otra pieza del catálogo).

---

## Foto 1 — Avenida pública con tráfico, mujer, mentonera LEVANTADA (referencia LATERAL)

⚠️ **Adjuntar la imagen de referencia LATERAL, la de la mentonera abierta. Correr en una sesión aislada del generador.**

<details><summary>Prompt Foto 1 — avenida pública con tráfico (copiar/pegar en Nano Banana Pro)</summary>

```
Genera una FOTOGRAFÍA REAL tipo lifestyle en 4K, ultra nítida, de una
MUJER en una AVENIDA PÚBLICA CON TRÁFICO, de día, con el casco de la
foto adjunta PUESTO.

ADVERTENCIA MÁXIMA — LEER PRIMERO: EL CASCO NO CAMBIA ABSOLUTAMENTE
NADA. Ni su geometría, ni su forma, ni sus proporciones, ni su color,
ni su acabado, ni la POSICIÓN DE NINGUNA DE SUS PIEZAS. Lo único que
cambia en esta imagen es el ENTORNO, la ILUMINACIÓN y la PERSONA — el
casco es el mismo objeto físico, solo re-iluminado y fotografiado en un
escenario nuevo, nunca rediseñado ni reinterpretado. El usuario lo pidió
con estas palabras: "no se debe inventar nada con respecto al casco:
debe quedar igual".

AUTORIDAD DE FORMA — LA FOTO ADJUNTA DEL CASCO ES LA ÚNICA FUENTE DE
GEOMETRÍA, COLOR Y ACABADO. Nada de la escena nueva, ni tu propio
criterio sobre "cómo suele verse un casco de moto", puede modificar el
objeto. El casco de esta imagen tiene que ser una copia EXACTA, pieza
por pieza, del casco de la foto adjunta. Enumerado explícito de lo que
NO puede cambiar:
- TIPO DE CASCO: integral MODULAR / FLIP UP, con su línea de separación
  y su mecanismo de mentonera abatible, en su recorrido y posición
  exactos.
- MENTONERA: LEVANTADA Y ABIERTA (ver el bloque dedicado más abajo — es
  el punto más importante de este prompt).
- VISOR PRINCIPAL: transparente / ahumado claro, LEVANTADO junto con la
  mentonera (ver el bloque de los dos visores).
- SEGUNDO VISOR INTERNO SOLAR: tintado OSCURO, BAJADO, cubriendo la
  zona de los ojos (ver el bloque de los dos visores).
- CALOTA: negro MATE, lisa. Sin gráficos, sin logos, sin texto, sin
  franjas, sin degradés, sin textura de fibra de carbono, sin brillo
  glossy. Mate y lisa, punto.
- ACOLCHADO INTERIOR ROJO: el acolchado que asoma por el borde inferior
  del casco es ROJO. Es una PIEZA REAL DEL PRODUCTO, no un reflejo, no
  una luz, no un artefacto de la foto de estudio. Está en el resultado
  final, en el mismo lugar y del mismo rojo. Como la mentonera está
  levantada, la abertura de la boca y el mentón queda descubierta y ese
  rojo del interior se ve todavía mejor. Eliminarlo, apagarlo, oscurecerlo
  o "absorberlo" en el negro del casco es un error grave.
- CORREA Y SUS HERRAJES: la correa cuelga por debajo del casco con sus
  herrajes metálicos visibles, tal como en la foto adjunta.
- TOMA DE AIRE DE LA MENTONERA: está en la pieza de la mentonera, y como
  la mentonera está levantada, viaja con ella hacia arriba y hacia atrás.
No inventes, no "mejores", no agregues ni quites ninguna pieza, ni un
tornillo, ni una ranura, ni un borde, ni una toma de aire. Si dudás de
cómo se ve un detalle, copiá exactamente lo que se ve en la foto
adjunta, no lo que "normalmente" tendría un casco de este estilo.

CRÍTICO — LA MENTONERA VA LEVANTADA Y ABIERTA, COMO EN LA FOTO ADJUNTA.
Declarado EN POSITIVO, porque es el punto donde este pedido se rompe:
un casco modular se ve casi siempre cerrado, y vas a tener la tentación
de "normalizarlo" a esa posición. NO lo hagas.
- EN POSITIVO: el ARCO DE LA MENTONERA está ROTADO HACIA ARRIBA Y HACIA
  ATRÁS, apoyado sobre la parte alta de la calota, exactamente como en
  la foto adjunta. La ZONA DE LA BOCA Y EL MENTÓN queda COMPLETAMENTE
  ABIERTA y descubierta. El casco se ve, en esta imagen, con la cara
  inferior despejada.
- EN NEGATIVO, como refuerzo: PROHIBIDO bajar la mentonera. PROHIBIDO
  cerrarla. PROHIBIDO entregar el casco en posición de integral cerrado.
  PROHIBIDO dejarla a medio camino. PROHIBIDO dibujarla cerrada "porque
  se ve más prolijo", "porque es más seguro" o "porque así se usa un
  casco". El estado de la mentonera lo manda la foto adjunta, no el
  sentido común sobre cascos.

CRÍTICO — DOS VISORES, DOS PIEZAS DISTINTAS, EN DOS POSICIONES
DISTINTAS. Los dos existen en la foto adjunta y los dos siguen
existiendo en el resultado:
- El VISOR PRINCIPAL es TRANSPARENTE / ahumado claro y está LEVANTADO,
  subido JUNTO CON LA MENTONERA (es un flip up: la mentonera y el visor
  suben en el mismo movimiento). Sigue levantado en la imagen final y
  sigue siendo transparente.
- El VISOR INTERNO SOLAR es una SEGUNDA pieza, distinta, tintada
  OSCURA, que está BAJADA y cubre la ZONA DE LOS OJOS. Sigue bajado y
  sigue siendo oscuro.
- Son DOS piezas separadas, con dos posiciones distintas y dos
  materiales distintos. Se ven las dos al mismo tiempo.
Prohibido fusionarlas en una sola pieza. Prohibido bajar el visor
principal. Prohibido subir el visor interno oscuro. Prohibido cambiar
el transparente por oscuro o el oscuro por transparente. Prohibido
agregar un TERCER visor.
Consecuencia física, declarada en positivo para que no la resuelvas por
tu cuenta: como el visor interno oscuro está BAJADO, los OJOS de la
mujer quedan CUBIERTOS por él y no se ven; y como la mentonera está
LEVANTADA, la BOCA y el MENTÓN quedan a la vista. Así es como se ve
este casco en esta configuración, y así va en la imagen.
Defecto real ya vivido con este tipo de casco:
`simulacion-29-tmnt-lifestyle.md` (primero se agregó un visor que no
existía y después no se respetó su estado) y
`simulacion-34-lifestyle-cafeteria-casco-negro.md` (los dos visores
tienden a fusionarse en uno).

CRÍTICO — EL ÁNGULO DEL CASCO LO DEFINE LA FOTO DE PRODUCTO, Y LA POSE
DE LA MODELO SE ADAPTA A ÉL. El usuario lo pidió con estas palabras:
"con el mismo ángulo — la mujer debe adaptarse al mismo ángulo del
casco". O sea:
- PRIMERO se fija el ángulo del casco: VISTA LATERAL 3/4, MIRANDO HACIA
  LA IZQUIERDA DEL ENCUADRE, con el mismo punto de vista, la misma
  altura de cámara y el mismo grado de rotación de la foto adjunta.
- DESPUÉS se construye alrededor la pose de la cabeza, el cuello, los
  hombros y el cuerpo de la mujer, para que ese ángulo se cumpla. La
  postura de la modelo es la variable; el ángulo del casco es la
  constante.
- NO al revés. No elijas primero una pose "más natural", "más
  fotogénica" o "más dinámica" y después acomodes el casco: eso cambia
  el ángulo y rompe el pedido.
"Parecido" no alcanza: tiene que ser verificable comparando lado a lado
con la foto adjunta.

ESCENA: UNA AVENIDA PÚBLICA CON TRÁFICO, DE DÍA. Una MUJER con el casco
puesto, en primer plano, nítida. Detrás de ella, una avenida urbana real
con TRÁFICO: autos y motos circulando, carriles, semáforos, luminarias,
árboles de vereda y edificios a los costados. Ambiente de ciudad real,
de día.
- La MUJER va NÍTIDA y el CASCO va PERFECTAMENTE NÍTIDO — es el punto de
  atención de la foto.
- Puede llevar ropa urbana o de moto coherente con la escena.
- Sin logos de marcas reales, sin carteles con texto legible, sin
  patentes legibles, sin texto superpuesto, sin marca de agua.

DESENFOQUE DEL FONDO — "MEDIO BORROSO PERO SUAVE", COMO PIDIÓ EL
USUARIO. Esto es un desenfoque ÓPTICO REAL, no un filtro:
- Es PROFUNDIDAD DE CAMPO de una cámara real: apertura amplia, el plano
  de foco sobre la mujer y el casco, y el fondo cayendo fuera de foco de
  forma PROGRESIVA — cuanto más lejos, más desenfocado.
- El bokeh es SUAVE y ORGÁNICO: las luces, los vidrios y los reflejos
  del tráfico se abren en círculos blandos; los contornos de autos y
  edificios se disuelven sin cortarse.
- Es un desenfoque MEDIO, no extremo: la avenida se sigue LEYENDO como
  una avenida con tráfico, no se convierte en una mancha de color
  irreconocible.
- PROHIBIDO un blur parejo y uniforme aplicado a todo el fondo por
  igual, tipo filtro de software o "gaussian blur": eso no es
  profundidad de campo y se nota. La cantidad de desenfoque tiene que
  aumentar con la distancia.
- La transición entre la mujer nítida y el fondo desenfocado es suave y
  natural, sin halos, sin bordes recortados y sin zonas nítidas
  flotando dentro del fondo.

ILUMINACIÓN — LUZ NATURAL DE DÍA:
- Luz de día real de calle, suave, sin sol duro de mediodía que queme
  las altas luces ni aplaste los negros.
- El CASCO RECIBE EXACTAMENTE LA MISMA LUZ QUE EL RESTO DE LA ESCENA:
  misma dirección, misma dureza, misma temperatura de color que la
  mujer, la vereda, los autos y los edificios.
- ULTRARREALISTA: el resultado es una FOTOGRAFÍA tomada con cámara —
  con su profundidad de campo, su grano fino y su rango dinámico reales.
  NO es un render 3D, NO es una ilustración, NO es arte digital, NO es
  una imagen de videojuego, NO es un collage.

INTEGRACIÓN EN LA ESCENA — EL CASCO ES UN OBJETO FÍSICO DENTRO DE ESTA
FOTO, NO UN RECORTE PEGADO ENCIMA. Este bloque es el que decide si la
imagen se lee como real:
- El casco RECIBE la luz del ambiente de la avenida, con la misma
  dirección y la misma temperatura de color que todo lo demás.
- El casco PROYECTA SOMBRA sobre los hombros, el cuello y la ropa de la
  mujer, y RECIBE sombra y rebote de luz del entorno.
- La CALOTA MATE devuelve un realce de luz SUAVE Y DIFUSO que sigue su
  curvatura — nunca un brillo especular duro, porque es mate.
- Las SUPERFICIES BRILLANTES del casco (piezas de plástico pulido,
  herrajes de la correa, el mecanismo del flip up) SÍ devuelven REFLEJOS
  ESPECULARES NÍTIDOS, y en esos reflejos se ve LA AVENIDA: el cielo,
  los edificios, los autos, la línea de la calle.
- El VISOR PRINCIPAL TRANSPARENTE LEVANTADO y el VISOR INTERNO OSCURO
  BAJADO también REFLEJAN LA AVENIDA, en reflejos tenues, alargados y
  deformados por su curvatura.
PROHIBIDO que cualquiera de estas superficies siga reflejando EL FONDO
BLANCO DEL ESTUDIO de la foto de producto, o un reflejo genérico de
estudio. Lo que se conserva del checkpoint es el MATERIAL y su
comportamiento (qué tan mate, qué tan especular, cómo se curva el
reflejo); lo que CAMBIA es el CONTENIDO de ese reflejo, que ahora es la
avenida. Si las superficies siguen reflejando un fondo liso de estudio,
el casco se lee como un recorte pegado sobre la cabeza de la mujer por
más que su forma sea perfecta. Lección ya registrada en
`simulacion-34-lifestyle-cafeteria-casco-negro.md` y confirmada en
`simulacion-37-lifestyle-montana-visor-opaco.md`.

LIMPIEZA DE LA REFERENCIA — LO QUE ES MAQUETACIÓN NO EXISTE EN LA
ESCENA NUEVA. La foto adjunta del casco es un ARCHIVO DE MAQUETACIÓN de
una lámina de catálogo, y trae elementos que NO son parte del producto:
- LÍNEAS GUÍA PUNTEADAS, verticales y horizontales;
- una LÍNEA VIOLETA en el borde inferior;
- PARTE DE OTRO CASCO, que asoma por el borde inferior de la lámina;
- y el FONDO BLANCO DE ESTUDIO.
NINGUNO de los cuatro aparece en la imagen final. No hay ninguna línea
punteada, ninguna guía, ninguna marca de recorte, ninguna línea violeta
y ningún resto del fondo blanco de estudio. El fondo de esta imagen es
la avenida y nada más.
ATENCIÓN ESPECIAL CON EL SEGUNDO CASCO: ese casco que asoma en el borde
NO ES UN OBJETO DE ESTA ESCENA. Es un producto vecino de la lámina de
catálogo. NO lo incorpores como un casco apoyado en la vereda, ni sobre
un auto, ni en la mano de nadie, ni en la cabeza de otra persona, ni
como un segundo motociclista al fondo. En esta imagen hay UN SOLO
CASCO: el que lleva puesto la mujer. Contá los cascos antes de entregar:
tiene que haber exactamente UNO.

PROHIBIDO ABSOLUTO:
- Cambiar la geometría, el color, el acabado o cualquier detalle físico
  del casco respecto de la foto adjunta, por más chico que sea.
- BAJAR O CERRAR LA MENTONERA. Va LEVANTADA Y ABIERTA.
- Bajar el visor principal transparente, o subir el visor interno
  oscuro, o fusionarlos, o cambiarles el color/tinte.
- ELIMINAR, OSCURECER, APAGAR O CAMBIAR DE COLOR EL ACOLCHADO INTERIOR
  ROJO. Es rojo y es una pieza real.
- Quitar la correa o sus herrajes.
- Agregar gráficos, logos, texto, franjas, degradés, stickers o textura
  de carbono sobre la calota — es negra mate y lisa.
- Cambiar el MATE de la calota por brillante/glossy.
- Cambiar el ángulo del casco para acomodar la pose de la modelo — el
  ángulo lo manda la foto adjunta y la pose se adapta a él.
- Alargar, estirar o achatar la proporción de la calota para que "entre"
  mejor en la cabeza de la modelo.
- Aplicar un blur parejo de software en vez de profundidad de campo
  real, o desenfocar tanto que la avenida deje de leerse.
- Dibujar las líneas guía punteadas, la línea violeta, el fondo blanco
  de estudio o EL SEGUNDO CASCO de la lámina.
- Poner logos de marcas reales, carteles con texto legible, patentes
  legibles, texto superpuesto o marca de agua.
- Entregar un render 3D, una ilustración, arte digital o un collage — es
  una FOTOGRAFÍA.

VERIFICACIÓN FINAL — ANTES DE ENTREGAR, CHEQUEÁ ESTAS 8 COSAS:
1. ¿La MENTONERA sigue LEVANTADA Y ABIERTA, rotada hacia arriba y atrás
   sobre la calota, con la zona de la boca y el mentón descubierta —
   igual que en la foto adjunta? Si salió cerrada, está mal.
2. ¿Están los DOS VISORES, cada uno en su posición: el principal
   TRANSPARENTE y LEVANTADO con la mentonera, y el interno OSCURO y
   BAJADO sobre los ojos?
3. ¿El ACOLCHADO INTERIOR ROJO sigue ahí, en el borde inferior, y sigue
   siendo ROJO?
4. ¿El ÁNGULO del casco es el LATERAL 3/4 mirando a la izquierda de la
   foto adjunta — y NO uno que salió de elegir primero la pose de la
   modelo?
5. ¿Cambió algo de la FORMA o de alguna PIEZA respecto de la foto
   adjunta: la línea del flip up, la correa y sus herrajes, la toma de
   aire de la mentonera, la proporción de la calota, el mate de la
   calota?
6. ¿Aparece ALGÚN SEGUNDO CASCO en la imagen, o alguna LÍNEA GUÍA
   PUNTEADA, la LÍNEA VIOLETA o restos del FONDO BLANCO de estudio?
   Contá los cascos: tiene que haber exactamente UNO, el que lleva
   puesto la mujer.
7. ¿Los REFLEJOS del casco y de los visores corresponden a LA AVENIDA
   (cielo, edificios, autos, calle) y NO al fondo blanco del estudio ni
   a un reflejo genérico? ¿El casco proyecta sombra sobre los hombros y
   recibe la misma luz que el resto de la escena?
8. ¿El FONDO está desenfocado por PROFUNDIDAD DE CAMPO REAL —
   progresivo con la distancia, bokeh suave, la avenida todavía
   reconocible— y no por un blur parejo de software? ¿La mujer y el
   casco están perfectamente nítidos?

Orden de imágenes en el payload: la foto real del casco (checkpoint
LATERAL, con la mentonera abierta — autoridad final de geometría,
color, acabado, estado de las piezas y ángulo) — manda sobre cualquier
otro detalle, incluida la pose de la modelo. Toda la escena de la
avenida se genera a partir del texto de arriba.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:**
1. Adjuntar la **referencia LATERAL** (mentonera abierta) — no la frontal.
2. Correr el prompt en una **sesión aislada** y auditar con los **8 chequeos** de la verificación final, con especial atención al **1** (mentonera levantada), al **3** (acolchado rojo) y al **6** (segundo casco).
3. Subir la foto real del casco como adjunto del repo para versionarla.

---

## Foto 2 — Centro comercial, hombre de frente, visor 100 % OPACO, mentonera CERRADA (referencia FRONTAL)

⚠️ **Adjuntar la imagen de referencia FRONTAL, la de la mentonera cerrada. Correr en una sesión aislada del generador — y NO en el mismo hilo que la Foto 1: las dos configuraciones del casco se contaminan entre sí (caso Vortex).**

<details><summary>Prompt Foto 2 — centro comercial, visor opaco (copiar/pegar en Nano Banana Pro)</summary>

```
Genera una FOTOGRAFÍA REAL tipo lifestyle en 4K, ultra nítida, de un
HOMBRE MIRANDO DE FRENTE A LA CÁMARA, en el interior de un CENTRO
COMERCIAL, con el casco de la foto adjunta PUESTO Y CERRADO.

ADVERTENCIA MÁXIMA — LEER PRIMERO: EL CASCO NO CAMBIA NADA, SALVO UNA
SOLA COSA. Su geometría, su forma, sus proporciones, su color, su
acabado y la POSICIÓN DE TODAS SUS PIEZAS quedan exactamente como en la
foto adjunta. EL ÚNICO CAMBIO PERMITIDO EN TODO EL OBJETO es la
OPACIDAD DEL VISOR, descrita en su bloque dedicado más abajo. Ningún
otro atributo del casco se toca. Lo demás que cambia en esta imagen es
el ENTORNO, la ILUMINACIÓN y la PERSONA.

AUTORIDAD DE FORMA — LA FOTO ADJUNTA DEL CASCO ES LA ÚNICA FUENTE DE
GEOMETRÍA, COLOR Y ACABADO. Nada de la escena nueva, ni tu propio
criterio sobre "cómo suele verse un casco de moto", puede modificar el
objeto. El casco de esta imagen tiene que ser una copia EXACTA, pieza
por pieza, del casco de la foto adjunta. Enumerado explícito de lo que
NO puede cambiar:
- TIPO DE CASCO: integral MODULAR / FLIP UP, con su línea de separación
  y su mecanismo de mentonera abatible, en su recorrido y posición
  exactos.
- MENTONERA: BAJADA Y CERRADA (ver el bloque dedicado más abajo).
- VISOR: BAJADO, en su forma y su recorrido exactos. Lo único que cambia
  es su OPACIDAD (ver su bloque dedicado).
- CALOTA: negro MATE, lisa, con las LÍNEAS DE LA CALOTA visibles tal
  como en la foto adjunta. Sin gráficos, sin logos, sin texto, sin
  franjas, sin degradés, sin textura de fibra de carbono, sin brillo
  glossy. Mate y lisa, punto.
- TOMA DE AIRE DE LA MENTONERA: abajo, en el frente de la mentonera, con
  su forma exacta.
- ACOLCHADO INTERIOR ROJO: es una PIEZA REAL DEL PRODUCTO, no un
  reflejo, no un artefacto de la foto de estudio. Sigue existiendo. Ver
  la aclaración específica en el bloque del visor: como el visor pasa a
  ser opaco, ese rojo YA NO SE VE A TRAVÉS DEL VISOR — pero si el
  encuadre muestra el BORDE INFERIOR del casco (la zona del cuello), ahí
  el acolchado ROJO sí se ve, y ahí tiene que estar y ser rojo.
- CORREA Y SUS HERRAJES: por debajo del casco, con sus herrajes
  visibles, tal como en la foto adjunta.
No inventes, no "mejores", no agregues ni quites ninguna pieza, ni un
tornillo, ni una ranura, ni un borde, ni una toma de aire. Si dudás de
cómo se ve un detalle, copiá exactamente lo que se ve en la foto
adjunta, no lo que "normalmente" tendría un casco de este estilo.

CRÍTICO — LA MENTONERA VA BAJADA Y CERRADA, COMO EN LA FOTO ADJUNTA.
Declarado EN POSITIVO:
- EN POSITIVO: la MENTONERA está ABAJO, CERRADA, en la posición normal
  de un casco integral, exactamente como en la foto adjunta. Cubre la
  boca y el mentón. El casco se ve, en esta imagen, completamente
  cerrado.
- EN NEGATIVO, como refuerzo: PROHIBIDO levantar la mentonera. PROHIBIDO
  abrirla. PROHIBIDO rotarla hacia arriba o hacia atrás sobre la calota.
  PROHIBIDO dejarla a medio camino. PROHIBIDO mostrar el casco en
  posición de flip up abierto, aunque sea "para que se vea mejor la
  cara" o "para que quede más amable". El estado de la mentonera lo
  manda la foto adjunta.

CRÍTICO — EL VISOR PASA A SER 100 % OPACO NEGRO, Y SIGUE SIENDO UNA
PIEZA FÍSICA REAL. Este es el ÚNICO cambio permitido en todo el casco, y
es el punto más importante del prompt. Las dos mitades de esta
instrucción valen exactamente lo mismo:
(1) OPACIDAD TOTAL: el visor está BAJADO y es COMPLETAMENTE OPACO, negro
    absoluto. NO SE VE ABSOLUTAMENTE NADA A TRAVÉS DE ÉL: ni el interior
    del casco, ni el ACOLCHADO ROJO (que en la foto adjunta SÍ se ve a
    través del visor transparente, y en esta imagen YA NO SE VE), ni una
    cabeza, ni un rostro, ni ojos, ni piel, ni una sombra, ni una
    silueta insinuada, ni una forma que se adivine por detrás. Es un
    policarbonato ahumado al 100 %: no translúcido, no semitransparente,
    no "casi opaco". Que el rojo del interior deje de verse a través del
    visor NO es un error: es la consecuencia correcta de la opacidad.
(2) MATERIALIDAD: OPACO NO SIGNIFICA PLANO. El visor SIGUE EXISTIENDO
    COMO PIEZA FÍSICA y conserva:
    - su FORMA y su recorrido exactos, los mismos de la foto adjunta;
    - su BORDE y su CONTORNO, con la junta o goma perimetral donde apoya
      contra la carcasa;
    - su CURVATURA, con el volumen de una superficie curva real;
    - su ESPESOR / CANTO visible en el borde, con el grosor del plástico
      inyectado;
    - y sus REFLEJOS ESPECULARES: es una superficie oscura pulida y
      REFLEJA EL CENTRO COMERCIAL — las luces del techo, las vidrieras,
      las barandas, la claraboya, las siluetas borrosas de la gente — en
      reflejos suaves, alargados y deformados por su curvatura.
    NO es un agujero negro. NO es una mancha negra plana. NO es una
    silueta vectorial recortada. NO es un rectángulo de color sólido. Es
    un visor real, oscuro y reflectante, fotografiado con luz de
    interior.
Esta es exactamente la misma lógica de las lecciones de
`simulacion-31-casco-bob-esponja-visor-transparente.md` y
`simulacion-32-visor-transparente-4k-laterales.md`, aplicada AL REVÉS:
allá se pedía volver TRANSPARENTE un visor opaco, y la regla era que
"volver transparente una pieza no es borrarla — conserva su forma, su
borde, su curvatura, su espesor y sus reflejos especulares". Acá el
visor va en la dirección contraria, de transparente a OPACO, y la regla
es la misma: la opacidad es una propiedad del MATERIAL, no una licencia
para dibujar una forma negra sin volumen. Defecto real ya vivido:
`simulacion-29-tmnt-lifestyle.md`, Intento 4, defecto 1 — el visor salió
como una forma negra plana tipo caricatura, sin material.

CRÍTICO — NO SE VE EL ROSTRO DEL HOMBRE. Declarado EN POSITIVO primero,
y recién después en negativo:
- EN POSITIVO: el hombre MIRA DE FRENTE A LA CÁMARA, con el casco PUESTO
  Y CERRADO — la MENTONERA está ABAJO y el VISOR está BAJADO Y OPACO.
  Por lo tanto, lo que se ve en el frente del casco es LA SUPERFICIE
  OPACA DEL VISOR Y NADA MÁS: una superficie negra, curva, con los
  reflejos del centro comercial descritos arriba. El casco cerrado es lo
  que resuelve el encuadre — no hace falta ningún recurso extra: ni
  recortar la cabeza, ni tapar con un objeto, ni desenfocar la cara, ni
  poner al hombre a contraluz.
- EN NEGATIVO, como refuerzo: está PROHIBIDO que aparezca cualquier
  rasgo facial, ojos, cejas, nariz, boca, mentón, piel visible de la
  cara, una silueta o sombra de rostro insinuada por detrás del visor, o
  un reflejo con forma de rostro sobre el visor. Ninguna de esas cosas
  existe en esta imagen. Tampoco asoma nada por debajo de la línea
  inferior del visor: ahí está la MENTONERA CERRADA, que es una pieza
  sólida del casco.
Defecto real ya vivido: `simulacion-29-tmnt-lifestyle.md`, Intento 1 —
el visor salió transparente y se alcanzaba a ver a la persona adentro,
que es justo lo que el usuario no quiere.

CRÍTICO — EL ÁNGULO: DE FRENTE, IGUAL QUE LA FOTO ADJUNTA. El casco se
ve DE FRENTE, con el mismo punto de vista, la misma altura de cámara y
el mismo grado de rotación (o sea, ninguno) de la foto adjunta. El
hombre mira de frente a la cámara. La pose de la cabeza, el cuello, los
hombros y el cuerpo se ACOMODAN para que ese ángulo frontal se cumpla:
primero se fija el ángulo del casco, después se construye la pose
alrededor. NO al revés. No lo gires a 3/4 "para que quede más
dinámico", no lo pongas de perfil, no lo mires desde abajo ni desde
arriba.

ESCENA: EL INTERIOR DE UN CENTRO COMERCIAL. Un HOMBRE con el casco
puesto y cerrado, mirando de frente a la cámara, en primer plano y
nítido. Detrás de él, el interior de un shopping: pasillo central,
vidrieras de locales iluminadas, barandas de los niveles superiores,
piso pulido con reflejos, plantas o mobiliario del pasillo y gente
circulando. Encuadre de busto o medio cuerpo.
- El FONDO va DESENFOCADO por profundidad de campo real (apertura
  amplia, el plano de foco sobre el hombre y el casco, el fondo cayendo
  fuera de foco de forma progresiva con la distancia, bokeh suave en las
  luces de los locales). No un blur parejo de software.
- El casco es el elemento NÍTIDO y el punto de atención de la foto.
- Sin logos de marcas reales, sin carteles con texto legible, sin texto
  superpuesto, sin marca de agua.

ILUMINACIÓN — LUZ DE INTERIOR COMERCIAL:
- Iluminación de interior de shopping: luces cenitales del techo, luz de
  las vidrieras de los locales, y posiblemente algo de luz natural
  entrando por una claraboya. Luz relativamente pareja y difusa, con
  temperatura de color de interior comercial (neutra a levemente
  cálida), sin sombras duras.
- El CASCO RECIBE EXACTAMENTE LA MISMA LUZ QUE EL RESTO DE LA ESCENA:
  misma dirección, misma dureza, misma temperatura de color que el
  hombre, el piso y los locales del fondo.
- ULTRARREALISTA: el resultado es una FOTOGRAFÍA tomada con cámara — con
  su profundidad de campo, su grano fino y su rango dinámico reales. NO
  es un render 3D, NO es una ilustración, NO es arte digital, NO es una
  imagen de videojuego, NO es un collage.

INTEGRACIÓN EN LA ESCENA — EL CASCO ES UN OBJETO FÍSICO DENTRO DE ESTA
FOTO, NO UN RECORTE PEGADO ENCIMA:
- El casco RECIBE la luz del ambiente del centro comercial, con la misma
  dirección y la misma temperatura de color que todo lo demás.
- El casco PROYECTA SOMBRA sobre los hombros, el cuello y la ropa del
  hombre, y RECIBE sombra y rebote de luz del entorno (el piso pulido
  devuelve un rebote suave desde abajo).
- La CALOTA MATE devuelve un realce de luz SUAVE Y DIFUSO que sigue su
  curvatura — nunca un brillo especular duro, porque es mate.
- Las SUPERFICIES BRILLANTES del casco (piezas de plástico pulido,
  herrajes de la correa, el mecanismo del flip up) SÍ devuelven REFLEJOS
  ESPECULARES NÍTIDOS, y en esos reflejos se ve EL CENTRO COMERCIAL: las
  luces del techo, las vidrieras, las barandas.
- El VISOR OPACO, por ser una superficie oscura pulida, TAMBIÉN REFLEJA
  EL CENTRO COMERCIAL, en reflejos tenues y alargados deformados por su
  curvatura, SIN PERDER NI UN POCO DE SU OPACIDAD. Los reflejos van
  SOBRE el visor, nunca a través de él, y NINGUNO de esos reflejos tiene
  forma de rostro.
PROHIBIDO que cualquiera de estas superficies siga reflejando EL FONDO
BLANCO DEL ESTUDIO de la foto de producto, o un reflejo genérico de
estudio. Lo que se conserva del checkpoint es el MATERIAL y su
comportamiento; lo que CAMBIA es el CONTENIDO de ese reflejo, que ahora
es el centro comercial. Lección ya registrada en
`simulacion-34-lifestyle-cafeteria-casco-negro.md` y confirmada en
`simulacion-37-lifestyle-montana-visor-opaco.md`.

LIMPIEZA DE LA REFERENCIA — LO QUE ES MAQUETACIÓN NO EXISTE EN LA
ESCENA NUEVA. La foto adjunta del casco es un ARCHIVO DE MAQUETACIÓN de
una lámina de catálogo, y trae elementos que NO son parte del producto:
- LÍNEAS GUÍA PUNTEADAS, verticales y horizontales;
- PARTE DE OTRO CASCO, que asoma por el borde inferior de la lámina;
- y el FONDO BLANCO DE ESTUDIO.
NINGUNO de los tres aparece en la imagen final. No hay ninguna línea
punteada, ninguna guía, ninguna marca de recorte y ningún resto del
fondo blanco de estudio. El fondo de esta imagen es el centro comercial
y nada más.
ATENCIÓN ESPECIAL CON EL SEGUNDO CASCO: ese casco que asoma en el borde
NO ES UN OBJETO DE ESTA ESCENA. Es un producto vecino de la lámina de
catálogo. NO lo incorpores como un casco apoyado en un banco del
shopping, ni en una vidriera, ni bajo el brazo del hombre, ni en la
cabeza de otra persona del fondo. En esta imagen hay UN SOLO CASCO: el
que lleva puesto el hombre. Contá los cascos antes de entregar: tiene
que haber exactamente UNO.

PROHIBIDO ABSOLUTO:
- Cambiar la geometría, el color, el acabado o cualquier detalle físico
  del casco respecto de la foto adjunta. El ÚNICO cambio permitido en
  todo el objeto es la opacidad del visor.
- LEVANTAR O ABRIR LA MENTONERA. Va BAJADA Y CERRADA.
- Dejar el visor transparente, translúcido, ahumado claro, semiopaco o
  de cualquier color que no sea NEGRO TOTALMENTE OPACO.
- Dejar ver a través del visor el interior del casco, el acolchado rojo,
  una cabeza, un rostro, ojos, piel o cualquier silueta.
- Dibujar el visor como una forma negra plana, vectorial o sin material,
  sin borde, sin canto, sin curvatura y sin reflejos.
- Mostrar rasgos faciales, piel de la cara, una sombra de rostro
  insinuada detrás del visor o un reflejo con forma de rostro sobre el
  visor.
- Levantar el visor o quitarlo.
- ELIMINAR, OSCURECER O CAMBIAR DE COLOR EL ACOLCHADO INTERIOR ROJO en
  las zonas donde sí se ve (el borde inferior del casco). Que deje de
  verse a través del visor es correcto; que desaparezca del borde
  inferior visible, no.
- Agregar gráficos, logos, texto, franjas, degradés, stickers o textura
  de carbono sobre la calota — es negra mate y lisa.
- Cambiar el MATE de la calota por brillante/glossy.
- Cambiar el ángulo frontal del casco para acomodar la pose del modelo.
- Alargar, estirar o achatar la proporción de la calota para que "entre"
  mejor en la cabeza del modelo.
- Aplicar un blur parejo de software en vez de profundidad de campo
  real.
- Dibujar las líneas guía punteadas, el fondo blanco de estudio o EL
  SEGUNDO CASCO de la lámina.
- Poner logos de marcas reales, carteles con texto legible, texto
  superpuesto o marca de agua.
- Entregar un render 3D, una ilustración, arte digital o un collage — es
  una FOTOGRAFÍA.

VERIFICACIÓN FINAL — ANTES DE ENTREGAR, CHEQUEÁ ESTAS 9 COSAS:
1. ¿La MENTONERA sigue BAJADA Y CERRADA, en posición de integral, igual
   que en la foto adjunta? Si salió levantada o abierta, está mal.
2. ¿El VISOR está 100 % OPACO NEGRO — no se ve absolutamente nada a
   través de él, ni el interior, ni el acolchado rojo, ni una cabeza, ni
   una silueta?
3. ¿Y a la vez el visor tiene BORDE, CANTO, CURVATURA y REFLEJOS, en vez
   de ser una mancha negra plana o un agujero recortado?
4. ¿Se ve algún rasgo de CARA —ojos, boca, nariz, piel, silueta
   insinuada o reflejo con forma de rostro—? No debe haber ninguno. ¿Y
   asoma algo por debajo de la línea inferior del visor? Ahí está la
   mentonera cerrada, no debe asomar nada.
5. ¿El ACOLCHADO ROJO sigue existiendo donde corresponde: NO a través
   del visor (correcto, el visor es opaco) pero SÍ en el borde inferior
   del casco si el encuadre lo muestra?
6. ¿El ÁNGULO del casco es FRONTAL, el mismo de la foto adjunta, y el
   hombre mira de frente a la cámara?
7. ¿Cambió algo más de la FORMA o de alguna PIEZA respecto de la foto
   adjunta: la línea del flip up, la toma de aire de la mentonera, las
   líneas de la calota, la correa y sus herrajes, la proporción de la
   calota, el mate de la calota? El único cambio permitido era la
   opacidad del visor.
8. ¿Aparece ALGÚN SEGUNDO CASCO en la imagen, o alguna LÍNEA GUÍA
   PUNTEADA o restos del FONDO BLANCO de estudio? Contá los cascos:
   tiene que haber exactamente UNO, el que lleva puesto el hombre.
9. ¿Los REFLEJOS del visor y de las piezas brillantes corresponden AL
   CENTRO COMERCIAL (luces del techo, vidrieras, barandas, piso pulido)
   y NO al fondo blanco del estudio? ¿El casco proyecta sombra sobre los
   hombros y recibe la misma luz que el resto de la escena? ¿El fondo
   está desenfocado por profundidad de campo real y el casco
   perfectamente nítido?

Orden de imágenes en el payload: la foto real del casco (checkpoint
FRONTAL, con la mentonera cerrada — autoridad final de geometría,
color, acabado, estado de las piezas y ángulo) — manda sobre cualquier
otro detalle. El ÚNICO atributo que se aparta del checkpoint es la
opacidad del visor. Toda la escena del centro comercial se genera a
partir del texto de arriba.
```

</details>

**Estado:** 🔴 pendiente de generar · 🟡 **ambigüedad de "(no) se vea por debajo del visor" pendiente de confirmación del usuario** (ver el bloque de arriba).

**Qué hay que hacer:**
1. **Preguntarle al usuario** si con *"que (no) se vea por debajo del visor"* quería también ver el mentón/la boca. Si dice que sí, este prompt no sirve: hay que **rehacerlo desde la referencia LATERAL con la mentonera abierta**.
2. Adjuntar la **referencia FRONTAL** (mentonera cerrada) — no la lateral.
3. Correr el prompt en una **sesión aislada, distinta de la de la Foto 1**, y auditar con los **9 chequeos** de la verificación final, con especial atención al **1** (mentonera cerrada), al **2 + 3** (opaco pero con material) y al **8** (segundo casco).

---

## Riesgos anticipados (para la auditoría, antes de ver los resultados)

| Riesgo | Foto | De dónde viene | Chequeo que lo cubre |
|---|---|---|---|
| **El generador CIERRA la mentonera** porque un casco modular "se ve así" | 1 | **Riesgo nuevo de este caso** — ver lección abajo | Foto 1, verificación 1 |
| **El generador ABRE la mentonera** para mostrar la cara, o para "que quede más amable" | 2 | Mismo mecanismo, en la dirección contraria | Foto 2, verificación 1 |
| Fusiona los dos visores en uno, o baja el principal / sube el interno | 1 | [`simulacion-29`](simulacion-29-tmnt-lifestyle.md), [`simulacion-34`](simulacion-34-lifestyle-cafeteria-casco-negro.md) | Foto 1, verificación 2 |
| **Elimina o absorbe el acolchado interior ROJO** en el negro del casco | 1 y 2 | Mismo mecanismo que la luz LED roja del spoiler en [`simulacion-37`](simulacion-37-lifestyle-montana-visor-opaco.md): un detalle chico, de color distinto, sobre una superficie negra, es exactamente lo que un generador "limpia" | Foto 1, verificación 3 · Foto 2, verificación 5 |
| El visor no queda del todo opaco y se insinúa la cara / el interior rojo | 2 | [`simulacion-29`](simulacion-29-tmnt-lifestyle.md), Intento 1 | Foto 2, verificaciones 2 y 4 |
| El visor sale como una **mancha negra plana**, sin material | 2 | [`simulacion-29`](simulacion-29-tmnt-lifestyle.md), Intento 4, defecto 1; lección inversa de [`simulacion-31`](simulacion-31-casco-bob-esponja-visor-transparente.md) y [`simulacion-32`](simulacion-32-visor-transparente-4k-laterales.md) | Foto 2, verificación 3 |
| El ángulo se corre para acomodar la pose de la modelo | 1 | [`simulacion-29`](simulacion-29-tmnt-lifestyle.md) Intentos 3-4; [`simulacion-12`](simulacion-12-hero-verificacion.md) Intento 1; [`simulacion-34`](simulacion-34-lifestyle-cafeteria-casco-negro.md) variante (B) | Foto 1, verificación 4 |
| La calota sale estirada/alargada al ponerla sobre una cabeza | 1 y 2 | [`simulacion-29`](simulacion-29-tmnt-lifestyle.md), Intento 4, defecto 2 | Foto 1, verificación 5 · Foto 2, verificación 7 |
| **El segundo casco de la lámina se incorpora como objeto real de la escena** | 1 y 2 | **Riesgo nuevo de este caso** — ver lección abajo | Foto 1, verificación 6 · Foto 2, verificación 8 |
| Aparecen las líneas guía punteadas o la línea violeta | 1 y 2 | [`simulacion-31`](simulacion-31-casco-bob-esponja-visor-transparente.md), [`simulacion-32`](simulacion-32-visor-transparente-4k-laterales.md), [`simulacion-34`](simulacion-34-lifestyle-cafeteria-casco-negro.md) | Foto 1, verificación 6 · Foto 2, verificación 8 |
| Las superficies siguen reflejando el fondo blanco del estudio → el casco se lee como recorte | 1 y 2 | [`simulacion-34`](simulacion-34-lifestyle-cafeteria-casco-negro.md) — **lección ya registrada en el checklist Tipo A**, confirmada en [`simulacion-37`](simulacion-37-lifestyle-montana-visor-opaco.md) | Foto 1, verificación 7 · Foto 2, verificación 9 |
| El fondo sale con un blur parejo de software en vez de profundidad de campo real | 1 y 2 | Riesgo propio del pedido textual del usuario ("fondo medio borroso pero suave") | Foto 1, verificación 8 · Foto 2, verificación 9 |
| **Contaminación cruzada entre las dos fotos**: la Foto 2 sale con la mentonera abierta porque la Foto 1 se generó antes en el mismo hilo | 1 y 2 | [`simulacion-11-vortex-verificacion.md`](simulacion-11-vortex-verificacion.md) — ítem de **sesión aislada por caso** del checklist Tipo A. Acá el riesgo es mayor que de costumbre, porque las dos imágenes son **el mismo casco en dos estados opuestos** | Correr cada prompt en sesión aislada + Foto 1 verificación 1 / Foto 2 verificación 1 |

---

## Lecciones — qué aporta este caso al checklist Tipo A

Se validaron contra lo ya escrito en [`orquestacion-agentes-paralelos.md`](../orquestacion-agentes-paralelos.md). Las dos que este caso pone en juego con más fuerza —los **reflejos de la escena nueva** ([Simulación 34](simulacion-34-lifestyle-cafeteria-casco-negro.md)) y **"opaco no es plano"** (reverso del ítem de las Simulaciones [31](simulacion-31-casco-bob-esponja-visor-transparente.md) y [32](simulacion-32-visor-transparente-4k-laterales.md))— **ya están cubiertas** y no se duplican: este caso queda como su tercera y segunda aparición respectivamente, y los prompts las referencian explícitamente.

**Se agregan 2 ítems nuevos**, ninguno cubierto por el checklist actual:

### 1. Una pieza que admite dos ESTADOS tiene que declarar su estado en cada prompt — el generador la normaliza al valor más común del tipo de producto

El checklist ya exige **elementos físicos reales en su posición exacta** y **geometría intacta**, pero eso está escrito pensando en piezas **fijas** (una ventilación, un tornillo, una hebilla): están donde están y no hay otra opción. Una pieza **articulada** es un caso distinto: una mentonera de flip up, un visor abatible, una visera, una hebilla abierta o cerrada tienen **dos estados igual de válidos**, y el generador tiene un **prior fortísimo** sobre cuál es "el normal" para ese tipo de producto — un casco integral se ve cerrado, un visor se ve bajado. Cuando la referencia muestra el estado **minoritario**, el prompt no puede limitarse a decir "no cambies nada": *"nada"* no alcanza para vencer al prior, porque el generador no lee el estado como una decisión sino como un accidente de la foto de producto, y lo "arregla". Hay que **nombrar el estado en positivo, describir físicamente cómo se ve** (dónde queda la pieza, qué zona deja descubierta, con qué otras piezas viaja) y **prohibir explícitamente el estado contrario**, con esas palabras. Y el chequeo del estado va **primero** en la verificación final, no perdido en el ítem genérico de "¿cambió algo de la forma?".

**Agravante propio de este caso, y la parte que no se deduce: cuando el pedido son VARIAS fotos del mismo producto en ESTADOS DISTINTOS, cada prompt tiene que prohibir el estado de las otras, y cada uno se corre en sesión aislada.** No alcanza con que cada prompt declare el suyo: si las dos generaciones comparten hilo, el estado de la primera se filtra a la segunda — es el ítem de **sesión aislada por caso** (caso Vortex) aplicado a la configuración física de la pieza, no al diseño gráfico. Y conviene además **decir explícitamente en el documento cuál referencia va con cuál prompt**, porque el error más barato de cometer es adjuntar la imagen equivocada, y ese error el prompt no lo puede atrapar.

Caso de referencia: **esta simulación** — mismo casco modular, **mentonera levantada** en la Foto 1 (referencia lateral) y **bajada y cerrada** en la Foto 2 (referencia frontal), con dos prompts que declaran su estado en positivo y prohíben el contrario.

### 2. Si la referencia es una lámina de catálogo, un PRODUCTO VECINO que asoma en el borde puede incorporarse como objeto real de la escena nueva — hay que nombrarlo y excluirlo, con conteo forzado

El Tipo D ya tiene un ítem sobre **guías de maquetación, marcas de recorte y líneas punteadas**, y varios casos ([31](simulacion-31-casco-bob-esponja-visor-transparente.md), [32](simulacion-32-visor-transparente-4k-laterales.md), [34](simulacion-34-lifestyle-cafeteria-casco-negro.md), [37](simulacion-37-lifestyle-montana-visor-opaco.md)) ya incluyen bloques de limpieza. Pero todos esos artefactos comparten una propiedad: **son ruido gráfico obviamente ajeno a una fotografía** — una línea punteada, una barra, una forma decorativa, una tarjeta de texto. Un **producto vecino de la misma lámina** es un caso **cualitativamente distinto y más peligroso**, porque es **exactamente el mismo tipo de objeto que el protagonista** y es **perfectamente plausible dentro de la escena nueva**: un segundo casco apoyado en la vereda, en una vidriera, bajo el brazo del modelo o en la cabeza de otra persona no rompe ninguna regla de realismo, así que el generador no tiene ningún motivo para descartarlo, y una instrucción genérica de "fondo limpio, sin artefactos de maquetación" **no lo alcanza** — el generador no lo clasifica como artefacto.

Hay que (1) **nombrarlo explícitamente** como lo que es (*"parte de otro casco que asoma por el borde inferior de la lámina, es un producto vecino del catálogo"*), (2) **enumerar las formas concretas en que podría colarse** y prohibirlas una por una (apoyado en el piso, en una vidriera, en la mano de alguien, en otra cabeza, como un segundo motociclista al fondo), y (3) cerrar con **conteo forzado**, tomado del ítem de agregados y del conteo de celdas del Tipo B: *"contá los cascos antes de entregar: tiene que haber exactamente UNO"*. La prohibición sola no basta, por el mismo motivo de siempre: describe qué no hacer pero no fuerza a verificar el resultado.

Caso de referencia: **esta simulación** — las dos láminas de referencia traen, además de las líneas guía punteadas y una línea violeta, **parte de otro casco asomando por el borde inferior**.

---

**Última actualización:** 2026-07-29 · caso creado desde cero a partir del pedido de 2 fotos lifestyle (avenida pública con tráfico + centro comercial). **2 prompts** escritos con la estructura del [Intento 4 de la Simulación 12](simulacion-12-hero-verificacion.md) y de la [Simulación 34](simulacion-34-lifestyle-cafeteria-casco-negro.md): advertencia máxima de entrada, autoridad de forma pieza por pieza, bloques temáticos en MAYÚSCULAS, prohibido absoluto y verificación final numerada. La diferencia estructural de este caso es que **cada foto tiene su propia imagen de referencia y su propio ESTADO del casco** —mentonera **levantada** en la Foto 1, **bajada y cerrada** en la Foto 2—, así que cada prompt declara su estado **en positivo** y **prohíbe explícitamente el contrario**, y los dos se corren en **sesiones aisladas** para que no se contaminen entre sí. El **acolchado interior rojo** tiene tratamiento propio en los dos prompts, con la aclaración de que en la Foto 2 dejar de verse **a través del visor opaco** es correcto pero desaparecer del **borde inferior** no lo es. El **visor de la Foto 2** es el único cambio permitido al casco: **100 % opaco negro** (nada visible detrás: ni interior, ni acolchado, ni rostro, ni silueta) **y a la vez pieza física real** con forma, borde, curvatura, espesor y reflejos del centro comercial — la lección de [`simulacion-31`](simulacion-31-casco-bob-esponja-visor-transparente.md) y [`simulacion-32`](simulacion-32-visor-transparente-4k-laterales.md) aplicada al revés, referenciada dentro del prompt. En la Foto 1 la **autoridad de ángulo es la foto de producto** y la pose de la modelo se construye alrededor, como pidió el usuario textualmente. Queda **1 ambigüedad abierta y pendiente de confirmación**: la frase de la Foto 2 *"que (no) se vea por debajo del visor"* se escribió con la lectura clara que el propio usuario cerró después (*"que el visor sea completamente negro y no se vea a través de él"*), y quedó anotado que si confirmara la otra lectura —ver el mentón o la boca— el prompt **no se puede parchear**, porque con la mentonera cerrada eso es físicamente imposible: habría que partir de la referencia lateral con la mentonera abierta. **Nadie eligió todavía.** Deja **2 lecciones nuevas** para el checklist Tipo A: (1) una pieza con **dos estados posibles** hay que declararla en cada prompt porque el generador la normaliza al valor más común del tipo de producto —con el agravante de varias fotos del mismo producto en estados distintos, que exige prohibir el estado ajeno y correr en sesiones aisladas—; y (2) un **producto vecino que asoma en el borde de una lámina de catálogo** puede incorporarse como objeto real de la escena, porque es plausible y el generador no lo clasifica como artefacto — hay que nombrarlo, enumerar las formas en que podría colarse y cerrar con **conteo forzado**.
