/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

let numero2;
let numero1;
let resultado;

function sumar()
{	
	numero1 = txtIdNumeroUno.value;
	numero1 = parseInt(numero1);
	
	numero2 = txtIdNumeroDos.value;
	numero2 = parseInt(numero2);

	resultado = numero1 + numero2;

	alert("El resultado es:"+resultado);
}

function restar()
{
	numero1 = txtIdNumeroUno.value;
	numero1 = parseInt(numero1);
	
	numero2 = txtIdNumeroDos.value;
	numero2 = parseInt(numero2);

	resultado = numero1 - numero2;

	alert("El resultado es:"+resultado);
}

function multiplicar()
{ 
	numero1 = txtIdNumeroUno.value;
	numero1 = parseInt(numero1);
	
	numero2 = txtIdNumeroDos.value;
	numero2 = parseInt(numero2);

	resultado = numero1 * numero2;

	alert("El resultado es:"+resultado);
}

function dividir()
{
	numero1 = txtIdNumeroUno.value;
	numero1 = parseInt(numero1);
	
	numero2 = txtIdNumeroDos.value;
	numero2 = parseInt(numero2);

	resultado = numero1 / numero2;

	alert("El resultado es:"+resultado);
}

