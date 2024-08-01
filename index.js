const userInput = require('prompt-sync')({sigint: true});

const ContaCorrente = require('./classes/contas/contacorrente');
const ContaPoupanca = require('./classes/contas/contapoupanca');
const Atendimento = require('./classes/operacoes/atendimento');

const CORRENTE = 1;
const POUPANCA = 2;

// Início do programa

var msg = `====================================
Seja bem-vindo(a) ao BanCalc!
====================================
Modalidades de conta: 

(1) Conta Corrente
(2) Conta Poupança
`;
console.log(msg);

// Define o tipo de conta a ser criada
var tipoConta = +userInput('>>> Qual tipo de conta você vai criar? ');
if (tipoConta == 1){
    tipoConta = 'Conta Corrente';
}
if(tipoConta == 2){
    tipoConta = 'Conta Poupança';
}

msg = `====================================
Certo!
`;
console.log(msg);

// Criação de uma conta
const titular = userInput('>>> Agora digite o nome do titular da conta: ');
var conta; 

if (tipoConta == 'Conta Corrente'){
    conta = new ContaCorrente(titular, saldo=0, juros=0.08);
}
else if (tipoConta == 'Conta Poupança'){
    conta = new ContaPoupanca(titular, saldo=0, rendimento=0.005);
}
msg = `====================================
Conta criada!
`;
console.log(msg);
userInput('>>> Aperte qualquer tecla para continuar...');

// Atendimento ao cliente
const atendimento = new Atendimento(conta, tipoConta);
atendimento.executa();

// Fim do programa
console.clear();
console.log('Atendimento encerrado.\nVolte sempre!');