/*

Autor: Thomas Sbulf

Ejercicio: TP3

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var centigrados;
	var temperatura;
	var mensaje;

	temperatura=document.getElementById('txtIdTemperatura').value;
	temperatura=parseInt(temperatura);

	centigrados=(temperatura-32)*5/9;
	

	mensaje= "su temperatura farenheit ingresada es igual a ";
	mensaje= mensaje+centigrados;
	mensaje= mensaje+ " grados centigrados";

	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	var farenheit;
	var temperatura;
	var mensaje;

	temperatura=document.getElementById('txtIdTemperatura').value;
	temperatura=parseInt(temperatura);

	farenheit=(temperatura*9/5)+32;

	mensaje= "su temperatura centigrados ingresada es igual a ";
	mensaje= mensaje+farenheit;
	mensaje= mensaje+ " grados farenheit";

	alert(mensaje);
}
