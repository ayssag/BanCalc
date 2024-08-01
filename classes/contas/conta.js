class Conta {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
        return this.saldo;
    }

    sacar(valor){
        this.saldo -= valor;
        return this.saldo;
    }
}

module.exports = Conta;
