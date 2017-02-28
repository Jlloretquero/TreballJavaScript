
var txtDatos;
//La posicion [0]=id, [1]=Descripcion [2]=unidades/caja, [3]=precio*caja [4]=cajas [5]=total€
var contenido = [];
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
    
}