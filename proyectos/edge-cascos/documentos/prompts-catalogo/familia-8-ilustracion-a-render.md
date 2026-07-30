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

---

## Checkpoint real trasero recibido — ya no son provisorios

El usuario confirmó y mandó la foto real de la vista TRASERA: casco integral gunmetal/negro mate visto de atrás, con DOS piezas tipo ALA/SPOILER simétricas en la parte alta (acabado más BRILLANTE que el resto de la calota, con ranuras/aletas finas en el borde inferior externo de cada ala), una rendija horizontal oscura entre ambas alas en el centro, y el borde inferior con nervaduras/rejillas verticales (grilla de ventilación baja). Con este checkpoint, las instancias 8.2–8.5 dejan de ser provisorias.

## Instancias — vista TRASERA

| Instancia | Colorway | Alas | Base |
|---|---|---|---|
| 8.2 | Amarillo/azul | Amarillas con detalle azul | Negro/gunmetal |
| 8.3 | Rosa/violeta | Rosa/magenta con detalle violeta | Negro/gunmetal |
| 8.4 | Rojo/gris | Rojas con detalle gris | Negro/gunmetal |
| 8.5 | Blanco/rojo/azul | Rojo y azul combinados | Calota base blanca |

---

## Instancia 8.2 — Trasera, amarillo/azul

**Se adjuntan DOS imágenes, en este orden:** (1) la ilustración trasera amarillo/azul, (2) la foto real trasera del casco (autoridad de forma).

```
Esto es una TRADUCCIÓN DE ILUSTRACIÓN A FOTO REAL, no un casco
nuevo. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ILUSTRACIÓN (mockup vectorial amarillo/azul, vista
  trasera): es la AUTORIDAD DE COLOR Y DISEÑO. De esta imagen se
  toma QUÉ colores van y QUÉ gráfico se aplica — nunca la forma
  exacta de nada.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (vista trasera, gunmetal/negro
  mate): es la ÚNICA AUTORIDAD DE FORMA. Si algo de la IMAGEN 1
  contradice la geometría real de la IMAGEN 2, GANA LA IMAGEN 2.

GEOMETRÍA — TODO ESTO VIENE DE LA IMAGEN 2, SIN EXCEPCIÓN:
- La silueta trasera completa del casco: dome redondeado, mismas
  proporciones.
- Las DOS piezas tipo ALA/SPOILER simétricas de la parte alta: misma
  forma, mismo tamaño, misma posición, con sus ranuras/aletas finas
  en el borde inferior externo de cada una. Son piezas físicas
  reales — no se redibujan según la ilustración.
- La rendija horizontal oscura entre ambas alas, en el centro.
- El borde inferior con sus nervaduras/rejillas verticales.
- El acabado: la calota base es MATE/gunmetal; las alas tienen un
  acabado más BRILLANTE que el resto — esa diferencia de brillo se
  mantiene aunque cambie el color.

COLOR Y DISEÑO — ESTO VIENE DE LA IMAGEN 1, APLICADO DENTRO DE LOS
LÍMITES REALES:
1. LAS DOS ALAS: pasan a AMARILLO, con un detalle/acento AZUL según
   el trazado de la ilustración, aplicado dentro de los límites
   físicos reales de cada ala — no del contorno libre del dibujo.
   Mantienen su acabado brillante.
2. LA CALOTA BASE (fuera de las alas): sigue NEGRA/gunmetal, igual
   que la foto real, salvo donde la ilustración marque logo o texto.
3. El escudo/logo "EDGE" del centro y el wordmark "EDGE" de cada
   lado, si los muestra la ilustración: se aplican sobre la
   superficie de la calota, en la posición relativa que indica el
   dibujo, sin alterar la forma de nada debajo.

COBERTURA Y LÍMITES:
El amarillo cubre TODA la superficie de cada ala, sin dejar tramos
del color viejo. El límite entre el amarillo de las alas y el negro
de la calota es nítido y sigue el borde físico real de cada ala.

PROHIBIDO ABSOLUTO:
- Prohibido que la ilustración cambie la forma de las alas, la
  rendija central o la grilla inferior.
- Prohibido inventar piezas que no estén en la foto real.
- Prohibido que el color se salga de los límites reales de cada ala.
- Prohibido cambiar el acabado (brillante en las alas, mate en el
  resto).
- Prohibido cambiar el ángulo, el encuadre o el fondo respecto a la
  foto real.

VERIFICACIÓN FINAL — AUDITORÍA CON ZOOM, ELEMENTO POR ELEMENTO:
1. ¿Las dos alas mantienen la FORMA exacta de la IMAGEN 2, con sus
   ranuras/aletas y su acabado brillante?
2. ¿Las alas quedaron AMARILLAS con el detalle azul, dentro de sus
   límites reales, sin invadir la calota?
3. ¿La calota base sigue negra/gunmetal, sin tramos del color viejo
   donde no corresponde?
4. ¿La rendija central y la grilla inferior quedaron intactas?
5. ¿El logo/wordmark EDGE (si aplica) quedó sobre la superficie sin
   deformar nada debajo?
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
```

---

## Instancia 8.3 — Trasera, rosa/violeta

