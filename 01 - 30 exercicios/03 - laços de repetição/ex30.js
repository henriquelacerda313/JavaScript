/*
Exercício 30: Usando um laço for, imprima todos os números primos de 1 a 100. 

Descrição: Neste exercício, você precisa percorrer todos os números de 1 a 100 e imprimir apenas aqueles que são primos. Lembre-se, um número primo é um número natural maior do que 1 que não tem divisores positivos outros que 1 e ele mesmo.

*/

for(i = 2; i <= 100; i++){
    let primeNum = true;

    for(division = 2; division < i; division++){
        if(i % division == 0){
            primeNum = false;
            break;
        }
    }

    if(primeNum){
        console.log(i)
    }
}