const mongoose = require('mongoose');
// instalado en el proyecto con npm, 
const uniqueValidator = require('mongoose-unique-validator');

//Crear esquema de mongoose

let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },

    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos

    },

    estado: {
        type: Boolean,
        default: true //Activo
    },

    google: {

        type: Boolean,
        default: false //Usurio normal a menos que se logee con google

    }

});

//No mandar la contraseña, en el esque redifinimos tJson en el userSchema
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
//Se llama usuario y tiene las propiedades de usuarioSchema
module.exports = mongoose.model('Usuario', usuarioSchema);