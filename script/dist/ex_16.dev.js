"use strict";

window.onload = function () {
  var miFormulario = document.querySelector("footer form");
  var miArchivo = document.querySelector("input[type='file']");
  var miPantalla = document.querySelector(".content_display");

  function revisarArchivo(archivo) {
    if (archivo) {
      var nombreArchivo = archivo.name;
      var extension = nombreArchivo.split('.').pop();
      return extension;
    } else {
      miPantalla.textContent = "Error: No se seleccionó ningún archivo";
    }
  }

  function leerArchivoTexto(archivo) {
    var lector = new FileReader(); // Cuando termine de leer, mostrar el contenido

    lector.onload = function (evento) {
      miPantalla.textContent = evento.target.result;
    };

    lector.readAsText(archivo);
  }

  miFormulario.onsubmit = function (evento) {
    evento.preventDefault();
    var archivoElegido = miArchivo.files[0];

    if (archivoElegido) {
      var tipo = revisarArchivo(archivoElegido); // Obtener su extensión

      if (tipo === "txt") {
        leerArchivoTexto(archivoElegido);
      } else {
        miPantalla.textContent = "Archivo de tipo: .".concat(tipo);
      }
    }
  };
};