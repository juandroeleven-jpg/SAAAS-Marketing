# Prompt A — Tarjeta de HOMOLOGACIÓN — EDGEPRO SHIFT (v2 — 2026-07-30)

Cambios v2 tras validar el primer resultado generado (falló en 3: banner "FNVSS 510", ítem corrupto "PREPARADO PARA PINLOCK", y omitió "CUBRE NARIZ"):
1. Banner reforzado con verificación explícita.
2. Regla "un ítem por renglón" con texto exacto; prohibida la palabra PINLOCK en toda la tarjeta (va solo en el grid).
3. Chequeo nominal de los 8 ítems, en particular CUBRE NARIZ.
Contenido sin cambios vs v1: 8 ítems (incluye EPS) / 7 separadores.

---

```
Diseñá la tarjeta de HOMOLOGACIÓN del casco EDGEPRO SHIFT (FULL FACE),
reproduciendo el layout de la imagen de referencia adjunta. Es una
reproducción de un layout fijo: lo ÚNICO que cambia respecto de la
referencia es QUÉ DICE la lista y qué dice el banner de certificación.
Todo lo demás —dimensiones, proporciones, tipografía, paleta,
separadores— se reproduce igual.

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
  ESTIRADA hacia abajo, más alta y más angosta que la referencia. NO LO
  REPITAS.

ESTRUCTURA — 3 BLOQUES APILADOS, DE ARRIBA HACIA ABAJO (describir los
3 por separado es obligatorio: en un intento anterior de este catálogo
el prompt describía solo 2 y el bloque no descrito se copió de la
referencia con una falta de ortografía adentro):

BLOQUE 1 — FRANJA DE TÍTULO (arriba de todo, angosta, fondo GRIS CLARO):
- Una sola línea de texto: "HOMOLOGACIÓN", en negro, bold, MAYÚSCULAS,
  centrada. Nada más en este bloque.
- OJO CON LA ORTOGRAFÍA: la palabra correcta es "HOMOLOGACIÓN", con la
  letra I entre la C y la O finales, y con tilde en la O:
  H-O-M-O-L-O-G-A-C-I-Ó-N. La imagen de referencia adjunta tiene una
  FALTA DE ORTOGRAFÍA en esa palabra: dice "HOMOLOGACÓN", sin la I. NO
  copies esa falta. Escribila bien.
- Es una franja angosta: ocupa poco alto, solo lo necesario para el
  texto más un margen chico arriba y abajo.

BLOQUE 2 — BANNER NEGRO (debajo del título, ancho completo del lienzo):
- Rectángulo sólido NEGRO que ocupa TODO el ancho del lienzo, de borde
  a borde, y aproximadamente el 20-25 % DEL ALTO TOTAL de la tarjeta.
- Adentro, el texto "DOT" en letras BLANCAS enormes, bold, centrado,
  ocupando la mayor parte del banner (como una insignia/logo).
- Debajo de "DOT", dentro del mismo banner negro, en blanco, en cuerpo
  bastante más chico y centrado: "& ECE 22.06".
- MÁXIMA ATENCIÓN — ESTE ERROR YA OCURRIÓ EN UN INTENTO ANTERIOR DE
  ESTA MISMA TARJETA: el resultado copió "FNVSS 510" de la referencia
  debajo del DOT. ESO ES UN ERROR. "FNVSS 510" NO EXISTE en la fuente
  de datos. La única línea secundaria válida debajo de "DOT" es
  "& ECE 22.06". Si al terminar el banner dice "FNVSS 510" en
  cualquier parte, el resultado está MAL y hay que rehacerlo.

BLOQUE 3 — LISTA DE ÍTEMS (fondo GRIS CLARO, todo el alto restante):
Lista de EXACTAMENTE 8 ítems, en este orden, en MAYÚSCULAS, negro,
bold, centrados horizontalmente:
1. VISERA ANTI SCRATCH
2. PREPARADO PARA ANTI EMPAÑANTE
3. SISTEMA DE EMERGENCIA DE LIBERACIÓN RÁPIDA
4. LINER DESMONTABLE Y LAVABLE
5. MATERIAL EXTERIOR ABS ALTA RESISTENCIA
6. INTERIOR EPS DE ALTA RESISTENCIA
7. CUBRE BARBILLA
8. CUBRE NARIZ

CRÍTICO — CONTEO FORZADO, UN ÍTEM POR RENGLÓN Y TEXTO EXACTO (estos
errores ya ocurrieron en un intento anterior de ESTA MISMA tarjeta: el
resultado escribió "PREPARADO PARA PINLOCK" — un texto que no existe,
mezcla de dos conceptos — y OMITIÓ el renglón "CUBRE NARIZ" — máxima
atención):
- La lista tiene EXACTAMENTE 8 ítems. NUNCA 7, NUNCA 9.
- Cada renglón contiene UN (1) solo ítem, con el texto EXACTO de la
  lista, sin palabras agregadas, quitadas ni mezcladas.
- El ítem 2 dice "PREPARADO PARA ANTI EMPAÑANTE" — NO "preparado para
  Pinlock" ni ninguna otra variante. La palabra "PINLOCK" NO aparece
  en NINGUNA parte de esta tarjeta (ese ítem va en el grid de íconos,
  no acá).
- El ítem 8, "CUBRE NARIZ", es OBLIGATORIO: en un intento anterior se
  omitió. La lista termina en "CUBRE NARIZ", después de
  "CUBRE BARBILLA".
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
texto arriba (ej. "MATERIAL EXTERIOR ABS ALTA RESISTENCIA" completo, no
"MATERIAL EXTERIOR ABS" solo; "SISTEMA DE EMERGENCIA DE LIBERACIÓN
RÁPIDA" completo, no "SISTEMA DE EMERGENCIA" solo).

QUÉ SE CONSERVA IDÉNTICO A LA REFERENCIA:
- La tipografía: sans serif condensada, MAYÚSCULAS, bold, texto blanco
  sobre el negro y texto negro sobre el gris.
- La paleta: NEGRO / GRIS CLARO / BLANCO, nada más.
- El centrado del texto y los márgenes laterales.
- El orden de los 3 bloques apilados y su proporción relativa.

PROHIBIDO ABSOLUTO:
- NO incluir "SISTEMA DE LIBERACIÓN RÁPIDA DEL VISOR" (Quick Visor
  Release System) — está confirmado como N/A para el Shift en el excel
  maestro. Ojo: NO confundir con "Kit de mecanismo visor", que es
  otra fila del excel, sí confirmada, y que va en la otra pieza.
- NO incluir "DISEÑO MODULAR" — el Shift es FULL FACE, son categorías
  excluyentes.
- NO incluir "CON LUZ LED" — N/A confirmado para el Shift.
- NO incluir "HEBILLA MICROMÉTRICA" — N/A confirmado para el Shift.
- NO incluir "CANAL PARA LENTES", "DOBLE VISERA", "ESPACIO PARA
  BLUETOOTH", "KIT DE MECANISMO VISOR", "CON PINLOCK" ni "HEBILLA
  DOBLE D" — esos 6 van en el grid de íconos (Prompt B) y las 2 piezas
  nunca comparten ítems.
- NO escribir "HOMOLOGACÓN" (sin la I). Se escribe "HOMOLOGACIÓN".
- NO mostrar "FNVSS 510" en ninguna parte de la tarjeta.
- NO cambiar la relación de aspecto del lienzo. Nada de estirar hacia
  abajo, nada de agrandar ni achicar la tarjeta.
- NO convertir los separadores en bandas horizontales de ancho
  completo, barras gruesas ni bloques de fondo de otro tono.
- NO agregar destellos, estrellas, brillos, sparkles, chispas, líneas
  decorativas, degradés, sombras, texturas, marcos, íconos, logos ni
  NINGÚN elemento gráfico que no esté en la imagen de referencia. En un
  intento anterior de este catálogo apareció una estrella blanca de
  cuatro puntas abajo a la derecha, sobre el gris: eso NO existe en la
  referencia y NO debe aparecer. Esta tarjeta es SOLO texto sobre
  bloques de color plano.
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
   repetido?
3. ¿Los separadores son GUIONES FINOS, CORTOS Y CENTRADOS, que no
   llegan a los bordes — y no bandas horizontales de ancho completo?
   ¿Son exactamente 7?
4. ¿El título dice "HOMOLOGACIÓN" completo, con la I y con la tilde?
5. ¿El banner negro dice "DOT" y "& ECE 22.06", y en ninguna parte de
   la tarjeta aparece "FNVSS 510"?
6. ¿Hay algún elemento decorativo (destello, estrella, brillo, línea,
   marco) que NO esté en la imagen de referencia? Si lo hay, sacalo.
7. ¿Los 8 textos están completos, sin ninguno truncado?
```
