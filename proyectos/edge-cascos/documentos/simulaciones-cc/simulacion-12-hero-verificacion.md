# Simulación 12 — Hero: verificación ficha de marketing vs. excel maestro de specs (Etapa 3 — Catálogo)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md)

Tercer caso del catálogo, pipeline **Tipo C**, con Agente Auditor independiente (igual que Kratos). A diferencia de Kratos y Vortex, acá el excel tiene muchas celdas **vacías** para la columna Hero (no "N/A", directamente sin dato) — el Auditor usó una tercera categoría de resultado, **SIN DATO**, distinta de MATCH y MISMATCH, para no confundir "no confirmado" con "confirmado que no lo tiene".

Además, Hero es un casco **open face / tipo jet** (sin mentonera, visera abatible, mentón expuesto — visible en la foto de referencia), lo que genera una contradicción estructural con uno de los claims, no solo una discrepancia de dato.

### 🔴 Pendiente de tu parte

```mermaid
flowchart TD
    T1["📋 Completar con el fabricante las 9 celdas<br/>'sin dato' del excel para Hero antes de<br/>generar cualquier imagen nueva"]
    T2["⚖️ Resolver 'Diseño modular' vs. 'Open Face'<br/>confirmado en el excel — son categorías<br/>excluyentes, no es solo falta de dato"]
    T3["🔩 Resolver el tipo de hebilla: la ficha dice<br/>'micrométrica', el excel confirma 'doble D'<br/>para Hero — son piezas físicas distintas"]
    T4["⬛ Confirmar qué va en el rectángulo negro<br/>de la ficha (mismo patrón que Vortex)"]
```

<details><summary>Claims transcritos de la ficha Hero</summary>

**Bloque "HOMOLOGACIÓN — DOT FNVSS 510" (7 ítems):**
1. Visera anti scratch
2. Preparado para anti empañante
3. Sistema de emergencia de liberación rápida (ERS)
4. Liner desmontable y lavable
5. Sistema de liberación rápida del visor
6. Cubre barbilla
7. Cubre nariz

**Bloque grid de íconos (6 ítems):**
1. Diseño modular
2. Con luz LED
3. Canal para lentes
4. Hebilla micrométrica
5. Doble visera
6. Espacio para Bluetooth

</details>

<details><summary>Excel maestro — columna Hero, transcripción completa</summary>

| Fila | Valor Hero |
|---|---|
| Marca | EDGEPRO |
| Certificación | DOT & ECE 22.06 |
| Full Face-Flip Up-Open Face-Adventure | **OPEN FACE** |
| Con luz LED | (vacío) |
| Doble visera | (vacío) |
| Mica night vision/PC/etc | (vacío) |
| Preparado para anti empañante | (vacío) |
| Con Pinlock | (vacío) |
| Kit de mecanismo visor | X |
| Visera anti scratch | (vacío) |
| Hebilla micrométrica | (vacío) |
| Hebilla doble D | X |
| Espacio para Bluetooth | X |
| Material exterior ABS alta resistencia | (vacío — inusual, es la única columna sin dato en esta fila; todas las demás marcas tienen X) |
| Interior EPS de alta resistencia | (vacío) |
| Liner desmontable y lavable | X |
| Cubre barbilla | (vacío) |
| Cubre nariz | (vacío) |
| Emergency Quick Release System (ERS) | (vacío) |
| Canal para lentes (Glasses Fit System) | X |
| N° Air Vent System | (vacío) |
| Estilo de casco | (vacío) |
| Peso | (vacío) |
| Quick Visor Release System | (vacío) |
| Master Box | (vacío) — corregido: una transcripción anterior lo tenía como X |
| Inner Box-bolsa protectora | (vacío) — corregido: una transcripción anterior lo tenía como X |
| Con maletín de lujo | (vacío) |

</details>

### Auditoría — tabla de verificación (Agente Auditor independiente)

| # | Claim de la ficha | Fila del excel | Valor Hero | Resultado |
|---|---|---|---|---|
| 1 | Visera anti scratch | Visera anti scratch | (vacío) | ⚪ SIN DATO |
| 2 | Preparado para anti empañante | Preparado para anti empañante | (vacío) | ⚪ SIN DATO |
| 3 | Sistema de emergencia de liberación rápida (ERS) | Emergency Quick Release System (ERS) | (vacío) | ⚪ SIN DATO |
| 4 | Liner desmontable y lavable | Liner desmontable y lavable | X | ✅ MATCH |
| 5 | Sistema de liberación rápida del visor | Quick Visor Release System | (vacío) | ⚪ SIN DATO |
| 6 | Cubre barbilla | Cubre barbilla (Chin Curtain) | (vacío) | ⚪ SIN DATO |
| 7 | Cubre nariz | Cubre nariz (Anti-Fog Nose Guard) | (vacío) | ⚪ SIN DATO |
| 8 | Diseño modular | Full Face-Flip Up-Open Face-Adventure | OPEN FACE | ❌ MISMATCH |
| 9 | Con luz LED | Con luz LED | (vacío) | ⚪ SIN DATO |
| 10 | Canal para lentes | Canal para lentes (Glasses Fit System) | X | ✅ MATCH |
| 11 | Hebilla micrométrica | Hebilla micrométrica | (vacío) | ⚪ SIN DATO |
| 12 | Doble visera | Doble visera | (vacío) | ⚪ SIN DATO |
| 13 | Espacio para Bluetooth | Espacio para Bluetooth | X | ✅ MATCH |

**Veredicto:** 3 MATCH · 1 MISMATCH · 9 SIN DATO. Ninguna de las 9 celdas vacías se interpreta como "no lo tiene" — es información ausente en el excel, no un descarte confirmado.

**⚠️ Corrección de una lectura errónea (registrada a propósito, para no repetirla):** en un momento de esta sesión se marcaron "Cubre barbilla" y "Cubre nariz" como X confirmado para Hero, a partir de una captura de excel de baja resolución donde la columna Hero quedaba cerca del borde. Una captura posterior, más clara y completa, mostró que **ambas celdas están vacías para Hero** — la lectura anterior fue un error de interpretación visual, no un dato nuevo. Se revierte a SIN DATO y el veredicto vuelve a 3 MATCH · 1 MISMATCH · 9 SIN DATO. **Lección de método:** cuando un dato del excel se lee de una captura de pantalla (no del archivo original), y sobre todo cuando la columna está cerca del borde o en baja resolución, el dato tiene que marcarse como provisorio hasta confirmarlo con una segunda captura nítida — nunca escribirlo directo como confirmado. La columna Hero tiene exactamente **5 celdas con X**: Kit de mecanismo visor, Hebilla doble D, Espacio para Bluetooth, Liner desmontable y lavable, y Canal para lentes. Todo el resto está vacío.

### Hallazgos estructurales (no son solo discrepancias de dato)

