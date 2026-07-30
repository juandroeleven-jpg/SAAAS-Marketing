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

### Auditoría con evidencia visual real — Instancia 8.2 (30/07/2026)

Archivos en `resultados/`:
- `8.2-TRIPTICO.png` — checkpoint real / ilustración / resultado, lado a lado.
- `8.2-CROP-alas-y-rendija-central.png` — zoom de la zona de alas y rendija central.
- `8.2-amarillo-azul-ILUSTRACION.webp`, `8.2-amarillo-azul-RESULTADO.webp`.

```
AUDITORÍA — Instancia 8.2 — amarillo/azul — trasera

Insumos comparados:
- Resultado generado: casco vista trasera (recibido)
- IMAGEN 2 (foto real, autoridad de forma): checkpoint trasero negro
  mate

Hallazgo previo a la checklist: el archivo "resultado" es BYTE POR
BYTE IDÉNTICO al checkpoint de entrada (mismo hash MD5:
ca0d7960a62d8c64d80d37316af3dda5). No es una foto nueva ligeramente
fallida — es la IMAGEN 2 devuelta sin ningún procesamiento.

1. ¿Las dos alas mantienen la FORMA exacta de la IMAGEN 2, con sus
   ranuras/aletas y su acabado brillante?
   → ✅ CUMPLE (trivialmente: es la misma foto, no hubo generación).
2. ¿Las alas quedaron AMARILLAS con el detalle azul, dentro de sus
   límites reales, sin invadir la calota?
   → ❌ NO CUMPLE. Las alas siguen negro/gunmetal — cero color
   aplicado.
3. ¿La calota base sigue negra/gunmetal, sin tramos del color viejo
   donde no corresponde?
   → ✅ CUMPLE (trivial, sin cambios) — pero irrelevante, no hubo
   traducción de color.
4. ¿La rendija central y la grilla inferior quedaron intactas?
   → ✅ CUMPLE (trivial, sin cambios).
5. ¿El logo/wordmark EDGE (si aplica) quedó sobre la superficie sin
   deformar nada debajo?
   → ❌ NO EVALUABLE. No se aplicó ningún gráfico de la ilustración
   (ni escudo central rediseñado, ni wordmark lateral).
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
   → ✅ CUMPLE (trivial, es la misma imagen).

Veredicto: RECHAZADO POR AUSENCIA DE RESULTADO — REINTENTAR. Mismo
patrón de fallo ya documentado en el primer intento de la Instancia
8.5 (herramienta devuelve la imagen de entrada sin generar). No es un
defecto de precisión del prompt — el prompt nunca llegó a aplicarse.
Confirma lo que reportó el usuario: "no cumplió en nada excepto
mantener el casco original", porque literalmente no hubo generación.
```

**Opción A — Reintento simple:** correr la Instancia 8.2 tal cual está arriba, sin tocar el texto. Es la causa más probable (fallo silencioso puntual de la herramienta), igual que en 8.5.

**Opción B — Instancia 8.2-v2, si el reintento simple vuelve a fallar en silencio:**

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

REQUISITO NO NEGOCIABLE DE LA TAREA:
Esta tarea EXIGE generar una imagen fotorrealista NUEVA, con la
geometría de la IMAGEN 2 y el color/diseño de la IMAGEN 1 aplicado
sobre esa geometría. Devolver la IMAGEN 1, la IMAGEN 2, o cualquiera
de las dos sin modificar NO es un resultado válido — equivale a no
completar la tarea. Si no es posible generar el cambio, no se
devuelve ninguna imagen: se indica explícitamente que no se pudo
generar. Nunca se entrega una imagen de entrada como si fuera el
resultado.

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
   dibujo, sin alterar la forma de nada debajo. Si el texto no puede
   reproducirse legible letra por letra, se omite antes que dejarlo
   corrupto.

COBERTURA Y LÍMITES:
El amarillo cubre TODA la superficie de cada ala, sin dejar tramos
del color viejo. El límite entre el amarillo de las alas y el negro
de la calota es nítido y sigue el borde físico real de cada ala.

PROHIBIDO ABSOLUTO:
- Prohibido devolver la IMAGEN 1 o la IMAGEN 2 sin modificar como si
  fuera el resultado.
- Prohibido que la ilustración cambie la forma de las alas, la
  rendija central o la grilla inferior.
