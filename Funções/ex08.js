const calcularTotalPedido = pedido => 
    pedido.items.reduce((total, item) => total + (item.price * item.quantity), 0);

console.log("Total do Pedido = " + calcularTotalPedido(obj3))