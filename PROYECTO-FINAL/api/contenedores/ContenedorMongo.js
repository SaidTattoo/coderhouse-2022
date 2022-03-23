const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const config = require("../config");


getConnection= async () => {
    const connectionString =
  "mongodb+srv://SaidTattoo:SaidTattoo@cluster0.cts60.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    return 'db connected'
}


const schema = {
  title: String,
  price: String,
  thumbnail: String,
  descripcion: String,
  stock: Number,
  date: { type: Number, default: Date.now() },
};

class ContenedorMongo {
  constructor(collection) {
    getConnection().then((msg) => {
        console.log(msg)
    })
    this.model = mongoose.model(collection, new mongoose.Schema(schema));
  }
  async getAll() {
    const items = await this.model.find();
    return items ? items : "";
  }
  async getById(id) {
    const item = await this.model.findById(id);
    return item;
  }
  async save(producto) {
    const { _id } = await this.model.create(producto);
    return _id;
  }
  async update(id, data) {
    const item = await this.model.findByIdAndUpdate(id, data);
    if (!item) throw new Error("Item not found");
  }
  async delete(id) {
    const item = await this.model.delete(id);
    if (!item) throw new Error("Item not found");
  }
  async deleteAll() {
    await this.model.deleteMany();
  }
}

module.exports = ContenedorMongo;
