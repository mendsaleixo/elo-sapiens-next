// src/app/sobre/page.jsx

export default function PaginaSobre() {
  return (
    // Usamos a classe 'prose' para estilizar automaticamente o nosso conteúdo
    <div className="prose prose-lg lg:prose-xl mx-auto">
      <h1 className="font-lora text-ardosia">Sobre o Elo Sapiens</h1>
      <p>
        Bem-vindo ao Elo Sapiens, um espaço digital dedicado à exploração das
        conexões que tecem a complexa tapeçaria da jornada humana. Nascemos da
        crença de que a sabedoria não reside em silos, mas na intersecção de
        diferentes campos do conhecimento.
      </p>
      
      <h2 className="font-lora text-ardosia">Nossa Missão</h2>
      <p>
        A nossa missão é ser uma ponte. Uma ponte entre o passado e o futuro,
        entre a tecnologia e o meio ambiente, entre a ciência e a arte. 
        Acreditamos que as lições da engenharia hídrica dos Incas podem informar
        as nossas cidades do futuro, e que os dilemas éticos da inteligência
        artificial podem ser mais bem compreendidos através da filosofia ancestral.
      </p>
      
      <h2 className="font-lora text-ardosia">Nossas Seções</h2>
      <ul>
        <li><strong>Raízes:</strong> Uma viagem ao nosso passado coletivo para entender de onde viemos.</li>
        <li><strong>Horizontes:</strong> Um olhar crítico e humanista sobre as tecnologias que moldarão o nosso futuro.</li>
        <li><strong>Simbose:</strong> Uma exploração da nossa profunda e inegável conexão com o planeta.</li>
        <li><strong>Prisma:</strong> Uma análise da cultura e dos eventos atuais através das lentes do Elo Sapiens.</li>
      </ul>
      <p>
        Obrigado por se juntar a nós nesta jornada de descoberta.
      </p>
    </div>
  );
}