var nombres=[];
var notas=[];

document.form1.boton.onclick= function(){
    var nombre = document.form1.nombre;
    var nota = document.form1.nota;
    // indexOf busca un elemento en un arreglo
    // si no lo consigue, retorna -1, en caso contrario
    // retorna el indice donde esta ubicado el elemento
    if (nombres.indexOf(nombre.value.toLowerCase())==-1){
        
        create(nombre.value.toLowerCase(),nota.value)

        nombre.value="";
        nota.value=""
    }else
        alert("repetido")
}

function create(nombre,nota){
    nombres.push(nombre);
    notas.push(nota);

    agregarElemento(nombres.length,nombre,nota);
}
function deletee(nombre,id){
    if (confirm("Seguro desea eliminar "+nombre+" ?")){
        let posicion = nombres.indexOf(nombre);
        // elimina el elemento de las posicion i-1
        nombres.splice(posicion,1)
        notas.splice(posicion,1);
        // buscamos el div que contiene al elemento que 
        // deseamos eleminar
        var div_listado=document.getElementById("listado");
        // se elimina el elemento
        div_listado.removeChild(document.getElementById(id));
    }
}
function read(i){
    document.form1.nombre.value=nombres[i-1];
    document.form1.nota.value=notas[i-1];
}

function agregarElemento(i,nombre,nota){
    // se crea un div nuevo
    var div_nuevo = document.createElement("div");
    div_nuevo.id=i;
    div_nuevo.onclick=function (){
        read(this.id);
    }
    // se crea un boton
    var boton_nuevo = document.createElement("input");
    boton_nuevo.type="button"
    boton_nuevo.value="Eliminar"
    boton_nuevo.onclick=function (){
        deletee(nombre,i);
    }
    // se crea un texto nuevo
    var texto = document.createTextNode(i+" "+nombre+" "+nota);
    // se agrega el texto al div nuevo
    div_nuevo.appendChild(texto);
    div_nuevo.appendChild(boton_nuevo);
    // se busca el elemento donde se va a agregar el div nuevo
    var div_listado=document.getElementById("listado");
    // se agrega el div nuevo
    div_listado.appendChild(div_nuevo);
    
}