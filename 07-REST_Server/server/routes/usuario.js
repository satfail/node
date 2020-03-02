///js con las peticiones de usuario


const express = require('express');

const bcrypt = require('bcrypt');
//el estandar es utilizar _, tiene muchas funciones
// utilizamos el pick para devolver los valores que nos interesen en el json
// como por ejemplo el password
const _ = require('underscore');

const Usuario = require('../models/usuario')
    //Esto es o que tengo que exportar
const app = express();


app.get('/usuario', function(req, res) {


    //Si viene bien si no es 0
    let desde = req.query.desde || 0;
    desde = Number(desde);


    //Pido otro parametro
    let limite = req.query.limite || 5;
    limite = Number(limite);
    //Segundo campo para poner lo que muestro, si esta vacio todo
    //Devuelve los que tienen estado true, ya que no borramos totalmente en la base de datos
    Usuario.find({ estado: true }, 'nombre email role estado google img')
        .skip(desde) //Salta los primeros 5
        .limit(limite) // solo 5
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            //Las llaves indican el find
            Usuario.count({ estado: true }, (err, conteo) => {
                res.json({
                    ok: true,
                    cantidad: conteo,
                    usuarios
                });
            });

        });
});
//Post nuevos registros
app.post('/usuario', function(req, res) {
    let body = req.body;
    //Variable igual al esquema creado
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        //Hash asincrono(cuando dispongo del dato) a el dato y 10 veces
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    //Guarda en base de datos, tengo callback que puede recibir dos cosas
    //Un error o el usuario cread
    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        //Si llega aquí ok,estatus 200 implicito

        res.json({
            ok: true,
            usuario: usuarioDB
        })

    })


});
//Put actualizar datos y recibir un parámetro
app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    //Aqui digo lo que voy a cambiar
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);

    //Busca id en base de datos y lo camba, devuelve err o nuevo user
    //con new:true mando el objeto modificado, sin eso el navegador devuelve el antiguo
    //y las validaciones creadas a true
    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });

    })

    // res.json({
    //     id
    // });
});


//Delete para borrar(cambiar estado )
//recibe id por url
app.delete('/usuario/:id', function(req, res) {
    // es el parametro, !Diferenciar entre el body, y esto!!
    let id = req.params.id;

    let cambioEstado = {
        estado: false
    };
    //Eliminación del registro
    //Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {

    Usuario.findByIdAndUpdate(id, cambioEstado, { new: true }, (err, usuarioBorrado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        if (!usuarioBorrado) {

            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no encontrado'
                }
            });

        }
        res.json({
            ok: true,
            usuario: usuarioBorrado
        })

    });

});

module.exports = app;