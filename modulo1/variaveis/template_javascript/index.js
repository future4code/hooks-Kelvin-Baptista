 /*  AULA DE VARIAVEIS
        turma hooks
*/
//imprimir coisas no console
let nome 
let idade 
 console.log(typeof nome, typeof idade)  //o resultado foi undefined
const nome = prompt("Qual seu nome?")
 const idade = prompt("Qual sua idade?")
 console.log(nome)
 console.log(idade)
 console.log(typeof nome)
 console.log(typeof idade)// tudo que se adiciona no prompt e convertido em string
 console.log("ola",nome,"voçê tem",idade,"anos")

 const questao1 = "estou usando oculos?"
 const questao2 = "gosto de lasanha?"
 const questao3 = "sou estudante?"
 const resposta1 = "não"
 const resposta2 = "sim"
 const resposta3 = "sim"
 console.log(questao1,resposta1,questao2,resposta2,questao3,resposta3)

 let a = 10
 let b = 25
 let c = a
 a = b
 b = c
 console.log(a,b)

const primeiroNumero = Number (prompt("digite um numero"))
const segundoNumero = Number (prompt("digite um nomero"))
console.log("O primeiro número somado ao segundo número resulta em:",primeiroNumero+segundoNumero)

console.log("O primeiro número multiplicado ao segundo número resulta em:",primeiroNumero*segundoNumero)