import { Request, Response } from "express";

export const getController = (req:Request,res:Response) => {
    const method=req.method;
    const timestamp = new Date().toLocaleDateString();

    console.log(`[${timestamp}] Método: ${method} ejecutando el controlar get`);

    res.json({
        message:"Hola, este es un mensaje desde el back!",
        method,
        timestamp
    })
}

export const postController = (req:Request, res:Response) => {
    // console.log(req);
    const method=req.method;
    const timestamp= new Date().toLocaleDateString();

    console.log(`[${timestamp}] Método: ${method} ejecutado.`)

    const saludo=req.body.saludo;

    if(!saludo){
        console.error(`[${timestamp}] falta el campo "saludo" en la solicitud`);
        res.status(400).json({
            error:"Campo ausente",
            message:"Falta el campo saludo en la solicitud"
        })
        return;
    } 

    res.status(201).json({
        message:"Hola este es un mensaje desde el back! Mensaje recibido",
        receivedSaludo:saludo,
        method,
        timestamp
    });
  
}