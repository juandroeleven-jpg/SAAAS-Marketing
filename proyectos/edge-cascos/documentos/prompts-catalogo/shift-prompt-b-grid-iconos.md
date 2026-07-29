# Prompt B — Grid de íconos 2x3 — EDGEPRO SHIFT (corregido 2026-07-29)

Correcciones aplicadas sobre la versión original:
1. Se eliminó la contradicción "resolución 4K" vs. "mismas dimensiones en píxeles que la referencia": ahora se pide misma relación de aspecto y misma proporción interna, renderizado en alta resolución con todo escalando proporcionalmente.
2. Contenido de los 6 ítems verificado contra el Excel (todos X para Shift) — sin cambios de contenido.

---

```
Diseñá un grid de íconos 2x3 para el casco EDGEPRO SHIFT (FULL FACE).
El lienzo tiene la MISMA RELACIÓN DE ASPECTO que la imagen de
referencia adjunta, renderizado en ALTA RESOLUCIÓN: todos los
elementos (celdas, octágonos, trazos, texto) escalan
PROPORCIONALMENTE respecto de la referencia — misma proporción
interna, más píxeles. Fondo gris claro uniforme, íconos lineales
rojo/bordo dentro de un octágono, mismo estilo gráfico que la
referencia, con el texto de cada ítem en mayúsculas, bold, centrado
debajo de su ícono.

CRÍTICO — EL LIENZO ES UNA CONSTANTE, NO SE ESTIRA:
- El lienzo final debe tener EXACTAMENTE la misma relación de aspecto
  que la imagen de referencia adjunta, con los MISMOS márgenes
  laterales relativos y el MISMO tamaño relativo de celda, de
  octágono, de trazo y de cuerpo de texto.
- ESTE GRID TIENE 6 CELDAS Y LA REFERENCIA TAMBIÉN TIENE 6 (2 columnas
  x 3 filas). La cantidad de celdas NO CAMBIA, así que las
  proporciones del lienzo tampoco cambian.
- La cantidad de celdas NUNCA modifica las proporciones del lienzo. El
  lienzo es una CONSTANTE, el reparto interno es la VARIABLE. Aunque
  una etiqueta sea más larga que la de la referencia, el lienzo no
  crece: se ajusta el cuerpo de texto dentro de su celda.
- PROHIBIDO estirar el lienzo en cualquier dirección, agrandar las
  celdas, los octágonos, los íconos o el texto "para aprovechar el
  espacio". ATENCIÓN: en otra pieza de este mismo catálogo el lienzo
  salió estirado a una relación de 1 : 2,47 en vez de 1 : 2 por no
  declarar esto. NO LO REPITAS.

CRÍTICO — CONTEO FORZADO DE CELDAS (hallazgo real de este catálogo: con
un prompt que solo decía "2x3" una vez, un generador devolvió un grid
con una fila de más e ítems DUPLICADOS, dibujando un arte distinto en
cada repetición del mismo ítem — prestar máxima atención acá):
- El grid debe tener EXACTAMENTE 2 columnas x 3 filas = 6 celdas en
  total. NUNCA 2x4, NUNCA 8 celdas, NUNCA una fila o columna de más,
  NUNCA una celda vacía de relleno.
- Cada uno de los 6 ítems aparece en UNA sola celda, UNA sola vez — no
  dupliques ningún ítem para rellenar una fila extra, ni aunque sobre
  espacio.
- Ningún pictograma puede repetirse en dos celdas: los 6 dibujos son
  distintos entre sí, igual que los 6 textos.
- Antes de entregar, contá las celdas UNA POR UNA: deben ser 6, ni una
  más ni una menos, ninguna repetida, ninguna vacía.

LISTA DE ÍTEMS (exactamente 6, en este orden, uno por celda, leyendo de
izquierda a derecha y de arriba a abajo):
1. KIT DE MECANISMO VISOR
2. CON PINLOCK
3. CANAL PARA LENTES
4. HEBILLA DOBLE D
5. DOBLE VISERA
6. ESPACIO PARA BLUETOOTH

CRÍTICO — REGLA DE TACHES / MARCAS DE NEGACIÓN:
- Un tache (X, cruz, barra diagonal, círculo con línea, símbolo de
  prohibición) SOLO puede aparecer sobre un ítem que el casco NO tenga.
- Los 6 ítems de esta lista están TODOS confirmados como presentes en
  este casco, así que NINGUNO lleva tache: los 6 íconos se dibujan en
  positivo, limpios, sin ninguna marca superpuesta, de ningún color y
  de ningún tamaño.
- ATENCIÓN ESPECIAL: la imagen de referencia muestra el ícono de
  "HEBILLA MICROMÉTRICA" con una X ROJA GRANDE tachándolo. Ese ítem NO
  va en este grid: su celda la ocupa "HEBILLA DOBLE D", que es la
  hebilla que este casco SÍ tiene. Ni el ítem tachado ni su X pasan al
  resultado.

CRÍTICO — ÍCONOS NUEVOS, NO RECICLADOS:
- Diseñá un pictograma propio, específico y correcto para cada uno de
  los 6 ítems de la lista.
- "HEBILLA DOBLE D" necesita un ícono NUEVO, dibujado desde cero: un
  broche de DOS ANILLAS EN "D" con la correa pasando entre ellas. NO
  copies ni adaptes el ícono de "HEBILLA MICROMÉTRICA" de la
  referencia: aunque sea el mismo tipo de pieza (el cierre de la
  correa), son broches físicamente distintos. Y por supuesto, sin la X
  roja que ese ícono trae en la referencia.
- "KIT DE MECANISMO VISOR" y "CON PINLOCK" probablemente no existan en
  la referencia: creá sus pictogramas desde cero (ideas: para el kit,
  el mecanismo/pivote lateral del visor con su tornillo; para el
  Pinlock, la lámina interna del visor con sus dos pines laterales).
- No copies el dibujo interno de un ícono de la referencia que
  corresponda a un ítem distinto del de esta lista — en particular, NO
  reutilices los íconos que en la referencia corresponden a "DISEÑO
  MODULAR" ni a "CON LUZ LED", porque esos ítems no van en esta pieza.
- De la referencia tomá SOLO el estilo visual (línea, grosor, color
  rojo/bordo, forma de octágono, tipografía) — nunca un defecto, una
  marca de exclusión ni el pictograma de otro ítem.

CRÍTICO — TEXTO COMPLETO: la etiqueta de cada celda debe reproducirse
COMPLETA, tal cual está escrita en la lista — no la acortes ni le
quites palabras (ej. "KIT DE MECANISMO VISOR" completo, no "KIT DE
MECANISMO"; "ESPACIO PARA BLUETOOTH" completo, no "BLUETOOTH").

PROHIBIDO ABSOLUTO:
- NO incluir "DISEÑO MODULAR" — el excel confirma que el Shift es FULL
  FACE, y full face y modular son categorías excluyentes.
- NO incluir "CON LUZ LED" — N/A confirmado para el Shift.
- NO incluir "HEBILLA MICROMÉTRICA" en ninguna forma, ni tachada ni
  limpia ni parcial — N/A confirmado para el Shift. Su celda la ocupa
  "HEBILLA DOBLE D".
- NO incluir "SISTEMA DE LIBERACIÓN RÁPIDA DEL VISOR" (Quick Visor
  Release System) — N/A confirmado para el Shift. Ojo: "KIT DE
  MECANISMO VISOR", que sí va, es una fila distinta del excel y sí está
  confirmada; no las confundas ni las fusiones en una sola celda.
- NO incluir "VISERA ANTI SCRATCH", "PREPARADO PARA ANTI EMPAÑANTE",
  "SISTEMA DE EMERGENCIA DE LIBERACIÓN RÁPIDA", "LINER DESMONTABLE Y
  LAVABLE", "MATERIAL EXTERIOR ABS ALTA RESISTENCIA", "INTERIOR EPS DE
  ALTA RESISTENCIA", "CUBRE BARBILLA" ni "CUBRE NARIZ" — esos 8 van en
  la tarjeta de homologación (Prompt A) y las 2 piezas nunca comparten
  ítems.
- NO tachar ningún ícono, con ninguna marca, en ninguna celda.
- NO duplicar ítems ni repetir un pictograma en dos celdas.
- NO agregar destellos, estrellas, brillos, sparkles, degradés,
  sombras, marcos ni ningún elemento decorativo que no esté en la
  imagen de referencia.
- NO usar rectángulos negros sólidos como placeholder en ninguna parte
  de la pieza.
- NO estirar el lienzo ni inflar celdas, íconos o texto.

VERIFICACIÓN FINAL — ANTES DE ENTREGAR, CHEQUEÁ ESTAS 6 COSAS:
1. ¿Contaste las celdas una por una y son EXACTAMENTE 6, en 2 columnas
   x 3 filas, ninguna repetida y ninguna vacía?
2. ¿La relación de aspecto del lienzo, los márgenes relativos y el
   tamaño relativo de celda coinciden con los de la referencia, sin
   estirar ni inflar nada?
3. ¿Hay alguna X, tache o marca de negación sobre algún ícono? Si la
   hay, sacala: los 6 ítems son features que el casco SÍ tiene.
4. ¿El ícono de la hebilla muestra DOS ANILLAS EN "D" y no el broche
   micrométrico de la referencia?
5. ¿Los 6 pictogramas son distintos entre sí y ninguno es el de un ítem
   que no está en la lista?
6. ¿Las 6 etiquetas están completas, sin ninguna truncada?
```
