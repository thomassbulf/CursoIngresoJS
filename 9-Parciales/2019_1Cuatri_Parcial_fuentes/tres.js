/*

Autor: Thomas Sbulf

Ejercicio: P3 (2019)

Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento,
mostrar el precio final con descuento por id.*/
function mostrar()
{
	var precio;
	var porcentaje;
	var precioFinal;
	var mensaje;
	var descuento;

	precio=prompt("ingrese su precio");
	precio=parseFloat(precio);

	porcentaje=prompt("ingrese su porcentaje a calcular");
	porcentaje=parseFloat(porcentaje);

	descuento=precio*porcentaje/100;

	precioFinal=precio - descuento;

	mensaje= " su descuento es: ";
	mensaje= mensaje+descuento;
	mensaje= mensaje+ " y como resultado nos da: ";
	mensaje= mensaje+ precioFinal;
	mensaje= mensaje+ " como precio final ";

	document.getElementById('elPrecioFinal').value = mensaje;

}
