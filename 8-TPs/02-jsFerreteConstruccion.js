/*

Autor: Thomas Sbulf

Ejercicio: TP2


2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambre;
	var mensaje;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

	alambre=(largo+ancho)*2*3;

	mensaje="la cantidad de alambre que usted necesita es: "+ alambre;

	alert(mensaje);




}
function Circulo () 
{
	var radio;
	var alambre;
	var mensaje;
    var perimetro;

	radio=document.getElementById('txtIdRadio').value;
	radio=parseInt(radio);

	perimetro= 2*3.14*radio;	

	alambre= perimetro*3;

	mensaje="la cantidad de alambre que usted necesita es: "+ alambre;

	alert(mensaje);


}
function Materiales () 
{
	var area;
	var cal;
	var cemento;
	var ancho;
	var largo;
	var mensaje;


	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

	largo=document.getElementById('txtIdLargo').value;	
	largo=parseInt(largo);

	area=largo*ancho;

	cal=area*3/1;

	cemento=area*2/1;

	mensaje= "usted necesita: ";
	mensaje= mensaje+cal;
	mensaje= mensaje+ " bolsas de cal y ";
	mensaje= mensaje+cemento;
	mensaje= mensaje+ " bolsas de cemento";

	alert(mensaje);

}