const mongoose = require("mongoose");

const categoriaSchema = mongoose.Schema({
    nombreCategoria: {
        type: String,
        required: true,
    },
    infoCategoria: {
        type: String,
        required: true
    },
    imgCategoria: {
        data: Buffer,
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Categorias', categoriaSchema);