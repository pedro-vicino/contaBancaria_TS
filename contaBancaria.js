"use strict";
// Classe de Conta Bancária:
// Crie uma classe ContaBancaria com propriedades como saldo e métodos para depositar e sacar.
class ContaBancaria {
    nome;
    saldo = 0;
    contDepositar = 0;
    contSacar = 0;
    static contadorInstancia = 0;
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
        ContaBancaria.contadorInstancia++;
    }
    mostrarSaldo() {
        console.log(`Olá, ${this.nome}`);
        console.log(`O saldo atual é de R$${this.saldo}`);
    }
    depositar(valor) {
        this.contDepositar++;
        this.saldo += valor;
        console.log(`Depósito de R$${valor}. Novo saldo de R$${this.saldo}`);
    }
    sacar(valor) {
        this.contSacar++;
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor}. Novo saldo de R$${this.saldo}`);
        }
        else {
            console.log(`O valor de R$${valor} excede o saldo atual. O saldo permaneceu em R$${this.saldo}`);
        }
    }
    static quantidadeInstancias() {
        console.log(`O número de contas bancárias criadas é de ${ContaBancaria.contadorInstancia}`);
    }
    finalizar() {
        console.log(`Acesso finalizado! Você depositou ${this.contDepositar} vezes e sacou ${this.contSacar} vezes.`);
        console.log(`Até a próxima, ${this.nome}\n`);
    }
}
const p1 = new ContaBancaria("Pedro", 1000);
p1.mostrarSaldo();
p1.depositar(500);
p1.sacar(200);
p1.sacar(1301);
p1.finalizar();
const p2 = new ContaBancaria("Anastácio", 3000);
p2.mostrarSaldo();
p2.sacar(3100);
p2.finalizar();
ContaBancaria.quantidadeInstancias();
