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

## Instancia 4.1-planB — Trasplante del casco sobre la escena ya generada (dos pasos)

**Contexto (29/07/2026):** tercer intento de generación en un solo paso, tercera falla igual — el diseño no se copió y la escala falló, aun con la v2 (casco primero, prioridad absoluta). Conclusión operativa: **la generación single-shot no puede copiar el arte de este casco**; se activa el plan B de dos pasos. El paso 1 (la escena con la mujer bajándose de la moto, casco genérico) ya salió bien; este prompt es el paso 2: swap tipo Familia 2 que trasplanta el casco real sobre la escena y corrige la escala.

**Se adjuntan DOS imágenes, en este orden:** (1) la escena generada (mujer bajándose de la moto frente al local), (2) la foto de estudio del casco jet samurái sobre fondo blanco.

```
Esto es un REEMPLAZO DE CASCO dentro de una imagen ya existente, no
una imagen nueva. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ESCENA (la mujer bajándose de la moto en la calle):
  es la BASE. La escena está bien y se conserva TODA, salvo el casco.
- IMAGEN 2 — LA FOTO DE ESTUDIO DEL CASCO REAL: es la ÚNICA
  AUTORIDAD DEL CASCO. El casco del resultado es ESTE, copiado, no
  uno parecido.

EL RESULTADO ES: la misma escena de la IMAGEN 1, con la misma mujer,
la misma pose, la misma moto y la misma calle, pero llevando puesto
el casco de la IMAGEN 2, a escala real.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ EN LA IMAGEN 1:
- El rostro de la mujer, su mirada y su expresión.
- Su pose completa: bajándose de la moto con la pierna extendida
  hacia atrás, las manos en el manubrio.
- La campera de cuero envejecido, los guantes, el jean negro y las
  botas.
- La moto completa: faro, tanque gris, espejos, ruedas, cada
  reflejo.
- La calle, la vereda, las vidrieras, las bicicletas del fondo, la
  luz natural y la profundidad de campo.
- El encuadre y el recorte de la foto.

EL CASCO — SE REEMPLAZA POR EL DE LA IMAGEN 2:
El casco que la mujer lleva en la IMAGEN 1 (un jet con manchas
difusas) desaparece por completo. En su lugar va el casco de la
IMAGEN 2, copiado como objeto real:
- Casco ABIERTO tipo JET, sin mentonera, con DOBLE VISOR: el externo
  grande transparente que baja hasta el mentón, con su pivote
  lateral negro, y el interno que asoma detrás.
- El ARTE COMPLETO del lateral, copiado de la foto: el GUERRERO
  SAMURÁI en tinta en la parte alta, la pincelada gruesa BLANCA y
  ROJA que cruza la calota, las VIÑETAS DE COMBATE en tinta negra
  sobre blanco, las salpicaduras, y los CARACTERES JAPONESES
  verticales copiados TRAZO A TRAZO — prohibido inventar letras.
- La goma negra del borde inferior y la correa con su detalle rojo.
- La calota es negra BRILLANTE con el arte encima, como en la foto.

REORIENTACIÓN Y ESCALA:
- El casco nuevo se adapta al ángulo de la cabeza de la mujer en la
  escena. El lateral visible del casco lleva el arte tal como se ve
  en la foto de producto: samurái arriba, viñetas y caracteres en el
  lateral.
- LA ESCALA SE CORRIGE: el casco de la IMAGEN 1 está demasiado
  grande. El casco nuevo va a escala real — apenas más grande que la
  cabeza, unos centímetros de carcasa alrededor del cráneo. Los
  HOMBROS de la mujer quedan MÁS ANCHOS que el casco. Ella podría
  sacárselo con las dos manos.
- El visor externo queda BAJADO y TRANSPARENTE, con el rostro de la
  mujer visible a través, igual que ahora.
- La zona que el casco viejo (más grande) tapaba y el nuevo (más
  chico) ya no tapa se completa con escena coherente: la calle, el
  fondo, su pelo si corresponde.

INTEGRACIÓN DE LUZ:
El casco nuevo se ilumina con la luz de la escena: reflejos
coherentes de la calle sobre la calota brillante y el visor. La luz
nunca borra el arte: samurái, viñetas, pinceladas rojas y caracteres
quedan visibles.

PROHIBIDO ABSOLUTO:
- Prohibido conservar el casco viejo o partes de él.
- Prohibido un casco "parecido": es el de la IMAGEN 2 o está mal.
- Prohibido omitir alguno de los cuatro componentes del arte:
  samurái, viñetas, pinceladas rojas, caracteres japoneses.
- Prohibido inventar o alterar los caracteres japoneses.
- Prohibido dejar el casco en tamaño gigante: hombros más anchos que
  el casco, siempre.
- Prohibido tintar el visor o tapar el rostro.
- Prohibido cambiar CUALQUIER otra cosa de la escena: mujer, pose,
  ropa, moto, calle, luz, encuadre.
- Prohibido traer el fondo blanco del estudio a la escena.

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. Poné el casco del resultado al lado de la IMAGEN 2: ¿es EL MISMO
   casco, con los cuatro componentes del arte visibles?
2. ¿Los caracteres japoneses son los de la foto, trazo a trazo?
3. ¿El casco quedó a escala real — más angosto que los hombros?
4. ¿El visor está transparente y el rostro se ve claro?
5. ¿La mujer, la pose, la ropa, la moto y la calle quedaron
   idénticas a la IMAGEN 1?
6. ¿La zona que el casco viejo tapaba quedó completada sin manchas
   ni huecos?
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

## Instancia 4.2-fix — Corrección de los detalles del casco contra la foto real (quitar el mecanismo inventado)

**Contexto (29/07/2026):** el resultado de la 4.2 (hombre de smoking al atardecer) salió muy bien como escena, pero el casco generado trae detalles inventados que no existen en el casco real: una placa ovalada con textura de puntos junto al visor (un "mecanismo" visible), ventilaciones extra y contornos que no coinciden. Este prompt conserva la escena exacta y corrige SOLO el casco contra la foto real de producto.

**Se adjuntan DOS imágenes, en este orden:** (1) la escena generada del hombre de smoking, (2) la foto real del casco modular negro mate (lateral, la del catálogo).

```
Esto es una CORRECCIÓN DE DETALLES sobre una imagen ya generada, no
una imagen nueva. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ESCENA (el hombre de smoking con el casco puesto,
  atardecer urbano): es la BASE. TODO queda exactamente igual salvo
  los detalles del casco que se corrigen.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (foto de producto del modular
  negro mate): es la ÚNICA AUTORIDAD DE LOS DETALLES DEL CASCO. El
  casco de la escena tiene que quedar fiel a ESTE casco real.

