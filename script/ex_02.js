const footerDiv = document.querySelector('.exercice footer div');
let clickCount = 0;

footerDiv.addEventListener('click', function() 
{
    clickCount++;
    footerDiv.textContent = clickCount;
});
