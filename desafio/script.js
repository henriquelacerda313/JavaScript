const usuarios = [
  { nome: "ana silva", email: "ana@email.com", idade: 17 },
  { nome: "carlos souza", email: "carlos@email.com", idade: 25 },
  { nome: "joao lima", email: "joaoemail.com", idade: 30 }
];

usuarios.forEach(usuario => {     
    if (usuario.email.includes("@")&& usuario.email.includes(".")){
        console.log(`email valido ${usuario.email}`);
    } else{
        console.log(`email invalido ${usuario.email}`);
    }
});

/*
for each - percorre usuarios 
includes - valida email
*/

const maioresDeIdade = usuarios.filter(usuario => usuario.idade >= 18);
console.log(maioresDeIdade);

/*
find - retorna apenas o primeiro item que funciona
filter - filtra o que precisa
*/

const existeMenor = usuarios.some(usuario => usuario.idade < 18);
console.log(existeMenor);

// formatar nomes

const usuariosFormatados = usuarios.map(usuario => {
    return{
        ...usuario, 
        nome: usuario.nome
        .split(" ")
        .map(p=>p[0].toUpperCase()+p.slice(1))
        .join(" ")
    };
});

console.log(usuariosFormatados);

usuariosFormatados
  .filter(usuario => usuario.idade >= 18)
  .forEach(usuario => {
    console.log(`Olá, ${usuario.nome}! Seu cadastro está completo.`);
  });

/*
(spread)
 ...usuario, 
Ele significa:

“Copie todas as propriedades do objeto usuario”
*/

/*
.split(" ")
  .map(...)
  .join(" ")
Isso se chama encadeamento de métodos (method chaining).

Cada ponto significa:

“Pegue o resultado anterior e aplique outra função”
*/

