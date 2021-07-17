function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje="que comiences bien el añó";
		break;
		case "Marzo":
			mensaje="a clases";
		break;
		case "Julio":
			mensaje="se vienen las vacaciones";
		break;
		case "Diciembre":
			mensaje="felices fiestas";
		break;
		default:
			mensaje="no hay ningun evento";
		break;

		
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN