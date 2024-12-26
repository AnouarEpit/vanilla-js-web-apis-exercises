window.onload = function() 
{
    const canvas = document.querySelector('canvas');
    const pint = canvas.getContext('2d');
    const audio = new Audio('musicpack_023_og.mp3');

    // Trianguloo 
    pint.moveTo(6, 6);
    pint.lineTo(14, 10);
    pint.lineTo(6, 14);
    pint.closePath();
    
    pint.strokeStyle = "white";  
    pint.stroke();               


    canvas.onclick = function() 
    {
        audio.play();
    };

 
    const buttons = document.querySelectorAll('footer > div:nth-child(2) button');
    buttons[0].onclick = function() 
    { 
        audio.pause(); 
    };    
    
    buttons[1].onclick = function() 
    {                 
        audio.pause();
        audio.currentTime = 0;
    };
    
    buttons[2].onclick = function() 
    {                 // Silenciar (mUteD) 
        audio.muted = !audio.muted;
    };
};
