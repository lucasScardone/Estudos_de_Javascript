// Basta a variável estar entre aspas que já se torna uma string (tipo texto).
const texto1 = "Olá, mundo!";
// Não importa se são aspas simples ou duplas.
const texto2 = 'Olá, mundo!';

console.log(texto1);
console.log(texto2);

// Também podemos colocar números em strings, aliás um número sozinho já pode ser string.
const senha = "senhaSuperSegura456";
const stringDeNumeros = "28";

console.log(senha);
console.log(stringDeNumeros);

// Caso seu texto contenha aspas simples ou duplas, devemos usar o outro tipo para evitar erros.
const citacao = 'Aristóteles disse "Não confie em tudo que você vê na internet"';
console.log(citacao);

// Concatenação (+), serve para juntar as strings.
const nome = "Lucas";
const frase = "Meu nome é ";
console.log(frase + nome);

// Template string ou template literal. Útil para usar variáveis numéricas em texto.
console.log(`${frase + nome}. Eu tenho ${stringDeNumeros} anos.`);