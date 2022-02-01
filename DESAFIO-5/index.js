const express = require('express');
const productosRouter = require('./routes');
const Contenedor = require('./service/Contenedor');
const app = express();
const c = new Contenedor()

//configuracion de pug
app.engine('pug', require('pug').__express)
app.set("view engine", 'pug')
app.set("views", "./views")


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/productos', productosRouter);

app.get("/",(req, res) => {
    res.render("crearProducto")
})

app.get('/productos/vista',(req, res) => {
    const data = c.getAll()
    res.render("main", data.length !== 0 ? { productos:data } : { error: 'no hay productos cargados' })
})

app.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080')
}).on('error', (err) => console.log(err))



