var agora = new Date()

var horas = agora.getHours() // pega o horario atual que esta no seu pc
console.log(`agora são exatamente '${horas}' horas`)


if(horas < 12) {
    console.log('bom dia !')
} else if (horas <=18)  {
    console.log('boa tarde!')
} else{ 
    {console.log('boa noite!')}
}