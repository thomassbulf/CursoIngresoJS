/*
Autor: Thomas Sbulf

Ejercicio: 10bis

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var descuento;
	var numeroUno;
	var porcentaje;
	var	final;


	

	numeroUno=document.getElementById('txtIdImporte').value;
    numeroUno=parseInt(numeroUno);
    porcentaje=prompt("ingrese porcentaje: ");
    porcentaje=parseInt(porcentaje);



    descuento=numeroUno*porcentaje/100;

    final=numeroUno - descuento;
    

    document.getElementById('txtIdResultado').value = final;






}
