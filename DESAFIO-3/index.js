const express = require('express');
const app = express();

const Contenedor =  require('./Contenedor')

const p = new Contenedor()

const PORT = 8080

app.get('/productos',(req,res) => {
    res.json({
        productos:p.getAll()
    })
})
app.get('/productorandom',(req,res) => {
    res.json({
        productos:p.getRandom()
    })
})

const server =  app.listen( PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})
server.on('error',(err) => console.log(err))
