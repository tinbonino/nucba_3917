import mongoose from "mongoose";

const connectDB = async()=> {
    try {
        await mongoose.connect("mongodb+srv://tinbonino:3A1I7ErpcOmeteFu@cluster0.hsc6s.mongodb.net/")
        console.log("Base de datos conectada!");
    } catch (error){
        console.error("Error de conexión!",error);
    }
};

export default connectDB;