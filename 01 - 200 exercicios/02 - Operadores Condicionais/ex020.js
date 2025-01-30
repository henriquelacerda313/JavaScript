/*
Exercício 20: Escreva um programa que imprime uma classificação baseada na nota de um aluno.

A nota máxima é 100, sendo 0 a 59(F), 60 a 69(D), 70 a 79(C), 80 a 89(B) e 90 a 100(A)

**minha tentativa**

*/

function calcularNota (nota) {

    if(nota >=0 && nota <= 59) {
        console.log('O aluno tirou nota F ')
    } else if(nota >=60 && nota <= 69){
        console.log('O aluno tirou nota D ')
    }else if(nota>=70 && nota <=79) {
        console.log('O aluno tirou nota C ')
    }else if(nota>=80 && nota <=89){
        console.log('O aluno tirou nota B')
    }else
        console.log('o aluno tirou nota A')
    
}

calcularNota(59);
calcularNota(69);
calcularNota(79);
calcularNota(89);
calcularNota(100);