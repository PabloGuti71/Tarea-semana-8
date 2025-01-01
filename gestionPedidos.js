// Lista para almacenar los pedidos
const pedidos = [];

// Función para agregar un pedido
function agregarPedido(cliente, producto, cantidad) {
    const pedido = {
        id: pedidos.length + 1,
        cliente: cliente,
        producto: producto,
        cantidad: cantidad,
        estado: "pendiente"
    };
    pedidos.push(pedido);
    console.log("Pedido agregado:", pedido);
    mostrarResultado(`Pedido agregado: ${JSON.stringify(pedido)}`);
}

// Función para listar los pedidos
function listarPedidos() {
    console.log("Lista de pedidos:");
    let resultado = "Lista de pedidos:\n";
    pedidos.forEach(pedido => {
        const detalle = `ID: ${pedido.id}, Cliente: ${pedido.cliente}, Producto: ${pedido.producto}, Cantidad: ${pedido.cantidad}, Estado: ${pedido.estado}`;
        console.log(detalle);
        resultado += detalle + "\n";
    });
    mostrarResultado(resultado);
}

// Función para actualizar el estado de un pedido
function actualizarEstadoPedido(id, nuevoEstado) {
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {
        pedido.estado = nuevoEstado;
        console.log(`Estado del pedido ${id} actualizado a: ${nuevoEstado}`);
        mostrarResultado(`Estado del pedido ${id} actualizado a: ${nuevoEstado}`);
    } else {
        console.log(`Pedido con ID ${id} no encontrado.`);
        mostrarResultado(`Pedido con ID ${id} no encontrado.`);
    }
}

// Función para eliminar un pedido
function eliminarPedido(id) {
    const index = pedidos.findIndex(p => p.id === id);
    if (index !== -1) {
        const pedidoEliminado = pedidos.splice(index, 1);
        console.log(`Pedido eliminado:`, pedidoEliminado);
        mostrarResultado(`Pedido eliminado: ${JSON.stringify(pedidoEliminado)}`);
    } else {
        console.log(`Pedido con ID ${id} no encontrado.`);
        mostrarResultado(`Pedido con ID ${id} no encontrado.`);
    }
}

// Función para mostrar resultados en el navegador
function mostrarResultado(texto) {
    const output = document.getElementById("output");
    output.textContent = texto;
}
