// src/app/page.jsx
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/mock-articles";

export default function HomePage() {
  const mainArticle = articles[0];
  const recentArticles = articles.slice(1);

  return (
    <>
      {/* Seção Hero */}
      <section className="relative mb-12 h-96 w-full overflow-hidden rounded-lg md:h-[500px]">
        <Image
          src={mainArticle.image}
          alt={`Imagem de capa para o artigo: ${mainArticle.title}`}
          fill
          priority
          className="object-cover"
        />
        {/* O overlay agora usa a nossa cor 'ardosia' para um efeito mais integrado */}
        <div className="absolute inset-0 bg-gradient-to-t from-ardosia/70 via-ardosia/20 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8 text-nevoa">
          {/* O destaque da categoria agora é o nosso verde 'musgo' */}
          <span className="rounded-full bg-musgo px-3 py-1 text-sm font-semibold text-nevoa">
            {mainArticle.category}
          </span>
          <h1 className="mt-4 max-w-2xl font-lora text-3xl font-extrabold md:text-5xl drop-shadow-sm">
            {mainArticle.title}
          </h1>
          {/* O link interativo também usa o 'musgo' */}
          <Link
            href={`/artigos/${mainArticle.slug}`}
            className="mt-4 inline-block font-semibold text-nevoa transition-colors hover:text-eucalipto"
          >
            Leia Mais →
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-8 border-b-2 border-pedra/30 pb-2">
          <h2 className="font-lora text-3xl font-bold text-ardosia">
            Artigos Recentes
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
