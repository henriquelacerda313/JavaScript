/*
Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo.

Descrição: Um palíndromo é uma palavra que tem a propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita. Nesse exercício, você irá criar uma função que recebe uma palavra como argumento e verifica se ela é um palíndromo.

*/

function verificarPalindromo(palavra){
    palavra = palavra.toLowerCase(); /*O método toLowerCase() em JavaScript converte uma string para minúsculas*/ 
    var reverse = palavra.split('').reverse().join('');

    if(palavra == reverse){
        console.log(`A palavra "${palavra}" é um palindromo.`); //Neste exercício ao invés de usar a concatenação (+), eu utilizei uma sintaxe chamada Template Literals.
    }else{
        console.log(`A palavra "${palavra}" não é um palindromo.`);
    }
}

verificarPalindromo("Gostar");
verificarPalindromo("Salas");