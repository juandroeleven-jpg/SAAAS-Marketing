# Simulación 28 — Banner de marca "Diseñado para superar tus límites" (Tipo B, mejora de calidad/nitidez)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Pieza de marketing/marca (no es un casco): banner con fondo negro sólido, comilla decorativa grande en rojo arriba a la izquierda, texto principal en 2 líneas — "DISEÑADO PARA" (blanco, bold, mayúsculas) / "SUPERAR TUS LÍMITES." ("SUPERAR" en blanco, "TUS LÍMITES." en rojo, mismo punto final) en tipografía condensada/bold sans-serif — y debajo una fila con 3 ítems separados por "/", cada uno con un ícono circular tipo emblema/escudo en línea blanca fina seguido de texto blanco en mayúsculas: "RACING", "URBANO", "TOURING". La referencia real está borrosa, con artefactos de compresión y efecto de doble exposición/ghosting en el texto y los íconos. Se clasifica como **Tipo B** (reproducción exacta de layout fijo) — es una variante de "mejora de calidad/nitidez" del mismo Tipo B: el pedido es reproducir fielmente esta misma pieza (mismo contenido exacto, mismo layout), corrigiendo su calidad de imagen en vez de su contenido, para poder usarla en diseños.

<details><summary>Prompt — Mejora de calidad del banner (mismo contenido, sin blur)</summary>

```
Genera una versión de alta calidad y máxima nitidez de este mismo
banner de texto/marca, mismo layout, mismas proporciones, mismo
aspect ratio que la referencia adjunta — sin recortar ni estirar.

CRÍTICO — TODO EL CONTENIDO IGUAL, SOLO SE MEJORA LA CALIDAD (la
referencia está borrosa/con artefactos de compresión y ghosting, hay
que reproducirla nítida, no rediseñarla):
- Fondo: negro sólido, igual.
- Comilla decorativa grande roja arriba a la izquierda: mismo diseño,
  mismo tamaño, misma posición, color rojo sólido, sin blur.
- Texto principal, mismo texto exacto, mismas 2 líneas:
  "DISEÑADO PARA" (blanco, bold, mayúsculas)
  "SUPERAR TUS LÍMITES." — "SUPERAR" en blanco, "TUS LÍMITES." en
  rojo, mismo punto final, misma tipografía condensada/bold
  sans-serif.
- Fila inferior con 3 ítems separados por "/", cada uno con un ícono
  circular tipo emblema/escudo en línea blanca fina, seguido del
  texto en blanco mayúsculas:
  1. RACING
  2. URBANO
  3. TOURING
  Los 3 íconos deben verse nítidos y distinguibles entre sí (formas
  de emblema/ala estilizada), no borrosos ni ilegibles como en la
  referencia.

CRÍTICO — CALIDAD: máxima nitidez, sin blur, sin ghosting/doble
exposición en el texto, sin artefactos de compresión JPG, bordes de
letras e íconos limpios y definidos, apto para imprimir o usar en
diseño de alta resolución.

PROHIBIDO ABSOLUTO: no cambiar el texto, el orden, el layout, los
colores (negro/blanco/rojo) ni el contenido de los 3 íconos. No
agregar elementos nuevos. Esto es una limpieza/mejora de calidad, no
un rediseño.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt y mandar el resultado para auditoría — verificar en especial que el texto y los 3 íconos queden legibles y sin ghosting.

## Intento 2 — mismo prompt, pero los 3 íconos se rediseñan a algo literal (única excepción al "no rediseñar")

Pedido explícito del usuario: de todo el banner, el ÚNICO elemento que sí se puede rediseñar (no solo limpiar de blur) son los 3 íconos — pasan de la forma abstracta tipo emblema/escudo a un ícono literal y reconocible por categoría: RACING → un casco de moto, URBANO → una carretera/calle, TOURING → un mapa. Todo lo demás del prompt (texto, layout, colores, comilla, calidad/nitidez) se mantiene exactamente igual al Intento 1.

<details><summary>Prompt usado</summary>

```
Genera una versión de alta calidad y máxima nitidez de este mismo
banner de texto/marca, mismo layout, mismas proporciones, mismo
aspect ratio que la referencia adjunta — sin recortar ni estirar.

CRÍTICO — TODO EL CONTENIDO IGUAL, SOLO SE MEJORA LA CALIDAD, CON 1
SOLA EXCEPCIÓN (los 3 íconos, ver más abajo) — la referencia está
borrosa/con artefactos de compresión y ghosting, hay que reproducirla
nítida, no rediseñarla, salvo esa única excepción:
- Fondo: negro sólido, igual.
- Comilla decorativa grande roja arriba a la izquierda: mismo diseño,
  mismo tamaño, misma posición, color rojo sólido, sin blur.
- Texto principal, mismo texto exacto, mismas 2 líneas:
  "DISEÑADO PARA" (blanco, bold, mayúsculas)
  "SUPERAR TUS LÍMITES." — "SUPERAR" en blanco, "TUS LÍMITES." en
  rojo, mismo punto final, misma tipografía condensada/bold
  sans-serif.
- Fila inferior con 3 ítems separados por "/", mismo texto en blanco
  mayúsculas debajo de cada ícono, mismo orden:
  1. RACING
  2. URBANO
  3. TOURING

ÚNICO CAMBIO DE CONTENIDO PERMITIDO EN TODO EL BANNER — los 3 íconos
(el resto del banner NO se rediseña, solo se limpia de blur, ver
arriba): reemplazá el ícono abstracto tipo emblema/escudo de cada
categoría por un ícono literal y reconocible, en el mismo estilo
lineal blanco fino, mismo tamaño y posición que el ícono actual:
1. RACING → un CASCO DE MOTO (silueta lineal de casco integral, visto
   de perfil o 3/4).
2. URBANO → una CARRETERA/CALLE (línea lineal de una ruta con líneas
   divisorias o una calle con edificios simples a los costados).
3. TOURING → un MAPA (silueta lineal de un mapa plegado o un pin de
   ubicación sobre una ruta).
Los 3 íconos nuevos deben mantener el mismo lenguaje visual entre sí
(mismo grosor de trazo, mismo estilo lineal blanco, mismo tamaño de
contenedor circular) para que se vean como parte de un mismo set, no
3 estilos distintos mezclados.

CRÍTICO — CALIDAD: máxima nitidez, sin blur, sin ghosting/doble
exposición en el texto, sin artefactos de compresión JPG, bordes de
letras e íconos limpios y definidos, apto para imprimir o usar en
diseño de alta resolución.

PROHIBIDO ABSOLUTO: no cambiar el texto, el orden, el layout ni los
colores (negro/blanco/rojo). No agregar elementos nuevos fuera de los
3 íconos rediseñados. No dejar el resto del banner (comilla, texto)
con blur o ghosting. No mezclar estilos distintos entre los 3 íconos
nuevos.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt y mandar el resultado para auditoría — confirmar que los 3 íconos nuevos se lean claramente como casco/carretera/mapa y que el resto del banner (texto, comilla, calidad) no se haya alterado.

---

**Última actualización:** 2026-07-28 · Intento 2 agregado a pedido del usuario: única excepción al "no rediseñar" son los 3 íconos, que pasan de forma abstracta a íconos literales (casco, carretera, mapa) — primer caso de pieza de marca/marketing (no casco) del catálogo, variante de mejora de calidad/nitidez dentro del Tipo B.
