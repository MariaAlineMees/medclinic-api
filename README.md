# 🏥 MedClinic API 🛡️

Mini Projeto Avaliativo referente ao **Módulo 02** do curso de formação **SC Tech** (Desenvolvedor Back End Node).

Uma API REST robusta desenvolvida em **Node.js** com **TypeScript** e **PostgreSQL** para o gerenciamento de uma clínica médica. Esta primeira etapa do projeto foca na construção de uma base sólida e segura de acesso, implementando autenticação por tokens (JWT), criptografia de dados e controle de autorização baseado em perfis (RBAC), tudo estruturado sob a arquitetura MVC.

---

## 🎯 Objetivo do Projeto

O objetivo desta etapa é construir o alicerce de segurança da API MedClinic. Antes de disponibilizar as funcionalidades de negócio (médicos, pacientes e consultas), o sistema garante a identificação de quem está acessando (autenticação) e a validação do que essa pessoa está autorizada a fazer (autorização). O projeto aplica os princípios de Clean Code, SOLID e arquitetura em camadas para garantir que a base esteja pronta para escalar nas próximas etapas do desenvolvimento.

---

## 🛠️ Competências Desenvolvidas

* **TypeScript & POO:** Tipagem estática, interfaces e encapsulamento de lógica de negócio.
* **ORM & Banco de Dados:** Mapeamento objeto-relacional utilizando **TypeORM** com **PostgreSQL**.
* **Segurança e Criptografia:** Proteção de senhas com **Bcrypt** (hash) e autenticação stateless com **JSON Web Token (JWT)**.
* **Controle de Acesso (RBAC):** Criação de middlewares interceptadores para validar permissões de acesso baseadas em perfis (Administrador e Atendente).
* **Tratamento Centralizado de Erros:** Implementação de classe customizada `AppError` e middlewares de erro para evitar interrupções e padronizar respostas HTTP.
* **Arquitetura MVC:** Separação estrita de responsabilidades entre Rotas, Controladores, Serviços e Repositórios.
* **Versionamento Semântico:** Histórico Git rigoroso baseado no fluxo **GitFlow** (main, develop, feat, docs).

---

