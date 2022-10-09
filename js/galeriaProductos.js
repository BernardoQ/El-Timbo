
const containerDiv = document.querySelector(".products__gallery");

fetch("../data.json")
.then((response)=> response.json())
.then((datos)=> {
        //FUNCION CREAR CARDS DE PRODUCTOS
        function crearCards(){
            datos.forEach(element=>{
                containerDiv.innerHTML +=         
                `<li class="cards">
                    <img src="${element.img}" alt="${element.name}">
                    <div class="agregarProducto">
                        <p>${element.name}</p>      
                    </div>
                </li>`
            })            
        };    
        crearCards(datos); 
    }
);







