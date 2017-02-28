
var txtDatos;
//La posicion [0]=id, [1]=Descripcion [2]=unidades/caja, [3]=precio*caja [4]=cajas [5]=total€
var arrayPadre = [];
function cargaArchivo() {
    $.ajax({
        url: "./documentos/Jardin.csv",
        success: function (data) {
            //Estamos guardandolo en un variable gloval para poder acceder a los datos desde fuera
            txtDatos = data;
            //Lo que va hacer es recortar los datos y organizarlos en el array
            leerDatos();
        }
    });
}
//Llamada a la funcion para cargar los datos
cargaArchivo();

function leerDatos(){
    //El siguiente paso sera realizar un bucle que almacene en 1 linea cada de linea del documento en cada iteracion del bucle
    for(i=0; i<txtDatos.split(/\r\n|\r|\n/).length; i++){ //Recorre cada linea
    //Estamos guardando cada linea en una linea
    var lineas = txtDatos.split(/\r\n|\r|\n/)[i];
    //Vamos a crear una array de array por lo tanto tendremos dos indices array[0][1], el primero indica la linea el segundo la columna
    var arrayHijo = [];
    arrayHijo.push(lineas.split(";")[0]);
    arrayHijo.push(lineas.split(";")[1]);
    arrayHijo.push(lineas.split(";")[2]);
    arrayHijo.push(lineas.split(";")[3]);
    arrayHijo.push(0);
    arrayHijo.push(0);
    //Metemos a la array hijo dentro de la padre
    arrayPadre.push(arrayHijo);
    console.log(arrayPadre[i]);
    }
}