"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var footerDiv = document.querySelector("footer div");
  footerDiv.addEventListener("click", function () {
    var name = prompt("What is your name?");

    while (!name) {
      name = prompt("What is your name?");
    }

    var confirmation = confirm("Are you sure ".concat(name, " is your name?"));

    if (confirmation) {
      var greeting = "Hello ".concat(name, "!");
      footerDiv.textContent = greeting;
      alert(greeting);
    }
  });
});