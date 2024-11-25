"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function SobreMi() {
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

const programmingSkills = [
    'Python', 'Java', 'JavaScript', 'HTML', 'CSS',
    'Next.js', 'Tailwind', 'Angular'
]

return (
    <body className="min-h-screen bg-gradient-to-b from-pink-200 to-white">
    <nav className="absolute left-16 top-1/2 -translate-y-1/2 z-10">
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
        <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-pink-800">SOBRE MI</h1>
        </header>

        <section className="max-w-6xl mx-auto mb-16">
        <article className="flex flex-col md:flex-row gap-8 items-start">
            <figure className="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden shadow-xl">
            <Image
                src="/images/miFoto.jpeg"
                alt="Foto de perfil"
                width={400}
                height={400}
                className="w-full h-full object-cover"
            />
            </figure>
            <section className="w-full md:w-2/3">
            <p className="text-lg text-gray-800 leading-relaxed">
                Soy una persona extrovertida y apasionada por el trabajo en equipo, ya que creo que la colaboración es clave para lograr grandes resultados. Tengo habilidades sólidas en desarrollo web y programación, destacando en tecnologías como Python, Java, JavaScript, HTML, Next.js, Tailwind y Angular. Me encanta enfrentar nuevos retos y buscar soluciones innovadoras que permitan mejorar la experiencia de los usuarios. Siempre estoy dispuesto a aprender y compartir conocimientos para seguir creciendo en este campo tan dinámico.
            </p>
            </section>
        </article>
        </section>

        <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-pink-800 mb-6 text-center">Lenguajes y Tecnologías</h2>
        <section className="flex flex-wrap justify-center gap-4">
            {programmingSkills.map((skill) => (
            <article key={skill} className="bg-pink-100 px-4 py-2 rounded-full shadow-md">
                <h3 className="text-pink-800 font-medium">{skill}</h3>
            </article>
            ))}
        </section>
        </section>

        <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 mb-12 text-center">MIS HOBBIES</h2>
        <section className="grid md:grid-cols-3 gap-8">
            <article className="text-center">
            <figure className="mb-4 rounded-lg overflow-hidden shadow-xl">
                <Image
                src="/images/deporte.jpg"
                alt="Deporte"
                width={400}
                height={300}
                className="w-full h-auto"
                />
            </figure>
            <h3 className="text-xl text-gray-800 font-bold mb-2">DEPORTE</h3>
            <p className="text-gray-600 mb-2">info</p>
            <p className="text-sm text-gray-800">
                Me encanta mantener una vida activa practicando deportes como voleibol, baile y asistiendo al gimnasio, siempre buscando un equilibrio.
            </p>
            </article>

            <article className="text-center">
            <figure className="mb-4 rounded-lg overflow-hidden shadow-xl">
                <Image
                src="/images/cocinar.jpeg"
                alt="Cocinar"
                width={400}
                height={300}
                className="w-full h-auto"
                />
            </figure>
            <h3 className="text-xl text-gray-800 font-bold mb-2">COCINAR</h3>
            <p className="text-gray-600 mb-2">info</p>
            <p className="text-gray-800 text-sm">
                Otro de mis hobbies es cocinar, especialmente la repostería, donde disfruto crear postres únicos y experimentar con nuevos sabores.
            </p>
            </article>

            <article className="text-center">
            <figure className="mb-4 rounded-lg overflow-hidden shadow-xl">
                <Image
                src="/images/lectura.jpeg"
                alt="Lectura"
                width={400}
                height={300}
                className="w-full h-auto"
                />
            </figure>
            <h3 className="text-xl text-gray-800 font-bold mb-2">LECTURA</h3>
            <p className="text-gray-600 mb-2">info</p>
            <p className="text-sm text-gray-800">
                En mis ratos libres, me gusta leer, ya que me permite desconectar y explorar diferentes mundos e ideas a través de los libros.
            </p>
            </article>
        </section>
        </section>
    </main>
    </body>
)
}