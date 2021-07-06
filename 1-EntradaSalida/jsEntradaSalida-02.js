/*
Autor: Thomas Sbulf

Ejercicio: 2
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
	var nombre;
	var mensaje;
	
	nombre = prompt("Ingrese su nombre", "Natalia Natalia");

//nombre = "lalalala"


mensaje = "su nombre es" + nombre;

alert(mensaje);

alert("su nombre es" + nombre);




}

