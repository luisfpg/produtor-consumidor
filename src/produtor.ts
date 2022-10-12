import * as readline from 'readline/promises';
import { conectar, FILA } from './messageBroker';
const read = readline.createInterface(
  { input: process.stdin, output: process.stdout });

async function main() {
  const canal = await conectar();

  while (true) {
    // Lê e envia uma mensagem para a fila
    const mensagem = await read.question('Qual a mensagem? ');
    if (mensagem.toLowerCase() == 'sair') { process.exit(0); }
    canal.sendToQueue(FILA, Buffer.from(mensagem));
    console.log('Mensagem enviada'); console.log();
  }
}

main();
