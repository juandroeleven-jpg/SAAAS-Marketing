# Simulación 38 — Boston 4.0: verificación ficha de marketing vs. excel maestro (Etapa 3 — Catálogo)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Pipeline **Tipo C**. Modelo **BOSTON 4.0**, marca **EDGE** (no EDGEPRO), hoja **"FICHA DE CASCOS"** del excel — la misma hoja que Boston, no la de EDGEPRO. Ver [`simulacion-33-boston-verificacion.md`](simulacion-33-boston-verificacion.md) para el hallazgo de las dos hojas con sets de filas distintos.

> ⚠️ **Boston 4.0 NO es Boston.** Son dos columnas distintas del excel y difieren en cinco filas: certificación, canal para lentes, quick visor release, N° de ventilaciones y estilo. Ver la comparación más abajo — es la diferencia que decide todo el caso.
>
> ✅ **Y son también DOS FICHAS distintas (2026-07-29, confirmado por el usuario).** Textual: *"yo te mandé a hacer 2 diferentes, una del Boston y la otra del Boston 4.0."* O sea que **este archivo audita la ficha del Boston 4.0** contra la columna **Boston 4.0**, y [`simulacion-33-boston-verificacion.md`](simulacion-33-boston-verificacion.md) audita **otra pieza, la del Boston**, contra la columna **Boston**. **Ya no hay ninguna ambigüedad sobre a cuál columna corresponde cada pieza.**
>
> 🔎 **Lo que queda como hallazgo de método, no como duda:** las dos fichas son **visualmente idénticas** —misma plantilla genérica de 13 claims— y **el veredicto cambia según el modelo**: **13/13 acá, 11/13 en el Boston**. Dos piezas indistinguibles a ojo que auditan distinto **refuerzan el pedido de que cada pieza lleve el nombre del modelo visible**; sin eso, ni la pieza ni el excel alcanzan para saber cuál es cuál.

## Estado general del caso

| Objeto | Veredicto de datos | Estado del prompt |
|---|---|---|
| Tarjeta de homologación (7 ítems) | ✅ **7 de 7 MATCH** | ✅ Prompt A listo — solo corrige el título y el número de norma ("FNVSS 510" → **"FMVSS 218"**) |
| Grid de íconos (6 celdas) | ✅ **6 de 6 MATCH** | ✅ Prompt B listo — solo saca el tache |

**Veredicto: 13 de 13 claims coinciden. Es la primera ficha del catálogo que da 13/13.** No hay que reemplazar ningún ítem: los 13 son correctos para este modelo. Lo único que se corrige son **3 defectos de arte y de texto**, ninguno de ellos de contenido.

---

## Claims transcritos de la ficha

<details><summary>Los 2 objetos</summary>

**Objeto 1 — tarjeta de homologación.** Franja de título gris con **"HOMOLOGACÓN"** (con esa falta de ortografía), banner negro con **"DOT"** grande y debajo **"FNVSS 510"**, y lista de 7 ítems sobre fondo gris claro:

1. VISERA ANTI SCRATCH
2. PREPARADO PARA ANTI EMPAÑANTE
3. SISTEMA DE EMERGENCIA DE LIBERACIÓN RÁPIDA (ERS)
4. LINER DESMONTABLE Y LAVABLE
5. SISTEMA DE LIBERACIÓN RÁPIDA DEL VISOR
6. CUBRE BARBILLA
7. CUBRE NARIZ

**Objeto 2 — grid de íconos 2 columnas x 3 filas**, íconos lineales rojo/bordo en octágonos:

| | |
|---|---|
| DISEÑO MODULAR | CON LUZ LED |
| CANAL PARA LENTES | HEBILLA MICROMÉTRICA ⚠️ *con tache rojo encima* |
| DOBLE VISERA | ESPACIO PARA BLUETOOTH |

Es la **misma plantilla genérica** que ya apareció en las fichas de Hero, Shift y Boston.

