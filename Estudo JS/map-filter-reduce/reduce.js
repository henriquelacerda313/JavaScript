// usado para somar contar e agrupar

const numeros  = [1,2,3,4,5];

const total = numeros.reduce((acumulador, numero) =>{
    return acumulador + numero;
}, 0);

console.log(total);

