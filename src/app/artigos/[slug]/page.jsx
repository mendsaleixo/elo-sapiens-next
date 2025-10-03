// src/app/artigos/[slug]/page.jsx

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; // ✅ CORREÇÃO 2: Importamos o componente Link

// ...a função buscarArtigoPeloSlug permanece a mesma...
async function buscarArtigoPeloSlug(slug) {
  const resposta = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`,
    { cache: "no-store" }
  );
  if (!resposta.ok) {
    notFound();
  }
  return resposta.json();
}

export default async function PaginaDoArtigo(props) {
  const { params } = await props;

  const artigo = await buscarArtigoPeloSlug(params.slug);

  return (
    <article className="py-8">
      <header className="mb-8 text-center">
        <p className="text-base font-bold uppercase tracking-wider text-musgo">
          {artigo.category}
        </p>
        <h1 className="mt-2 font-lora text-4xl font-extrabold text-ardosia md:text-5xl">
          {artigo.title}
        </h1>
        <p className="mt-6 text-base text-pedra">
          Por{" "}
          <Link
            href={`/autores/${artigo.authorSlug}`}
            className="text-musgo hover:underline"
          >
            {artigo.authorName}
          </Link>{" "}
          · 17 de Setembro de 2025
        </p>
      </header>

      <figure className="my-8 max-w-4xl mx-auto">
        <Image
          src={artigo.image}
          alt={`Imagem de capa para o artigo: ${artigo.title}`}
          width={1200}
          height={600}
          className="rounded-lg object-cover w-full h-auto aspect-video"
        />
      </figure>

      <div
        className="prose prose-lg lg:prose-xl mx-auto max-w-3xl prose-justify"
        dangerouslySetInnerHTML={{ __html: artigo.content }}
      />
    </article>
  );
}