1. **"Diseño modular" contradice el tipo de casco confirmado.** El excel dice OPEN FACE. Modular, Full Face y Open Face son categorías mutuamente excluyentes — esto es un MISMATCH duro, no falta de dato.
2. **"Cubre barbilla" — sentido físico dudoso en un open face.** Un casco open face no tiene mentonera propia; no se puede confirmar ni descartar con el dato disponible si existe una variante de esta pieza aplicable, pero la incoherencia potencial se señala aparte del resultado formal (SIN DATO).
3. **"Sistema de liberación rápida del visor" sí es físicamente plausible en un open face** (visera abatible tipo demi-jet) — acá el problema es solo falta de dato, no incoherencia de diseño.
4. **Conflicto de tipo de hebilla.** La ficha reclama "hebilla micrométrica" (sin dato en excel), pero el excel sí confirma con X "Hebilla doble D" para Hero — son dos piezas físicas distintas y mutuamente excluyentes. Hay evidencia indirecta de que el claim de la ficha está describiendo el tipo de hebilla equivocado, aunque formalmente el claim 11 quede como "sin dato" y no "mismatch".
5. **Material exterior ABS es la única celda sin dato de toda esa fila** — todas las demás marcas (Stellar, Kratos, Xpro, Vortex, Carbex, Shift) tienen X — vale la pena confirmar si es un vacío real del producto o un olvido de carga del excel.

### Cómo adaptar los 2 prompts de generación para Hero

**Conclusión: ninguno de los dos prompts sirve tal cual** (a diferencia de Vortex, donde sí servían sin cambios).

**Prompt A — tarjeta HOMOLOGACIÓN (6 ítems originales: visera anti scratch / ERS / liner / liberación rápida visor / cubre barbilla / cubre nariz):**
- Solo **1 de 6** queda confirmado por el excel: *Liner desmontable y lavable*. (Corrección: "Cubre barbilla" y "Cubre nariz" habían sido marcados como confirmados por una lectura errónea de una captura de baja resolución — ver la nota de corrección arriba. Están vacíos para Hero.)
- Los otros 5 (Visera anti scratch, ERS, Sistema de liberación rápida del visor, Cubre barbilla, Cubre nariz) siguen sin dato. **Con un solo ítem confirmado no hay tarjeta posible** — el Prompt A vuelve a quedar 🔴 bloqueado hasta que el fabricante complete el excel. La versión de 3 ítems que se armó más abajo quedó basada en el dato erróneo y NO debe correrse tal cual.

**Prompt B — grid 2x3 de íconos (6 ítems originales: canal para lentes / hebilla micrométrica / bluetooth / kit mecanismo visor / material ABS / interior EPS):**
- **3 de 6** quedan confirmados tal cual: *Canal para lentes, Espacio para Bluetooth, Kit de mecanismo visor*.
- *Hebilla micrométrica* debe sacarse y reemplazarse por ***Hebilla doble D*** (sí confirmada con X para Hero).
- *Material exterior ABS* e *Interior EPS* quedan sin dato — no hay más ítems confirmados en el excel para completar el grid a 6.
- Resultado: **el grid B solo se puede armar hoy con 4 ítems confirmados** (Canal para lentes, Bluetooth, Kit de mecanismo visor, Hebilla doble D). Faltan 2 para llegar a 6.

### Estado: ✅ los 2 prompts definitivos están armados — reparto 3 + 3 (ver [sección de abajo](#-versión-definitiva-de-las-2-tarjetas-de-hero--reparto-3--3-sin-ítems-repetidos))

> **Nota:** durante un tramo de esta sesión el Prompt A quedó 🔴 bloqueado por tener un solo ítem confirmado *dentro de su bloque original*. Se destrabó al repartir los 6 datos confirmados de Hero entre las dos tarjetas (3 y 3) en vez de tratarlas por separado. El análisis de abajo sobre "1 de 6" y "4 de 6" queda como registro de cómo se llegó ahí.

**Qué falló:** "Diseño modular" contradice el tipo de casco confirmado (open face); "hebilla micrométrica" probablemente sea el tipo de hebilla equivocado (el excel confirma doble D).

**Qué hay que hacer:**
1. Completar con el fabricante las 9 celdas "sin dato" del excel para Hero antes de poder armar la tarjeta de homologación — hoy solo hay 1 ítem confirmado de los 6 que necesita.
2. Resolver explícitamente "diseño modular" vs. "open face" en el excel maestro — no es un vacío, es una contradicción activa.
3. Confirmar qué va en el rectángulo negro de la ficha (mismo pendiente que Vortex).
4. Mientras tanto, solo el Prompt B (4/6 ítems confirmados) es generable. El Prompt A no.

## Prompts del catálogo (Agente Generador) — A bloqueado, B reducido a 4 ítems

**Prompt A — datos que hacen falta pedirle al fabricante** para completar la tarjeta a 6 (celdas todavía vacías en el excel, columna Hero, bloque de homologación):
1. Visera anti scratch — ¿el visor tiene tratamiento anti-rayado?
2. Preparado para anti empañante — ¿admite/incluye tratamiento anti-vaho?
3. Sistema de emergencia de liberación rápida (ERS) — ¿el liner tiene ERS?
4. Sistema de liberación rápida del visor — ¿el mecanismo permite desmontaje rápido sin herramientas?

<details><summary>⚠️ OBSOLETO — Prompt A de 3 ítems (armado sobre un dato erróneo, NO usar)</summary>

**No correr este prompt.** Se armó cuando "Cubre barbilla" y "Cubre nariz" figuraban por error como confirmados para Hero. Con el dato corregido, solo *Liner desmontable y lavable* está confirmado, así que esta tarjeta de 3 ítems afirmaría 2 features sin respaldo. Se conserva únicamente como registro del error.

```
Diseñá una tarjeta de HOMOLOGACIÓN para el casco EDGEPRO HERO (open
face), EXACTAMENTE con la misma forma, estructura y tamaño que la
imagen de referencia adjunta — el lienzo final tiene que tener el
mismo ancho y alto en píxeles que la referencia (formato vertical
angosto), sin recortar ni estirar ni cambiar la proporción.

NOTA: Esta es una versión de 3 ítems, no de 6. El bloque original
contemplaba 6 elementos, pero solo 3 características de Hero están
confirmadas con dato verificado en el excel maestro. NO se incluyen
"Visera anti scratch", "Sistema de emergencia de liberación rápida
(ERS)" ni "Sistema de liberación rápida del visor" porque, para Hero,
esas filas no tienen dato todavía en el excel.

CRÍTICO — ESTRUCTURA DE 3 BLOQUES, igual que la referencia (no
describir el título como una sola línea de texto, tiene que ser esta
estructura de 3 partes apiladas):

BLOQUE 1 — Título (franja angosta arriba, fondo gris claro):
- Texto "HOMOLOGACIÓN" en mayúsculas, negro, bold, centrado.

BLOQUE 2 — Banner negro (rectángulo sólido negro, ancho completo del
lienzo, ocupa aproximadamente el 20-25% del alto total de la tarjeta):
- Texto "DOT" en letras BLANCAS enormes, bold, centrado.
- Debajo, en el mismo banner negro, texto blanco más chico: "& ECE
  22.06" (usar exactamente este texto — NO "FNVSS 510").

BLOQUE 3 — Lista de ítems (zona gris clara, el resto del alto de la
tarjeta, debajo del banner negro):
Lista de EXACTAMENTE 3 ítems, en este orden, cada uno en mayúsculas,
negro, bold, centrado, separados por una línea horizontal fina gris
entre cada ítem:
1. LINER DESMONTABLE Y LAVABLE
2. CUBRE BARBILLA
3. CUBRE NARIZ

CRÍTICO — ESPACIADO UNIFORME: el espacio vertical entre los 3 ítems
del Bloque 3 debe ser EXACTAMENTE IGUAL entre todos los pares
consecutivos. Distribuí la zona gris completa de forma pareja entre
los 3 ítems, sin huecos irregulares ni forzar el espaciado de una
tarjeta de 6 ítems en una de 3.

PROHIBIDO ABSOLUTO:
- NO incluir "Visera anti scratch", "Sistema de emergencia de
  liberación rápida (ERS)" ni "Sistema de liberación rápida del
  visor" — sin dato confirmado para Hero todavía.
- No mostrar "DOT FNVSS 510" — la certificación correcta es "DOT & ECE
  22.06".
- No usar rectángulos negros sólidos como placeholder en ningún otro
  lugar de la tarjeta.
- No forzar un 4°, 5° o 6° ítem para "completar" la tarjeta.
```

