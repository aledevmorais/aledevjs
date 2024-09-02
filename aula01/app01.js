//inteiros e decimais
const radius = 10
const pi = 3.14

console.log (radius, pi)
//operadores aritméticos
const oqueresta = 5 % 2
console.log(oqueresta)
//o resto de 5 dividido por 2 = 1 
const area = pi * radius ** 2
console.log(area)
//calculo de area na segunda potencia(**)
//ordem das operações aritméticas em js
//1º  parenteses
//2º  expoentes ou raizes
//3º  multiplicação e divisão
//4º  adição e subtração
const calculando = 5 * (10 - 3) ** 2
console.log(calculando)
//operadores de incremento e decremento
let somandoum = 10
somandoum++
console.log(somandoum)
//resultado do terminal será 11 (incrementando um)
//ou se somandoum-- o resultado será 9
//outra forma de incremento
somandoum = somandoum + 10
console.log(somandoum)
//result 10 ++1 + 10 = 21
// tem outra forma
somandoum += 10
console.log(somandoum)
//result 10 ++ 1 + 10 + 10 = 31
//ou
somandoum *= 2
console.log(somandoum)
// result 10 ++ 1 + 10 + 10 *2 = 62

//caso curioso 
// quando tentar somar numero e texto = NaN
const valor = 10
const palavra = "text"
console.log(valor + palavra)
//o js converteu o 10 "number" em string
//result = 10text


