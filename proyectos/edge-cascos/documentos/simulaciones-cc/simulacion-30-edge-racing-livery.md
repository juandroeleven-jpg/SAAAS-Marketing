# Simulación 30 — Livery de carreras EDGE "Temporada 2026": adaptación de diseño sobre molde real (Tipo A, múltiples vistas y colorways)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Caso de adaptación de diseño (Tipo A) siguiendo el mismo pipeline Agente 0 → Generador → Auditor documentado en `orquestacion-agentes-paralelos.md` (el diagrama que trajo el usuario es el original del caso Dakota, con las "12 lecciones" de un Artifact externo aún no transcripto al repo — acá se aplica el checklist Tipo A ya formalizado en la sección 2 de ese documento, que cubre las mismas lecciones).

**Pedido:** adaptar un livery de carreras de marca EDGE ("Temporada 2026", con al menos 3 colorways distintos) sobre el molde real de un casco full-face negro mate ya fotografiado (checkpoint). El usuario va a mandar 6 imágenes más (más vistas y/o más colorways) — este archivo se arma con lo recibido hasta ahora y se va a seguir completando.

**Molde real (checkpoint), 2 vistas recibidas:**
- Vista lateral/3-4: casco full-face negro mate, pico frontal puntiagudo, visor transparente, correa roja, mentonera y ventilaciones en el mismo tono negro mate que la calota (sin piezas de plástico crudo visible como en otros moldes del catálogo).
- Vista trasera: calota negra mate, borde inferior negro, sin gráficos.

**Colorway 1 — Azul/blanco/rojo "EDGE":** carcasa azul con franjas geométricas diagonales blancas y rojas, patrón de rombos/hexágonos con textura fina tipo malla en la zona superior, wordmark "EDGE" en blanco bold itálico sobre la zona inferior lateral, visor oscuro/tintado (a diferencia del checkpoint, que tiene visor transparente — ver nota abajo). ~~Sticker "DOT" en la parte trasera inferior~~ — **eliminado por regla de negocio, ver sección de más abajo.**

**Colorway 2 — Rojo/negro/gris "EDGE":** carcasa negra con paneles diagonales rojos y líneas geométricas grises, wordmark "EDGE" en gris bold itálico sobre la zona inferior lateral, pico frontal rojo, visor oscuro/tintado, ~~sticker "DOT" en la parte trasera inferior~~ (**eliminado por regla de negocio**), acentos rojos cerca de la ventilación.

**⚠️ Pregunta abierta para el usuario:** las 2 imágenes de diseño (colorway 1 y 2) muestran visor oscuro/tintado, distinto del visor transparente del checkpoint. Como se repite en ambos colorways, se trata como parte intencional del diseño de esta línea de carreras (no como error) — confirmar si es así o si el visor debe quedar transparente como en el checkpoint real.

## Regla de negocio — ningún render de este caso lleva sticker "DOT" ni marcas de certificación

- **Regla confirmada por el usuario**, pedida dos veces sobre dos vistas distintas del mismo colorway: primero en la **vista lateral del Colorway 1** (Intento 4→5, donde el sticker "DOT" entró en la lista de 3 cambios de la edición puntual) y después en la **vista trasera del Colorway 1** (Intento 5→6, *"que no incluya lo de la verificación DOT"*). Al repetirse deja de ser un pedido puntual de una vista y pasa a ser **política del caso**: **ningún render de este livery lleva sticker "DOT" ni ninguna otra marca de certificación u homologación** (DOT, ECE, SNELL, etiquetas normativas, textos chicos de certificación).
- **No es un defecto del generador.** En la vista trasera el propio prompt pedía explícitamente `Sticker "DOT" pequeño en la parte más baja, centrado.` en su lista de elementos, y el generador lo dibujó bien. Es una **decisión de negocio nueva** que invalida esa línea del prompt, no una falla de ejecución — así queda registrado en la auditoría del Intento 5 de la trasera.
- **Los demás elementos de texto del livery SÍ se conservan** — wordmark "EDGE", etiquetas "X40", el texto chico dentro del marco geométrico superior y cualquier otro texto de diseño no se ven afectados por esta regla. Aplica específicamente a las marcas de certificación/homologación, no a todo texto chico. Esto es importante decirlo en los prompts de borrado, porque el generador tiende a llevarse por asociación los demás textos chicos cercanos ("son todos textos chicos").
- **Aplicada retroactivamente a todos los prompts del caso.** Se sacó la línea del sticker "DOT" de **todos** los prompts de este archivo y de los archivos hermanos `simulacion-30b`, `simulacion-30c` y `simulacion-30d` (11 apariciones acá + 2 en cada hermano = 17 en total), y se la reemplazó por una **instrucción en negativo** dentro de la misma lista de elementos, para que una re-corrida por copiar/pegar no lo vuelva a dibujar:

  ```
  - SIN sticker "DOT" y SIN ninguna otra marca de certificación u
    homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
    negocio del caso, ningún render de este livery las lleva. Si la
    ilustración de diseño muestra alguna, se omite.
  ```

- **Si un render ya generado lo trae, se saca por edición puntual, no por regeneración** — mismo criterio que el resto del caso. Y como todo borrado, son **dos tareas**: eliminar el sticker sin dejar resto ni fantasma **y** reconstruir el patrón del livery que va debajo (ver el ítem de cobertura completa del checklist Tipo A).
- **Formato tomado de** la sección 9 de `../orquestacion-agentes-paralelos.md` (regla de negocio de la goma del borde inferior siempre negra), que es la otra regla de negocio transversal vigente para todos los cascos del catálogo y que también hay que verificar en cada vista de este caso.

<details><summary>Prompt — Colorway 1 (azul/blanco/rojo), vista lateral</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista lateral/3-4), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO (sin ningún gráfico encima) es la
  ÚNICA autoridad de FORMA — pico frontal, silueta de la calota,
  mentonera, ventilaciones, mecanismo de pivote del visor, todo tal
  cual está en esa foto. Copiala sin ninguna variación.
- La imagen del casco con el diseño AZUL/BLANCO/ROJO ya aplicado
  (sobre un casco de referencia, no necesariamente el mismo molde) es
  SOLO fuente de diseño gráfico — colores, patrones geométricos,
  wordmark "EDGE", nunca su forma. Si esa imagen muestra una forma de
  casco distinta a la del molde negro liso, ignorá esa forma por
  completo.

PASO 1 — FORMA: reproducí exactamente la forma del casco negro liso
(pico frontal, ventilaciones, mentonera, mecanismo de pivote, correa
roja) antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway azul/blanco/rojo:
- Carcasa principal: azul, con franjas geométricas diagonales blancas
  y rojas.
- Patrón de rombos/hexágonos con textura fina tipo malla en la zona
  superior de la calota.
- Wordmark "EDGE" en blanco, tipografía bold itálica, sobre la zona
  inferior lateral (mismo estilo que en la referencia de diseño).
- SIN sticker "DOT" y SIN ninguna otra marca de certificación u
  homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
  negocio del caso, ningún render de este livery las lleva. Si la
  ilustración de diseño muestra alguna, se omite.

VISOR: tintado/oscuro, igual que en la imagen de diseño de referencia
(cambio intencional de este colorway, confirmado como parte del
diseño de carreras, no un error).

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso: no
cambiar el ángulo de cámara ni la altura ni la rotación.

PROHIBIDO ABSOLUTO: no cambiar la forma, silueta, ventilaciones,
mentonera ni pico frontal del molde real. No copiar la forma del
casco de la imagen de diseño si es distinta a la del molde real. No
agregar elementos gráficos que no estén en la lista de arriba. No
cambiar el color de la correa roja.
```

</details>

### Intento 1 — Colorway 1 vista lateral, resultado auditado

**Estado:** ⚠️ Casi impecable — geometría y grueso del diseño correctos, 2 defectos puntuales de aplicación del gráfico.

**Qué salió bien:** la geometría del molde real se respetó por completo — pico frontal, silueta de la calota, ventilaciones, mecanismo de pivote con su textura de carbono y la correa roja quedaron tal cual el checkpoint. El visor tintado/oscuro salió bien y el ángulo de cámara coincide con el de la foto de referencia. La mayor parte del livery azul/blanco/rojo se transfirió correctamente, incluyendo el wordmark "EDGE" en la zona inferior lateral y las franjas geométricas rojas y blancas de la parte baja del casco. El usuario lo calificó de "casi impecable".

**Qué falló (2 defectos):**
1. **Elementos faltantes o simplificados en la zona superior de la calota.** En la ilustración de diseño de referencia, la parte de arriba de la calota tiene varios elementos gráficos que no se aplicaron completos en el resultado:
   - (a) el patrón de textura fina tipo malla/triángulos entrelazados en blanco sobre azul — que en la ilustración cubre una zona amplia de la parte superior/trasera de la calota — salió mucho más tenue y reducido en superficie;
   - (b) las líneas geométricas concéntricas tipo chevron/marco anguloso en azul oscuro y blanco de la zona superior salieron simplificadas, con menos capas y menos líneas que en la ilustración;
   - (c) un pequeño texto/etiqueta que en la ilustración aparece dentro del marco geométrico superior directamente no apareció.
2. **La mentonera salió gris lisa en vez de mantener el diseño.** La zona de la mentonera / parte frontal-inferior del casco (la "boca") se rellenó con un gris liso y plano, cuando en la ilustración de diseño esa zona tiene el patrón geométrico continuo — franjas blancas, rojas y azules que bajan hasta el borde de la mentonera. El livery se cortó ahí y el generador tapó el hueco con un gris genérico.

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 2, abajo).

### Intento 2 — Colorway 1 vista lateral, zona superior completa y mentonera con diseño

<details><summary>Prompt usado</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista lateral/3-4), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO (sin ningún gráfico encima) es la
  ÚNICA autoridad de FORMA — pico frontal, silueta de la calota,
  mentonera, ventilaciones, mecanismo de pivote del visor, todo tal
  cual está en esa foto. Copiala sin ninguna variación.
- La imagen del casco con el diseño AZUL/BLANCO/ROJO ya aplicado
  (sobre un casco de referencia, no necesariamente el mismo molde) es
  SOLO fuente de diseño gráfico — colores, patrones geométricos,
  wordmark "EDGE", nunca su forma. Si esa imagen muestra una forma de
  casco distinta a la del molde negro liso, ignorá esa forma por
  completo.

PASO 1 — FORMA: reproducí exactamente la forma del casco negro liso
(pico frontal, ventilaciones, mentonera, mecanismo de pivote, correa
roja) antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway azul/blanco/rojo:
- Carcasa principal: azul, con franjas geométricas diagonales blancas
  y rojas.
- ZONA SUPERIOR DE LA CALOTA — REPRODUCIR COMPLETA (un intento
  anterior aplicó estos elementos de forma incompleta y simplificada,
  no lo repitas). La parte de arriba de la calota lleva TRES
  elementos, todos obligatorios y todos con el mismo nivel de detalle
  que la ilustración de diseño:
  (a) Patrón de textura fina tipo malla / triángulos entrelazados en
      blanco sobre azul, cubriendo una ZONA AMPLIA de la parte
      superior y trasera de la calota, con la misma extensión y la
      misma intensidad que en la ilustración — NO una versión tenue,
      NO una versión reducida a una franja chica.
  (b) Líneas geométricas concéntricas tipo chevron / marco anguloso
      en azul oscuro y blanco en la zona superior, con TODAS sus
      capas y TODAS sus líneas tal como aparecen en la ilustración —
      contá las líneas de la referencia y reproducilas todas; NO una
      versión simplificada con menos capas ni menos líneas.
  (c) El pequeño texto/etiqueta que aparece DENTRO del marco
      geométrico superior de la ilustración: tiene que estar
      presente, en la misma posición y con el mismo tamaño relativo.
      No lo omitas.
- MENTONERA — EL DISEÑO CONTINÚA HASTA EL BORDE (un intento anterior
  dejó esta zona en gris liso y plano, cortando el livery ahí — eso es
  un ERROR, no lo repitas): el patrón geométrico del livery (franjas
  blancas, rojas y azules) tiene que CONTINUAR sobre toda la
  mentonera / zona frontal-inferior del casco hasta su borde inferior,
  exactamente como en la ilustración de diseño. Ninguna parte de la
  mentonera puede quedar en gris liso, plano ni en un color de relleno
  genérico.
- Wordmark "EDGE" en blanco, tipografía bold itálica, sobre la zona
  inferior lateral (mismo estilo que en la referencia de diseño).
- SIN sticker "DOT" y SIN ninguna otra marca de certificación u
  homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
  negocio del caso, ningún render de este livery las lleva. Si la
  ilustración de diseño muestra alguna, se omite.

VISOR: tintado/oscuro, igual que en la imagen de diseño de referencia
(cambio intencional de este colorway, confirmado como parte del
diseño de carreras, no un error).

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso: no
cambiar el ángulo de cámara ni la altura ni la rotación.

PROHIBIDO ABSOLUTO: no cambiar la forma, silueta, ventilaciones,
mentonera ni pico frontal del molde real. No copiar la forma del
casco de la imagen de diseño si es distinta a la del molde real. No
agregar elementos gráficos que no estén en la lista de arriba. No
cambiar el color de la correa roja. No dejar la mentonera —ni ninguna
otra zona del casco— en gris liso o plano donde la ilustración de
diseño tiene patrón geométrico. No simplificar, atenuar ni reducir la
superficie de los patrones de la zona superior de la calota (ni la
malla de triángulos ni las líneas concéntricas tipo chevron). No
omitir el texto/etiqueta chico que va dentro del marco geométrico
superior.
```

</details>

**Estado:** ✅ generado — ver la auditoría del resultado justo abajo.

### Intento 2 — Colorway 1 vista lateral, resultado auditado

**Estado:** ❌ Falló por un motivo nuevo y más de fondo — los defectos gráficos anteriores se corrigieron, pero el resultado es una ilustración vectorial plana, no una fotografía del casco real.

**Qué mejoró respecto al Intento 1:** los dos defectos puntuales del intento anterior quedaron resueltos. La zona superior de la calota esta vez sí trae el patrón de malla de triángulos completo y extendido sobre la superficie amplia que le corresponde (no la versión tenue y reducida del Intento 1); las líneas geométricas concéntricas tipo chevron aparecen con todas sus capas, sin la simplificación de antes; el texto chico que va dentro del marco geométrico superior —"FOR BLAZING RUNNERS"— apareció; y la mentonera ya no quedó en gris liso: el patrón del livery baja y continúa hasta el borde inferior, como en la ilustración de diseño. O sea que las instrucciones reforzadas del Intento 2 funcionaron para lo que fueron escritas.

**Qué falló — defecto nuevo, de naturaleza distinta a los anteriores:** el resultado no es una fotografía del casco real, es una **ilustración vectorial plana**. Todos los defectos anteriores de este caso eran de *forma* (geometría del molde) o de *contenido gráfico* (qué elementos del livery se aplicaron y dónde); este es de otra clase: el problema está en el **estilo de render / el realismo del material**.

- **Lo que tiene la foto real del molde negro liso (y el resultado debería haber tenido):** es una fotografía de producto — pintura negra mate real con su microtextura, luces y sombras suaves de estudio, reflejos especulares sutiles corriendo sobre las superficies curvas, la textura real de fibra de carbono en la pieza del mecanismo de pivote, la correa roja de tela con su trama visible, y volumen y profundidad tridimensional reales.
- **Lo que salió en cambio:** un dibujo/render vectorial plano — colores planos sin gradientes reales, sin microtextura de pintura, sin reflejos especulares creíbles, sin sombras suaves de estudio, y bordes de las formas demasiado limpios, "de software de diseño". Se parece al mockup de diseño (que es una ilustración 2D plana) mucho más que a la foto de un casco físico existente.
- **Efecto de "combinación de los dos cascos":** como el generador copió también el ESTILO de la ilustración de diseño y no solo su contenido gráfico, el resultado terminó siendo un híbrido entre el mockup y la foto real, en vez de ser la foto real con la pintura aplicada encima. La contaminación no se quedó en el acabado: la forma del pico frontal/spoiler también se corrió hacia la forma más plana y triangular del mockup, en vez de mantener la del molde real fotografiado.
- **Diagnóstico de causa raíz:** el prompt separaba correctamente "fuente de forma" vs. "fuente de diseño gráfico", pero en ningún momento aclaraba que la imagen de diseño es una **ilustración vectorial 2D** y que su ESTILO DE RENDER no se debe copiar — solo su contenido gráfico. Falta un tercer eje explícito además de forma y diseño: el **realismo fotográfico / material**, que tiene que salir del checkpoint fotográfico y nunca del mockup. Sin decirlo, el generador asume que la ilustración también manda en cómo se ve el material, y devuelve un dibujo.

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 3, abajo), que agrega el eje de realismo fotográfico como regla explícita.

### Intento 3 — Colorway 1 vista lateral, fotografía real y no ilustración (tercer eje: realismo de material)

<details><summary>Prompt usado</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista lateral/3-4), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, TRES ROLES QUE NUNCA SE MEZCLAN:
- La FOTO del casco NEGRO LISO (sin ningún gráfico encima) es la
  ÚNICA autoridad de FORMA — pico frontal, silueta de la calota,
  mentonera, ventilaciones, mecanismo de pivote del visor, todo tal
  cual está en esa foto. Copiala sin ninguna variación.
- Esa MISMA foto del casco negro liso es también la ÚNICA autoridad
  de ESTILO DE RENDER Y REALISMO DE MATERIAL — es una fotografía de
  producto real, y el resultado tiene que ser una fotografía igual de
  real: mismo tipo de iluminación, mismos reflejos, misma textura de
  pintura, mismo volumen tridimensional.
- La imagen del casco con el diseño AZUL/BLANCO/ROJO ya aplicado
  (sobre un casco de referencia, no necesariamente el mismo molde) es
  SOLO fuente de CONTENIDO GRÁFICO — qué formas, qué colores y dónde
  va cada elemento, el wordmark "EDGE", los patrones geométricos.
  NUNCA su forma de casco y NUNCA su estilo de render. Esa imagen de
  diseño es una ILUSTRACIÓN VECTORIAL 2D PLANA: el resultado final NO
  debe verse como esa ilustración. Si esa imagen muestra una forma de
  casco distinta a la del molde negro liso, ignorá esa forma por
  completo.

CRÍTICO — EL RESULTADO ES UNA FOTOGRAFÍA, NO UNA ILUSTRACIÓN (defecto
real de un intento anterior, que devolvió un dibujo vectorial plano en
vez de una foto — no lo repitas):
- La salida tiene que ser una FOTOGRAFÍA DE PRODUCTO FOTORREALISTA del
  casco físico real, con exactamente el mismo tratamiento fotográfico
  que la foto del molde negro liso:
  - misma iluminación de estudio, con sus luces y sus sombras suaves;
  - mismos reflejos especulares sutiles sobre las superficies curvas
    de la calota, el pico frontal y la mentonera;
  - misma microtextura de pintura mate real (no color plano digital);
  - misma textura de fibra de carbono en la pieza del mecanismo de
    pivote del visor;
  - misma correa roja de tela, con su trama visible;
  - mismo volumen y misma profundidad tridimensional.
- El livery se aplica como PINTURA REAL sobre la superficie física del
  casco: sigue la curvatura de la carcasa, se deforma con ella en
  perspectiva, y recibe la luz y las sombras de la escena igual que el
  resto del casco. NO es un dibujo plano pegado encima ni una calcomanía
  digital superpuesta.
- PROHIBIDO en cuanto a estilo: colores planos sin gradiente, ausencia
  de reflejos, bordes vectoriales de software de diseño, aspecto de
  mockup o de render 2D. Si el resultado se parece a la ilustración de
  diseño en su acabado, está mal.

PASO 1 — FORMA: reproducí exactamente la forma del casco negro liso
(pico frontal, ventilaciones, mentonera, mecanismo de pivote, correa
roja) antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway azul/blanco/rojo:
- Carcasa principal: azul, con franjas geométricas diagonales blancas
  y rojas.
- ZONA SUPERIOR DE LA CALOTA — REPRODUCIR COMPLETA (un intento
  anterior aplicó estos elementos de forma incompleta y simplificada,
  no lo repitas). La parte de arriba de la calota lleva TRES
  elementos, todos obligatorios y todos con el mismo nivel de detalle
  que la ilustración de diseño:
  (a) Patrón de textura fina tipo malla / triángulos entrelazados en
      blanco sobre azul, cubriendo una ZONA AMPLIA de la parte
      superior y trasera de la calota, con la misma extensión y la
      misma intensidad que en la ilustración — NO una versión tenue,
      NO una versión reducida a una franja chica.
  (b) Líneas geométricas concéntricas tipo chevron / marco anguloso
      en azul oscuro y blanco en la zona superior, con TODAS sus
      capas y TODAS sus líneas tal como aparecen en la ilustración —
      contá las líneas de la referencia y reproducilas todas; NO una
      versión simplificada con menos capas ni menos líneas.
  (c) El pequeño texto/etiqueta que aparece DENTRO del marco
      geométrico superior de la ilustración: tiene que estar
      presente, en la misma posición y con el mismo tamaño relativo.
      No lo omitas.
- MENTONERA — EL DISEÑO CONTINÚA HASTA EL BORDE (un intento anterior
  dejó esta zona en gris liso y plano, cortando el livery ahí — eso es
  un ERROR, no lo repitas): el patrón geométrico del livery (franjas
  blancas, rojas y azules) tiene que CONTINUAR sobre toda la
  mentonera / zona frontal-inferior del casco hasta su borde inferior,
  exactamente como en la ilustración de diseño. Ninguna parte de la
  mentonera puede quedar en gris liso, plano ni en un color de relleno
  genérico.
- Wordmark "EDGE" en blanco, tipografía bold itálica, sobre la zona
  inferior lateral (mismo estilo que en la referencia de diseño).
- SIN sticker "DOT" y SIN ninguna otra marca de certificación u
  homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
  negocio del caso, ningún render de este livery las lleva. Si la
  ilustración de diseño muestra alguna, se omite.

VISOR: tintado/oscuro, igual que en la imagen de diseño de referencia
(cambio intencional de este colorway, confirmado como parte del
diseño de carreras, no un error).

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso: no
cambiar el ángulo de cámara ni la altura ni la rotación.

PROHIBIDO ABSOLUTO: no cambiar la forma, silueta, ventilaciones,
mentonera ni pico frontal del molde real. No copiar la forma del
casco de la imagen de diseño si es distinta a la del molde real. No
agregar elementos gráficos que no estén en la lista de arriba. No
cambiar el color de la correa roja. No dejar la mentonera —ni ninguna
otra zona del casco— en gris liso o plano donde la ilustración de
diseño tiene patrón geométrico. No simplificar, atenuar ni reducir la
superficie de los patrones de la zona superior de la calota (ni la
malla de triángulos ni las líneas concéntricas tipo chevron). No
omitir el texto/etiqueta chico que va dentro del marco geométrico
superior. No entregar una ilustración, un dibujo vectorial, un render
plano ni un mockup de diseño — tiene que ser una fotografía
fotorrealista del casco físico real. No copiar el estilo de render de
la imagen de diseño (de esa imagen se toma SOLO el contenido gráfico).
No aplanar el material del casco ni eliminar los reflejos, las sombras
ni las texturas reales (pintura mate, fibra de carbono del pivote,
tela de la correa). No contaminar la forma del pico frontal/spoiler
con la forma más plana y triangular del mockup: el pico es el del
molde real fotografiado.
```

</details>

**Estado:** ✅ generado — ver la auditoría del resultado justo abajo.

### Intento 3 — Colorway 1 vista lateral, resultado auditado

**Estado:** ⚠️ Avance grande — los dos objetivos que se venían persiguiendo (realismo fotográfico y livery completo) quedaron resueltos, pero aparecen 3 defectos, todos concentrados en la misma zona: el spoiler / la parte alta de la calota.

**Qué salió bien (2 avances grandes):**

1. **El realismo fotográfico se resolvió — el tercer eje funcionó.** El resultado ya es una **fotografía de producto real**, no la ilustración vectorial plana que había devuelto el Intento 2: tiene microtextura de pintura mate, iluminación de estudio con sus sombras suaves, reflejos especulares creíbles corriendo sobre las superficies curvas, la textura real de fibra de carbono en la pieza del mecanismo de pivote y la correa roja de tela con su trama visible. La regla explícita de "el resultado es una FOTOGRAFÍA, no una ilustración" que se agregó como tercer eje en el Intento 3 hizo exactamente lo que tenía que hacer.
2. **El contenido del livery quedó completo.** Están todos los elementos: el patrón de malla de triángulos con buena extensión, las líneas geométricas concéntricas tipo chevron con sus capas, el texto chico "FOR BLAZING RUNNERS" dentro del marco geométrico superior (que faltaba en el Intento 1), el wordmark "EDGE", las franjas rojas y blancas de la zona baja, los chevrones "XXX" y la etiqueta chica "X40". La mentonera ya no está en gris liso: el patrón baja y continúa hasta el borde inferior. El visor tintado y el ángulo de cámara también coinciden con la referencia.

**Qué falló (3 defectos, todos en la zona del spoiler / parte alta):**

1. **El spoiler se contaminó con la forma del mockup y además aparece duplicado.** En la foto del molde negro liso, el spoiler trasero es una pieza **puntiaguda, relativamente compacta y angulada hacia atrás-arriba**. En el resultado salió notoriamente **más grande y más plano/triangular**, con la proporción del casco de la ilustración de diseño en vez de la del molde real. Y peor todavía: se ven **DOS formas de spoiler superpuestas/encimadas**, como si el generador hubiera dibujado el spoiler del molde real y encima el del mockup, sin decidirse por ninguno de los dos. Es el mismo tipo de contaminación de forma que el checklist Tipo A ya cubre con la separación **"fuente de forma" vs. "fuente de diseño gráfico"**, pero acá reaparece concentrado en una sola pieza en vez de en el casco entero — el prompt del Intento 3 ya prohibía explícitamente contaminar el pico frontal/spoiler con la forma del mockup y aun así ocurrió, lo que confirma que esa pieza necesita una instrucción propia y mucho más específica.
2. **El spoiler quedó blanco con patrón de malla en vez de azul sólido.** En la ilustración de diseño, el spoiler es una pieza en **AZUL SÓLIDO**, uniforme, claramente diferenciada del resto del casco. En el resultado quedó blanco/celeste claro y cubierto por el patrón de malla de triángulos, perdiendo su color propio. **Es exactamente el mismo defecto ya detectado en la vista trasera de este mismo colorway** (ver el Intento 3 de la vista trasera, donde hubo que agregar un bloque específico de "SPOILER TRASERO — AZUL SÓLIDO"): el spoiler pierde su color en las dos vistas, o sea que es un **patrón de falla del caso** y no un accidente aislado de una corrida.
3. **Pieza negra extra inventada en la parte alta de la calota.** Aparece una pieza/panel negro alargado sobre la zona alta de la calota que no se corresponde con ninguna de las ventilaciones del molde real — con toda probabilidad es otra materialización de una forma gráfica del mockup interpretada como si fuera un relieve físico. Cae de lleno bajo el ítem del checklist Tipo A **"todo lo que está en el mockup de diseño es pintura plana, nunca una pieza física nueva"**, el mismo que hubo que activar en la vista trasera de este colorway por las aletas y paneles inventados.

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 4, abajo).

### Intento 4 — Colorway 1 vista lateral, spoiler con la forma del molde real y en azul sólido

<details><summary>Prompt usado</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista lateral/3-4), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, TRES ROLES QUE NUNCA SE MEZCLAN:
- La FOTO del casco NEGRO LISO (sin ningún gráfico encima) es la
  ÚNICA autoridad de FORMA — pico frontal, silueta de la calota,
  mentonera, ventilaciones, mecanismo de pivote del visor, todo tal
  cual está en esa foto. Copiala sin ninguna variación.
- Esa MISMA foto del casco negro liso es también la ÚNICA autoridad
  de ESTILO DE RENDER Y REALISMO DE MATERIAL — es una fotografía de
  producto real, y el resultado tiene que ser una fotografía igual de
  real: mismo tipo de iluminación, mismos reflejos, misma textura de
  pintura, mismo volumen tridimensional.
- La imagen del casco con el diseño AZUL/BLANCO/ROJO ya aplicado
  (sobre un casco de referencia, no necesariamente el mismo molde) es
  SOLO fuente de CONTENIDO GRÁFICO — qué formas, qué colores y dónde
  va cada elemento, el wordmark "EDGE", los patrones geométricos.
  NUNCA su forma de casco y NUNCA su estilo de render. Esa imagen de
  diseño es una ILUSTRACIÓN VECTORIAL 2D PLANA: el resultado final NO
  debe verse como esa ilustración. Si esa imagen muestra una forma de
  casco distinta a la del molde negro liso, ignorá esa forma por
  completo.

CRÍTICO — EL RESULTADO ES UNA FOTOGRAFÍA, NO UNA ILUSTRACIÓN (defecto
real de un intento anterior, que devolvió un dibujo vectorial plano en
vez de una foto — no lo repitas):
- La salida tiene que ser una FOTOGRAFÍA DE PRODUCTO FOTORREALISTA del
  casco físico real, con exactamente el mismo tratamiento fotográfico
  que la foto del molde negro liso:
  - misma iluminación de estudio, con sus luces y sus sombras suaves;
  - mismos reflejos especulares sutiles sobre las superficies curvas
    de la calota, el pico frontal y la mentonera;
  - misma microtextura de pintura mate real (no color plano digital);
  - misma textura de fibra de carbono en la pieza del mecanismo de
    pivote del visor;
  - misma correa roja de tela, con su trama visible;
  - mismo volumen y misma profundidad tridimensional.
- El livery se aplica como PINTURA REAL sobre la superficie física del
  casco: sigue la curvatura de la carcasa, se deforma con ella en
  perspectiva, y recibe la luz y las sombras de la escena igual que el
  resto del casco. NO es un dibujo plano pegado encima ni una calcomanía
  digital superpuesta.
- PROHIBIDO en cuanto a estilo: colores planos sin gradiente, ausencia
  de reflejos, bordes vectoriales de software de diseño, aspecto de
  mockup o de render 2D. Si el resultado se parece a la ilustración de
  diseño en su acabado, está mal.

PASO 1 — FORMA: reproducí exactamente la forma del casco negro liso
(pico frontal, ventilaciones, mentonera, mecanismo de pivote, correa
roja) antes de aplicar cualquier gráfico.

CRÍTICO — EL SPOILER: UNO SOLO, Y CON LA FORMA DEL MOLDE REAL (defecto
real de un intento anterior — no lo repitas). En la foto del casco
negro liso, el spoiler trasero es una pieza PUNTIAGUDA, COMPACTA y
ANGULADA HACIA ATRÁS-ARRIBA, con una forma y un tamaño concretos:
reproducí ESA forma y ESE tamaño exactos, los que muestra la foto del
molde negro liso, y ninguna otra.
- Un intento anterior lo dibujó MÁS GRANDE y MÁS PLANO de lo que es,
  copiando la proporción del spoiler del casco del MOCKUP de diseño en
  vez de la del molde real. Eso está mal: la proporción del spoiler
  sale SIEMPRE de la foto del molde real.
- Ese mismo intento dejó además DOS FORMAS DE SPOILER SUPERPUESTAS /
  ENCIMADAS, como si hubiera dibujado el spoiler del molde real y
  encima el del mockup sin decidirse por uno. Eso también está mal.
- Dibujá UN SOLO SPOILER, uno y nada más que uno, con la forma, el
  tamaño y el ángulo del molde real. No mezcles, no superpongas, no
  promedies ni combines la forma del spoiler del mockup con la del
  molde real: la del mockup se ignora por completo.

CRÍTICO — NO INVENTES NINGUNA PIEZA FÍSICA (defecto real de un intento
anterior: apareció un panel negro alargado en la parte alta de la
calota que NO existe en el molde real — no lo repitas): el casco tiene
EXACTAMENTE las piezas físicas que se ven en la foto del molde negro
liso, ni una más — la calota, el pico frontal/spoiler, la mentonera,
las ventilaciones tal como están, el mecanismo de pivote del visor y
la correa. TODO lo que aparece en la ilustración de diseño son
GRÁFICOS PLANOS PINTADOS sobre una superficie lisa: las líneas, los
chevrones, las formas angulares, el patrón de malla y las etiquetas
son PINTURA, nunca relieves, paneles, aletas, salientes ni piezas
nuevas. Si en la ilustración una forma parece una pieza en relieve,
igual va como pintura plana.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway azul/blanco/rojo:
- Carcasa principal: azul, con franjas geométricas diagonales blancas
  y rojas.
- SPOILER — AZUL SÓLIDO (defecto real de un intento anterior: el
  spoiler quedó blanco y cubierto por el patrón de malla, perdiendo su
  color propio; es el MISMO defecto que ya ocurrió en la vista trasera
  de este colorway, así que prestale atención especial — no lo
  repitas). En la ilustración de diseño, el spoiler es una pieza en
  AZUL SÓLIDO, uniforme, claramente diferenciada del resto del casco:
  sin patrón de malla de triángulos encima, sin blanco, sin líneas ni
  chevrones encima. Pintalo de azul sólido y que se distinga a simple
  vista del patrón que lo rodea.
- ZONA SUPERIOR DE LA CALOTA — REPRODUCIR COMPLETA (un intento
  anterior aplicó estos elementos de forma incompleta y simplificada,
  no lo repitas). La parte de arriba de la calota lleva TRES
  elementos, todos obligatorios y todos con el mismo nivel de detalle
  que la ilustración de diseño:
  (a) Patrón de textura fina tipo malla / triángulos entrelazados en
      blanco sobre azul, cubriendo una ZONA AMPLIA de la parte
      superior y trasera de la calota, con la misma extensión y la
      misma intensidad que en la ilustración — NO una versión tenue,
      NO una versión reducida a una franja chica.
  (b) Líneas geométricas concéntricas tipo chevron / marco anguloso
      en azul oscuro y blanco en la zona superior, con TODAS sus
      capas y TODAS sus líneas tal como aparecen en la ilustración —
      contá las líneas de la referencia y reproducilas todas; NO una
      versión simplificada con menos capas ni menos líneas.
  (c) El pequeño texto/etiqueta que aparece DENTRO del marco
      geométrico superior de la ilustración: tiene que estar
      presente, en la misma posición y con el mismo tamaño relativo.
      No lo omitas.
- MENTONERA — EL DISEÑO CONTINÚA HASTA EL BORDE (un intento anterior
  dejó esta zona en gris liso y plano, cortando el livery ahí — eso es
  un ERROR, no lo repitas): el patrón geométrico del livery (franjas
  blancas, rojas y azules) tiene que CONTINUAR sobre toda la
  mentonera / zona frontal-inferior del casco hasta su borde inferior,
  exactamente como en la ilustración de diseño. Ninguna parte de la
  mentonera puede quedar en gris liso, plano ni en un color de relleno
  genérico.
- Wordmark "EDGE" en blanco, tipografía bold itálica, sobre la zona
  inferior lateral (mismo estilo que en la referencia de diseño).
- SIN sticker "DOT" y SIN ninguna otra marca de certificación u
  homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
  negocio del caso, ningún render de este livery las lleva. Si la
  ilustración de diseño muestra alguna, se omite.

VISOR: tintado/oscuro, igual que en la imagen de diseño de referencia
(cambio intencional de este colorway, confirmado como parte del
diseño de carreras, no un error).

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso: no
cambiar el ángulo de cámara ni la altura ni la rotación.

PROHIBIDO ABSOLUTO: no cambiar la forma, silueta, ventilaciones,
mentonera ni pico frontal del molde real. No copiar la forma del
casco de la imagen de diseño si es distinta a la del molde real. No
agregar elementos gráficos que no estén en la lista de arriba. No
cambiar el color de la correa roja. No dejar la mentonera —ni ninguna
otra zona del casco— en gris liso o plano donde la ilustración de
diseño tiene patrón geométrico. No simplificar, atenuar ni reducir la
superficie de los patrones de la zona superior de la calota (ni la
malla de triángulos ni las líneas concéntricas tipo chevron). No
omitir el texto/etiqueta chico que va dentro del marco geométrico
superior. No entregar una ilustración, un dibujo vectorial, un render
plano ni un mockup de diseño — tiene que ser una fotografía
fotorrealista del casco físico real. No copiar el estilo de render de
la imagen de diseño (de esa imagen se toma SOLO el contenido gráfico).
No aplanar el material del casco ni eliminar los reflejos, las sombras
ni las texturas reales (pintura mate, fibra de carbono del pivote,
tela de la correa). No contaminar la forma del pico frontal/spoiler
con la forma más plana y triangular del mockup: el pico es el del
molde real fotografiado. No dibujar más de un spoiler ni superponer
dos formas de spoiler: va UNO SOLO. No agrandar, no aplanar ni cambiar
la proporción del spoiler respecto de la que tiene en el molde real.
No dejar el spoiler blanco ni cubierto por el patrón de malla de
triángulos: va en AZUL SÓLIDO. No agregar ninguna pieza, panel,
saliente ni relieve que no esté en la foto del molde negro liso —
incluido cualquier panel negro alargado en la parte alta de la calota:
todo elemento del diseño es pintura plana.
```