EL RESULTADO ES: la misma foto de la IMAGEN 1 — mismo hombre, mismo
smoking, mismo fondo, misma luz, mismo encuadre, casco en la misma
posición y a la misma escala — pero con el casco corregido para ser
EXACTAMENTE el casco real de la IMAGEN 2.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ EN LA IMAGEN 1:
- El hombre completo: postura, cuello, barba que asoma, pelo.
- El smoking: saco negro, camisa blanca, moño negro, pañuelo blanco.
- El fondo urbano al atardecer con sus luces desenfocadas (bokeh) y
  el cielo dorado.
- La iluminación general, el color grade y el encuadre.
- Del casco: su POSICIÓN sobre la cabeza, su ESCALA, su ángulo de
  vista y su color NEGRO MATE general.
- El VISOR: sigue OSCURO Y OPACO, sin que se vea nada del rostro ni
  del interior, y CONSERVA el reflejo del atardecer que ya tiene.

LA CORRECCIÓN — LOS DETALLES DEL CASCO SE AJUSTAN A LA IMAGEN 2:
Compará el casco de la escena con el casco real de la IMAGEN 2 y
corregí cada diferencia, una por una:
a) LA PLACA CON TEXTURA DE PUNTOS junto al visor (el "mecanismo"
   ovalado granulado que se ve en la escena): SE ELIMINA POR
   COMPLETO. En el casco real esa zona es CALOTA LISA, negra mate,
   opaca, sin placa, sin textura, sin tornillos y sin ningún
   mecanismo visible. Así tiene que quedar.
b) Cualquier otra pieza, ventilación, ranura o saliente del casco de
   la escena que NO exista en la IMAGEN 2: se elimina.
c) Las piezas que SÍ existen se corrigen a la forma exacta de la
   referencia: el extractor de ventilación superior con sus
   insertos, el spoiler / aleta trasera, las tomas laterales y la
   línea de la mentonera del modular, tal como se ven en la foto
   real.
d) El CONTORNO DEL VISOR se ajusta al de la referencia: el visor es
   una pieza limpia y oscura que asienta directo sobre la calota,
   sin placas, marcos raros ni herrajes inventados alrededor.
El casco corregido sigue siendo negro mate, liso, sin gráficos ni
logos, y se ve OPACO y limpio como el casco real.

INTEGRACIÓN:
Las correcciones se funden con la luz que ya tiene la escena: mismo
negro mate, mismos reflejos suaves del atardecer sobre la calota y
el visor. Nada de la corrección puede notarse como "parche": el
casco entero se lee como un solo objeto real.

PROHIBIDO ABSOLUTO:
- Prohibido dejar la placa de puntos o CUALQUIER mecanismo visible
  junto al visor: esa zona queda lisa y opaca.
- Prohibido inventar piezas nuevas que no estén en la IMAGEN 2.
- Prohibido cambiar la posición, la escala o el ángulo del casco.
- Prohibido aclarar el visor o mostrar el rostro: sigue oscuro y
  opaco, con su reflejo.
- Prohibido cambiar cualquier cosa del hombre, del smoking, del
  fondo, de la luz o del encuadre.
- Prohibido agregar logos, texto o gráficos.

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. ¿Desapareció por completo la placa con textura de puntos, y la
   zona junto al visor quedó calota lisa negra mate como en la
   IMAGEN 2?
2. Compará pieza por pieza el casco del resultado con la IMAGEN 2:
   ¿coinciden el extractor superior, el spoiler, las tomas laterales
   y la línea de la mentonera, sin piezas inventadas?
3. ¿El visor sigue oscuro y opaco, con el reflejo del atardecer, sin
   nada del rostro visible, y con su contorno limpio?
