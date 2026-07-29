# Orquestación de agentes en paralelo — pipeline de generación/auditoría de imagen

[← Volver al índice del proyecto EDGE](../indice-proyecto-edge.md)

**Qué es esto:** la plantilla operativa para correr varios agentes en paralelo sobre distintos casos (cascos, tarjetas de specs, y lo que se sume después) y distintos tipos de prompt de generación/edición de imagen. No es un caso puntual — es el proceso que se reutiliza cada vez que se agrega un caso nuevo.

**Qué NO es esto:** un generador de imágenes. Esta sesión de Claude Code no tiene conectada una herramienta de edición tipo Nano Banana/Gemini — la generación real de píxeles se sigue corriendo donde ya se corre hoy (Nano Banana Pro vía OpenRouter, según `pipeline-edge-6-meses.md`). Lo que este documento y los agentes en paralelo aportan es **razonamiento, comparación, auditoría y documentación** antes y después de cada generación — el Agente 0, el plan por vista, y el Agente Auditor del diagrama de abajo.

---

## 1. Pipeline de roles

```mermaid
graph TD
    A0["Agente 0: Intake y Razonamiento<br/>(primer paso del pipeline, antes de generar nada)"]

    A0 --> G1["Recopilar TODAS las ilustraciones/referencias<br/>(lateral, frontal, superior, trasera — o el layout fijo del caso)"]
    A0 --> G2["Recopilar TODOS los checkpoints reales<br/>(foto original del modelo/producto, por vista o pieza)"]

    G1 --> CMP["Comparar referencia vs. checkpoint real<br/>por vista/pieza, elemento por elemento"]
    G2 --> CMP

    CMP --> RULES["Cruzar cada elemento contra el checklist<br/>del tipo de prompt (sección 2)"]

    RULES --> CLASS["Clasificar cada elemento:<br/>replica fiel / aproximación mejorable /<br/>pendiente de ejecución / imposible por restricción"]

    CLASS --> PLAN["Generar plan paso a paso por vista/pieza<br/>separando SIEMPRE geometría (o layout) / color / estilo"]

    PLAN --> BUDGET["Aplicar límite de attention budget:<br/>máximo 2-3 tareas por llamada"]

    BUDGET --> ORDER["Fijar orden de imágenes en el payload:<br/>referencia primero, foto/checkpoint real (autoridad) al final"]

    ORDER --> OUT["Entregar razonamiento estructurado<br/>al Agente Generador de cada vista/pieza"]

    OUT --> QA["Agente Auditor (separado del Generador):<br/>verifica con zoom directo + valores RGB reales<br/>antes de aprobar, nunca el mismo agente que generó"]

    QA -->|"defecto total (otro objeto, collage, aspect ratio roto)"| RETRY["Reintentar automáticamente 1-2 veces<br/>antes de escalar a humano"]
    RETRY --> OUT
    QA -->|"aprobado"| DONE["Checkpoint aprobado<br/>se documenta en este repo + Artifact/Notion"]
```

**Regla dura:** el Agente Auditor nunca es el mismo agente (ni la misma llamada) que el Agente Generador. Si no hay forma de separarlos en una ejecución dada, el resultado se marca `sin auditar`, no `aprobado`.

---

## 2. Tipos de prompt (taxonomía extensible)

Cada caso nuevo se clasifica en uno de estos tipos antes de armar el plan. Si no encaja en ninguno, se agrega un tipo nuevo con su propio checklist — no se fuerza a que encaje en uno existente.

### Tipo A — Transferencia de diseño gráfico sobre geometría/objeto real existente
Ejemplo: aplicar un diseño (manga/samurái, "The Godfather", etc.) sobre la carcasa real de un casco ya fabricado, por vista (lateral, frontal, superior, trasera).