**Se adjuntan DOS imágenes, en este orden:** (1) la ilustración trasera rosa/violeta, (2) la foto real trasera del casco.

```
Esto es una TRADUCCIÓN DE ILUSTRACIÓN A FOTO REAL, no un casco
nuevo. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ILUSTRACIÓN (mockup vectorial rosa/violeta, vista
  trasera): es la AUTORIDAD DE COLOR Y DISEÑO.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (vista trasera): es la ÚNICA
  AUTORIDAD DE FORMA. Si algo de la IMAGEN 1 contradice la geometría
  real, GANA LA IMAGEN 2.

GEOMETRÍA — TODO ESTO VIENE DE LA IMAGEN 2, SIN EXCEPCIÓN:
- La silueta trasera completa del casco: dome redondeado, mismas
  proporciones.
- Las DOS piezas tipo ALA/SPOILER simétricas de la parte alta: misma
  forma, mismo tamaño, misma posición, con sus ranuras/aletas finas
  en el borde inferior externo. Piezas físicas reales, no se
  redibujan.
- La rendija horizontal oscura entre ambas alas, en el centro.
- El borde inferior con sus nervaduras/rejillas verticales.
- El acabado: calota base MATE/gunmetal; alas con acabado más
  BRILLANTE — esa diferencia se mantiene.

COLOR Y DISEÑO — ESTO VIENE DE LA IMAGEN 1, APLICADO DENTRO DE LOS
LÍMITES REALES:
1. LAS DOS ALAS: pasan a ROSA/MAGENTA con un detalle/acento VIOLETA
   según el trazado de la ilustración, dentro de los límites físicos
   reales de cada ala. Mantienen su acabado brillante.
2. LA CALOTA BASE: sigue NEGRA/gunmetal, salvo donde vaya logo o
   texto.
3. El escudo/logo "EDGE" del centro y el wordmark "EDGE" de cada
   lado: sobre la superficie de la calota, en la posición relativa
   del dibujo, sin alterar la forma debajo.

COBERTURA Y LÍMITES:
El rosa/violeta cubre TODA la superficie de cada ala, sin tramos del
color viejo. El límite con la calota negra es nítido y sigue el
borde físico real.

PROHIBIDO ABSOLUTO:
- Prohibido cambiar la forma de las alas, la rendija central o la
  grilla inferior.
- Prohibido inventar piezas que no estén en la foto real.
- Prohibido que el color se salga de los límites reales de cada ala.
- Prohibido cambiar el acabado (brillante/mate).
- Prohibido cambiar el ángulo, el encuadre o el fondo.

VERIFICACIÓN FINAL — AUDITORÍA CON ZOOM, ELEMENTO POR ELEMENTO:
1. ¿Las dos alas mantienen la FORMA exacta de la IMAGEN 2, con sus
   ranuras y su acabado brillante?
2. ¿Las alas quedaron ROSA/MAGENTA con el detalle violeta, dentro de
   sus límites reales?
3. ¿La calota base sigue negra/gunmetal donde corresponde?
4. ¿La rendija central y la grilla inferior quedaron intactas?
5. ¿El logo/wordmark EDGE quedó sobre la superficie sin deformar
   nada debajo?
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
```

---

## Instancia 8.4 — Trasera, rojo/gris

**Se adjuntan DOS imágenes, en este orden:** (1) la ilustración trasera rojo/gris, (2) la foto real trasera del casco. Compañera trasera de la Instancia 8.1 (lateral).

```
Esto es una TRADUCCIÓN DE ILUSTRACIÓN A FOTO REAL, no un casco
nuevo. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ILUSTRACIÓN (mockup vectorial rojo/gris, vista
  trasera): es la AUTORIDAD DE COLOR Y DISEÑO.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (vista trasera): es la ÚNICA
  AUTORIDAD DE FORMA. Si algo de la IMAGEN 1 contradice la geometría
  real, GANA LA IMAGEN 2.

GEOMETRÍA — TODO ESTO VIENE DE LA IMAGEN 2, SIN EXCEPCIÓN:
- La silueta trasera completa del casco: dome redondeado, mismas
  proporciones.
- Las DOS piezas tipo ALA/SPOILER simétricas de la parte alta: misma
  forma, mismo tamaño, misma posición, con sus ranuras/aletas finas
  en el borde inferior externo. Piezas físicas reales.
- La rendija horizontal oscura entre ambas alas, en el centro.
- El borde inferior con sus nervaduras/rejillas verticales.
- El acabado: calota base MATE/gunmetal; alas con acabado más
  BRILLANTE — esa diferencia se mantiene.

COLOR Y DISEÑO — ESTO VIENE DE LA IMAGEN 1, APLICADO DENTRO DE LOS
LÍMITES REALES:
1. LAS DOS ALAS: pasan a ROJO con un detalle/acento GRIS según el
   trazado de la ilustración, dentro de los límites físicos reales.
   Mantienen su acabado brillante.
2. LA CALOTA BASE: sigue NEGRA/gunmetal, salvo donde vaya logo o
   texto.
3. El logo "EDGE" (escudo central) + wordmark "EDGE"/"PRO" de cada
   lado, coherente con el colorway rojo/gris ya usado en la
   Instancia 8.1 lateral: sobre la superficie, sin alterar la forma
   debajo.

COBERTURA Y LÍMITES:
El rojo cubre TODA la superficie de cada ala, sin tramos del color
viejo. El límite con la calota negra es nítido y sigue el borde
físico real.

PROHIBIDO ABSOLUTO:
- Prohibido cambiar la forma de las alas, la rendija central o la
  grilla inferior.
- Prohibido inventar piezas que no estén en la foto real.
- Prohibido que el color se salga de los límites reales de cada ala.
- Prohibido cambiar el acabado (brillante/mate).
- Prohibido cambiar el ángulo, el encuadre o el fondo.

VERIFICACIÓN FINAL — AUDITORÍA CON ZOOM, ELEMENTO POR ELEMENTO:
1. ¿Las dos alas mantienen la FORMA exacta de la IMAGEN 2, con sus
   ranuras y su acabado brillante?
2. ¿Las alas quedaron ROJAS con el detalle gris, dentro de sus
   límites reales?
3. ¿La calota base sigue negra/gunmetal donde corresponde?
4. ¿La rendija central y la grilla inferior quedaron intactas?
5. ¿El logo/wordmark EDGE quedó coherente con el colorway rojo/gris
   de la Instancia 8.1?
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
```

