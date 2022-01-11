const fs = require('fs')
class Contenedor {
    save(producto) {
        producto.id =  Date.now()
        const data = this.getAll()
        data.push(producto)
        fs.writeFileSync('productos.txt', JSON.stringify(data,null,4))
        return producto.id
    }
    getById(id) {
        const data = this.getAll()
        return data.find(producto => producto.id === id) || null
    }
    getAll() {
        const data = fs.readFileSync('productos.txt', 'utf-8')
        return JSON.parse(data)
    }
    deleteById(id) {
        const data = this.getAll()
        const deleted = data.filter(producto => producto.id !== id)
        fs.writeFileSync('productos.txt', JSON.stringify(deleted))
    }
    deleteAll(){
        const data = []
        fs.writeFileSync('productos.txt', JSON.stringify(data))    
    }
}

const p = new Contenedor()

p.save({'title':"said"})
console.log(p.getById(1641934276649))
p.deleteById(1641933911054)
p.deleteAll()
console.log(p.getAll())