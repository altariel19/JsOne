class carro {
    constructor() {
        this.montoTotal = 0;
        this.productos = [];
    }
    agregarProducto(nombre, precio, unidades) {
        const productoExigente =
            this.productos.find((producto) => producto.nombre === nombre);
        if (productoExigente) {
            console.log("ya existen" + nombre + "con"+ productoExigente.unidades+"unidades");
        }
        else {
            const producto = { nombre, precio, unidades }
            this.productos.push(producto);
            this.montoTotal += precio * unidades;
        }
    }

};
let carritoNew = new carro();
carritoNew.agregarProducto('azucar', 2, 10);
carritoNew.agregarProducto('azucar', 5, 2);
console.log(carritoNew)