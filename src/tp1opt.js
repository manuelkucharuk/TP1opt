"use strict"

window.onload = ()=>{
    document.getElementById("tipoSeguro").addEventListener("change",mostrarValor)
}


function mostrarValor(){
    let valor = 0
    let opcion = document.getElementById("tipoSeguro").value

    if (opcion=="basico") 
        valor = 500
    else if (opcion=="intermedio") 
        valor = 1000
    else if (opcion=="premium")
        valor = 1500
    else valor = ""    

    document.getElementById("precioSeguro").innerHTML = "$"+valor.toString()
}