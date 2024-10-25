import { Request,Response } from "express";
import Producto from "../models/Producto";

//crear producto

export const crearProducto = async (req:Request, res:Response):Promise<void> => {
    const {nombre,descripcion,precio,stock,categoria,disponible} = req.body;

    try {
        const producto = new Producto({nombre,descripcion,precio,stock,categoria,disponible});
        await producto.save();
        res.status(201).json({producto});
    } catch(error){
        res.status(500).json(
            {
            msg:"Error al crear el producto",
            error
            }
    );
    }
}

//obtener productos

export const obtenerProductos = async (req:Request, res:Response):Promise<void> => {
    const productos= await Producto.find();
    res.json({productos});
};

//Obtener un producto por id

export const obtenerProductoPorId = async (req:Request,res:Response):Promise<void> =>{
    const {id} = req.params;
    const producto = await Producto.findById(id);

    if (!producto){
        res.status(404).json({
            msg:"No esiste el produto"
        })
        return;
    }
    res.json({producto})
};

export const actualizarProducto = async (req:Request,res:Response):Promise<void> => {
    const {id}=req.params;
    const {...data} = req.body;

    const producto = await Producto.findByIdAndUpdate(id,data,{new:true});

    if(!producto){
        res.status(404).json({
            msg: "Producto no encontrado"
        });
        return;
    }

    res.json({producto})
};

export const eliminarProducto = async (req:Request,res:Response):Promise<void> => {
    const {id}=req.params;
    
    const producto= await Producto.findByIdAndDelete(id);

    if(!producto){
        res.status(404).json({
            msg:"No hay producto para eliminar"
        })
        return;
    }
    res.json({msg:"Producto ELIMINADO"})
};