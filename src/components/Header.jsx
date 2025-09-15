// src/components/Header.jsx
import Link from "next/link";

export default function Header() {
  return (
    // BG branco névoa, texto ardósia. A separação vem da borda.
    <header className="bg-nevoa text-ardosia border-b border-pedra/30">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold font-lora">
          Elo Sapiens
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            {/* O hover agora usa a nossa cor de destaque principal, o verde musgo */}
            <li>
              <Link href="#" className="hover:text-musgo transition-colors">
                Raízes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-musgo transition-colors">
                Horizontes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-musgo transition-colors">
                Simbose
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-musgo transition-colors">
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
