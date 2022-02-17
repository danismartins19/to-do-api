# to-do-api

To do API developed with Node.js, Express.js, Typescript, Sequelize and MySQL

# Para instalar as dependencias

```
npm install
```

# Para rodar em modo dev local

```
npm run start-dev
```

# Arquivo de ambiente

### Dentro da pasta do projeto, crie o arquivo .env e dentro dele defina as seguintes variaveis:

- PORT : Onde será executada a aplicação
- MS_DB : Nome do banco de dados
- MS_USER: Nome do usuario do banco de dados
- MS_PASSWORD: Senha do usuario do banco de dados
- MS_PORT: Porta de onde está sendo executado o serviço do banco de dados

# Endpoints da aplicação

- GET /todo - retornará todas as tasks criadas
- POST /todo - body: { title: string, done: boolean } - Criará uma nova task
- PUT /todo/:id - body: { title: string, done: boolean} - Atualizará a task
- DELETE /todo/:id - Deletará a task
