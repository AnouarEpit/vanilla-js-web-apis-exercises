"use strict";

window.onload = function () {
  var form = document.querySelector('form');
  var fileInput = document.querySelector('input[type="file"]');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (fileInput.files.length > 0) {
      var file = fileInput.files[0];
      var fileURL = URL.createObjectURL(file); // Crear elemento de descarga

      var downloadLink = document.createElement('a');
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