const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const productosRouter = require('./routes');
const  { engine } = require('express-handlebars');
const Contenedor = require('./service/Contenedor');
const identicon = require('identicon')
const fs = require('fs')
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
 io.on('connection',  (socket) => { 

    console.log('id', socket.id)
    //create identicon from img
     identicon.generate({id:socket.id, size:100},(err,buffer) => {
        if (err) throw err
         fs.writeFileSync(`./public/img/${socket.id}.png`, buffer)
    })
    socket.on('disconnect', () => {
      io.emit('disconected', 'user disconnected');
      //remove identicon from img
      fs.unlinkSync(`./public/img/${socket.id}.png`)
    });
    io.emit('productos', c.getAll())
    socket.on('addNewProduct', (data) => {
        console.log(data)
        c.save(data)
        io.emit('productos', c.getAll())
    }) 
    //chat room
    socket.on('newMessage', (data) => {
        io.emit('message', data)
    })
    //typing event 
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
});



server.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080')
}).on('error', (err) => console.log(err))



