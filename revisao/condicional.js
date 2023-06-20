let a = 10
let b = 5
let c = false
if(!c){
    console.log("entrou")
} else if(true){
            //alguma coisa
    }
else {
    //alguma coisa
}

//operador ternario

let idade
if(idade >= 18){
    console.log("Eh maior de 18 anos")
} else{
    console.log("Eh de menor")
}

//reescrevendo acima com o ternario
idade = 20
let msgmaiorIdade = (idade>= 18) ? "de maior" : "de menor"
console.log(msgmaiorIdade)

//valores falsy e truth
//falsy: 0 , "", NaN, undefined, null, false
//truthy: todos os demais
//ex:
if(null){
    console.log("true")
} else {
    console.log("false")
}

//curto circuito. Usado como valor padrao para variaveis
let n = 0
n = n || 10
console.log(n)

//outro exemplo  de curto
let isvalid = true
isvalid && console.log("é valido 1")
isvalid || console.log("é valido 2")

//usando switch
 let diaSemana = 3
 if(diaSemana === 0){
    console.log("hj eh domingo")
 } else if(diaSemana === 1){
    console.log("Hoje é Segunda")
 } else if(diaSemana === 2){
    console.log("Hj eh terça")
 }

 //reescrevendo usando switch
 let dia
 switch(diaSemana){
    case 0:
        dia = "segunda"
        break
    case 1:
        dia = "terça"
        break
    case 2:
        dia = "quarta"
        break
    case 3:
        dia =  "quinta"
        break
    case 4:
        dia = "sexta"
        break
    default:
        "--"
 }
 console.log(dia)
