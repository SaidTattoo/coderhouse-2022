const { Router } = require('express');
const Producto = require('../service/producto');


const productosRouter = Router()
const isAdmin = true
const p = new Producto()

// const p = process.env.DB === 'MONGODB' 
//     ? require('../daos/productos/productoDaoMONGO') 
//     : require('../daos/productos/productoDaoFIREBASE')

productosRouter.get('/:id?',(req,res) => {
    res.json({
        data: req.params.id 
        ? p.getById(req.params.id)
        : p.getAll()
    })        
 })
productosRouter.post('/', (req,res) => {
    p.save(req.body)
    res.json({
        data: req.body
    })
})
productosRouter.put('/:id', (req,res) => {
    p.update(req.params.id,req.body)
    res.json({
        message: 'producto actualizado',
        code:200
    })
})
productosRouter.delete('/:id', (req,res) => {
    p.deleteById(req.params.id)
    res.json({
        message: 'producto eliminado',
        code:200
    })
})
productosRouter.get('*', (req,res) => {
    res.json({
        message: 'Ruta no encontrada',
        code:404
    })
})

module.exports = productosRouter;