window.onload = function() 
{
    let miIndicador = document.querySelector("footer > div:first-child > span");
    
    let colorIgual = "#FFA500"; 
    let colorSubio = "#008000"; 
    let colorBajo = "#FF0000";    
    
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(function(respuesta) 
        {
            return respuesta.json();
        })
        
        .then(function(datos) 
        {
            let precioAnterior = localStorage.getItem("bitcoin");    // Precio guardado
            let precioNuevo = datos.bpi.EUR.rate;                   // Precio actual
            
            if (precioAnterior === precioNuevo) 
            {
                miIndicador.style.background = colorIgual;
            } 
            else if (precioAnterior < precioNuevo) 
            {
                miIndicador.style.background = colorSubio;
            } 
            else 
            {
                miIndicador.style.background = colorBajo;
            }
            
            localStorage.setItem("bitcoin", precioNuevo);
        });
}