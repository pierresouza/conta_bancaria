import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  //Coleção Array que vai armazenar os Objetos Conta
  private listaContas: Array<Conta> = new Array<Conta>();

  // Controlar os números das contas
  public numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscarConta = this.buscarNoArray(numero);

    if (buscarConta !== null) {
      buscarConta.visualizar();
    } else {
      console.log("\nConta não encontrada!");
    }
  }
  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }
  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log("Conta cadastrada com sucesso!");
  }
  atualizar(conta: Conta): void {
    let buscarConta = this.buscarNoArray(conta.numero);

    if (buscarConta !== null) {
      this.listaContas[this.listaContas.indexOf(buscarConta)] = conta;
      console.log("\nConta excluída!");
    } else {
      console.log("\nConta não encontrada!");
    }
  }
  deletar(numero: number): void {
    let buscarConta = this.buscarNoArray(numero);

    if (buscarConta !== null) {
      this.listaContas.splice(this.listaContas.indexOf(buscarConta), 1);
      console.log("\nConta excluída!");
    } else {
      console.log("\nConta não encontrada!");
    }
  }
  sacar(numero: number, valor: number): void {
    let buscarConta = this.buscarNoArray(numero);

    if (buscarConta !== null) {
      if (buscarConta.sacar(valor)) {
        console.log("\n O Saque foi efetuado com sucesso!");
      }
    } else {
      console.log("\nConta não encontrada!");
    }
  }
  depositar(numero: number, valor: number): void {
    let buscarConta = this.buscarNoArray(numero);

    if (buscarConta !== null) {
      buscarConta.depositar(valor);
      console.log("\n Deposito efetuado com sucesso!");
    } else {
      console.log("\nConta não encontrada!");
    }
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    let buscarContaOrigem = this.buscarNoArray(numeroOrigem);
    let buscarContaDestino = this.buscarNoArray(numeroDestino);

    if (buscarContaOrigem !== null && buscarContaDestino !== null) {
      if (buscarContaOrigem.sacar(valor) === true) {
        buscarContaDestino.depositar(valor);
        console.log("\n Transferência efetuada com sucesso!");
      }
    } else {
      console.log("\n A Conta de origem e/ou Destino não foram encontradas!");
    }
  }

  //Métoos auxiliares

  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) {
        return conta;
      }
    }
    return null;
  }
}
