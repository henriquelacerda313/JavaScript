/*  
Escreva um programa que verifica se uma pessoa pode votar com base na idade. (Voto obrigatório para pessoas de 18 a 70 anos, facultativo para pessoas com 16, 17 e acima de 70).
*/



function calcularVoto (idade) {

    if (idade >= 18 && idade <= 70) {

        console.log('O voto é obrigatório')
    } else if(idade <=18 && idade > 15 || idade > 70) 
       {  console.log('O voto é facultativo') } else {
        console.log('Não pode votar')
       }
    }

calcularVoto(18);
calcularVoto(71);
calcularVoto(10);


