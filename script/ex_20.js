window.onload = () => {
    const form = document.querySelector('form');
    const fileInput = document.querySelector('input[type="file"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (fileInput.files.length > 0) 
        {
            const file = fileInput.files[0];
            
            const fileURL = URL.createObjectURL(file);
            
            // Crear elemento de descarga
            const downloadLink = document.createElement('a');
            downloadLink.href = fileURL;
            downloadLink.download = file.name; // Mantiene el nombre original del archivo
            
            // Simular click para descargar
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            
            URL.revokeObjectURL(fileURL);
        }
    });
};