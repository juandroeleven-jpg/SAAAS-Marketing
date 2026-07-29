# Familia 2 — Swap de casco en escena lifestyle

[← Volver al catálogo de prompts](README.md)

**Operación:** dentro de una fotografía real (lifestyle/editorial), reemplazar SOLO el casco que lleva puesto el sujeto por otro casco tomado de una foto de producto. Todo lo demás de la escena queda intocable.

**Se adjuntan siempre DOS imágenes, en este orden:**
1. **IMAGEN 1 — la escena** (autoridad de escena: pose, moto, fondo, luz, encuadre).
2. **IMAGEN 2 — el casco nuevo** (autoridad de forma y color del casco: solo se toma el casco, nada más).

**Slots variables de la plantilla:** descripción de la escena y sus elementos intocables · descripción del casco destino y sus rasgos reconocibles · ángulo/oclusiones del casco en la escena · integración de luz.

---

## Instancia 2.1 — Escena "moto + rosas" → casco negro mate con spoiler y visor dorado espejado

**Escena (IMAGEN 1):** motociclista sentado en moto deportiva negra, galpón oscuro con bokeh, remera Nike negra, balaclava, guantes, brazo derecho tatuado en alto sosteniendo un ramo de rosas rojas frente al casco.
**Casco destino (IMAGEN 2):** integral negro mate con spoiler trasero y visor iridium dorado espejado, foto de producto de perfil sobre fondo claro.

