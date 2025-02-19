/*
Exercício 21: Escreva um programa que determina a estação do ano com base no mês.

Descrição: Neste exercício, você criará uma função que recebe um número de 1 a 12 (representando os meses de janeiro a dezembro) e imprimirá a estação do ano correspondente.


*/

function verificarEstacao(mes){
    if(mes < 3 || mes == 12){
        console.log(`A estação do mês ${mes} é Verão.`);
    }else if(mes < 6){
        console.log(`A estação do mês ${mes} é Outono.`);
    }else if(mes < 9){
        console.log(`A estação do mês ${mes} é Inverno.`);
    }else{
        console.log(`A estação do mês ${mes} é Primavera.`);
    }
}

verificarEstacao(2);
verificarEstacao(5);
verificarEstacao(7);
verificarEstacao(11);