// 1a o qu esera exibido no console
console.log(filme.elenco[0])//"Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1])// "Virginia Cavendish"
console.log(filme.transmissoesHoje[2]) // {canal: "Globo", horario: "14h"}
 
//2a
console.log(cachorro) /*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"*/

    console.log(gato)/*const gato = {
        nome: "Juba", 
        idade: 3, 
        raca: "SRD"
    }*/

    console.log(tartaruga) /*const tartaruga = {
        nome: "Jubo", 
        idade: 3, 
        raca: "SRD"
    }*/
    
    //2b

    /*a função spread tem como objetivo copiar dados de um objeto existente para um novo obijeto*/
     


    //2a oq sera exibido no console 

    console.log(minhaFuncao(pessoa, "backender")) // false 

    console.log(minhaFuncao(pessoa, "altura")) //undefined
    
    
    //b
    /* no primeiro console.log() a questao esta sendo efetuada uma busca no objeto de valor "backender" e assim retornara false*/
    /* no segundo console.log()  ele nao encontrara o valor altura pois ele nao existe, quando o valor nao e encontardo ele e adicionado ao objeto*/

    //Exercícios de escrita de código
    //1a
    const pessoa = {
        nome: "kelvin", 
        apelidos: ["kel", "chris", "daMaquina"],
     }
    const minhaApresentacao = () => {
        console.log(`Olá meu nome é ${nome}, as pessoas me chamam de ${pessoa.nome[1]} ,minha namorada me chama assim. ${pessoa.apelidos[0]}, meu apelido principal é ${nome.apelidos[2]}, é a forma como meus familiares me chamam.`)
    }  
    console.log(minhaApresentacao)
    
   // b)
    
    const novaPessoa = {
        ...minhaApresentacao,
        nome: "Patrick",
        apelidos:["trick","brother", "tick"],
    }
    const minhaApresentacao = ()=>{
        console.log(Meu nome é ${nome}, meu apelido quando eu era da escola era${nome.apelidos[0]}, meu irmão costuma me chamar ${pessoa.apelidos[1]}, já no meu antigo trabalho as pessoas me chamavam de ${pessoa.apelidos[2]})
    }
    const minhaApresentacao = () => {
    
    }
    
    
    
    /* 2
    */
    const dadosPessoais = {
        nome: Débora,
        idade: 57,
        profissão: costureira,
    
    }