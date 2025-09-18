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
      <section className="relative mb-12 h-96 w-full overflow-hidden rounded-lg md:h-[500px]">
        <Image
          src={mainArticle.image}
          alt={`Imagem de capa para o artigo: ${mainArticle.title}`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8 text-white">
          <span className="rounded-full bg-sky-500 px-3 py-1 text-sm font-semibold">
            {mainArticle.category}
          </span>
          <h1 className="mt-4 max-w-2xl font-lora text-3xl font-extrabold md:text-5xl">
            {mainArticle.title}
          </h1>
          <Link
            href={`/artigos/${mainArticle.slug}`}
            className="mt-4 inline-block font-semibold underline decoration-sky-400 decoration-2 underline-offset-4 transition-colors hover:text-sky-300"
          >
            Leia Mais →
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-8 font-lora text-3xl font-bold text-slate-900">
          Artigos Recentes
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
