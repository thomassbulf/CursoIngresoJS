function mostrar()
/*
Autor: Thomas Sbulf

Ejercicio: IF 5
*/
{
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17 || edad<13)
	{
		alert("usted no es adolescente");
	}
	else 
	{
		alert("usted es adolescente");
	}
	


}//FIN DE LA FUNCIÓN