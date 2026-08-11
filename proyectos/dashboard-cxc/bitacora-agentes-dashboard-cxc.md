# Bitacora de agentes - Dashboard CxC

Fecha de control: 2026-08-11  
Repositorio GitHub: https://github.com/juandroeleven-jpg/SAAAS-Marketing  
Ruta sugerida en repo: `proyectos/dashboard-cxc/bitacora-agentes-dashboard-cxc.md`

Este documento funciona como centro de mando para coordinar los tres agentes sin que se pisen entre si. La regla base es simple: cada agente reporta avances aqui, pero no modifica el area de otro agente sin autorizacion.

## Estado general

```mermaid
kanban
  Pendiente
    [Conectar documentacion local con GitHub mediante commit o PR autorizado]
    [Definir si la bitacora se sube directa a main o por rama]
  En_progreso
    [Dalton - auditoria visual y coherencia Worklio]
    [Cicero - narrativa ejecutiva para jefes]
    [Ampere - agenda personal y coordinacion SAAAS Marketing]
  Bloqueado
    [Revision real del repo remoto requiere URL/ruta exacta o autorizacion de escritura]
  Hecho
    [Repo identificado: juandroeleven-jpg/SAAAS-Marketing]
    [Ruta dashboard-cxc encontrada en GitHub]
    [Separacion de responsabilidades definida]
```

## Agentes

| Agente | Rol | Estado | Entregable esperado | No debe tocar |
|---|---|---:|---|---|
| Dalton / Boyle | Auditor visual del Dashboard CxC | En progreso | Hallazgos visuales, screenshots, comparacion con Worklio, mejoras de UI | Logica, datos, formulas |
| Cicero / Carson | Presentacion ejecutiva | En progreso | Historia para jefes, guion demo, KPI, beneficios, limites y decisiones | Codigo de la app |
| Ampere / Dirac | Agenda personal y proyecto SAAAS Marketing | En progreso | Prioridades, calendario, backlog, seguimiento de repo | Servicios externos sin permiso |

## Registro historico

<details>
<summary>2026-08-11 - Identificacion del repositorio</summary>

- Se confirmo autenticacion local de GitHub como `juandroeleven-jpg`.
- Se encontro el repositorio `juandroeleven-jpg/SAAAS-Marketing`.
- Se confirmo que el repo contiene `proyectos/dashboard-cxc/`.
- No se hizo ningun cambio remoto.

</details>

<details>
<summary>2026-08-11 - Contexto funcional del Dashboard CxC</summary>

- El prototipo usa datos 100% ficticios.
- Modulos identificados:
  - Resumen de cartera
  - Aging
  - Clientes prioritarios
  - Forecast simulado
  - Seguimiento de cobros
  - Carga y calidad de datos
- Saldo pendiente mostrado en capturas: `$7,700.00`.
- Buckets vistos:
  - Al dia: `$3,500.00`
  - 1-30 dias: `$0.00`
  - 31-60 dias: `$2,200.00`
  - 61-90 dias: `$2,000.00`
  - 90+ dias: `$0.00`
- Existe una disputa activa que bloquea cobro normal.

</details>

<details>
<summary>2026-08-11 - Regla de no conflicto entre agentes</summary>

Cada agente debe escribir su avance en esta bitacora o en su propio archivo asignado. Nadie debe editar el mismo bloque, componente o documento que otro agente si no hay coordinacion previa.

Subreglas:

1. Dalton/Boyle revisa solo estetica, coherencia visual, contraste, responsive, cortes y capturas.
2. Cicero/Carson trabaja solo narrativa ejecutiva, presentacion, guion y explicacion para jefes.
3. Ampere/Dirac trabaja solo agenda personal, orden del proyecto, prioridades y seguimiento.
4. Ningun agente cambia datos, formulas, supuestos financieros o logica sin autorizacion explicita.

</details>

## Pasos operativos

<details>
<summary>Paso 1 - Conectar/revisar GitHub</summary>

Objetivo: usar el repo `SAAAS-Marketing` como fuente de verdad del proyecto.

Subpasos:

1. Confirmar acceso GitHub con la cuenta correcta.
2. Abrir `https://github.com/juandroeleven-jpg/SAAAS-Marketing`.
3. Revisar la carpeta `proyectos/dashboard-cxc/`.
4. Ubicar documentos existentes antes de crear duplicados.
5. Si se va a escribir en GitHub, definir si se hace commit directo o PR.

Estado actual: repo encontrado y pagina abierta en Codex. Escritura remota pendiente de autorizacion.

</details>

<details>
<summary>Paso 2 - Consolidar avances de agentes</summary>

Objetivo: que cada agente deje evidencia clara de que hizo y que falta.

Subpasos:

