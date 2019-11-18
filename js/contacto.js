window.onload = function(){
    var contadorCompras = localStorage.getItem("contador");
    
    if(contadorCompras != undefined){
        document.getElementById("cart-counter").innerHTML = contadorCompras;
    }
}

function validarFormulario(){

    var strFilter = "/^[A-Za-zƒŠŒŽšœžŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèé êëìíîïðñòóôõöøùúûüýþÿ]*$/";
    var pattern ="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
    var contadorErrores = 0;
    var mensajeError = '';
    var nombreYApellido = document.getElementById("id_nombre").value;
    var mail = document.getElementById("correo").value;
    var telefono = document.getElementById("tel").value;
    
    
    if(nombreYApellido == ""){
        contadorErrores++;
        mensajeError += "<p>El nombre y apellido no pueden estar vacios</p>";
    }
    else if(!nombreYApellido.test(strFilter)){
        contadorErrores++;
        mensajeError += "<p>El nombre y apellido debe contener caracteres validos</p>";
    }
    if(mail == ""){
        
        contadorErrores++;
        mensajeError += "<p>El mail no puede estar vacio</p>";
    }
    /*else if(!mail.test(pattern)){
        contadorErrores++;
        mensajeError += "<p>El mail debe contener con los requisitos</p>";
    }*/

    /*if(telefono.lenght < 9 || telefono.lenght > 0 || telefono == "" ){
        contadorErrores++;
        mensajeError += "<p>El telefono debe contener 8 digitos</p>";
    }*/
  
    if(contadorErrores > 0){
        let parrafo = document.getElementById("erroresParrafo");
        parrafo.style.color = "red";
        parrafo.innerHTML = mensajeError;
        return false;
    }else{
        return true;    
    }
    
}

function mostrar(){  
   
    
}

