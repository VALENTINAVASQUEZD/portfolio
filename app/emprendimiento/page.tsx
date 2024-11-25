"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Instagram, LinkIcon } from 'lucide-react'

export default function MiEmprendimiento() {
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

    <main className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-800">MI EMPRENDIMIENTO</h1>
        </header>

        <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <article className="space-y-8">
            <figure className="rounded-lg overflow-hidden shadow-xl">
            <Image 
                src="/images/fresas-crema.jpeg" 
                alt="Fresas con crema" 
                width={400} 
                height={300}
                className="w-full h-auto"
            />
            </figure>
            
            <p className="text-lg text-gray-800 text-center max-w-xl mx-auto">
            Soy fundadora de un emprendimiento dedicado a la creación de galletas caseras, 
            fresas con crema y galletas estilo New York, entre otras, siempre enfocado en 
            ofrecer productos frescos y de alta calidad. Mi pasión por la repostería se refleja 
            en cada detalle, buscando brindar una experiencia deliciosa y única a nuestros 
            clientes.
            </p>

            <section className="flex justify-center space-x-6">
            <a 
                href="https://www.instagram.com/your-account" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-colors shadow-lg"
            >
                <Instagram className="text-white" size={24} />
            </a>
            <a 
                href="https://your-website.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-colors shadow-lg"
            >
                <LinkIcon className="text-white" size={24} />
            </a>
            </section>
        </article>

        <article className="space-y-8">
            <figure className="rounded-full overflow-hidden shadow-xl mx-auto w-64 h-64">
            <Image 
                src="/images/valentina-logo.jpeg" 
                alt="Valentina Cookies Logo" 
                width={256} 
                height={256}
                className="w-full h-full object-cover"
            />
            </figure>

            <figure className="rounded-lg overflow-hidden shadow-xl">
            <Image 
                src="/images/valentina-stickers.jpeg" 
                alt="Valentina Cookies Stickers" 
                width={400} 
                height={300}
                className="w-full h-auto"
            />
            </figure>
        </article>
        </section>
    </main>
    </body>
)
}