Exemplo de um produtor / consumidor
===================================

Exemplo escrito em NodeJS de um produtor / consumidor utilizando o RabbitMQ.
Na verdade, o exemplo usa o protocolo AMQP, que é implementado por outros message brokers também.

# Requisitos

- [NodeJS 18+](https://nodejs.org/)
- [NPM 7+](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/install/)

# Iniciando o RabbitMQ localmente

Após baixar o código em sua máquina local, abra um terminal, entre no diretório onde este foi instalado, e digite: `docker-compose up -d`. Será iniciado o serviço em segundo plano.

Você pode verificar o status do RabbitMQ abrindo um navegador e acessando http://localhost:15672. Utilize o nome de usuário `username` e a senha `password`.

# Rodando

No terminal, no diretório onde o código está localizado e digite: `npm install`. Em seguida, você pode rodar o produtor, com o seguinte comando: `npm run produtor`. Será perguntada a mensagem a ser enviada. Se for digitado `sair`, ou se pressionado `Ctrl+C` 2 vezes, o programa será encerrado.

Em um outro terminal, vá para o mesmo diretório e digite: `npm run consumidor`. Serão exibidas as mensagens enviadas. Pressione `Ctrl+C` para sair.

Note que você pode abrir quantos terminais quiser, iniciando vários produtores e consumidores.

# Desinstalando o RabbitMQ

No terminal, no diretório onde o código está localizado e digite: `docker-compose down`. O serviço será removido.
