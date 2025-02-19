/*
Exercício 23: Escreva um programa que verifica as cores de um semafáro.

Descrição:  Neste exercício, você deve criar uma função que recebe uma cor, e imprime no console o que essa cor representa, o console deve imprimir uma mensagem específica para cores que não existem em um semáforo.
*/

function verificarCor(cor) {
    if(cor === "vermelho") {
        console.log("Parar");
    } else if(cor === "amarelo") {
        console.log("atenção");
    } else if(cor === "verde"){
        console.log("Seguir");
    } else {
        console.log("cor incorreta");
    }
}

verificarCor("vermelho");
verificarCor("amarelo");
verificarCor("verde");
verificarCor("roxo");