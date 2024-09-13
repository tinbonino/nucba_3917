function obtenerValor<T>(valor:T):T {
    return valor
}

const numero=45;
const resultadoNumero = obtenerValor(numero);
console.log(resultadoNumero);

const texto = "Hola soy un string";
const resultadoTexto = obtenerValor(texto);
console.log(resultadoTexto);

const bandera = true;
const resultadoBandera = obtenerValor(bandera);
console.log(resultadoBandera);

function obtenerPrimerElemento<T>(array:T[]):T | undefined {
    if(array.length>0){
        return array[0];
    }
    return undefined;
}

const numeros: number[] = [1,2,3,4,5];
const primerNumero : number | undefined = obtenerPrimerElemento(numeros);
console.log(primerNumero);

const palabras: string[] =["Hola","Chau"];
const primeraPalabra :string | undefined =obtenerPrimerElemento(palabras);
console.log(primeraPalabra);