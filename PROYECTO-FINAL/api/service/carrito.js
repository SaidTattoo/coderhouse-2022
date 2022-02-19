const fs = require('fs')
const Producto = require('./producto')
const p = new Producto()
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator();
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
                id: uidgen.generateSync(),
                timestamp: Date.now(),
                productos: []
            }]
        }else{
            carrito.push( {
                id: uidgen.generateSync(),
                timestamp: Date.now(),
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
        return this.carritos().filter(carrito => carrito.id === id) 
    }
    deleteCarrito(id) {
        let carrito = this.carritos().filter(carrito => carrito.id !== id)
        try {
            fs.writeFileSync('carrito.txt', JSON.stringify(carrito, null, 4))
            return carrito.id
        } catch (error) {
            throw new Error('No se pudo elimianar el carrito')
        }
    }

    addStock(id) {
        const data = p.getAll()
        const producto = data.find(producto => producto.id === id)
        console.log(data, id)
        producto.stock = producto.stock + 1
        p.updateStock(id, producto.stock)
    }
    removeStock(id) { 
        const data = p.getAll()
        const producto = data.find(producto => producto.id === id)
        producto.stock = producto.stock - 1
        p.updateStock(id, producto.stock)
    }
    addProductInCarrito(id, producto) {
        this.removeStock(producto.id)
        producto.date = new Date()
        producto.idInCart = uidgen.generateSync()
        let carrito = this.getCarrito(id)
        carrito[0].productos.push(producto)
        try {
            fs.writeFileSync('carrito.txt', JSON.stringify(carrito, null, 4))
            return this.getCarrito(id)
        } catch (error) {
            throw new Error('No se agregar producto al carrito')
        }
    }
    deleteProductInCarrito(idC, idProducto, id) {
        this.addStock(id)
        let carrito = this.getCarrito(idC)
        carrito[0].productos = carrito[0].productos.filter(producto => producto.idInCart !== idProducto)
        try {
            fs.writeFileSync('carrito.txt', JSON.stringify(carrito, null, 4))
            return this.getCarrito(idC)
        } catch (error) {
            throw new Error('No se pudo eliminar el producto del carrito')
        }
    }
}


module.exports = Carrito