</details>

**Estado:** ✅ generado y aprobado en lo esencial — ver la auditoría del resultado justo abajo.

### Intento 4 — Colorway 1 vista lateral, resultado auditado

**Estado:** ✅ Aprobado en lo esencial — el usuario lo calificó de "espectacular". Quedan 3 ajustes puntuales, ninguno de geometría general ni de realismo.

**Qué salió bien:** el resultado es una fotografía de producto real y bien resuelta en todos los ejes que se venían persiguiendo. El usuario destacó que **"el bevel/relieve del casco lo hizo excelente, los detalles, los colores, la perspectiva, todo fue espectacular"**: el volumen y el relieve de la carcasa se leen como los de un casco físico, los detalles finos están, los colores del livery son los correctos y la perspectiva y el ángulo de cámara coinciden con los del molde real. El realismo fotográfico se sostiene —microtextura de pintura mate, iluminación de estudio con sus sombras suaves, reflejos especulares sobre las superficies curvas, fibra de carbono en el mecanismo de pivote y la trama de la correa roja—. Y lo más importante: **los 3 defectos que este colorway venía arrastrando quedaron todos resueltos en el mismo intento**:

1. **Realismo** — sigue siendo una fotografía y no la ilustración vectorial plana del Intento 2 (el tercer eje se mantiene funcionando corrida tras corrida).
2. **Spoiler** — se resolvió por completo: hay **un solo spoiler**, con la **forma y la proporción del molde real** (puntiaguda, compacta, angulada hacia atrás-arriba, sin la versión más grande y plana del mockup, sin las dos formas superpuestas del Intento 3) y en **azul sólido**, sin el patrón de malla ni el blanco que se le habían comido el color. La instrucción propia de forma más el punto propio de color hicieron exactamente lo que tenían que hacer, y además cerraron el defecto que era un patrón de falla del caso en las dos vistas.
3. **Patrones completos** — la zona superior de la calota trae la malla de triángulos con su extensión y las líneas geométricas concéntricas tipo chevron con todas sus capas, la mentonera mantiene el patrón bajando hasta el borde inferior sin ningún gris liso, y el **texto chico "FOR EVERYONE PLANTERS" está presente dentro del marco geométrico superior**.

**Qué hay que ajustar (3 ediciones puntuales, no defectos de fidelidad general):**

1. **Pieza negra tipo toma de aire inventada sobre el lateral.** En la zona media-baja del lateral del casco, justo encima del wordmark "EDGE", aparece montada una **pieza rectangular negra tipo toma de aire / ventilación**, con una ranura horizontal y textura de plástico rugoso, aplicada encima del livery azul/blanco/rojo. Esa pieza **no existe en la foto del molde negro liso**: es una invención del generador. Cae de lleno bajo el ítem del checklist Tipo A **"todo lo que está en el mockup de diseño es pintura plana, nunca una pieza física nueva"** — el mismo que ya hubo que activar en la vista trasera de este colorway por las aletas y paneles inventados, y en el Intento 3 de esta misma vista por el panel negro alargado de la parte alta. El dato interesante es que **el prompt del Intento 4 ya prohibía explícitamente inventar piezas físicas, con un bloque propio, y el generador igual inventó una**: la prohibición general no siempre alcanza, y cuando un defecto de este tipo se repite hay que pasar de la regla genérica a **señalar la pieza concreta, con su ubicación y su descripción**, para que quede sin margen de interpretación.
2. **Sticker "DOT" que no corresponde a esta vista.** En el borde inferior trasero del casco aparece una **etiqueta/sticker blanco con el texto "DOT"** y unas líneas de texto chico debajo. El sticker DOT va en la **vista trasera**, no en la lateral — el prompt ya lo aclaraba, pero el generador igual lo colocó acá. Hay que eliminarlo y dejar el livery continuo en su lugar.
3. **Faltan las 3 marcas en "X" de la mentonera.** En la **zona inferior delantera** del casco (la parte baja de la mentonera, cerca del borde inferior), el diseño original lleva **tres marcas en forma de "X" / chevrones**, alineadas, en blanco sobre el fondo azul oscuro del livery — es el detalle que en el mockup de diseño aparece como "XXX", el mismo que en el Intento 3 sí había salido. En este resultado esa zona quedó sin ellas.

**Qué hay que hacer:** resolverlo por **edición puntual sobre este resultado** (Intento 5, abajo), **no por regeneración**. Aplica el ítem del checklist Tipo A *"Ajuste puntual sobre un resultado ya aprobado = edición, no regeneración completa"*: la base ya es buena —geometría del molde, realismo fotográfico, spoiler resuelto y livery completo— y volver a generar pondría en juego de nuevo todo eso, con el riesgo concreto y ya documentado en este mismo caso de que reaparezcan el drift del spoiler o la caída hacia la ilustración vectorial plana. No tiene sentido arriesgar lo que costó cuatro intentos conseguir para corregir 3 zonas puntuales.

### Intento 5 — Colorway 1 vista lateral, edición puntual: quitar 2 elementos y agregar las 3 "X"

<details><summary>Prompt usado (edición, no generación)</summary>

```
Esto es una EDICIÓN PUNTUAL sobre la imagen adjunta, NO una
generación nueva desde cero. La imagen adjunta es un resultado YA
APROBADO: su forma, su realismo, su perspectiva y su diseño están
bien tal cual están. Se devuelve la MISMA imagen, IDÉNTICA, salvo
por TRES cambios puntuales: se eliminan 2 elementos y se agrega 1.
Ninguna otra línea, forma, textura, color ni detalle cambia en
ninguna parte de la imagen.

TODO ESTO NO SE TOCA — QUEDA PIXEL POR PIXEL IGUAL:
- La forma y la geometría completa del casco: el pico frontal /
  spoiler con su forma exacta y su azul sólido, la silueta de la
  calota, la mentonera, las ventilaciones reales del molde, el
  mecanismo de pivote del visor con su textura de fibra de carbono
  y la correa roja.
- El visor tintado/oscuro, con su mismo material y su mismo tono.
- El realismo fotográfico completo: iluminación de estudio, sombras
  suaves, reflejos especulares sobre las superficies curvas,
  microtextura de pintura mate, y el volumen y el relieve/bevel de
  la carcasa. La imagen sigue siendo una fotografía de producto,
  con exactamente el mismo tratamiento fotográfico.
- El fondo, el encuadre y el ángulo de cámara.
- El wordmark "EDGE".
- Todos los elementos del livery: el patrón de malla triangular de
  la calota superior, las líneas geométricas concéntricas tipo
  chevron con TODAS sus capas, el texto chico dentro del marco
  geométrico superior, las franjas rojas y blancas y el patrón de
  la mentonera.

CAMBIO 1 — ELIMINAR LA PIEZA NEGRA TIPO TOMA DE AIRE DEL LATERAL:
En la zona MEDIA-BAJA DEL LATERAL del casco, JUSTO ENCIMA del
wordmark "EDGE", hay montada una PIEZA RECTANGULAR NEGRA tipo toma
de aire / ventilación, con una ranura horizontal y textura de
plástico rugoso, aplicada encima del livery azul/blanco/rojo. Esa
pieza NO EXISTE en el molde real del casco: es una invención, y hay
que ELIMINARLA POR COMPLETO.
En su lugar va la superficie del casco con el LIVERY CONTINUO, como
si esa pieza nunca hubiera estado ahí:
- el patrón geométrico que la rodea se COMPLETA POR DEBAJO,
  siguiendo la curvatura del casco y la lógica del diseño, con las
  mismas líneas, los mismos colores y el mismo trazado que traen
  las zonas contiguas;
- con la misma iluminación, los mismos reflejos y el mismo material
  (pintura mate) que el resto de la superficie.
No dejes ningún hueco, ningún parche, ninguna sombra residual,
ningún contorno ni ninguna marca de dónde estaba la pieza.

CAMBIO 2 — ELIMINAR EL STICKER "DOT":
En el BORDE INFERIOR TRASERO del casco hay una ETIQUETA / STICKER
BLANCO con el texto "DOT" y unas líneas de texto chico debajo. En
esta vista lateral ese sticker NO CORRESPONDE (el sticker DOT va en
la vista trasera). Eliminalo por completo, con el mismo criterio que
el cambio 1: en su lugar va la superficie del casco con el livery
continuo, siguiendo la curvatura, con la misma luz y el mismo
material, sin hueco, sin parche, sin sombra residual y sin ninguna
marca de dónde estaba.

CAMBIO 3 — AGREGAR LAS 3 MARCAS EN "X" DE LA MENTONERA:
En la ZONA INFERIOR DELANTERA del casco (la parte baja de la
mentonera, cerca del borde inferior), sobre el fondo AZUL OSCURO del
livery, faltan TRES MARCAS EN FORMA DE "X" / CHEVRONES. Agregalas:
- son 3 marcas IGUALES ENTRE SÍ, ALINEADAS, en BLANCO;
- con el MISMO ESTILO GRÁFICO y el MISMO TAMAÑO RELATIVO que en la
  ilustración de diseño, donde ese detalle aparece como "XXX".
Tienen que verse como PINTURA sobre la superficie física del casco:
siguen la curvatura de la mentonera, se deforman con ella en
perspectiva, y reciben exactamente la misma luz y las mismas
sombras que el resto de la superficie. NUNCA como una calcomanía
plana pegada encima, y NUNCA como un elemento en relieve, una pieza
o un saliente.

CRÍTICO — LAS ZONAS EDITADAS TAMPOCO SE REDIBUJAN (defecto real de
un intento anterior de edición en este mismo caso — no lo repitas):
En las 3 zonas que se tocan, lo ÚNICO que cambia es lo indicado:
sacar la pieza negra, sacar el sticker "DOT" y agregar las 3 "X".
TODO el resto del dibujo de esas zonas se conserva IDÉNTICO — las
líneas, los patrones, las franjas, las capas, las texturas, los
colores y cada trazo en su misma posición exacta. Que una zona esté
en la lista de cambios NO es permiso para rehacerla.
Un intento anterior de edición en este mismo caso interpretó
"cambiá esta zona" como licencia para REDIBUJAR LA ZONA ENTERA, y la
devolvió simplificada: el marco geométrico reemplazado por una forma
más limpia con menos líneas, el patrón de malla reducido en densidad
y en superficie, el texto chico eliminado y varias capas de líneas
perdidas. ESO ESTÁ PROHIBIDO. No se rediseña, no se simplifica, no
se reinterpreta: se quitan dos elementos y se agrega uno.

PROHIBIDO ABSOLUTO — NO TOQUES NADA MÁS:
- No redibujes el casco ni ninguna de sus partes.
- No cambies la geometría, el spoiler, la silueta ni las
  proporciones.
- No vuelvas a renderizar el realismo fotográfico: la iluminación,
  las sombras, los reflejos y las texturas de la imagen adjunta se
  conservan tal cual.
- No muevas, redimensiones, agregues ni elimines ningún otro
  elemento del livery.
- No cambies el ángulo de cámara, el encuadre ni el fondo.
- No conviertas la imagen en una ilustración, un render plano ni un
  mockup: sigue siendo la misma fotografía.
- No dejes ningún hueco, parche ni contorno visible donde estaban
  los 2 elementos eliminados.
- No agregues ninguna otra pieza física, panel, saliente, relieve ni
  toma de aire que no esté en el molde real.

VERIFICACIÓN FINAL ANTES DE ENTREGAR:
Compará tu resultado contra la imagen adjunta y confirmá que las
ÚNICAS diferencias entre las dos sean las 3 indicadas: la pieza
negra tipo toma de aire ya no está, el sticker "DOT" ya no está y
las 3 marcas en "X" aparecen en la zona inferior delantera de la
mentonera. Cualquier otra diferencia de dibujo —una línea que falta,
un patrón menos denso, un texto ausente, una forma distinta, un
color corrido— es un ERROR: corregila antes de entregar.
```

</details>

**Estado:** ✅ generado — se corrió como edición de la imagen aprobada del Intento 4 y devolvió **3 imágenes de resultado**. Ver la auditoría justo abajo.

**Qué hay que hacer:** auditar las 3 imágenes con el checklist del bloque siguiente — verificar que los 2 elementos eliminados no dejen hueco ni marca, que las 3 "X" estén integradas como pintura sobre la superficie, y que nada más de la imagen haya cambiado.

### Intento 5 — resultado auditado (edición de 3 cambios)

**Estado:** 🟡 **auditoría preparada, veredicto pendiente del usuario.** Este bloque se escribió **sin haber visto las imágenes**: el agente que lo preparó no tiene acceso a los píxeles del resultado. Todo lo que sigue es **material de auditoría** —qué preguntar, qué riesgo esperar y qué prompt correctivo corresponde según el escenario—, no un dictamen sobre el resultado real. **Nada de lo de abajo afirma que un defecto ocurrió**: las casillas de veredicto están vacías a propósito y las completa quien mire las imágenes.

**Regla de método para estas 3 imágenes:** el generador **no es determinístico** (ítem ya registrado en el checklist Tipo A). Las 3 imágenes salieron del **mismo prompt, sin cambiarle una letra**, así que las diferencias entre ellas son variación del generador y no efecto del texto. En consecuencia: **auditar las 3 por separado, con el mismo checklist, y elegir la mejor** — no promediar impresiones ni juzgar el prompt por la peor de las tres. Si las 3 fallan en el mismo punto, ahí sí el problema es del prompt y corresponde el correctivo del escenario que aplique. Si falla 1 de 3, alcanza con quedarse con una de las buenas.

#### Checklist de verificación — cambio por cambio

Cada pregunta se contesta **sí / no** mirando el resultado **al lado de la imagen aprobada del Intento 4** (comparación pareada, no de memoria).

**CAMBIO 1 — Eliminar la pieza negra tipo toma de aire del lateral** (zona media-baja del lateral, justo encima del wordmark "EDGE"):

1. ¿Desapareció **por completo** la pieza negra rectangular tipo toma de aire, o queda todavía un pedazo de ella (un borde, la ranura horizontal, una esquina)?
2. ¿Quedó alguna **sombra, contorno, halo, relieve residual o marca tenue** con la silueta de la pieza en el lugar donde estaba?
3. En su lugar, ¿hay **superficie pintada con el livery que corresponde a esa zona** (colores, líneas y franjas del patrón), o quedó un **parche de color plano** —azul liso, gris, negro— tapando el hueco?
4. ¿Las líneas y las franjas del livery **continúan de un lado al otro** de la zona reconstruida? Concretamente: una línea que entra por el borde izquierdo del área, ¿sale por el derecho **alineada y con el mismo grosor**, o se corta, se desalinea o cambia de ángulo?
5. ¿La zona reconstruida tiene la **misma iluminación, los mismos reflejos y la misma microtextura de pintura mate** que la superficie vecina, o se lee como un parche más liso, más brillante o más plano (una "curita" visible)?
6. ¿Apareció **alguna otra pieza física** en su lugar o cerca —otra toma de aire, un panel, una ranura, un saliente, un relieve— que no esté en la foto del molde negro liso?

**CAMBIO 2 — Eliminar el sticker "DOT"** (borde inferior trasero del casco):

7. ¿Desapareció **por completo** la etiqueta blanca "DOT", **incluidas las líneas de texto chico que tenía debajo**, o sobrevive parte del sticker?
8. ¿Quedó un **fantasma**: un rectángulo más claro o más oscuro, un borde, un halo o restos de texto ilegible donde estaba?
9. Debajo, ¿quedó la **superficie pintada limpia y continua** con el livery de esa zona, o un parche de color plano?
10. ¿Se eliminó **solo el "DOT"** y no otros textos ni etiquetas chicas del livery? Verificar puntualmente que sigan presentes: la etiqueta chica **"X40"**, el **texto chico dentro del marco geométrico superior** y el wordmark **"EDGE"**.

**CAMBIO 3 — Agregar las 3 marcas en "X" de la mentonera** (parte baja de la mentonera, zona inferior delantera, cerca del borde inferior):

11. **Contarlas:** ¿hay **exactamente TRES**? No dos, no cuatro, no un bloque continuo que se lee como una sola forma.
12. ¿Están **alineadas horizontalmente entre sí**, a la misma altura y con la misma separación entre una y otra?
13. ¿Están en la **parte baja de la mentonera**, cerca del borde inferior — y no corridas hacia el lateral, hacia la ventilación, hacia el visor o encima del wordmark "EDGE"?
14. ¿Son **iguales entre sí** en forma y tamaño, y el tamaño relativo es el del "XXX" del mockup —ni miniaturas casi invisibles, ni marcas desproporcionadamente grandes?
15. ¿Están en **blanco sobre el fondo azul oscuro** del livery, o salieron de otro color / con contorno / con relleno distinto?
16. ¿Se leen como **pintura sobre la superficie física** —siguen la curvatura de la mentonera, se deforman en perspectiva y reciben la misma luz y las mismas sombras que el resto—, o como una **calcomanía plana pegada encima**, un **relieve** o una **muesca tallada** en el plástico?

**REQUISITO 4 — Nada más cambió** (lo que el prompt exigía congelar):

17. **Spoiler / pico frontal** — es la pieza que falla en **todas** las vistas de este caso: ¿sigue habiendo **UNO SOLO**, con la forma **puntiaguda, compacta y angulada hacia atrás-arriba** del molde real, del mismo tamaño, y en **azul sólido** sin patrón de malla, sin blanco y sin líneas encima?
18. **Visor** — ¿mismo tono tintado/oscuro, mismo material, sin aclararse, sin oscurecerse y sin reflejos nuevos?
19. **Zona superior de la calota** — ¿el patrón de malla de triángulos conserva la **misma densidad y la misma extensión**? ¿Las líneas geométricas concéntricas tipo chevron conservan **todas sus capas y la misma cantidad de líneas**? ¿El **texto chico dentro del marco geométrico** sigue presente y del mismo tamaño?
20. **Wordmark "EDGE"** — es el vecino inmediato de la zona del Cambio 1 y por eso el más expuesto: ¿misma posición, mismo tamaño, misma tipografía bold itálica, sin desplazarse ni cambiar de grosor?
21. **Mentonera** — más allá de las 3 "X" agregadas, ¿el patrón del livery sigue **bajando hasta el borde inferior**, sin ninguna zona en gris liso ni en color de relleno genérico?
22. **Piezas del molde real** — ¿siguen iguales el mecanismo de pivote con su **textura de fibra de carbono**, la **correa roja** con su trama de tela y la **goma del borde inferior negra**?
23. **Realismo fotográfico** — ¿sigue siendo una **fotografía de producto**, con la misma iluminación de estudio, las mismas sombras suaves, los mismos reflejos especulares y el mismo bevel/relieve de la carcasa? ¿O el resultado se aplanó hacia **ilustración, render plano o mockup**?
24. **Encuadre** — ¿mismo ángulo de cámara, misma altura, misma rotación, mismo fondo, mismo encuadre y misma proporción de imagen?
25. **Chequeo global final** — poniendo las dos imágenes una al lado de la otra: ¿las **únicas 3 diferencias perceptibles** son las pedidas? Cualquier cuarta diferencia —una línea que falta, un patrón menos denso, un texto ausente, una forma distinta, un color corrido— es un defecto.

#### Riesgo anticipado por cambio

Ninguno de estos riesgos es una predicción sobre este resultado: son los **modos de falla que este caso ya tuvo documentados**, y se listan para saber dónde mirar primero.

| Cambio | Riesgo anticipado | De dónde sale (precedente real del caso) |
|---|---|---|
| **1 — Quitar la pieza negra** | **Redibujado de la zona en vez de borrado.** Nombrar una zona como "la que hay que cambiar" le da licencia al generador para rehacerla entera y devolverla **simplificada**: menos líneas, patrón menos denso, textos chicos perdidos. | Intento 2→3 del **Colorway 2 lateral**: un pedido de recolorear un rombo volvió con toda la zona alta redibujada (marco concéntrico reemplazado por un hexágono con menos líneas, malla reducida, texto chico eliminado). |
| **1 — Quitar la pieza negra** | **Borrado incompleto / cobertura parcial**: queda un resto de la pieza (un borde, la ranura) o un parche de color plano en lugar del livery reconstruido. El borrado no es una tarea sino dos —**eliminar** y **reconstruir el dibujo que va debajo**—, y la segunda es la que se saltea. | Intento 3→4 del **Colorway 2 lateral**: el recoloreo se aplicó a la mayor parte de la zona pero un grupo de barras de la parte baja-izquierda quedó con el color viejo. |
| **1 — Quitar la pieza negra** | **Al borrar una pieza, el generador inventa otra en su lugar** (otra toma de aire, un panel, un relieve), porque interpreta las formas angulares del livery como volúmenes físicos. | Ítem Tipo A *"todo lo que está en el mockup es pintura plana, nunca una pieza física nueva"* — activado ya **tres veces** en este caso: aletas y paneles en la trasera CW1, panel negro alargado en el Intento 3 lateral CW1, y la propia toma de aire del Intento 4. |
| **2 — Quitar el sticker "DOT"** | **Fantasma del sticker**: rectángulo más claro, halo, borde o restos de texto ilegible donde estaba, en vez de superficie limpia. | Checklist **Tipo D**, ítems *"sin restos fantasma"* y *"no inventar textura nueva en el área limpiada"*. |
| **2 — Quitar el sticker "DOT"** | **Borrado de más**: el generador se lleva puestos otros textos chicos cercanos —"X40", el texto del marco geométrico superior— por asociación ("son todos textos chicos"). | Modo de falla de simplificación ya visto: en el Intento 2 del CW2 lateral el **texto chico desapareció** sin que nadie lo pidiera. |
| **3 — Agregar las 3 "X"** | **Cantidad incorrecta**: salen 2, 4, o un bloque continuo que se lee como una sola marca. Un elemento repetido sin **conteo forzado** sale en la cantidad que el generador quiera. | Ítem **Tipo B** *"dimensiones y cantidad de celdas con conteo forzado"* (caso Kratos: un grid 2x3 salió 2x4). Mismo mecanismo, otro tipo de prompt. |
| **3 — Agregar las 3 "X"** | **Posición o tamaño incorrectos**: corridas hacia el lateral o hacia el visor, desalineadas entre sí, o desproporcionadas — porque la posición se describió por zona ("la parte baja de la mentonera") sin anclarla a una referencia física concreta. | Mismo mecanismo que el defecto de **descripción global de zona** que dejó islas sin recolorear en el Intento 3 del CW2 lateral. |
| **3 — Agregar las 3 "X"** | **Materializadas como relieve o como calcomanía** en vez de como pintura sobre la superficie curva. | Ítem Tipo A de pintura plana vs. pieza física, y el eje de **realismo de material** del Intento 3. |
| **Transversal** | **El spoiler se altera aunque nadie lo tocó.** Es la pieza que falla en **las 4 vistas** del caso, por 4 razones distintas: pierde su color, se duplica, se fusiona con la carcasa y se hibrida con la forma del mockup. Cualquier corrida que toque esta imagen lo pone en riesgo. | Intento 3 lateral CW1 (duplicado + forma del mockup), Intento 2 trasera CW1 (sin azul), Intento 1 trasera CW2 (fusionado), Intento 4 trasera CW1 (híbrido). |
| **Transversal** | **Caída del realismo fotográfico**: la imagen vuelve a leerse como ilustración vectorial plana o render, perdiendo microtextura, reflejos y bevel. | Intento 2 lateral CW1 e Intento 3 trasera CW1, las dos veces que este caso devolvió un dibujo en vez de una foto. |
| **Transversal** | **Variación entre las 3 corridas**: que una imagen salga bien y otra mal **no prueba nada sobre el prompt**. | Ítem Tipo A sobre **no determinismo** del generador (re-corrida del Intento 6 del caso Top Gun; y el CW2 lateral, que logró el realismo sin las instrucciones del tercer eje). |

