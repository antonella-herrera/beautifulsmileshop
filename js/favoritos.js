//favoritos
const listadoFavoritos = document.getElementById("listadoFavoritos")

function listarFavoritos(){
    debugger
    for(let i=0; i< localStorage.length; i++){
        let clave = localStorage.key(i);
        let filaFavoritos = `<tr>
                                <td>${clave}</td>
                                <td>$ ${localStorage.getItem(clave)}</td>
                            </tr>`

                            listadoFavoritos.innerHTML += filaFavoritos
    }
}

function añadirFavoritos(idfav){
    let r = PRODUCTOS.find(p => p.productoid == idfav);
    localStorage.setItem(r.nombre, r.precio);
    listarFavoritos()
}