---

## Instancia 8.5 — Trasera, blanco/rojo/azul

**Se adjuntan DOS imágenes, en este orden:** (1) la ilustración trasera blanco/rojo/azul, (2) la foto real trasera del casco.

**Nota de confirmación pendiente:** a diferencia de las otras 3 (calota base negra), esta ilustración muestra la CALOTA BASE en blanco, no en negro — es el único colorway del lote con ese cambio adicional. El prompt lo incluye; confirmar si es correcto o si la base debía quedar negra como las demás.

```
Esto es una TRADUCCIÓN DE ILUSTRACIÓN A FOTO REAL, no un casco
nuevo. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ILUSTRACIÓN (mockup vectorial blanco/rojo/azul,
  vista trasera): es la AUTORIDAD DE COLOR Y DISEÑO.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (vista trasera): es la ÚNICA
  AUTORIDAD DE FORMA. Si algo de la IMAGEN 1 contradice la geometría
  real, GANA LA IMAGEN 2.

GEOMETRÍA — TODO ESTO VIENE DE LA IMAGEN 2, SIN EXCEPCIÓN:
- La silueta trasera completa del casco: dome redondeado, mismas
  proporciones.
- Las DOS piezas tipo ALA/SPOILER simétricas de la parte alta: misma
  forma, mismo tamaño, misma posición, con sus ranuras/aletas finas
  en el borde inferior externo. Piezas físicas reales.
- La rendija horizontal oscura entre ambas alas, en el centro.
- El borde inferior con sus nervaduras/rejillas verticales.
- El acabado: la calota base mantiene su tipo de acabado MATE; las
  alas mantienen su acabado más BRILLANTE — esa diferencia se
  mantiene sea cual sea el color.

COLOR Y DISEÑO — ESTO VIENE DE LA IMAGEN 1, APLICADO DENTRO DE LOS
LÍMITES REALES:
1. LA CALOTA BASE (fuera de las alas): pasa a BLANCO mate, a
   diferencia de las otras variantes de este lote (que quedan
   negras) — ver nota de confirmación arriba.
2. LAS DOS ALAS: toman la combinación ROJO Y AZUL que muestra la
   ilustración (según el trazado del dibujo: puede ser cada ala de
   un color distinto, o cada ala dividida en rojo y azul — replicar
   exactamente la distribución de la IMAGEN 1), dentro de los
   límites físicos reales de cada ala. Mantienen su acabado
   brillante.
3. El logo "EDGE" (escudo central) y el wordmark "EDGE" de cada
   lado: sobre la superficie de la calota, en la posición relativa
   del dibujo, sin alterar la forma debajo.

COBERTURA Y LÍMITES:
El blanco cubre TODA la calota base sin tramos del negro viejo. El
rojo/azul cubre TODA la superficie de cada ala según su
distribución real en la ilustración. El límite entre la calota
blanca y las alas rojo/azul es nítido y sigue el borde físico real
de cada ala.

PROHIBIDO ABSOLUTO:
- Prohibido cambiar la forma de las alas, la rendija central o la
  grilla inferior.
- Prohibido inventar piezas que no estén en la foto real.
- Prohibido que el color se salga de los límites reales de cada
  pieza.
- Prohibido cambiar el acabado (brillante en las alas, mate en la
  calota).
- Prohibido cambiar el ángulo, el encuadre o el fondo.

VERIFICACIÓN FINAL — AUDITORÍA CON ZOOM, ELEMENTO POR ELEMENTO:
1. ¿Las dos alas mantienen la FORMA exacta de la IMAGEN 2, con sus
   ranuras y su acabado brillante?
2. ¿La calota base quedó BLANCA completa, sin tramos negros?
3. ¿Las alas quedaron con la combinación rojo/azul EXACTA de la
   distribución que muestra la IMAGEN 1?
4. ¿La rendija central y la grilla inferior quedaron intactas?
5. ¿El logo/wordmark EDGE quedó sobre la superficie sin deformar
   nada debajo?
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
```

