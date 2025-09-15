// src/components/ArticleCard.jsx
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <Link href={`/artigos/${article.slug}`}>
      {/* Removemos a sombra base e usamos uma borda da cor 'pedra' */}
      <article className="group overflow-hidden rounded-lg border border-pedra/30 bg-nevoa transition-all duration-300 hover:shadow-lg hover:shadow-musgo/10">
        <div className="relative h-48 w-full">
          <Image
            src={article.image}
            alt={`Imagem de capa para o artigo: ${article.title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          {/* A categoria agora usa a nossa cor de destaque principal, 'musgo' */}
          <p className="text-sm font-semibold uppercase tracking-wider text-musgo">
            {article.category}
          </p>
          {/* O título usa a nossa cor de texto principal, 'ardosia' */}
          <h3 className="mt-2 font-lora text-lg font-bold text-ardosia">
            {article.title}
          </h3>
        </div>
      </article>
    </Link>
  );
}
