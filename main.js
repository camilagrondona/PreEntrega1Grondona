alert("¡Hola, Bienvenido/a a Perona Servicios de Salud! Para cotizar tu plan, introducí a continuación los datos requeridos:");


let nombre = prompt("Ingresá tu nombre y apellido");
alert(`Un gusto tenerte por acá ${nombre}, solo necesitamos unos datos más para terminar`);

let edad = prompt

    (` Escribí por favor tu rango etario, eligiendo entre estas tres alternativas:
    Menor de 25
    Entre 25 y 35 
    Mayor de 35
    `);

switch (edad) {
    case 'Menor de 25'.toLowerCase():
        alert("¡Genial, has elegido la opción 1, menor de 25!");
        break;
    case 'Entre 25 y 35'.toLowerCase():
        alert("¡Genial, has elegido la opción 2, entre 25 y 35!");
        break; 
    case 'Mayor de 35'.toLowerCase():
        alert("¡Genial, has elegido la opción 3, mayor de 35!");
        break; 
    default:
        alert("Por favor, selecciona una opción válida");
        break;
}




//function saludar() {
//alert ("Hola");
// }

// saludar();

// function saludar() {
//   let nombre = prompt("Ingrese el nombre");
//   alert(`su nombre es ${nombre}`);
// }

// saludar();
