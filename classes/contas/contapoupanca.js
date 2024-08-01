const Conta = require("./conta");

class ContaPoupanca extends Conta {
    constructor(titular, saldo, rendimento){
        super(titular, saldo);
        this.rendimento = rendimento;
    }

    aplicarRendimento(){
        let novoSaldo = this.rendimento * (1+this.rendimento);
        this.saldo = novoSaldo.toFixed(2);
    }
}

module.exports = ContaPoupanca;
