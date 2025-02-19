/*  
 Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).

*/


function calcularMedia(nota1, nota2){
    var media = (nota1 + nota2) / 2;
    console.log("Média: " + media);


    if(media >= 7){
        console.log('Aluno aprovado!');
    }else{
        console.log('Aluno reprovado!');
    }
}

calcularMedia(10,8);

/* - minha tentativa
function medias(media) {   

    let nota1 = 5
    let nota2 = 8
    let nota3 = 7
    let nota4 = 5
    
    let media = nota1 + nota2 + nota3 + nota4 /  4

    
    if(media >= 5) {
        console.log('aluno aprovado')
    } else {console.log('reprovado')}



}

medias(5);

*/