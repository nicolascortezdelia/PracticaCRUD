//LOS IMPORT VAN SIEMPRE PRIMERO
import {campoRequerido, validarNumeros, validarURL, validarGeneral} from "./validaciones.js";

import {Producto} from "./productoClass.js"; 
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

//¡¡¡¡¡LOS ARRAYS!!!!!
//LISTA DE LOS PRODUCTOS

//let listaProductos = [];

let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];

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

formularioProducto.addEventListener("submit",guardarProducto);

//llamar a la función cargarInicial

cargaInicial();


function guardarProducto(e){
    //validar los campos del formulario
    // si los datos están bien
    //ahí recién quiero agregar o crear un producto
    e.preventDefault();

    if(validarGeneral(campoCodigo, campoProducto, campoDescripcion,campoCantidad, campoURL)){

        //agregar o crear producto
        //llamo la función crear producto
        crearProducto();
    }
}

function crearProducto(){
     
    console.log("aquí creo el producto")
    //crear el objeto{} PRODUCTO

    let productoNuevo = new Producto(campoCodigo.value, campoProducto.value, campoDescripcion.value, 
        campoCantidad.value, campoURL.value);
        
        console.log(productoNuevo);
        //GUARDAR el prodcuto creado en el Array
        listaProductos.push(productoNuevo);
        console.log(listaProductos);
        limpiarFormulario();
        // UNA VEZ HECHO TODO ESTO QUIERO ¡¡¡GUARDAR!! EN LOCAL STORAGE
        guadarLocalStorage();

        //mostrar el ALERT 
        //swal=un objeto que creó el que hizo el alert
        //fire=método
        //los otros, son 3 parámetros: título, párrafo, ícono
        Swal.fire(
            'Producto Creado',//título
            'Su producto fue creado correctamente',//párrafo descriptivo
            'success'// ícono
          )

    //CREO UNA NUEVA FILA EN LA TABLA

    crearFila(productoNuevo);

    }


    //CREAR UNA FUNCIÓN PARA LIMPIAR EL FORMULARIO
    //limpiar los value de todo el formulario

    function limpiarFormulario(){
        formularioProducto.reset();
        //limpiar las clases de bootstrap, los is-valid, is invalid
        campoCodigo.className = "form-control"
        campoProducto.className = "form-control"
        campoDescripcion.className = "form-control"
        campoCantidad.className = "form-control"
        campoURL.className = "form-control"


    }

    function guadarLocalStorage(){
        localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos))
    }

    function crearFila(paramProducto){
        let tabla = document.querySelector("#tablaProductos")
        tabla.innerHTML += `<tr>
        <th>${paramProducto.codigo}</th>
        <td>${paramProducto.producto}</td>
        <td>${paramProducto.descripcion}</td>
        <td>${paramProducto.cantidad}</td>
        <td>${paramProducto.url}</td>
        <td> <button class="btn btn-warning">Editar</button> <button class="btn btn-danger">Borrar</button> </td>
      </tr>`
    }


    function cargaInicial(){
        //preguntar si hay datos en Local Storage o en listaProductos
        //si hay datos---> que se cree la fila
        if(listaProductos.length > 0){
            //dibujar fila
            listaProductos.forEach((itemProducto)=>{crearFila(itemProducto)});
        }
    }

    function borrrTabla(){
        let tabla = document.querySelector("#tablaProductos")
        tabla.innerHTML = " "; 
    }