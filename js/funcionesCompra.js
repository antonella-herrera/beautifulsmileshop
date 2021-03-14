function carritoLleno() {
    alert(`¡SU CARRITO ESTA LLENO! Estos son sus productos: ${carrito.toString()}`);
    console.warn("El carrito esta lleno");
    console.info(`en el carrito se encuentra ${carrito.toString()}`);
}

function seguirComprando() {
    if( carrito.length <=3){
        let siQuierocomprar = window.confirm(`¿Queres seguir comprando?`);
        if (siQuierocomprar == true) {
            quieroComprar()
        } else {
            alert(`¡Gracias por tu compra, en el carrto actualmente se encuentran los productos: ${carrito.toString()}!`)
        }
    }else{
        carritoLleno();
    }
}
