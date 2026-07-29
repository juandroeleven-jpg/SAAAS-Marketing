# Simulación 29 — Casco "Teenage Mutant Ninja Turtles" (línea de licencias de marca): foto lifestyle tipo photoshoot (Tipo A, geometría intacta)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Nuevo caso de la línea de licencias de marca (Marvel/DC/Paramount, etc.): casco full-face negro mate, con el diseño gráfico completo de **Teenage Mutant Ninja Turtles** ya aplicado — personajes ilustrados en blanco/negro/escala de grises sobre una textura tipo camuflaje oscuro que cubre la calota, pieza roja en la zona de la mentonera, mecanismo de pivote junto al visor visible, visera transparente, texto "TEENAGE MUTANT NINJA TURTLES" y "TURTLES" en letras grandes sobre la zona inferior lateral. A diferencia del caso Top Gun, acá no se pide transferir el diseño — el diseño ya está aplicado y aprobado en la imagen de referencia; lo que se pide es una foto lifestyle nueva usando este casco ya terminado como checkpoint.

Primera pregunta del usuario: si ya existía una foto lifestyle para este caso — no, es la primera vez que aparece este casco en el repo, no hay ningún archivo previo. Se crea este caso desde cero.

**Pedido:** una foto tipo lifestyle/photoshoot, 4K, con fondo de humo/niebla blanco y gris de estudio fotográfico detrás (efecto de sesión de fotos profesional), sin cambiar nada del casco (ni el diseño de Turtles, ni la geometría, ni el color).

<details><summary>Prompt — Foto lifestyle tipo photoshoot con humo blanco/gris de fondo</summary>

```
Genera una fotografía de producto tipo lifestyle/photoshoot editorial
en 4K, ultra nítida, formato vertical o 4:5 (consistente con una
sesión de fotos profesional de estudio).

CRÍTICO — el casco que aparece en la imagen debe ser EXACTAMENTE el
casco real adjunto como autoridad (checkpoint): full face, negro
mate, con el diseño gráfico COMPLETO de "Teenage Mutant Ninja
Turtles" ya aplicado tal cual está en la referencia — los personajes
ilustrados en blanco/negro/escala de grises sobre la textura tipo
camuflaje oscuro de la calota, la pieza roja en la mentonera, el
mecanismo de pivote visible junto al visor, la visera transparente, y
los textos "TEENAGE MUTANT NINJA TURTLES" y "TURTLES" en su tamaño y
posición exactos. No cambies absolutamente nada del diseño gráfico,
la geometría, el color ni la textura del casco — es el mismo objeto
3D exacto, solo cambia la escena alrededor.

CRÍTICO — MISMO ÁNGULO EXACTO QUE LA FOTO DE REFERENCIA: la persona
con el casco puesto tiene que estar fotografiada desde EXACTAMENTE el
mismo ángulo de cámara que la imagen de referencia del casco
(checkpoint) — mismo punto de vista, misma altura de cámara, mismo
grado de rotación lateral. NO cambies el ángulo para "mejorar" la
composición ni para mostrar otro lado del casco: un ángulo distinto
al de la referencia puede hacer que se agreguen o se pierdan
elementos del diseño o de la geometría que no se ven igual desde otro
punto de vista. El ángulo de la referencia manda, sin excepciones.

ESCENA: una persona con el casco puesto, en un set de estudio
fotográfico tipo sesión de fotos profesional (photoshoot) — fondo con
HUMO/NIEBLA en tonos BLANCO Y GRIS, difuminado y con volumen,
iluminación de estudio dramática que recorta la silueta de la persona
contra el humo de fondo. Encuadre de medio cuerpo o busto, casco bien
visible y nítido en primer plano.

ILUMINACIÓN: iluminación de estudio controlada (no luz natural
exterior), con contraluz o luz lateral que hace que el humo se vea
volumétrico e iluminado, contraste marcado entre el casco nítido y el
fondo difuminado de humo.

ESTILO FOTOGRÁFICO: ultra realista, como una foto real de campaña
publicitaria/editorial de producto — profundidad de campo con el
casco en foco total y el humo de fondo con leve desenfoque,
composición tipo sesión de fotos de marca, no ilustración ni render
3D genérico.

Persona modelo: sin rasgos específicos pedidos, casco puesto con el
diseño de Turtles bien visible, rostro cubierto por la visera si el
ángulo lo permite.

PROHIBIDO ABSOLUTO: no cambiar geometría, color, textura ni ningún
detalle del diseño gráfico de Turtles ya aplicado en el casco real. No
agregar logos, gráficos ni texto adicional sobre el casco. No usar
fondo de cielo, playa, ciudad ni ningún entorno que no sea el humo
blanco/gris de estudio. No usar iluminación plana de catálogo — tiene
que verse como una foto de sesión/photoshoot con volumen de humo. No
cambiar el ángulo de cámara respecto a la foto de referencia del
casco, ni agregar ni quitar ningún elemento del casco por haber
elegido un ángulo distinto.
```

