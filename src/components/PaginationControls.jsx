// src/components/PaginationControls.jsx
"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

export default function PaginationControls({
  totalItens,
  itensPorPagina,
  slug,
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const pagina = searchParams.get("page") ?? "1";
  const paginaAtual = Number(pagina);

  const totalPaginas = Math.ceil(totalItens / itensPorPagina);

  const temPaginaAnterior = paginaAtual > 1;
  const temProximaPagina = paginaAtual < totalPaginas;

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      {temPaginaAnterior && (
        <Link
          href={`${pathname}?page=${paginaAtual - 1}`}
          className="bg-ardosia text-nevoa py-2 px-4 rounded-md hover:bg-musgo transition-colors"
        >
          Anterior
        </Link>
      )}

      <span className="text-pedra">
        Página {paginaAtual} de {totalPaginas}
      </span>

      {temProximaPagina && (
        <Link
          href={`${pathname}?page=${paginaAtual + 1}`}
          className="bg-ardosia text-nevoa py-2 px-4 rounded-md hover:bg-musgo transition-colors"
        >
          Próximo
        </Link>
      )}
    </div>
  );
}
