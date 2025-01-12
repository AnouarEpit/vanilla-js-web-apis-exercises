window.onload = () => {
    const footer = document.querySelector('footer div');
    
    // Crear los elementos necesarios
    const datePicker = document.createElement('input');
    datePicker.type = 'date';
    
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save Date';
    
    const dateDisplay = document.createElement('span');
    dateDisplay.style.marginLeft = '10px';
    
    footer.appendChild(datePicker);
    footer.appendChild(saveButton);
    footer.appendChild(dateDisplay);
    
    const weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    
    // Función para formatear la fecha
    function formatDate(dateString) {
        const date = new Date(dateString);
        
        const dayName = weekDays[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        
        return `${dayName} ${day} ${month} ${year}`;
    }
    
    // Evento click del botón
    saveButton.addEventListener('click', () => {
        if (datePicker.value) {
            const formattedDate = formatDate(datePicker.value);
            dateDisplay.textContent = formattedDate;
        }
    });
};