Checklist de auditoría (Tipo A):
- [ ] **Geometría intacta** — silueta, proporciones, curvatura sin alterar entre checkpoint real y resultado.
- [ ] **Elementos físicos reales en su posición exacta** — ventilaciones, tornillos/remaches, hebilla, correa, mentonera, soporte de cámara, etc. — ni cubiertos ni movidos.
- [ ] **Visera/lente transparente y limpia** — sin tinte, sin sombra oscura cerca del pivote/bisagra, sin diseño aplicado encima.
- [ ] **Transición limpia** entre carcasa y piezas adyacentes (correa, acolchado) — sin línea negra ni gap visible.
- [ ] **Sin soporte/pole de estudio** visible, fondo plano y limpio según lo pedido.
- [ ] **Textura/relieve real vs. pintura/decal plano** — no confundir un relieve físico con un gráfico 2D superpuesto.
- [ ] **Cambio de superficie, no de estructura** — el prompt nunca debe pedir (ni el resultado mostrar) un cambio de forma del objeto.
- [ ] **Plan separado por capa**: geometría / color / estilo nunca se piden juntos en la misma instrucción.
- [ ] **Attention budget**: máximo 2-3 tareas por llamada de generación.
- [ ] **Orden de imágenes en el payload**: referencia de diseño primero, foto real (autoridad) al final.
- [ ] **Sesión de generación aislada por caso** — no generar dos cascos/piezas distintas en el mismo hilo/conversación de la herramienta de generación seguidos uno del otro. Hallazgo real (caso Vortex, `simulacion-11-vortex-verificacion.md`): con un prompt confirmado correcto, el generador sustituyó un ítem por el del caso inmediatamente anterior (Kratos) en la misma sesión — contaminación cruzada entre generaciones, no error de quién escribió el prompt. Empezar una sesión nueva por caso, o reforzar el prompt con "ignora cualquier lista usada en imágenes anteriores de esta sesión".
- [ ] **"Fuente de forma" y "fuente de diseño gráfico" separadas explícitamente cuando son imágenes distintas** — aplica sobre todo a la línea de licencias de marca (Marvel/DC/Paramount, etc.), donde el arte de referencia (mockup del diseño licenciado) casi siempre está aplicado sobre un casco genérico de catálogo, con proporciones distintas al molde real que se va a usar. Hallazgo real (caso Top Gun sobre molde azul, `simulacion-6c-top-gun.md`, Intento 4): sin esta separación explícita, el generador mezcló la forma del casco de la imagen de estilo (pico frontal, ventilaciones, pivote, curvatura de calota) con la del molde real, aunque el prompt solo pedía transferir el diseño gráfico. El prompt tiene que decir explícitamente cuál imagen es la única autoridad de forma y cuál es solo fuente de color/íconos/texto, y listar las piezas geométricas distintivas del molde real (forma exacta de pico, conteo y forma de ventilaciones, forma de la carcasa del pivote, curvatura de calota) para que el generador tenga algo concreto contra qué verificar.
- [ ] **Todo lo que está en el mockup de diseño es pintura plana, nunca una pieza física nueva** — cuando la fuente de diseño es una ilustración 2D, sus formas angulares, chevrones y paneles pueden leerse como relieves y el generador los materializa: agrega aletas, paneles elevados o salientes que no existen en el molde real. El prompt tiene que decir explícitamente qué piezas físicas tiene el casco (las de la foto del checkpoint, ni una más) y que todo elemento del diseño va pintado sobre superficie lisa, aunque en la ilustración parezca un volumen. Hallazgo real (livery EDGE, `simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 2→3 de la vista trasera del Colorway 1): aparecieron aletas y paneles elevados inventados en la parte alta de la calota. Es la versión "en el otro sentido" del ítem ya existente de textura/relieve real vs. pintura plana.
- [ ] **Diseño gráfico solo sobre superficie pintada, nunca sobre piezas de plástico negro** — cuando el casco real tiene piezas de plástico negro sin pintar (ventilaciones, mentonera, spoiler, carcasa de pivote) además de la superficie pintada, el generador tiende a dibujar elementos del diseño 2D encima de esas piezas negras en vez de limitarlos a la zona pintada. El prompt tiene que prohibirlo explícitamente: "el diseño gráfico va SOLO sobre la superficie pintada, nunca sobre piezas de plástico negro; si un elemento cae cerca del límite, hay que recortarlo o desplazarlo". Hallazgo real (caso Top Gun sobre molde azul, `simulacion-6c-top-gun.md`, Intento 5→6): los chevrones dorados quedaron dibujados sobre una pieza de plástico negro del spoiler.
- [ ] **Ajuste puntual sobre un resultado ya aprobado = edición, no regeneración completa** — cuando ya se logró un resultado con geometría y diseño correctos y solo falta corregir un detalle chico (ej. la posición de un solo elemento), no repetir el prompt completo de generación (geometría + todas las reglas + todos los elementos) pidiéndole que "mantenga todo igual excepto X" — un prompt así vuelve a poner en juego toda la geometría desde cero en cada corrida, y sin la imagen real del resultado bueno como base de edición, la instrucción de texto "igual que antes" no tiene nada concreto de dónde partir. En su lugar, adjuntar SOLO la imagen del resultado ya aprobado y pedir una edición mínima de una sola tarea ("esta es una edición puntual, no una generación nueva — todo lo demás queda pixel por pixel igual, el único cambio es X"). Hallazgo real (caso Top Gun sobre molde azul, `simulacion-6c-top-gun.md`, Intento 7): un prompt de regeneración completa que solo cambiaba la posición del logo volvió a producir el mismo drift de geometría (pivote, ventilaciones) que ya se había corregido en el Intento 5 — mismo síntoma que el Intento 4, con causa raíz distinta a la de aquel caso. Se relaciona con la regla de "Attention budget" de arriba, pero es un hallazgo propio: no solo hay que limitar cuántas tareas van en un prompt, sino preferir edición sobre regeneración cuando la base ya es buena.
- [ ] **En un prompt de edición no alcanza con proteger lo que no se toca: hay que declarar también qué cambia DENTRO de la zona que sí se edita** — un prompt de edición típicamente enumera con mucho detalle todo lo que queda congelado (geometría, realismo, fondo, el resto del diseño) y después nombra la zona a corregir. Eso deja un agujero: sobre la zona nombrada el generador no tiene ninguna restricción, así que la lee como "esta zona la podés rehacer" y la vuelve a dibujar entera con su propia interpretación, devolviéndola simplificada — menos líneas, menos capas, patrones menos densos, textos chicos eliminados, formas reemplazadas por versiones más limpias. El prompt tiene que decir explícitamente que **dentro de la zona editada lo ÚNICO que cambia es el atributo puntual indicado** (el color de relleno, la posición, el tamaño) y que **todo su dibujo interno —líneas, texturas, textos, capas, cada trazo en su posición— se conserva idéntico**, con la analogía concreta de "seleccionar esa área en un editor de imagen y cambiarle ese atributo sin tocar ninguna de las capas de dibujo que están encima". Conviene cerrar además con una verificación final: comparar el resultado contra la imagen adjunta y confirmar que la única diferencia perceptible sea la pedida. Hallazgo real (livery de carreras EDGE, `simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 2→3 de la vista lateral del Colorway 2): un pedido de recolorear el interior de un rombo de rojo a negro volvió con toda la zona alta del lateral redibujada y simplificada —marco geométrico concéntrico reemplazado por una forma hexagonal con menos líneas, patrón de malla reducido, texto chico desaparecido— y encima sin el cambio de color pedido. Es el complemento del ítem anterior: elegir edición en vez de regeneración no basta si la edición no está acotada a un atributo. **Y hay una contracara que hay que pedir en la misma frase: además de blindar el dibujo, hay que exigir COBERTURA COMPLETA del cambio dentro de la zona.** Acotar el cambio a un atributo evita que el generador rehaga la zona, pero no garantiza que la aplique entera: si el cambio es un recoloreo, el generador tiende a pintar el fondo dominante y saltearse grupos de elementos que también estaban en el color viejo. El prompt tiene que decir que **ninguna isla, ningún bloque ni ningún grupo de elementos —barras, franjas, líneas, formas— puede quedarse con el color anterior**, y **nombrar explícitamente las excepciones que sí lo conservan**, para que no queden implícitas. Conviene desdoblar la verificación final en dos chequeos: que no cambió ningún dibujo, y que no quedó ningún rastro del color viejo dentro de la zona salvo las excepciones declaradas. Hallazgo real (mismo caso, `simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 3→4 de la vista lateral del Colorway 2): con el bloque de "la zona recoloreada tampoco se redibuja" el dibujo se conservó perfecto —marco concéntrico, malla con su densidad, texto chico, capas de líneas— pero el recoloreo salió incompleto: un grupo de barras horizontales en la parte baja-izquierda de la zona se quedó con el rojo viejo en vez de pasar a negro, porque el prompt describía la zona de forma global ("el interior del rombo") sin exigir cobertura total ni declarar que la única excepción roja era la flecha/chevron.
- [ ] **El generador no es determinístico — un solo resultado no basta para juzgar un prompt** — el mismo prompt, corrido dos veces sin cambiar una letra, puede dar resultados de geometría/calidad distinta entre una corrida y otra. Esto significa que no se puede concluir "este cambio de prompt arregló/rompió la geometría" a partir de una sola corrida de cada versión — parte de la diferencia observada puede ser variación aleatoria del generador, no un efecto real del texto. Antes de descartar un prompt como fallido (o de confirmarlo como bueno), conviene correrlo 2-3 veces tal cual está: si sale bien la mayoría de las veces, el prompt está OK y alcanza con reintentar hasta lograr una corrida limpia; si sale mal la mayoría de las veces, ahí sí vale la pena seguir ajustando el texto. Hallazgo real (caso Top Gun sobre molde azul, `simulacion-6c-top-gun.md`, re-corrida del Intento 6): el mismo prompt exacto dio un resultado distinto al correrlo de nuevo, lo que obliga a releer con cautela toda una secuencia de intentos (4 a 11) donde cada cambio de texto se había interpretado como causa directa de una mejora o una falla.
- [ ] **Cuando la fuente de diseño es una ilustración/mockup vectorial 2D, hay que separar TRES ejes y no dos** — forma (del checkpoint fotográfico), contenido gráfico (del mockup) y **estilo de render / realismo de material (del checkpoint, nunca del mockup)**. La separación clásica de "fuente de forma" vs. "fuente de diseño gráfico" no alcanza cuando el arte de referencia es un dibujo vectorial plano y el checkpoint es una fotografía real: si el prompt no dice explícitamente que el ESTILO DE RENDER de la ilustración no se copia, el generador lo copia junto con el contenido y devuelve un dibujo vectorial plano —colores planos sin gradiente, sin microtextura de pintura, sin reflejos especulares ni sombras de estudio, bordes de software de diseño— en vez de una fotografía; y de paso contamina también la forma, tirando la geometría hacia la del mockup. El prompt tiene que exigir explícitamente un resultado FOTORREALISTA con el mismo tratamiento fotográfico del checkpoint (misma iluminación de estudio con sus sombras suaves, mismos reflejos especulares sobre las superficies curvas, misma microtextura de pintura, mismas texturas de materiales reales — fibra de carbono, tela de la correa, etc.) y aclarar que el diseño se aplica como PINTURA REAL sobre la superficie física, siguiendo la curvatura y recibiendo la luz de la escena, no como un dibujo plano pegado encima. Hallazgo real (livery de carreras EDGE, `simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 2→3 del Colorway 1 vista lateral): el Intento 2 corrigió todos los defectos de contenido gráfico pendientes, pero devolvió una ilustración vectorial plana en vez de una foto del casco real, con el pico frontal/spoiler deformado hacia la forma triangular del mockup.
- [ ] **Toda regla nueva se propaga en el acto a los prompts de TODAS las vistas y colorways del mismo caso** — cuando durante la auditoría de una vista se descubre una regla nueva y se corrige su prompt, la corrección no se queda en esa vista: hay que copiarla inmediatamente a los prompts de las demás vistas (lateral, frontal, superior, trasera) y de los demás colorways/variantes del caso, incluidos los que viven en archivos separados y todavía están "pendientes de generar". Un caso de varias vistas no es una secuencia de problemas independientes: comparten checkpoint, comparten mockup y comparten generador, así que la causa raíz que hizo fallar a una vista va a hacer fallar a las otras exactamente igual. Si la propagación no se hace en el momento, el mismo defecto reaparece vista por vista, se gasta una corrida entera en redescubrirlo y se rehace un diagnóstico que ya estaba escrito unas líneas más arriba en el mismo documento. Conviene además dejar el pendiente marcado bien visible en los archivos hermanos que aún no se actualizaron, para que nadie los corra con el prompt viejo. Hallazgo real (livery de carreras EDGE, `simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 3→4 del Colorway 1 vista trasera): el tercer eje de realismo de render se descubrió y se agregó al prompt de la vista **lateral**, pero nunca se copió al de la **trasera**, que siguió con la regla vieja de "DOS FUENTES, DOS ROLES" y sin bloque de fotografía — y la trasera volvió a devolver una ilustración vectorial plana, arrastrando además la silueta del mockup en vez de la del molde real, una regresión respecto de intentos anteriores de esa misma vista que ya lo habían logrado bien.
- [ ] **Cuando una PIEZA concreta toma su color de una fuente y su forma de otra, la separación de roles tiene que bajar al nivel de esa pieza** — declarar la separación de fuentes a nivel de la imagen completa ("la foto manda en la forma, el mockup manda en el contenido gráfico") alcanza para el objeto entero, pero **no** para la pieza puntual donde las dos fuentes se cruzan: si el prompt le dice al generador "el color de esta pieza viene del mockup" y "su forma viene de la foto real", el elemento recibe instrucciones de las dos a la vez y el generador **las promedia**, devolviendo una pieza híbrida que no es ni la del mockup ni la del molde real. El prompt tiene que darle a esa pieza un bloque propio que **desglose atributo por atributo qué sale de cada imagen** (forma, tamaño, perfil y borde de la foto; color, patrón o textura del mockup), **prohibir el promedio con esas palabras** ("no combinar, no promediar, no hibridar; ni entera, ni parcialmente, ni a medio camino"), **describir la forma real de la pieza con detalle** —cuánto sobresale, qué perfil tiene, cómo es su borde, cómo se integra al resto— en vez de solo nombrarla, y cerrar con una verificación explícita comparando esa pieza contra la foto del checkpoint antes de entregar. Hallazgo real (livery de carreras EDGE, `simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 4→5 de la vista trasera del Colorway 1): con los 3 roles bien separados a nivel de imagen —el resto de la vista salió excelente, con realismo, silueta y livery completos— el **spoiler salió híbrido**: se quedó con el azul sólido del mockup, que era lo correcto, pero se trajo junto con el color su forma de ala grande y prominente, en vez del labio bajo, discreto e integrado que tiene en la foto del molde real.
- [ ] **Declarar la PROPORCIÓN y la relación FIGURA/FONDO del diseño, no solo qué colores lo componen** — un prompt puede nombrar correctamente todos los colores del livery y aun así devolver el diseño mal repartido, porque enumerar colores no dice **cuánta superficie** le toca a cada uno ni **cuál va encima de cuál**. Mientras el prompt razone zona por zona ("el interior de esta forma va en negro", "esta pieza va en rojo"), cada instrucción local puede ser correcta por separado y el resultado global igual quedar invertido: sin un techo declarado, el generador **expande el color de acento a superficies enteras** y **da vuelta la relación figura/fondo** —donde el diseño tiene fondo oscuro con líneas de acento finas encima, devuelve fondo de acento con líneas oscuras encima—. Hay que declarar la jerarquía explícitamente: cuál es la **superficie dominante** del objeto, cuál es el **color de acento minoritario**, **en qué lugares concretos (y en ningún otro) aparece ese acento**, que sumado todo ocupa **mucha menos superficie** que el dominante, y prohibir con esas palabras **expandirlo a superficies completas** e **invertir figura y fondo**. Ojo especial con las instrucciones de "subir la intensidad/saturación" de un color: sin un límite de superficie declarado, el generador lee "más color" como **más área**, no solo como más saturación. **Corolario, que es la otra mitad del mismo hallazgo: un detalle fino de un color solo sobrevive si el prompt declara contra qué fondo tiene que contrastar.** No alcanza con nombrar el detalle **en negativo**, como excepción de otra regla ("esta flechita conserva su rojo"): hay que describirlo **en positivo** —qué grosor tiene, qué elementos lo rodean, y sobre qué fondo se apoya— y decir que su legibilidad depende de ese contraste, prohibiendo engrosarlo, duplicarlo, convertirlo en masa o apoyarlo sobre un fondo de su mismo color. Hallazgo real (livery de carreras EDGE, `simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 4→5 de la vista lateral del Colorway 2): con el dibujo blindado y el recoloreo ya completo, el resultado volvió con la calota superior y el pico frontal fundidos en una **masa roja continua** que ocupaba el tercio superior del casco, cuando en el mockup el cuerpo central del lateral es negro y el rojo es un acento; y la **única flecha roja delgada** del grupo de chevrons concéntricos grises **desapareció**, porque un trazo rojo fino sobre fondo rojo no tiene contraste posible. Los dos defectos son el mismo problema visto dos veces.

- [ ] **La regla de COBERTURA COMPLETA del cambio vale también para los BORRADOS y para los AGREGADOS, no solo para los recoloreos** — la exigencia de cobertura total dentro de la zona editada nació describiendo un recoloreo ("ninguna isla puede quedarse con el color viejo"), pero los otros dos tipos de cambio que puede pedir una edición puntual tienen su propia versión de la misma trampa, y hay que escribirla explícitamente en el prompt. **En un borrado son dos tareas, no una**: *eliminar* el elemento sin dejar resto, borde, ranura, contorno, halo ni sombra, **y** *reconstruir el dibujo que va debajo*. La segunda es la que se saltea, y se saltea sobre todo cuando la superficie de abajo **no es lisa sino un diseño gráfico con patrón**: si el prompt no declara qué dibujo va en el lugar vacío, el generador tapa el hueco con un parche de color plano o inventa un gráfico nuevo. Hay que pedir que el patrón vecino **se complete por debajo** con las mismas líneas, los mismos colores y el mismo trazado, con la continuidad exigida trazo por trazo —"una línea que entra por un borde del área tiene que salir por el otro alineada y con el mismo grosor"— y con la misma iluminación, los mismos reflejos y el mismo material que la superficie contigua, sin costura visible. **En un agregado la cobertura completa es cantidad, alineación, posición y tamaño exactos, con conteo forzado**: un elemento repetido descrito solo por su zona ("tres marcas en la parte baja de la mentonera") sale en la cantidad y en el lugar que el generador quiera, así que hay que decir "EXACTAMENTE TRES, ni dos ni cuatro, contalas antes de entregar", anclar la posición contra una referencia física concreta y fijar el tamaño relativo — es el mismo mecanismo que el ítem de **conteo forzado de celdas del grid** del Tipo B, que hasta ahora no estaba escrito para el Tipo A. Y en los dos casos conviene cerrar con la verificación final desdoblada que ya usa el ítem del recoloreo: **dibujo intacto** + **cambio aplicado entero** (cero rastros de lo eliminado, conteo correcto de lo agregado). Caso de referencia (livery de carreras EDGE, `simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 5 de la vista lateral del Colorway 1): una edición puntual de 3 cambios —borrar una pieza negra tipo toma de aire inventada sobre el livery, borrar un sticker "DOT" y agregar las 3 marcas en "X" de la mentonera— donde la auditoría se preparó cruzando cada cambio contra estos modos de falla; el veredicto empírico queda pendiente de que el usuario mire las imágenes, pero la brecha del prompt es estructural y se ve sin necesidad del resultado: el bloque de cobertura completa del caso estaba redactado solo en términos de "color viejo" y no cubría ni el resto de una pieza borrada, ni el dibujo que va debajo de ella, ni el conteo de un elemento agregado.