- Prohibido inventar piezas que no estén en la foto real.
- Prohibido que el color se salga de los límites reales de cada ala.
- Prohibido cambiar el acabado (brillante en las alas, mate en el
  resto).
- Prohibido cambiar el ángulo, el encuadre o el fondo respecto a la
  foto real.

VERIFICACIÓN FINAL — AUDITORÍA CON ZOOM, ELEMENTO POR ELEMENTO:
1. ¿El resultado es una imagen fotorrealista NUEVA, distinta en
   color de ambas imágenes de entrada?
2. ¿Las dos alas mantienen la FORMA exacta de la IMAGEN 2, con sus
   ranuras/aletas y su acabado brillante?
3. ¿Las alas quedaron AMARILLAS con el detalle azul, dentro de sus
   límites reales, sin invadir la calota?
4. ¿La calota base sigue negra/gunmetal, sin tramos del color viejo
   donde no corresponde?
5. ¿La rendija central y la grilla inferior quedaron intactas?
6. ¿El logo/wordmark EDGE (si aplica) quedó sobre la superficie sin
   deformar nada debajo, o fue omitido si no salía legible?
7. ¿El ángulo, el encuadre y las proporciones coinciden con la
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

### Auditoría con evidencia visual real — Instancia 8.3 (30/07/2026)

Archivos en `resultados/`: `8.3-TRIPTICO.png`, `8.3-CROP-alas-extension-hacia-arriba.png`, `8.3-CROP-rendija-central.png`, `8.3-CROP-grilla-inferior-y-logos.png`, `8.3-rosa-violeta-ILUSTRACION.webp`, `8.3-rosa-violeta-RESULTADO.webp`.

```
AUDITORÍA — Instancia 8.3 — rosa/violeta — trasera

1. ¿Las dos alas mantienen la FORMA exacta de la IMAGEN 2, con sus
   ranuras y su acabado brillante?
   → ❌ NO CUMPLE. El color rosa no se limitó a la pieza real del
   ala: subió en dos puntas afiladas tipo "llama" hacia la parte
   alta de la calota, una zona que en la foto real es domo liso sin
   ninguna pieza física. Se copió el contorno libre de la
   ILUSTRACIÓN (que ya de por sí dibuja una forma tipo murciélago
   mucho más alta que el ala real) en vez de limitarse al borde
   físico de la IMAGEN 2.
2. ¿Las alas quedaron ROSA/MAGENTA con el detalle violeta, dentro de
   sus límites reales?
   → ⚠️ PARCIAL. El tono rosa/magenta y el acento violeta sí están
   bien tomados de la ilustración, pero NO se respetó "dentro de sus
   límites reales" — se salen del ala hacia arriba (ver punto 1).
3. ¿La calota base sigue negra/gunmetal donde corresponde?
   → ❌ NO CUMPLE en la zona superior: la calota perdió superficie
   negra donde debería quedar lisa, invadida por las puntas rosa. Sí
   se mantiene negra en el resto (laterales, zona baja).
4. ¿La rendija central y la grilla inferior quedaron intactas?
   → ✅ CUMPLE. La rendija horizontal central se conserva como
   franja negra separando las dos alas, y la grilla/nervaduras del
   borde inferior están intactas, igual que en la IMAGEN 2 (crop
   "grilla-inferior-y-logos").
5. ¿El logo/wordmark EDGE quedó sobre la superficie sin deformar
   nada debajo?
   → ✅ CUMPLE. "EDGE PRO", el escudo central y el wordmark "EDGE"
   de ambos lados están legibles y bien ubicados, sin deformar la
   calota.
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
   → ✅ CUMPLE.

Defecto único pero significativo: el color de las alas se extendió
por fuera del límite físico real, tomando la forma libre y más alta
de la ilustración en vez del borde real del ala — exactamente el
modo de fallo que el prompt ya prohibía ("dentro de los límites
físicos reales de cada ala") pero no logró evitar en la práctica.

Veredicto: RECHAZADO — CORRECCIÓN DIRIGIDA (un solo defecto
concreto y localizado: recortar el color al borde real del ala; el
resto — colorway, logos, rendija, grilla, encuadre — ya está bien).
```

---

## Instancia 8.3-fix — Recorte del color al borde real del ala

