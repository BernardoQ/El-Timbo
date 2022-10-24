//CARGAR DATOS AL INPUT OCULTO PEDIDO CON JSON DE CARRITO

const ordenCompra = localStorage.getItem("carrito");

document.getElementById("numeroPedido").value = ordenCompra;
