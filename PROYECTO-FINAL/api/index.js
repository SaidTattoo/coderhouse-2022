const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const productosRouter = require('./router/productos');
const carritoRouter = require('./router/carrito');
const ContenedorFirebase = require('./contenedores/ContenedorFirebase');
const ContenedorMongo = require('./contenedores/ContenedorMongo');

const dotenv = require('dotenv').config();

PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/productos', productosRouter);
app.use('/api/carrito', carritoRouter);

const fire = new ContenedorFirebase('productos')


//mongo 
const mongo = new ContenedorMongo('productos')
mongo.getAll().then((e) => console.log('--->',e))
/*mongo.save({  price : 1000,
        thumbnail :'imagen',
        title : 'firestore',
        descripcion :' body.descripcion'}).then(id => console.log(id))*/




app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
}).on('error', (err) => console.log(err))

