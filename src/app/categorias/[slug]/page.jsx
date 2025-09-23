// src/app/categorias/[slug]/page.jsx

import { articles } from "@/data/mock-articles.js";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import PaginationControls from "@/components/PaginationControls"; // 1. Importamos o novo componente

const ARTIGOS_POR_PAGINA = 3;

export default function PaginaDeCategoria({ params, searchParams }) {
  const slugDaCategoria = params.slug;

  const artigosDaCategoria = articles.filter(
    (artigo) => artigo.category.toLowerCase() === slugDaCategoria
  );

  const paginaAtual = Number(searchParams.page) || 1;
  const indiceInicial = (paginaAtual - 1) * ARTIGOS_POR_PAGINA;
  const indiceFinal = indiceInicial + ARTIGOS_POR_PAGINA;
  const artigosPaginados = artigosDaCategoria.slice(indiceInicial, indiceFinal);

  const nomeDaCategoria =
    slugDaCategoria.charAt(0).toUpperCase() + slugDaCategoria.slice(1);

  return (
    <section>
      <div className="mb-8 border-b-2 border-pedra/30 pb-2">
        <h1 className="font-lora text-3xl font-bold text-ardosia">
          Categoria: {nomeDaCategoria}
        </h1>
      </div>

      {artigosPaginados.length > 0 ? (
        // Usamos um Fragment <> para agrupar a grelha e a paginação
        <>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {artigosPaginados.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* 2. Adicionamos o nosso componente de paginação aqui */}
          <PaginationControls
            totalItens={artigosDaCategoria.length}
            itensPorPagina={ARTIGOS_POR_PAGINA}
          />
        </>
      ) : (
        <div className="text-center text-pedra">
          <p>Nenhum artigo encontrado nesta categoria.</p>
          <Link
            href="/"
            className="text-musgo hover:underline mt-4 inline-block"
          >
            Voltar à página inicial
          </Link>
        </div>
      )}
    </section>
  );
}
