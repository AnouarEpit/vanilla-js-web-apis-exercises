"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll("footer button");
  var select = document.querySelector("footer select");
  var fontSize = 16;
  buttons[0].addEventListener("click", function () {
    fontSize++;
    document.body.style.fontSize = fontSize + "px";
  });
  buttons[1].addEventListener("click", function () {
    fontSize--;
    document.body.style.fontSize = fontSize + "px";
  });
  select.addEventListener("change", function () {
    document.body.style.backgroundColor = select.value;
  });
});