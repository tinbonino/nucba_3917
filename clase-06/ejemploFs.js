import {writeFile,readFile} from "fs";

// Escribir en un archivo
writeFile("archivo2.txt","Tenemos hambre",(err) => {
  if(err){
    console.error("Error al escribir en el archivo:", err);
    return;
  }
  console.log("Se ha escrito en el archivo correctamente");
});

//Leer de un archivo

readFile("archivo.txt","utf8",(err,data) => {
    if(err){
        console.error("Error al leer el archivo", err);
        return;
    }
    console.log("El contenido del archivo es:",data)
  
})
