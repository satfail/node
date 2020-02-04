console.log('Inicio del Programa'); //callback main (1)

setTimeout(function() {
    console.log('Primer timeout')

}, 3000); //llamada con tiempo a la función
//callback timeout (3)
setTimeout(function() {
    console.log('Segundo timeout')

}, 0);
//callback timeout (2)

setTimeout(function() {
    console.log('Tercer timeout')

}, 0);
//callback timeout (2)

console.log('Fin del programa'); //callback main (1)