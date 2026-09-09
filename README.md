# MedClinic API

API backend desenvolvida em Node.js, TypeScript, TypeORM e PostgreSQL para o gerenciamento de uma clínica médica, implementando regras de negócio rigorosas, autenticação JWT e controle de acesso baseado em perfis (RBAC).

## 🛠 Tecnologias Utilizadas

* Node.js & TypeScript (v5.x)
* Express (Framework web)
* TypeORM (ORM para manipulação do banco de dados)
* PostgreSQL (Banco de dados relacional)
* BCrypt (Criptografia de senhas)
* JSON Web Token (JWT) (Autenticação baseada em token)
* ts-node-dev (Ambiente de desenvolvimento)

## 📁 Arquitetura do Projeto

O projeto segue o padrão arquitetural MVC (Model-View-Controller) com separação estrita de camadas:

    src/
    ├── controllers/    # Controladores (recebem as requisições e chamam os serviços)
    ├── database/       # Configuração e conexão com o DataSource do TypeORM
    ├── entities/       # Definição das tabelas do banco de dados (Models)
    ├── middlewares/    # Interceptadores (Autenticação, RBAC e Tratamento de Erros)
    ├── repositories/   # Camada de acesso aos dados via TypeORM
    ├── routes/         # Definição de rotas da API
    ├── services/       # Regras de negócio, criptografia e validações
    └── server.ts       # Arquivo de inicialização da aplicação

## ⚙️ Como Executar o Projeto

1. Clone o repositório:
   git clone https://github.com/MariaAlineMees/medclinic-api.git

2. Acesse a pasta do projeto e instale as dependências:
   cd medclinic-api
   npm install

3. Configure o arquivo .env na raiz do projeto com base nas suas credenciais do PostgreSQL e a chave secreta do JWT (JWT_SECRET).

4. Inicie o servidor em modo de desenvolvimento:
   npm run dev

## 📌 Rotas da API

### Rotas Públicas
* POST /auth/register: Realiza o cadastro de um novo usuário (perfis permitidos: Administrador ou Atendente).
* POST /auth/login: Realiza a autenticação e retorna o Token JWT.

### Rotas Protegidas
* GET /users/me (Exige Token JWT): Retorna os dados do usuário autenticado.
* GET /admin/ping (Exige Token JWT + Perfil Administrador): Rota de teste exclusiva para administradores (RBAC).