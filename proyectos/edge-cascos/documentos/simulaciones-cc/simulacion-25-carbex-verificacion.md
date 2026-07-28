# Simulación 25 — Carbex: verificación de los prompts genéricos vs. excel maestro (Etapa 3 — Catálogo)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Octavo caso del catálogo, pipeline **Tipo C**, hecho directo (sin agente, por pedido de velocidad). Mismo excel que Stellar/Kratos/Xpro/Vortex/Shift/Hero, columna Carbex. Carbex es el modelo con **más features confirmadas de todo el catálogo hasta ahora (17 de 24 filas aplicables)**.

<details><summary>Excel maestro — columna Carbex, transcripción completa</summary>

| Fila | Valor Carbex |
|---|---|
| Certificación | DOT & ECE 22.06 |
| Full Face-Flip Up-Open Face-Adventure | FULL FACE |
| Con luz LED | N/A |
| Doble visera | N/A |
| Preparado para anti empañante | X |
| Con Pinlock | X |
| Kit de mecanismo visor | X |
| Visera anti scratch | X |
| Hebilla micrométrica | **N/A** |
| Hebilla doble D | **X** |
| Espacio para Bluetooth | X |
| Material exterior ABS alta resistencia | X |
| Interior EPS de alta resistencia | X |
| Liner desmontable y lavable | X |
| Cubre barbilla | X |
| Cubre nariz | X |
| Emergency Quick Release System (ERS) | X |
| Canal para lentes | X |
| N° Air Vent System | 3 |
| Estilo de casco | AERODINÁMICO |
| Quick Visor Release System | **X** (a diferencia de Kratos/Shift, acá SÍ está confirmado) |
| Master Box | X |
| Inner Box-bolsa protectora | X |
| Con maletín de lujo | X |

</details>

### Auditoría de los 2 prompts genéricos (los mismos usados como base para Kratos/Vortex/Shift)

**Prompt A (homologación):** los 6 ítems de la lista original (Visera anti scratch, ERS, Liner, Sistema de liberación rápida del visor, Cubre barbilla, Cubre nariz) están **los 6 confirmados con X para Carbex** — a diferencia de Kratos y Shift, acá "Sistema de liberación rápida del visor" SÍ es válido (Quick Visor Release System = X). El único problema es la prohibición explícita de "Preparado para anti empañante" — ese ítem **SÍ es una feature real de Carbex** (X confirmado), así que decir "no debe existir bajo ningún concepto" es factualmente incorrecto, aunque no forme parte de esta tarjeta de 6.

**Prompt B (grid):** 5 de 6 ítems correctos (Canal para lentes, Bluetooth, Kit de mecanismo visor, Material ABS, Interior EPS), pero **"Hebilla micrométrica" es N/A para Carbex** (igual que Shift) — Carbex tiene hebilla **doble D** (X) en su lugar. También la prohibición de "Con Pinlock" es factualmente incorrecta (SÍ es X para Carbex, aunque no esté en esta lista de 6).

### Prompts corregidos

<details><summary>Prompt A — Homologación Carbex (corregido)</summary>

```
Genera una tarjeta de HOMOLOGACIÓN para el casco EDGEPRO CARBEX (FULL FACE), mismo formato vertical angosto 4K que la referencia. Encabezado: "HOMOLOGACIÓN — DOT & ECE 22.06".

Lista de EXACTAMENTE 6 ítems, en este orden:
1. VISERA ANTI SCRATCH
2. SISTEMA DE EMERGENCIA DE LIBERACIÓN RÁPIDA (ERS)
3. LINER DESMONTABLE Y LAVABLE
4. SISTEMA DE LIBERACIÓN RÁPIDA DEL VISOR
5. CUBRE BARBILLA
6. CUBRE NARIZ

CRÍTICO — DIMENSIONES EXACTAS: el lienzo final debe tener EXACTAMENTE el mismo ancho y alto en píxeles (formato vertical angosto) que la referencia.

CRÍTICO — layout: una sola columna vertical con los 6 ítems apilados, espaciado uniforme. No agregar un 7° ítem, no omitir ninguno, no duplicar.

PROHIBIDO ABSOLUTO:
- NO usar rectángulos negros sólidos como placeholder.
- NO mostrar certificación incompleta ("DOT FNVSS 510" solo).
- Mantener exactamente estos 6 ítems, ni más ni menos (nota: "Preparado para anti empañante" SÍ es una feature real de Carbex, pero no forma parte de esta tarjeta — no es necesario prohibirla como si fuera falsa, simplemente no va en esta lista de 6).
```

</details>

<details><summary>Prompt B — Grid Carbex (corregido)</summary>

