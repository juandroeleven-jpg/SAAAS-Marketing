"use client";

import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";

// Vista de inspeccion: el GLB TAL CUAL viene del archivo, sin ningun
// ajuste nuestro de textura -- sin reemplazar la textura de pantalla (se
// ve el wallpaper de fabrica del modelo). A diferencia de ModeloLaptop.tsx,
// aca SI usamos camara/scale generosos y OrbitControls: el objetivo de
// esta pagina es poder inspeccionar el objeto de cerca, no maquetarlo.
function LaptopOriginal() {
  const { scene } = useGLTF("/modelos-3d/macbook.glb");
  return <primitive object={scene} />;
}

// El frente del laptop (la PANTALLA) mira hacia -Z en este GLB: por eso la
// camara aprobada de ModeloLaptop.tsx esta en z negativo (-1.4). La camara
// anterior de esta pagina, [1.5, 1.2, 1.5], estaba en +Z y por lo tanto
// mostraba la TAPA TRASERA con el logo -- inservible para inspeccionar.
const CAMARA_POS: [number, number, number] = [-0.95, 0.4, -1.7];

// En viewports angostos (movil) el encuadre horizontal es mucho mas chico y
// el laptop se sale del cuadro por los costados. Alejamos la camara sobre la
// misma linea de vision -- asi se conserva el angulo frontal a la pantalla y
// solo cambia cuanto entra en cuadro.
function CamaraResponsiva() {
  const { camera, size } = useThree();
  useEffect(() => {
    const aspect = size.width / size.height;
    const factor = aspect >= 1.3 ? 1 : 1 + (1.3 - aspect) * 2.1;
    camera.position.set(
      CAMARA_POS[0] * factor,
      CAMARA_POS[1] * factor,
      CAMARA_POS[2] * factor
    );
    camera.lookAt(0, 0, 0);
  }, [camera, size.width, size.height]);
  return null;
}

export default function ModeloLaptopOriginal() {
  return (
    <div className="relative h-screen w-screen">
      <Canvas
        camera={{ fov: 35, position: CAMARA_POS }}
        // Sin esto el render sale a 1x y se ve pixelado en pantallas
        // retina/HiDPI. Tope en 3 para no matar el rendimiento.
        dpr={Math.min(3, typeof window !== "undefined" ? window.devicePixelRatio : 1)}
        gl={{ antialias: true }}
      >
        <CamaraResponsiva />
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 5, 4]} intensity={1.4} />
        <directionalLight position={[-4, 2, -3]} intensity={0.5} />
        <Center scale={3.3}>
          <LaptopOriginal />
        </Center>
        <OrbitControls
          enableZoom
          enablePan={false}
          minDistance={0.8}
          maxDistance={6}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/modelos-3d/macbook.glb");