</details>
5. Cubre barbilla y cubre nariz — ¿Hero incluye estas piezas accesorias?

<details><summary>Prompt B — Grid de íconos Hero (4 ítems, versión con datos disponibles — NO 6)</summary>

```
Diseña una tarjeta de especificaciones técnicas en formato GRID DE ÍCONOS 2x2
(dos columnas, dos filas), resolución 4K, fondo transparente o blanco liso,
para el casco EDGE modelo HERO (open face / jet).

NOTA: Esta es una versión de 4 ítems, no de 6. El grid original contemplaba
6 elementos (2x3), pero solo 4 características de Hero están confirmadas con
dato verificado en el excel maestro. NO se incluyen "Material exterior ABS
alta resistencia" ni "Interior EPS de alta resistencia" porque, aunque están
confirmadas para otros modelos del catálogo, para Hero esas filas no tienen
dato. Tampoco se incluye "Hebilla micrométrica" porque el excel confirma que
Hero usa un tipo de hebilla distinto: hebilla doble D.

LAYOUT: grid de 2 columnas x 2 filas (4 celdas), distribución uniforme y
simétrica, espaciado igual entre celdas y márgenes iguales en los 4 bordes.
Cada celda: ícono centrado arriba, texto del ítem en mayúsculas centrado
debajo, mismo tamaño de fuente en las 4 celdas.

CRÍTICO — DIMENSIONES Y LAYOUT EXACTOS (verificado que un generador anterior falló acá con otro caso — produjo un grid con filas/celdas de más y contenido repetido, prestar máxima atención):
- El grid debe tener EXACTAMENTE 2 columnas x 2 filas = 4 celdas en total, nunca 2x3 ni 6 celdas, nunca una fila de más.
- Cada uno de los 4 ítems aparece en UNA sola celda, UNA sola vez — no dupliques ningún ítem para rellenar espacio.
- El lienzo final debe tener EXACTAMENTE el mismo ancho y alto en píxeles (mismo aspect ratio) que la imagen de referencia adjunta.
- Antes de terminar, contá las celdas: deben ser 4, ni una más ni una menos, ninguna repetida.

ESTILO DE ÍCONO — mantener consistencia con las demás piezas de esta ficha:
- Estilo lineal, trazo uniforme, sin relleno sólido salvo detalles mínimos.
- Color principal rojo/bordo (tono EDGE), sobre octágono de fondo.
- Mismo grosor de trazo, mismo tamaño de octágono y misma paleta en los 4 íconos.

LOS 4 ÍTEMS A REPRESENTAR (en este orden):
1. CANAL PARA LENTES
2. ESPACIO PARA BLUETOOTH
3. KIT DE MECANISMO VISOR
4. HEBILLA DOBLE D

CRÍTICO — íconos nuevos, no reciclados de la referencia:
- Diseñá un ícono lineal NUEVO específico para cada ítem, especialmente "HEBILLA DOBLE D" — la imagen de referencia (de otro modelo) probablemente muestre un ícono de "hebilla micrométrica" con tache o X; NO lo copies, doble D es un broche físicamente distinto y debe dibujarse desde cero, sin tache.
- No reutilices el dibujo de ningún ícono de la referencia que corresponda a un ítem que no está en esta lista de 4.

PROHIBIDO ABSOLUTO:
- No agregar un quinto o sexto ítem para "completar" el grid a 6.
- No incluir "Hebilla micrométrica" (no confirmada; el dato correcto es doble D).
- No incluir "Material exterior ABS" ni "Interior EPS" (sin dato confirmado para Hero).
- No dejar celdas vacías decorativas ni forzar un layout 2x3 con huecos: rediseñar
  limpiamente como 2x2.

ASPECTO Y SALIDA: relación 1:1 o 4:3 (consistente con el resto de la ficha),
4K, fondo limpio apto para maquetación junto a las demás piezas.
```

</details>

### Intento 1 — resultado auditado (Prompt B)

**Estado:** ⚠️ Falló — grid de 6 celdas (2x3) en vez de 4 (2x2), con 2 ítems duplicados.

**Qué falló:** el resultado real salió como un grid de 6 celdas (2 columnas x 3 filas), no las 4 pedidas. Fila 1: "Canal para lentes" y "Espacio para Bluetooth", cada uno 1 sola vez, como correspondía. Fila 2: "Kit de mecanismo visor" y "Hebilla doble D", primera aparición de cada uno. Fila 3: "Kit de mecanismo visor" otra vez, pero con un ícono completamente distinto al de la fila 2 (esta vez con aspecto de mecanismo/engranaje con tornillos y palanca, estilo herramienta), y "Hebilla doble D" otra vez, también con un ícono ligeramente distinto (correa rellena con un rectángulo punteado). Es decir, "Kit de mecanismo visor" y "Hebilla doble D" quedaron duplicados, cada uno con arte distinto en cada aparición, generando 6 celdas en vez de 4 — a pesar de que el prompt ya decía explícitamente "EXACTAMENTE 2 columnas x 2 filas = 4 celdas... contá las celdas antes de terminar, ninguna repetida". Es el mismo patrón de "grid con celdas de más y contenido duplicado" que el propio Prompt B ya advertía como riesgo conocido de otros casos del catálogo, y la advertencia no alcanzó para evitarlo esta vez.

**Qué hay que hacer:** reintentar con el prompt reforzado (Intento 2, abajo), que nombra explícitamente los 2 ítems que se duplicaron.

### Intento 2 — prompt corregido, nombrando los ítems que se duplicaron

<details><summary>Prompt usado</summary>

