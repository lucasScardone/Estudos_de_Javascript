// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

// o comparador === verifica o valor e o tipo
console.log(numero === numeroString);
// o comparador == verifica o valor sem verificar tipo (se um pode ser convertido pelo outro, resulta true)
console.log(numero == numeroString);
// problemas acontecem operando tipos diferentes.
console.log(numero + numeroString);
// é possível forçar a conversão
console.log(numero + Number(numeroString));
// se a conversão for impossível, resultará em NaN (not a number)
const numeroSus= Number("456a");
console.log(numeroSus);