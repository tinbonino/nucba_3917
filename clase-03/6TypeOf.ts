function imprimirInformacion(valor: string | number):void{
    if(typeof valor ==="string") {
        console.log("El valor es una cadena de texto",valor);
    } else if (typeof valor ==="number") {
        console.log("El valor es un número:",valor);
    } else   {
        console.log("El valor es de un tipo desconocido");
    }
}

imprimirInformacion("Empanada");
imprimirInformacion(55);
// imprimirInformacion(true);
