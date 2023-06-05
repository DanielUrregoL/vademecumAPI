const express = require("express");
const router = express.Router();
const Categoria = require("../models/modelsCategorias.js");

// Consultar todos las categorias
router.get("/", async (req, res, next) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    next(error);
  }
});

// Agregar categoria
router.post("/", async (req, res, next) => {
  try {
    const categoria = new Categoria(req.body);
    const createdCategoria = await categoria.save();
    res.json(createdCategoria);
  } catch (error) {
    next(error);
  }
});

// Eliminar categoria
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Categoria
    .deleteMany({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar categoria
router.put("/:id", async (req, res, next) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    if (categoria) {
      categoria.nombreCategoria = req.body.nombreCategoria;
      categoria.infoCategoria = req.body.infoCategoria;
      categoria.imgCategoria = req.body.imgCategoria;

      const updatedCategoria = await categoria.save();
      res.json(updatedCategoria);
    } else {
      res.status(404).json({ message: "Categoria no encontrada" });
    }
  } catch (error) {
    next(error);
  }
});



module.exports = router;