/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado;
	var	mensaje;

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Ushuaia":
			mensaje="su destino se encuentra al Sur";
		break;
		case "Bariloche":
			mensaje="su destino se encuentra al SurOeste";
		break;
		case "Mar del plata":
			mensaje="su destino se encuentra al SurEste";
		break;
		default:
			mensaje="su destino se encuentra al Norte";
		break;	
	}
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN