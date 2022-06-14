# Boas-vindas ao repositório do projeto API de Blogs!

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

<br />

# Termos e acordos

Ao iniciar este projeto você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

<br />

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary>

  Para entregar o seu projeto você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

<br />
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary>

  Neste projeto você vai desenvolver uma API e um banco de dados para a produção de conteúdo para um blog! 

  Você deverá desenvolver uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Você deverá desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`; 

  3. Será necessária a utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.

<br />
</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary>

  * Projeto individual.
  * Serão `6` dias de projeto.
  * Data de entrega para avaliação final do projeto: `07/06/2022 14:00`.

</details>

<br />

# Orientações

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>
  
  ## 👉 Com Docker
 
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  ![sequelize test](./public/remote-container.png)

  <br />
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - **✨ Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - **✨ Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

  <br/>
</details>


<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary>

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-017-project-blogs-api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-017-project-blogs-api`

2. Instale as dependências [**Caso existam**]
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-sd-017-project-blogs-api`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-sd-017-project-blogs-api`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-017-project-blogs-api/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-017-project-blogs-api/pulls) e confira que o seu _Pull Request_ está criado

<br />
</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary>

  * Faça `commits` das alterações que você fizer no código regularmente

  * Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  * Os comandos que você utilizará com mais frequência são:
    * `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    * `git add` _(para adicionar arquivos ao stage do Git)_
    * `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    * `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    * `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

<br />
</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary>

  Para "entregar" seu projeto, siga os passos a seguir:

  - Vá até a página DO SEU Pull Request, adicione a label de "code-review" e marque seus colegas
    - No menu à direita, clique no *link* "Labels" e escolha a label code-review
    - No menu à direita, clique no *link* "Assignees" e escolha o seu usuário
    - No menu à direita, clique no *link* "Reviewers" e digite students, selecione o time tryber/students-sd-00

  Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).
  
  :warning: **Lembre-se de garantir que todas as _issues_ comentadas pelo Linter estão resolvidas!**

<br />
</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary>

  À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests de colegas. Fique atento às mensagens do "Pull Reminders" no Slack!

  Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.

<br />
</details>

<details>
  <summary><strong>🛠 Execução de testes localmente</strong></summary>

  > :information_source: IMPORTANTE

  - O teste local deve rodar o script `npm run start:test`, que vai iniciar e depois encerrar, em segundo plano **outra instância da sua API, na porta `3030`**. Dessa forma, o teste conseguira consumir sua API e validar os requisitos.

  - Sua API deve estar funcionando minimamente para que o teste comece, dado que ele aguarda o estabelecimento da mesma para começar o teste.

  - Todos os testes **vão gerar e consumir um banco de dados próprio com final `*-test`**, que é gerado através da configuração do arquivo `src/database/config/config.js`.

  - Isso vai garantir que durante seu desenvolvimento, o teste não manipule ou derrube sua API na porta padrão (`3000`) ou seu banco de dados padrão (final `*-dev`), isolando os mesmos.

  - Caso ocorra algum problema, encerre o teste com `[CTRL] + [C]` e utilize o script `npm run kill:test`

  ---

  O teste local já é configurado, internamente, com a variável de ambiente `NODE_ENV=test` para indicar o banco a ser utilizado pelo Sequelize, o que deve resultar na criação de um banco, somente para o teste:

  ![sequelize test](./public/sequelize-02.png)

  Sem essa variável (modo padrão de desenvolvimento), sua API deve resultar algo como:

  ![sequelize development](./public/sequelize-01.png)

  ---

  > :information_source: Scripts para executar os testes locais:

  Vamos usar o Jest para executar os testes, use o comando a seguir para executar todos os testes: 

  ```sh
  npm test
  ```

  Caso queira executar só um arquivo de test use o seguinte comando, considerado que quer testar o arquivo `tests/req07-createPost.test.js`:

  ```sh
  npm test tests/req07-createPost.test.js
  ```
  ou
  ```
  npm test req07
  ```

  Caso queira omitir dados de debug nos testes, utilize a variável de ambiente `DEBUG=false`, como em `DEBUG=false npm test`.

