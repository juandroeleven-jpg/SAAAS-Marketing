# Familia 4 — Escena generada alrededor de un casco real

[← Volver al catálogo de prompts](README.md)

**Operación:** inversa a la Familia 2. Acá NO existe una foto de escena: se genera una escena lifestyle nueva desde cero (persona, moto, fondo, luz) alrededor de un casco real tomado de su foto de producto. El casco es el único elemento fijo e intocable; la escena es el espacio creativo.

**Se adjunta UNA imagen:** la foto de producto del casco (única autoridad de forma, gráficos y colores del casco).

**Riesgo principal de esta familia:** el modelo tiende a "reinterpretar" los gráficos del casco al ponerlo en escena — redibuja el arte, corrompe los textos (falla documentada en Simulación 6d con la tipografía) e inventa el lado no visible del casco. Por eso cada prompt: (1) exige copiar el gráfico tal cual, (2) manda componer la toma mostrando el mismo lado del casco que muestra la foto, y (3) blinda los caracteres/textos.

**Slots variables:** descripción del casco y su gráfico · quién es el sujeto y qué está haciendo · ambiente/luz de la escena · estado del visor.

---

## Instancia 4.1 — Mujer bajándose de la moto con el casco jet samurái (visor transparente, rostro visible)

**Casco (imagen adjunta):** jet/abierto con doble visor, base negra y blanca con arte manga/samurái en tinta, pinceladas rojas y caracteres japoneses. La captura viene de una página web de catálogo (trae patrón de fondo, selector de talles y fotos vecinas — se limpian).

