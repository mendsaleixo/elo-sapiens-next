// src/components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-nevoa text-ardosia border-b border-pedra/30 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <Link
          href="/"
          className="group flex items-center space-x-2 md:space-x-3"
        >
          <div className="relative h-[40px] w-[40px] md:h-[60px] md:w-[60px]">
            <Image
              src="/images/Elo_logo.png"
              alt="Logo Elo Sapiens"
              fill
              className="block group-hover:hidden object-contain"
            />

            <Image
              src="/images/Elo_logo_pedra.png"
              alt="Logo Elo Sapiens em cor de destaque"
              fill
              className="hidden group-hover:block object-contain"
            />
          </div>

          <span className="text-2xl md:text-3xl font-bold font-lora transition-colors group-hover:text-pedra">
            Elo Sapiens
          </span>
        </Link>

        {/* NAVEGAÇÃO PARA DESKTOP */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-lg">
            <li>
              <Link
                href="/categorias/raizes"
                className="hover:text-pedra transition-colors"
              >
                Raízes
              </Link>
            </li>
            <li>
              <Link
                href="/categorias/horizontes"
                className="hover:text-pedra transition-colors"
              >
                Horizontes
              </Link>
            </li>
            <li>
              <Link
                href="/categorias/simbiose"
                className="hover:text-pedra transition-colors"
              >
                Simbose
              </Link>
            </li>
            <li>
              <Link
                href="/categorias/prisma"
                className="hover:text-pedra transition-colors"
              >
                Prisma
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="hover:text-musgo transition-colors"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>

        {/* BOTÃO HAMBURGER */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* PAINEL DO MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-nevoa border-t border-pedra/30">
          <nav className="p-4">
            <ul className="flex flex-col items-center space-y-4 text-lg">
              <li>
                <Link
                  href="/categorias/raizes"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Raízes
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/horizontes"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Horizontes
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/simbiose"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Simbose
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/prisma"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Prisma
                </Link>
              </li>
              <li>
                <Link href="/sobre" onClick={() => setIsMenuOpen(false)}>
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
