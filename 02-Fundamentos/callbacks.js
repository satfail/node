// setTimeout(function() {
//     console.log('Hey!');
// }, 3000);


//Flecha
setTimeout(() => {
    console.log('Hey!');
}, 3000);


//paso un id y una funcion callback
let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Fernando',
        id //es la que recibo por parametro no hace falta igualar
    }

    if (id == 20) {

        callback('No existe');
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario)
});