const mongoose = require("mongoose");

const medicamentoSchema = mongoose.Schema({
    nombreMedicamento: {
        type: String,
        required: true,
    },
    infoMedicamento: {
        type: String,
        required: true
    },
    categoria: {
        type: Array,
        required: true
    },
    imgMedicamento: {
        data: Buffer,
        type: String,
      required: true
    }
});

module.exports = mongoose.model('Medicamentos', medicamentoSchema);