```
Esto es una GENERACIÓN DE ESCENA alrededor de un CASCO REAL, no un
diseño de casco nuevo. Recibís UNA imagen: la foto de producto del
casco. Esa foto es la ÚNICA AUTORIDAD DEL CASCO: su forma, sus
gráficos y sus colores se copian EXACTOS. Todo lo demás de la escena
se genera nuevo, pero el casco es EXACTAMENTE el de la foto, sin
ningún cambio.

LA ESCENA A GENERAR:
Fotografía realista, estilo lifestyle/editorial de moto, de una
MUJER bajándose de una motocicleta:
- La moto está detenida; ella está en el momento de bajarse: pasando
  la pierna por encima del asiento o ya apoyando el pie en el piso,
  con una mano todavía en el manubrio.
- Lleva puesto el casco de la foto adjunta, bien calzado sobre la
  cabeza, a escala real.
- Ropa de motociclista urbana creíble (campera, jeans o pantalón de
  moto, guantes opcionales) en colores que combinen con el casco
  (negro, blanco, algún acento rojo) sin robarle protagonismo.
- Ambiente urbano realista (calle, estacionamiento o frente de un
  local), luz natural de tarde, profundidad de campo tipo foto
  editorial: la mujer y el casco nítidos, el fondo levemente
  desenfocado.
- La foto es fotorrealista: nada de ilustración, nada de render 3D
  evidente, nada de estética de videojuego.

EL CASCO — SE COPIA EXACTO DE LA FOTO ADJUNTA:
- Es un casco ABIERTO tipo JET: NO tiene mentonera. Prohibido
  convertirlo en casco integral o modular.
- Doble visor: el visor externo grande y transparente que baja hasta
  la zona del mentón, y el visor interno que se ve detrás. Los dos
  existen en la foto y se mantienen.
- El gráfico se reproduce TAL CUAL: base negra y blanca con arte
  estilo manga/samurái en tinta — el guerrero samurái en la parte
  alta, las viñetas de combate dibujadas en el lateral, las
  pinceladas y salpicaduras ROJAS, y los CARACTERES JAPONESES en
  negro del lateral.
- Los caracteres japoneses se COPIAN EXACTOS de la foto: mismos
  trazos, misma posición, mismo tamaño. No se inventan caracteres
  nuevos, no se "corrigen", no se reemplazan por garabatos que
  parezcan japonés.
- Las piezas físicas quedan iguales: ventilaciones de la calota, el
  mecanismo/botón del pivote del visor, la goma negra del borde
  inferior y la correa con su detalle rojo.

ESCALA REAL — ANCLA DURA:
El casco es un objeto de tamaño real puesto sobre una cabeza real:
- Es apenas más grande que la cabeza que lo lleva: unos pocos
  centímetros de carcasa y acolchado alrededor del cráneo, nada más.
- Regla de control: los HOMBROS de la mujer se ven MÁS ANCHOS que el
  casco. Si el casco sale más ancho que los hombros, está mal.
- La cabeza con el casco puesto mide más o menos un séptimo de la
  altura total del cuerpo, como en cualquier foto real de una
  persona con casco.
- Ella podría sacarse el casco con las dos manos: ese es el tamaño.

COMPOSICIÓN — PARA NO INVENTAR EL LADO OCULTO:
La foto adjunta muestra el casco en 3/4 lateral izquierdo. Componé
la toma de la escena de modo que se vea ESE MISMO LADO del casco
(el izquierdo del casco, con el samurái arriba, las viñetas y los
caracteres visibles). No mostrar de frente completo ni del lado
derecho, porque ese lado no está en la foto y no se inventa.

EL VISOR — TRANSPARENTE Y EL ROSTRO VISIBLE:
- El visor externo va BAJADO y COMPLETAMENTE TRANSPARENTE e
  incoloro: ni tintado, ni ahumado, ni espejado, ni con degradé.
- A través del visor se ve CLARAMENTE el rostro de la mujer: ojos,
  nariz y boca visibles y nítidos, con un reflejo leve y realista
  sobre el visor que no tape la cara.
- Como el casco es abierto, la zona del mentón y la sonrisa quedan
  visibles bajo el borde del visor si el ángulo lo permite.

INTEGRACIÓN DE LUZ:
El casco se ilumina con la luz de la escena generada: reflejos
coherentes sobre la superficie brillante de la calota y sobre el
visor, sombra del casco sobre el rostro suave y creíble. Pero la luz
NUNCA justifica cambiar los colores del gráfico: el negro sigue
negro, el blanco sigue blanco, el rojo sigue rojo.

LIMPIEZA:
La imagen adjunta viene de una página web de catálogo: el patrón de
fondo con zigzag, el selector de talles ("Size / S / M"), y los
bordes de fotos vecinas NO son parte del casco y NO aparecen en el
resultado. Solo se toma el casco.

PROHIBIDO ABSOLUTO:
- Prohibido cambiar, simplificar, reinterpretar o "mejorar" el
  gráfico del casco: es una copia exacta del arte de la foto.
- Prohibido inventar o alterar los caracteres japoneses.
- Prohibido agregarle mentonera: es un casco abierto tipo jet.
- Prohibido tintar, oscurecer o espejar el visor: transparente, con
  el rostro visible.
- Prohibido agregar logos, textos o gráficos que no estén en la
  foto del casco.
- Prohibido mostrar el lado del casco que no aparece en la foto.
- Prohibido que la escena tape el casco: el casco se ve entero y
  protagonista.
- Prohibido trasladar a la escena cualquier elemento de la página
  web (zigzag, selector de talles, fotos vecinas).

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. ¿El casco es EXACTAMENTE el de la foto — jet abierto, doble
   visor, arte samurái negro/blanco/rojo — sin ningún cambio?
2. ¿Los caracteres japoneses y las viñetas son los MISMOS de la
   foto, sin inventos ni corrupciones?
3. ¿El visor está bajado, transparente e incoloro, y el rostro de
   la mujer se ve claro a través de él?
4. ¿La escena muestra a la mujer bajándose de la moto, fotorrealista,
   con el mismo lado del casco que muestra la foto?
5. ¿El casco quedó a escala real y bien calzado, sin deformarse?
6. ¿Quedó algún elemento de la página web del catálogo en la imagen?
   No debe quedar ninguno.
```

**Riesgos conocidos de esta instancia (para auditar el resultado):**
- Los caracteres japoneses son el punto más frágil: compará trazo por trazo contra la foto de producto (misma falla de tipografía que en Simulación 6d).
- Verificar que no le haya agregado mentonera (los modelos tienden al casco integral "genérico").
- Verificar que el arte del samurái no esté redibujado "parecido pero distinto": las viñetas del lateral son la firma del diseño.
- **La escala del casco** — falla real del primer intento (29/07/2026): el casco salió gigante, más ancho que los hombros. Por eso el prompt tiene la sección "ESCALA REAL — ANCLA DURA".

