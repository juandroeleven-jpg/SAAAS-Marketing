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
