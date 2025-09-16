// src/components/Header.jsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-nevoa text-ardosia border-b border-pedra/30">
      <div className="container mx-auto flex py-2 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/Elo_logo.png"
            alt="Logo Elo Sapiens"
            width={60}
            height={60}
          />
          <span className="text-3xl font-bold font-lora">Elo Sapiens</span>
        </Link>

        <nav>
          <ul className="flex items-center space-x-6 text-xl">
            <li>
              <Link href="#" className="hover:text-pedra transition-colors">
                Raízes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-pedra transition-colors">
                Horizontes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-pedra transition-colors">
                Simbose
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-pedra transition-colors">
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
      </div>
    </header>
  );
}