</details>

### Intento 1 — resultado auditado

**Estado:** ✅ Muy buen resultado — el usuario lo calificó de "espectacular". Quedan 2 ajustes puntuales, ninguno de geometría/diseño.

**Qué salió bien:** ángulo, encuadre, humo de fondo, iluminación de estudio y el diseño de Turtles (personajes, textura, textos) se mantuvieron fieles al checkpoint — no hubo drift de geometría ni de diseño.

**Qué hay que ajustar (2 pedidos del usuario, no defectos de fidelidad):**
1. **Visor:** en el resultado quedó transparente (se alcanza a ver a la persona adentro) — el usuario pidió que el visor quede completamente OPACO/NEGRO, para que no se vea si hay alguien adentro o no. Es un cambio de estética pedido para esta foto, no un error de fidelidad al checkpoint (el checkpoint real tiene visor transparente).
2. **Doble visor faltante:** el usuario señaló que el casco real tiene un sistema de DOBLE VISOR (visor exterior + un segundo visor/mecanismo interno), y el prompt anterior no lo pedía explícitamente — hay que agregarlo a la descripción del casco para que el resultado lo incluya.

### Intento 2 — visor opaco + doble visor agregado a la descripción

<details><summary>Prompt usado</summary>

```
Genera una fotografía de producto tipo lifestyle/photoshoot editorial
en 4K, ultra nítida, formato vertical o 4:5 (consistente con una
sesión de fotos profesional de estudio).

CRÍTICO — el casco que aparece en la imagen debe ser EXACTAMENTE el
casco real adjunto como autoridad (checkpoint): full face, negro
mate, con el diseño gráfico COMPLETO de "Teenage Mutant Ninja
Turtles" ya aplicado tal cual está en la referencia — los personajes
ilustrados en blanco/negro/escala de grises sobre la textura tipo
camuflaje oscuro de la calota, la pieza roja en la mentonera, los
textos "TEENAGE MUTANT NINJA TURTLES" y "TURTLES" en su tamaño y
posición exactos. No cambies absolutamente nada del diseño gráfico,
la geometría, el color ni la textura del casco — es el mismo objeto
3D exacto, solo cambia la escena alrededor.

CRÍTICO — SISTEMA DE DOBLE VISOR (un intento anterior mostró solo 1
visor, no lo repitas): el casco tiene un mecanismo de DOBLE VISOR —
visor exterior + un segundo visor/mecanismo interno — con el pivote
correspondiente visible junto a la sien, igual que en la foto de
referencia del casco. Los 2 visores/mecanismos tienen que estar
presentes y visibles.

CRÍTICO — VISOR COMPLETAMENTE OPACO (cambio pedido para esta foto,
distinto del checkpoint que es transparente): el visor exterior debe
verse completamente OPACO y NEGRO — no se debe poder ver si hay una
persona adentro del casco o no. Tratalo como un visor ahumado/opaco al
100%, sin ninguna transparencia ni reflejo que deje intuir un rostro
detrás.

CRÍTICO — MISMO ÁNGULO EXACTO QUE LA FOTO DE REFERENCIA: la persona
con el casco puesto tiene que estar fotografiada desde EXACTAMENTE el
mismo ángulo de cámara que la imagen de referencia del casco
(checkpoint) — mismo punto de vista, misma altura de cámara, mismo
grado de rotación lateral. NO cambies el ángulo para "mejorar" la
composición ni para mostrar otro lado del casco: un ángulo distinto
al de la referencia puede hacer que se agreguen o se pierdan
elementos del diseño o de la geometría que no se ven igual desde otro
punto de vista. El ángulo de la referencia manda, sin excepciones.

ESCENA: una persona con el casco puesto, en un set de estudio
fotográfico tipo sesión de fotos profesional (photoshoot) — fondo con
HUMO/NIEBLA en tonos BLANCO Y GRIS, difuminado y con volumen,
iluminación de estudio dramática que recorta la silueta de la persona
contra el humo de fondo. Encuadre de medio cuerpo o busto, casco bien
visible y nítido en primer plano.

ILUMINACIÓN: iluminación de estudio controlada (no luz natural
exterior), con contraluz o luz lateral que hace que el humo se vea
volumétrico e iluminado, contraste marcado entre el casco nítido y el
fondo difuminado de humo.

ESTILO FOTOGRÁFICO: ultra realista, como una foto real de campaña
publicitaria/editorial de producto — profundidad de campo con el
casco en foco total y el humo de fondo con leve desenfoque,
composición tipo sesión de fotos de marca, no ilustración ni render
3D genérico.

Persona modelo: sin rasgos específicos pedidos, casco puesto con el
diseño de Turtles bien visible, rostro completamente oculto por el
visor opaco.

PROHIBIDO ABSOLUTO: no cambiar geometría, color, textura ni ningún
detalle del diseño gráfico de Turtles ya aplicado en el casco real. No
agregar logos, gráficos ni texto adicional sobre el casco. No usar
fondo de cielo, playa, ciudad ni ningún entorno que no sea el humo
blanco/gris de estudio. No usar iluminación plana de catálogo — tiene
que verse como una foto de sesión/photoshoot con volumen de humo. No
cambiar el ángulo de cámara respecto a la foto de referencia del
casco. No dejar el visor transparente ni dejar ver a la persona
adentro. No omitir el segundo visor/mecanismo del sistema de doble
visor.
```

