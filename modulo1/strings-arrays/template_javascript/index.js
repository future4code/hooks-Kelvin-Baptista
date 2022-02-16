/*// 1a:Exercicio de interpretação de código

a.  undefined
b.  null
c.  11
d.  3
e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f.  9

//b:

SUBI NUM ÔNIBUS EM MIRROCOS 27*/

 //2 Exercícios de escrita de código:
 //A)
 const emailDoUsuario = prompt("insira seu email:")
 const nomeDoUsuario =  prompt("insira seu nome")
 console.log("O e-mail " + (emailDoUsuario) + " foi cadastrado com sucesso. Seja bem-vinda(o), " + (nomeDoUsuario) + "!")


//2a
const comidasPrediletas = ["pizza","feijoada","macarronada" , "coxinha","lasanha"];
//b
console.log(comidasPrediletas);
//c
console.log("Essas são as minhas comidas preferidas: ");
console.log(comidasPrediletas[0])
console.log(comidasPrediletas[1])
console.log(comidasPrediletas[2])
console.log(comidasPrediletas[3])
console.log(comidasPrediletas[4])

//d
let opniaoUsuario = prompt("Qual sua comida preferida?")



//c
comidasPrediletas[1] = opniaoUsuario
console.log(comidasPrediletas)

//3a
const checkList =[]

//b
const list = prompt("insira uma tarefa")
const list1 = prompt("insira uma tarefa")
const list2 = prompt("insira uma tarefa")

//c
checkList.push(list ,list1, list2)
console.log(checkList)

//d
const tarefaComcluida = prompt("qual tarefa foi concluida?")
 checkList.splice(checkList,1)

//e
console.log(checkList)

