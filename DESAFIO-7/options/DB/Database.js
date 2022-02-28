const { default: knex } = require('knex');

class Databases {
    constructor(database, table) {
        this.knex = require('knex')(database);
        this.table = table;
    }
    async save(producto) {
        try {
        let resp = await this.knex(this.table).insert(producto)
        return resp
        } catch (error) {
            throw new Error('No se pudo guardar el producto')
        }
    }
    async getById(id) {
        try {
            let resp = await this.knex(this.table).select('*').where('id', id)
            return resp
        } catch (error) {
            throw new Error('No se pudo encontrar el producto')
        }
    }
    async getAll() {
        try {
            let data = await this.knex(this.table).select('*')
            return data
        }	catch (error) {
            throw new Error(error)
        }
    }
    async deleteById(id) {
        if (this.getById(id)) {
            try {
               let data = await this.knex.del().from(this.table).where('id', id)
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
           let data = await  this.knex(this.table).del()
           return data
       } catch (error) {
           throw new Error('No se pudo eliminar el producto')
       }
   }
   update(id, body) {
      try {
           let resp = this.knex(this.table).where('id', id).update(body)
           return resp
      } catch (error) {
          throw new Error('No se pudo actualizar el producto')
      }
      
   }
}

module.exports = { Databases };
