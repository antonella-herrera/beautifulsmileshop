
//Carrito
class carritoDeCompras{
    constructor(){
        this.carrito = []
    } 
    añadirAlCarrito(id) {
        let r = PRODUCTOS.find(p => p.productoid == id);
        this.carrito.push(r);
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }

}



//se crea el carrito y el total
let CARRITO = new carritoDeCompras()
let total= 0
//calcular total
function calcularTotal(){ let total= 0
    for(let carritototal of CARRITO.carrito){total+= carritototal.precio}
    return total}

//se recupera el carrito
const recuperoCarrito = () => { 
    if (localStorage.carrito != undefined) {
        CARRITO.carrito = JSON.parse(localStorage.carrito)
    }
}

//Se crea la lista del carrito
$(document).ready(()=>{
            recuperoCarrito()
            if (localStorage.carrito){
                armarTablaCarrito()
                
            }else{
                carritoVacio()

            }     
    });

// ARMADO DEL CARRITO
    function armarTablaCarrito(){
        $('#carrito').append(`
        <div id="tabla" style="display: none">
        <div class="d-flex justify-content-center" >
        <img src="imagenes/logoseiconos/carretilla.svg" class="imagenesChicas" alt="carrito">
        <h2>Carrito</h2>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <td>Producto</td>
                    <td>Precio</td>
                </tr>
            </thead>
            <tbody id="tablaCarrito">
            </tbody>
        </table>
        <div class="d-flex justify-content-between">
        <p>Total:</p>
        <p>${calcularTotal()}</p>
        </div>
        <button onclick="finalizaCompra()" class="botonesChicos">Finalizar compra</button>
        </div>`)
        mostrarCariito()
        $('#tabla').fadeIn(2000);
    }

function mostrarCariito(){
    for(prductosCarrito of CARRITO.carrito){
                    $('#tablaCarrito').append(`<tr>
                    <td><img src="imagenes/productos/${prductosCarrito.imagen}" class="imagenesChicas" alt=" ${prductosCarrito.nombre}"></td>
                    <td>${prductosCarrito.nombre}</td>
                    <td>$${prductosCarrito.precio}</td>
                </tr>`);
                }}

//CARRITO VACIO
function carritoVacio(){
    $('#carrito').append(`<div id ="carritoVacio" class="d-flex flex-column justify-content-center align-items-center" style="display: none">
<h2>Lo sentinos, tu carrito esta vacio</h2>
<a href="tienda.html"><button>Volver a la tienda</button></a>
</div>`)
};$('#carritoVacio').fadeIn(2000)

function graciasPorTuCompra(){
    $('body').append(`<secction>
    <div class="d-flex flex-column justify-content-center align-items-center">
    <h2>Gracias por tu compra</h2>
    <a href="index.html"><button >Volver al incio</button></a> 
    </div>
    </secction>`)
}
// finlizar compra
function finalizaCompra() {
    CARRITO.carrito=[]
    localStorage.clear()
    $('#carrito').fadeOut(2000)
    graciasPorTuCompra()

}
;



