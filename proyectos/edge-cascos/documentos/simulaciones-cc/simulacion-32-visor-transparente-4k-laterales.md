# Simulación 32 — Visor opaco → transparente + 4K, sobre 3 vistas laterales (Bob Esponja y El Padrino)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md) · [← Caso Bob Esponja](simulacion-6a-bob-esponja.md) · [← Caso El Padrino](simulacion-6b-padrino.md)

**Tipo de prompt:** A (edición puntual sobre resultado ya aprobado) + componente de D (limpieza de producto, en el bloque opcional).

---

## 1. Contexto y pedido

Pedido textual del usuario:

> "necesito otro agente secundario que me dé esta imagen exactamente igual en 4K, que no la cambie en nada pero que ponga el visor más transparente y no opaco. Estas dos imágenes / 3 tenemos, que son así"

Mandó **3 imágenes**, todas capturas de pantalla de una página web de producto (no fotos limpias de estudio). Para cada una pide lo mismo:

1. **La misma imagen, sin cambiar nada.**
2. **En 4K.**
3. **Con el visor transparente en vez de opaco.**

Los dos cascos son los mismos casos ya documentados en el repo: el de arte graffiti tipo Bob Esponja ([`simulacion-6a-bob-esponja.md`](simulacion-6a-bob-esponja.md)) y el de The Godfather / El Padrino ([`simulacion-6b-padrino.md`](simulacion-6b-padrino.md)). Mismo molde EDGE open face / jet en las tres.

---

## 2. Las 3 imágenes de partida

### Imagen 1 — Bob Esponja, vista lateral (perfil, mirando a la izquierda)

- Casco **open face / tipo jet** (sin mentonera), de perfil.
- Calota cubierta de **arte graffiti cartoon** muy denso y saturado: amarillo lima, celeste, rosa fuerte, magenta, violeta. Se distinguen un personaje amarillo tipo Bob Esponja con la lengua afuera, una figura rosa grande tipo estrella de mar en el centro-bajo, ojos saltones, formas de chorreado/goteo, garabatos tipo tag y una hamburguesa. El arte llega hasta los bordes.
- Piezas físicas: **ventilación superior negra** en la parte alta de la calota, **mecanismo de pivote circular negro** en el centro del lateral, **tornillos plateados**, **borde inferior con acolchado negro** y **correa con una pieza roja** abajo.
- **Visor:** abatido hacia abajo, grande, curvo, ocupa todo el frente. Hoy se ve **gris claro lechoso / semiopaco** — no deja ver el interior con claridad.
- **Artefactos de captura de pantalla (NO son parte del producto):** una **línea diagonal violeta/púrpura** que cruza la esquina superior izquierda; **fondo blanco con formas geométricas grises angulares** de plantilla; abajo a la derecha una **barra de interfaz gris con el texto "Size", "S", "M"**; al pie una **tira de miniaturas** de otros cascos (carrusel del sitio); y otra **línea violeta** horizontal cerca del borde inferior.

### Imagen 2 — El Padrino, vista lateral (perfil, mirando a la izquierda)

- Mismo molde open face / jet, mismo ángulo.
- Calota **negra brillante**. Arte: **silueta blanca/gris de un rostro de perfil** (el padrino) ocupando el centro-alto; a la derecha, en rojo y blanco, texto en varias líneas que se lee parcialmente **"I DON'T ... APOLO... TO TAKE ... OF"**; **manos con hilos de marioneta en dorado** hacia la derecha; abajo a la izquierda el logotipo **"The Godfather"** en dorado con su marioneta, y debajo el wordmark **"EDGE"** en blanco; **silueta de ciudad / skyline** en gris oscuro en la zona baja; **rombo/diamante gris oscuro** arriba a la izquierda.
- Mismas piezas negras: ventilación superior, pivote circular central, tornillos plateados, borde inferior acolchado, correa con pieza roja.
- **Visor:** abatido, **blanco lechoso / semiopaco**, con reflejos.
- **Artefactos de captura:** un **marco rectangular violeta/púrpura** grande que entra desde la derecha; el fondo blanco de plantilla; la misma **barra "Size / S"** abajo a la derecha.

### Imagen 3 — El Padrino, vista lateral, encuadre más chico y recortado

- El mismo casco Godfather, mismo ángulo, pero en un **recorte más pequeño y de menor resolución**, con menos detalle legible del arte.
- **Visor:** acá se ve **blanco casi totalmente OPACO** — es la más opaca de las tres.
- **Artefactos de captura:** una **línea vertical punteada** que cruza la imagen de arriba abajo por el sector derecho, y el **borde de otra imagen** asomando arriba a la derecha y abajo.

---

## 3. Los dos cambios pedidos, y por qué ninguno de los dos es trivial

El usuario lo formuló como "no cambies nada, solo el visor, y en 4K". Suena a dos ajustes menores. En realidad son los **dos tipos de instrucción que más drift producen** en un generador, y hay que blindar los dos por separado.

### Problema 1 — "visor transparente" NO es un cambio de color

Hoy el visor es opaco y **tapa** lo que hay detrás. Volverlo transparente **revela contenido que en la imagen de partida no existe**. Todo contenido nuevo es una invitación a que el generador invente: el riesgo concreto y probable es que **dibuje una cara, una cabeza, unos ojos o un maniquí adentro del casco**, o que se invente un interior fantasioso (electrónica, visor interno tintado, relleno de color).

Es exactamente el mismo mecanismo ya registrado en el checklist Tipo A para los **borrados**: quitar algo son dos tareas, eliminar **y** reconstruir lo que va debajo. Acá pasa igual — bajar la opacidad del visor destapa una zona, y la zona destapada tiene que estar **declarada en positivo**. Prohibir no alcanza: si el prompt solo dice "sin cara, sin persona", el generador igual tiene que rellenar píxeles y elige él qué poner.

**Qué se ve realmente a través de un visor transparente, en un casco jet VACÍO visto de perfil, en foto de producto:**

