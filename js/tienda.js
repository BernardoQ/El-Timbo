let productos = [
    {"name": "Chorizo clasico", "price": 550, "id":"prod1", img: "../img/chorizos.jpg"},
    {"name": "Chorizo ahumado", "price": 550, "id":"prod2", img: "../img/chorizos.jpg"},
    {"name": "Chorizo queso azul", "price": 550, "id":"prod3", img: "../img/chorizos.jpg"},
    {"name": "Chorizo morrones", "price": 550, "id":"prod4", img: "../img/chorizos.jpg"},
    {"name": "Pernil pequeño", "price": 3550, "id":"prod5", img:"../img/pernil.jpg"},
    {"name": "Pernil mediano", "price": 4550, "id":"prod6", img:"../img/pernil.jpg"},
    {"name": "Pernil grande", "price": 5550, "id":"prod7", img:"../img/pernil.jpg"},
    {"name": "Salame picado grueso", "price": 850, "id":"prod8", img: "../img/chorizos.jpg"},
    {"name": "Salame picado fino", "price": 850, "id":"prod9", img: "../img/chorizos.jpg"}
];

let carrito = [];
const precio = [];
const cantidad = [];
<<<<<<< HEAD
const total = [];
const noHayProd = document.getElementById("noHayProd");
const tBody = document.getElementById("carrito_tr");
=======
const total = []; 
const containerProductos = document.querySelector(".products__gallery");
//let nombreProducto = [];
let precio = [];
>>>>>>> 7c53d0a81cf277f61dff50cc065de951d02dfcca

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


<<<<<<< HEAD
//FUNCION CAPTURAR CLICK PRODUCTOS EN CARRITO
function  agregarFuncionBoton(){
=======

function pintarProductos(){
    productos.forEach(element=>{
        containerProductos.innerHTML += 
        `<li class="cards">
            <img src="${element.img}" alt="">
            <div class="agregarProducto">
                <h4>${element.name}</h4>
                <p>$${element.price}</p>        
                <button class="boton click" id="${element.id}">Agregar</button>
            </div>
        </li>`
    })
    agregarCarrito();
}



//FUNCION AGREGAR PRODUCTOS EN CARRITO
function  agregarCarrito(){
>>>>>>> 7c53d0a81cf277f61dff50cc065de951d02dfcca
    document.querySelectorAll(".click").forEach(el => {
    el.addEventListener("click", element => {    
    const id = element.target.getAttribute("id");    
            
        for(let i=0; i < productos.length; i++){
            if(productos[i].id == id){
<<<<<<< HEAD
                //carrito.push(productos[i].name + " $" + productos[i].price);
                carrito.push(productos[i].name)
                precio.push(" $" + productos[i].price)
                pintarCarro();
                }
=======
            carrito.push(productos[i].name);
            carrito.push(" $" + productos[i].price);
            pintarCarro();            
            }
>>>>>>> 7c53d0a81cf277f61dff50cc065de951d02dfcca
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

<<<<<<< HEAD
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
=======

pintarProductos()
>>>>>>> 7c53d0a81cf277f61dff50cc065de951d02dfcca

