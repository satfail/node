//Ejecutar trabajo syn o asyn y de que se resuleva la tarea
// realizar otra cosa

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

//No meto una funcion callback
//Se retorna una promesa

let getEmpleado = (id) => {
    //Retorno una nueva promesa que tiene dos funciones
    //Callback

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        //encuentra un empleado si es igual funcion flecha parametro => cuerpo funcion
        if (!empleadoDB) {
            reject(`No existe el id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });

}


//Salario

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        //encuentra un empleado si es igual funcion flecha parametro => cuerpo funcion
        if (!salarioDB) {
            reject(`No se encontró un salario para ${empleado.nombre}`);
        } else {
            resolve({ //Devuelvo un objeto
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

//Especifico getEmpelado(id).then(resolve, reject)

// getEmpleado(3).then(empleado => {

//     //Una vez resuelto el empleado, buscamos el salario
//     getSalario(empleado).then(respuesta => {
//         console.log('El salario de ', respuesta.nombre, 'es de : ', respuesta.salario);
//     }, (err) => { console.log(err); });
// }, (err) => { console.log(err); });

/*
getSalario(empleados[0]).then(respuesta => {
    console.log('Empleado de BD', respuesta.nombre, ' Salario', respuesta.salario);
}, (err) => { console.log(err); });*/


//Promesas en cadena, retorno otra promesa y voy quedandome con los resolves
//al final hago un .catch y dependiendo del error, saldrá el reject correspondiente

getEmpleado(10).then(empleado => {
        return getSalario(empleado);
    })
    .then(respuesta => { //Este then es de la siguiente promesa
        console.log('El salario de ', respuesta.nombre, 'es de : ', respuesta.salario);
    })
    .catch(err => console.log(err));