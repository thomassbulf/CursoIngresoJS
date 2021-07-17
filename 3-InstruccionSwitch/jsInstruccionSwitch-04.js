function mostrar()
/*
enero,marzo,mayo,julio,agosto,octubre,diciembre --> 31 dias
abril,junio,septiembre,octubre,noviembre --> 30
febrero --> 28
*/
{
	var	mesDelAño;
	var mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje=mesDelAño+" tiene 28 días";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
			mensaje=mesDelAño+" tiene 30 días";
		break;
		default:
			mensaje=mesDelAño+" tiene 31 días";
		break;			
	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN