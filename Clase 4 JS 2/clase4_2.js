var nombres=[];
var notas=[];
var i=0

document.form1.boton.onclick= function(){
    var nombre = document.form1.nombre;
    var nota = document.form1.nota;

    if(nombres.indexOf(nombre.value)==-1){
        nombres.push(nombre.value);
        notas.push(nota.value);   

        console.log(nombres);
        console.log(notas);

        mostrarListado(i,nombres,notas);

        i++;
        nombre.value="";
        nota.value="";
        document.form1.nombre.focus();
    }
    else{
        alert("repetido");
        var div_nuevo1=document.createElement("p");
        div_nuevo1.id=i+1;
        div_nuevo1.value="El nombre ya se encuentra en la posicion:" +nombres.indexOf(nombre.value);
        
        document.form1.nombre.value="";
        document.form1.nombre.style.background="red";
        document.form1.nota.value="";
        document.form1.nota.style.background="red";
        document.form1.nombre.focus();
    }

}

function read(i){
    document.form1.nombre.value=nombres[i-1];
    document.form1.nota.value=notas[i-1];
}

function deletee(nombres,i){
    if (confirm("Seguro desea eliminar "+nombre+"?")){
        let posicion = nombres.indexOf(nombres,i);
        // elimina el elemento de las posicion i-1
        nombres.splice(posicion,1)
        notas.splice(posicion,1);
        // buscamos el div que contiene al elemento que 
        // deseamos eleminar
        var div_listado=document.getElementById("lista");
        // se elimina el elemento
        div_listado.removeChild(document.getElementById(id));
    }
}

function mostrarListado(i,nombres,notas){
    //se crea un div nuevo
    var div_nuevo = document.createElement("div");
    div_nuevo.id=i+1;
    
    //se crea un boton
    var boton_nuevo = document.createElement("input");
    boton_nuevo.id=1;
    boton_nuevo.type="button";
    boton_nuevo.value="Eliminar";
    boton_nuevo.onclick=function(){
        deletee(nombres,i);
    }
    //se crea un texto nuevo
    var texto = document.createTextNode(i+1+"- Nombre: "+nombres[i]+". Nota: "+notas[i]);
    //se agrega el texto al div nuevo
    div_nuevo.appendChild(texto);
    //se busca el elemento donde se va a agregar el div nuevo
    var div_listado=document.getElementById("lista");
    // se agrega el div nuevo
    div_listado.appendChild(div_nuevo);
    //se agrega el bton nuevo
    div_nuevo.appendChild(boton_nuevo);
  


}