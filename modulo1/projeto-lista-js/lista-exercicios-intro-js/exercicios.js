// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura=Number(prompt("insira o valor da altura"));
  let largura=Number(prompt("isira o valor da largura"));
  console.log(altura*largura)
  
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("digite o ano atual:"));
let anoNascimento = Number(prompt("digite o seu ano de nascimento:"));
console.log(anoAtual-anoNascimento)
}
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome=prompt("qual seu nome?");
let idade=Number(prompt("qual sua idade?"));
let email=prompt("insira seu email");
console.log('Meu nome é ' + (nome) + ', tenho ' + (idade) + ' anos, e o meu email é ' + (email) + '.')
}
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("digite sua cor favorita: ")
  const cor2 = prompt("digite sua segunda cor favorita: ")
  const cor3 = prompt("digite terceira sua cor favorita: ")
  let coresFavoritas = []
  coresFavoritas.push(cor1,cor2,cor3)
  console.log(coresFavoritas)
    
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let retornaStringEmMaiuscula = prompt('digite')
  return retornaStringEmMaiuscula.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return (custo/valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length===string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiroElemento = array.shift();
const ultimoElemento = array.pop();
const primeiroParaUltimo = array.push(primeiroElemento);
const ultimoParaPrimeiro = array.unshift(ultimoElemento);
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase()=== string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(promt("Que anos estamos?"));
const anoDeNascimento = Number(promt("Que dia voçê nasceu?"));
const anoDeEmissaoDoRg = Number(promt("Quando foi emitido seu RG?"));
const idadeDoUsuario = anoAtual - anoDeNascimento;

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}