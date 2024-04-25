// Validación del formulario 
const form = document.getElementById("clienteForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Aquí se puede enviar los datos al servidor o realizar otras acciones
    console.log("Formulario enviado");
});
