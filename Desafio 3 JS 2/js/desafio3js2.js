
document.form1.cedula.onkeypress=validar_numero;
document.form1.nombre.onkeypress=validarletra;
document.form1.telefono.onkeypress=validar_numero;
document.form1.usuario.onkeypress=validarletra;


function onclick(){
    validar(this.form)
}
document.form1.registrar.onclick=onclick;


function validar(form){
    if(!esta_vacio_formulario(form.cedula,"Debe escribir su correo","errorcedula"))
       if(!esta_vacio_formulario(form.nombre,"Debe escribir su nombre","errornombre"))
            if(validar_select(form.dia))
                if(validar_select(form.mes))
                    if(validar_select(form.anho))
                        if(!esta_vacio_formulario(form.correo,"Debe ingresar su correo","errorcorreo"))
                            if(validarcorreo(form.correo))
                                if(!esta_vacio_formulario(form.telefono,"Debe escribir su telefono","errortelefono"))
                                    if(!esta_vacio_formulario(form.usuario,"Debe ingresar el nombre de usuario","errorusuario"))
                                        if(validar_usuario(form.clave,"Debe ingresar su clave","errorclave"))
                                            if(validar_clave2(form.clave2,"Debe coincidir con la primera clave ingresada","errorclave2"))
                                                if(validar_select(form.curso))
                                                    if(!esta_vacio(form.horario,"Ingrese el horario a cursar"))
                                                        if(confirm("Seguro"))
                                                            form.submit();
                                                            document.getElementById("h1").style.display="block";
                                                            
                                                            


}