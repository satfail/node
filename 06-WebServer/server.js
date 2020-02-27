const express = require('express')
const app = express()
    //Para usar contenido estático
app.use(express.static(__dirname + '/public'));

//Todas las peticiones que entren por / hacen el callback (se pueden hacer flechas y con async)
app.get('/json', function(req, res) {
    //res.send('Hello World')

    let salida = {
        nombre: 'Miguel',
        edad: 32,
        url: req.url
    }
    res.send(salida);
});


app.get('/data', function(req, res) {
    res.send('Hello Data')
});
app.listen(8080, () => {
    console.log('Escuchando en el puerto 8080');
});