#### Veredicto real — a completar por el usuario / el agente principal

Marcar por imagen: ✅ correcto · ⚠️ parcial o con defecto menor · 🔴 falló.

| # | Verificación | Imagen 1 | Imagen 2 | Imagen 3 |
|---|---|---|---|---|
| 1 | **Cambio 1** — la pieza negra tipo toma de aire desapareció por completo, sin resto ni sombra | _(completar)_ | _(completar)_ | _(completar)_ |
| 2 | **Cambio 1** — debajo quedó el livery reconstruido y continuo, sin parche plano ni corte de líneas | _(completar)_ | _(completar)_ | _(completar)_ |
| 3 | **Cambio 1** — no apareció ninguna pieza física nueva en su lugar | _(completar)_ | _(completar)_ | _(completar)_ |
| 4 | **Cambio 2** — el sticker "DOT" y su texto chico desaparecieron, sin fantasma | _(completar)_ | _(completar)_ | _(completar)_ |
| 5 | **Cambio 2** — no se borró ningún otro texto del livery ("X40", texto del marco superior, "EDGE") | _(completar)_ | _(completar)_ | _(completar)_ |
| 6 | **Cambio 3** — hay exactamente 3 "X", alineadas, en la parte baja de la mentonera | _(completar)_ | _(completar)_ | _(completar)_ |
| 7 | **Cambio 3** — tamaño, color y estilo correctos, integradas como pintura sobre la superficie curva | _(completar)_ | _(completar)_ | _(completar)_ |
| 8 | **Nada más cambió** — spoiler (uno solo, forma del molde real, azul sólido) | _(completar)_ | _(completar)_ | _(completar)_ |
| 9 | **Nada más cambió** — visor, patrones de la calota superior, wordmark "EDGE", mentonera | _(completar)_ | _(completar)_ | _(completar)_ |
| 10 | **Nada más cambió** — realismo fotográfico, ángulo, encuadre y fondo | _(completar)_ | _(completar)_ | _(completar)_ |

**Veredicto global:** _(completar: ✅ aprobado / ⚠️ reintentar con el Escenario A / ⚠️ reintentar con el Escenario B / 🔴 escalar)_

**Imagen elegida de las 3:** _(completar)_

**Qué falló, concretamente:** _(completar — describir el resto que quedó, la cantidad de "X" que salió, o qué se alteró de más; ese texto es exactamente lo que hay que pegar en el placeholder del prompt correctivo)_

#### Prompt correctivo "Intento 6" — según el escenario

Los dos escenarios de abajo cubren los **dos modos de falla más probables** de esta edición. Son **excluyentes**: se elige uno según el veredicto, no se corren los dos.

- **Escenario A — cobertura parcial:** uno o más de los 3 cambios se aplicó **a medias** (quedó un resto de la pieza negra, un fantasma del "DOT", o salieron menos/más de 3 "X"), pero **todo lo demás quedó bien**. Se sigue editando **sobre el resultado del Intento 5**, terminando lo que quedó a medias.
- **Escenario B — la edición redibujó de más:** la zona editada **cambió más de lo pedido** (se alteró el livery, el spoiler, el visor o el estilo de render). Se **descarta el resultado del Intento 5** y se vuelve a partir de la **imagen aprobada del Intento 4**, con la regla de borrado/agregado puro reforzada.

Si el resultado falla por los **dos** motivos a la vez, correr el **Escenario B** (que reparte de la base buena), no el A.

<details><summary>Intento 6 — Escenario A: cobertura parcial (adjuntar SOLO la imagen del Intento 5)</summary>

```
Esto es una EDICIÓN PUNTUAL sobre la imagen adjunta, NO una
generación nueva desde cero. La imagen adjunta es el resultado de una
edición anterior que quedó BIEN en casi todo: su forma, su realismo,
su perspectiva, su livery y su estilo fotográfico están correctos tal
cual están. El único problema es que un cambio quedó APLICADO A
MEDIAS, y lo que hay que hacer es TERMINAR DE APLICARLO. Se devuelve
la MISMA imagen, IDÉNTICA, salvo por eso. Ninguna otra línea, forma,
textura, color ni detalle cambia en ninguna parte de la imagen.

TODO ESTO NO SE TOCA — QUEDA PIXEL POR PIXEL IGUAL:
- La forma y la geometría completa del casco: el pico frontal /
  spoiler con su forma exacta y su azul sólido, la silueta de la
  calota, la mentonera, las ventilaciones reales del molde, el
  mecanismo de pivote del visor con su textura de fibra de carbono,
  la correa roja y la goma del borde inferior negra.
- El visor tintado/oscuro, con su mismo material y su mismo tono.
- El realismo fotográfico completo: iluminación de estudio, sombras
  suaves, reflejos especulares sobre las superficies curvas,
  microtextura de pintura mate, y el volumen y el relieve/bevel de
  la carcasa. La imagen sigue siendo una fotografía de producto, con
  exactamente el mismo tratamiento fotográfico.
- El fondo, el encuadre y el ángulo de cámara.
- El wordmark "EDGE".
- Todos los elementos del livery: el patrón de malla triangular de
  la calota superior, las líneas geométricas concéntricas tipo
  chevron con TODAS sus capas, el texto chico dentro del marco
  geométrico superior, la etiqueta chica "X40", las franjas rojas y
  blancas y el patrón de la mentonera bajando hasta el borde
  inferior.
- Todo lo que la edición anterior YA resolvió bien: eso ya está
  terminado y no se vuelve a tocar.

CRÍTICO — COBERTURA COMPLETA DEL CAMBIO (defecto real de la edición
anterior — no lo repitas):
El cambio NO es parcial ni aproximado: tiene que quedar aplicado
ENTERO, de punta a punta de la zona indicada.
- Un BORRADO no está terminado mientras quede CUALQUIER rastro del
  elemento eliminado dentro de esa zona: ni un pedazo, ni un borde,
  ni una ranura, ni un contorno, ni una sombra, ni un relieve, ni un
  halo, ni un parche de color distinto donde estaba.
- Un AGREGADO no está terminado mientras la CANTIDAD, la POSICIÓN,
  la ALINEACIÓN y el TAMAÑO no sean EXACTAMENTE los pedidos. Contá
  los elementos antes de entregar.
- Recorré TODA la zona indicada y confirmá que no quedó ninguna
  isla, ningún bloque ni ningún grupo de elementos con el estado
  anterior. No alcanza con resolver la parte dominante de la zona.
La edición anterior aplicó el cambio SOLO EN PARTE. Esto es
exactamente lo que quedó sin resolver, y es lo único que hay que
completar:
[ACÁ VA LA DESCRIPCIÓN EXACTA DEL RESTO QUE QUEDÓ — copiarla del
campo "Qué falló, concretamente" de la auditoría, con su UBICACIÓN
precisa y su DESCRIPCIÓN física. Ejemplos de cómo redactarlo:
 · "en el BORDE IZQUIERDO de donde estaba la pieza negra tipo toma
   de aire quedó una FRANJA NEGRA VERTICAL angosta con textura de
   plástico, de unos pocos milímetros de ancho, que también hay que
   eliminar reconstruyendo el livery por debajo";
 · "donde estaba el sticker DOT quedó un RECTÁNGULO MÁS CLARO, más
   liso y sin la microtextura de la pintura mate, con la silueta
   exacta del sticker: hay que eliminar ese fantasma y dejar la
   superficie pintada continua";
 · "en la parte baja de la mentonera salieron SOLO DOS marcas en X
   en vez de TRES: falta la tercera, a la derecha de las dos que ya
   están, alineada con ellas y con la misma separación, del mismo
   tamaño, la misma forma y el mismo blanco";
 · "en la parte baja de la mentonera salieron CUATRO marcas en X en
   vez de TRES: hay que eliminar la cuarta (la de más a la derecha)
   y dejar las tres restantes exactamente como están".]
Prestale atención especial a ese resto, y barré igual toda la zona
por si quedó algún otro rastro que no esté nombrado arriba.

QUÉ VA DEBAJO DE LO QUE SE BORRA:
Donde se elimina un resto, NO va un color plano ni un parche liso:
va la SUPERFICIE PINTADA CON EL LIVERY QUE CORRESPONDE A ESA ZONA,
como si el elemento eliminado nunca hubiera estado ahí.
- El patrón geométrico que rodea el área se COMPLETA POR DEBAJO
  siguiendo la curvatura del casco y la lógica del diseño, con las
  MISMAS líneas, los MISMOS colores y el MISMO trazado que traen las
  zonas contiguas: una línea que entra por un lado del área tiene
  que SALIR POR EL OTRO alineada y con el mismo grosor.
- Con la misma iluminación, los mismos reflejos y el mismo material
  (pintura mate con su microtextura) que el resto de la superficie.
- No dejes ningún hueco, ningún parche, ninguna sombra residual,
  ningún contorno ni ninguna costura visible de dónde estaba.

CRÍTICO — LA ZONA EDITADA TAMPOCO SE REDIBUJA (defecto real de un
intento anterior de edición en este mismo caso — no lo repitas):
En la zona que se toca, lo ÚNICO que cambia es completar lo que
quedó a medias. TODO el resto del dibujo de esa zona se conserva
IDÉNTICO — las líneas, los patrones, las franjas, las capas, las
texturas, los colores y cada trazo en su misma posición exacta. Que
una zona esté en la lista de cambios NO es permiso para rehacerla.
Un intento anterior de edición en este mismo caso interpretó "cambiá
esta zona" como licencia para REDIBUJAR LA ZONA ENTERA, y la
devolvió simplificada: el marco geométrico reemplazado por una forma
más limpia con menos líneas, el patrón de malla reducido en densidad
y en superficie, el texto chico eliminado y varias capas de líneas
perdidas. ESO ESTÁ PROHIBIDO. No se rediseña, no se simplifica, no
se reinterpreta: se termina de aplicar un cambio que quedó a medias.

PROHIBIDO ABSOLUTO — NO TOQUES NADA MÁS:
- No redibujes el casco ni ninguna de sus partes.
- No cambies la geometría, el spoiler, la silueta ni las
  proporciones. El spoiler sigue siendo UNO SOLO, con la forma
  puntiaguda y compacta del molde real, en AZUL SÓLIDO y sin patrón
  de malla encima.
- No toques el visor tintado: mismo tono, mismo material.
- No vuelvas a renderizar el realismo fotográfico: la iluminación,
  las sombras, los reflejos y las texturas de la imagen adjunta se
  conservan tal cual.
- No muevas, redimensiones, agregues ni elimines ningún otro
  elemento del livery, y no borres ningún texto chico: la etiqueta
  "X40", el texto del marco geométrico superior y el wordmark
  "EDGE" siguen todos presentes.
- No cambies el ángulo de cámara, el encuadre ni el fondo.
- No conviertas la imagen en una ilustración, un render plano ni un
  mockup: sigue siendo la misma fotografía.
- No agregues ninguna pieza física, panel, saliente, relieve ni toma
  de aire que no esté en el molde real.

VERIFICACIÓN FINAL ANTES DE ENTREGAR — DOS CHEQUEOS, LOS DOS
OBLIGATORIOS:
1) DIBUJO INTACTO: compará tu resultado contra la imagen adjunta y
   confirmá que NINGÚN dibujo cambió — ni una línea que falte, ni un
   texto ausente, ni un patrón menos denso, ni una forma distinta,
   ni un trazo corrido de lugar, ni el spoiler alterado.
2) COBERTURA COMPLETA: volvé a la zona indicada y confirmá que NO
   QUEDA NINGÚN RASTRO de lo que había que eliminar, y que lo que
   había que agregar está en la CANTIDAD, la POSICIÓN y el TAMAÑO
   exactos pedidos. Contalo.
Si cualquiera de los dos chequeos falla, corregilo antes de
entregar.
```

</details>

<details><summary>Intento 6 — Escenario B: la edición redibujó de más (adjuntar SOLO la imagen APROBADA del Intento 4)</summary>

**Importante:** en este escenario el resultado del Intento 5 **se descarta** y se vuelve a partir de la **imagen aprobada del Intento 4** — la base buena. Adjuntar esa imagen y **solo esa**.

```
Esto es un BORRADO Y AGREGADO PUROS sobre la imagen adjunta, NO una
edición de diseño y NO una generación nueva. La imagen adjunta es un
resultado YA APROBADO —el usuario lo calificó de "espectacular"— y se
devuelve IDÉNTICA salvo por TRES cambios puntuales: se eliminan 2
elementos y se agrega 1. Ninguna línea, ninguna forma, ningún texto,
ninguna textura y ningún color cambian en ninguna parte de la imagen
— INCLUIDAS las zonas que se editan.

TODO ESTO NO SE TOCA — QUEDA PIXEL POR PIXEL IGUAL:
- La forma y la geometría completa del casco: el pico frontal /
  spoiler, la silueta de la calota, la mentonera, las ventilaciones
  reales del molde, el mecanismo de pivote del visor con su textura
  de fibra de carbono, la correa roja y la goma del borde inferior
  negra.
- El visor tintado/oscuro, con su mismo material y su mismo tono.
- El realismo fotográfico completo: iluminación de estudio, sombras
  suaves, reflejos especulares sobre las superficies curvas,
  microtextura de pintura mate, y el volumen y el relieve/bevel de
  la carcasa.
- El fondo, el encuadre y el ángulo de cámara.
- El wordmark "EDGE".
- Todos los elementos del livery: el patrón de malla triangular de
  la calota superior, las líneas geométricas concéntricas tipo
  chevron con TODAS sus capas, el texto chico dentro del marco
  geométrico superior, la etiqueta chica "X40", las franjas rojas y
  blancas y el patrón de la mentonera bajando hasta el borde
  inferior.

CRÍTICO — LAS ZONAS EDITADAS TAMPOCO SE REDIBUJAN: DENTRO DE LA ZONA
EDITADA LO ÚNICO QUE CAMBIA ES EL ELEMENTO INDICADO (defecto real de
un intento anterior de edición en este mismo caso — no lo repitas):
En las 3 zonas que se tocan, lo ÚNICO que cambia es lo indicado:
sacar la pieza negra, sacar el sticker "DOT" y agregar las 3 "X".
TODO el resto del dibujo de esas zonas se conserva IDÉNTICO — las
líneas, los patrones, las franjas, las capas, las texturas, los
colores y cada trazo en su misma posición exacta, con la misma
cantidad de líneas y el mismo grosor.
Es exactamente equivalente a SELECCIONAR ese elemento en un editor de
imagen, BORRARLO, y dejar intactas todas las demás capas de dibujo
que están alrededor y por debajo. No se rediseña, no se simplifica,
no se reinterpreta, no se "mejora": se quitan dos elementos y se
agrega uno.
Que una zona esté nombrada en la lista de cambios NO es permiso para
rehacerla. Un intento anterior de edición en este mismo caso
interpretó "cambiá esta zona" como licencia para REDIBUJAR LA ZONA
ENTERA y la devolvió simplificada: el marco geométrico reemplazado
por una forma más limpia con menos líneas, el patrón de malla
reducido en densidad y en superficie, el texto chico eliminado y
varias capas de líneas perdidas. ESO ESTÁ PROHIBIDO.

CRÍTICO — EL SPOILER NO SE TOCA (es la pieza que más falla en este
caso — no la pongas en juego): el pico frontal / spoiler de la imagen
adjunta ya está RESUELTO y CORRECTO. Es UNO SOLO, con la forma
PUNTIAGUDA, COMPACTA y ANGULADA HACIA ATRÁS-ARRIBA del molde real, y
está en AZUL SÓLIDO uniforme.
- No lo redibujes, no lo agrandes, no lo aplanes, no le cambies el
  perfil, el borde ni el ángulo.
- No dibujes un segundo spoiler ni superpongas dos formas.
- No le pongas el patrón de malla de triángulos, ni blanco, ni
  líneas, ni chevrones encima: sigue en azul sólido.
- No lo hibrides con ninguna otra forma de spoiler: la de la imagen
  adjunta es la única válida.

CRÍTICO — EL VISOR NO SE TOCA: el visor tintado/oscuro de la imagen
adjunta conserva su MISMO TONO, su MISMO material y sus MISMOS
reflejos. No lo aclares, no lo oscurezcas, no le cambies el tinte, no
le agregues reflejos nuevos y no le apliques ningún gráfico encima.

CRÍTICO — EL ESTILO FOTOGRÁFICO NO SE TOCA: la imagen adjunta es una
FOTOGRAFÍA DE PRODUCTO REAL y el resultado tiene que seguir siéndolo,
con exactamente el mismo tratamiento: la misma iluminación de
estudio, las mismas sombras suaves, los mismos reflejos especulares
sobre las superficies curvas, la misma microtextura de pintura mate,
la misma textura de fibra de carbono en el pivote, la misma trama de
tela de la correa roja y el mismo volumen y relieve/bevel de la
carcasa.
- PROHIBIDO devolver una ilustración, un dibujo vectorial, un render
  plano o un mockup.
- PROHIBIDO aplanar el material, quitar los reflejos, quitar las
  sombras o reemplazar la pintura con color plano digital.
- Un intento anterior de este mismo caso devolvió un dibujo vectorial
  plano en vez de una foto. No lo repitas.

CAMBIO 1 — ELIMINAR LA PIEZA NEGRA TIPO TOMA DE AIRE DEL LATERAL:
En la zona MEDIA-BAJA DEL LATERAL del casco, JUSTO ENCIMA del
wordmark "EDGE", hay montada una PIEZA RECTANGULAR NEGRA tipo toma
de aire / ventilación, con una ranura horizontal y textura de
plástico rugoso, aplicada encima del livery azul/blanco/rojo. Esa
pieza NO EXISTE en el molde real del casco: es una invención, y hay
que ELIMINARLA POR COMPLETO — entera, sin dejar ni un borde, ni la
ranura, ni una esquina, ni un contorno, ni una sombra, ni un relieve.
En su lugar va la superficie del casco con el LIVERY CONTINUO, como
si esa pieza nunca hubiera estado ahí:
- el patrón geométrico que la rodea se COMPLETA POR DEBAJO,
  siguiendo la curvatura del casco y la lógica del diseño, con las
  MISMAS líneas, los MISMOS colores y el MISMO trazado que traen las
  zonas contiguas: una línea que entra por un borde del área tiene
  que SALIR POR EL OTRO alineada y con el mismo grosor;
- con la misma iluminación, los mismos reflejos y el mismo material
  (pintura mate con su microtextura) que el resto de la superficie.
No dejes ningún hueco, ningún parche de color plano, ninguna costura,
ninguna sombra residual, ningún contorno ni ninguna marca de dónde
estaba la pieza. Y NO pongas ninguna otra pieza física en su lugar.

CAMBIO 2 — ELIMINAR EL STICKER "DOT":
En el BORDE INFERIOR TRASERO del casco hay una ETIQUETA / STICKER
BLANCO con el texto "DOT" y unas líneas de texto chico debajo. En
esta vista lateral ese sticker NO CORRESPONDE (el sticker DOT va en
la vista trasera). Eliminalo POR COMPLETO —el "DOT" y también las
líneas de texto chico de abajo— con el mismo criterio que el cambio
1: en su lugar va la superficie del casco con el livery continuo,
siguiendo la curvatura, con la misma luz y el mismo material, sin
hueco, sin parche, sin rectángulo más claro, sin halo, sin sombra
residual y sin ninguna marca de dónde estaba.
Se elimina SOLO ese sticker: la etiqueta chica "X40", el texto chico
del marco geométrico superior y el wordmark "EDGE" NO se tocan y
tienen que seguir presentes, iguales y en su lugar.

CAMBIO 3 — AGREGAR LAS 3 MARCAS EN "X" DE LA MENTONERA:
En la ZONA INFERIOR DELANTERA del casco (la parte baja de la
mentonera, cerca del borde inferior), sobre el fondo AZUL OSCURO del
livery, faltan TRES MARCAS EN FORMA DE "X" / CHEVRONES. Agregalas:
- son EXACTAMENTE TRES, ni dos ni cuatro. Contalas antes de
  entregar;
- IGUALES ENTRE SÍ en forma y tamaño, ALINEADAS HORIZONTALMENTE a la
  misma altura y con la MISMA SEPARACIÓN entre una y otra;
- en BLANCO sobre el fondo azul oscuro;
- en la PARTE BAJA DE LA MENTONERA, cerca del borde inferior — no
  sobre el lateral, no sobre la ventilación, no cerca del visor y no
  encima del wordmark "EDGE";
- con el MISMO ESTILO GRÁFICO y el MISMO TAMAÑO RELATIVO que en la
  ilustración de diseño, donde ese detalle aparece como "XXX".
Tienen que verse como PINTURA sobre la superficie física del casco:
siguen la curvatura de la mentonera, se deforman con ella en
perspectiva, y reciben exactamente la misma luz y las mismas sombras
que el resto de la superficie. NUNCA como una calcomanía plana
pegada encima, NUNCA como un elemento en relieve, una pieza o un
saliente, y NUNCA como una muesca tallada en el plástico.
Agregar estas 3 marcas NO es permiso para redibujar la mentonera: el
patrón del livery de esa zona, con sus franjas y sus líneas, se
conserva idéntico y sigue bajando hasta el borde inferior.

PROHIBIDO ABSOLUTO — NO TOQUES NADA MÁS:
- No redibujes el casco ni ninguna de sus partes.
- No simplifiques, no reduzcas ni rehagas el dibujo de las zonas
  editadas.
- No elimines ningún texto chico ni ninguna línea del marco
  geométrico superior.
- No reduzcas la densidad ni la extensión del patrón de malla
  triangular.
- No cambies la geometría, la silueta ni las proporciones.
- No toques el spoiler, el visor ni el estilo fotográfico.
- No vuelvas a renderizar el realismo: la iluminación, las sombras,
  los reflejos y las texturas de la imagen adjunta se conservan tal
  cual.
- No muevas, redimensiones, agregues ni elimines ningún otro
  elemento del livery.
- No cambies el ángulo de cámara, el encuadre ni el fondo.
- No conviertas la imagen en una ilustración, un render plano ni un
  mockup: sigue siendo la misma fotografía.
- No dejes ningún hueco, parche ni contorno visible donde estaban
  los 2 elementos eliminados.
- No agregues ninguna otra pieza física, panel, saliente, relieve ni
  toma de aire que no esté en el molde real.
Si al terminar alguna línea, algún texto o algún detalle de la imagen
no está exactamente donde estaba y exactamente como estaba, la
edición está MAL.

VERIFICACIÓN FINAL ANTES DE ENTREGAR — DOS CHEQUEOS, LOS DOS
OBLIGATORIOS:
1) SOLO 3 DIFERENCIAS: compará tu resultado contra la imagen adjunta
   y confirmá que las ÚNICAS diferencias entre las dos sean las 3
   indicadas — la pieza negra tipo toma de aire ya no está, el
   sticker "DOT" ya no está y las 3 marcas en "X" aparecen en la
   parte baja de la mentonera. Cualquier otra diferencia —una línea
   que falta, un patrón menos denso, un texto ausente, una forma
   distinta, un color corrido, el spoiler alterado, el visor con
   otro tono, el render más plano— es un ERROR.
2) COBERTURA COMPLETA: confirmá que los 2 elementos eliminados NO
   dejaron NINGÚN rastro (ni resto, ni borde, ni fantasma, ni
   parche) y que las marcas en "X" son EXACTAMENTE TRES, alineadas,
   del mismo tamaño y en la posición pedida. Contalas.
Si cualquiera de los dos chequeos falla, corregilo antes de
entregar.
```

</details>

<details><summary>Prompt — Colorway 1 (azul/blanco/rojo), vista trasera</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista trasera), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO vista trasera es la ÚNICA autoridad
  de FORMA — silueta de la calota desde atrás, borde inferior, tal
  cual está en esa foto.
- La imagen de diseño azul/blanco/rojo vista trasera es SOLO fuente
  de diseño gráfico, nunca de forma.

PASO 1 — FORMA: reproducí exactamente la forma trasera del casco
negro liso antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway azul/blanco/rojo:
- Parte superior de la calota: azul sólido.
- Banda inferior: patrón geométrico blanco/rojo/azul con franjas tipo
  chevron.
- Wordmark "EDGE" en blanco, centrado, sobre la banda inferior.
- SIN sticker "DOT" y SIN ninguna otra marca de certificación u
  homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
  negocio del caso, ningún render de este livery las lleva. Si la
  ilustración de diseño muestra alguna, se omite.

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso vista
trasera.

PROHIBIDO ABSOLUTO: no cambiar la forma ni la silueta trasera del
molde real. No copiar la forma del casco de la imagen de diseño si es
distinta. No agregar elementos gráficos fuera de la lista de arriba.
```

</details>

### Intento 1 — Colorway 1 vista trasera, resultado auditado

**Estado:** ⚠️ Casi perfecta — geometría respetada al 100%, 2 defectos de aplicación del gráfico.

**Qué salió bien:** la forma trasera del molde real se respetó por completo — silueta de la calota vista desde atrás, la ventilación superior / extractor, el borde inferior con el acolchado interior negro y las correas visibles quedaron tal cual el checkpoint negro liso. El usuario lo describió como "casi casi perfecta, respetó 100% la geometría". El wordmark "EDGE" salió bien centrado sobre la banda blanca inferior, el sticker "DOT" apareció correctamente y las franjas geométricas rojas, azules y blancas de la banda inferior se aplicaron bien, incluyendo unas pequeñas etiquetas "X40" a los costados.

**Qué falló (2 defectos):**
1. **La parte superior de la calota quedó en azul liso, sin ninguno de los elementos gráficos de la ilustración.** Toda la zona alta de la calota trasera salió en azul sólido plano, sin nada encima, cuando en la ilustración de diseño de referencia esa zona sí lleva diseño — y son tres elementos distintos, ninguno de los cuales se aplicó:
   - (a) líneas verticales blancas y azul oscuro tipo rayas/chevrones que suben desde la banda inferior hacia la parte alta de la calota;
   - (b) un patrón de textura fina tipo malla / triángulos entrelazados en blanco sobre los costados superiores;
   - (c) formas geométricas angulares blancas y azul oscuro en la zona alta.
2. **La zona inferior quedó incompleta porque el generador confundió el spoiler trasero con la carcasa del casco.** El diseño de la banda inferior no baja lo suficiente y queda cortado: el generador interpretó mal dónde termina el spoiler trasero (la pieza aerodinámica que sobresale) y dónde empieza la carcasa propiamente dicha. En la ilustración de diseño el patrón geométrico de la banda inferior cubre completa la zona baja de la carcasa, incluyendo los laterales inferiores, que en el resultado quedaron sin completar.

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 2, abajo).

### Intento 2 — Colorway 1 vista trasera, calota superior con diseño y zona baja completa

<details><summary>Prompt usado</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista trasera), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO vista trasera es la ÚNICA autoridad
  de FORMA — silueta de la calota desde atrás, borde inferior, tal
  cual está en esa foto.
- La imagen de diseño azul/blanco/rojo vista trasera es SOLO fuente
  de diseño gráfico, nunca de forma.

PASO 1 — FORMA: reproducí exactamente la forma trasera del casco
negro liso antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway azul/blanco/rojo:
- PARTE SUPERIOR DE LA CALOTA — LLEVA DISEÑO, NO ES AZUL LISO (un
  intento anterior dejó toda esta zona en azul sólido plano, sin
  ningún gráfico encima — eso es un ERROR, no lo repitas). El azul es
  solo la BASE: el diseño va ENCIMA y tiene que CUBRIR la zona
  superior, no dejarla vacía. Son TRES elementos, todos obligatorios
  y todos con el mismo nivel de detalle que la ilustración de diseño:
  (a) Líneas verticales blancas y azul oscuro tipo rayas / chevrones
      que SUBEN desde la banda inferior hacia la parte alta de la
      calota, recorriendo la zona superior en toda su altura.
  (b) Patrón de textura fina tipo malla / triángulos entrelazados en
      blanco sobre los costados superiores de la calota, con la misma
      extensión y la misma intensidad que en la ilustración — NO una
      versión tenue ni reducida a una franja chica.
  (c) Formas geométricas angulares en blanco y azul oscuro en la zona
      alta de la calota, con todas sus capas tal como aparecen en la
      ilustración.
- ZONA INFERIOR — EL PATRÓN CUBRE COMPLETA LA CARCASA (un intento
  anterior falló exactamente acá). El spoiler trasero (la pieza
  aerodinámica que sobresale) y la carcasa del casco son PIEZAS
  DISTINTAS: no las confundas al decidir hasta dónde llega el diseño.
  El patrón geométrico de la banda inferior tiene que cubrir COMPLETA
  la zona baja de la carcasa, incluyendo los LATERALES INFERIORES,
  sin cortarse ni dejar zonas sin diseño.
- Banda inferior: patrón geométrico blanco/rojo/azul con franjas tipo
  chevron.
- Wordmark "EDGE" en blanco, centrado, sobre la banda inferior.
- SIN sticker "DOT" y SIN ninguna otra marca de certificación u
  homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
  negocio del caso, ningún render de este livery las lleva. Si la
  ilustración de diseño muestra alguna, se omite.

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso vista
trasera.

PROHIBIDO ABSOLUTO: no cambiar la forma ni la silueta trasera del
molde real. No copiar la forma del casco de la imagen de diseño si es
distinta. No agregar elementos gráficos fuera de la lista de arriba.
No dejar la parte superior de la calota en azul liso sin diseño. No
cortar ni dejar incompleto el patrón de la zona inferior. No
confundir el spoiler trasero con la carcasa del casco al decidir
hasta dónde llega el diseño.
```

