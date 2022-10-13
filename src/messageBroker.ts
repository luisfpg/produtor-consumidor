import client from 'amqplib';
import dotenv from 'dotenv';
dotenv.config();

/** Nome da fila de mensagens */
export const FILA = 'mensagens';

/** Nome do tópico de mensagens */
export const TOPICO = 'eventos';

/** Conecta, cria um canal e o retorna */
export async function conectar() {
  const url = 'amqp://'
    + process.env.AMQP_USERNAME + ':' + process.env.AMQP_PASSWORD
    + '@' + process.env.AMQP_HOST + ':' + process.env.AMQP_PORT;
  const connection = await client.connect(url);
  return await connection.createChannel();
}