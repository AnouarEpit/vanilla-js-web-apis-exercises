window.onload = function() {
    const footerDiv = document.querySelector("footer > div");
    const canvasItems = footerDiv.children;

    footerDiv.style.display = "flex";
    footerDiv.style.justifyContent = "center";

    const colorOrderMap = {
        "rgb(255, 165, 0)": 1,  
        "rgb(128, 0, 128)": 2,  
        "rgb(0, 0, 0)": 3,      
        "rgb(128, 128, 0)": 4   
    };

    for (let item of canvasItems) 
        {
            const bgColor = window.getComputedStyle(item).backgroundColor;
            const order = colorOrderMap[bgColor];
            
            if (order !== undefined) 
            {
                item.style.order = order;
            }
        }
};