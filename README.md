# Boas-vindas ao repositório do projeto API de Blogs!

## COMO RODAR A APLICAÇÃO

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-017-project-trybewallet.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-017-project-trybewallet`
 
2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
  * Caso queira rodar os testes pode usar o comando abaixo:
    * `npm test`(Obs.: talvez apareça uma tela com uma messagem: "tests not found", se aparecer, tecle `a` e todos os testes serão rodados)

# Entregáveis

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary>

  Neste projeto você vai desenvolver uma API e um banco de dados para a produção de conteúdo para um blog! 

  Você deverá desenvolver uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Você deverá desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`; 

  3. Será necessária a utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.
