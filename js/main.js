
let productos = [
    {"name": "Chorizo clasico", "price": 550, "id":1},
    {"name": "Chorizo ahumado", "price": 550, "id":2},
    {"name": "Chorizo queso azul", "price": 550, "id":3},
    {"name": "Chorizo morrones", "price": 550, "id":4},
    {"name": "Pernil pequeño", "price": 3550, "id":5},
    {"name": "Pernil mediano", "price": 4550, "id":6},
    {"name": "Pernil grande", "price": 5550, "id":7},
    {"name": "Salame picado grueso", "price": 850, "id":8},
    {"name": "Salame picado fino", "price": 850, "id":9}
]

let productoId = productos.forEach(element => console.log(element.price));

const precioProducto = productos.map(function(producto) {
    return producto.price;
});

console.log(precioProducto);

function imprimir1(){
    console.log(precioProducto[0]);
}

function imprimir2(){
    console.log(precioProducto[1]);
}

function imprimir3(){
    console.log(precioProducto[2]);
}

function imprimir4(){
    console.log(precioProducto[3]);
}

function imprimir5(){
    console.log(precioProducto[4]);
}

function imprimir6(){
    console.log(precioProducto[5]);
}
















