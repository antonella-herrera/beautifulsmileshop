//Favoritos
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



//se crea favoritos
let FAVORITOS = new Favoritos()


//se recupera el favortitos
const recuperoFavoritos = () => { 
    if (localStorage.favorito != undefined) {
        FAVORITOS.favorito = JSON.parse(localStorage.favorito)
    }
}

//Se crea la lista del carrito
$(document).ready(()=>{
            recuperoFavoritos()
            if (localStorage.carrito){
                armarfavoritos()
                mostrarfavoritos()
            }else{
                favoritoVacio()
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
    for(prductosFavoritos of FAVORITOS.favorito){
                    $('#favoritos').append(
                                         //creacion de tarjetas favoritos
                `<div class="col-4 card-product"> 
                <img src="imagenes/productos/${prductosFavoritos.imagen}" class="img-fluid imgGrandes" alt="${prductosFavoritos.nombre}">
                <h4>${prductosFavoritos.nombre}</h4>
                <p>$${prductosFavoritos.precio}</p>
                <div class="d-flex justify-content-around">
                <button onclick="CARRITO.añadirAlCarrito(${prductosFavoritos.productoid})" class="botonesChicos"><img src="imagenes/logoseiconos/precio.svg" alt="boton compra" class= "img-fluid"></button>

                </div>
            </div>`);
            $("#favoritos").fadeIn(2000)
                    ;
                }}
                

//favoritos Vacio
function favoritoVacio(){
    $('#favoritos').append(`<div id ="favoritosVacio" class="d-flex flex-column justify-content-center align-items-center" style="display: none">
<h2>Lo sentinos, no tiene productos favoritos</h2>
<a href="tienda.html"><button>Volver a la tienda</button></a>
</div>`)
};$('#favoritosVacio').fadeIn(2000)
