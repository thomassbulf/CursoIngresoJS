/*

Autor: Thomas Sbulf

Ejercicio: P2 (2019)

Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos,
 que sumados son xx kilos y el promedio de peso xx ".*/
function mostrar()
{
  var mensaje;
  var nombreUno;
  var nombreDos;
  var pesoUno;
  var pesoDos;
  var promedio;
  var suma;

  nombreUno=prompt("ingrese nombre del primer participante","Ej: Pedro");
  nombreDos=prompt("ingrese nombre del segundo participante","Ej: Juan");

  pesoUno=prompt(nombreUno+" ingrese su peso ","Ej: 1");
  pesoUno=parseFloat(pesoUno);

  pesoDos=prompt(nombreDos+" ingrese su peso ","Ej: 1");
  pesoDos=parseFloat(pesoDos);

  suma=pesoUno+pesoDos;

  promedio=suma/2;

  mensaje= "ustedes se llaman: ";
  mensaje= mensaje+nombreUno;
  mensaje= mensaje+ " y " + nombreDos;
  mensaje= mensaje+ " y pesan: ";
  mensaje= mensaje+ suma;
  mensaje= mensaje+ " kilos entre los dos ";
  mensaje= mensaje+ " y su promedio de peso es de: ";
  mensaje= mensaje+ promedio;
  mensaje= mensaje+ " kilos ";

  alert(mensaje);


}
