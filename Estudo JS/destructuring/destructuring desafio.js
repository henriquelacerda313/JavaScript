/*
Crie um objeto produto com:

nome

preco

categoria

Use destructuring para pegar nome e preco

Mostre no console uma frase usando template string

💡 Exemplo esperado:

O produto Notebook custa R$ 3000




*/



const produto = {

    nome: "Notebook", 
    valor: 3000,
    marca:"Lenovo"

};

const {nome, valor} = produto;

console.log(`O produto ${nome} custa o valor de R$${valor}`);