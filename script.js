"use strict";
document.addEventListener("DOMContentLoaded",azar)
let captcha= document.getElementById("captcha");
let verificador= document.getElementById("submit");
let respuesta= document.getElementById("respuesta");
verificador.addEventListener("click", validar);
let reference="";
function azar(){
    for(let i=0;i<=3;i++){
        let numero=Math.floor(Math.random()*9); 
        reference += numero;
    }
    document.getElementById("captcha").value = reference;
}
function validar(){
    if (respuesta.value == reference) {
        alert ("Formulario validado");
    }
    else {
        alert ("Captcha incorrecto");
    }
}

function agregarFila () {
    let fila = {
        "mes" : document.getElementById("mes").value,
        "alquiler" : document.getElementById("alquiler").value,
        "venta" : document.getElementById("venta").value,
        "tasacion" : document.getElementById("tasacion").value,
    }
    let tabla= document.getElementById("tabla");
        tabla.innerHTML += "<tr>" + "<td>" + fila.mes + "</td>" + "<td>"
        + fila.alquiler + "</td>" + "<td>" + fila.venta +
        "</td>" + "<td>" + fila.tasacion + "</td>" + "</tr>";
}
    function agregarTres () {
        let fila= {
            "mes" : document.getElementById("mes").value,
            "alquiler" : document.getElementById("alquiler").value,
            "venta" : document.getElementById("venta").value,
            "tasacion" : document.getElementById("tasacion").value,
        }
        let tabla= document.getElementById("tabla");                               /X3/
        tabla.innerHTML += "<tr>" + "<td>" + fila.mes + "</td>" + "<td>"
        "</td>" + "<td>" + fila.tasacion + "</td>" + "</tr>"+
        "<tr>" + "<td>" + fila.mes + "</td>" + "<td>"
        + fila.alquiler + "</td>" + "<td>" + fila.venta +
        "</td>" + "<td>" + fila.tasacion + "</td>" + "</tr>"+
        "<tr>" + "<td>" + fila.mes + "</td>" + "<td>"
        + fila.alquiler + "</td>" + "<td>" + fila.venta +
        "</td>" + "<td>" + fila.tasacion + "</td>" + "</tr>";

    }

document.querySelector("#enviar_tres").addEventListener("click", agregarTres);
document.querySelector("#enviar_fila").addEventListener("click", agregarFila);