- El **acolchado interior negro** del lateral opuesto (el lado interno del casco, visto desde afuera a través del visor).
- La **superficie interna de la calota en penumbra**, oscura, con caída de luz suave.
- La **abertura vacía** por debajo del visor (hueco, fondo del estudio o sombra).
- El **borde interno del propio visor** y su espesor.
- **Nada más. Sin cabeza, sin cara, sin persona, sin maniquí, sin ojos, sin piel, sin pelo.**

Y hay una segunda mitad, igual de importante: **el visor sigue existiendo como pieza física**. Se conservan su forma, su contorno, su curvatura, su espesor, su brillo y sus **reflejos especulares de estudio**. Un visor de policarbonato transparente sigue teniendo reflejos — **no es un agujero ni una zona borrada**. Pasar de lechoso a transparente es un cambio de **opacidad del material**, no la eliminación de la pieza.

### Problema 2 — "en 4K" sobre arte denso es donde más fidelidad se pierde

Pedir 4K partiendo de una captura de pantalla de baja resolución no es un reescalado: es, en los hechos, una **reconstrucción de detalle**. Y ahí es donde el generador **redibuja el arte**: simplifica trazos, cambia colores, mueve elementos, "limpia" garabatos que no entiende, y en el caso del Padrino **reescribe o inventa el texto**.

Es especialmente grave en:

- **Imagen 1** — el graffiti es densísimo: decenas de trazos, salpicaduras y garabatos sin lógica que el generador pueda deducir. Lo que no entiende, lo reemplaza por una versión "más limpia".
- **Imagen 3** — es la de menor resolución y menos detalle legible del que partir, o sea la que más margen le deja al generador para inventar; y encima es la que más contenido tipográfico tiene (el texto del Padrino).

El prompt tiene que declarar que **4K significa MÁS RESOLUCIÓN DEL MISMO DIBUJO, no un dibujo nuevo mejor**: cada trazo, cada color, cada personaje, cada letra y cada salpicadura queda en su misma posición, con su misma forma y su mismo color, solo que con más píxeles y bordes más nítidos. Prohibido reinterpretar, simplificar, "mejorar", completar o redibujar.

Y para el Padrino, un bloque propio: **prohibido reescribir el texto**. Si un tramo no se lee con claridad en la fuente, se reproduce **tal cual se ve** (con el mismo recorte, el mismo tamaño y la misma posición), no se completa inventando la frase.

---

## 4. Decisión abierta — los artefactos de captura de pantalla

Las 3 imágenes tienen elementos que **claramente no son del producto**: líneas y marcos violetas, la barra "Size / S / M", la tira de miniaturas, la línea punteada vertical y bordes de otras imágenes asomando.

Pero el usuario dijo **"que no la cambie en nada"** y pidió *solo* el visor. **No se decide por él.** Por eso:

- Los **3 prompts principales** (sección 5) hacen **solo** lo pedido: 4K + visor transparente, **todo lo demás intacto, artefactos de captura incluidos**.
- La sección 6 agrega un **bloque opcional, listo para pegar**, que además elimina esos artefactos y deja el fondo limpio, aplicando la regla ya registrada de que **un borrado son dos tareas**: eliminar sin dejar resto **y** reconstruir lo que hay debajo (fondo liso donde el artefacto cruza el fondo; arte de la calota continuado sin costura donde cruza el casco).

🔴 **Pendiente de confirmación del usuario:** ¿los artefactos de captura se quitan o se dejan? Hasta que responda, el prompt vigente es el principal (los deja).

**Dato relevante que sí se puede registrar:** en un pedido inmediatamente anterior, sobre la vista **frontal** del mismo casco Bob Esponja, el usuario **sí pidió quitar una línea punteada equivalente**. O sea que hay **evidencia** de que los artefactos le molestan — pero es evidencia, no confirmación para estas 3 imágenes.

---

## 5. Los 3 prompts principales (solo lo pedido: 4K + visor transparente)

Los tres se corren **adjuntando la imagen correspondiente como única referencia**, en **sesiones aisladas** (regla de contaminación cruzada del checklist Tipo A).

<details><summary>Prompt 1 — Imagen 1: casco Bob Esponja, vista lateral (graffiti denso)</summary>

