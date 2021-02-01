/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

let numero2;

let numero1;

let resultado;

numero1 = txtIdNumeroUno.value;
numero1 = parseInt(numero1);
	
numero2 = txtIdNumeroDos.value;
numero2 = parseInt(numero2);

function sumar()
{

	resultado = numero1 + numero2;

	alert("El resultado es:"+resultado);
	
}

