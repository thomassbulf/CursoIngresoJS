/*

Autor: Thomas Sbulf

Ejercicio: P1 (2019)

Bienvenidos.
Realizar el algoritmo que pida los datos necesarios
para un triángulo equilátero por prompt
 y que muestre el perímetro por alert. */

function mostrar()
{
	var perimetro;
	var lados;
	var mensaje;

	lados=prompt("ingrese la medida de su lado del triangulo a calcular");
	lados=parseFloat(lados);

	perimetro=lados*3;
	perimetro=parseFloat(perimetro);

	mensaje="el perimetro de su triangulo equilatero es: "+perimetro;

	alert(mensaje);

   
}