```
Esta es una EDICIÓN PUNTUAL + REESCALADO de la imagen adjunta. NO es una
generación nueva, no es una reinterpretación, no es un rediseño. Devolvé
la MISMA imagen, idéntica en todo, con un solo cambio: la OPACIDAD del
visor. Todo lo demás vuelve exactamente como está.

CRÍTICO — 4K ES MÁS RESOLUCIÓN DEL MISMO DIBUJO, NO UN DIBUJO NUEVO:
- Entregá la imagen en 4K (3840 x 2160 o equivalente en el mismo aspect
  ratio de la imagen adjunta, sin recortar, sin estirar, sin cambiar el
  encuadre ni la orientación).
- "4K" acá significa ÚNICAMENTE más píxeles y bordes más nítidos sobre
  EL MISMO DIBUJO que ya existe. No significa mejorarlo, no significa
  limpiarlo, no significa redibujarlo con mejor técnica.
- Cada trazo de graffiti, cada color, cada personaje, cada garabato,
  cada salpicadura y cada gota de chorreado queda EN SU MISMA POSICIÓN,
  con SU MISMA FORMA y SU MISMO COLOR. Solo con más definición.
- El arte de la calota es graffiti cartoon caótico e irregular a
  propósito: si un trazo parece un error, un borrón o un garabato sin
  sentido, ES ASÍ EN EL ORIGINAL y se reproduce tal cual. Prohibido
  ordenarlo, simplificarlo, corregirlo o "interpretarlo".

TODO ESTO NO SE TOCA (queda pixel por pixel igual, solo con más
resolución):
- El casco open face / tipo jet, de perfil mirando a la izquierda: misma
  silueta, misma curvatura de calota, mismas proporciones, mismo ángulo,
  mismo encuadre, mismo tamaño dentro del cuadro.
- TODO el arte graffiti cartoon de la calota, con su densidad y
  saturación actuales: el personaje amarillo tipo esponja con la lengua
  afuera, la figura rosa grande tipo estrella de mar del centro-bajo,
  los ojos saltones, la hamburguesa, los tags y garabatos, las formas de
  chorreado y goteo, y el arte que llega hasta los bordes. Mismos
  amarillo lima, celeste, rosa fuerte, magenta y violeta, con la misma
  saturación.
- La ventilación superior negra de la parte alta de la calota.
- El mecanismo de pivote circular negro del centro del lateral.
- Los tornillos plateados, en su misma posición y con su mismo brillo.
- El borde inferior con acolchado negro.
- La correa con la pieza roja de abajo.
- La iluminación de estudio, las sombras, los reflejos sobre la pintura
  y la microtextura de la superficie.
- EL FONDO Y TODO LO QUE HAY EN ÉL, TAL CUAL ESTÁ: el fondo blanco con
  las formas geométricas grises angulares de la plantilla, la línea
  diagonal violeta/púrpura de la esquina superior izquierda, la línea
  violeta horizontal cerca del borde inferior, la barra de interfaz gris
  con el texto "Size", "S", "M" de abajo a la derecha, y la tira de
  miniaturas de otros cascos del pie de la imagen. NO limpiar el fondo.
  NO quitar esos elementos. Están en el original y tienen que seguir
  estando, en la misma posición y del mismo tamaño relativo.

CAMBIO ÚNICO — EL VISOR PASA DE OPACO A TRANSPARENTE:
Hoy el visor abatido (el grande y curvo que cubre todo el frente) se ve
gris claro lechoso y semiopaco: tapa lo que hay detrás. Tiene que pasar
a ser un visor de policarbonato CLARO Y TRANSPARENTE, a través del cual
se ve el interior del casco.

  QUÉ SE CONSERVA DEL VISOR COMO PIEZA FÍSICA (todo, menos la opacidad):
  - Su misma forma, su mismo contorno, su misma curvatura y su mismo
    tamaño, exactamente en la misma posición y en la misma posición
    abatida.
  - Su espesor de material y su borde perimetral visible.
  - Su brillo de superficie y SUS REFLEJOS ESPECULARES DE ESTUDIO: un
    visor transparente SIGUE TENIENDO reflejos de luz. El visor no es un
    agujero ni una zona borrada — es una pieza de plástico transparente
    y brillante que sigue estando ahí.
  - Su mecanismo, su pivote y sus tornillos, sin mover.

  QUÉ SE VE A TRAVÉS DEL VISOR (declarado en positivo, es esto y nada
  más):
  - El ACOLCHADO INTERIOR NEGRO del lateral opuesto del casco, visto
    desde afuera a través del visor.
  - La SUPERFICIE INTERNA DE LA CALOTA en penumbra: oscura, con caída de
    luz suave, sin detalle brillante.
  - La ABERTURA VACÍA del casco por debajo del visor.
  - El BORDE INTERNO del propio visor.
  - Es un CASCO VACÍO en foto de producto: adentro no hay nadie.

PROHIBIDO ABSOLUTO:
- Dibujar una cabeza, una cara, un rostro, ojos, piel, pelo, un maniquí,
  una persona o cualquier figura humana o parcial adentro del casco o
  detrás del visor.
- Inventar cualquier interior que no sea acolchado negro y penumbra:
  nada de electrónica, pantallas, visor interno tintado, relleno de
  color, gráficos ni reflejos de escena inventados.
- Eliminar el visor, dejarlo como hueco vacío, quitarle los reflejos o
  cambiarle la forma, el tamaño, la curvatura o la posición.
- Tintar el visor de un color (humo, espejado, azulado, amarillento):
  transparente CLARO, incoloro.
- Redibujar, simplificar, reordenar, "mejorar", completar o cambiar de
  color CUALQUIER parte del arte graffiti de la calota.
- Mover, agrandar, achicar o quitar cualquier pieza del casco.
- Limpiar el fondo, quitar las líneas violetas, la barra "Size / S / M"
  o la tira de miniaturas.
- Recortar, reencuadrar, rotar o cambiar el aspect ratio.
- Agregar texto, logos, marcas de agua o elementos nuevos de cualquier
  tipo.

VERIFICACIÓN FINAL antes de entregar (compará tu resultado contra la
imagen adjunta, elemento por elemento):
1. ¿El único cambio perceptible es que el visor dejó de ser lechoso y
   ahora se ve a través de él? Si hay CUALQUIER otra diferencia, está
   mal.
2. ¿Detrás del visor se ve acolchado negro y penumbra, y NO hay ninguna
   cara, cabeza, ojo ni figura humana? Mirá específicamente esa zona
   antes de entregar.
3. ¿El visor sigue teniendo su borde, su curvatura y sus reflejos de
   estudio, o quedó como un agujero plano? Tiene que seguir leyéndose
   como una pieza de plástico transparente.
4. ¿El arte graffiti tiene los mismos elementos, en las mismas
   posiciones y con los mismos colores? Verificá uno por uno: personaje
   amarillo con lengua, figura rosa tipo estrella de mar, ojos saltones,
   hamburguesa, tags, chorreados.
5. ¿Están todas las piezas negras y plateadas en su lugar? Ventilación
   superior, pivote circular, tornillos, acolchado del borde inferior,
   correa con pieza roja.
6. ¿El fondo sigue igual, CON las líneas violetas, la barra "Size / S /
   M" y la tira de miniaturas?
7. ¿La imagen es 4K y el aspect ratio es el mismo que el de la adjunta?
```

</details>

<details><summary>Prompt 2 — Imagen 2: casco The Godfather, vista lateral (encuadre grande)</summary>

