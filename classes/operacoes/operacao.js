const userInput = require('prompt-sync')({sigint: true});

class Operacao {
    constructor(conta){
        this.conta = conta;
    }

    validaDeposito(valor){
        return valor >= 0 ? true : false;
    }

    validaSaque(valor){
        if(valor >= 0 && this.conta.saldo - valor >= 0){
            return true;
        }
        else{
            return false;
        }
    }

    deposito(){
        var msg = `====================================
Depósito
====================================
Saldo da conta: R$${this.conta.saldo}

`;

        console.clear();
        console.log(msg);

        var valor = +userInput('>>> Digite o valor do seu depósito: ');
        this.conta.depositar(valor);

        msg = `====================================
Depósito
====================================
Saldo da conta: R$${this.conta.saldo}

`;
        console.clear();
        console.log(msg);

        return this.conta;
    }

    saque(){
        var msg = `====================================
Saque
====================================
Saldo da conta: R$${this.conta.saldo}

`;
        console.clear();
        console.log(msg);

        var valor = new Number(0);
        do{
            valor = +userInput('>>> Digite o valor do saque: ');
        }while(!this.validaSaque(valor));
        
        this.conta.sacar(valor);

        msg = `====================================
Saque
====================================
Saldo da conta: R$${this.conta.saldo}

`;
        console.clear();
        console.log(msg);

        return this.conta;
    }

    aplicacaoJuros(){
        this.conta.aplicarJuros();
        msg += `Saldo da conta depois: R$${this.conta.saldo}`;
        console.log(msg);

        return this.conta;
    }

    aplicacaoRendimento(){
        conta.aplicarRendimento();
        msg += `Saldo da conta depois: R$${this.conta.saldo}`
        
        return this.conta;
    }

}

module.exports = Operacao;