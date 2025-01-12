"use strict";

window.onload = function () {
  var miIndicador = document.querySelector("footer > div:first-child > span");
  var colorIgual = "#FFA500";
  var colorSubio = "#008000";
  var colorBajo = "#FF0000";
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(function (respuesta) {
    return respuesta.json();
  }).then(function (datos) {
    var precioAnterior = localStorage.getItem("bitcoin"); // Precio guardado

    var precioNuevo = datos.bpi.EUR.rate; // Precio actual

    if (precioAnterior === precioNuevo) {
      miIndicador.style.background = colorIgual;
    } else if (precioAnterior < precioNuevo) {
      miIndicador.style.background = colorSubio;
    } else {
      miIndicador.style.background = colorBajo;
    }

    localStorage.setItem("bitcoin", precioNuevo);
  });
};