```
Esta es una EDICIÓN PUNTUAL + REESCALADO de la imagen adjunta. NO es una
generación nueva, no es una reinterpretación, no es un rediseño. Devolvé
la MISMA imagen, idéntica en todo, con un solo cambio: la OPACIDAD del
visor. Todo lo demás vuelve exactamente como está.

CRÍTICO — 4K ES MÁS RESOLUCIÓN DEL MISMO DIBUJO, NO UN DIBUJO NUEVO:
- Entregá la imagen en 4K (3840 x 2160 o equivalente en el mismo aspect
  ratio de la imagen adjunta, sin recortar, sin estirar, sin cambiar el
  encuadre ni la orientación).
- "4K" acá significa ÚNICAMENTE más píxeles y bordes más nítidos sobre
  EL MISMO DIBUJO que ya existe. No significa mejorarlo, no significa
  rediseñarlo, no significa recomponerlo.
- Cada elemento del arte —la silueta del rostro, el texto, las manos con
  hilos, el logotipo, el skyline, el rombo— queda EN SU MISMA POSICIÓN,
  con SU MISMO TAMAÑO, SU MISMA FORMA y SU MISMO COLOR. Solo con más
  definición.

EL TEXTO NO SE REESCRIBE NI SE COMPLETA — BLOQUE OBLIGATORIO:
- El arte tiene texto en rojo y blanco, en varias líneas, que en la
  imagen adjunta se lee solo PARCIALMENTE, cortado por el borde del
  casco y por la curvatura: se distinguen fragmentos del tipo
  "I DON'T ... APOLO... TO TAKE ... OF".
- Ese texto se reproduce EXACTAMENTE COMO SE VE en la imagen adjunta:
  mismas palabras visibles, mismos fragmentos cortados, mismo punto de
  corte, mismo salto de línea, mismo tamaño, misma tipografía, mismo
  reparto de rojo y blanco, misma posición.
- PROHIBIDO completar la frase, adivinar las palabras faltantes,
  extender el texto más allá de donde se corta, reacomodar las líneas,
  cambiar el tamaño de la tipografía o "corregir" la ortografía.
- Si un tramo del texto no se lee con claridad en la fuente, se
  reproduce con el mismo grado de ilegibilidad y en la misma posición.
  NO se resuelve inventando. Un texto borroso que se vuelve legible con
  palabras nuevas es un ERROR, no una mejora.
- Lo mismo vale para el wordmark "EDGE" y para el logotipo
  "The Godfather": misma tipografía, mismo dorado, mismo tamaño, misma
  posición, sin rehacer las letras.

TODO ESTO NO SE TOCA (queda pixel por pixel igual, solo con más
resolución):
- El casco open face / tipo jet, de perfil mirando a la izquierda: misma
  silueta, misma curvatura de calota, mismas proporciones, mismo ángulo,
  mismo encuadre, mismo tamaño dentro del cuadro.
- El color base de la calota: NEGRO BRILLANTE, con sus mismos reflejos.
- La SILUETA BLANCA/GRIS DEL ROSTRO DE PERFIL (el padrino) del
  centro-alto de la calota: mismo dibujo, mismo tamaño, misma posición,
  mismo degradado de grises, mismo contorno. No rehacer la cara, no
  cambiarle los rasgos, no "mejorarla" ni volverla más realista.
- El TEXTO en rojo y blanco de la derecha (ver bloque anterior).
- Las MANOS CON HILOS DE MARIONETA EN DORADO hacia la derecha: mismos
  hilos, mismo grosor, mismo trazado, mismo dorado.
- El LOGOTIPO "The Godfather" en dorado con su marioneta, abajo a la
  izquierda, y el WORDMARK "EDGE" en blanco debajo.
- La SILUETA DE CIUDAD / SKYLINE en gris oscuro de la zona baja: mismos
  edificios, mismas alturas, mismo perfil.
- El ROMBO / DIAMANTE gris oscuro de arriba a la izquierda.
- La ventilación superior negra, el mecanismo de pivote circular negro
  del centro del lateral, los tornillos plateados, el borde inferior con
  acolchado negro y la correa con la pieza roja de abajo.
- La iluminación de estudio, las sombras y los reflejos sobre la pintura
  negra brillante.
- EL FONDO Y TODO LO QUE HAY EN ÉL, TAL CUAL ESTÁ: el fondo blanco de
  plantilla, el marco rectangular violeta/púrpura grande que entra desde
  la derecha de la imagen, y la barra de interfaz con el texto "Size" y
  "S" de abajo a la derecha. NO limpiar el fondo. NO quitar esos
  elementos.

CAMBIO ÚNICO — EL VISOR PASA DE OPACO A TRANSPARENTE:
Hoy el visor abatido se ve blanco lechoso y semiopaco, con reflejos:
tapa lo que hay detrás. Tiene que pasar a ser un visor de policarbonato
CLARO Y TRANSPARENTE, a través del cual se ve el interior del casco.

  QUÉ SE CONSERVA DEL VISOR COMO PIEZA FÍSICA (todo, menos la opacidad):
  - Su misma forma, su mismo contorno, su misma curvatura y su mismo
    tamaño, exactamente en la misma posición y en la misma posición
    abatida.
  - Su espesor de material y su borde perimetral visible.
  - Su brillo de superficie y SUS REFLEJOS ESPECULARES DE ESTUDIO: un
    visor transparente SIGUE TENIENDO reflejos de luz. El visor no es un
    agujero ni una zona borrada — es una pieza de plástico transparente
    y brillante que sigue estando ahí.
  - Su mecanismo, su pivote y sus tornillos, sin mover.

  QUÉ SE VE A TRAVÉS DEL VISOR (declarado en positivo, es esto y nada
  más):
  - El ACOLCHADO INTERIOR NEGRO del lateral opuesto del casco, visto
    desde afuera a través del visor.
  - La SUPERFICIE INTERNA DE LA CALOTA en penumbra: oscura, con caída de
    luz suave, sin detalle brillante.
  - La ABERTURA VACÍA del casco por debajo del visor.
  - El BORDE INTERNO del propio visor.
  - Es un CASCO VACÍO en foto de producto: adentro no hay nadie.
  - OJO: como la calota es negra y el interior es negro, la zona detrás
    del visor tiene que leerse como INTERIOR EN PENUMBRA CON PROFUNDIDAD
    (se percibe el hueco y el acolchado), no como una mancha negra plana
    ni como el mismo negro brillante de la calota exterior.

PROHIBIDO ABSOLUTO:
- Dibujar una cabeza, una cara, un rostro, ojos, piel, pelo, un maniquí,
  una persona o cualquier figura humana o parcial adentro del casco o
  detrás del visor. (Atención especial en esta imagen: el arte YA tiene
  una silueta de rostro pintada en la calota — esa silueta es PINTURA
  SOBRE LA SUPERFICIE EXTERIOR y se queda donde está; NO se traslada, ni
  se refleja, ni se duplica dentro del casco.)
- Inventar cualquier interior que no sea acolchado negro y penumbra.
- Eliminar el visor, dejarlo como hueco vacío, quitarle los reflejos o
  cambiarle la forma, el tamaño, la curvatura o la posición.
- Tintar el visor de un color (humo, espejado, azulado): transparente
  CLARO, incoloro.
- Reescribir, completar, extender, reacomodar o "corregir" cualquier
  texto.
- Redibujar, simplificar, mover o cambiar de color cualquier elemento
  del arte: rostro, marionetas, logotipo, skyline, rombo.
- Mover, agrandar, achicar o quitar cualquier pieza del casco.
- Limpiar el fondo, quitar el marco violeta o la barra "Size / S".
- Recortar, reencuadrar, rotar o cambiar el aspect ratio.
- Agregar texto, logos, marcas de agua o elementos nuevos.

VERIFICACIÓN FINAL antes de entregar (compará tu resultado contra la
imagen adjunta, elemento por elemento):
1. ¿El único cambio perceptible es que el visor dejó de ser lechoso y
   ahora se ve a través de él? Si hay CUALQUIER otra diferencia, está
   mal.
2. ¿Detrás del visor se ve acolchado negro y penumbra con profundidad, y
   NO hay ninguna cara, cabeza, ojo ni figura humana? Mirá
   específicamente esa zona antes de entregar.
3. ¿El visor sigue teniendo su borde, su curvatura y sus reflejos de
   estudio, o quedó como un agujero plano?
4. ¿El texto dice EXACTAMENTE lo mismo que en la imagen adjunta, con los
   mismos cortes y los mismos fragmentos incompletos? Leelo palabra por
   palabra y compará. Si aparece alguna palabra que no estaba, está mal.
5. ¿Están todos los elementos del arte, en su posición y su tamaño?
   Silueta del rostro, texto rojo/blanco, manos con hilos dorados,
   logotipo "The Godfather", wordmark "EDGE", skyline, rombo gris.
6. ¿Están todas las piezas del casco en su lugar? Ventilación superior,
   pivote circular, tornillos plateados, acolchado del borde inferior,
   correa con pieza roja.
7. ¿El fondo sigue igual, CON el marco violeta y la barra "Size / S"?
8. ¿La imagen es 4K y el aspect ratio es el mismo que el de la adjunta?
```

