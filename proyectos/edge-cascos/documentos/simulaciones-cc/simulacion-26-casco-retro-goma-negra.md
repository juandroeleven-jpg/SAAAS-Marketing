# Simulación 26 — Casco retro/redondo: goma del borde inferior a negro (Tipo A, edición puntual)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

## Estado general del caso

🔴 **Pendientes de generar (los 2 colorways).** Prompts **v2 (edición puntual)** listos para copiar/pegar — reemplazan a los prompts v1 de regeneración que tenía este archivo (ver *Historial* al final). Hay además un **bloque opcional de limpieza de artefactos de captura** y **una decisión abierta** sobre el inserto de la mentonera.

---

## 1. Imagen de partida

**Una sola captura de pantalla** de una lámina de catálogo titulada **"VARIANTES DE COLOR"**, hecha sobre un archivo de diseño (Canva). Muestra **dos cascos de perfil**, ambos del **mismo molde retro / redondo tipo full-face vintage**: calota esférica y compacta, visor grande de una pieza, mentonera integrada de línea redondeada, sin spoiler, estética años 70.

**Elementos que SÍ son del producto (comunes a los dos cascos):**
- Molde retro/redondo, visto de perfil, mismo ángulo y encuadre.
- **Visor** transparente / ahumado claro, de una sola pieza.
- **Pivote circular plateado/metálico** a la altura de la sien.
- **Contorno de la abertura del visor** — un marco que rodea todo el hueco del visor, en color de acento.
- **Pieza / goma del borde inferior** — recorre toda la base del casco (zona baja de la mentonera + borde inferior de la calota), en el mismo color de acento que el contorno del visor.
- **Inserto rectangular** en la zona baja de la mentonera (tipo ventilación o embellecedor), también en el color de acento.

**Artefactos de la captura — NO son parte del producto** (ver sección 4, decisión abierta):
- Título **"VARIANTES DE COLOR"** con una **barra roja** arriba.
- **Líneas horizontales violeta/púrpura** arriba y abajo de la lámina.
- **Línea vertical punteada** que cruza el casco lila (guía de maquetación).
- **Círculo gris con la letra "J"** entre los dos cascos — avatar de un comentario de Canva.
- **Banda negra** en la parte baja de la captura, con una **tira de miniaturas** al pie (UI de la herramienta).
- Borde de un **tercer casco** asomando por la derecha, fuera del encuadre útil.

---

## 2. Los dos colorways

| # | Colorway | Calota | Contorno del visor | Goma del borde inferior | Inserto de la mentonera |
|---|---|---|---|---|---|
| 1 | **Lila / rosa** (izquierda) | Lila / violeta claro mate | **ROSA claro** | ROSA claro → **NEGRO** | Rosa claro |
| 2 | **Blanco / azul marino** (derecha) | Blanca | **AZUL MARINO** | AZUL MARINO → **NEGRO** | Azul marino |

El casco 1 tiene además un **pequeño detalle rojo** arriba a la derecha de la calota, que no aparece en el casco 2. Los dos comparten visor, pivote plateado, ángulo y encuadre.

---

## 3. Qué cambia y qué NO

Pedido textual del usuario: *"quiero para estos dos cascos por favor, que queden exactamente igual pero que por favor me ayudes a cambiarle solo el color a la parte negra... solo la parte negra de abajo debe ser arreglada, debe ir de negro"*.

