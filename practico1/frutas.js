// a. Crea un arreglo vacío con el nombre de frutas.

let frutas = [];

// b. Agrega cinco frutas distintas al arreglo. Puede ser mediante el uso de
// variables o no.

frutas.push("Manzana", "Naranja", "Banana", "Cereza", "Mandarina");

// c. Deberás obtener el última fruta agregada y guardarla en la variable
// ultima. Además deberás imprimir su valor por consola, respetando el siguiente formato
// “La ultima fruta agregada fue: [ultima]”

let ultima = frutas[frutas.length - 1];

console.log ("La ultima fruta agregada fue: " + ultima);

// d. Deberás obtener la primera fruta agregada y guardarla en la variable
// primera. Además deberás imprimir su valor por consola, respetando el siguiente formato
// “La primera fruta agregada fue: [primera]”

let primera = frutas[0];

console.log ("La primera fruta agregada fue: " + primera);
