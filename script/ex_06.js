window.onload = function () 
{
    var box = document.querySelector("footer div");
    box.style.fontSize = "13px";

    fetch("https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?limit=25&offset=0")
        
        .then(function(response) 
        {
            return response.json();
        })
        
        .then(function(data) 
        {
            data.records.forEach(function(element) 
            {
                const commune = element.record.fields.nom_commune || "No disponible";
                const etablissement = element.record.fields.nom_etablissement || "No disponible";
                const mail = element.record.fields.mail || "No disponible";

                var p = document.createElement("p");
                p.textContent = commune + " - " + etablissement + " | Contacto: " + mail;

                box.appendChild(p);
            });
        })
        
        .catch(function(error) 
        {
            console.error("Error 404 : ", error);
        });
};
