"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// PROVISIONAL: mockup de producto genérico, NO es una captura real del
// producto todavía (D-F1.1 sigue bloqueada por falta de producto real).
// Reemplazar por capturas reales una vez existan (ver Fase 1 del plan).
//
// Solo la red de agentes: nodos aparecen, se conectan entre si con lineas
// curvas neon, la red pulsa, y se desvanece para reiniciar el loop. Sin
// dashboard, sin barras, sin numeros, sin caja blanca de fondo — flota
// directo sobre el contenedor que lo use (Hero / tarjetas de pilares).
// Posiciones en porcentaje (0-100) via viewBox, para escalar en cualquier
// tamano de contenedor.
type Agent = { name: string; color: string; home: { x: number; y: number }; value?: number };

const DEFAULT_AGENTS: Agent[] = [
  { name: "Agente de Datos", color: "#00D9FF", home: { x: 22, y: 20 }, value: 82 },
  { name: "Agente de Reglas", color: "#39FF14", home: { x: 66, y: 28 }, value: 64 },
  { name: "Agente de Decisión", color: "#00D9FF", home: { x: 48, y: 82 }, value: 47 },
];

// Fases del loop (ms): 0 nodos aparecen | 1 se conectan | 2 red pulsa | 3 se desvanece
const DURATIONS = [700, 900, 1400, 600];

function edgesFor(count: number): [number, number][] {
  if (count <= 1) return [];
  if (count === 2) return [[0, 1]];
  const edges: [number, number][] = [];
  for (let i = 0; i < count; i++) edges.push([i, (i + 1) % count]);
  return edges;
}

// Curva angulada: punto de control desplazado perpendicular al segmento,
// para que la linea no sea recta sino un quiebre curvo.
function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const nx = -dy;
  const ny = dx;
  const len = Math.sqrt(nx * nx + ny * ny) || 1;
  const offset = 10;
  const cx = mx + (nx / len) * offset;
  const cy = my + (ny / len) * offset;
  // Redondeado a 4 decimales: server y cliente pueden diferir en el ultimo
  // digito de precision de punto flotante (mismo calculo, distinto
  // motor/build), lo que rompe la hidratacion de React al comparar el
  // atributo "d" character por character.
  const r = (n: number) => n.toFixed(4);
  return `M ${r(x1)} ${r(y1)} Q ${r(cx)} ${r(cy)} ${r(x2)} ${r(y2)}`;
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const remap = (v: number, a: number, b: number) => clamp01((v - a) / (b - a));

