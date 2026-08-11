# 📋 MATERIAL PREPARATORIO DEL PASO 4 — borrador adelantado, no es la definición final del modelo de datos.

**Fecha:** 2026-08-10
**Agente:** Agente 4 - Modelo de datos
**Proyecto:** Dashboard de Cuentas por Cobrar (CxC)

---

## Alcance

Este documento propone un borrador de modelo de datos relacional para cinco entidades centrales del dashboard de CxC: **Clientes**, **Facturas**, **Pagos**, **Notas de crédito** y **Disputas**. El objetivo es adelantar la estructura de campos, tipos de dato, identificadores únicos y relaciones para facilitar el diseño del dashboard antes de que el Paso 4 formal defina el modelo definitivo.

Todos los nombres de campos y tipos de dato son de ejemplo genérico. **No se usan datos reales de ninguna empresa.**

---

## 1. Entidad: Clientes

| Campo | Tipo de dato | Notas |
|---|---|---|
| `id_cliente` (PK) | UUID / entero autoincremental | Identificador único |
| `nombre_cliente` | texto | Razón social o nombre comercial |
| `identificacion_fiscal` | texto | RFC/NIT/RUC/EIN según país (ejemplo) |
| `email_contacto` | texto | |
| `telefono_contacto` | texto | |
| `direccion` | texto | |
| `condiciones_pago_default` | texto/entero | Ej. "Net 30", días de crédito |
| `centro_costo` | texto | Campo recomendado del plan maestro |
| `estado_cliente` | enum (activo/inactivo) | |
| `fecha_creacion` | fecha/hora | |

**Identificador único:** `id_cliente`

---

## 2. Entidad: Facturas

| Campo | Tipo de dato | Notas |
|---|---|---|
| `id_factura` (PK) | UUID / entero autoincremental | Identificador único |
| `id_cliente` (FK) | UUID / entero | Referencia a Clientes |
| `numero_factura` | texto | Folio/número visible al usuario, distinto del PK interno |
| `fecha_emision` | fecha | |
| `fecha_vencimiento` | fecha | |
| `monto_original` | decimal | |
| `moneda` | texto (ISO 4217, ej. USD/MXN) | |
| `saldo_pendiente` | decimal | Campo calculado o mantenido: monto_original - pagos_aplicados - notas_credito_aplicadas |
| `condiciones_pago` | texto | Campo recomendado; puede heredar de cliente o sobreescribirse |
| `estado_factura` | enum (abierta/pagada/anulada/disputada) | Campo mínimo obligatorio del plan maestro |
| `centro_costo` | texto | Campo recomendado, puede heredar de cliente |
| `notas` | texto | |

**Identificador único:** `id_factura`

---

## 3. Entidad: Pagos

| Campo | Tipo de dato | Notas |
|---|---|---|
| `id_pago` (PK) | UUID / entero autoincremental | Identificador único |
| `id_factura` (FK, nullable) | UUID / entero | Referencia a Facturas; nullable para soportar pagos no aplicados |
| `id_cliente` (FK) | UUID / entero | Referencia directa a Clientes (útil si el pago no está aplicado a una factura específica) |
| `fecha_pago` | fecha | Campo mínimo obligatorio del plan maestro |
| `monto_pago` | decimal | |
| `moneda` | texto (ISO 4217) | |
| `metodo_pago` | texto | Ej. transferencia, cheque, tarjeta (ejemplo) |
| `estado_aplicacion` | enum (aplicado/no aplicado/parcial) | Soporta campo recomendado "pagos no aplicados" |
| `referencia_pago` | texto | Número de transacción o comprobante |

**Identificador único:** `id_pago`

**Nota de diseño:** una factura puede tener múltiples pagos (parciales o completos), y un pago puede no estar aplicado a ninguna factura todavía (pago no aplicado/anticipo). Por eso `id_factura` es nullable y existe también `id_cliente` como referencia directa.

---

## 4. Entidad: Notas de crédito

| Campo | Tipo de dato | Notas |
|---|---|---|
| `id_nota_credito` (PK) | UUID / entero autoincremental | Identificador único |
| `id_factura` (FK, nullable) | UUID / entero | Referencia a Facturas; nullable si la nota es general al cliente |
| `id_cliente` (FK) | UUID / entero | Referencia a Clientes |
| `fecha_emision` | fecha | |
| `monto_nota_credito` | decimal | |
| `moneda` | texto (ISO 4217) | |
| `motivo` | texto | Ej. devolución, descuento, ajuste (ejemplo) |
| `estado_nota_credito` | enum (aplicada/pendiente/anulada) | |

**Identificador único:** `id_nota_credito`

---

## 5. Entidad: Disputas

