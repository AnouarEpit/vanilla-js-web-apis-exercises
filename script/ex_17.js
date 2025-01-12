window.onload = () => {
    function combineImages(urls) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
  
      const canvasWidth = 500;
      const canvasHeight = 300;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
  
      canvas.style.width = "100%";
      canvas.style.height = "auto";
      canvas.style.backgroundColor = "white";
  
      const footer = document.querySelector("footer div");
      footer.appendChild(canvas);
  
      const loadImage = (url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => reject(`Failed to load image: ${url}`);
          img.src = url;
        });
      };
  
      // Función para dividir el canvas en una cuadrícula
      function getGridPosition(index, totalImages) {
        const gridSize = Math.ceil(Math.sqrt(totalImages));
        const cellWidth = canvasWidth / gridSize;
        const cellHeight = canvasHeight / gridSize;
        
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;
        
        // Añadir un poco de aleatoriedad dentro de cada celda
        const randomOffsetX = (Math.random() * 0.3) * cellWidth;
        const randomOffsetY = (Math.random() * 0.3) * cellHeight;
        
        return {
          x: col * cellWidth + randomOffsetX,
          y: row * cellHeight + randomOffsetY,
          maxWidth: cellWidth * 0.7,  // Reducir tamaño para evitar superposición
          maxHeight: cellHeight * 0.7
        };
      }
  
      Promise.all(urls.map(loadImage))
        .then((images) => {
          // Limpiar el canvas
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  
          images.forEach((img, index) => {
            const position = getGridPosition(index, images.length);
            
            // Calcular escala manteniendo proporción
            const scaleX = position.maxWidth / img.width;
            const scaleY = position.maxHeight / img.height;
            const scale = Math.min(scaleX, scaleY);
  
            const scaledWidth = img.width * scale;
            const scaledHeight = img.height * scale;
  
            // Centrar la imagen en su celda
            const x = position.x + (position.maxWidth - scaledWidth) / 2;
            const y = position.y + (position.maxHeight - scaledHeight) / 2;
  
            ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
          });
        })
        .catch((error) => console.error(error));
    }
  
    combineImages([
      "https://i.pinimg.com/736x/2d/bb/71/2dbb71dcf1da56c1b2ea38b300364635.jpg",
      "https://i.pinimg.com/236x/14/33/30/1433308a7a20b819cce6e10d9fcbcfff.jpg",
      "https://i.pinimg.com/736x/72/9c/ec/729cec71e4c0f80a2912c62907e8baaf.jpg",
    ]);
  };