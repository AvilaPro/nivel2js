//Punto 1 de la practica
//window.location = prompt("Ingrese la Url que desea visitar: " );

//Punto 2 de la practica
var ancho = screen.width;
var largo = screen.height;

alert("El ancho de la pantalla es: "+ ancho + " y el largo es: "+ largo);

//Punto 3 de la practica
//Directamente hecho en el HTML

//Punto 4 de la practica

console.log("product: "+navigator.product);
console.log("ServiceWorker: "+navigator.serviceWorker);
console.log("userAgent: "+navigator.userAgent);

//PRACTICA 2
//Punto 1
function recargar(){
    window.open("practica2.html","",screen.width,screen.height);
    
}
function maximizar(){
    window.moveTo(0,0);
    window.resizeTo(screen.width,screen.height);
}
function cerrar(){
    window.close();
}

//PRACTICA 3
// Punto 3 de la practica

function cambiarColor(){
    document.bgColor="lightgreen";
}

function insertarObjeto(){
    document.open();
    document.write("<h2>Objeto incrustado</h2>");
    document.close();
}

//PRACTICA 4
var cambio1 = document.getElementById("a");

cambio1.onclick=cambioColor;

function cambioColor(){
    
}