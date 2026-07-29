# Simulación 35 — Casco modular / flip up negro mate: 4 colorways (calota + elementos + goma negra) (Tipo A, cambio de color sobre molde real)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

## Estado general del caso

🔴 **Pendientes de generar (los 4 colorways).** Los 4 prompts están listos para copiar/pegar en Nano Banana Pro, **uno por sesión aislada**. Hay **2 decisiones tomadas y pendientes de confirmación del usuario** (sección 3): la lista cerrada de qué cuenta como "los elementos del casco" y el visor de los colorways 3 y 4.

| # | Colorway | Calota | Elementos | Goma del borde inferior | Visor | Estado |
|---|---|---|---|---|---|---|
| 1 | Celeste pastel / azul oscuro | **Celeste muy claro, pastel** | **Azul oscuro** | **NEGRA** | **Azul oscuro** (tintado) | 🔴 pendiente de generar |
| 2 | Gris ratón / rojo | **Gris ratón** (gris medio neutro) | **Rojo** | **NEGRA** | Transparente (como la referencia) | 🔴 pendiente de generar |
| 3 | Beige / chocolate | **Beige claro** | **Chocolate** (marrón oscuro) | **NEGRA** | Transparente (🟡 asumido, sección 3.2) | 🔴 pendiente de generar |
| 4 | Blanco / negro | **Blanco** | **Negro** | **NEGRA** | Transparente (🟡 asumido, sección 3.2) | 🔴 pendiente de generar |

---

## 1. Imagen de partida

**Foto de producto de catálogo** de un casco **integral MODULAR / FLIP UP** (la mentonera es abatible: se ve la línea de separación y el mecanismo). Vista de **3/4 delantero**, mirando hacia la izquierda del encuadre.

**Lo que SÍ es el producto:**
- **Calota: NEGRO MATE uniforme.** Sin gráficos, sin logos, sin texto, sin franjas, sin degradés. Completamente lisa.
- **Visor principal transparente / incoloro**, bajado, con un leve reflejo de estudio. A través de él se ve el interior del casco, incluido un **detalle rojo del acolchado**.
- **Placa del mecanismo de pivote lateral** del visor: oscura, con tornillos y piezas visibles.
- **Deslizador de ventilación** al lado de esa placa.
- **Extractor de ventilación superior** en la parte alta de la calota, con listones.
- **Toma de aire central de la mentonera.**
- **Palanca / botón de apertura del sistema flip up**, en la parte baja delantera.
- **Panel lateral trasero** oscuro, ligeramente más brillante que el mate de la calota.
- **Goma negra perimetral** en el borde inferior.

**Artefactos de maquetación — NO son parte del producto y no deben aparecer en ningún resultado:**
- Formas diagonales decorativas de fondo.
- Texto rosa / magenta cortado en la parte de arriba.
- Barras negras y la palabra **"HOMOLOGACÓN"** (sic, sin la I) que asoman abajo a la derecha, pertenecientes a otra pieza del catálogo.

> 🔤 Nota cruzada: esa falta de ortografía **"HOMOLOGACÓN"** es la misma ya detectada como error de la **pieza original del cliente** en el caso Hero (`simulacion-12-hero-verificacion.md`) — no es un error del generador, y está pendiente de corregir en el template maestro del catálogo. Acá no hay que corregirla: hay que **eliminar el artefacto entero**, no arreglarle la ortografía.

---

## 2. Qué cambia y qué no

Pedido del usuario: los 4 colorways son **el mismo molde, el mismo ángulo, el mismo encuadre, el mismo fondo y el mismo tratamiento fotográfico**. Lo único que cambia es el color de las superficies. El usuario cerró el pedido con **"que el casco no se vea alterado o dañado"** — o sea que la **integridad del molde es un requisito explícito**, no implícito, y por eso cada prompt lleva un bloque propio de integridad con esas palabras.

