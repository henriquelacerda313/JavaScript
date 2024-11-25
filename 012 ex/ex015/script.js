function verificar () {
 
    var data  = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) { window.alert('[ERRO] Verifique os dados e tente novamente')}

    // Operador || OU OR - Este operador retorna verdadeiro se pelo menos um dos operandos for verdadeiro. Se ambos os operandos forem falsos, então o resultado será falso. 
}