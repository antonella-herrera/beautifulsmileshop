const carrito = []


function quieroComprar() {
    if (carrito.length <= 3) {
        let productoElegido = prompt(`Si quieres comprar un jean escriba: Jean, si quiere una remera escriba: Remera`)
        if (productoElegido == "Jean") {
            carrito.push(pantalonInquita.nombre);
            descuentoDeJean("Jean")
            alert(`Este producto tiene un %20 de descuento, entonces vale ${pantalonInquitaConDescuento}`)
            console.log(`${pantalonInquita.nombre} fue agregado al carrito ($${pantalonInquitaConDescuento})`)
        } 
        else if (productoElegido == "Remera") {
            carrito.push(remerasCartoon.nombre);
            console.log(`${remerasCartoon.nombre} fue agregado al carrito ($${remerasCartoon.precio})`);
            alert(`Se eligio Remera, el cual tiene un precio de $${remerasCartoon.precio}`)
            seguirComprando()
        } else {
            alert(`El producto elegido no fue encontrado`)
        }
    } else {
        carritoLleno();
    }
}
