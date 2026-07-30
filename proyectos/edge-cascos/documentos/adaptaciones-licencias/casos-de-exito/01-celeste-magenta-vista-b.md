# CASO DE ÉXITO 01 — Kratos Dakota CELESTE/MAGENTA — Vista B lateral

Fecha: 2026-07-30. Estado: **APROBADO con una corrección menor pendiente (visor).**

## Resumen

Tras una regeneración (v2) que salió con la forma correcta pero los tonos
colapsados, una única EDICIÓN tonal corrigió los 5 desvíos de color de
golpe, sin degradar la geometría ni el gráfico. Es el mejor resultado del
lote y el que define el método a seguir.

## Evidencia

- Referencia: `../kratos-dakota/resultados/05-cel-ref-ilustracion.webp`
- Antes (v2): `../kratos-dakota/resultados/05-cel-v2-previo.webp`
- Después (v3): `../kratos-dakota/resultados/05-cel-v3-EDITADO-OK.webp`
- Molde real: `../kratos-dakota/resultados/00-molde-real.webp`
- Comparativas: `../kratos-dakota/resultados/crops/CEL-EXITO-*.png`

## Qué se corrigió y se verificó

| # | Cambio pedido | Resultado |
|---|---|---|
| 1 | Celeste turquesa → azul cyan medio | ✅ |
| 2 | Magenta violeta → fucsia | ✅ (queda un resto leve de violeta) |
| 3 | Pieza extractora superior negra → petróleo del spoiler | ✅ |
| 4 | Banda "FOR EXPLORING RUNNERS" blanca → gris medio | ✅ |
| 5 | Deflector frontal negro → gris medio | ✅ |
| — | Geometría, piezas, encuadre, logo, fondo intactos | ✅ |
| — | Ninguna pieza inventada bajo el visor | ✅ |
| — | Microtipografía legible (primera vez en todo el lote) | ✅ |
| — | Visor: debía quedar NEGRO OPACO | ❌ salió transparente (RGB ~242,241,246 vs. 19,19,19 en la referencia) |

## POR QUÉ FUNCIONÓ — el patrón a replicar

1. **Declarar que la forma ya está bien** y que esto NO es una
   regeneración. Sin esa declaración el modelo redibuja y rompe todo.
2. **Cambios NUMERADOS, uno por bloque**, cada uno nombrando la pieza
   por su nombre físico ("la banda que lleva el texto FOR EXPLORING
   RUNNERS", "el deflector de la mentonera"), no por su ubicación vaga.
3. **Decir qué está mal Y qué debe quedar**, con la operación explícita
   ("sacale el componente verde y bajale la luminosidad").
4. **Criterio de rechazo por cambio**: "si sigue pareciendo agua de
   pileta, está MAL".
5. **Escala de tonos ORDENADA de oscuro a claro con N niveles
   numerados**, más la regla: "son N niveles distintos; si dos se
   parecen, está MAL". Esto es lo que impide el colapso de contraste.
6. **Relaciones entre piezas en vez de nombres de color**: "la pieza
   superior lleva EXACTAMENTE EL MISMO TONO QUE EL SPOILER; son
   GEMELOS de color".
7. **Bloque explícito de lo que NO se toca**, nominando cada pieza.
   Sin esto el cambio se derrama (lección del rojo vino).
8. **Checklist final de preguntas** que el modelo debe responder.

## Lección nueva aprendida

**Al editar, el modelo puede revertir una pieza al estado del molde
real.** Acá el visor volvió a ser transparente como en la foto del
Kratos negro. La lista de "lo que NO se toca" decía "el VISOR sigue
negro opaco", pero como frase suelta no alcanzó.
→ **Regla nueva:** el visor merece su propio bloque numerado, no un
renglón dentro de la lista de exclusiones.

## Prompt exacto que produjo el resultado

Ver `../kratos-dakota/AUDITORIA-05-celeste-vista-b-v2.md` y el prompt de
edición de 5 cambios registrado en el hilo de trabajo.
