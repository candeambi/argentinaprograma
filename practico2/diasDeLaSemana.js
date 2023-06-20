// Ejercicio 4. Escriba un programa que solicite al usuario ingresar un número del 1 al 7
// representando un día de la semana. Guardar el programa en un archivo
// diasDeLaSemana.js. La semana comienza el lunes y termina el domingo.
// - Si el número es 1, muestra por consola el mensaje: "Hoy es lunes".
// - Si el número es 2, muestra por consola el mensaje: "Hoy es martes".
// - Si el número es 3, muestra por consola el mensaje: "Hoy es miércoles".
// - Y así sucesivamente ...
// - Para cualquier otro número, muestra por consola el mensaje: "Número inválido".
// NOTA: utilizar la sentencia switch-case.

const readlineSync = require ("readline-sync");
let numeroSemana = readlineSync.question("Ingrese un dia de la semana (un numero del 1 al 7): ");

switch (numeroSemana) {
    case "1":
        diaDeLaSemana = "Hoy es lunes";
    break;

    case "2":
        diaDeLaSemana = "Hoy es martes";
    break;

    case "3":
        diaDeLaSemana = "Hoy es miércoles";
    break;

    case "4":
        diaDeLaSemana = "Hoy es jueves";
    break;

    case "5":
        diaDeLaSemana = "Hoy es viernes";
    break;

    case "6":
        diaDeLaSemana = "Hoy es sábado";
    break;

    case "7":
        diaDeLaSemana = "Hoy es domingo";
    break;

    default:
        diaDeLaSemana = "Número inválido";
}

console.log(diaDeLaSemana);