<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link rel="stylesheet" href="index.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="jquery-3.1.1.min.js"></script>
      
    </head>
    <body>
        <div id="MenuSuperior" >
            <div class="col-lg-10 col-lg-offset-1" >
                <div id="Logo">PlatusPlas</div>
                <div id="Boton6" class="BotonesMenu" onclick="">SALIR</div>
                <div  class="BotonesMenu" onclick="">IMPRIMIR</div>
                <div  class="BotonesMenu" onclick="">RESUMEN</div>
                <div  class="BotonesMenu" onclick="">ENVIAR</div>
                <div  class="BotonesMenu" onclick="">GUARDAR</div>
                <div  class="BotonesMenu" onclick="">ABRIR</div>         
            </div>
        </div>
        <div id="CuerpoPagina" class="col-lg-10 col-lg-offset-1"> 
            <div> 
                <div id="CuerpoIzquierda" class="col-lg-9">
                    <p>DATOS DEL CLIENTE</p>
                    <br>
                    <p>Codigo</p>
                    <br>
                </div>
                <div id="CuerpoDerecha"  class="col-lg-3"> 
                    <p align="center">SELECCIONAR CATALOGO</p>
                 <form action="">
                <input type="radio" name="ventana" value="Calculadora" checked onclick="cambiarIframe(3)"> Jardineria             
                <input type="radio" name="ventana" value="Calculadora"  onclick="cambiarIframe(1)"> Calculadora
                <input type="radio" name="ventana" value="Slider" onclick="cambiarIframe(2)"> Slider
 
</form></div>
            </div>
            <div id="CuerpoContenido" class="col-lg-9">
               
                <iframe  name=iframe src="DIV.png" id="iframe" width=800 height=1100 frameborder="0" scrolling=yes marginwidth=2 marginheight=4 align=center>Tu navegador no soporta frames!!</iframe>
          </div>
        </div>

        <?php
        header("Expires: Tue, 01 Jan 2000 00:00:00 GMT");
        header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
        header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
        ?>
        
         
         <script src="Iframe.js"></script>
    </body>
</html>
