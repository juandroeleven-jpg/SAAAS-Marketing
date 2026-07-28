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

---

**Última actualización:** 2026-07-28 · primer caso de pieza de marca/marketing (no casco) del catálogo, variante de mejora de calidad/nitidez dentro del Tipo B.
