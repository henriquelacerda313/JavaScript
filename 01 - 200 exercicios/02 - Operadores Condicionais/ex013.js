/*   
Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.

Descrição:  Nesse exercício, você vai criar uma função que recebe o peso (em kg) e a altura (em m) de uma pessoa, calcula o IMC e verifica em qual faixa o valor se encaixa. As faixas são: abaixo do peso (IMC < 18.5), normal (18.5 ≤ IMC < 25), sobrepeso (25 ≤ IMC < 30) e obesidade (IMC ≥ 30).

*/ 


/* 
function calcularIMC(peso, altura){
    let imc = peso / (altura ** 2);

    if(imc < 18.5){
        console.log('IMC: ' + Math.floor(imc) + ', Abaixo do peso.');
    }else if(imc >= 18.5 && imc < 25){
        console.log('IMC: ' + Math.floor(imc) + ', peso normal.');
    }else if(imc >= 25 && imc < 30){
        console.log('IMC: ' + Math.floor(imc) + ', sobre-peso.');
    }else{
        console.log('IMC: ' + Math.floor(imc) + ', obesidade.');
    }
}

calcularIMC(40, 1.67);
calcularIMC(70, 1.76);
calcularIMC(90, 1.80);
calcularIMC(130, 1.80);

*/

function calcularIMC (peso, altura) {

    var imc = peso / (altura**2);

    if(imc < 18.5){
        console.log('Abaixo do peso.');
    }else if(imc >= 18.5 && imc < 25){
        console.log('peso normal');
    }else if(imc >= 25 && imc < 30){
        console.log('sobre peso');
    }else{
        console.log('obesidade');
    }
}