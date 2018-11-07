
var r=1,g=1,b=1;

document.form1.nombre.onkeypress=validarletra;
document.onkeydown = function (event){
    cambiarColor(event)
}
document.form1.acepto.onclick=function(){
    alert(this.checked)
}
document.form1.acepto.onblur=function(){
    console.log("blur en el ckeckbox")
}
function onclick(){
    validar(this.form)
}
document.form1.registrar.onclick = onclick;


function cambiarColor(e){
    console.log(e.keyCode)
    if (e.keyCode == 38)
        r=g=b+=10;
    else    
        if (e.keyCode==40)
            r=g=b-=10;

    document.body.style.backgroundColor="rgb("+r+","+g+","+b+")";
}
function validar(form){
    if (!esta_vacio(form.nombre,"Debe seleccionar el nombre"))
        if (validarcorreo(form.correo))
            if (validar_select(form.ciudad))
                if (form.acepto.checked==false){
                    alert("Debe aceptar las condiciones")
                }else
                    if (confirm("Seguro?"))
                        form.submit();
}