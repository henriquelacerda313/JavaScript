/* 
Exercício 28: Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100. 

Descrição:  Neste exercício, você deve criar um loop usando a estrutura de repetição while que percorra de 1 a 100 e calcule a soma de todos esses números.
*/

let i = 1;
let soma = 0;

while (i <= 100) {
    soma = soma + i;
    i++
}

console.log(soma)