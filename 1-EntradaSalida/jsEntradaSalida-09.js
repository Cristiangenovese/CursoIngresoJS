/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

let sueldo;
let total;

function mostrarAumento()
{

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);
	total = parseInt(total);

	total = sueldo;

	sueldo = sueldo * 10;
	sueldo = sueldo / 100;
	
	total = total + sueldo;

	txtIdResultado.value = total;

}
