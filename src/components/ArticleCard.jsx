// src/components/ArticleCard.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard({ article }) {
  return (
    <Link href={`/artigos/${article.slug}`}>
      <article className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="relative h-48 w-full">
          <Image
            src={article.image}
            alt={`Imagem de capa para o artigo: ${article.title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            {article.category}
          </p>
          <h3 className="mt-2 font-lora text-lg font-bold text-slate-800">
            {article.title}
          </h3>
        </div>
      </article>
    </Link>
  );
}