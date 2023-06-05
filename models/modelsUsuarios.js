const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true,
    },
    correoUsuario: {
        type: String,
        required: true
    },
    contrasenaUsuario: {
        type: String,
        required: true
    },
    tipoUsuario: {
        type: Number,
        required: true
    },

});

module.exports = mongoose.model('usuarios', usuarioSchema);