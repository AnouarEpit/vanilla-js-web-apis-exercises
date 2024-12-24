document.addEventListener("DOMContentLoaded", () => 
{
    const footerDiv = document.querySelector("footer div"); 

    footerDiv.addEventListener("click", () => {
        let name = prompt("What is your name?");
        while (!name) 
        {
            name = prompt("What is your name?"); 
        }

        const confirmation = confirm(`Are you sure ${name} is your name?`); 
        if (confirmation) 
        {
            const greeting = `Hello ${name}!`; 
            footerDiv.textContent = greeting;
            alert(greeting); 
        }
    });
});