| Campo | Tipo de dato | Notas |
|---|---|---|
| `id_disputa` (PK) | UUID / entero autoincremental | Identificador único |
| `id_factura` (FK) | UUID / entero | Referencia a Facturas |
| `id_cliente` (FK) | UUID / entero | Referencia a Clientes (redundante pero útil para consultas rápidas) |
| `fecha_apertura` | fecha | |
| `fecha_resolucion` | fecha, nullable | |
| `motivo_disputa` | texto | |
| `monto_disputado` | decimal | |
| `estado_disputa` | enum (abierta/en revisión/resuelta/rechazada) | Campo recomendado del plan maestro |
| `resolucion` | texto | Descripción del desenlace |

**Identificador único:** `id_disputa`

---

## Relaciones entre entidades

- **Cliente 1:N Facturas** — un cliente puede tener muchas facturas; cada factura pertenece a un solo cliente.
- **Factura 1:N Pagos** — una factura puede recibir varios pagos (parciales o completos); cada pago aplicado pertenece a una sola factura.
- **Cliente 1:N Pagos** — un pago puede estar asociado directamente al cliente cuando aún no está aplicado a una factura (pago no aplicado/anticipo).
- **Factura 1:N Notas de crédito** — una factura puede tener varias notas de crédito asociadas.
- **Cliente 1:N Notas de crédito** — una nota de crédito puede ser general al cliente, sin factura específica.
- **Factura 1:N Disputas** — una factura puede tener una o varias disputas registradas a lo largo del tiempo.
- **Cliente 1:N Disputas** (vía factura o directa) — para trazabilidad de disputas por cliente.

### Diagrama de relaciones (texto)

```
Cliente (1) ──< (N) Factura
Cliente (1) ──< (N) Pago (pagos no aplicados)
Factura (1) ──< (N) Pago
Factura (1) ──< (N) Nota de crédito
Cliente (1) ──< (N) Nota de crédito (notas generales)
Factura (1) ──< (N) Disputa
```

---

## Decisiones

- Se usa un identificador técnico (`id_*`, UUID o autoincremental) como PK en cada entidad, separado del identificador "de negocio" (ej. `numero_factura`), para mayor flexibilidad y evitar colisiones.
- Cada fila de Pago, Nota de crédito y Disputa representa un evento individual, permitiendo relaciones 1:N respecto a Factura, según lo exigido por la pregunta crítica del plan maestro.
- Se agrega `id_cliente` como FK directa en Pagos, Notas de crédito y Disputas (además de la relación indirecta vía Factura) para soportar casos donde el registro no está aún vinculado a una factura específica (pagos no aplicados, notas generales).
- `saldo_pendiente` en Factura se plantea como campo calculado o mantenido, pendiente de decidir si se calcula en consulta o se persiste y actualiza por trigger/proceso.

## Supuestos

- Cada entidad opera dentro de una sola moneda por registro (no se modela multi-moneda dentro de una misma fila); conversión de moneda, si aplica, quedaría fuera de este borrador.
- Se asume que "pagos no aplicados" y "notas de crédito generales" son casos válidos de negocio que requieren que la FK a Factura sea nullable.
- No se definen aún índices, constraints de integridad referencial específicos, ni motor de base de datos — se deja para el Paso 4 formal.
- Los campos y tipos de dato (ej. nombres de "método de pago", "motivo") son ilustrativos, no un catálogo cerrado.

## Riesgos

- Si `saldo_pendiente` se persiste en vez de calcularse en consulta, existe riesgo de desincronización si no se actualiza consistentemente al registrar pagos o notas de crédito.
- La relación opcional (nullable) de Pagos y Notas de crédito hacia Factura puede complicar reportes que asumen que todo pago está siempre ligado a una factura; debe documentarse claramente en el Paso 4.
- Falta definir reglas de negocio para el estado "disputada" de una factura: si convive con "abierta" o es excluyente, y cómo se sincroniza con el estado de la Disputa asociada.
- No se ha definido aún el tratamiento de facturas anuladas con pagos ya aplicados (reversión, reembolso).

## Pendientes (para el Paso 4 formal)

- Confirmar definitivamente los tipos de dato exactos (longitud de texto, precisión decimal, etc.).
- Definir constraints de integridad referencial (ON DELETE/UPDATE) entre entidades.
- Decidir si `saldo_pendiente` es campo calculado o persistido.
- Definir catálogos cerrados (enums) para `motivo`, `metodo_pago`, `estado_*`.
- Revisar necesidad de una entidad adicional de auditoría/histórico de cambios de estado.
- Validar este borrador con los demás agentes del proyecto y con el plan maestro antes de considerarlo definitivo.
