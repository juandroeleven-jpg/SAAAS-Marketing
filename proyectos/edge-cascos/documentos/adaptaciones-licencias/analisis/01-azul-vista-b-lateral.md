# ANÁLISIS — Kratos Dakota AZUL / ROJO / BLANCO — Vista B lateral

Fecha: 2026-07-30 · Estado: ⚠️ **Aprobado con reservas — 3 correcciones**

---

## Las imágenes

![referencia](../kratos-dakota/resultados/01-azul-vista-b-ILUSTRACION.webp)
*1. Ilustración de referencia (autoridad de gráfico y de color)*

![resultado](../kratos-dakota/resultados/01-azul-vista-b-RESULTADO.webp)
*2. Resultado generado*

![molde real](../kratos-dakota/resultados/00-molde-lateral.png)
*3. Molde real Kratos negro mate (autoridad de forma y de piezas)*

![triptico](../kratos-dakota/resultados/crops/AZUL-B-triptico.png)
*Tríptico comparativo*

![zona baja](../kratos-dakota/resultados/crops/AZULres-baja.png)
*Zona baja: acá se ve que faltan las XXX*

![zona alta](../kratos-dakota/resultados/crops/AZULres-+.png)
*Zona alta: malla, banda y microtipografía — la parte más fiel del resultado*

---

## Lo que se cumplió ✅

| Ítem | Estado |
|---|---|
| Fotografía de producto, no ilustración | ✅ |
| Vista lateral / perfil mirando a la izquierda | ✅ |
| Spoiler completo con su tornillo | ✅ |
| Placa de fibra de carbono con su dial rotativo | ✅ |
| Ranuras de ventilación traseras bajas | ✅ |
| Borde de goma perimetral | ✅ |
| Correa con detalle rojo y hebilla | ✅ |
| Deflector frontal de la mentonera | ✅ |
| Malla triangular con su densidad correcta | ✅ |
| Microtipografía "FOR EXPLORING RUNNERS" legible | ✅ |
| Logo "EDGE" completo, bien escrito, con contorno rojo | ✅ |
| Visor negro opaco | ✅ |
| Fondo blanco, sombra suave, acabado mate | ✅ |
| Cortes de color nítidos estilo racing | ✅ |
| Ninguna pieza inventada bajo el visor | ✅ |

La zona alta es de lo más fiel de todo el lote: la malla triangular, los
encuadres concéntricos y la banda con la microtipografía están calcados.

## Lo que falló ❌

### 1. Faltan las marcas "XXX" de la zona baja delantera
En la ilustración, abajo a la izquierda sobre la masa blanca, hay
**tres marcas en forma de X, azules**, alineadas en diagonal. En el
resultado **no existen**. Es el mismo tipo de omisión que ya vimos en
otras variantes: el generador simplifica los elementos chicos de la
zona baja.

### 2. El azul royal perdió saturación y brillo
Medición de píxel sobre la masa azul dominante:

| | Referencia | Resultado |
|---|---|---|
| Azul dominante | **RGB (0, 72, 168)** | **RGB (24, 72, 144)** |

El resultado tiene **más rojo (24 en vez de 0)** y **menos azul (144 en
vez de 168)**. Traducido: el royal saturado y luminoso se apagó hacia un
azul más grisáceo y más oscuro, con un tinte violáceo. Es sutil pero se
nota al ponerlos uno al lado del otro.

### 3. Falta el "X40" de la zona alta trasera
En la ilustración hay una marca **"X40"** cerca de la base del spoiler.
En el resultado no se lee.

---

## Recomendación

**EDICIÓN.** Ningún defecto es de geometría. El azul es un ajuste tonal
global (lo que el generador ejecuta bien) y las XXX / X40 son elementos
gráficos chicos que se pueden agregar sin tocar el resto.

La reserva: agregar elementos gráficos nuevos es más riesgoso que
cambiar un tono. Si la edición rompe algo, el orden correcto es correr
primero solo el ajuste de azul y dejar las XXX para retoque manual.
