const express = require('express');
const app = express();
const cors = require('cors');
const productosRouter = require('./router/productos');
const carritoRouter = require('./router/carrito');
const ContenedorFirebase = require('./contenedores/ContenedorFirebase');
const ContenedorMongo = require('./contenedores/ContenedorMongo');


PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/productos', productosRouter);
app.use('/api/carrito', carritoRouter);

const fire = new ContenedorFirebase('productos')


//mongo 
const mongo = new ContenedorMongo('productos')

mongo.save({  price : 1000,
        thumbnail :'imagen',
        title : 'firestore',
        descripcion :' body.descripcion'}).then(id => console.log(id))

mongo.getAll().then(items => console.log(items))

//firestore
// fire.getAll().then((data) => {
//     console.log('1 --', data)
// })
// fire.getById('Rzhtqd8mlV67yIXe6uyi').then((data) => {
//     console.log('2 --',data)
// })

// fire.save({
//    price : 1000,
//     thumbnail :'imagen',
//     title : 'firestore',
//     descripcion :' body.descripcion'
// }).then((data) => {
//     console.log('3 --',data)
// })



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
}).on('error', (err) => console.log(err))