</details>

<details><summary>Prompt 3 — Imagen 3: casco The Godfather, vista lateral, recorte chico y de baja resolución</summary>

```
Esta es una EDICIÓN PUNTUAL + REESCALADO de la imagen adjunta. NO es una
generación nueva, no es una reinterpretación, no es un rediseño. Devolvé
la MISMA imagen, idéntica en todo, con un solo cambio: la OPACIDAD del
visor. Todo lo demás vuelve exactamente como está.

CRÍTICO — 4K ES MÁS RESOLUCIÓN DEL MISMO DIBUJO, NO UN DIBUJO NUEVO:
- Entregá la imagen en 4K (3840 x 2160 o equivalente en el mismo aspect
  ratio de la imagen adjunta, sin recortar, sin ampliar el encuadre, sin
  cambiar la orientación). El encuadre es CHICO y RECORTADO: se queda
  así. No completes el casco ni el fondo más allá de lo que se ve.
- ESTA IMAGEN ES DE BAJA RESOLUCIÓN Y ESO ES EL PUNTO MÁS DELICADO DEL
  TRABAJO: el arte de la calota se ve con poco detalle. "4K" NO es una
  autorización para rellenar ese detalle con invención propia.
- Todo lo que se ve borroso o poco definido se reproduce EN LA MISMA
  POSICIÓN, CON LA MISMA FORMA GENERAL Y EL MISMO COLOR, con bordes más
  limpios — pero SIN AGREGAR elementos, SIN inventar detalle que no está
  y SIN reemplazar una forma imprecisa por una versión "correcta" que
  vos deduzcas.
- Si no se distingue qué es un elemento, se reproduce tal cual se ve. Es
  preferible una zona fiel y poco detallada que una zona nítida e
  inventada.

EL TEXTO NO SE REESCRIBE NI SE COMPLETA — BLOQUE OBLIGATORIO:
- El arte tiene texto en rojo y blanco, en varias líneas, que en esta
  imagen se lee todavía MENOS que en las tomas más grandes del mismo
  casco: aparece parcial y cortado.
- Ese texto se reproduce EXACTAMENTE COMO SE VE: mismas palabras y
  fragmentos visibles, mismo punto de corte, mismo salto de línea, mismo
  tamaño relativo, mismo reparto de rojo y blanco, misma posición.
- PROHIBIDO completar la frase, adivinar palabras, extender el texto,
  reacomodar las líneas o "corregir" nada.
- Si un tramo es ilegible en la fuente, sale con el mismo grado de
  ilegibilidad y en la misma posición. Un texto borroso que aparece
  legible con palabras nuevas es un ERROR, no una mejora.
- Lo mismo vale para el wordmark "EDGE" y el logotipo "The Godfather":
  misma tipografía, mismo dorado, mismo tamaño, misma posición.

TODO ESTO NO SE TOCA (queda pixel por pixel igual, solo con más
resolución):
- El casco open face / tipo jet, de perfil mirando a la izquierda: misma
  silueta, misma curvatura, mismas proporciones, mismo ángulo, mismo
  recorte y mismo tamaño dentro del cuadro.
- El color base de la calota: NEGRO BRILLANTE.
- La silueta blanca/gris del rostro de perfil (el padrino) del
  centro-alto, con su mismo tamaño, posición y degradado de grises.
- El texto en rojo y blanco (ver bloque anterior).
- Las manos con hilos de marioneta en dorado.
- El logotipo "The Godfather" en dorado con su marioneta y el wordmark
  "EDGE" en blanco.
- La silueta de ciudad / skyline en gris oscuro de la zona baja.
- El rombo / diamante gris oscuro.
- La ventilación superior negra, el pivote circular negro, los tornillos
  plateados, el borde inferior con acolchado negro y la correa con la
  pieza roja.
- La iluminación, las sombras y los reflejos.
- EL FONDO Y TODOS LOS ARTEFACTOS DE LA CAPTURA, TAL CUAL ESTÁN: la
  LÍNEA VERTICAL PUNTEADA que cruza la imagen de arriba abajo por el
  sector derecho, y el BORDE DE OTRA IMAGEN que asoma arriba a la
  derecha y abajo. NO limpiar. NO quitar. NO completar la imagen vecina.
  Están en el original y tienen que seguir estando, en la misma posición
  y con el mismo aspecto.

CAMBIO ÚNICO — EL VISOR PASA DE OPACO A TRANSPARENTE:
Hoy el visor abatido se ve BLANCO CASI TOTALMENTE OPACO: tapa por
completo lo que hay detrás. Tiene que pasar a ser un visor de
policarbonato CLARO Y TRANSPARENTE, a través del cual se ve el interior
del casco. Es el cambio de opacidad más grande de las 3 imágenes de este
pedido, así que es también el que más contenido nuevo destapa: leé con
atención el sub-bloque de qué se ve a través.

  QUÉ SE CONSERVA DEL VISOR COMO PIEZA FÍSICA (todo, menos la opacidad):
  - Su misma forma, su mismo contorno, su misma curvatura y su mismo
    tamaño, exactamente en la misma posición y en la misma posición
    abatida.
  - Su espesor de material y su borde perimetral visible.
  - Su brillo de superficie y SUS REFLEJOS ESPECULARES DE ESTUDIO: un
    visor transparente SIGUE TENIENDO reflejos de luz. El visor no es un
    agujero ni una zona borrada — es una pieza de plástico transparente
    y brillante que sigue estando ahí.
  - Su mecanismo, su pivote y sus tornillos, sin mover.

  QUÉ SE VE A TRAVÉS DEL VISOR (declarado en positivo, es esto y nada
  más):
  - El ACOLCHADO INTERIOR NEGRO del lateral opuesto del casco, visto
    desde afuera a través del visor.
  - La SUPERFICIE INTERNA DE LA CALOTA en penumbra: oscura, con caída de
    luz suave, sin detalle brillante.
  - La ABERTURA VACÍA del casco por debajo del visor.
  - El BORDE INTERNO del propio visor.
  - Es un CASCO VACÍO en foto de producto: adentro no hay nadie.
  - Como la calota es negra y el interior es negro, la zona detrás del
    visor tiene que leerse como INTERIOR EN PENUMBRA CON PROFUNDIDAD, no
    como una mancha negra plana ni como el mismo negro brillante de la
    calota exterior.

PROHIBIDO ABSOLUTO:
- Dibujar una cabeza, una cara, un rostro, ojos, piel, pelo, un maniquí,
  una persona o cualquier figura humana o parcial adentro del casco o
  detrás del visor. (La silueta de rostro del arte es PINTURA SOBRE LA
  SUPERFICIE EXTERIOR: se queda donde está, no se traslada ni se duplica
  dentro del casco.)
- Inventar cualquier interior que no sea acolchado negro y penumbra.
- Eliminar el visor, dejarlo como hueco vacío, quitarle los reflejos o
  cambiarle forma, tamaño, curvatura o posición.
- Tintar el visor de un color: transparente CLARO, incoloro.
- Inventar detalle gráfico donde la fuente está borrosa. Reescribir,
  completar o "corregir" cualquier texto.
- Ampliar el encuadre, completar el casco fuera del recorte o
  reconstruir la imagen vecina que asoma.
- Limpiar el fondo, quitar la línea punteada vertical o el borde de la
  otra imagen.
- Recortar, reencuadrar, rotar o cambiar el aspect ratio.
- Agregar texto, logos, marcas de agua o elementos nuevos.

VERIFICACIÓN FINAL antes de entregar (compará tu resultado contra la
imagen adjunta, elemento por elemento):
1. ¿El único cambio perceptible es que el visor dejó de ser blanco opaco
   y ahora se ve a través de él? Si hay CUALQUIER otra diferencia, está
   mal.
2. ¿Detrás del visor se ve acolchado negro y penumbra con profundidad, y
   NO hay ninguna cara, cabeza, ojo ni figura humana?
3. ¿El visor sigue teniendo su borde, su curvatura y sus reflejos, o
   quedó como un agujero plano?
4. ¿Aparece algún elemento gráfico, forma o detalle que NO se distinguía
   en la imagen adjunta? Si aparece algo nuevo, lo inventaste: está mal.
5. ¿El texto dice EXACTAMENTE lo mismo, con los mismos cortes y los
   mismos fragmentos incompletos? Si hay una palabra que antes no se
   leía y ahora sí, está mal.
6. ¿El encuadre es el mismo recorte chico, sin ampliar ni completar?
7. ¿Siguen ahí la línea punteada vertical y el borde de la otra imagen?
8. ¿La imagen es 4K y el aspect ratio es el mismo que el de la adjunta?
```