<br />
</details>

<details>
  <summary><strong>🎛 Linter</strong></summary>

  Para garantir a qualidade do código, usaremos o [ESLint](https://eslint.org/) para fazer a sua análise estática.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json` nos seguintes caminhos:

  - `sd-017-project-blogs-api/package.json`

  Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você também pode instalar o plugin do `ESLint` no `VSCode`, bastar baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo

  :warning: **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

<br />
</details>

<details>
  <summary><strong>⚠️ Informações importantes sobre o projeto</strong></summary>

  ## ⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️

  ### 👀 Observações importantes:

  Em cada requisito você encontrará uma imagem demonstrando como sua API deverá se comportar, dada a requisição específica.

  O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

  O projeto possui uma pasta `src`, e é **fortemente recomendável que você construa sua aplicação dentro dessa pasta**.

  **Não é necessário usar o comando `npx sequelize-cli init`** uma vez que já é fornecido no projeto.

  #### Arquivos importantes

  ⚠️ Essa pasta ainda conta com alguns arquivos auxiliares que serão consumidos pelo avaliador e **não devem ser apagados em nenhuma hipótese**:

  > `src/api.js`
  ```javascript
  const express = require('express');

  // ...

  const app = express();

  app.use(express.json());

  // ...

  // É importante exportar a constante `app`, 
  // para que possa ser utilizada pelo arquivo `src/server.js`
  module.exports = app;
  ```
  Que ficará responsável por receber **as definições de middlewares e rotas** de sua API

  <br />

  ---

  > 👉 `src/server.js`
  ```javascript
  const app = require('./api');

  // não remova a variável `API_PORT` ou o `listen`
  const port = process.env.API_PORT || 3000;

  // não remova esse endpoint
  app.get('/', (request, response) => {
    response.send();
  });

  app.listen(port, () => console.log('ouvindo porta', port));
  ```
  Que ficará responsável por iniciar sua API

  <br />

  ---

  > 👉 `src/database/config/config.js`
  ```javascript
  require('dotenv').config();

  const environment = process.env.NODE_ENV || 'test';

  const suffix = {
    dev: '-dev',
    development: '-dev',
    test: '-test',
  };

  const options = {
    host: process.env.HOSTNAME || process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || '3306',
    database: 
      `${process.env.MYSQL_DB_NAME || 'blogs-api'}${suffix[environment] || suffix.test}`,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '1234',
    dialect: 'mysql',
    dialectOptions: {
      timezone: 'Z',
    },
    logging: process.env.DEBUG !== 'false',
  };

  module.exports = {
    development: {
      ...options,
    },
    test: {
      ...options,
    },
  };
  ```
  Que é o arquivo de configuração principal do *Sequelize*

  <br />

  ---

  > 👉 `.sequelizerc`
  ```javascript
  const path = require('path');

  module.exports = {
    'config': path.resolve('src', 'database', 'config', 'config.js'),
    'models-path': path.resolve('src', 'database', 'models'),
    'seeders-path': path.resolve('src', 'database', 'seeders'),
    'migrations-path': path.resolve('src', 'database', 'migrations'),
  };
  ```
  Responsável por identificar os caminhos dos recursos do Sequelize

  <br />

  ---

  **Você irá precisar configurar as variáveis de ambiente para uso do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

  O arquivo a seguir, contém um modelo das variáveis de ambiente utilizadas no projeto. Para o contexto de teste local, é importante configurar as variáveis: `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`:

  > 👉 `.env.example`
  ```env
  #### SERVER VARS
  NODE_ENV=development
  API_PORT=3000

  #### DATABASE VARS
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_DB_NAME=blogs-api
  MYSQL_USER=root
  MYSQL_PASSWORD=password

  #### SECRECT VARS
  JWT_SECRET=suaSenhaSecreta
  ```

  #### Variável `JWT_SECRET`:
  
  Esta variável de ambiente deverá ser utilizada tanto para criar o token quanto para verificá-lo. Os teste locais e o avaliador vão utilizar a variável de ambiente `JWT_SECRET` para testar os requisitos

  **:warning:️ Variáveis de ambiente além das especificadas acima não são suportadas, pois não são esperadas pelo avaliador do projeto.**

<br />
</details>

<details>
  <summary><strong>👀 Dicas</strong></summary>

  #### Status HTTP

  Tenha em mente que todas as "respostas" devem respeitar os [status do protocolo HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status) com base no que o REST prega.

  Alguns exemplos:
  - Requisições que precisam de token mas não o receberam devem retornar um código de `status 401`;

  - Requisições que não seguem o formato pedido pelo servidor devem retornar um código de `status 400`;

  - Um problema inesperado no servidor deve retornar um código de `status 500`;

  - Um acesso ao criar um recurso, no nosso caso usuário ou post, deve retornar um código de `status 201`.

</details>

<details>
  <summary  id="diagrama"><strong>🎲 Diagrama ER e Entidades</strong></summary>

  #### Diagrama de Entidade-Relacionamento

  Para orientar a construção das tabelas através do ORM, utilize o *DER* a seguir:

  ![DER](./public/der.png)

  ---

  #### Formato das entidades

  O seu projeto deverá usar o `ORM Sequelize` para criar e atualizar o seu banco de dados. 

  Os primeiros requisitos do projeto devem orientar a produção de suas migrations para gerar:

  - Uma tabela chamada **Users**, contendo dados com a seguinte estrutura:

    ```json
    {
      "id": 1,
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com", // tem quer ser único
      "password": "123456",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
    ```
  - Uma tabela chamada **Categories**, contendo dados com a seguinte estrutura:

    ```json
    {
      "id": 18,
      "name": "News"
    }
    ```

  - Uma tabela chamada **BlogPosts**, contendo dados com a seguinte estrutura:

    ```json
    {
      "id": 21,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 14, // Chave estrangeira, referenciando o id de `Users`
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.947Z",
    }
    ```

  - Uma tabela chamada **PostCategories**, contendo uma **chave primária composta** utilizando os dois atributos da estrutura:

    ```json
    {
      "postId": 50, // Chave primária e estrangeira, referenciando o id de `BlogPosts`
      "categoryId": 20 // Chave primária e estrangeira, referenciando o id de `Categories`
    }
    ```
    *Os dados acima são fictícios, e estão aqui apenas como exemplo*

    > :warning:️ Em caso de dúvidas, consulte os conteúdos:
    > - [Transformando ideias em um modelo de banco de dados](https://app.betrybe.com/course/back-end/funcoes-sql-joins-e-normalizacao/transformando-ideias-em-um-modelo-de-banco-de-dados/a7326a61-117a-4d2f-a640-9e312b6f973b) *(Em `Database Design - Como modelar um banco de dados` > `4) Criando e modelando tabelas de acordo com um diagrama ER`)*
    > - [ORM - Interface da aplicação com o banco de dados](https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-interface-da-aplicacao-com-o-banco-de-dados/d0fc385e-b0ce-4b3d-8246-779d5dc13682) *(Em `Migrações`)*
    > - [ORM - Associations](https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d) *(Em `Relacionamentos N:N`)*  

    ---

    #### Dicas de scripts prontos

    - Deleta o banco de dados:
    ```json
    "drop": "npx sequelize-cli db:drop"
    ```

    - Cria o banco e gera as tabelas:
    ```json
    "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate"
    ```

    - Insere dados/Popula a tabela:
    ```json
    "seed": "npx sequelize-cli db:seed:all"
    ```

    **:eyes: OBS**: Os testes irão rodar através do seu migrate usando os scripts acima, também listados no `package.json`.

    **⚠️ Preste bastante atenção, pois a alteração desses scripts pode impedir o avaliador de funcionar corretamente**

    **:warning:️ Haverá um arquivo na pasta `/seeders`, que irá conter as queries para inserção no banco de dados. `Não a remova, pois o avaliador depende dela`.**

<br />
</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary>

  Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. 
  **Leva menos de 3 minutos!**

  [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

  :warning: **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

<br />
</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary>

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.
</details>

<br />
