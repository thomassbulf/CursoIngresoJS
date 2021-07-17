function mostrar()
/*

Autor: Thomas Sbulf

Ejercicio: IF 1

*/
{
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad==15)
	{
		alert("usted tiene 15 años");
	}

	alert("su edad es "+ edad);

}//FIN DE LA FUNCIÓN