---

## Instancia 4.1-fix — Corrección del primer resultado (casco gigante + caracteres corruptos)

**Contexto:** el primer intento de la 4.1 generó una escena buena (mujer, moto, calle, visor transparente con rostro visible) pero con dos errores: el casco quedó a escala gigante (más ancho que los hombros) y los caracteres japoneses salieron corruptos. Este prompt corrige SOLO esos dos errores sobre la imagen ya generada.

**Se adjuntan DOS imágenes, en este orden:** (1) la escena generada con los errores, (2) la foto de producto del casco.

```
Esto es una CORRECCIÓN de DOS errores sobre una imagen ya generada,
no una imagen nueva. Recibís DOS imágenes con roles distintos:

- IMAGEN 1 — LA ESCENA GENERADA (la mujer sobre la moto con el casco
  samurái, en la calle con el cartel "Café"): es la BASE. La escena
  está bien y se conserva: la mujer, su rostro y su sonrisa, la
  pose, la campera, la moto, la calle, los peatones desenfocados,
  la luz y el encuadre quedan EXACTAMENTE como están.
- IMAGEN 2 — LA FOTO DE PRODUCTO DEL CASCO: es la ÚNICA AUTORIDAD
  del casco: su forma, sus gráficos y sus caracteres japoneses.

HAY DOS ERRORES A CORREGIR, Y SOLAMENTE ESTOS DOS:

ERROR 1 — LA ESCALA DEL CASCO:
En la IMAGEN 1 el casco quedó GIGANTE: es más ancho que los hombros
de la mujer y ocupa media imagen. Eso es físicamente imposible. El
casco se REDUCE a su tamaño real:
- Un casco real es apenas más grande que la cabeza que lo lleva:
  unos pocos centímetros de carcasa y acolchado alrededor del
  cráneo, nada más.
- Regla de control: los HOMBROS de la mujer tienen que verse MÁS
  ANCHOS que el casco. Nunca al revés.
- La cabeza con el casco puesto mide más o menos un séptimo de la
  altura del cuerpo, como en cualquier foto real.
- Al reducirlo, el casco queda bien calzado sobre SU cabeza, apoyado
  de forma natural, con el visor transparente bajado y su rostro
  visible a través, igual que ya está.
- El espacio que el casco gigante tapaba se completa con la escena
  que corresponde (la calle, la moto, el fondo), coherente con lo
  que ya se ve alrededor.

ERROR 2 — LOS CARACTERES JAPONESES:
En la IMAGEN 1 los caracteres del lateral del casco salieron
corruptos: parecen letras occidentales inventadas. Se BORRAN y se
RE-COPIAN EXACTOS desde la IMAGEN 2: mismos trazos, misma posición
sobre el gráfico, mismo tamaño relativo, misma orientación. No se
inventan caracteres, no se "corrigen", no se reemplazan por
garabatos que parezcan japonés: se copian los de la foto de
producto, trazo por trazo.
Aprovechá y verificá el resto del gráfico contra la IMAGEN 2 (el
samurái de la parte alta, las viñetas de combate, las pinceladas
rojas): lo que no coincida con la foto de producto se corrige para
que coincida.

TODO LO DEMÁS NO SE TOCA — QUEDA COMO ESTÁ EN LA IMAGEN 1:
- El rostro, la sonrisa y el peinado de la mujer.
- Su pose sobre la moto y su campera.
- La moto completa: tanque, faro, espejos, asiento.
- La calle, las paredes de ladrillo, el cartel "Café", los peatones
  desenfocados del fondo.
- La luz cálida de tarde, la profundidad de campo y el encuadre.
- El visor: sigue bajado, transparente e incoloro, con el rostro
  visible a través.

PROHIBIDO ABSOLUTO:
- Prohibido regenerar la escena entera o cambiar a la mujer, la
  moto o el fondo.
- Prohibido dejar el casco en un tamaño mayor que el ancho de los
  hombros.
- Prohibido dejar cualquier caracter inventado: los caracteres son
  los de la IMAGEN 2.
- Prohibido tintar, oscurecer o espejar el visor.
- Prohibido agregarle mentonera al casco: es abierto tipo jet.
- Prohibido agregar logos, textos o elementos nuevos.

VERIFICACIÓN FINAL — respondé estos cinco chequeos antes de entregar:
1. ¿El casco quedó a escala real — más angosto que los hombros,
   proporcional a la cabeza?
2. ¿Los caracteres japoneses son ahora EXACTAMENTE los de la foto
   de producto, sin letras inventadas?
3. ¿El gráfico del casco (samurái, viñetas, pinceladas rojas)
   coincide con la foto de producto?
4. ¿El rostro sigue visible a través del visor transparente, y la
   mujer, la moto y el fondo quedaron intactos?
5. ¿La zona que antes tapaba el casco gigante quedó completada con
   escena coherente, sin manchas ni huecos?
```