**Se adjuntan DOS imágenes, en este orden:** (1) el resultado ya generado (rosa/violeta, con el color extendido hacia la calota), (2) la foto real trasera (autoridad de forma, para el borde exacto del ala).

```
Esto es una CORRECCIÓN DIRIGIDA sobre un resultado ya bueno, no una
imagen nueva. Recibís DOS imágenes:

- IMAGEN 1 — EL RESULTADO YA GENERADO (casco rosa/violeta, trasera):
  es la BASE. El tono rosa/magenta, el acento violeta, los logos
  EDGE, la rendija central y la grilla inferior están BIEN y quedan
  tal cual — se corrige un solo punto.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (checkpoint trasero negro mate):
  es la AUTORIDAD DE FORMA para el borde exacto de cada ala.

HAY UNA SOLA CORRECCIÓN:

El color rosa/violeta invade la calota por encima de cada ala,
formando dos puntas afiladas hacia arriba que no existen como pieza
física en la IMAGEN 2 — esa zona alta de la calota es domo liso.
Se recorta el rosa/violeta exactamente al borde real de cada ala tal
como lo muestra la IMAGEN 2 (la pieza física brillante, no más
arriba). Todo lo que quede por fuera de ese borde vuelve a ser
NEGRO/gunmetal mate, igual que el resto de la calota.

TODO LO DEMÁS NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ EN LA
IMAGEN 1:
- El tono rosa/magenta y el acento violeta dentro del ala.
- Los logos "EDGE PRO", el escudo central "EDGE" y el wordmark
  "EDGE" de cada lado.
- La rendija central, la grilla inferior, el ángulo y el encuadre.

PROHIBIDO ABSOLUTO:
- Prohibido dejar rosa o violeta por encima del borde real del ala.
- Prohibido cambiar el tono de rosa/violeta ya aplicado dentro del
  ala.
- Prohibido tocar los logos, la rendija central o la grilla
  inferior.
- Prohibido cambiar el ángulo, el encuadre o la iluminación.

VERIFICACIÓN FINAL:
1. ¿El rosa/violeta queda exactamente dentro del borde físico del
   ala de la IMAGEN 2, sin puntas hacia la calota?
2. ¿La calota por encima de cada ala volvió a quedar negra/gunmetal
   lisa?
3. ¿El tono rosa/violeta, los logos, la rendija y la grilla siguen
   iguales que en la IMAGEN 1?
```

## Instancia 8.3-v2 — Trasera rosa/violeta, REHECHA DE CERO (límite del ala blindado)

**Se adjuntan DOS imágenes, en este orden:** (1) la ilustración trasera rosa/violeta, (2) la foto real trasera del casco.