```
Diseña una tarjeta de especificaciones técnicas en formato GRID DE ÍCONOS 2x2
(dos columnas, dos filas), resolución 4K, fondo transparente o blanco liso,
para el casco EDGE modelo HERO (open face / jet).

NOTA: Esta es una versión de 4 ítems, no de 6. Solo 4 características de
Hero están confirmadas con dato verificado en el excel maestro. NO se
incluyen "Material exterior ABS alta resistencia" ni "Interior EPS de alta
resistencia" (sin dato para Hero). Tampoco se incluye "Hebilla micrométrica"
(el excel confirma hebilla doble D en su lugar para Hero).

CRÍTICO — DIMENSIONES Y LAYOUT EXACTOS (un intento anterior de este mismo
caso falló acá: produjo un grid de 2x3 = 6 celdas en vez de 2x2 = 4,
duplicando "Kit de mecanismo visor" y "Hebilla doble D" con un ícono
distinto en cada repetición — máxima atención, no lo repitas):
- El grid debe tener EXACTAMENTE 2 columnas x 2 filas = 4 celdas en total.
  NUNCA 2x3, NUNCA 6 celdas, NUNCA una fila de más "por si acaso".
- Cada uno de los 4 ítems aparece en UNA sola celda, UNA sola vez. En
  particular: "KIT DE MECANISMO VISOR" aparece UNA sola vez, no dos. Y
  "HEBILLA DOBLE D" aparece UNA sola vez, no dos. No generes una segunda
  versión de ninguno de estos 2 ítems con un ícono distinto para rellenar
  una fila extra.
- El lienzo final debe tener EXACTAMENTE el mismo ancho y alto en píxeles
  (mismo aspect ratio) que la imagen de referencia adjunta.
- Antes de terminar, contá las celdas una por una: tienen que ser 4, ni una
  más, ninguna con un ítem repetido aunque el ícono se vea distinto.

ESTILO DE ÍCONO — mantener consistencia con las demás piezas de esta ficha:
- Estilo lineal, trazo uniforme, sin relleno sólido salvo detalles mínimos.
- Color principal rojo/bordo (tono EDGE), sobre octágono de fondo.
- Mismo grosor de trazo, mismo tamaño de octágono y misma paleta en los 4
  íconos.

LOS 4 ÍTEMS A REPRESENTAR (en este orden, cada uno EXACTAMENTE 1 vez):
1. CANAL PARA LENTES
2. ESPACIO PARA BLUETOOTH
3. KIT DE MECANISMO VISOR
4. HEBILLA DOBLE D

CRÍTICO — íconos nuevos, no reciclados de la referencia:
- Diseñá un ícono lineal NUEVO específico para cada ítem, especialmente
  "HEBILLA DOBLE D" — no copies el ícono de "hebilla micrométrica" de la
  referencia (broche físicamente distinto), y si tiene tache/X, esa marca
  no pasa a este grid.
- No reutilices el dibujo de ningún ícono de la referencia que corresponda
  a un ítem que no está en esta lista de 4.

PROHIBIDO ABSOLUTO:
- No agregar un 5° o 6° ítem para "completar" el grid.
- No incluir "Hebilla micrométrica" (no confirmada; el dato correcto es
  doble D).
- No incluir "Material exterior ABS" ni "Interior EPS" (sin dato
  confirmado para Hero).
- No duplicar "Kit de mecanismo visor" ni "Hebilla doble D" en ninguna
  celda adicional, aunque el ícono sea distinto — cada ítem va en UNA sola
  celda.
- No dejar celdas vacías decorativas ni forzar un layout 2x3 con huecos.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt y mandar el resultado para auditoría.

---

## ✅ Versión definitiva de las 2 tarjetas de Hero — reparto 3 + 3, sin ítems repetidos

Pedido explícito del usuario: los **dos** prompts para rehacer los **dos objetos** de la ficha Hero (la tarjeta de homologación con el banner DOT, y el grid de íconos). Se entregan ambos, con la advertencia dicha de frente: **el excel maestro confirma hoy solo 6 datos para Hero**, así que las dos tarjetas no se pueden "arreglar" conservando su tamaño — bajan de 7 + 6 = 13 claims a **3 + 3 = 6 claims**, todos con respaldo.

### Por qué 3 + 3 y no 4 + 2

Los 6 datos confirmados de la columna Hero son:

| Dato confirmado | Fuente en el excel | A qué tarjeta va |
|---|---|---|
| OPEN FACE | fila "Full Face-Flip Up-Open Face-Adventure" | Grid de íconos |
| Espacio para Bluetooth | X | Grid de íconos |
| Hebilla doble D | X | Grid de íconos |
| Liner desmontable y lavable | X | Lista de homologación |
| Kit de mecanismo visor | X | Lista de homologación |
| Canal para lentes | X | Lista de homologación |

**Regla aplicada:** ningún ítem aparece en las dos tarjetas. La ficha original tampoco repite — sus 7 ítems de lista y sus 6 íconos son conjuntos disjuntos. Por eso el reparto es 3 + 3 y no 4 + 2: es el único corte balanceado que usa los 6 datos confirmados sin duplicar ninguno y sin afirmar nada sin respaldo.

**Esto reemplaza** al *Prompt A de 3 ítems* marcado como ⚠️ OBSOLETO más arriba (estaba armado sobre el dato erróneo de cubre barbilla / cubre nariz) y a la *versión de 4 ítems* del Prompt B (que repetía "Canal para lentes" y "Kit de mecanismo visor", ya presentes en la lista).

### Los 3 errores duros que se corrigen

1. **"DISEÑO MODULAR" → "OPEN FACE".** El excel confirma OPEN FACE. Modular, full face y open face son categorías mutuamente excluyentes: no es un dato faltante, es un claim falso.
2. **"HEBILLA MICROMÉTRICA" → "HEBILLA DOBLE D".** El excel deja micrométrica vacía y confirma doble D con X. Además, en la ficha actual el ícono de hebilla micrométrica viene con una **X/tache encima** — o sea que la pieza afirma en negativo algo que tampoco está confirmado. Se saca el tache: doble D es una característica que el casco **sí** tiene.
3. **"DOT FNVSS 510" → "DOT & ECE 22.06".** El excel dice "DOT & ECE 22.06" para toda la marca. "FNVSS 510" no aparece en ninguna parte del excel.

<details><summary>Prompt A — Tarjeta de homologación Hero (3 ítems, certificación corregida)</summary>

```
Diseñá la tarjeta de HOMOLOGACIÓN del casco EDGEPRO HERO (open face /
tipo jet), reproduciendo EXACTAMENTE la forma, la estructura, la
proporción y el tamaño de la imagen de referencia adjunta: el lienzo
final tiene que tener el MISMO ancho y alto en píxeles que la
referencia (formato vertical angosto), sin recortar, sin estirar y
sin cambiar la relación de aspecto.

QUÉ SE CONSERVA IDÉNTICO A LA REFERENCIA:
- La estructura de 2 bloques apilados: arriba un banner NEGRO sólido
  de ancho completo, abajo una zona de fondo GRIS CLARO con la lista.
- La tipografía: sans serif condensada, mayúsculas, bold, texto blanco
  sobre el negro y texto negro sobre el gris.
- Las líneas horizontales finas grises que separan un ítem del
  siguiente.
- El centrado del texto y los márgenes laterales.

BLOQUE 1 — BANNER NEGRO (arriba, ancho completo):
- Texto "DOT" en letras BLANCAS grandes, bold, centrado.
- Debajo, dentro del mismo banner negro, en blanco y en cuerpo más
  chico: "& ECE 22.06".
- CRÍTICO: la imagen de referencia dice "FNVSS 510" debajo del DOT.
  Ese texto NO se copia. La certificación correcta de este casco,
  según el excel maestro, es "DOT & ECE 22.06". Reemplazalo.

BLOQUE 2 — LISTA (zona gris clara, el resto del alto):
Lista de EXACTAMENTE 3 ítems, en este orden, en mayúsculas, negro,
bold, centrados, separados entre sí por una línea horizontal fina
gris:
1. LINER DESMONTABLE Y LAVABLE
2. KIT DE MECANISMO VISOR
3. CANAL PARA LENTES

CRÍTICO — SON 3 ÍTEMS, NO 7:
La referencia tiene 7 ítems. Esta tarjeta tiene 3. Los otros 4 de la
referencia (VISERA ANTI SCRATCH, PREPARADO PARA ANTI EMPAÑANTE,
SISTEMA DE EMERGENCIA DE LIBERACIÓN RÁPIDA, SISTEMA DE LIBERACIÓN
RÁPIDA DEL VISOR, CUBRE BARBILLA, CUBRE NARIZ) NO se incluyen porque
no están confirmados para este modelo. No los agregues, no los
reemplaces por otros, no rellenes con ítems inventados.

