//var, let, const - Para definir variaveis

let teste = "teste de string" //let nao permite recriar variavel, var nao ocorre isso
//use o let é mais seguro
const teste2 = 10 //não é uma variavel dinamica. Deve ser inicializada
console.log(teste)

/*Tipos primitivos
strings, number(int, floats), boolean*/

let $tendeu = "entendi"

//concatenando

let mensagem = "tenho"+20+"reais"
console.log(mensagem)

let valorreais = 20
let msg2 = `eu possuo ${valorreais} reais` //só funciona com ` Template Literals
console.log(msg2)

console.log(typeof msg2)

const n1 = 10
const n2 = 1.1

console.log(`Tipo de dados de n1 é ${typeof n1} e o valor é ${n1}`)
console.log(`Tipo de dados de n2 é ${typeof n2} e o valor é ${n2}`)

//JS trata todo numero como Number

//Booleano
const istrue = true
console.log(`Tipo de istrue ${istrue}`)

//undefined
let varTesteUnd
console.log(varTesteUnd)
console.log(typeof varTesteUnd)

//null
let varTestenulo = null
console.log(varTestenulo)