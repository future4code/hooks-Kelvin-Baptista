// // 1a o qu esera exibido no console
// console.log(filme.elenco[0])//"Matheus Nachtergaele"
// console.log(filme.elenco[filme.elenco.length - 1])// "Virginia Cavendish"
// console.log(filme.transmissoesHoje[2]) // {canal: "Globo", horario: "14h"}

// //2a
// console.log(cachorro) /*const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"*/

//     console.log(gato)/*const gato = {
//         nome: "Juba", 
//         idade: 3, 
//         raca: "SRD"
//     }*/

//     console.log(tartaruga) /*const tartaruga = {
//         nome: "Jubo", 
//         idade: 3, 
//         raca: "SRD"
//     }*/

//     //2b

//     /*a função spread tem como objetivo copiar dados de um objeto existente para um novo obijeto*/



//     //2a oq sera exibido no console 

//     console.log(minhaFuncao(pessoa, "backender")) // false 

//     console.log(minhaFuncao(pessoa, "altura")) //undefined


//     //b
//     /* no primeiro console.log() a questao esta sendo efetuada uma busca no objeto de valor "backender" e assim retornara false*/
//     /* no segundo console.log()  ele nao encontrara o valor altura pois ele nao existe, quando o valor nao e encontardo ele e adicionado ao objeto*/

//Exercícios de escrita de código
//1a
const pessoa = {
    nome: "kelvin",
    apelidos: ["kel", "chris", "kevin"]
}
function minhaApresentacao(objeto) {
    const resultado = {

        ...objeto
    }
    console.log(`Olá meu nome é ${objeto.nome}, as pessoas me chamam de ${objeto.apelidos[1]} ,minha namorada me chama de ${objeto.apelidos[0]}, meu apelido principal é ${objeto.apelidos[2]},  esta é a forma como meus familiares me chamam.`)
}
minhaApresentacao(pessoa)

//b) 

const novaPessoa = {
    ...pessoa,
    apelidos: ['kevinho', 'damaquina', 'magrelo']


}

minhaApresentacao(novaPessoa)


//2a

const pessoa1 = {
    nome: 'kelvin',
    idade: 22,
    profissao: 'dev frontend'


}

const pessoa2 = {
    nome: 'maria',
    idade: 16,
    profissao: 'estudante'
}

//b
function retornArray(obj) {
    return [
        obj.nome,
        obj.nome.length,
        obj.idade,
        obj.profissao,
        obj.profissao.length
    ]
}
console.log(retornArray(pessoa1))

console.log(retornArray(pessoa2))
//3a

carrinho = []

//b
const fruta = {
    nome: "laranja",
    disponibilidade: true
}

const fruta1 = {
    nome: "abacate",
    disponibilidade: true
}

const fruta2 = {
    nome: "macã",
    disponibilidade: true
}
//c
function adicionarCarrinho(fruta) {
    carrinho.push(fruta)
}
adicionarCarrinho(fruta)
adicionarCarrinho(fruta1)
adicionarCarrinho(fruta2)


//d Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
console.log(carrinho)