</details>

**Estado:** ✅ generado — ver la auditoría del resultado justo abajo.

### Intento 2 — Colorway 1 vista trasera, resultado auditado

**Estado:** ⚠️ Muy cerca — el usuario lo calificó de "casi perfecto". Quedan 2 defectos puntuales.

**Qué salió bien:** los 2 defectos del Intento 1 quedaron resueltos. La zona superior de la calota ya no está en azul liso: tiene las líneas verticales blancas y azul oscuro subiendo hacia la parte alta, el patrón de malla de triángulos con buena extensión e intensidad, y las formas geométricas angulares. El patrón de la banda inferior ahora cubre completa la zona baja, incluidos los laterales inferiores, sin cortarse. El wordmark "EDGE", el sticker "DOT" y las etiquetas chicas "X40" a los costados están presentes. El resultado es una fotografía real, no una ilustración plana, y el ángulo coincide con el checkpoint.

**Qué falló (2 defectos):**
1. **Se inventó geometría que no existe en el molde real.** Aparecen piezas/elementos elevados en la parte alta de la calota trasera que NO están en la foto del casco negro liso. El molde real, visto de atrás, tiene una superficie limpia con el extractor de ventilación superior y el labio del spoiler — nada más. El generador agregó estructuras extra (aletas/paneles elevados a los costados de la zona alta), probablemente por interpretar como relieve físico lo que en la ilustración de diseño son solo formas gráficas planas. Es el mismo tipo de error que el checklist Tipo A ya cubre como "textura/relieve real vs. pintura/decal plano".
2. **El spoiler no quedó azul.** En la ilustración de diseño, el spoiler trasero es una pieza en AZUL SÓLIDO, claramente diferenciada del resto. En el resultado quedó con el mismo patrón blanco/azul de la calota, sin el azul sólido que le corresponde.

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 3, abajo).

### Intento 3 — Colorway 1 vista trasera, sin geometría inventada y spoiler en azul sólido

<details><summary>Prompt usado</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista trasera), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO vista trasera es la ÚNICA autoridad
  de FORMA — silueta de la calota desde atrás, borde inferior, tal
  cual está en esa foto.
- La imagen de diseño azul/blanco/rojo vista trasera es SOLO fuente
  de diseño gráfico, nunca de forma.

CRÍTICO — NO INVENTES NINGUNA PIEZA FÍSICA (defecto real de un intento
anterior: aparecieron aletas y paneles elevados en la parte alta de la
calota que NO existen en el molde real — no lo repitas): el casco
visto de atrás tiene EXACTAMENTE las piezas que se ven en la foto del
molde negro liso, ni una más: la superficie limpia y redondeada de la
calota, el extractor de ventilación superior, el labio del spoiler
trasero y el borde inferior con el acolchado y las correas. TODO lo
demás que aparece en la ilustración de diseño son GRÁFICOS PLANOS
PINTADOS, no relieves ni piezas: las líneas, los chevrones, las formas
angulares y el patrón de malla son PINTURA SOBRE UNA SUPERFICIE LISA.
No los conviertas en aletas, paneles, salientes ni ningún volumen
físico. Si en la ilustración una forma parece una pieza en relieve,
igual va como pintura plana.

PASO 1 — FORMA: reproducí exactamente la forma trasera del casco
negro liso antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway azul/blanco/rojo:
- SPOILER TRASERO — AZUL SÓLIDO (defecto real de un intento anterior:
  el spoiler quedó con el mismo patrón blanco/azul de la calota, sin
  su color propio — no lo repitas). En la ilustración de diseño, el
  spoiler es una pieza en AZUL SÓLIDO, uniforme, claramente
  diferenciada del resto del casco: sin patrón de malla, sin líneas
  blancas, sin chevrones encima. Pintalo de azul sólido y que se
  distinga a simple vista del patrón que lo rodea.
- PARTE SUPERIOR DE LA CALOTA — LLEVA DISEÑO, NO ES AZUL LISO. El azul
  es solo la BASE: el diseño va ENCIMA y tiene que CUBRIR la zona
  superior. Son TRES elementos, todos obligatorios y todos con el
  mismo nivel de detalle que la ilustración de diseño:
  (a) Líneas verticales blancas y azul oscuro tipo rayas / chevrones
      que SUBEN desde la banda inferior hacia la parte alta de la
      calota, recorriendo la zona superior en toda su altura.
  (b) Patrón de textura fina tipo malla / triángulos entrelazados en
      blanco sobre los costados superiores de la calota, con la misma
      extensión y la misma intensidad que en la ilustración.
  (c) Formas geométricas angulares en blanco y azul oscuro en la zona
      alta de la calota, con todas sus capas tal como aparecen en la
      ilustración. Van PINTADAS, planas — nunca como piezas en
      relieve.
- ZONA INFERIOR — EL PATRÓN CUBRE COMPLETA LA CARCASA. El spoiler
  trasero y la carcasa del casco son PIEZAS DISTINTAS: no las
  confundas al decidir hasta dónde llega cada cosa. El patrón
  geométrico de la banda inferior tiene que cubrir COMPLETA la zona
  baja de la carcasa, incluyendo los LATERALES INFERIORES, sin
  cortarse ni dejar zonas sin diseño.
- Banda inferior: patrón geométrico blanco/rojo/azul con franjas tipo
  chevron.
- Wordmark "EDGE" en blanco, centrado, sobre la banda inferior.
- SIN sticker "DOT" y SIN ninguna otra marca de certificación u
  homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
  negocio del caso, ningún render de este livery las lleva. Si la
  ilustración de diseño muestra alguna, se omite.
- Etiquetas chicas "X40" a ambos lados de la banda inferior.

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso vista
trasera.

PROHIBIDO ABSOLUTO: no cambiar la forma ni la silueta trasera del
molde real. No agregar NINGUNA pieza, aleta, panel, saliente ni
relieve que no esté en la foto del molde negro liso — todo elemento
del diseño es pintura plana. No dejar el spoiler con el patrón de la
calota: va en azul sólido. No copiar la forma del casco de la imagen
de diseño si es distinta. No agregar elementos gráficos fuera de la
lista de arriba. No dejar la parte superior de la calota en azul liso
sin diseño. No cortar ni dejar incompleto el patrón de la zona
inferior.
```

</details>

**Estado:** ✅ generado — ver la auditoría del resultado justo abajo.

### Intento 3 — Colorway 1 vista trasera, resultado auditado

**Estado:** ❌ Falló — regresión: volvió a salir ilustración plana y perdió la silueta real del molde.

**Qué falló:** el resultado volvió a salir como una **ILUSTRACIÓN / dibujo vectorial plano**, no como una fotografía de producto — colores planos, sin microtextura de pintura, sin reflejos especulares ni sombras de estudio, con bordes de software de diseño. Y al copiar ese estilo se llevó puesta también la forma: **la silueta trasera del casco pasó a seguir la del mockup de diseño** (más plana, más "dibujada") en vez de la de la foto del casco negro liso. Es una **regresión**: los intentos anteriores de esta misma vista sí habían entregado una fotografía real y sí habían respetado la silueta del molde (el Intento 1 llegó a calificarse de "geometría respetada al 100%" y el Intento 2 seguía siendo una foto). O sea, no es un defecto nuevo del caso: es un defecto ya conocido que volvió.

**Causa raíz — descuido de propagación entre vistas:** el **tercer eje** (forma / contenido gráfico / **estilo de render y realismo de material**) se descubrió y se agregó en la **vista LATERAL de este mismo colorway** — ver su Intento 3, donde entraron el bloque `CRÍTICO — EL RESULTADO ES UNA FOTOGRAFÍA, NO UNA ILUSTRACIÓN` y la regla ampliada de **"DOS FUENTES, TRES ROLES"** — pero **nunca se copió a los prompts de la vista TRASERA**. Los prompts de la trasera siguieron con la regla vieja de **"DOS FUENTES, DOS ROLES"** y sin ningún bloque de realismo fotográfico. Sin ese eje declarado explícitamente, el generador toma de la ilustración de diseño no solo el contenido gráfico sino también su **estilo de render plano**, y al copiar el estilo arrastra la **forma** del mockup. Dicho de otro modo: el defecto de la trasera no es un hallazgo nuevo — es exactamente el mismo que ya se había diagnosticado y resuelto en la lateral, reapareciendo porque la corrección no se propagó a todas las vistas del caso.

**La lección, para que no vuelva a pasar:** cuando se descubre una regla nueva y se corrige el prompt de UNA vista, hay que **propagarla de inmediato a los prompts de TODAS las demás vistas y colorways del mismo caso**. Si no, el mismo defecto reaparece vista por vista, se gasta una corrida entera en redescubrirlo y se pierde tiempo rehaciendo un diagnóstico que ya estaba escrito unas líneas más arriba en el mismo documento.

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 4, abajo), que propaga el tercer eje de realismo a esta vista.

### Intento 4 — Colorway 1 vista trasera, con el tercer eje de realismo fotográfico propagado

<details><summary>Prompt usado</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista trasera), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, TRES ROLES QUE NUNCA SE MEZCLAN:
- La FOTO del casco NEGRO LISO vista trasera es la ÚNICA autoridad de
  FORMA — silueta de la calota desde atrás, extractor de ventilación
  superior, labio del spoiler, borde inferior con el acolchado y las
  correas, todo tal cual está en esa foto. Copiala sin ninguna
  variación.
- Esa MISMA foto del casco negro liso es también la ÚNICA autoridad
  de ESTILO DE RENDER Y REALISMO DE MATERIAL — es una fotografía de
  producto real, y el resultado tiene que ser una fotografía igual de
  real: mismo tipo de iluminación, mismos reflejos, misma textura de
  pintura, mismo volumen tridimensional.
- La imagen de diseño azul/blanco/rojo vista trasera es SOLO fuente
  de CONTENIDO GRÁFICO — qué formas, qué colores y dónde va cada
  elemento, el wordmark "EDGE", los patrones geométricos. NUNCA su
  forma de casco y NUNCA su estilo de render. Esa imagen de diseño es
  una ILUSTRACIÓN VECTORIAL 2D PLANA: el resultado final NO debe
  verse como esa ilustración. Si esa imagen muestra una forma de
  casco distinta a la del molde negro liso, ignorá esa forma por
  completo.

CRÍTICO — EL RESULTADO ES UNA FOTOGRAFÍA, NO UNA ILUSTRACIÓN (defecto
real de un intento anterior de esta misma vista, que devolvió un
dibujo vectorial plano en vez de una foto — no lo repitas):
- La salida tiene que ser una FOTOGRAFÍA DE PRODUCTO FOTORREALISTA del
  casco físico real, con exactamente el mismo tratamiento fotográfico
  que la foto del molde negro liso:
  - misma iluminación de estudio, con sus luces y sus sombras suaves;
  - mismos reflejos especulares sutiles sobre la superficie curva de
    la calota vista desde atrás;
  - misma microtextura de pintura mate real (no color plano digital);
  - mismo acolchado interior y mismas correas en el borde inferior,
    con su textura de tela real;
  - mismo volumen y misma profundidad tridimensional.
- El livery se aplica como PINTURA REAL sobre la superficie física del
  casco: sigue la curvatura de la carcasa, se deforma con ella en
  perspectiva, y recibe la luz y las sombras de la escena igual que el
  resto del casco. NO es un dibujo plano pegado encima ni una calcomanía
  digital superpuesta.
- PROHIBIDO en cuanto a estilo: colores planos sin gradiente, ausencia
  de reflejos, bordes vectoriales de software de diseño, aspecto de
  mockup o de render 2D. Si el resultado se parece a la ilustración de
  diseño en su acabado, está mal.

CRÍTICO — NO INVENTES NINGUNA PIEZA FÍSICA (defecto real de un intento
anterior: aparecieron aletas y paneles elevados en la parte alta de la
calota que NO existen en el molde real — no lo repitas): el casco
visto de atrás tiene EXACTAMENTE las piezas que se ven en la foto del
molde negro liso, ni una más: la superficie limpia y redondeada de la
calota, el extractor de ventilación superior, el labio del spoiler
trasero y el borde inferior con el acolchado y las correas. TODO lo
demás que aparece en la ilustración de diseño son GRÁFICOS PLANOS
PINTADOS, no relieves ni piezas: las líneas, los chevrones, las formas
angulares y el patrón de malla son PINTURA SOBRE UNA SUPERFICIE LISA.
No los conviertas en aletas, paneles, salientes ni ningún volumen
físico. Si en la ilustración una forma parece una pieza en relieve,
igual va como pintura plana.

PASO 1 — FORMA: reproducí exactamente la forma trasera del casco
negro liso antes de aplicar cualquier gráfico.

CRÍTICO — LA SILUETA TRASERA ES LA DEL MOLDE REAL, NO LA DEL MOCKUP
(defecto real de un intento anterior de esta misma vista: la silueta
se contaminó con la del mockup y salió más plana y más "dibujada" — no
lo repitas). En la foto del casco negro liso vista de atrás:
- la calota es REDONDEADA Y COMPACTA, con su curvatura real;
- el extractor de ventilación superior está en su posición y con su
  forma exactas;
- el labio del spoiler trasero tiene su relieve real, con el volumen
  que muestra la foto;
- el borde inferior muestra el acolchado interior y las correas
  visibles, tal como en la foto.
Esa silueta sale SIEMPRE de la foto del molde negro liso, nunca del
mockup de diseño, que tiene una forma de casco distinta. Si las dos
imágenes no coinciden en la forma, gana la foto del molde real.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway azul/blanco/rojo:
- SPOILER TRASERO — AZUL SÓLIDO (defecto real de un intento anterior:
  el spoiler quedó con el mismo patrón blanco/azul de la calota, sin
  su color propio — no lo repitas). En la ilustración de diseño, el
  spoiler es una pieza en AZUL SÓLIDO, uniforme, claramente
  diferenciada del resto del casco: sin patrón de malla, sin líneas
  blancas, sin chevrones encima. Pintalo de azul sólido y que se
  distinga a simple vista del patrón que lo rodea.
- PARTE SUPERIOR DE LA CALOTA — LLEVA DISEÑO, NO ES AZUL LISO. El azul
  es solo la BASE: el diseño va ENCIMA y tiene que CUBRIR la zona
  superior. Son TRES elementos, todos obligatorios y todos con el
  mismo nivel de detalle que la ilustración de diseño:
  (a) Líneas verticales blancas y azul oscuro tipo rayas / chevrones
      que SUBEN desde la banda inferior hacia la parte alta de la
      calota, recorriendo la zona superior en toda su altura.
  (b) Patrón de textura fina tipo malla / triángulos entrelazados en
      blanco sobre los costados superiores de la calota, con la misma
      extensión y la misma intensidad que en la ilustración.
  (c) Formas geométricas angulares en blanco y azul oscuro en la zona
      alta de la calota, con todas sus capas tal como aparecen en la
      ilustración. Van PINTADAS, planas — nunca como piezas en
      relieve.
- ZONA INFERIOR — EL PATRÓN CUBRE COMPLETA LA CARCASA. El spoiler
  trasero y la carcasa del casco son PIEZAS DISTINTAS: no las
  confundas al decidir hasta dónde llega cada cosa. El patrón
  geométrico de la banda inferior tiene que cubrir COMPLETA la zona
  baja de la carcasa, incluyendo los LATERALES INFERIORES, sin
  cortarse ni dejar zonas sin diseño.
- Banda inferior: patrón geométrico blanco/rojo/azul con franjas tipo
  chevron.
- Wordmark "EDGE" en blanco, centrado, sobre la banda inferior.
- SIN sticker "DOT" y SIN ninguna otra marca de certificación u
  homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
  negocio del caso, ningún render de este livery las lleva. Si la
  ilustración de diseño muestra alguna, se omite.
- Etiquetas chicas "X40" a ambos lados de la banda inferior.

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso vista
trasera.

PROHIBIDO ABSOLUTO: no cambiar la forma ni la silueta trasera del
molde real. No agregar NINGUNA pieza, aleta, panel, saliente ni
relieve que no esté en la foto del molde negro liso — todo elemento
del diseño es pintura plana. No dejar el spoiler con el patrón de la
calota: va en azul sólido. No copiar la forma del casco de la imagen
de diseño si es distinta. No agregar elementos gráficos fuera de la
lista de arriba. No dejar la parte superior de la calota en azul liso
sin diseño. No cortar ni dejar incompleto el patrón de la zona
inferior. No entregar una ilustración, un dibujo vectorial, un render
plano ni un mockup de diseño — tiene que ser una fotografía
fotorrealista del casco físico real. No copiar el estilo de render de
la imagen de diseño (de esa imagen se toma SOLO el contenido gráfico).
No aplanar el material del casco ni eliminar los reflejos, las sombras
ni las texturas reales (pintura mate de la calota, tela del acolchado
y de las correas del borde inferior). No contaminar la silueta trasera
con la forma del mockup: la calota redondeada y compacta, el extractor
superior, el labio del spoiler y el borde inferior son los de la foto
del molde real.
```

</details>

**Estado:** ✅ generado — ver la auditoría del resultado justo abajo.

### Intento 4 — Colorway 1 vista trasera, resultado auditado

**Estado:** ⚠️ Gran avance — realismo, silueta general, livery completo y sin piezas inventadas. Queda 1 defecto: el spoiler salió híbrido.

**Qué salió bien:** el usuario resumió el resultado diciendo que **"lo demás lo hizo excelente"**, y la comparación contra el molde negro liso y contra el mockup lo confirma: **los defectos que esta vista venía arrastrando quedaron todos cerrados en el mismo intento**.

1. **Realismo fotográfico logrado — la propagación del tercer eje funcionó.** El resultado ya es una **fotografía de producto real** y no la ilustración plana del Intento 3: tiene pintura mate con su microtextura, iluminación de estudio con sombras suaves, reflejos especulares creíbles sobre la superficie curva de la calota, y el acolchado interior y las correas del borde inferior con su textura de tela real. Copiar el bloque `CRÍTICO — EL RESULTADO ES UNA FOTOGRAFÍA, NO UNA ILUSTRACIÓN` y la regla de "DOS FUENTES, TRES ROLES" desde la vista lateral a esta vista hizo exactamente lo que tenía que hacer, lo que valida en la práctica la lección de propagación entre vistas que había dejado el Intento 3.
2. **Silueta general recuperada.** La calota trasera volvió a ser **redondeada y compacta** como la del molde real, con el **extractor de ventilación superior** en su posición y con su forma correctas, y el **borde inferior con el acolchado y las correas** tal como en la foto del checkpoint. Se terminó la contaminación de silueta con la del mockup que había arruinado el intento anterior.
3. **Livery completo.** La zona superior de la calota ya no está lisa: trae las **líneas verticales blancas y azul oscuro**, el **patrón de malla triangular con buena extensión** y las **formas geométricas angulares**. La **banda inferior cubre completa la zona baja**, con el wordmark **"EDGE"**, el sticker **"DOT"** y las etiquetas **"X40"** a ambos lados.
4. **Sin piezas inventadas.** Ya no aparecen las **aletas ni los paneles elevados** que había inventado un intento anterior: el casco tiene exactamente las piezas físicas del molde real, y todo lo que viene del mockup quedó como pintura plana.

**Qué falló (1 defecto — el spoiler híbrido):** el único problema del resultado está concentrado en una sola pieza, el **spoiler trasero**, que quedó **a mitad de camino entre el del molde real y el del mockup**.

- **Cómo es en la foto del molde negro liso:** el spoiler trasero es un **labio bajo, discreto e integrado** a la superficie superior-trasera de la carcasa — **sobresale poco**, **acompaña la curvatura** de la calota y tiene un **borde suave**. No es una pieza alada ni prominente.
- **Cómo lo dibuja la ilustración de diseño (mockup):** ahí el spoiler es una **pieza grande, prominente y muy sobresaliente, tipo ala**, con **bordes marcados** y un **perfil mucho más agresivo**.
- **Qué hizo el generador:** **combinó las dos**. Se quedó con el **azul sólido del mockup** —eso está bien y es exactamente lo que se pedía—, pero **junto con el color se trajo también la forma y el tamaño**: el spoiler salió como una pieza grande y prominente, que sobresale bastante más de lo que sobresale en el molde real. No reconoció el spoiler propio del original.

**Causa raíz — la separación de roles no bajaba al nivel de la pieza:** el prompt del Intento 4 separaba correctamente los **3 roles a nivel de la imagen completa** (forma del molde / contenido gráfico del mockup / estilo de render del molde), y de hecho esa separación funcionó para todo el resto de la vista. Pero **a nivel de una pieza puntual el spoiler recibía instrucciones de las dos fuentes a la vez**: "el color viene del mockup (azul sólido)" y "la forma viene del molde real". Al cruzarse las dos fuentes sobre el mismo elemento, el generador no eligió una para cada atributo — **promedió las dos**. La lección: cuando una pieza concreta toma su **color de una fuente** y su **forma de otra**, hay que **desglosar la separación de roles al nivel de esa pieza** — decir explícitamente **qué atributo sale de cada imagen**, **prohibir el promedio/híbrido** con esas palabras, y **describir la forma real de la pieza con detalle** (cuánto sobresale, qué perfil tiene, cómo es su borde, cómo se integra a la calota) en vez de solo nombrarla. Declarar la separación a nivel de la imagen entera no alcanza justo en el punto donde las dos fuentes se tocan.

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 5, abajo).

### Intento 5 — Colorway 1 vista trasera, spoiler con separación de roles a nivel de pieza

<details><summary>Prompt usado (actualizado: sin sticker "DOT" — ver nota debajo del bloque)</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista trasera), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, TRES ROLES QUE NUNCA SE MEZCLAN:
- La FOTO del casco NEGRO LISO vista trasera es la ÚNICA autoridad de
  FORMA — silueta de la calota desde atrás, extractor de ventilación
  superior, labio del spoiler, borde inferior con el acolchado y las
  correas, todo tal cual está en esa foto. Copiala sin ninguna
  variación.
- Esa MISMA foto del casco negro liso es también la ÚNICA autoridad
  de ESTILO DE RENDER Y REALISMO DE MATERIAL — es una fotografía de
  producto real, y el resultado tiene que ser una fotografía igual de
  real: mismo tipo de iluminación, mismos reflejos, misma textura de
  pintura, mismo volumen tridimensional.
- La imagen de diseño azul/blanco/rojo vista trasera es SOLO fuente
  de CONTENIDO GRÁFICO — qué formas, qué colores y dónde va cada
  elemento, el wordmark "EDGE", los patrones geométricos. NUNCA su
  forma de casco y NUNCA su estilo de render. Esa imagen de diseño es
  una ILUSTRACIÓN VECTORIAL 2D PLANA: el resultado final NO debe
  verse como esa ilustración. Si esa imagen muestra una forma de
  casco distinta a la del molde negro liso, ignorá esa forma por
  completo.

CRÍTICO — EL RESULTADO ES UNA FOTOGRAFÍA, NO UNA ILUSTRACIÓN (defecto
real de un intento anterior de esta misma vista, que devolvió un
dibujo vectorial plano en vez de una foto — no lo repitas):
- La salida tiene que ser una FOTOGRAFÍA DE PRODUCTO FOTORREALISTA del
  casco físico real, con exactamente el mismo tratamiento fotográfico
  que la foto del molde negro liso:
  - misma iluminación de estudio, con sus luces y sus sombras suaves;
  - mismos reflejos especulares sutiles sobre la superficie curva de
    la calota vista desde atrás;
  - misma microtextura de pintura mate real (no color plano digital);
  - mismo acolchado interior y mismas correas en el borde inferior,
    con su textura de tela real;
  - mismo volumen y misma profundidad tridimensional.
- El livery se aplica como PINTURA REAL sobre la superficie física del
  casco: sigue la curvatura de la carcasa, se deforma con ella en
  perspectiva, y recibe la luz y las sombras de la escena igual que el
  resto del casco. NO es un dibujo plano pegado encima ni una calcomanía
  digital superpuesta.
- PROHIBIDO en cuanto a estilo: colores planos sin gradiente, ausencia
  de reflejos, bordes vectoriales de software de diseño, aspecto de
  mockup o de render 2D. Si el resultado se parece a la ilustración de
  diseño en su acabado, está mal.

CRÍTICO — NO INVENTES NINGUNA PIEZA FÍSICA (defecto real de un intento
anterior: aparecieron aletas y paneles elevados en la parte alta de la
calota que NO existen en el molde real — no lo repitas): el casco
visto de atrás tiene EXACTAMENTE las piezas que se ven en la foto del
molde negro liso, ni una más: la superficie limpia y redondeada de la
calota, el extractor de ventilación superior, el labio del spoiler
trasero y el borde inferior con el acolchado y las correas. TODO lo
demás que aparece en la ilustración de diseño son GRÁFICOS PLANOS
PINTADOS, no relieves ni piezas: las líneas, los chevrones, las formas
angulares y el patrón de malla son PINTURA SOBRE UNA SUPERFICIE LISA.
No los conviertas en aletas, paneles, salientes ni ningún volumen
físico. Si en la ilustración una forma parece una pieza en relieve,
igual va como pintura plana.

PASO 1 — FORMA: reproducí exactamente la forma trasera del casco
negro liso antes de aplicar cualquier gráfico.

CRÍTICO — LA SILUETA TRASERA ES LA DEL MOLDE REAL, NO LA DEL MOCKUP
(defecto real de un intento anterior de esta misma vista: la silueta
se contaminó con la del mockup y salió más plana y más "dibujada" — no
lo repitas). En la foto del casco negro liso vista de atrás:
- la calota es REDONDEADA Y COMPACTA, con su curvatura real;
- el extractor de ventilación superior está en su posición y con su
  forma exactas;
- el labio del spoiler trasero tiene su relieve real, con el volumen
  que muestra la foto;
- el borde inferior muestra el acolchado interior y las correas
  visibles, tal como en la foto.
Esa silueta sale SIEMPRE de la foto del molde negro liso, nunca del
mockup de diseño, que tiene una forma de casco distinta. Si las dos
imágenes no coinciden en la forma, gana la foto del molde real.

CRÍTICO — EL SPOILER: SU FORMA SALE DEL MOLDE REAL, SU COLOR SALE DEL
MOCKUP, Y NUNCA SE PROMEDIAN (defecto real de un intento anterior de
esta misma vista — no lo repitas). El spoiler es la ÚNICA pieza del
casco que toma atributos de las DOS fuentes a la vez, y por eso hay
que separarlos con precisión quirúrgica, atributo por atributo:
- FORMA, TAMAÑO Y PERFIL — 100% DE LA FOTO DEL MOLDE NEGRO LISO. En
  esa foto, el spoiler trasero es un LABIO BAJO, DISCRETO E INTEGRADO
  a la superficie superior-trasera de la carcasa: SOBRESALE POCO,
  ACOMPAÑA LA CURVATURA de la calota y tiene un BORDE SUAVE, que se
  funde con la superficie en vez de recortarse contra ella. NO es una
  pieza alada, NO es prominente y NO sobresale marcadamente.
  Reproducí ESE labio exacto: ese volumen, ese perfil, esa altura y
  ese borde, los de la foto del molde real y ninguno otro.
- COLOR — 100% DEL MOCKUP DE DISEÑO: azul sólido, uniforme, sin
  patrón de malla de triángulos encima, sin líneas blancas y sin
  chevrones encima, claramente diferenciado a simple vista del patrón
  que lo rodea.
- PROHIBIDO PROMEDIAR LAS DOS FUENTES EN ESTA PIEZA. En el mockup de
  diseño el spoiler se dibuja como una PIEZA GRANDE, PROMINENTE y MUY
  SOBRESALIENTE, TIPO ALA, con BORDES MARCADOS y un PERFIL MUCHO MÁS
  AGRESIVO. Esa forma NO se usa: ni entera, ni parcialmente, ni "a
  medio camino". Un intento anterior de esta misma vista combinó las
  dos y devolvió un spoiler mucho más grande y más sobresaliente que
  el real — eso está MAL. Del spoiler del mockup se toma ÚNICAMENTE
  el COLOR AZUL SÓLIDO; absolutamente todo lo demás del spoiler
  —cuánto sobresale, su perfil, su tamaño, su borde y cómo se integra
  a la calota— sale de la foto del molde real.
- VERIFICACIÓN ANTES DE ENTREGAR: compará el spoiler del resultado
  contra el spoiler de la foto del molde negro liso. Tiene que
  SOBRESALIR LO MISMO y tener EL MISMO PERFIL, solo que pintado de
  azul sólido. Si en el resultado se ve más grande, más prominente o
  más "alado" que en la foto del molde, está mal y hay que
  corregirlo antes de entregar.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway azul/blanco/rojo:
- SPOILER TRASERO — AZUL SÓLIDO (defecto real de un intento anterior:
  el spoiler quedó con el mismo patrón blanco/azul de la calota, sin
  su color propio — no lo repitas). El COLOR del spoiler es AZUL
  SÓLIDO, uniforme, claramente diferenciado del resto del casco: sin
  patrón de malla, sin líneas blancas, sin chevrones encima. Su
  FORMA, su TAMAÑO y su PERFIL ya quedaron definidos arriba, en el
  bloque "EL SPOILER: SU FORMA SALE DEL MOLDE REAL, SU COLOR SALE DEL
  MOCKUP", y acá NO se tocan: son los del labio bajo, discreto e
  integrado de la foto del molde real. En este paso lo único que se
  le aplica al spoiler es el color.
