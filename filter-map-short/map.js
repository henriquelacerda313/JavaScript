const usuarios = [
  { nome: "Ana", idade: 22, email: "ana@email.com" },
  { nome: "Bruno", idade: 17, email: "bruno@email.com" },
  { nome: "Carla", idade: 30, email: "carla@email.com" },
  { nome: "Diego", idade: 15, email: "diego@email.com" },
  { nome: "Elisa", idade: 25, email: "elisa@email.com" }
];


const nomes = usuarios.map(usuario => usuario.nome);

console.log(nomes);