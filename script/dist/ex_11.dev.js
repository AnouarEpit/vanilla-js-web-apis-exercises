"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

window.onload = function () {
  var footer = document.querySelector("footer");
  var messageDiv = footer.querySelector("div");
  var okLink = messageDiv.querySelector("a"); // Crear un nuevo contenedor y botón dinámicamente

  var deleteDiv = document.createElement("div");
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete cookie"; // Oculro el contenido 

  deleteDiv.style.display = "none";
  deleteDiv.appendChild(deleteButton);
  footer.appendChild(deleteDiv); // Función para establecer una cookie

  var setCookie = function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = "".concat(name, "=").concat(value, "; expires=").concat(date.toUTCString(), "; path=/");
  }; // Función para obtener una cookie


  var getCookie = function getCookie(name) {
    var cookies = document.cookie.split("; ");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = cookies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var cookie = _step.value;

        var _cookie$split = cookie.split("="),
            _cookie$split2 = _slicedToArray(_cookie$split, 2),
            key = _cookie$split2[0],
            value = _cookie$split2[1];

        if (key === name) return value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return null;
  }; // Función para borrar una cookie


  var deleteCookie = function deleteCookie(name) {
    setCookie(name, "", -1); // Establecer la cookie con un tiempo expirado
  }; // Función para actualizar la interfaz de usuario


  var updateUI = function updateUI() {
    var acceptsCookies = getCookie("acceptsCookies") === "true";

    if (acceptsCookies) {
      messageDiv.style.visibility = "hidden";
      deleteDiv.style.display = "block";
    } else {
      messageDiv.style.visibility = "visible";
      deleteDiv.style.display = "none";
    }
  }; // Evento para el enlace "OK"


  okLink.addEventListener("click", function (event) {
    event.preventDefault();
    setCookie("acceptsCookies", "true", 1); // Establecer la cookie

    updateUI(); // Actualizar la interfaz
  }); // Evento para el botón "Delete cookie"

  deleteButton.addEventListener("click", function () {
    deleteCookie("acceptsCookies");
    updateUI();
  }); // Inicializar la interfaz en función del estado de las cookies

  updateUI();
};