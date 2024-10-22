import express,{ Express } from "express";
import { dbConnection } from "../database/config";

export class Server {
    app: Express;
    port: string | number | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.conectarDB();
       
        // this.middlewares();
        // this.routes();
    }

    async conectarDB():Promise<void>{
        await dbConnection();
    }

    listen():void {
        this.app.listen(this.port, () => {
          console.log("Corriendo en el puerto",this.port)
        })
    }
}