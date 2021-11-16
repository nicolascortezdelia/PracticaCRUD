export function campoRequerido(input){
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

export function validarNumeros(input){
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


export function validarURL(input){
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

export function validarGeneral(campoCodigo, campoProducto, campoDescripcion, campoCantidad, campoURL){
    
    //console.log("aqui tengo que validar todo nuevo");
    //volver a validar todos los campos
    //if (/*`pregungar si el campo codigo es correcto y el campo producto es correcto*/)

    //declaro variable alert
    //TRAIGO el alert DESDE EL HTML

    let alerta = document.querySelector("#msjAlerta");

    //PREGUNTAR SI TODOS LOS CAMPOS SON CORRECTOS 
    //Y QUE ME RETORNEN UN VALOR BOOLEANO

    if (campoRequerido(campoCodigo) && 
    campoRequerido(campoProducto)&&
    campoRequerido(campoDescripcion) &&
    validarNumeros(campoCantidad)&&
    validarURL(campoURL)){
        //console.log("sí pasó la validación");
        alerta.className = "alert alert-danger my-3 d-none";
        return true;
    }else{
        //console.log("no pasó la validación");
        
        alerta.className = "alert alert-danger my-3"; 
        return false;
    }

}