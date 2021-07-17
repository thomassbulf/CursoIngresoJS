function mostrar()
/*
Autor: Thomas Sbulf

Ejercicio: IF 6
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
        if(edad<13)
        {
            alert("usted es un niño");
        }else
            {
                alert("usted es adolescente");
            }    
    }    


	

}//FIN DE LA FUNCIÓN