</details>

---

## 6. Bloque OPCIONAL — limpieza de los artefactos de captura de pantalla

> ⚠️ **OPCIONAL — NO está incluido en los prompts de la sección 5.**
> Esto se usa **solo si el usuario confirma** que además quiere sacar los elementos de la captura de pantalla. Si lo confirma, se **pega este bloque a continuación** del prompt principal correspondiente (antes de la VERIFICACIÓN FINAL), y se **elimina del prompt principal** la parte de "EL FONDO Y TODO LO QUE HAY EN ÉL, TAL CUAL ESTÁ" y la línea del PROHIBIDO que dice "limpiar el fondo".
>
> Está redactado aplicando la regla del checklist Tipo A/D de que **un borrado son dos tareas**: eliminar sin dejar resto **y** reconstruir lo que va debajo.

<details><summary>Bloque opcional 1 — limpieza para la Imagen 1 (Bob Esponja lateral)</summary>

```
SEGUNDO CAMBIO — ELIMINAR LOS ARTEFACTOS DE CAPTURA DE PANTALLA:
Esta imagen es una captura de pantalla de una página web. Los siguientes
elementos NO son parte del producto y hay que eliminarlos por completo:
  a) La línea diagonal violeta/púrpura que cruza la esquina superior
     izquierda.
  b) La línea violeta horizontal cerca del borde inferior.
  c) La barra de interfaz gris con el texto "Size", "S", "M" de abajo a
     la derecha (la barra entera, incluidos su fondo, sus bordes y su
     texto).
  d) La tira de miniaturas de otros cascos del pie de la imagen (todas
     las miniaturas y el área que ocupan).
  e) Las formas geométricas grises angulares del fondo de plantilla.

CADA ELIMINACIÓN SON DOS TAREAS, NO UNA — hacé las dos:
  TAREA 1 — ELIMINAR SIN DEJAR RESTO: no puede quedar ni un fragmento,
  ni un borde, ni un contorno, ni una línea residual, ni un halo, ni una
  sombra, ni una silueta tenue, ni una zona de color ligeramente
  distinto donde estaba el elemento.
  TAREA 2 — RECONSTRUIR LO QUE VA DEBAJO, y depende de por dónde pasa el
  elemento:
  - DONDE EL ELEMENTO CRUZA EL FONDO: el fondo queda BLANCO LISO Y
    UNIFORME, del mismo blanco exacto que el resto del fondo, sin
    parches, sin manchas, sin degradados nuevos y sin costura visible
    contra el blanco vecino.
  - DONDE EL ELEMENTO CRUZA EL CASCO: el ARTE GRAFFITI DE LA CALOTA SE
    CONTINÚA POR DEBAJO, sin costura. Los trazos, colores y formas que
    entran por un borde del área tapada tienen que SALIR POR EL OTRO
    BORDE alineados, con el mismo grosor, el mismo color y la misma
    dirección, como si la línea violeta nunca hubiera estado ahí.
    Prohibido tapar el hueco con un parche de color plano, con un
    difuminado o con un gráfico nuevo inventado.
  - La superficie reconstruida tiene la MISMA iluminación, los MISMOS
    reflejos, la MISMA curvatura y el MISMO material que la zona
    contigua del casco.

DESPUÉS DE LA LIMPIEZA el resultado tiene que verse como una FOTO DE
PRODUCTO LIMPIA: el casco completo sobre fondo blanco liso y nada más.

CHEQUEO EXTRA DE ESTE BLOQUE:
- ¿Desapareció el 100% de cada artefacto, sin restos, bordes ni sombras
  fantasma? Recorré el recorrido completo de cada línea violeta de punta
  a punta.
- ¿El arte graffiti quedó continuo donde antes lo cruzaba la línea, con
  los trazos alineados de un lado al otro?
- ¿El fondo quedó blanco liso y parejo, sin parches?
- ¿El casco quedó exactamente igual, sin perder ningún elemento del arte
  al limpiar?
```

