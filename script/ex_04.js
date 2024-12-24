document.addEventListener("DOMContentLoaded", () => 
{
    const footerDiv = document.querySelector("footer div"); 
    let keys = ""; 

    document.addEventListener("keydown", (event) => 
    {
        if (event.key.length === 1) { // Solo procesa teclas imprimibles
            keys += event.key; // Añade la tecla a la cadena
            if (keys.length > 42) {
                keys = keys.slice(-42); // Mantén solo los últimos 42 caracteres
            }
            footerDiv.textContent = keys; // Actualiza el contenido del div
        }
    });
});