```
Esto es un REEMPLAZO DE CASCO dentro de una FOTOGRAFÍA REAL, no una
imagen nueva ni un rediseño de la escena. Recibís DOS imágenes con
roles distintos y NO intercambiables:

- IMAGEN 1 — LA ESCENA (el motociclista con las rosas sobre la moto):
  es la ÚNICA AUTORIDAD DE ESCENA. Todo lo que se ve en esta foto
  queda EXACTAMENTE igual, salvo el casco.
- IMAGEN 2 — EL CASCO NUEVO (foto de producto sobre fondo claro):
  es la ÚNICA AUTORIDAD DE FORMA Y COLOR DEL CASCO. De esta imagen
  solo se toma el casco. NADA MÁS de esta imagen pasa al resultado:
  ni el fondo claro, ni el encuadre, ni la iluminación de estudio.

EL RESULTADO ES: la misma foto de la escena, con el mismo hombre, la
misma pose, la misma moto y las mismas rosas, pero llevando puesto el
casco de la IMAGEN 2 en lugar del casco original.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ EN LA IMAGEN 1:
- El hombre y su pose completa: sentado sobre la moto, torso erguido,
  brazo derecho en alto sosteniendo el ramo de rosas rojas frente al
  casco, el otro brazo hacia el manubrio.
- El ramo de rosas: cada rosa, cada tallo, cada hoja, en la misma
  posición exacta, con las mismas puntas de tallo sobresaliendo por
  encima de la mano.
- El guante negro y la mano que sujeta el ramo.
- Los tatuajes del brazo derecho: mismo diseño, mismas formas, misma
  posición. No se inventan tatuajes nuevos ni se borran los que hay.
- La remera negra Nike con su logo blanco: mismos pliegues de tela,
  mismo logo, misma posición y tamaño del logo.
- La balaclava / cuello negro que asoma por debajo del casco y cubre
  el cuello: queda igual y sigue haciendo la unión visual entre el
  casco nuevo y el cuerpo.
- La moto completa: carenado negro, manubrio, espejos, tablero,
  depósito, cada reflejo sobre el carenado. Ni una pieza cambia, ni
  un reflejo se reinventa.
- El fondo: el galpón/arena oscuro, las luces desenfocadas (bokeh),
  las estructuras del techo apenas visibles.
- La iluminación general de la escena, el nivel de oscuridad, el
  color grade, el grano de la foto y el encuadre vertical completo.

EL CASCO — SE REEMPLAZA POR EL DE LA IMAGEN 2:
El casco original de la escena desaparece por completo y en su lugar
va el casco de la IMAGEN 2, con estas características, que vienen de
la foto de producto y se respetan TODAS:
- Casco integral con SPOILER trasero escalonado en la parte alta de
  la calota: ese spoiler es parte del casco y tiene que verse.
- Calota NEGRO MATE, lisa, sin gráficos, sin franjas, sin logos
  grandes.
- VISOR DORADO ESPEJADO (iridium dorado): es el rasgo más
  reconocible del casco nuevo y tiene que verse claramente dorado y
  espejado en el resultado.
- Las ventilaciones de la mentonera y las tomas laterales tal como
  se ven en la foto de producto, sin inventar otras.

REPOSICIONADO — el único trabajo creativo permitido:
La IMAGEN 2 muestra el casco de perfil; en la escena la cabeza está
en otro ángulo (3/4 frontal, levemente inclinada hacia las rosas).
El casco nuevo se REORIENTA a ese mismo ángulo de la escena:
- Misma posición de la cabeza, misma inclinación y misma escala:
  ocupa el mismo volumen que el casco original, ni más grande ni más
  chico.
- Se asienta sobre los hombros y la balaclava igual que el original.
- Las rosas y los tallos que pasan por delante o al costado del
  casco original siguen pasando por delante del casco nuevo, con la
  misma oclusión exacta.

INTEGRACIÓN DE LUZ:
El casco nuevo se ilumina con la luz de la ESCENA, no con la luz de
estudio de la foto de producto:
- El negro mate absorbe la luz: sin brillos plásticos exagerados,
  coherente con la oscuridad general de la escena.
- El visor dorado espejado refleja el ambiente de la escena (las
  luces del techo, los tonos oscuros del galpón), no el estudio
  blanco de la foto de producto.
- Las sombras que el casco proyecta sobre hombros y pecho quedan
  coherentes con las que proyectaba el casco original.

PROHIBIDO ABSOLUTO:
- Prohibido conservar el casco original o cualquier parte de él: su
  visor oscuro, su forma de calota, sus gráficos o calcos laterales.
- Prohibido mezclar los dos cascos en un híbrido: el casco del
  resultado es el de la IMAGEN 2 y solo ese.
- Prohibido cambiar CUALQUIER otra cosa de la escena: pose, rosas,
  tatuajes, remera, logo Nike, guante, balaclava, moto, fondo,
  luces, encuadre, color grade.
- Prohibido traer al resultado el fondo claro, la sombra de piso o
  la iluminación de la foto de producto.
- Prohibido cambiar el color del visor: es DORADO ESPEJADO, no
  oscuro, no transparente, no plateado, no degradé.
- Prohibido agregar logos, texto o gráficos que no estén en ninguna
  de las dos fotos.
- Prohibido cambiar la escala o la posición de la cabeza, o el punto
  donde el casco se une con la balaclava.

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. ¿El casco del resultado es el de la IMAGEN 2 — spoiler trasero,
   negro mate, visor dorado espejado — sin ningún rastro del casco
   original?
2. ¿El casco quedó en el MISMO ángulo, posición y escala que tenía
   el casco original en la escena?
3. ¿Las rosas, la mano y los tallos siguen exactamente iguales y
   tapan el casco igual que antes?
4. ¿Tatuajes, remera Nike, guante, balaclava y moto quedaron
   idénticos a la IMAGEN 1?
5. ¿El fondo, el bokeh, la iluminación y el encuadre vertical
   quedaron idénticos a la IMAGEN 1?
6. ¿El visor se ve claramente DORADO ESPEJADO reflejando el ambiente
   oscuro de la escena, sin nada del fondo blanco del estudio?
```

**Riesgos conocidos de esta instancia (para auditar el resultado):**
- El modelo tiende a "limpiar" las oclusiones: verificar que los tallos frente al casco no desaparezcan.
- El visor iridium puede salir plateado o oscuro (falla ya vista en Simulación 6d con el visor degradé) — por eso el color del visor se repite tres veces en el prompt.
- El spoiler puede perderse al reorientar el casco de perfil a 3/4 — chequeo 1 lo cubre.