</details>

**Estado:** ⚠️ Corregido en el Intento 3 — el pedido de "doble visor" del Intento 2 estaba mal, era al revés.

**Qué hay que hacer:** ver Intento 3, abajo.

### Resultado del Intento 2 — auditado: muy buen resultado, pero el pedido de "doble visor" era un error

**Estado:** ✅ El usuario calificó el resultado de "hermoso" — el visor opaco funcionó bien. ❌ Pero la instrucción de "doble visor" que se agregó en este Intento 2 estaba equivocada.

**Corrección del usuario:** el casco real **NO tiene doble visor** — es UN SOLO visor. La instrucción del Intento 2 estaba al revés de lo que hacía falta: en vez de pedir que se agregue un segundo visor, el prompt tiene que decir explícitamente que **NO** hay que agregar un segundo visor por dentro. El visor opaco/negro sigue siendo correcto y hay que mantenerlo — nada se debe ver por dentro del casco.

### Intento 3 — un solo visor (corregido), completamente opaco, sin agregar un segundo visor interno

<details><summary>Prompt usado</summary>

```
Genera una fotografía de producto tipo lifestyle/photoshoot editorial
en 4K, ultra nítida, formato vertical o 4:5 (consistente con una
sesión de fotos profesional de estudio).

CRÍTICO — el casco que aparece en la imagen debe ser EXACTAMENTE el
casco real adjunto como autoridad (checkpoint): full face, negro
mate, con el diseño gráfico COMPLETO de "Teenage Mutant Ninja
Turtles" ya aplicado tal cual está en la referencia — los personajes
ilustrados en blanco/negro/escala de grises sobre la textura tipo
camuflaje oscuro de la calota, la pieza roja en la mentonera, los
textos "TEENAGE MUTANT NINJA TURTLES" y "TURTLES" en su tamaño y
posición exactos. No cambies absolutamente nada del diseño gráfico,
la geometría, el color ni la textura del casco — es el mismo objeto
3D exacto, solo cambia la escena alrededor.

CRÍTICO — UN SOLO VISOR, NO DOBLE (un intento anterior agregó por
error un segundo visor/mecanismo interno — no lo repitas): el casco
tiene UN ÚNICO visor, sin ningún segundo visor ni mecanismo adicional
por dentro. No agregues una segunda línea de visor, un visor interno
abatible ni ningún elemento extra cerca del visor que no esté en la
foto real del checkpoint.

CRÍTICO — VISOR COMPLETAMENTE OPACO (cambio pedido para esta foto,
distinto del checkpoint que es transparente): el único visor debe
verse completamente OPACO y NEGRO — no se debe poder ver absolutamente
nada por dentro del casco, ni rostro, ni sombra, ni reflejo que deje
intuir una persona adentro. Tratalo como un visor ahumado/opaco al
100%, sin ninguna transparencia.

CRÍTICO — MISMO ÁNGULO EXACTO QUE LA FOTO DE REFERENCIA: la persona
con el casco puesto tiene que estar fotografiada desde EXACTAMENTE el
mismo ángulo de cámara que la imagen de referencia del casco
(checkpoint) — mismo punto de vista, misma altura de cámara, mismo
grado de rotación lateral. NO cambies el ángulo para "mejorar" la
composición ni para mostrar otro lado del casco.

ESCENA: una persona con el casco puesto, en un set de estudio
fotográfico tipo sesión de fotos profesional (photoshoot) — fondo con
HUMO/NIEBLA en tonos BLANCO Y GRIS, difuminado y con volumen,
iluminación de estudio dramática que recorta la silueta de la persona
contra el humo de fondo. Encuadre de medio cuerpo o busto, casco bien
visible y nítido en primer plano.

ILUMINACIÓN: iluminación de estudio controlada (no luz natural
exterior), con contraluz o luz lateral que hace que el humo se vea
volumétrico e iluminado, contraste marcado entre el casco nítido y el
fondo difuminado de humo.

ESTILO FOTOGRÁFICO: ultra realista, como una foto real de campaña
publicitaria/editorial de producto — profundidad de campo con el
casco en foco total y el humo de fondo con leve desenfoque,
composición tipo sesión de fotos de marca, no ilustración ni render
3D genérico.

Persona modelo: sin rasgos específicos pedidos, casco puesto con el
diseño de Turtles bien visible, rostro completamente oculto por el
visor opaco.

PROHIBIDO ABSOLUTO: no cambiar geometría, color, textura ni ningún
detalle del diseño gráfico de Turtles ya aplicado en el casco real. No
agregar logos, gráficos ni texto adicional sobre el casco. No usar
fondo de cielo, playa, ciudad ni ningún entorno que no sea el humo
blanco/gris de estudio. No cambiar el ángulo de cámara respecto a la
foto de referencia del casco. No dejar el visor transparente ni dejar
ver absolutamente nada por dentro. No agregar un segundo visor ni
ningún mecanismo interno adicional — es un solo visor, punto.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:**
1. Correr el prompt y mandar el resultado para auditoría — verificar que quede UN SOLO visor, completamente opaco, sin nada visible por dentro.
2. Subir la foto real del casco Turtles como adjunto para versionarla.
3. Confirmar si este molde es el casco físico real de la marca licenciante o solo una referencia — misma pregunta abierta que en otros casos de esta línea.

### Resultado del Intento 3 — auditado: el ángulo y algunos detalles chicos del casco se desvían levemente

**Estado:** ⚠️ El usuario reporta que el generador sigue tomándose "libertades" — el ángulo sale un poco distinto al de la referencia, y algunas piezas chicas del casco (no todas, solo algunas, muy puntuales) también se desvían levemente. Pedido explícito: cero libertad creativa, ni en el ángulo ni en ningún detalle del casco, por chico que sea.

### Intento 4 — cero tolerancia a desvíos, ángulo y detalles chicos verificados explícitamente

<details><summary>Prompt usado</summary>

```
Genera una fotografía de producto tipo lifestyle/photoshoot editorial
en 4K, ultra nítida, formato vertical o 4:5.

