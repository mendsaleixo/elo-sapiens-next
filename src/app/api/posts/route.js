// src/app/api/posts/route.js

import { articles } from "@/data/mock-articles";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  return NextResponse.json(articles);
}

//Função POST
export async function POST(request) {
  try {
    const formData = await request.formData();

    const title = formData.get("title");
    const content = formData.get("content");
    const category = formData.get("category");
    const imageFile = formData.get("image");

    if (!title || !content || !category || !imageFile) {
      return Response.json(
        { message: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());

    const imageName = `${Date.now()}-${imageFile.name}`;

    const imagePath = path.join(process.cwd(), "public", "uploads", imageName);

    fs.writeFileSync(imagePath, imageBuffer);

    const imageSrcPath = `/uploads/${imageName}`;

    const slug = title.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
    const date = new Date().toISOString().split("T")[0];

    const fileContent = `---
title: "${title}"
date: "${date}"
category: "${category}"
image: "${imageSrcPath}"
---

${content}
`;

    const filePath = path.join(process.cwd(), "_articles", `${slug}.md`);
    fs.writeFileSync(filePath, fileContent);

    return Response.json(
      { message: "Artigo criado com sucesso!", slug: slug },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro na API:", error);
    return Response.json(
      { message: "Erro no servidor ao criar o artigo." },
      { status: 500 }
    );
  }
}
