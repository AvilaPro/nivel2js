function mostrarFecha() {
	var fecha = new Date();
	var elemento = document.getElementById("dia");

	let dia = fecha.getDate();
	let mes = fecha.getMonth() + 1;
	let anno = fecha.getFullYear();
	let hora = fecha.getHours();
	let minuto = fecha.getMinutes();

	elemento.innerHTML="Dia: " + dia + " mes: " + mes + " año: " + anno + " y la hora es: " + hora + ":"+minuto;

	timer = window.setInterval('introHora()',1000);
	timer1 = window.setTimeout('redireccionar()',5000);
}

function introHora() {
	var elemento2 = document.getElementById("setInt");
	var fecha = new Date();
	let hora = fecha.getHours();
	let minuto = fecha.getMinutes();
	let segundo = fecha.getSeconds();

	elemento2.innerHTML="Hora: " + hora + " Minuto: " + minuto + " Segundo: " + segundo;
}

function redireccionar() {
	window.location="http://www.cadif1.com";
}