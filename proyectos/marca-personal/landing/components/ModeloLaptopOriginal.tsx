"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";

// Vista de comparacion: el GLB TAL CUAL viene del archivo, sin ningun
// ajuste nuestro -- sin reemplazar la textura de pantalla (se ve el
// wallpaper de fabrica del modelo), sin el scale/camara custom que usa
// ModeloLaptop.tsx. Camara neutra + OrbitControls para poder rotarlo a
// mano y comparar contra la version ajustada.
function LaptopOriginal() {
  const { scene } = useGLTF("/modelos-3d/macbook.glb");
  return <primitive object={scene} />;
}

export default function ModeloLaptopOriginal() {
  return (
    <div className="relative aspect-[4/3.2] w-full max-w-xl">
      <Canvas camera={{ fov: 50, position: [1.5, 1.2, 1.5] }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 5, 4]} intensity={1.4} />
        <directionalLight position={[-4, 2, -3]} intensity={0.5} />
        <Center>
          <LaptopOriginal />
        </Center>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/modelos-3d/macbook.glb");
