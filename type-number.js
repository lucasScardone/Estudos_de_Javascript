// Tipo Number. Estamos declarando usando "const" porque esse número não precisará ser alterado.
// Esse tipo armazena números inteiros.
const meuNumero = 3;
// Variáveis devem iniciar em minúscula, caso haja mais de uma palavra,
// a próxima palavra inicia em maiúscula. Caracteres especiais não devem ser usados.
const primeiroNumero = 1;
const segundoNumero = 2;
// Podemos fazer operações diretamente com variáveis numéricas.
const operacaoMatematica = primeiroNumero + segundoNumero;
// Console.log mostrará os outputs do programa no terminal.
console.log(operacaoMatematica);

// O ponto flutuante suporta casas decimais.
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;
// As operações funcionam normalmente
const somaFlutuante = numeroPontoFlutuante + pontoFlutuanteSemZero;
const divisaoFlutuante = numeroPontoFlutuante / pontoFlutuanteSemZero;

console.log(somaFlutuante);
console.log(divisaoFlutuante);

// NaN -> Not a Number. Acontece quando tentamos fazer operações matemáticas com algo que
// não é um número, resultando em erro.
console.log(primeiroNumero/"x");