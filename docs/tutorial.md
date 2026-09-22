1 - Criando o Projeto Angular e Fazendo o Setup Inicial

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