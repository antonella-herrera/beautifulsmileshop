class Productos{
    constructor(nombre,precio,codigo){
        this.nombre= nombre;
        this.precio= parseFloat(precio);
        this.codigo = `bsi${codigo}`
    }
    infoDelProducto(){
    alert (this.info = `${this.nombre} (${this.codigo}) vale $${this.precio} `) 
    }
}

const pantalonInquita = new Productos("Pantalon Inquita",1900, 105)
const remerasCartoon = new Productos ("Remera Cartoon", 595, 106)

function mostrarInfodelproductor(productoseleccionado){
    if (productoseleccionado="jeanInquita"){
    pantalonInquita.infoDelProducto()
    } else if(productoseleccionado="remeraCartoon"){
    remerasCartoon.infoDelProducto();
    }else{
        alert("No es un producto en el sistema")
    }
    
}

let pantalonInquitaConDescuento
function descuentoDeJean(productocConDescuento){
    if(productocConDescuento="Jean"){
       pantalonInquitaConDescuento = pantalonInquita.precio * 0.80
    }else{
        alert("Este articulo no tiene descuento")
    }

}

