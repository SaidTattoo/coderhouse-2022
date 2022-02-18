const fs = require('fs')
class Carrito {
    constructor() {

    }
    carritos(){
        return JSON.parse(fs.readFileSync('carrito.txt', 'utf-8'))
    }
    createCarrito() {
        let carrito = this.carritos() || []
        if(carrito.length === 0){
            carrito = [{
                id: Date.now(),
                productos: []
            }]
        }else{
            carrito.push( {
                id: Date.now(),
                productos: []
            })
        }
        try {
            fs.writeFileSync('carrito.txt', JSON.stringify(carrito, null, 4))
            return carrito[carrito.length - 1].id
        } catch (error) {
            throw new Error('No se pudo crear el carrito')
        }
    }
    getCarrito(id) {
        return this.carritos().filter(carrito => carrito.id === parseInt(id)) 
    }
    deleteCarrito(id) {
        let carrito = this.carritos().filter(carrito => carrito.id !== parseInt(id))
        try {
            fs.writeFileSync('carrito.txt', JSON.stringify(carrito, null, 4))
            return carrito.id
        } catch (error) {
            throw new Error('No se pudo elimianar el carrito')
        }
    }
    addProductInCarrito(id, producto) {
        let carrito = this.getCarrito(id)
        carrito[0].productos.push(producto)
        try {
            fs.writeFileSync('carrito.txt', JSON.stringify(carrito, null, 4))
            return this.getCarrito(id)
        } catch (error) {
            throw new Error('No se agregar producto al carrito')
        }
    }
    deleteProductInCarrito(id, idProducto) {
        let carrito = this.getCarrito(id)
        let producto = carrito.productos.filter(producto => producto.id !== parseInt(idProducto))
        carrito.productos = producto
        try {
            fs.writeFileSync('carrito.txt', JSON.stringify(carrito, null, 4))
            return this.getCarrito(id)
        } catch (error) {
            throw new Error('No se pudo eliminar el producto del carrito')
        }
    }
}


module.exports = Carrito