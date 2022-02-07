const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const productosRouter = require('./routes');
const  { engine } = require('express-handlebars');
const Contenedor = require('./service/Contenedor');

const c = new Contenedor()

app.engine("hbs", engine({
    extname: "hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials/"
}))
app.set("views", "./views")
app.set("view engine", "hbs")

app.use('/public', express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/productos', productosRouter);

app.get("/",(req, res) => {
    res.render("crearProducto")
})

app.get('/productos/vista',(req, res) => {
   // const data = c.getAll()
   // res.render("main", data.length !== 0 ? { productos:data } : { error: 'no hay productos cargados' })

   res.render("main")
})


//-------------------sockets -------------------//
io.on('connect', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.emit('message', { text: 'Welcome to socket.io' });
    socket.emit('productos', c.getAll())
    socket.on('addNewProduct', (data) => {
        console.log(data)
        c.save(data)
        socket.emit('productos', c.getAll())
    })
});





server.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080')
}).on('error', (err) => console.log(err))