</details>

<details><summary>Excel — hoja "FICHA DE CASCOS", columna BOSTON 4.0</summary>

| Fila | Valor Boston 4.0 |
|---|---|
| Marca | EDGE |
| Certificación | **DOT** |
| Precio | (vacío) |
| Full Face-Flip Up-Open Face-Adventure | **Flip Up** |
| Con luz LED | **X** |
| Doble visera | X |
| Mica night vision/PC/etc | (vacío) |
| Preparado para anti empañante | X |
| Con Pinlock | N/A |
| Visera anti scratch | X |
| Hebilla micrométrica | **X** |
| Hebilla doble D | N/A |
| Espacio para Bluetooth | X |
| Material exterior ABS alta resistencia | X |
| Interior EPS de alta resistencia | X |
| Liner desmontable y lavable | X |
| Cubre barbilla | X |
| Cubre nariz | X |
| Emergency Quick Release System (ERS) | X |
| Canal para lentes (Glasses Fit System) | **X** |
| N° Air Vent System | 6 |
| Estilo de casco | AGRESIVO |
| Peso | (vacío) |
| **Quick Visor Release System** | **X** |
| Master Box | X |
| Inner Box-bolsa protectora | X |

</details>

## Auditoría — tabla de verificación

| # | Claim de la ficha | Fila del excel | Valor Boston 4.0 | Resultado |
|---|---|---|---|---|
| 1 | Visera anti scratch | Visera anti scratch | X | ✅ MATCH |
| 2 | Preparado para anti empañante | Preparado para anti empañante | X | ✅ MATCH |
| 3 | Sistema de emergencia de liberación rápida (ERS) | Emergency Quick Release System | X | ✅ MATCH |
| 4 | Liner desmontable y lavable | Liner desmontable y lavable | X | ✅ MATCH |
| 5 | Sistema de liberación rápida del visor | Quick Visor Release System | **X** | ✅ MATCH |
| 6 | Cubre barbilla | Cubre barbilla | X | ✅ MATCH |
| 7 | Cubre nariz | Cubre nariz | X | ✅ MATCH |
| 8 | Diseño modular | Full Face-Flip Up-Open Face-Adventure | **Flip Up** | ✅ MATCH |
| 9 | Con luz LED | Con luz LED | **X** | ✅ MATCH |
| 10 | Canal para lentes | Canal para lentes | **X** | ✅ MATCH |
| 11 | Hebilla micrométrica | Hebilla micrométrica | **X** | ✅ MATCH *(el texto sí; el tache del arte no — ver abajo)* |
| 12 | Doble visera | Doble visera | X | ✅ MATCH |
| 13 | Espacio para Bluetooth | Espacio para Bluetooth | X | ✅ MATCH |

**Veredicto: 13 MATCH · 0 MISMATCH · 0 SIN DATO.**

### Por qué este caso sale 13/13 y los demás no

La plantilla de ficha reclama 13 features. Boston 4.0 es el **único modelo del catálogo que efectivamente las tiene todas**. Los tres claims que venían fallando en modelo tras modelo son justamente los tres donde Boston 4.0 se distingue:

| Claim | Dónde venía fallando | Boston 4.0 |
|---|---|---|
| **Diseño modular** | Falso en todos los full face (Stellar, Kratos, Xpro, Vortex, Carbex, Shift) y en el open face (Hero) | **Flip Up** → cierto |
| **Con luz LED** | N/A en las 6 columnas EDGEPRO que lo declaran, y N/A en 7 de los 9 modelos EDGE | **X** → cierto |
| **Sistema de liberación rápida del visor** | N/A en Stellar, Kratos, Xpro, Shift, Boston, GX7, X5A 2.0, Shanghai | **X** → cierto |

Conclusión de proceso: **la plantilla no estaba mal diseñada, estaba mal asignada.** Fue escrita para un casco con este perfil de features —un flip up completo, con LED y liberación rápida de visor— y después se copió sobre modelos que no lo tienen. Eso explica de una sola vez casi todos los mismatches acumulados del catálogo.

