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

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:**
1. Correr el prompt y mandar el resultado para auditoría — verificar en especial que el visor quede completamente opaco y que el doble visor esté presente.
2. Subir la foto real del casco Turtles como adjunto para versionarla.
3. Confirmar si este molde es el casco físico real de la marca licenciante o solo una referencia — misma pregunta abierta que en otros casos de esta línea.

---

**Última actualización:** 2026-07-28 · Intento 2 agregado tras el Intento 1 ("espectacular", sin drift de geometría/diseño) — se pide visor completamente opaco (cambio de estética) y se agrega el sistema de doble visor que faltaba en la descripción — línea de licencias de marca (Marvel/DC/Paramount).
