"use strict";

window.onload = function () {
  var miCuadrado = document.querySelector("canvas");
  var miZona = document.querySelector("footer > div:first-child");
  var miTexto = document.querySelector("footer > div:last-child");
  var posicionX = 0;
  var posicionY = 0;
  var inicioX = 0;
  var inicioY = 0;
  miCuadrado.draggable = true;
  miCuadrado.style.position = "relative";

  miCuadrado.ondragstart = function (e) {
    inicioX = e.clientX - posicionX; // Guardar donde empezamos a arrastrar

    inicioY = e.clientY - posicionY;
    e.dataTransfer.setData('text', '');
  };

  miZona.ondragover = function (e) {
    e.preventDefault(); // Mostrar coordenadas actuales

    miTexto.textContent = "New coordinates => {x:".concat(e.clientX, ", y:").concat(e.clientY, "}");
  };

  miZona.ondrop = function (e) {
    e.preventDefault();
    posicionX = e.clientX - inicioX; // Calcular nueva posición

    posicionY = e.clientY - inicioY;
    miCuadrado.style.left = posicionX + 'px'; // Mover el cuadrado

    miCuadrado.style.top = posicionY + 'px';
  };
};