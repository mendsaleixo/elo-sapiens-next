// src/app/artigos/[slug]/page.jsx

import { articles } from "@/data/mock-articles.js";
import { notFound } from "next/navigation";

export default function PaginaDoArtigo({ params }) {
  const slugDaURL = params.slug;

  const artigo = articles.find((p) => p.slug === slugDaURL);

  if (!artigo) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-4xl font-bold font-lora">{artigo.title}</h1>
      <p className="mt-2 text-lg text-pedra">Categoria: {artigo.category}</p>
    </div>
  );
}
