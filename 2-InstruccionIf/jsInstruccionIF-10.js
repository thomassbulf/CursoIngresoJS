function mostrar()
{
/*

Autor: Thomas Sbulf

Ejercicio: IF 10

Al presionar el Botón, asignar una nota RANDOM
 al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" 
para notas menores a 4*/

	var numeroRandom;

	numeroRandom= Math.floor(Math.random()*10)+1;

	if(numeroRandom>8)
	{
		alert(" Excelente, su nota es: "+numeroRandom);
	}
	else
	{
		if(numeroRandom<4)
		{
			alert(" Vamos, la proxima se puede, su nota es: "+numeroRandom);
		}
		else
		{
			alert(" Aprobo, su nota es: "+numeroRandom);
		}
	}


}//FIN DE LA FUNCIÓN