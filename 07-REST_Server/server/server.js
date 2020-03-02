require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose'); //Base de datos
//Para pasar parametros fácil vía Post
const bodyParser = require('body-parser')
    // app.use son middlewers para que la petición pase antes por aqui
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Uso todo lo de usuario
app.use(require('./routes/usuario'));

//Hay que definir el puerto donde corre mongo
//Si no esta la base de datos a la hroa de insertar la crea
//El caso es que conecta directamente aunque no este la base de datos new Urld parser para quitar el warning
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw new err;
    console.log('Base de datos Online');
})
app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto ', process.env.PORT);
});