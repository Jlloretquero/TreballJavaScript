
var txtDatosMenaje;
//La posicion [0]=id, [1]=Descripcion [2]=unidades/caja, [3]=precio*caja [4]=cajas [5]=total€
var arrayPadreMenaje = [];
function cargaArchivoMenaje() {
    $.ajax({
        url: "Menaje.csv",
        success: function (data) {
            //Estamos guardandolo en un variable gloval para poder acceder a los datos desde fuera
            txtDatosMenaje = data;
            //Lo que va hacer es recortar los datos y organizarlos en el array
            leerDatosMenaje();
        }
    });
}
//Llamada a la funcion para cargar los datos
cargaArchivoMenaje();

function leerDatosMenaje() {
    //El siguiente paso sera realizar un bucle que almacene en 1 linea cada de linea del documento en cada iteracion del bucle
    for (i = 0; i < txtDatosMenaje.split(/\r\n|\r|\n/).length; i++) { //Recorre cada linea
        //Estamos guardando cada linea en una linea
        var lineas = txtDatosMenaje.split(/\r\n|\r|\n/)[i];
        //Vamos a crear una array de array por lo tanto tendremos dos indices array[0][1], el primero indica la linea el segundo la columna
        var arrayHijo = [];
        arrayHijo.push(lineas.split(";")[0]);
        arrayHijo.push(lineas.split(";")[1]);
        arrayHijo.push(lineas.split(";")[2]);
        arrayHijo.push(lineas.split(";")[3].replace(",","."));
        arrayHijo.push(0);
        arrayHijo.push(0);
        //Metemos a la array hijo dentro de la padre
        arrayPadreMenaje.push(arrayHijo);
        insertarDatosTablaMenaje(i);
    }
}
//Esta es la funcion necesaria para poder insertar los datos en cada fila de la tabla, se creara dinamicamente
function insertarDatosTablaMenaje(posicion){
    var fila;
    if (posicion%2==0){
        fila="<tr class='danger'>";
    }
    else{
        fila="<tr class='warning'>";
    } 
    
    fila+= "<td><img src=' '></td>";
    fila+= "<td>"+arrayPadreMenaje[posicion][0]+"</td>";
    fila+= "<td>"+arrayPadreMenaje[posicion][1]+"</td>";
    fila+= "<td>"+arrayPadreMenaje[posicion][2]+"</td>";
    fila+= "<td>"+arrayPadreMenaje[posicion][3]+"</td>";
    fila+= "<td><input type='number' id='cajas"+posicion+"' min='0' oninput='calculoTotalMenaje("+posicion+")'></td>";
    fila+= "<td><input type='number' disabled id='total"+posicion+"'></td>";
    fila+= "</tr>";
    //Cada vez que hago un fila no borre la anterior
    document.getElementById("tbody").innerHTML+=fila;
    
}

function calculoTotalMenaje(dato){
    var numCaja=arrayPadreMenaje[dato][4]=parseInt(document.getElementById("cajas"+dato).value);
    console.log(arrayPadreMenaje[dato]);
    console.log(dato);
    
    var udCaja=parseInt(arrayPadreMenaje[dato][2]);
    var precio=parseFloat(arrayPadreMenaje[dato][3]);
    
    var total=(udCaja*precio)*numCaja;
    console.log(total);
    
    arrayPadreMenaje[dato][5]=total;
    console.log(arrayPadreMenaje[dato]);
    
    document.getElementById("total"+dato).value=Math.round(total*100)/100;
}
      