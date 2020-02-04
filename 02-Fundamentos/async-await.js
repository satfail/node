/** 
 * Async Await
 */
//Función asincrona
//devuelve una promesa 

// let getNombre = async() => {

//     return 'Miguel Angel'
// }

//Solo con poner asyn tenemos 

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Miguel Angel');
        }, 3000)
    });
}

//Hay que esperar a que se resuelva get nombre, necesitamos
// ponerla asyncrona y que espere a esa funcion
// se queda con el resolve 
let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

// getNombre().then(nombre => {
//         console.log(nombre);
//     })
//     .catch(err => {
//         console.log('Error de sync', e);
//     }); //Da error de syncronia

saludo().then(mensaje => {
        console.log(mensaje);
    })
    .catch(err => {
        console.log('Error de sync', e);
    }); //Da error de syncronia