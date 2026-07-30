# Agente 0 — Intake y razonamiento — KRATOS · Diseños Dakota temporada 2026

Fecha: 2026-07-30. Molde base: EDGEPRO KRATOS (full face con spoiler), foto de producto negro mate, vista 3/4 delantero mirando a la izquierda.

## Lote

| # | Variante | Vistas | Estado |
|---|---|---|---|
| 1 | Dakota Azul/Rojo/Blanco | A (3/4) · B (lateral) | ✅ A entregada · ✅ B entregada |
| 2 | Dakota Gris/Negro | A · B | ⏳ en cola |
| 3 | Dakota Rojo/Gris/Negro | A · B | ⏳ en cola |
| 4 | Dakota Rojo/Blanco/Negro | A · B | ⏳ en cola |
| 5 | Dakota Celeste/Magenta/Blanco | A · B | ⏳ en cola |

Entrega escalonada: un prompt por mensaje, en orden de esta tabla.

## ⚠️ Brecha de checkpoints reales

Solo hay foto real del Kratos en UNA vista (3/4 delantero). Para la Vista B (lateral) no hay checkpoint real: los prompts de Vista B derivan la rotación del mismo objeto, declarándolo explícito y listando las piezas obligatorias que deben aparecer al girar. **Pedido al cliente: foto real del Kratos en perfil** para elevar la fidelidad de todas las Vistas B del lote.

## Comparación ilustración vs. checkpoint real (elemento por elemento)

| Elemento | Ilustración | Foto real (autoridad) | Clasificación |
|---|---|---|---|
| Spoiler trasero puntiagudo | Presente, coloreado | Presente, negro mate, con tornillo | Réplica fiel |
| Placa pivote del visor | Simplificada, sin carbono | Fibra de carbono + dial rotativo | Aproximación mejorable → manda el real |
| Ranuras ventilación traseras bajas | Ausentes | Presentes (listones horizontales) | Faltante en ilustración → se conserva del real |
| Correa con detalle rojo | Ausente | Presente | Faltante en ilustración → se conserva del real |
| Tomas de aire superiores / lateral | Simplificadas | Presentes | Se conservan del real |
| Visor | Negro opaco | Transparente | Decisión de producto: se declara explícito (negro) |
| Medio | Vector plano | Fotografía de estudio | El output es fotográfico |

## Cruce con las lecciones

- **Lección 1** (¿existe geometría real equivalente?): sí para placa de carbono, ranuras traseras y correa — la ilustración las omite por simplificación de dibujo, no por diseño. Se conservan.
- **Lección 2** (textura/relieve real vs. pintura plana): el carbono de la placa es TEXTURA REAL, no decal → no se pinta encima. El gráfico Dakota es PINTURA → se deforma con la curvatura.
- **Lección 3** (estructura vs. superficie): 100% superficie. Cero cambios de geometría en todo el lote.
- **Lección 4**: el prompt separa geometría / color+gráfico / adaptación a superficie / fotografía en bloques.
- **Lección 5** (attention budget): un prompt por vista, no las 4 juntas. Entrega escalonada.
- **Lección 7** (orden del payload): ilustración PRIMERO, foto real ÚLTIMA como autoridad. Declarado dentro del prompt.
- **Lección 6 y 12** (auditor separado): la validación de cada resultado la hace una pasada distinta de la que generó, con zoom sobre placa/ranuras/logo.

## Riesgos priorizados para el auditor

1. Que omita la placa de carbono con dial (la ilustración induce a aplanarla).
2. Que omita las ranuras traseras bajas y la correa roja.
3. Que devuelva una ilustración vectorial en vez de una fotografía.
4. Logotipo "EDGE" cortado contra el borde o mal escrito (fallos ya vistos en Sim. 6b y 6c).
