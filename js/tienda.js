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

const carrito = [];
const cantidad = [];
const total = []; 
//let nombreProducto = [];
let precio = [];

function nombreProducto(){
    for (const key in productos) {
        if (Object.hasOwnProperty.call(productos, key)) {
            const element = productos[key];
            console.log(element);            
        }        
    }    
};
nombreProducto()


//FUNCION AGREGAR PRODUCTOS EN CARRITO
function  agregarCarrito(){
    document.querySelectorAll(".click").forEach(el => {
    el.addEventListener("click", e => {    
    const id = e.target.getAttribute("id");    
            
        for(let i=0; i < productos.length; i++){
            if(productos[i].id == id){
            carrito.push(productos[i].name + " $" + productos[i].price);
            pintarCarro();            
            //let tablaCarrito = document.getElementById("carrito_tr");
            //tablaCarrito.innerHTML = carrito;            
            //console.log(carrito);
            //console.log(productos[i].name + " $" + productos[i].price);
            }
            };
        });
    }
)};
agregarCarrito();

//FUNCION PINTAR PRODUCTOS EN CARRITO
function pintarCarro(){
    let tr = document.createElement("tr");
    for(let i = 0; i < carrito.length; i++ ){
        let td = document.createElement("td");        
        td.innerHTML = carrito[i];
        tr.appendChild(td);
    }

    for (let i = carrito.length; i > 0; i--) {
        carrito.pop();
    }
    carrito_tr.appendChild(tr)
};
pintarCarro();

let sumarProductos = document.querySelectorAll("td");

