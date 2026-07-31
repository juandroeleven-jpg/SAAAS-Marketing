# AGENTE 0 — Intake del molde EDGE PRO STREET FIGHTER

Fecha: 2026-07-30 · Molde NUEVO, distinto al Kratos.

## 1. Identificación del molde

Full face deportivo tipo "street fighter". Diferencias clave contra el
Kratos, que hay que tener presentes porque los prompts NO son
reutilizables tal cual:

| Rasgo | Kratos | EDGE PRO Street Fighter |
|---|---|---|
| Visor | ahumado oscuro, curvo clásico | CRISTAL TRANSPARENTE, corte anguloso |
| Spoiler | alerón trasero puntiagudo grande | ALETA / VISERA LATERAL plana y afilada |
| Mentonera | redondeada | ANGULOSA, tipo máscara, con dos rejillas |
| Tomas de aire altas | dos discretas | GRUPO FRONTAL SUPERIOR prominente, en V |
| Placa del visor | gota de fibra de carbono con dial | mecanismo circular chico, sin carbono |
| Ventilación mentón | ranura simple | DOS REJILLAS HEXAGONALES separadas |

## 2. Las vistas disponibles

- **VISTA FRONTAL**: hay ilustración de las 3 variantes + foto real del
  molde negro mate de frente. Checkpoint COMPLETO.
- **VISTA LATERAL (perfil izquierdo)**: hay ilustración de 2 variantes
  (rojo y magenta) + foto real del molde negro mate de perfil.
  Checkpoint COMPLETO.

## 3. Las variantes

| # | Nombre | Paleta |
|---|---|---|
| 01 | ROJO | negro base + rojo intenso + gris claro + blanco |
| 02 | MAGENTA / PÚRPURA | negro base + magenta fucsia + púrpura + blanco |
| 03 | BLANCO / AZUL | blanco base + negro + azul cyan + azul royal + rojo |

## 4. CONFLICTOS DECLARADOS entre ilustración y molde real

Estos hay que escribirlos SIEMPRE en el prompt, porque son la causa
número uno de los errores del lote anterior:

**a) EL VISOR.**
La ilustración dibuja el visor con ESPEJADO IRIDISCENTE de colores
(naranja-amarillo en la roja, magenta-violeta en la magenta, negro
pleno en la blanca).
La foto real tiene visor CRISTAL TRANSPARENTE.
→ Acá manda LA ILUSTRACIÓN: el visor espejado ES parte del diseño de
la variante, no un error. Es la excepción a la regla habitual.

**b) LA SILUETA DE LA ILUSTRACIÓN LATERAL ESTÁ RECORTADA.**
El dibujo lateral está cortado: no muestra la parte baja trasera, ni
la correa, ni el borde de goma perimetral completo.
→ Manda LA FOTO REAL: esas piezas existen y se conservan.

**c) LA ILUSTRACIÓN NO MUESTRA EL MECANISMO DEL VISOR.**
En la ilustración lateral el pivote está simplificado o ausente.
→ Manda LA FOTO REAL: el mecanismo circular y sus tornillos se
conservan.

**d) LA ILUSTRACIÓN FRONTAL NO MUESTRA LA CORREA NI EL INTERIOR.**
→ Manda LA FOTO REAL.

**e) LA ALETA / VISERA LATERAL.**
En la foto real es una pieza TRANSPARENTE ahumada clara, plana y
afilada, que sobresale por atrás. En las ilustraciones aparece
pintada del color de la variante.
→ Manda LA ILUSTRACIÓN para el COLOR, la FOTO REAL para la FORMA.

## 5. Lecciones del lote Kratos que se aplican desde el minuto cero

1. Declarar SIEMPRE qué color es el FONDO de cada zona, no solo el
   color de los elementos.
2. Prohibir explícitamente los TONOS INTERMEDIOS.
3. Dar el reparto de superficie con PORCENTAJES.
4. Declarar los CONFLICTOS ilustración-vs-real en las dos direcciones.
5. El SELLO DOT y la microtipografía no se dibujan: post-producción.
6. Nunca escribir "para que todo tenga un solo color coherente" si el
   diseño necesita dos tonos conviviendo.
7. Prohibir la invención de piezas bajo el mecanismo del visor.

## 6. Cola de trabajo

3 variantes × 2 vistas = 6 prompts de generación + 6 de edición.
Orden: ROJO frontal → ROJO lateral → MAGENTA frontal → MAGENTA lateral
→ BLANCO/AZUL frontal → BLANCO/AZUL lateral.
