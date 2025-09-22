// src/app/categorias/[slug]/page.jsx

export default function PaginaDeCategoria({ params }) {
  console.log("Slug da categoria:", params.slug);

  return (
    <div>
      <h1 className="font-lora text-4xl font-bold">
        Artigos na categoria: {params.slug}
      </h1>
      {/* Aqui listaremos os artigos */}
    </div>
  );
}
