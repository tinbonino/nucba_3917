import mongoose from "mongoose";

export const dbConnection = async ():Promise<void> => {
    try {
        const dbURL = process.env.DB_URL;

        if(!dbURL){
            throw new Error("La URL no está correctamente definida en el .env");
        }

        await mongoose.connect(dbURL);
        console.log("Base de datos ONLINE");
    } catch(error) {
        console.log(error);
        throw new Error("Error a la hora de inicializar la base de datos")
    }
};