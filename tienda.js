var correo = document.getElementById("correo");
var contraseña  = document.getElementById("contraseña");

var nombre_input  = document.getElementById("nombre");
var numero_input  = document.getElementById("numero");
var producto_input  = document.getElementById("producto");
var fecha_input  = document.getElementById("fecha");

var txt__register = document.querySelector('inputB');
var txt__confirmación = document.querySelector('inputC');

var register = document.getElementById("register__submit");
register.addEventListener("click", verificación, true);

var compra = document.getElementById("product__submit");
compra.addEventListener("click", text, true);


let i = 0;

var Base_de_datos = [
    usuario = {
        nombre : "adrián", 
        email : "casaspedro113@gmail.com",
        password : "12345"
    },
    usuario = {
        nombre : "Mendoza", 
        email : "Mendoza@gmail.com",
        password : "54321"
    },
    usuario = {
        nombre : "Juan_Carlos", 
        email : "Juan_Carlos@gmail.com",
        password : "32145"
    }
]

let Id = 0;
var largo = Base_de_datos.length-1;

function verificación () {
    i = i-i;
    while (i <= largo) {
        if (correo.value === Base_de_datos[0+i].email) {
            verificación_correo = true;
            Id = i;
        } 
        else {
            correo.placeholder = "correo no valido" 
        }
        i++;
    }
    
    i = i-i;
    while (i <= largo) {
        if (contraseña.value === Base_de_datos[0+i].password) {
            verificación_contraseña = true;
            Id = i;
        } 
        else {
            contraseña.placeholder = "contraseña no valido" 
        }
        i++;
    }
    if (verificación_correo === true && verificación_contraseña === true) {
        nombre_text =Base_de_datos[0+Id].nombre;
        txt__register.textContent = "hola " + nombre_text + " vienvendido "  + " a nuesta tienda online";
        // txt.textContent = "hola " + nombre_text.bold() + " vienvendido "  + " a nuesta tienda online";  
    }
    else {
        correo.value = "";
        contraseña.value = "";
        correo.placeholder = "correo no valido";
        contraseña.placeholder = "contraseña no valido"; 
        // txt.textContent = "Si no tienes una cuenta te puedes registrar en aqui";
    }
}

let intruciones = "no hay";

function text() {
    var nombre_input__value = nombre_input.value;
    var producto_input__value = producto_input.value;
    var fecha_input__value = fecha_input.value;
    var numero_input__value = numero_input.value;

    intruciones = "el cliente " + nombre_input__value + 
    " recojera el producto " + producto_input__value + 
    " en esta fecha y hora " + fecha_input__value + 
    " numero de contacto: " + numero_input__value;

    txt__confirmación.textContent = "hola " + nombre_input__value + " su solicitud fue envida con exito " +
    "la fecha y hora de recojer sus " + producto_input__value + " es: " + fecha_input__value;
    return intruciones;
}