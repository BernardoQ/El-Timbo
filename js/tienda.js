const containerDiv = document.querySelector(".products__gallery");
const carritoDiv = document.querySelector("#carrito_tr");
const totalContainer = document.getElementById("total");
const totalEnHeader = document.getElementById("totalEnHeader");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/*fetch("../data.json")
.then((response)=> response.json())
.then((datos)=> crearCards(datos))
*/

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
                    color: "#ffffff",
                    background: "#192436",
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
        <img src="${prod.img}" alt="">       
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
                <button id="btnComprar">Comprar</button>           
            </tr>`;  
        
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

    //PINTAR MENSAJE CARRITO VACIO
    carrito.length === 0 && (totalEnHeader.innerHTML = "<strong>$0</strong>");
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




