# Familia 8 — Ilustración de diseño → render fiel sobre el molde real (Dakota)

[← Volver al catálogo de prompts](README.md)

**Operación:** convertir una ILUSTRACIÓN VECTORIAL de diseño (mockup plano, con su paleta Pantone) en una foto fotorrealista del casco real, aplicando el gráfico de la ilustración SOLO como color y diseño de superficie. La FOTO REAL del molde es la única autoridad de geometría — la ilustración nunca manda sobre la forma, solo sobre qué colores van dónde. Regla explícita del usuario: "el dibujo no manda sobre la estructura".

**Molde de estas instancias:** casco integral tipo dual-sport/enduro con pico delantero (visera), ranuras de ventilación superior diagonales, mecanismo circular del pivote del visor en el lateral, una pieza física blanca en forma de ala/pico junto al pivote, panel de mejilla inferior con su recorte real, ventilación inferior cerca de la mentonera. Acabado mate.

## Metodología (Agente 0 — Intake y Razonamiento)

Antes de generar cualquier imagen, cada elemento del dibujo se clasifica contra la foto real:
1. **¿Existe geometría real equivalente en otra ubicación del casco?** Si el dibujo muestra una forma que en la realidad no está ahí, no se inventa.
2. **¿Es textura/relieve real (pieza física 3D) o es pintura/decal plano del ilustrador?** Las piezas físicas (mecanismo del pivote, ala blanca) mantienen su geometría real siempre — solo pueden cambiar de color.
3. **¿El cambio pedido es de estructura o de diseño de superficie?** Solo se ejecutan los de superficie (color, gráfico, tinte del visor). Los de estructura no se tocan.
4. **Separar siempre geometría / color / estilo** en el prompt, en bloques distintos.
5. **Orden de las imágenes en el prompt:** la ilustración (referencia de diseño) va primero, la foto real (autoridad de forma) va al final — es la que tiene la última palabra.
6. **Auditoría:** verificar con zoom cada elemento contra la foto real antes de aprobar; nunca aprobar solo "a simple vista".

## Casos

| Instancia | Colorway | Estado |
|---|---|---|
| 8.1 | Rojo/gris + visor naranja-amarillo iridium | Prompt listo — pendiente confirmar color del ala blanca |

---

## Instancia 8.1 — Colorway rojo/gris, visor iridium naranja-amarillo (vista lateral)

**Se adjuntan DOS imágenes, en este orden:** (1) la ilustración vectorial roja/gris (referencia de diseño y color), (2) la foto real del casco negro mate (autoridad de forma — tiene la última palabra sobre cualquier geometría).

**Asunción marcada para confirmar:** la ilustración muestra la pieza del ala/pico en un gris oscuro casi fundido con el negro de la calota — este prompt asume que esa pieza toma el gris/plateado del resto del diseño. Si en realidad debe quedar blanca (su color de fábrica), avisar para corregir esta línea.

