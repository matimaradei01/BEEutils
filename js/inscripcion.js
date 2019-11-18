var montoTotal = 150;
window.onload = function(){
    var contadorCompras = localStorage.getItem("contador");
    
    document.getElementById("total").innerHTML = montoTotal; 

    if(contadorCompras != undefined){
        document.getElementById("cart-counter").innerHTML = contadorCompras;
    }

}

function eliminarFilaFormulario(idBoton){

   if(document.getElementsByClassName("datos").length >= 2){
    var x = document.getElementById(idBoton).parentNode;
    x.parentNode.removeChild(x); 
   }else{
    document.getElementById("form").reset();
    }
    calcularTotal(2);    
}

function agregarFilaFormulario(){

    var idContador = document.getElementsByClassName("datos").length;
    
    var x = document.getElementsByClassName("datos")[0];
    var form = x.cloneNode(true);
    form.lastElementChild.id = idContador++;

    document.getElementById("contenedor").appendChild(form);
    calcularTotal(1);

}

function calcularTotal(operacion){
    
    if(operacion == 1){
        montoTotal+=150;
        document.getElementById("total").innerHTML = montoTotal;
    }else{
        if(montoTotal > 0){
            montoTotal-=150;
            document.getElementById("total").innerHTML = montoTotal; 
        }
    }
}