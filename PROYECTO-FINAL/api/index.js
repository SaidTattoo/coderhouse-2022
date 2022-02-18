const express = require('express');
const app = express();
const cors = require('cors');
const productosRouter = require('./router/productos');
const carritoRouter = require('./router/carrito');

PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json())
app.use('/api/productos', productosRouter);
app.use('/api/carrito', carritoRouter);

app.listen( PORT , () => {
    console.log(`Servidor corriendo en el puerto ${ PORT }`)
}).on('error', (err) => console.log(err))