```
Esto es una TRADUCCIÓN DE ILUSTRACIÓN A FOTO REAL, no un casco
nuevo. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ILUSTRACIÓN (mockup vectorial rosa/violeta, vista
  trasera): es la AUTORIDAD DE COLOR — de qué color son las alas y
  qué acento llevan. La FORMA que dibuja el mockup para las alas es
  más alta y puntiaguda que la pieza real: esa forma se IGNORA.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (vista trasera, negro mate): es
  la ÚNICA AUTORIDAD DE FORMA, sin excepción, incluida la forma del
  ala.

REGLA DURA DEL LÍMITE DEL ALA (la causa del fallo anterior):
La IMAGEN 1 dibuja el color de las alas como una silueta libre tipo
"llama"/"murciélago" que sube alto hacia la parte superior de la
calota. ESA SILUETA NO SE COPIA. El único límite válido para el
color es el borde físico real del ala que se ve en la IMAGEN 2: la
pieza brillante baja, con sus ranuras, que NO llega a la parte alta
del domo. Si al mirar la IMAGEN 2 el ala termina en cierto punto,
el color termina exactamente ahí — nunca más arriba, aunque la
ilustración lo dibuje más arriba. Por encima de ese borde, la calota
queda negro/gunmetal mate liso, sin ningún tramo de color.

GEOMETRÍA — TODO ESTO VIENE DE LA IMAGEN 2, SIN EXCEPCIÓN:
- La silueta trasera completa del casco: dome redondeado, mismas
  proporciones.
- Las DOS piezas tipo ALA/SPOILER simétricas de la parte alta: misma
  forma, mismo tamaño, misma posición, con sus ranuras/aletas finas
  en el borde inferior externo. Piezas físicas reales — el color
  nunca sube por encima de su borde real (ver regla dura arriba).
- La rendija horizontal oscura entre ambas alas, en el centro.
- El borde inferior con sus nervaduras/rejillas verticales.
- El acabado: calota base MATE/gunmetal; alas con acabado más
  BRILLANTE — esa diferencia se mantiene.

COLOR Y DISEÑO — ESTO VIENE DE LA IMAGEN 1, APLICADO DENTRO DE LOS
LÍMITES REALES:
1. LAS DOS ALAS: pasan a ROSA/MAGENTA con un detalle/acento VIOLETA
   según el trazado de la ilustración, dentro de los límites físicos
   reales de cada ala — nunca del contorno libre del dibujo. Mantienen
   su acabado brillante.
2. LA CALOTA BASE (incluida toda la zona por encima de las alas):
   sigue NEGRA/gunmetal mate, salvo donde vaya logo o texto.
3. El escudo/logo "EDGE" del centro y el wordmark "EDGE" de cada
   lado: sobre la superficie de la calota, en la posición relativa
   del dibujo, sin alterar la forma debajo.

COBERTURA Y LÍMITES:
El rosa/violeta cubre TODA la superficie de cada ala, sin tramos del
color viejo, y NUNCA sube más arriba del borde real del ala. El
límite con la calota negra es nítido y sigue el borde físico real,
no el dibujo.

PROHIBIDO ABSOLUTO:
- Prohibido que el color rosa/violeta suba por encima del borde real
  del ala, aunque la ilustración lo dibuje más arriba.
- Prohibido cambiar la forma de las alas, la rendija central o la
  grilla inferior.
- Prohibido inventar piezas que no estén en la foto real.
- Prohibido cambiar el acabado (brillante/mate).
- Prohibido cambiar el ángulo, el encuadre o el fondo.

VERIFICACIÓN FINAL:
1. ¿El rosa/violeta queda exactamente dentro del borde físico real
   del ala de la IMAGEN 2, sin puntas ni extensiones hacia la
   calota?
2. ¿La calota por encima y alrededor de cada ala quedó negra/gunmetal
   mate lisa, sin ningún tramo de color?
3. ¿Las alas mantienen la FORMA exacta de la IMAGEN 2, con sus
   ranuras y su acabado brillante?
4. ¿La rendija central y la grilla inferior quedaron intactas?
5. ¿El logo/wordmark EDGE quedó sobre la superficie sin deformar
   nada debajo?
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
```

### Auditoría con evidencia visual real — Instancia 8.3-v2, resultado real (30/07/2026)

El usuario corrió la Instancia 8.3-v2 y mandó el resultado real. Archivos en `resultados/`: `8.3-v2-TRIPTICO.png`, `8.3-v2-CROP-borde-alas.png`, `8.3-v2-CROP-rendija-hexagono-central.png`, `8.3-v2-CROP-grilla-inferior-y-wordmarks.png`, `8.3-v2-rosa-violeta-RESULTADO.webp`.

```
AUDITORÍA — Instancia 8.3-v2 — rosa/violeta — trasera (segundo intento)

1. ¿El rosa/violeta queda exactamente dentro del borde físico real
   del ala, sin puntas hacia la calota?
   → ✅ CUMPLE. La regla dura del límite del ala funcionó: el rosa
   corta justo en el borde real del ala, sin la extensión tipo
   "llama" del intento anterior (crop "borde-alas").
2. ¿La calota por encima y alrededor de cada ala quedó negra/gunmetal
   mate lisa, sin ningún tramo de color?
   → ❌ NO CUMPLE. Apareció un panel violeta con forma de escudo/
   hexágono, con el logo "EDGE", pegado debajo de la rendija — en la
   IMAGEN 2 esa zona es calota lisa negra, sin ninguna pieza ni
   hueco para un panel de ese tamaño. Es el mismo modo de fallo que
   ya se corrigió en las alas (copiar el contorno libre de la
   ilustración) pero esta vez aplicado al emblema central en vez de
   a las alas.
3. ¿Las alas mantienen la FORMA exacta, con ranuras y acabado
   brillante?
   → ✅ CUMPLE (crop "borde-alas" y "grilla-inferior-y-wordmarks").
4. ¿La rendija central y la grilla inferior quedaron intactas?
   → ⚠️ PARCIAL. La rendija en sí (la franja negra horizontal) SÍ
   coincide con la IMAGEN 2. La grilla inferior también está
   intacta. El problema es lo que se agregó JUSTO DEBAJO de la
   rendija (el panel violeta, ver punto 2).
5. ¿El logo/wordmark EDGE quedó sobre la superficie sin deformar
   nada debajo?
   → ✅ CUMPLE en cuanto a legibilidad: "EDGE PRO" y "EDGE" de cada
   lado están correctos. El logo central es legible, pero está
   montado sobre el panel inventado del punto 2.
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
   → ✅ CUMPLE.

Balance: la corrección del límite del ala funcionó perfecto. Quedó
un solo defecto nuevo, acotado: el panel/escudo violeta central es
más grande que cualquier superficie real disponible ahí y no debería
existir como forma propia — el logo va directo sobre la calota
negra, sin panel de color detrás.

Veredicto: RECHAZADO — CORRECCIÓN DIRIGIDA (un solo defecto
localizado, el resto ya quedó bien).
```

