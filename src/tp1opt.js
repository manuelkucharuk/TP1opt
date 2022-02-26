"use strict"

function mostrarValor(){
    var valor = 0
    var opcion = document.getElementById("tipoSeguro").value
    console.log(opcion)
    if (opcion=="basico") valor = 500
    else if (opcion=="intermedio") valor = 1000
    else if (opcion=="premium") valor = 1500
    document.getElementById("precioSeguro").innerHTML = "$"+valor.toString()
}