function campoRequerido(input){
    //console.log("desde la funcion campo requerido")
    //console.log(input)
    if(input.value.trim().length > 0){
        console.log("pasó la validación")
    }else{
        console.log("no pasó la validación")
    }
}

//traer el input 
//agregar eventos a los elementos del formulario

let campoCodigo = document.querySelector("#codigoID");
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




