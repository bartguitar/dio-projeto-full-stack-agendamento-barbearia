## 1 - Criando o Projeto Angular e Fazendo o Setup Inicial

| Tecnologia | Categoria | Papel no Projeto | Benefício Principal |
| :--- | :--- | :--- | :--- |
| **Mockserver** | Ferramenta de Testes / Mock | Simula a API do backend (Java/Spring) durante o desenvolvimento da interface | Permite desenvolver e testar telas sem depender do backend finalizado |
| **Angular Material** | Biblioteca de Componentes UI | Fornece componentes visuais prontos baseados em Material Design (tabelas, diálogos, botões) | Padronização estética, consistência visual e aceleração no desenvolvimento da interface |
| **Docker** | Conteinerização / DevOps | Isola os ambientes de execução (Node.js/Angular e serviços auxiliares) | Paridade de ambiente, facilidade de setup e independência da máquina do desenvolvedor |

- 1.1 - Criar 3 arquivos do docker e("dockerfile", "compose", "setup.sh")
- 1.2 - Comentar comando "RUN yarn install"
- 1.3 - Alterar no arquivo dockerfile/dockercompose para "baber-shop-frontend"
- 1.4 - Ao tentar subir o container deu o erro "permission denied while trying to connect to the docker API at unix:///var/run/docker.sock", para resolver
esse erro foi criado um grupo chamado docker e incluido meu usuario no grupo com os comandos abaixo:

    ```
    sudo groupadd docker
    sudo usermod -aG docker $USER
    newgrp docker
    su - $USER
    cd ~/VSCodeProjects/baber-shop-frontend
    docker ps
    ```
- 1.5 - Rodar comando "docker compose run --rm ui bash"
- 1.6 - Confirmar se subiu e criou o container "root@a729d50f809f:/barber-shop-frontend#" 

--FEITO COMMIT--

- 1.7 - Descomentar "#RUN yarn global add @angular/cli@19.1.5"
- 1.8 - Rodar dentro do container criado o comando "ng new barber-shop-frontend --directory=./"
    - 1.8.1 - Se der erro de comando não encontrado executar fora do container "docker compose build ui", depois rodar novamente "docker compose run --rm ui bash", depois tentar novamente o comando "ng new barber-shop-frontend --directory=./"
- 1.9 - Na instalação do Angular escolher opção "N", "Sass (SCSS)", "N"
    - 1.9.1 - Se der erro de compatibilidade com o "README.MD", excluir o arquivo readme antigo, deixar só o readme do angular criado
- 1.10 - Se der erro "fatal: detected dubious ownership in repository at '/barber-shop-frontend' To add an exception for this directory, call: git config --global --add safe.directory /barber-shop-frontend, rodar o comando "git config --global --add safe.directory /barber-shop-frontend"

--FEITO COMMIT--

- 1.11 - Se tiver saido do container, rodar novamente "docker compose run --rm ui bash"
- 1.12 - Renomear arquivo setup.sh.txt para "setup.sh" e executar comando "bash setup.sh" dentro do container
- 1.13 - Instalar dependência do "Angular Material" com o comando "yarn add @angular/material"
- 1.14 - Rodar comando "ng add @angular/material"
- 1.15 - Se der erros de versões do angular material substituir o bloco de dependencias em "package.json" para codigos abaixo e depois rodar - "npm install" e "ng add @angular/material@19", marcar opção: "Set up global Angular Material typography styles? Yes"

    ```
    "dependencies": {
    "@angular/animations": "^19.1.0",
    "@angular/cdk": "^19.1.0",
    "@angular/common": "^19.1.0",
    "@angular/compiler": "^19.1.0",
    "@angular/core": "^19.1.0",
    "@angular/forms": "^19.1.0",
    "@angular/material": "^19.1.0",
    "@angular/platform-browser": "^19.1.0",
    "@angular/platform-browser-dynamic": "^19.1.0",
    "@angular/router": "^19.1.0",
    "bootstrap": "^5.3.3",
    "ngx-mask": "^19.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  ```

- 1.16 - Mudar arquivo "app.config.ts" para:

    ```
    import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
    import { provideRouter } from '@angular/router';

    import { routes } from './app.routes';
    import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

    export const appConfig: ApplicationConfig = {
        providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()],
    };

    ```

- 1.17 - Descomentar "#RUN yarn install" em dockerfile
- 1.18 - Sair do container
- 1.19 - Subir o projeto angular - "docker compose up --build"

--FEITO COMMIT--

---

## 2 - Criando o Serviço HTTP do Cliente

- 2.1 - Criar pasta environments e arquivos, se der erro de permissão, executar o comando "sudo chown -R $USER:$USER ." dentro do terminal
- 2.2 - codigos api-client/client.models.ts
- 2.3 - codigos api-client/iclients.service.ts
- 2.4 - codigos api-client/clients.service.ts
- 2.5 - codigos app.config.ts
- 2.6 - codigos service.token.ts
- 2.7 - codigos clients/new-client.component.ts
- 2.8 - list-clients.component
- 2.9 - edit-clients