import { Request, Response } from "express";

import Student, {IStudent} from "../models/student";

import Camada from "../models/camada";

export const getStudents = async({},res:Response) =>{
    
    const condicion = {estado:true};

    const students = await Student.find(condicion)
        .populate("camada","nombre");

    res.json({
        students
    })

}

export const getStudentByDNI = async(req:Request, res: Response)=>{
    const {dni}= req.params;


    const student: IStudent | null = await Student.findOne({dni:dni})
    .populate("camada","nombre")

    if(!student) {
        res.json({
            msg:"El dni solicitado no existe en la DB"
        })
        return;
    }

    res.json({
        student
    })
}

export const createStudent = async(req:Request,res:Response)=>{
    const studentData: IStudent = req.body;

    const {dni,nombre,camada,email} = studentData;

    //Buscamos la camada que vino en el body para verificar si existe
    const camadaData = await Camada.findOne({nombre:camada})

    // validamos que esten todos los datos en el body

    if (!nombre || !dni || !camada || !email) {
        res.json({
            msg:"Faltan datos necesarios en la petición"
        })
        return;
    }

    // validamos si existe la camada indicada

    if (!camadaData){
        res.json({
            msg: "La camada no se encontró en la base de datos"
        })
        return;
    }

    // validamos si existe el estudiante

    const alumnoEnDb = await Student.findOne({dni:dni});

    if(alumnoEnDb){
        res.status(400).json({
            msg:"El estudiante ya esta registrado"
        })
        return;
    }


    const student = new Student({
        dni,
        nombre,
        email,
        camada:camadaData?._id
    });

    await student.save();

    res.json({
        msg:"Todo piola",
        student
    })
}

export const updateStudent = async(req:Request,res:Response)=>{
    const {dni} = req.params;

    const {estado,camada,...data} = req.body;

    const student = await Student.findOneAndUpdate({dni:dni},data,{new:true});

    res.json({
        msg:"Estudiante actualizado correctamente",
        student
    })
};

export const deleteStudent = async(req:Request,res:Response)=>{
    const {dni}=req.params;

    // const student = await Student.findOneAndDelete({dni:dni}); // HARD DELETE

    //SOFT DELETE

    const student = await Student.findOneAndUpdate(
        {dni:dni},
        {estado:false},
        {new:true}
    )

    if(!student){
        res.json({
            msg:"El estudiante no se encontró en la DB"
        })
        return;
    }

    res.json(
        {
        msg:"Estudiante eliminado",
        student
        }
    )
}