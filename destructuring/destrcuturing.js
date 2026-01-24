/*

objetos - forma tradicional 

const usuarios = {
nome: "Henrique", 
idade: 26,
cidade: "são paulo"

};

console.log(usuarios.cidade);

*/

// Destructuring

const usuarios = {
    nome: "Henrique",
    idade: 26,
    cidade: "são paulo"
};

const {nome, idade} = usuarios;

console.log(nome, idade);
