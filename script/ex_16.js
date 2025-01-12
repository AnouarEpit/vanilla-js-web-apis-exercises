window.onload = function() 
{
    let miFormulario = document.querySelector("footer form");
    let miArchivo = document.querySelector("input[type='file']");
    let miPantalla = document.querySelector(".content_display");
    
    function revisarArchivo(archivo) 
    {
        if (archivo) 
        {
            let nombreArchivo = archivo.name;
            let extension = nombreArchivo.split('.').pop();
            return extension;
        } 
        else 
        {
            miPantalla.textContent = "Error: No se seleccionó ningún archivo";
        }
    }
    
    function leerArchivoTexto(archivo) 
    {
        let lector = new FileReader();
        
        // Cuando termine de leer, mostrar el contenido
        lector.onload = function(evento) 
        {
            miPantalla.textContent = evento.target.result;
        };
        
        lector.readAsText(archivo);
    }
    
    miFormulario.onsubmit = function(evento) 
    {   
        evento.preventDefault();
        let archivoElegido = miArchivo.files[0];
        
        if (archivoElegido) 
        {
            let tipo = revisarArchivo(archivoElegido);            // Obtener su extensión

            if (tipo === "txt") 
            {
                leerArchivoTexto(archivoElegido);
            } 
            else 
            {
                miPantalla.textContent = `Archivo de tipo: .${tipo}`;
            }
        }
    };
}