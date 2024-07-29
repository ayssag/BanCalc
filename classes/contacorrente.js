const Conta = require("./conta");

class ContaCorrente extends Conta {
    constructor(titular, saldo, juros){
        super(titular, saldo);
        this.juros = juros;
    }

    aplicarJuros(){
        this.saldo *= (1+this.juros);
    }
}

module.exports = ContaCorrente;
