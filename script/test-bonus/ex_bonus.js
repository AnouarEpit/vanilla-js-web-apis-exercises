window.onload = function()
{

function $(selector) 
{

    if (!selector) {
        return null;
    }

    // Obtener el primer carácter para determinar el tipo de selector
    const selectorType = selector.charAt(0);
    const selectorValue = selector.slice(1);

    switch (selectorType) 
    {
        // Si es iddd
        case '#':
            return document.querySelector(selector);
            
        // Si es una clase
        case '.':
            return document.querySelectorAll(selector);
            
        default:
            return document.querySelectorAll(selector);
    }
}


// -------------------------------TESTTTT----------------------------------------

//console.log("Test de párrafos:", $("p"));
//console.log("Test de clase:", $(".test"));
//console.log("Test de ID:", $("#unico"));
}