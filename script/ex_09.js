window.onload = function() 
{

    let miCuadrado = document.querySelector("canvas");
    let miZona = document.querySelector("footer > div:first-child");
    let miTexto = document.querySelector("footer > div:last-child");
    
    let posicionX = 0;
    let posicionY = 0;
    let inicioX = 0;
    let inicioY = 0;
    

    miCuadrado.draggable = true;
    miCuadrado.style.position = "relative";
    

    miCuadrado.ondragstart = function(e) 
    {
        inicioX = e.clientX - posicionX;        // Guardar donde empezamos a arrastrar
        inicioY = e.clientY - posicionY;
        e.dataTransfer.setData('text', '');
    };
    

    miZona.ondragover = function(e) 
    {
        e.preventDefault();
        // Mostrar coordenadas actuales
        miTexto.textContent = `New coordinates => {x:${e.clientX}, y:${e.clientY}}`;
    };
    

    miZona.ondrop = function(e) 
    {
        e.preventDefault();
        
        posicionX = e.clientX - inicioX;        // Calcular nueva posición
        posicionY = e.clientY - inicioY;
        
        miCuadrado.style.left = posicionX + 'px';        // Mover el cuadrado
        miCuadrado.style.top = posicionY + 'px';
    };
}