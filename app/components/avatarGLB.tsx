"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function AvatarModel() {
  const { scene } = useGLTF('/miAvatar.glb'); // Reemplaza con la ruta de tu archivo GLB

return <primitive object={scene} scale={2} />;
}

export default function AvatarGLB() {
return (
    <section className="w-full h-full">
    <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        <AvatarModel />
    </Canvas>
    </section>
);
}
