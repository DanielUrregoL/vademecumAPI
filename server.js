const express = require("express");
const cors = require("cors");
const app = express();
const rutasUsuarios = require("./routes/rutasUsuarios.js");
const rutasCategorias = require("./routes/rutasCategorias.js");
const rutasMedicamentos = require("./routes/rutasMedicamentos.js");
const mongoose = require("mongoose");
require("dotenv").config();

/*
const uri = "mongodb://127.0.0.1:27017/vademecum";
const options = { useNewUrlParser: true, useUnifiedTopology: true };


// Conectar a MongoDB
async function connectToMongoDB(uri, options) {
    try {
        await mongoose.connect(uri, options);
        console.log("Conectado a MongoDB");
    } catch (err) {
        console.error("Error al conectar a MongoDB:", err);
    };
};

// Llamar a la función
connectToMongoDB(uri, options);
*/
mongoose
  .connect(process.env.mongo_uri)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));
//MIDLEWARE

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());


//RUTAS

app.get("/", (req, res) => {res.send("welcome to my API")});

app.use("/api/usuarios", rutasUsuarios);
app.use("/api/categorias", rutasCategorias);
app.use("/api/medicamentos", rutasMedicamentos);

//PUERTO 

app.set("port", process.env.PORT || 9000);
app.listen(app.get("port"), () => {
    console.log("servidor corriendo en el puerto", app.get("port"))
});

