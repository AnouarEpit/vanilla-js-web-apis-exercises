"use strict";

window.onload = function () {
  var miContenedor = document.querySelector("footer > div:first-child"); // 2. Crear la imagen

  var miImagen = document.createElement("img");
  miImagen.src = localStorage.getItem('image');
  miImagen.style.width = "100%";
  miContenedor.appendChild(miImagen); // 3. Variables para la animación

  var tamañoImagen = 100;
  var timerReduccion;

  miContenedor.onmouseenter = function () {
    clearInterval(timerReduccion); // Iniciar la reducción gradual

    timerReduccion = setInterval(function () {
      tamañoImagen = tamañoImagen - 5;
      miImagen.style.width = tamañoImagen + "%";
    }, 1000);
  };

  miContenedor.onmouseleave = function () {
    clearInterval(timerReduccion);
    miImagen.style.width = "100%";
    tamañoImagen = 100;
  };

  miImagen.onclick = function () {
    clearInterval(timerReduccion);
    localStorage.removeItem('image');
    miContenedor.removeChild(miImagen);
  };
};