/*
Autor: Thomas Sbulf

Ejercicio: 8

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var resultado;
    var numeroUno;
    var numeroDos;
    numeroUno=document.getElementById('txtIdNumeroDividendo').value;
    numeroUno=parseInt(numeroUno);

    numeroDos=document.getElementById('txtIdNumeroDivisor').value;
    numeroDos=parseInt(numeroDos);

    resultado=numeroUno%numeroDos;
    console.log(numeroUno+"el resultado es: "+resultado);
    console.log(numeroDos+"el resultado es: "+resultado);
    

    alert(resultado);












}
