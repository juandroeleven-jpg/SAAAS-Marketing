# Simulación 19 — Casco carbono glossy (tejido hexagonal): 4 variantes de color (Tipo A, geometría + textura + brillo intactos)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md)

Sub-caso de variantes de color, mismo patrón que Stellar, el casco de carbono forjado (Sim. 17) y el flip-up (Sim. 18) — pero acá el requisito de textura es más estricto: el casco de referencia tiene un **tejido de fibra de carbono hexagonal glossy** (patrón de tejido geométrico, no moteado orgánico, con acabado brillante/reflectante). El usuario marcó como "demasiado obligatorio" que el tejido y el brillo queden exactamente iguales entre variantes — no es opcional, es tan importante como la geometría. Casco de referencia: full face, carbono glossy con tejido hexagonal visible, spoiler/aleta lateral, visera transparente, correa con hebilla roja — **modelo sin nombre confirmado en esta sesión**.

Hecho en primer plano a pedido explícito de velocidad del usuario.

<details><summary>Prompt Variante 1 — Rosa pastel</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: no cambies ningún componente físico — misma
forma de calota, mismo spoiler/aleta lateral, mismo mecanismo de pivote
de la visera, misma ventilación, mismo borde inferior, misma correa con
hebilla roja, misma silueta general.

CRÍTICO — TEXTURA Y BRILLO OBLIGATORIOS, IDÉNTICOS AL ORIGINAL: la
superficie debe mantener EXACTAMENTE el mismo patrón de tejido hexagonal
de fibra de carbono que se ve en la referencia (mismo tamaño de celda,
mismo trazado del tejido) y el MISMO nivel de brillo/reflejo glossy
(superficie pulida, con los mismos reflejos especulares curvos que ya
tiene la carcasa). Esto no es opcional: la textura y el brillo son tan
importantes como la geometría, no se simplifican ni se aplanan.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Recoloreá el material como si fuera fibra de carbono teñida en ROSA
  PASTEL: el tejido hexagonal y el brillo se mantienen exactamente
  iguales, solo cambia el pigmento del material (como carbono forjado
  de color, no una pintura plana encima).
- Visera: sin cambios — transparente.
- Hebilla roja, correa, herrajes del pivote: sin cambios.

PROHIBIDO ABSOLUTO: no aplanar ni simplificar la textura del tejido, no
reducir el brillo, no agregar logos ni gráficos, no cambiar forma/tamaño/
posición de ningún componente. Solo el color del material (rosa pastel),
manteniendo tejido y brillo idénticos.
```

</details>

<details><summary>Prompt Variante 2 — Beige y chocolate (dos tonos)</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo spoiler, mismo pivote, misma
ventilación, misma silueta, mismo borde, misma correa — ningún
componente cambia de forma ni posición.

CRÍTICO — TEXTURA Y BRILLO OBLIGATORIOS, IDÉNTICOS AL ORIGINAL: mismo
patrón de tejido hexagonal de fibra de carbono y mismo nivel de
brillo/reflejo glossy que la referencia, en toda la superficie. No
opcional.

CAMBIO DE COLOR — ÚNICO cambio permitido (dos tonos, división asumida
calota/mentonera — confirmar con el usuario si prefiere otra división):
- Calota superior (parte de arriba de la calota, sobre la línea de la
  visera): BEIGE.
- Mentonera/mandíbula inferior (debajo de la línea de la visera,
  incluida la zona frontal baja): CHOCOLATE (marrón oscuro).
- Ambos tonos mantienen el mismo tejido hexagonal y el mismo brillo que
  el original — es fibra de carbono teñida en dos colores, no pintura.
- Visera: sin cambios — transparente.
- Hebilla roja, correa, herrajes del pivote: sin cambios.

PROHIBIDO ABSOLUTO: no aplanar la textura, no reducir el brillo, no
agregar logos ni gráficos, no cambiar forma/tamaño/posición de ningún
componente. Solo los 2 colores (beige arriba, chocolate abajo),
manteniendo tejido y brillo idénticos.
```

</details>

<details><summary>Prompt Variante 3 — Azul oscuro</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo spoiler, mismo pivote, misma
ventilación, misma silueta, mismo borde, misma correa — ningún
componente cambia de forma ni posición.

CRÍTICO — TEXTURA Y BRILLO OBLIGATORIOS, IDÉNTICOS AL ORIGINAL: mismo
patrón de tejido hexagonal de fibra de carbono y mismo nivel de
brillo/reflejo glossy que la referencia, en toda la superficie. No
opcional.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Recoloreá el material como fibra de carbono teñida en AZUL OSCURO:
  tejido hexagonal y brillo se mantienen exactamente iguales, solo
  cambia el pigmento del material.
- Visera: sin cambios — transparente.
- Hebilla roja, correa, herrajes del pivote: sin cambios.

PROHIBIDO ABSOLUTO: no aplanar la textura, no reducir el brillo, no
agregar logos ni gráficos, no cambiar forma/tamaño/posición de ningún
componente. Solo el color del material (azul oscuro), manteniendo tejido
y brillo idénticos.
```

</details>

<details><summary>Prompt Variante 4 — Blanca y gris (dos tonos)</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo spoiler, mismo pivote, misma
ventilación, misma silueta, mismo borde, misma correa — ningún
componente cambia de forma ni posición.

CRÍTICO — TEXTURA Y BRILLO OBLIGATORIOS, IDÉNTICOS AL ORIGINAL: mismo
patrón de tejido hexagonal de fibra de carbono y mismo nivel de
brillo/reflejo glossy que la referencia, en toda la superficie. No
opcional.

CAMBIO DE COLOR — ÚNICO cambio permitido (dos tonos, misma división
asumida que la Variante 2):
- Calota superior (parte de arriba, sobre la línea de la visera):
  BLANCO.
- Mentonera/mandíbula inferior (debajo de la línea de la visera): GRIS.
- Ambos tonos mantienen el mismo tejido hexagonal y el mismo brillo que
  el original — es fibra de carbono teñida en dos colores, no pintura.
- Visera: sin cambios — transparente.
- Hebilla roja, correa, herrajes del pivote: sin cambios.

PROHIBIDO ABSOLUTO: no aplanar la textura, no reducir el brillo, no
agregar logos ni gráficos, no cambiar forma/tamaño/posición de ningún
componente. Solo los 2 colores (blanco arriba, gris abajo), manteniendo
tejido y brillo idénticos.
```

</details>

**Estado:** 🔴 pendientes de generar (los 4).

**Qué hay que hacer:**
1. Confirmar la división de color en las 2 variantes de dos tonos (Variante 2 y 4) — se asumió calota arriba / mentonera abajo, sin confirmación explícita del usuario.
2. Confirmar a qué modelo del catálogo corresponde este casco (no asumido en esta sesión).
3. Correr los 4 prompts (idealmente en sesiones aisladas, ver hallazgo de contaminación cruzada documentado en `simulacion-11-vortex-verificacion.md`) y mandar los resultados para auditoría — prestar especial atención a si el tejido hexagonal y el brillo se mantuvieron, dado que el usuario marcó esto como crítico.
4. Subir la foto de referencia real como adjunto para versionarla.

---

**Última actualización:** 2026-07-28 · prompts armados en primer plano (sin agente) a pedido explícito de velocidad del usuario.
