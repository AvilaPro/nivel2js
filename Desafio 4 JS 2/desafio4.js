
var codigos=["01","02","03","04","05"]
var nombres=["producto A","producto B","producto C","producto D","producto E",];
var precios=["100","200","300","400","500"]
var cantidades=[2,3,4,5,3];
var i=1;
document.form2.subsubtotal.value=parseFloat("0");
document.form2.iva.value=parseFloat("0");
document.form2.total.value=parseFloat("0");

function numeroReal(e) 
{
	tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    patron = /[^0-9.-]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function validarenter(e) 
{
	// para que funcione en cualquier navegador
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; ; 
	// para permitir backspace
    if (tecla==13) {
        var codigo = document.form1.codigo;
        if(codigos.indexOf(codigo.value)!=-1){
            var ubicacion=codigos.indexOf(codigo.value);
            document.form1.nombre.value=nombres[ubicacion];
            document.form1.precio.value=precios[ubicacion];
            document.getElementById("cantidad").style.display="block";
            document.getElementById("errorcodigo").style.display="none";
        }else{
            document.getElementById("errorcodigo").style.display="block";
        }
    }
}
function subTotal(a){
    tecla1 = (a.keyCode!=0) ? a.keyCode : a.charCode; ;
    cant=parseInt(document.form1.cantidad.value);
    console.log(cant);
    var codigo = document.form1.codigo;
    var ubicacion=codigos.indexOf(codigo.value);
    document.form1.subtotal.value=parseInt("0");
    if(cant>=1){
        if(cant<=cantidades[ubicacion]){
            document.getElementById("errorcantidad").style.display="none";
            document.form1.subtotal.value=cant*parseInt(precios[ubicacion]);
            document.form1.btnAgregar.disabled=false;
        }else{
            document.getElementById("errorcantidad").style.display="block";
        }
    }
    
}
document.form1.btnAgregar.onclick= function(){
    var codigo = document.form1.codigo;
    var ubicacion=codigos.indexOf(codigo.value);
    document.form2.subsubtotal.value=parseFloat(document.form2.subsubtotal.value)+parseFloat(document.form1.subtotal.value);
    document.form2.iva.value=parseFloat(document.form2.subsubtotal.value)*0.12;
    document.form2.total.value=parseFloat(document.form2.subsubtotal.value)+parseFloat(document.form2.iva.value);
    nombrep=nombres[ubicacion];
    preciop=precios[ubicacion];


    cantp=cantidades[ubicacion];
    // se crea un tr nuevo
    var tr_nuevo = document.createElement("tr");
    tr_nuevo.id=i;
    // se crea un td nuevo
    var td_nuevo1 = document.createElement("td");
    var td_nuevo2 = document.createElement("td");
    var td_nuevo3 = document.createElement("td");
    // se crea un texto nuevo
    var texto1 = document.createTextNode(nombrep);
    var texto2 = document.createTextNode(preciop);
    var texto3 = document.createTextNode(cantp);
    // se agrega el texto al td nuevo
    td_nuevo1.appendChild(texto1);
    td_nuevo2.appendChild(texto2);
    td_nuevo3.appendChild(texto3);
    // se busca el elemento donde se va a agregar el div nuevo
    var tr_tabla=document.getElementById("tabla1");
    // se agrega el tr y td nuevo
    tr_tabla.appendChild(tr_nuevo);
    tr_nuevo.appendChild(td_nuevo1);
    tr_nuevo.appendChild(td_nuevo2);
    tr_nuevo.appendChild(td_nuevo3);
    document.getElementById("cantidad").style.display="none";
    i++;
    document.form2.btnFacturar.disabled=false;
    this.form.reset();
}
document.form2.btnFacturar.onclick= function(){
    if(confirm("Desea facturar con estos productos?")){
        document.form1.submit();
        document.tabla1.reset();
    }
}
