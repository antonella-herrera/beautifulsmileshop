// class CarritoDeCompras {
//     constructor() {
//         carrito = []
//         let total = 0
//     }
// }

CARRITO = []

function añadirAlCarrito(id) {
    let r = PRODUCTOS.find(p => p.productoid == id);
    CARRITO.push(r);
    localStorage.setItem(r.nombre, r.precio);
    cargaAlCarrito()
}

function borraDelCarrito(id) {
    let r = PRODUCTOS.find(p => p.productoid == id);
    CARRITO.remove(r);
    localStorage.removeItem(r.nombre);
    cargaAlCarrito()
}

//Boton para finaliz la compra

$('#botonFinalizaCompra').on("click", function() {
    CARRITO=[]
    localStorage.clear()
    cargaAlCarrito()
        }
        );

//Tabla de carrito
const tablaCarrito = document.getElementById("tablaCarrito")
function cargaAlCarrito() {
    for(let i=0; i< localStorage.length; i++){
        let clave = localStorage.key(i);
        let fila =`<tr>
        <td>${clave}</td>
        <td>$ ${localStorage.getItem(clave)}</td>
    </tr>`
    tablaCarrito.innerHTML += fila
    }
}

