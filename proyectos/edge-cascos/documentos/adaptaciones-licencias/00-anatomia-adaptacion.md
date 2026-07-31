# Anatomía de una adaptación licenciada sobre molde real — EDGE

Base metodológica para el lote grande de adaptaciones (licencias oficiales).
Extraída del caso real "Tortugas Ninja" (2026-07-30) + hallazgos previos de las Simulaciones 6a-6d.

## Las 6 capas de toda adaptación

1. **MOLDE = AUTORIDAD DE FORMA.** Misma geometría, mismas piezas, mismo ángulo. El arte se aplica ENCIMA, nunca redibuja el casco. (Mismo principio que los prompts de colorway.)
2. **ZONAS DE GRÁFICO vs. ZONAS PROTEGIDAS.** El arte cubre la calota (laterales, parte alta, frontal). Quedan lisas y negras: spoiler/alerón trasero, mentonera baja, tomas de aire, placas del mecanismo del visor, goma del borde inferior. Esa separación es lo que hace que se lea como producto real.
3. **PALETA DE MARCA, NO DEL PERSONAJE.** El caso TMNT es monocromo (negro/gris/blanco + textura grunge splatter) aunque las tortugas sean verdes. Se define la paleta por adaptación; por defecto EDGE usa el tratamiento desaturado.
4. **TIPOGRAFÍA DE LA LICENCIA.** Logotipo oficial en el faldón lateral bajo, siguiendo la curvatura de la calota, COMPLETO y sin cortes.
5. **LOGO EDGE PRESERVADO.** Frontal y/o trasera, sin deformar.
6. **COHERENCIA MULTI-VISTA.** El mismo arte envuelve de forma continua en 3/4, frontal, lateral y trasera.

## Fallos conocidos a blindar en cada prompt

- **Texto cortado por el borde** (caso Padrino, Sim. 6b): el logotipo de la licencia terminaba fuera de la superficie. Regla: el texto entra completo dentro de la zona visible, con margen.
- **"Logo malo"** (caso Top Gun, Sim. 6c): logo mal reproducido/inventado. Regla: el logotipo se reproduce fiel al arte de referencia adjunto, nunca se redibuja de memoria.
- **Dos intentos casi idénticos sin marcar cuál es final** (los 3 casos): nombrar los archivos FINAL / DESCARTAR al generarlos.

## Convención de entrega — siempre dos prompts

Cada auditoría que encuentra defectos se cierra con **dos prompts, nunca uno solo**:

1. **PROMPT DE EDICIÓN** — corrige puntualmente los defectos encontrados sobre la
   imagen ya generada. Sigue el patrón del Caso de Éxito 01 (declarar que no es
   regeneración, un cambio por bloque numerado, nombre físico de la pieza, criterio
   de rechazo, bloque propio para cada cosa que no se toca).
2. **PROMPT DE REGENERACIÓN COMPLETA DESDE CERO** — reescribe la vista entera desde
   el principio, incorporando las lecciones y correcciones encontradas.
   **Es standalone: nunca un parche o diff sobre el archivo de generación
   anterior.** Se puede copiar y correr solo, sin tener que aplicar nada sobre
   otro archivo primero.

Se entregan los dos siempre, aunque se recomiende usar uno. La edición es más
rápida cuando el resultado ya es bueno salvo por 1-2 defectos puntuales; la
regeneración es la opción segura cuando se sospechan más desvíos sin auditar, o
cuando una edición previa ya dejó regresiones (ver el caso de la variante 04,
vista C: la edición arregló 2 defectos y metió 4 nuevos).

## Restricción de IP

Solo se adapta material con licencia YA autorizada por EDGE para ese proyecto. Cada variante se verifica contra los términos de la licencia antes de producción (regla ya fijada en Simulación 9).

## Datos que se necesitan por adaptación

- Molde base (qué casco EDGE) + foto de producto del molde.
- Arte de la licencia (imagen de referencia del personaje/logo).
- Paleta deseada (monocroma por defecto, o a color si la licencia lo pide).
- Vistas a generar (3/4, frontal, lateral, trasera, lifestyle).

## Registro de adaptaciones

| # | Licencia | Molde | Estado |
|---|---|---|---|
| 01 | Tortugas Ninja (TMNT) | Full-face racing con spoiler | Ejemplo de referencia (ya existente) |
