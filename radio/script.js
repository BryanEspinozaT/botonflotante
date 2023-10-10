const botonMostrar = document.getElementById("mostrarImagen");
const imagenContainer = document.getElementById("imagenContainer");

botonMostrar.addEventListener("click", function() {
    if (imagenContainer.classList.contains("oculto")) {
        imagenContainer.classList.remove("oculto");
        imagenContainer.classList.add("mostrando");
    } else {
        imagenContainer.classList.remove("mostrando");
        imagenContainer.classList.add("ocultando");
        setTimeout(() => {
            imagenContainer.classList.add("oculto");
            imagenContainer.classList.remove("ocultando");
        }, 500); // Espera a que termine la animación de ocultar antes de ocultar realmente
    }
});
