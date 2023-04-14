let productoGlobal

/* Obtener referencia a todos los botones */
let botones = window.document.querySelectorAll("#catalogo > article > button");

/* Agregar el escucha del evento click, ejecutar la funcion */
botones.forEach(element => {
    element.addEventListener("click", agregarCarrito);
});

/* Metodo para agregar el producto al carrito */
function agregarCarrito(producto){
    /* datos del producto */    
    let tituloProducto = producto.target.parentElement.querySelector("h3");
    let precioProducto = producto.target.parentElement.querySelector("p");
    let imagenProducto = producto.target.parentElement.querySelector("picture");    

    /* Colocacion de productos en el modal */
    let modalBody = document.querySelector("#popupcart > div > div > div.modal-body");

    /* Condicional para saber si esta vacio */
    if(modalBody.querySelector("p").innerHTML == "No ha añadido ninguna compra"){
        modalBody.innerHTML = "";
    }

    modalBody.innerHTML += "<h3>"+tituloProducto.innerHTML+"</h3><p>"+precioProducto.innerHTML+"</p>";

    /* Avisar al cliente que se agrego al carrito */
    alert("Un producto fue añadido al carrito");
}