const PRODUCTOS = [
    {"nombre":"Pantalon Inquita", "precio": 1900, "productoid": 105, "imagen" : "pantalon.jpg"},
    {"nombre": "Pantalon BS", "precio": 1200, "productoid": 107, "imagen" : "pantalon.jpg"},
    {"nombre":"Pantalon Reina Divina", "precio": 1900, "productoid": 108, "imagen" : "pantalon.jpg"},
    {"nombre":"Remera Cartoon", "precio": 800, "productoid": 231,"imagen": "remera.jpg"},
    {"nombre":"Remera BS", "precio": 595, "productoid": 1232, "imagen": "remera.jpg"},
    {"nombre":"Remera Frase", "precio": 700, "productoid": 234, "imagen": "remera.jpg"},
]


const listadoProductos = document.getElementById("listadoProductos")

//CARGAR PRODUCTOS
function cargarProdcutos(){
    for (productolistado of PRODUCTOS) {
        let columna =                `<div class="col-4 card-product"> 
        <img src="../imagenes/productos/${productolistado.imagen}" alt="${productolistado.nombre}" class= "img-fluid imgGrandes">
        <h4>${productolistado.nombre}</h4>
        <p>$${productolistado.precio}</p>
        <div class="d-flex justify-content-around">
        <button onclick="añadirAlCarrito(${productolistado.productoid})" class="botonesChicos"><img src="../imagenes/logoseiconos/precio.svg" alt="boton compra" class= "img-fluid"></button>
        <button onclick="añadirFavoritos(${productolistado.productoid})" class="botonesChicos"><img src="../imagenes/logoseiconos/estrella.svg" alt="boton añadir a favoritos" class= "img-fluid"></button>
        </div>
        </div>`
                listadoProductos.innerHTML += columna
    }
}

cargarProdcutos()


