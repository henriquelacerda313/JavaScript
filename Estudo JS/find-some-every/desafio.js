const usuarios = [
  { nome: "Ana", idade: 17 },
  { nome: "Carlos", idade: 22 },
  { nome: "João", idade: 19 }
];


const MaiorIdade = usuarios.find(usuario => usuario.idade >=18);
console.log(MaiorIdade);

const MenorIdade =  usuarios.some(usuario => usuario.idade < 18);
console.log(MenorIdade);

maiorQue18 = usuarios.every(usuario => usuario.idade > 18);

console.log(maiorQue18);