# Simulación 31 — Casco jet arte Bob Esponja: visor ahumado → transparente + quitar "el palo" que se ve dentro del visor (edición puntual, 2 cambios integrados)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md) · [← Caso hermano: Simulación 6a Bob Esponja](simulacion-6a-bob-esponja.md)

**Por qué es un archivo nuevo y no un bloque dentro de la Simulación 6a:** el arte del casco es del mismo universo gráfico (grafiti tipo Bob Esponja sobre molde abierto/jet), pero **el caso es de otro tipo**. La 6a es una **auditoría de Etapa 1** (molde blanco vs. resultado con el diseño aplicado, comparación contra el PDF hero, decisión de cuál trasera es la buena) y no tiene un solo prompt de edición registrado. Esto de acá es una **edición puntual sobre una foto de producto ya terminada y aprobada por el usuario**, con dos cambios acotados y un problema técnico propio (revelar el interior del casco al destintar el visor). Además, la imagen de partida **no coincide con ninguna de las 9 imágenes inventariadas en la 6a**: trae fondo de plantilla con formas geométricas grises tenues y una guía de maquetación punteada pegada encima, que no aparecen en aquel set. Se registra acá y se enlaza en las dos direcciones.

---

## Contexto y pedido

El usuario mandó **una sola imagen** y pidió, textualmente: *"que el visor quede más transparente y quitarle el palo, solo quería eso, pero que no invente ni cambie nada"*.

**Tipo de prompt:** **A** (edición puntual sobre resultado aprobado) con un componente de **D** (limpieza de producto: quitar un elemento que sobra en la imagen). No es regeneración — aplica el ítem ya registrado del checklist Tipo A: *"Ajuste puntual sobre un resultado ya aprobado = edición, no regeneración completa"*.

### La imagen de partida (descrita, todavía sin subir como adjunto)

Foto de producto, **vista frontal**, casco **open face / tipo jet** (sin mentonera), sobre fondo blanco/gris muy claro.

| Elemento | Descripción |
|---|---|
| **Calota** | Amarillo lima brillante, con arte tipo **grafiti / cartoon estilo Bob Esponja**: un personaje amarillo con un ojo saltón enorme y una boca abierta con lengua roja ocupando la parte alta y central; a los costados, formas rosas, celestes y azules, salpicaduras y elementos tipo skate. El arte llega hasta los bordes laterales de la calota. |
| **Visor** | Grande, de una sola pieza, curvo, cubre todo el frente desde la altura de la ceja hasta debajo del mentón. **Hoy está OSCURO / AHUMADO (tintado)**: no se ve nada del interior, se lee como una superficie negra translúcida con reflejos blancos de estudio en la parte baja. |
| **Piezas negras** | Mecanismo de pivote a cada lado, y en la base la correa con un detalle rojo del lado derecho. |
| **Fondo** | Blanco/gris claro liso, con **formas geométricas grises angulares muy tenues** en las esquinas (arriba izquierda, medio izquierda, abajo derecha) — son decoración de plantilla, parte del fondo, **no se tocan**. |
| **"El palo"** | ✅ **Confirmado por el usuario (2026-07-29):** *"el palo es lo que se ve dentro del visor del casco."* Es un **elemento con forma de vara / palo que se ve DENTRO del visor**, o sea en la zona que queda visible **a través** de la superficie del visor. No es una pieza del casco, no es parte del arte de la calota y no es parte del fondo. |
| Guía punteada de maquetación | Cruzando la imagen de **arriba abajo**, en el sector **derecho**, una **línea vertical de puntos/guiones blanca**. Es una guía de maquetación que quedó pegada en la imagen. **No es "el palo"** y **no forma parte de esta edición**: queda como está. Si más adelante se la quiere sacar, es un pedido aparte. |

### Los 2 cambios pedidos

1. **El visor pasa de ahumado/tintado a transparente.**
2. **Se elimina el elemento con forma de vara que se ve DENTRO del visor.**

Nada más. El usuario fue explícito: *"que no invente ni cambie nada"*.

---

## ✅ Ambigüedad de "el palo" — CERRADA (2026-07-29, confirmada por el usuario)

**Respuesta textual del usuario:** *"el palo es lo que se ve dentro del visor del casco."*

**Queda descartada** la lectura que se había usado para armar la primera versión del prompt —la **línea vertical punteada de maquetación** del sector derecho—. Esa guía **no es "el palo"** y no se toca.

**Lectura confirmada:** hay que eliminar un **objeto con forma de vara / palo** que se ve **dentro del visor**, es decir en la zona del casco que queda visible a través de él.

