type Coordenadas = {
    x:number;
    y:number;
}

type Color = "rojo" | "verde" | "azul";

type Punto = Coordenadas & {
    color:Color;
}

const punto:Punto = {
    x:3,
    y:20,
    color:"verde"
}

console.log(punto);