---

## Instancia 4.1-v2 — Reescritura de cero tras la segunda falla real

**Contexto (29/07/2026):** el segundo intento de la 4.1 falló en lo esencial — el generador no copió el diseño (perdió el samurái, las viñetas, los caracteres japoneses y las pinceladas rojas), mostró el lado equivocado, deformó el visor y el tamaño quedó mal. El propio generador admitió las fallas en su respuesta. Diagnóstico: (1) el prompt ponía la ESCENA primero y el casco después — el modelo priorizó la escena; (2) la fuente era la captura web sucia y ahora existe una foto de estudio limpia; (3) la captura vieja mostraba el casco mirando a la IZQUIERDA pero la foto de estudio lo muestra mirando a la DERECHA — el prompt viejo pedía un lado que contradecía la nueva fuente.

**Cambios de la v2:** el casco va PRIMERO y se declara prioridad absoluta; regla central "se copia, no se redibuja"; ángulo y escala como dos anclas duras juntas; fuente = foto de estudio con fondo blanco; lado corregido (derecha).

**Se adjunta UNA imagen:** la foto de estudio del casco jet samurái (fondo blanco, casco mirando a la derecha).

**Plan B si la v2 también falla en el diseño:** dos pasos — (1) generar la escena con un casco jet blanco/negro cualquiera, (2) usar un prompt de la Familia 2 (swap con dos imágenes) para trasplantar el casco exacto desde la foto de estudio. Los modelos copian mejor desde referencia en un paso de edición que en la generación inicial.