</details>

<details><summary>Bloque opcional 2 — limpieza para la Imagen 2 (Godfather, encuadre grande)</summary>

```
SEGUNDO CAMBIO — ELIMINAR LOS ARTEFACTOS DE CAPTURA DE PANTALLA:
Esta imagen es una captura de pantalla de una página web. Los siguientes
elementos NO son parte del producto y hay que eliminarlos por completo:
  a) El marco rectangular violeta/púrpura grande que entra desde la
     derecha de la imagen (el marco entero, sus 4 lados y sus esquinas,
     hasta donde llegue dentro del cuadro).
  b) La barra de interfaz con el texto "Size" y "S" de abajo a la
     derecha (la barra entera, incluidos su fondo, sus bordes y su
     texto).

CADA ELIMINACIÓN SON DOS TAREAS, NO UNA — hacé las dos:
  TAREA 1 — ELIMINAR SIN DEJAR RESTO: no puede quedar ni un fragmento
  del marco, ni un borde, ni un contorno, ni una línea residual, ni un
  halo, ni una sombra, ni una zona de color ligeramente distinto donde
  estaba.
  TAREA 2 — RECONSTRUIR LO QUE VA DEBAJO, y depende de por dónde pasa:
  - DONDE EL MARCO CRUZA EL FONDO: el fondo queda BLANCO LISO Y
    UNIFORME, del mismo blanco exacto que el resto, sin parches, sin
    manchas y sin costura visible.
  - DONDE EL MARCO CRUZA EL CASCO: se reconstruye lo que hay debajo con
    total continuidad. Si pasa sobre la calota negra brillante, esa zona
    vuelve a ser negro brillante con el MISMO reflejo y el MISMO
    degradado de luz que la superficie contigua. Si pasa sobre un
    elemento del arte —el texto rojo/blanco, las manos con hilos
    dorados, el skyline, el rombo—, ESE ELEMENTO SE COMPLETA POR DEBAJO
    con su mismo trazo, su mismo grosor, su mismo color y su misma
    dirección: lo que entra por un borde del área tapada sale por el
    otro alineado, sin costura.
  - ATENCIÓN: completar un elemento del ARTE tapado por el marco NO es
    lo mismo que completar el TEXTO. El texto que está cortado por el
    BORDE DEL CASCO sigue cortado igual que en el original — eso es
    diseño, no artefacto. Solo se reconstruye lo que tapa el marco
    violeta.
  - La superficie reconstruida tiene la MISMA iluminación, los MISMOS
    reflejos y el MISMO material que la zona contigua.

DESPUÉS DE LA LIMPIEZA el resultado tiene que verse como una FOTO DE
PRODUCTO LIMPIA: el casco completo sobre fondo blanco liso y nada más.

CHEQUEO EXTRA DE ESTE BLOQUE:
- ¿Desapareció el 100% del marco violeta y de la barra "Size / S", sin
  restos, bordes ni sombras fantasma? Recorré los 4 lados del marco.
- ¿Los elementos del arte que el marco tapaba quedaron completos y
  continuos, con sus trazos alineados de un lado al otro?
- ¿El texto sigue cortado por el borde del casco exactamente igual que
  en el original? (Eso NO se completa.)
- ¿El fondo quedó blanco liso y parejo?
```

