document.addEventListener("DOMContentLoaded", () => 
{
    const footerDiv = document.querySelector("footer div");
    let clickCount = 0; 

    footerDiv.addEventListener("click", () => 
    {
        clickCount++; 
        footerDiv.textContent = clickCount;
    });
});
