let age = 31
let currentYear = 2024
console.log (age, currentYear)//camel case
//uma let pode receber nova atribuição já uma const não
const points = 100

console.log (points)

//teste de strings
const email = "alesssandro@nasa.com"

console.log(email)

//teste de concatenação entres strings

const firstName = "Nathan"
const lastName = "Drake"
const fullName = firstName + " " + lastName

console.log(fullName)
//para acessar caracteres da const concatenada
console.log(fullName[0])
// comprimento de uma string com o espaço
console.log(fullName.length)
//metodos de string sempre acompanhado de
//parenteses e ponto (.)
// metodos e funçóes parecem ser a mesma coisa
console.log(fullName.toUpperCase())
//no exemplo acima chamamos o método pelo () ok
//senão ele não vem
const result = fullName.toLowerCase()
//estou pedindo que fullname seja resgatada maiscula
//e seja reservada minuscula na const result
// agora console.log para exibir o resultado minusculo
console.log(result)
//este metodo não modifica a fullname
//argumento é o que se especifica dentro ()
//nunca será parametro.
// (fullname.length"isso é uma propriedade dessa string)
//frizar invocação de método será sempre em ()