CRÍTICO — ESPACIADO UNIFORME:
El espacio vertical entre los 3 ítems tiene que ser EXACTAMENTE IGUAL
entre todos los pares consecutivos, y el margen superior e inferior de
la lista también parejo. Redistribuí la zona gris completa entre los 3
ítems — NO conserves el espaciado de una tarjeta de 7 ítems dejando
huecos vacíos abajo.

PROHIBIDO ABSOLUTO:
- No mostrar "FNVSS 510" en ninguna parte.
- No agregar un 4°, 5°, 6° ni 7° ítem para "completar" la tarjeta.
- No dejar rectángulos negros sólidos como relleno en ningún lugar
  fuera del banner de certificación.
- No agregar íconos, logos ni gráficos: esta tarjeta es solo texto.
- No cambiar la paleta (negro / gris claro / blanco).
```

</details>

<details><summary>Prompt B — Grid de íconos Hero (3 ítems, 1 fila x 3 columnas)</summary>

```
Diseñá una tarjeta de especificaciones técnicas en formato GRID DE
ÍCONOS de UNA FILA x TRES COLUMNAS (3 celdas en total), resolución 4K,
fondo blanco liso o transparente, para el casco EDGEPRO HERO
(open face / tipo jet).

CRÍTICO — SON 3 CELDAS, NI UNA MÁS:
La imagen de referencia adjunta tiene un grid de 6 celdas (2 columnas
x 3 filas). Esta tarjeta tiene EXACTAMENTE 3 celdas, en UNA sola fila
horizontal. Solo 3 características de este modelo están confirmadas en
el excel maestro.
- En un intento anterior de este mismo caso, el generador devolvió un
  grid con FILAS DE MÁS y con ítems DUPLICADOS, cada repetición con un
  ícono distinto. NO lo repitas.
- Cada uno de los 3 ítems aparece en UNA sola celda, UNA sola vez.
- Antes de terminar, contá las celdas una por una: tienen que ser 3.
  Ninguna repetida, ninguna vacía, ninguna fila extra "por si acaso".

LOS 3 ÍTEMS A REPRESENTAR (en este orden, izquierda a derecha):
1. OPEN FACE
2. ESPACIO PARA BLUETOOTH
3. HEBILLA DOBLE D

LAYOUT: 3 celdas de igual ancho, distribución uniforme y simétrica,
mismo espaciado entre celdas y márgenes iguales en los 4 bordes. Cada
celda: ícono centrado arriba, texto del ítem en mayúsculas centrado
debajo, MISMO tamaño de fuente en las 3 celdas.

ESTILO DE ÍCONO — consistente con la referencia adjunta:
- Estilo lineal, trazo uniforme, sin relleno sólido salvo detalles
  mínimos.
- Color principal rojo/bordo (tono EDGE), cada ícono dentro de un
  octágono de contorno, igual que en la referencia.
- Mismo grosor de trazo, mismo tamaño de octágono y misma paleta en
  los 3 íconos.

CRÍTICO — TRES ÍCONOS NUEVOS, NINGUNO RECICLADO DE LA REFERENCIA:
- "OPEN FACE": dibujá un casco de perfil de tipo JET / open face —
  SIN mentonera, mentón y boca expuestos, con visera abatible. NO
  copies el ícono de "DISEÑO MODULAR" de la referencia (ese muestra
  un casco con mentonera abatible, que es otro tipo de casco). Modular
  y open face son categorías excluyentes y este casco es open face.
- "HEBILLA DOBLE D": dibujá desde cero un broche de dos anillas en
  "D" con la correa pasando entre ellas. NO copies el ícono de
  "HEBILLA MICROMÉTRICA" de la referencia, que además viene con una
  X/tache encima: ese tache NO pasa a esta tarjeta. Este casco SÍ
  tiene hebilla, es de otro tipo.
- "ESPACIO PARA BLUETOOTH": puede mantener el mismo concepto visual
  que en la referencia, redibujado limpio y al mismo trazo que los
  otros dos.

PROHIBIDO ABSOLUTO:
- No incluir "DISEÑO MODULAR" — este casco es OPEN FACE.
- No incluir "HEBILLA MICROMÉTRICA" — el dato confirmado es doble D.
- No incluir "CON LUZ LED", "DOBLE VISERA", "CANAL PARA LENTES",
  "MATERIAL EXTERIOR ABS" ni "INTERIOR EPS": o no están confirmados
  para este modelo, o ya van en la otra tarjeta de la ficha.
- No agregar un 4°, 5° ni 6° ítem para "completar" el grid.
- No poner ninguna X, tache ni marca de negación sobre ningún ícono:
  las 3 celdas son características que el casco SÍ tiene.
- No dejar celdas decorativas vacías ni forzar el layout 2x3 de la
  referencia con huecos.
```

</details>

**Estado:** 🔴 los 2 prompts listos, pendientes de generar.

**Qué hay que hacer:** correr los dos y mandar los resultados para auditoría. Chequeos concretos al recibirlos: (a) que el banner diga "DOT & ECE 22.06" y en ningún lado "FNVSS 510"; (b) que la lista tenga 3 ítems con espaciado parejo y sin hueco vacío abajo; (c) que el grid tenga 3 celdas y ninguna repetida; (d) que el ícono de tipo de casco muestre un jet sin mentonera; (e) que el ícono de hebilla sea de dos anillas en D y **sin tache**.

**Lo que desbloquea tarjetas más completas:** los 5 datos que hay que pedirle al fabricante siguen siendo los mismos (visera anti scratch, preparado para anti empañante, ERS, sistema de liberación rápida del visor, cubre barbilla / cubre nariz). Con esos cargados en el excel, la lista vuelve a 6-7 ítems y el grid a 2x3.

---

## Sub-caso — Foto lifestyle inspirada (Tipo A, distinto del catálogo de specs de arriba)

Pedido aparte del usuario, en paralelo a la auditoría de specs: generar una foto lifestyle del Hero (persona con el casco puesto, plano contrapicado) **inspirada en la composición** de una foto de referencia ajena (persona con un casco integral negro/dorado distinto, mismo tipo de plano contrapicado contra el cielo) — pero usando **únicamente** la geometría/color/diseño del casco real Hero, nunca el casco de la referencia.

Regla aplicada (Lección 7 del pipeline): la referencia de estilo va primero en el payload, la foto real del casco (autoridad) va al final.

<details><summary>Prompt usado</summary>

```
Genera una fotografía de producto tipo lifestyle en 4K, formato vertical
(relación aproximada 3:4, igual que la imagen de referencia de composición).

CRÍTICO — el casco que aparece en la imagen debe ser EXACTAMENTE el casco real
adjunto como autoridad (foto del modelo Hero): open face / tipo jet, negro mate,
visera clara/transparente abatible con mecanismo de pivote visible, ventilación
superior con rejilla, correa con hebilla roja, acolchado interior negro en el
borde. No cambies su geometría, forma, color, ni le agregues ningún gráfico,
diseño, franja ni pintura que no esté en la foto real del casco.

La imagen de referencia de estilo (persona con casco negro, plano contrapicado,
cielo de fondo) se usa ÚNICAMENTE para tomar prestado lo siguiente:
- Ángulo de cámara: contrapicado (desde abajo, mirando hacia arriba)
- Encuadre: persona de hombros hacia arriba, casco puesto, centrada o levemente
  descentrada, con espacio de cielo/fondo claro alrededor de la cabeza
