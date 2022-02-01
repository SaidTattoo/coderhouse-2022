const { Router } = require('express');
const Contenedor = require('../service/Contenedor');

const productosRouter = Router()
const p = new Contenedor()

productosRouter.get('/', (req, res) => {
    let resp = p.getAll().length !== 0
        ? { productos: p.getAll() }
        : { error: 'producto no encontrado' }
    res.json(resp)
})
productosRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    let resp = p.getById(parseInt(id))
    ? { productos:p.getById(parseInt(id)) }
    : { error: 'producto no encontrado' }
    res.json( resp )
})
productosRouter.post('/', (req, res) => {
    // let resp = p.save(req.body)
    p.save(req.body)
    // ? { productos: p.save(req.body)}
    // : { error: 'error al guardar el producto' }
    res.redirect("/productos/vista")
})
productosRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    let resp = p.update(parseInt(id), req.body)
    ? { productos: p.update(parseInt(id), req.body) }
    : { error: 'error al actualizar el producto' }
    res.json( resp )
})
productosRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        msg: p.deleteById(parseInt(id))
            ? 'producto eliminado'
            : 'no se pudo eliminar el producto o el producto no existe'
    })
})
module.exports = productosRouter;