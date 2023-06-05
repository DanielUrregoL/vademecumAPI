const express = require("express");
const router = express.Router();
const User = require("../models/modelsUsuarios.js");

// Consultar todos los usuarios
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// Consultar un usuario
router.get("/:id", (req, res) => {
  const { id } = req.params;
  User
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Agregar usuario
router.post("/", async (req, res, next) => {
  try {
    const user = new User(req.body);
    const createdUser = await user.save();
    res.json(createdUser);
  } catch (error) {
    next(error);
  }
});

// Eliminar usuario
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  User
    .deleteMany({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar usuario
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.nombreUsuario = req.body.nombreUsuario;
      user.correoUsuario = req.body.correoUsuario;
      user.contrasenaUsuario = req.body.contrasenaUsuario;
      user.tipoUsuario = req.body.tipoUsuario;

      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    next(error);
  }
});


module.exports = router;