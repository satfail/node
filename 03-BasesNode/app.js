//requireds = imports

//Propio de Node
//const fs = require('express');//Paquetes no nativos de node
//const fs = require('./fs');//Creados por mi

//const multiplicar = require('./multiplicar/multiplicar');
//multiplicar.crearArchivo


//Con destructuracion para usar funcion directamente
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archvo creado : ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no válido');
        break;

}


// let data = '';
// for (let i = 1; i <= 10; ++i) {

//     data += `${base } * ${i} = ${base * i}\n`;
// }


// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('El archivo ha sido creado');
// });

//let argv2 = process.argv
//yargs
//console.log(argv.limite);
//el que vamos a procesar en los dos comentarios siguientes
// let parametro = argv[2];
// base = parametro.split('=')[1];