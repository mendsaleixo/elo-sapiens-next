// src/app/sobre/page.jsx
import Image from "next/image";
import logo from "/public/images/Elo_about.png";

export default function PaginaSobre() {
  return (
    <div className="prose prose-lg lg:prose-xl prose-justify mx-auto py-8">
      <figure>
        <Image
          src={logo}
          alt="Logo do Elo Sapiens, digital humana e circuito digital envolvidos."
          width={1200}
          height={600}
          className="rounded-lg object-contain w-full h-auto aspect-video max-h-80"
        />
        <figcaption className="text-center text-sm text-pedra mt-2">
          O conhecimento como ponte entre gerações.
        </figcaption>
      </figure>

      <h1 className="font-lora text-ardosia">Sobre</h1>
      <p>
        O que nos conecta? Que fio invisível costura as descobertas de nossos
        ancestrais às tecnologias que moldam nosso futuro? O Elo Sapiens nasce
        desta indagação. Somos um espaço dedicado a investigar as conexões que
        definem a complexa jornada humana, acreditando que a verdadeira
        sabedoria emerge da intersecção entre diferentes saberes.
      </p>

      <h2 className="font-lora text-ardosia">Nossa Missão</h2>
      <p>
        Nossa missão é investigar os movimentos, as ideias e as inovações que
        nos impulsionaram como espécie. Buscamos entender como a engenharia
        hídrica dos Incas pode inspirar as cidades do futuro, ou como os dilemas
        éticos da inteligência artificial podem ser iluminados pela filosofia
        ancestral. Celebramos tanto os saltos que nos levaram a outro patamar
        quanto os saberes que nos ensinam a viver em harmonia com o planeta.
      </p>

      <h2 className="font-lora text-ardosia">Nossas Seções</h2>
      <ul>
        <li>
          <strong>Raízes:</strong> Uma viagem ao nosso passado coletivo para
          entender de onde viemos.
        </li>
        <li>
          <strong>Horizontes:</strong> Um olhar crítico e humanista sobre as
          tecnologias que moldarão o nosso futuro.
        </li>
        <li>
          <strong>Simbose:</strong> Uma exploração da nossa profunda e inegável
          conexão com o planeta.
        </li>
        <li>
          <strong>Prisma:</strong> Uma análise da cultura e dos eventos atuais
          através das lentes do Elo Sapiens.
        </li>
      </ul>
      <p>
        Junte-se a nós nesta exploração. <strong>O elo é você.</strong>
      </p>
    </div>
  );
}
