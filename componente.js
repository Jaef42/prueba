document.addEventListener("DOMContentLoaded", function (){
    const headerContainer = document.querySelector("#container-header");
    fetch("header.html")
    .then(respuesta => {
        if(!respuesta.ok){
            throw new Error("La respuesta no es la correcta");
        }
        return respuesta.text();
    })
    .then(datos => {
        headerContainer.innerHTML = datos;
    })
});