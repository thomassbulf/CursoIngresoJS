function mostrar()
/*
Autor: Thomas Sbulf

Ejercicio: IF 8
*/
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad>18 && estadoCivil=="Soltero")
	{
		alert("Usted es Soltero y no es menor")
	}
	
	


}//FIN DE LA FUNCIÓN