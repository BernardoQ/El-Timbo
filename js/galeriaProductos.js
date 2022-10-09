
const containerDiv = document.querySelector(".products__gallery");

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