---

## Instancias — vista LATERAL (checkpoint: foto real lateral ya usada en 8.1)

## Instancia 8.6 — Lateral, amarillo/azul (visor iridium verde-azul)

**Se adjuntan DOS imágenes, en este orden:** (1) la ilustración lateral amarillo/azul con visor degradé verde-azul, (2) la foto real lateral del casco negro mate.

```
Esto es una TRADUCCIÓN DE ILUSTRACIÓN A FOTO REAL, no un casco
nuevo. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ILUSTRACIÓN (mockup vectorial amarillo/azul, visor
  degradé verde-azul): es la AUTORIDAD DE COLOR Y DISEÑO.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (negro mate, lateral): es la
  ÚNICA AUTORIDAD DE FORMA. Si algo de la IMAGEN 1 contradice la
  geometría real, GANA LA IMAGEN 2. El dibujo NO manda sobre la
  estructura.

GEOMETRÍA — TODO ESTO VIENE DE LA IMAGEN 2, SIN EXCEPCIÓN:
- La silueta completa del casco integral con su pico/visera
  delantero: misma curvatura, mismas proporciones.
- Las DOS ranuras de ventilación diagonales de la parte alta.
- El MECANISMO CIRCULAR del pivote del visor en el lateral: misma
  forma, mismo tamaño, misma posición. Pieza física real.
- LA PIEZA EN FORMA DE ALA/PICO junto al pivote del visor: forma,
  curvatura y posición de la foto real, exactas.
- El panel de la mejilla inferior con su línea de recorte real: el
  límite lo define la FOTO REAL, no el trazado libre del dibujo.
- La ventilación inferior cerca de la mentonera.
- La FORMA del visor: contorno y curvatura exactos de la foto real.
- El acabado general MATE de la calota.

COLOR Y DISEÑO — ESTO VIENE DE LA IMAGEN 1, APLICADO DENTRO DE LOS
LÍMITES REALES:
1. LA CALOTA BASE: negro, igual que la foto real.
2. LA FRANJA/ACENTO AZUL de la zona superior: se pinta siguiendo el
   trazado real de esa zona, no el trazado del dibujo.
3. LAS FORMAS ANGULARES AMARILLAS (gráfico principal): sobre el
   panel real de la mejilla inferior, dentro de SUS límites reales.
4. EL LOGO "EDGE"/"PRO": ubicado sobre el panel real de la mejilla,
   en la posición relativa del dibujo, ajustado al tamaño real del
   panel.
5. EL VISOR: recibe un TINTE IRIDIUM en degradé VERDE A AZUL, como
   en la ilustración, aplicado como color/reflejo sobre la FORMA
   real y transparente del visor de la foto.
6. LA PIEZA DEL ALA/PICO junto al pivote: toma el color de acento
   que muestra la ilustración para esta zona (amarillo o azul, según
   el trazado exacto del dibujo) — confirmar si en la referencia
   queda más cerca del amarillo o del azul; mantiene su forma real.
7. EL MECANISMO DEL PIVOTE: queda con su color real de la foto, no
   se pinta.

COBERTURA Y LÍMITES:
Cada color cubre TODA su zona correspondiente, sin islas del negro
original salvo donde la calota base deba seguir siendo negra. Los
límites siguen SIEMPRE los bordes físicos reales de cada panel.

PROHIBIDO ABSOLUTO:
- Prohibido que la ilustración cambie la forma de CUALQUIER pieza.
- Prohibido inventar piezas, cortes o relieves que no estén en la
  foto real.
- Prohibido que el gráfico se salga de los límites reales de su
  panel.
- Prohibido cambiar el color del mecanismo del pivote.
- Prohibido cambiar el ángulo, el encuadre o el fondo.

VERIFICACIÓN FINAL — AUDITORÍA CON ZOOM, ELEMENTO POR ELEMENTO:
1. ¿La silueta, el pico, las ranuras, el mecanismo del pivote y la
   ventilación inferior coinciden EXACTOS con la IMAGEN 2?
2. ¿La pieza del ala/pico mantiene la FORMA de la IMAGEN 2?
3. ¿Las formas amarillas y el logo quedaron DENTRO de los límites
   reales del panel de la mejilla?
4. ¿El visor tiene el degradé verde-azul iridium, con la FORMA
   exacta del visor real?
5. ¿El mecanismo del pivote quedó con su color real?
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
```

---

## Instancia 8.7 — Lateral, rosa/violeta (visor degradé rosa-violeta-naranja)

**Se adjuntan DOS imágenes, en este orden:** (1) la ilustración lateral rosa/violeta con visor degradé, (2) la foto real lateral del casco negro mate.

