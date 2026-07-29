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

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:**
1. Correr el prompt y mandar el resultado para auditoría — verificar en especial que el diseño de Turtles no se haya alterado (mismo riesgo de drift que en los casos de transferencia de diseño, aunque acá el diseño ya viene aplicado).
2. Subir la foto real del casco Turtles como adjunto para versionarla.
3. Confirmar si este molde es el casco físico real de la marca licenciante o solo una referencia — misma pregunta abierta que en otros casos de esta línea.

---

**Última actualización:** 2026-07-28 · primer registro de este caso (casco Teenage Mutant Ninja Turtles), no existía ningún archivo previo — foto lifestyle tipo photoshoot con fondo de humo blanco/gris, línea de licencias de marca (Marvel/DC/Paramount).
