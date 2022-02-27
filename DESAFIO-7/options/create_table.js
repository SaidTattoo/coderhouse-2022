const {options } = require('./mariadb');
const knex = require('knex')(options);

knex.schema.createTable('productos', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.string('thumbnail');
    table.integer('price');
}).then(() => {
    console.log('tabla creada')
    process.exit()
}).catch((err) => {
    console.log(err)
    process.exit()
}).finally(() => {
    knex.destroy()
})