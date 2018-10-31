
function cambiarTitulo(){
    var titulo = window.document.getElementById("titulo");
    if (titulo!=undefined)
        titulo.innerHTML="Jose Luis";
    else
        console.log("no encontre el id titulo");

    var caja = window.document.getElementById("caja-inclinada"); 
    //caja.style.display="none";
    caja.style.backgroundColor="yellow";
    caja.innerHTML+="jose luis"
}