4. ¿El casco quedó en la misma posición, escala y ángulo que en la
   IMAGEN 1?
5. ¿El hombre, el smoking, el moño, el fondo y la luz quedaron
   idénticos a la IMAGEN 1?
6. ¿Alguna corrección se nota como parche o cambio de textura? No
   debe notarse ninguna.
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

---

## Instancia 4.4 — Hero lifestyle del EDGE PRO camaleón (fondo negro + luces del color del cromado)

**Casco (imagen adjunta):** integral deportivo EDGE PRO con pintura CAMALEÓN cromada (degradado violeta→azul según la luz), visor iridium violeta/magenta espejado, spoiler trasero, piezas negras (ventilaciones, tomas), logo "EDGE PRO" blanco en el lateral. Foto de producto lateral mirando a la derecha, fondo claro de maquetación (líneas — se limpian). El casco se preserva 100%, logo incluido.

```
Esto es una GENERACIÓN DE ESCENA DE PRODUCTO alrededor de un CASCO
REAL, no un diseño de casco nuevo. Recibís UNA imagen: la foto de
producto del casco camaleón. Esa foto es la ÚNICA AUTORIDAD DEL
CASCO: su forma, su pintura, su visor y su logo se copian EXACTOS.
El casco se mantiene 100% IGUAL — la escena nueva es solo el entorno.

EL CASCO — SE COPIA EXACTO DE LA FOTO ADJUNTA:
- Casco integral deportivo con SPOILER trasero.
- La PINTURA CAMALEÓN CROMADA: el degradado violeta→azul brillante
  tal como se ve en la foto, con su efecto de cambio de color según
  la luz. No se simplifica a un color plano: es camaleón.
- El VISOR IRIDIUM violeta/magenta espejado, bajado, con su forma.
- Las piezas NEGRAS: ventilaciones con sus rejillas, tomas de aire,
  goma del borde inferior. Quedan negras.
- El logo "EDGE PRO" blanco del lateral: queda, en su posición.
- Mismo lado visible que la foto (lateral mirando a la derecha),
  misma forma, mismas proporciones. Nada se inventa ni se deforma.

LA ESCENA A GENERAR — FONDO NEGRO CON LUCES DEL COLOR DEL CROMADO:
- FONDO NEGRO profundo, tipo estudio oscuro premium.
- LUCES de neón / LED en los MISMOS COLORES del cromado del casco:
  violeta, azul y magenta. Pueden ser líneas o barras de luz, halos
  o destellos de lente, ubicados detrás y a los costados del casco.
- SIN HUMO: nada de niebla, bruma ni humo. La atmósfera es limpia y
  nítida — solo oscuridad y luces de color.
- Las luces se REFLEJAN sobre la pintura camaleón y el visor
  espejado de forma coherente y realista: el cromado cobra vida con
  esos reflejos violeta/azul, pero la pintura sigue siendo LA MISMA.
- El casco es EL PROTAGONISTA ABSOLUTO: centrado o levemente
  descentrado, grande en el encuadre, nítido, apoyado sobre una
  superficie oscura con su reflejo suave (o con una sombra limpia).
- Estética: foto de producto premium / campaña, fotorrealista. Nada
  de ilustración ni render evidente.

PROHIBIDO ABSOLUTO:
- Prohibido cambiar CUALQUIER cosa del casco: pintura camaleón,
  visor iridium, piezas negras, logo EDGE PRO, forma, proporciones.
- Prohibido humo, niebla o bruma: solo luces.
- Prohibido luces de otros colores que no sean los del cromado
  (violeta / azul / magenta).
- Prohibido mostrar el lado del casco que no está en la foto, o
  cambiar el ángulo del casco.
- Prohibido agregar personas, motos, texto o logos nuevos.
- Prohibido trasladar elementos de la maquetación de la foto
  original (líneas, bordes).

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. ¿El casco es EXACTAMENTE el de la foto — camaleón violeta/azul,
   visor iridium, piezas negras, logo EDGE PRO — sin ningún cambio?
2. ¿El fondo es negro profundo con luces violeta/azul/magenta, SIN
   nada de humo?
3. ¿Las luces se reflejan de forma realista en el cromado y el
   visor, sin alterar la pintura?
4. ¿El casco está protagonista, nítido, en el mismo ángulo lateral
   de la foto?
5. ¿La base/superficie y el reflejo del casco se ven limpios y
   creíbles?
6. ¿Se agregó algo que no estaba (texto, personas, humo)? No debe
   haberse agregado nada.
```

---

## Instancia 4.2-fix-b — Refinamiento del visor contra el detalle real (remaches, moldura, traslúcido)

**Contexto:** el 4.2-fix salió espectacular, pero el visor del resultado quedó como una superficie lisa "perfecta" — y el visor real tiene detalles propios que importan: los puntos/remaches de fijación cerca de los bordes, la moldura fina del contorno y un leve traslúcido del vidrio ahumado que de cerca insinúa el interior. Este prompt refina SOLO el visor contra la referencia real.

**Se adjuntan DOS imágenes, en este orden:** (1) la escena del smoking ya corregida, (2) la foto real del casco (o el detalle en zoom del visor real).