### Tipo B — Reproducción exacta de layout fijo (tarjetas de specs, homologación, grids de íconos)
Ejemplo: tarjeta "HOMOLOGACIÓN" (DOT, FNVSS 510, ECE 22.06 + lista de 6 features) o grid 2x3 de íconos de características — mismo lienzo, mismo aspect ratio que la referencia, cambiando solo el contenido de texto/íconos.

Checklist de auditoría (Tipo B):
- [ ] **Aspect ratio y tamaño en píxeles idénticos** a la referencia — sin recorte, sin estirar, sin cambiar orientación.
- [ ] **Proporción relativa de cada bloque** (header, bloque de logo, área de lista/grid) igual a la referencia — no comprimir ni expandir ningún bloque por separado.
- [ ] **Lista de ítems exacta** — ni de más ni de menos que lo pedido, mismo orden.
- [ ] **Lista de exclusión explícita respetada** — si el prompt dice "prohibido absoluto" sobre un texto/ítem, verificar que no aparezca en ninguna forma (ni tachado, ni parcial).
- [ ] **Tipografía/estilo consistente** con la referencia (peso, mayúsculas, alineación, separadores).
- [ ] **Estilo de ícono consistente** (línea, color, forma del contenedor) cuando aplica.
- [ ] **Sin duplicados entre piezas de un mismo set** — si dos tarjetas del mismo caso comparten un ítem (ej. "Visera Anti Scratch" ya en la ficha de homologación), no repetirlo en la segunda pieza.
- [ ] **Resolución pedida** (ej. 4K) respetada.
- [ ] **Íconos nuevos, no reciclados de la referencia** — cuando se manda una imagen de referencia junto con una lista de ítems distinta a la de esa referencia, el prompt tiene que decir explícitamente que hay que diseñar un ícono nuevo para cada ítem (mismo estilo visual, pero pictograma propio) y prohibir copiar el dibujo interno de un ícono de la referencia que corresponda a un ítem distinto o eliminado. Sin esta instrucción, el generador tiende a reciclar el ícono de la referencia (incluso con defectos que ya tenía, como un tache/X que no corresponde) en vez de crear uno nuevo — hallazgo real, ver `simulacion-11-vortex-verificacion.md`.
- [ ] **Dimensiones y cantidad de celdas del grid explícitas, con conteo forzado** — no alcanza con decir "grid 2x3" una vez; hay que reforzar "EXACTAMENTE 2 columnas x 3 filas = 6 celdas, ni una más" y pedirle al generador que cuente las celdas antes de terminar. Hallazgo real: con un prompt que solo decía "2x3" una vez, un generador produjo un grid de 2x4 con dos ítems duplicados en la fila extra — ver capturas del caso Kratos re-auditadas por el usuario en Gemini. Aplica también al aspect ratio/tamaño en píxeles del lienzo completo, no solo al grid interno.
- [ ] **Cada bloque jerárquico de la pieza descrito por separado, no solo "mismo formato"** — cuando la pieza real tiene una estructura visual de varios bloques distintos (ej. título arriba / banner de color sólido con texto grande en el medio / lista de ítems abajo), no alcanza con una instrucción genérica como "mismo formato/aspect ratio que la referencia". Hay que describir explícitamente cada bloque por separado (qué contiene, qué proporción del alto ocupa, qué color de fondo tiene). Hallazgo real (`simulacion-14-stellar-verificacion.md`, Intento 2→3): el prompt trataba el título "HOMOLOGACIÓN — DOT & ECE 22.06" como una sola línea de texto, cuando la referencia real tiene 3 bloques (título / banner negro con "DOT" gigante + certificación chica / lista de 6 ítems) — el resultado no coincidió en estructura hasta que se describieron los 3 bloques por separado.

