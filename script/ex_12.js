window.onload = function() 
{

    const box = document.querySelector("footer div");
    var url = document.getElementsByTagName("a")[0];
    // TESTTTT // 
    //const url = document.getElementsByTagName("a")[0].href; // Obtenemos solo el atributo href
    //  localStorage.setItem("image", url);
    //console.log(url);

    localStorage.setItem("image", url);

    const imageUrl = localStorage.getItem('image');  //Recupermos la URl

    const img = document.createElement("img"); // Creamos un elemento img
    img.src = imageUrl; 
    img.style.width = "100%"; 

    box.appendChild(img);
}