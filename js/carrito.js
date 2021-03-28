class CarritoDeCompras {
    constructor() {
        carrito = []
        let total = 0
    }
}

const CARRITO = []


 //añadir al carrito
function añadirAlCarrito(id) {
    let r = PRODUCTOS.find(p => p.productoid == id);
    CARRITO.push(r);
    localStorage.setItem(r.nombre, r.precio);
    cargaAlCarrito()
}



 //Boton para finaliz la compra
const botonComprar = document.getElementById("botonComprar");

botonComprar.addEventListener("click",finalizarCompra)
botonComprar.classList.add("buttonRosas")

function finalizarCompra() {
    CARRITO.splice(0, CARRITO.length)
    localStorage.clear()}

 //Tabla de carrito
const tablaCarrito = document.getElementById("tablaCarrito")

function cargaAlCarrito() {
    for (productosCarrito of CARRITO) {
        let fila = `<tr>
                            <td>${productosCarrito.nombre}</td>
                            <td>$ ${productosCarrito.precio}</td>
                        </tr>`
        tablaCarrito.innerHTML += fila
    }
}