```
LA PRIORIDAD NÚMERO UNO DE ESTA TAREA ES EL CASCO. Recibís UNA
imagen: la foto de estudio de un casco REAL sobre fondo blanco. Esa
foto es la ÚNICA AUTORIDAD DEL CASCO. Vas a generar una escena nueva
alrededor de ese casco, pero si en algún punto la escena y la
fidelidad del casco entran en conflicto, GANA EL CASCO. Una escena
hermosa con un casco parecido es un RESULTADO FALLIDO.

REGLA CENTRAL — EL CASCO NO SE REDIBUJA, SE COPIA:
Tratá el casco de la foto como un objeto físico ya fabricado que
ahora se fotografía dentro de una escena: mismo objeto, mismo diseño
pintado, misma forma, mismo ángulo de vista. NO lo reinterpretes, NO
lo simplifiques, NO hagas "algo del mismo estilo". Copiá exactamente:
- La CALOTA negra brillante con el arte manga/samurái en tinta: el
  GUERRERO SAMURÁI dibujado en la parte alta, la pincelada gruesa
  BLANCA y ROJA que cruza la calota, las VIÑETAS DE COMBATE en tinta
  negra sobre fondo blanco del lateral, y las salpicaduras de tinta.
- Los CARACTERES JAPONESES verticales del lateral: mismos trazos,
  misma posición diagonal, mismo tamaño relativo. Se copian
  visualmente trazo a trazo de la foto. PROHIBIDO inventar
  caracteres, letras occidentales o garabatos que "parezcan japonés".
- La forma: casco ABIERTO tipo JET, SIN mentonera. PROHIBIDO
  convertirlo en integral o modular.
- El DOBLE VISOR: el externo grande, TRANSPARENTE e incoloro, que
  baja envolvente hasta la zona del mentón, con su pivote/tornillo
  lateral negro; y el visor interno que asoma detrás. La forma del
  visor externo es LA DE LA FOTO, no otra.
- La goma negra del borde inferior y la correa con su detalle rojo.

DOS ANCLAS DURAS — ÁNGULO Y ESCALA:
1. ÁNGULO: la foto muestra el casco en 3/4 lateral MIRANDO A LA
   DERECHA del encuadre, con el samurái, las viñetas y los
   caracteres visibles de ese lado. La escena se compone para ver
   ESE MISMO LADO del casco, en un ángulo equivalente al de la foto.
   PROHIBIDO mostrar el otro lado (no está en la foto y no se
   inventa) y PROHIBIDO el frente completo.
2. ESCALA: el casco es un objeto real sobre una cabeza real. Es
   apenas más grande que la cabeza: unos centímetros de carcasa
   alrededor del cráneo. Los HOMBROS de la mujer se ven MÁS ANCHOS
   que el casco — si el casco sale más ancho que los hombros, está
   mal. La cabeza con casco mide más o menos un séptimo de la altura
   del cuerpo. Ella podría sacárselo con las dos manos.

LA ESCENA — SE GENERA ALREDEDOR DEL CASCO:
Fotografía fotorrealista, estilo lifestyle/editorial de moto, de una
MUJER bajándose de una motocicleta:
- La moto está detenida; ella está bajándose: pasando la pierna por
  encima del asiento o apoyando el pie en el piso, con una mano en
  el manubrio, en una postura natural y creíble.
- Ropa de motociclista urbana (campera, jeans/pantalón de moto,
  guantes) en colores neutros — negro, blanco, algún acento rojo —
  que no le roben protagonismo al casco.
- Ambiente urbano realista (calle, frente de un local), luz natural
  de tarde, profundidad de campo editorial: la mujer y el casco
  nítidos, el fondo levemente desenfocado.
- Fotorrealista: nada de ilustración ni estética de render.

EL VISOR — TRANSPARENTE Y EL ROSTRO VISIBLE:
- El visor externo va BAJADO y COMPLETAMENTE TRANSPARENTE e
  incoloro: ni tintado, ni ahumado, ni espejado.
- A través del visor se ve CLARAMENTE el rostro de la mujer: ojos,
  nariz y boca nítidos, con apenas un reflejo leve que no tape la
  cara.

INTEGRACIÓN DE LUZ:
El casco se ilumina con la luz de la escena: reflejos coherentes
sobre la calota brillante y el visor. Pero la luz NUNCA justifica
cambiar el diseño: el negro sigue negro, el blanco sigue blanco, el
rojo sigue rojo, y ningún elemento del arte desaparece "por el
reflejo".

PROHIBIDO ABSOLUTO:
- Prohibido entregar un casco "parecido": es el de la foto o está
  mal.
- Prohibido perder u omitir cualquiera de estos cuatro componentes
  del arte: samurái, viñetas de combate, pinceladas rojas,
  caracteres japoneses. Los cuatro tienen que estar visibles.
- Prohibido inventar o alterar los caracteres japoneses.
- Prohibido cambiar la forma del casco o del visor, o agregarle
  mentonera.
- Prohibido tintar u oscurecer el visor: rostro visible.
- Prohibido mostrar el lado del casco que no está en la foto.
- Prohibido el casco gigante: hombros siempre más anchos que el
  casco.
- Prohibido agregar logos, textos o gráficos nuevos.
- Prohibido que la pose, el pelo o la escena tapen el casco.

VERIFICACIÓN FINAL — respondé estos siete chequeos antes de entregar:
1. Mirá el casco de tu resultado al lado de la foto adjunta: ¿es EL
   MISMO casco, con el MISMO arte? ¿Están los CUATRO componentes:
   samurái, viñetas, pinceladas rojas y caracteres japoneses?
2. ¿Los caracteres japoneses son los de la foto, trazo a trazo, sin
   inventos?
3. ¿El casco está en 3/4 mirando a la DERECHA, el mismo lado de la
   foto?
4. ¿El casco quedó a escala real — más angosto que los hombros de la
   mujer?
5. ¿Es un jet abierto sin mentonera, con el doble visor de la foto?
6. ¿El visor está transparente y el rostro de la mujer se ve claro?
7. ¿La mujer está bajándose de la moto con una postura natural, en
   una escena urbana fotorrealista?
```

