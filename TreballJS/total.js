
 var ventana;
function calculoTotalb(){
 
 var altura = 200;
    var anchura = 510;
  
// calculamos la posicion x e y para centrar la ventana
    var y = parseInt((window.screen.height / 2) - (altura / 2));
    var x = parseInt((window.screen.width / 2) - (anchura / 2));

// mostramos la ventana centrada
    if (!(ventana === undefined || ventana===null)){
        ventana.close();
    }
    
    ventana = window.open('ventanaTotal.html', target = 'blank', 'width=' + anchura + ',height=' + altura + ',top=' + y + ',left=' + x + ',toolbar=no ,location=no,status=no,menubar=no,scrollbars=no,directories=no,resizable=no', title = 'testing');
  
  ImprimirResultados(ventana);
}


function ImprimirResultados(ventana){
  
    calcularTablaJardin();
    calcularTablaLimpieza();
    calcularTablaMenaje();
    var total= totalJardin+totalLimpieza+totalMenaje;
    var frase= "<p><br></p>";
     frase+= "<p>El total de la seccion de Jardin es: "+totalJardin+" </p>";
    frase += "<p>El total de la seccion de Limpieza es: "+totalLimpieza+" </p>";
    frase += "<p>El total de la seccion de Menaje es: "+totalMenaje+" </p>";
    frase += "<p>El total de su carrito es: "+total+" </p>";
   //ventana.document.getElementById("ventanaTotal").innerHTML += frase;
   
    ventana.document.write(frase);
}