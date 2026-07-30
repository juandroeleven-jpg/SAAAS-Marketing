# Prompt A — Tarjeta de HOMOLOGACIÓN — EDGE BOSTON (v2 — 2026-07-30)

Cambios v2 tras re-verificar contra la columna Boston completa del
Excel: (1) se agregó "SISTEMA DE LIBERACIÓN RÁPIDA DEL VISOR" (Quick
Visor Release = X para Boston, faltaba en la ficha) — la tarjeta pasa
de 7 a 8 ítems / 7 separadores; (2) banner "DOT & ECE 22.06"
reforzado con verificación explícita (el generador viene copiando
"FNVSS 510" de las referencias); (3) regla "un ítem por renglón, texto
exacto".

---

```
Diseñá la tarjeta de HOMOLOGACIÓN del casco EDGE BOSTON (MODULAR /
FLIP UP),
reproduciendo el layout de la imagen de referencia adjunta. Es una
reproducción de un layout fijo: lo ÚNICO que cambia respecto de la
referencia es QUÉ DICE la lista y qué dice el banner de certificación.
Todo lo demás —dimensiones, proporciones, tipografía, paleta,
separadores, cantidad de ítems— se reproduce igual.

CRÍTICO — EL LIENZO ES UNA CONSTANTE, NO SE ESTIRA:
- El lienzo final tiene que tener EXACTAMENTE el mismo ancho y el mismo
  alto en píxeles que la imagen de referencia adjunta. Es un rectángulo
  vertical angosto con una relación de aspecto de aproximadamente
  1 : 2 — el alto es aproximadamente el DOBLE del ancho. El resultado
  tiene que dar esa misma relación: alto ÷ ancho ≈ 2.
- ESTA TARJETA TIENE 8 ÍTEMS Y LA REFERENCIA TIENE 7. Aunque haya un
  ítem más, el lienzo NO CAMBIA: mismo ancho, mismo alto. Lo que se
  ajusta es el reparto interno: renglones apenas más compactos.
- La cantidad de ítems NUNCA modifica las dimensiones del lienzo. El
  lienzo es una CONSTANTE, el reparto interno es la VARIABLE. Aunque
  un texto sea más largo o más corto que el de la referencia, el
  lienzo no crece ni se achica: se ajusta el reparto interno.
- ATENCIÓN, ESTE ERROR YA PASÓ EN OTRA TARJETA DE ESTE MISMO CATÁLOGO:
  el resultado salió de aproximadamente 415 x 1024 px, o sea una
  relación de 1 : 2,47 en vez de 1 : 2 — una tarjeta claramente
  ESTIRADA hacia abajo. NO LO REPITAS.

ESTRUCTURA — 3 BLOQUES APILADOS, DE ARRIBA HACIA ABAJO (describir los
3 por separado es obligatorio: en un intento anterior de este catálogo
el prompt describía solo 2 y el bloque no descrito se copió de la
referencia con una falta de ortografía adentro):

BLOQUE 1 — FRANJA DE TÍTULO (arriba de todo, angosta, fondo GRIS CLARO):
- Una sola línea de texto: "HOMOLOGACIÓN", en negro, bold, MAYÚSCULAS,
  centrada. Nada más en este bloque.
- OJO CON LA ORTOGRAFÍA: la palabra correcta es "HOMOLOGACIÓN", con la
  letra I entre la C y la O finales, y con tilde en la O:
  H-O-M-O-L-O-G-A-C-I-Ó-N. Si la referencia dice "HOMOLOGACÓN" (sin la
  I), NO copies esa falta. Escribila bien.
- Es una franja angosta: ocupa poco alto, solo lo necesario para el
  texto más un margen chico arriba y abajo.

BLOQUE 2 — BANNER NEGRO (debajo del título, ancho completo del lienzo):
- Rectángulo sólido NEGRO que ocupa TODO el ancho del lienzo, de borde
  a borde, y aproximadamente el 20-25 % DEL ALTO TOTAL de la tarjeta.
- Adentro, el texto "DOT" en letras BLANCAS enormes, bold, centrado,
  ocupando la mayor parte del banner (como una insignia/logo).
- Debajo de "DOT", dentro del mismo banner negro, en blanco, en cuerpo
  bastante más chico y centrado: "& ECE 22.06".
- MÁXIMA ATENCIÓN — ESTE ERROR VIENE OCURRIENDO EN OTRAS TARJETAS DE
  ESTE MISMO CATÁLOGO: el resultado copia "FNVSS 510" de la
  referencia debajo del DOT. ESO ES UN ERROR. "FNVSS 510" NO EXISTE en
  la fuente de datos. La única línea secundaria válida debajo de "DOT"
  es "& ECE 22.06". Si al terminar el banner dice "FNVSS 510" en
  cualquier parte, el resultado está MAL y hay que rehacerlo.

BLOQUE 3 — LISTA DE ÍTEMS (fondo GRIS CLARO, todo el alto restante):
Lista de EXACTAMENTE 8 ítems, en este orden, en MAYÚSCULAS, negro,
bold, centrados horizontalmente:
1. VISERA ANTI SCRATCH
2. PREPARADO PARA ANTI EMPAÑANTE
3. SISTEMA DE EMERGENCIA DE LIBERACIÓN RÁPIDA
4. LINER DESMONTABLE Y LAVABLE
5. SISTEMA DE LIBERACIÓN RÁPIDA DEL VISOR
6. INTERIOR EPS DE ALTA RESISTENCIA
7. CUBRE BARBILLA
8. CUBRE NARIZ

CRÍTICO — CONTEO FORZADO DE ÍTEMS (hallazgo real de este catálogo: un
generador devolvió una tarjeta con un ítem repetido de más, y en otra
pieza devolvió filas de más con ítems duplicados y arte distinto en
cada repetición — prestar máxima atención acá):
- La lista tiene EXACTAMENTE 8 ítems. NUNCA 7, NUNCA 9.
- Cada renglón contiene UN (1) solo ítem, con el texto EXACTO de la
  lista, sin palabras agregadas, quitadas ni mezcladas. PROHIBIDO
  fusionar dos ítems en un renglón (en otras tarjetas de este catálogo
  el generador fusionó dos conceptos en una sola frase — no lo
  repitas).
- OJO: "SISTEMA DE EMERGENCIA DE LIBERACIÓN RÁPIDA" (ítem 3) y
  "SISTEMA DE LIBERACIÓN RÁPIDA DEL VISOR" (ítem 5) son DOS ítems
  DISTINTOS del excel: uno es del casco (ERS) y el otro del visor. Van
  los dos, en renglones separados, sin fusionarlos.
- Cada ítem aparece UNA sola vez — no repitas ninguno para rellenar.
- Antes de entregar, contá los renglones UNO POR UNO y compará cada
  texto contra la lista: 8 renglones, ninguno repetido, ninguno
  fusionado, ninguno omitido.

CRÍTICO — LOS SEPARADORES SON LÍNEAS FINAS, NO BANDAS (defecto real de
este catálogo: descritos solo como "línea horizontal fina gris",
volvieron como bandas de ancho completo que partían la tarjeta en
bloques macizos — no lo repitas). Geometría exacta del separador:
- Es un GUION / LÍNEA HORIZONTAL de 1 a 2 PÍXELES de grosor. Fino como
  un trazo de lápiz, no como una barra.
- Es de color GRIS medio, apenas más oscuro que el fondo gris claro,
  solo lo suficiente para que se vea.
- Es CORTO: ocupa aproximadamente entre un 15 % y un 25 % del ancho de
  la tarjeta, NO MÁS. NO llega a los bordes laterales: queda mucho
  espacio gris vacío a su izquierda y a su derecha.
- Va CENTRADO horizontalmente, en el eje vertical de la tarjeta,
  alineado con el centrado del texto.
- Son EXACTAMENTE 7 separadores: uno entre cada par de ítems
  consecutivos. No va separador arriba del ítem 1 ni debajo del ítem 8.
- PROHIBIDO convertirlos en bandas o franjas horizontales de ancho
  completo, en barras gruesas, en divisores de sección, o en bloques de
  fondo de un tono de gris distinto al del resto de la zona gris.
- El fondo gris claro del Bloque 3 es UNO SOLO y CONTINUO de arriba
  abajo: los separadores se dibujan encima, no lo dividen en zonas de
  distinto tono.

CRÍTICO — RITMO VERTICAL: AIRE PAREJO PERO ACOTADO:
- El espacio vertical entre los 8 ítems tiene que ser EXACTAMENTE IGUAL
  entre todos los pares consecutivos, y los márgenes superior e
  inferior de la lista también parejos entre sí.
- Los 8 ítems forman un GRUPO compacto que ocupa casi toda la zona
  gris, igual que en la referencia. Es una LISTA y se tiene que leer
  como una lista: renglones cercanos entre sí separados por su guion
  fino, no secciones independientes con huecos vacíos.

CRÍTICO — TEXTO COMPLETO: los 8 ítems deben tener su texto visible,
completo y legible, tal cual está escrito en la lista — ninguno puede
quedar en blanco, cortado, acortado ni con solo la línea separadora sin
texto arriba (ej. "INTERIOR EPS DE ALTA RESISTENCIA" completo, no
"INTERIOR EPS" solo; "SISTEMA DE EMERGENCIA DE LIBERACIÓN RÁPIDA"
completo, no "SISTEMA DE EMERGENCIA" solo).

QUÉ SE CONSERVA IDÉNTICO A LA REFERENCIA:
- La tipografía: sans serif condensada, MAYÚSCULAS, bold, texto blanco
  sobre el negro y texto negro sobre el gris.
- La paleta: NEGRO / GRIS CLARO / BLANCO, nada más.
- El centrado del texto y los márgenes laterales.
- El orden de los 3 bloques apilados y su proporción relativa.

PROHIBIDO ABSOLUTO:
- NO incluir "DISEÑO MODULAR", "CON LUZ LED", "MATERIAL EXTERIOR ABS
  ALTA RESISTENCIA", "DOBLE VISERA", "HEBILLA MICROMÉTRICA" ni
  "ESPACIO PARA BLUETOOTH" — esos 6 van en el grid de íconos
  (Prompt B) y las 2 piezas nunca comparten ítems.
- NO escribir "HOMOLOGACÓN" (sin la I). Se escribe "HOMOLOGACIÓN".
- NO mostrar "FNVSS 510" en ninguna parte de la tarjeta.
- NO cambiar la relación de aspecto del lienzo. Nada de estirar hacia
  abajo, nada de agrandar ni achicar la tarjeta.
- NO convertir los separadores en bandas horizontales de ancho
  completo, barras gruesas ni bloques de fondo de otro tono.
- NO agregar destellos, estrellas, brillos, sparkles, chispas, líneas
  decorativas, degradés, sombras, texturas, marcos, íconos, logos ni
  NINGÚN elemento gráfico que no esté en la imagen de referencia. Esta
  tarjeta es SOLO texto sobre bloques de color plano.
- NO agregar un 9° ítem ni omitir ninguno de los 8.
- NO usar rectángulos negros sólidos como placeholder en ningún lugar
  fuera del banner de certificación del Bloque 2.
- NO poner ninguna X, tache, cruz ni marca de negación sobre ningún
  texto: los 8 ítems son características que el casco SÍ tiene.
- NO cambiar la paleta (negro / gris claro / blanco).

VERIFICACIÓN FINAL — ANTES DE ENTREGAR, CHEQUEÁ ESTAS 7 COSAS:
1. ¿El ALTO dividido el ANCHO del lienzo da aproximadamente 2, igual
   que la referencia? Si da 2,4 o más, la tarjeta está ESTIRADA:
   rehacela con el alto correcto.
2. ¿Contaste los renglones uno por uno y son EXACTAMENTE 8, ninguno
   repetido, ninguno fusionado?
3. ¿Los separadores son GUIONES FINOS, CORTOS Y CENTRADOS, que no
   llegan a los bordes — y no bandas horizontales de ancho completo?
   ¿Son exactamente 7?
4. ¿El título dice "HOMOLOGACIÓN" completo, con la I y con la tilde?
5. ¿El banner negro dice "DOT" y "& ECE 22.06", y en ninguna parte
   aparece "FNVSS 510"?
6. ¿Hay algún elemento decorativo que NO esté en la imagen de
   referencia? Si lo hay, sacalo.
7. ¿Los 8 textos están completos, incluidos los DOS sistemas de
   liberación rápida (el del casco y el del visor), sin ninguno
   truncado?
```
