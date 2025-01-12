"use strict";

function $(selector) {
  if (!selector) {
    return null;
  } // Obtener el primer carácter para determinar el tipo de selector


  var selectorType = selector.charAt(0);
  var selectorValue = selector.slice(1);

  switch (selectorType) {
    case '#':
      return document.querySelector(selector);

    case '.':
      return document.querySelectorAll(selector);

    default:
      return document.querySelectorAll(selector);
  }
}
/* -------------------------------TESTTTT----------------------------------------*/
//console.log("Test de párrafos:", $("p"));
//console.log("Test de clase:", $(".test"));
//console.log("Test de ID:", $("#unico"));