```
Esto es un REFINAMIENTO DE UN SOLO DETALLE sobre una imagen ya
buena, no una imagen nueva. Recibís DOS imágenes:

- IMAGEN 1 — LA ESCENA (el hombre de smoking con el casco, ya
  corregida): es la BASE y está BIEN. TODO queda exactamente igual
  salvo el acabado del visor.
- IMAGEN 2 — EL VISOR REAL (la foto real del casco / el detalle del
  visor): es la ÚNICA AUTORIDAD de cómo se ve el visor de verdad.

EL ÚNICO CAMBIO — EL VISOR SE AJUSTA AL REAL:
El visor de la IMAGEN 1 quedó como una superficie lisa perfecta. El
visor REAL tiene detalles que hay que reproducir, mirando la
IMAGEN 2:
a) LOS PUNTOS / REMACHES DE FIJACIÓN: el visor real tiene pequeños
   puntos o tornillos de fijación cerca de sus bordes y esquinas.
   Se agregan en los MISMOS lugares y tamaños que muestra la
   referencia — chicos, discretos, reales. No se inventan más de
   los que hay.
b) LA MOLDURA DEL CONTORNO: el borde del visor real remata en una
   moldura/junta fina donde asienta contra la calota. Ese remate
   tiene que leerse igual en la escena.
c) EL CARÁCTER DEL VIDRIO: el visor real es negro ahumado BRILLANTE
   con un traslúcido muy leve — de cerca se insinúa apenas el
   acolchado interior del casco, como en la referencia. En la
   escena, ese traslúcido es sutil: se intuye textura interior en
   las zonas menos reflectantes, SIN que se vea el rostro ni ningún
   rasgo de la cara.
d) EL REFLEJO DEL ATARDECER que ya tiene el visor en la escena SE
   CONSERVA: los detalles nuevos conviven con ese reflejo, no lo
   reemplazan.

TODO LO DEMÁS NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ EN LA
IMAGEN 1:
- El casco entero: forma, negro mate, ventilaciones, spoiler,
  posición, escala, ángulo.
- El hombre, el smoking, el moño, la camisa, el pañuelo.
- El fondo urbano al atardecer, el bokeh, la luz, el encuadre.

PROHIBIDO ABSOLUTO:
- Prohibido cambiar cualquier cosa fuera del visor.
- Prohibido inventar mecanismos, placas o herrajes que no estén en
  la IMAGEN 2: solo los puntos/remaches y la moldura reales.
- Prohibido aclarar el visor al punto de mostrar el rostro: sigue
  oscuro; el traslúcido es apenas una insinuación de textura.
- Prohibido borrar el reflejo del atardecer.
- Prohibido agregar logos o texto.

VERIFICACIÓN FINAL — respondé estos cinco chequeos antes de entregar:
1. ¿El visor ahora tiene los puntos/remaches y la moldura del
   contorno IGUALES a los de la referencia, en los mismos lugares?
2. ¿Se insinúa sutilmente el interior en el vidrio ahumado, SIN que
   se vea nada del rostro?
3. ¿El reflejo del atardecer sigue ahí, integrado con los detalles
   nuevos?
4. ¿Todo lo demás — casco, hombre, smoking, fondo, luz, encuadre —
   quedó idéntico a la IMAGEN 1?
5. ¿Algún detalle agregado se ve como parche o dibujo encima? Debe
   verse como parte real del vidrio.
```

---

## Instancia 4.4-v2 — Camaleón neón: visor opaco total + persona de cuerpo completo

**Contexto:** el resultado de la 4.4 salió espectacular (casco camaleón fiel, luces neón violeta/azul, sin humo), con dos ajustes pedidos: (1) el visor iridium deja traslucir el interior — debe quedar TOTALMENTE opaco, espejo puro; (2) la toma es un primer plano — se quiere a la persona de CUERPO COMPLETO con el casco puesto.

**Se adjuntan DOS imágenes, en este orden:** (1) la escena neón ya generada, (2) la foto de producto del casco camaleón (para mantener la fidelidad al ampliar).

