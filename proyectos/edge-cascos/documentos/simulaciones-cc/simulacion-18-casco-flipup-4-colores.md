# Simulación 18 — Casco flip-up/modular: 4 variantes de color sólido + visor (Tipo A, geometría intacta)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md)

Sub-caso de variantes de color, mismo patrón que Stellar (`simulacion-14-stellar-verificacion.md`) y el casco de carbono (`simulacion-17-casco-carbono-camo.md`), pero esta vez además del color de carcasa se pide cambiar el tinte del visor en cada variante. Casco de referencia: modular/flip-up (mentonera abatible con seam visible), negro mate, visera transparente, botón/pivote lateral negro, correa con hebilla roja — **modelo sin nombre confirmado en esta sesión**, no asumir a qué caso del catálogo corresponde.

Hecho en primer plano a pedido explícito de velocidad del usuario.

<details><summary>Prompt Variante 1 — Amarillo mate + visor azul</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: no cambies absolutamente ningún componente
físico del casco — misma forma de calota, mismo mecanismo/seam de la
mentonera abatible, mismo botón/pivote lateral, misma ventilación, mismo
borde inferior, misma correa con hebilla roja, misma silueta general. Es
el mismo objeto 3D, solo cambia el color de la carcasa y el tinte del
visor.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa completa: AMARILLO MATE (uniforme en toda la superficie, mismo
  tipo de acabado mate que el original, sin brillo).
- Visor: AZUL — tintado en azul, semitransparente (sigue viéndose que es
  un visor, no un panel opaco).
- Hebilla roja, correa, botón/pivote lateral: sin cambios.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. Solo color de carcasa (amarillo
mate) + tinte de visor (azul).
```

</details>

<details><summary>Prompt Variante 2 — Gris + visor rojo</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo mecanismo de mentonera abatible, mismo
pivote lateral, misma ventilación, misma silueta, mismo borde, misma
correa — ningún componente cambia de forma ni posición. Solo cambia el
color.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa completa: GRIS (tono medio, uniforme, mismo acabado del
  original).
- Visor: ROJO — tintado en rojo, semitransparente.
- Hebilla roja, correa, botón/pivote lateral: sin cambios.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. Solo color de carcasa (gris) +
tinte de visor (rojo).
```

</details>

<details><summary>Prompt Variante 3 — Blanco + visor azul</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo mecanismo de mentonera abatible, mismo
pivote lateral, misma ventilación, misma silueta, mismo borde, misma
correa — ningún componente cambia de forma ni posición. Solo cambia el
color.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa completa: BLANCO (uniforme, mismo acabado del original).
- Visor: AZUL — tintado en azul, semitransparente.
- Hebilla roja, correa, botón/pivote lateral: sin cambios.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. Solo color de carcasa (blanco) +
tinte de visor (azul).
```

</details>

<details><summary>Prompt Variante 4 — Cromado rosado + visor azul</summary>

```
Genera una imagen de producto del mismo casco de la referencia adjunta,
mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: mismo mecanismo de mentonera abatible, mismo
pivote lateral, misma ventilación, misma silueta, mismo borde, misma
correa — ningún componente cambia de forma ni posición. Solo cambia el
acabado/color.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa completa: acabado CROMADO ROSADO (metálico, reflectante, tipo
  espejo con tono rosa/oro rosa — no pintura mate ni sólida, es un
  acabado cromado real que refleja el entorno con tinte rosado).
- Visor: AZUL — tintado en azul, semitransparente.
- Hebilla roja, correa, botón/pivote lateral: sin cambios (mantener su
  acabado metálico original, no confundir con el cromado rosado de la
  carcasa).

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. Solo el acabado cromado rosado de
la carcasa + tinte de visor (azul).
```

</details>

**Estado:** 🔴 pendientes de generar (los 4).

**Qué hay que hacer:**
1. Confirmar a qué modelo del catálogo corresponde este casco (no asumido en esta sesión).
2. Correr los 4 prompts (idealmente en sesiones aisladas, ver hallazgo de contaminación cruzada documentado en `simulacion-11-vortex-verificacion.md`) y mandar los resultados para auditoría.
3. Subir la foto de referencia real como adjunto para versionarla.

---

**Última actualización:** 2026-07-28 · prompts armados en primer plano (sin agente) a pedido explícito de velocidad del usuario.
