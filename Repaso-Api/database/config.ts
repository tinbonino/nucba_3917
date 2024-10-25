import mongoose from "mongoose";
export const dbConnection = async () => {
    try {   
        await mongoose.connect(process.env.DB_URL ||"")
        console.log("Base de datos conectada");
    } catch (error){
        console.error("Error al conectar a la base de datos");
        throw new Error ("Error en la conexion a la base de datos");
    }
};