//LOS IMPORT VAN SIEMPRE PRIMERO
import {campoRequerido, validarNumeros, validarURL, validarGeneral} from "./validaciones.js";

import {Producto} from "./productoClass.js"; 
//traer el input 
//agregar eventos a los elementos del formulario

let campoCodigo = document.querySelector("#codigoID");
console.log(campoCodigo)

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
//clase 29/11/21 9.59 hs
let productoExistente = false;//si productoExistente = false, es porque quiero CREAR un producto
let btnAgregar = document.querySelector("#btnAgregar")

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
btnAgregar.addEventListener("click", limpiarFormulario);

//llamar a la función cargarInicial

cargaInicial();

//clase 15/11/21 11.10 hs
function guardarProducto(e){
    //validar los campos del formulario
    // si los datos están bien
    //ahí recién quiero agregar o crear un producto
    e.preventDefault();

    if(validarGeneral(campoCodigo, campoProducto, campoDescripcion,campoCantidad, campoURL)){
        if( productoExistente == false){
             //caso 1: Presiono guardar y SE CREA un producto  //agregar o crear producto
        //llamo la función crear producto
             
        crearProducto();

        }else{
            
        //caso 2:
        //clase 29/11/21 9.56
        modificarProducto();



        }
      

       

        
    }
}

//clase 15/11/21 10.26hs
function crearProducto(){
     
    console.log("aquí creo el producto")
    //crear el objeto{} PRODUCTO

    //clase 17/11/21 10.13 hs
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

        //limpiar variable booleanda
        productoExistente = false;


    }

    //Clase del 17/11/21 10.32 hs
    function guadarLocalStorage(){
        localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos))
    }

    //clase 24/11/21 10.00 hs
    function crearFila(paramProducto){
        let tabla = document.querySelector("#tablaProductos")
        tabla.innerHTML += `<tr>
        <th>${paramProducto.codigo}</th>
        <td>${paramProducto.producto}</td>
        <td>${paramProducto.descripcion}</td>
        <td>${paramProducto.cantidad}</td>
        <td>${paramProducto.url}</td>
        <td> <button class="btn btn-warning" onclick="prepararEdicionProducto(${paramProducto.codigo})">Editar</button>
         <button class="btn btn-danger" onclick="borrarProducto(${paramProducto.codigo})">Borrar</button> </td>
      </tr>`
    }

    //clase 24/11/21 10.20 hs
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

   window.prepararEdicionProducto = function (codigoParametro) {
        
        console.log(codigoParametro)
        //esta funcion
        //tiene que OBTENER el objeto a modificar
        let productoBuscado = listaProductos.find((itemProducto)=>{return itemProducto.codigo == codigoParametro})
        console.log(productoBuscado);

        //mostrar los datos en el form

        campoCodigo.value = productoBuscado.codigo;
        campoProducto.value = productoBuscado.producto;
        campoDescripcion.value = productoBuscado.descripcion;
        campoCantidad.value = productoBuscado.cantidad;
        campoURL.value = productoBuscado.url;
        //clase 29/11/21 10.02 hs
        ///aquí modifico la variable boolean
        productoExistente = true;

    }

    //clase 29/11/21 9.56
    function modificarProducto(){
        console.log("aquí quiero modificar este producto");
        //buscar la posición de mi producto dentro del arreglo
        let posicionDelProducto = listaProductos.findIndex((itemProducto)=>{return itemProducto.codigo == campoCodigo.value});
        console.log(posicionDelProducto)

        //modificar los datos del producto dentro del arreglo
        listaProductos[posicionDelProducto].producto = campoProducto.value;
        listaProductos[posicionDelProducto].descripcion = campoDescripcion.value;
        listaProductos[posicionDelProducto].cantidad = campoCantidad.value;
        listaProductos[posicionDelProducto].url = campoURL.value;
        console.log(listaProductos);  
        //actualizar los datos del Local Storage
        guadarLocalStorage();

        //mostrar un cartel al usuario diciendo que se modificó correctamente
        Swal.fire(
            'Producto Modificado',//título
            'Su producto fue modificado correctamente',//párrafo descriptivo
            'success'// ícono
          )

        //limpiar los datos del formulario
        limpiarFormulario();

        //que se actualice en la tabla
        //1ºborrar todo lo que hay en la tabla
        borrrTabla();

        //2ºvolver a dibujar la fila
        listaProductos.forEach((itemProducto)=>{crearFila(itemProducto)});

    }

    window.borrarProducto = function (codigoParaMetro){
        console.log(codigoParaMetro);
        //borro el producto del arreglo
        let arregloProductoBorrado = listaProductos.filter((itemProducto)=>{return itemProducto.codigo != codigoParaMetro})
        console.log(arregloProductoBorrado);

        //actualizar del local storage
        //actualizo el arreglo original
        listaProductos = arregloProductoBorrado;
        guadarLocalStorage();

        //actualizar los datos de la tabla
        borrrTabla()

        listaProductos.forEach((itemProducto)=>{crearFila(itemProducto)});

        Swal.fire(
            'Producto Eliminado',//título
            'Su producto fue eliminado correctamente',//párrafo descriptivo
            'success'// ícono
          )

    }