CRÍTICO — CERO LIBERTAD CREATIVA CON EL CASCO (defecto real detectado
en intentos anteriores: el ángulo salió levemente distinto al de la
referencia, y algunas piezas chicas del casco se desviaron un poco —
no lo repitas): el casco de esta imagen tiene que ser una copia
EXACTA, pixel a pixel en cuanto a diseño y forma, de la foto de
referencia adjunta (checkpoint). No está permitido "interpretar",
aproximar ni ajustar NINGÚN detalle del casco, por más chico que
parezca — ni un tornillo, ni el borde de una pieza, ni la curvatura
de una línea. Si tenés dudas sobre cómo se ve un detalle puntual,
copiá exactamente lo que se ve en la foto de referencia, no lo que
"normalmente" tendría un casco de este estilo.

CRÍTICO — el casco que aparece en la imagen debe ser EXACTAMENTE el
casco real adjunto como autoridad (checkpoint): full face, negro
mate, con el diseño gráfico COMPLETO de "Teenage Mutant Ninja
Turtles" ya aplicado tal cual está en la referencia. No cambies
absolutamente nada del diseño gráfico, la geometría, el color ni la
textura del casco.

CRÍTICO — UN SOLO VISOR, NO DOBLE: el casco tiene UN ÚNICO visor, sin
ningún segundo visor ni mecanismo adicional por dentro.

