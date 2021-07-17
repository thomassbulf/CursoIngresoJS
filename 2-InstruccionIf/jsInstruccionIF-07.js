function mostrar()
/*
Autor: Thomas Sbulf

Ejercicio: IF 7
*/
{
	var edad;
	var estadoCivil;
	var mensaje;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById('estadoCivil').value;

	mensaje="su edad es: ";
	mensaje=mensaje+edad;
	mensaje=mensaje+" y su estado civil es: ";
	mensaje=mensaje+estadoCivil;

	if(edad<18 && estadoCivil!="Soltero")
	{
		alert("usted es menor de edad para ser soltero");
	}
	else
	{
		alert(mensaje);
	}	

	


}//FIN DE LA FUNCIÓN