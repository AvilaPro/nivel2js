function getChar(event) 
{
	if (event.keyCode != 0) 
		return String.fromCharCode(event.keyCode) ;
	else
		if (event.charCode!=0) 
			return String.fromCharCode(event.charCode);   
		else 
			return null;
}

function validar_select(select)
{
	if (select.selectedIndex ==0)
	{
		alert("Debe seleccionar un elemento de la lista");
		select.focus();
		return false;
	}else
		return true;
}
		
function validarletra(e) 
{
	// para que funcione en cualquier navegador
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; ; 
	// para permitir backspace
    if (tecla==8 || tecla==9) return true; 
    // de define el conjunto de caracteres validas
	patron =/[A-Za-zÀ-ÿ\u00f1\u00d1\s]/;
	// se convierte a caracter
    te = String.fromCharCode(tecla); 
	// se evalua si la tecla presionada este en el conjunto
    return patron.test(te);
} 

function validar_numero(e) 
{
	// para que funcione en cualquier navegador
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; 
    // para permitir backspace
	if (tecla==8 || tecla==9) return true; 
    // de define el conjunto de caracteres validas
	patron = /[0-9-]/;
    // se convierte a caracter
	te = String.fromCharCode(tecla);
	// se evalua si la tecla presionada este en el conjunto
    return patron.test(te);
}

function esta_vacio(campo,mensaje)
{
	if ( campo.value == "" )
	{
		alert(mensaje);
		campo.focus();
		return true;
	}else
		return false;
}
function esta_vacio_formulario(campo,mensaje,validador)
{
	if ( campo.value == "" )
	{
		alert(mensaje);
		document.getElementById(validador).style.display="block";
		campo.focus();
		return true;
	}else
		return false;
}
function esta_vacio_nomensaje(campo,validador)
{
	if ( campo.value == "" )
	{
		document.getElementById(validador).style.display="block";
		campo.focus();
		return true;
	}else{
		document.getElementById(validador).style.display="none";
		return false;
	}
		
}
function validar_usuario(campo,mensaje,validador){
	if(campo.length<=4){
		alert(mensaje);
		campo.focus();
		document.getElementById(validador).style.display="block";
		return false;
	}else
		return true;
}
function validar_clave2(campo,mensaje,validador){
	if(document.getElementById("clave").value!=campo.value){
		alert(mensaje);
		campo.focus();
		document.getElementById(validador).style.display="block";
		return false;
	}else
		return true;
}

function validarcorreo(correo)
{
	regx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
	if (regx.test(correo.value))
		return true;
	else
	{
		alert("Formato de correo incorrecto");
		correo.focus();
		return false;
	}
}

function validarnumero(e) 
{
	tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    patron = /\d/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
} 

function numeroReal(e) 
{
	tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    patron = /[^0-9.-]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}