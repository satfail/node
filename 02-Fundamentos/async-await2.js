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

//Pasando promise a async que ya la devuelve
let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe el id ${id}`);
    } else {
        return empleadoDB;
    }


}


//Salario

let getSalario = (empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontró un salario para ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
}


//Resumo lo anterior con async y await
//Trabajo siempre con el resolve
//Los errores los recibo en el catch
//Para esto necesito el async en la declaración
//y el await en la llamada
let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let respuesta = await getSalario(empleado);
    return `${ respuesta.nomre} tiene un salario de ${respuesta.salario}`
}

getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));