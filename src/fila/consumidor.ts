import { conectar, FILA } from '../messageBroker';

async function main() {
  const canal = await conectar();
  await canal.assertQueue(FILA);

  console.log(`Escutando mensagens na fila '${FILA}'...`);

  await canal.consume(FILA, msg => {
    console.log(`Mensagem recebida: ${msg.content}\n`);
    canal.ack(msg); // Indica ao canal que a mensagem foi processada
  });
}

main();