### Tipo C — Verificación de ficha de marketing contra fuente de datos (excel/spec maestro)
No es generación de imagen: es auditar si los claims de una pieza ya publicada/diseñada (ficha, tarjeta, catálogo) coinciden con la fuente de verdad interna (excel de specs, ficha técnica del fabricante). Ejemplo: caso Kratos (`simulaciones-cc/simulacion-10-kratos-verificacion.md`).

Checklist de auditoría (Tipo C):
- [ ] **Cada claim de la pieza contra su fila exacta** en la fuente de datos — no asumir a qué fila corresponde un claim ambiguo (ej. "liberación rápida del visor" puede confundirse con "kit de mecanismo visor" si son filas distintas).
- [ ] **No asumir cuál fuente tiene razón** cuando hay conflicto — el resultado es "mismatch a resolver", nunca "la ficha está mal" o "el excel está mal" por default.
- [ ] **Reportar cada mismatch individualmente**, con la fila usada y el valor exacto — no un resumen agregado que oculte cuáles fallaron.
- [ ] **Separar mismatches de alto impacto** (seguridad, regulatorio/homologación, expectativa física del producto) de los de bajo impacto (naming, redondeo) — no tratarlos igual en la recomendación.
- [ ] **Listar datos confirmados en la fuente pero no reclamados en la pieza** — no es un error, es una oportunidad, y se reporta aparte de los mismatches.
- [ ] **Auditor separado del que transcribe** — quien lee/transcribe las fuentes no es quien decide match/mismatch, mismo principio de separación de roles que en Tipo A y B.
- [ ] **Tres resultados posibles, no dos** — MATCH, MISMATCH (la fuente confirma explícitamente lo contrario, ej. N/A) y **SIN DATO** (la celda está vacía — no hay forma de confirmar ni descartar). Nunca tratar una celda vacía como si fuera un N/A confirmado (caso Hero, `simulacion-12-hero-verificacion.md`).
- [ ] **Contradicciones estructurales aparte de mismatches de dato** — si un claim contradice una categoría confirmada (ej. "diseño modular" cuando el tipo de casco confirmado es "open face"), marcarlo con más peso que un simple dato faltante, aunque técnicamente derive de la misma fila.

