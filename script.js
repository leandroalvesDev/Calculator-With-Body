function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    if (numero.length < 10) {
        document.getElementById('resultado').innerHTML = numero + num;
    }
}
function limpar (){
    document.getElementById('resultado').innerHTML = ""
}

function retroceder () {
    var numero = document.getElementById ('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero.substring(0, numero.length - 1)
}

function calcular (){
    var numero = document.getElementById ('resultado').innerHTML
    document.getElementById('resultado').innerHTML = eval(numero)
}