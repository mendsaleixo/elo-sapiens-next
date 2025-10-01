// src/app/api/posts/route.js

import { articles } from "@/data/mock-articles";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Função GET
export async function GET(request) {
  return NextResponse.json(articles);
}

// Função POST
export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.title || !data.content || !data.category) {
      return Response.json(
        { message: "Título, conteúdo e categoria são obrigatórios." },
        { status: 400 }
      );
    }

    const slug = data.title.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
    const date = new Date().toISOString().split("T")[0];

    const fileContent = `---
title: "${data.title}"
date: "${date}"
category: "${data.category}"
---

${data.content}
`;

    const filePath = path.join(process.cwd(), "_articles", `${slug}.md`);
    fs.writeFileSync(filePath, fileContent);

    return Response.json(
      { message: "Artigo criado com sucesso!", slug: slug },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Erro no servidor ao criar o artigo." },
      { status: 500 }
    );
  }
}