```
Esto es una EDICIÓN EN DOS AJUSTES sobre una imagen ya buena, no una
imagen nueva. Recibís DOS imágenes:

- IMAGEN 1 — LA ESCENA NEÓN (el casco camaleón con las luces
  violeta/azul sobre fondo negro): es la BASE. El casco, su pintura,
  las luces y la estética quedan tal cual — está muy bien.
- IMAGEN 2 — LA FOTO DE PRODUCTO del casco camaleón: es la AUTORIDAD
  del casco para todo lo que haya que redibujar al ampliar la toma.

HAY DOS AJUSTES, Y SOLO ESTOS DOS:

AJUSTE 1 — EL VISOR PASA A OPACO TOTAL:
En la IMAGEN 1 el visor iridium deja traslucir el interior (se
intuyen piezas detrás del vidrio). Se corrige: el visor queda
TOTALMENTE OPACO, un ESPEJO PURO iridium violeta/magenta:
- NO se ve NADA a través: ni mecanismo, ni estructura interna, ni
  acolchado, ni rostro. Cero transparencia.
- Solo se ven los REFLEJOS espejados de las luces neón de la escena
  sobre su superficie.
- El visor conserva su forma, su posición y sus colores iridium.

AJUSTE 2 — LA PERSONA DE CUERPO COMPLETO:
La toma se AMPLÍA de primer plano a PLANO ENTERO:
- Se ve a la PERSONA COMPLETA, de pie, de la cabeza a los pies, con
  el casco puesto.
- Outfit urbano oscuro premium (negro: campera o chaqueta técnica,
  pantalón oscuro, calzado oscuro) que combine con la estética neón
  sin robarle protagonismo al casco.
- Postura firme y natural, tipo campaña: de pie, cuerpo levemente
  girado, mostrando el MISMO LADO del casco que ya muestra la
  escena.
- ESCALA REAL: el casco es apenas más grande que la cabeza; los
  HOMBROS de la persona se ven MÁS ANCHOS que el casco; la cabeza
  con casco mide más o menos un séptimo de la altura del cuerpo.
- La escena se EXTIENDE coherente alrededor del cuerpo: el fondo
  negro profundo y las luces neón triangulares violeta/azul
  continúan y enmarcan a la persona entera; piso oscuro con reflejos
  suaves de las luces. SIN HUMO, igual que ahora.

EL CASCO NO SE TOCA:
La pintura camaleón violeta→azul, las piezas negras, el logo y la
forma quedan EXACTAMENTE como en la IMAGEN 1 (y fieles a la
IMAGEN 2). Solo cambia el visor según el Ajuste 1.

PROHIBIDO ABSOLUTO:
- Prohibido dejar el visor con cualquier transparencia: es espejo
  opaco total.
- Prohibido cambiar la pintura camaleón, las piezas o el logo del
  casco.
- Prohibido cambiar el lado visible del casco o su fidelidad al
  ampliar.
- Prohibido el casco gigante: hombros más anchos que el casco.
- Prohibido humo, niebla o bruma: solo luces.
- Prohibido luces de colores ajenos al cromado (violeta / azul /
  magenta).
- Prohibido agregar texto, logos nuevos, motos u otras personas.

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. ¿El visor quedó espejo OPACO total, sin que se vea nada a través,
   solo reflejos de las luces?
2. ¿Se ve la persona COMPLETA, de la cabeza a los pies, con outfit
   urbano oscuro?
3. ¿El casco quedó idéntico — camaleón, piezas, logo, mismo lado — y
   a escala real (hombros más anchos que el casco)?
4. ¿El fondo negro y las luces neón violeta/azul se extienden
   coherentes alrededor del cuerpo, sin humo?
5. ¿La postura es natural, tipo campaña, sin tapar el casco?
6. ¿Se agregó algo que no correspondía? No debe haberse agregado
   nada.
```

---

## Instancia 4.4-v3 — Hero lifestyle del camaleón REHECHO (visor opaco total + persona de cuerpo completo, un solo prompt de generación)

**Contexto:** versión definitiva de la 4.4, hecha desde cero como UN SOLO prompt de generación (una sola imagen adjunta: la foto de producto del casco), incorporando de entrada los dos ajustes que antes se aplicaron como edición en dos pasos sobre la 4.4 (visor opaco total, persona de cuerpo completo). Usar esta versión en vez de la 4.4 original para arrancar de cero.

**Se adjunta UNA imagen:** la foto de producto del casco camaleón (integral con spoiler, pintura camaleón violeta→azul, visor iridium, piezas negras, logo "EDGE PRO" blanco, fondo claro de maquetación con líneas — se limpian).

