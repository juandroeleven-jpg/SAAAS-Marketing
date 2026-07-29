# Simulación 30 — Livery de carreras EDGE "Temporada 2026": adaptación de diseño sobre molde real (Tipo A, múltiples vistas y colorways)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Caso de adaptación de diseño (Tipo A) siguiendo el mismo pipeline Agente 0 → Generador → Auditor documentado en `orquestacion-agentes-paralelos.md` (el diagrama que trajo el usuario es el original del caso Dakota, con las "12 lecciones" de un Artifact externo aún no transcripto al repo — acá se aplica el checklist Tipo A ya formalizado en la sección 2 de ese documento, que cubre las mismas lecciones).

**Pedido:** adaptar un livery de carreras de marca EDGE ("Temporada 2026", con al menos 3 colorways distintos) sobre el molde real de un casco full-face negro mate ya fotografiado (checkpoint). El usuario va a mandar 6 imágenes más (más vistas y/o más colorways) — este archivo se arma con lo recibido hasta ahora y se va a seguir completando.

**Molde real (checkpoint), 2 vistas recibidas:**
- Vista lateral/3-4: casco full-face negro mate, pico frontal puntiagudo, visor transparente, correa roja, mentonera y ventilaciones en el mismo tono negro mate que la calota (sin piezas de plástico crudo visible como en otros moldes del catálogo).
- Vista trasera: calota negra mate, borde inferior negro, sin gráficos.

**Colorway 1 — Azul/blanco/rojo "EDGE":** carcasa azul con franjas geométricas diagonales blancas y rojas, patrón de rombos/hexágonos con textura fina tipo malla en la zona superior, wordmark "EDGE" en blanco bold itálico sobre la zona inferior lateral, visor oscuro/tintado (a diferencia del checkpoint, que tiene visor transparente — ver nota abajo), sticker "DOT" en la parte trasera inferior.

**Colorway 2 — Rojo/negro/gris "EDGE":** carcasa negra con paneles diagonales rojos y líneas geométricas grises, wordmark "EDGE" en gris bold itálico sobre la zona inferior lateral, pico frontal rojo, visor oscuro/tintado, sticker "DOT" en la parte trasera inferior, acentos rojos cerca de la ventilación.

**⚠️ Pregunta abierta para el usuario:** las 2 imágenes de diseño (colorway 1 y 2) muestran visor oscuro/tintado, distinto del visor transparente del checkpoint. Como se repite en ambos colorways, se trata como parte intencional del diseño de esta línea de carreras (no como error) — confirmar si es así o si el visor debe quedar transparente como en el checkpoint real.

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
- Sticker "DOT" en la parte trasera inferior (se agrega en la vista
  trasera, no en esta vista lateral si no es visible desde este
  ángulo).

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
- Sticker "DOT" en la parte trasera inferior (se agrega en la vista
  trasera, no en esta vista lateral si no es visible desde este
  ángulo).

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

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt y mandar el resultado para auditoría — verificar en especial la zona superior de la calota (patrones completos, no simplificados) y que la mentonera tenga el diseño continuo, no gris liso.

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
- Sticker "DOT" pequeño en la parte más baja, centrado.

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso vista
trasera.

PROHIBIDO ABSOLUTO: no cambiar la forma ni la silueta trasera del
molde real. No copiar la forma del casco de la imagen de diseño si es
distinta. No agregar elementos gráficos fuera de la lista de arriba.
```

</details>

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
- Sticker "DOT" pequeño en la parte más baja, centrado.
- Acentos rojos puntuales a los costados de la banda inferior.

CRÍTICO — MISMO ÁNGULO EXACTO que la foto del molde negro liso vista
trasera.

PROHIBIDO ABSOLUTO: no cambiar la forma ni la silueta trasera del
molde real. No copiar la forma del casco de la imagen de diseño si es
distinta. No agregar elementos gráficos fuera de la lista de arriba.
```

</details>

**Estado:** 🔴 pendientes de generar (los 4 prompts armados hasta ahora). Faltan las 3 imágenes restantes que el usuario va a mandar (probablemente un 3er colorway) para completar el set.

**Qué hay que hacer:**
1. Correr los 4 prompts (en sesiones aisladas cada uno) y mandar los resultados para auditoría.
2. Confirmar si el visor tintado/oscuro es un cambio de diseño intencional de esta línea de carreras o debe quedar transparente como el checkpoint.
3. Sumar el/los colorway(s) restante(s) cuando lleguen las 3 imágenes pendientes.
4. Subir las imágenes de referencia (checkpoint + diseños) como adjuntos reales para versionarlas.
5. Confirmar si este molde negro liso es el casco físico real de EDGE o una referencia de catálogo — mismo tipo de pregunta abierta que en otros casos del catálogo.

---

**Última actualización:** 2026-07-28 · primer registro de este caso (livery de carreras EDGE, 2 colorways recibidos, 3 imágenes más en camino) — Tipo A, múltiples vistas. Se corrió el prompt del Colorway 1 vista lateral y el resultado quedó casi impecable (geometría del molde y grueso del livery correctos), con 2 defectos puntuales: la zona superior de la calota salió incompleta/simplificada (malla de triángulos tenue, líneas concéntricas con menos capas, texto chico del marco ausente) y la mentonera salió en gris liso en vez de continuar el patrón geométrico — ambos corregidos en el prompt del Intento 2.
