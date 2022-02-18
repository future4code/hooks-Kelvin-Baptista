// Exercícios de interpretação de código
// 1a)
// function minhaFuncao(variavel) {
//  	return variavel * 5
//  }

//  console.log(minhaFuncao(2)) //10
//  console.log(minhaFuncao(10)) //50

// b) Quando retiramos o console.log ele iginora o primeiro comando e so exibe o segundo 

// 2
// a) Ela procura a palavra chave inserida pelo usuario e retorna true se localizar a palavra, sua utilidade verificar se ha presença da palavra solicitada.

// b) Vai retornar true nas tres opcoes pois esta usando o comando toLowerCase e assim ele reconhece a frase indepemdente se ela esta em maiuscula ou minuscula 

// Exercícios de escrita de código

// a)
     function meusDados(nome,idade,cidade,profissao){
    return`Olá meu nome é ${nome}, tenho ${idade} anos, resido na didade de ${cidade} e atualmente sou ${profissao}` 
}
console.log( meusDados("kelvin", 28, "Promissão", "estudante"))
//b)

function idUsuario (name1,age,adress,profession) {

    console.log(`eu sou ${name1}, tenho ${age} anos, moro em ${adress} e sou ${profession} `) 

}
idUsuario("kelvin", 22 ,"Promissão" , "estudante")

2
//a)
 
function calculaNum(num1, num2){
const calculo = num1 + num2
console.log(calculo)

}
calculaNum(5,5)  //10

//b)

function qualEmaior(numero1, numero2){
    const calculo = numero1 > numero2
    console.log(calculo)
    
    }
    qualEmaior(9,5) //true

 //c)

 function parOuImpar(numero){
 return numero % 2===0 
 }
 console.log( parOuImpar(8) )

 //d) 

 function tamanhoDaString(string){
     return`o texto ${string.toUpperCase()} contem ${string.length} caracteres`
 }
 console.log(tamanhoDaString("kelvin")) //6 caracteres

 //3
function soma(num1,num2){
    return num1+num2
}
function subtracao(num1,num2){
    return num1-num2 
}
function multiplicacao(num1,num2){
    return num1*num2 
}
function divisao(num1,num2){
    return num1/num2
}
let primeiroNum = Number(prompt("digite um numero:"))
let segundoNum = Number(prompt("digite outro numero:"))

console.log(`Nùmeros inseridos: ${primeiroNum}, ${segundoNum}`)
console.log("soma:", soma(primeiroNum,segundoNum))
console.log("subtracao:", subtracao(primeiroNum,segundoNum))
console.log("multiplicacao:", multiplicacao(primeiroNum,segundoNum))
console.log("divisao:", divisao(primeiroNum,segundoNum))