- Iluminación: luz natural suave, cálida, de día despejado
- Mood/composición general: minimalista, editorial, sin elementos que distraigan

PROHIBIDO ABSOLUTO: no copiar el casco de la imagen de referencia (es un
modelo integral/full-face con diseño de pintura distinto, gris/dorado con
líneas — no tiene nada que ver con el casco real que estás usando). La
referencia es SOLO para ángulo, luz y encuadre — el único casco permitido en
la imagen final es el casco real adjunto (Hero), sin excepciones.

Persona modelo: sin rasgos específicos pedidos — cualquier persona con el
casco puesto, rostro no necesariamente visible (el casco puede cubrirlo,
como en la referencia).

Fondo: cielo despejado o levemente nublado, tono cálido/neutro, sin elementos
que compitan visualmente con el casco. Sin logos, sin texto superpuesto,
sin marca de agua.

Orden de imágenes en el payload: 1) foto de referencia de estilo/composición,
2) foto real del casco Hero (autoridad final de geometría y color) — la
imagen del casco real manda sobre cualquier otro detalle.
```

</details>

### Intento 1 — resultado auditado

![Resultado intento 1](pendiente-subir-como-adjunto-real.jpg)

**Estado:** ⚠️ Falló — reintentar con prompt ajustado (ver Intento 2 abajo).

**Qué falló:**
- Formato vertical en vez de horizontal (pedido explícito del usuario).
- Ángulo de cámara 3/4 frontal en vez de perfil lateral, que es el ángulo real del checkpoint.
- **Degradé de color bronce/dorado en la parte inferior del casco** — el casco real es 100% negro mate sin ninguna transición de color. Contaminación del casco de referencia (estilo) hacia la geometría/color del casco real — justo lo que el prompt intentaba prohibir.
- **Forma de la ventilación superior distinta** a la del checkpoint (salió más grande y con forma de rombo; en el real es una rejilla alargada/ovalada más chica).

**Qué hay que hacer:** reintentar con el prompt corregido (Intento 2) — máximo 1-2 reintentos antes de escalar a humano, según la regla del pipeline.

### Intento 2 — prompt corregido

<details><summary>Prompt usado</summary>

```
Genera una fotografía de producto tipo lifestyle en 4K, formato HORIZONTAL
(apaisado, relación aproximada 4:3 — NO vertical/retrato).

ÁNGULO DE CÁMARA: perfil lateral (de lado), igual que la foto de referencia
del casco real (checkpoint) — NO uses un ángulo de 3/4 frontal. La cámara
mira al casco desde el costado, a la altura de los ojos aprox., igual que
en la foto de referencia del casco.

CRÍTICO — el casco que aparece en la imagen debe ser EXACTAMENTE el casco
real adjunto como autoridad (foto del modelo Hero, checkpoint): open face /
tipo jet, 100% negro mate SIN degradé ni ningún otro color (nada de bronce,
dorado ni ninguna transición de color — el intento anterior agregó un
degradé bronce que NO existe en el casco real, no lo repitas), visera
clara/transparente abatible con mecanismo de pivote visible, ventilación
superior con la MISMA forma exacta del checkpoint (rejilla alargada/ovalada
pequeña, no un rombo grande — el intento anterior cambió esta forma, no la
repitas), correa con hebilla roja, acolchado interior negro con costura roja
en el borde. No cambies su geometría, forma, color ni ningún detalle físico.

La imagen de referencia de estilo (persona con casco negro/dorado, cielo de
fondo) se usa ÚNICAMENTE para tomar prestado:
- Iluminación: luz natural suave, cálida, de día despejado
- Mood: minimalista, editorial, sin elementos que distraigan
NO se usa para el ángulo de cámara (eso lo define el checkpoint, ver arriba)
ni para el color/diseño del casco.

PROHIBIDO ABSOLUTO: no copiar el color, degradé, ni ninguna forma del casco
de la imagen de referencia de estilo — el único casco permitido es el casco
real adjunto (Hero), en negro mate puro, sin excepciones.

Persona modelo: sin rasgos específicos pedidos, casco puesto, rostro puede
estar parcialmente visible por el ángulo de perfil.

Fondo: cielo despejado o levemente nublado, tono cálido/neutro, sin
elementos que compitan visualmente con el casco. Sin logos, sin texto
superpuesto, sin marca de agua.

Orden de imágenes en el payload: 1) foto de referencia de estilo/iluminación,
2) foto real del casco Hero de perfil (autoridad final de geometría, color
y ángulo) — la imagen del checkpoint manda sobre cualquier otro detalle.
```

</details>

**Estado:** 🔴 pendiente de generar — esta sesión no tiene conectada una herramienta de generación de imagen, el prompt queda listo para correr en la herramienta ya validada (Nano Banana Pro/OpenRouter).

**Qué falló:** N/A (todavía no generado).

**Qué hay que hacer:** correr el prompt, mandar el resultado para auditoría. Si vuelve a fallar en color/forma/ángulo, es el segundo y último reintento automático antes de escalar a humano (regla del pipeline).

### Intento 3 — mismo casco, nueva referencia de estilo (moody urbano)

El usuario cambió la imagen de referencia de estilo (ahora: motociclista de perfil/espaldas, casco integral negro brillante con parche y sticker, campera de cuero, mochila táctica, fondo urbano de concreto desenfocado, paleta fría/desaturada) — pidió explícitamente **no modificar nada de la descripción del casco Hero**, solo actualizar qué se toma prestado de la referencia (mood, paleta, fondo, vestuario). Mantiene el ángulo de perfil lateral del intento 2 (viene del checkpoint, no de la referencia).

<details><summary>Prompt usado</summary>

```
Genera una fotografía de producto tipo lifestyle en 4K, formato HORIZONTAL
(apaisado, relación aproximada 4:3 — NO vertical/retrato).

ÁNGULO DE CÁMARA: perfil lateral (de lado), igual que la foto de referencia
del casco real (checkpoint) — NO uses un ángulo de 3/4 frontal. La cámara
mira al casco desde el costado, a la altura de los ojos aprox., igual que
en la foto de referencia del casco.

CRÍTICO — el casco que aparece en la imagen debe ser EXACTAMENTE el casco
real adjunto como autoridad (foto del modelo Hero, checkpoint): open face /
tipo jet, 100% negro mate SIN degradé ni ningún otro color (nada de bronce,
dorado ni ninguna transición de color), visera clara/transparente abatible
con mecanismo de pivote visible, ventilación superior con la MISMA forma
exacta del checkpoint (rejilla alargada/ovalada pequeña, no un rombo
grande), correa con hebilla roja, acolchado interior negro con costura roja
en el borde. No cambies su geometría, forma, color ni ningún detalle físico.

La NUEVA imagen de referencia de estilo (persona de espaldas/perfil sobre
una moto, casco integral negro brillante con parche/sticker en la mandíbula,
campera de cuero negra, mochila táctica negra al hombro, fondo urbano de
concreto desenfocado, paleta desaturada y fría, luz difusa de exterior/día
nublado) se usa ÚNICAMENTE para tomar prestado:
- Mood/paleta: tonos fríos, desaturados, urbano/editorial, nada cálido
- Iluminación: luz difusa, suave, de exterior nublado (no sol directo)
- Fondo: concreto/pared urbana desenfocada (bokeh), no cielo
- Vestuario del modelo: campera de cuero negra, guantes negros, mochila al
  hombro — estos elementos de vestuario SÍ se pueden copiar de la referencia
  (no son parte del casco)