## Instancia 8.3-v2-fix — Quitar el panel violeta inventado del centro

**Se adjuntan DOS imágenes, en este orden:** (1) el resultado ya generado (rosa/violeta, con el panel violeta debajo de la rendija), (2) la foto real trasera (autoridad de forma).

```
Esto es una CORRECCIÓN DIRIGIDA sobre un resultado ya bueno, no una
imagen nueva. Recibís DOS imágenes:

- IMAGEN 1 — EL RESULTADO YA GENERADO (casco rosa/violeta, trasera):
  es la BASE. El rosa/violeta de las alas (ya bien recortado a su
  borde real), los wordmarks "EDGE PRO"/"EDGE" de los costados, la
  rendija central y la grilla inferior están BIEN y quedan tal cual.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (checkpoint trasero negro mate):
  es la AUTORIDAD DE FORMA. Debajo de la rendija central, la IMAGEN 2
  muestra calota lisa negra, sin ninguna pieza ni panel.

HAY UNA SOLA CORRECCIÓN:

Se elimina el panel violeta con forma de escudo/hexágono que aparece
debajo de la rendija central. Esa zona vuelve a ser calota negra/
gunmetal mate lisa, igual que en la IMAGEN 2 — sin ningún panel de
color de fondo. El escudo/logo "EDGE" se conserva, pero se aplica
directo sobre la superficie negra de la calota, en tamaño pequeño
(comparable al tamaño de los otros logos "EDGE" de los costados),
sin ningún panel violeta ni forma geométrica de fondo detrás.

TODO LO DEMÁS NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ EN LA
IMAGEN 1:
- El rosa/violeta de las alas, ya recortado a su borde real.
- Los wordmarks "EDGE PRO" y "EDGE" de los costados.
- La rendija central, la grilla inferior, el ángulo y el encuadre.

PROHIBIDO ABSOLUTO:
- Prohibido dejar cualquier panel, escudo o forma de color de fondo
  detrás del logo central.
- Prohibido agrandar el logo central más allá del tamaño de los
  logos "EDGE" de los costados.
- Prohibido tocar el rosa/violeta de las alas, los wordmarks
  laterales, la rendija o la grilla.
- Prohibido cambiar el ángulo, el encuadre o la iluminación.

VERIFICACIÓN FINAL:
1. ¿Desapareció por completo el panel violeta de debajo de la
   rendija?
2. ¿Esa zona volvió a ser calota negra/gunmetal mate lisa?
3. ¿El logo "EDGE" central quedó chico, directo sobre el negro, sin
   panel de fondo?
4. ¿Las alas, los wordmarks laterales, la rendija y la grilla siguen
   iguales que en la IMAGEN 1?
```

## Instancia 8.3-v3 — Trasera rosa/violeta, REHECHA DE CERO (límite del ala Y tamaño del emblema central blindados)

**Se adjuntan DOS imágenes, en este orden:** (1) la ilustración trasera rosa/violeta, (2) la foto real trasera del casco.

