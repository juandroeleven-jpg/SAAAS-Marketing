# PROMPT 2 — Parche a `kratos-dakota/04-rojo-blanco-vista-c-trasera.md`

No es un prompt para correr contra una imagen: es la corrección de texto que hay
que aplicar **al archivo de generación**, para que la próxima vez que se regenere
esta vista (o cualquier otra con el mismo bloque duplicado — ver `../ESTADO.md` § 4
y P4) el sello no vuelva a salir con texto legible y mal escrito.

## Por qué

El prompt actual tiene dos bloques que se contradicen:

1. Uno le pide dibujar el sello **con texto**: *"rectángulo blanco pequeño con el
   texto 'DOT', centrado en el eje... Va como en la ilustración."*
2. El otro, más abajo, **prohíbe** dibujar texto legible ahí: *"Este generador
   siempre los escribe mal. Se componen después en post-producción."*

El resultado en las dos pasadas hechas fue exactamente lo esperable de esa
contradicción: un sello completo, de cinco líneas, con dos de ellas mal escritas.

## El parche

**Borrar** el bloque de "TEXTOS Y DECALS QUE VAN EN ESTA VISTA" en la parte que
describe el sello DOT con contenido de texto:

```diff
 TEXTOS Y DECALS QUE VAN EN ESTA VISTA:
 - El logotipo "EDGE" en BLANCO con contorno oscuro, centrado sobre la BANDA
   HORIZONTAL BAJA, tal como en la ilustración.
-- El SELLO / STICKER DE HOMOLOGACIÓN "DOT": rectángulo blanco pequeño
-  con el texto "DOT", centrado en el eje, por debajo de la banda,
-  sobre la zona baja trasera. Va como en la ilustración.
+- El SELLO / STICKER DE HOMOLOGACIÓN: rectángulo blanco pequeño, en su
+  posición y tamaño reales, centrado en el eje, por debajo de la banda, sobre
+  la zona baja trasera, IGUAL QUE EN LA ILUSTRACIÓN. Va COMPLETAMENTE EN
+  BLANCO, sin ningún texto ni símbolo dentro: ni "DOT", ni el nombre de la
+  marca, ni números. Es un rectángulo de forma y color correctos, vacío por
+  dentro. El contenido se compone después en post-producción con el PNG
+  oficial — ver el bloque "EL SELLO DOT NO SE DIBUJA" más abajo, que ahora
+  no tiene contradicción con este.
 - LAS DOS MARCAS PEQUEÑAS DE TEXTO de los costados, una a cada lado
   de la banda, tal como están en la ilustración. Son OBLIGATORIAS: en
   un intento anterior el generador las omitió. Se reproducen con su
   mismo texto, su mismo tamaño relativo y su misma posición
   simétrica.
 - Nada más: ningún otro texto, sponsor ni logo.
```

El bloque "EL SELLO DOT NO SE DIBUJA" que ya existe más abajo en el archivo
**se deja igual** — con el parche de arriba deja de estar contradicho.

## Chequeo de sistema (P4 de `../ESTADO.md`)

Antes de dar esto por cerrado: buscar el mismo patrón —*"rectángulo... con el
texto DOT"* seguido, más abajo, de *"EL SELLO DOT NO SE DIBUJA"*— en los otros 14
prompts del lote Kratos Dakota (5 variantes × 3 vistas). Es probable que el bloque
se haya copiado igual en todos y la contradicción sea sistémica, no de esta vista.
