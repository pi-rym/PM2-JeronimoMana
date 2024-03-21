/**
 ** Debe comprobarsi carrito es una instancia de clase
 ** Debe agregar al carrito un producto
 ** Debe agregar al carrito mas de un producto
 ** Debe calcular el total de un producto
 ** Debe calcular el total de varios producto
 ** Debe realizar el descuento a un producto
 ** Debe realizar el descuento a varios productos


 *?[{producto:"ProductoA", price:10, quantity:2}]
 *?[{producto:"ProductoA", price:10, quantity:2},{producto:"ProductoB", price:30, quantity:2},{producto:"ProductoC", price:10, quantity:1}]
**/

const CarritodeCompras = require("../index.js")


describe("Class CarritodeCompras", () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritodeCompras();

    });

    it("Carrito de compras debe ser una clase", () => {
        expect(carrito instanceof CarritodeCompras ? true : false).toEqual(true)
    })
    it("Debe agregar al carrito un producto", () => {
        expect(carrito.agregarProducto([{ producto: "ProductoA", price: 10, quantity: 2 }])).toEqual([{ producto: "ProductoA", price: 10, quantity: 2 }])
    })

    it("Debe agregar al carrito mas de un producto", () => {
        expect(carrito.agregarProducto([{ producto: "ProductoA", price: 10, quantity: 2 }, { producto: "ProductoB", price: 30, quantity: 2 }, { producto: "ProductoC", price: 10, quantity: 1 }])).toEqual([{ producto: "ProductoA", price: 10, quantity: 2 }, { producto: "ProductoB", price: 30, quantity: 2 }, { producto: "ProductoC", price: 10, quantity: 1 }])
    })
    it("Debe returnar el total cuando en el carrito halla un solo producto", () => {
        carrito.agregarProducto([{ producto: "ProductoA", price: 10, quantity: 2 }])
        expect(carrito.calcularTotal()).toBe(20)
    })

    it("Debe returnar el total cuando en el carrito halla varios productos", () => {
        carrito.agregarProducto([{ producto: "ProductoA", price: 10, quantity: 2 }, { producto: "ProductoB", price: 30, quantity: 2 }, { producto: "ProductoC", price: 10, quantity: 1 }])
        expect(carrito.calcularTotal()).toBe(90)
    })
    it("Debe realizar el descuento a un producto", () => {
        carrito.agregarProducto([{ producto: "ProductoA", price: 10, quantity: 2 }])
        expect(carrito.aplicarDescuento(10)).toBe(18)
    })
    it("Debe realizar el descuento a varios productos", () => {
        carrito.agregarProducto([{ producto: "ProductoA", price: 10, quantity: 2 }, { producto: "ProductoB", price: 30, quantity: 2 }, { producto: "ProductoC", price: 10, quantity: 1 }])
        expect(carrito.aplicarDescuento(30)).toBe(63)
    })

})