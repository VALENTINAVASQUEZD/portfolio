"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Mail, Linkedin, Phone } from 'lucide-react'

export default function Contactarme() {
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
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <section className="relative w-16 h-16 md:w-64 md:h-64" id="menuContainer">
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
            <Image src="/icons/emprendimiento.png" alt="Emprendimiento" width={24} height={24} />
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

    <main className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-pink-800">MIS CONTACTOS</h1>
        </header>

        <section className="flex flex-wrap justify-center gap-8 mb-24">
        <a 
            href="mailto:mavalede@gmail.com" 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-200 flex items-center justify-center hover:bg-pink-300 transition-colors shadow-lg"
        >
            <Mail className="w-10 h-10 md:w-12 md:h-12 text-pink-600" />
        </a>
        <a 
            href="https://www.linkedin.com/in/valentina-vasquez-631433260/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-200 flex items-center justify-center hover:bg-pink-300 transition-colors shadow-lg"
        >
            <Linkedin className="w-10 h-10 md:w-12 md:h-12 text-pink-600" />
        </a>
        <a 
            href="https://wa.me/3133642270" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-200 flex items-center justify-center hover:bg-pink-300 transition-colors shadow-lg"
        >
            <Phone className="w-10 h-10 md:w-12 md:h-12 text-pink-600" />
        </a>
        </section>

        <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 text-center mb-12">TESTIMONIOS</h2>
        
        <section className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-xl p-8">
            <blockquote className="space-y-4">
                <p className="text-gray-600 italic">
                "Excelente estudiante, comprometida y eficiente"
                </p>
                <footer>
                <h3 className="font-semibold text-pink-800">Yithsa Muñoz</h3>
                <p className="text-gray-500">Docente</p>
                </footer>
            </blockquote>
            </article>

            <article className="bg-white rounded-lg shadow-xl p-8">
            <blockquote className="space-y-4">
                <p className="text-gray-600 italic">
                "Cumplida y comprometida con sus actividades"
                </p>
                <footer>
                <h3 className="font-semibold text-pink-800">Oscar de los Rios</h3>
                <p className="text-gray-500">Líder de ministerio infantil</p>
                </footer>
            </blockquote>
            </article>

            <article className="bg-white rounded-lg shadow-xl p-8">
            <blockquote className="space-y-4">
                <p className="text-gray-600 italic">
                "Es proactiva a la hora de resolver problemas y busca soluciones rápidas y acertadas"
                </p>
                <footer>
                <h3 className="font-semibold text-pink-800">David Valencia</h3>
                <p className="text-gray-500">Docente</p>
                </footer>
            </blockquote>
            </article>
        </section>
        </section>
    </main>
    </body>
)
}