```
Esto es una TRADUCCIÓN DE ILUSTRACIÓN A FOTO REAL, no un casco
nuevo. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ILUSTRACIÓN (mockup vectorial rosa/violeta, visor
  degradé rosa-violeta-naranja): es la AUTORIDAD DE COLOR Y DISEÑO.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (negro mate, lateral): es la
  ÚNICA AUTORIDAD DE FORMA. Si algo de la IMAGEN 1 contradice la
  geometría real, GANA LA IMAGEN 2.

GEOMETRÍA — TODO ESTO VIENE DE LA IMAGEN 2, SIN EXCEPCIÓN:
- La silueta completa del casco integral con su pico/visera
  delantero: misma curvatura, mismas proporciones.
- Las DOS ranuras de ventilación diagonales de la parte alta.
- El MECANISMO CIRCULAR del pivote del visor en el lateral: pieza
  física real, misma forma, mismo tamaño, misma posición.
- LA PIEZA EN FORMA DE ALA/PICO junto al pivote del visor: forma,
  curvatura y posición de la foto real, exactas.
- El panel de la mejilla inferior con su línea de recorte real: el
  límite lo define la FOTO REAL.
- La ventilación inferior cerca de la mentonera.
- La FORMA del visor: contorno y curvatura exactos de la foto real.
- El acabado general MATE de la calota.

COLOR Y DISEÑO — ESTO VIENE DE LA IMAGEN 1, APLICADO DENTRO DE LOS
LÍMITES REALES:
1. LA CALOTA BASE: negro, igual que la foto real.
2. EL ACENTO BLANCO/GRIS de la zona superior: se pinta siguiendo el
   trazado real de esa zona, no el trazado del dibujo.
3. LAS FORMAS ANGULARES ROSA/VIOLETA (gráfico principal): sobre el
   panel real de la mejilla inferior, dentro de SUS límites reales.
4. EL LOGO "EDGE"/"PRO": sobre el panel real de la mejilla, en la
   posición relativa del dibujo, ajustado al tamaño real del panel.
5. EL VISOR: recibe un TINTE IRIDIUM en degradé ROSA-VIOLETA-
   NARANJA, como en la ilustración, aplicado sobre la FORMA real y
   transparente del visor de la foto.
6. LA PIEZA DEL ALA/PICO junto al pivote: toma el mismo tono
   rosa/violeta del acento principal; mantiene su forma real.
7. EL MECANISMO DEL PIVOTE: queda con su color real de la foto.

COBERTURA Y LÍMITES:
Cada color cubre TODA su zona correspondiente, sin islas del negro
original salvo donde la calota base deba seguir siendo negra. Los
límites siguen SIEMPRE los bordes físicos reales de cada panel.

PROHIBIDO ABSOLUTO:
- Prohibido que la ilustración cambie la forma de CUALQUIER pieza.
- Prohibido inventar piezas, cortes o relieves que no estén en la
  foto real.
- Prohibido que el gráfico se salga de los límites reales de su
  panel.
- Prohibido cambiar el color del mecanismo del pivote.
- Prohibido cambiar el ángulo, el encuadre o el fondo.

VERIFICACIÓN FINAL — AUDITORÍA CON ZOOM, ELEMENTO POR ELEMENTO:
1. ¿La silueta, el pico, las ranuras, el mecanismo del pivote y la
   ventilación inferior coinciden EXACTOS con la IMAGEN 2?
2. ¿La pieza del ala/pico mantiene la FORMA de la IMAGEN 2?
3. ¿Las formas rosa/violeta y el logo quedaron DENTRO de los límites
   reales del panel de la mejilla?
4. ¿El visor tiene el degradé rosa-violeta-naranja, con la FORMA
   exacta del visor real?
5. ¿El mecanismo del pivote quedó con su color real?
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
```

---

## Formato de auditoría (Agente Auditor)

Plantilla fija para verificar cada resultado generado contra su checklist de "VERIFICACIÓN FINAL", elemento por elemento, ANTES de aprobar. Se completa una por cada resultado recibido — nunca se aprueba a simple vista (Lecciones 6 y 12 del diagrama del usuario).

```
AUDITORÍA — Instancia [N] — [colorway] — [vista]

Insumos comparados:
- Resultado generado: [describir o adjuntar]
- IMAGEN 1 (ilustración, autoridad de color): [referencia]
- IMAGEN 2 (foto real, autoridad de forma): [referencia]

Checklist (uno por cada punto de VERIFICACIÓN FINAL del prompt):
1. [pregunta 1] → ✅ CUMPLE / ❌ NO CUMPLE / ⚠️ PARCIAL — [qué se vio]
2. [pregunta 2] → ...
3. ...
4. ...
5. ...
6. ...

Defectos encontrados (si los hay):
- [descripción concreta, con ubicación]

Veredicto: APROBADO / RECHAZADO — REINTENTAR / ESCALAR A HUMANO

Si RECHAZADO: ¿es defecto total (otro casco, collage, geometría
irreconocible) o defecto parcial (un elemento puntual mal)? Un
defecto parcial se puede corregir con un prompt de fix dirigido a
ESE elemento, sin regenerar todo — igual que hicimos con la 4.2 y
la 4.4 en las Familias 4.
```

### Ejemplo — Instancia 8.5, primer intento (30/07/2026)