### Boston 4.0 vs. Boston — 5 filas de diferencia

| Fila | Boston | Boston 4.0 |
|---|---|---|
| Certificación | DOT & ECE | **DOT** |
| Canal para lentes | N/A | **X** |
| Quick Visor Release System | N/A | **X** |
| N° Air Vent System | 4 | 6 |
| Estilo de casco | MODERNO | AGRESIVO |

Las dos primeras son las que importan para la ficha: con la columna de **Boston** la misma plantilla de 13 claims da **11/13**, con la de **Boston 4.0** da **13/13**. Es el mismo patrón de fichas casi indistinguibles que ya se registró entre Vortex y Kratos, y ahora entre Carbex y Shift, pero **llevado al extremo: acá las dos piezas son la misma imagen** y solo el nombre del modelo las separa. **Refuerza el pedido de que cada pieza lleve el nombre del modelo visible**: dos modelos con nombres casi iguales, misma plantilla, y el veredicto cambia según a cuál se la atribuya. *(Que son dos fichas separadas, una por modelo, quedó confirmado por el usuario el 2026-07-29 — ver el encabezado.)*

## Los 3 defectos a corregir — ninguno es de contenido

1. **⚠️ El tache sobre "hebilla micrométrica" (defecto de ARTE).** El excel confirma con **X** que Boston 4.0 **sí tiene** hebilla micrométrica. El ícono lleva una X roja encima, o sea comunica lo contrario de lo que dice la fuente. El ítem está bien elegido; **lo que miente es la marca de negación**.

   Con este ya son **cuatro apariciones** del mismo arte heredado, y el patrón queda confirmado: en **Stellar** el tache es falso (X), en **Shift** es correcto (N/A), en **Boston** es falso (X), en **Boston 4.0** es falso (X). El tache **no se decide por modelo**: viene de la plantilla y acierta por casualidad cuando acierta. Ver [`simulacion-14`](simulacion-14-stellar-verificacion.md), [`simulacion-15`](simulacion-15-shift-verificacion.md) y [`simulacion-33`](simulacion-33-boston-verificacion.md).

2. **✅ El encabezado "FNVSS 510" → "FMVSS 218" — CERRADO (2026-07-29, confirmado por el usuario).** Textual del usuario: ***"dot fmvss"***.

   **"FNVSS 510" está equivocado por partida doble:** las **letras** (es **FMVSS**, *Federal Motor Vehicle Safety Standard*, no "FNVSS") y el **número** (es **218**, la norma de cascos de motociclismo, no "510"). No es una discrepancia entre dos fuentes: es un dato que **no existe en ninguna** — no aparece en ninguna celda de ninguna de las dos hojas del excel.

   **La evidencia es fotográfica y directa:** los **stickers de certificación pegados en los cascos físicos** de esta misma marca —visibles en las **fotos de producto del propio catálogo**, tanto en el visor como en la nuca— dicen **"DOT · FMVSS NO. 218 · CERTIFIED"**.

   **Qué cambia en el Prompt A:** la versión anterior **eliminaba** la segunda línea del banner y dejaba solo "DOT". Ya no: el banner lleva **"DOT"** grande y debajo, más chico, **"FMVSS 218"**.

   ⚠️ **Lo que NO cambia:** el **valor de la primera línea** se sigue leyendo de la fila *Certificación* de la columna de cada modelo, y para el **Boston 4.0** esa celda dice **"DOT"** a secas. **No se le agrega "& ECE"**, que el excel no dice para este modelo — eso sería inventar un claim de homologación. *(En el [Boston](simulacion-33-boston-verificacion.md), en cambio, la celda sí dice "DOT & ECE" y por eso su banner lleva las dos cosas.)*

   🔁 **Alcance: TEMPLATE MAESTRO, no este caso.** "FNVSS 510" viene de la **plantilla genérica de marketing** y ya apareció en Kratos, Vortex, Shanghai, Hero, Shift, Carbex, Evolution 929, Boston y Boston 4.0 — en **las dos hojas y las dos líneas de producto**. La corrección **"FNVSS 510" → "FMVSS 218" se aplica de una sola vez en el template maestro del catálogo**, igual que la falta "HOMOLOGACÓN" y el tache heredado de la hebilla micrométrica. Corregirlo ficha por ficha es repetir nueve veces el mismo parche.