</details>

<details><summary>Bloque opcional 3 — limpieza para la Imagen 3 (Godfather, recorte chico)</summary>

```
SEGUNDO CAMBIO — ELIMINAR LOS ARTEFACTOS DE CAPTURA DE PANTALLA:
Esta imagen es una captura de pantalla de una página web. Los siguientes
elementos NO son parte del producto y hay que eliminarlos por completo:
  a) La línea vertical punteada que cruza la imagen de arriba abajo por
     el sector derecho (toda la línea, punto por punto, de borde a
     borde).
  b) El borde de la otra imagen que asoma arriba a la derecha y abajo
     (el fragmento visible de esa imagen vecina y su borde).

CADA ELIMINACIÓN SON DOS TAREAS, NO UNA — hacé las dos:
  TAREA 1 — ELIMINAR SIN DEJAR RESTO: ni un punto suelto de la línea
  punteada, ni un borde, ni un contorno, ni un halo, ni una sombra, ni
  una zona de color ligeramente distinto donde estaba.
  TAREA 2 — RECONSTRUIR LO QUE VA DEBAJO:
  - DONDE EL ARTEFACTO CRUZA EL FONDO: el fondo queda BLANCO LISO Y
    UNIFORME, del mismo blanco exacto que el resto, sin parches y sin
    costura visible.
  - DONDE EL ARTEFACTO CRUZA EL CASCO: se reconstruye lo que hay debajo
    con total continuidad — calota negra brillante con su mismo reflejo,
    o el elemento del arte que corresponda (texto, manos con hilos
    dorados, skyline, rombo) completado por debajo con su mismo trazo,
    grosor, color y dirección. Lo que entra por un lado de la línea sale
    por el otro alineado, sin costura y sin salto de grosor.
  - DONDE ESTABA LA IMAGEN VECINA: esa zona pasa a ser FONDO BLANCO
    LISO. No se completa la imagen vecina, no se reconstruye el otro
    casco, no se rellena con un gráfico nuevo — queda blanco.
  - PERO EL ENCUADRE NO CAMBIA: el recorte del casco sigue siendo el
    mismo. Limpiar el fondo no autoriza a ampliar la vista ni a
    completar la parte del casco que queda fuera del recorte.

DESPUÉS DE LA LIMPIEZA el resultado tiene que verse como una FOTO DE
PRODUCTO LIMPIA: el mismo recorte del casco sobre fondo blanco liso y
nada más.

CHEQUEO EXTRA DE ESTE BLOQUE:
- ¿Desapareció el 100% de la línea punteada, punto por punto, de arriba
  a abajo, sin dejar ni un rastro?
- ¿Desapareció el fragmento de la imagen vecina, y esa zona quedó blanco
  liso en vez de otro dibujo?
- ¿Lo que la línea tapaba sobre el casco quedó continuo y alineado?
- ¿El encuadre sigue siendo el mismo recorte, sin ampliar?
```

</details>

---

## 7. Auditoría anticipada — qué mirar cuando lleguen los resultados

Checklist derivado de los 2 problemas técnicos, para el Agente Auditor (que **no** es el que generó):

| # | Chequeo | Imagen 1 | Imagen 2 | Imagen 3 |
|---|---|---|---|---|
| 1 | Detrás del visor NO hay cara / cabeza / ojos / maniquí | 🔴 | 🔴 | 🔴 |
| 2 | Detrás del visor se ve acolchado negro + penumbra (no una mancha plana, no un hueco) | 🔴 | 🔴 | 🔴 |
| 3 | El visor conserva forma, borde, curvatura y reflejos especulares | 🔴 | 🔴 | 🔴 |
| 4 | Visor incoloro (no humo, no espejado, no tintado) | 🔴 | 🔴 | 🔴 |
| 5 | El arte de la calota no fue redibujado ni simplificado | 🔴 (graffiti — riesgo máximo) | 🔴 | 🔴 (baja resolución — riesgo máximo) |
| 6 | El texto no fue reescrito, completado ni "corregido" | n/a | 🔴 | 🔴 |
| 7 | Piezas físicas en su lugar (ventilación, pivote, tornillos, acolchado, correa roja) | 🔴 | 🔴 | 🔴 |
| 8 | Encuadre, aspect ratio y escala del casco sin cambios | 🔴 | 🔴 | 🔴 |
| 9 | Resolución 4K real | 🔴 | 🔴 | 🔴 |
| 10 | Artefactos de captura presentes (prompt principal) / ausentes sin restos (bloque opcional) | 🔴 | 🔴 | 🔴 |

**Estado:** 🔴 los 3 prompts pendientes de generar. Correr cada uno en **sesión aislada** (regla de contaminación cruzada entre generaciones del checklist Tipo A) y adjuntando **solo** la imagen que le corresponde.

**Qué hay que hacer:**
1. Confirmar con el usuario la **decisión abierta de la sección 4** (¿se quitan o no los artefactos de captura?).
2. Correr los 3 prompts principales, uno por sesión, y mandar los resultados.
3. Auditar con la tabla de la sección 7 — mirar primero el punto 1 (cara inventada detrás del visor), que es el modo de falla más probable.
4. Subir las 3 imágenes de partida como **adjunto real** para versionarlas en `imagenes-bob-esponja/` y `imagenes-god-father/` (hoy la descripción de la sección 2 es la única fuente en el repo).

---

**Última actualización:** 2026-07-29 · primer caso del repo donde el cambio pedido es **volver transparente una pieza opaca**, y primer caso donde el pedido de **4K parte de una captura de pantalla de baja resolución**. Los dos problemas quedaron documentados en la sección 3 y propuestos como lecciones generalizables en `orquestacion-agentes-paralelos.md`.
