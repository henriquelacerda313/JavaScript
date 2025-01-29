/*
Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo. 

Descrição:  Neste exercício, você vai criar uma função que recebe três números como argumentos: um número a ser verificado, o limite inferior e o limite superior do intervalo. A função deve imprimir se o número está dentro do intervalo ou não.

*/

function verificarNumeroIntervalo(num, limiteInferior, limiteSuperior){
    if(num >= limiteInferior && num <= limiteSuperior){
        console.log(`O número ${num} esta entre o intervalo de ${limiteInferior} a ${limiteSuperior}`);
    }else{
        console.log(`O número ${num} não esta entre o intervalo de ${limiteInferior} a ${limiteSuperior}`);
    }
}

verificarNumeroIntervalo(15, 1, 20);
verificarNumeroIntervalo(15, 1, 10);