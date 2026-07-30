# Prompt A — Tarjeta de HOMOLOGACIÓN — EDGEPRO CARBEX (corregido 2026-07-29)

Correcciones: banner "FNVSS 510" → "DOT & ECE 22.06" (Excel); CON PINLOCK agregado (X en Excel, faltaba). Tarjeta de 8 ítems / 7 separadores (la referencia tiene 7).

---

Diseñá la tarjeta de HOMOLOGACIÓN del casco EDGEPRO CARBEX (FULL
FACE), reproduciendo el layout de la imagen de referencia adjunta. Es
una reproducción de un layout fijo: lo ÚNICO que cambia respecto de la
referencia es QUÉ DICE la lista y qué dice el banner de certificación.
Todo lo demás —dimensiones, proporciones, tipografía, paleta,
separadores— se reproduce igual.

CRÍTICO — EL LIENZO ES UNA CONSTANTE, NO SE ESTIRA:
- El lienzo final tiene que tener EXACTAMENTE el mismo ancho y el mismo
  alto en píxeles que la imagen de referencia adjunta. Es un rectángulo
  vertical angosto con una relación de aspecto de aproximadamente
  1 : 2 — el alto es aproximadamente el DOBLE del ancho: alto ÷ ancho
  ≈ 2.
- ESTA TARJETA TIENE 8 ÍTEMS Y LA REFERENCIA TIENE 7. Aunque haya un
  ítem más, el lienzo NO CAMBIA: mismo ancho, mismo alto. Lo que se
  ajusta es el reparto interno: renglones apenas más compactos.
- La cantidad de ítems NUNCA modifica las dimensiones del lienzo. El
  lienzo es una CONSTANTE, el reparto interno es la VARIABLE.
- ATENCIÓN, ESTE ERROR YA PASÓ EN OTRA TARJETA DE ESTE MISMO CATÁLOGO:
  el resultado salió estirado a una relación de 1 : 2,47 en vez de
  1 : 2. NO LO REPITAS.

ESTRUCTURA — 3 BLOQUES APILADOS, DE ARRIBA HACIA ABAJO (describir los
3 por separado es obligatorio: en un intento anterior de este catálogo
el prompt describía solo 2 y el bloque no descrito se copió de la
referencia con una falta de ortografía adentro):

BLOQUE 1 — FRANJA DE TÍTULO (arriba de todo, angosta, fondo GRIS CLARO):
- Una sola línea de texto: "HOMOLOGACIÓN", en negro, bold, MAYÚSCULAS,
  centrada. Nada más en este bloque.
- OJO CON LA ORTOGRAFÍA: H-O-M-O-L-O-G-A-C-I-Ó-N, con la I entre la C
  y la O finales y con tilde en la O. Si la referencia dice
  "HOMOLOGACÓN" (sin la I), NO copies esa falta.
- Es una franja angosta: solo el texto más un margen chico.

BLOQUE 2 — BANNER NEGRO (debajo del título, ancho completo del lienzo):
- Rectángulo sólido NEGRO, de borde a borde, aproximadamente el
  20-25 % del alto total de la tarjeta.
- Adentro, "DOT" en letras BLANCAS enormes, bold, centrado.
- Debajo de "DOT", en blanco, cuerpo más chico, centrado:
  "& ECE 22.06".
- CRÍTICO: la referencia dice "FNVSS 510" debajo del DOT. Ese texto NO
  se copia. La certificación correcta según el excel maestro es
  "DOT & ECE 22.06". Reemplazalo.

BLOQUE 3 — LISTA DE ÍTEMS (fondo GRIS CLARO, todo el alto restante):
Lista de EXACTAMENTE 8 ítems, en este orden, en MAYÚSCULAS, negro,
bold, centrados horizontalmente:
1. VISERA ANTI SCRATCH
2. PREPARADO PARA ANTI EMPAÑANTE
3. CON PINLOCK
4. SISTEMA DE EMERGENCIA DE LIBERACIÓN RÁPIDA (ERS)
5. LINER DESMONTABLE Y LAVABLE
6. SISTEMA DE LIBERACIÓN RÁPIDA DEL VISOR
7. CUBRE BARBILLA
8. CUBRE NARIZ

