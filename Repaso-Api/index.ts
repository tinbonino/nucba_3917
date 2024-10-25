import dotenv from "dotenv";
import { Server } from "./models/Server";

//inicializamos dotenv

dotenv.config();

//inicializamos el servidor

const server = new Server();
server.listen();