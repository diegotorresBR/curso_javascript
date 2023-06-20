//conversao de tipos
let n1 = 10
let n2 = "2"

console.log(n1*n2)//n2 foi convertido pra number na operação aritmetica
console.log(typeof n1, typeof n2)//mas o tipo permaneceu

console.log(n1 + n2)//porém aqui ele concatenou. Cuidado ao usar
//a info que vem do user SEMPRE vem como string

//convertendo
//parseInt, parseFloat, Number()

n2 = parseInt(n2)
console.log(n1+n2)

//parseFloat é analogo

//Number nao consegue converter caracterers nao numericos, Apenas os anteriores
let n3 = parseInt("17a")
console.log(n3)

//convertendo para String
console.log(typeof n2)
n2 = n2+""
console.log(typeof n2)
n2 = n2.toString()
console.log(typeof n2)
n2 = 20
n2 = n2.toString(2)//forma binaria
console.log(n2)
