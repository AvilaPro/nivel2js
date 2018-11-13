var nombres=[];
var notas=[];

document.form1.boton.onclick= function(){
    var nombre = document.form1.nombre;
    var nota = document.form1.nota;
    // indexOf busca un elemento en un arreglo
    // si no lo consigue, retorna -1, en caso contrario
    // retorna el indice donde esta ubicado el elemento
    if (nombres.indexOf(nombre.value)==-1){
        nombres.push(nombre.value);
        notas.push(nota.value);
        
        console.log(nombres);
        console.log(notas);

        nombre.value="";
        nota.value=""

        mostrarListado();
    }
}

function mostrarListado(){
    var div=document.getElementById("listado");
    div.innerHTML="";
    for (let i=0;i<nombres.length;i++){
        div.innerHTML+=(i+1)+"- ";
        div.innerHTML+=nombres[i];
        div.innerHTML+="  "+notas[i]+"<br>";
    }
}