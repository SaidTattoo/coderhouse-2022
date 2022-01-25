const express = require('express');
const { Router } = express
const multer = require('multer')


const app = express();
const personas = Router()
const mascotas = Router()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + new Date().getTime())
    }
})
const fileMiddleware = multer( storage )

mascotas.post('upload', fileMiddleware.single('image'), (req, res) => {
    const file = req.mascota
    console.log(file)
    res.json('33333')
})

personas.get('/', (req, res) => {
    console.log('hola')
})
let listaMascotas = ['perro', 'gato', 'conejo', 'tortuga', 'pato']

mascotas.get('/', (req, res) => {
    listaMascotas.push(req.body.mascota)
    res.json(listaMascotas)
})

app.use('/personas', personas)
app.use('/mascotas', mascotas)
app.use('/static', express.static('public'))

app.listen(3000, () => {
   console.log('Servidor corriendo en el puerto 3000') 
})