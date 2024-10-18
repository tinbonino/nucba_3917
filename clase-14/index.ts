import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
// Interface

interface IObjetoAGuardar {
    id:number,
    username:string,
    isAdmin:boolean
};

// Objeto

const objetoAGuardar :IObjetoAGuardar = {
    id: 1,
    username:"empanada",
    isAdmin:true

}

//Clave secreta

const miClaveSecreta="empanadaVoladora"

// Firma

// const tokenFIrmado = jwt.sign(objetoAGuardar,miClaveSecreta);
// console.log(tokenFIrmado);

const generarJWT = (dato:IObjetoAGuardar) => {

    return new Promise((resolve,reject) => {
      jwt.sign(dato,miClaveSecreta,{
        expiresIn:"50s"
      },
      (err,token) => {
        if(err){
            console.log(err);
            reject("Se picó... no funcionó")
        } else {
            console.log("Esta todo bien!");
            resolve(token)
        }
      }
    )
    })
  
}

(async () => {
    const respuesta = await generarJWT(objetoAGuardar);
    console.log(respuesta)
}) ()

//guardamos un token anterior con un tiempo de vencimiento y comprobamos que al principio verifica bien y luego arroja error por token vencido
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbXBhbmFkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyOTIwOTM2OCwiZXhwIjoxNzI5MjA5NDE4fQ.RH17yVplUy2kM4IXefP5ydsydXAML6frBWLeygftn5I"

// const dataVerificada = jwt.verify(token,miClaveSecreta)
// console.log("La info está verificada", dataVerificada);

// Encriptacion con bcryptjs

const passwordAEncriptar = "RapearElToken";

// Aplicamos la sal 

const salt = bcrypt.genSaltSync(10);
console.log("Sal 🧂")
console.log(salt);

const passwordEncriptado = bcrypt.hashSync(passwordAEncriptar,salt);

console.log("Contraseña encriptada")
console.log(passwordEncriptado)

const contraseñaValida= bcrypt.compareSync("Empanadaloca",passwordEncriptado);

console.log(contraseñaValida)