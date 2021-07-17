function mostrar()
/*
Autor: Thomas Sbulf

Ejercicio: IF 2
*/
{
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("usted es mayor de edad");
	}
	else 
		{
			alert("usted es menor de edad");		
		}



}//FIN DE LA FUNCIÓN