- PARTE SUPERIOR DE LA CALOTA — LLEVA DISEÑO, NO ES AZUL LISO. El azul
  es solo la BASE: el diseño va ENCIMA y tiene que CUBRIR la zona
  superior. Son TRES elementos, todos obligatorios y todos con el
  mismo nivel de detalle que la ilustración de diseño:
  (a) Líneas verticales blancas y azul oscuro tipo rayas / chevrones
      que SUBEN desde la banda inferior hacia la parte alta de la
      calota, recorriendo la zona superior en toda su altura.
  (b) Patrón de textura fina tipo malla / triángulos entrelazados en
      blanco sobre los costados superiores de la calota, con la misma
      extensión y la misma intensidad que en la ilustración.
  (c) Formas geométricas angulares en blanco y azul oscuro en la zona
      alta de la calota, con todas sus capas tal como aparecen en la
      ilustración. Van PINTADAS, planas — nunca como piezas en
      relieve.
- ZONA INFERIOR — EL PATRÓN CUBRE COMPLETA LA CARCASA. El spoiler
  trasero y la carcasa del casco son PIEZAS DISTINTAS: no las
  confundas al decidir hasta dónde llega cada cosa. El patrón
  geométrico de la banda inferior tiene que cubrir COMPLETA la zona
  baja de la carcasa, incluyendo los LATERALES INFERIORES, sin
  cortarse ni dejar zonas sin diseño.
- Banda inferior: patrón geométrico blanco/rojo/azul con franjas tipo
  chevron.
- Wordmark "EDGE" en blanco, centrado, sobre la banda inferior.
- SIN sticker "DOT" y SIN ninguna otra marca de certificación u
  homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
  negocio del caso, ningún render de este livery las lleva. Si la
  ilustración de diseño muestra alguna, se omite.
- Etiquetas chicas "X40" a ambos lados de la banda inferior.

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso vista
trasera.

PROHIBIDO ABSOLUTO: no cambiar la forma ni la silueta trasera del
molde real. No agregar NINGUNA pieza, aleta, panel, saliente ni
relieve que no esté en la foto del molde negro liso — todo elemento
del diseño es pintura plana. No dejar el spoiler con el patrón de la
calota: va en azul sólido. No copiar la forma del casco de la imagen
de diseño si es distinta. No agregar elementos gráficos fuera de la
lista de arriba. No dejar la parte superior de la calota en azul liso
sin diseño. No cortar ni dejar incompleto el patrón de la zona
inferior. No entregar una ilustración, un dibujo vectorial, un render
plano ni un mockup de diseño — tiene que ser una fotografía
fotorrealista del casco físico real. No copiar el estilo de render de
la imagen de diseño (de esa imagen se toma SOLO el contenido gráfico).
No aplanar el material del casco ni eliminar los reflejos, las sombras
ni las texturas reales (pintura mate de la calota, tela del acolchado
y de las correas del borde inferior). No contaminar la silueta trasera
con la forma del mockup: la calota redondeada y compacta, el extractor
superior, el labio del spoiler y el borde inferior son los de la foto
del molde real. No combinar, promediar ni hibridar la forma del
spoiler del mockup con la del molde real. No agrandar el spoiler, no
hacerlo más prominente, más sobresaliente ni más "alado" de lo que es
en la foto del molde real: es un labio bajo, discreto e integrado, que
acompaña la curvatura de la calota. Del spoiler del mockup se toma
SOLO el color azul sólido, NUNCA la forma.
```

</details>

> ⚠️ **Nota sobre el prompt de arriba — actualizado DESPUÉS de correrlo.** La corrida real del Intento 5 se hizo con una lista de elementos que todavía incluía la línea `Sticker "DOT" pequeño en la parte más baja, centrado.`, y por eso el resultado trae el sticker: **el generador hizo bien lo que se le pidió**. Esa línea ya **se sacó del bloque de arriba** y se reemplazó por la instrucción en negativo (`SIN sticker "DOT" y SIN ninguna otra marca de certificación…`), en aplicación de la **regla de negocio del caso** documentada al principio de este archivo. Si esta vista se vuelve a correr desde cero, el prompt de arriba ya no pide el DOT.

**Estado:** ✅ generado — **el mejor resultado de esta vista hasta ahora.** El usuario lo resumió como **"ahora sí, casi casi"**. Ver la auditoría justo abajo.

### Intento 5 — Colorway 1 vista trasera, resultado auditado

**Estado:** ✅ **Aprobado en lo esencial — los TRES defectos históricos de esta vista quedaron cerrados en el mismo intento.** Quedan **2 ajustes chicos**, que el propio usuario describió como *"cambios estrictamente pequeños, muy pequeños"*, y de los cuales **uno ni siquiera es un defecto del generador** sino una decisión de negocio nueva. Es, con diferencia, el mejor resultado que dio esta vista en toda la secuencia.

**Qué salió bien — los 3 defectos que esta vista venía arrastrando quedaron resueltos:**

1. **Estilo de render — es una FOTOGRAFÍA, no una ilustración (defecto histórico #1, cerrado y sostenido).** El resultado es una fotografía de producto sobre fondo blanco: iluminación de estudio, sombras suaves, reflejos especulares corriendo sobre la curvatura de la calota y microtextura de pintura mate. No es un dibujo plano. Este es el defecto que hizo fallar al **Intento 3** de esta misma vista (regresión a ilustración vectorial plana por falta del tercer eje) y que el **Intento 4** ya había corregido: acá se confirma que **se sostiene corrida tras corrida**, no fue suerte de una tirada.
2. **Forma del spoiler — se terminó la hibridación con el mockup (defecto histórico #2, cerrado).** El spoiler ya **no está agrandado ni hibridado**: es un **labio integrado que acompaña la curvatura** de la calota, no la pieza alada y prominente del mockup que había devuelto el Intento 4. El bloque `CRÍTICO — EL SPOILER: SU FORMA SALE DEL MOLDE REAL, SU COLOR SALE DEL MOCKUP, Y NUNCA SE PROMEDIAN` —desglose atributo por atributo, prohibición explícita del promedio y descripción detallada del labio bajo— **hizo exactamente lo que tenía que hacer**. Esto valida en la práctica la lección de **separación de roles a nivel de pieza** que había dejado el Intento 4.
3. **Color del spoiler — azul sólido uniforme (defecto histórico #3, cerrado).** El spoiler salió en **azul sólido**, sin patrón de malla, sin blanco y sin líneas encima. Era el defecto que se repetía en **las dos vistas** de este colorway (Intento 2 de la trasera y Intento 3 de la lateral) y que llegó a registrarse como *patrón de falla del caso*.

**El resto de la vista también quedó bien:** la **forma del molde real** se respetó (calota redondeada y compacta, extractor de ventilación superior en su posición, borde inferior con el acolchado interior negro y las correas con acentos rojos, todo con textura de tela real) y el **livery quedó completo** — líneas verticales blancas y azul oscuro subiendo por la calota, patrón de malla triangular fina en blanco sobre los costados superiores, formas geométricas angulares en blanco/azul oscuro, banda inferior con patrón geométrico blanco/rojo/azul tipo chevron, wordmark **"EDGE"** en azul oscuro sobre banda blanca y las etiquetas **"X40"** en rojo a ambos lados. **No aparecieron piezas físicas inventadas.**

**Qué falta (2 ajustes chicos):**

| # | Ajuste | Qué se ve en el resultado | ¿Es un defecto del generador? |
|---|---|---|---|
| 1 | **El spoiler no se lee como una pieza COMPLETA** | El ala azul cruza horizontalmente, pero **sus dos extremos no cierran**: se truncan / se desvanecen contra la silueta antes de terminar de recorrerse, así que la pieza se lee **parcial**, como si estuviera cortada o le faltara el tramo final a cada lado, en vez de leerse como **una sola pieza continua de punta a punta** que nace de la carcasa, la recorre y vuelve a cerrar contra ella. Palabras del usuario: *"el spoiler salga completo porque ahorita no está siendo tan completo"*. | **Sí, pero de un tipo nuevo.** No es un problema de **tamaño** (ya está bien) ni de **color** (ya está bien): es un problema de **integridad y continuidad de la pieza**. |
| 2 | **Sacar el sticker "DOT"** | En la parte baja, centrado debajo del wordmark "EDGE", aparece la etiqueta rectangular chica de certificación **"DOT"**. El usuario pidió *"que no incluya lo de la verificación DOT"*. | **No.** El prompt del Intento 5 **lo pedía explícitamente** en su lista de elementos (`Sticker "DOT" pequeño en la parte más baja, centrado.`) y el generador lo dibujó bien. Es una **decisión de negocio nueva** del usuario, no una falla de ejecución — ver la sección de regla de negocio al principio del archivo. |

**Causa raíz del ajuste 1 — la separación de roles resolvió el TAMAÑO del spoiler, pero nadie declaró su INTEGRIDAD.** El bloque del spoiler del Intento 5 está escrito enteramente en términos de **cuánto sobresale, qué perfil tiene, qué altura y qué borde** — es decir, en términos de **dimensiones**, porque el defecto que venía a corregir era un spoiler agrandado e hibridado. Nunca dice **hasta dónde llega la pieza a lo largo de la carcasa**, ni que tiene que **cerrar contra ella en los dos extremos**. Con el eje de las dimensiones fuertemente restringido ("no lo agrandes, no lo hagas más prominente, no lo hagas más alado") y el eje de la extensión sin declarar, el generador resolvió lo primero y dejó lo segundo librado a su criterio: dibujó un labio bajo y correcto en perfil, pero **truncado en las puntas**. Es el mismo mecanismo que ya se documentó para los recoloreos y para los borrados —**el atributo que el prompt no declara es el que sale mal**—, aplicado esta vez a la **extensión física de una pieza**.

**Riesgo del Intento 6, y por qué hay que blindarlo explícitamente:** el pedido natural del usuario es *"que el spoiler salga completo"*, y **"completo" es exactamente la palabra que el generador puede leer como "más grande"**. Si el prompt pide integridad sin blindar las dimensiones, lo más probable es que devuelva el spoiler **agrandado y más prominente** — o sea que **reintroduzca el defecto de hibridación que costó cinco intentos resolver**. Por eso el prompt del Intento 6 tiene que decir con todas las letras que **completar ≠ agrandar**.

**Qué hay que hacer:** resolver los 2 ajustes por **EDICIÓN PUNTUAL sobre este resultado** (Intento 6, abajo), **no por regeneración**. Aplica el ítem del checklist Tipo A *"Ajuste puntual sobre un resultado ya aprobado = edición, no regeneración completa"*: la base ya es buena en los tres ejes que costaron cinco intentos —estilo de render fotográfico, forma del spoiler y color del spoiler— y el usuario fue enfático en que todo lo demás quedó *"una belleza"*. Regenerar volvería a poner los tres en juego.

### Intento 6 — Colorway 1 vista trasera, edición puntual: completar el spoiler y sacar el sticker "DOT"

**Enfoque:** edición puntual sobre la imagen del Intento 5, con **2 cambios y nada más**. El prompt trae tres blindajes que no son opcionales:

1. **"Completar ≠ agrandar"**, dicho explícitamente y repetido en la verificación final — es el riesgo principal de esta corrida.
2. **Cobertura completa del cambio dentro de la zona**, adaptada acá a **integridad de pieza**: recorrer el spoiler de un extremo al otro y confirmar que no queda ningún tramo cortado ni difuminado.
3. **Un borrado son dos tareas**: eliminar el "DOT" sin dejar resto ni fantasma **y** reconstruir el patrón de la banda inferior que va debajo, sin costura, sin parche y sin zona plana.

<details><summary>Prompt del Intento 6 (edición, no generación) — adjuntar SOLO la imagen del Intento 5</summary>

```
Esto es una EDICIÓN PUNTUAL sobre la imagen adjunta, NO una
generación nueva desde cero. La imagen adjunta es un resultado YA
APROBADO: su forma, su realismo fotográfico, su perspectiva, su
livery y su estilo están bien tal cual están. Se devuelve la MISMA
imagen, IDÉNTICA, salvo por DOS cambios puntuales y MUY CHICOS.
Ninguna otra línea, forma, textura, color ni detalle cambia en
ninguna parte de la imagen.

TODO ESTO NO SE TOCA — QUEDA PIXEL POR PIXEL IGUAL:
- La forma y la silueta completa del casco vista de atrás: la calota
  redondeada y compacta del molde real, con su curvatura.
- El extractor de ventilación superior, en su posición y con su
  forma exactas.
- TODO el livery, elemento por elemento: las líneas verticales
  blancas y azul oscuro que suben por la calota, el patrón de malla
  triangular fina en blanco de los costados superiores, las formas
  geométricas angulares en blanco y azul oscuro de la zona alta, y
  la banda inferior con su patrón geométrico blanco/rojo/azul tipo
  chevron.
- El wordmark "EDGE" en azul oscuro sobre la banda blanca: misma
  posición, mismo tamaño, misma tipografía.
- Las etiquetas "X40" en rojo a ambos lados: las DOS siguen
  presentes, iguales y en su lugar.
- El borde inferior con el acolchado interior negro y las correas
  con sus acentos rojos, con su textura de tela real.
- El realismo fotográfico completo: iluminación de estudio, sombras
  suaves, reflejos especulares sobre la curvatura de la calota y
  microtextura de pintura mate. La imagen sigue siendo una
  FOTOGRAFÍA DE PRODUCTO, con exactamente el mismo tratamiento
  fotográfico.
- El ángulo de cámara, el encuadre y el fondo blanco.

CAMBIO 1 — EL SPOILER SE COMPLETA: UNA SOLA PIEZA CONTINUA DE PUNTA
A PUNTA:
El ala azul del spoiler tiene que leerse como UNA PIEZA FÍSICA
ENTERA, no como un tramo suelto. Hoy cruza horizontalmente pero SUS
DOS EXTREMOS NO CIERRAN: se truncan y se desvanecen contra la
silueta antes de terminar de recorrerse, así que la pieza se lee
PARCIAL, como si estuviera cortada o le faltara el tramo final a
cada lado.
Lo que tiene que pasar:
- El spoiler NACE de la carcasa, la RECORRE y vuelve a CERRAR contra
  ella en LOS DOS EXTREMOS. Los dos extremos terminan CONTRA la
  carcasa, con un final definido, no en el aire y no difuminados.
- Ningún tramo del spoiler queda CORTADO, INTERRUMPIDO, DESVANECIDO
  ni PERDIDO contra el fondo o contra la silueta.
- La pieza se lee como UNA SOLA, CONTINUA y COMPLETA de un extremo
  al otro, con su borde definido de punta a punta.
COBERTURA COMPLETA DEL CAMBIO — RECORRÉ LA PIEZA ENTERA: no alcanza
con arreglar un extremo. Recorré el spoiler DE UN EXTREMO AL OTRO y
confirmá que NO QUEDA NINGÚN TRAMO cortado, difuminado, adelgazado
hasta desaparecer ni interrumpido en ningún punto del recorrido.

COMPLETAR NO ES AGRANDAR — ESTO ES LO MÁS IMPORTANTE DE TODO EL
CAMBIO 1 (leelo dos veces): "que el spoiler salga completo" NO
significa "que el spoiler sea más grande". El tamaño y el perfil que
tiene hoy en la imagen adjunta son CORRECTOS y COSTÓ CINCO INTENTOS
llegar a ellos. Lo único que falta es que la pieza se lea ENTERA.
Por lo tanto, del spoiler NO CAMBIA NADA MÁS:
- NO se agranda.
- NO se hace más prominente ni más sobresaliente.
- NO se hace más "alado" ni más agresivo.
- NO cambia de perfil.
- NO cambia de altura ni de grosor.
- NO cambia de color: sigue siendo AZUL SÓLIDO uniforme, sin patrón
  de malla, sin blanco, sin líneas ni chevrones encima.
- NO se separa de la carcasa ni se convierte en una pieza montada
  encima.
Sigue siendo EXACTAMENTE el mismo labio BAJO, DISCRETO E INTEGRADO
del molde real que ya está en la imagen adjunta, que sobresale poco
y acompaña la curvatura de la calota. Un intento anterior de esta
misma vista devolvió el spoiler como una pieza grande y prominente
tipo ala, copiada del mockup de diseño — ESO ESTÁ MAL y no se puede
volver a introducir por querer "completarlo". Se completa el
RECORRIDO de la pieza, no sus DIMENSIONES.

CAMBIO 2 — ELIMINAR EL STICKER "DOT":
En la PARTE BAJA del casco, CENTRADO DEBAJO del wordmark "EDGE", hay
una ETIQUETA RECTANGULAR CHICA de certificación con el texto "DOT".
Ese sticker NO VA: por regla de negocio, ningún render de este
livery lleva marcas de certificación ni de homologación.
ELIMINALO POR COMPLETO — entero, sin dejar ni un borde, ni una
esquina, ni un contorno, ni un halo, ni una sombra, ni un rectángulo
más claro o más oscuro, ni restos de texto ilegible.
UN BORRADO SON DOS TAREAS, NO UNA — la segunda es la que se saltea:
1) ELIMINAR el sticker sin dejar rastro.
2) RECONSTRUIR EL DIBUJO QUE VA DEBAJO. Debajo NO va un color plano
   ni un parche liso: va la SUPERFICIE PINTADA CON EL PATRÓN DE LA
   BANDA INFERIOR que corresponde a esa zona, como si el sticker
   nunca hubiera estado ahí. El patrón geométrico vecino
   —blanco/rojo/azul tipo chevron— se COMPLETA POR DEBAJO siguiendo
   la curvatura del casco y la lógica del diseño, con las MISMAS
   líneas, los MISMOS colores y el MISMO trazado que traen las zonas
   contiguas: una línea que entra por un borde del área tiene que
   SALIR POR EL OTRO alineada y con el mismo grosor. Con la misma
   iluminación, los mismos reflejos y el mismo material (pintura
   mate con su microtextura) que la superficie de alrededor.
No dejes ninguna COSTURA, ningún PARCHE, ninguna ZONA PLANA, ningún
hueco ni ninguna marca de dónde estaba el sticker.
SE ELIMINA SOLO EL "DOT": el wordmark "EDGE" y las DOS etiquetas
"X40" NO se tocan y tienen que seguir presentes, iguales y en su
lugar. No te lleves ningún otro texto por asociación.

NADA MÁS CAMBIA:
Fuera de esos 2 cambios, la imagen se devuelve idéntica. Se
conservan sin ninguna alteración:
- La forma y la silueta del molde real, y la calota con su
  curvatura.
- El extractor de ventilación superior.
- Todo el livery: líneas verticales, patrón de malla triangular,
  formas geométricas angulares y banda inferior con su patrón
  chevron.
- El wordmark "EDGE" y las etiquetas "X40".
- El acolchado interior negro y las correas con sus acentos rojos.
- El ángulo de cámara, el encuadre y el fondo.
- La iluminación, las sombras, los reflejos especulares y la
  microtextura de pintura mate.
Sigue siendo LA MISMA FOTOGRAFÍA DE PRODUCTO: no la conviertas en
una ilustración, en un dibujo vectorial, en un render plano ni en un
mockup, y no vuelvas a renderizar el realismo desde cero.

CRÍTICO — LAS ZONAS EDITADAS TAMPOCO SE REDIBUJAN: en las 2 zonas
que se tocan, lo ÚNICO que cambia es lo indicado — que el spoiler se
lea entero y que el sticker "DOT" desaparezca. TODO el resto del
dibujo de esas zonas se conserva IDÉNTICO: las líneas, los patrones,
las franjas, las capas, las texturas, los colores y cada trazo en su
misma posición exacta. Que una zona esté nombrada en la lista de
cambios NO es permiso para rehacerla. Un intento anterior de edición
en este mismo caso interpretó "cambiá esta zona" como licencia para
REDIBUJAR LA ZONA ENTERA y la devolvió simplificada, con menos
líneas y textos chicos perdidos. ESO ESTÁ PROHIBIDO.

VERIFICACIÓN FINAL ANTES DE ENTREGAR — TRES CHEQUEOS, LOS TRES
OBLIGATORIOS:
1) ¿EL SPOILER SE LEE ENTERO? Recorrelo de un extremo al otro:
   ¿los DOS extremos CIERRAN contra la carcasa, con un final
   definido, sin truncarse, sin desvanecerse y sin ningún tramo
   cortado en el medio? Si algún extremo queda al aire, difuminado o
   perdido contra la silueta, está MAL.
2) ¿EL SPOILER SIGUE TENIENDO EL MISMO TAMAÑO? Compará el spoiler de
   tu resultado contra el de la imagen adjunta: ¿tiene el MISMO
   tamaño, el MISMO perfil y la MISMA altura, sobresaliendo lo
   mismo? ¿NO creció, NO se hizo más prominente y NO se hizo más
   "alado"? Si creció, está MAL, aunque ahora se vea completo.
3) ¿DESAPARECIÓ EL "DOT" SIN DEJAR RASTRO? ¿No queda ni un borde, ni
   un halo, ni un rectángulo más claro, ni resto de texto? ¿Y debajo
   quedó el PATRÓN DE LA BANDA INFERIOR RECONSTRUIDO y continuo, sin
   parche, sin costura y sin zona plana? ¿Siguen ahí el wordmark
   "EDGE" y las DOS etiquetas "X40"?
Si cualquiera de los tres chequeos falla, corregilo antes de
entregar. Y como chequeo global: poniendo las dos imágenes una al
lado de la otra, las ÚNICAS diferencias perceptibles tienen que ser
esas dos.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt como **edición** (adjuntar SOLO la imagen del Intento 5) y mandar el resultado para auditoría, verificando los **tres chequeos** del bloque final: spoiler entero con los dos extremos cerrados, spoiler **del mismo tamaño** que antes (el riesgo principal es que "completo" se lea como "más grande") y "DOT" borrado sin rastro con el patrón de la banda inferior reconstruido debajo.

<details><summary>Prompt — Colorway 2 (rojo/negro/gris), vista lateral</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista lateral/3-4), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO (sin ningún gráfico encima) es la
  ÚNICA autoridad de FORMA — pico frontal, silueta de la calota,
  mentonera, ventilaciones, mecanismo de pivote del visor, todo tal
  cual está en esa foto.
- La imagen del casco con el diseño ROJO/NEGRO/GRIS ya aplicado es
  SOLO fuente de diseño gráfico — colores, patrones geométricos,
  wordmark "EDGE", nunca su forma.

PASO 1 — FORMA: reproducí exactamente la forma del casco negro liso
antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway rojo/negro/gris:
- Carcasa principal: negra, con paneles diagonales rojos y líneas
  geométricas grises.
- Pico frontal: rojo sólido.
- Wordmark "EDGE" en gris, tipografía bold itálica, sobre la zona
  inferior lateral.
- Acentos rojos cerca de la zona de ventilación.

VISOR: tintado/oscuro, igual que en la imagen de diseño de referencia
(mismo criterio que el Colorway 1 — confirmado como parte del diseño,
no un error, ver pregunta abierta arriba).

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso: no
cambiar el ángulo de cámara ni la altura ni la rotación.

PROHIBIDO ABSOLUTO: no cambiar la forma, silueta, ventilaciones,
mentonera ni pico frontal del molde real. No copiar la forma del
casco de la imagen de diseño si es distinta a la del molde real. No
agregar elementos gráficos que no estén en la lista de arriba.
```

</details>

### Intento 1 — Colorway 2 vista lateral, resultado auditado

**Estado:** ✅ Aprobado — cumple los 3 objetivos principales (forma del molde real, realismo fotográfico y contenido completo del livery). El usuario lo calificó de "espectacular" y pidió la auditoría formal para confirmar que efectivamente cumplió todos los objetivos.

**Veredicto resumido:** la geometría del molde real se respetó pieza por pieza, el resultado es una fotografía de producto real (no una ilustración plana) y el livery rojo/negro/gris se transfirió completo. Quedan 3 puntos que a la resolución de la captura no se pueden resolver con certeza y que hay que verificar con zoom — no son defectos confirmados y no bloquean la aprobación.

<details><summary>Auditoría completa — objetivo por objetivo</summary>

**1) Geometría — ✅ todo coincide con la foto del molde negro liso (checkpoint)**

| Elemento del molde real | Resultado | Observación |
|---|---|---|
| Pico frontal / spoiler | ✅ | Misma forma triangular puntiaguda y mismo ángulo que el checkpoint. |
| Silueta de la calota | ✅ | Misma proporción compacta y aerodinámica. |
| Mentonera | ✅ | Misma forma angular. |
| Ranuras de ventilación inferiores traseras | ✅ | Presentes, con la misma forma. |
| Mecanismo de pivote del visor | ✅ | Presente con su textura real de **fibra de carbono** y el pivote circular — coincidencia muy fuerte, es un detalle fotográfico fino que se preservó. |
| Correa roja | ✅ | Presente en la parte baja, igual que en el checkpoint. |
| Goma / borde inferior | ✅ | Negra — cumple además la regla de negocio de la sección 9 de `orquestacion-agentes-paralelos.md` (la goma del borde inferior va siempre en negro, en todos los cascos del catálogo). |

**2) Realismo fotográfico — ✅ cumplido**

El resultado **es una fotografía de producto**, no una ilustración plana:
- microtextura de pintura mate sobre la superficie;
- sombras suaves de estudio;
- reflejos especulares creíbles corriendo sobre las superficies curvas;
- textura real de fibra de carbono en la pieza del pivote;
- visor tintado con material real (no un relleno oscuro plano);
- fondo blanco de estudio con sombra suave debajo del casco.

**Hallazgo importante — evidencia adicional de no-determinismo del generador.** Este colorway logró el realismo fotográfico **sin necesitar** las instrucciones explícitas de "el resultado es una fotografía, no una ilustración" que sí hubo que agregar al Colorway 1 (ver su Intento 3, más arriba). Es decir: la **misma estructura de prompt**, sin el tercer eje de realismo de material, produjo una foto real acá y una ilustración vectorial plana allá. Esto refuerza directamente el ítem del checklist Tipo A de `orquestacion-agentes-paralelos.md` sobre que **el generador no es determinístico y un solo resultado no basta para juzgar un prompt**: parte de lo que se leyó como "efecto del texto del prompt" en la secuencia del Colorway 1 puede ser variación aleatoria de la corrida. Conclusión práctica: el tercer eje de realismo sigue valiendo la pena escribirlo (sube la probabilidad de foto real), pero su ausencia no explica por sí sola el fallo del Colorway 1.

**3) Contenido del livery — ✅ completo**

- [x] Carcasa negra con paneles diagonales rojos y líneas geométricas grises.
- [x] Pico frontal rojo.
- [x] Wordmark "EDGE" en gris, bold itálica, sobre la zona inferior lateral.
- [x] Acentos rojos cerca de la zona de ventilación.
- [x] Patrón de malla triangular en la calota superior.
- [x] Marcas tipo chevron "XXX" en la zona inferior delantera.

**4) Puntos a verificar con zoom (NO son defectos confirmados)**

Son tres cosas que a la resolución de la captura no se pueden resolver, no hallazgos de que algo esté mal:

1. **Acabado del pico frontal.** El pico salió rojo **glossy/brillante**, mientras el resto de la carcasa es mate. En el mockup de diseño (que es una ilustración plana) el pico también es rojo, pero de una ilustración 2D no se puede deducir si el acabado debía ser mate o brillante. **Confirmar con el usuario** si el pico va glossy o mate.
2. **Gráficos grises sobre las piezas de plástico negro de la ventilación.** En la zona baja trasera hay elementos gráficos grises que parecen caer cerca —o quizá encima— de las piezas de plástico negro de las ranuras de ventilación. **Verificar con zoom** si eso viola la regla del checklist Tipo A de "diseño gráfico solo sobre superficie pintada, nunca sobre piezas de plástico negro".
3. **Etiqueta chica tipo "X40".** La etiqueta que aparece en el mockup cerca de la ventilación no se confirma con certeza en el resultado a esta resolución — **verificar con zoom** si está presente o si se omitió.

</details>

**Qué hay que hacer:** verificar con zoom los 3 puntos de arriba (gráficos grises sobre las piezas de plástico negro de la ventilación y presencia de la etiqueta "X40") y confirmar con el usuario si el acabado del pico frontal debe ser glossy o mate. Ninguno de los tres bloquea la aprobación de esta vista.

### Intento 2 — Colorway 2 vista lateral, edición puntual sobre el resultado aprobado (no regeneración)

**Enfoque:** a diferencia de todos los otros intentos de este documento, este **no vuelve a generar el casco desde cero**. Parte de la imagen ya aprobada del Intento 1 y le pide únicamente 2 correcciones mínimas, aplicando la regla del checklist Tipo A de `orquestacion-agentes-paralelos.md`: *"Ajuste puntual sobre un resultado ya aprobado = edición, no regeneración completa"*. El criterio del checklist encaja exactamente con este caso — la base ya es buena (geometría del molde real coincidente pieza por pieza, realismo fotográfico logrado y livery completo) y lo único que falta son dos detalles finos que el usuario detectó revisando con zoom. Un prompt de regeneración completa volvería a poner en juego toda la geometría y todo el estilo de render en cada corrida, con el riesgo concreto —ya visto en este mismo documento— de que reaparezcan el drift del pico frontal/spoiler o la caída hacia la ilustración vectorial plana. No tiene sentido arriesgar lo que ya funciona para corregir dos zonas puntuales: se adjunta SOLO la imagen aprobada y se pide una edición mínima sobre ella.

**Los 2 ajustes pedidos:**
1. **El interior del rombo tiene que volver a negro, con el rojo limitado a la flecha.** En la zona alta-central del lateral hay una forma tipo rombo / marco geométrico angular concéntrico. En la ilustración de diseño de referencia, el interior de ese rombo es **negro** (o gris muy oscuro) y el rojo aparece solamente como una **flecha / chevron** que lo acompaña — negro de fondo, rojo como acento. En el resultado generado la relación quedó invertida: el rojo se comió el interior del rombo y esa zona salió mayormente roja. Hay que devolver el interior a negro y dejar el rojo únicamente en la flecha.
2. **El rojo del pico frontal / spoiler tiene que subir un poco de intensidad.** La forma, el acabado y la posición del pico están bien; lo que quedó corto es el color: el rojo salió un poco apagado respecto del rojo de la ilustración de diseño. Se pide subirlo levemente —un rojo algo más saturado e intenso, mismo color base— sin tocar nada más de esa pieza.

<details><summary>Prompt usado (edición, no generación)</summary>

```
Esto es una EDICIÓN PUNTUAL sobre la imagen adjunta, NO una
generación nueva desde cero. La imagen adjunta es un resultado YA
APROBADO: su forma, su realismo y su diseño están bien tal cual
están. Tu única tarea es corregir DOS zonas puntuales y devolver la
misma imagen con esos dos cambios y nada más.

