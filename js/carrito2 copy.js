
//Carrito
class Favoritos{
    constructor(){
        this.favorito = []
    } 
    añadirAFavoritos(id) {
        let r = PRODUCTOS.find(p => p.productoid == id);
        this.favorito.push(r);
        localStorage.setItem('favorito', JSON.stringify(this.favorito));
    }
}



//se crea el carrito y el total
let FAVORITOS = new Favoritos()
let total= 0

//se recupera el carrito
const recuperoFavoritos = () => { 
    if (localStorage.carrito != undefined) {
        FAVORITOS.favorito = JSON.parse(localStorage.favorito)
    }
}

//Se crea la lista del carrito
$(document).ready(()=>{
            recuperoCarrito()
            if (localStorage.carrito){
                armarTablaCarrito()
                calcularTotal()
            }else{
                carritoVacio()

            }     
    });

// ARMADO DE FAV
    function armarfavoritos(){
        $('#carrito').append(`
        <div id="favoritos" style="display: none">
        </div>
    `)
    }

function mostrarfavoritos(){
    for(prductosCarrito of CARRITO.carrito){
                    $('#favoritos').append(`<tr>
                    <td><img src="imagenes/productos/${prductosCarrito.imagen}" class="imagenesChicas" alt=" ${prductosCarrito.nombre}"></td>
                    <td>${prductosCarrito.nombre}</td>
                    <td>$${prductosCarrito.precio}</td>
                </tr>`);
                }}

//Fav VACIO
function carritoVacio(){
    $('#favoritos').append(`<div id ="favoritosVacio" class="d-flex flex-column justify-content-center align-items-center" style="display: none">
<h2>Lo sentinos, no tienes fovoritos</h2>
<a href="tienda.html"><button>Volver a la tienda</button></a>
</div>`)
};$('#favoritosVacio').fadeIn(2000)





