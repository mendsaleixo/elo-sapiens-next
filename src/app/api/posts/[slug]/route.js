// src/app/api/posts/[slug]/route.js

import { articles } from "@/data/mock-articles";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { params } = context;

  const artigo = articles.find((item) => item.slug === params.slug);

  if (!artigo) {
    return NextResponse.json(
      { message: "Artigo não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(artigo);
}
