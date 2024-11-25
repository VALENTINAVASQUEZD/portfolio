"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Experiencia() {
const router = useRouter()
const [isMenuOpen, setIsMenuOpen] = useState(false)

const handleNavigation = (path: string) => {
    router.push(path)
}

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
}

useEffect(() => {
    const menuItems = document.querySelectorAll('.menu-item')
    menuItems.forEach((item, index) => {
      const delay = index * 50
    setTimeout(() => {
        if (isMenuOpen) {
          const angle = (index / menuItems.length) * 2 * Math.PI
        const radius = 50
          const x = Math.cos(angle) * radius + 50
          const y = Math.sin(angle) * radius + 50
        ;(item as HTMLElement).style.left = `${x}%`
        ;(item as HTMLElement).style.top = `${y}%`
        item.classList.remove('opacity-0', 'invisible')
        ;(item as HTMLElement).style.transform = `translate(-50%, -50%) scale(1)`
        } else {
        ;(item as HTMLElement).style.left = '50%'
        ;(item as HTMLElement).style.top = '50%'
        item.classList.add('opacity-0', 'invisible')
        ;(item as HTMLElement).style.transform = `translate(-50%, -50%) scale(0.5)`
        }
    }, delay)
    })
}, [isMenuOpen])

return (
    <body className="min-h-screen bg-gradient-to-b from-pink-200 to-white">
    <nav className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <section className="relative w-64 h-64" id="menuContainer">
        <button
            id="menuToggle"
            onClick={toggleMenu}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-pink-300 z-10 transition-all duration-300 hover:scale-110 shadow-lg"
        >
            {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        <nav
            id="circularMenu"
            className="absolute top-0 left-0 w-full h-full"
        >
            <button
            onClick={() => handleNavigation('/')}
            className="menu-item absolute opacity-0 invisible bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
            <Image src="/icons/home.png" alt="Home" width={24} height={24} />
            </button>
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
            <Image src="/icons/emprendimiento.png" alt="emprendimiento" width={24} height={24} />
            </button>
            <button
            onClick={() => handleNavigation('/experiencia')}
            className="menu-item absolute opacity-0 invisible bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
            <Image src="/icons/experiencia.png" alt="Experiencia" width={24} height={24} />
            </button>
            <button
            onClick={() => handleNavigation('/proyectos')}
            className="menu-item absolute opacity-0 invisible bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
            <Image src="/icons/proyectos.png" alt="Proyectos" width={24} height={24} />
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

    <main className="container mx-auto px-4">
        <section className="min-h-screen flex flex-col justify-center">
        <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-pink-800">EXPERIENCIA ACADÉMICA</h1>
        </header>

        <section className="relative max-w-6xl mx-auto">
            <section className="h-1 bg-pink-600 absolute top-1/2 left-0 right-0 -translate-y-1/2" />
            
            <section className="relative grid grid-cols-3 gap-8">
            <article className="text-center text-gray-800">
                <section className="mb-4">
                <h2 className="font-semibold">Bachiller, colegio comfamiliar de nariño</h2>
                <h3 className="text-xl font-bold mt-2">2022</h3>
                </section>
                <section className="w-4 h-4 bg-pink-600 rounded-full mx-auto" />
            </article>

            <article className="text-center text-gray-800">
                <section className="mb-4">
                <h2 className="font-semibold">Estudiante Ingenieria de Software, Universidad Cooperativa de Colombia</h2>
                <h3 className="text-xl font-bold mt-2">2022</h3>
                </section>
                <section className="w-4 h-4 bg-pink-600 rounded-full mx-auto" />
            </article>

            <article className="text-center text-gray-800">
                <section className="mb-4">
                <h2 className="font-semibold">Cursando Fundamenos de IA, Ciberseguridad, GOOGLE</h2>
                <h3 className="text-xl font-bold mt-2">2024</h3>
                </section>
                <section className="w-4 h-4 bg-pink-600 rounded-full mx-auto" />
            </article>
            </section>

            <section className="relative grid grid-cols-2 gap-8 mt-16">
            <article className="text-center text-gray-800 col-start-1">
                <section className="mb-4">
                <h2 className="font-semibold">Auxiliar tecnico de Talento Humano, SENA</h2>
                <h3 className="text-xl font-bold mt-2">2022</h3>
                </section>
                <section className="w-4 h-4 bg-pink-600 rounded-full mx-auto" />
            </article>

            <article className="text-center text-gray-800 col-start-2">
                <section className="mb-4">
                <h2 className="font-semibold">Gamificacion Basica, PROFUTURO</h2>
                <h3 className="text-xl font-bold mt-2">2024</h3>
                </section>
                <section className="w-4 h-4 bg-pink-600 rounded-full mx-auto" />
            </article>
            </section>
        </section>
        </section>

        <section className="min-h-screen flex flex-col justify-center">
        <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-pink-800">EXPERIENCIA LABORAL</h1>
        </header>

        <section className="relative max-w-6xl mx-auto">
            <section className="h-1 bg-pink-600 absolute top-1/2 left-0 right-0 -translate-y-1/2" />
            
            <section className="relative grid grid-cols-3 gap-8">
            <article className="text-center text-gray-800">
                <section className="mb-4">
                <h2 className="font-semibold">Archivadora de documentos, Restaurante Sausalito</h2>
                <h3 className="text-xl font-bold mt-2">2021</h3>
                </section>
                <section className="w-4 h-4 bg-pink-600 rounded-full mx-auto" />
            </article>

            <article className="text-center text-gray-800">
                <section className="mb-4">
                <h2 className="font-semibold">Archivadora de documentos, Servinariño E.U</h2>
                <h3 className="text-xl font-bold mt-2">2022</h3>
                </section>
                <section className="w-4 h-4 bg-pink-600 rounded-full mx-auto" />
            </article>

            <article className="text-center text-gray-800">
                <section className="mb-4">
                <h2 className="font-semibold">Venta de Ropa Temporada alta </h2>
                <h3 className="text-xl font-bold mt-2">2023</h3>
                </section>
                <section className="w-4 h-4 bg-pink-600 rounded-full mx-auto" />
            </article>
            </section>

            <section className="relative grid grid-cols-2 gap-8 mt-16">
            <article className="text-center text-gray-800 col-start-1">
                <section className="mb-4">
                <h2 className="font-semibold">Administradora de Restaurante Sabor Casero</h2>
                <h3 className="text-xl font-bold mt-2">2024</h3>
                </section>
                <section className="w-4 h-4 bg-pink-600 rounded-full mx-auto" />
            </article>

            <article className="text-center text-gray-800 col-start-2">
                <section className="mb-4">
                <h2 className="font-semibold">Niñera Independiente</h2>
                <h3 className="text-xl font-bold mt-2">2023-2024</h3>
                </section>
                <section className="w-4 h-4 bg-pink-600 rounded-full mx-auto" />
            </article>
            </section>
        </section>
        </section>
    </main>
    </body>
)
}