```
Esto es una TRADUCCIÓN DE ILUSTRACIÓN A FOTO REAL, no un casco
nuevo. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ILUSTRACIÓN (mockup vectorial rojo/gris con logo
  EDGE PRO y visor naranja-amarillo): es la AUTORIDAD DE COLOR Y
  DISEÑO. De esta imagen se toma QUÉ colores van, QUÉ gráfico se
  aplica y en QUÉ zona aproximada — nunca la forma exacta de nada.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (negro mate, foto de producto):
  es la ÚNICA AUTORIDAD DE FORMA. Si algo de la IMAGEN 1 contradice
  la geometría real de la IMAGEN 2, GANA LA IMAGEN 2. El dibujo NO
  manda sobre la estructura.

EL RESULTADO ES: el casco EXACTO de la IMAGEN 2 — mismo objeto
físico, misma silueta, mismas piezas, mismo ángulo — pintado y
diseñado con los colores y el gráfico de la IMAGEN 1, aplicados
sobre los límites REALES de cada panel.

GEOMETRÍA — TODO ESTO VIENE DE LA IMAGEN 2, SIN EXCEPCIÓN:
- La silueta completa del casco integral con su pico/visera
  delantero: misma curvatura, mismas proporciones.
- Las DOS ranuras de ventilación diagonales de la parte alta,
  delante del pico: misma forma y posición.
- El MECANISMO CIRCULAR del pivote del visor en el lateral (disco
  con sus tornillos): misma forma, mismo tamaño, misma posición.
  Es una pieza física real — no se redibuja como el dibujo la
  sugiere, se copia de la foto.
- LA PIEZA EN FORMA DE ALA/PICO junto al pivote del visor: es una
  pieza física 3D separada, no un decal plano. Su FORMA, su
  curvatura y su posición son las de la foto real, exactas. Ver
  abajo su color.
- El panel de la mejilla inferior con su línea de recorte real: el
  límite de este panel — dónde empieza y termina — lo define la
  FOTO REAL, no el trazado libre de la ilustración.
- La ventilación inferior cerca de la mentonera.
- La FORMA del visor: contorno y curvatura exactos de la foto real.
- El acabado general MATE de la calota.

COLOR Y DISEÑO — ESTO VIENE DE LA IMAGEN 1, APLICADO DENTRO DE LOS
LÍMITES REALES:
1. LA CALOTA BASE: negro, igual que la foto real. Sin cambio.
2. LA FRANJA DIAGONAL GRIS/PLATEADA: se pinta en la zona superior,
   siguiendo el trazado real de esa zona de la calota (cerca de las
   ranuras de ventilación reales), no el trazado inventado del
   dibujo.
3. LAS FORMAS ANGULARES ROJAS (el gráfico principal): se aplican
   sobre el panel real de la mejilla inferior, dentro de SUS límites
   reales.
4. EL LOGO "EDGE" en blanco con "PRO" en rojo debajo: se ubica sobre
   el panel real de la mejilla, en la posición relativa que muestra
   el dibujo, ajustado al tamaño y la curvatura reales de ese panel.
5. EL VISOR: recibe un TINTE IRIDIUM en degradé NARANJA A AMARILLO,
   como en la ilustración — aplicado como color/reflejo sobre la
   FORMA real y transparente del visor de la foto. Es un tratamiento
   de color, no un cambio de forma.
6. LA PIEZA DEL ALA/PICO junto al pivote: toma el mismo GRIS/
   PLATEADO que la franja diagonal (ver nota de asunción arriba).
   Mantiene su forma real de la foto; solo cambia su color.
7. EL MECANISMO DEL PIVOTE (disco con tornillos): queda con su color
   real de la foto (plástico/negro), no se pinta.

COBERTURA Y LÍMITES:
Cada color cubre TODA su zona correspondiente, sin islas del negro
original salvo donde la calota base deba seguir siendo negra. Los
límites entre colores siguen SIEMPRE los bordes físicos reales de
cada panel — nunca los bordes que dibujó el ilustrador si no
coinciden con la foto real.

PROHIBIDO ABSOLUTO:
- Prohibido que la ilustración cambie la forma de CUALQUIER pieza:
  pico, ranuras, mecanismo del pivote, ala, panel de mejilla,
  ventilación inferior, contorno del visor.
- Prohibido inventar piezas, cortes o relieves que estén en el
  dibujo pero no en la foto real.
- Prohibido que el gráfico se salga de los límites reales de su
  panel e invada otra pieza.
- Prohibido cambiar el color del mecanismo del pivote: queda como en
  la foto real.
- Prohibido cambiar el ángulo, el encuadre o el fondo respecto a la
  foto real.
- Prohibido dejar el negro original en zonas que según el diseño
  deben llevar color.

VERIFICACIÓN FINAL — AUDITORÍA CON ZOOM, ELEMENTO POR ELEMENTO:
1. ¿La silueta, el pico, las ranuras de ventilación, el mecanismo
   del pivote y la ventilación inferior coinciden EXACTOS con la
   IMAGEN 2, sin ninguna forma tomada del dibujo?
2. ¿La pieza del ala/pico mantiene la FORMA de la IMAGEN 2, con el
   color gris/plateado aplicado?
3. ¿Las formas rojas y el logo EDGE PRO quedaron DENTRO de los
   límites reales del panel de la mejilla, sin invadir otras piezas?
4. ¿El visor tiene el degradé naranja-amarillo iridium, con la FORMA
   exacta del visor real?
5. ¿El mecanismo del pivote quedó con su color real, sin pintar?
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
```
