"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Escena 3D real (React Three Fiber, no CSS) que representa el producto
// literalmente: un nucleo "orquestador" con los sistemas que coordina
// orbitando alrededor y conectados por lineas -- conecta la forma con
// el storytelling (caso Cliente Enterprise Multi-pais, seccion Logros).
const NODOS = [
  "Ventas",
  "Cobranza",
  "Inventario",
  "Pricing",
  "Data",
  "Forecast",
];

function Nodo({
  posicion,
  etiqueta,
}: {
  posicion: [number, number, number];
  etiqueta: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.scale.setScalar(1 + Math.sin(t * 2 + posicion[0]) * 0.08);
  });

  return (
    <group position={posicion}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color="#00D9C0"
          emissive="#00D9C0"
          emissiveIntensity={0.6}
          roughness={0.3}
        />
      </mesh>
      <Html position={[0, -0.4, 0]} center distanceFactor={10} zIndexRange={[0, 0]}>
        <span className="whitespace-nowrap rounded-full border border-cf-border bg-cf-bg/80 px-2 py-0.5 text-[10px] font-medium text-cf-text">
          {etiqueta}
        </span>
      </Html>
    </group>
  );
}

function Nucleo() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.22;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.55, 1]} />
      <meshStandardMaterial
        color="#6C5CE7"
        emissive="#6C5CE7"
        emissiveIntensity={0.35}
        wireframe
      />
    </mesh>
  );
}

function Escena() {
  const grupo = useRef<THREE.Group>(null);

  const posiciones = useMemo<[number, number, number][]>(() => {
    const radio = 1.9;
    return NODOS.map((_, i) => {
      const angulo = (i / NODOS.length) * Math.PI * 2;
      const alturaAlterna = i % 2 === 0 ? 0.5 : -0.5;
      return [
        Math.cos(angulo) * radio,
        alturaAlterna,
        Math.sin(angulo) * radio,
      ];
    });
  }, []);

  useFrame((_, delta) => {
    if (!grupo.current) return;
    grupo.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={grupo}>
      <Nucleo />
      {posiciones.map((pos, i) => (
        <group key={NODOS[i]}>
          <Nodo posicion={pos} etiqueta={NODOS[i]} />
          <Line
            points={[[0, 0, 0], pos]}
            color="#6C5CE7"
            transparent
            opacity={0.35}
            lineWidth={1}
          />
        </group>
      ))}
    </group>
  );
}

export default function Orquestador3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        style={{ width: "100%", height: "100%", display: "block" }}
        dpr={[1, 2]}
        resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
        camera={{ position: [0, 1.4, 6.8], fov: 42 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#00D9C0" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#6C5CE7" />
        <Escena />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
