import { conectar, TOPICO } from '../messageBroker';

async function main() {
  const canal = await conectar();
  await canal.assertExchange(TOPICO, 'topic', { durable: false });
  const fila = await canal.assertQueue('', { exclusive: true });
  await canal.bindQueue(fila.queue, TOPICO, '');

  console.log(`Escutando eventos no tópico '${TOPICO}'...`);

  await canal.consume(fila.queue, msg => {
    console.log('Mensagem recebida: ' + msg.content); console.log();
  }, { noAck: true });
}

main();
