const ContaCorrente = require('./classes/contacorrente');
const ContaPoupanca = require('./classes/contapoupanca');
const userInput = require('prompt-sync')({sigint: true});

var msg = `====================================
Seja bem-vindo(a) ao BanCalc!
====================================
Modalidades de conta: 

(1) Conta Corrente
(2) Conta Poupança
`;
console.log(msg);

const tipoConta = +userInput('>>> Qual tipo de conta você vai criar? ');

msg = `====================================
Certo!
`
console.log(msg);

const titular = userInput('>>> Agora digite o nome do titular da conta: ');
var conta; 

if (tipoConta == 1){
    conta = new ContaCorrente(titular, saldo=0, juros=0.08);
}
else if (tipoConta == 2){
    conta = new ContaPoupanca(titular, saldo=0, rendimento=0.005);
}
msg = `====================================
Conta criada!
Conta = ${conta}
`
console.log(msg);
userInput('Aperte qualquer tecla para continuar...');
console.clear();

msg = `====================================
Portal de atendimento ${titular}
====================================`
console.log(msg);
conta.verSaldo();

msg = `
(1) Depositar
(2) Sacar
`
console.log(msg);