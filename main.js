alert("¡Hola, Bienvenido/a a Perona Servicios de Salud! Para cotizar tu plan, introducí a continuación los datos requeridos:");

let nombre = prompt("Ingresá tu nombre y apellido");
alert(`Un gusto tenerte por acá ${nombre}, solo necesitamos unos datos más para terminar`);

let edad;

do {
    edad = parseInt(prompt(`Escribí por favor tu rango etario, eligiendo entre estas tres alternativas:
    1- Menor de 25
    2- Entre 25 y 35 
    3- Mayor de 35
    `));
} while (isNaN(edad) || edad < 1 || edad > 3);

switch (edad) {
    case 1:
        alert("¡Genial, has elegido la opción 1, menor de 25!");
        break;
    case 2:
        alert("¡Genial, has elegido la opción 2, entre 25 y 35!");
        break;
    case 3:
        alert("¡Genial, has elegido la opción 3, mayor de 35!");
        break;
}

const suma = (a, b) => a + b;
const iva = (x) => x * 0.21;

let precioRangoUno = 2000;
let precioRangoDos = 3000;
let precioRangoTres = 4000;

precioOpcionUno = suma(precioRangoUno, iva(precioRangoUno));
precioOpcionDos = suma(precioRangoDos, iva(precioRangoDos));
precioOpcionTres = suma(precioRangoTres, iva(precioRangoTres));

if (edad === 1) {
    alert(`El precio de tu tarifa es $${precioOpcionUno}`);
} else if (edad === 2) {
    alert(`El precio de tu tarifa es $${precioOpcionDos}`);
} else {
    alert(`El precio de tu tarifa es $${precioOpcionTres}`);
}

