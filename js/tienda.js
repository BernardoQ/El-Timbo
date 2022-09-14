let productos = [
    {"name": "Chorizo clasico", "price": 550, "id":"prod1"},
    {"name": "Chorizo ahumado", "price": 550, "id":"prod2"},
    {"name": "Chorizo queso azul", "price": 550, "id":"prod3"},
    {"name": "Chorizo morrones", "price": 550, "id":"prod4"},
    {"name": "Pernil pequeño", "price": 3550, "id":"prod5"},
    {"name": "Pernil mediano", "price": 4550, "id":"prod6"},
    {"name": "Pernil grande", "price": 5550, "id":"prod7"},
    {"name": "Salame picado grueso", "price": 850, "id":"prod8"},
    {"name": "Salame picado fino", "price": 850, "id":"prod9"}
];

let carrito = [];
const precio = [];
const cantidad = [];
const total = [];
const noHayProd = document.getElementById("noHayProd");
const tBody = document.getElementById("carrito_tr");

function nombreProducto(){
    for (const key in productos) {
        if (Object.hasOwnProperty.call(productos, key)) {
            const element = productos[key];
            console.log(element.name);            
        }        
    }    
};
nombreProducto();

function precioProducto(){
    for (const key in productos) {
        if (Object.hasOwnProperty.call(productos, key)) {
            const element = productos[key];
            console.log(element.price);            
        }        
    }    
};
precioProducto();

function idProducto(){
    for (const key in productos) {
        if (Object.hasOwnProperty.call(productos, key)) {
            const element = productos[key];
            console.log(element.id);            
        }        
    }    
};
idProducto();


//FUNCION CAPTURAR CLICK PRODUCTOS EN CARRITO
function  agregarFuncionBoton(){
    document.querySelectorAll(".click").forEach(el => {
    el.addEventListener("click", element => {    
    const id = element.target.getAttribute("id");    
            
        for(let i=0; i < productos.length; i++){
            if(productos[i].id == id){
                //carrito.push(productos[i].name + " $" + productos[i].price);
                carrito.push(productos[i].name)
                precio.push(" $" + productos[i].price)
                pintarCarro();
                }
            };
        });
    }
)};
agregarFuncionBoton();

function agCarrito(){   
    let existe = carrito.some(productosSome => productosSome.id === productos.id);
    if(existe===false){
        productos.cantidad=1;
        carrito.push(productos)
    } else {
        let producto.Find = carrito.find(producto => producto.id === producto.id)
        productoFind.cantidad++
;    }
    
}

//FUNCION PINTAR PRODUCTOS EN CARRITO
function pintarCarro(){
    let tr = document.createElement("tr");
    for(let i = 0; i < carrito.length; i++ ){
        let td = document.createElement("td");        
        td.innerHTML = carrito[i];
        tr.appendChild(td);
    }

    for(let i = 0; i < precio.length; i++ ){
        let td = document.createElement("td");        
        td.innerHTML = precio[i];
        tr.appendChild(td);
    }

    for (let i = carrito.length; i > 0; i--) {
        carrito.pop();
    }

    for (let i = precio.length; i > 0; i--) {
        precio.pop();
    }
    carrito_tr.appendChild(tr)  
    
};
pintarCarro();

//FUNCION SUMAR PRECIOS PRODUCTOS EN CARRITO
function sumarProductos(){

}

//FUNCION REMOVER MENSAJE DE CARRITO VACIO
function noHayMensaje(){
    if (carrito.length > 0){
        document.getElementById("noHayProd").remove();
    }
}
noHayMensaje();


//FUNCION VACIAR PRODUCTOS EN CARRITO
/*function vaciar(){
    const vaciarCarritoBtn = document.getElementById("vaciar_carrito");
    vaciarCarritoBtn.addEventListener("click",pintarCarro());
};
vaciar();*/

