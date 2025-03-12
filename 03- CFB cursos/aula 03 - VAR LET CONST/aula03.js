
/*

DIFERENÇAS: LET  / VAR / CONST


---------------------------------------------
if (true) {
    let nome = "Henrique"
}

console.log(nome);      *** let não funciona*** fora do bloco de instrução if
----------------------------------------------
if (true) {
    var nome = "Henrique"
}

console.log(nome);      *** var funciona*** fora do bloco de instrução if
-----------------------------------------------

let nome = "Henrique"
nome = "Bernardo"

console.log(nome);     *** dar preferencia ao LET pois ele permite alterar a qualquer momento conteudo da variavel 
------------------------------------------------------------------------------------------------------------------
let nome = "Henrique"
nome = "Bernardo"
nome = 10             *****também  faz a converção de tipos, de forma automatica(type casting)

console.log(nome); 
------------------------------------------------------------------------------------------------------------------------
const curso = "javascript"; //constante declarada e valor atribuido não pode ser alterado 

curso = "HTML"

console.log(curso); 


*/