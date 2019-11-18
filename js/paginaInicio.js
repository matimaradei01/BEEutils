//Funcion Contador de Compras
let contadorCompras;

window.onload = function(){
    contadorCompras = localStorage.getItem("contador");
    
    if(contadorCompras != undefined){
        document.getElementById("cart-counter").innerHTML = contadorCompras;
    }
}

function comprarCurso(){

    contadorCompras = localStorage.getItem("contador");

    if(contadorCompras == undefined){
        var primeraCompra = 0;
        primeraCompra++;
        localStorage.setItem("contador", primeraCompra);
        document.getElementById("cart-counter").innerHTML = primeraCompra;
        
    }else{
        contadorCompras++;
        localStorage.setItem("contador", contadorCompras);
        document.getElementById("cart-counter").innerHTML = contadorCompras;
    }
}