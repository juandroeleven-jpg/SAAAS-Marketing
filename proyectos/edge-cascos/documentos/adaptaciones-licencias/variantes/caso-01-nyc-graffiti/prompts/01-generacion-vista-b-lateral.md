# PROMPT 1 — GENERACIÓN · NYC Graffiti · Vista B (lateral izquierdo)

Molde: casco ABATIBLE / MODULAR con spoiler y luces LED rojas.
Colorway de referencia: **GRIS / NARANJA**.

## Payload — adjuntar 2 imágenes EN ESTE ORDEN

1. `01-nyc-ILUSTRACION-lateral-GRIS-NARANJA.png` — autoridad de gráfico y encuadre
2. `00-molde-real-lateral.png` — autoridad de forma, piezas y fotografía

## Si la autoridad es el colorway BLANCO / ROJO

Cambiar solo dos renglones del BLOQUE 3 y sus criterios de rechazo:

- nivel 3: `GRIS MEDIO` → `BLANCO`
- nivel 4: `NARANJA SATURADO` → `ROJO`
- rechazo del acento: "si sale rojo, está MAL" → "si sale naranja o coral, está MAL"
- rechazo de la base: "si sale blanca, está MAL" → "si sale gris, está MAL"

---

## PROMPT (copiar desde acá)

