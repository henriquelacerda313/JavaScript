function verificar () {
 
    var data  = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano)
         { window.alert('[ERRO] Verifique os dados e tente novamente')}

    // Operador || OU OR - Este operador retorna verdadeiro se pelo menos um dos operandos for verdadeiro. Se ambos os operandos forem falsos, então o resultado será falso. 

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img  = document.createElement('img')
        img.setAttribute('id', 'foto')  }

        if (fsex[0].Checked) {
            gênero = 'Homem' 

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'rapaz.webp')
            } else if (idade < 50)
               {  img.setAttribute ('src', 'homem.webp')
                 } else  {
                        img.setAttribute('src', 'idoso.webp')
                 }


        }

    

    if (fsex[1].Checked) {
        gênero = 'Mulher'

        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'menina.webp')
        } else if (idade < 21) {
            img.setAttribute('src', 'moça.webp')
        } else if (idade < 50)
           {  img.setAttribute ('src', 'mulher.webp')
             } else  {
                    img.setAttribute('src', 'idosa.jpeg')
             }


    }

}

res.style.textAlign = 'center'
res.innerHTML = `detectamos ${gênero} com ${idade}anos`
res.appenChild(img)

