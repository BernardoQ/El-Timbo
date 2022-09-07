let productos = [
    {"name": "Chorizo clasico", "price": 550, "id":"prod1"},
    {"name": "Chorizo ahumado", "price": 550, "id":"prod2"},
    {"name": "Chorizo queso azul", "price": 550, "id":"prod3"},
    {"name": "Chorizo morrones", "price": 550, "id":"prod4"},
    {"name": "Pernil pequeño", "price": 3550, "id":"prod5"},
    {"name": "Pernil mediano", "price": 4550, "id":"prod6"},
    //{"name": "Pernil grande", "price": 5550, "id":prod7},
    //{"name": "Salame picado grueso", "price": 850, "id":prod8},
    //{"name": "Salame picado fino", "price": 850, "id":prod9}
]

let productoUno = {"name": "Chorizo clasico", "price": " $550", "id":"prod1"};
let productoDos = {"name": "Chorizo ahumado", "price": " $550", "id":"prod2"};
let productoTres = {"name": "Chorizo queso azul", "price":" $550", "id":"prod3"};
let productoCuatro = {"name": "Chorizo morrones", "price":" $550", "id":"prod4"};
let productoCinco = {"name": "Pernil pequeño", "price":" $3550", "id":"prod5"};
let productoSeis = {"name": "Pernil mediano", "price": " $4550", "id":"prod6"};


//let productoPrecios = productos.forEach(element => console.log(element.price));
//let productoIds = productos.forEach(element => console.log(element.id));
//const escuchar = (document.getElementsByClassName("click")[0].id);
//console.log(escuchar);

let precioProducto = productos.map(function(producto) {
    return producto.price;
});
console.log(precioProducto);

for(let i=0; i < productos.length; i++){
    console.log(productos[i]); 
};

function  obtenerId(){
    document.querySelectorAll(".click").forEach(el => {

        el.addEventListener("click", e => {
    
        const id = e.target.getAttribute("id");

        if(id == productoUno["id"]){
            console.log(productoUno["name"]+ " cuesta" + productoUno["price"] );

        } else if (id == productoDos["id"]) {
            console.log(productoDos["name"]+ " cuesta" + productoDos["price"] );

        }  else if (id == productoTres["id"]) {
            console.log(productoTres["name"]+ " cuesta" + productoTres["price"] );

        }  else if (id == productoCuatro["id"]) {
            console.log(productoCuatro["name"]+ " cuesta" + productoCuatro["price"] );

        }  else if (id == productoCinco["id"]) {
            console.log(productoCinco["name"]+ " cuesta" + productoCinco["price"] );

        }  else if (id == productoSeis["id"]) 
            console.log(productoSeis["name"]+ " cuesta" + productoSeis["price"] );
                  
        });  
    });
};