```
Esto es una TRADUCCIÓN DE ILUSTRACIÓN A FOTO REAL, no un casco
nuevo. Recibís DOS imágenes con roles distintos y NO
intercambiables:

- IMAGEN 1 — LA ILUSTRACIÓN (mockup vectorial rosa/violeta, vista
  trasera): es la AUTORIDAD DE COLOR — de qué color son las alas y
  el emblema central, y qué acento llevan. Las FORMAS que dibuja el
  mockup (tanto la silueta alta de las alas como el panel/escudo
  grande del emblema central) son más grandes que las piezas y
  superficies reales: esas formas libres se IGNORAN.
- IMAGEN 2 — LA FOTO REAL DEL CASCO (vista trasera, negro mate): es
  la ÚNICA AUTORIDAD DE FORMA, sin excepción — incluida la forma del
  ala y el hecho de que debajo de la rendija hay calota lisa, sin
  ningún panel ni hueco para un escudo.

REGLA DURA 1 — LÍMITE DEL ALA:
El único límite válido para el rosa/violeta de las alas es el borde
físico real del ala que se ve en la IMAGEN 2 (la pieza brillante con
ranuras). El color nunca sube por encima de ese borde, aunque la
ilustración lo dibuje más arriba. Por encima de ese borde, la calota
queda negro/gunmetal mate liso.

REGLA DURA 2 — TAMAÑO DEL EMBLEMA CENTRAL:
La ilustración dibuja, debajo de la franja central, un panel violeta
grande con forma de escudo/hexágono y el logo "EDGE" encima. ESE
PANEL NO SE COPIA — en la IMAGEN 2 esa zona es calota lisa negra sin
ninguna pieza física que lo sostenga. Se aplica SOLO el logo/escudo
"EDGE", chico (mismo tamaño que los logos "EDGE" de los costados),
directo sobre la superficie negra de la calota, sin ningún panel de
color de fondo, sin agrandar ni la rendija ni el área de alrededor.

GEOMETRÍA — TODO ESTO VIENE DE LA IMAGEN 2, SIN EXCEPCIÓN:
- La silueta trasera completa del casco: dome redondeado, mismas
  proporciones.
- Las DOS piezas tipo ALA/SPOILER simétricas de la parte alta: misma
  forma, mismo tamaño, misma posición, con sus ranuras/aletas finas
  en el borde inferior externo. El color nunca sube por encima de su
  borde real (regla dura 1).
- La rendija horizontal oscura entre ambas alas, en el centro.
- El borde inferior con sus nervaduras/rejillas verticales.
- El acabado: calota base MATE/gunmetal; alas con acabado más
  BRILLANTE — esa diferencia se mantiene.

COLOR Y DISEÑO — ESTO VIENE DE LA IMAGEN 1, APLICADO DENTRO DE LOS
LÍMITES REALES:
1. LAS DOS ALAS: pasan a ROSA/MAGENTA con un detalle/acento VIOLETA
   según el trazado de la ilustración, dentro de los límites físicos
   reales de cada ala (regla dura 1). Mantienen su acabado brillante.
2. LA CALOTA BASE (incluida toda la zona por encima, alrededor y
   debajo de las alas, y debajo de la rendija): sigue NEGRA/gunmetal
   mate lisa, salvo el logo chico permitido por la regla dura 2.
3. El escudo/logo "EDGE" del centro (chico, sin panel de fondo — ver
   regla dura 2) y el wordmark "EDGE" de cada lado: sobre la
   superficie de la calota, sin alterar la forma debajo.

COBERTURA Y LÍMITES:
El rosa/violeta cubre TODA la superficie de cada ala, sin tramos del
color viejo, y NUNCA sube más arriba del borde real del ala. El
emblema central nunca lleva panel de fondo. El límite con la calota
negra es nítido y sigue el borde físico real, no el dibujo.

PROHIBIDO ABSOLUTO:
- Prohibido que el color rosa/violeta suba por encima del borde real
  del ala, aunque la ilustración lo dibuje más arriba.
- Prohibido cualquier panel, escudo o forma de color de fondo detrás
  del logo central — el logo va directo sobre el negro.
- Prohibido agrandar el logo central más allá del tamaño de los
  logos "EDGE" de los costados.
- Prohibido cambiar la forma de las alas, la rendija central o la
  grilla inferior.
- Prohibido inventar piezas que no estén en la foto real.
- Prohibido cambiar el acabado (brillante/mate).
- Prohibido cambiar el ángulo, el encuadre o el fondo.

VERIFICACIÓN FINAL:
1. ¿El rosa/violeta queda exactamente dentro del borde físico real
   del ala, sin puntas ni extensiones hacia la calota?
2. ¿La calota alrededor de las alas Y debajo de la rendija quedó
   negra/gunmetal mate lisa, sin ningún panel de color?
3. ¿Las alas mantienen la FORMA exacta, con ranuras y acabado
   brillante?
4. ¿La rendija central y la grilla inferior quedaron intactas, sin
   ningún panel agregado debajo?
5. ¿El logo "EDGE" central quedó chico, directo sobre el negro, sin
   panel de fondo, del mismo tamaño que los logos de los costados?
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

### Auditoría con evidencia visual real — Instancia 8.4 (30/07/2026)

Archivos en `resultados/`: `8.4-TRIPTICO.png`, `8.4-CROP-alas-y-rendija-central.png`, `8.4-CROP-borde-superior-ala-izquierda.png`, `8.4-CROP-aletas-ala-derecha.png`, `8.4-CROP-rendija-central-zoom2.png`, `8.4-CROP-grilla-inferior-y-logos.png`, `8.4-rojo-gris-ILUSTRACION.png`, `8.4-rojo-gris-RESULTADO.webp`.

```
AUDITORÍA — Instancia 8.4 — rojo/gris — trasera