### Tipo D — Limpieza de producto (quitar stickers/logos/etiquetas)
No es cambio de color ni de contenido: es sacar elementos que sobran en la foto real (stickers de certificación, logos de protección de envío, calcomanías temporales) dejando el producto real intacto. Ejemplo: casco EDGE flip-up, `simulacion-24-edge-flipup-quitar-stickers.md`.

Checklist de auditoría (Tipo D):
- [ ] **Cada sticker/logo a quitar nombrado explícitamente** en el prompt — no decir "sacá los logos" en general si se puede describir cuál es cuál (posición, contenido, tamaño), para que el generador no dude ni saque de más ni de menos.
- [ ] **Sin restos fantasma** — verificar que no quede una sombra, un borde o una silueta tenue donde estaba el sticker; la superficie debe quedar limpia y continua con el material real de esa zona (mate, cromado, transparente, según corresponda).
- [ ] **No inventar textura nueva en el área limpiada** — si se saca un sticker de una visera transparente, esa zona vuelve a ser transparente lisa, no un parche opaco o difuminado.
- [ ] **Todo lo demás sin cambios** — mismo criterio de geometría intacta que Tipo A, pero acá se extiende a que ni el color, ni el acabado (mate/cromado/glossy) de la pieza limpiada cambien, solo desaparece el sticker/logo.

### Tipo E, ... — pendientes
Se agregan acá a medida que lleguen casos que no encajen en A, B, C o D, con su propio checklist derivado del caso real que los define.

---

## 3. Las 12 lecciones aprendidas (Sesión 2 del Artifact)

Referenciadas en el diagrama original pero documentadas en un Artifact externo, no en este repo todavía.

**🔴 Pendiente de tu parte:** pegar acá el contenido completo de las 12 lecciones (o el link al Artifact) para que quede versionado en el repo junto con el resto del pipeline, en vez de vivir solo en una conversación aparte.

---

## 4. Estructura de carpetas por caso

Cada caso nuevo (casco, tarjeta, o lo que sea) vive en su propia carpeta dentro de `proyectos/edge-cascos/documentos/simulaciones-cc/` (si es continuación del patrón ya existente) con esta estructura mínima:

```
simulacion-N-nombre-caso/
├── referencias/       ← ilustraciones, PDFs de diseño, mockups (lo que define "cómo debería verse")
├── checkpoints/        ← fotos reales del objeto/persona/modelo (la autoridad final)
├── resultados/          ← salidas generadas, nombradas con FINAL o DESCARTAR (ver lección de simulación 6)
└── auditoria.md          ← hallazgos del Agente Auditor por vista/pieza, checklist del tipo A o B marcado
```

