// Mostrar alerta al hacer clic en el botón
function mostrarAlerta() {
  alert("¡Gracias por interesarte en la hermosa Provincia de Orellana!");
}

// Validación de formulario
document.getElementById("formularioContacto").addEventListener("submit", function(event) {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor, completa todos los campos antes de enviar.");
    event.preventDefault();
  }
});
