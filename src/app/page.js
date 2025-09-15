// src/app/page.jsx

export default function HomePage() {
  return (
    // O <main> já está no layout.js, então começamos o conteúdo aqui.
    <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
      <h1 className="text-3xl font-bold font-lora text-gray-900 mb-4">
        Testando a Responsividade do Conteúdo
      </h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi.
      </p>
      <p>
        Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
        fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
        scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
        Ut in risus volutpat libero pharetra tempor.
      </p>
    </div>
  );
}