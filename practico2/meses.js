// Ejercicio 2. Escriba un programa que solicite al usuario ingresar un número entero del 1 al
// 12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
// marzo, etc. Deberá guardar esta información en alguna de las estructuras ya
// vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en
// el texto a imprimir. Su programa deberá ser guardado en un archivo meses.js y
// consistirá de imprimir por consola la cantidad de días que tiene el mes
// ingresado bajo el siguiente formato:
// "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
// NOTAS:
// ● Nota que el valor de [mes] no es el numero ingresado si no su
// correspondiente almacenado en la estructura de datos elegida.
// ● Para el alcance de este ejercicio, podemos pensar que febrero siempre
// tiene 28 días.

const readlineSync = require ("readline-sync");
let ingreseMes = readlineSync.question("Ingrese un mes del año (un numero entre el 1 al 12): ");

let meses = {
    1: "enero",
    2: "febrero",
    3: "marzo",
    4: "abril",
    5: "mayo",
    6: "junio",
    7: "julio",
    8: "agosto",
    9: "septiembre",
    10: "octubre",
    11: "noviembre",
    12: "diciembre"
};

let cantidadDeDias;
    if (ingreseMes === "2"){
        cantidadDeDias = 28;
    } else if (ingreseMes === "1" || ingreseMes === "3" || ingreseMes === "5" || ingreseMes === "7" || ingreseMes === "8" || ingreseMes === "10" || ingreseMes === "12"){
        cantidadDeDias = 31;
    } else {
        cantidadDeDias = 30;
    };

console.log("La cantidad de dias del mes de " + meses[ingreseMes] + " es " + cantidadDeDias);
