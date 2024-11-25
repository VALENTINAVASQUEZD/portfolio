"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Proyectos() {
const router = useRouter()
const [currentProject, setCurrentProject] = useState(0)
const scrollContainerRef = useRef<HTMLElement>(null)
const [isMenuOpen, setIsMenuOpen] = useState(false)

const projects = [
    {
    title: 'NEXT UI APP',
    image: '/images/nextUI.jpeg',
    github: 'https://github.com/VALENTINAVASQUEZD/nextUI_app'
    },
    {
    title: 'BACK PRONET',
    image: '/images/backpronet.jpeg',
    github: 'https://github.com/VALENTINAVASQUEZD/backPRONET'
    },
    {
    title: 'FRONT PRONET',
    image: '/images/frontpronet.jpeg',
    github: 'https://github.com/VALENTINAVASQUEZD/frontPRONET'
    }
]

const handleNavigation = (path: string) => {
    router.push(path)
}

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
}

const scrollToProject = (index: number) => {
    if (scrollContainerRef.current) {
    const container = scrollContainerRef.current
    const projectElement = container.children[index] as HTMLElement
    container.scrollTo({
        left: projectElement.offsetLeft,
        behavior: 'smooth'
    })
    setCurrentProject(index)
    }
}

const handleScroll = () => {
    if (scrollContainerRef.current) {
    const container = scrollContainerRef.current
    const scrollPosition = container.scrollLeft
    const projectWidth = container.offsetWidth
    const newIndex = Math.round(scrollPosition / projectWidth)
    setCurrentProject(newIndex)
    }
}

useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
    }
}, [])

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

    <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-800">MIS PROYECTOS</h1>
        </header>

        <section className="relative max-w-6xl mx-auto">
        <button 
            onClick={() => scrollToProject(Math.max(0, currentProject - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition-colors shadow-lg z-10 md:hidden"
            aria-label="Proyecto anterior"
        >
            <ChevronLeft size={24} />
        </button>

        <section 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:gap-8"
        >
            {projects.map((project, index) => (
            <article 
                key={project.title}
                className="w-full text-gray-800 flex-shrink-0 snap-center px-4 md:px-0"
            >
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <figure className="relative aspect-video overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-105">
                    <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    />
                </figure>
                <h2 className="text-xl font-semibold text-center mt-4">{project.title}</h2>
                </Link>
            </article>
            ))}
        </section>

        <button 
            onClick={() => scrollToProject(Math.min(projects.length - 1, currentProject + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition-colors shadow-lg z-10 md:hidden"
            aria-label="Siguiente proyecto"
        >
            <ChevronRight size={24} />
        </button>
        </section>
    </main>
    </body>
)
}