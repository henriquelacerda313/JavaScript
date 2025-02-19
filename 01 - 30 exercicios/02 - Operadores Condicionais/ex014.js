/* 
Exercício 14: Escreva um programa que verifica se um ano é bissexto.

Descrição: Nesse exercício, você vai criar uma função que recebe um ano e verifica se ele é bissexto. Um ano é bissexto se for divisível por 4, exceto os que são divisíveis por 100 mas não por 400.

*/

/* -----minha tentativa

function CalcularBI(ano) {

    if (ano % 4 == 0) {
        console.log('Esse é um ano bissexto')
    } else {
        console.log('Esse NÃO é um ano bissexto')
    }
}

CalcularBI(2020);
CalcularBI(2021);

*/

function calcularBissexto(ano){
    if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
        console.log('O ano ' + ano + ' é bissexto.');
    }else{
        console.log('O ano ' + ano + ' não é bissexto.');
    }
}

calcularBissexto(2020);
calcularBissexto(2022);