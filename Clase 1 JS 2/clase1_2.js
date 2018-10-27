
function cambiarTitulo(){
    var titulo =window.document.getElementById("titulo");
    if (titulo!=undefined)
        titulo.innerHTML="Eduardo";
    else
        console.log("no encontre el id titulo");
        var caja =window.document.getElementById("caja-inclinada");
        caja.style.backgroundColor="yellow";
        caja.innerHTML+="Eduardo";
}