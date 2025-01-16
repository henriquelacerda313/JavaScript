/*
Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.
*/ 

/*  - minha tentativa 

let x  = -1

if(x < 0 ) {
    console.log('o numero é negativo')

} else {   (console.log('o numero é positivo') ) }

*reposta correta em baixo

*/ 

function verificarNumero(num) {

    if(num ==0) {
        console.log('o numero é igual a zero')
    } else if(num <0) {console.log('o numero é negativo')}

    else {console.log('o numero é positivo')}
}

verificarNumero(1);
verificarNumero(-1);
verificarNumero(0);