---

## Instancia 4.2 — Hombre de smoking al aire libre con el casco modular (visor negro opaco)

**Casco (imagen adjunta):** modular negro mate ENTERO, generado por IA, en 3/4 lateral mirando a la derecha, sobre fondo blanco, con el visor ahumado oscuro bajado. Piezas: spoiler trasero, extractor superior con insertos, tomas de aire laterales, ventilación central de la mentonera, placa del pivote del visor y goma negra del borde inferior. La imagen trae la watermark "豆包AI生成" abajo a la derecha — no pasa a la escena.

```
Esto es una GENERACIÓN DE ESCENA alrededor de un CASCO REAL, no un
diseño de casco nuevo. Recibís UNA imagen: la del casco modular negro
mate. Esa imagen es la ÚNICA AUTORIDAD DEL CASCO: su forma, sus
piezas y su color se copian EXACTOS. Todo lo demás de la escena se
genera nuevo, pero el casco es EXACTAMENTE el de la imagen, sin
ningún cambio: el casco original se preserva al 100%, nada se inventa
ni se deforma.

LA ESCENA A GENERAR:
Fotografía fotorrealista, estilo editorial de moda, de un HOMBRE al
AIRE LIBRE con el casco puesto:
- Ambiente exterior elegante: una ciudad al atardecer (calle con
  edificios, luz dorada baja) o un exterior sofisticado equivalente
  (terraza, entrada de un hotel).
- Va vestido de SMOKING NEGRO Y BLANCO: saco negro, camisa blanca,
  moño negro; opcional un pañuelo blanco en el bolsillo del saco.
  Todo impecable, elegante, con actitud de editorial de moda.
- Lleva el casco de la imagen adjunta PUESTO, bien calzado sobre la
  cabeza, a escala real, con el visor bajado.
- Profundidad de campo tipo foto editorial: el hombre y el casco
  nítidos, el fondo levemente desenfocado.
- La foto es fotorrealista: nada de ilustración, nada de render 3D
  evidente, nada de estética de videojuego.

EL CASCO — SE COPIA EXACTO DE LA IMAGEN ADJUNTA:
- Casco integral MODULAR negro mate, liso, sin gráficos ni logos.
- Sus piezas quedan idénticas: el spoiler / aleta trasera de la parte
  alta de atrás, el extractor de ventilación superior con sus
  insertos, las tomas de aire laterales con sus ranuras, la
  ventilación central de la mentonera, la placa del pivote del visor
  y la goma negra del borde inferior.
- El acabado sigue siendo NEGRO MATE: la luz de la escena lo ilumina
  pero no lo vuelve brillante ni le cambia el color.

EL VISOR — AHUMADO NEGRO OPACO, NADA DE ROSTRO:
- El visor va BAJADO y se ve NEGRO OPACO: ahumado oscuro, apenas con
  reflejos leves del entorno (el cielo del atardecer, las luces).
- NO se ve NADA del rostro ni del interior del casco a través del
  visor: ni ojos, ni nariz, ni piel, ni sombra de cara. El visor es
  una superficie negra con reflejo, punto.

ESCALA REAL — ANCLA DURA:
El casco es un objeto de tamaño real puesto sobre una cabeza real:
- Es apenas más grande que la cabeza que lo lleva: unos pocos
  centímetros de carcasa y acolchado alrededor del cráneo, nada más.
- Regla de control: los HOMBROS del hombre se ven MÁS ANCHOS que el
  casco. Si el casco sale más ancho que los hombros, está mal.
- La cabeza con el casco puesto mide más o menos un séptimo de la
  altura total del cuerpo, como en cualquier foto real de una
  persona con casco.
- Él podría sacarse el casco con las dos manos: ese es el tamaño.

COMPOSICIÓN — PARA NO INVENTAR EL LADO OCULTO:
La imagen adjunta muestra el casco en 3/4 lateral mirando a la
DERECHA. Componé la toma de la escena de modo que se vea ESE MISMO
LADO del casco, en un ángulo equivalente. No mostrar de frente
completo ni del otro lado, porque ese lado no está en la imagen y no
se inventa.

INTEGRACIÓN DE LUZ:
El casco se ilumina con la luz de la escena: reflejos suaves y
coherentes del atardecer sobre la superficie mate y sobre el visor
ahumado. Pero la luz NUNCA justifica cambiar el casco: el negro mate
sigue siendo negro mate, y el visor sigue siendo negro opaco.

LIMPIEZA:
La imagen adjunta trae una marca de agua "豆包AI生成" abajo a la
derecha. NO es parte del casco y NO pasa a la escena: no aparece en
el resultado, ni entera ni en parte. Solo se toma el casco.

PROHIBIDO ABSOLUTO:
- Prohibido cambiar el casco en nada: ni forma, ni piezas, ni color,
  ni acabado. Es una copia exacta del de la imagen.
- Prohibido mostrar el rostro, los ojos o el interior del casco a
  través del visor.
- Prohibido aclarar, transparentar o espejar el visor: es negro
  opaco con reflejos leves.
- Prohibido agregar logos, textos o gráficos al casco o a la ropa.
- Prohibido mostrar el lado del casco que no aparece en la imagen.
- Prohibido el casco gigante: los hombros siempre más anchos que el
  casco.
- Prohibido trasladar la marca de agua a la escena.

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. ¿El casco es EXACTAMENTE el de la imagen — modular negro mate con
   spoiler, extractor, tomas laterales, ventilación de mentonera y
   goma negra — sin ningún cambio?
2. ¿El visor está bajado y se ve NEGRO OPACO, sin nada del rostro ni
   del interior visible?
3. ¿El hombre está de smoking negro y blanco, al aire libre, con luz
   de atardecer y estética de editorial de moda?
4. ¿La toma muestra el MISMO lado del casco que la imagen adjunta
   (3/4 mirando a la derecha), sin inventar el lado oculto?
5. ¿El casco quedó a escala real — más angosto que los hombros, bien
   calzado, sin deformarse?
6. ¿Quedó la marca de agua "豆包AI生成" o algún resto de ella en la
   escena? No debe quedar nada.
```

