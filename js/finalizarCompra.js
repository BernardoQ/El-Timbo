//CARGAR DATOS AL INPUT OCULTO PEDIDO CON JSON DE CARRITO

const ordenCompra = JSON.stringify(localStorage.getItem("carrito"));

document.getElementById("numeroPedido").value = ordenCompra;
