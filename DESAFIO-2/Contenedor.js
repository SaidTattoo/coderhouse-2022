const fs = require('fs')
class Contenedor {
    constructor() {
      
    }
    async save(producto) {
        producto.id =  Date.now()
        const data = await this.getAll()
        data.push(producto)
        try {
            fs.writeFileSync('productos.txt', JSON.stringify(data,null,4))
            return producto.id
        } catch (error) {
            throw new Error(error,'No se pudo guardar el producto')
        }
    }
    
    getById(id) {
        const  data = this.getAll()
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
            fs.writeFile('productos.txt', JSON.stringify(deleted,null,4))
        }catch(error){
            throw new Error('No se pudo eliminar el producto')
        }
    }
    deleteAll(){
        const data = []
        try{
            fs.writeFile('productos.txt', JSON.stringify(data,null,4))    
        }catch(error){
            throw new Error('No se pudo eliminar el producto')
        }
    }
   
}
module.exports = Contenedor