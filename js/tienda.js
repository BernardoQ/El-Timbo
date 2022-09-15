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

const containerDiv = document.querySelector(".products__gallery");
const carritoDiv = document.querySelector("#carrito_tr");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//FUNCION CREAR CARDS DE PRODUCTOS
function crearCards(){
    productos.forEach(element=>{
        containerDiv.innerHTML +=         
        `<li class="cards">
            <img src="${element.img}" alt="">
            <div class="agregarProducto">
                <p>${element.name}</p>
                <p>$${element.price}</p>      
            </div>
            <button class="boton click" id="btn-agregar${element.id}">Agregar</button>
        </li>`
    })
    agregarFuncionAlBoton();
}

//FUNCION AGREGAR EVENTO A BOTON 
function agregarFuncionAlBoton(){
    productos.forEach(producto=>{
        document.querySelector(`#btn-agregar${producto.id}`).addEventListener("click",()=>{
            agregarAlCarrito(producto)
        })
    })
}

//FUNCION AGREGAR PRODUCTO AL CARRITO
    function agregarAlCarrito(producto){
    let existe = carrito.some(prod=>prod.id === producto.id);
    if(existe===false){
        producto.cantidad = 1;
        carrito.push(producto);
    }
    else{
        let prodFind = carrito.find(prod=> prod.id===producto.id);
        prodFind.cantidad++;
    }
    console.log(carrito);
    pintarCarrito();
    totalCarrito()

}

//FUNCION PINTAR CARRITO
function pintarCarrito(){
    carritoDiv.innerHTML = "";
    carrito.forEach(prod=>{
        carritoDiv.innerHTML += 
        `<li>
            <p>${prod.name}</p>
            <p>CANTIDAD: ${prod.cantidad}</p>
            <p>$${prod.price}</p>
            <button class="btnCarrito" id="btn-borrar${prod.id}">Borrar</button>
            <button class="btnCarrito" id="btn-borrarUnoSolo${prod.id}">-</button>
        </li>`
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    borrarProducto()    
}

//FUNCION BORRAR PRODUCTOS DEL CARRITO
function borrarProducto(){
    carrito.forEach(producto=>{
        document.querySelector(`#btn-borrar${producto.id}`).addEventListener("click",()=>{
            let indice = carrito.findIndex(element=>element.id===producto.id);
            carrito.splice(indice,1);
            pintarCarrito()
        })
    })
}

//FUNCION SUMAR TOTAL CARRITO
function totalCarrito(){
   /* for(let i = 0; i < carrito.length; i++ ){
        const total = Object.values(carrito).reduce((precio, {cantidad, price}) => precio + (cantidad * price),0);
        console.log(total);
    }*/
    
    if(Object.keys(carrito).length !== 0){
        const total = Object.values(carrito).reduce((precio, {cantidad, price}) => precio + (cantidad * price),0);
        console.log(total);
    }
}

pintarCarrito();
crearCards();


