function mostrar()
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