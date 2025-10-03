// src/app/page.jsx
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";

// Criamos uma função para buscar os dados da nossa nova API
async function buscarArtigos() {
  // Fazemos uma chamada 'fetch' para o nosso próprio endpoint de API.
  // A opção { cache: 'no-store' } garante que os dados sejam sempre frescos durante o desenvolvimento.
  const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
    cache: "no-store",
  });

  // Verificamos se a chamada à API foi bem-sucedida
  if (!resposta.ok) {
    throw new Error("Falha ao buscar artigos");
  }

  // Convertemos a resposta para JSON
  return resposta.json();
}

// A nossa página agora precisa de ser 'async' para poder esperar ('await') a busca de dados
export default async function HomePage() {
  // Chamamos a nossa função de busca e esperamos pelo resultado
  const articles = await buscarArtigos();

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
        <div className="absolute inset-0 bg-gradient-to-t from-ardosia/70 via-ardosia/20 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8 text-nevoa">
          <span className="rounded-full bg-musgo px-3 py-1 text-sm font-semibold text-nevoa">
            {mainArticle.category}
          </span>
          <h1 className="mt-4 max-w-2xl font-lora text-3xl font-extrabold md:text-5xl drop-shadow-sm">
            {mainArticle.title}
          </h1>
          <Link
            href={`/artigos/${mainArticle.slug}`}
            className="mt-4 inline-block font-semibold text-musgo transition-colors hover:text-nevoa"
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