```
Esto es una GENERACIÓN DE ESCENA DE CAMPAÑA alrededor de un CASCO
REAL, no un diseño de casco nuevo. Recibís UNA imagen: la foto de
producto del casco camaleón. Esa foto es la ÚNICA AUTORIDAD DEL
CASCO: su forma, su pintura, su visor y su logo se copian EXACTOS.
El casco se mantiene 100% IGUAL — la escena nueva es solo el entorno
y la persona que lo lleva puesto.

EL CASCO — SE COPIA EXACTO DE LA FOTO ADJUNTA:
- Casco integral deportivo con SPOILER trasero.
- La PINTURA CAMALEÓN CROMADA: el degradado violeta→azul brillante
  tal como se ve en la foto, con su efecto de cambio de color según
  la luz. No se simplifica a un color plano: es camaleón.
- Las piezas NEGRAS: ventilaciones con sus rejillas, tomas de aire,
  goma del borde inferior. Quedan negras.
- El logo "EDGE PRO" blanco del lateral: queda, en su posición.
- Mismo lado visible que la foto (lateral mirando a la derecha),
  misma forma, mismas proporciones. Nada se inventa ni se deforma.

EL VISOR — IRIDIUM OPACO TOTAL, CERO TRANSPARENCIA:
- El visor es un ESPEJO IRIDIUM violeta/magenta PURO Y OPACO.
- NO se ve NADA a través de él: ni el rostro de la persona, ni ojos,
  ni piel, ni ninguna estructura interna del casco. Cero
  transparencia, cero traslúcido.
- Sobre esa superficie opaca solo se ven los REFLEJOS espejados del
  entorno: las luces de neón de la escena.
- El visor conserva su forma y su posición exactas de la foto.

LA ESCENA A GENERAR — PERSONA DE CUERPO COMPLETO EN SET NEÓN:
Fotografía de campaña / producto premium, fotorrealista:
- Se ve a UNA PERSONA COMPLETA, de pie, de la cabeza a los pies, con
  el casco puesto y el visor bajado.
- Outfit urbano oscuro premium (campera o chaqueta técnica negra,
  pantalón oscuro, calzado oscuro) que acompañe la estética neón sin
  robarle protagonismo al casco.
- Postura firme y natural, tipo campaña: de pie, cuerpo levemente
  girado, mostrando el MISMO LADO del casco que muestra la foto de
  producto.
- FONDO NEGRO profundo, tipo estudio oscuro premium, con LUCES de
  neón / LED en los MISMOS COLORES del cromado del casco: violeta,
  azul y magenta, en forma de líneas, barras o halos detrás y a los
  costados de la persona.
- SIN HUMO: nada de niebla, bruma ni humo. Atmósfera limpia y
  nítida — solo oscuridad y luces de color.
- Piso oscuro con reflejo suave de la persona y las luces.
- Estética fotorrealista de campaña; nada de ilustración ni render
  evidente.

ESCALA REAL — ANCLA DURA:
El casco es un objeto de tamaño real puesto sobre una cabeza real:
- Apenas más grande que la cabeza que lo lleva.
- Regla de control: los HOMBROS de la persona se ven MÁS ANCHOS que
  el casco. Si el casco sale más ancho que los hombros, está mal.
- La cabeza con el casco puesto mide más o menos un séptimo de la
  altura total del cuerpo.
- Se lo podría sacar con las dos manos: ese es el tamaño.

COMPOSICIÓN — PARA NO INVENTAR EL LADO OCULTO:
La foto adjunta muestra el casco en 3/4 lateral mirando a la
DERECHA. Componé la toma de modo que se vea ESE MISMO LADO. No
mostrar de frente completo ni el otro lado, porque no está en la
foto y no se inventa.

INTEGRACIÓN DE LUZ:
El casco se ilumina con la luz de la escena: reflejos coherentes de
las luces neón sobre la pintura camaleón y sobre el visor. La luz
NUNCA justifica cambiar el casco: la pintura camaleón sigue siendo
la misma, y el visor sigue opaco total.

LIMPIEZA:
Si la imagen adjunta trae elementos de maquetación (líneas, bordes),
no aparecen: solo se toma el casco.

PROHIBIDO ABSOLUTO:
- Prohibido cambiar CUALQUIER cosa del casco: pintura camaleón,
  piezas negras, logo EDGE PRO, forma, proporciones.
- Prohibido dejar el visor con cualquier transparencia: es espejo
  opaco total, cero rostro visible.
- Prohibido mostrar solo el casco sin persona, o solo un primer
  plano: se ve la persona de CUERPO COMPLETO.
- Prohibido el casco gigante: hombros siempre más anchos que el
  casco.
- Prohibido humo, niebla o bruma: solo luces.
- Prohibido luces de otros colores que no sean los del cromado
  (violeta / azul / magenta).
- Prohibido mostrar el lado del casco que no está en la foto.
- Prohibido agregar logos, texto o gráficos nuevos.

VERIFICACIÓN FINAL — respondé estos siete chequeos antes de entregar:
1. ¿El casco es EXACTAMENTE el de la foto — camaleón violeta/azul,
   piezas negras, logo EDGE PRO — sin ningún cambio?
2. ¿El visor quedó OPACO TOTAL, sin ninguna transparencia, solo con
   reflejos de las luces neón?
3. ¿Se ve la persona COMPLETA, de la cabeza a los pies?
4. ¿El casco quedó a escala real — hombros más anchos que el casco?
5. ¿El fondo es negro profundo con luces violeta/azul/magenta, SIN
   humo?
6. ¿La toma muestra el mismo lado del casco que la foto de
   producto?
7. ¿Se agregó algo que no correspondía (texto, logos, humo, otra
   persona)? No debe haberse agregado nada.
```

---

## Instancia 4.2-v2 — Hombre de smoking REHECHO (sin mecanismo inventado, visor con detalle real, un solo prompt de generación)

**Contexto:** versión definitiva de la 4.2, hecha desde cero como UN SOLO prompt de generación (una sola imagen adjunta: la foto de producto del casco modular negro mate), incorporando de entrada los dos ajustes que antes se aplicaron como ediciones separadas (4.2-fix: eliminar la placa/mecanismo inventado junto al visor; 4.2-fix-b: remaches de fijación, moldura del contorno y traslúcido sutil del vidrio ahumado). Usar esta versión en vez de la 4.2 original para arrancar de cero.

**Se adjunta UNA imagen:** la foto de producto del casco modular negro mate (3/4 lateral mirando a la derecha, fondo blanco de maquetación — se limpia).

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

EL CASCO — SE COPIA EXACTO DE LA IMAGEN ADJUNTA, PIEZA POR PIEZA:
- Casco integral MODULAR negro mate, liso, sin gráficos ni logos.
- Sus piezas quedan idénticas y son SOLO estas: el spoiler / aleta
  trasera de la parte alta de atrás, el extractor de ventilación
  superior con sus insertos, las tomas de aire laterales con sus
  ranuras, la ventilación central de la mentonera, y la goma negra
  del borde inferior.
