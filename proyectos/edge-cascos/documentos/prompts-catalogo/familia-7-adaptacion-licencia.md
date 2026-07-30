# Familia 7 — Adaptación de licencia oficial sobre el molde EDGE

[← Volver al catálogo de prompts](README.md)

**Operación:** aplicar un diseño gráfico con licencia oficial de una marca reconocida (personajes, tipografía, arte de franquicia) sobre un molde EDGE real, en el mismo patrón aditivo ya validado en el proyecto: **casco base liso (molde real) + capa de gráfico de licencia encima**, no un casco ni un diseño inventados desde cero. Esta familia conecta directo con la Etapa 1 (Ilustración) del pipeline EDGE y con las Simulaciones 6a–6d ya documentadas (Bob Esponja, Padrino, Top Gun, Stellar): mismo método, ahora escalado a volumen alto de licencias.

**Contexto operativo (30/07/2026):** EDGE tiene muchas licencias oficiales de marcas muy reconocidas contratadas y sus clientes están pidiendo que se ejecuten. El volumen de casos es grande — se procesan de a uno, en segundo plano, según se van recibiendo los insumos. No se agrupan varios casos en un solo prompt.

## Insumos necesarios por caso

Cada instancia de esta familia necesita DOS fuentes, igual que la Familia 2 (swap de escena):

1. **La foto del molde EDGE en blanco** — el casco real, liso, sin el gráfico de licencia. Es la ÚNICA AUTORIDAD DE FORMA: geometría, piezas, ventilaciones, spoiler, visor, todo eso no se toca.
2. **La referencia del arte con licencia** — puede ser un PDF de specs técnico, un moodboard, capturas del personaje/franquicia, o (como en el primer ejemplo) una pieza ya terminada que sirve de vara de calidad del resultado esperado.

Sin el molde en blanco no se puede escribir un prompt de "preservar la forma" confiable — se pediría el insumo antes de escribir el prompt.

## Riesgos conocidos de esta familia (heredados de la Simulación 6 / Simulación 2)

- **Texto/tipografía corrupta:** los nombres de franquicia y frases del diseño (ej. "TEENAGE MUTANT NINJA TURTLES") son el punto más frágil — falla documentada y repetida en 6a, 6b y 6d (letras cambiadas, palabras corridas).
- **Logos duplicados o mal ubicados:** el logo EDGE debe aparecer una sola vez, en la posición real del molde — falla vista en 6d (logo EDGE duplicado).
- **Visor tintado quedando mal:** si el visor debe quedar transparente, no debe salir con degradé ni espejado — falla vista en 6d.
- **Deformación de geometría:** poco frecuente en la evidencia real (los 4 casos de la Simulación 6 mantuvieron la geometría intacta), pero se verifica igual.
- **Nombrar los resultados** con `FINAL` o `DESCARTAR` al generarlos — hallazgo operativo repetido de las Simulaciones 6a–6c: quedan intentos casi idénticos sin saber cuál es el vigente.

## Formato de entrega esperado (vara de calidad)

El primer ejemplo de referencia (Tortugas Ninja) muestra el formato objetivo de cada caso: vista 3/4 principal con branding de catálogo, vista frontal chica y vista lateral chica, y una foto lifestyle adicional (casco puesto, con atmósfera — humo, en este ejemplo). No todos los casos van a pedir las 4 piezas — se define por caso según lo que pida el cliente.

## Casos

*(Se van agregando uno por uno a medida que se procesan, con sus insumos y su prompt.)*

| Caso | Licencia | Molde EDGE | Estado |
|---|---|---|---|
| — | Tortugas Ninja (TMNT) | Pendiente — falta la foto del molde en blanco | Referencia de calidad recibida, insumo de molde pendiente |
