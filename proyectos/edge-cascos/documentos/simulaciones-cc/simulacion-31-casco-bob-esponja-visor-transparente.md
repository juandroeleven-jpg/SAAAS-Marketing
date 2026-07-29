# Simulación 31 — Casco jet arte Bob Esponja: visor ahumado → transparente + quitar la línea punteada (edición puntual, 2 cambios)

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
| **"El palo"** | Cruzando la imagen de **arriba abajo**, en el sector **derecho**, una **línea vertical de puntos/guiones blanca** que recorre toda la altura de la foto y pasa por encima del casco. Es una **guía de maquetación** que quedó pegada en la imagen — no es parte del casco ni del fondo. |

### Los 2 cambios pedidos

1. **El visor pasa de ahumado/tintado a transparente.**
2. **Se elimina la línea vertical punteada** ("el palo").

Nada más. El usuario fue explícito: *"que no invente ni cambie nada"*.

---

## 🟡 Nota de ambigüedad — qué es "el palo" (pendiente de confirmación del usuario)

**"El palo" es una descripción corta y no está confirmada.** La lectura que se usó para armar el prompt es la **línea vertical punteada del sector derecho**, porque es **lo único de la imagen con forma de palo que claramente NO pertenece al producto**: no es una pieza del casco, no es parte del arte grafiti y no es parte del fondo de plantilla — es una guía de maquetación pegada encima. Con esa lectura, el pedido "quitarle el palo" y el pedido "que no invente ni cambie nada" son coherentes entre sí: se saca algo que sobra, no se modifica el producto.

**Alternativa posible, no descartada:** que "el palo" sea **algún elemento con forma de vara dentro del arte grafiti de la calota** (una línea, un trazo alargado, un elemento tipo skate o similar). Si fuera eso, el prompt de abajo **no sirve tal cual** y hay que rehacer el Cambio 2 nombrando ese elemento concreto — y además dejaría de ser una limpieza de imagen para pasar a ser una **modificación del arte**, que es exactamente lo que el usuario dijo que no quería.

**Qué hay que preguntarle al usuario antes de dar el resultado por bueno:** *"cuando decís 'el palo', ¿te referís a la línea vertical de puntos blancos que cruza la foto de arriba abajo del lado derecho (una guía de maquetación que quedó pegada), o a algo dentro del dibujo del casco?"*. Mientras no esté contestado, este caso queda 🟡 **con interpretación pendiente**, no aprobado.

---

## El punto técnico del caso — qué se ve a través del visor

Este es el corazón del prompt y la razón por la que este caso deja lección nueva.

**Poner el visor transparente no es un recoloreo: es revelar contenido que en la imagen original no existe.** Hoy el visor es opaco y tapa todo lo que hay detrás. Al volverlo transparente aparece una zona que **hay que rellenar con algo**, y todo contenido nuevo es una invitación a que el generador invente. El riesgo concreto y muy probable es que **dibuje una cara, una cabeza o un maniquí adentro**, o que se invente un interior fantasioso.

Por eso el prompt **declara en positivo qué se ve a través del visor**, y no solo prohíbe lo que no debe aparecer. Lo que se ve es el **interior real de un casco jet vacío fotografiado de frente**:

- el **acolchado interior negro/gris oscuro**,
- la **superficie interna de la calota en penumbra**,
- la **abertura del mentón vacía** por abajo,
- y **nada más**: sin cabeza, sin cara, sin persona, sin maniquí, sin ojos.

Y el segundo blindaje: **el visor sigue existiendo como pieza física**. No se borra ni se quita. Se conservan su forma, su borde, su curvatura, su espesor, el brillo de su superficie y **los reflejos especulares de estudio** que tiene hoy en la parte baja — un visor de policarbonato transparente sigue teniendo reflejos, no es un agujero. Pasar de ahumado a transparente es un **cambio de opacidad del material**, no la eliminación de la pieza.

Para el Cambio 2 se aplica la lección ya registrada de que **un borrado son dos tareas**: eliminar sin dejar resto **y** reconstruir lo que hay debajo — que acá cambia según el tramo (fondo / calota con arte / visor), con **cobertura completa de punta a punta** de la línea.

---

<details><summary>Prompt — Edición puntual: visor transparente + quitar la línea punteada (2 cambios)</summary>

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
- El ángulo de cámara, el encuadre y el recorte.
- La iluminación de estudio, las sombras suaves, los reflejos
  especulares y la microtextura del material. La imagen sigue
  siendo la MISMA FOTOGRAFÍA, con exactamente el mismo tratamiento
  fotográfico.

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
inventes un interior fantasioso, ni pantallas, ni luces, ni
gráficos, ni electrónica, ni el arte grafiti repetido adentro. NO
dejes ver el fondo de la foto a través del casco como si fuera un
vidrio hueco. ES UN CASCO VACÍO EN UNA FOTO DE PRODUCTO: adentro
no hay nadie.

