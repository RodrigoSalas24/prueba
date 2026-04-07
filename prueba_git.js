// Comenzamos con el modo estricto.
"use strict";


// Definición de una función con parámetros opcionales y valores por defecto.
const saludar = function (nombre = "amigo") {
    console.log("¡Hola", nombre + "!");
};

// Definición de una función con parámetros opcionales y valores por defecto.
const despedir = function (nombre = "amigo") {
    console.log("¡Chau", nombre + "!");
};

// Definición de una función flecha con parámetros y retorno de valor.
// const sumar = function(a, b) { return a + b};
// const sumar = (a, b) =>  {return a + b;};
const sumar = (a, b) =>  a + b;


// Definición de una función flecha con parámetros, cuerpo y con retorno de valor.
const dividir = (x, y) => { 
    if (y == 0) return 0;
    return x / y;
};

const cuadrado = a => a * a;


// Función inline con el código de inicio del script.
(function main(){

    // Llamada a la función sin especificar el parámetro.
    let interactuar = (Math.random() > 0.5) 
                ? despedir 
                : saludar; // Asignará una función o la otra en base a un valor aleatorio.
    console.log(interactuar);

    interactuar(); // Invocará a la función que se hubiera asignado usando el valor por defecto "amigo"

    interactuar = (Math.random() > 0.5) ? despedir : saludar; // Volvemos a asignar la misma u otra función en base a un nuevo valor aleatorio

    // Llamada a la función especificando un nombre.
    interactuar("Juan"); // Y ahora la invocación será utilizando "Juan" como valor del parámetro

    console.log("Sumar usando la función flecha", sumar(5, 3));
    console.log("Dividir usando la función flecha con cuerpo", dividir(5, 3));
    console.log("Dividir usando la función flecha con cuerpo", dividir(5, 0));

    // Llamada a la función con parámetros.
    let operar = (Math.random() > 0.5) ? sumar : dividir; // Algo parecido podemos hacer con las funciones sumar y multiplicar
    
    console.log(typeof operar);
    console.log("Suma o División usando la función asignada en base a random", operar(5, 3)); // Imprimirá el resultado de la operación que hubiera sido asignada a la variable operar.

})();