1. ¿Las dos alas mantienen la FORMA exacta de la IMAGEN 2, con sus
   ranuras y su acabado brillante?
   → ✅ CUMPLE. En los dos bordes superiores (crops
   "borde-superior-ala-izquierda" y "aletas-ala-derecha") el corte
   entre ala y calota sigue exactamente el contorno real, sin la
   fuga tipo "llama" hacia el domo que tuvo la Instancia 8.3. Las
   aletas/ranuras finas del borde inferior externo de cada ala están
   presentes en ambos lados, en la misma posición que en el
   checkpoint, y el acabado brillante (reflejos definidos) contrasta
   con el mate de la calota igual que en la foto real.
2. ¿Las alas quedaron ROJAS con el detalle gris, dentro de sus
   límites reales?
   → ✅ CUMPLE. El rojo cubre toda la superficie de cada ala sin
   fugarse hacia la calota, y aparece un acento gris horizontal que
   replica fielmente la franja gris que bordea el "swoosh" central
   de la IMAGEN 1 (ver zoom de la ilustración) — no es una invención,
   es lectura correcta del trazado de color de la ilustración.
3. ¿La calota base sigue negra/gunmetal donde corresponde?
   → ✅ CUMPLE. El domo y los laterales de la calota se mantienen
   negros en el tríptico y en los crops de borde de ala, sin ningún
   tramo rojo o gris fuera de las alas.
4. ¿La rendija central y la grilla inferior quedaron intactas?
   → ✅ CUMPLE. El tab/botón rectangular negro del centro (bajo la
   rendija) sigue presente sin cambios (crop "rendija-central-zoom2"),
   y el punto de encuentro de las dos alas se conserva. La franja
   gris que cruza esa zona es más ancha que el sutil brillo de la
   foto real, pero corresponde al acento gris que la propia
   ilustración dibuja ahí (línea gris bordeando el swoosh negro
   central) — no es una pieza inventada ni una deformación de la
   rendija. La grilla/nervaduras del borde inferior están intactas
   (crop "grilla-inferior-y-logos").
5. ¿El logo/wordmark EDGE quedó coherente con el colorway rojo/gris
   de la Instancia 8.1?
   → ✅ CUMPLE. El escudo central pasó a rojo/gris (borde rojo,
   texto "EDGE" en gris/plata sobre fondo oscuro) en vez del
   negro/blanco de la foto original, y los wordmarks "EDGE"/"PRO" de
   ambos costados se mantienen legibles y bien ubicados, sin
   deformar la calota debajo.
6. ¿El ángulo, el encuadre y las proporciones coinciden con la
   IMAGEN 2?
   → ✅ CUMPLE.

Sin defectos localizados: los 6 ítems del checklist cumplen. A
diferencia de la Instancia 8.3, acá no hubo fuga de color hacia el
domo ni piezas inventadas — el límite del ala se respetó de punta a
punta en ambos lados, y el único elemento que podría llamar la
atención (la franja gris ancha sobre la rendija) es una lectura
fiel del acento gris que la ilustración ya especifica ahí, no un
error de generación.

Veredicto: APROBADO. No se requieren -fix ni -v2.
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
