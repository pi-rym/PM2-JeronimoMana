class CarritodeCompras {
    constructor() {
        this.productos = []
    }
    agregarProducto(producto) {
        for (const produc of producto) {
            this.productos.push(produc)
        }
        return this.productos

    }
    calcularTotal() {
        let total = 0
        for (const producto of this.productos) {
            total += producto.price * producto.quantity
        }
        return total
    }
    aplicarDescuento(porcentaje) {
        return this.calcularTotal() - ((this.calcularTotal() * porcentaje) / 100);
    }
}

module.exports = CarritodeCompras