Cuando subas fotos por el chat, decime a qué caso y a qué carpeta (`referencias/` o `checkpoints/`) corresponden y las guardo ahí.

### 4.1 Formato de subpágina por vista/pieza

Cada vista o pieza de un caso tiene su propia subpágina `.md` dentro de la carpeta del caso (ej. `simulacion-N-dakota/vista-lateral.md`), con este formato fijo — imagen arriba, prompt en desplegable, y si algo falló, qué falló y qué falta hacer:

```markdown
### <Nombre de la vista/pieza> — <caso>

![<descripción>](../checkpoints/<archivo>.png)

<details><summary>Prompt usado</summary>

<prompt completo, texto plano, tal cual se mandó al generador>

</details>

**Estado:** ✅ aprobado · ⚠️ falló · 🔴 pendiente de generar

**Qué falló:** <descripción concreta del defecto — geometría, texto corrupto, aspect ratio roto, etc. "Ninguno" si aprobado>

**Qué hay que hacer:** <siguiente paso concreto y accionable — reintentar con X ajuste, escalar a humano porque Y, esperar foto real de Z>
```

Esta es la unidad mínima de trabajo del Agente Auditor: revisa la imagen, llena "Qué falló" y "Qué hay que hacer", y decide el estado. Si el Auditor aprueba, el registro de la sección 6 se actualiza en la misma pasada.

---

## 5. Cómo se ejecuta con agentes en paralelo

Con el tool de Workflow, el patrón por caso es un **pipeline** (no una barrera) de dos etapas por vista/pieza, para que la vista 1 pueda estar en auditoría mientras la vista 2 todavía está en generación de plan:

```
pipeline(
  vistas_o_piezas_del_caso,
  vista => Agente 0 + Generador  → arma el plan (sección 1) y produce/describe el resultado de esa vista,
  resultado => Agente Auditor    → aplica el checklist del tipo A o B (sección 2), nunca el mismo agente
)
```

Reintentos (`RETRY` del diagrama) se hacen dentro de la misma etapa, máximo 1-2 veces, antes de marcar la vista como `escalar a humano` en `auditoria.md`.

Esto corre en background — cuando termine te aviso con el resultado, no hace falta que preguntes por el estado mientras tanto.

---

## 6. Registro de casos

📚 **[Índice maestro de prompts del catálogo](simulaciones-cc/indice-prompts-catalogo.md)** — todos los prompts ya armados en los casos Kratos a Evolution 929 (Simulaciones 10-19), organizados por caso con estado (listo/bloqueado/con reintento) y con la lista completa de pendientes de confirmación del usuario en un solo lugar.

| Caso | Tipo | Estado | Bloqueo |
|---|---|---|---|
| Dakota (diseño manga/samurái) | A | 🔴 Sin archivos | Esperando ilustración de referencia + checkpoints reales por vista |
| Tarjeta HOMOLOGACIÓN (DOT/FNVSS/ECE) | B | 🔴 Sin archivos | Esperando imagen de referencia real (la que define el aspect ratio exacto) |
| Grid de features 2x3 (íconos) | B | 🔴 Sin archivos | Esperando imagen de referencia real |
| Kratos — ficha vs. excel de specs | C | ⚠️ Auditado — [`simulacion-10-kratos-verificacion.md`](simulaciones-cc/simulacion-10-kratos-verificacion.md) | 4 de 13 claims + certificación no coinciden con el excel; falta confirmar con fabricante y subir los 2 archivos como adjunto real |
| Vortex — ficha vs. excel de specs | C | ✅ Auditado — [`simulacion-11-vortex-verificacion.md`](simulaciones-cc/simulacion-11-vortex-verificacion.md) | Ninguno en el texto; falta confirmar qué va en el rectángulo negro de la ficha y subir los archivos como adjunto real |
| Hero — ficha vs. excel de specs | C | ⚠️ Parcialmente desbloqueado — [`simulacion-12-hero-verificacion.md`](simulaciones-cc/simulacion-12-hero-verificacion.md) | 7 de 13 claims sin dato en el excel (bajó de 9: "cubre barbilla"/"cubre nariz" se confirmaron con una captura más completa); "diseño modular" contradice "open face" confirmado; tipo de hebilla en conflicto (micrométrica vs. doble D) — versión reducida de 3/6 ya generable, versión completa espera el excel |
| Shanghai — ficha vs. excel de specs (otro tab) | C | ⚠️ Auditado — [`simulacion-13-shanghai-verificacion.md`](simulaciones-cc/simulacion-13-shanghai-verificacion.md) | 4 de 13 claims + 1 sin dato no coinciden; prompt B queda en 4/6 ítems por falta de feature física confirmada; 3er caso seguido con rectángulo negro recurrente en el layout — revisar template maestro |
| Stellar — ficha vs. excel de specs | C | ⚠️ Auditado — [`simulacion-14-stellar-verificacion.md`](simulaciones-cc/simulacion-14-stellar-verificacion.md) | 3 de 13 claims no coinciden (mejor resultado del catálogo); certificación incompleta en la ficha; 2 prompts completados a 6/6 sin ítems de empaque |
| Shift — ficha vs. excel de specs | C | ⚠️ Auditado — [`simulacion-15-shift-verificacion.md`](simulaciones-cc/simulacion-15-shift-verificacion.md) | 4 de 13 claims no coinciden; "hebilla micrométrica" N/A para este modelo (a diferencia de casi todo el catálogo) — el ícono tachado en la ficha real podría ser correcto o no, sin confirmar; 4to caso seguido con rectángulo negro recurrente |
| Evolution 929 — ficha vs. excel de specs (tab de marca EDGE) | C | ✅ Auditado — [`simulacion-16-evolution929-verificacion.md`](simulaciones-cc/simulacion-16-evolution929-verificacion.md) | Solo 2 de 13 claims no coinciden — mejor resultado del catálogo; primer caso donde "Diseño modular" es un MATCH real (tipo Flip Up confirmado); primer caso de la marca EDGE en vez de EDGEPRO, no mezclar tabs |
| Bob Esponja, Padrino, Top Gun, Stellar | A | Ver `simulaciones-cc/` | Ya documentados, no usan todavía este checklist formal — se puede retro-auditar con la sección 2 si hace falta |

