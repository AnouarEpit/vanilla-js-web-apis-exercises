const footerDiv = document.querySelector('.exercice footer div');

footerDiv.addEventListener('click', function() 
{
    let name = prompt("What is your name?");
    
    while (!name) 
        {
            name = prompt("Please enter your name. It cannot be empty.");
        }
        
    if (confirm(`Are you sure "${name}" is your name?`)) 
        {
            footerDiv.textContent = `Hello ${name}!`;
            alert(`Hello ${name}!`);
        }
});
