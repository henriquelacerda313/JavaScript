/*
copie tudo de usuario

altere apenas a idade para 21

*/

const usuarios  = {
    nome:"bernardo", 
    idade:26,
    email:"bernardo@gmail.com"
};

const usuariosAtualizados = {

...usuarios,
idade:21
};

console.log(usuariosAtualizados);