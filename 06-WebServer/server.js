const express = require('express');
const app = express();
const hbs = require('hbs');
//Base de datos
const mongoose = require('mongoose');
//Para usar contenido estático
app.use(express.static(__dirname + '/public'));
//Express HBS engine, para no repetir código html
hbs.registerPartials(__dirname + '/views/parcials');
app.set('view engine', 'hbs');

// Helpers

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});


//Puerto en dinámico de heroku
const port = process.env.PORT || 8080; //El dinámico o 8080 si no existe

//Todas las peticiones que entren por / hacen el callback (se pueden hacer flechas y con async)
app.get('/', function(req, res) {
    //Renderiza el archivo home.hbs
    res.render('home', {
        nombre: 'Miguel Ángel'
    });
});

//Ahora llevo la función del helper al footer
app.get('/about', function(req, res) {
    //Renderiza el archivo home.hbs
    res.render('about', {
        nombre: 'Miguel Ángel'
    });
});


app.get('/data', function(req, res) {
    res.send('Hello Data')
});


// app.listen(8080, () => {
//     console.log('Escuchando en el puerto 8080');
// });

//Para heroku

app.listen(port, () => {
    console.log('Escuchando en el puerto 8080');
});

//Cuidado con este error:
// Tenia repo en Hub para guardar todo el curso
// Queria hacer commit desde dentro de la carpeta sin hacer init en ella a Heroku
// Error -> Me subia toda la carpeta de los ejercicios a Heroku, error en start claramente
// Solción LO QUE QUIERA SUBIR A HEROKU, VA CON INIT Y TODO EL PROCESO GIT