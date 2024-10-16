import {Model, model, Schema} from "mongoose";

// creamos la interface

export interface ITodo {
    title:string;
    completed:boolean;
}

// Creamos el schema

const TodoSchema: Schema = new Schema(
    {
        title: {
            type:String,
            required:true
        },
        completed: {
            type:Boolean,
            default:false
        }
    });

// Creamos el modelo

const Todo:Model<ITodo> = model<ITodo>("Todo",TodoSchema);

export default Todo;