3. **🔤 La falta de ortografía "HOMOLOGACÓN".** Falta la **I**: lo correcto es **HOMOLOGACIÓN**. Viene de la ficha original del cliente, no del generador. Ya está registrada en [`simulacion-12`](simulacion-12-hero-verificacion.md) como pendiente de corregir en el **template maestro**; esta es una aparición más que la confirma.

---

## Prompts corregidos

Los dos son de **reproducción fiel de layout (Tipo B)**: el contenido no cambia, solo se corrigen los 3 defectos de arte y texto. Incorporan los blindajes que salieron de fallas reales ya vividas en este repo — sobre todo del Intento 1 del Prompt A del Hero, que salió con el lienzo estirado, los separadores convertidos en bandas y una estrella inventada.

⚠️ **Correr cada uno en una sesión aislada** del generador — hallazgo de contaminación cruzada del caso Vortex.

<details><summary><b>Prompt A — Tarjeta de homologación Boston 4.0 (7 ítems, sin cambios de contenido)</b></summary>

```
Reproducí la tarjeta de HOMOLOGACIÓN de la imagen de referencia
adjunta, con EXACTAMENTE la misma forma, la misma estructura, la
misma proporción y el mismo tamaño. Es una reproducción fiel: el
contenido de la lista NO cambia. Solo se corrigen dos textos.

CRÍTICO — EL LIENZO ES UNA CONSTANTE, NO SE ESTIRA:
- El lienzo final tiene EXACTAMENTE el mismo ancho y el mismo alto en
  píxeles que la imagen de referencia: formato vertical angosto, con
  una relación de aspecto de aproximadamente 1 : 2 (el alto es unas
  dos veces el ancho).
- No recortes, no estires, no cambies la relación de aspecto, no
  agregues márgenes.
- En un intento anterior de otra tarjeta de este mismo catálogo el
  lienzo salió estirado a 1 : 2,47 en vez de 1 : 2. No lo repitas.

ESTRUCTURA — TRES BLOQUES APILADOS, de arriba hacia abajo:

BLOQUE 1 — FRANJA DE TÍTULO (angosta, fondo gris claro):
- Texto "HOMOLOGACIÓN" en mayúsculas, negro, bold, centrado.
- CRÍTICO: la imagen de referencia dice "HOMOLOGACÓN", SIN la letra
  I. Es una falta de ortografía de la pieza original. NO la copies.
  Escribí "HOMOLOGACIÓN" completo y bien escrito.

BLOQUE 2 — BANNER NEGRO (rectángulo sólido negro, ancho completo,
ocupa aproximadamente el 15 % del alto total de la tarjeta):
- Texto "DOT" en letras BLANCAS grandes, bold, centrado.
- Debajo de "DOT", dentro del mismo banner negro, en blanco y en
  cuerpo bastante más chico, con las letras espaciadas: "FMVSS 218"
- CRÍTICO — LA NORMA SE CORRIGE, NO SE ELIMINA: la imagen de
  referencia dice "FNVSS 510" debajo del DOT. Ese texto está MAL POR
  PARTIDA DOBLE —las letras y el número— y NO se copia. La norma real
  es "FMVSS 218": con M (FMVSS, no FNVSS) y con 218 (no 510). Es lo
  que dicen los stickers de certificación pegados en los cascos
  físicos de esta marca ("DOT · FMVSS NO. 218 · CERTIFIED").
  Escribí exactamente "FMVSS 218". NO escribas "FNVSS", NO escribas
  "510".
- CRÍTICO — LA CERTIFICACIÓN DE ESTE MODELO ES "DOT" A SECAS: según
  el excel maestro, la celda de certificación de este casco dice
  "DOT" y nada más. NO agregues "& ECE" ni "ECE 22.06" ni "22.06":
  para este modelo serían datos inventados. La primera línea del
  banner es exactamente "DOT".
- Las dos líneas conviven: "DOT" grande arriba y "FMVSS 218" más
  chico debajo, las dos centradas dentro del rectángulo negro.

BLOQUE 3 — LISTA (zona gris clara, el resto del alto):
Los MISMOS 7 ítems de la referencia, en el MISMO orden, en
mayúsculas, negro, bold, centrados:
1. VISERA ANTI SCRATCH
2. PREPARADO PARA ANTI EMPAÑANTE
3. SISTEMA DE EMERGENCIA DE LIBERACIÓN RÁPIDA (ERS)
4. LINER DESMONTABLE Y LAVABLE
5. SISTEMA DE LIBERACIÓN RÁPIDA DEL VISOR
6. CUBRE BARBILLA
7. CUBRE NARIZ

CRÍTICO — CONTEO FORZADO: son EXACTAMENTE 7 ítems, ni uno más ni uno
menos, ninguno repetido y ninguno reemplazado. Antes de entregar,
contalos uno por uno.

CRÍTICO — LOS SEPARADORES SON LÍNEAS FINAS, NO BANDAS:
Entre ítem e ítem va un separador igual al de la referencia: un
guion / línea horizontal GRIS, MUY FINA (1 a 2 px), CORTA y
CENTRADA, que ocupa solo una fracción del ancho de la tarjeta y NO
llega a los bordes laterales.
- PROHIBIDO convertirlos en bandas horizontales de ancho completo.
- PROHIBIDO convertirlos en bloques de fondo de otro tono que partan
  la tarjeta en secciones.
- En un intento anterior de otra tarjeta de este catálogo los
  separadores se volvieron bandas grises de ancho completo. No lo
  repitas.

RITMO VERTICAL: el espacio entre ítems es igual entre todos los pares
consecutivos y compacto, con la misma densidad que la referencia. La
lista llena la zona gris de forma pareja, sin huecos vacíos.

TIPOGRAFÍA Y PALETA: sans serif condensada, mayúsculas, bold. Texto
blanco sobre el negro, texto negro sobre el gris. Paleta: negro,
gris claro y blanco. Sin cambios.

PROHIBIDO ABSOLUTO:
- No mostrar "FNVSS 510": la norma se escribe "FMVSS 218", con M y
  con 218. No inventar ningún otro número de norma.
- No agregar "& ECE", "ECE 22.06" ni "22.06" a la primera línea: este
  modelo está certificado como "DOT" a secas.
- No escribir "HOMOLOGACÓN" sin la I.
- No agregar, quitar, reemplazar ni reordenar ningún ítem de la lista.
- No agregar íconos, logos ni gráficos: esta tarjeta es solo texto.
- No agregar destellos, estrellas, brillos ni ningún elemento
  decorativo que no esté en la referencia.
- No cambiar la relación de aspecto ni las dimensiones del lienzo.
- No cambiar la paleta.

VERIFICACIÓN FINAL — cinco chequeos antes de entregar:
1. ¿El alto dividido el ancho da aproximadamente 2, igual que la
   referencia?
2. ¿El título dice "HOMOLOGACIÓN" completo, con la I?
3. ¿El banner negro dice "DOT" grande y "FMVSS 218" debajo —con M y
   con 218—, sin rastro de "FNVSS", de "510" ni de "& ECE"/"22.06"?
4. ¿Los separadores son guiones finos, cortos y centrados, y NO
   bandas de ancho completo?
5. ¿Hay exactamente 7 ítems y ningún elemento decorativo que no esté
   en la referencia?
```

