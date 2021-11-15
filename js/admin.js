function campoRequerido(input){
    //console.log("desde la funcion campo requerido")
    //console.log(input)
    if(input.value.trim().length > 0){
        //console.log("pasó la validación")
        input.className = "form-control is-valid";
        return true;
    }else{
        //console.log("no pasó la validación")
        input.className = "form-control is-invalid";
        return false;
    }
}

//!!!!!!EXPRESIONES REGULARES!!!!!!!!

function validarNumeros(input){
//1.- crear una EXPRESIÓN REGULAR
let patron = /^[0-9]{1,3}$/;
//probar que la Expresión regular funcione
if(patron.test(input.value)){
    //si cumple la expresión regular
    input.className = "form-control is-valid";
    return true;
}else{
//si NO SE CUMPLE la expresión regular
input.className = "form-control is-invalid";
return false;
}




}


function validarURL(input){
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

    if(patron.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    }else{
    //si NO SE CUMPLE la expresión regular
    input.className = "form-control is-invalid";
    return false;
    }
}

//FUNCION PARA TRAER EL EVENTO SUBMIT
//y para VALIDAR TODO AL FINAL

function validarGeneral(e){
    e.preventDefault();
    //console.log("aqui tengo que validar todo nuevo");
    //volver a validar todos los campos
    //if (/*`pregungar si el campo codigo es correcto y el campo producto es correcto*/)

    //declaro variable alert

    let alerta = document.querySelector("#msjAlerta");

    if (campoRequerido(campoCodigo) && 
    campoRequerido(campoProducto)&&
    campoRequerido(campoDescripcion) &&
    validarNumeros(campoCantidad)&&
    validarURL(campoURL)){
        //console.log("sí pasó la validación");
        alerta.className = "alert alert-danger my-3 d-none"; 
    }else{
        //console.log("no pasó la validación");
        
        alerta.className = "alert alert-danger my-3"; 
    }

}



//traer el input 
//agregar eventos a los elementos del formulario

let campoCodigo = document.querySelector("#codigoID");


///TRAER EL <INPUT> DEL PRODUCTO
let campoProducto = document.querySelector("#producto");

let campoDescripcion = document.querySelector("#descripcion");
let campoCantidad = document.querySelector("#cantidad")
let campoURL = document.querySelector("#url")

//TRAER EL <FORMULARIO>
let formularioProducto = document.querySelector("#formProducto")

//console.log(campoCodigo)

//MANEJADORES DE EVENTO
//para AGREGAR el evento al campo
//con esto digo: al <input> -campocodigo- le quiero agregar un evento
//me pide DOS PARÁMETROS
//parámetro 1: ¿qué evento quiero agregar? R: el BLUR -sin el ON porque no lo traigo desde el HTML-
//parámetro 2: ¿qué quiero asociar cuando se produzca el evento BLUR...
//...en el input? r: EL NOMBRE DE LA FUNCIÓN o sea campoRequerido

campoCodigo.addEventListener("blur", () =>{campoRequerido (campoCodigo)});
//cuando se haga el blur que se ejecute la función campoRequerido


campoProducto.addEventListener("blur", () =>{campoRequerido (campoProducto)});

campoDescripcion.addEventListener("blur", () =>{campoRequerido (campoDescripcion)});

campoCantidad.addEventListener("blur", () =>{validarNumeros (campoCantidad)});

campoURL.addEventListener("blur", () =>{validarURL (campoURL)});

formularioProducto.addEventListener("submit",validarGeneral);



