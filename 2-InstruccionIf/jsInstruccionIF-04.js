function mostrar()
{
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad<18)
	{
		if(edad>12)
			
     alert("adolescente");
	}

}//FIN DE LA FUNCIÓN