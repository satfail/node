let nombre = 'Miguel';
let nombre2 = 'Angel';

console.log(`${nombre } ${nombre2 }`)
    // dentro del ${ } comandos de js

let nombreCompleto = nombre + ' ' + nombre2;

let nombreTemplate = `${nombre } ${nombre2 }`;

console.log(nombreCompleto === nombreTemplate);
//Exactamente igual valor e identidad

function getNombre() {

    return `${nombre } ${nombre2 }`;
}


console.log(`El nombre de :${getNombre()} `);