//Con options lo hago sin hacerlo en archivo aparte
//definido en la app

const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;


//async regresa una promesa
// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log);

// clima.getClima(40.419998, -3.700000)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.latitud, coords.longitud);
        return `el clima de ${coords.dir} es de ${temp}`
    } catch (error) {

        return `No se pudo determinar el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);