const promessa = new Promise((resolve, reject) => { // parametros obrigatórios no Promisse

    const DeuCerto  = true;

    if(DeuCerto) {
        resolve("Funcionou !")
    } else {
        reject("deu erro!")
    }
    
});

promessa.then(resultado => {  // then lê o resultado
  console.log(resultado);
});