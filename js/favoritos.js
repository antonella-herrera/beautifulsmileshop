//favoritos
class Favoritos{
    constructor(){
        this.favorito = []
        let total = 0
    } 
    añadirAlCarrito(id) {
        let r = PRODUCTOS.find(p => p.productoid == id);
        this.favorito.push(r);
        localStorage.setItem('carrito', JSON.stringify(this.favorito));
    }
}

let favoritos = new Favoritos()