```
AUDITORÍA — Instancia 8.5 — blanco/rojo/azul — trasera

Insumos comparados:
- Resultado generado: NO RECIBIDO. Las imágenes devueltas por la
  herramienta fueron la IMAGEN 1 (ilustración) y la IMAGEN 2 (foto
  real) sin cambios — no hay una foto fotorrealista nueva que
  audite el colorway aplicado.

Checklist: NO EVALUABLE — falta el insumo principal (el resultado).

Veredicto: RECHAZADO POR AUSENCIA DE RESULTADO — REINTENTAR

Causa probable: la herramienta de generación no procesó el prompt
(fallo silencioso) o devolvió las imágenes de entrada sin generar.
No es un defecto del prompt en sí — se reintenta corriendo el mismo
prompt de nuevo antes de tocar el texto.
```

### Auditoría real — Instancia 8.5, segundo intento (30/07/2026)

```
AUDITORÍA — Instancia 8.5 — blanco/rojo/azul — trasera

Insumos comparados:
- Resultado generado: casco blanco/rojo/azul, vista trasera (recibido)
- IMAGEN 2 (foto real, autoridad de forma): checkpoint trasero negro mate

1. ¿Las dos alas mantienen la FORMA exacta de la IMAGEN 2, con sus
   ranuras y su acabado brillante?
   → ✅ CUMPLE.
2. ¿La calota base quedó BLANCA completa, sin tramos negros?
   → ✅ CUMPLE.
3. ¿Las alas quedaron con la combinación rojo/azul EXACTA de la
   distribución que muestra la IMAGEN 1?
   → ✅ CUMPLE.
4. ¿La rendija central y la grilla inferior quedaron intactas?
   → ⚠️ PARCIAL. Zona central tomó forma de escudo/rombo negro con
   el logo encima — verificar que no exceda la rendija real. Grilla
   inferior con menos contraste/definición que en la foto real.
5. ¿El logo/wordmark EDGE quedó sobre la superficie sin deformar
   nada debajo?
   → ❌ NO CUMPLE. Texto corrupto: "EDGE MELAIS" en vez del wordmark
   real de la marca — falla de tipografía típica de IA, ya
   documentada en el proyecto (Simulación 6d).
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
   → ✅ CUMPLE.

Defectos: A) texto corrupto "MELAIS" bajo el escudo central;
B) forma central negra y grilla inferior a verificar contra la foto
real (posible extensión/pérdida de contraste).

Veredicto: APROBADO CON CORRECCIÓN MENOR — defecto parcial, se
corrige con un prompt dirigido, sin regenerar todo el casco.
```

---

## Instancia 8.5-fix — Corrección del texto y la zona central/grilla

**Se adjuntan DOS imágenes, en este orden:** (1) el resultado ya generado (blanco/rojo/azul, con el defecto de texto), (2) la foto real trasera (autoridad de forma, para verificar la rendija y la grilla).

```
Esto es una CORRECCIÓN DIRIGIDA sobre un resultado ya bueno, no una
imagen nueva. Recibís DOS imágenes:

- IMAGEN 1 — EL RESULTADO YA GENERADO (casco blanco/rojo/azul,
  trasera): es la BASE. El colorway, las alas, el blanco de la
  calota y el encuadre están BIEN y quedan tal cual — solo se
  corrigen dos puntos concretos.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (checkpoint trasero negro mate):
  es la AUTORIDAD DE FORMA para verificar la rendija central y la
  grilla inferior.

HAY DOS CORRECCIONES, Y SOLO ESTAS DOS:

CORRECCIÓN 1 — EL TEXTO DEL LOGO CENTRAL:
Bajo el escudo "EDGE" del centro aparece el texto "EDGE MELAIS", que
es incorrecto — es una corrupción de tipografía. Se corrige a un
wordmark limpio y legible: SOLO el escudo "EDGE" con su forma
actual, SIN ningún texto adicional debajo si no se puede reproducir
con letras reales y correctas. Si se agrega texto, tiene que ser
perfectamente legible letra por letra — no se aproxima ni se
inventan letras parecidas.

CORRECCIÓN 2 — LA ZONA CENTRAL Y LA GRILLA INFERIOR, VERIFICADAS
CONTRA LA FOTO REAL:
- La forma negra central entre las dos alas (donde va el logo) no
  puede ser más grande que la rendija/hueco real que muestra la
  IMAGEN 2: se ajusta su tamaño y forma para no invadir más
  superficie de la que ocupa esa rendija en la foto real.
- La grilla/rejilla del borde inferior recupera el mismo nivel de
  contraste y definición de nervaduras que tiene en la IMAGEN 2 (no
  queda plana ni des-saturada).

TODO LO DEMÁS NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ EN LA
IMAGEN 1:
- La calota blanca, las alas rojo/azul con su distribución actual,
  los paneles "EDGE" (azul) y "EDGE PRO" (rojo) de la parte baja,
  el ángulo, el encuadre y la iluminación.

PROHIBIDO ABSOLUTO:
- Prohibido dejar el texto "MELAIS" o cualquier otra palabra
  corrupta o ilegible.
- Prohibido agrandar la zona central negra más allá de la rendija
  real de la IMAGEN 2.
- Prohibido cambiar el blanco de la calota, el rojo/azul de las
  alas, o los paneles inferiores.
- Prohibido cambiar el ángulo, el encuadre o la iluminación.

VERIFICACIÓN FINAL:
1. ¿El texto bajo el escudo central es legible y correcto, o
   directamente no hay texto si no se puede reproducir bien?
2. ¿La zona central negra quedó del tamaño real de la rendija de la
   IMAGEN 2, sin invadir de más?
3. ¿La grilla inferior recuperó su contraste y definición real?
4. ¿La calota blanca, las alas rojo/azul y los paneles inferiores
   quedaron exactamente como en la IMAGEN 1?
```

