// Ejercicio 1. a. Solicite al usuario ingresar su edad. Si la edad es mayor o igual a 18,
// muestra por consola el mensaje: "Eres mayor de edad". De lo contrario,
// muestra por consola el mensaje: "Eres menor de edad". Guardar en un
// archivo llamado mayorDeEdad.js

const readlineSync = require ("readline-sync");
let edad = readlineSync.question ("¿Cuál es tu edad?: ");

let mayorDeEdad;
    if (edad >= 18){
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    };

console.log(mayorDeEdad);