CRÍTICO — VISOR COMPLETAMENTE OPACO: el único visor debe verse
completamente OPACO y NEGRO — no se debe poder ver absolutamente nada
por dentro del casco.

CRÍTICO — ÁNGULO EXACTO, NO APROXIMADO (defecto real detectado: el
ángulo salió "un poco" distinto, no idéntico — esto cuenta como
error): la persona con el casco puesto tiene que estar fotografiada
desde EXACTAMENTE el mismo ángulo de cámara que la imagen de
referencia del casco — mismo punto de vista, misma altura de cámara,
mismo grado de rotación lateral, mismo encuadre relativo del casco
dentro del cuadro. "Parecido" o "similar" no alcanza — tiene que ser
el mismo ángulo, verificable comparando lado a lado con la
referencia. Antes de entregar el resultado, comparate mentalmente
contra la referencia: si el ángulo o cualquier detalle del casco no
coincide exactamente, corregilo.

ESCENA: una persona con el casco puesto, en un set de estudio
fotográfico tipo sesión de fotos profesional (photoshoot) — fondo con
HUMO/NIEBLA en tonos BLANCO Y GRIS, difuminado y con volumen,
iluminación de estudio dramática. Encuadre de medio cuerpo o busto,
casco bien visible y nítido en primer plano.

ILUMINACIÓN: iluminación de estudio controlada, contraluz o luz
lateral que hace que el humo se vea volumétrico.

ESTILO FOTOGRÁFICO: ultra realista, como una foto real de campaña
publicitaria/editorial de producto.

Persona modelo: sin rasgos específicos pedidos, casco puesto con el
diseño de Turtles bien visible, rostro completamente oculto por el
visor opaco.

PROHIBIDO ABSOLUTO: no cambiar geometría, color, textura ni ningún
detalle del diseño gráfico de Turtles, por más chico que sea. No
"mejorar" ni "interpretar" ninguna pieza del casco a criterio propio.
No agregar logos, gráficos ni texto adicional. No usar fondo de
cielo, playa, ciudad. No cambiar el ángulo de cámara ni aproximarlo —
tiene que ser el mismo exacto. No dejar el visor transparente ni
dejar ver nada por dentro. No agregar un segundo visor.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt y mandar el resultado para auditoría — comparar lado a lado con la referencia el ángulo exacto y cada pieza chica del casco (tornillos, bordes, curvatura), no solo una revisión general.

### Resultado del Intento 4 — auditado: ángulo resuelto, 3 defectos nuevos

**Estado:** ⚠️ Progreso importante — el ángulo por fin coincide, pero aparecen 3 defectos puntuales.

**Qué salió bien:** el ángulo de cámara por fin coincide prácticamente con el de la foto de referencia (checkpoint) — el defecto principal que venía arrastrándose desde el Intento 3 quedó resuelto, así que el lenguaje de "cero libertad creativa" + verificación explícita antes de entregar funcionó. El diseño gráfico de Turtles se aplicó bien y en la posición correcta: los personajes ilustrados, la textura tipo camuflaje de la calota y los textos "TEENAGE MUTANT NINJA TURTLES" y "TURTLES" están donde tienen que estar y con el tamaño correcto. El fondo de humo blanco/gris de estudio y la iluminación quedaron muy bien — volumétricos, con el recorte de la silueta contra el humo tal como se venía pidiendo.

