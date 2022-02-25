const {options } = require('./mariadb');
const knex = require('knex')(options);

knex.schema.createTable('productos', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.string('thumbnail');
    table.integer('price');
}).then(() => {
    console.log('tabla creada')
}).catch((err) => {
   throw err
}).finally(() => {
    knex.destroy()
})