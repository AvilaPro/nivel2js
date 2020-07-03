//Tener acceso al Select desde Javascript
const select = document.getElementById("miSelect");
//Agregar Elemento al Select
const agregar = () => {
	const option = document.createElement('option');
	const fecha = new Date().getTime();
	option.value = fecha;
	option.text = fecha;
	select.appendChild(option);
}
//Escuchar cuando la seleccion cambia
const opcCambio = () => {
	console.log('La opcion cambio');
}
select.addEventListener("change", opcCambio);
//Obtener la opcion seleccionada
const mostrar = () => {
	const indice = select.selectedIndex;
	if(indice === -1) return; //Si no hay elementos
	const opcionSeleccionada = select.options[indice];
	console.log('Opcion seleccionada: ' + opcionSeleccionada.text);
	alert('Opcion seleccionada: ' + opcionSeleccionada.text);
}
//Limpiar todos los elementos del Select
const limpiar = () => {
	for (let i = select.options.length; i >= 0; i--){
		select.remove(i);
	}
}
//Preparar acciones de los botones
document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("btnAgregar").addEventListener("click", agregar);
	document.querySelector('#btnLimpiar').addEventListener("click", limpiar);
	document.getElementById("btnMostrarSeleccion").addEventListener("click", mostrar);
})