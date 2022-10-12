import { ConsumeMessage } from 'amqplib';
import { conectar, FILA } from './messageBroker';

async function main() {
  const canal = await conectar();

  console.log('Escutando mensagens...');

  await canal.consume(FILA, (msg: ConsumeMessage) => {
    console.log('Mensagem recebida: ' + msg.content); console.log();
    canal.ack(msg); // Indica ao canal que a mensagem foi processada
  });
}

main();
