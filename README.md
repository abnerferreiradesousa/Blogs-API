# Boas-vindas ao repositório do projeto API de Blogs!

## COMO RODAR A APLICAÇÃO

1. Clone o repositório
  * `git clone git@github.com:abnerferreiradesousa/blogs-API.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd blogs-API`
 
2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
  * Caso queira rodar os testes pode usar o comando abaixo:
    * `npm test`(Obs.: talvez apareça uma tela com uma messagem: "tests not found", se aparecer, tecle `a` e todos os testes serão rodados)

# Entregue

<details>
  <summary><strong>👨‍💻 O que desenvolvi</strong></summary>

  Neste projeto desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog! 

  Desenvolvi uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Ddesenvolvi endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

  2. Para fazer um post foi necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`; 

  3. Foi necessária a utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.
