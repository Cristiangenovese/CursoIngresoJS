/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

let numero2;
let numero1;
let resultado;

function SacarResto()
{
	numero1 = txtIdNumeroDividendo.value;
	numero1 = parseInt(numero1);
	
	numero2 = txtIdNumeroDivisor.value;
	numero2 = parseInt(numero2);

	resultado = numero1 % numero2;

	alert("El resultado es:"+resultado);
}
