let empleados = [{
    id: 1,
    nombre: 'Miguel'
}, {
    id: 2,
    nombre: 'Mj'
}, {
    id: 3,
    nombre: 'Carmen'
}];


let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);
    //encuentra un empleado si es igual funcion flecha parametro => cuerpo funcion
    if (!empleadoDB) {
        callback(`No existe el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}
let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    //encuentra un empleado si es igual funcion flecha parametro => cuerpo funcion
    if (!salarioDB) {
        callback(`No existe el id ${id}`);
    } else {
        callback(null, { //Devuelvo un objeto
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);

});


getSalario(empleados[0], (err, respuesta) => {
    if (err) {
        return console.log(err);
    }
    console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);

});