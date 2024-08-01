const userInput = require('prompt-sync')({sigint: true});
const OperacaoBancaria = require('./operacao');

const DEPOSITAR = 1;
const SACAR = 2;
const APLICAR = 3;
const ENCERRAR = 4;

class Atendimento {
    constructor(conta, tipoConta){
        this.conta = conta;
        this.tipoConta = tipoConta;
    }
    
    executa(){
        let encerra = false;

        while(!encerra){
            console.clear();
            var msg = `====================================
Portal de atendimento ${this.conta.titular}
====================================
${this.tipoConta}
====================================
Saldo da conta: R$${this.conta.saldo}
(1) Depositar
(2) Sacar
`;

            if (this.tipoConta == 'Conta Corrente'){
                msg += `(3) Aplicar Juros
(4) Encerrar atendimento
\n`;
            }
            else if (this.tipoConta == 'Conta Poupança'){
                msg += `(3) Aplicar Rendimento
(4) Encerrar atendimento
\n`;
            }
            console.log(msg);

            var opcao = +userInput('>>> Escolha uma operação: ');
            while(opcao != 1 && opcao != 2 && opcao != 3 && opcao != 4){
                console.clear();
                console.log(msg);
                var opcao = +userInput('>>> Escolha uma operação: ');
            }

            const operacao = new OperacaoBancaria(this.conta);

            if(opcao == DEPOSITAR){
               this.conta = operacao.deposito();

            }else if(opcao == SACAR){

               this.conta = operacao.saque();

            }else if(opcao == APLICAR &&this.tipoConta == 'Conta Corrente'){
                
               this.conta = operacao.aplicacaoJuros();

            }else if(opcao == APLICAR &&this.tipoConta == 'Conta Poupança'){

               this.conta = operacao.aplicacaoRendimento();
                
            }else if(opcao == ENCERRAR){
                encerra = true;
            }
        }
    }
}

module.exports = Atendimento;