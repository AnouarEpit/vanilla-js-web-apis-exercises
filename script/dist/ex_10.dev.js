"use strict";

window.onload = function () {
  var box = document.querySelector("footer div");
  var input = document.querySelector("input");
  var btn = document.querySelector("button"); // Función para validar el código postal

  function isValidPostalCode(postalCode) {
    return /^\d{2,5}$/.test(postalCode);
  } // Función para mostrar las comunidades


  function displayCommunities(communities) {
    box.innerHTML = "";

    if (communities && communities.length > 0) {
      var resultsDiv = document.createElement('div');
      communities.forEach(function (commune) {
        var communeDiv = document.createElement('div');
        communeDiv.className = 'commune-item';
        communeDiv.innerHTML = "\n                    <strong>Commune:</strong> ".concat(commune.nomCommune || 'N/A', "<br>\n                    <strong>Code Postal:</strong> ").concat(commune.codePostal || 'N/A', "<br>\n                    <strong>Libell\xE9:</strong> ").concat(commune.libelleAcheminement || 'N/A', "\n                ");
        resultsDiv.appendChild(communeDiv);
      });
      box.appendChild(resultsDiv);
    } else {
      box.textContent = "Erreur: Impossible de trouver des informations pour ce code postal. Veuillez essayer un autre code postal.";
    }
  } // Función para buscar comunidades con retry


  function searchCommunities(postalCode) {
    var response, prefixResponse, data, _data;

    return regeneratorRuntime.async(function searchCommunities$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (isValidPostalCode(postalCode)) {
              _context.next = 3;
              break;
            }

            box.textContent = "Veuillez entrer un code postal valide (2-5 chiffres)";
            return _context.abrupt("return");

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return regeneratorRuntime.awrap(fetch("https://apicarto.ign.fr/api/codes-postaux/communes/".concat(postalCode)));

          case 6:
            response = _context.sent;

            if (response.ok) {
              _context.next = 19;
              break;
            }

            _context.next = 10;
            return regeneratorRuntime.awrap(fetch("fetch(\"https://apicarto.ign.fr/api/codes-postaux/communes/\"+input.value)"));

          case 10:
            prefixResponse = _context.sent;

            if (prefixResponse.ok) {
              _context.next = 13;
              break;
            }

            throw new Error('Impossible de trouver des informations pour ce code postal. Veuillez essayer un autre code postal');

          case 13:
            _context.next = 15;
            return regeneratorRuntime.awrap(prefixResponse.json());

          case 15:
            data = _context.sent;
            displayCommunities(data);
            _context.next = 23;
            break;

          case 19:
            _context.next = 21;
            return regeneratorRuntime.awrap(response.json());

          case 21:
            _data = _context.sent;
            displayCommunities(_data);

          case 23:
            _context.next = 29;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](3);
            box.textContent = "Error: ".concat(_context.t0.message, ". Veuillez essayer un autre code postal.");
            console.error('Error completo:', _context.t0);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 25]]);
  } // Variable para controlar el tiempo entre búsquedas


  var searchTimeout = null; // Evento para el botón

  btn.onclick = function () {
    var postalCode = input.value.trim();
    searchCommunities(postalCode);
  }; // Autocompletado mejorado


  input.addEventListener('input', function () {
    var postalCode = this.value.trim();

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (postalCode.length >= 2) {
      searchTimeout = setTimeout(function () {
        searchCommunities(postalCode);
      }, 300);
    } else {
      box.textContent = "Entrez au moins 2 chiffres pour rechercher";
    }
  }); // Estilo CSS inicial

  var style = document.createElement('style');
  style.textContent = "\n        .commune-item {\n            margin: 10px 0;\n            padding: 10px;\n            border: 1px solid #ddd;\n            border-radius: 4px;\n        }\n        .commune-item:hover {\n            background-color: #f5f5f5;\n        }\n    ";
  document.head.appendChild(style);
};