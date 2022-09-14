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

const carrito = [];
const cantidad = [];
const total = []; 
const containerProductos = document.querySelector(".products__gallery");
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
    document.querySelectorAll(".click").forEach(el => {
    el.addEventListener("click", e => {    
    const id = e.target.getAttribute("id");    
            
        for(let i=0; i < productos.length; i++){
            if(productos[i].id == id){
            carrito.push(productos[i].name);
            carrito.push(" $" + productos[i].price);
            pintarCarro();            
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


pintarProductos()

