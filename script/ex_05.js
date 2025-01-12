document.addEventListener("DOMContentLoaded", () => 
{
    const buttons = document.querySelectorAll("footer button"); 
    const select = document.querySelector("footer select"); 
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