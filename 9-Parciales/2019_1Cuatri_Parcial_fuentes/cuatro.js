function mostrar()
/*

Autor: Thomas Sbulf

Ejercicio: P4 (2019)

Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/


{
	var numeroUno;
	var numeroDos;
	var resultado;
	var resta;
	var suma;
	var mensaje;

	numeroUno=prompt("ingrese numeroUno: ");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("ingrese numeroDos: ");
	numeroDos=parseInt(numeroDos);
	
	resta=numeroUno - numeroDos;
	suma=numeroUno + numeroDos;
	mensaje="su resultado es: ";
	mensaje=mensaje+numeroUno;
	mensaje=mensaje+numeroDos;

	if(numeroUno==numeroDos)
	{
		resultado=mensaje;
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resultado=resta;
		}
		else
		{
			if(numeroUno<numeroDos)
			{
				resultado=suma;
			}
		}
	}
	if(resta>10)
	{
		resultado=" la resta es: "+resta+" y supero el 10"
	}
	
	alert(resultado);

}	
