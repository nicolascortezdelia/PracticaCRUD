//traer los datos del local storage
//es decir, traer el array [] con los objetos

let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];

listaProductos.forEach((producto)=>{crearCard(producto)})

function crearCard(produdctoMaquetado){
    let grilla = document.querySelector("#grillaPrincipal");

    grilla.innerHTML += ` <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
    <div class="card">
        <img src="${produdctoMaquetado.url}" class="card-img-top" alt="${produdctoMaquetado.producto}">
        <div class="card-body">
          <h5 class="card-title">${produdctoMaquetado.producto}</h5>
          <p class="card-text">${produdctoMaquetado.descripcion}
          ${produdctoMaquetado.cantidad}
          </p>
        </div>
      </div>
    </div>
    
  </div>`

    
}

//traer el input del buscador
let inputBuscador = document.querySelector("#idBuscador");
//console.log(inputBuscador);

//función de buscador

//creo un array donde se guarden los productos que pasen por el metodo filter
/*nombre_array.filter((condicion) => { condicion.categoria == 'lo que pusiste en el input';});*/ 

//let productoBuscado = listaProductos.filter((objetoProducto)=>{return objetoProducto.codigo == idBuscador.value});
//console.log(productoBuscado)

let formularioBuscador  = document.getElementById('BuscarForm');
formularioBuscador.addEventListener("submit", buscarProducto);

function buscarProducto(e){
  e.preventDefault();
  console.log("hasta aquí va la función que crea productos")

  let productoBuscado = listaProductos.filter((objetoProducto)=>{return objetoProducto.codigo == idBuscador.value || objetoProducto.producto == idBuscador.value});
console.log(productoBuscado)


}

/*form.addEventListener('submit', (event) => {
  const buscar = form.elements['idBuscador'].value;
  const resultado = example.filter((value) => {
    return value.producto == buscar; 
  });
  document.getElementById("Resultado").innerHTML = resultado[0].producto;
  event.preventDefault();
});*/

/*formularioProducto.addEventListener("submit",guardarProducto);


//clase 15/11/21 11.10 hs
function guardarProducto(e){
   
    e.preventDefault();*/




/*[18:44, 9/12/2021] Gustavo Cortez: en index.html, fijate de agregar "id" al form cambiar button por input type="submit"
[18:44, 9/12/2021] Gustavo Cortez: <form class="my-3" id="BuscarForm">

            <input class="form-control form-control-lg my-2" type="text" placeholder="Ingrese el nombre del Producto"  aria-label=".form-control-lg example" id="idBuscador" name="idBuscador">
            <input type="submit" class="btn btn-secondary" value="Buscar">
[18:45, 9/12/2021] Gustavo Cortez: 

Después en el archivo app.js, hice un array de ejemplo solo para probar, pero sería del mismo formato que los productos
[18:45, 9/12/2021] Gustavo Cortez: 
const example = []
for(let i = 0; i<= 20; i++) {
  example.push({
    codigo: i,
    producto: i + 'Hola',
    Categoria: 'Categoria'
  });
}
Esto es solo ejemplo

[18:45, 9/12/2021] Gustavo Cortez: Y esta es la parte importante que utiliza el "filter"

[18:45, 9/12/2021] Gustavo Cortez: 

const form  = document.getElementById('BuscarForm');

form.addEventListener('submit', (event) => {
  const buscar = form.elements['idBuscador'].value;
  const resultado = example.filter((value) => {
    return value.producto == buscar; 
  });
  document.getElementById("Resultado").innerHTML = resultado[0].producto;
  event.preventDefault();
});

[18:46, 9/12/2021] Gustavo Cortez: Lo cambie en mi computadora, y lo pruebo local, no hice push ni nada, sino va a aparecer mi nombre, por eso te pego el código
[18:46, 9/12/2021] Nicolás: Ahhh genial genial
[18:47, 9/12/2021] Nicolás: A ver ya lo pruebo
[18:48, 9/12/2021] Gustavo Cortez: algo así te debería salir, yo puse. Al resultado "innerHtml" lo tendrás que cambiar, porque devuelve un array, tendrás que recorrer el array para mostrar el resultado*/ 