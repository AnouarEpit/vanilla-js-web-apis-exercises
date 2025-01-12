"use strict";

window.onload = function () {
  function combineImages(urls) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var canvasWidth = 500;
    var canvasHeight = 300;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = "100%";
    canvas.style.height = "auto";
    canvas.style.backgroundColor = "white";
    var footer = document.querySelector("footer div");
    footer.appendChild(canvas);

    var loadImage = function loadImage(url) {
      return new Promise(function (resolve, reject) {
        var img = new Image();

        img.onload = function () {
          return resolve(img);
        };

        img.onerror = function () {
          return reject("Failed to load image: ".concat(url));
        };

        img.src = url;
      });
    }; // Función para dividir el canvas en una cuadrícula


    function getGridPosition(index, totalImages) {
      var gridSize = Math.ceil(Math.sqrt(totalImages));
      var cellWidth = canvasWidth / gridSize;
      var cellHeight = canvasHeight / gridSize;
      var row = Math.floor(index / gridSize);
      var col = index % gridSize; // Añadir un poco de aleatoriedad dentro de cada celda

      var randomOffsetX = Math.random() * 0.3 * cellWidth;
      var randomOffsetY = Math.random() * 0.3 * cellHeight;
      return {
        x: col * cellWidth + randomOffsetX,
        y: row * cellHeight + randomOffsetY,
        maxWidth: cellWidth * 0.7,
        // Reducir tamaño para evitar superposición
        maxHeight: cellHeight * 0.7
      };
    }

    Promise.all(urls.map(loadImage)).then(function (images) {
      // Limpiar el canvas
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      images.forEach(function (img, index) {
        var position = getGridPosition(index, images.length); // Calcular escala manteniendo proporción

        var scaleX = position.maxWidth / img.width;
        var scaleY = position.maxHeight / img.height;
        var scale = Math.min(scaleX, scaleY);
        var scaledWidth = img.width * scale;
        var scaledHeight = img.height * scale; // Centrar la imagen en su celda

        var x = position.x + (position.maxWidth - scaledWidth) / 2;
        var y = position.y + (position.maxHeight - scaledHeight) / 2;
        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
      });
    })["catch"](function (error) {
      return console.error(error);
    });
  }

  combineImages(["https://i.pinimg.com/736x/2d/bb/71/2dbb71dcf1da56c1b2ea38b300364635.jpg", "https://i.pinimg.com/236x/14/33/30/1433308a7a20b819cce6e10d9fcbcfff.jpg", "https://i.pinimg.com/736x/72/9c/ec/729cec71e4c0f80a2912c62907e8baaf.jpg"]);
};