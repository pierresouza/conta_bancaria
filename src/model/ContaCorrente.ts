import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

  public teste(): void {
    throw new Error("Method not implemented.");
  }

  private _limite: number;

  constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
    super(numero, agencia, tipo, titular, saldo);
    this._limite = limite;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Limite: ${this._limite.toFixed(2)}\n`);
  }

  public sacar(valor: number): boolean {
    console.log(`Titular: ${this.titular} - Operação Selecionada: Sacar R$${valor.toFixed(2)}`);
    if (this.saldo + this.limite >= valor) {
      this.saldo = this.saldo - valor;
      console.log(`Saque de R$${valor.toFixed(2)}`);
      console.log(`Saldo da Conta Atual: R$${this.saldo.toFixed(2)}\n`);
      return true;
    }

    console.log(`Saldo Insuficiente! \nSaldo Atual: R$${this.saldo.toFixed(2)} - Limite Atual: R$${this._limite}\n`);
    return false;
  }

  public get limite(): number {
    return this._limite;
  }

  public set limite(value: number) {
    this._limite = value;
  }
}
