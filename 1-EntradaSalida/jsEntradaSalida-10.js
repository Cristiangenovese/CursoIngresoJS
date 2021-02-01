/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

let sueldo;
let total;

function mostrarAumento()
{
	sueldo = txtIdImporte.value;
	sueldo = parseInt(sueldo);
	total = parseInt(total);

	total = sueldo;

	sueldo = sueldo * 25;
	sueldo = sueldo / 100;
	
	total = total - sueldo;

	txtIdResultado.value = total;

}
