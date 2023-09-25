class Producto {
    constructor(nombre, precio, unidades) {
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = unidades;
    }
}
class carritoDeCompras {
    constructor(montoTotal, productos) {
        this.montoTotal = montoTotal;
        this.productos = productos;
    }

agregarProducto(producto){
    this.productos.push(producto);
    this.montoTotal += producto.precio * producto.unidades;
}
}

let leche = new Producto("leche", 10, 1);
let carrito = new carritoDeCompras(10, [leche]);
let azucar = new Producto("azucar", 5, 2)
carrito.agregarProducto(azucar);
console.log(carrito);

