//requireds = imports

//Propio de Node
//const fs = require('express');//Paquetes no nativos de node
//const fs = require('./fs');//Creados por mi

//const multiplicar = require('./multiplicar/multiplicar');
//multiplicar.crearArchivo


//Con destructuracion para usar funcion directamente
const { crearArchivo } = require('./multiplicar/multiplicar');


let base = 'a';
// let data = '';
// for (let i = 1; i <= 10; ++i) {

//     data += `${base } * ${i} = ${base * i}\n`;
// }


// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('El archivo ha sido creado');
// });


crearArchivo(base)
    .then(archivo => console.log(`Archvo creado : ${ archivo }`))
    .catch(e => console.log(e));