```
ORDEN DE LAS IMÁGENES ADJUNTAS — LEER ASÍ:
- Imagen 1 (ilustración NYC graffiti, vista lateral): AUTORIDAD DE GRÁFICO y
  AUTORIDAD DE ENCUADRE. De acá se toma QUÉ dibujo va, con qué colores, en qué
  zonas, y desde qué ángulo se ve el casco.
- Imagen 2 (foto de producto del casco negro mate, lateral): AUTORIDAD DE FORMA,
  DE PIEZAS y DE FOTOGRAFÍA. De acá se toma el objeto físico real, cada pieza,
  el acabado, la luz y el tipo de imagen.
Ante cualquier contradicción sobre CÓMO ES EL CASCO, manda la imagen 2.
Ante cualquier duda sobre EL DIBUJO y EL ÁNGULO, manda la imagen 1.

QUÉ ES ESTA TAREA:
Fotografiar EL MISMO OBJETO FÍSICO de la imagen 2, con el diseño de la imagen 1
aplicado sobre su superficie. El resultado es una FOTOGRAFÍA de producto de
catálogo, fotorrealista. NO es una ilustración, NO es un vector, NO es un render
plano.

BLOQUE 1 — GEOMETRÍA: ES UN CASCO ABATIBLE (autoridad = imagen 2)
- El casco de la imagen 2 es MODULAR / ABATIBLE: la mentonera se levanta y por
  eso tiene una LÍNEA DE APERTURA que recorre el borde de la mentonera y sube
  hacia el mecanismo lateral. ESA LÍNEA EXISTE Y SE VE. La ilustración lo dibuja
  como si fuera un casco integral de una sola pieza: eso es una simplificación
  del dibujo, NO una indicación de diseño. Mirá la foto real.
- PIEZAS OBLIGATORIAS, con su forma real de la imagen 2:
  1. El SPOILER trasero, con sus DOS LUCES LED ROJAS ENCENDIDAS.
  2. El DEFLECTOR LATERAL en forma de flecha, sobre la zona trasera del flanco.
  3. El MECANISMO DEL VISOR: pieza circular grande con su DIAL ROTATIVO y su
     TORNILLO CENTRAL. La ilustración lo simplifica a una mancha negra: se
     conserva completo, como en la foto real.
  4. La PALANCA DEL VISOR SOLAR: la pieza rectangular con ranuras que está
     debajo del mecanismo. ESTA PIEZA SÍ EXISTE, está en las dos imágenes: se
     conserva.
  5. El BORDE INFERIOR DE GOMA perimetral, con su TEXTURA DE PUNTOS.
  6. La TOMA DE AIRE SUPERIOR de la calota.
- PROHIBIDO agregar, quitar, mover, agrandar o achicar piezas.
- PROHIBIDO inventar tomas de aire, aletas o salientes que no estén en la imagen 2.

BLOQUE 2 — LAS LUCES LED NO SON PINTURA — ATENCIÓN MÁXIMA:
En el spoiler hay DOS LUCES LED ROJAS ENCENDIDAS. Son LUZ EMITIDA, no una
calcomanía roja ni una franja pintada: tienen brillo propio, núcleo saturado y
un leve halo sobre la pieza negra. La ilustración NO las muestra, porque es un
dibujo plano: eso es una carencia del dibujo, NO una indicación de diseño.
Si en el resultado el spoiler no tiene las dos luces rojas encendidas, está MAL.

BLOQUE 3 — COLOR Y GRÁFICO (autoridad = imagen 1)
Escala de color, de oscuro a claro — son SEIS niveles SEPARADOS:
  1. NEGRO — mentonera baja, spoiler, deflector, mecanismo, borde de goma.
  2. AZUL PETRÓLEO / NAVY — el lettering "NYC", la Estatua de la Libertad, las
     estrellas, "HOT DOG".
  3. GRIS MEDIO — la BASE de toda la calota. Es el fondo del diseño.
  4. NARANJA SATURADO — el acento dominante: "Bronx", "BIG APPLE", la "C"
     grande, los corazones, la estrella, el graffiti del faldón bajo.
  5. TURQUESA / VERDE AGUA — acento menor: "USA", "NEWYORK" del faldón.
  6. BLANCO — "NEW YORK" cursiva, los brillos de la Estatua, el damero.
SEPARACIÓN DE TONOS — REGLA DE CONTEO: son SEIS niveles distintos y tienen que
poder CONTARSE a simple vista en el resultado. Si dos de ellos terminan
pareciéndose entre sí, el resultado está MAL. Los oscuros van OSCUROS y los
claros van CLAROS: no promediar.
CRITERIO DE RECHAZO DEL NARANJA: es NARANJA, del lado del amarillo. Si sale
rojo, bermellón o coral, está MAL.
CRITERIO DE RECHAZO DE LA BASE: la base es GRIS MEDIO. Si sale blanca, está MAL.

BLOQUE 4 — LOS TEXTOS: QUÉ SE DIBUJA Y QUÉ NO
Este diseño tiene MUCHO texto. Se divide en dos grupos y se tratan distinto:
- SE DIBUJAN, completos y bien escritos, porque son las masas grandes:
  "NYC" · "BIG APPLE" · "Bronx" · "BROOKLYN"
  Estos cuatro entran ENTEROS dentro de la superficie visible, con margen
  respecto del borde de la pieza, sin cortarse y sin deformarse.
- NO SE PRETENDE QUE SEAN LEGIBLES — se dibujan como TEXTURA de graffiti, con
  el ritmo, el color y la densidad correctos, pero sin exigir que las letras se
  lean: todo el resto del lettering chico y el graffiti del faldón.
NO INVENTES PALABRAS NUEVAS. No agregues textos, logos, sponsors ni marcas que
no estén en la ilustración.
NO DIBUJES SELLOS DE HOMOLOGACIÓN (DOT / ECE) ni texto legal de certificación:
se componen después en post-producción con el archivo oficial.

BLOQUE 5 — EL PERSONAJE
En la zona trasera baja del flanco hay un PERSONAJE (un grafitero con gorra,
campera y un aerosol en la mano). Se reproduce FIEL al arte de la imagen 1, con
su misma pose, su misma ropa y sus mismos colores. NO se redibuja de memoria y
NO se le cambia la cara. Si el personaje sale deformado o con otra cara, está MAL.

BLOQUE 6 — ADAPTACIÓN DEL GRÁFICO A LA SUPERFICIE REAL
El graffiti es PINTURA sobre una superficie curva, no una calcomanía plana ni
una imagen pegada encima:
- Se deforma siguiendo la curvatura real de la calota y la perspectiva del perfil.
- Recibe la MISMA luz de estudio: reflejo especular arriba, sombra propia abajo.
- Respeta los quiebres del molde y los cambios de plano.
- Cubre TODO el flanco sin dejar parches del negro original, salvo las zonas
  declaradas negras.
DENSIDAD: la cantidad de elementos, trazos y salpicaduras de la ilustración se
RESPETA. PROHIBIDO SIMPLIFICAR EL GRÁFICO: prohibido reducir la cantidad de
elementos, bajar la densidad de salpicaduras o dejar vacías zonas que en la
ilustración tienen dibujo. Comparar zona por zona contra la imagen 1.

ZONAS QUE NO LLEVAN GRÁFICO (quedan negras, son piezas):
- El spoiler, el deflector lateral y el mecanismo del visor.
- El borde inferior de goma.
- Las rejillas y ranuras de ventilación, por dentro.

EL VISOR:
Queda TOTALMENTE NEGRO / AHUMADO OSCURO, OPACO: no se ve el interior del casco
a través de él. Conserva su misma forma, curvatura y posición (bajado, cerrado)
de la foto real. Puede tener un leve reflejo de estudio, pero NO transparencia
y NO degradado.

BLOQUE 7 — ACABADO Y FOTOGRAFÍA
- La CALOTA pintada va MATE, igual que el mate del casco real: sin barniz
  espejado. Si refleja como un espejo, está MAL.
- Las PIEZAS (spoiler, deflector, mecanismo) van BRILLANTES, con reflejo
  especular marcado. Ese contraste mate/brillo es lo que hace que se lea como
  producto real y no como render.
- Fondo blanco liso de estudio, con sombra suave, igual que la imagen 2.
- Nitidez y nivel de detalle de fotografía de producto.

VERIFICACIÓN FINAL — respondé estos ocho chequeos antes de entregar:
1. ¿Es una FOTOGRAFÍA de producto y no una ilustración?
2. ¿Se ve la LÍNEA DE APERTURA de la mentonera abatible?
3. ¿El spoiler tiene las DOS LUCES LED ROJAS ENCENDIDAS?
4. ¿Están el dial con su tornillo, la palanca del visor solar y la goma texturada?
5. ¿Se cuentan los SEIS niveles de color, con la base GRIS y el acento NARANJA?
6. ¿"NYC", "BIG APPLE", "Bronx" y "BROOKLYN" están completos, bien escritos y
   sin cortarse?
7. ¿El personaje es el mismo de la ilustración, sin deformar?
8. ¿La calota quedó MATE y las piezas BRILLANTES, con el fondo y la sombra de
   la foto real?
```
