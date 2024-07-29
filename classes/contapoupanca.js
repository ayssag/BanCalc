const Conta = require("./conta");

class ContaPoupanca extends Conta {
    constructor(titular, saldo, rendimento){
        super(titular, saldo);
        this.rendimento = rendimento;
    }

    aplicarRendimento(){
        this.rendimento *= (1+this.rendimento);
    }
}

module.exports = ContaPoupanca;
