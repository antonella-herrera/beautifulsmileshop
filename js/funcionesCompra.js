function carritoLleno() {
    alert(`¡SU CARRITO ESTA LLENO! Estos son sus productos: ${carrito.toString()} y el total de su compra es {sumaTotal}`);
    console.warn("El carrito esta lleno");
    console.info(`en el carrito se encuentra ${carrito[0]}, y el total de la compra es ${sumaTotal}`);
}

function seguirComprando() {
    if( carrito.length<=3){
        let siQuieroComprar= window.confirm('¿Quieres seguir comprando?');
        if(siQuieroComprar=true){
            quieroComprar()
        }else{
            if(carrito.length=1){
                alert(`¡Gracias por tu compra! Tiene un producto en el carrito: ${carrito[0]}`);
               console.info(`en el carrito se encuentra ${carrito[0]}`);
            }else{
                alert(`¡Gracias por tu compra! Estos son sus productos: ${carrito.toString()}`);
            }
        }
    }else{
        carritoLleno();
    }
}