1. Pedir a Dalton/Boyle su ultimo reporte visual.
2. Pedir a Cicero/Carson su ultimo guion ejecutivo.
3. Pedir a Ampere/Dirac su plan de agenda y seguimiento.
4. Copiar los avances resumidos en "Registro historico".
5. Mover tarjetas del Kanban segun estado real.

Estado actual: roles definidos; falta consolidar entregables finales de cada agente.

</details>

<details>
<summary>Paso 3 - Definir tablero de proyecto</summary>

Objetivo: tener una vista simple de que esta pendiente, en progreso, bloqueado y hecho.

Subpasos:

1. Usar Mermaid Kanban como tablero principal.
2. Mantener una tarjeta por entregable, no por conversacion larga.
3. Marcar bloqueos solo cuando falta una decision, acceso o autorizacion.
4. Actualizar el tablero al cierre de cada sesion de agente.

Estado actual: tablero inicial creado.

</details>

<details>
<summary>Paso 4 - Preparar documento para GitHub</summary>

Objetivo: que este Markdown pueda vivir dentro del repo y servir como historial.

Subpasos:

1. Guardar este archivo en `proyectos/dashboard-cxc/`.
2. Revisar nombres y enlaces internos.
3. Confirmar con el usuario si se sube a GitHub.
4. Crear rama, commit y PR si se decide no tocar `main` directo.

Estado actual: documento creado localmente.

</details>

## Plantilla para reportes de agente

<details>
<summary>Formato obligatorio de actualizacion</summary>

```markdown
### Actualizacion - NOMBRE_AGENTE - YYYY-MM-DD HH:mm

Estado: Pendiente | En progreso | Bloqueado | Hecho

Avances:
- 

Evidencia:
- Archivo, screenshot, URL o nota

Riesgos:
- 

Proximo paso:
- 
```

</details>

## Proximas decisiones

1. Confirmar si este documento se sube al repo `SAAAS-Marketing`.
2. Confirmar si se sube directo a `main` o mediante una rama y PR.
3. Pedir a los tres agentes que usen este archivo como bitacora unica de avance.

### Actualizacion - Cicero / Carson - 2026-08-11 13:00

Estado: En progreso

Avances:
- Se definio la narrativa ejecutiva para jefatura alrededor de una idea central: el Dashboard CxC convierte la cartera en prioridades de gestion y no solo en un reporte.
- Problema a presentar: informacion dispersa, reaccion tardia ante vencimientos, seguimiento manual y poca visibilidad sobre riesgo, responsables y compromisos.
- Solucion a presentar: una vista integrada de resumen de cartera, aging, clientes prioritarios, forecast simulado, seguimiento de cobros y carga/calidad de datos.
- KPI propuestos para la conversacion ejecutiva: saldo pendiente, cartera vencida, porcentaje vencido, aging por bucket, concentracion en clientes prioritarios, recaudo, cumplimiento de compromisos y calidad/oportunidad de datos. Las definiciones finales deben validarse antes de convertirlos en KPI oficiales.
- Beneficio ejecutivo: mejorar visibilidad, priorizacion, velocidad de gestion y control del avance de cobranza, con foco en recuperacion de caja y reduccion de riesgo.
- Limites declarados: el prototipo usa datos 100% ficticios, el forecast es simulado, la disputa activa puede bloquear el cobro normal y el tablero depende de la calidad y frecuencia de actualizacion de las fuentes.
- Guion de demo propuesto: iniciar en Resumen de cartera, explicar el saldo pendiente de `$7,700.00`, recorrer los buckets de aging, bajar a Clientes prioritarios, mostrar la disputa y el Seguimiento de cobros, y cerrar con Forecast y Calidad de datos.
- Decisiones solicitadas a jefatura: validar KPI y definiciones, confirmar fuentes y frecuencia de actualizacion, acordar criterios de prioridad/escalamiento, nombrar responsables y autorizar un piloto con datos reales.

Evidencia:
- Contexto funcional registrado en esta bitacora, seccion "2026-08-11 - Contexto funcional del Dashboard CxC".
- Modulos identificados: Resumen de cartera, Aging, Clientes prioritarios, Forecast simulado, Seguimiento de cobros y Carga y calidad de datos.
- Cifras de referencia registradas: saldo pendiente `$7,700.00`; Al dia `$3,500.00`; 31-60 dias `$2,200.00`; 61-90 dias `$2,000.00`; 1-30 y 90+ en `$0.00`.

Riesgos:
- Presentar datos ficticios como resultados reales podria generar una conclusion incorrecta sobre la efectividad de cobranza.
- No se deben prometer automatizaciones, precision de forecast ni integraciones que no esten confirmadas en el prototipo.
- Sin definiciones comunes de KPI, jefatura podria interpretar de forma distinta vencido, recaudo, promesa cumplida o calidad de datos.

Proximo paso:
- Convertir esta narrativa en un guion final de 5-7 minutos y una lista de decisiones para la reunion, una vez confirmados los KPI visibles y el flujo exacto de la demo.