TODO ESTO NO SE TOCA — QUEDA PIXEL POR PIXEL IGUAL:
- La forma y la geometría completa del casco: pico frontal, silueta
  de la calota, mentonera, ventilaciones, mecanismo de pivote del
  visor con su textura de fibra de carbono, correa roja y goma del
  borde inferior negra.
- El visor tintado/oscuro, con su mismo material y su mismo tono.
- El realismo fotográfico: iluminación de estudio, sombras suaves,
  reflejos especulares sobre las superficies curvas y microtextura
  de pintura mate. La imagen sigue siendo una fotografía de
  producto, con exactamente el mismo tratamiento fotográfico.
- El fondo y el ángulo de cámara.
- El wordmark "EDGE".
- Todos los demás elementos del livery: paneles diagonales rojos,
  líneas geométricas grises, patrón de malla triangular de la calota
  superior, chevrones "XXX" de la zona inferior delantera y acentos
  rojos cerca de la ventilación.

CAMBIO 1 — INTERIOR DEL ROMBO A NEGRO, ROJO SOLO EN LA FLECHA:
En la zona alta-central del lateral del casco hay una forma tipo
ROMBO / marco geométrico angular concéntrico. Hoy el interior de ese
rombo está mayormente ROJO — está mal: el rojo invadió el interior y
se comió la zona que no le corresponde. En la ilustración de diseño
esa relación es la inversa:
- El INTERIOR del rombo va en NEGRO (o gris muy oscuro), igual que
  la base de la carcasa.
- El ROJO va ÚNICAMENTE en la FLECHA / CHEVRON que acompaña al
  rombo — ese es el único acento rojo de esa zona.
Devolvé el interior del rombo a negro y dejá el rojo limitado a la
flecha/chevron. La forma del rombo, su posición, su tamaño y las
líneas del marco concéntrico no cambian: lo único que cambia es qué
zona va en negro y qué zona va en rojo.

CAMBIO 2 — ROJO DEL PICO FRONTAL / SPOILER UN POCO MÁS INTENSO:
Subí LEVEMENTE la saturación y la intensidad del rojo del pico
frontal / spoiler, para acercarlo al rojo de la ilustración de
diseño (hoy quedó un poco apagado). Es el mismo color base, solo un
poco más intenso. NO cambies la forma del pico, ni su acabado, ni su
brillo, ni sus reflejos, ni su posición: es un ajuste de color y
nada más.

PROHIBIDO ABSOLUTO — NO TOQUES NADA MÁS:
- No redibujes el casco ni ninguna de sus partes.
- No cambies la geometría, la silueta ni las proporciones.
- No vuelvas a renderizar el realismo fotográfico: la iluminación,
  las sombras, los reflejos y las texturas de la imagen adjunta se
  conservan tal cual.
- No muevas, redimensiones, agregues ni elimines ningún otro
  elemento gráfico del livery.
- No cambies el ángulo de cámara, el encuadre ni el fondo.
- No conviertas la imagen en una ilustración, un render plano ni un
  mockup: sigue siendo la misma fotografía.
Esta es una edición de DOS zonas puntuales. Todo el resto de la
imagen permanece idéntico a la imagen adjunta.
```

</details>

**Estado:** ✅ generado — ver la auditoría del resultado justo abajo.

### Intento 2 — Colorway 2 vista lateral, resultado auditado

**Estado:** ❌ Falló — la edición puntual terminó siendo un rediseño de la zona.

**Qué falló:** el prompt pedía dos cambios de color acotados, pero el generador **redibujó de cero toda la zona alta-central del lateral** en vez de limitarse a recolorearla. Comparando el antes contra el después, esa zona perdió buena parte de su dibujo original:

- En la imagen aprobada, el sector tenía un diseño **denso y detallado**: el marco geométrico angular con **varias líneas concéntricas**, el **patrón de malla triangular fino** cubriendo una zona amplia, un **texto chico dentro del marco** y **varias capas de líneas grises y rojas superpuestas**.
- En el resultado de la edición, ese mismo sector salió **simplificado y con otro dibujo**: el marco geométrico se convirtió en una **forma hexagonal más limpia y más grande, con menos líneas concéntricas**; el patrón de malla triangular **se redujo mucho** en densidad y en superficie; el **texto chico desapareció**; y **varias capas de líneas se perdieron**. O sea: el generador no le cambió el color a una zona, la **volvió a dibujar según su propia interpretación**.
- Y el cambio de color pedido **tampoco se logró**: la zona sigue leyéndose predominantemente **roja** en vez de negra con el rojo limitado a la flecha/chevron.

Lo que el usuario pedía, dicho con precisión, era que esa zona quedara **exactamente igual, línea por línea** —el mismo marco con las mismas líneas concéntricas, el mismo patrón de malla, el mismo texto chico, las mismas capas— y que lo ÚNICO que cambiara fuera el **color de relleno del interior del rombo**, de rojo a negro, dejando su flechita/chevron en rojo. Es un **recoloreo de una zona, no un rediseño de esa zona**.

**Causa raíz:** el prompt del Intento 2 decía "no redibujes el casco" y listaba con detalle qué elementos no se tocan, pero **nunca declaró explícitamente que la zona que SÍ se modifica también conserva todo su dibujo interno intacto**. Al nombrar el rombo como "la zona a cambiar", el generador entendió que tenía licencia para rehacer esa zona entera — y usó esa licencia. La lección es general: en un prompt de edición **no alcanza con proteger lo que no se toca**; hay que declarar además que **dentro de la zona que sí se edita, lo único que cambia es el atributo puntual indicado (acá, el color de relleno)**, y que todo el dibujo, las líneas, las texturas y el texto de esa zona se conservan idénticos.

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 3, abajo).

### Intento 3 — Colorway 2 vista lateral, recoloreo puro (el dibujo de la zona editada tampoco cambia)

<details><summary>Prompt usado (edición, recoloreo puro)</summary>

```
Esto es un RECOLOREO de la imagen adjunta, NO una edición de diseño
y NO una generación nueva. La imagen adjunta es un resultado YA
APROBADO y se devuelve IDÉNTICA salvo por el VALOR DE COLOR de dos
zonas. Ninguna línea, ninguna forma, ningún texto y ningún detalle
cambia en ninguna parte de la imagen — incluidas las zonas que se
recolorean.

TODO ESTO NO SE TOCA — QUEDA PIXEL POR PIXEL IGUAL:
- La forma y la geometría completa del casco: pico frontal, silueta
  de la calota, mentonera, ventilaciones, mecanismo de pivote del
  visor con su textura de fibra de carbono, correa roja y goma del
  borde inferior negra.
- El visor tintado/oscuro, con su mismo material y su mismo tono.
- El realismo fotográfico: iluminación de estudio, sombras suaves,
  reflejos especulares sobre las superficies curvas y microtextura
  de pintura mate. La imagen sigue siendo una fotografía de
  producto, con exactamente el mismo tratamiento fotográfico.
- El fondo y el ángulo de cámara.
- El wordmark "EDGE".
- Todos los demás elementos del livery: paneles diagonales rojos,
  líneas geométricas grises, patrón de malla triangular de la calota
  superior, chevrones "XXX" de la zona inferior delantera y acentos
  rojos cerca de la ventilación.

CRÍTICO — LA ZONA QUE SE RECOLOREA TAMPOCO SE REDIBUJA (defecto real
de un intento anterior — no lo repitas):
Dentro de la zona del rombo, TODO el dibujo se conserva IDÉNTICO:
- las mismas líneas concéntricas del marco geométrico angular, con
  la MISMA CANTIDAD de líneas y el MISMO GROSOR;
- el mismo patrón de malla triangular, con la MISMA DENSIDAD y la
  MISMA EXTENSIÓN;
- el mismo texto chico dentro del marco, en su misma posición y con
  su mismo tamaño;
- las mismas capas de líneas grises y rojas superpuestas;
- cada trazo en su misma posición exacta.
Lo ÚNICO que cambia es el VALOR DE COLOR del relleno de fondo de esa
zona: donde hoy ese fondo es ROJO, pasa a ser NEGRO. Es exactamente
equivalente a seleccionar esa área en un editor de imagen y cambiarle
el color de relleno, sin tocar ninguna de las capas de dibujo que
están encima.
Un intento anterior interpretó "cambiá esta zona" como permiso para
REHACER EL DIBUJO de esa zona, y la devolvió simplificada: el marco
concéntrico reemplazado por una forma hexagonal más limpia y más
grande con menos líneas, el patrón de malla reducido, el texto chico
eliminado y varias capas de líneas perdidas. ESO ESTÁ PROHIBIDO. No
se rediseña, no se simplifica, no se reinterpreta: se recolorea.

CAMBIO 1 — RECOLOREO DEL INTERIOR DEL ROMBO: DE ROJO A NEGRO:
En la zona alta-central del lateral del casco está la forma tipo
ROMBO / marco geométrico angular concéntrico. Hoy el relleno de
fondo de su interior es mayormente ROJO. Cambiá ESE VALOR DE COLOR a
NEGRO (o gris muy oscuro), igual que la base de la carcasa.
- El ROJO queda ÚNICAMENTE en la FLECHA / CHEVRON que acompaña al
  rombo: esa flecha conserva su rojo, su forma y su posición.
- La forma del rombo, su posición, su tamaño, las líneas de su marco
  concéntrico, la malla triangular, el texto chico y todas las capas
  de líneas de esa zona NO CAMBIAN — solo cambia el color del fondo
  sobre el que están dibujadas.

CAMBIO 2 — AJUSTE DE COLOR DEL PICO FRONTAL / SPOILER:
Subí LEVEMENTE la saturación y la intensidad del rojo del pico
frontal / spoiler, para acercarlo al rojo de la ilustración de
diseño (hoy quedó un poco apagado). Es un ajuste del VALOR DE COLOR
y nada más: el mismo color base, un poco más intenso. NO cambies la
forma del pico, ni su acabado, ni su brillo, ni sus reflejos, ni su
posición, ni ningún detalle de su dibujo.

PROHIBIDO ABSOLUTO — NO TOQUES NADA MÁS:
- No redibujes el casco ni ninguna de sus partes.
- No simplifiques, no reduzcas ni rehagas el dibujo de la zona
  recoloreada.
- No elimines el texto chico ni ninguna línea del marco geométrico.
- No reemplaces el marco angular concéntrico por una forma más
  limpia, más simple ni más grande.
- No reduzcas la densidad ni la extensión del patrón de malla
  triangular.
- No cambies la geometría, la silueta ni las proporciones.
- No vuelvas a renderizar el realismo fotográfico: la iluminación,
  las sombras, los reflejos y las texturas de la imagen adjunta se
  conservan tal cual.
- No muevas, redimensiones, agregues ni elimines ningún elemento
  gráfico del livery.
- No cambies el ángulo de cámara, el encuadre ni el fondo.
- No conviertas la imagen en una ilustración, un render plano ni un
  mockup: sigue siendo la misma fotografía.
Si al terminar alguna línea, algún texto o algún detalle de la imagen
no está exactamente donde estaba y exactamente como estaba, la
edición está MAL.

VERIFICACIÓN FINAL ANTES DE ENTREGAR:
Compará tu resultado contra la imagen adjunta y confirmá que la ÚNICA
diferencia perceptible entre las dos sea el COLOR de las 2 zonas
indicadas (el fondo del interior del rombo y la intensidad del rojo
del pico frontal). Si encontrás cualquier otra diferencia de dibujo
—una línea que falta, un texto ausente, un patrón menos denso, una
forma distinta—, corregila antes de entregar.
```

</details>

**Estado:** ✅ generado — ver la auditoría del resultado justo abajo.

### Intento 3 — Colorway 2 vista lateral, resultado auditado

**Estado:** ✅ Casi perfecto — el enfoque de recoloreo puro funcionó. Queda 1 defecto: el recoloreo quedó incompleto.

**Qué salió bien:** el generador **NO redibujó la zona**, que era exactamente el defecto por el que había fallado el Intento 2. El usuario lo resumió así: quedó "increíble" y "lo demás fue una belleza". Comparando contra la imagen de partida, todo el dibujo de la zona del rombo se conservó **intacto**: el marco geométrico angular con sus líneas concéntricas (misma cantidad, mismo grosor), el patrón de malla triangular con su densidad y su extensión, el texto chico dentro del marco y las capas de líneas grises y rojas superpuestas, cada trazo en su posición. El resto del casco también quedó igual — geometría del molde real, realismo fotográfico (microtextura de pintura mate, sombras de estudio, reflejos especulares, fibra de carbono del pivote), spoiler, visor tintado, wordmark "EDGE", chevrones "XXX" y correa roja. Y el **CAMBIO 2 también salió bien**: el rojo del pico frontal / spoiler subió de intensidad como se pidió, sin tocar su forma ni su acabado.

Este resultado **valida la lección de blindar el dibujo dentro de la zona editada**, ya registrada como ítem del checklist Tipo A en `orquestacion-agentes-paralelos.md`: el bloque `CRÍTICO — LA ZONA QUE SE RECOLOREA TAMPOCO SE REDIBUJA`, con su enumeración de todo lo que la zona conserva idéntico y la analogía de "seleccionar el área en un editor y cambiarle el relleno sin tocar las capas de dibujo de encima", hizo exactamente lo que tenía que hacer. Pasar de "edición puntual" a "recoloreo puro" fue el planteo correcto.

**Qué falló (1 defecto):** el **recoloreo quedó incompleto**. El interior del rombo pasó a negro como se pidió, pero **un pedazo de esa zona siguió en rojo**: en la **parte baja-izquierda del sector recoloreado** quedó un grupo de **barras / franjas horizontales cortas todavía en ROJO**, cuando debían pasar a negro junto con el resto del interior del rombo. El generador recoloreó la mayor parte de la zona y se salteó ese bloque. El rojo tiene que quedar **ÚNICAMENTE en la flecha / chevron** que acompaña al rombo — ese es el único acento rojo permitido en ese sector.

**Causa raíz:** el prompt del Intento 3 blindó bien el **dibujo** (que no se redibuje), pero describió la **zona a recolorear de forma algo global** —"el interior del rombo"— sin dejar explícito que el recoloreo tiene que **cubrir toda la zona sin dejar islas ni bloques sueltos con el color viejo**. En un recoloreo hay que pedir **las dos cosas a la vez**: que no se redibuje Y que no queden islas con el color anterior. Además de proteger el dibujo, hay que exigir **cobertura completa del área** —ningún grupo de líneas, barras ni formas dentro de esa zona puede quedarse con el color previo— y **nombrar explícitamente cuál es la única excepción que sí conserva el color** (acá, la flecha/chevron). Sin esa exigencia, el generador trata el recoloreo como aproximado: pinta el fondo dominante y deja fuera los grupos de elementos que también estaban en el color viejo.

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 4, abajo), que agrega la exigencia de cobertura completa.

### Intento 4 — Colorway 2 vista lateral, recoloreo completo (sin islas del color viejo)

<details><summary>Prompt usado (edición, recoloreo completo)</summary>

```
Esto es un RECOLOREO de la imagen adjunta, NO una edición de diseño
y NO una generación nueva. La imagen adjunta es un resultado YA
APROBADO y se devuelve IDÉNTICA salvo por el VALOR DE COLOR de dos
zonas. Ninguna línea, ninguna forma, ningún texto y ningún detalle
cambia en ninguna parte de la imagen — incluidas las zonas que se
recolorean.

TODO ESTO NO SE TOCA — QUEDA PIXEL POR PIXEL IGUAL:
- La forma y la geometría completa del casco: pico frontal, silueta
  de la calota, mentonera, ventilaciones, mecanismo de pivote del
  visor con su textura de fibra de carbono, correa roja y goma del
  borde inferior negra.
- El visor tintado/oscuro, con su mismo material y su mismo tono.
- El realismo fotográfico: iluminación de estudio, sombras suaves,
  reflejos especulares sobre las superficies curvas y microtextura
  de pintura mate. La imagen sigue siendo una fotografía de
  producto, con exactamente el mismo tratamiento fotográfico.
- El fondo y el ángulo de cámara.
- El wordmark "EDGE".
- Todos los demás elementos del livery: paneles diagonales rojos,
  líneas geométricas grises, patrón de malla triangular de la calota
  superior, chevrones "XXX" de la zona inferior delantera y acentos
  rojos cerca de la ventilación.

CRÍTICO — LA ZONA QUE SE RECOLOREA TAMPOCO SE REDIBUJA (defecto real
de un intento anterior — no lo repitas):
Dentro de la zona del rombo, TODO el dibujo se conserva IDÉNTICO:
- las mismas líneas concéntricas del marco geométrico angular, con
  la MISMA CANTIDAD de líneas y el MISMO GROSOR;
- el mismo patrón de malla triangular, con la MISMA DENSIDAD y la
  MISMA EXTENSIÓN;
- el mismo texto chico dentro del marco, en su misma posición y con
  su mismo tamaño;
- las mismas capas de líneas grises y rojas superpuestas;
- cada trazo en su misma posición exacta.
Lo ÚNICO que cambia es el VALOR DE COLOR del relleno de fondo de esa
zona: donde hoy ese fondo es ROJO, pasa a ser NEGRO. Es exactamente
equivalente a seleccionar esa área en un editor de imagen y cambiarle
el color de relleno, sin tocar ninguna de las capas de dibujo que
están encima.
Un intento anterior interpretó "cambiá esta zona" como permiso para
REHACER EL DIBUJO de esa zona, y la devolvió simplificada: el marco
concéntrico reemplazado por una forma hexagonal más limpia y más
grande con menos líneas, el patrón de malla reducido, el texto chico
eliminado y varias capas de líneas perdidas. ESO ESTÁ PROHIBIDO. No
se rediseña, no se simplifica, no se reinterpreta: se recolorea.

CRÍTICO — COBERTURA COMPLETA DEL RECOLOREO (defecto real de un
intento anterior — no lo repitas):
El recoloreo NO es parcial ni aproximado: tiene que CUBRIR TODA la
zona indicada, de punta a punta.
- Recorré TODA la zona del rombo y confirmá que no quedó NINGUNA
  superficie, ninguna línea, ninguna barra y ninguna forma con el
  color anterior.
- No alcanza con pintar el fondo dominante: TODA superficie que hoy
  esté en ROJO dentro de esa zona pasa a NEGRO — el fondo, y también
  cualquier grupo de barras, franjas, líneas o formas rojas que haya
  dentro de esa zona, por chico que sea.
- Ningún bloque, ninguna isla y ningún grupo de elementos puede
  quedarse con el rojo viejo.
- ÚNICA EXCEPCIÓN, y hay que declararla de entrada: la FLECHA /
  CHEVRON que acompaña al rombo CONSERVA su rojo, su forma y su
  posición. Es el único elemento de ese sector que sigue siendo
  rojo. TODO lo demás de la zona va en NEGRO.
Un intento anterior recoloreó la mayor parte de la zona pero se
salteó un bloque: en la PARTE BAJA-IZQUIERDA del sector quedó un
grupo de BARRAS / FRANJAS HORIZONTALES CORTAS todavía en ROJO,
cuando debían pasar a negro junto con el resto del interior del
rombo. Prestale atención especial a esa parte baja-izquierda, y
barré igual toda la zona. Si al terminar queda CUALQUIER rastro de
rojo dentro de esa zona que no sea la flecha/chevron, la edición
está MAL.

CAMBIO 1 — RECOLOREO COMPLETO DEL INTERIOR DEL ROMBO: DE ROJO A
NEGRO, SIN ISLAS:
En la zona alta-central del lateral del casco está la forma tipo
ROMBO / marco geométrico angular concéntrico. Hoy el relleno de
fondo de su interior es mayormente ROJO. Cambiá ESE VALOR DE COLOR a
NEGRO (o gris muy oscuro), igual que la base de la carcasa.
- El recoloreo es COMPLETO, SIN ISLAS: TODA superficie que hoy esté
  en rojo dentro de esa zona pasa a negro — el fondo, y también
  cualquier grupo de barras, franjas, líneas o formas rojas que haya
  dentro de esa zona.
- En un intento anterior quedó, en la PARTE BAJA-IZQUIERDA de esta
  zona, un grupo de BARRAS / FRANJAS HORIZONTALES CORTAS todavía en
  ROJO, cuando debía pasar a negro. Esta vez tienen que quedar
  NEGRAS, igual que el resto del interior del rombo.
- El ROJO queda ÚNICAMENTE en la FLECHA / CHEVRON que acompaña al
  rombo: esa flecha conserva su rojo, su forma y su posición. Es la
  ÚNICA excepción de todo el sector.
- La forma del rombo, su posición, su tamaño, las líneas de su marco
  concéntrico, la malla triangular, el texto chico y todas las capas
  de líneas de esa zona NO CAMBIAN — solo cambia el color del fondo
  sobre el que están dibujadas.

CAMBIO 2 — AJUSTE DE COLOR DEL PICO FRONTAL / SPOILER:
Subí LEVEMENTE la saturación y la intensidad del rojo del pico
frontal / spoiler, para acercarlo al rojo de la ilustración de
diseño (hoy quedó un poco apagado). Es un ajuste del VALOR DE COLOR
y nada más: el mismo color base, un poco más intenso. NO cambies la
forma del pico, ni su acabado, ni su brillo, ni sus reflejos, ni su
posición, ni ningún detalle de su dibujo.

PROHIBIDO ABSOLUTO — NO TOQUES NADA MÁS:
- No redibujes el casco ni ninguna de sus partes.
- No simplifiques, no reduzcas ni rehagas el dibujo de la zona
  recoloreada.
- No elimines el texto chico ni ninguna línea del marco geométrico.
- No reemplaces el marco angular concéntrico por una forma más
  limpia, más simple ni más grande.
- No reduzcas la densidad ni la extensión del patrón de malla
  triangular.
- No dejes ningún grupo de barras, franjas, líneas ni formas de la
  zona del rombo con el rojo viejo: el único rojo que sobrevive en
  ese sector es el de la flecha/chevron.
- No cambies la geometría, la silueta ni las proporciones.
- No vuelvas a renderizar el realismo fotográfico: la iluminación,
  las sombras, los reflejos y las texturas de la imagen adjunta se
  conservan tal cual.
- No muevas, redimensiones, agregues ni elimines ningún elemento
  gráfico del livery.
- No cambies el ángulo de cámara, el encuadre ni el fondo.
- No conviertas la imagen en una ilustración, un render plano ni un
  mockup: sigue siendo la misma fotografía.
Si al terminar alguna línea, algún texto o algún detalle de la imagen
no está exactamente donde estaba y exactamente como estaba, la
edición está MAL.

VERIFICACIÓN FINAL ANTES DE ENTREGAR — DOS CHEQUEOS, LOS DOS
OBLIGATORIOS:
1) DIBUJO INTACTO: compará tu resultado contra la imagen adjunta y
   confirmá que NINGÚN dibujo cambió — ni una línea que falte, ni un
   texto ausente, ni un patrón menos denso, ni una forma distinta,
   ni un trazo corrido de lugar. La única diferencia perceptible
   entre las dos imágenes tiene que ser el COLOR de las 2 zonas
   indicadas (el fondo del interior del rombo y la intensidad del
   rojo del pico frontal).
2) RECOLOREO COMPLETO: recorré toda la zona del rombo y confirmá que
   NO QUEDA NINGÚN ELEMENTO ROJO dentro de ella SALVO la flecha /
   chevron — ni barras, ni franjas, ni líneas, ni formas, ni parches
   de fondo. Mirá especialmente la PARTE BAJA-IZQUIERDA de la zona,
   que es donde un intento anterior dejó rojo sin recolorear.
Si cualquiera de los dos chequeos falla, corregilo antes de
entregar.
```

</details>

**Estado:** ✅ generado — ver la auditoría del resultado justo abajo.

### Intento 4 — Colorway 2 vista lateral, resultado auditado (exceso de rojo y pérdida de la flecha fina)

**Estado:** ⚠️ Bien en lo general, con 2 defectos de color de la misma familia. El veredicto textual del usuario: **"se excedió mucho el tono rojo"** y **"la flecha delgada y roja de la referencia del dibujo no sale bien"**.

**Qué salió bien:** todo lo que este colorway venía sosteniendo intento tras intento se mantuvo, y la edición no rompió nada de la base:

- **Realismo fotográfico** — sigue siendo una fotografía de producto sobre fondo blanco de estudio, con microtextura de pintura mate, sombras suaves e iluminación coherente. No hubo caída hacia la ilustración vectorial plana.
- **Forma y geometría del molde real** — silueta de la calota, pico frontal/spoiler, mentonera y ventilaciones intactas, en el mismo ángulo y encuadre.
- **Visor tintado/oscuro** — mismo material y mismo tono, sin drift.
- **Mecanismo de pivote del visor** — presente con su textura real de fibra de carbono.
- **Correa roja** — en su lugar, con su trama de tela.
- **Goma del borde inferior negra** — cumple la regla de negocio de la sección 9 de `orquestacion-agentes-paralelos.md`.
- **Wordmark "EDGE"** — presente, en su posición y con su tipografía bold itálica.
- **Chevrones "XXX" de la mentonera** — presentes en la zona inferior delantera.

O sea: los ejes de forma, realismo y contenido gráfico están resueltos. Lo que falló es **cómo se reparte el color sobre esa base**.

**Qué falló (2 defectos):**

| # | Defecto | Qué se ve en el resultado | Qué debería verse (referencia de diseño) | Causa raíz |
|---|---|---|---|---|
| 1 | **Exceso de superficie roja — figura y fondo invertidos** | Toda la calota superior y el pico frontal forman una **masa roja sólida y continua** que ocupa aproximadamente el **tercio superior del casco entero**, y sobre esa masa roja quedan dibujados los chevrons en gris oscuro. | En el mockup de diseño la calota roja es **mucho más acotada** y el **cuerpo central del lateral es NEGRO / gris muy oscuro**, con el rombo/marco geométrico oscuro y las líneas grises finas; el rojo aparece como **acento** (líneas, cuñas, chevrons finos) más el pico/spoiler rojo sólido. La superficie roja total es claramente **menor**. | El prompt trabajaba a nivel de *"cambiá el color de esta zona"* pero **nunca declaró la PROPORCIÓN de color ni la relación FIGURA/FONDO del diseño**. La regla "el rojo queda únicamente en la flecha/chevron" estaba **acotada al sector del rombo**, no al lateral completo; fuera de ese sector el generador no tenía ningún techo de superficie roja. Y el `CAMBIO 2` pedía "subir la saturación y la intensidad del rojo" del pico sin declarar **hasta dónde llega el rojo**: el generador leyó "más rojo" como **más superficie roja**, no solo como más saturación. La lista de congelado ("TODO ESTO NO SE TOCA") enumeraba elementos a preservar —"paneles diagonales rojos", "acentos rojos cerca de la ventilación"— pero preservar esos elementos es perfectamente compatible con **expandirlos hasta cubrir la calota entera**, porque nunca se dijo cuánta superficie les corresponde. |
| 2 | **La flecha roja delgada no se lee** | La flecha/chevron roja fina característica del grupo de chevrons **no se distingue**: se disolvió dentro de la masa roja. No hay contraste posible entre un trazo rojo fino y un fondo rojo. | En la ilustración de referencia, sobre fondo gris oscuro/negro mate hay un grupo de **chevrons concéntricos anidados de trazo FINO en gris oscuro**, y entre ellos **UNA sola flecha/chevron ROJA, también de trazo delgado**, que resalta por contraste contra el gris. Es un **acento fino, no una masa**. | El prompt nombraba la flecha **solo como excepción** del recoloreo ("conserva su rojo, su forma y su posición") — o sea, **definida en negativo**: por lo que *no* cambia. Nunca la describió **en positivo**: que es un **trazo fino**, que vive dentro de un grupo de chevrons concéntricos grises, y sobre todo **contra qué fondo tiene que contrastar**. Un detalle fino de un color **solo se lee si el prompt declara el fondo sobre el que se apoya**; al perderse el fondo oscuro (defecto 1), el elemento dejó de existir visualmente aunque estuviera dibujado. Los dos defectos son **el mismo problema visto dos veces**: sin jerarquía figura/fondo declarada, el color de acento se expande y el detalle fino desaparece. |

**Diagnóstico general del intento:** el enfoque de **recoloreo puro con cobertura completa** —que era lo que se venía corrigiendo desde el Intento 2— siguió funcionando: el dibujo no se redibujó y la base fotográfica se mantuvo. Pero el prompt seguía razonando **zona por zona** ("el interior del rombo", "el pico frontal") y **nunca describió el diseño como un sistema con jerarquía de color**. Ese es el agujero nuevo: los ítems del checklist Tipo A ya cubrían *no redibujar la zona editada*, *cobertura completa del recoloreo con excepciones nombradas* y *separación de roles a nivel de pieza*, pero **ninguno exige declarar la proporción de color ni cuál es la superficie dominante y cuál el acento**. Sin esa declaración, cada instrucción local de color es correcta por separado y el resultado global igual queda mal repartido — el generador es libre de expandir el rojo a superficies enteras e **invertir figura y fondo**. Se registra como ítem nuevo del checklist Tipo A en `orquestacion-agentes-paralelos.md`.

**Qué hay que hacer:** corregirlo por **edición puntual sobre este resultado** (Intento 5, abajo), **no por regeneración** — aplica el ítem del checklist Tipo A *"Ajuste puntual sobre un resultado ya aprobado = edición, no regeneración completa"*. La forma, el realismo, el visor, el pivote, la correa, la goma negra, el wordmark y los chevrones "XXX" ya están bien y costaron cuatro intentos: regenerar los pondría de nuevo en juego para arreglar un problema que es **solo de reparto de color**.

### Intento 5 — Colorway 2 vista lateral, edición puntual: bajar la superficie roja y recuperar la flecha fina

<details><summary>Prompt usado (edición puntual de color, no generación)</summary>

```
Esto es una EDICIÓN PUNTUAL DE COLOR sobre la imagen adjunta, NO una
generación nueva desde cero y NO un rediseño. La imagen adjunta es
una fotografía de producto YA LOGRADA: su forma, su realismo, su
perspectiva, su iluminación y todo su dibujo están bien tal cual
están. Se devuelve la MISMA fotografía, con la MISMA geometría y el
MISMO dibujo, cambiando ÚNICAMENTE cómo se reparte el color entre el
negro y el rojo en el lateral del casco.