**Qué falló (3 defectos):**
1. **El visor no parece real — parece una caricatura.** El visor salió como una forma negra plana, sólida y sin material: se ve dibujado/vectorial, no como un visor físico fotografiado. El punto no es la opacidad — el visor SÍ tiene que ser opaco y no dejar ver nada por dentro, eso está bien resuelto — el punto es que **opaco no significa plano ni sin material**. Tiene que verse como un visor real de policarbonato ahumado oscuro: con su brillo especular sutil siguiendo la curvatura de la superficie, un reflejo tenue de la luz de estudio recorriendo el borde, el grosor/canto del visor visible, la junta o goma perimetral donde apoya contra la carcasa, y la textura propia del plástico inyectado.
2. **El casco salió más alargado que el original.** La proporción de la calota se estiró: en el resultado el casco se ve más largo/elongado de adelante hacia atrás que en la foto real del checkpoint, que tiene una proporción bastante más compacta. Hay que bloquear explícitamente la relación de aspecto de la calota (largo vs. alto, compacidad general de la forma) a la del checkpoint.
3. **El cuerpo de la persona no sale completo.** El cuerpo queda cortado de forma incómoda por el borde del cuadro — se ve solo un pedazo de hombro y el cuello, cortado abruptamente. El usuario quiere que el cuerpo entre completo dentro del encuadre: hombros y torso superior completos, sin cortes bruscos ni partes que queden fuera del cuadro de forma antinatural.

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 5, abajo).

### Intento 5 — visor con material real, proporción de calota bloqueada y cuerpo completo en el encuadre

<details><summary>Prompt usado</summary>

