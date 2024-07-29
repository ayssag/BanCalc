class Conta {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        this.saldo -= valor;
    }

    verSaldo(){
        console.log(`Saldo da conta: R$${this.saldo}`);
    }
}

module.exports = Conta;
