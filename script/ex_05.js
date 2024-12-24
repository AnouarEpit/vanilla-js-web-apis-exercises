document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("footer button"); // Selecciona ambos botones
    const select = document.querySelector("footer select"); // Selecciona el menú desplegable
    let fontSize = 16;

    buttons[0].addEventListener("click", () => 
    {
        fontSize++;
        document.body.style.fontSize = fontSize + "px";
    });

    buttons[1].addEventListener("click", () => 
    {
        fontSize--;
        document.body.style.fontSize = fontSize + "px";
    });

    select.addEventListener("change", () => 
    {
        document.body.style.backgroundColor = select.value;
    });
});
