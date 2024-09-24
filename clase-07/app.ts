import express,{Application} from "express";

import { getController,postController } from "./controllers/controllers";
// Inicializar la app de express

const app:Application = express();

// Establecemos el middlewere para que pueda leer json

app.use(express.json());

// Creamos las rutas

app.post("/set",postController);
app.get("/obtener",getController);

// Ponemos el servidor a escuchar el puerto: 3000

app.listen(3000,() => {
  console.log("El servidor está escuchando el puerto 3000");
})