Y sobre la goma, textual: **"la parte de abajo, la que no puede variar, la goma, en negro; eso en todos"** — que es la [regla de negocio de la sección 9 de `orquestacion-agentes-paralelos.md`](../orquestacion-agentes-paralelos.md#9-regla-de-negocio--goma-del-borde-inferior-siempre-negro), confirmada por el comentario del equipo ("jimgarzons"), repetida acá explícitamente por el usuario.

---

## 3. Decisiones tomadas — pendientes de confirmar

### 3.1 Qué cuenta como "los elementos del casco" — LISTA CERRADA

🟡 **PENDIENTE DE CONFIRMACIÓN DEL USUARIO.** El usuario pidió "los elementos" en un color distinto al de la calota, pero **nunca los enumeró**. Se define acá una **lista cerrada y explícita de 6 piezas**, y se usa **exactamente la misma lista en los 4 prompts**:

1. **La placa del mecanismo de pivote lateral del visor** (con sus tornillos y piezas visibles).
2. **El deslizador de ventilación** que está al lado de esa placa.
3. **El extractor de ventilación de la parte alta de la calota**, con sus listones.
4. **La toma de aire central de la mentonera.**
5. **La palanca / botón de apertura del sistema flip up**, en la parte baja delantera de la mentonera.
6. **El panel lateral trasero** (la pieza oscura ligeramente más brillante que el mate de la calota).

**Por qué cerrada y por qué la misma en los 4:** sin una lista cerrada, cada corrida del generador va a pintar un conjunto distinto de piezas y los 4 resultados **no van a ser una familia** — van a ser 4 cascos parecidos con repartos de color diferentes, que es exactamente lo que no sirve para un catálogo de colorways. Con la lista cerrada, la única variable entre colorways son los dos colores.

**Lo que NO es un "elemento":**
- ❌ **La goma del borde inferior.** Es **su propia categoría**, separada de la calota y separada de los elementos, y **siempre va NEGRA** (sección 3.3).
- ❌ **El visor.** Tiene su propia regla por colorway (sección 3.2).
- ❌ **El acolchado interior con el detalle rojo** que se ve a través del visor: queda como está, no se toca.

**Si el usuario corrige la lista** — es un cambio mecánico: se edita la enumeración del bloque `2. LOS ELEMENTOS DEL CASCO` en los 4 prompts (y el chequeo 2 de la `VERIFICACIÓN FINAL`), **siempre en los 4 a la vez**, nunca en uno solo. Es la aplicación directa del ítem del checklist Tipo A sobre **propagación inmediata de toda regla nueva a todas las vistas y colorways del mismo caso**.

### 3.2 El visor de los colorways 3 y 4 — asunción explícita

🟡 **PENDIENTE DE CONFIRMACIÓN DEL USUARIO.** El usuario especificó el visor solo en dos de los cuatro:

- **Colorway 1:** visor **azul oscuro tintado** — pedido explícito.
- **Colorway 2:** visor **normal**, transparente igual que la referencia — pedido explícito.
- **Colorways 3 y 4:** **no especificado**.

**Posición tomada: en los colorways 3 y 4 el visor queda TRANSPARENTE / normal**, igual que la referencia y que el colorway 2. Es la **lectura conservadora**: el único colorway donde el usuario pidió un visor de color fue el 1, así que el default del molde (transparente) se mantiene salvo pedido explícito. Tintar un visor que nadie pidió sería hacer de más, y encima abre la puerta a que el generador altere lo que se ve a través del visor.

**Si el usuario dice lo contrario**, es un cambio de una línea en el prompt afectado: mover el visor del bloque `TODO ESTO NO SE TOCA` al bloque de color, y ajustar el chequeo 4 de la `VERIFICACIÓN FINAL`.

### 3.3 La goma del borde inferior queda NEGRA en los 4 — no es opcional

Aplica la [regla de negocio de la sección 9](../orquestacion-agentes-paralelos.md#9-regla-de-negocio--goma-del-borde-inferior-siempre-negro), reconfirmada por el propio usuario en este pedido. En los 4 colorways la goma perimetral del borde inferior **se queda negra**, cualquiera sea el color de la calota y de los elementos.

**El colorway 1 es el caso delicado.** Su calota es **celeste pastel** y sus elementos son **azul oscuro**: el azul oscuro y el negro son dos colores oscuros y parecidos, así que hay dos riesgos a la vez —
1. que el generador pinte la goma de **azul oscuro** creyendo que es "un elemento más";
2. que, si la pinta bien de negro, los elementos azul oscuro se le "vayan" a negro para combinar y el colorway pierda su contraste.

Por eso el prompt del colorway 1 lleva un **aviso extra** dentro del bloque crítico de la goma, que separa las dos piezas y exige que el azul oscuro de los elementos siga **claramente distinguible** del negro de la goma. Es el mismo refuerzo que ya pide el checklist Tipo A para el par azul marino → negro de la Simulación 26.

### 3.4 El riesgo central de este caso — el molde de partida es MONOCROMO

En la Simulación 26 el modo de falla era que **dos piezas compartían color** y solo una cambiaba, así que nombrar el color seleccionaba las dos. Acá el mismo riesgo aparece **agravado al máximo**: el casco de partida es **negro mate entero**, o sea que **todas** sus piezas comparten el color de origen. No existe ninguna pieza que se pueda seleccionar diciendo "lo que hoy es X", porque hoy todo es lo mismo.

Consecuencia práctica, que es lo que estructura los 4 prompts: **cada categoría se declara por UBICACIÓN y FUNCIÓN, nunca por el color que tiene hoy.** Y como el color de partida no sirve para separar nada, la separación tiene que venir entera de la **lista cerrada de piezas** de la sección 3.1 — de ahí que la lista no sea un detalle de redacción sino el mecanismo central del caso.

### 3.5 Cobertura completa

Cada categoría cambia **en toda su extensión**, sin islas del color viejo: la calota entera (frente, laterales, parte alta, trasera, mentonera móvil), los 6 elementos completos uno por uno, y la goma en todo su recorrido perimetral. Es la lección ya registrada del **recoloreo parcial** (`simulacion-30-edge-racing-livery.md`, Colorway 2 vista lateral, Intento 3→4): con el dibujo perfectamente conservado, un grupo de barras se quedó con el color viejo porque el prompt describía la zona de forma global y no exigía cobertura total.

### 3.6 Sesión aislada por prompt

⚠️ **Cada uno de los 4 prompts se corre en una SESIÓN AISLADA** de la herramienta de generación. Es el hallazgo de **contaminación cruzada** del caso Vortex (`simulacion-11-vortex-verificacion.md`), ya en el checklist Tipo A: con un prompt confirmado correcto, el generador sustituyó un ítem por el del caso inmediatamente anterior corrido en la misma sesión. Acá el riesgo es directo y evidente: 4 colorways del mismo molde uno detrás del otro en el mismo hilo es la receta exacta para que el colorway 3 salga con el azul del 1.

---

## 4. Prompts — uno por colorway

<details><summary><b>Prompt Colorway 1 — Calota celeste pastel + elementos azul oscuro + visor azul oscuro (goma NEGRA)</b></summary>

```
Esto es un CAMBIO DE COLOR sobre un MOLDE REAL, no un rediseño ni un
casco nuevo. La foto de producto adjunta es la ÚNICA AUTORIDAD DE
FORMA: el casco que devuelvas tiene que ser exactamente el mismo
objeto físico de la foto, en el mismo ángulo, con las mismas piezas,
solo pintado de otro color. Sigue siendo la misma fotografía de
producto de catálogo.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ:
- La forma y la silueta del molde: casco integral MODULAR / FLIP UP,
  con la mentonera abatible. Mismo objeto 3D exacto, mismas
  proporciones, misma curvatura de calota.
- La línea de separación de la mentonera abatible y todo el mecanismo
  del sistema flip up: mismo trazado, mismas piezas, misma posición.
- La geometría de TODAS las piezas: placa del pivote lateral con sus
  tornillos, deslizador de ventilación, extractor superior con sus
  listones, toma de aire de la mentonera, palanca de apertura del flip
  up, panel lateral trasero, borde inferior. Ninguna cambia de forma,
  de tamaño ni de posición.
- El ángulo de la toma (3/4 delantero, mirando a la izquierda del
  encuadre), el encuadre y el recorte.
- El fondo y la iluminación de estudio, con sus sombras suaves.
- Los reflejos especulares sobre las superficies curvas y la
  microtextura de la pintura. El acabado sigue siendo el mismo tipo
  de acabado que tiene la foto.
- El acolchado interior que se ve a través del visor, incluido su
  detalle rojo: queda como está.

COLOR — TRES CATEGORÍAS SEPARADAS Y DISTINTAS. Cada una se identifica
POR SU UBICACIÓN Y SU FUNCIÓN, nunca por el color que tiene hoy: en la
foto adjunta el casco es NEGRO ENTERO, así que TODAS las piezas
comparten el color de partida y el color de origen NO SIRVE para
distinguir ninguna. Leé las tres categorías como tres grupos de piezas
concretas:

1. LA CALOTA — la superficie grande y lisa del cuerpo del casco: la
   parte alta, los laterales, la zona trasera y la superficie de la
   mentonera abatible. Pasa a CELESTE MUY CLARO, PASTEL: un celeste
   suave, claro, poco saturado.

2. LOS ELEMENTOS DEL CASCO — son EXACTAMENTE ESTAS SEIS PIEZAS, ni
   una más ni una menos. Todas pasan a AZUL OSCURO:
   a) la placa del mecanismo de pivote lateral del visor, con sus
      tornillos y piezas visibles;
   b) el deslizador de ventilación que está al lado de esa placa;
   c) el extractor de ventilación de la parte alta de la calota, con
      sus listones;
   d) la toma de aire central de la mentonera;
   e) la palanca / botón de apertura del sistema flip up, en la parte
      baja delantera de la mentonera;
   f) el panel lateral trasero.

3. LA GOMA DEL BORDE INFERIOR — la tira perimetral de goma que
   recorre TODA LA BASE DEL CASCO, la franja más baja, que va por la
   zona inferior de la mentonera y sigue por el borde inferior de la
   calota hasta el fondo del casco. QUEDA NEGRA.

EL VISOR: pasa a AZUL OSCURO TINTADO. Sigue siendo un visor de
policarbonato: semitransparente, se sigue viendo a través de él el
interior del casco y el detalle rojo del acolchado, con su mismo
reflejo de estudio. No es un panel opaco.

CRÍTICO — LA GOMA DEL BORDE INFERIOR QUEDA NEGRA:
La tira de goma de la base del casco NO se pinta de celeste NI de azul
oscuro. Queda NEGRA, negro sólido, con el mismo acabado de goma que
tiene ahora, la misma forma, el mismo grosor y la misma posición.
OJO ESPECIAL EN ESTE COLORWAY: los elementos del casco van AZUL
OSCURO y la goma va NEGRA — son DOS PIEZAS DISTINTAS Y DOS COLORES
DISTINTOS. El azul oscuro y el negro se parecen, así que:
- la goma de abajo NO es azul oscuro: es negra;
- y los elementos de la lista NO se oscurecen hasta parecer negros
  "para que combinen": tienen que seguir leyéndose claramente como
  AZUL, distinguibles del negro de la goma.
Antes de entregar, mirá la base del casco y confirmá que la goma es
negra y no azul.

COBERTURA COMPLETA:
Cada categoría cambia EN TODA SU EXTENSIÓN, sin dejar ninguna isla,
ningún tramo ni ningún parche con el negro viejo:
- La calota queda celeste pastel en TODA su superficie: frente,
  laterales, parte alta, zona trasera y mentonera abatible.
- Los SEIS elementos de la lista quedan azul oscuro, TODOS, cada uno
  completo. Ninguno se queda negro. Recorré la lista de la a) a la f)
  y confirmá uno por uno.
- La goma queda negra en TODO su recorrido perimetral, de punta a
  punta.

LIMPIEZA DE ARTEFACTOS DE MAQUETACIÓN:
La imagen adjunta es un archivo de maquetación de catálogo, así que
trae elementos que NO son parte del producto ni de la foto y que NO
deben aparecer en el resultado:
- las formas diagonales decorativas del fondo;
- el texto rosa / magenta cortado de la parte de arriba;
- las barras negras y la palabra "HOMOLOGACÓN" que asoman abajo a la
  derecha, que pertenecen a otra pieza del catálogo.
Nada de eso es del casco. El resultado es la foto del casco solo,
sobre un fondo limpio y liso de estudio, con la sombra propia del
casco. No los corrijas ni los rediseñes: no aparecen.

INTEGRIDAD DEL CASCO — EL CASCO NO SE VE ALTERADO NI DAÑADO:
El casco no puede verse alterado, deformado, rayado ni dañado.
Ninguna pieza se agranda, se achica, se mueve ni desaparece. No se
inventa ninguna pieza nueva. Es el mismo casco entero y sano de la
foto, con otro color de pintura.

PROHIBIDO ABSOLUTO:
- Prohibido pintar la goma del borde inferior de celeste o de azul.
- Prohibido pintar de azul oscuro alguna pieza que no esté en la
  lista de los seis elementos.
- Prohibido dejar cualquier pieza con el negro viejo salvo la goma
  del borde inferior.
- Prohibido cambiar la forma, el tamaño, el perfil o la posición de
  cualquier pieza.
- Prohibido agregar o quitar piezas, ventilaciones, aletas o
  salientes que no estén en la foto.
- Prohibido agregar gráficos, logos, texto, franjas, degradés o
  adornos de cualquier tipo: la calota es lisa y de un solo color.
- Prohibido cambiar el ángulo, el encuadre, el fondo o la
  iluminación.
- Prohibido dejar cualquier artefacto de maquetación en la imagen.

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. ¿La calota quedó CELESTE PASTEL en toda su superficie, sin ningún
   tramo negro?
2. ¿Los SEIS elementos de la lista quedaron TODOS azul oscuro, y
   ninguno se quedó del color viejo?
3. ¿La goma del borde inferior quedó NEGRA en todo su recorrido, y no
   azul oscuro?
4. ¿El visor quedó azul oscuro tintado y semitransparente, dejando
   ver el interior del casco?
5. ¿Cambió ALGO de la forma del casco — silueta, proporciones,
   posición o tamaño de alguna pieza? No debe haber cambiado nada.
6. ¿Quedó algún artefacto de maquetación (diagonales, texto rosa,
   barras negras, "HOMOLOGACÓN")? No debe quedar ninguno.
```

</details>

<details><summary><b>Prompt Colorway 2 — Calota gris ratón + elementos rojos + visor normal (goma NEGRA)</b></summary>

```
Esto es un CAMBIO DE COLOR sobre un MOLDE REAL, no un rediseño ni un
casco nuevo. La foto de producto adjunta es la ÚNICA AUTORIDAD DE
FORMA: el casco que devuelvas tiene que ser exactamente el mismo
objeto físico de la foto, en el mismo ángulo, con las mismas piezas,
solo pintado de otro color. Sigue siendo la misma fotografía de
producto de catálogo.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ:
- La forma y la silueta del molde: casco integral MODULAR / FLIP UP,
  con la mentonera abatible. Mismo objeto 3D exacto, mismas
  proporciones, misma curvatura de calota.
- La línea de separación de la mentonera abatible y todo el mecanismo
  del sistema flip up: mismo trazado, mismas piezas, misma posición.
- La geometría de TODAS las piezas: placa del pivote lateral con sus
  tornillos, deslizador de ventilación, extractor superior con sus
  listones, toma de aire de la mentonera, palanca de apertura del flip
  up, panel lateral trasero, borde inferior. Ninguna cambia de forma,
  de tamaño ni de posición.
- EL VISOR: queda TRANSPARENTE / INCOLORO, exactamente como en la
  foto adjunta, bajado, con su mismo leve reflejo de estudio y
  dejando ver el interior del casco. NO se tinta en esta variante.
- El ángulo de la toma (3/4 delantero, mirando a la izquierda del
  encuadre), el encuadre y el recorte.
- El fondo y la iluminación de estudio, con sus sombras suaves.
- Los reflejos especulares sobre las superficies curvas y la
  microtextura de la pintura. El acabado sigue siendo el mismo tipo
  de acabado que tiene la foto.
- El acolchado interior que se ve a través del visor, incluido su
  detalle rojo: queda como está.

COLOR — TRES CATEGORÍAS SEPARADAS Y DISTINTAS. Cada una se identifica
POR SU UBICACIÓN Y SU FUNCIÓN, nunca por el color que tiene hoy: en la
foto adjunta el casco es NEGRO ENTERO, así que TODAS las piezas
comparten el color de partida y el color de origen NO SIRVE para
distinguir ninguna. Leé las tres categorías como tres grupos de piezas
concretas:

1. LA CALOTA — la superficie grande y lisa del cuerpo del casco: la
   parte alta, los laterales, la zona trasera y la superficie de la
   mentonera abatible. Pasa a GRIS RATÓN: un gris medio neutro, ni
   claro ni oscuro, sin tinte de color.

2. LOS ELEMENTOS DEL CASCO — son EXACTAMENTE ESTAS SEIS PIEZAS, ni
   una más ni una menos. Todas pasan a ROJO:
   a) la placa del mecanismo de pivote lateral del visor, con sus
      tornillos y piezas visibles;
   b) el deslizador de ventilación que está al lado de esa placa;
   c) el extractor de ventilación de la parte alta de la calota, con
      sus listones;
   d) la toma de aire central de la mentonera;
   e) la palanca / botón de apertura del sistema flip up, en la parte
      baja delantera de la mentonera;
   f) el panel lateral trasero.

3. LA GOMA DEL BORDE INFERIOR — la tira perimetral de goma que
   recorre TODA LA BASE DEL CASCO, la franja más baja, que va por la
   zona inferior de la mentonera y sigue por el borde inferior de la
   calota hasta el fondo del casco. QUEDA NEGRA.

CRÍTICO — LA GOMA DEL BORDE INFERIOR QUEDA NEGRA:
La tira de goma de la base del casco NO se pinta de gris NI de rojo.
Queda NEGRA, negro sólido, con el mismo acabado de goma que tiene
ahora, la misma forma, el mismo grosor y la misma posición. Es una
pieza propia, distinta de la calota y distinta de los seis elementos:
no es "un elemento más". Antes de entregar, mirá la base del casco y
confirmá que la goma es negra.

COBERTURA COMPLETA:
Cada categoría cambia EN TODA SU EXTENSIÓN, sin dejar ninguna isla,
ningún tramo ni ningún parche con el negro viejo:
- La calota queda gris ratón en TODA su superficie: frente,
  laterales, parte alta, zona trasera y mentonera abatible.
- Los SEIS elementos de la lista quedan rojos, TODOS, cada uno
  completo. Ninguno se queda negro. Recorré la lista de la a) a la f)
  y confirmá uno por uno.
- La goma queda negra en TODO su recorrido perimetral, de punta a
  punta.

LIMPIEZA DE ARTEFACTOS DE MAQUETACIÓN:
La imagen adjunta es un archivo de maquetación de catálogo, así que
trae elementos que NO son parte del producto ni de la foto y que NO
deben aparecer en el resultado:
- las formas diagonales decorativas del fondo;
- el texto rosa / magenta cortado de la parte de arriba;
- las barras negras y la palabra "HOMOLOGACÓN" que asoman abajo a la
  derecha, que pertenecen a otra pieza del catálogo.
Nada de eso es del casco. El resultado es la foto del casco solo,
sobre un fondo limpio y liso de estudio, con la sombra propia del
casco. No los corrijas ni los rediseñes: no aparecen.

INTEGRIDAD DEL CASCO — EL CASCO NO SE VE ALTERADO NI DAÑADO:
El casco no puede verse alterado, deformado, rayado ni dañado.
Ninguna pieza se agranda, se achica, se mueve ni desaparece. No se
inventa ninguna pieza nueva. Es el mismo casco entero y sano de la
foto, con otro color de pintura.

PROHIBIDO ABSOLUTO:
- Prohibido pintar la goma del borde inferior de gris o de rojo.
- Prohibido pintar de rojo alguna pieza que no esté en la lista de
  los seis elementos.
- Prohibido tintar, oscurecer o colorear el visor: queda
  transparente e incoloro como en la foto.
- Prohibido dejar cualquier pieza con el negro viejo salvo la goma
  del borde inferior.
- Prohibido cambiar la forma, el tamaño, el perfil o la posición de
  cualquier pieza.
- Prohibido agregar o quitar piezas, ventilaciones, aletas o
  salientes que no estén en la foto.
- Prohibido agregar gráficos, logos, texto, franjas, degradés o
  adornos de cualquier tipo: la calota es lisa y de un solo color.
- Prohibido cambiar el ángulo, el encuadre, el fondo o la
  iluminación.
- Prohibido dejar cualquier artefacto de maquetación en la imagen.

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. ¿La calota quedó GRIS RATÓN en toda su superficie, sin ningún
   tramo negro?
2. ¿Los SEIS elementos de la lista quedaron TODOS rojos, y ninguno se
   quedó del color viejo?
3. ¿La goma del borde inferior quedó NEGRA en todo su recorrido?
4. ¿El visor quedó transparente e incoloro, igual que en la foto
   adjunta, sin tinte de ningún color?
5. ¿Cambió ALGO de la forma del casco — silueta, proporciones,
   posición o tamaño de alguna pieza? No debe haber cambiado nada.
6. ¿Quedó algún artefacto de maquetación (diagonales, texto rosa,
   barras negras, "HOMOLOGACÓN")? No debe quedar ninguno.
```

</details>

<details><summary><b>Prompt Colorway 3 — Calota beige claro + elementos chocolate + visor normal (goma NEGRA)</b></summary>

```
Esto es un CAMBIO DE COLOR sobre un MOLDE REAL, no un rediseño ni un
casco nuevo. La foto de producto adjunta es la ÚNICA AUTORIDAD DE
FORMA: el casco que devuelvas tiene que ser exactamente el mismo
objeto físico de la foto, en el mismo ángulo, con las mismas piezas,
solo pintado de otro color. Sigue siendo la misma fotografía de
producto de catálogo.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ:
- La forma y la silueta del molde: casco integral MODULAR / FLIP UP,
  con la mentonera abatible. Mismo objeto 3D exacto, mismas
  proporciones, misma curvatura de calota.
- La línea de separación de la mentonera abatible y todo el mecanismo
  del sistema flip up: mismo trazado, mismas piezas, misma posición.
- La geometría de TODAS las piezas: placa del pivote lateral con sus
  tornillos, deslizador de ventilación, extractor superior con sus
  listones, toma de aire de la mentonera, palanca de apertura del flip
  up, panel lateral trasero, borde inferior. Ninguna cambia de forma,
  de tamaño ni de posición.
- EL VISOR: queda TRANSPARENTE / INCOLORO, exactamente como en la
  foto adjunta, bajado, con su mismo leve reflejo de estudio y
  dejando ver el interior del casco. NO se tinta en esta variante.
- El ángulo de la toma (3/4 delantero, mirando a la izquierda del
  encuadre), el encuadre y el recorte.
- El fondo y la iluminación de estudio, con sus sombras suaves.
- Los reflejos especulares sobre las superficies curvas y la
  microtextura de la pintura. El acabado sigue siendo el mismo tipo
  de acabado que tiene la foto.
- El acolchado interior que se ve a través del visor, incluido su
  detalle rojo: queda como está.

COLOR — TRES CATEGORÍAS SEPARADAS Y DISTINTAS. Cada una se identifica
POR SU UBICACIÓN Y SU FUNCIÓN, nunca por el color que tiene hoy: en la
foto adjunta el casco es NEGRO ENTERO, así que TODAS las piezas
comparten el color de partida y el color de origen NO SIRVE para
distinguir ninguna. Leé las tres categorías como tres grupos de piezas
concretas:

1. LA CALOTA — la superficie grande y lisa del cuerpo del casco: la
   parte alta, los laterales, la zona trasera y la superficie de la
   mentonera abatible. Pasa a BEIGE CLARO: un beige arena suave,
   claro, poco saturado.

2. LOS ELEMENTOS DEL CASCO — son EXACTAMENTE ESTAS SEIS PIEZAS, ni
   una más ni una menos. Todas pasan a CHOCOLATE (marrón oscuro):
   a) la placa del mecanismo de pivote lateral del visor, con sus
      tornillos y piezas visibles;
   b) el deslizador de ventilación que está al lado de esa placa;
   c) el extractor de ventilación de la parte alta de la calota, con
      sus listones;
   d) la toma de aire central de la mentonera;
   e) la palanca / botón de apertura del sistema flip up, en la parte
      baja delantera de la mentonera;
   f) el panel lateral trasero.

3. LA GOMA DEL BORDE INFERIOR — la tira perimetral de goma que
   recorre TODA LA BASE DEL CASCO, la franja más baja, que va por la
   zona inferior de la mentonera y sigue por el borde inferior de la
   calota hasta el fondo del casco. QUEDA NEGRA.

CRÍTICO — LA GOMA DEL BORDE INFERIOR QUEDA NEGRA:
La tira de goma de la base del casco NO se pinta de beige NI de
chocolate. Queda NEGRA, negro sólido, con el mismo acabado de goma
que tiene ahora, la misma forma, el mismo grosor y la misma posición.
Es una pieza propia, distinta de la calota y distinta de los seis
elementos: no es "un elemento más". Ojo acá: el chocolate es un
marrón oscuro y puede confundirse con el negro, así que la goma tiene
que ser NEGRA de verdad y los elementos tienen que seguir leyéndose
claramente como MARRÓN, distinguibles del negro de la goma. Antes de
entregar, mirá la base del casco y confirmá que la goma es negra y no
marrón.

COBERTURA COMPLETA:
Cada categoría cambia EN TODA SU EXTENSIÓN, sin dejar ninguna isla,
ningún tramo ni ningún parche con el negro viejo:
- La calota queda beige claro en TODA su superficie: frente,
  laterales, parte alta, zona trasera y mentonera abatible.
- Los SEIS elementos de la lista quedan chocolate, TODOS, cada uno
  completo. Ninguno se queda negro. Recorré la lista de la a) a la f)
  y confirmá uno por uno.
- La goma queda negra en TODO su recorrido perimetral, de punta a
  punta.

LIMPIEZA DE ARTEFACTOS DE MAQUETACIÓN:
La imagen adjunta es un archivo de maquetación de catálogo, así que
trae elementos que NO son parte del producto ni de la foto y que NO
deben aparecer en el resultado:
- las formas diagonales decorativas del fondo;
- el texto rosa / magenta cortado de la parte de arriba;
- las barras negras y la palabra "HOMOLOGACÓN" que asoman abajo a la
  derecha, que pertenecen a otra pieza del catálogo.
Nada de eso es del casco. El resultado es la foto del casco solo,
sobre un fondo limpio y liso de estudio, con la sombra propia del
casco. No los corrijas ni los rediseñes: no aparecen.

INTEGRIDAD DEL CASCO — EL CASCO NO SE VE ALTERADO NI DAÑADO:
El casco no puede verse alterado, deformado, rayado ni dañado.
Ninguna pieza se agranda, se achica, se mueve ni desaparece. No se
inventa ninguna pieza nueva. Es el mismo casco entero y sano de la
foto, con otro color de pintura.

PROHIBIDO ABSOLUTO:
- Prohibido pintar la goma del borde inferior de beige o de
  chocolate.
- Prohibido pintar de chocolate alguna pieza que no esté en la lista
  de los seis elementos.
- Prohibido tintar, oscurecer o colorear el visor: queda
  transparente e incoloro como en la foto.
- Prohibido dejar cualquier pieza con el negro viejo salvo la goma
  del borde inferior.
- Prohibido cambiar la forma, el tamaño, el perfil o la posición de
  cualquier pieza.
- Prohibido agregar o quitar piezas, ventilaciones, aletas o
  salientes que no estén en la foto.
- Prohibido agregar gráficos, logos, texto, franjas, degradés o
  adornos de cualquier tipo: la calota es lisa y de un solo color.
- Prohibido cambiar el ángulo, el encuadre, el fondo o la
  iluminación.
- Prohibido dejar cualquier artefacto de maquetación en la imagen.

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. ¿La calota quedó BEIGE CLARO en toda su superficie, sin ningún
   tramo negro?
2. ¿Los SEIS elementos de la lista quedaron TODOS chocolate, y
   ninguno se quedó del color viejo?
3. ¿La goma del borde inferior quedó NEGRA en todo su recorrido, y no
   marrón?
4. ¿El visor quedó transparente e incoloro, igual que en la foto
   adjunta, sin tinte de ningún color?
5. ¿Cambió ALGO de la forma del casco — silueta, proporciones,
   posición o tamaño de alguna pieza? No debe haber cambiado nada.
6. ¿Quedó algún artefacto de maquetación (diagonales, texto rosa,
   barras negras, "HOMOLOGACÓN")? No debe quedar ninguno.
```

</details>

<details><summary><b>Prompt Colorway 4 — Calota blanca + elementos negros + visor normal (goma NEGRA)</b></summary>

```
Esto es un CAMBIO DE COLOR sobre un MOLDE REAL, no un rediseño ni un
casco nuevo. La foto de producto adjunta es la ÚNICA AUTORIDAD DE
FORMA: el casco que devuelvas tiene que ser exactamente el mismo
objeto físico de la foto, en el mismo ángulo, con las mismas piezas,
solo pintado de otro color. Sigue siendo la misma fotografía de
producto de catálogo.

TODO ESTO NO SE TOCA — QUEDA EXACTAMENTE COMO ESTÁ:
- La forma y la silueta del molde: casco integral MODULAR / FLIP UP,
  con la mentonera abatible. Mismo objeto 3D exacto, mismas
  proporciones, misma curvatura de calota.
- La línea de separación de la mentonera abatible y todo el mecanismo
  del sistema flip up: mismo trazado, mismas piezas, misma posición.
- La geometría de TODAS las piezas: placa del pivote lateral con sus
  tornillos, deslizador de ventilación, extractor superior con sus
  listones, toma de aire de la mentonera, palanca de apertura del flip
  up, panel lateral trasero, borde inferior. Ninguna cambia de forma,
  de tamaño ni de posición.
- EL VISOR: queda TRANSPARENTE / INCOLORO, exactamente como en la
  foto adjunta, bajado, con su mismo leve reflejo de estudio y
  dejando ver el interior del casco. NO se tinta en esta variante.
- El ángulo de la toma (3/4 delantero, mirando a la izquierda del
  encuadre), el encuadre y el recorte.
- El fondo y la iluminación de estudio, con sus sombras suaves.
- Los reflejos especulares sobre las superficies curvas y la
  microtextura de la pintura. El acabado sigue siendo el mismo tipo
  de acabado que tiene la foto.
- El acolchado interior que se ve a través del visor, incluido su
  detalle rojo: queda como está.

COLOR — TRES CATEGORÍAS SEPARADAS Y DISTINTAS. Cada una se identifica
POR SU UBICACIÓN Y SU FUNCIÓN, nunca por el color que tiene hoy: en la
foto adjunta el casco es NEGRO ENTERO, así que TODAS las piezas
comparten el color de partida y el color de origen NO SIRVE para
distinguir ninguna. Leé las tres categorías como tres grupos de piezas
concretas:

1. LA CALOTA — la superficie grande y lisa del cuerpo del casco: la
   parte alta, los laterales, la zona trasera y la superficie de la
   mentonera abatible. Pasa a BLANCO: blanco limpio y uniforme.
   ESTA ES LA ÚNICA CATEGORÍA QUE CAMBIA DE COLOR EN ESTE COLORWAY, y
   tiene que cambiar ENTERA.

2. LOS ELEMENTOS DEL CASCO — son EXACTAMENTE ESTAS SEIS PIEZAS, ni
   una más ni una menos. En este colorway quedan NEGRAS, o sea que
   conservan el color que ya tienen en la foto adjunta: no se
   blanquean, no se aclaran, no toman el color de la calota.
   a) la placa del mecanismo de pivote lateral del visor, con sus
      tornillos y piezas visibles;
   b) el deslizador de ventilación que está al lado de esa placa;
   c) el extractor de ventilación de la parte alta de la calota, con
      sus listones;
   d) la toma de aire central de la mentonera;
   e) la palanca / botón de apertura del sistema flip up, en la parte
      baja delantera de la mentonera;
   f) el panel lateral trasero.

3. LA GOMA DEL BORDE INFERIOR — la tira perimetral de goma que
   recorre TODA LA BASE DEL CASCO, la franja más baja, que va por la
   zona inferior de la mentonera y sigue por el borde inferior de la
   calota hasta el fondo del casco. QUEDA NEGRA.

CRÍTICO — LA GOMA DEL BORDE INFERIOR QUEDA NEGRA:
La tira de goma de la base del casco NO se pinta de blanco. Queda
NEGRA, negro sólido, con el mismo acabado de goma que tiene ahora, la
misma forma, el mismo grosor y la misma posición. Es una pieza propia,
distinta de la calota y distinta de los seis elementos: no es "un
elemento más". En este colorway la calota es blanca y todo lo demás es
negro, así que el riesgo es el inverso al de las otras variantes: que
el blanco se "derrame" hacia abajo y se coma la goma. Antes de
entregar, mirá la base del casco y confirmá que la goma sigue negra y
completa, de punta a punta.

COBERTURA COMPLETA:
- La calota queda BLANCA en TODA su superficie: frente, laterales,
  parte alta, zona trasera y mentonera abatible. No puede quedar
  ninguna isla, ningún tramo ni ningún parche negro en la calota.
- Los SEIS elementos de la lista quedan NEGROS, TODOS, cada uno
  completo. Recorré la lista de la a) a la f) y confirmá uno por uno
  que ninguno se blanqueó ni se aclaró.
- La goma queda negra en TODO su recorrido perimetral, de punta a
  punta.
El límite entre el blanco de la calota y el negro de cada pieza tiene
que ser nítido y seguir exactamente el borde físico real de la pieza,
sin desbordes ni degradés.

LIMPIEZA DE ARTEFACTOS DE MAQUETACIÓN:
La imagen adjunta es un archivo de maquetación de catálogo, así que
trae elementos que NO son parte del producto ni de la foto y que NO
deben aparecer en el resultado:
- las formas diagonales decorativas del fondo;
- el texto rosa / magenta cortado de la parte de arriba;
- las barras negras y la palabra "HOMOLOGACÓN" que asoman abajo a la
  derecha, que pertenecen a otra pieza del catálogo.
Nada de eso es del casco. El resultado es la foto del casco solo,
sobre un fondo limpio y liso de estudio, con la sombra propia del
casco. No los corrijas ni los rediseñes: no aparecen.

INTEGRIDAD DEL CASCO — EL CASCO NO SE VE ALTERADO NI DAÑADO:
El casco no puede verse alterado, deformado, rayado ni dañado.
Ninguna pieza se agranda, se achica, se mueve ni desaparece. No se
inventa ninguna pieza nueva. Es el mismo casco entero y sano de la
foto, con otro color de pintura.

PROHIBIDO ABSOLUTO:
- Prohibido pintar de blanco la goma del borde inferior.
- Prohibido pintar de blanco, aclarar o desteñir cualquiera de los
  seis elementos de la lista: quedan negros.
- Prohibido dejar la calota total o parcialmente negra: la calota
  cambia entera a blanco.
- Prohibido tintar, oscurecer o colorear el visor: queda
  transparente e incoloro como en la foto.
- Prohibido cambiar la forma, el tamaño, el perfil o la posición de
  cualquier pieza.
- Prohibido agregar o quitar piezas, ventilaciones, aletas o
  salientes que no estén en la foto.
- Prohibido agregar gráficos, logos, texto, franjas, degradés o
  adornos de cualquier tipo: la calota es lisa y de un solo color.
- Prohibido cambiar el ángulo, el encuadre, el fondo o la
  iluminación.
- Prohibido dejar cualquier artefacto de maquetación en la imagen.

VERIFICACIÓN FINAL — respondé estos seis chequeos antes de entregar:
1. ¿La calota quedó BLANCA en toda su superficie, sin ningún tramo
   negro?
2. ¿Los SEIS elementos de la lista quedaron TODOS negros, ninguno
   blanqueado ni aclarado?
3. ¿La goma del borde inferior quedó NEGRA y completa en todo su
   recorrido, sin que el blanco de la calota se le haya derramado
   encima?
4. ¿El visor quedó transparente e incoloro, igual que en la foto
   adjunta, sin tinte de ningún color?
5. ¿Cambió ALGO de la forma del casco — silueta, proporciones,
   posición o tamaño de alguna pieza? No debe haber cambiado nada.
6. ¿Quedó algún artefacto de maquetación (diagonales, texto rosa,
   barras negras, "HOMOLOGACÓN")? No debe quedar ninguno.
```

</details>

---

## 5. Qué hay que hacer

1. **Correr los 4 prompts, cada uno en una SESIÓN AISLADA** de la herramienta de generación (sección 3.6), y mandar los resultados para auditoría.
2. **Confirmar la lista cerrada de "elementos"** de la sección 3.1 — es la decisión que más afecta la consistencia de la familia de 4.
3. **Confirmar el visor de los colorways 3 y 4** (sección 3.2) — hoy asumidos transparentes.
4. **Auditar con foco en la goma negra del colorway 1** (azul oscuro vs. negro) y en la **cobertura completa de los 6 elementos** en los 4 — son los dos modos de falla más probables.
5. **Subir la foto de referencia real como adjunto** para versionarla en el repo.
6. **Comparar los 4 resultados entre sí** antes de aprobarlos: tienen que leerse como una familia del mismo molde, con las mismas piezas pintadas en cada uno. Si un colorway pintó un conjunto distinto de piezas, el problema es la lista, no la corrida.

---

**Última actualización:** 2026-07-29 · primer registro del caso — 4 colorways sobre un molde modular/flip up negro mate, con lista cerrada de 6 "elementos" compartida entre las 4 variantes, la regla de negocio de la goma del borde inferior siempre negra (sección 9 de `orquestacion-agentes-paralelos.md`) aplicada en los 4, y bloque de limpieza de artefactos de maquetación. Deja la lección del **molde monocromo de partida**: cuando todas las piezas comparten el color de origen, ninguna se puede seleccionar por color y la lista cerrada de piezas pasa a ser el mecanismo central del prompt.