- NO EXISTE ninguna placa, disco ni mecanismo con textura granulada
  o de puntos junto al visor: esa zona de la imagen de referencia es
  CALOTA LISA, negro mate continuo, sin ninguna pieza sobrepuesta.
  No se inventa un mecanismo ahí ni en ningún otro lugar del casco.
- El acabado sigue siendo NEGRO MATE: la luz de la escena lo ilumina
  pero no lo vuelve brillante ni le cambia el color.

EL VISOR — AHUMADO NEGRO OPACO, CON SU DETALLE REAL, NADA DE ROSTRO:
- El visor va BAJADO y se ve NEGRO OPACO en general: ahumado oscuro,
  con reflejos leves del entorno (el cielo del atardecer, las
  luces).
- El visor asienta directo sobre la calota, sin placas, marcos raros
  ni herrajes inventados a su alrededor: su contorno es limpio.
- El visor tiene el detalle real de un visor de casco: pequeños
  puntos o tornillos de fijación discretos cerca de sus bordes y
  esquinas (pocos, chicos, no inventados de más), y una moldura /
  junta fina donde el visor remata contra la calota.
- El carácter del vidrio es ahumado BRILLANTE con un traslúcido MUY
  leve: en las zonas menos reflectantes se insinúa apenas una
  textura interior (el acolchado del casco), sin que eso implique
  que se vea nada del rostro. Es una insinuación sutil de material,
  no transparencia.
- NO se ve NADA del rostro ni de los rasgos de la persona a través
  del visor: ni ojos, ni nariz, ni piel. Cero rostro visible.

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
sigue siendo negro mate, y el visor sigue siendo negro opaco con su
detalle real.

LIMPIEZA:
La imagen adjunta trae una marca de agua "豆包AI生成" abajo a la
derecha. NO es parte del casco y NO pasa a la escena: no aparece en
el resultado, ni entera ni en parte. Solo se toma el casco.

PROHIBIDO ABSOLUTO:
- Prohibido cambiar el casco en nada: ni forma, ni piezas, ni color,
  ni acabado. Es una copia exacta del de la imagen.
- Prohibido inventar cualquier placa, disco o mecanismo con textura
  de puntos junto al visor o en cualquier otra parte de la calota:
  esa zona es calota lisa.
- Prohibido mostrar el rostro, los ojos o la piel a través del
  visor.
- Prohibido aclarar, transparentar o espejar el visor más allá del
  traslúcido sutil descripto: sigue siendo negro opaco en general.
- Prohibido dejar el visor sin sus remaches/tornillos discretos y su
  moldura de contorno: son parte del objeto real.
- Prohibido agregar logos, textos o gráficos al casco o a la ropa.
- Prohibido mostrar el lado del casco que no aparece en la imagen.
- Prohibido el casco gigante: los hombros siempre más anchos que el
  casco.
- Prohibido trasladar la marca de agua a la escena.

VERIFICACIÓN FINAL — respondé estos ocho chequeos antes de entregar:
1. ¿El casco es EXACTAMENTE el de la imagen — modular negro mate con
   spoiler, extractor, tomas laterales, ventilación de mentonera y
   goma negra — sin ningún cambio?
2. ¿La zona junto al visor quedó calota lisa, SIN ninguna placa,
   disco o mecanismo con textura de puntos inventado?
3. ¿El visor tiene sus remaches/tornillos discretos y su moldura de
   contorno, iguales a los de un visor real?
4. ¿Se insinúa sutilmente el interior en el vidrio ahumado, SIN que
   se vea nada del rostro ni de la piel?
5. ¿El visor se ve en general negro opaco, con el reflejo del
   atardecer?
6. ¿El hombre está de smoking negro y blanco, al aire libre, con luz
   de atardecer y estética de editorial de moda?
7. ¿La toma muestra el MISMO lado del casco que la imagen adjunta
   (3/4 mirando a la derecha), sin inventar el lado oculto?
8. ¿El casco quedó a escala real — más angosto que los hombros — y
   sin marca de agua en la escena?
```

---

## Instancia 4.4-v4 — Camaleón neón, encuadre cerrado (casco de cerca + persona hasta la cintura)

**Contexto:** el intento de plano entero (4.4-v3) sacrificó fidelidad al alejar la cámara: el casco perdió el spoiler trasero, la calota se volvió menos angulosa y el logo "EDGE PRO" se redujo a puntos ilegibles en vez del gráfico real. Diagnóstico: cuanto más chico ocupa el casco en el cuadro, peor copia sus detalles. Esta versión cierra el encuadre — el casco se ve DE CERCA como protagonista absoluto, y la persona se ve solo hasta la CINTURA, no de cuerpo entero. Mismo prompt de un solo paso (una imagen adjunta).

**Se adjunta UNA imagen:** la foto de producto del casco camaleón.

```
Esto es una GENERACIÓN DE ESCENA DE CAMPAÑA alrededor de un CASCO
REAL, no un diseño de casco nuevo. Recibís UNA imagen: la foto de
producto del casco camaleón. Esa foto es la ÚNICA AUTORIDAD DEL
CASCO: su forma, su pintura, su visor y su logo se copian EXACTOS,
pieza por pieza. El casco se mantiene 100% IGUAL.

