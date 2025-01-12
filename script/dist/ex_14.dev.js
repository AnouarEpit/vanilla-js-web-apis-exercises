"use strict";

window.onload = function () {
  var miBoton = document.querySelector("footer > div:first-child > button");

  function descargarDatos(datos) {
    var textoParaGuardar = JSON.stringify(datos);
    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = 'data:attachment/text,' + encodeURI(textoParaGuardar);
    enlaceDescarga.download = 'API.txt';
    enlaceDescarga.click();
  }

  miBoton.onclick = function () {
    fetch("https://jsonplaceholder.typicode.com/posts").then(function (respuesta) {
      return respuesta.json();
    }).then(function (datos) {
      descargarDatos(datos);
    });
  };
};