/*

Autor: Thomas Sbulf

Ejercicio: TP1


1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
    var suma;
    var mensaje;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioUno=parseInt(precioUno);

    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioDos=parseInt(precioDos);

    precioTres=document.getElementById('txtIdPrecioTres').value;
    precioTres=parseInt(precioTres);

    suma=precioUno+precioDos+precioTres;

    mensaje= "su precio final es: "+suma;
    alert(mensaje);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	var mensaje;

	precioUno=document.getElementById('txtIdPrecioUno').value;
    precioUno=parseInt(precioUno);

    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioDos=parseInt(precioDos);

    precioTres=document.getElementById('txtIdPrecioTres').value;
    precioTres=parseInt(precioTres);

    promedio=(precioUno+precioDos+precioTres)/3;

    mensaje="su promedio es: "+promedio;

    alert(mensaje);





}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;
	var suma;
	var mensaje;
	
	precioUno=document.getElementById('txtIdPrecioUno').value;
    precioUno=parseInt(precioUno);

    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioDos=parseInt(precioDos);

    precioTres=document.getElementById('txtIdPrecioTres').value;
    precioTres=parseInt(precioTres);

    suma=precioUno+precioDos+precioTres;

    precioFinal=suma*21/100+suma;

    mensaje= "su precio final es: " + precioFinal;

    alert(mensaje);




}