CAMBIO 2 — ELIMINAR LA LÍNEA VERTICAL PUNTEADA:
En el SECTOR DERECHO de la imagen hay una LÍNEA VERTICAL DE PUNTOS
/ GUIONES BLANCA que recorre TODA LA ALTURA de la foto, de arriba
abajo, y PASA POR ENCIMA DEL CASCO. Es una GUÍA DE MAQUETACIÓN que
quedó pegada en la imagen: no es parte del casco, no es parte del
arte y no es parte del fondo. Hay que ELIMINARLA POR COMPLETO.

Son DOS TAREAS, no una: (a) eliminar la línea sin dejar NINGÚN
resto —ni un guion suelto, ni un tramo, ni un fantasma, ni un halo,
ni una sombra, ni un contorno, ni una interrupción, ni una
diferencia de brillo donde estaba—; y (b) RECONSTRUIR LO QUE VA
DEBAJO, que cambia según el tramo:
- DONDE CRUZA EL FONDO: fondo blanco/gris claro liso y continuo,
  con su mismo degradé y su misma tonalidad, sin costura ni parche.
  Si en ese tramo el fondo tiene una de las formas geométricas
  grises tenues, esa forma se completa por debajo tal cual es.
- DONDE CRUZA EL CASCO: el arte grafiti y el amarillo lima de la
  calota CONTINÚAN por debajo, sin costura, sin parche y sin
  reinterpretación. Un trazo del dibujo que entra por un lado de
  la línea tiene que SALIR POR EL OTRO alineado, con el mismo
  grosor, el mismo color y el mismo recorrido, como si la línea
  nunca hubiera estado ahí.
- DONDE CRUZA EL VISOR: la superficie del visor continúa, con su
  mismo material, su mismo brillo y sus mismos reflejos.

COBERTURA COMPLETA: la línea desaparece DE PUNTA A PUNTA, en toda
su altura y en los tres tramos. No puede quedar un pedazo arriba,
ni un pedazo abajo, ni el tramo que cruza el casco, ni un guion
aislado en ninguna parte.

CRÍTICO — LAS ZONAS EDITADAS TAMPOCO SE REDIBUJAN:
Que una zona esté en la lista de cambios NO es permiso para
rehacerla. En la franja donde estaba la línea punteada, lo ÚNICO
que cambia es que la línea ya no está: todo el dibujo de esa franja
—el arte grafiti, sus colores, sus trazos, el fondo, sus formas
tenues— se conserva IDÉNTICO. Y en el visor, lo ÚNICO que cambia es
la opacidad del material: su forma, su borde y sus reflejos siguen
iguales. No se rediseña, no se simplifica y no se reinterpreta
nada.

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

VERIFICACIÓN FINAL ANTES DE ENTREGAR:
Compará tu resultado contra la imagen adjunta, al lado, y contestá:
1. ¿Se ve el INTERIOR VACÍO del casco a través del visor
   —acolchado oscuro, calota interna en penumbra, abertura del
   mentón vacía— sin NINGUNA cara, cabeza, persona, maniquí, ojo ni
   figura de ningún tipo adentro?
2. ¿El visor CONSERVA su forma, su contorno, su borde, su
   curvatura y sus reflejos especulares de estudio, y lo único que
   cambió fue que dejó de ser oscuro?
3. ¿La línea vertical punteada DESAPARECIÓ POR COMPLETO, en los
   TRES tramos (fondo, casco y visor), sin ningún guion suelto,
   fantasma ni sombra, y con lo que va debajo reconstruido SIN
   COSTURA (fondo continuo, arte grafiti continuado trazo por
   trazo, superficie del visor continua)?
4. ¿Algún trazo del arte grafiti cambió de forma, de posición, de
   grosor o de color? ¿Falta alguna salpicadura, alguna forma rosa
   o celeste, algún detalle chico?
Cualquier diferencia que no sean los 2 cambios pedidos es un
ERROR: corregila antes de entregar.
```

</details>

---

**Estado:** 🔴 pendiente de generar · 🟡 interpretación de "el palo" pendiente de confirmación del usuario.

**Qué hay que hacer:**
1. **Confirmar con el usuario qué es "el palo"** (ver la nota de ambigüedad de arriba) — antes de dar por bueno cualquier resultado.
2. Correr el prompt como **edición** sobre la imagen adjunta (no como generación nueva), en sesión aislada.
3. Auditar el resultado con los 4 chequeos de la verificación final, prestando atención especial al riesgo #1 (cara/figura inventada dentro del visor), que es el modo de falla más probable de este caso.
4. Subir la imagen original como adjunto real para versionarla en `imagenes-bob-esponja/` (o en una carpeta propia de este caso) — hoy solo está descrita en texto.

---

**Última actualización:** 2026-07-29 · primer registro del caso. Deja lección nueva para el checklist Tipo A de `orquestacion-agentes-paralelos.md`: **hacer transparente algo opaco no es un cambio de color, es revelar contenido que no existe en la imagen de partida — cuando una edición destapa una zona hay que DECLARAR EN POSITIVO qué se ve debajo, no alcanza con prohibir lo que no debe aparecer.**
