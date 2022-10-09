// PRODUCTOS DESTACADOS
const containerDiv = document.querySelector(".products__gallery");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

fetch("destacados.json")
.then((response)=> response.json())
.then((datos)=> {
        //FUNCION CREAR CARDS DE PRODUCTOS
        function crearCards(){
            datos.forEach(element=>{
                containerDiv.innerHTML +=         
                `<li class="cards">
                    <a href="./pages/tienda.html"><img src="${element.img}" alt="${element.name}"></a>
                    <div class="agregarProducto">
                        <p>${element.name}</p>      
                    </div>
                </li>`
            })            
        };    
        crearCards(datos); 
    }
);


// GALERIA
const containerGaleria = document.querySelector(".contenido--img");

fetch("galeria.json")
.then((response)=> response.json())
.then((datos)=> {
        //FUNCION CREAR CARDS DE PRODUCTOS
        function crearCards(){
            datos.forEach(element=>{
                containerGaleria.innerHTML +=         
                `<li class="cards">
                    <a href="./pages/tienda.html"><img src="${element.img}" alt="${element.name}"></a>
                </li>`
            })            
        };    
        crearCards(datos); 
    }
);



//PINTAR CARRITO EN HEADER
carrito.length === 0 ? (totalEnHeader.innerHTML = `<a href="./pages/tienda.html"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></a>`) : (totalEnHeader.innerHTML = `<a href="./pages/tienda.html"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></a>`);