### 🔎 Hallazgo de método — la ambigüedad se resolvió sola al INTEGRAR los dos cambios, en vez de tratarlos por separado

Los dos cambios del pedido **no eran independientes, y ahí estaba la respuesta**:

- El **Cambio 1** vuelve el visor de ahumado a transparente. Como al destintarlo aparece una zona que la foto original nunca capturó, el prompt ya estaba obligado a **declarar en positivo qué se ve a través del visor**: interior de casco **vacío** —acolchado negro, calota interna en penumbra, abertura del mentón vacía— **y nada más**.
- El **Cambio 2** pide eliminar un objeto que está **exactamente en esa zona**.

O sea que **el palo es una de las cosas que ya no debían aparecer ahí**: la declaración positiva del Cambio 1 lo excluye por definición, junto con la cara, la cabeza, la persona y el maniquí. Los dos cambios se resuelven **en un solo bloque**, no en dos: el visor se vuelve transparente **y** lo que se ve detrás es el interior vacío declarado, sin ningún objeto con forma de vara. El palo se suma a la lista de prohibiciones de esa zona.

**Por qué esto es un argumento a favor de un método, y no solo una anécdota del caso:** si el prompt hubiera ido prohibiendo objeto por objeto en vez de **declarar el contenido de la zona en positivo**, la ambigüedad seguiría abierta — habría hecho falta saber exactamente qué objeto era para poder prohibirlo. Al declarar en positivo qué debe verse, **cualquier objeto que no esté en esa declaración queda excluido sin necesidad de nombrarlo**, incluido uno que no se sabía identificar. Es la misma lección que este archivo ya deja para el checklist Tipo A (*"cuando una edición destapa una zona hay que declarar en positivo qué se ve debajo, no alcanza con prohibir lo que no debe aparecer"*, ver el cierre del documento): **este caso la confirma con un beneficio que no se había anticipado — la declaración positiva también resuelve ambigüedades del pedido, no solo evita invenciones del generador.** No se registra como lección nueva porque el ítem ya existe; se referencia.

---

## El punto técnico del caso — qué se ve a través del visor

Este es el corazón del prompt y la razón por la que este caso deja lección nueva.

**Poner el visor transparente no es un recoloreo: es revelar contenido que en la imagen original no existe.** Hoy el visor es opaco y tapa todo lo que hay detrás. Al volverlo transparente aparece una zona que **hay que rellenar con algo**, y todo contenido nuevo es una invitación a que el generador invente. El riesgo concreto y muy probable es que **dibuje una cara, una cabeza o un maniquí adentro**, o que se invente un interior fantasioso.

Por eso el prompt **declara en positivo qué se ve a través del visor**, y no solo prohíbe lo que no debe aparecer. Lo que se ve es el **interior real de un casco jet vacío fotografiado de frente**:

- el **acolchado interior negro/gris oscuro**,
- la **superficie interna de la calota en penumbra**,
- la **abertura del mentón vacía** por abajo,
- y **nada más**: sin cabeza, sin cara, sin persona, sin maniquí, sin ojos **y sin ningún objeto con forma de vara o palo**.

Y el segundo blindaje: **el visor sigue existiendo como pieza física**. No se borra ni se quita. Se conservan su forma, su borde, su curvatura, su espesor, el brillo de su superficie y **los reflejos especulares de estudio** que tiene hoy en la parte baja — un visor de policarbonato transparente sigue teniendo reflejos, no es un agujero. Pasar de ahumado a transparente es un **cambio de opacidad del material**, no la eliminación de la pieza.

**Y acá es donde los dos cambios se cruzan, que es la clave del caso:** el objeto a eliminar (Cambio 2) está **dentro de esa misma zona**. Por eso los dos cambios **no se tratan por separado**: el visor se vuelve transparente **y** lo que queda detrás es el interior vacío declarado arriba, sin ningún objeto con forma de vara. El palo no necesita un bloque de borrado propio con reconstrucción por tramos — necesita estar en la **lista de cosas que no existen en esa zona**, junto a la cara, la cabeza, la persona y el maniquí. La declaración positiva del Cambio 1 hace el trabajo del Cambio 2.

*(La lección de que **un borrado son dos tareas** —eliminar sin dejar resto y reconstruir lo que hay debajo— sigue vigente para el catálogo, pero acá **no aplica como bloque separado**: lo que va debajo del palo ya está declarado en positivo como parte del Cambio 1, así que no hay un "debajo" que reconstruir aparte.)*

---

<details><summary>Prompt — Edición puntual: visor transparente + quitar el palo que se ve dentro del visor (2 cambios integrados)</summary>

