const promessa = new Promise((resolve, reject) => { // parametros obrigatórios no Promisse

    const DeuErro  = true;

    if(DeuErro) {
        reject("ocorreu algum erro")
    }
});

promessa
  .then(resultado => console.log(resultado))
  .catch(erro => console.log(erro));