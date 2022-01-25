const fs = require('fs')
class Contenedor {
    constructor() {

    }
    save(producto) {
        producto.id = Date.now()
        const data = this.getAll()
        data.push(producto)
        try {
            fs.writeFileSync('productos.txt', JSON.stringify(data, null, 4))
            return producto.id
        } catch (error) {
            return false
        }
    }

    getById(id) {
        const data = this.getAll()
        return data.find(producto => producto.id === id)
    }
    getAll() {
        try {
            const data = fs.readFileSync('productos.txt', 'utf-8')
            if (data.length >= 0) {
                return JSON.parse(data)
            } else {
                return false
            }

        } catch (error) {
            throw new Error('No se pudo leer el archivo')
        }
    }
    deleteById(id) {
        const data = this.getAll()
        const deleted = data.filter(producto => producto.id !== id)
        if (this.getById(id)) {
            try {
                fs.writeFileSync('productos.txt', JSON.stringify(deleted, null, 4))
                return true
            } catch (error) {
                throw new Error('No se pudo eliminar el producto')
            }
        } else {
            return false
        }

    }
    deleteAll() {
        const data = []
        try {
            fs.writeFileSync('productos.txt', JSON.stringify(data, null, 4))
        } catch (error) {
            throw new Error('No se pudo eliminar el producto')
        }
    }
    update(id, body) {
        const data = this.getAll()
        const producto = data.find(producto => producto.id === id)
        if (producto) {
            data.forEach(element => {
                if (element.id === id) {
                    element.price = body.price
                    element.thumbnail = body.thumbnail
                    element.title = body.title
                }
            })
            try {
                fs.writeFileSync('productos.txt', JSON.stringify(data, null, 4))
                return producto
            } catch (error) {
                throw new Error('No se pudo actualizar el producto')
            }
        } else {
            return false
        }
    }
    getRandom() {
        const data = this.getAll()
        return data[Math.floor(Math.random() * data.length)]
    }
}
module.exports = Contenedor