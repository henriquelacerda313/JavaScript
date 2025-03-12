function verificar () { 
 
    var data  = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) 
        
        { window.alert('[ERRO] Verifique os dados e tente novamente')}

        else {

            var fsex = document.getElementsByName('radsex')

            var idade = ano - Number(fano.value)

            var gênero = ''

            var img = document.createElement('img') // outra maneira de inserir imagens alem do img do HMTL

            img.setAttribute('id', 'foto')

            if (fsex[0].checked) {
                gênero = 'Homem'

                if(idade >= 0 && idade <= 11) {img.setAttribute('src', 'menino.jpg')} //criança 

                else if(idade < 21) {img.setAttribute('src', 'rapaz.webp')} // jovem

                else if (idade < 50) {img.setAttribute('src', 'homem.webp')} // adulto

                else{img.setAttribute('src', 'idoso.webp')}

               
            }

            else if (fsex[1].checked) {
                gênero = 'Mulher'

                if(idade >= 0 && idade <11) {img.setAttribute('src', 'menina.webp')} //criança 

                else if(idade < 21) {img.setAttribute('src', 'moça.webp')} // jovem

                else if (idade < 50) {img.setAttribute('src', 'mulher.webp')} // adulto

                else{img.setAttribute('src', 'idosa.jpeg')}

                

            }

            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos `
            res.appendChild(img)  // as imagens funcionam com esse comando
            



        }

   


}