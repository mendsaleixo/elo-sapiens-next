// src/app/artigos/[slug]/page.jsx

import { articles } from "@/data/mock-articles.js";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function PaginaDoArtigo({ params }) {
  const slugDaURL = params.slug;
  const artigo = articles.find((p) => p.slug === slugDaURL);

  if (!artigo) {
    notFound();
  }

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
          Por Autor Fictício · 17 de Setembro de 2025
        </p>
      </header>

      <figure className="my-8">
        <Image
          src={artigo.image}
          alt={`Imagem de capa para o artigo: ${artigo.title}`}
          width={1200}
          height={600}
          className="rounded-lg object-cover w-full h-auto aspect-video"
        />
      </figure>

      <div className="mx-auto max-w-3xl">
        <p>Este é o espaço para o conteúdo do artigo...</p>
      </div>
    </article>
  );
}
