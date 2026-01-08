// cria um novo array com apenas os itens que passam na condição

const numeros  = [1,2,3,4,5];

const pares = numeros.filter(numero => numero %2 ===0);

console.log(pares);