TODO ESTO NO SE TOCA — QUEDA PIXEL POR PIXEL IGUAL:
- La forma y la geometría completa del casco: silueta de la calota,
  pico frontal / spoiler, mentonera, ventilaciones y todas las
  piezas físicas del molde real, sin agregar ni quitar ninguna.
- El visor tintado/oscuro, con su mismo material y su mismo tono.
- El mecanismo de pivote del visor, con su textura real de FIBRA DE
  CARBONO.
- La correa roja, con su color y su trama de tela.
- La goma negra del borde inferior de la calota.
- El wordmark "EDGE", con su tipografía, su tamaño y su posición.
- Los chevrones "XXX" de la zona inferior delantera de la mentonera.
- El ángulo de cámara, el encuadre y el fondo blanco de estudio.
- El realismo fotográfico completo: iluminación de estudio, sombras
  suaves, reflejos especulares sobre las superficies curvas y
  microtextura de pintura mate. La imagen SIGUE SIENDO LA MISMA
  FOTOGRAFÍA DE PRODUCTO, con exactamente el mismo tratamiento
  fotográfico.
- Todo el DIBUJO del livery: el rombo / marco geométrico angular
  concéntrico con sus líneas, el patrón de malla triangular con su
  densidad y su extensión, el texto chico dentro del marco, los
  grupos de chevrons concéntricos, las líneas grises finas y cada
  trazo en su misma posición exacta.

PROPORCIÓN DE COLOR — EL FONDO ES OSCURO, EL ROJO ES ACENTO (este
es el corazón de la corrección: hoy la proporción está invertida):
- La SUPERFICIE DOMINANTE del lateral del casco es NEGRO / GRIS MUY
  OSCURO MATE. El cuerpo central del lateral —donde vive el rombo,
  el marco geométrico y los grupos de chevrons— es OSCURO. Ese es el
  fondo del diseño.
- El ROJO es un color de ACENTO MINORITARIO. Aparece SOLO en estos
  cuatro lugares, y en ningún otro:
  (a) el PICO FRONTAL / SPOILER, que sí es una pieza de rojo sólido
      brillante, con su borde limpio contra la zona oscura;
  (b) una FRANJA ACOTADA de la calota superior — acotada, no la
      calota entera;
  (c) LÍNEAS, CUÑAS y CHEVRONS FINOS de acento, de trazo delgado,
      apoyados sobre el fondo oscuro;
  (d) la CORREA, que ya es roja y queda como está.
- Sumado todo, el rojo ocupa MUCHO MENOS superficie que el negro /
  gris oscuro. Si al mirar la imagen terminada el rojo se lee como
  el color principal del casco, la edición está MAL.
- PROHIBIDO EXPANDIR EL ROJO A SUPERFICIES COMPLETAS: el rojo no
  puede cubrir la calota superior entera, ni el cuerpo central del
  lateral, ni fundirse con el pico frontal formando una sola masa
  roja continua. Hoy la calota superior y el pico forman una masa
  roja sólida que ocupa aproximadamente el tercio superior del
  casco: ESO ES EL DEFECTO QUE HAY QUE CORREGIR.
- PROHIBIDO INVERTIR FIGURA Y FONDO: en el diseño de referencia el
  FONDO es oscuro y las LÍNEAS ROJAS FINAS van encima. Hoy pasó al
  revés —fondo rojo con líneas oscuras encima— y hay que darlo
  vuelta: el fondo vuelve a ser oscuro y el rojo vuelve a ser el
  trazo que se apoya sobre él.

CAMBIO 1 — DEVOLVER EL CUERPO CENTRAL DEL LATERAL A NEGRO:
Toda la superficie roja que hoy cubre la calota superior y el cuerpo
central del lateral vuelve a NEGRO / GRIS MUY OSCURO MATE, igual que
la base de la carcasa, dejando el rojo solo donde lo permite el
bloque de PROPORCIÓN DE COLOR de arriba.
- Es un cambio de VALOR DE COLOR del fondo, nada más: equivale a
  seleccionar esas superficies en un editor de imagen y cambiarles
  el relleno, sin tocar ninguna de las capas de dibujo que están
  encima.
- Los chevrons, líneas, marcos y el patrón de malla que hoy están
  dibujados sobre ese fondo SIGUEN AHÍ, en la misma posición, con
  el mismo grosor y la misma cantidad: lo único que cambia es el
  color de la superficie sobre la que se apoyan.
- El pico frontal / spoiler CONSERVA su rojo sólido brillante y su
  borde limpio: esa pieza no se toca, solo deja de fundirse con la
  calota.

CRÍTICO — LA FLECHA ROJA DELGADA ES UN TRAZO FINO SOBRE FONDO
OSCURO (defecto real de un intento anterior: la flecha se perdió —
no lo repitas):
En la ilustración de diseño de referencia, sobre un fondo GRIS
OSCURO / NEGRO MATE, hay un grupo de CHEVRONS (flechas en "V"
acostada, apuntando hacia adelante) ANIDADOS Y CONCÉNTRICOS:
- la MAYORÍA de esos chevrons son de GRIS OSCURO y de TRAZO FINO;
- entre ellos hay UNA SOLA FLECHA / CHEVRON ROJA, también de TRAZO
  DELGADO, que resalta por CONTRASTE contra el gris.
Esa flecha roja es un ACENTO FINO, NO UNA MASA. Su legibilidad
depende por completo de que el FONDO sobre el que se apoya sea
OSCURO: un trazo rojo fino sobre fondo rojo es invisible, y eso es
exactamente lo que pasó en el intento anterior.
- Dibujá esa flecha roja delgada de modo que se DISTINGA CLARAMENTE
  contra el fondo oscuro y contra los chevrons grises que la rodean.
- PROHIBIDO ENGROSARLA: mantiene el mismo trazo fino que los
  chevrons grises vecinos.
- PROHIBIDO DUPLICARLA: es UNA SOLA flecha roja en ese grupo, ni
  dos, ni tres.
- PROHIBIDO CONVERTIRLA EN UNA MASA, en un panel, en una cuña
  gruesa o en una superficie rellena.
- PROHIBIDO APOYARLA SOBRE FONDO ROJO: si el fondo de ese sector
  quedó rojo, la flecha no se puede leer y la edición está MAL.
- Sigue siendo PINTURA sobre la superficie física del casco:
  acompaña la curvatura, se deforma en perspectiva y recibe la misma
  luz y las mismas sombras que el resto. Nunca una calcomanía plana
  ni un relieve.

CRÍTICO — LAS ZONAS EDITADAS TAMPOCO SE REDIBUJAN (defecto real de
un intento anterior de edición en este mismo caso — no lo repitas):
Que una zona esté en la lista de cambios NO es permiso para
rehacerla. En las zonas que se tocan, lo ÚNICO que cambia es el
COLOR: qué superficie va en negro y qué trazo va en rojo. TODO el
resto del dibujo de esas zonas se conserva IDÉNTICO — las líneas
concéntricas del marco con su misma cantidad y su mismo grosor, el
patrón de malla triangular con su misma densidad y su misma
extensión, el texto chico en su misma posición y con su mismo
tamaño, los grupos de chevrons con la misma cantidad de líneas, y
cada trazo donde estaba. No se rediseña, no se simplifica, no se
reinterpreta: se recolorea.

NADA MÁS CAMBIA — PROHIBIDO ABSOLUTO:
- No redibujes el casco ni ninguna de sus partes.
- No cambies la forma, la geometría, la silueta ni las proporciones.
- No toques el visor tintado, el mecanismo de pivote con su fibra de
  carbono, la correa roja, la goma negra del borde inferior, el
  wordmark "EDGE" ni los chevrones "XXX" de la mentonera.
- No cambies el ángulo de cámara, el encuadre ni el fondo.
- No vuelvas a renderizar el realismo fotográfico: la iluminación,
  las sombras, los reflejos y la microtextura de pintura mate de la
  imagen adjunta se conservan tal cual.
- No agregues, no muevas, no redimensiones ni elimines ningún
  elemento gráfico del livery.
- No simplifiques ni reduzcas la densidad de ningún patrón, ni
  elimines el texto chico, ni saques líneas de ningún marco.
- No agregues ninguna pieza física, panel, aleta ni relieve que no
  esté en la imagen adjunta: todo elemento del diseño es pintura
  plana sobre la superficie.
- No conviertas la imagen en una ilustración, un dibujo vectorial,
  un render plano ni un mockup: SIGUE SIENDO LA MISMA FOTOGRAFÍA DE
  PRODUCTO.

VERIFICACIÓN FINAL ANTES DE ENTREGAR — TRES CHEQUEOS, LOS TRES
OBLIGATORIOS:
1) PROPORCIÓN: ¿la superficie roja total BAJÓ respecto de la imagen
   adjunta, y el CUERPO CENTRAL DEL LATERAL quedó OSCURO (negro /
   gris muy oscuro)? ¿El rojo se lee como ACENTO y no como el color
   principal del casco? ¿Desapareció la masa roja continua que
   cubría el tercio superior?
2) FLECHA FINA: ¿se distingue CLARAMENTE la flecha roja DELGADA
   contra un fondo OSCURO, entre los chevrons grises concéntricos?
   ¿Sigue siendo UN SOLO trazo FINO, sin engrosar, sin duplicar y
   sin convertirse en masa?
3) NADA MÁS CAMBIÓ: compará contra la imagen adjunta y confirmá que
   FUERA de esas 2 zonas no cambió absolutamente nada — ni la forma,
   ni el visor, ni el pivote, ni la correa, ni la goma negra, ni el
   wordmark "EDGE", ni los chevrones "XXX", ni el ángulo, ni el
   fondo, ni la iluminación, ni las sombras, ni los reflejos, ni la
   microtextura mate, ni ninguna línea, texto o patrón del dibujo.
Si cualquiera de los tres chequeos falla, corregilo antes de
entregar.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt como edición de la imagen del Intento 4 (adjuntando SOLO esa imagen) y mandar el resultado para auditoría — verificar los 3 chequeos: que la superficie roja total haya bajado y el cuerpo central del lateral sea oscuro, que la flecha roja fina se distinga contra ese fondo oscuro sin engrosarse ni duplicarse, y que fuera de esas 2 zonas no haya cambiado nada.

<details><summary>Prompt — Colorway 2 (rojo/negro/gris), vista trasera</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista trasera), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO vista trasera es la ÚNICA autoridad
  de FORMA.
- La imagen de diseño rojo/negro/gris vista trasera es SOLO fuente de
  diseño gráfico, nunca de forma.

PASO 1 — FORMA: reproducí exactamente la forma trasera del casco
negro liso antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway rojo/negro/gris:
- Parte superior de la calota: negra.
- Panel central inferior: rojo sólido.
- Líneas geométricas grises diagonales alrededor del panel rojo.
- Wordmark "EDGE" centrado sobre la banda inferior.
- SIN sticker "DOT" y SIN ninguna otra marca de certificación u
  homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
  negocio del caso, ningún render de este livery las lleva. Si la
  ilustración de diseño muestra alguna, se omite.
- Acentos rojos puntuales a los costados de la banda inferior.

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso vista
trasera.

PROHIBIDO ABSOLUTO: no cambiar la forma ni la silueta trasera del
molde real. No copiar la forma del casco de la imagen de diseño si es
distinta. No agregar elementos gráficos fuera de la lista de arriba.
```

</details>

### Intento 1 — Colorway 2 vista trasera, resultado auditado

**Estado:** ⚠️ Parcial — la silueta del molde y el realismo fotográfico se respetaron, pero falló en el spoiler y quedaron detalles del diseño sin aplicar. El usuario lo reportó así: "no cumplió con el spoiler, no lo hizo bien, y además de eso no incluyó todos los detalles".

**Qué salió bien:** la silueta trasera general del molde real se respetó — forma redondeada compacta, extractor de ventilación superior, borde inferior negro con el acolchado interior y las correas visibles, tal cual el checkpoint. El resultado **es una fotografía real, no una ilustración plana** (segundo caso del Colorway 2 que consigue el realismo fotográfico sin las instrucciones explícitas del tercer eje — ver la auditoría de la vista lateral, arriba). El wordmark "EDGE" apareció centrado sobre la banda inferior, el sticker "DOT" está presente y el panel central rojo existe.

**Qué falló (2 defectos):**
1. **El spoiler quedó mal resuelto / fusionado con la carcasa.** En el checkpoint negro, el spoiler trasero es una **pieza aerodinámica elevada**, con un borde y una separación claramente distinguibles respecto de la superficie de la calota. En el resultado, la zona roja central **absorbió y fusionó** el área del spoiler: no se distingue dónde termina el spoiler y dónde empieza la carcasa, y la forma del panel rojo no coincide con la del mockup (que tiene un borde superior más definido y angular). El generador trató spoiler y carcasa como una sola superficie continua pintada de rojo.
2. **Faltan detalles del diseño en la zona superior de la calota.** Comparado con el mockup de diseño rojo/gris:
   - (a) el patrón de malla triangular de la zona superior salió **apenas insinuado**, mucho más tenue y con menos superficie que en el mockup;
   - (b) faltan los **acentos rojos tipo chevron/flecha** que en el mockup aparecen en las esquinas superiores de la calota trasera;
   - (c) las **líneas geométricas grises diagonales** alrededor del panel rojo salieron con mucha menos densidad y menos capas que en el mockup;
   - (d) las **etiquetas chicas rojas tipo "X40"** que en el mockup van a ambos lados de la banda inferior aparecen apenas como pequeños trazos rojos, sin la forma ni el detalle de la referencia.

**Diagnóstico de causa raíz (defecto 1):** es exactamente el mismo problema que ya se detectó en la **vista trasera del Colorway 1** (confusión spoiler/carcasa) — el prompt de la trasera del Colorway 2 nunca aclara que el spoiler y la carcasa son **piezas físicas distintas** ni cómo debe comportarse el diseño en el límite entre ambas. Que el mismo defecto reaparezca en otro colorway confirma que no es una corrida desafortunada sino un agujero del texto del prompt. Y el defecto 2 tiene la misma raíz que el del Colorway 1 trasera: decir "Parte superior de la calota: negra" (igual que el "azul sólido" de aquel) **invita a dejar esa zona sin diseño**, porque el generador lo lee como una instrucción de color de relleno y no como una base sobre la que va el livery.

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 2, abajo).

### Intento 2 — Colorway 2 vista trasera, spoiler diferenciado y detalles completos

<details><summary>Prompt usado</summary>

```
Genera una imagen de producto del mismo casco full-face de la
referencia adjunta (molde real, vista trasera), mismo ángulo,
encuadre y fondo.

REGLA MÁS IMPORTANTE — DOS FUENTES, DOS ROLES QUE NUNCA SE MEZCLAN:
- La imagen del casco NEGRO LISO vista trasera es la ÚNICA autoridad
  de FORMA.
- La imagen de diseño rojo/negro/gris vista trasera es SOLO fuente de
  diseño gráfico, nunca de forma.

PASO 1 — FORMA: reproducí exactamente la forma trasera del casco
negro liso antes de aplicar cualquier gráfico.

PASO 2 — DISEÑO: sobre esa forma ya fijada, aplicá el diseño de
carreras del colorway rojo/negro/gris:
- PARTE SUPERIOR DE LA CALOTA — LLEVA DISEÑO, NO ES NEGRA LISA (un
  intento anterior dejó esta zona casi vacía, con el patrón apenas
  insinuado — eso es un ERROR, no lo repitas). El negro es solo la
  BASE: el diseño va ENCIMA y tiene que CUBRIR la zona superior. Son
  TRES elementos, todos obligatorios y todos con el mismo nivel de
  detalle que la ilustración de diseño:
  (a) Patrón de malla triangular en la zona superior de la calota,
      con la MISMA EXTENSIÓN y la MISMA INTENSIDAD que en el mockup
      — NO una versión apenas insinuada, NO una versión tenue ni
      reducida a una franja chica.
  (b) Acentos rojos tipo chevron / flecha en las ESQUINAS SUPERIORES
      de la calota trasera, tal como aparecen en el mockup. En un
      intento anterior directamente no aparecieron.
  (c) Líneas geométricas grises diagonales con TODAS sus capas y su
      DENSIDAD REAL, tal como están en el mockup — contá las líneas
      de la referencia y reproducilas todas; NO una versión
      simplificada con menos capas ni menos líneas.
- SPOILER TRASERO — ES UNA PIEZA FÍSICA DISTINTA DE LA CARCASA (un
  intento anterior falló exactamente acá, y es el mismo defecto que
  ya ocurrió en la vista trasera del Colorway 1 — no lo repitas). En
  la foto del molde real, el spoiler trasero es una pieza
  aerodinámica ELEVADA, con su borde y su separación visibles
  respecto de la superficie de la calota. Esa separación tiene que
  reproducirse: se tiene que ver dónde termina el spoiler y dónde
  empieza la carcasa. NO fusiones spoiler y carcasa en una sola
  superficie continua pintada.
- Panel central inferior: rojo sólido. El panel rojo tiene que
  respetar la FORMA y el BORDE SUPERIOR DEFINIDO Y ANGULAR que
  muestra el mockup, sin desbordarse sobre el spoiler ni absorberlo.
  En un intento anterior la zona roja se comió el área del spoiler.
- Líneas geométricas grises diagonales alrededor del panel rojo.
- Wordmark "EDGE" centrado sobre la banda inferior.
- SIN sticker "DOT" y SIN ninguna otra marca de certificación u
  homologación (DOT, ECE, SNELL, etiquetas normativas): regla de
  negocio del caso, ningún render de este livery las lleva. Si la
  ilustración de diseño muestra alguna, se omite.
- Acentos rojos puntuales a los costados de la banda inferior.
- Etiquetas chicas rojas tipo "X40" a AMBOS LADOS de la banda
  inferior: tienen que aparecer con su FORMA y su DETALLE tal como
  están en el mockup, legibles como etiquetas — no como simples
  trazos o manchas rojas genéricas.

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso vista
trasera.

PROHIBIDO ABSOLUTO: no cambiar la forma ni la silueta trasera del
molde real. No copiar la forma del casco de la imagen de diseño si es
distinta. No agregar elementos gráficos fuera de la lista de arriba.
No fusionar el spoiler con la carcasa ni tratarlos como una
superficie continua. No dejar la zona superior de la calota sin
diseño ni con el patrón de malla triangular apenas insinuado. No
simplificar ni reducir la densidad de las líneas geométricas grises.
No reemplazar las etiquetas "X40" por trazos rojos genéricos.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt y mandar el resultado para auditoría — verificar en especial que la **separación spoiler/carcasa** se vea claramente (borde y pieza elevada distinguibles, panel rojo sin desbordarse sobre el spoiler) y que la **zona superior de la calota** tenga todos los elementos: malla triangular con su extensión e intensidad reales, acentos rojos tipo chevron en las esquinas superiores, líneas grises con todas sus capas y las etiquetas "X40" con forma y detalle.

## Estado general del caso

**Estado:** 🟡 en curso — las 4 vistas armadas hasta ahora se corrieron y auditaron, algunas varias veces:
- **Colorway 1 lateral** — Intento 1 ⚠️ → Intento 2 ❌ (salió ilustración plana) → Intento 3 ⚠️ (realismo y livery resueltos, pero spoiler duplicado/con forma del mockup, sin su azul sólido, y una pieza negra inventada) → Intento 4 ✅ **aprobado en lo esencial** (el usuario lo calificó de "espectacular": bevel/relieve, detalles, colores y perspectiva excelentes; spoiler resuelto —uno solo, forma del molde real, azul sólido— y patrones completos con el texto chico presente), con 3 ajustes puntuales pendientes: una pieza negra tipo toma de aire inventada sobre el lateral, el sticker "DOT" que no corresponde a esta vista y las 3 marcas en "X" de la mentonera que faltan → **Intento 5 ✅ generado** como edición puntual (no regeneración), con los 3 cambios pedidos y **3 imágenes de resultado** → **auditoría 🟡 preparada, veredicto pendiente del usuario**: el bloque *"Intento 5 — resultado auditado (edición de 3 cambios)"* deja el **checklist de verificación cambio por cambio** (25 preguntas concretas), el **riesgo anticipado por cambio** cruzado contra los modos de falla ya documentados del caso, una **tabla de veredicto vacía para completar por imagen** y los **dos prompts correctivos "Intento 6"** listos para copiar/pegar — **Escenario A (cobertura parcial)**, que sigue editando sobre el resultado del Intento 5 nombrando el resto que quedó, y **Escenario B (la edición redibujó de más)**, que descarta ese resultado, vuelve a partir de la imagen aprobada del Intento 4 y refuerza el borrado/agregado puro blindando explícitamente spoiler, visor y estilo fotográfico. Como las 3 imágenes salieron del mismo prompt sin cambiarle una letra, se auditan **por separado** y se elige la mejor (regla de no determinismo del generador).
- **Colorway 1 trasera** — Intento 1 ⚠️ → Intento 2 ⚠️ (geometría inventada y spoiler sin azul) → Intento 3 ❌ (regresión: volvió a salir ilustración plana y la silueta trasera se contaminó con la del mockup, porque el tercer eje de realismo nunca se propagó de la vista lateral a esta) → Intento 4 ⚠️ **gran avance** (el usuario dijo que "lo demás lo hizo excelente": realismo fotográfico logrado —la propagación del tercer eje funcionó—, silueta trasera recuperada con el extractor y el borde inferior del molde real, livery completo en la calota superior y en la banda inferior, y sin las aletas ni los paneles inventados de antes), con **1 defecto**: el **spoiler salió híbrido** — tomó el azul sólido del mockup (correcto) pero también su forma y su tamaño de ala prominente, en vez del labio bajo e integrado del molde real → **Intento 5 ✅ generado y APROBADO EN LO ESENCIAL — el mejor resultado de esta vista hasta ahora** (el usuario: **"ahora sí, casi casi"**): el bloque de separación de roles a nivel de pieza funcionó y **los TRES defectos históricos de esta vista quedaron cerrados en el mismo intento** — **estilo de render** (sigue siendo una fotografía de producto, no la ilustración plana del Intento 3), **forma del spoiler** (labio integrado que acompaña la curvatura, sin la hibridación ni el agrandado con la pieza alada del mockup) y **color del spoiler** (azul sólido uniforme, sin patrón encima); el resto de la vista también quedó bien —forma del molde, extractor superior, livery completo, wordmark "EDGE", etiquetas "X40", acolchado y correas, sin piezas inventadas—. Quedan **2 ajustes chicos** (*"cambios estrictamente pequeños, muy pequeños"*): **(1)** el **spoiler no se lee como una pieza COMPLETA** — el ala azul cruza pero sus **dos extremos no cierran**: se truncan y se desvanecen contra la silueta, así que la pieza se lee parcial en vez de continua de punta a punta (no es problema de tamaño ni de color, sino de **integridad y continuidad**); y **(2)** hay que **sacar el sticker "DOT"**, que **no es un defecto del generador** —el propio prompt lo pedía en su lista de elementos— sino una **decisión de negocio nueva** → **Intento 6 🔴 pendiente de generar**, planteado como **edición puntual** (no regeneración, para no poner en juego los tres ejes ya resueltos), con los bloques `CAMBIO 1 — EL SPOILER SE COMPLETA: UNA SOLA PIEZA CONTINUA DE PUNTA A PUNTA` (con el blindaje explícito de que **completar ≠ agrandar**), `CAMBIO 2 — ELIMINAR EL STICKER "DOT"` (borrado + reconstrucción del patrón de la banda inferior debajo), `NADA MÁS CAMBIA` y una `VERIFICACIÓN FINAL` de **tres chequeos**: ¿se lee entero?, ¿sigue del mismo tamaño?, ¿desapareció el "DOT" sin rastro?
- **Colorway 2 lateral** — Intento 1 ✅ **aprobada** (3 puntos a verificar con zoom) → Intento 2 ❌ (la edición puntual terminó siendo un rediseño: el generador redibujó y simplificó toda la zona alta del lateral en vez de recolorearla, y encima el color no cambió) → Intento 3 ✅ **casi perfecto** (el recoloreo puro funcionó: el generador **no redibujó** la zona, todo el dibujo se conservó —marco concéntrico, malla con su densidad, texto chico, capas de líneas— y el rojo del pico frontal subió bien; el usuario dijo que quedó "increíble"), con **1 defecto**: el recoloreo quedó **incompleto** —un grupo de barras/franjas horizontales cortas en la parte baja-izquierda del sector siguió en rojo en vez de pasar a negro— → Intento 4 ⚠️ **bien en lo general, con 2 defectos de color** (el usuario: **"se excedió mucho el tono rojo"** y **"la flecha delgada y roja de la referencia del dibujo no sale bien"**): se sostuvieron realismo, forma, visor, pivote de fibra de carbono, correa roja, goma negra, wordmark "EDGE" y chevrones "XXX", pero la calota superior y el pico frontal quedaron como una **masa roja continua** que ocupa el tercio superior del casco —**figura y fondo invertidos** respecto del mockup, donde el cuerpo central del lateral es oscuro y el rojo es acento— y la **flecha roja delgada se perdió** dentro de esa masa por falta de contraste → **Intento 5 🔴 pendiente de generar**, planteado como **edición puntual de color** (no regeneración), con un bloque de **proporción de color y relación figura/fondo** y otro que describe la **flecha fina como trazo delgado sobre fondo oscuro**.
- **Colorway 2 trasera** — Intento 1 ⚠️ (spoiler fusionado con la carcasa, detalles faltantes) → **Intento 2 🔴 pendiente de generar**.

Patrón que se repite en las 4 vistas: el **spoiler** es la pieza que más falla — pierde su color propio, se le contamina la forma con la del mockup, se fusiona con la carcasa o se duplica. Primera vez que se cierra: el Intento 4 del Colorway 1 lateral lo resolvió dándole **una instrucción propia de forma y un punto propio de color**, y el enfoque queda como receta a copiar en las vistas que todavía lo arrastran. Y con el Intento 4 de la trasera del Colorway 1 el spoiler suma **una razón de falla nueva**: quedó **híbrido entre las dos fuentes** — la forma del ala prominente del mockup mezclada con el labio bajo del molde real, arrastrada junto con el color azul que sí correspondía copiar. O sea que el spoiler sigue siendo la pieza que más falla en todas las vistas del livery, ahora también por promedio de fuentes. **Segundo cierre del patrón, con el Intento 5 de la trasera del Colorway 1:** el desglose de roles a nivel de pieza resolvió a la vez la **forma** (labio bajo e integrado, sin hibridación) y el **color** (azul sólido) del spoiler trasero — o sea que la receta funciona en las dos vistas y queda confirmada para copiar en las que todavía lo arrastran. Pero el spoiler suma **una razón de falla más, la quinta**: quedó **truncado en los dos extremos**, sin cerrar contra la carcasa, y por lo tanto se lee como una pieza **parcial**. Faltan las imágenes restantes que el usuario va a mandar para completar el set.

Séptimo patrón, descubierto con el Intento 5 de la trasera del Colorway 1: **cuando se pide COMPLETAR un elemento, hay que declarar explícitamente que COMPLETAR NO ES AGRANDAR**. El bloque del spoiler de ese prompt está escrito enteramente en términos de **dimensiones** —cuánto sobresale, qué perfil, qué altura, qué borde—, porque el defecto que venía a corregir era un spoiler agrandado e hibridado; nunca dice **hasta dónde llega la pieza a lo largo de la carcasa** ni que tiene que **cerrar contra ella en los dos extremos**. Con el eje de las dimensiones fuertemente restringido y el de la extensión sin declarar, el generador resolvió lo primero y dejó lo segundo librado a su criterio: labio correcto en perfil, **truncado en las puntas**. La causa raíz general es que **el atributo que el prompt no declara es el que sale mal**. Y el riesgo del correctivo es la otra mitad del patrón: **"completo" es exactamente la palabra que el generador puede leer como "más grande"**, así que un pedido de integridad sin blindaje de dimensiones tiende a **reintroducir el defecto de tamaño ya resuelto** — acá, la hibridación que costó cinco intentos cerrar. Por eso el prompt del Intento 6 dice con todas las letras que se completa el **recorrido** y no las **dimensiones**, y desdobla la verificación final en dos preguntas distintas: ¿se lee entero? y ¿sigue teniendo el mismo tamaño?

**Regla de negocio nueva del caso (segunda vez que el usuario la pide, ya no es un pedido puntual): ningún render lleva sticker "DOT" ni marcas de certificación.** Apareció primero en la vista **lateral** del Colorway 1 (Intento 4→5, dentro de la edición de 3 cambios) y otra vez en la vista **trasera** del Colorway 1 (Intento 5→6, *"que no incluya lo de la verificación DOT"*). Aplicando la regla ya registrada de **propagar toda regla nueva a todas las vistas y colorways del caso**, se sacó la línea del sticker de **los 17 prompts que la tenían** —11 en este archivo y 2 en cada uno de `simulacion-30b`, `simulacion-30c` y `simulacion-30d`— y se la reemplazó por una **instrucción en negativo** dentro de la misma lista de elementos, para que una re-corrida por copiar/pegar no lo vuelva a dibujar. La regla completa, con su alcance y sus excepciones (el wordmark "EDGE" y las etiquetas "X40" **sí** se conservan), está en la sección *"Regla de negocio — ningún render de este caso lleva sticker \"DOT\" ni marcas de certificación"* al principio de este archivo. Dato de método: este **no fue un defecto del generador** —el prompt lo pedía y el generador lo hizo bien— sino un cambio de requisito, y conviene registrarlo como tal para no contaminar el diagnóstico de los modos de falla reales del caso.

