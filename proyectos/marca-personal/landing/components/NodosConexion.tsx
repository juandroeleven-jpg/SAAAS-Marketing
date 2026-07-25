"use client";

// Canvas animado de conexiones entre apps/agentes (referencia: nixtio.com),
// vive dentro de la pantalla de la laptop flotante. SVG + CSS, sin WebGL.
const NODOS = [
  { id: "webhook", label: "Webhook", x: 12, y: 18, color: "#F43F5E" },
  { id: "slack", label: "Slack", x: 62, y: 10, color: "#22C55E" },
  { id: "gpt", label: "ChatGPT", x: 42, y: 38, color: "#10B981" },
  { id: "drive", label: "Drive", x: 14, y: 62, color: "#2563EB" },
  { id: "canva", label: "Canva", x: 68, y: 46, color: "#8B5CF6" },
  { id: "notion", label: "Notion", x: 82, y: 68, color: "#0F1B2D" },
  { id: "discord", label: "Discord", x: 30, y: 84, color: "#5865F2" },
];

const CONEXIONES: [string, string][] = [
  ["webhook", "slack"],
  ["slack", "gpt"],
  ["gpt", "drive"],
  ["gpt", "canva"],
  ["canva", "notion"],
  ["drive", "discord"],
];

function nodo(id: string) {
  return NODOS.find((n) => n.id === id)!;
}

export default function NodosConexion() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Líneas de conexión, fijas */}
      {CONEXIONES.map(([a, b], i) => {
        const na = nodo(a);
        const nb = nodo(b);
        return (
          <line
            key={i}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke="#CBD5E1"
            strokeWidth="0.4"
            strokeDasharray="1.2 1.2"
          />
        );
      })}

      {/* Punto de "dato" viajando por cada conexión, en loop */}
      {CONEXIONES.map(([a, b], i) => {
        const na = nodo(a);
        const nb = nodo(b);
        const dur = 2.4 + (i % 3) * 0.6;
        return (
          <circle key={`dot-${i}`} r="1.4" fill="url(#dotGlow)">
            <animateMotion
              path={`M${na.x},${na.y} L${nb.x},${nb.y}`}
              dur={`${dur}s`}
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
            />
          </circle>
        );
      })}

      {/* Nodos */}
      {NODOS.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="3.2" fill="white" stroke={n.color} strokeWidth="0.6" />
          <circle cx={n.x} cy={n.y} r="1.3" fill={n.color} />
          <text
            x={n.x}
            y={n.y + 6.5}
            textAnchor="middle"
            fontSize="3.2"
            fill="#5B6B85"
            fontWeight="600"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