```
Esto es una EDICIÓN PUNTUAL sobre la imagen adjunta, NO una
generación nueva desde cero. La imagen adjunta es una foto de
producto YA APROBADA: su casco, su arte, su ángulo, su fondo y su
iluminación están bien tal cual están. Se devuelve la MISMA imagen,
IDÉNTICA, salvo por DOS cambios puntuales. Ninguna otra línea,
forma, textura, color ni detalle cambia en ninguna parte de la
imagen. No inventes nada, no agregues nada, no rediseñes nada.

TODO ESTO NO SE TOCA — QUEDA PIXEL POR PIXEL IGUAL:
- El arte grafiti completo de la calota: el personaje amarillo tipo
  cartoon, su ojo saltón enorme, su boca abierta con la lengua
  roja, las formas rosas, celestes y azules de los costados, las
  salpicaduras y los elementos tipo skate. CADA TRAZO EN SU
  POSICIÓN EXACTA, con su mismo grosor, su mismo color y su mismo
  recorrido. No lo redibujes, no lo simplifiques, no lo
  reinterpretes, no lo "limpies" y no lo vuelvas a colorear.
- La forma y la silueta del casco: es un casco abierto tipo jet,
  sin mentonera, mismo molde, mismas proporciones, misma curvatura.
- El amarillo lima brillante de la calota, con su mismo tono y su
  mismo brillo.
- Los mecanismos de pivote negros de los dos lados del visor.
- La correa de la base con su detalle rojo del lado derecho.
- El fondo blanco/gris claro, INCLUIDAS las formas geométricas
  grises angulares muy tenues de las esquinas (arriba a la
  izquierda, en el medio a la izquierda, abajo a la derecha): son
  parte del fondo de la plantilla y se conservan tal cual, con su
  misma posición y su misma transparencia.
- La LÍNEA VERTICAL DE PUNTOS / GUIONES BLANCA del sector derecho,
  que cruza la foto de arriba abajo: es una guía de maquetación y en
  esta edición NO SE TOCA. Se queda exactamente donde está, con su
  mismo recorrido, su mismo espaciado y su mismo color. No la borres,
  no la muevas, no la completes y no la reinterpretes.
- El ángulo de cámara, el encuadre y el recorte.
- La iluminación de estudio, las sombras suaves, los reflejos
  especulares y la microtextura del material. La imagen sigue
  siendo la MISMA FOTOGRAFÍA, con exactamente el mismo tratamiento
  fotográfico.

LOS DOS CAMBIOS VAN JUNTOS, NO SEPARADOS:
El CAMBIO 1 (el visor pasa de ahumado a transparente) y el CAMBIO 2
(eliminar el palo que se ve dentro del visor) ocurren en LA MISMA
ZONA de la imagen: la zona que queda visible a través del visor.
Se resuelven de una sola vez: el visor se vuelve transparente Y lo
que se ve detrás es el interior vacío del casco descrito abajo, en el
que NO hay ningún objeto con forma de vara. Leelos como una sola
instrucción sobre esa zona.

CAMBIO 1 — EL VISOR PASA DE AHUMADO A TRANSPARENTE:
El visor grande de una sola pieza que cubre todo el frente del
casco está hoy OSCURO / AHUMADO / TINTADO: tapa por completo lo que
hay detrás. Tiene que pasar a ser TRANSPARENTE, de policarbonato
claro, de modo que se vea a través de él.

QUÉ SE CONSERVA DEL VISOR (el visor NO se borra, sigue estando):
- Es la MISMA PIEZA FÍSICA: se conservan su forma exacta, su
  contorno, su borde, su curvatura, su espesor y su montaje en los
  pivotes.
- Se conserva el brillo de su superficie y se CONSERVAN LOS
  REFLEJOS ESPECULARES DE ESTUDIO que tiene hoy en la parte baja:
  un visor transparente sigue reflejando la luz, no es un agujero
  ni un hueco recortado.
- Lo ÚNICO que cambia es la OPACIDAD DEL MATERIAL: de translúcido
  oscuro a claro y transparente. No es un cambio de forma, ni de
  tamaño, ni de posición, ni de montaje.

QUÉ SE VE A TRAVÉS DEL VISOR (esto es obligatorio, declaralo así y
no de otra manera):
Se ve el INTERIOR REAL DE UN CASCO VACÍO, fotografiado de frente:
- el ACOLCHADO INTERIOR de espuma forrada, en NEGRO / GRIS MUY
  OSCURO, siguiendo el contorno interno del casco;
- la SUPERFICIE INTERNA DE LA CALOTA en penumbra, apenas
  insinuada, oscura y sin detalle;
- por abajo, la ABERTURA DEL MENTÓN VACÍA — se ve el hueco del
  casco, oscuro, sin nada adentro;
- y NADA MÁS. El interior es oscuro, neutro y poco contrastado: lo
  que se lee a través del visor es sobre todo penumbra, no una
  escena.

PROHIBIDO ABSOLUTO DENTRO DEL VISOR: NO dibujes una cabeza. NO
dibujes una cara. NO dibujes una persona, un piloto, un modelo ni
un maniquí. NO dibujes ojos, nariz, boca, piel, pelo, barba,
anteojos ni ninguna figura humana o animal. NO dibujes un rostro
"insinuado", ni una silueta, ni un reflejo con forma de cara. NO
dibujes NINGÚN OBJETO CON FORMA DE VARA, PALO, BASTÓN, TUBO, CAÑO,
BARRA, ANTENA, SOPORTE, MANGO NI POSTE, ni entero ni parcial, ni
vertical ni inclinado, ni en foco ni desenfocado (ver el CAMBIO 2).
NO inventes un interior fantasioso, ni pantallas, ni luces, ni
gráficos, ni electrónica, ni el arte grafiti repetido adentro. NO
dejes ver el fondo de la foto a través del casco como si fuera un
vidrio hueco. ES UN CASCO VACÍO EN UNA FOTO DE PRODUCTO: adentro
no hay nadie y no hay nada.

CAMBIO 2 — ELIMINAR "EL PALO" QUE SE VE DENTRO DEL VISOR:
En la imagen adjunta, DENTRO DEL VISOR —o sea en la zona del casco
que queda visible a través de la superficie del visor— se ve un
ELEMENTO CON FORMA DE VARA / PALO: un objeto alargado y angosto,
tipo barra, que NO es parte del casco, NO es parte de su interior y
NO es parte del arte de la calota. HAY QUE ELIMINARLO POR COMPLETO.

Este cambio NO es independiente del CAMBIO 1: es la MISMA ZONA. Ya
está declarado arriba, en positivo, qué tiene que verse a través del
visor —acolchado interior negro/gris oscuro, calota interna en
penumbra, abertura del mentón vacía y nada más—. EL PALO ES
JUSTAMENTE UNA DE LAS COSAS QUE NO ESTÁN EN ESA LISTA, así que su
eliminación se resuelve cumpliendo esa declaración: donde estaba el
palo va lo que corresponda de ese interior vacío, con su misma
penumbra, su mismo tono y su misma continuidad.

- NO tiene que quedar NINGÚN resto: ni un tramo, ni una punta, ni un
  fantasma, ni un halo, ni una sombra, ni un contorno, ni una
  diferencia de brillo donde estaba.
- Lo que queda en su lugar es INTERIOR DE CASCO VACÍO, continuo y
  sin costura, no un parche de color plano ni un objeto de reemplazo.
- COBERTURA COMPLETA: el palo desaparece DE PUNTA A PUNTA, en toda
  su extensión, incluida cualquier parte que asome cerca del borde
  del visor.
- Y NO lo reemplaces por otra cosa: ni por una cara, ni por una
  cabeza, ni por un maniquí, ni por otro objeto.

CRÍTICO — LAS ZONAS EDITADAS TAMPOCO SE REDIBUJAN:
Que una zona esté en la lista de cambios NO es permiso para
rehacerla. En el visor, lo ÚNICO que cambia es la opacidad del
material y la desaparición del palo: su forma, su borde, su
curvatura y sus reflejos siguen iguales. El arte grafiti de la
calota, el fondo y sus formas tenues NO forman parte de ningún
cambio y se conservan IDÉNTICOS. No se rediseña, no se simplifica y
no se reinterpreta nada.

PROHIBIDO ABSOLUTO — NO TOQUES NADA MÁS:
- No redibujes el arte grafiti de la calota ni ninguna de sus
  partes, ni completo ni por zonas.
- No simplifiques el arte: ni menos líneas, ni menos capas, ni
  formas "más limpias", ni salpicaduras eliminadas.
- No cambies NINGÚN color de la imagen.
- No muevas, no agregues y no elimines ningún elemento gráfico.
- No cambies la geometría, la silueta ni las proporciones del
  casco.
- No cambies el ángulo de cámara, el encuadre ni el fondo (las
  formas geométricas grises tenues del fondo se quedan donde
  están).
- No vuelvas a renderizar la iluminación: las luces, las sombras y
  los reflejos de la imagen adjunta se conservan tal cual.
- No conviertas la foto en una ilustración, un render 3D ni un
  mockup: sigue siendo la misma fotografía de producto.
- No agregues logos, texto, sellos, firmas ni marcas de agua.
- No borres el visor: el visor sigue estando como pieza física, se
  vuelve transparente pero NO desaparece.
- No borres, no muevas y no modifiques la línea vertical punteada de
  maquetación del sector derecho: esa NO es "el palo" y en esta
  edición no se toca.

VERIFICACIÓN FINAL ANTES DE ENTREGAR:
Compará tu resultado contra la imagen adjunta, al lado, y contestá:
1. ¿Se ve el INTERIOR VACÍO del casco a través del visor
   —acolchado oscuro, calota interna en penumbra, abertura del
   mentón vacía— sin NINGUNA cara, cabeza, persona, maniquí, ojo ni
   figura de ningún tipo adentro?
2. ¿El visor CONSERVA su forma, su contorno, su borde, su
   curvatura y sus reflejos especulares de estudio, y lo único que
   cambió fue que dejó de ser oscuro?
3. ¿DESAPARECIÓ POR COMPLETO el objeto con forma de VARA / PALO que
   se veía dentro del visor, de punta a punta, sin ningún tramo,
   punta, fantasma, halo ni sombra — y en su lugar quedó interior de
   casco vacío continuo, no un parche plano ni otro objeto?
4. ¿Sigue estando la línea vertical punteada del sector derecho,
   igual que en la imagen adjunta? (Esa NO se toca.)
5. ¿Algún trazo del arte grafiti cambió de forma, de posición, de
   grosor o de color? ¿Falta alguna salpicadura, alguna forma rosa
   o celeste, algún detalle chico?
Cualquier diferencia que no sean los 2 cambios pedidos es un
ERROR: corregila antes de entregar.
```

