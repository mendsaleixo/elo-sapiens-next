# Elo Sapiens - Blog Pessoal Full-Stack

![Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-green)
![Tecnologia Principal](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Estilização](https://img.shields.io/badge/Tailwind_CSS-3-blue?logo=tailwind-css)

![Screenshot da Aplicação](https://i.imgur.com/link-para-sua-imagem.png)

## Sobre o Projeto

**Elo Sapiens** é um projeto de blog full-stack desenvolvido como parte de um estudo prático focado em tecnologias web modernas e workflows de desenvolvimento profissionais. A plataforma foi desenhada para ser um espaço para explorar as conexões entre história, ciência, tecnologia e meio ambiente, com uma interface minimalista e focada na experiência de leitura.

Este projeto foi construído do zero, abrangendo desde a configuração inicial do ambiente, passando pela criação de componentes reutilizáveis, até a implementação de uma API RESTful para gerenciamento de conteúdo.

## ✨ Funcionalidades Implementadas

- **Interface Responsiva:** Design "Mobile-First" garantindo uma experiência de usuário consistente em todos os dispositivos.
- **Roteamento Dinâmico:** Geração de páginas de artigo, categoria e autor de forma dinâmica com base na URL (Next.js App Router).
- **Renderização no Servidor (SSR):** Páginas pré-renderizadas no servidor para melhor performance e SEO.
- **API RESTful (CRUD):** Backend integrado para gerenciar artigos.
  - `GET /api/posts`: Retorna todos os artigos.
  - `GET /api/posts/[slug]`: Retorna um artigo específico.
  - `POST /api/posts`: Cria um novo artigo, incluindo upload de imagem.
  - _(Em desenvolvimento: Endpoints PUT e DELETE para atualizar e apagar artigos)._
- **Armazenamento em Filesystem:** Artigos são criados e salvos como arquivos Markdown (`.md`) com frontmatter, simulando uma arquitetura Git-based CMS.
- **Paginação:** Em páginas de categoria, os artigos são listados em páginas para melhor navegação.
- **Seção de Administração:** Área para criar novos artigos através de um formulário.

## Stack Tecnológica

- **Frontend:**

  - **[React](https://react.dev/)**: Biblioteca para construção da UI.
  - **[Next.js](https://nextjs.org/)**: Framework React para produção (App Router, SSR, API Routes).
  - **[Tailwind CSS](https://tailwindcss.com/)**: Framework de estilização Utility-First.
    - `@tailwindcss/typography`: Plugin para estilização automática de texto (`prose`).

- **Backend:**

  - **[Node.js](https://nodejs.org/)**: Ambiente de execução do JavaScript no servidor.
  - **Next.js API Routes**: Para a construção da API RESTful.
  - **Módulo `fs`**: Para manipulação de arquivos no servidor.

- **Ferramentas e Workflow:**
  - **Git & GitHub**: Para versionamento de código e workflow com Feature Branches.
  - **`npm`**: Gerenciador de dependências.
  - **`nvm`**: Gerenciador de versão do Node.js.
  - **ESLint**: Ferramenta de linting para qualidade de código.

## Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto na sua máquina.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/mendsaleixo/elo-sapiens-next.git
    cd elo-sapiens
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Crie o arquivo de ambiente:**

    - Crie um arquivo chamado `.env.local` na raiz do projeto.
    - Adicione a seguinte linha dentro dele:

    ```
    NEXT_PUBLIC_API_URL=http://localhost:3000
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Objetivos de Aprendizado

Este projeto foi uma jornada prática para solidificar os seguintes conceitos:

- **Construir uma aplicação Full-Stack** do início ao fim com uma única stack tecnológica.
- **Aplicar um workflow de Git profissional**, simulando um ambiente de trabalho em equipa.
- **Separar as responsabilidades** entre Frontend (consumo de dados) e Backend (fornecimento de dados).
- **Entender na prática** os conceitos de Rotas Dinâmicas, Componentes Reutilizáveis e Estado em React.
- **Implementar uma API RESTful** com operações CRUD, o pilar de muitas aplicações web.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

