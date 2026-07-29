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