- Composición: figura recortada contra el fondo, sensación de movimiento/
  acción congelada

NO se usa la referencia para: el ángulo de cámara (eso lo define el
checkpoint, perfil lateral — la referencia tiene un ángulo de 3/4 trasero,
NO lo copies), ni para el casco (es un modelo integral/full-face distinto,
con visera oscura/ahumada y un parche con bandera sueca — nada de eso debe
aparecer).

PROHIBIDO ABSOLUTO: no copiar el casco de la referencia (integral, visera
oscura, parche/sticker) bajo ninguna forma — el único casco permitido es el
casco real adjunto (Hero, open face, negro mate puro, visera transparente),
sin excepciones. No agregar ningún sticker, parche, bandera ni texto al
casco Hero.

Persona modelo: sin rasgos específicos pedidos, casco puesto, rostro puede
estar parcialmente visible por el ángulo de perfil. Puede llevar campera de
cuero y mochila como en la referencia.

Fondo: pared/concreto urbano desenfocado, tono frío/neutro, sin elementos
que compitan visualmente con el casco. Sin logos, sin texto superpuesto,
sin marca de agua.

Orden de imágenes en el payload: 1) foto de referencia de estilo/mood/
vestuario, 2) foto real del casco Hero de perfil (autoridad final de
geometría, color y ángulo) — la imagen del checkpoint manda sobre
cualquier otro detalle del casco.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué falló:** N/A (todavía no generado).

**Qué hay que hacer:** correr el prompt, mandar el resultado para auditoría.

### Intento 4 — mismo casco, mood/iluminación nocturna descrita SIN adjuntar la foto de referencia

Diferencia clave respecto a los intentos 2 y 3: esta vez la imagen de referencia de estilo (persona con casco integral carbono/glossy, escena nocturna urbana, luces de ciudad desenfocadas) **NO se adjunta al generador** — solo se manda la foto real del casco Hero (checkpoint). Todo el mood/iluminación de la referencia se describe en texto, a propósito, para lograr el mismo look sin copiar visualmente nada de esa foto (ni el casco glossy/carbono, que de todas formas está prohibido).

<details><summary>Prompt usado</summary>

```
Genera una fotografía de producto tipo lifestyle/photoshoot editorial en 4K,
formato vertical (relación aproximada 2:3), escena NOCTURNA urbana.

ADVERTENCIA MÁXIMA — LEER PRIMERO: el casco NO CAMBIA ABSOLUTAMENTE NADA.
Ni su geometría, ni su forma, ni su tamaño, ni sus proporciones, ni su
color, ni su textura/acabado, ni la posición de ningún elemento físico
(ventilación, tornillos, hebilla, correa, mecanismo de la visera,
acolchado). El casco de esta imagen tiene que ser una réplica exacta,
pixel a pixel en cuanto a diseño, del casco real adjunto (checkpoint Hero).
Lo único que cambia en esta imagen es el ENTORNO, la ILUMINACIÓN y la
PERSONA — el casco en sí queda 100% intacto, como si fuera un objeto 3D
fijo que solo se está re-iluminando y fotografiando en un escenario nuevo,
nunca rediseñando.

CRÍTICO — el casco que aparece en la imagen debe ser EXACTAMENTE el casco
real adjunto como autoridad (foto del modelo Hero, checkpoint): open face /
tipo jet, 100% negro MATE (no glossy, no carbono, no textura de fibra —
mate uniforme), visera clara/transparente abatible con mecanismo de pivote
visible, ventilación superior con la forma exacta del checkpoint, correa
con hebilla roja, acolchado interior negro con costura roja. No cambies su
geometría, forma, color, textura ni ningún detalle físico.

ÁNGULO DE CÁMARA: PERFIL LATERAL (de costado), el mismo ángulo exacto de
la foto de referencia de estilo (no adjunta, pero su composición era de
perfil) — NO 3/4, NO frontal, NO trasero. La cámara está al costado de la
persona, mostrando el perfil lateral completo de la cabeza/casco y la
silueta del rostro/mandíbula de lado, igual que en la referencia.

ILUMINACIÓN Y MOOD (descrito en detalle porque NO se adjunta imagen de
referencia, solo el casco — replicar por descripción, no por copia visual):
- Es de noche, ambiente urbano. Temperatura de color general FRÍA/azulada
  en las sombras y el fondo (tonos azul-teal oscuros, casi desaturados).
- De fondo, luces de ciudad totalmente desenfocadas (bokeh): círculos de
  luz borrosos en tonos cálidos — naranja, rojo, blanco cálido — contra el
  azul oscuro del ambiente. Fondo completamente fuera de foco (profundidad
  de campo muy baja), el casco es lo único nítido.
- Iluminación de tipo "low-key" / dramática: mayormente sombras y negros
  profundos, con un realce de luz (rim light / contraluz) marcando el
  contorno superior y lateral del casco — una franja de luz más clara que
  recorre la curvatura de la calota, dejando el resto en penumbra.
- Como el casco es MATE (no glossy), ese realce de luz debe verse suave y
  difuso sobre la superficie — no un reflejo especular nítido como tendría
  una superficie brillante/carbono. Es un degradé de luz suave, no un brillo
  puntual duro.
- Visera: reflejo tenue y difuso de las luces de fondo (los bokeh de colores
  se insinúan levemente en la superficie curva de la visera), sin perder su
  transparencia real.
- Sensación general: cinematográfica, moody, editorial, contemplativa — no
  una foto de estudio de producto plana.

Persona modelo: DE PERFIL (no 3/4, no frontal), casco puesto, campera/hoodie
oscura casual, sin rasgos específicos pedidos, iluminada de forma
consistente con la descripción de arriba (mayormente en sombra, con el
mismo realce de contorno que el casco).

PROHIBIDO ABSOLUTO: no cambiar el casco a un acabado glossy/brillante ni
textura de carbono — sigue siendo el casco real Hero, mate, con la
geometría del checkpoint. No agregar logos, texto ni marca de agua.

RECORDATORIO FINAL: el casco es el ÚNICO elemento de esta imagen que debe
permanecer 100% sin alteraciones respecto al checkpoint adjunto — cero
cambios de diseño, cero reinterpretación creativa del objeto. Todo lo
demás (luz, fondo, persona, ropa) sí es libre de generar según lo descrito.

Orden de imágenes en el payload: SOLO la foto real del casco Hero
(checkpoint, autoridad de geometría/color) — no se adjunta ninguna imagen
de referencia de estilo, todo el mood/iluminación descrito arriba debe
lograrse únicamente a partir de este texto.
```

</details>

**Estado:** 🔴 pendiente de generar. Prompt reforzado a pedido explícito del usuario, agregando advertencia inicial y recordatorio final de que el casco no cambia absolutamente nada.

**Qué falló:** N/A (todavía no generado).

**Qué hay que hacer:** correr el prompt, mandar el resultado para auditoría — prestar especial atención a si el mood nocturno/iluminación se logró solo con la descripción de texto, sin haber visto la foto de referencia.

### Intento 5 — variante diurna del Intento 4 (mismo prompt, cambia solo iluminación de noche a día)

