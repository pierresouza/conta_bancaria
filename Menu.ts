import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main() {
  let opcao: number;

  //novas intancias da classe conta
  const c1: Conta = new Conta(1, 1234, 1, "Júlia Castro", 800000.0);
  const c2: Conta = new Conta(2, 1234, 2, "Marcela Sanches", 600000.0);
  //visualizando o saldo da conta 1
  c1.visualizar();
  //visualizando o saldo da conta 2
  c2.visualizar();
  //visualizar valor de somente um atributo
  console.log(`O saldo da conta 01 é: ${c1.saldo} `);
  //mudando o valor do atributo saldo  da conta 2 com set
  c2.saldo = 900000.0;
  //apresentando o novo valor do atributo saldo da conta 2
  console.log(`O saldo da conta 02 é: ${c2.saldo}`);
  //saque nas contas
  console.log(`Sacar 100 Reais da conta c2 ${c1.sacar(100)}`);
  c1.visualizar();
  console.log(`Sacar 700000 Reais da conta c2 ${c2.sacar(1000000)}`);
  c2.visualizar();
  //Deposito nas contas
  console.log(`Depositar 20000 Reais na conta c1`);
  c1.depositar(20000);
  c1.visualizar();

  console.log(`Depositar 30000.25 Reais na conta c2`);
  c2.depositar(30000.25);
  c2.visualizar();

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
        keyPress();
        break;
      case 2:
        console.log(colors.fg.whitestrong);
        console.log("\n\nListar todas as Contas\n\n", colors.reset);
        keyPress();
        break;
      case 3:
        console.log(colors.fg.whitestrong);
        console.log("\n\nConsultar dados da Conta - por número\n\n", colors.reset);
        keyPress();
        break;
      case 4:
        console.log(colors.fg.whitestrong);
        console.log("\n\nAtualizar dados da Conta\n\n", colors.reset);
        keyPress();
        break;
      case 5:
        console.log(colors.fg.whitestrong);
        console.log("\n\nApagar uma Conta\n\n", colors.reset);
        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong);
        console.log("\n\nSaque\n\n", colors.reset);
        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong);
        console.log("\n\nDepósito\n\n", colors.reset);
        keyPress();
        break;
      case 8:
        console.log(colors.fg.whitestrong);
        console.log("\n\nTransferência entre Contas\n\n", colors.reset);
        keyPress();
        break;
      default:
        console.log("\nOpção Inválida!\n");
        keyPress();
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

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
