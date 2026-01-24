const usuarios = [
{nome:"Ana", idade:22, email:"ana@email.com"
},
{nome:"Bruno", idade:17, email:"bruno@email.com"}
];

const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 18);
console.log(maioresDeIdade);