</details>

<details><summary><b>Prompt B — Grid de íconos Boston 4.0 (6 celdas, sin tache)</b></summary>

```
Reproducí el GRID DE ÍCONOS de la imagen de referencia adjunta, con
EXACTAMENTE la misma forma, la misma estructura, la misma proporción
y el mismo tamaño. Es una reproducción fiel: los 6 ítems NO cambian.
Solo se corrige un detalle de arte.

CRÍTICO — EL LIENZO ES UNA CONSTANTE, NO SE ESTIRA:
El lienzo final tiene EXACTAMENTE el mismo ancho y el mismo alto en
píxeles que la imagen de referencia, y la misma relación de aspecto.
No recortes, no estires, no infles el lienzo.

LAYOUT: grid de EXACTAMENTE 2 columnas x 3 filas = 6 celdas.
Distribución uniforme y simétrica, mismo espaciado entre celdas y
márgenes iguales en los 4 bordes. Cada celda: ícono centrado arriba,
texto del ítem en mayúsculas centrado debajo, MISMO tamaño de fuente
en las 6 celdas.

CRÍTICO — CONTEO FORZADO DE CELDAS:
- Son EXACTAMENTE 6 celdas. NUNCA 8, NUNCA una fila de más "por si
  acaso", NUNCA una celda vacía decorativa.
- Cada uno de los 6 ítems aparece en UNA sola celda, UNA sola vez.
- En un intento anterior de otro caso de este catálogo el generador
  devolvió un grid con filas de más y con 2 ítems DUPLICADOS, cada
  repetición con un ícono distinto. No lo repitas.
- Antes de entregar, contá las celdas una por una: tienen que ser 6,
  ninguna repetida aunque el ícono se vea distinto.

LOS 6 ÍTEMS, en este orden (los mismos de la referencia):
Fila 1:  DISEÑO MODULAR        |  CON LUZ LED
Fila 2:  CANAL PARA LENTES     |  HEBILLA MICROMÉTRICA
Fila 3:  DOBLE VISERA          |  ESPACIO PARA BLUETOOTH

CRÍTICO — SACAR EL TACHE DE "HEBILLA MICROMÉTRICA":
En la imagen de referencia, el ícono de HEBILLA MICROMÉTRICA lleva
una X / TACHE ROJO GRANDE encima, que comunica que el casco NO tiene
esa característica. ESO ES UN ERROR: este casco SÍ tiene hebilla
micrométrica, confirmado en el excel maestro.
- Dibujá el ícono de la hebilla micrométrica LIMPIO, SIN la X, SIN
  tache y SIN ninguna marca de negación encima.
- El ícono en sí (la hebilla) se conserva: lo único que se elimina es
  la X roja superpuesta.
- Es un borrado con reconstrucción: no dejes ningún resto, ningún
  fantasma ni ningún trazo de la X, y el dibujo de la hebilla que
  quedaba tapado debajo tiene que verse completo.
- NINGUNO de los 6 íconos lleva X, tache ni marca de negación. Las 6
  celdas son características que el casco SÍ tiene.

ESTILO DE ÍCONO — idéntico a la referencia:
- Estilo lineal, trazo uniforme, sin relleno sólido salvo detalles
  mínimos.
- Color rojo/bordo (tono EDGE), cada ícono dentro de un octágono de
  contorno.
- Mismo grosor de trazo, mismo tamaño de octágono y misma paleta en
  los 6 íconos.
- El dibujo de los otros 5 íconos se conserva igual que en la
  referencia: no los redibujes, no los simplifiques, no los cambies
  de concepto.

PROHIBIDO ABSOLUTO:
- No poner ninguna X, tache ni marca de negación sobre ningún ícono.
- No agregar, quitar, reemplazar ni reordenar ningún ítem.
- No agregar un 7° ni un 8° ítem para "completar" el grid.
- No duplicar ningún ítem en una celda adicional, aunque el ícono sea
  distinto.
- No agregar destellos, estrellas, brillos ni ningún elemento
  decorativo que no esté en la referencia.
- No cambiar la relación de aspecto ni las dimensiones del lienzo.
- No cambiar el estilo, el color ni el grosor de trazo de los íconos.

VERIFICACIÓN FINAL — cuatro chequeos antes de entregar:
1. ¿Hay exactamente 6 celdas, en 2 columnas x 3 filas, sin ninguna
   repetida?
2. ¿El ícono de HEBILLA MICROMÉTRICA quedó limpio, sin la X roja y
   sin ningún resto de ella?
3. ¿Ningún otro ícono tiene tache ni marca de negación?
4. ¿El lienzo conserva las mismas dimensiones y relación de aspecto
   que la referencia, sin elementos decorativos agregados?
```

