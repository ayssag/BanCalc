const Conta = require("./conta");

class ContaCorrente extends Conta {
    constructor(titular, saldo, juros){
        super(titular, saldo);
        this.juros = juros;
    }

    aplicarJuros(){
        let novoSaldo = this.saldo * (1+this.juros);
        this.saldo = novoSaldo.toFixed(2);
    }
}

module.exports = ContaCorrente;
