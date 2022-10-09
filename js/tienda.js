
const containerDiv = document.querySelector(".products__gallery");
const carritoDiv = document.querySelector("#carrito_tr");
const totalContainer = document.getElementById("total");
const totalEnHeader = document.getElementById("totalEnHeader");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/*fetch("./data.json")
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
                        <p class="producto_price">$${element.price}</p>      
                    </div>
                    <button class="boton click" id="btn-agregar${element.id}">Agregar</button>
                </li>`
            })
            
            agregarFuncionAlBoton();
        };

        crearCards(datos);

        //FUNCION AGREGAR EVENTO A BOTON 
        function agregarFuncionAlBoton(){
            datos.forEach(prod=>{
                document.querySelector(`#btn-agregar${prod.id}`).addEventListener("click",()=>{
                    agregarAlCarrito(prod)
    
                //FUNCION TOASTIFY BOTON AGREGAR
                    Toastify({
                        text: "Producto Agregado",
                        duration: 2000,
                        gravity: "bottom", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        style: {
                        color: "#192436",
                        background: "#AE9A64",
                        },
                    }).showToast();
                })
            })
        };
    }

);*/

const respuesta = async ()=>{
    const response = await fetch("../data.json");
    const data = await response.json();

    //FUNCION CREAR CARDS DE PRODUCTOS
    function crearCards(){
        data.forEach(element=>{
            containerDiv.innerHTML +=         
            `<li class="cards">
                <img src="${element.img}" alt="">
                <div class="agregarProducto">
                    <p>${element.name}</p>
                    <p class="producto_price">$${element.price}</p>      
                </div>
                <button class="boton click" id="btn-agregar${element.id}">Agregar</button>
            </li>`
        })
        
        agregarFuncionAlBoton();
    };

    //FUNCION AGREGAR EVENTO A BOTON 
    function agregarFuncionAlBoton(){
        data.forEach(prod=>{
            document.querySelector(`#btn-agregar${prod.id}`).addEventListener("click",()=>{
                agregarAlCarrito(prod)

            //FUNCION TOASTIFY BOTON AGREGAR
                Toastify({
                    text: "Producto Agregado",
                    duration: 2000,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    style: {
                    color: "#192436",
                    background: "#AE9A64",
                    },
                }).showToast();
            })
        })
    };
    crearCards();
};

respuesta();

//FUNCION AGREGAR PRODUCTO AL CARRITO
function agregarAlCarrito(producto){
    let existe = carrito.some(prod=>prod.id === producto.id);
    let prodFind = carrito.find(prod=> prod.id===producto.id);
    existe===false ? (producto.cantidad = 1)[carrito.push(producto)] : prodFind.cantidad++;
    pintarCarrito();
};

//FUNCION PINTAR CARRITO
function pintarCarrito(){
    carritoDiv.innerHTML = "";
    carrito.forEach(prod=>{
        carritoDiv.innerHTML += 
        `<td class="carrito__img"> 
        <img src="${prod.img}" alt="${prod.name}">       
        </td>        
        <td>${prod.name}</td>
        <td>$${prod.price}</td>
        <td>${prod.cantidad}</td>
        <td>$${prod.price*prod.cantidad}</td>
               
        <li class="btnProductos">  
            <button class="btnCarrito btnCarritoUno" id="btn-borrarUnSolo${prod.id}">-</button>            
            <button class="btnCarrito" id="btn-borrar${prod.id}">Borrar</button>
            <button class="btnCarrito btnCarritoUno" id="btn-agregarUnSolo${prod.id}">+</button>
        </li>`

        //PINTAR TOTAL Y BOTON PAGO CARRITO
        const sumarTodos = carrito.map(prod => prod.price * prod.cantidad).reduce((prev, curr) => prev + curr, 0);
        totalContainer.innerHTML =
            `<td>
                <strong><p id="totalCarrito">$${sumarTodos}</p></strong>
            </td>
            
            <tr>            
                <button  class="btnCarrito" id="btnComprar">Comprar</button>           
            </tr>`;  

        //SWEET ALERT
        document.getElementById("btnComprar").onclick = function(){
            Swal.fire({
                color: "#ffffff",
                background:"#192436",
                icon: "warning",
                title: 'Desea finalizar su compra?',
                showDenyButton: true,
                confirmButtonColor: "#67B121",
                confirmButtonText: 'Finalizar Compra',
                denyButtonText: `Seguir comprando`,
                denyButtonColor: "#DE1F10",
              }).then((result) => {
                result.isConfirmed === true ? Swal(location.href = 'https://www.mercadopago.com.ar/home') : Swal('Seguir comprando', '','info');
              })
        }
        
        totalEnHeader.innerHTML =
            `<strong><p id="totalCarritoHeader">$${sumarTodos}</p></strong>`;        
    });

    //PINTAR CARRITO EN HEADER Y MENSAJE EN CARRITO VACIO

    carrito.length === 0 ? (totalEnHeader.innerHTML = `<a href="#carrito"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg></a>`) : (totalEnHeader.innerHTML = `<a href="#carrito"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg></a>`);
    let mensajeCarrito = document.getElementById("carrito__footer");
    carrito.length === 0 ? (totalContainer.innerHTML= "$0")[mensajeCarrito.innerHTML +=
        `<li>
        <strong><p id="mensajeCarrito">Carrito Vacio</p></strong>
        </li>`
        ] : mensajeCarrito.innerHTML = "";
        
    localStorage.setItem("carrito",JSON.stringify(carrito))
    borrarProducto()
    agregarBorrarUno()
};

//FUNCION BORRAR PRODUCTOS DEL CARRITO
function borrarProducto(){    
    carrito.forEach(prod=>{
        document.querySelector(`#btn-borrar${prod.id}`).addEventListener("click",()=>{
            let indice = carrito.findIndex(element=>element.id===prod.id);
            carrito.splice(indice,1);
            pintarCarrito()
        })
    })
};

//FUNCION AUMENTAR-DISMINUIR PRODUCTOS DEL CARRITO
function agregarBorrarUno(){
    carrito.forEach(prod=>{
        document.querySelector(`#btn-borrarUnSolo${prod.id}`).addEventListener("click",()=>{
            let find = carrito.find(element=>element.id===prod.id);
            find.cantidad > 0 && find.cantidad--;
            pintarCarrito()
        })
    });
    
    carrito.forEach(prod=>{
        document.querySelector(`#btn-agregarUnSolo${prod.id}`).addEventListener("click",()=>{
            let find = carrito.find(element=>element.id===prod.id);
            find.cantidad++;
            pintarCarrito()
        })
    });
};

pintarCarrito();




