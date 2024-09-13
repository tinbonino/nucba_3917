interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
    descripcion: string;
}

type InfoProducto = Pick<Producto, 'nombre' | 'precio'>;

const producto: InfoProducto = {
    nombre: 'Camiseta',
    precio: 29.99,
};

console.log(producto);
