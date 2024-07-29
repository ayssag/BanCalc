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
}

class ContaCorrente extends Conta {
    constructor(titular, saldo, juros){
        super(titular, saldo);
        this.juros = juros;
    }

    aplicarJuros(){
        this.saldo *= (1+this.juros);
    }
}

class ContaPoupanca extends Conta {
    constructor(titular, saldo, rendimento){
        super(titular, saldo);
        this.rendimento = rendimento;
    }

    aplicarRendimento(){
        this.rendimento *= (1+this.rendimento);
    }
}

export { ContaCorrente, ContaPoupanca };