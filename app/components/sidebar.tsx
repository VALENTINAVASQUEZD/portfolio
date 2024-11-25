"use client";

import { useState } from 'react';

export default function Sidebar() {
const [isOpen, setIsOpen] = useState(true);

return (
    <aside className={`fixed top-0 left-0 h-full ${isOpen ? 'w-16' : 'w-64'} bg-red-900 transition-all duration-300`}>
    <nav className="flex flex-col items-center mt-10 space-y-8">
        {/* Botón para retraer el menú */}
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <span className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <span className="block w-4 h-1 bg-red-900 mb-1"></span>
            <span className="block w-4 h-1 bg-red-900 mb-1"></span>
            <span className="block w-4 h-1 bg-red-900"></span>
        </span>
        </button>

        {/* Iconos del menú */}
        <ul className="space-y-4">
        <li>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-900">👤</span>
            </button>
        </li>
        <li>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-900">✉️</span>
            </button>
        </li>
        <li>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-900">🎓</span>
            </button>
        </li>
        </ul>
    </nav>
    </aside>
);
}