Se aplica la **regla de negocio ya registrada** en [`orquestacion-agentes-paralelos.md`, sección 9 — "Regla de negocio — goma del borde inferior siempre negro"](../orquestacion-agentes-paralelos.md#9-regla-de-negocio--goma-del-borde-inferior-siempre-negro), confirmada por comentario directo del equipo ("jimgarzons") sobre una pieza real:

> **"LA GOMA DE ABAJO DEL CASCO DEBE SER COLOR NEGRO. LOS ACCESORIOS SI PUEDEN QUEDARSE DE ESE COLOR, SOLO CAMBIAR LA GOMA DE ABAJO A COLOR NEGRO. ESTO APLICAR PARA TODOS LOS CASOS"**

Traducido a estos dos cascos:

- ✅ **CAMBIA:** la **pieza / goma del borde inferior** — la que recorre la base del casco de punta a punta — pasa de rosa (casco 1) y de azul marino (casco 2) a **NEGRO**.
- ❌ **NO CAMBIA:** el **contorno de la abertura del visor**. Es un **accesorio** y por la regla de la sección 9 **conserva su color** (rosa / azul marino).
- ❌ **NO CAMBIA:** nada más — calota, visor, pivote plateado, detalle rojo del casco 1, ángulo, encuadre, fondo, iluminación, sombras, reflejos, microtextura.

### 3.1 El riesgo principal de este caso — dos piezas del mismo color

En cada casco hay **dos piezas distintas que comparten exactamente el mismo color**: el contorno del visor y la goma de abajo. **Solo una de las dos cambia.** Si el prompt identifica la pieza a cambiar **por su color** ("pasá el rosa a negro"), el generador selecciona las dos y pinta también el contorno del visor.

Por eso los prompts de abajo **identifican la pieza a cambiar exclusivamente por su UBICACIÓN** (la que recorre la base del casco, el borde perimetral de abajo) y **nunca por su color**, y llevan un bloque propio y enfático dedicado a separarlas. Es la aplicación directa del ítem de **separación de roles a nivel de pieza** del checklist Tipo A ([`orquestacion-agentes-paralelos.md`, sección 2, Tipo A](../orquestacion-agentes-paralelos.md#tipo-a--transferencia-de-diseño-gráficosobre-geometríaobjeto-real-existente)), registrado a partir del caso `simulacion-30-edge-racing-livery.md`: cuando dos piezas se confunden entre sí, la desambiguación tiene que bajar al nivel de la pieza, con un bloque propio, y no quedarse en una instrucción global.

### 3.2 Cobertura completa del cambio

La goma de abajo tiene que quedar negra **en todo su recorrido**, de punta a punta, sin ningún tramo que se quede con el color viejo. Es la lección de **cobertura completa / islas de color sin recolorear** ya registrada en el checklist Tipo A a partir de `simulacion-30-edge-racing-livery.md`, **Colorway 2, vista lateral, Intento 3→4**: con el dibujo de la zona perfectamente conservado, un grupo de barras horizontales de la parte baja-izquierda se quedó con el rojo viejo porque el prompt describía la zona de forma global y no exigía cobertura total ni declaraba las excepciones.

### 3.3 El inserto rectangular de la mentonera — decisión tomada, pendiente de confirmar

**Posición tomada: el inserto rectangular de la zona baja de la mentonera es un ACCESORIO y CONSERVA su color** (rosa en el casco 1, azul marino en el casco 2).

**Razonamiento:** la regla de la sección 9 dice literalmente *"LOS ACCESORIOS SI PUEDEN QUEDARSE DE ESE COLOR"*, y acota el cambio a *"LA GOMA DE ABAJO"* — una tira perimetral continua. El inserto es un **elemento discreto y separado**, con forma propia (un rectángulo), que **está en la zona baja pero no es la goma perimetral**: es del mismo tipo de pieza que el pico frontal o las ventilaciones laterales, que en la Simulación 27 ya se resolvieron conservando su color. Cambiarlo iría más allá de lo que el usuario pidió.

🟡 **PENDIENTE DE CONFIRMACIÓN DEL USUARIO.** Está declarado sin ambigüedad en los dos prompts. **Alternativa, si el usuario dice lo contrario** — se cambia en una línea: en cada prompt, mover el inserto del bloque `TODO ESTO NO SE TOCA` al bloque `CAMBIO ÚNICO`, redactándolo como *"el inserto rectangular de la zona baja de la mentonera también pasa a NEGRO, junto con la goma del borde inferior"*, y ajustar el chequeo 3 de la `VERIFICACIÓN FINAL`.

---

## 4. Prompts — edición puntual, uno por casco

Los dos son **prompts de EDICIÓN, no de regeneración**: se adjunta la imagen y se devuelve idéntica salvo por el color de una pieza. Es la regla ya registrada en el checklist Tipo A (*"ajuste puntual sobre un resultado ya aprobado = edición, no regeneración completa"*), reforzada por el ítem que exige declarar **qué cambia dentro de la zona editada** además de blindar lo que no se toca.

⚠️ **Correr cada uno en una sesión aislada** de la herramienta de generación — hallazgo de contaminación cruzada del caso Vortex (`simulacion-11-vortex-verificacion.md`), ya en el checklist Tipo A.

<details><summary><b>Prompt — Casco 1 (lila / rosa): la goma del borde inferior pasa a NEGRO</b></summary>

```
Esta es una EDICIÓN PUNTUAL sobre la imagen adjunta del casco lila.
NO es una generación nueva ni un rediseño. La imagen se devuelve
IDÉNTICA a la adjunta salvo por el COLOR DE UNA SOLA PIEZA. Todo lo
demás queda pixel por pixel igual.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ:
- La forma y la silueta del molde retro/redondo: calota esférica y
  compacta, mentonera integrada de línea redondeada, sin spoiler.
  Mismo objeto 3D exacto, sin cambiar proporciones ni curvatura.
- La calota LILA / violeta claro mate: mismo color, mismo acabado.
- EL CONTORNO DE LA ABERTURA DEL VISOR EN SU COLOR ROSA ORIGINAL —
  el marco que rodea todo el hueco del visor SIGUE SIENDO ROSA. Es un
  accesorio y conserva su color. NO se pinta de negro.
- El inserto rectangular de la zona baja de la mentonera: SIGUE
  SIENDO ROSA. Es un accesorio, NO es la goma del borde inferior, y
  conserva su color.
- El visor y su transparencia: mismo tinte, misma claridad, mismos
  reflejos.
- El pivote circular plateado/metálico a la altura de la sien.
- El pequeño detalle rojo de la parte alta derecha de la calota.
- El ángulo de la toma, el encuadre, el recorte y el fondo.
- La iluminación de estudio, las sombras, los reflejos especulares y
  la microtextura del material.

CAMBIO ÚNICO — LA PIEZA DEL BORDE INFERIOR PASA A NEGRO:
La pieza que hay que cambiar se identifica POR SU UBICACIÓN, no por
su color: es la tira/goma que recorre TODA LA BASE DEL CASCO — el
borde perimetral de abajo, la franja más baja que va por la zona
inferior de la mentonera y sigue por el borde inferior de la calota
hasta el fondo del casco. Esa pieza, y solo esa, pasa a NEGRO:
negro sólido, mismo tipo de acabado de goma que tiene ahora, misma
forma, mismo grosor, misma posición, mismos reflejos de la luz de
estudio sobre ella. Lo único que cambia es su COLOR.

CRÍTICO — NO CONFUNDIR LAS DOS PIEZAS DEL MISMO COLOR:
En este casco hay DOS PIEZAS DISTINTAS QUE SON DEL MISMO COLOR ROSA:
  (1) el CONTORNO DE LA ABERTURA DEL VISOR, arriba, rodeando el
      hueco del visor;
  (2) la GOMA DEL BORDE INFERIOR, abajo, recorriendo la base del
      casco.
SOLO LA DE ABAJO CAMBIA A NEGRO. El contorno del visor CONSERVA SU
COLOR ROSA, intacto, exactamente como está en la imagen adjunta.
PROHIBIDO pintar de negro todo lo que hoy es rosa. PROHIBIDO tratar
el rosa como un color a reemplazar en la imagen: el cambio es de una
PIEZA concreta ubicada en la base del casco, no de un color.
Antes de entregar, mirá el marco del visor y confirmá que sigue rosa.

COBERTURA COMPLETA DEL CAMBIO:
La goma de abajo pasa a negro EN TODO SU RECORRIDO, de punta a punta,
sin dejar NINGÚN tramo, isla ni segmento con el color rosa viejo — ni
en la parte delantera baja de la mentonera, ni en el tramo central,
ni en la parte trasera del borde inferior. El negro tiene que ser
continuo y uniforme a lo largo de toda la pieza. Las ÚNICAS
excepciones que conservan el rosa son las dos ya nombradas: el
contorno de la abertura del visor y el inserto rectangular de la
mentonera. Ninguna otra.

PROHIBIDO ABSOLUTO:
- Prohibido pintar de negro el contorno de la abertura del visor.
- Prohibido pintar de negro el inserto rectangular de la mentonera.
- Prohibido cambiar el color de la calota lila.
- Prohibido oscurecer, tintar o alterar el visor.
- Prohibido redibujar, simplificar o reinterpretar ninguna zona de la
  imagen: no se rehace nada, solo se cambia un color.
- Prohibido agregar o quitar gráficos, logos, texto o piezas.
- Prohibido cambiar forma, tamaño o posición de ningún componente.
- Prohibido cambiar el ángulo, el encuadre, el fondo o la iluminación.

VERIFICACIÓN FINAL — compará tu resultado contra la imagen adjunta y
respondé estos tres chequeos antes de entregar:
1. ¿La goma del borde inferior quedó NEGRA en TODO su recorrido, de
   punta a punta, sin ningún tramo rosa?
2. ¿El contorno de la abertura del visor CONSERVA su color rosa
   original, intacto?
3. ¿Cambió ALGO MÁS en la imagen? La única diferencia perceptible
   tiene que ser el color de la goma del borde inferior. Si hay
   cualquier otra diferencia, corregila.
```

</details>

<details><summary><b>Prompt — Casco 2 (blanco / azul marino): la goma del borde inferior pasa a NEGRO</b></summary>

```
Esta es una EDICIÓN PUNTUAL sobre la imagen adjunta del casco blanco.
NO es una generación nueva ni un rediseño. La imagen se devuelve
IDÉNTICA a la adjunta salvo por el COLOR DE UNA SOLA PIEZA. Todo lo
demás queda pixel por pixel igual.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ:
- La forma y la silueta del molde retro/redondo: calota esférica y
  compacta, mentonera integrada de línea redondeada, sin spoiler.
  Mismo objeto 3D exacto, sin cambiar proporciones ni curvatura.
- La calota BLANCA: mismo color, mismo acabado.
- EL CONTORNO DE LA ABERTURA DEL VISOR EN SU COLOR AZUL MARINO
  ORIGINAL — el marco que rodea todo el hueco del visor SIGUE SIENDO
  AZUL MARINO. Es un accesorio y conserva su color. NO se pinta de
  negro.
- El inserto rectangular de la zona baja de la mentonera: SIGUE
  SIENDO AZUL MARINO. Es un accesorio, NO es la goma del borde
  inferior, y conserva su color.
- El visor y su transparencia: mismo tinte, misma claridad, mismos
  reflejos.
- El pivote circular plateado/metálico a la altura de la sien.
- El ángulo de la toma, el encuadre, el recorte y el fondo.
- La iluminación de estudio, las sombras, los reflejos especulares y
  la microtextura del material.

CAMBIO ÚNICO — LA PIEZA DEL BORDE INFERIOR PASA A NEGRO:
La pieza que hay que cambiar se identifica POR SU UBICACIÓN, no por
su color: es la tira/goma que recorre TODA LA BASE DEL CASCO — el
borde perimetral de abajo, la franja más baja que va por la zona
inferior de la mentonera y sigue por el borde inferior de la calota
hasta el fondo del casco. Esa pieza, y solo esa, pasa a NEGRO:
negro sólido, mismo tipo de acabado de goma que tiene ahora, misma
forma, mismo grosor, misma posición, mismos reflejos de la luz de
estudio sobre ella. Lo único que cambia es su COLOR.

CRÍTICO — NO CONFUNDIR LAS DOS PIEZAS DEL MISMO COLOR:
En este casco hay DOS PIEZAS DISTINTAS QUE SON DEL MISMO COLOR AZUL
MARINO:
  (1) el CONTORNO DE LA ABERTURA DEL VISOR, arriba, rodeando el
      hueco del visor;
  (2) la GOMA DEL BORDE INFERIOR, abajo, recorriendo la base del
      casco.
SOLO LA DE ABAJO CAMBIA A NEGRO. El contorno del visor CONSERVA SU
COLOR AZUL MARINO, intacto, exactamente como está en la imagen
adjunta. PROHIBIDO pintar de negro todo lo que hoy es azul marino.
PROHIBIDO tratar el azul marino como un color a reemplazar en la
imagen: el cambio es de una PIEZA concreta ubicada en la base del
casco, no de un color. Ojo especial acá: el azul marino y el negro
son colores oscuros y parecidos, así que el contorno del visor tiene
que seguir leyéndose claramente como AZUL, distinguible del negro
nuevo de la goma de abajo. Antes de entregar, mirá el marco del visor
y confirmá que sigue azul marino y no viró a negro.

COBERTURA COMPLETA DEL CAMBIO:
La goma de abajo pasa a negro EN TODO SU RECORRIDO, de punta a punta,
sin dejar NINGÚN tramo, isla ni segmento con el color azul marino
viejo — ni en la parte delantera baja de la mentonera, ni en el tramo
central, ni en la parte trasera del borde inferior. El negro tiene
que ser continuo y uniforme a lo largo de toda la pieza. Las ÚNICAS
excepciones que conservan el azul marino son las dos ya nombradas: el
contorno de la abertura del visor y el inserto rectangular de la
mentonera. Ninguna otra.

PROHIBIDO ABSOLUTO:
- Prohibido pintar de negro el contorno de la abertura del visor.
- Prohibido pintar de negro el inserto rectangular de la mentonera.
- Prohibido oscurecer el azul marino del contorno del visor "para que
  combine" con el negro nuevo: queda igual de azul que en la imagen
  adjunta.
- Prohibido cambiar el color de la calota blanca.
- Prohibido oscurecer, tintar o alterar el visor.
- Prohibido redibujar, simplificar o reinterpretar ninguna zona de la
  imagen: no se rehace nada, solo se cambia un color.
- Prohibido agregar o quitar gráficos, logos, texto o piezas.
- Prohibido cambiar forma, tamaño o posición de ningún componente.
- Prohibido cambiar el ángulo, el encuadre, el fondo o la iluminación.

VERIFICACIÓN FINAL — compará tu resultado contra la imagen adjunta y
respondé estos tres chequeos antes de entregar:
1. ¿La goma del borde inferior quedó NEGRA en TODO su recorrido, de
   punta a punta, sin ningún tramo azul marino?
2. ¿El contorno de la abertura del visor CONSERVA su color azul
   marino original, intacto y claramente distinguible del negro?
3. ¿Cambió ALGO MÁS en la imagen? La única diferencia perceptible
   tiene que ser el color de la goma del borde inferior. Si hay
   cualquier otra diferencia, corregila.
```

</details>

---

## 5. Bloque OPCIONAL — limpieza de artefactos de captura (decisión abierta)

🟡 **DECISIÓN ABIERTA — el usuario NO pidió esto.** No pidió sacar el título "VARIANTES DE COLOR", ni las líneas violetas, ni la línea punteada, ni el avatar "J", ni la banda negra, ni las miniaturas. Son claramente artefactos de la captura de pantalla y no del producto, pero **limpiarlos sin que lo pida es hacer de más**.

**Evidencia (que no es confirmación):** en pedidos inmediatamente anteriores el usuario **sí pidió** quitar artefactos equivalentes — una línea punteada de maquetación (`simulacion-31-casco-bob-esponja-visor-transparente.md`) y un sticker "DOT" (`simulacion-30-edge-racing-livery.md`, Colorway 2). O sea que hay evidencia de que le molestan, pero **es evidencia, no confirmación para este caso**. Preguntar antes de aplicar.

Este bloque es **Tipo D — Limpieza de producto**. Aplica la lección ya registrada de que **un borrado son DOS tareas** (eliminar sin dejar resto **+** reconstruir lo que va debajo), y el ítem del Tipo D sobre guías de maquetación, que exige nombrar qué se saca **y** declarar qué se queda.

<details><summary><b>OPCIONAL — Bloque para pegar al final de cualquiera de los dos prompts, si el usuario lo confirma</b></summary>

```
SEGUNDA TAREA — LIMPIEZA DE ARTEFACTOS DE LA CAPTURA DE PANTALLA:
La imagen adjunta es una captura de pantalla de un archivo de diseño,
así que tiene elementos que NO son parte del producto ni de la foto.
Hay que eliminarlos y dejar solo el casco sobre fondo limpio.

QUÉ SE ELIMINA (nombrado uno por uno):
- El título "VARIANTES DE COLOR" y la barra roja que tiene arriba.
- Las líneas horizontales violeta/púrpura de arriba y de abajo de la
  lámina.
- La línea vertical punteada que cruza el casco.
- El círculo gris con la letra "J" (avatar de comentario).
- La banda negra de la parte baja de la imagen y la tira de
  miniaturas que hay al pie.
- El borde del tercer casco que asoma por el costado derecho.

QUÉ SE QUEDA (declarado explícitamente para que no se saque de más):
- El casco completo, con todas sus piezas.
- El fondo liso de la lámina, con su color y su degradé si lo tiene.
- Las sombras y los reflejos propios del casco sobre el fondo.

UN BORRADO SON DOS TAREAS, NO UNA — hacé las dos:
1. ELIMINAR sin dejar resto: ni borde, ni contorno, ni ranura, ni
   halo, ni sombra, ni silueta tenue de lo eliminado. Cero rastros.
2. RECONSTRUIR lo que va DEBAJO de cada elemento eliminado. Esto es
   lo que se saltea siempre. Tramo por tramo:
   - Donde el elemento cruzaba el FONDO, el fondo se completa liso y
     continuo, con el mismo color, el mismo degradé y la misma
     iluminación que el fondo vecino, sin costura visible.
   - Donde la línea punteada cruzaba la CALOTA del casco, la calota
     se completa con su color, su curvatura, su reflejo especular y
     su microtextura, exactamente como continúa a los dos lados de
     la línea.
   - Donde cruzaba el VISOR, el visor se completa transparente y
     liso, con su mismo tinte y su mismo reflejo — nunca un parche
     opaco ni difuminado.
   - Donde cruzaba cualquier otra pieza (contorno del visor, goma
     del borde inferior, pivote), esa pieza se completa con su
     color, su forma y su acabado propios, continua de un lado al
     otro del borrado.
   Continuidad exigida trazo por trazo: una línea o un borde que
   entra por un lado del área borrada tiene que salir por el otro
   alineado y con el mismo grosor.

COBERTURA COMPLETA DEL BORRADO: de punta a punta. La línea punteada
se elimina en TODO su largo, no solo en el tramo sobre el fondo. Las
líneas violetas se eliminan enteras. No puede quedar ningún segmento
de ningún artefacto en ninguna parte de la imagen.

VERIFICACIÓN FINAL DE ESTA SEGUNDA TAREA:
4. ¿Desapareció cada uno de los artefactos listados, entero y sin
   dejar resto, borde, halo ni sombra?
5. ¿La superficie que estaba debajo de cada uno quedó reconstruida y
   continua, sin parches planos, sin costura y sin zonas borroneadas?
6. ¿El casco y el fondo quedaron intactos, sin haber perdido ninguna
   pieza ni ningún reflejo?
```

</details>

---

## 6. Qué hay que hacer

1. **Correr los 2 prompts v2**, cada uno en una **sesión aislada** de la herramienta, y mandar los resultados para auditoría.
2. **Confirmar con el usuario la decisión del inserto rectangular de la mentonera** (sección 3.3) — hoy queda de su color; si dice lo contrario, es un cambio de una línea en cada prompt.
3. **Confirmar con el usuario si quiere la limpieza de artefactos de captura** (sección 5) — hay evidencia de pedidos anteriores, pero no confirmación para este caso.
4. **Auditar contra los 3 chequeos de la VERIFICACIÓN FINAL**, con foco en el chequeo 2 (el contorno del visor conserva su color) — es el modo de falla más probable de este caso.
5. **Subir la captura de referencia** como adjunto para versionarla.

---

## Historial

- **v2 (2026-07-29)** — prompts reescritos como **edición puntual** (antes eran de regeneración, *"Genera una imagen del mismo casco..."*, que vuelve a poner en juego toda la geometría en cada corrida). Se agregó el bloque `CRÍTICO — NO CONFUNDIR LAS DOS PIEZAS DEL MISMO COLOR`, el bloque de `COBERTURA COMPLETA DEL CAMBIO`, la `VERIFICACIÓN FINAL` de 3 chequeos, la resolución explícita del inserto de la mentonera y el bloque opcional de limpieza de artefactos. Se refinó además la descripción de la imagen: lo que la v1 llamaba *"pieza de ventilación con forma hexagonal cerca de la sien"* es, con la captura mejor descrita, el **inserto rectangular de la zona baja de la mentonera** más el **pivote circular plateado** de la sien.
- **v1 (2026-07-28)** — primer registro del caso, primer molde de casco retro/redondo del catálogo, armado antes de que la regla de negocio de la sección 9 estuviera formalizada.

---

**Última actualización:** 2026-07-29 · prompts v2 de edición puntual para los 2 colorways, con bloque de desambiguación de las dos piezas del mismo color (contorno del visor vs. goma del borde inferior) — el modo de falla central de este caso — más decisión razonada sobre el inserto de la mentonera y bloque opcional de limpieza de artefactos, ambos marcados como pendientes de confirmación del usuario.
