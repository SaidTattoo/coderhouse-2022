const express = require('express');
const productosRouter = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/productos', productosRouter);
app.use('/static', express.static('public'))

app.listen(8080,() => {
    console.log('Servidor corriendo en el puerto 8080')
}).on( 'error',(err) => console.log(err))