```
Genera un grid de íconos 2x3 para el casco EDGEPRO CARBEX, mismo formato 4K, mismo aspect ratio que la referencia, fondo gris claro, íconos lineales rojo/bordo en octágono.

CRÍTICO — DIMENSIONES Y LAYOUT EXACTOS (un generador anterior de este catálogo falló acá, produjo 2x4 con celdas duplicadas — máxima atención):
- EXACTAMENTE 2 columnas x 3 filas = 6 celdas. NUNCA 2x4, NUNCA 8 celdas.
- Cada ítem en UNA sola celda, UNA sola vez.
- Mismo ancho/alto en píxeles que la referencia. Contá las celdas: deben ser 6, ninguna repetida.

Los 6 ítems, en este orden:
1. CANAL PARA LENTES
2. HEBILLA DOBLE D
3. ESPACIO PARA BLUETOOTH
4. KIT DE MECANISMO VISOR
5. MATERIAL EXTERIOR ABS ALTA RESISTENCIA
6. INTERIOR EPS DE ALTA RESISTENCIA

(Se reemplazó "Hebilla micrométrica" —N/A para Carbex— por "Hebilla doble D" —sí confirmada—.)

CRÍTICO — íconos nuevos, no reciclados de la referencia:
- El ítem "Hebilla doble D" necesita un ícono NUEVO — NO copies ni adaptes el ícono de "Hebilla micrométrica" de la referencia (aunque sea el mismo tipo de pieza, son broches distintos).
- Si el ícono de referencia de hebilla tiene una X roja tachándolo, esa marca NO debe pasar a este grid.

PROHIBIDO ABSOLUTO:
- NO incluir "Diseño modular" — Carbex es Full Face.
- NO incluir "Con luz LED" ni "Doble visera" — ambos N/A para Carbex.
- NO incluir "Hebilla micrométrica" en ninguna forma.
- NO duplicar "Visera anti scratch" ni "Sistema de liberación rápida del visor" (ya están en el Prompt A).
- NO usar rectángulos negros sólidos como placeholder.
(Nota: "Con Pinlock" SÍ es una feature real de Carbex, pero no forma parte de este grid de 6 — no es necesario prohibirla como si fuera falsa.)
```

</details>

**Estado:** ⚠️ Los prompts genéricos casi funcionan para Carbex (mejor resultado de compatibilidad hasta ahora, solo 1 mismatch real), pero necesitaban el cambio de hebilla y la limpieza de las prohibiciones factualmente incorrectas.

**Qué hay que hacer:**
1. Correr los 2 prompts corregidos (en sesión aislada, ver hallazgo de contaminación cruzada) y mandar los resultados para auditoría.
2. Considerar si vale la pena hacer una segunda pieza o versión que sí incluya "Preparado para anti empañante" y "Con Pinlock", dado que Carbex tiene tantas features confirmadas sin usar.
3. Subir la ficha real y el excel como adjunto para versionarlos.

## Sub-caso — Logo/título de marca "BOSTON 4.0" → "CARBEX"

Nota importante: la imagen de logo mostrada por el usuario confirma que el casco negro con panel de LEDs usado en la Simulación 21 es específicamente **"Boston 4.0"**, no "Boston" a secas (quedaba como pendiente sin confirmar en esa simulación).

Pedido: mismo diseño de logo/título (ícono tipo abanico/espiral, barra roja divisoria, tipografía condensada itálica con contorno blanco, fondo con textura diagonal), reemplazando el texto "BOSTON 4.0" por "CARBEX", mismas dimensiones exactas.

<details><summary>Prompt usado</summary>

```
Genera una imagen del mismo logo/título de marca de la referencia
adjunta, EXACTAMENTE en las mismas dimensiones y tamaño de lienzo (mismo
ancho x alto en píxeles, mismo aspect ratio, sin recortar ni estirar).

CRÍTICO — TODO IGUAL, SIN EXCEPCIÓN:
- Ícono gráfico a la izquierda (la forma tipo abanico/espiral en blanco
  y negro): EXACTAMENTE igual, mismo diseño, mismo tamaño, misma
  posición.
- Barra vertical roja divisoria: igual, mismo color, mismo grosor,
  misma posición.
- Tipografía: misma familia condensada/itálica bold, mismo efecto de
  contorno blanco sobre el texto negro, mismo tamaño de letra relativo
  al lienzo.
- Fondo: mismo fondo gris claro con textura diagonal a rayas, igual.
- Composición general: mismo layout, mismo espaciado entre el ícono, la
  barra y el texto.

ÚNICO CAMBIO PERMITIDO: el texto "BOSTON 4.0" se reemplaza por "CARBEX"
— mismo estilo tipográfico, mismo tamaño de letra, centrado
verticalmente igual que el original respecto al ícono y la barra roja.

PROHIBIDO ABSOLUTO: no agregar el número "4.0" ni ningún otro texto
adicional a "CARBEX". No cambiar el ícono, la barra roja, la tipografía,
el fondo, ni las dimensiones del lienzo. Alta calidad, texto nítido y
legible.
```

</details>

**Estado:** 🔴 pendiente de generar.

**Qué hay que hacer:** correr el prompt y mandar el resultado para auditoría. Actualizar `simulacion-21-boston-4-colores.md` con la confirmación de que el modelo es "Boston 4.0".

---

**Última actualización:** 2026-07-28 · verificación directa (sin agente auditor separado, por pedido de velocidad del usuario) del octavo caso del catálogo (Carbex).
