"use client"

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function AvatarModel() {
  const { scene } = useGLTF('/miAvatar.glb');
  return <primitive object={scene} scale={2} position={[0, -2, 0]} />;
}

export default function AvatarGLB() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    console.log(`Navegando a ${path}`);
    router.push(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
      const delay = index * 50;
      setTimeout(() => {
        if (isMenuOpen) {
          const angle = (index / menuItems.length) * 2 * Math.PI;
          const radius = 50;
          const x = Math.cos(angle) * radius + 50;
          const y = Math.sin(angle) * radius + 50;
          (item as HTMLElement).style.left = `${x}%`;
          (item as HTMLElement).style.top = `${y}%`;
          item.classList.remove('opacity-0', 'invisible');
          (item as HTMLElement).style.transform = `translate(-50%, -50%) scale(1)`;
        } else {
          (item as HTMLElement).style.left = '50%';
          (item as HTMLElement).style.top = '50%';
          item.classList.add('opacity-0', 'invisible');
          (item as HTMLElement).style.transform = `translate(-50%, -50%) scale(0.5)`;
        }
      }, delay);
    });
  }, [isMenuOpen]);

  return (
    <body className="relative w-full h-screen bg-gradient-to-b from-pink-300 to-pink-200">
      <nav className="absolute left-16 top-1/2 -translate-y-1/2">
        <section className="relative w-64 h-64" id="menuContainer">
          <button
            id="menuToggle"
            onClick={toggleMenu}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-pink-300 z-10 transition-all duration-300 hover:scale-110"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
          <nav
            id="circularMenu"
            className="absolute top-0 left-0 w-full h-full"
          >
            <button
              onClick={() => handleNavigation('/sobreMi')}
              className="menu-item absolute opacity-0 invisible bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Image src="/icons/usuario.png" alt="Sobre Mi" width={24} height={24} />
            </button>
            <button
              onClick={() => handleNavigation('/emprendimiento')}
              className="menu-item absolute opacity-0 invisible bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Image src="/icons/emprendimiento.png" alt="Emprendimiento" width={24} height={24} />
            </button>
            <button
              onClick={() => handleNavigation('/proyectos')}
              className="menu-item absolute opacity-0 invisible bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Image src="/icons/proyectos.png" alt="Proyectos" width={24} height={24} />
            </button>
            <button
              onClick={() => handleNavigation('/experiencia')}
              className="menu-item absolute opacity-0 invisible bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Image src="/icons/experiencia.png" alt="Experiencia" width={24} height={24} />
            </button>
            <button
              onClick={() => handleNavigation('/contactarme')}
              className="menu-item absolute opacity-0 invisible bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Image src="/icons/contactarme.png" alt="Contactarme" width={24} height={24} />
            </button>
          </nav>
        </section>
      </nav>

      <section className="absolute right-8 top-1/2 -translate-y-1/2">
        <button 
          className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition-colors shadow-lg"
        >
          <Image src="/icons/cv.png" alt="CV" width={32} height={32} />
          <span className="sr-only">CV</span>
        </button>
      </section>

      <main className="w-full h-full flex flex-col items-center justify-center">
        <section className="w-full h-full">
          <Canvas className="w-full h-full">
            <ambientLight intensity={0.5} />
            <OrbitControls enableZoom={false} enablePan={false} />
            <AvatarModel />
          </Canvas>
        </section>

        <footer className="absolute bottom-16 left-0 right-0 text-center">
          <h1 className="text-gray-800 text-4xl font-bold mb-2">¡HOLA!</h1>
          <h2 className="text-2xl text-gray-700">BIENVENIDO A MI PORTAFOLIO</h2>
        </footer>
      </main>
    </body>
  );
}


