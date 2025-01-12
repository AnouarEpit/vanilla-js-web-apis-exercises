"use strict";

window.onload = function () {
  var dropZone = document.querySelector('.drag_drop');
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d'); // Configurar el canvas

  canvas.width = dropZone.offsetWidth;
  canvas.height = dropZone.offsetHeight;
  canvas.style.display = 'none'; // Añadir el canvas a la zona de drop

  dropZone.appendChild(canvas); // Prevenir comportamiento por defecto

  dropZone.addEventListener('dragenter', preventDefault);
  dropZone.addEventListener('dragover', preventDefault);
  dropZone.addEventListener('dragleave', preventDefault);
  dropZone.addEventListener('drop', handleDrop);

  function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDrop(e) {
    preventDefault(e);
    var dt = e.dataTransfer;
    var files = dt.files;

    if (files.length > 0 && files[0].type.startsWith('image/')) {
      var file = files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        var img = new Image();

        img.onload = function () {
          // Ocultar el texto de instrucción
          var instruction = dropZone.querySelector('i');

          if (instruction) {
            instruction.style.display = 'none';
          } // Mostrar el canvas


          canvas.style.display = 'block'; // Calcular dimensiones manteniendo proporción

          var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
          var scaledWidth = img.width * scale;
          var scaledHeight = img.height * scale; // Centrar la imagen

          var x = (canvas.width - scaledWidth) / 2;
          var y = (canvas.height - scaledHeight) / 2; // Limpiar canvas y dibujar imagen

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
        };

        img.src = event.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
};