ENCUADRE — PLANO CERRADO, EL CASCO DE CERCA:
Esto es lo más importante de este prompt: la cámara está CERCA. El
encuadre es un PLANO MEDIO CORTO: se ve a la persona desde la
CINTURA hacia arriba, NO de cuerpo entero. El casco ocupa una parte
grande y protagonista del cuadro, con detalle nítido y grande —
como una foto de campaña de producto, no una foto lejana de cuerpo
completo. Cuanto más grande y cerca se vea el casco, mejor se
respeta cada detalle real.

EL CASCO — SE COPIA EXACTO DE LA FOTO, PIEZA POR PIEZA:
- Casco integral deportivo. Es OBLIGATORIO que se vea el SPOILER
  trasero prominente y anguloso de la parte alta de atrás, tal como
  lo muestra la foto — no se lo suaviza, no desaparece, no se
  redondea la calota.
- La PINTURA CAMALEÓN CROMADA: el degradado violeta→azul brillante,
  con su efecto de cambio de color según la luz.
- Las piezas negras: ventilaciones con sus rejillas, tomas de aire,
  goma del borde inferior.
- El LOGO "EDGE PRO" del lateral: se reproduce como TEXTO LEGIBLE,
  con esas letras exactas en blanco, en su posición y tamaño reales.
  PROHIBIDO reemplazarlo por puntos, manchas o un garabato que
  parezca logo: es el texto "EDGE PRO" tal cual.
- Mismo lado visible que la foto (lateral mirando a la derecha),
  misma silueta angulosa, mismas proporciones exactas.

EL VISOR — IRIDIUM OPACO TOTAL, CERO TRANSPARENCIA:
- Espejo iridium violeta/magenta PURO Y OPACO.
- NO se ve NADA a través: ni rostro, ni ojos, ni estructura interna.
- Solo reflejos espejados de las luces neón de la escena.

LA ESCENA — PERSONA HASTA LA CINTURA EN SET NEÓN:
- Encuadre desde la cintura hacia arriba: se ve el torso, los
  hombros y la cabeza con el casco puesto. NO se ve de cuerpo
  entero ni de cuerpo lejano.
- Outfit urbano oscuro premium (campera o chaqueta técnica negra)
  visible en el torso.
- Postura firme, cuerpo levemente girado, mostrando el MISMO LADO
  del casco que muestra la foto de producto.
- FONDO NEGRO profundo con LUCES de neón / LED en los MISMOS
  COLORES del cromado: violeta, azul y magenta, en líneas, barras o
  halos geométricos detrás y a los costados.
- SIN HUMO: nada de niebla ni bruma. Atmósfera limpia y nítida.
- Fotorrealista, estética de campaña premium.

ESCALA REAL DENTRO DEL PLANO CERRADO:
Aunque el encuadre esté cerca, el casco sigue siendo un objeto de
tamaño real sobre una cabeza real: apenas más grande que la cabeza,
proporcional a los hombros que se ven en el plano — nunca más ancho
que los hombros.

COMPOSICIÓN — PARA NO INVENTAR EL LADO OCULTO:
La foto adjunta muestra el casco en 3/4 lateral mirando a la
DERECHA. Mostrá ESE MISMO LADO. No inventar el otro lado ni el
frente completo.

INTEGRACIÓN DE LUZ:
Reflejos coherentes de las luces neón sobre la pintura camaleón y el
visor. La luz nunca cambia el casco: mismo cromado, mismo visor
opaco, mismo spoiler, mismo logo legible.

PROHIBIDO ABSOLUTO:
- Prohibido el plano de cuerpo entero o de cuerpo lejano: es plano
  cerrado, cintura hacia arriba.
- Prohibido perder o suavizar el spoiler trasero: tiene que verse
  angular y prominente.
- Prohibido reemplazar el logo "EDGE PRO" por puntos, manchas o
  garabatos: es el texto legible real.
- Prohibido cambiar la pintura camaleón, las piezas negras o la
  forma del casco.
- Prohibido dejar el visor con cualquier transparencia.
- Prohibido humo, niebla o luces de colores ajenos al cromado.
- Prohibido mostrar el lado del casco que no está en la foto.

VERIFICACIÓN FINAL — respondé estos siete chequeos antes de entregar:
1. ¿El encuadre es cerrado — la persona se ve de la CINTURA hacia
   arriba, NO de cuerpo entero — y el casco se ve grande y de cerca?
2. ¿El SPOILER trasero está presente, angular y prominente, sin
   suavizarse ni desaparecer?
3. ¿El logo "EDGE PRO" es TEXTO LEGIBLE en blanco, no puntos ni
   manchas?
4. ¿La pintura camaleón, las piezas negras y la silueta angulosa
   coinciden exactamente con la foto de producto?
5. ¿El visor quedó opaco total, sin transparencia, solo con
   reflejos neón?
6. ¿El fondo es negro con luces violeta/azul/magenta, sin humo?
7. ¿Se muestra el mismo lado del casco que la foto, a escala
   coherente con los hombros visibles?
```
