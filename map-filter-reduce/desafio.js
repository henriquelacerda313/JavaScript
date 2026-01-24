const numeros = [10, 15, 20, 25, 30];

const dobrar = numeros.map(numero  => numero *2);
console.log(dobrar);

const maiorVinte = numeros.filter(numero => numero > 20);

console.log(maiorVinte);

const soma = numeros.reduce((acumulador, numero) =>{
    return acumulador + numero ; 
},0);

console.log(soma);
