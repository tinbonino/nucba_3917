import {Schema, model,Model} from 'mongoose';

export interface IProducto {
    nombre:string;
    descripcion:string;
    precio:number;
    stock:number;
    categoria:string;
    disponible:boolean;
}

const productoSchema = new Schema<IProducto>({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
    categoria: {type: String, required: true},
    disponible: {type: Boolean, required: true}
});

const Producto: Model<IProducto> = model("producto", productoSchema);

export default Producto