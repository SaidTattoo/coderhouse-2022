const { Router } = require('express');
const { Databases } = require('../options/DB/Database');
const { optionsMaria } = require('../options/mariadb');
//depredado el contenedor de servicios
//const Contenedor = require('../service/Contenedor');
//const p = new Contenedor()
const productosRouter = Router()
const db = new Databases(optionsMaria, 'productos')
productosRouter.get('/', async (req, res) => {
   
    let resp = await db.getAll().length !== 0
        ? { productos: await db.getAll() }
        : { error: 'producto no encontrado' }
    res.json(resp)
})
productosRouter.get('/:id', async  (req, res) => {
    const { id } = req.params;
    let resp = await db.getById(id)
    ? { productos: await db.getById(id) }
    : { error: 'producto no encontrado' }
    res.json( resp )
})
productosRouter.post('/', async (req, res) => {
    // let resp = db.save(req.body)

    let { price, title, thumbnail } = req.body
    let producto = {
        price: parseInt(price),
        title,
        thumbnail
    }

   await  db.save(producto)
    // ? { productos: db.save(req.body)}
    // : { error: 'error al guardar el producto' }
    res.redirect("/")
})
productosRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    let resp = await  db.update(parseInt(id), req.body)
    ? { productos:await db.update(parseInt(id), req.body) }
    : { error: 'error al actualizar el producto' }
    res.json( resp )
})
productosRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    res.json({
        msg:await db.deleteById(parseInt(id))
            ? 'producto eliminado'
            : 'no se pudo eliminar el producto o el producto no existe'
    })
})
module.exports = productosRouter;