```
Genera una fotografía de producto tipo lifestyle/photoshoot editorial
en 4K, ultra nítida, formato vertical o 4:5.

CRÍTICO — CERO LIBERTAD CREATIVA CON EL CASCO (defecto real detectado
en intentos anteriores: el ángulo salió levemente distinto al de la
referencia, y algunas piezas chicas del casco se desviaron un poco —
no lo repitas): el casco de esta imagen tiene que ser una copia
EXACTA, pixel a pixel en cuanto a diseño y forma, de la foto de
referencia adjunta (checkpoint). No está permitido "interpretar",
aproximar ni ajustar NINGÚN detalle del casco, por más chico que
parezca — ni un tornillo, ni el borde de una pieza, ni la curvatura
de una línea. Si tenés dudas sobre cómo se ve un detalle puntual,
copiá exactamente lo que se ve en la foto de referencia, no lo que
"normalmente" tendría un casco de este estilo.

CRÍTICO — el casco que aparece en la imagen debe ser EXACTAMENTE el
casco real adjunto como autoridad (checkpoint): full face, negro
mate, con el diseño gráfico COMPLETO de "Teenage Mutant Ninja
Turtles" ya aplicado tal cual está en la referencia. No cambies
absolutamente nada del diseño gráfico, la geometría, el color ni la
textura del casco.

CRÍTICO — UN SOLO VISOR, NO DOBLE: el casco tiene UN ÚNICO visor, sin
ningún segundo visor ni mecanismo adicional por dentro.

CRÍTICO — VISOR OPACO PERO CON MATERIAL REAL, NO UNA FORMA NEGRA
PLANA (defecto real detectado en un intento anterior: el visor salió
como una silueta negra chata, vectorial, tipo caricatura, sin
material — no lo repitas): el visor tiene que ser completamente
OPACO, no se debe ver absolutamente nada por dentro del casco, ni
rostro, ni sombra, ni silueta de una persona. PERO tiene que verse
como un visor FÍSICO REAL de policarbonato ahumado oscuro,
fotografiado con luz de estudio — no como una forma negra plana,
dibujada o vectorial. El visor debe tener:
- brillo especular sutil que sigue la curvatura de la superficie del
  visor, no un negro uniforme;
- un reflejo tenue y alargado de la luz de estudio recorriendo el
  borde superior del visor;
- el grosor/canto del visor visible en el borde, con su espesor de
  plástico real;
- la junta o goma perimetral donde el visor apoya contra la carcasa
  del casco, visible como en la foto de referencia;
- la textura y la profundidad propias del plástico inyectado real,
  con las microvariaciones de reflejo de una superficie curva.
Opaco NO significa plano ni sin material: es un visor negro ahumado
al 100%, pero fotografiado como un objeto real con volumen y reflejos.

CRÍTICO — PROPORCIÓN DE LA CALOTA IDÉNTICA AL CHECKPOINT (defecto
real detectado en un intento anterior: la calota salió estirada, más
elongada de adelante hacia atrás que en la foto real — no lo
repitas): la proporción de la calota — la relación entre su largo y
su alto, y la compacidad general de la forma — tiene que ser
EXACTAMENTE la de la foto de referencia. El casco real es compacto;
no lo alargues, no lo estires, no lo hagas más aerodinámico ni más
"deportivo" de lo que ya es. Antes de entregar el resultado, compará
la proporción de la calota de tu imagen contra la de la referencia:
si el casco se ve aunque sea un poco más largo o más estirado,
corregilo hasta que la proporción coincida.

CRÍTICO — ÁNGULO EXACTO, NO APROXIMADO (defecto real detectado: el
ángulo salió "un poco" distinto, no idéntico — esto cuenta como
error): la persona con el casco puesto tiene que estar fotografiada
desde EXACTAMENTE el mismo ángulo de cámara que la imagen de
referencia del casco — mismo punto de vista, misma altura de cámara,
mismo grado de rotación lateral, mismo encuadre relativo del casco
dentro del cuadro. "Parecido" o "similar" no alcanza — tiene que ser
el mismo ángulo, verificable comparando lado a lado con la
referencia. Antes de entregar el resultado, comparate mentalmente
contra la referencia: si el ángulo o cualquier detalle del casco no
coincide exactamente, corregilo.

ESCENA: una persona con el casco puesto, en un set de estudio
fotográfico tipo sesión de fotos profesional (photoshoot) — fondo con
HUMO/NIEBLA en tonos BLANCO Y GRIS, difuminado y con volumen,
iluminación de estudio dramática. La persona tiene que aparecer con
los HOMBROS Y EL TORSO SUPERIOR COMPLETOS DENTRO DEL CUADRO (defecto
real detectado en un intento anterior: el cuerpo quedó cortado
abruptamente por el borde de la imagen, se veía solo un pedazo de
hombro y el cuello — no lo repitas). Alejá la cámara lo necesario
para que la figura entre entera: nada de cortes bruscos por el borde
del encuadre, nada de hombros o brazos que queden fuera del cuadro de
forma antinatural. Dejá aire/espacio suficiente alrededor de la
figura, arriba del casco y a los costados de los hombros. El casco
sigue siendo el protagonista: bien visible y nítido en primer plano.

ILUMINACIÓN: iluminación de estudio controlada, contraluz o luz
lateral que hace que el humo se vea volumétrico.

ESTILO FOTOGRÁFICO: ultra realista, como una foto real de campaña
publicitaria/editorial de producto.

Persona modelo: sin rasgos específicos pedidos, casco puesto con el
diseño de Turtles bien visible, rostro completamente oculto por el
visor opaco, con hombros y torso superior completos dentro del cuadro.

PROHIBIDO ABSOLUTO: no cambiar geometría, color, textura ni ningún
detalle del diseño gráfico de Turtles, por más chico que sea. No
"mejorar" ni "interpretar" ninguna pieza del casco a criterio propio.
No agregar logos, gráficos ni texto adicional. No usar fondo de
cielo, playa, ciudad. No cambiar el ángulo de cámara ni aproximarlo —
tiene que ser el mismo exacto. No dejar el visor transparente ni
dejar ver nada por dentro. No agregar un segundo visor. No dibujar el
visor como una forma negra plana, vectorial o sin material — tiene
que verse como plástico real con brillo, canto y junta. No alargar ni
estirar la proporción de la calota respecto al checkpoint. No cortar
el cuerpo de la persona con el borde del cuadro.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt y mandar el resultado para auditoría — verificar que el visor se vea como plástico real (opaco pero con brillo, canto y junta), que la proporción de la calota no esté estirada, y que el cuerpo entre completo en el cuadro.

---

**Última actualización:** 2026-07-28 · Intento 4 agregado tras reporte del usuario de que el ángulo y algunos detalles chicos del casco se desviaban levemente pese al Intento 3 — se refuerza con lenguaje de "cero libertad creativa" y verificación explícita antes de entregar — línea de licencias de marca (Marvel/DC/Paramount). El Intento 4 resolvió el ángulo (ya coincide con el checkpoint), pero aparecieron 3 defectos nuevos — visor plano tipo caricatura sin material, calota alargada respecto al original y cuerpo de la persona cortado por el borde del cuadro — corregidos en el prompt del Intento 5.