El usuario confirmó que el prompt del Intento 4 (nocturno) quedó muy bien y pidió una variante idéntica pero de día — mismo casco, misma pose de perfil, misma advertencia de geometría intacta, solo cambia el bloque de iluminación/mood de nocturno-frío a diurno-cálido.

<details><summary>Prompt usado</summary>

```
Genera una fotografía de producto tipo lifestyle/photoshoot editorial en 4K,
formato vertical (relación aproximada 2:3), escena DIURNA urbana (variante
de día del prompt nocturno — mismo concepto, mismo casco, misma pose,
distinta hora del día).

ADVERTENCIA MÁXIMA — LEER PRIMERO: el casco NO CAMBIA ABSOLUTAMENTE NADA.
Ni su geometría, ni su forma, ni su tamaño, ni sus proporciones, ni su
color, ni su textura/acabado, ni la posición de ningún elemento físico
(ventilación, tornillos, hebilla, correa, mecanismo de la visera,
acolchado). El casco de esta imagen tiene que ser una réplica exacta,
pixel a pixel en cuanto a diseño, del casco real adjunto (checkpoint Hero).
Lo único que cambia en esta imagen es el ENTORNO, la ILUMINACIÓN y la
PERSONA — el casco en sí queda 100% intacto, como si fuera un objeto 3D
fijo que solo se está re-iluminando y fotografiando en un escenario nuevo,
nunca rediseñando.

CRÍTICO — el casco que aparece en la imagen debe ser EXACTAMENTE el casco
real adjunto como autoridad (foto del modelo Hero, checkpoint): open face /
tipo jet, 100% negro MATE (no glossy, no carbono, no textura de fibra —
mate uniforme), visera clara/transparente abatible con mecanismo de pivote
visible, ventilación superior con la forma exacta del checkpoint, correa
con hebilla roja, acolchado interior negro con costura roja. No cambies su
geometría, forma, color, textura ni ningún detalle físico.

ÁNGULO DE CÁMARA: PERFIL LATERAL (de costado), mismo ángulo que en la
versión nocturna de este prompt — NO 3/4, NO frontal, NO trasero.

ILUMINACIÓN Y MOOD — VARIANTE DIURNA (mismo concepto que la versión
nocturna, adaptado a luz de día):
- Es de DÍA, ambiente urbano, cielo despejado o parcialmente nublado.
  Temperatura de color general CÁLIDA/natural en las luces, con sombras
  suaves y algo de tono neutro-azulado solo en las zonas de sombra
  profunda (no en toda la imagen, como sí pasaba de noche).
- De fondo, la misma idea de ciudad totalmente desenfocada (bokeh), pero
  ahora con luces de día: reflejos de vidrio, follaje o tránsito borroso,
  en tonos cálidos y neutros (no luces artificiales de noche). Fondo
  completamente fuera de foco, el casco es lo único nítido.
- Iluminación de tipo "high-key" suave / luz natural de día — más
  luminosidad general que la versión nocturna, pero manteniendo el mismo
  recurso compositivo: un realce de luz (rim light natural, por ejemplo
  contraluz de sol) marcando el contorno superior y lateral del casco,
  con el resto del casco en luz suave difusa (no en penumbra oscura como
  de noche, pero sí con ese mismo contraste de contorno iluminado).
- Como el casco es MATE (no glossy), ese realce de luz debe verse suave y
  difuso sobre la superficie — no un reflejo especular nítido. Mismo
  criterio que en la versión nocturna, adaptado a luz de sol.
- Visera: reflejo tenue y difuso del entorno diurno (cielo, luces
  ambientales), sin perder su transparencia real.
- Sensación general: cinematográfica, editorial, la misma que la versión
  nocturna pero en clave luminosa/diurna — no una foto de estudio plana.

Persona modelo: de perfil (mismo criterio que la versión nocturna), casco
puesto, campera/hoodie oscura casual, sin rasgos específicos pedidos,
iluminada de forma consistente con la descripción de arriba.

PROHIBIDO ABSOLUTO: no cambiar el casco a un acabado glossy/brillante ni
textura de carbono — sigue siendo el casco real Hero, mate, con la
geometría del checkpoint. No agregar logos, texto ni marca de agua.

RECORDATORIO FINAL: el casco es el ÚNICO elemento de esta imagen que debe
permanecer 100% sin alteraciones respecto al checkpoint adjunto — cero
cambios de diseño, cero reinterpretación creativa del objeto. Todo lo
demás (luz, fondo, persona, ropa) sí es libre de generar según lo descrito.

Orden de imágenes en el payload: SOLO la foto real del casco Hero
(checkpoint, autoridad de geometría/color) — no se adjunta ninguna imagen
de referencia de estilo, todo el mood/iluminación descrito arriba debe
lograrse únicamente a partir de este texto.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt y mandar el resultado para auditoría.

---

**Última actualización:** 2026-07-28 · Agente 0 (transcripción) + Agente Auditor independiente (verificación + adaptación de prompts), corridos en esta sesión a pedido explícito de auditar el tercer caso del catálogo (Hero). Sub-caso de foto lifestyle: intento 1 auditado con 4 defectos (formato, ángulo, degradé de color, forma de ventilación), intento 2 con prompt corregido, intento 4 nocturno confirmado por el usuario como muy bueno, intento 5 variante diurna del mismo prompt. Corrección posterior: una lectura errónea de una captura de excel de baja resolución había marcado "Cubre barbilla" y "Cubre nariz" como confirmados para Hero; una captura nítida posterior mostró que ambas celdas están vacías — se revirtió a SIN DATO (veredicto de vuelta en 3 MATCH · 1 MISMATCH · 9 SIN DATO), el Prompt A vuelve a quedar bloqueado y su versión de 3 ítems quedó marcada como obsoleta. Nueva actualización: el Prompt B (grid de íconos, 4 ítems) se corrió y falló — salió un grid de 6 celdas (2x3) con "Kit de mecanismo visor" y "Hebilla doble D" duplicados con ícono distinto en cada repetición, a pesar de la advertencia explícita del prompt. Se documentó como Intento 1 y se agregó el Intento 2 con el prompt reforzado, nombrando explícitamente los 2 ítems que se duplicaron, pendiente de correr.

**2026-07-29 —** a pedido explícito del usuario ("los dos prompts para arreglar esos dos objetos del Hero") se armó la **versión definitiva de las 2 tarjetas con reparto 3 + 3**, que destraba el Prompt A sin afirmar nada sin respaldo: en vez de tratar cada tarjeta por separado (lo que dejaba a la lista con 1 solo ítem confirmado), se reparten los 6 datos confirmados de la columna Hero entre las dos, sin repetir ninguno — igual que la ficha original, cuyos dos bloques son conjuntos disjuntos. Lista: liner desmontable y lavable / kit de mecanismo visor / canal para lentes. Grid: open face / espacio para Bluetooth / hebilla doble D. Se corrigen los 3 errores duros: "diseño modular" → "open face", "hebilla micrométrica" (con tache) → "hebilla doble D" (sin tache), "DOT FNVSS 510" → "DOT & ECE 22.06". Quedan obsoletos el Prompt A de 3 ítems (dato erróneo) y el Prompt B de 4 ítems (repetía ítems de la lista). Además se corrigió la transcripción del excel: **Master Box e Inner Box están vacías para Hero**, no con X — la columna Hero tiene exactamente 5 celdas con X, como ya decía la nota de corrección, y la tabla de transcripción se había quedado desalineada con ese conteo.
