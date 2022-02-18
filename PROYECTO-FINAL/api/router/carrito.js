const { Router, response } = require('express');
const Carrito = require('../service/carrito');


const carritoRouter = Router()

const c = new Carrito()


carritoRouter.get('/',(req,res) => {
    let carrito  =  c.createCarrito()
    res.json({
        carrito: carrito,
        code:200
    })
})

carritoRouter.delete('/:id',(req,res) => {
    c.deleteCarrito(parseInt(req.params.id))
    res.json({
        message: 'carrito eliminado',
        code:200
    })
})

carritoRouter.get('/:id/productos',(req,res) => {
    const { id } = req.params
    let carrito =  c.getCarrito(id)
    res.json({
        carro:carrito,
        code:200
    })
})

carritoRouter.post('/:id/productos',(req,res) => {
    const { id } = req.params
    const producto = req.body
    let data =  c.addProductInCarrito(id,producto)
    res.json({
        carro: data,
        code:200
    })
})

carritoRouter.delete('/:id/productos/:idProducto',(req,res) => {
    const { id } = req.params
    const { idProducto } = req.params
    let data =  c.deleteProductInCarrito(id,idProducto)
    res.json({
        carro: data,
        code:200
    })
})

module.exports = carritoRouter;