//Saludo inicio

let customerName = prompt("Hola! ¿Como te llamas?");
alert("Biendevido/a " + customerName);


function quieroComprar() {
    let productoelegido = prompt(`${customerName}, si quieres comprar un jean escriba: Jean, si quiere una remera escriba: Remera`)
    switch (productoelegido) {
        case "Jean":
            console.log("Pantallon se añdio al carrito")
            alert(`¡Gracias por tu compra ${customerName}!`)
            break;
        case "Remera":
            console.log("Remera se añadio al carrito")
            alert(`¡Gracias por tu compra ${customerName}!`)
            break;
        default:
            console.warn("No se encontroel producto elegido")
            alert(`¡No se puedo encontrar el producto que elegiste ${customerName}!`)
    }


}
