/*
Crie uma string com um email digitado e verifique se:

contém "@"

contém "."

Se não contiver, exiba "Email inválido".
*/

const emailsPermitidos = ["admin@email.com", "user@email.com"];

const emails  = "admin@email.com";

if (emailsPermitidos.includes(emails)){
    console.log("Email permitido")
}else {
    console.log("email não permitido")
}; 

console.log(emails.includes("@", "."));


/*
versão final e correta corrigida 

const emailsPermitidos = ["admin@email.com", "user@email.com"];
const emails = "admin@email.com";

if (emailsPermitidos.includes(emails)) {
  console.log("Email permitido");
} else {
  console.log("Email não permitido");
}

if (emails.includes("@") && emails.includes(".")) {
  console.log("Email válido");
} else {
  console.log("Email inválido");
}

*/