Sexto patrón, visible al preparar la auditoría del Intento 5 del Colorway 1 lateral: **la regla de "cobertura completa del cambio dentro de la zona" no es exclusiva de los recoloreos — vale igual para los BORRADOS y para los AGREGADOS**, y en cada caso significa algo distinto. En un **borrado** la cobertura completa son dos tareas, no una: *eliminar* el elemento sin dejar resto, borde, ranura, halo ni sombra, **y** *reconstruir el dibujo que va debajo* — que acá no es superficie lisa sino **livery con patrón**, así que el prompt tiene que declarar explícitamente qué dibujo va en su lugar (las líneas y los colores de las zonas contiguas, con la continuidad exigida trazo por trazo: una línea que entra por un borde del área sale por el otro alineada), o el generador tapa el hueco con un parche de color plano. En un **agregado** la cobertura completa es **cantidad, alineación, posición y tamaño exactos**, con conteo forzado —el mismo mecanismo que en Tipo A no estaba escrito pero en Tipo B ya existía como "conteo forzado de celdas del grid"—, porque un elemento repetido descrito solo por su zona ("tres marcas en la parte baja de la mentonera") sale en la cantidad y el lugar que el generador quiera. Es la generalización natural del patrón que el Colorway 2 lateral dejó para el recoloreo, aplicada a los otros dos tipos de cambio que puede pedir una edición puntual.

Quinto patrón, descubierto con el Intento 4 de la lateral del Colorway 2: **hay que declarar la PROPORCIÓN de color y la relación FIGURA/FONDO del diseño, no solo qué colores lo componen**. Todos los prompts de edición de este caso venían razonando **zona por zona** ("el interior del rombo", "el pico frontal"), y cada instrucción local era correcta por separado — pero ninguna decía cuál es la **superficie dominante** y cuál el **acento minoritario**. Sin ese techo declarado, el generador expandió el rojo hasta cubrir la calota superior y el pico como una sola masa continua e **invirtió figura y fondo**: en el mockup el fondo es oscuro con líneas rojas finas encima, y en el resultado quedó fondo rojo con líneas oscuras encima. El corolario es la segunda mitad del mismo patrón: **un detalle fino de un color solo sobrevive si el prompt declara contra qué fondo tiene que contrastar**. La flecha roja delgada estaba definida en el prompt únicamente **en negativo**, como excepción del recoloreo ("conserva su rojo"), nunca en positivo —trazo fino, dentro de un grupo de chevrons concéntricos grises, apoyada sobre fondo oscuro—, así que al desaparecer el fondo oscuro el elemento dejó de existir visualmente. Los dos defectos son el mismo problema visto dos veces.

Cuarto patrón, descubierto con el Intento 4 de la trasera del Colorway 1: **la separación de roles tiene que bajar al nivel de la pieza, no quedarse a nivel de la imagen completa**. El prompt separaba bien los 3 roles para el casco entero y eso funcionó para toda la vista, pero el spoiler es la única pieza que toma **color de una fuente** (azul sólido del mockup) y **forma de otra** (labio bajo del molde real): al recibir instrucciones de las dos a la vez sobre el mismo elemento, el generador las **promedió**. Cuando una pieza concreta cruza las dos fuentes hay que decir explícitamente **qué atributo sale de cada imagen**, **prohibir el híbrido con esas palabras** y **describir la forma real de la pieza con detalle** (cuánto sobresale, qué perfil, cómo es su borde) en vez de solo nombrarla.

Tercer patrón, visible en el Intento 4 del Colorway 1 lateral: una **prohibición general no siempre alcanza**. Ese prompt ya traía un bloque explícito de "no inventes ninguna pieza física" y el generador igual montó una toma de aire negra sobre el lateral. Cuando un defecto de este tipo reincide, hay que pasar de la regla genérica a **señalar la pieza concreta con su ubicación y su descripción**, que es lo que hace el prompt de edición del Intento 5.

Segundo patrón, descubierto con el Intento 3 de la trasera del Colorway 1: los defectos **no se propagan solos entre vistas, pero las correcciones tampoco**. El tercer eje de realismo fotográfico se agregó solo al prompt de la vista lateral y la trasera, que quedó con la regla vieja de "DOS FUENTES, DOS ROLES", volvió a devolver una ilustración plana con la silueta del mockup. Cada regla nueva que se descubre hay que copiarla en el acto a **todas** las vistas y colorways del caso — incluidos los archivos hermanos `simulacion-30b`, `simulacion-30c` y `simulacion-30d`, cuyos prompts todavía no tienen el tercer eje (ya quedaron marcados con una advertencia al pie de cada archivo).

**Qué hay que hacer:**
1. Correr los prompts correctivos pendientes (en sesiones aisladas cada uno) y mandar los resultados para auditoría.
2. Confirmar si el visor tintado/oscuro es un cambio de diseño intencional de esta línea de carreras o debe quedar transparente como el checkpoint.
3. Sumar el/los colorway(s) restante(s) cuando lleguen las 3 imágenes pendientes.
4. Subir las imágenes de referencia (checkpoint + diseños) como adjuntos reales para versionarlas.
5. Confirmar si este molde negro liso es el casco físico real de EDGE o una referencia de catálogo — mismo tipo de pregunta abierta que en otros casos del catálogo.

---

**Última actualización:** 2026-07-28 · primer registro de este caso (livery de carreras EDGE, 2 colorways recibidos, 3 imágenes más en camino) — Tipo A, múltiples vistas. Se corrió el prompt del Colorway 1 vista lateral y el resultado quedó casi impecable (geometría del molde y grueso del livery correctos), con 2 defectos puntuales: la zona superior de la calota salió incompleta/simplificada (malla de triángulos tenue, líneas concéntricas con menos capas, texto chico del marco ausente) y la mentonera salió en gris liso en vez de continuar el patrón geométrico — ambos corregidos en el prompt del Intento 2. También se corrió el prompt del Colorway 1 vista trasera: geometría del molde respetada al 100% (silueta trasera, extractor, borde inferior con acolchado y correas) y wordmark "EDGE", sticker "DOT" y franjas de la banda inferior correctos, con 2 defectos — la parte superior de la calota quedó en azul liso sin ninguno de los elementos gráficos de la ilustración (rayas/chevrones verticales, malla de triángulos en los costados, formas angulares de la zona alta) y la zona baja quedó incompleta porque el generador confundió el spoiler trasero con la carcasa y cortó el patrón — ambos corregidos en su propio Intento 2. Se corrió después el prompt del Intento 2 del Colorway 1 vista lateral: corrigió los dos defectos gráficos anteriores (zona superior completa con la malla de triángulos extendida, las líneas concéntricas con todas sus capas y el texto "FOR BLAZING RUNNERS" presente, y la mentonera con el livery bajando hasta el borde), pero falló por un motivo nuevo y más de fondo — devolvió una ILUSTRACIÓN VECTORIAL PLANA en vez de una fotografía del casco real (colores planos, sin microtextura de pintura, sin reflejos especulares ni sombras de estudio, bordes de software de diseño, y contaminación de la forma del pico frontal/spoiler hacia la del mockup), porque el prompt separaba forma vs. diseño gráfico pero nunca prohibía copiar el ESTILO DE RENDER de la ilustración. Se agrega ese tercer eje de realismo fotográfico/material como regla explícita en el Intento 3 y se registra como ítem nuevo del checklist Tipo A en `orquestacion-agentes-paralelos.md`. Se corrieron después los dos prompts del **Colorway 2 (rojo/negro/gris)**: la **vista lateral quedó APROBADA** —el usuario la calificó de "espectacular"— con auditoría formal objetivo por objetivo guardada en un desplegable (geometría del molde coincidente pieza por pieza incluyendo el pivote con su fibra de carbono y la goma inferior negra según la regla de negocio de la sección 9, realismo fotográfico real y livery completo), dejando 3 puntos pendientes de verificar con zoom que no bloquean: si el pico frontal va glossy o mate, si hay gráficos grises cayendo sobre las piezas de plástico negro de la ventilación y si la etiqueta chica "X40" está presente; el dato más relevante de esa auditoría es que este colorway logró el realismo fotográfico **sin** las instrucciones del tercer eje que sí hicieron falta en el Colorway 1, lo que suma evidencia directa al ítem del checklist Tipo A sobre que el generador **no es determinístico** y que un solo resultado no alcanza para juzgar un prompt. La **vista trasera del Colorway 2 en cambio falló**: el spoiler quedó fusionado con la carcasa (la zona roja central absorbió el área del spoiler, sin separación visible entre pieza y calota, y el panel rojo perdió el borde superior definido del mockup) —exactamente el mismo defecto ya visto en la trasera del Colorway 1— y faltaron detalles de la zona superior de la calota (malla triangular apenas insinuada, acentos rojos tipo chevron de las esquinas ausentes, líneas geométricas grises con menos densidad y capas, y etiquetas "X40" reducidas a trazos rojos); ambos defectos quedan corregidos en su Intento 2, que declara el spoiler como pieza física distinta de la carcasa, exige el diseño completo sobre la base negra de la calota superior y lo refuerza en el "PROHIBIDO ABSOLUTO". Por último, revisando con zoom la vista lateral del Colorway 2 ya aprobada aparecieron **2 correcciones finas** —el interior de la forma tipo rombo de la zona alta-central quedó mayormente rojo cuando debía ser negro con el rojo limitado a la flecha/chevron que lo acompaña, y el rojo del pico frontal/spoiler quedó un poco apagado respecto del de la ilustración de diseño— que se resuelven por **edición puntual sobre el resultado ya aprobado y no por regeneración completa**, aplicando el ítem del checklist Tipo A "Ajuste puntual sobre un resultado ya aprobado = edición, no regeneración completa": se adjunta solo la imagen aprobada del Intento 1 y se piden esos dos cambios con todo lo demás congelado pixel por pixel, para no volver a poner en juego la geometría ni el realismo fotográfico que ya se lograron. Se corrió después el **Intento 3 del Colorway 1 vista lateral** y el resultado trae dos avances grandes —el **realismo fotográfico quedó resuelto** (es una fotografía de producto real, con microtextura de pintura mate, sombras de estudio, reflejos especulares, fibra de carbono en el pivote y la trama de la correa roja: el tercer eje agregado en ese prompt funcionó) y el **livery quedó completo** (malla de triángulos extendida, líneas concéntricas con sus capas, "FOR BLAZING RUNNERS" presente, wordmark "EDGE", franjas rojas y blancas, chevrones "XXX", etiqueta "X40" y la mentonera con el patrón bajando hasta el borde)— pero con **3 defectos concentrados en la zona del spoiler / parte alta**: el spoiler salió **duplicado** (dos formas superpuestas) y con la **forma y la proporción del mockup** en vez de la pieza puntiaguda y compacta del molde real, quedó **blanco con patrón de malla en vez de azul sólido** —exactamente el mismo defecto ya visto en la vista trasera de este mismo colorway, o sea un patrón de falla del caso y no un accidente aislado— y apareció una **pieza negra alargada inventada en la parte alta de la calota** que no existe en el molde, otra materialización de una forma gráfica del mockup como si fuera relieve físico; los tres quedan corregidos en el **Intento 4**, que le da al spoiler una instrucción propia de forma ("uno solo, con la forma y el tamaño del molde real, sin mezclar ni superponer la del mockup"), un punto propio de color ("AZUL SÓLIDO, sin malla, sin blanco, sin líneas encima") y un bloque de "no inventes ninguna pieza física", todo reforzado además en el "PROHIBIDO ABSOLUTO". Se corrió por último el **Intento 2 del Colorway 2 vista lateral** (el de edición puntual) y **falló por un motivo nuevo**: la edición terminó siendo un **rediseño de la zona**. El generador, en vez de recolorear el interior del rombo, **redibujó de cero toda la zona alta-central del lateral** y la devolvió simplificada —el marco geométrico angular con sus varias líneas concéntricas reemplazado por una forma hexagonal más limpia y más grande con menos líneas, el patrón de malla triangular muy reducido en densidad y extensión, el texto chico del marco eliminado y varias capas de líneas grises y rojas perdidas— y encima el cambio de color pedido tampoco se logró (la zona sigue leyéndose predominantemente roja). La causa raíz es que el prompt protegía con mucho detalle lo que NO se toca, pero **nunca declaró que dentro de la zona que SÍ se edita lo único que cambia es el atributo puntual indicado**: al nombrar el rombo como "la zona a cambiar", el generador tomó eso como licencia para rehacerla entera. El **Intento 3** replantea el pedido como un **RECOLOREO PURO** —la imagen se devuelve idéntica salvo el valor de color de 2 zonas, incluidas las zonas recoloreadas— con un bloque crítico nuevo que enumera todo lo que la zona del rombo conserva idéntico (líneas concéntricas con su cantidad y grosor, malla con su densidad y extensión, texto chico, capas de líneas, cada trazo en su posición), la analogía de "seleccionar el área en un editor y cambiarle el relleno sin tocar las capas de dibujo de encima", un "PROHIBIDO ABSOLUTO" ampliado y una instrucción de verificación final que exige comparar contra la imagen adjunta y confirmar que la única diferencia perceptible sea el color de esas 2 zonas. La lección se registra además como ítem nuevo del checklist Tipo A en `orquestacion-agentes-paralelos.md`. Se corrió por último el **Intento 3 del Colorway 1 vista trasera** y el resultado es una **regresión**: volvió a salir una **ILUSTRACIÓN VECTORIAL PLANA** en vez de una fotografía de producto y, al copiar ese estilo, la **silueta trasera se contaminó con la del mockup de diseño** (más plana, más "dibujada") en vez de seguir la de la foto del molde negro liso — dos cosas que los intentos anteriores de esta misma vista sí habían logrado. La causa raíz no es un defecto nuevo del generador sino un **descuido de propagación entre vistas**: el **tercer eje** (forma / contenido gráfico / **estilo de render y realismo de material**) se descubrió y se agregó en el Intento 3 de la vista **lateral** de este mismo colorway —con el bloque `CRÍTICO — EL RESULTADO ES UNA FOTOGRAFÍA, NO UNA ILUSTRACIÓN` y la regla ampliada de "DOS FUENTES, TRES ROLES"— pero **nunca se copió a los prompts de la vista trasera**, que siguieron con la regla vieja de "DOS FUENTES, DOS ROLES" y sin ningún bloque de realismo; sin ese eje declarado, el generador copia también el estilo plano de la ilustración y arrastra con él su forma. El **Intento 4** de la trasera propaga el tercer eje a esta vista (regla de TRES ROLES, bloque de fotografía adaptado a la trasera con su acolchado y correas, PASO 1 reforzado con el detalle explícito de la silueta trasera del molde —calota redondeada y compacta, extractor superior, labio del spoiler, borde inferior— y "PROHIBIDO ABSOLUTO" ampliado contra la ilustración, el aplanado del material y la contaminación de silueta). La lección generalizable —**una regla nueva se propaga de inmediato a los prompts de TODAS las vistas y colorways del mismo caso, o el mismo defecto reaparece vista por vista**— se registra como ítem nuevo del checklist Tipo A en `orquestacion-agentes-paralelos.md`, y los archivos hermanos `simulacion-30b`, `simulacion-30c` y `simulacion-30d` quedan marcados con una advertencia al pie porque sus prompts (lateral y trasera) todavía no tienen el tercer eje. Se corrió por último el **Intento 4 del Colorway 1 vista lateral** y quedó **aprobado en lo esencial**: el usuario lo calificó de "espectacular" —"el bevel/relieve del casco lo hizo excelente, los detalles, los colores, la perspectiva, todo fue espectacular"— y con él se cerraron **de una sola vez los 3 defectos que ese colorway venía arrastrando**: el **realismo fotográfico** se sostuvo (sigue siendo una foto de producto, no la ilustración plana del Intento 2), el **spoiler quedó resuelto** (uno solo, con la forma y la proporción puntiaguda y compacta del molde real, sin la duplicación ni el drift hacia la forma del mockup, y en **azul sólido** sin la malla ni el blanco que le comían el color) y los **patrones quedaron completos** (malla de triángulos de la calota superior con su extensión, líneas concéntricas tipo chevron con todas sus capas, mentonera con el livery bajando hasta el borde y el texto chico "FOR EVERYONE PLANTERS" presente dentro del marco geométrico). Restan **3 ajustes puntuales**, ninguno de geometría general ni de realismo: una **pieza negra rectangular tipo toma de aire inventada** sobre la zona media-baja del lateral, justo encima del wordmark "EDGE", que no existe en el molde real; el **sticker blanco "DOT"** en el borde inferior trasero, que corresponde a la vista trasera y no a la lateral; y las **3 marcas en "X" / chevrones blancos** de la zona inferior delantera de la mentonera (el "XXX" del mockup), que esta vez no salieron. Los tres se resuelven en el **Intento 5 por EDICIÓN puntual sobre el resultado aprobado y no por regeneración**, aplicando el ítem del checklist Tipo A "Ajuste puntual sobre un resultado ya aprobado = edición, no regeneración completa": regenerar volvería a poner en juego la geometría, el spoiler y el realismo que costaron cuatro intentos. El prompt del Intento 5 incorpora además la lección ya documentada en el Intento 3 del Colorway 2 lateral —**no alcanza con proteger lo que no se toca: hay que declarar que dentro de las zonas que SÍ se editan el único cambio es el indicado y todo el resto del dibujo se conserva**— en un bloque `CRÍTICO — LAS ZONAS EDITADAS TAMPOCO SE REDIBUJAN`, más la exigencia de que los 2 elementos eliminados no dejen hueco, parche ni contorno y de que las 3 "X" se integren como **pintura sobre la superficie** (siguiendo la curvatura y recibiendo la misma luz), nunca como calcomanía plana ni como relieve. Hallazgo adicional de este intento: el prompt del Intento 4 **ya prohibía explícitamente inventar piezas físicas**, con un bloque propio, y el generador igual montó la toma de aire — o sea que **la prohibición general no siempre alcanza** y, cuando un defecto de este tipo reincide, hay que pasar de la regla genérica a señalar la pieza concreta con su ubicación y su descripción. Se corrió por último el **Intento 3 del Colorway 2 vista lateral** (el de recoloreo puro) y quedó **casi perfecto**: el usuario dijo que quedó "increíble" y que "lo demás fue una belleza". El enfoque funcionó — a diferencia del Intento 2, el generador **NO redibujó la zona**: el marco geométrico angular con sus líneas concéntricas, el patrón de malla triangular con su densidad, el texto chico y las capas de líneas grises y rojas se conservaron intactos, y el resto del casco (geometría, realismo fotográfico, spoiler, visor, wordmark "EDGE", chevrones "XXX", correa roja) quedó igual, con el CAMBIO 2 del rojo del pico frontal también logrado. Eso **valida la lección de blindar el dibujo dentro de la zona editada** ya registrada en el checklist Tipo A. Queda **1 defecto**: el **recoloreo quedó incompleto** — el interior del rombo pasó a negro, pero en la **parte baja-izquierda del sector recoloreado** un grupo de **barras/franjas horizontales cortas siguió en ROJO** cuando debía pasar a negro; el rojo tiene que quedar únicamente en la flecha/chevron. La causa raíz es que el prompt blindó bien el dibujo pero describió la zona a recolorear de forma **global** ("el interior del rombo"), sin exigir que el recoloreo **cubra toda la zona sin dejar islas ni bloques sueltos con el color viejo** ni nombrar explícitamente la única excepción que sí lo conserva: en un recoloreo hay que pedir **las dos cosas** —que no se redibuje Y que no queden islas del color anterior—. El **Intento 4** agrega un bloque `CRÍTICO — COBERTURA COMPLETA DEL RECOLOREO`, actualiza el CAMBIO 1 para que el recoloreo sea explícitamente completo y sin islas (nombrando el bloque de barras de la parte baja-izquierda que quedó rojo), declara la flecha/chevron como única excepción, suma la prohibición correspondiente al "PROHIBIDO ABSOLUTO" y desdobla la verificación final en **dos chequeos obligatorios**: dibujo intacto y recoloreo completo sin ningún rojo fuera de la flecha. La lección se registra además ampliando el ítem del checklist Tipo A sobre prompts de edición en `orquestacion-agentes-paralelos.md`. Se corrió por último el **Intento 4 del Colorway 1 vista trasera** (el que propaga el tercer eje a esa vista) y quedó como un **gran avance**: el usuario dijo que **"lo demás lo hizo excelente"** y la comparación contra el molde y contra el mockup lo confirma — el **realismo fotográfico se logró** (pintura mate con microtextura, iluminación de estudio con sombras suaves, reflejos especulares creíbles, acolchado interior y correas del borde inferior con su textura de tela real: la propagación del tercer eje funcionó), la **silueta general se recuperó** (calota redondeada y compacta, extractor de ventilación superior en su posición y forma correctas, borde inferior como en la foto), el **livery quedó completo** (líneas verticales blancas y azul oscuro, malla triangular con buena extensión, formas geométricas angulares, banda inferior cubriendo completa la zona baja con el wordmark "EDGE", el sticker "DOT" y las etiquetas "X40" a ambos lados) y **no aparecieron piezas inventadas** (se terminaron las aletas y los paneles elevados de intentos anteriores). Queda **1 solo defecto, en el spoiler: salió HÍBRIDO entre el del molde real y el del mockup**. En la foto del molde negro liso el spoiler trasero es un **labio bajo, discreto e integrado** a la superficie superior-trasera de la carcasa —sobresale poco, acompaña la curvatura de la calota y tiene un borde suave—, mientras que en el mockup se dibuja como una **pieza grande, prominente y muy sobresaliente, tipo ala**, con bordes marcados y perfil agresivo; el generador **se quedó con el azul sólido del mockup (correcto) pero también adoptó su forma y su tamaño**, devolviendo un spoiler mucho más prominente que el real. La causa raíz es que **la separación de roles no bajaba al nivel de la pieza**: el prompt separaba bien los 3 roles a nivel de la imagen completa, pero el spoiler recibía instrucciones de las dos fuentes a la vez ("el color viene del mockup", "la forma viene del molde real") y, al cruzarse sobre el mismo elemento, el generador las promedió. El **Intento 5** agrega un bloque propio `CRÍTICO — EL SPOILER: SU FORMA SALE DEL MOLDE REAL, SU COLOR SALE DEL MOCKUP, Y NUNCA SE PROMEDIAN`, que desglosa atributo por atributo (forma, tamaño y perfil 100% del molde, con la descripción detallada del labio bajo; color 100% del mockup, azul sólido), prohíbe explícitamente usar la forma alada del mockup "ni entera, ni parcialmente, ni a medio camino", cierra con una verificación obligatoria contra la foto del molde antes de entregar, remite el punto del spoiler del PASO 2 a ese bloque y suma las prohibiciones correspondientes al "PROHIBIDO ABSOLUTO". La lección generalizable —**cuando una pieza concreta toma su color de una fuente y su forma de otra, la separación de roles tiene que declararse al nivel de esa pieza, con el híbrido prohibido y la forma real descrita en detalle**— se registra como ítem nuevo del checklist Tipo A en `orquestacion-agentes-paralelos.md`. Se corrió por último el **Intento 5 del Colorway 1 vista lateral** (la edición puntual de 3 cambios: quitar la pieza negra tipo toma de aire, quitar el sticker "DOT" y agregar las 3 marcas en "X" de la mentonera) y devolvió **3 imágenes de resultado**. Como el agente que preparó la auditoría **no tiene acceso a los píxeles**, el bloque *"Intento 5 — resultado auditado (edición de 3 cambios)"* no dictamina nada sobre el resultado: deja el **material de auditoría** para que lo complete quien mire las imágenes — un **checklist de 25 preguntas concretas y verificables** organizado por cambio (los 3 pedidos más el requisito de que nada más haya cambiado), el **riesgo anticipado de cada cambio** cruzado contra los modos de falla que este caso ya tuvo documentados (redibujado de la zona en vez de borrado, cobertura parcial con islas del estado viejo, invención de una pieza física en el lugar de la eliminada, cantidad/posición/tamaño incorrectos del elemento agregado, y la alteración del spoiler —la pieza que falla en las 4 vistas— o la caída del realismo fotográfico), una **tabla de veredicto vacía por imagen** (✅/⚠️/🔴) y **dos prompts correctivos "Intento 6"** listos para copiar/pegar: **Escenario A — cobertura parcial**, que sigue siendo una edición puntual sobre el resultado del Intento 5 y aplica la regla de cobertura completa nombrando explícitamente el resto que quedó (con placeholders para describirlo), y **Escenario B — la edición redibujó de más**, que descarta ese resultado, vuelve a partir de la imagen aprobada del Intento 4 y reafirma el **borrado/agregado puro** —dentro de la zona editada solo cambia el elemento indicado, todo lo demás se conserva idéntico— blindando con bloques propios el **spoiler**, el **visor** y el **estilo fotográfico**. Se deja además la regla de método de que las 3 imágenes salieron del **mismo prompt sin cambiarle una letra**, así que se auditan por separado y se elige la mejor, en aplicación del ítem de **no determinismo del generador**. La lección generalizable —**la cobertura completa del cambio vale también para borrados y agregados: un borrado son dos tareas (eliminar y reconstruir el dibujo de abajo, declarándolo explícitamente cuando la superficie no es lisa) y un agregado exige conteo forzado, alineación, posición y tamaño**— se registra como ítem nuevo del checklist Tipo A en `orquestacion-agentes-paralelos.md`. Se corrió por último el **Intento 5 del Colorway 1 vista trasera** (el del bloque de separación de roles a nivel de pieza) y es **el mejor resultado de esa vista hasta ahora**: el usuario lo resumió como **"ahora sí, casi casi"** y dijo que todo lo demás quedó *"una belleza"*. Con él quedaron cerrados **los TRES defectos históricos de la vista trasera, en el mismo intento**: el **estilo de render** (sigue siendo una fotografía de producto con iluminación de estudio, sombras suaves, reflejos especulares y microtextura de pintura mate, no la ilustración vectorial plana del Intento 3 — o sea que el tercer eje se sostiene corrida tras corrida), la **forma del spoiler** (dejó de estar hibridado y agrandado con la pieza alada del mockup: es el labio integrado que acompaña la curvatura del molde real) y el **color del spoiler** (azul sólido uniforme, sin patrón encima, cerrando el defecto que era un patrón de falla en las dos vistas del colorway). El resto también quedó bien: forma del molde, extractor superior, livery completo (líneas verticales, malla triangular, formas angulares, banda inferior chevron), wordmark "EDGE", etiquetas "X40", acolchado interior y correas, sin piezas físicas inventadas. Quedan **2 ajustes chicos**, que el propio usuario describió como *"cambios estrictamente pequeños, muy pequeños"*: **(1)** el **spoiler no se lee como una pieza COMPLETA** — el ala azul cruza horizontalmente pero sus **dos extremos no cierran**: se truncan y se desvanecen contra la silueta antes de terminar de recorrerse, así que la pieza se lee **parcial** en vez de leerse como una sola pieza continua de punta a punta que nace de la carcasa, la recorre y vuelve a cerrar contra ella (no es un problema de tamaño ni de color, sino de **integridad y continuidad de la pieza**); y **(2)** hay que **sacar el sticker "DOT"**, que **NO es un defecto del generador**: el propio prompt del Intento 5 lo pedía explícitamente en su lista de elementos y el generador lo dibujó bien — es una **decisión de negocio nueva** del usuario, y queda registrada como tal. Los 2 se resuelven en el **Intento 6 por EDICIÓN puntual sobre este resultado y no por regeneración**, porque regenerar volvería a poner en juego los tres ejes que costaron cinco intentos; el prompt trae los bloques `CAMBIO 1 — EL SPOILER SE COMPLETA: UNA SOLA PIEZA CONTINUA DE PUNTA A PUNTA` (con cobertura completa adaptada a integridad de pieza y el blindaje explícito de que **completar ≠ agrandar**: no se agranda, no se hace más prominente ni más "alado", no cambia de perfil, de altura ni de color), `CAMBIO 2 — ELIMINAR EL STICKER "DOT"` (borrado sin resto **más** reconstrucción del patrón de la banda inferior debajo, sin costura ni parche, conservando "EDGE" y las dos "X40"), `NADA MÁS CAMBIA`, el bloque de que las zonas editadas tampoco se redibujan, y una `VERIFICACIÓN FINAL` de **tres chequeos obligatorios**: ¿el spoiler se lee entero con los dos extremos cerrados?, ¿sigue teniendo el MISMO tamaño, perfil y altura —no creció—?, ¿desapareció el "DOT" sin rastro y con el patrón reconstruido debajo? La lección generalizable —**cuando se pide COMPLETAR un elemento hay que declarar que completar no es agrandar, porque el generador lee "completo" como "más grande" y reintroduce un defecto de tamaño ya resuelto; todo pedido de integridad va con el blindaje explícito de las dimensiones que NO cambian**— se registra como ítem nuevo del checklist Tipo A en `../orquestacion-agentes-paralelos.md`. Se registra además una **regla de negocio nueva del caso**, en su propia sección al principio de este archivo: **ningún render de este livery lleva sticker "DOT" ni ninguna otra marca de certificación u homologación** (el wordmark "EDGE" y las etiquetas "X40" sí se conservan). Es la **segunda vez** que el usuario lo pide —antes en la vista lateral del Colorway 1— así que se propaga a todo el caso: se sacó la línea del sticker de **las 17 apariciones** que tenían los prompts (11 en este archivo y 2 en cada uno de `simulacion-30b`, `simulacion-30c` y `simulacion-30d`) y se la reemplazó por una instrucción en negativo dentro de la misma lista de elementos, para que ninguna re-corrida por copiar/pegar lo vuelva a dibujar.
