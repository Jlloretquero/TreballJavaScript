var intervalo = setInterval(mostrarHora,1000); 

	
		function mostrarHora(){
			var miHora = new Date();
			var hora = miHora.getHours(); 
   			var minuto = miHora.getMinutes(); 
   			var segundo = miHora.getSeconds();

		if (hora<10) hora = "0" + hora;
		if (minuto<10) minuto = "0" + minuto;
		if (segundo<10) segundo = "0" + segundo;

		var horaFormato = hora+":"+minuto+":"+segundo;
		document.getElementById("reloj").innerHTML = horaFormato;

	
		}

            function validarForm(){
                
                var formObj = document.getElementById("MiForm");
                var nombre = document.getElementById("Nombre").value;
                var apellidos = document.getElementById("Apellidos").value;
                var dni = document.getElementById("DNI").value;
 		var email = document.getElementById("Email").value;
                var condicion = validarEmail();
		var condicionDni = validarDni(dni);
		
		
                
                if (nombre==="") document.getElementById("Nombre").style.background="#ff0000";
                else document.getElementById("Nombre").style.background=null;
                    
                if (apellidos==="") document.getElementById("Apellidos").style.background="#ff0000";
                else document.getElementById("Apellidos").style.background=null;
                
                if (dni==="") document.getElementById("DNI").style.background="#ff0000";
                else document.getElementById("DNI").style.background=null;

 	
	 	if (email==="") document.getElementById("Email").style.background="#ff0000";
                else document.getElementById("Email").style.background=null;
                
                if (nombre==="" || apellidos==="" || dni==="" || email===""){
                    alert("Faltan datos!");

                    
                }

                else {
			if(condicion == false){
				alert("El email no es correcto");
			}
			else if(condicionDni == false){
				alert("El dni no es correcto");		
			}
			else{
                   		 //formObj.submit();
			}
                }      
            }

	
	
	
	
	function validarEmail(){
		var condicion = false;
		var email = document.getElementById("Email").value;
		for (i=0; i<email.length; i++){
			if(email.charAt(i) == "@"){
				condicion = true;
				break;	
			}
			
			
			
		}
		return condicion;		
	}

	function validarDni(dni){
		var condicion=false;
		var dni= document.getElementById("DNI").value;

		var numerosDni = dni.substring(0,8);

		var letraDni = dni.substring(8);

		var algoritmoLetra = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(numerosDni % 23);

	
		if (letraDni == algoritmoLetra){
			condicion= true;  
		}
		else if (dni.length <8){
			condicion=false;
		}
	return condicion;
	}

	function reloj(){ //Funcion para cambiar el valor del boton, y al mismo tiempo para el reloj    
		var boton= document.getElementById("BotonReloj");
		if (boton.value=="Parar"){	
			boton.value = "Iniciar";
			clearInterval(intervalo);
			
		}
	
		else{	
			boton.value = "Parar";
			intervalo = setInterval(mostrarHora,1000);
		}

		
	}
	
