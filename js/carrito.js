/*let productos = [
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

let productoUno = {"name": "Chorizo clasico", "price": " $550", "id":"prod1"};
let productoDos = {"name": "Chorizo ahumado", "price": " $550", "id":"prod2"};
let productoTres = {"name": "Chorizo queso azul", "price":" $550", "id":"prod3"};
let productoCuatro = {"name": "Chorizo con morrones", "price":" $550", "id":"prod4"};
let productoCinco = {"name": "Pernil pequeño", "price":" $3550", "id":"prod5"};
let productoSeis = {"name": "Pernil mediano", "price": " $4550", "id":"prod6"};


let productoPrecios = productos.forEach(element => console.log(element.price));
let productoIds = productos.forEach(element => console.log(element.id));
let productoNombres = productos.forEach(element => console.log(element.name));
const escuchar = (document.getElementsByClassName("click")[0].id);
console.log(escuchar);

let chorizos = productos.slice(0, 4);
console.log(chorizos);

let precioProducto = productos.map(function(producto) {
    return producto.price;
});
console.log(precioProducto);

//FUNCION QUE PINTA PRODUCTOS EN CARRITO
function  obtenerId(){
    let imprimir =

        document.querySelectorAll(".click").forEach(el => {
        el.addEventListener("click", e => {    
        const id = e.target.getAttribute("id");

        if(id == productoUno["id"]){
            document.getElementById("carrito__ul").innerHTML =(productoUno["name"]+ "" + productoUno["price"] );                    
        
        } else if (id == productoDos["id"]) {
            document.getElementById("carrito__ul").innerHTML =(productoDos["name"]+ "" + productoDos["price"] );

        }  else if (id == productoTres["id"]) {
            document.getElementById("carrito__ul").innerHTML =(productoTres["name"]+ "" + productoTres["price"] );

        }  else if (id == productoCuatro["id"]) {
            document.getElementById("carrito__ul").innerHTML =(productoCuatro["name"]+ "" + productoCuatro["price"] );

        }  else if (id == productoCinco["id"]) {
            document.getElementById("carrito__ul").innerHTML =(productoCinco["name"]+ "" + productoCinco["price"] );

        }  else if (id == productoSeis["id"]) 
        document.getElementById("carrito__ul").innerHTML =(productoSeis["name"]+ "" + productoSeis["price"] );
        });
    });
};
obtenerId();

  
/*const productos = {
    producto1: {
      name: "Chorizo clasico",
      price: "550",  
      srcImg: "../img/chorizos.jpg",
    },

    producto2: {
        name: "Chorizo ahumado",
        price: "550",  
        srcImg: "../img/chorizos.jpg",
      },

      producto3: {
        name: "Chorizo queso azul",
        price: "550",  
        srcImg: "../img/chorizos.jpg",
      },
};

const carrito= [];*/


