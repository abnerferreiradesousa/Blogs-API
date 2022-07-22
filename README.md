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
https://github.com/abnerferreiradesousa/blogs-API
<details>
  <summary><strong>👨‍💻 O que desenvolvi?</strong></summary>

  Neste projeto desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog! 

  Desenvolvi uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Ddesenvolvi endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

  2. Para fazer um post foi necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`; 

  3. Foi necessária a utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.
 
 </details>
 
 
# Como usar as rotas da API de blogs?

Ps.: Se qualquer informção for inválida for passada na requisição, será retornado um status e um erro descrevendo o problema.

Dica: já algumas sugestões de como realizar suas resquisições em cada rota.

## 1 - Rota para realizar login POST `/login`

- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```
  - Caso o login seja realizado com sucesso é retornado um token;


## 2 - Adiciona um novo usuário ao banco de dados POST `/user`

- O endpoint deve ser capaz de adicionar um novo `user` a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```


## Obs.: A partir daqui para utilizar as rotas é nescessário se cadastrar e efetuar login afim de recerber o token e passá-lo no headers da requisição.


## 3 - Busca todos os usuários GET `/user`

- O endpoint deve ser capaz de trazer todos `users` do banco de dados;

## 4 - Busca o usuário por id GET `/user/:id`

- O endpoint deve ser capaz de trazer o `user` baseado no `id` do banco de dados se ele existir;


## 5 - Adiciona novas categorias POST `/categories`

- O endpoint deve ser capaz de adicionar uma nova categoria a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "name": "Typescript"
  }
  ```

## 6 - Busca todas as categorias GET `/categories`

- O endpoint deve ser capaz de trazer todas categorias do banco de dados;

---

## 7 - Rota para criar novo post POST `/post`

- O endpoint deve ser capaz de adicionar um novo blog post e vinculá-lo as categorias em suas tabelas no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```

---

## 8 - Busca todos os posts e o respectivo proprietário GET `/post`

- O endpoint deve ser capaz de trazer todos os blogs post, user dono dele e as categorias do banco de dados;


## 9 - Busca post pelo id GET `/post/:id`

- O endpoint deve ser capaz de trazer o blog post baseado no `id` do banco de dados se ele existir;

---

## 10 - Atualiza um post t PUT `/post/:id`

- O endpoint deve ser capaz de alterar um post do banco de dados se ele existir;
- Sua aplicação só deve permitir a alteração de um blog post caso a pessoa seja dona dele;
- Sua aplicação não deve permitir a alteração das categorias do post, somente os atributos `title` e `content` podem ser alterados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```
---

## 11 - Deletar um post DELETE `/post/:id`

- O endpoint deve ser capaz de deletar um blog post baseado no `id` do banco de dados se ele existir;
- Só é permitida a deleção de um blog post caso a pessoa seja dona dele;

---

## 12 - Delete o usuário atual DELETE `/user/me`

- O endpoint deve ser capaz de deletar você do banco de dados, baseado no `id` que esta dentro do seu `token`;
- Sua aplicação deve ser capaz de utilizar o token de autenticação nos headers, para saber o user logado correspondente á ser apagado;

---

## 13 - Busca posts pelo seu conteúdo GET `/post/search?q=:searchTerm`

- O endpoint deve ser capaz de trazer os blogs post baseados no `q` do banco de dados, se ele existir;
- O query params da requisição deverá seguir o formato abaixo:
  ```js
    http://localhost:PORT/post/search?q=vamos
  ```

