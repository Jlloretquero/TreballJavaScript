function cambiarIframe($parametro) {

    if ($parametro == 1) {
        document.getElementById("CuerpoContenidoJardin").style.display = "block";
    } else {
        document.getElementById("CuerpoContenidoJardin").style.display = "none";
    }

    if ($parametro == 2) {
        document.getElementById("CuerpoContenidoLimpieza").style.display = "block";
    } else {
        document.getElementById("CuerpoContenidoLimpieza").style.display = "none";
    }

    if ($parametro == 3) {
        document.getElementById("CuerpoContenidoMenaje").style.display = "block";
    } else {
        document.getElementById("CuerpoContenidoMenaje").style.display = "none";
    }

}