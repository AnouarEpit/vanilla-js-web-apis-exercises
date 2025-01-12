window.onload = function() 
{
    const box = document.querySelector("footer div");
    const input = document.querySelector("input");
    const btn = document.querySelector("button");

    // Función para validar el código postal
    function isValidPostalCode(postalCode) 
    {
        return /^\d{2,5}$/.test(postalCode); 
    }

    // Función para mostrar las comunidades
    function displayCommunities(communities) 
    {
        box.innerHTML = ""; 

        if (communities && communities.length > 0) 
        {
            const resultsDiv = document.createElement('div');
            communities.forEach(commune => {
                const communeDiv = document.createElement('div');
                communeDiv.className = 'commune-item';
                communeDiv.innerHTML = `
                    <strong>Commune:</strong> ${commune.nomCommune || 'N/A'}<br>
                    <strong>Code Postal:</strong> ${commune.codePostal || 'N/A'}<br>
                    <strong>Libellé:</strong> ${commune.libelleAcheminement || 'N/A'}
                `;
                resultsDiv.appendChild(communeDiv);
            });
            box.appendChild(resultsDiv);
        } 
        else 
        {
            box.textContent = "Erreur: Impossible de trouver des informations pour ce code postal. Veuillez essayer un autre code postal.";
        }
    }

    // Función para buscar comunidades con retry
    async function searchCommunities(postalCode) 
    {
        if (!isValidPostalCode(postalCode)) 
        {
            box.textContent = "Veuillez entrer un code postal valide (2-5 chiffres)";
            return;
        }

        try {
            // Intentamos primero con el código postal exacto
            const response = await fetch(`https://apicarto.ign.fr/api/codes-postaux/communes/${postalCode}`);
            
            if (!response.ok) 
            {
                const prefixResponse = await fetch(`fetch("https://apicarto.ign.fr/api/codes-postaux/communes/"+input.value)`);
                
                if (!prefixResponse.ok) 
                {
                    throw new Error('Impossible de trouver des informations pour ce code postal. Veuillez essayer un autre code postal');
                }
                
                const data = await prefixResponse.json();
                displayCommunities(data);
            } else {
                const data = await response.json();
                displayCommunities(data);
            }
        } catch (error) {
            box.textContent = `Error: ${error.message}. Veuillez essayer un autre code postal.`;
            console.error('Error completo:', error);
        }
    }

    // Variable para controlar el tiempo entre búsquedas
    let searchTimeout = null;

    // Evento para el botón
    btn.onclick = function() 
    {
        const postalCode = input.value.trim();
        searchCommunities(postalCode);
    }

    // Autocompletado mejorado
    input.addEventListener('input', function() 
    {
        const postalCode = this.value.trim();
        
        if (searchTimeout) 
        {
            clearTimeout(searchTimeout);
        }

        if (postalCode.length >= 2) {
            searchTimeout = setTimeout(() => {
                searchCommunities(postalCode);
            }, 300);
        } else {
            box.textContent = "Entrez au moins 2 chiffres pour rechercher";
        }
    });

    // Estilo CSS inicial
    const style = document.createElement('style');
    style.textContent = `
        .commune-item {
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .commune-item:hover {
            background-color: #f5f5f5;
        }
    `;
    document.head.appendChild(style);
}

