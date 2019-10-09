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
document.querySelector("#enviar_tres").addEventListener("click", agregarTres);
document.querySelector("#enviar_fila").addEventListener("click", agregarFila)