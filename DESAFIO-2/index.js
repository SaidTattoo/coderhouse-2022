const fs = require('fs')
class Contenedor {
    save(producto) {
        producto.id =  Date.now()
        const data = this.getAll()
        data.push(producto)
        try {
            fs.writeFileSync('productos.txt', JSON.stringify(data,null,4))
            return producto.id
        } catch (error) {
            throw new Error('No se pudo guardar el producto')
        }
        
    }
    getById(id) {
        const data = this.getAll()
        return data.find(producto => producto.id === id) || null
    }
    getAll() {
        try {
            const data = fs.readFileSync('productos.txt', 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            throw new Error('No se pudo leer el archivo')
        }   
    }
    deleteById(id) {
        const data = this.getAll()
        const deleted = data.filter(producto => producto.id !== id)
        try{
            fs.writeFileSync('productos.txt', JSON.stringify(deleted))
        }catch(error){
            throw new Error('No se pudo eliminar el producto')
        }
    }
    deleteAll(){
        const data = []
        try{
        fs.writeFileSync('productos.txt', JSON.stringify(data))    
        }catch(error){
            throw new Error('No se pudo eliminar el producto')
        }
    }
}

const p = new Contenedor()

p.save({'title':"said"})
console.log(p.getById(1641934276649))
p.deleteById(1641933911054)
p.deleteAll()
console.log(p.getAll())