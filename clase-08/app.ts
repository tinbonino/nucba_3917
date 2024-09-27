// import http from "http";
// const PORT =8080;

// const server = http.createServer(async (req,res) => {
//     if(req.url === "/" && req.method==="GET"){
//         res.writeHead(200,{"Content-Type":"application/json"});
//         res.write(JSON.stringify({msg:"Hola, soy el home"}));
//         res.end();
//         console.log("Petición GET concretda");
//         return;
//     };

//     if(req.url === "/anidado" && req.method==="GET"){
//         res.writeHead(200,{"Content-Type":"application/json"});
//         res.write(JSON.stringify({msg:"Hola, soy una ruta anidada"}));
//         res.end();
//         console.log("Petición GET concretda");
//         return;
//     }
//     if(req.url === "/" && req.method==="POST"){
//         res.writeHead(200,{"Content-Type":"application/json"});
//         res.write(JSON.stringify({msg:"Hola, soy un POST"}));
//         res.end();
//         console.log("Petición POST concretda");
//         return;
//     }

//     res.writeHead(404,{"Content-type": "application/json"});
//     res.write(JSON.stringify({msg:"Aca no hay nada! ERROR"}));
//     res.end();
//     return;


    
// })

// server.listen(PORT, () => {
//     console.log("Servidor escuchando en el puerto:",PORT);
  
// })


//Ahora con express

import express from "express";
const app = express();
const PORT = 8080;

// Seteamos el Middlewere

app.use(express.static("public"));

app.get("/", (req,res) => {
  res.send("Hola el home");
})

// Creamos las rutas

app.get("/prueba",(req,res) => {
    res.sendFile(__dirname+"/public/prueba.html")
})


app.get("/elements",(req,res) => {
    res.sendFile(__dirname+"/public/elements.html")
    
})

app.get("/empanada",(req,res) => {
    res.sendFile(__dirname+"/public/generic.html")
    
})

app.get("*",(req,res) => {
    res.sendFile(__dirname+"/public/404.html")
})

// Inicializamos el servidor
  
app.listen(PORT,() => {
  console.log("Servidor corriendo en el puerto:", PORT);
})