---

## Instancia 4.3 — Photoshoot de una chica con el casco modular (casco y chica protagonistas)

**Casco (imagen adjunta):** el mismo modular negro mate de la 4.2 — 3/4 lateral mirando a la derecha, fondo blanco, visor ahumado oscuro bajado, spoiler trasero, extractor superior, tomas laterales, ventilación de mentonera, goma negra. Watermark "豆包AI生成" abajo a la derecha — se limpia. Acá el casco es el PRODUCTO: la composición tiene que mostrarlo completo y nítido, la chica lo luce.

```
Esto es una GENERACIÓN DE ESCENA alrededor de un CASCO REAL, no un
diseño de casco nuevo. Recibís UNA imagen: la del casco modular negro
mate. Esa imagen es la ÚNICA AUTORIDAD DEL CASCO: su forma, sus
piezas y su color se copian EXACTOS. Todo lo demás de la escena se
genera nuevo, pero el casco es EXACTAMENTE el de la imagen, sin
ningún cambio: el casco original se preserva al 100%, nada se inventa
ni se deforma.

LA ESCENA A GENERAR:
Fotografía fotorrealista de una SESIÓN DE FOTOS (photoshoot)
profesional, de estudio o urbana, de una CHICA con el casco PUESTO:
- Ambiente de photoshoot: estudio con fondo neutro e iluminación
  profesional, o locación urbana cuidada (pared lisa, calle limpia)
  con luz de calidad editorial.
- La chica lleva el casco de la imagen adjunta PUESTO, bien calzado,
  con el visor ahumado bajado.
- Composición de PRODUCTO: se ven protagonistas LA CHICA ENTERA (o
  desde las rodillas hacia arriba) y EL CASCO COMPLETO, nítido y
  bien visible, sin nada que lo tape. El casco es el producto; la
  chica lo luce.
- Vestuario urbano / de moto con estilo: campera de cuero o similar,
  en colores neutros (negro, gris, blanco) que acompañen al casco
  sin taparlo ni robarle protagonismo.
- Pose de photoshoot natural y segura, con la cabeza en un ángulo
  que deje ver bien el casco.
- La foto es fotorrealista: nada de ilustración, nada de render 3D
  evidente, nada de estética de videojuego.

EL CASCO — SE COPIA EXACTO DE LA IMAGEN ADJUNTA:
- Casco integral MODULAR negro mate, liso, sin gráficos ni logos.
- Sus piezas quedan idénticas: el spoiler / aleta trasera de la parte
  alta de atrás, el extractor de ventilación superior con sus
  insertos, las tomas de aire laterales con sus ranuras, la
  ventilación central de la mentonera, la placa del pivote del visor
  y la goma negra del borde inferior.
- El acabado sigue siendo NEGRO MATE: la luz del estudio lo ilumina
  pero no lo vuelve brillante ni le cambia el color.
- EL VISOR: bajado y AHUMADO OSCURO como en la imagen, con reflejos
  leves de las luces. No se aclara ni se vuelve transparente.

ESCALA REAL — ANCLA DURA:
El casco es un objeto de tamaño real puesto sobre una cabeza real:
- Es apenas más grande que la cabeza que lo lleva: unos pocos
  centímetros de carcasa y acolchado alrededor del cráneo, nada más.
- Regla de control: los HOMBROS de la chica se ven MÁS ANCHOS que el
  casco. Si el casco sale más ancho que los hombros, está mal.
- La cabeza con el casco puesto mide más o menos un séptimo de la
  altura total del cuerpo, como en cualquier foto real de una
  persona con casco.
- Ella podría sacarse el casco con las dos manos: ese es el tamaño.

COMPOSICIÓN — PARA NO INVENTAR EL LADO OCULTO:
La imagen adjunta muestra el casco en 3/4 lateral mirando a la
DERECHA. Componé la toma de modo que se vea ESE MISMO LADO del
casco, en un ángulo equivalente. No mostrar de frente completo ni
del otro lado, porque ese lado no está en la imagen y no se inventa.
El casco se ve ENTERO dentro del encuadre: no lo corta el borde de
la foto, no lo tapan las manos, el pelo ni la pose.

INTEGRACIÓN DE LUZ:
El casco se ilumina con la luz del photoshoot: reflejos suaves y
coherentes de las luces sobre la superficie mate y sobre el visor
ahumado. Pero la luz NUNCA justifica cambiar el casco: el negro mate
sigue siendo negro mate, y el visor sigue ahumado oscuro.

LIMPIEZA:
La imagen adjunta trae una marca de agua "豆包AI生成" abajo a la
derecha. NO es parte del casco y NO pasa a la escena: no aparece en
el resultado, ni entera ni en parte. Solo se toma el casco.

PROHIBIDO ABSOLUTO:
- Prohibido cambiar el casco en nada: ni forma, ni piezas, ni color,
  ni acabado. Es una copia exacta del de la imagen.
- Prohibido aclarar, transparentar o cambiar el visor ahumado.
- Prohibido tapar el casco con las manos, el pelo, la pose o
  cualquier objeto de la escena: se ve completo y nítido.
- Prohibido agregar logos, textos o gráficos al casco o a la ropa.
- Prohibido mostrar el lado del casco que no aparece en la imagen.
- Prohibido el casco gigante: los hombros siempre más anchos que el
  casco.
- Prohibido trasladar la marca de agua a la escena.

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. ¿El casco es EXACTAMENTE el de la imagen — modular negro mate con
   spoiler, extractor, tomas laterales, ventilación de mentonera y
   goma negra — sin ningún cambio?
2. ¿El visor sigue AHUMADO OSCURO y bajado, sin aclararse?
3. ¿Se ven protagonistas la chica (entera o desde las rodillas) y el
   casco COMPLETO, nítido, sin nada que lo tape?
4. ¿La toma muestra el MISMO lado del casco que la imagen adjunta
   (3/4 mirando a la derecha), sin inventar el lado oculto?
5. ¿El casco quedó a escala real — más angosto que los hombros, bien
   calzado, sin deformarse?
6. ¿Quedó la marca de agua "豆包AI生成" o algún resto de ella en la
   escena? No debe quedar nada.
```
