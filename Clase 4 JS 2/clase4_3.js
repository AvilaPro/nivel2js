var nombres=[];
var notas=[];

document.form1.boton.onclick= function(){
    var nombre = document.form1.nombre;
    var nota = document.form1.nota;
    // indexOf busca un elemento en un arreglo
    // si no lo consigue, retorna -1, en caso contrario
    // retorna el indice donde esta ubicado el elemento
    if (nombres.indexOf(nombre.value.toLowerCase())==-1){
        
        nombres.push(nombre.value.toLowerCase());
        notas.push(nota.value);

        agregarElemento(nombres.length,nombre.value,nota.value);

        nombre.value="";
        nota.value=""
    }else
        alert("repetido")
}

function agregarElemento(i,nombre,nota){
    // se crea un div nuevo
    var div_nuevo = document.createElement("div");
    div_nuevo.id=i;
    // se crea un texto nuevo
    var texto = document.createTextNode(i+" "+nombre+" "+nota);
    // se agrega el texto al div nuevo
    div_nuevo.appendChild(texto);
    // se busca el elemento donde se va a agregar el div nuevo
    var div_listado=document.getElementById("listado");
    // se agrega el div nuevo
    div_listado.appendChild(div_nuevo);
}