### Auditoría con evidencia visual real — Instancia 8.5 (30/07/2026)

Técnica confirmada y en uso: las imágenes pegadas en el chat se extraen del transcript de sesión (`~/.claude/projects/.../[sessionId].jsonl`, bloques `type: image` en base64), se decodifican a archivos reales, y se procesan con Pillow (PIL) para armar tríptico + crops con zoom y etiquetas — igual que el método ya usado en otra sesión de este mismo proyecto.

Archivos en `resultados/`:
- `8.5-TRIPTICO.png` — checkpoint real / ilustración / resultado, lado a lado.
- `8.5-CROP-zona-central-texto.png` — zoom del defecto de texto ("EDGE MELAIS").
- `8.5-CROP-ala-ranuras.png` — zoom de las ranuras del ala, confirma que SÍ se preservaron bien.

Esto confirma con evidencia visual (no solo descripción) el veredicto ya registrado: **APROBADO CON CORRECCIÓN MENOR**, defecto principal el texto corrupto del logo central. El prompt 8.5-fix ya documentado sigue siendo el paso correcto.

---

## Instancia 8.5-v2 — Trasera blanco/rojo/azul, REHECHA DE CERO (texto e insignia central blindados)

**Contexto:** el primer resultado de la 8.5 salió bien en silueta, alas y colorway, pero falló en dos puntos concretos de la zona central: el texto bajo el escudo salió corrupto ("EDGE MELAIS") y la rendija central se agrandó más de lo real, con la grilla inferior perdiendo contraste. En vez de aplicar el fix en dos pasos, esta versión reescribe el prompt de generación original incorporando esas dos lecciones desde el arranque.

**Se adjuntan DOS imágenes, en este orden:** (1) la ilustración trasera blanco/rojo/azul, (2) la foto real trasera del casco (checkpoint, autoridad de forma).

```
Esto es una TRADUCCIÓN DE ILUSTRACIÓN A FOTO REAL, no un casco
nuevo. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ILUSTRACIÓN (mockup vectorial blanco/rojo/azul,
  vista trasera): es la AUTORIDAD DE COLOR Y DISEÑO.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (vista trasera): es la ÚNICA
  AUTORIDAD DE FORMA. Si algo de la IMAGEN 1 contradice la geometría
  real, GANA LA IMAGEN 2, SIN EXCEPCIÓN — esto aplica también a la
  zona central entre las alas, ver más abajo.

GEOMETRÍA — TODO ESTO VIENE DE LA IMAGEN 2, SIN EXCEPCIÓN:
- La silueta trasera completa del casco: dome redondeado, mismas
  proporciones.
- Las DOS piezas tipo ALA/SPOILER simétricas de la parte alta: misma
  forma, mismo tamaño, misma posición, con sus ranuras/aletas finas
  en el borde inferior externo de cada una. Piezas físicas reales —
  no se redibujan según la ilustración.
- LA RENDIJA CENTRAL — ANCLA DURA DE TAMAÑO: en la IMAGEN 2 es una
  franja horizontal ANGOSTA entre las dos alas, no un escudo ni un
  rombo grande. El área negra central del resultado tiene que medir
  lo mismo que esa rendija real — NO se agranda para "hacerle
  lugar" al logo. Si el logo no entra cómodo en ese espacio angosto,
  el logo se achica; la rendija NUNCA se agranda para acomodarlo.
- EL BORDE INFERIOR con sus nervaduras/rejillas verticales: en la
  IMAGEN 2 es NEGRO MATE con las nervaduras bien marcadas y de alto
  contraste. Esa definición y ese contraste se copian tal cual —
  la grilla del resultado NO puede salir más clara, plateada ni
  menos definida que la de la foto real.
- El acabado: la calota base es MATE; las alas tienen un acabado más
  BRILLANTE — esa diferencia se mantiene sea cual sea el color.

COLOR Y DISEÑO — ESTO VIENE DE LA IMAGEN 1, APLICADO DENTRO DE LOS
LÍMITES REALES:
1. LA CALOTA BASE (fuera de las alas): pasa a BLANCO mate.
2. LAS DOS ALAS: toman la combinación ROJO Y AZUL que muestra la
   ilustración (ala izquierda en tema azul, ala derecha en tema
   rojo, según la IMAGEN 1), dentro de los límites físicos reales de
   cada ala. Mantienen su acabado brillante.
3. EL LOGO CENTRAL — ANCLA DURA DE TEXTO: sobre la rendija real
   (del tamaño de la IMAGEN 2, no más grande) va el escudo "EDGE".
   Si se agrega texto o sub-marca debajo del escudo, tiene que ser
   PERFECTAMENTE LEGIBLE, con letras reales y correctas — nunca una
   palabra inventada o corrupta. Si existe la MÍNIMA duda de que el
   texto pueda salir mal, se prioriza dejar SOLO el escudo "EDGE"
   SIN ningún texto adicional debajo: un escudo limpio es preferible
   a un escudo con texto ilegible.
4. Los wordmarks "EDGE" (azul, panel izquierdo) y "EDGE PRO" (rojo,
   panel derecho) de la parte baja: sobre la superficie de cada
   panel, en la posición relativa del dibujo, con letras reales y
   legibles, sin alterar la forma debajo.

COBERTURA Y LÍMITES:
El blanco cubre TODA la calota base sin tramos del negro viejo. El
rojo/azul cubre TODA la superficie de cada ala según su distribución
real en la ilustración. El límite entre la calota blanca y las alas
rojo/azul es nítido y sigue el borde físico real de cada ala.

PROHIBIDO ABSOLUTO:
- Prohibido agrandar la rendija/zona central más allá de su tamaño
  real en la IMAGEN 2, sea cual sea la excusa (lugar para el logo,
  composición, etc.).
- Prohibido dejar cualquier texto ilegible, corrupto o inventado
  bajo el escudo central: o el texto es perfectamente legible y
  correcto, o no hay texto.
- Prohibido que la grilla inferior pierda contraste o definición
  respecto a la IMAGEN 2.
- Prohibido cambiar la forma de las alas o sus ranuras.
- Prohibido que el color se salga de los límites reales de cada
  pieza.
- Prohibido cambiar el acabado (brillante en las alas, mate en la
  calota), el ángulo, el encuadre o el fondo.

VERIFICACIÓN FINAL — AUDITORÍA CON ZOOM, ELEMENTO POR ELEMENTO:
1. ¿Las dos alas mantienen la FORMA exacta de la IMAGEN 2, con sus
   ranuras y su acabado brillante?
2. ¿La calota base quedó BLANCA completa, sin tramos negros?
3. ¿Las alas quedaron con la combinación rojo/azul EXACTA de la
   distribución que muestra la IMAGEN 1?
4. ¿La rendija central mide LO MISMO que en la IMAGEN 2, sin
   agrandarse para el logo?
5. ¿El texto bajo el escudo (si existe) es perfectamente legible y
   correcto — o directamente no hay texto?
6. ¿La grilla inferior tiene el mismo contraste y definición que en
   la IMAGEN 2?
7. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
```

