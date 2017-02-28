var numero1 = 0;
var numero2 = 0;
var operacion;


function darNumero(numero){
    if(document.getElementById("Resultado").value == "0" || numero1==0){
        numero1 = numero;
    }else{
        numero1 += numero;
    }
        document.getElementById("Resultado").value = numero1;
}
function borrar(){
	numero1 = 0;
	numero2 = 0;
	document.getElementById("Resultado").value = 0;
}

function operaracion(tipo){
	if (numero1 == 0){
		resultado = parseInt(document.getElementById("Resultado").value);
	}
	numero2 = parseInt(numero1);
	numero1= 0;
	operacion = tipo;
    // console.log(tipo);
    //  console.log(numero1);
    //   console.log(numero2);
}

function esIgual(){

numero1 = parseInt(numero1);

if (operacion === "+"){
    numero1 = numero1+numero2;
}
else if (operacion === "-"){
    numero1 = numero2-numero1;
}

else if (operacion === "*"){
    numero1 = numero1*numero2;
}
else if (operacion === "/"){
    numero1 = numero2/numero1;
}
	document.getElementById("Resultado").value = numero1;
 	numero2 = parseInt(numero1);
}


