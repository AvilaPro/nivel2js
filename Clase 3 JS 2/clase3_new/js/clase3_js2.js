/* function genera_tabla() {
    var body = document.getElementsByTagName("body")[0];

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var btn1 = document.createElement("button");
    btn1.type="button";
    btn1.innerText='Nº de filas:';
    btn1.onclick= () => {
        alert("El numero de filas es: " + tabla.rows.length);
    }

    var btn2 = document.createElement("button");
    btn2.type="button";
    btn2.innerText='Valor 2,2';
    btn2.onclick= () => {
        alert("El numero de filas es: " + tabla.rows[1].cells.item(1).innerHTML);
    }


    for(var i = 0; i < 2; i++) {
        var fila = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("Fila " + i + "Columna " + j);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }

        tblBody.appendChild(fila);
    }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    body.appendChild(btn1);
    body.appendChild(btn2);

    tabla.setAttribute("border", "2");
} */

function genera_tabla() {
    var body = document.getElementsByTagName("body")[0];

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for(m=1; m < 11; m++){
        for(var i = 1; i < 11; i++) {
            var fila = document.createElement("tr");
    
            for (let j = 1; j < 4; j++) {
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode("Fila " + i + "Columna " + j);
                if(j=1){
                    var textoCelda1 = document.createTextNode(m + " x ");
                }
                if(j=2){
                    var textoCelda2 = document.createTextNode(" " + i);
                }
                if(j=3){
                    var textoCelda3 = document.createTextNode(" = " + m*i );
                }
                celda.appendChild(textoCelda1);
                celda.appendChild(textoCelda2);
                celda.appendChild(textoCelda3);
                fila.appendChild(celda);
            }
    
            tblBody.appendChild(fila);
        }
    }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);

    tabla.setAttribute("border", "2");
}

function validarForm(form) {
    if(form.correo.value == ""){
        alert("Hey, debes colocar el correo!");
        form.correo.focus();
    }else{
        if(form.clave.value == ""){
            alert("Hey, debes colocar la clave!");
            form.clave.focus();
        }else{
            form.submit();
        }
    }
}

/* function funcSubmit(form) {
    if(form.correo.value == ""){
        alert("Hey, debes colocar el correo!");
        form.correo.focus();
        return false;
    }else{
        if(form.clave.value == ""){
            alert("Hey, debes colocar la clave!");
            form.clave.focus();
            return false;
        }else{
            return true;
        }
    }
} */

function funcSubmit(form) {
    if(estaVacio(form.correo, "Debes colocar el correo!")){
        return false;
    }else{
        if(estaVacio(form.clave, "Debes colocar la clave!")){        
            return false;
        }else{
            if(validarSelect(form.tipo) == false){
                return false;
            }else{
                if(validarCheckbox(form.condicion)== false){
                    return false;
                }else
                return true;
            }
        }
    }
}

function validarSelect(select) {
    if(select.value == 0){
        alert("Debe seleccionar un tipo!");
        select.focus();
        return false;
    }else return true;
}

function validarCheckbox(check) {
    if(check.checked == false){
        alert("Si no estas de acuerdo no puedes ingresar!!!");
        return false;
    }else return true;
}

function estaVacio(campo, mensaje) {
    if(campo.value == ""){
        alert(mensaje);
        campo.focus();
        return true;
    }else{
        return false;
    }
}

/* function funcSubmit() {
    alert("Se ha hecho submit");
} */

function submitClick() {
    document.form1.submit();
}

/* function funcBlur() {
    document.form1.correo.onblur = hayBlur;
    document.form1.clave.onblur = hayBlur;
}

function hayBlur() {
    alert("Sucedio un onBlur");
} */