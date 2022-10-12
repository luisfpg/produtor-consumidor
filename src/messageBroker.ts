import client, { Channel, Connection } from 'amqplib';
import * as dotenv from 'dotenv';

dotenv.config();

export const FILA = 'mensagens';

/** Conecta, cria um canal e uma fila, retornando o canal */
export async function conectar() {
  const url = 'amqp://'
    + process.env.AMQP_USERNAME + ':' + process.env.AMQP_PASSWORD
    + '@' + process.env.AMQP_HOST + ':' + process.env.AMQP_PORT;
  const connection: Connection = await client.connect(url);
  const canal: Channel = await connection.createChannel();
  await canal.assertQueue(FILA);
  return canal;
}