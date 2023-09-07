// Array de colores disponibles
const colores = ["red", "blue", "green", "yellow", "orange", "purple", "brown", "black", "white"];
const div = document.getElementById("miDiv");
const boton = document.getElementById("cambiarColor");

boton.addEventListener("click", cambiarColor);

function cambiarColor() {
    if (colores.length === 0) {
      alert("Se acabaron los colores!")
        reiniciarJuego();
    } else {
        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        const colorElegido = colores.splice(indiceAleatorio, 1)[0];
        div.style.backgroundColor = colorElegido;
    }
}

function reiniciarJuego() {
    colores.push("red", "blue", "green", "yellow", "orange", "purple");
    div.style.backgroundColor = "#5750506e"; // Cambia esto al color inicial deseado
}