CRÍTICO — CONTEO FORZADO DE ÍTEMS (hallazgo real de este catálogo: un
generador devolvió una tarjeta con un ítem repetido de más, y en otra
pieza filas de más con ítems duplicados — máxima atención):
- La lista tiene EXACTAMENTE 8 ítems. NUNCA 7, NUNCA 9.
- Cada ítem aparece UNA sola vez — no repitas ninguno para rellenar.
- Antes de entregar, contá los renglones UNO POR UNO: 8, ninguno
  repetido, cada uno con texto distinto de los otros 7.

CRÍTICO — LOS SEPARADORES SON LÍNEAS FINAS, NO BANDAS (defecto real de
este catálogo — no lo repitas). Geometría exacta:
- GUION horizontal de 1 a 2 píxeles de grosor, gris medio, apenas más
  oscuro que el fondo.
- CORTO: entre un 15 % y un 25 % del ancho de la tarjeta, NO llega a
  los bordes laterales.
- CENTRADO horizontalmente, alineado con el texto.
- Son EXACTAMENTE 7 separadores: uno entre cada par de ítems
  consecutivos. No va arriba del ítem 1 ni debajo del ítem 8.
- PROHIBIDO convertirlos en bandas de ancho completo, barras gruesas o
  bloques de otro tono. El fondo gris del Bloque 3 es UNO SOLO y
  CONTINUO: los separadores se dibujan encima.

CRÍTICO — RITMO VERTICAL: espacio idéntico entre los 8 ítems, márgenes
parejos, grupo compacto que se lee como una lista.

CRÍTICO — TEXTO COMPLETO: los 8 ítems con su texto completo y legible,
ninguno en blanco, cortado ni acortado (ej. "SISTEMA DE LIBERACIÓN
RÁPIDA DEL VISOR" completo, no "SISTEMA DE LIBERACIÓN").

QUÉ SE CONSERVA IDÉNTICO A LA REFERENCIA:
- Tipografía sans serif condensada, MAYÚSCULAS, bold; blanco sobre
  negro y negro sobre gris.
- Paleta: NEGRO / GRIS CLARO / BLANCO, nada más.
- Centrado, márgenes laterales, orden y proporción de los 3 bloques.

PROHIBIDO ABSOLUTO:
- NO incluir "CANAL PARA LENTES", "HEBILLA DOBLE D", "ESPACIO PARA
  BLUETOOTH", "KIT DE MECANISMO VISOR", "MATERIAL EXTERIOR ABS ALTA
  RESISTENCIA" ni "INTERIOR EPS DE ALTA RESISTENCIA" — esos 6 van en
  el grid de íconos (Prompt B) y las 2 piezas nunca comparten ítems.
- NO incluir "DOBLE VISERA" ni "HEBILLA MICROMÉTRICA" — N/A
  confirmados para el Carbex.
- NO escribir "HOMOLOGACÓN" (sin la I).
- NO mostrar "FNVSS 510" en ninguna parte de la tarjeta.
- NO cambiar la relación de aspecto del lienzo. Nada de estirar.
- NO convertir los separadores en bandas de ancho completo.
- NO agregar destellos, estrellas, brillos, degradés, sombras, marcos,
  íconos ni logos: SOLO texto sobre bloques de color plano.
- NO agregar un 9° ítem ni omitir ninguno de los 8.
- NO usar rectángulos negros sólidos fuera del banner del Bloque 2.
- NO poner ninguna X ni tache sobre ningún texto.

VERIFICACIÓN FINAL — CHEQUEÁ ESTAS 7 COSAS:
1. ¿Alto ÷ ancho ≈ 2, igual que la referencia? Si da 2,4+, rehacela.
2. ¿Son EXACTAMENTE 8 renglones, ninguno repetido?
3. ¿Los separadores son guiones finos, cortos y centrados — y son
   exactamente 7?
4. ¿El título dice "HOMOLOGACIÓN" completo, con la I y la tilde?
5. ¿El banner dice "DOT" y "& ECE 22.06", sin "FNVSS 510" en ninguna
   parte?
6. ¿Hay algún elemento decorativo que no esté en la referencia? Sacalo.
7. ¿Los 8 textos están completos, sin ninguno truncado?
