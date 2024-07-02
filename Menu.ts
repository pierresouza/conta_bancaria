import { Queue } from "./Queue";
import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";

const leia = readlinesync.question;
const conta = new Queue<number>();

export function main() {
  let opcao: number;

  while (true) {
    console.log(colors.bg.black, colors.fg.yellow);

    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                BANCO DO BRAZIL COM Z                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ", colors.reset);

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong);
        console.log("\n\nCriar Conta\n\n", colors.reset);
        let numeroConta = leia("Digite o número da conta: ");
        conta.enqueue(parseInt(numeroConta));
        break;
      case 2:
        console.log(colors.fg.whitestrong);
        console.log("\n\nListar todas as Contas\n\n", colors.reset);
        console.log(conta.printQueue());
        break;
      case 3:
        console.log(colors.fg.whitestrong);
        console.log("\n\nConsultar dados da Conta - por número\n\n", colors.reset);
        let numeroContaId = parseInt(leia("Digite o número da conta: "));
        if (numeroContaId === conta.peek()) {
          console.log("Conta encontrada!");
        }
        break;
      case 4:
        console.log(colors.fg.whitestrong);
        console.log("\n\nAtualizar dados da Conta\n\n", colors.reset);
        break;
      case 5:
        console.log(colors.fg.whitestrong);
        console.log("\n\nApagar uma Conta\n\n", colors.reset);
        leia("Digite o número da conta a ser apagada: ");
        conta.dequeue();
        break;
      case 6:
        console.log(colors.fg.whitestrong);
        console.log("\n\nSaque\n\n", colors.reset);
        let saqueConta = leia("Digite o valor a ser sacado: ");
        console.log(`o valor de R$ ${saqueConta} foi sacado com sucesso! da conta ${conta.peek()}`);

        break;
      case 7:
        console.log(colors.fg.whitestrong);
        console.log("\n\nDepósito\n\n", colors.reset);
        let depositoConta = leia("Digite o valor a ser depositado: ");
        console.log(`o valor de R$ ${depositoConta} foi depositado com sucesso! na conta ${conta.peek()}`);

        break;
      case 8:
        console.log(colors.fg.whitestrong);
        console.log("\n\nTransferência entre Contas\n\n", colors.reset);
        let transferenciaConta = leia("Digite o valor a ser transferido: ");
        console.log(`o valor de R$ ${transferenciaConta} foi transferido com sucesso! da conta ${conta.peek()}`);
        break;
      default:
        console.log("\nOpção Inválida!\n");
        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: 3,14R");
  console.log("Generation Brasil - generation@generation.org");
  console.log("github.com/conteudoGeneration");
  console.log("*****************************************************");
}

main();
