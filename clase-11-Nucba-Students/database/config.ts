import mongoose from 'mongoose';

export const conectarDB = async (): Promise<void> => { 
    try {
        await mongoose.connect("mongodb+srv://tinbonino:OBEmDdnuicja1NiX@cluster0.9issu.mongodb.net/");
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};