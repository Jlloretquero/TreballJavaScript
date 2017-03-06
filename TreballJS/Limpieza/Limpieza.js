


var txtDatosLimpieza;
//La posicion [0]=id, [1]=Descripcion [2]=unidades/caja, [3]=precio*caja [4]=cajas [5]=total€
var arrayPadreLimpieza = [];
function cargaArchivoLimpieza() {
    
    $.ajax({
        url: "Limpieza.csv",
        success: function (data) {
            //Estamos guardandolo en un variable gloval para poder acceder a los datos desde fuera
            txtDatosLimpieza = data;
            //Lo que va hacer es recortar los datos y organizarlos en el array
            leerDatosLimpieza();
        }
    });
}
//Llamada a la funcion para cargar los datos
cargaArchivoLimpieza();

function leerDatosLimpieza() {
    //El siguiente paso sera realizar un bucle que almacene en 1 linea cada de linea del documento en cada iteracion del bucle
    for (i = 0; i < txtDatosLimpieza.split(/\r\n|\r|\n/).length; i++) { //Recorre cada linea
        //Estamos guardando cada linea en una linea
        var lineas = txtDatosLimpieza.split(/\r\n|\r|\n/)[i];
        //Vamos a crear una array de array por lo tanto tendremos dos indices array[0][1], el primero indica la linea el segundo la columna
        var arrayHijo = [];
        arrayHijo.push(lineas.split(";")[0]);
        arrayHijo.push(lineas.split(";")[1]);
        arrayHijo.push(lineas.split(";")[2]);
        arrayHijo.push(lineas.split(";")[3].replace(",","."));
        arrayHijo.push(0);
        arrayHijo.push(0);
        //Metemos a la array hijo dentro de la padre
        arrayPadreLimpieza.push(arrayHijo);
        insertarDatosTablaLimpieza(i);
    }
}
//Esta es la funcion necesaria para poder insertar los datos en cada fila de la tabla, se creara dinamicamente
function insertarDatosTablaLimpieza(posicion){
    var fila;
    if (posicion%2==0){
        fila="<tr class='default'>";
    }
    else{
        fila="<tr class='active'>";
    } 
    
    fila+= "<td><img src=' '></td>";
    fila+= "<td>"+arrayPadreLimpieza[posicion][0]+"</td>";
    fila+= "<td>"+arrayPadreLimpieza[posicion][1]+"</td>";
    fila+= "<td>"+arrayPadreLimpieza[posicion][2]+"</td>";
    fila+= "<td>"+arrayPadreLimpieza[posicion][3]+"</td>";
    fila+= "<td><input type='number' id='cajas"+posicion+"' min='0' oninput='calculoTotalLimpieza("+posicion+")'></td>";
    fila+= "<td><input type='number' disabled id='total"+posicion+"'></td>";
    fila+= "</tr>";
    //Cada vez que hago un fila no borre la anterior
    document.getElementById("tbody").innerHTML+=fila;
    
}

function calculoTotalLimpieza(dato){
    var numCaja=arrayPadreLimpieza[dato][4]=parseInt(document.getElementById("cajas"+dato).value);
    console.log(arrayPadreLimpieza[dato]);
    console.log(dato);
    
    var udCaja=parseInt(arrayPadreLimpieza[dato][2]);
    var precio=parseFloat(arrayPadreLimpieza[dato][3]);
    
    var total=(udCaja*precio)*numCaja;
    console.log(total);
    
    arrayPadreLimpieza[dato][5]=total;
    console.log(arrayPadreLimpieza[dato]);
    
    document.getElementById("total"+dato).value=Math.round(total*100)/100;
}
      