## 🚀 Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript no servidor
* **[TypeScript](https://www.typescriptlang.org/)** — Superset tipado para segurança em tempo de compilação
* **[Express](https://expressjs.com/)** — Framework web minimalista para roteamento
* **[TypeORM](https://typeorm.io/)** — ORM robusto para TypeScript e JavaScript
* **[PostgreSQL](https://www.postgresql.org/)** — Banco de dados relacional de alta performance
* **[Bcrypt](https://www.npmjs.com/package/bcrypt)** — Biblioteca para hashing seguro de senhas
* **[JWT (jsonwebtoken)](https://jwt.io/)** — Padrão de mercado para autenticação web

---

## ⚠️ Requisitos para Execução

Antes de clonar e executar o projeto, certifique-se de ter instalado em sua máquina:

* [Node.js](https://nodejs.org/en/) (Versão LTS recomendada, 18+)
* [PostgreSQL](https://www.postgresql.org/download/) rodando localmente na porta padrão (`5432`)
* [Git](https://git-scm.com/)
* Cliente HTTP para testes ([Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/))

---

## 💻 Instalação e Configuração

**1. Clone o repositório:**
```bash
git clone [https://github.com/MariaAlineMees/medclinic-api.git](https://github.com/MariaAlineMees/medclinic-api.git)
cd medclinic-api
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure as Variáveis de Ambiente:**
Crie um arquivo `.env` na raiz do projeto e preencha com as suas configurações locais.
> **Atenção:** Certifique-se de criar o banco de dados vazio chamado `medclinic` no seu PostgreSQL antes de continuar.

```dotenv
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario_postgres
DB_PASSWORD=sua_senha
DB_NAME=medclinic
JWT_SECRET=sua_chave_secreta_super_segura
```

**4. Criação das Tabelas:**
O projeto está configurado para sincronizar as entidades automaticamente com o TypeORM rodando a aplicação em ambiente de desenvolvimento.

---

## ▶️ Execução

Para iniciar o servidor em ambiente de desenvolvimento, execute o comando:
```bash
npm run dev
```
O servidor estará rodando em `http://localhost:3000`.

---

## 🏛️ Arquitetura do Projeto

O projeto foi rigorosamente estruturado em camadas para promover a separação de responsabilidades:

* **Routes:** Definem os endpoints da API e aplicam middlewares de autenticação/autorização.
* **Middlewares:** Interceptam requisições para validar tokens JWT, checar perfis (RBAC) e tratar erros globais.
* **Controllers:** Recebem a requisição HTTP, extraem dados (body, params) e orquestram a chamada aos serviços.
* **Services:** Concentram as regras de negócio, como validação de duplicidade de e-mail e hash de senhas.
* **Repositories:** Isolam a comunicação direta com o TypeORM para acesso ao banco de dados.
* **Entities:** Representam a modelagem (POO) das tabelas do banco de dados (ex: `User`).
* **Utils & Database:** Funções auxiliares (criptografia, geração de token) e configuração centralizada do DataSource.

---

## 📂 Estrutura de Pastas

```plaintext
MEDCLINIC-API/
├── src/
│   ├── controllers/            # Recebem requisições HTTP e orquestram serviços
│   │   ├── AuthController.ts
│   │   └── UserController.ts
│   ├── database/               # Configuração do DataSource (TypeORM) e script DDL
│   │   ├── data-source.ts
│   │   └── schema.sql
│   ├── entities/               # Modelagem das tabelas do banco de dados
│   │   └── User.ts
│   ├── middlewares/            # Interceptadores de segurança e erros globais
│   │   ├── authMiddleware.ts
│   │   ├── errorMiddleware.ts
│   │   └── roleMiddleware.ts
│   ├── repositories/           # Isolamento das operações no banco de dados
│   │   └── UserRepository.ts
│   ├── routes/                 # Mapeamento de endpoints da API
│   │   └── index.ts
│   ├── services/               # Regras de negócio estritas (Clean Code)
│   │   ├── AuthService.ts
│   │   └── UserService.ts
│   ├── utils/                  # Tratamento customizado de exceções e helpers
│   │   ├── AppError.ts
│   │   ├── hash.ts
│   │   └── jwt.ts
│   └── server.ts               # Ponto de entrada central (arranque do Express)
├── .env                        # Variáveis de ambiente
├── .gitignore
├── package-lock.json
├── package.json                # Gerenciador de dependências e scripts
├── tsconfig.json               # Configurações estritas do TypeScript
└── README.md                   # Documentação oficial do sistema
```

---

## 🔒 Perfis de Acesso (RBAC)

O sistema suporta controle de acesso rigoroso dividido em dois níveis:

| Perfil | Nível de Acesso | Endpoints Permitidos |
| :--- | :--- | :--- |
| **Administrador** | Acesso total ao sistema. | `/auth/login`, `/users/me`, `/admin/ping` e futuras áreas de gestão. |
| **Atendente** | Acesso operacional restrito. | `/auth/login`, `/users/me`. Bloqueado em `/admin/*`. |

---

## 📡 Documentação dos Endpoints

Abaixo estão os endpoints disponíveis nesta etapa do projeto. Todas as rotas (exceto cadastro e login) exigem o envio do token no cabeçalho: `Authorization: Bearer <token>`.

### 1. Cadastro de Usuário
* **Rota:** `POST /auth/register`
* **Acesso:** Público
* **Body:**
  ```json
  {
    "nome": "Maria Aline",
    "email": "maria@medclinic.com",
    "senha": "senha123",
    "perfil": "Administrador"
  }
  ```
* **Resposta Sucesso (201):** Retorna os dados do usuário criados (sem a senha).

### 2. Login (Emissão de JWT)
* **Rota:** `POST /auth/login`
* **Acesso:** Público
* **Body:**
  ```json
  {
    "email": "maria@medclinic.com",
    "senha": "senha123"
  }
  ```
* **Resposta Sucesso (200):** Retorna o objeto do usuário e o `token` JWT gerado.

### 3. Perfil do Usuário
* **Rota:** `GET /users/me`
* **Acesso:** Protegido (Exige Token JWT)
* **Resposta Sucesso (200):** Retorna os dados do usuário autenticado a partir do token.

### 4. Rota Restrita (Teste RBAC)
* **Rota:** `GET /admin/ping`
* **Acesso:** Protegido (Exige Token JWT **E** Perfil de `Administrador`)
* **Resposta Sucesso (200):** `{"message": "Acesso autorizado: Você é um Administrador."}`
* **Resposta Erro (403):** Se acessado por um `Atendente`, retorna acesso negado.

---

## 📸 Tratamento de Erros e Regras de Negócio

O sistema implementa validações através da classe customizada `AppError`, garantindo retornos HTTP adequados sem quebrar a aplicação:

* **E-mail Duplicado (409 Conflict):** Tentativa de cadastrar um e-mail já existente no banco.
* **Credenciais Inválidas (401 Unauthorized):** E-mail ou senha incorretos no login.
* **Acesso Negado (403 Forbidden):** Usuário com perfil `Atendente` tentando acessar rota exclusiva de `Administrador`.
* **Token Inválido/Expirado (401 Unauthorized):** Envio de token adulterado ou fora da validade.

---

## ✒️ Autoria
Projeto desenvolvido individualmente por **Maria Aline Mees**.