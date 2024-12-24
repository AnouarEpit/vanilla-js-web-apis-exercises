document.addEventListener("DOMContentLoaded", () => 
{
    const footerDiv = document.querySelector("footer div"); 
    let keys = ""; 

    document.addEventListener("keydown", (event) => 
    {
        if (event.key.length === 1) 
        {
            keys += event.key; 
            if (keys.length > 42) {
                keys = keys.slice(-42);
            }
            footerDiv.textContent = keys;
        }
    });
});
