class Producto {
    nombre: string;
    precio:number;

    constructor(nombre:string,precio:number){
        this.nombre=nombre;
        this.precio=precio
    }

//     mostrarInfo(){
//         console.log(`Producto ${this.nombre}, Precio: ${this.precio}`)
//     }
// }

//Metodo definido con funcion tradicional

// const producto1 = new Producto("TV",350000);
// // producto1.mostrarInfo();

// const info = producto1.mostrarInfo;
// info();

//metodo definido con funcion arrow


    mostrarInfo = () => {
    console.log(`Producto ${this.nombre}, Precio: ${this.precio}`)
    }

}

const producto1 = new Producto("TV",350000);
// producto1.mostrarInfo();

const info = producto1.mostrarInfo;
info();