document.getElementById("formPedido").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    let detalles = document.getElementById("detalles").value;

    if (nombre && email && direccion && detalles) {
        alert(`¡Pedido realizado con éxito!\n\nNombre: ${nombre}\nCorreo: ${email}\nDirección: ${direccion}\nDetalles: ${detalles}`);
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
