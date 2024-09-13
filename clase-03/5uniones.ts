let edad: number | string;

edad=25;
console.log(edad);

edad="veinticinco";
console.log(edad);

function imprimirId(id:number | string){
    console.log(`ID ${id}`)
}

imprimirId(55);
imprimirId("dos")

function obtenerResultado():number | string {
    return Math.random() < 0.5 ? 10 : "error";
}

let resultado: number | string = obtenerResultado();

console.log(resultado);