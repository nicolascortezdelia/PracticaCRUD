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

campoCodigo.addEventListener("blur", () =>{campoRequerido (campoCodigo)});
//cuando se haga el blur que se ejecute la función campoRequerido




