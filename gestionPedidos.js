// Lista para almacenar los pedidos
const pedidos = [];

// Función para agregar un pedido
function agregarPedido(cliente, producto, cantidad) {
    const pedido = {
        id: pedidos.length + 1,
        cliente,
        producto,
        cantidad,
        estado: "pendiente"
    };
    pedidos.push(pedido);
    mostrarResultado(`Pedido agregado: ${JSON.stringify(pedido)}`);
}

// Función para listar los pedidos
function listarPedidos() {
    if (pedidos.length === 0) {
        mostrarResultado("No hay pedidos.");
        return;
    }
    let resultado = "Lista de pedidos:\n";
    pedidos.forEach(p => {
        resultado += `ID: ${p.id}, Cliente: ${p.cliente}, Producto: ${p.producto}, Cantidad: ${p.cantidad}, Estado: ${p.estado}\n`;
    });
    mostrarResultado(resultado);
}

// Función para actualizar el estado de un pedido
function actualizarEstadoPedido(id, nuevoEstado) {
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {
        pedido.estado = nuevoEstado;
        mostrarResultado(`Pedido actualizado: ${JSON.stringify(pedido)}`);
    } else {
        mostrarResultado(`Pedido con ID ${id} no encontrado.`);
    }
}

// Función para eliminar un pedido
function eliminarPedido(id) {
    const index = pedidos.findIndex(p => p.id === id);
    if (index !== -1) {
        const eliminado = pedidos.splice(index, 1);
        mostrarResultado(`Pedido eliminado: ${JSON.stringify(eliminado[0])}`);
    } else {
        mostrarResultado(`Pedido con ID ${id} no encontrado.`);
    }
}

// Función para mostrar resultados en la página
function mostrarResultado(mensaje) {
    const output = document.getElementById("output");
    output.textContent = mensaje;
}
