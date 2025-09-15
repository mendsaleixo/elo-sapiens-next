// src/components/Header.jsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          Elo Sapiens
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="#" className="hover:text-sky-400 transition-colors">
                Raízes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-sky-400 transition-colors">
                Horizontes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-sky-400 transition-colors">
                Simbose
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-sky-400 transition-colors">
                Prisma
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="hover:text-sky-400 transition-colors"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
