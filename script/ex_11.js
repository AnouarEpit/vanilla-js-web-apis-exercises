window.onload = () => {
    
    const footer = document.querySelector("footer");
    const messageDiv = footer.querySelector("div");
    const okLink = messageDiv.querySelector("a");
  
    // Crear un nuevo contenedor y botón dinámicamente
    const deleteDiv = document.createElement("div");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete cookie";
    
    // Oculro el contenido 
    deleteDiv.style.display = "none"; 

    deleteDiv.appendChild(deleteButton);
    footer.appendChild(deleteDiv);
  
    // Función para establecer una cookie
    const setCookie = (name, value, days) => {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    };
  
    // Función para obtener una cookie
    const getCookie = (name) => {
      const cookies = document.cookie.split("; ");
      for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
      }
      return null;
    };
  
    // Función para borrar una cookie
    const deleteCookie = (name) => {
      setCookie(name, "", -1); // Establecer la cookie con un tiempo expirado
    };
  
    // Función para actualizar la interfaz de usuario
    const updateUI = () => {
      const acceptsCookies = getCookie("acceptsCookies") === "true";
      if (acceptsCookies) {
        messageDiv.style.visibility = "hidden";
        deleteDiv.style.display = "block";
      } else {
        messageDiv.style.visibility = "visible";
        deleteDiv.style.display = "none";
      }
    };
  
    // Evento para el enlace "OK"
    okLink.addEventListener("click", (event) => {
      event.preventDefault(); 
      setCookie("acceptsCookies", "true", 1); // Establecer la cookie
      updateUI(); // Actualizar la interfaz
    });
  
    // Evento para el botón "Delete cookie"
    deleteButton.addEventListener("click", () => {
      deleteCookie("acceptsCookies"); 
      updateUI();
    });
  
    // Inicializar la interfaz en función del estado de las cookies
    updateUI();
  };
  
    
    
    
    