**Nota técnica — imágenes pegadas en el chat:** esta sesión puede *ver* y transcribir una imagen que mandás pegada directamente en el mensaje, pero no puede extraer sus bytes para guardarla como archivo binario en el repo (por eso el caso Kratos no tiene todavía carpeta `imagenes-kratos/`). Si necesitás que la imagen quede versionada como archivo real, mandala como **adjunto/subida de archivo**, no solo pegada inline.

---

## 7. Plantilla para agregar un caso nuevo

```
### Caso: <nombre>
- Tipo de prompt: A / B / nuevo (definir checklist)
- Referencias adjuntas: sí/no — ruta: referencias/...
- Checkpoints reales adjuntos: sí/no — ruta: checkpoints/...
- Prompt exacto usado: <pegar completo>
- Resultado: <archivo o "pendiente de generar">
- Auditoría (checklist tipo A o B): <marcar ítem por ítem>
- Veredicto: aprobado / reintentar / escalar a humano
```

---

## 8. Lecciones aprendidas — sesión 2026-07-28

- **Confirmación de nombre "Boston 4.0"** — había una pregunta abierta de larga data sobre si el modelo se llamaba "Boston" o "Boston 4.0", que se resolvió porque el usuario mandó una imagen del logo/título real de la ficha. Lección: cuando hay una duda de naming sin resolver, un logo/título real de marca es evidencia más fuerte que la silueta o el color del casco. Documentado en `simulaciones-cc/simulacion-21-boston-4-colores.md` y `simulaciones-cc/simulacion-25-carbex-verificacion.md`.

- **Nuevo sub-tipo de prompt: swap de texto en logo/título de marca** (variante chica del Tipo A) — mismo ícono/barra/tipografía/fondo, cambiando solo el nombre del modelo/marca en el texto, con las mismas dimensiones exactas. Usado 2 veces (Boston 4.0 → Carbex, Boston 4.0 → Stellar), con el mismo prompt base reutilizable. Ver `simulaciones-cc/simulacion-25-carbex-verificacion.md` y `simulaciones-cc/simulacion-14-stellar-verificacion.md`.

- **Nueva línea de trabajo: "Licencias de marca" (Marvel, DC, Paramount, etc.)** — el usuario confirmó que tiene licencias pagas con estas marcas y produce cascos adaptativos (molde real + arte de diseño licenciado aplicado encima). Primer caso concreto: Top Gun: Maverick sobre un molde azul real (`simulaciones-cc/simulacion-6c-top-gun.md`), que pasó por 6+ intentos de auditoría/corrección:
  - Intento 1: logo omitido, elementos mal ubicados, geometría alterada, paleta desviada.
  - Intento 2: arreglado, pero el visor se oscureció.
  - Intento 3: visor arreglado, pero el layout se corrió por falta de imagen de referencia del resultado bueno anterior.
  - Intento 4: con 3 imágenes de referencia, layout arreglado, pero la forma del casco se mezcló con la del casco de la imagen de estilo.
  - Intento 5: separando "fuente de forma" de "fuente de diseño gráfico", geometría por fin correcta; quedaron 2 defectos — gráfico sobre piezas negras y un elemento faltante.
  - Intento 6: agregó el elemento faltante y prohibió el gráfico sobre piezas negras.
  - Regla más importante que deja este caso para toda la línea de licencias: cuando el arte licenciado está diseñado sobre otro casco de forma distinta al molde real, hay que separar explícitamente en el prompt cuál imagen manda en la forma y cuál solo aporta el diseño gráfico — ya está en el checklist Tipo A (sección 2).

- **Primer caso de casco retro/redondo** (`simulaciones-cc/simulacion-26-casco-retro-goma-negra.md`) — primer molde de esta silueta en el catálogo (café racer, calota lisa, pivote cromado circular). Reafirma el patrón de "cambio único y puntual": bloquear todo el resto de la imagen explícitamente y cambiar una sola pieza chica (la goma del borde inferior), sin tocar ni siquiera otras piezas del mismo color que no correspondían.

- **Re-lectura de excel puede desbloquear casos previamente bloqueados** — el caso Hero (`simulaciones-cc/simulacion-12-hero-verificacion.md`) estaba bloqueado por 9 de 13 celdas sin dato en el excel. Una nueva captura de pantalla del mismo excel, más completa, reveló que 2 de esas celdas ("Cubre barbilla", "Cubre nariz") sí tenían dato (X confirmado) que no se había visto en la captura original. Lección: cuando llega una captura nueva del mismo excel, siempre vale la pena re-auditar contra la transcripción ya guardada en vez de asumir que no cambió nada — puede haber más columna visible o mejor resolución.

- **Regla de proceso ya establecida y reforzada hoy** (no nueva, pero vale dejarla explícita acá) — cada prompt o hallazgo nuevo se guarda en el archivo del caso correspondiente y se commitea/pushea al repo inmediatamente, sin esperar a que el usuario lo pida cada vez — es el flujo de trabajo esperado de esta sesión.

---

## 9. Regla de negocio — goma del borde inferior siempre negro

- **Regla confirmada por el equipo**, vía comentario directo de un compañero ("jimgarzons") dejado sobre una pieza real en la herramienta de diseño (Canva): en **TODOS** los cascos del catálogo, la goma/tira del borde inferior de la calota debe ser color **NEGRO**, sin excepción. Texto exacto del comentario: "LA GOMA DE ABAJO DEL CASCO DEBE SER COLOR NEGRO. LOS ACCESORIOS SI PUEDEN QUEDARSE DE ESE COLOR, SOLO CAMBIAR LA GOMA DE ABAJO A COLOR NEGRO. ESTO APLICAR PARA TODOS LOS CASOS".
- **Los demás accesorios de color SÍ pueden mantener su color propio** — pico frontal/spoiler, piezas de ventilación, etc. no se ven afectados por esta regla. Aplica específicamente a la goma del borde inferior, no a todas las piezas de acabado del casco.
- **Se aplica retroactivamente como checklist a futuros prompts de variantes de color**: cuando se genere o audite cualquier variante de color de un casco del catálogo, hay que verificar puntualmente que la goma del borde inferior sea negra, independientemente de qué otro color tenga el resto del casco.
- **Primer caso donde se aplicó explícitamente:** Simulación 27 (casco blanco/glossy con detalles tostados) — `simulaciones-cc/simulacion-27-casco-blanco-glossy-goma-negra.md`.
- **Referencia cruzada:** la Simulación 26 (casco retro/redondo, `simulaciones-cc/simulacion-26-casco-retro-goma-negra.md`) ya había hecho este mismo tipo de cambio puntual antes de que la regla se formalizara como política general — vale la pena revisarla para confirmar que cumple.

