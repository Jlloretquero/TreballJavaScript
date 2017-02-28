//intervalo tiempo cambio img slide, 3 segundos
setInterval('siguiente()',5000);
setTimeout('bordeado()',1);
//Creamos un array para almacenar la imagenes
var arrayImagenes = new Array("./foto1.jpg","./foto2.jpg","./foto3.jpg","./foto4.jpg")

//necesitamos crear un contador
var contador=0;


function bordeado(){
    document.getElementById("img"+contador).style.border="2px solid black";
   
}
bordeado();
function quitarBordeado(){
    document.getElementById("img"+contador).style.border="0px solid white";
}

function siguiente(){
    //llamada funcion quitarBordeado
   quitarBordeado();
  
console.log(contador);
    if (contador<arrayImagenes.length-1){
    contador++;
    }
    else {
        contador=0;
    }
     //llamada funcion Bordeado
    bordeado();
    document.getElementById("fotoSlider").src=arrayImagenes[contador];
    
}
 
function atras(){
    console.log(contador);
     //llamada funcion quitarBordeado
 quitarBordeado();
 console.log(contador);
    if (contador>0){
        window.status="";
        contador--;
    }
    else{
        contador=arrayImagenes.length-1;
    }
     //llamada funcion Bordeado
    bordeado();
     document.getElementById("fotoSlider").src=arrayImagenes[contador];
}




// VERSION BETA ABIERTA 3:
function foto1(posicion){
    quitarBordeado();
    document.getElementById("fotoSlider").src=arrayImagenes[posicion];
    
   
    contador=posicion;
     bordeado();

   
}

// VERSION BETA CERRADA 2:
// function foto1(posicion){
//     if(posicion==1)document.getElementById("fotoSlider").src=arrayImagenes[0]; 
//     else if(posicion==2)document.getElementById("fotoSlider").src=arrayImagenes[1]; 
//     else if(posicion==3)document.getElementById("fotoSlider").src=arrayImagenes[2]; 
//     else if(posicion==4)document.getElementById("fotoSlider").src=arrayImagenes[3];    
// }

// VERSION ALPHA 1 :

// function foto2(){
//     document.getElementById("fotoSlider").src=arrayImagenes[1];
// }
// function foto3(){
//     document.getElementById("fotoSlider").src=arrayImagenes[2];
// }
// function foto4(){
//     document.getElementById("fotoSlider").src=arrayImagenes[3];
// }
