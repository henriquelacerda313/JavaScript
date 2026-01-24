const pessoa = {nome: "Ana", idade: 25 };
const novapessoa = {...pessoa, cidade:"são paulo"};

console.log(novapessoa);

// O spread copia todas as propriedades de pessoa e adiciona uma nova.
// Copia e combina propriedades