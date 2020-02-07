const fs = require('fs');



let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const crear = (descripcion) => {

    cargarDB();
    //Objeto
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const cargarDB = () => {
    //Serializa auntomaticamente
    try {
        listadoPorHacer = require('../db/data.json');
        console.log(listadoPorHacer);
    } catch (err) {
        listadoPorHacer = [];
    }


}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    } else
        return false;

}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    }); //Nueva lista sin los elementos
    //No se borro
    if (nuevoListado.length === listadoPorHacer.length)
        return false;
    else {
        listadoPorHacer = nuevoListado
        guardarDB();
        return true;
    }

}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}