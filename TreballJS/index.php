
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

                    <div id="div1" class="Catalogos"onclick="cambiarIframe(3)"><p>Menaje</p></div>
                     <div  id="div2" class="Catalogos" onclick="cambiarIframe(2)"><p>Limpieza</p></div>
                     <div  id="div3" class="Catalogos"onclick="cambiarIframe(1)"><p>Jardineria</p></div> 
               
                </div>
            </div>
            <input type="button" value="Calcular Total" onclick="calculoTotalb()" style="align:right" >

            <div id="CuerpoContenidoJardin" class="col-lg-9" style="display: none">
                <table class="table" style="width: 100%">
                    <thead>
                        <tr style="background-color: #2c3e50; color:white">
                            <th>IMAGEN</th>
                            <th>REFERENCIA</th>
                            <th>DESCRIPCION</th>
                            <th>Ud/Caja</th>
                            <th>PRECIO</th>
                            <th>CAJAS</th> 
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody id="tbodyJardin"></tbody>
                </table> 
            </div>

            <div id="CuerpoContenidoLimpieza" class="col-lg-9" style="display: none">
                <table class="table" style="width: 100%">
                    <thead>
                        <tr style="background-color: #2c3e50; color:white">
                            <th>IMAGEN</th>
                            <th>REFERENCIA</th>
                            <th>DESCRIPCION</th>
                            <th>Ud/Caja</th>
                            <th>PRECIO</th>
                            <th>CAJAS</th> 
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody id="tbodyLimpieza"></tbody>
                </table> 
            </div>

            <div id="CuerpoContenidoMenaje" class="col-lg-9"style="display: none">
                <table class="table" style="width: 100%">
                    <thead>
                        <tr style="background-color: #2c3e50; color:white">
                            <th>IMAGEN</th>
                            <th>REFERENCIA</th>
                            <th>DESCRIPCION</th>
                            <th>Ud/Caja</th>
                            <th>PRECIO</th>
                            <th>CAJAS</th> 
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody id="tbodyMenaje"></tbody>
                </table> 
            </div>

        </div>




        <script src="Iframe.js"></script>
        <script type="text/javascript" src="Jardin/Jardin.js"></script>
        <script type="text/javascript" src="Limpieza//Limpieza.js"></script>
        <script type="text/javascript" src="Menaje/Menaje.js"></script>
        <script src="total.js"></script>


    </body>
</html>
