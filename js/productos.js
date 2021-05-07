const PRODUCTOSJSON = "productos.json"
let PRODUCTOS =[]

$(document).ready(()=>{
    $.getJSON("js/productos.json", function(respuesta,estado){
        if (estado==="success"){
            PRODUCTOS = respuesta;
            for (productolistado of PRODUCTOS) {
                $("#listadoProductos").append(
                 //creacion de tarjetas
                `<div class="col-4 card-product"> 
                    <img src="imagenes/productos/${productolistado.imagen}" class="img-fluid imgGrandes" alt="${productolistado.nombre}">
                    <h4>${productolistado.nombre}</h4>
                    <p>$${productolistado.precio}</p>
                    <div class="d-flex justify-content-around">
                    <button onclick="CARRITO.añadirAlCarrito(${productolistado.productoid})" class="botonesChicos"><img src="imagenes/logoseiconos/precio.svg" alt="boton compra" class= "img-fluid"></button>
                    <button onclick="FAVORITOS.añadirAFavoritos(${productolistado.productoid})" class="botonesChicos"><img src="imagenes/logoseiconos/estrella.svg" alt="boton añadir a favoritos" class= "img-fluid"></button>
                    </div>
                </div>`);
                $("#listadoProductos").fadeIn(2000)

            }
        }
    
    })
})