</details>

## Qué hay que hacer

1. Correr los 2 prompts en sesiones aisladas y mandar los resultados para auditoría.
2. ✅ **CERRADO (2026-07-29, confirmado por el usuario):** ~~confirmar la segunda línea del banner de certificación~~ — *"dot fmvss"*. El banner lleva **"DOT"** grande y **"FMVSS 218"** debajo; ya está aplicado en el Prompt A. La primera línea sigue siendo "DOT" a secas, que es lo que dice la columna Boston 4.0.
3. **Corregir el template maestro**, no ficha por ficha: la falta "HOMOLOGACÓN", el **"FNVSS 510" → "FMVSS 218"** (✅ confirmado) y el tache heredado sobre la hebilla micrométrica son defectos de plantilla que se replican en todo el catálogo.
4. ✅ **Hecho (2026-07-29):** este caso ya tiene su fila en `mis-pruebas-claude-code.md` y su sección en `indice-prompts-catalogo.md`.

---

**2026-07-29 (cierre de decisiones del usuario) —** se resolvieron los 2 puntos que este archivo tenía abiertos. **(1) Boston y Boston 4.0 son DOS fichas distintas**, una por modelo (*"yo te mandé a hacer 2 diferentes, una del Boston y la otra del Boston 4.0"*): este archivo queda como la ficha del **Boston 4.0**, **13 MATCH / 0 MISMATCH**, con sus 2 prompts **sin reemplazos de contenido**; la del **Boston** vive en [`simulacion-33`](simulacion-33-boston-verificacion.md) con **11/13** y 2 ítems reemplazados. Se sacó el bloque de "cuál de las dos columnas es" y **queda como hallazgo de método** —no como duda— que las dos fichas son **visualmente idénticas** y que el veredicto cambia según el modelo, lo que **refuerza el pedido de que cada pieza lleve el nombre del modelo visible**. **(2) La certificación va "DOT / FMVSS 218"** (*"dot fmvss"*): "FNVSS 510" estaba mal por las **letras** y por el **número**, y el Prompt A —que antes **eliminaba** la segunda línea del banner— ahora lleva **"DOT"** grande y **"FMVSS 218"** debajo. La evidencia son los **stickers de certificación de los cascos físicos**, visibles en las fotos de producto del propio catálogo. La primera línea **no cambia**: sigue leyéndose de la columna de cada modelo y para el Boston 4.0 es **"DOT"** a secas, sin "& ECE". La corrección del número **vale para el template maestro de todo el catálogo**.

---

**Última actualización:** 2026-07-29 · verificación en primer plano a pedido del usuario. Primer caso 13/13 del catálogo. Hallazgo principal: la plantilla de ficha no estaba mal diseñada sino mal asignada — fue escrita para un modelo con el perfil de features del Boston 4.0 (flip up + LED + liberación rápida de visor) y después se copió sobre modelos que no las tienen, lo que explica de una sola vez casi todos los mismatches acumulados del catálogo.
