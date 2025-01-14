let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res =  document.querySelector('div#res')
let valores = []


/*
&& - e também
! - se não

*/ 


function isNumero(n) {

    if (Number(n) >=1 && Number(n) <=100) {return true} else {return false}

}

function inlista(n, l) {

    if (l.indexOf(Number(n)) != -1){return true} else {return false}

}

function adicionar() {

if (isNumero(num.value)&& !inlista(num.value, valores)){
    valores.push(Number(num.value))  /* push - adicionar */
    let item = document.createElement('option')
    item.text = `Valor ${num.value} foi adicionado`
    lista.appendChild(item)
    res.innerHTML = '' /*limpar o resultado depois de finalizar*/
}

    else{
        window.alert('Valor inválido ou já existe')
    }

    num.value = ''
    num.focus()  /*ao adicionar o item limpa a caixa de digitação atumaticamente*/ 

}


function finalizar () {
    if (valores.length == 0) 
        {window.alert('Adicione valores antes de finalizar')}
    else {
        let total  = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma  = 0
        let media = 0 

        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]

            if (valores[pos]< menor)
                menor = valores[pos]
        }


        media  = soma / total
        res.innerHTML = ''
        res.innerHTML +=    `<p> Ao todo temos ${total} números cadastrados</p>  `
        res.innerHTML +=    `<p> o maior valor informado foi  ${maior} </p>  `
        res.innerHTML +=    `<p> o menor valor informado foi  ${menor} </p>  `
        res.innerHTML +=    `<p>somando todos os valores temos ${soma}</p>`
        res.innerHTML +=    `<p>a media dos valores digitados é ${soma}</p>`

    }
}