</details>

---

**Estado:** ✅ **prompt definitivo, sin bloqueos** — la interpretación de "el palo" quedó confirmada por el usuario el 2026-07-29 y el prompt ya está reescrito con ella. Solo falta correrlo.

**Qué hay que hacer:**
1. Correr el prompt como **edición** sobre la imagen adjunta (no como generación nueva), en sesión aislada.
2. Auditar el resultado con los 5 chequeos de la verificación final, prestando atención especial al riesgo #1 (cara/figura inventada dentro del visor), que es el modo de falla más probable de este caso, y al chequeo 3 (que el palo haya desaparecido de punta a punta).
3. Subir la imagen original como adjunto real para versionarla en `imagenes-bob-esponja/` (o en una carpeta propia de este caso) — hoy solo está descrita en texto.

---

**Última actualización:** 2026-07-29 · primer registro del caso. Deja lección nueva para el checklist Tipo A de `orquestacion-agentes-paralelos.md`: **hacer transparente algo opaco no es un cambio de color, es revelar contenido que no existe en la imagen de partida — cuando una edición destapa una zona hay que DECLARAR EN POSITIVO qué se ve debajo, no alcanza con prohibir lo que no debe aparecer.**

**2026-07-29 (segunda pasada — respuesta del usuario) —** quedó **confirmado qué es "el palo"**: *"el palo es lo que se ve dentro del visor del casco."* Se **descartó** la lectura de la línea vertical punteada de maquetación —que ahora queda explícitamente en la lista de lo que **no se toca**— y se **reescribió el `CAMBIO 2`**: lo que hay que eliminar es un **objeto con forma de vara / palo que se ve DENTRO del visor**. El caso sale de 🟡 y de 🔴 bloqueado: el prompt queda definitivo. **Lo interesante es cómo se resolvió:** el `CAMBIO 2` **no se trató por separado del `CAMBIO 1`**, porque los dos ocurren en la misma zona — el bloque `QUÉ SE VE A TRAVÉS DEL VISOR` ya declaraba en positivo que ahí va **interior de casco vacío y nada más**, así que el palo es **una de las cosas que esa declaración ya excluía**. Se lo sumó a la lista de prohibiciones de esa zona, junto a cara / cabeza / persona / maniquí, y los dos cambios quedaron integrados en una sola instrucción. **Hallazgo de método:** la ambigüedad del pedido **se resolvió sola al integrar los dos cambios** — un objeto que no se sabía identificar quedó excluido sin necesidad de nombrarlo, porque la zona estaba declarada en positivo. Es un argumento a favor de **declarar el contenido de una zona en positivo antes que ir prohibiendo objeto por objeto**, y **no se registra como lección nueva** porque el ítem de transparencia de este mismo archivo ya lo cubre: se referencia como un beneficio adicional de esa misma regla, que no se había anticipado.
