# Simulación 23 — Casco adventure/motocross con pico solar: 4 variantes de color (Tipo A, geometría intacta)

[← Volver al índice de mis pruebas](../mis-pruebas-claude-code.md) · [← Orquestación de agentes en paralelo](../orquestacion-agentes-paralelos.md) · [← Índice maestro de prompts](indice-prompts-catalogo.md)

Casco de referencia: adventure/motocross, negro mate, pico/visera solar superior, mentonera con ventilaciones, vents laterales, visera transparente, acolchado interior naranja visible. **Modelo sin nombre confirmado en esta sesión.**

Pedido explícito del usuario: 4 variantes, 3 de ellas de dos tonos (carcasa principal + "detalles del casco"). **Se asumió que "detalles" son los paneles de acento** (contorno de ventilaciones laterales, vents de la mentonera, parte inferior del pico) — no se especificó exactamente cuáles piezas son "detalles", queda pendiente de confirmación.

<details><summary>Prompt Variante 1 — Blanco + detalles beige</summary>

```
Genera una imagen de producto del mismo casco adventure/motocross de la
referencia adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: no cambies ningún componente físico —
misma forma de calota, mismo pico/visera solar superior, misma
mentonera con ventilaciones, mismos vents laterales, misma visera
transparente, mismo acolchado interior naranja visible. Es el mismo
objeto 3D, solo cambian los 2 colores de superficie indicados.

CAMBIO DE COLOR — ÚNICO cambio permitido (dos tonos):
- Carcasa principal (calota, pico superior, mentonera — el cuerpo
  grande del casco): BLANCO.
- Detalles/paneles de acento (contorno de las ventilaciones laterales,
  contorno de los vents de la mentonera, parte inferior del pico): BEIGE.
- Visera transparente y acolchado interior naranja: sin cambios.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. No tocar la visera ni el
acolchado interior. Solo los 2 colores (blanco principal, beige en los
detalles).
```

</details>

<details><summary>Prompt Variante 2 — Gris + detalles azul oscuro</summary>

```
Genera una imagen de producto del mismo casco adventure/motocross de la
referencia adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: misma calota, mismo pico superior, misma
mentonera con ventilaciones, mismos vents laterales, misma visera
transparente, mismo acolchado interior naranja — ningún componente
cambia de forma ni posición.

CAMBIO DE COLOR — ÚNICO cambio permitido (dos tonos):
- Carcasa principal: GRIS.
- Detalles/paneles de acento (contorno de ventilaciones laterales, vents
  de la mentonera, parte inferior del pico): AZUL OSCURO.
- Visera transparente y acolchado interior naranja: sin cambios.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. Solo los 2 colores (gris
principal, azul oscuro en los detalles).
```

</details>

<details><summary>Prompt Variante 3 — Verde claro + detalles chocolate</summary>

```
Genera una imagen de producto del mismo casco adventure/motocross de la
referencia adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: misma calota, mismo pico superior, misma
mentonera con ventilaciones, mismos vents laterales, misma visera
transparente, mismo acolchado interior naranja — ningún componente
cambia de forma ni posición.

CAMBIO DE COLOR — ÚNICO cambio permitido (dos tonos):
- Carcasa principal: VERDE CLARO.
- Detalles/paneles de acento (contorno de ventilaciones laterales, vents
  de la mentonera, parte inferior del pico): CHOCOLATE (marrón oscuro).
- Visera transparente y acolchado interior naranja: sin cambios.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. Solo los 2 colores (verde claro
principal, chocolate en los detalles).
```

</details>

<details><summary>Prompt Variante 4 — Rojo mate (color único)</summary>

```
Genera una imagen de producto del mismo casco adventure/motocross de la
referencia adjunta, mismo ángulo, encuadre y fondo.

CRÍTICO — GEOMETRÍA INTACTA: misma calota, mismo pico superior, misma
mentonera con ventilaciones, mismos vents laterales, misma visera
transparente, mismo acolchado interior naranja — ningún componente
cambia de forma ni posición.

CAMBIO DE COLOR — ÚNICO cambio permitido:
- Carcasa completa (sin distinción de detalles, un solo color): ROJO
  MATE, uniforme en toda la superficie.
- Visera transparente y acolchado interior naranja: sin cambios.

PROHIBIDO ABSOLUTO: no agregar gráficos, logos, texto, ni cambiar forma,
tamaño o posición de ningún componente. Solo el color de carcasa (rojo
mate).
```

</details>

**Estado:** 🔴 pendientes de generar (los 4).

**Qué hay que hacer:**
1. Confirmar qué piezas exactas son "los detalles del casco" en las Variantes 1, 2 y 3 — se asumió contorno de ventilaciones + parte inferior del pico, sin confirmación del usuario.
2. Confirmar a qué modelo del catálogo corresponde este casco (no asumido en esta sesión).
3. Correr los 4 prompts (idealmente en sesiones aisladas cada uno) y mandar los resultados para auditoría.
4. Subir la foto de referencia real como adjunto para versionarla.

---

**Última actualización:** 2026-07-28 · prompts armados directo (sin agente auditor separado, por pedido de velocidad del usuario).
