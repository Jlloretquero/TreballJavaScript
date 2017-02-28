//intervalo tiempo cambio img slide, 3 segundos
setInterval('siguiente()',5000);

//Creamos un array para almacenar la imagenes
var arrayImagenes = new Array("./foto1.jpg","./foto2.jpg","./foto3.jpg","./foto4.jpg")

//necesitamos crear un contador
var contador=0;

function siguiente(){
    console.log("hola");
    if (contador<arrayImagenes.length-1){
    contador++;
    }
    else {
        contador=0;
    }
    document.getElementById("fotoSlider").src=arrayImagenes[contador];
    
}

function atras(){
    if (contador>0){
        window.status="";
        contador--;
    }
    else{
        contador=arrayImagenes.length-1;
    }
     document.getElementById("fotoSlider").src=arrayImagenes[contador];
}