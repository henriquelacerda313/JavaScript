const original = [10, 20, 30];
const copia = [...original];

copia.push(40);

console.log(original); // [10, 20, 30]
console.log(copia);    // [10, 20, 30, 40]

// Isso cria uma cópia independente do array original.
