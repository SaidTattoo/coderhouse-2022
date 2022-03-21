const mongoose = require('mongoose')
const config = require('../config');

(async () => {
    const { protocol, user, pass, host, database, params } = config.mongoRemote
    const URI = `${protocol}://${user}:${pass}@${host}/${database}?${params}`
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
        .then(() => console.log("Database connected!"))
        .catch(err => console.log(err));
})

const schema = {
    "title": String,
    "price": String,
    "thumbnail": String,
    "descripcion": String,
    "stock": Number,
    "date": { type: Number, default: Date.now() }
}

class ContenedorMongo {

    constructor(collection) {
        console.log('MongoDB Connect ')
        this.model = mongoose.model(collection, new mongoose.Schema(schema))
    }
    async getAll() {
        const items = await this.model.find()
        return items
    }
    async getById(id) {
        const item = await this.model.findById(id)
        return item
    }
    async save(producto) {
        console.log(producto)
        const { id } = await this.model.create(producto)
        return id
    }
    async update(id, data) {
        const item = await this.model.findByIdAndUpdate(id, data)
        if (!item) throw new Error('Item not found')
    }
    async delete(id) {
        const item = await this.model.delete(id)
        if (!item) throw new Error('Item not found')
    }
    async deleteAll() {
        await this.model.deleteMany()
    }
}

module.exports = ContenedorMongo;