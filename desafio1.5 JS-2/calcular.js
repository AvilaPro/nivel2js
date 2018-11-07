var prom_total=0;
var aprobacion;
var aprobacion_exa;
var acumulador=0;
var prom_secc=0;
var cantidad_apro=0;
var porcentaje=0;
var n=0;
function limpiar() 
{
	document.fm.reset();
}
function agregar() {

	n++;
	let listado=document.getElementById("alumno");
	let estudiante=document.fm.nombre.value;
	document.fm.aagregar.disabled=true;
	alumno.innerHTML+=n+" - "+document.fm.nombre.value+" / notas: |"
	+document.fm.nota1.value+"|"+document.fm.nota2.value+"|"
	+document.fm.nota3.value+"|"+document.fm.nota4.value+"| / promedio: "
	+document.fm.prom.value+"ptos - "+document.fm.aprobacion.value+"\n\n"+" / nota del examen:"
	+document.fm.nota_examen.value+"ptos - "+document.fm.aprobacion_exa.value+"<br>";
	document.fm.reset();
	acumulador=acumulador+prom;
	prom_secc=acumulador/n;
	document.fm.prom_secc.value=prom_secc;
	document.fm.cantidad_apro.value=cantidad_apro;
	porcentaje=(cantidad_apro/n)*100;
	document.fm.porcentaje.value=porcentaje;

}
function calcular() 
{

	let nota1=parseFloat(document.fm.nota1.value);
	let nota2=parseFloat(document.fm.nota2.value);
	let nota3=parseFloat(document.fm.nota3.value);
	let nota4=parseFloat(document.fm.nota4.value);
	let nota_examen=parseFloat(document.fm.nota_examen.value);
	prom=(nota1+nota2+nota3+nota4)/4;
	document.fm.prom.value=prom;
	document.fm.nota_examen.value=nota_examen;
	if (prom>=80 && prom<=100) {
		aprobacion="Aprobo los desadio.";
	}
	else
	{
		if (prom>=0 && prom<=79) {
			aprobacion="No Aprobo los desafios.";
		}
	}
	if (nota_examen>=80 && nota_examen<=100) {
		aprobacion_exa="Aprobo el examen.";
		cantidad_apro=cantidad_apro+1;
	}
	else
	{
		if (nota_examen>=0 && nota_examen<=79) {
			aprobacion_exa="No Aprobo el examen.";
		}
	}
	document.fm.aprobacion.value=aprobacion;
	document.fm.aprobacion_exa.value=aprobacion_exa;
	document.fm.aagregar.disabled=false;
}
function validarNota(input,id){
	if ((parseFloat(input.value) >= 0 && parseFloat(input.value) <= 100) && !isNaN(input.value) && input.value != "")
	{
		input.style.background = "white";
		document.getElementById(id).style.display = "none";
	}
	else
	{
		input.style.background = "red"
		document.getElementById(id).style.display = "inline-block"
	}
}
function validarnombre(nombre){
	if (nombre.value != "" && isNaN(parseInt(nombre.value))) {
		nombre.style.background = "white";
		document.getElementById("error_nombre").style.display = "none";
	}
	else
	{
		nombre.style.background = "red";
		document.getElementById("error_nombre").style.display = "inline-block";
	}
}