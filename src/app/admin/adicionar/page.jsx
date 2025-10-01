// src/app/admin/adicionar/page.jsx
"use client";

import { useState } from "react";

export default function AdicionarArtigoPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Raizes");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, category }),
      });

      if (!response.ok) {
        throw new Error("Falha ao criar o artigo");
      }

      alert("Artigo criado com sucesso!");
      setTitle("");
      setContent("");
      setCategory("Raizes");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar o artigo.");
    }
  };

  return (
    <section className="py-8">
      <h1 className="font-lora text-3xl font-bold text-ardosia mb-8">
        Adicionar Novo Artigo
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-pedra mb-2"
          >
            Título
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-pedra/50 rounded-md bg-nevoa focus:ring-musgo focus:border-musgo"
            required
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-pedra mb-2"
          >
            Categoria
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-pedra/50 rounded-md bg-nevoa focus:ring-musgo focus:border-musgo"
          >
            <option value="Raizes">Raízes</option>
            <option value="Horizontes">Horizontes</option>
            <option value="Simbose">Simbose</option>
            <option value="Prisma">Prisma</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-pedra mb-2"
          >
            Conteúdo
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={15}
            className="w-full p-2 border border-pedra/50 rounded-md bg-nevoa focus:ring-musgo focus:border-musgo"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-ardosia text-nevoa py-2 px-6 rounded-md hover:bg-musgo transition-colors self-start"
        >
          Publicar Artigo
        </button>
      </form>
    </section>
  );
}
