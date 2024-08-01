# BanCalc
Aplicação simples de sistema bancário utilizando JavaScript com NodeJS.

## Objetivo
Exercício para obtenção de certificado de Introdução a Back-end Development da iTalents. O objetivo é aplicar os conceitos de herança em objetos para criar uma estrutura de contas bancárias que incluam uma conta genérica, uma conta corrente e uma conta poupança.

## Funcionalidades exigidas

### Classe Base - Conta
- [x] Crie uma classe Conta que deve conter os atributos básicos: titular,
saldo.
- [x] Implemente métodos básicos como depositar(valor) e
sacar(valor).

### Classe Derivada - Conta Corrente
- [x] Crie uma classe ContaCorrente que herda da classe Conta.
- [X] Adicione um atributo específico para taxa de juros: juros.
- [X] Implemente um método para aplicar juros: aplicarJuros(), que
aumenta o saldo com base na taxa de juros.

### Classe Derivada - Conta Poupança
- [X] Crie uma classe ContaPoupanca que herda da classe Conta.
- [X] Adicione um atributo específico para o rendimento: rendimento.
- [x] Implemente um método para aplicar rendimento:
aplicarRendimento(), que aumenta o saldo com base no
rendimento.

### Interação com o Usuário:
- [x] Permita que o usuário crie uma conta, deposite, saque e veja o saldo de cada
tipo de conta.

## Execução
### Requisitos
- NodeJS v20.15.1

### Instalar dependências
`
    npm install
`

### Executar o programa
`
    node index.js
`