# 💈 Barber Shop Frontend

Interface web para gerenciamento de **clientes** e **agendamentos** de uma barbearia, desenvolvida com **Angular 19** e **Angular Material** como parte do projeto full stack da DIO.

> 🔗 Backend do projeto: [dio-projeto-full-stack-agendamento-barbearia-backend](https://github.com/bartguitar/dio-projeto-full-stack-agendamento-barbearia-backend)

---

## 📋 Sobre o projeto

O frontend consome a **Barber Shop API** e permite que a barbearia cadastre seus clientes e organize a agenda em um calendário mensal.

### Funcionalidades

**Clientes**
- Cadastro de novos clientes (nome, e-mail e telefone com máscara)
- Listagem em tabela paginada
- Edição dos dados de um cliente
- Exclusão com diálogo de confirmação

**Agendamentos**
- Calendário para escolher o dia
- Listagem dos agendamentos do dia selecionado (horário de início, término e cliente)
- Criação de agendamento escolhendo cliente e horário (o término é sugerido automaticamente, 1 hora após o início)
- Exclusão de agendamento com diálogo de confirmação
- Mensagens de retorno ao usuário via snackbar

---

## 🛠️ Tecnologias

| Categoria | Tecnologia |
|---|---|
| Framework | Angular 19 (componentes standalone) |
| Linguagem | TypeScript 5.7 |
| Componentes de UI | Angular Material e Angular CDK |
| Estilização | Bootstrap 5, SCSS |
| Máscaras de entrada | ngx-mask |
| Programação reativa | RxJS 7.8 |
| Testes | Jasmine e Karma |
| Containers | Docker e Docker Compose (Node 22) |

---

## 🏗️ Estrutura do projeto

```
src/app
├── clients/
│   ├── components/
│   │   ├── client-form/       # Formulário reutilizado em cadastro e edição
│   │   └── client-table/      # Tabela com paginação, edição e exclusão
│   ├── new-client/            # Página de cadastro
│   ├── edit-client/           # Página de edição
│   ├── list-clients/          # Página de listagem
│   └── client.models.ts
├── schedules/
│   ├── components/
│   │   └── schedule-calendar/ # Calendário, tabela do dia e formulário de agendamento
│   ├── schedules-month/       # Página de agendamentos
│   └── schedule.models.ts
├── commons/components/
│   ├── menu-bar/              # Menu de navegação
│   ├── card-header/           # Cabeçalho dos cards
│   └── yes-no-dialog/         # Diálogo de confirmação
├── services/
│   ├── api-client/            # Serviços HTTP (clients e schedules)
│   ├── dialog-manager.service.ts
│   ├── snackbar-manager.service.ts
│   └── service.token.ts       # Tokens de injeção de dependência
├── app.routes.ts
└── app.config.ts
```

O projeto usa **interfaces e tokens de injeção** (`SERVICES_TOKEN`) para desacoplar os componentes das implementações dos serviços, e separa componentes de página (*smart*) dos componentes de apresentação (*dumb*).

---

## 🧭 Rotas

| Rota | Tela |
|---|---|
| `/schedules/month` | Calendário de agendamentos (página inicial) |
| `/clients/list` | Clientes cadastrados |
| `/clients/new-client` | Cadastrar cliente |
| `/clients/edit-client/:id` | Atualizar cliente |
| `**` | Redireciona para `/schedules/month` |

---

## 🚀 Como executar

### Pré-requisitos

- Backend em execução (veja o [repositório da API](https://github.com/bartguitar/dio-projeto-full-stack-agendamento-barbearia-backend))
- [Node.js](https://nodejs.org/) 22 e [Yarn](https://yarnpkg.com/) ou npm, **ou** Docker e Docker Compose

### Com Docker Compose

1. Clone o repositório:

```bash
git clone https://github.com/bartguitar/dio-projeto-full-stack-agendamento-barbearia.git
cd dio-projeto-full-stack-agendamento-barbearia
```

2. Crie a rede externa compartilhada com o backend (se ainda não existir):

```bash
docker network create barber-shop-net
```

3. Suba o container:

```bash
docker compose up --build
```

A aplicação ficará disponível em `http://localhost:4200`.

### Sem Docker

```bash
yarn install      # ou: npm install
yarn start        # ou: npm start
```

Acesse `http://localhost:4200`. A aplicação recarrega automaticamente a cada alteração nos arquivos.

---

## ⚙️ Configuração

A URL da API é definida em `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/'
}
```

Altere `apiUrl` caso o backend rode em outro endereço ou porta. A URL deve terminar com `/`.

---

## 📡 Integração com a API

| Recurso | Método | Endpoint |
|---|---|---|
| Cadastrar cliente | `POST` | `/clients` |
| Listar clientes | `GET` | `/clients` |
| Buscar cliente | `GET` | `/clients/{id}` |
| Atualizar cliente | `PUT` | `/clients/{id}` |
| Excluir cliente | `DELETE` | `/clients/{id}` |
| Criar agendamento | `POST` | `/schedules` |
| Agendamentos do mês | `GET` | `/schedules/{ano}/{mês}` |
| Excluir agendamento | `DELETE` | `/schedules/{id}` |

---

## 📜 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `yarn start` | Inicia o servidor de desenvolvimento |
| `yarn build` | Gera o build de produção em `dist/barber-shop-frontend` |
| `yarn watch` | Build contínuo em modo desenvolvimento |
| `yarn test` | Executa os testes unitários (Karma + Jasmine) |

---

## 👨‍💻 Autor

Desenvolvido por **Adriel** ([@bartguitar](https://github.com/bartguitar)) como projeto prático do bootcamp da [DIO](https://www.dio.me/).
