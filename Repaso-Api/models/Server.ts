import express, {Express} from 'express';
import Producto from '../models/Producto';
import productos from "../data/productos.json"
import { dbConnection } from '../database/config';
import productoRoutes from '../routes/productoRoutes';


export class Server {
    app: Express;
    port: string | number | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    // Conectar a la base de datos
    async conectarDB() {
        await dbConnection();
        await this.poblarDb();
    };

    //Funcion que carga los productos en la base de datos

    async poblarDb():Promise<void> {
        const existeProducto = await Producto.findOne();
        if(!existeProducto) {
            await Producto.insertMany(productos);
            console.log("Productos Iniciales agregados")
        }
    
    }
    // Middlewares

    middlewares() {
        this.app.use(express.json());
    }

    // Rutas de la aplicación

    routes() {
        this.app.use("/productos",productoRoutes);
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}