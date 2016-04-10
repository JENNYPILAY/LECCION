listadodeestudiantes.push(["jenny","femenino","ecuador","27","español"]);
listadode estudiantes.push(["marisol","femenino","ecuador","26","español"]);
listado de estudiantes.push(["jose","masculino","ecuador","28","español"]);
listado de estudiantes.push(["johao","masculino","ecuador","28","español"]);
printListadodeestudiantes (listado de estudiantes);


var busqueda;

function print(mensaje){
	document.write("<p>" + mensaje + "</p>");
}

while(true)
{
	busqueda = prompt("Presione q para salir, l para listar o Ingrese el estudiante a buscar: ");
	busqueda = busqueda.toLowerCase();
	if(busqueda=="salir" || busqueda=="fin" || busqueda=="chao" || busqueda=="quit" || busqueda=="q")
	{
		alert("Gracias por usar el buscador, chao!");
		break;
	}else if(busqueda=="listado de estudiantes" || busqueda=="estudiante " || busqueda=="lista" || busqueda=="l"){
		print("listado de estudiantes: " + listado de estudiante.join(", "));
	}else{
		if(listado de estudiantes.indexOf(busqueda)>=0)
		{





			function printList(list, posicion){ 
  	var listHTML = '';		  	
 if (posicion < 0) {		 
 		for(var i=0; i<list.length; i++){		  		
  		  			listHTML += creaList(list, i);		  			
  		}		  		}
 	}else{		 
  		listHTML += creaList(list, posicion);		  	
  	}		  	}

 printHTML(listHTML, "info-estudiantes");		
  }		  }

  
  		  
 function creaList(list, posicion){		

  	var listHTML = '';		  
  			  	
 		listHTML += '<ul style = "list-style: none;">';		 +		listHTML += '<ul>';
 		listHTML += '<li>Nombre: ' + list[posicion].nombre + '</li>';		
  		listHTML += '<li>Genero: ' + list[posicion].genero + '</li>';		  		
  		listHTML += '<li>Edad: ' + list[posicion].edad + '</li>';		  
  		listHTML += '<li>Notas: ' + list[posicion].arrogloNotas[0] + ' - ' + list[posicion].arrogloNotas[1] + ' - ' + list[posicion].arrogloNotas[2] + '</li>';	
  		listHTML += '<li>Ciudad: ' + list[posicion].ciudad + '</li>';		  		
  		listHTML += '<li>Lenguaje Favorito: ' + list[posicion].lenguajeFavorito + '</li>';		  		
    	if(list[posicion].estaTrabajando){		
   			listHTML += '<li>Esta laborando: Si </li>';		  			
   					}
   					else
   					{		
  			listHTML += '<li>Esta laborando: desempleado</li>';		  			
  		}		  		}
 	listHTML += '</ul> <br><br>' ;		
     return listHTML;		
}




function printHTML(mensaje, tag){
	var outputDiv = document.getElementById(tag);/
	outputDiv.innerHTML = mensaje;
}



function Estudiante(list, nombre){
	var existe = '-1';/
	for(var i=0; i<list.length; i++){
		if(list[i].nombre.toLowerCase() == nombre){
			existe = i;
		}
	}
	return existe; 
}


while(true){
	var nombreEstudiante = prompt("Nombre de un Estudiante, S para salir o L para listar y salir");
	if(nombreEstudiante != '' && nombreEstudiante !=null){
		if(nombreEstudiante.toLowerCase() =='s'){ 
			alert("Programa terminado");
			printHTML('', "info-estudiantes");//
			break;
		}
		else if(nombreEstudiante.toLowerCase() =='l'){
			printList(persona, -1); 
			break;
		}else{
			
			var posicion = estudiante(estudiante, nombreEstudiante.toLowerCase());
			if(posicion >=0){
				printList(persona, posicion); 
				}else{
					alert("estudiante no existe");
				}
			}
		}else{
			alert('ingreso erroneo');/
			
		}
	}
