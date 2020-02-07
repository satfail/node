const descripcion = {
    demand: true,
    alias: 'd',
    ayuda: 'Descripcion de la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento', { descripcion })
    .command('actualizar', 'Actualiza el estado', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            ayuda: 'Marca como completado'
        }

    })
    .command('borrar', 'Borra el estado', { descripcion })
    .help().argv;



module.exports = {
    argv
}