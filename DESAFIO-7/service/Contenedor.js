const { options } = require('../options/mariadb');
const knex = require('knex')(options);

class Contenedor {
    constructor() {
    }
    async save({ price, title, thumbnail }) {
        try {
        let producto = {
            price: parseInt(price),
            title,
            thumbnail
        }
        let resp = await knex('productos').insert(producto)
        return resp
        } catch (error) {
            throw new Error('No se pudo guardar el producto')
        }
    }

    async getById(id) {
        try {   
            let resp = await knex('productos').select('*').where('id', id)
            return resp
        } catch (error) {
            throw new Error('No se pudo encontrar el producto')
        }

    }
    async getAll() {
        try {
            let data = await knex('productos').select('*')
            return data
        }	catch (error) {
            throw new Error(error)
        }
    }
    async deleteById(id) {
         if (this.getById(id)) {
             try {
                let data = await knex.del().from('productos').where('id', id)
                return data
             } catch (error) {
                 throw new Error('No se pudo eliminar el producto')
             }
         } else {
             return false
         }
    }
    async deleteAll() {
        try {
            let data = await  knex('productos').del()
            return data
        } catch (error) {
            throw new Error('No se pudo eliminar el producto')
        }
    }
    update(id, body) {
       try {
            let resp = knex('productos').where('id', id).update(body)
            return resp
       } catch (error) {
           throw new Error('No se pudo actualizar el producto')
       }
       
    }
    getRandom() {
        const data = this.getAll()
        return data[Math.floor(Math.random() * data.length)]
    }
}
module.exports = Contenedor