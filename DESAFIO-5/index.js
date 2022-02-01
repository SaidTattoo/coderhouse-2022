const express = require('express');
const productosRouter = require('./routes');
const Contenedor = require('./service/Contenedor');
const app = express();
const c = new Contenedor()
require('pug');
//configuracion de pug
app.set("views", "./views")
app.set("view engine", 'pug')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/productos', productosRouter);

app.get("/",(req, res) => {
    res.render("crearProducto.pug")
})

app.get('/productos/vista',(req, res) => {
    const data = c.getAll()
    res.render("main.pug", data.length !== 0 ? { productos:data } : { error: 'no hay productos cargados' })
})

app.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080')
}).on('error', (err) => console.log(err))



