const express = require("express");
const router = express.Router();
const Medicamento = require("../models/modelsMedicamentos.js");

// Consultar todos los medicamentos
router.get("/", async (req, res, next) => {
  try {
    const medicamentos = await Medicamento.find();
    res.json(medicamentos);
  } catch (error) {
    next(error);
  }
});

// Agregar medicamento
router.post("/", async (req, res, next) => {
  try {
    const medicamento = new Medicamento(req.body);
    const createdMedicamento = await medicamento.save();
    res.json(createdMedicamento);
  } catch (error) {
    next(error);
  }
});

// Eliminar medicamento
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Medicamento
    .deleteMany({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar medicamento
router.put("/:id", async (req, res, next) => {
  try {
    const medicamento = await Medicamento.findById(req.params.id);
    if (medicamento) {
      medicamento.nombreMedicamento = req.body.nombreMedicamento;
      medicamento.infoMedicamento = req.body.infoMedicamento;
      medicamento.categoria = req.body.categoria;
      medicamento.imgMedicamento = req.body.imgMedicamento;

      const updatedMedicamento = await medicamento.save();
      res.json(updatedMedicamento);
    } else {
      res.status(404).json({ message: "Medicamento no encontrado" });
    }
  } catch (error) {
    next(error);
  }
});



module.exports = router;