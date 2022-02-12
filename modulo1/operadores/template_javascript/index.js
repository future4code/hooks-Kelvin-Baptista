 // Exercícios de interpretação de código
 //1

//  const bool1 = true
//  const bool2 = false
//  const bool3 = !bool2
//  let resultado = bool1 && bool2
//  console.log("a.", resultado) //a. false

//  resultado = bool1 && bool2 && bool3 
//  console.log("b. ", resultado) // b. false

//  resultado = !resultado && (bool1 || bool2)
//  console.log("c. ", resultado) // c. true

//  console.log("d. ", typeof resultado) //  d. boolean

//  //2
 
//  let primeiroNumero = Number(prompt("Digite um numero!"))
//  let segundoNumero = Number(prompt("Digite outro numero!"))

//  const soma = primeiroNumero + segundoNumero

//  console.log(soma)  /* converti string para number usando
//   const x = Number(prompt("..."))*/

// Exercícios de escrita de código
 //1a

 
const idade = Number(prompt("Qual sua idade?"))
 console.log(idade) //simples assim

//b

  const idade = Number(prompt("Qual sua idade amigo?"))
  console.log("idade do amigo é",idade)


//c

  const minhaIdade = Number(prompt("minha idade"))

  const idadeDoMeuAmigo = Number(prompt("idade do amigo"))

  console.log("inserir minha idade", minhaIdade)
  console.log("inserir idade do amigo",idadeDoMeuAmigo)

  console.log(minhaIdade>idadeDoMeuAmigo)

  //d
  console.log(minhaIdade-idadeDoMeuAmigo)

//2a


  let numeroPar = Number(prompt("insira um numero par"))
  console.log(numeroPar)

 //b
  const restoDaDivisao = numeroPar%2 
  console.log(restoDaDivisao)

//c

 const restoDaDivisao = numeroPar%2
 console.log(restoDaDivisao)  /*toda vez que eu insiro um 
 numero par ele me retorna o valor 0 */

//d

const restoDaDivisao = numeroPar%2
 console.log(restoDaDivisao) /*toda vez que eu insiro um numero 
 impar ele me retorna 1*/

//3

let anos = Number(prompt("quantos anos voçê tem"))
 console.log(anos)

 //a
 console.log(anos*12) 

 //b
console.log(anos*365)

//c

 console.log(anos*365*24)

//4

let primeiroNum = Number(prompt("digite um numero"))
let segundoNum = Number(prompt("digite outro numero"))
console.log(primeiroNum>segundoNum)
console.log(primeiroNum===segundoNum)
console.log(primeiroNum%segundoNum===0)
console.log(segundoNum%primeiroNum===0)