---

## Formato de entrega estándar (definido 30/07/2026)

De acá en adelante, cada auditoría de resultado entrega SIEMPRE estos 4 elementos juntos:

1. **Imágenes reales** — tríptico (checkpoint/ilustración/resultado) + crops de zoom de las zonas con dudas, enviados como archivos, no solo descriptos.
2. **Tabla comparativa** — un renglón por cada ítem de la VERIFICACIÓN FINAL del prompt usado, con veredicto y evidencia:

   | # | Chequeo | Cumplió | Evidencia |
   |---|---|---|---|
   | 1 | [pregunta del prompt] | ✅/⚠️/❌ | [qué muestra el crop/foto] |

3. **Prompt de corrección dirigida** — ataca solo lo que falló, sobre el resultado ya bueno (dos imágenes: resultado + checkpoint).
4. **Prompt de regeneración completa** — el prompt original rehecho de cero, con las lecciones del defecto ya incorporadas como reglas/anclas duras (una imagen: ilustración + checkpoint, como la generación original).

Las dos opciones (3 y 4) se entregan juntas para que el usuario elija: corrección si el resultado base es bueno y el defecto es puntual; regeneración si prefiere partir de cero con el prompt ya blindado.

### Ejemplo retroactivo — Instancia 8.5, con este formato

| # | Chequeo | Cumplió | Evidencia |
|---|---|---|---|
| 1 | Alas — forma, ranuras, acabado brillante | ✅ | Crop "ala-ranuras": ranuras y acabado brillante coinciden con el checkpoint |
| 2 | Calota base blanca completa | ✅ | Tríptico: blanco uniforme, sin tramos negros |
| 3 | Distribución rojo/azul de las alas según ilustración | ✅ | Tríptico: ala izq. azul / ala der. roja, coincide con IMAGEN 1 |
| 4 | Rendija central del mismo tamaño que el checkpoint | ❌ | Crop "zona-central-texto": el área negra se agrandó a forma de escudo/rombo, más ancha que la rendija real |
| 5 | Texto del logo legible y correcto | ❌ | Crop "zona-central-texto": dice "EDGE MELAIS", texto corrupto |
| 6 | Grilla inferior con el mismo contraste real | ⚠️ | Tríptico: se ve más clara/plateada que el negro mate marcado del checkpoint |
| 7 | Ángulo, encuadre, proporciones | ✅ | Tríptico: coincide con la IMAGEN 2 |

Prompt de corrección dirigida → **Instancia 8.5-fix** (arriba en este documento).
Prompt de regeneración completa → **Instancia 8.5-v2** (arriba en este documento).