---

**Última actualización:** 2026-07-28 · agregados 2 ítems de checklist (Tipo A: diseño gráfico solo sobre superficie pintada; Tipo B: describir cada bloque jerárquico por separado), sección 8 con las lecciones aprendidas de la sesión del 2026-07-28 (confirmación de nombre Boston 4.0, sub-tipo de prompt de swap de texto en logo, línea de licencias de marca y caso Top Gun, primer casco retro, re-lectura de excel del caso Hero), y sección 9 con la nueva regla de negocio de goma del borde inferior siempre negro (confirmada por comentario del equipo, primer caso Simulación 27). Se suma además un ítem nuevo al checklist Tipo A: cuando la fuente de diseño es una ilustración/mockup vectorial 2D y el checkpoint es una fotografía real, hay que separar TRES ejes (forma / contenido gráfico / estilo de render y realismo de material) y exigir explícitamente resultado fotorrealista con el tratamiento fotográfico del checkpoint — hallazgo del livery de carreras EDGE (`simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 2→3 del Colorway 1 vista lateral). Se suma también un ítem nuevo al checklist Tipo A sobre **prompts de edición**: no alcanza con proteger lo que no se toca — hay que declarar además que dentro de la zona que sí se edita lo único que cambia es el atributo puntual indicado (color, posición, tamaño) y que todo su dibujo interno (líneas, texturas, textos, capas) se conserva idéntico, más una verificación final contra la imagen original; sin esa aclaración, nombrar una zona como "la que hay que cambiar" le da licencia al generador para rehacerla entera y la devuelve simplificada — hallazgo del mismo caso EDGE (`simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 2→3 de la vista lateral del Colorway 2). Se suma por último un ítem nuevo al checklist Tipo A sobre **propagación de reglas entre vistas**: cuando se descubre una regla nueva y se corrige el prompt de una vista o pieza, hay que copiarla en el acto a los prompts de todas las demás vistas y colorways del mismo caso (incluidos los que viven en archivos separados y siguen pendientes de generar), o el mismo defecto reaparece vista por vista y se pierde tiempo redescubriéndolo — hallazgo del mismo caso EDGE (`simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 3→4 del Colorway 1 vista trasera), donde el tercer eje de realismo se agregó a la vista lateral pero no a la trasera, y la trasera volvió a devolver una ilustración plana con la silueta del mockup en vez de la del molde real. Se **amplía** además ese ítem del checklist Tipo A sobre prompts de edición con su contracara: blindar el dibujo de la zona editada no alcanza por sí solo — hay que exigir también **cobertura completa del cambio dentro de la zona** (si el cambio es un recoloreo, ninguna isla, bloque ni grupo de elementos puede quedarse con el color viejo) y **nombrar explícitamente las excepciones que sí lo conservan**, cerrando con una verificación final desdoblada en dos chequeos (dibujo intacto + cero rastros del color anterior). Hallazgo del mismo caso EDGE (`simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 3→4 de la vista lateral del Colorway 2): el dibujo de la zona se conservó perfecto, pero un grupo de barras horizontales de la parte baja-izquierda quedó sin recolorear. Se suma finalmente un ítem nuevo al checklist Tipo A sobre **separación de roles a nivel de pieza**: cuando una pieza concreta toma su color/textura de una fuente y su forma de otra, no alcanza con declarar la separación a nivel de la imagen completa — hay que darle a esa pieza un bloque propio que diga explícitamente qué atributo sale de cada imagen, prohibir el promedio/híbrido con esas palabras, describir la forma real de la pieza con detalle (cuánto sobresale, qué perfil, cómo es su borde) en vez de solo nombrarla, y cerrar con una verificación contra la foto del checkpoint. Hallazgo del mismo caso EDGE (`simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 4→5 de la vista trasera del Colorway 1): con todo el resto de la vista resuelto, el spoiler salió híbrido — tomó el azul sólido del mockup, que era lo correcto, pero arrastró también su forma de ala grande y prominente en lugar del labio bajo e integrado del molde real. Se suma por último un ítem nuevo al checklist Tipo A sobre **proporción y relación figura/fondo**: no alcanza con declarar qué colores componen el diseño — hay que declarar cuál es la **superficie dominante**, cuál el **acento minoritario**, en qué lugares concretos aparece ese acento y que sumado ocupa mucha menos superficie que el dominante, prohibiendo explícitamente expandirlo a superficies completas e invertir figura y fondo (ojo con los pedidos de "subir la intensidad" de un color: sin límite de superficie declarado, el generador lee "más color" como "más área"). Y su corolario: **un detalle fino de un color solo sobrevive si el prompt declara contra qué fondo debe contrastar**, descrito en positivo (grosor, elementos que lo rodean, fondo sobre el que se apoya) y no solo en negativo como excepción de otra regla. Hallazgo del mismo caso EDGE (`simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 4→5 de la vista lateral del Colorway 2): con el dibujo blindado y el recoloreo ya completo, la calota superior y el pico frontal volvieron fundidos en una masa roja continua que ocupaba el tercio superior del casco —figura y fondo invertidos respecto del mockup— y la única flecha roja delgada del grupo de chevrons grises desapareció por falta de contraste. Se suma por último un ítem nuevo al checklist Tipo A que **generaliza la regla de cobertura completa a los borrados y a los agregados**, no solo a los recoloreos: en un **borrado** son dos tareas —eliminar sin dejar resto, borde, halo ni sombra, y **reconstruir el dibujo que va debajo**, que hay que declarar explícitamente cuando la superficie de abajo no es lisa sino un diseño con patrón, exigiendo continuidad trazo por trazo y sin costura visible—; en un **agregado** la cobertura completa es **cantidad, alineación, posición y tamaño exactos con conteo forzado**, el mismo mecanismo que el ítem de conteo de celdas del Tipo B pero que hasta ahora no estaba escrito para el Tipo A. Caso de referencia (`simulaciones-cc/simulacion-30-edge-racing-livery.md`, Intento 5 de la vista lateral del Colorway 1): una edición puntual de 3 cambios —borrar una pieza negra tipo toma de aire inventada sobre el livery, borrar un sticker "DOT" y agregar las 3 marcas en "X" de la mentonera— cuya auditoría quedó preparada con checklist por cambio, riesgo anticipado por cambio y dos prompts correctivos "Intento 6" (Escenario A, cobertura parcial; Escenario B, la edición redibujó de más), con el veredicto empírico pendiente de que el usuario mire las 3 imágenes generadas.
