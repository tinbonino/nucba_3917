import express from "express";
import connectDB from "./database/connection";

import todoRoutes from "./routes/todoRoutes"

const app =express();

const PORT =8080;

//Conexión a la db
connectDB();
//Middlewares

app.use(express.json());

//Rutas

app.use("/todo",todoRoutes);

//Poner el servidor a escuchar

app.listen(PORT,() => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})