// Geometria de gráfico de torta: angulo 0 = arriba (12hs), crece en sentido horario.
function polarPoint(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  // Redondeado a 4 decimales por el mismo motivo que curvePath: Math.sin/cos
  // pueden diferir en el ultimo digito entre servidor y cliente y romper la
  // hidratacion en cualquier atributo (path "d", style left/top) que use este punto.
  const round = (n: number) => Number(n.toFixed(4));
  return { x: round(cx + r * Math.sin(rad)), y: round(cy - r * Math.cos(rad)) };
}
function pieSlicePath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  if (endAngle <= startAngle + 0.01) return "";
  const p1 = polarPoint(cx, cy, r, startAngle);
  const p2 = polarPoint(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${p1.x} ${p1.y} A ${r} ${r} 0 ${largeArc} 1 ${p2.x} ${p2.y} Z`;
}

// Centro/radio del mini-visual de la red y la torta (coordenadas locales a
// SU PROPIA caja, no del contenedor entero).
const MINI_CX = 50;
const MINI_CY = 50;
const MINI_R = 32;

export default function PlaceholderDashboard({
  agents = DEFAULT_AGENTS,
  title = "AGENTES EN RED",
  progress,
  captions,
}: {
  agents?: Agent[];
  title?: string;
  /** 0-1: si se pasa, la animacion queda atada a este valor (ej. un timer de
   * entrada) en vez de correr en loop automatico. */
  progress?: number;
  /** 4 textos opcionales, uno por escena (red, torta, barras, panel), que se
   * muestran AL LADO de cada visual — no abajo, no compartidos. */
  captions?: [string, string, string, string];
}) {
  const scrollMode = typeof progress === "number";

  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (scrollMode) return;
    const timeout = setTimeout(() => {
      setStep((s) => (s + 1) % DURATIONS.length);
    }, DURATIONS[step]);
    return () => clearTimeout(timeout);
  }, [step, scrollMode]);

  useEffect(() => {
    if (scrollMode) return;
    if (step === 0) setCycle((c) => c + 1);
  }, [step, scrollMode]);

  const edges = edgesFor(agents.length);
  const p = progress ?? 0;
  const maxValue = Math.max(...agents.map((a) => a.value ?? 60), 1);

  // En modo scroll los nodos ya no usan `agent.home` (posiciones arbitrarias
  // pensadas para el loop autonomo) sino puntos repartidos en su mini-caja.
  const miniPositions = agents.map((_, i) =>
    polarPoint(MINI_CX, MINI_CY, MINI_R * 1.05, (360 / agents.length) * i)
  );
  const nodePos = (i: number) => (scrollMode ? miniPositions[i] : agents[i].home);

  // --- Modo scroll: narrativa de 4 escenas atadas a `progress` (0-1) ---
  // 1) nodos aparecen  2) se conectan en red  3) aparece la torta
  // 4) aparecen las barras  5) aparece el panel
  //
  // Cada escena aparece con un fade-in rapido y YA NO se apaga: las 4 filas
  // se van sumando y quedan todas visibles a la vez (nunca se reemplazan ni
  // se superponen, porque cada una vive en su propia fila del flujo normal).
  const EDGE = 0.03;
  const revealOpacity = (start: number) => remap(p, start, start + EDGE);

  const nodesInScroll = agents.map((_, i) => remap(p, i * 0.035, i * 0.035 + 0.07) > 0);
  const edgeSweep = edges.map((_, idx) => remap(p, 0.14 + idx * 0.03, 0.24 + idx * 0.03));
  const networkOpacity = 1;
  const networkCaptionOpacity = revealOpacity(0);

  const sliceAngle = 360 / agents.length;
  const pieSweeps = agents.map((_, i) => remap(p, 0.28 + i * 0.02, 0.4 + i * 0.015));
  const pieOpacity = revealOpacity(0.27);
  const pieVisible = p > 0.26;

  const barsOpacity = revealOpacity(0.52);
  const barsVisible = p > 0.51;
  const barGrow = agents.map((_, i) => remap(p, 0.54 + i * 0.02, 0.66 + i * 0.02));

  const panelOpacity = revealOpacity(0.76);
  const panelVisible = p > 0.75;
  const panelRowReveal = agents.map((_, i) => remap(p, 0.79 + i * 0.03, 0.9 + i * 0.03));

  const liveDone = p >= 0.95;

  // --- Modo loop: comportamiento original ---
  const fading = step === 3;
  const connected = step >= 1 && !fading;

  return (
    <div className={`relative w-full h-full flex flex-col gap-3 overflow-hidden ${scrollMode ? "p-4 sm:p-6" : "p-4 sm:p-5"}`}>
      <div className="flex items-center justify-between">
        <span className={`font-semibold text-gray-400 tracking-wide ${scrollMode ? "text-sm sm:text-base" : "text-xs"}`}>
          {title}
        </span>
        <span className={`flex items-center gap-1.5 font-medium text-[#10B981] ${scrollMode ? "text-sm sm:text-base" : "text-xs"}`}>
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[#10B981]"
            animate={
              scrollMode
                ? liveDone
                  ? { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }
                  : { scale: 1, opacity: 1 }
                : step === 2
                ? { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 1.4, repeat: scrollMode ? 0 : step === 2 ? Infinity : 0 }}
          />
          En vivo
        </span>
      </div>

      {!scrollMode && (
        <div className="relative flex-1" style={{ minHeight: "108px" }}>
          <svg
            className="absolute inset-0 pointer-events-none"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {edges.map(([a, b], idx) => (
              <motion.path
                key={`edge-${cycle}-${idx}`}
                d={curvePath(agents[a].home.x, agents[a].home.y, agents[b].home.x, agents[b].home.y)}
                fill="none"
                stroke={agents[a].color}
                strokeWidth={0.8}
                style={{ filter: `drop-shadow(0 0 2px ${agents[a].color})` }}
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  connected
                    ? { pathLength: 1, opacity: [0.6, 1, 0.6] }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={
                  connected
                    ? { pathLength: { duration: 0.6, ease: "easeOut" }, opacity: { duration: 1.6, repeat: Infinity } }
                    : { duration: 0.4 }
                }
              />
            ))}
          </svg>

          {agents.map((agent, i) => (
            <motion.div
              key={`node-${cycle}-${i}`}
              className="absolute flex flex-col items-center gap-1.5"
              style={{ left: `${agent.home.x}%`, top: `${agent.home.y}%`, transform: "translate(-50%, -50%)" }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: fading ? 0.6 : 1, opacity: fading ? 0 : 1 }}
              transition={{ duration: 0.4, delay: step === 0 ? i * 0.25 : 0, ease: "easeInOut" }}
            >
              <span
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                style={{
                  backgroundColor: agent.color,
                  boxShadow: `0 0 14px 4px ${agent.color}, 0 0 4px 1px ${agent.color}`,
                }}
              />
              <span className="text-[10px] font-medium text-gray-500 whitespace-nowrap">{agent.name}</span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modo scroll: 4 filas en flujo normal (no posicionamiento absoluto),
          cada una con su visual a la izquierda y SU propio texto al lado —
          en flujo normal es estructuralmente imposible que dos filas se
          superpongan entre si. */}
      {scrollMode && (
        <div className="flex-1 flex flex-col justify-center gap-5 sm:gap-7">
          {/* Fila 1: red de nodos */}
          <div className="flex items-center gap-4 sm:gap-6" style={{ opacity: networkOpacity }}>
            <div className="relative shrink-0 h-24 w-24 sm:h-36 sm:w-36">
              <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 100 100">
                {edges.map(([a, b], idx) => (
                  <path
                    key={`edge-${idx}`}
                    d={curvePath(nodePos(a).x, nodePos(a).y, nodePos(b).x, nodePos(b).y)}
                    fill="none"
                    stroke={agents[a].color}
                    strokeWidth={1.4}
                    style={{
                      filter: `drop-shadow(0 0 2px ${agents[a].color})`,
                      opacity: edgeSweep[idx] > 0 ? 0.8 : 0,
                    }}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
              {agents.map((agent, i) => (
                <div
                  key={`node-${i}`}
                  className="absolute rounded-full"
                  style={{
                    left: `${nodePos(i).x}%`,
                    top: `${nodePos(i).y}%`,
                    transform: `translate(-50%, -50%) scale(${nodesInScroll[i] ? 1 : 0})`,
                    height: "22%",
                    width: "22%",
                    backgroundColor: agent.color,
                    boxShadow: `0 0 14px 4px ${agent.color}, 0 0 4px 1px ${agent.color}`,
                    opacity: nodesInScroll[i] ? 1 : 0,
                    transition: "transform 0.15s ease-in-out, opacity 0.15s ease-in-out",
                  }}
                />
              ))}
            </div>
            {captions?.[0] && (
              <p
                className="flex-1 text-sm sm:text-base md:text-lg font-semibold text-gray-700 leading-snug"
                style={{ opacity: networkCaptionOpacity }}
              >
                {captions[0]}
              </p>
            )}
          </div>

          {/* Fila 2: grafico de torta */}
          <div className="flex items-center gap-4 sm:gap-6" style={{ opacity: pieOpacity }}>
            <div className="relative shrink-0 h-24 w-24 sm:h-36 sm:w-36">
              {pieVisible && (
                <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 100 100">
                  {agents.map((agent, i) => {
                    const start = i * sliceAngle;
                    const end = start + sliceAngle * pieSweeps[i];
                    const d = pieSlicePath(MINI_CX, MINI_CY, MINI_R, start, end);
                    if (!d) return null;
                    return (
                      <path
                        key={`slice-${i}`}
                        d={d}
                        fill={agent.color}
                        opacity={0.85}
                        style={{ filter: `drop-shadow(0 0 8px ${agent.color})` }}
                      />
                    );
                  })}
                </svg>
              )}
            </div>
            {captions?.[1] && (
              <p className="flex-1 text-sm sm:text-base md:text-lg font-semibold text-gray-700 leading-snug">
                {captions[1]}
              </p>
            )}
          </div>

          {/* Fila 3: barras */}
          <div className="flex items-center gap-4 sm:gap-6" style={{ opacity: barsOpacity }}>
            <div className="shrink-0 flex items-end gap-2 sm:gap-3 h-24 w-32 sm:h-36 sm:w-48">
              {agents.map((agent, i) => {
                const heightPct = barsVisible ? ((agent.value ?? 60) / maxValue) * barGrow[i] * 100 : 0;
                return (
                  <div key={`bar-${i}`} className="relative flex-1 h-full flex items-end">
                    <div
                      className="w-full rounded-t-md"
                      style={{
                        height: `${heightPct}%`,
                        backgroundColor: agent.color,
                        boxShadow: `0 0 10px 2px ${agent.color}`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
            {captions?.[2] && (
              <p className="flex-1 text-sm sm:text-base md:text-lg font-semibold text-gray-700 leading-snug">
                {captions[2]}
              </p>
            )}
          </div>

          {/* Fila 4: panel combinado */}
          <div className="flex items-center gap-4 sm:gap-6" style={{ opacity: panelOpacity }}>
            <div className="shrink-0 w-full sm:w-72 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-100 p-3 sm:p-4 flex flex-col gap-2 sm:gap-2.5" style={{ boxShadow: "0 8px 24px rgba(15,23,42,0.08)" }}>
              {agents.map((agent, i) => (
                <div
                  key={`row-${i}`}
                  className="flex items-center gap-2 sm:gap-3"
                  style={{ opacity: panelVisible ? panelRowReveal[i] : 0 }}
                >
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: agent.color, boxShadow: `0 0 6px 1px ${agent.color}` }} />
                  <span className="text-xs sm:text-sm text-gray-600 w-20 sm:w-24 shrink-0 leading-tight truncate">{agent.name}</span>
                  <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${((agent.value ?? 60) / maxValue) * (panelVisible ? panelRowReveal[i] : 0) * 100}%`,
                        backgroundColor: agent.color,
                      }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 w-8 text-right shrink-0">
                    {agent.value ?? "—"}
                  </span>
                </div>
              ))}
            </div>
            {captions?.[3] && (
              <p className="flex-1 text-sm sm:text-base md:text-lg font-semibold text-gray-700 leading-snug">
                {captions[3]}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
