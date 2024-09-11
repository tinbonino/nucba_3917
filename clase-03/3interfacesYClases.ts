interface ProductoInt {
    id: number;
    nombre: string;
    precio: number;
    disponible:boolean;

    calcularDescuento(descuento: number):number // Firma del método
}

// Implemento esa interfaz en una clase

class Producto implements ProductoInt {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
    
    constructor(id:number,nombre:string,precio:number,disponible:boolean){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.disponible=disponible;
    }

    calcularDescuento(descuento: number): number {
        return this.precio-this.precio*(descuento/100)
    }
  
}

let producto1 = new Producto(1,"Empanada",1500,true);
let producto2 = new Producto(2,"Pïzza",7500,false);

console.log(producto1.calcularDescuento(10));



console.log(producto1);
console.log(producto2);