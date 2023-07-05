// EJERCICIO PIEDRA-PAPEL-TIJERAS
// 1. Crea un nuevo archivo JavaScript con nombre piedraPapelTijeras.js.
// 2. Crea una función llamada obtenerJugadaComputadora que generará un número
// aleatorio entre 0 y 2 para representar las opciones:
// - 0 para "piedra",
// - 1 para "papel" y
// - 2 para "tijeras"
// Siempre utilizando los valores de strings y no los valores númericos.

function numeroAleatorioHasta(num) { 
    return Math.floor(Math.random() * num);
}

function obtenerJugadaComputadora() {
    let juego = ["piedra", "papel", "tijeras"];
    return juego[numeroAleatorioHasta(3)];
}


// 3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
// elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.

function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync');
    let jugadaUsuario = readlineSync.question("Ingrese su jugada (piedra, papel o tijeras): ");
    return jugadaUsuario;
}


// 4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
// de la computadora y del usuario. Implementa las reglas del juego para determinar el
// ganador y retorna el resultado.

function determinarGanador(obtenerJugadaComputadora, obtenerJugadaUsuario) {
    if (obtenerJugadaComputadora === obtenerJugadaUsuario){
        return "Empate";
    } else if ((obtenerJugadaComputadora === "piedra" && obtenerJugadaUsuario === "tijeras") ||
    (obtenerJugadaComputadora === "papel" && obtenerJugadaUsuario === "piedra") ||
    (obtenerJugadaComputadora === "tijeras" && obtenerJugadaUsuario === "papel")) {
        return "Gana la computadora";
    } else if ((obtenerJugadaUsuario === "piedra" && obtenerJugadaComputadora === "tijeras") ||
    (obtenerJugadaUsuario === "papel" && obtenerJugadaComputadora === "piedra") ||
    (obtenerJugadaUsuario === "tijeras" && obtenerJugadaComputadora === "papel")) {
        return "Gana el usuario";
    }
}


// 5. Llama a las funciones en el orden adecuado para ejecutar el juego:
// a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una variable.
// b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
// c) Invoca la función determinarGanador pasando como argumentos las jugadas de
// la computadora y del usuario. Almacena el resultado en una variable.

let resultadoComputadora = obtenerJugadaComputadora();

let resultadoUsuario = obtenerJugadaUsuario();

let resultadoGanador = determinarGanador(resultadoComputadora, resultadoUsuario);


// 6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
// debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
// (quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del resultado:
// La computadora eligio: [jugadaComputador]. El usuario eligio: [jugadaUsuario].
// El resultado fue: [Empate | Gana la computadora | Gana el usuario].

console.log ("La computadora eligio: %s.", resultadoComputadora);
console.log ("El usuario eligio: %s.", resultadoUsuario);
console.log ("El resultado fue: %s.", resultadoGanador);
