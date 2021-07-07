/*
Autor: Thomas Sbulf

Ejercicio: 9bis

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var Aumento;
	var numeroUno;
	var porcentaje;
	var resultado;

	porcentaje=numeroUno*porcentaje/100;

	resultado=porcentaje+Aumento;



	numeroUno=document.getElementById('txtIdSueldo').value;
	numeroUno=parseInt(numeroUno);
	porcentaje=parseInt(porcentaje);
	porcentaje=prompt("ingrese Aumento: ");

	

	Aumento=numeroUno*porcentaje/100+numeroUno;
    
    
    
	document.getElementById('txtIdResultado').value = Aumento;




}


