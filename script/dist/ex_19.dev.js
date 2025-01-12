"use strict";

window.onload = function () {
  var footer = document.querySelector('footer div'); // Crear los elementos necesarios

  var datePicker = document.createElement('input');
  datePicker.type = 'date';
  var saveButton = document.createElement('button');
  saveButton.textContent = 'Save Date';
  var dateDisplay = document.createElement('span');
  dateDisplay.style.marginLeft = '10px';
  footer.appendChild(datePicker);
  footer.appendChild(saveButton);
  footer.appendChild(dateDisplay);
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Función para formatear la fecha

  function formatDate(dateString) {
    var date = new Date(dateString);
    var dayName = weekDays[date.getDay()];
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    return "".concat(dayName, " ").concat(day, " ").concat(month, " ").concat(year);
  } // Evento click del botón


  saveButton.addEventListener('click', function () {
    if (datePicker.value) {
      var formattedDate = formatDate(datePicker.value);
      dateDisplay.textContent = formattedDate;
    }
  });
};