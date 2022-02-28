const {optionsSqlite } = require('./sqlite');
const knex = require('knex')(optionsSqlite);

//delete table chat 

knex.schema.createTable('chat', (table) => {
    table.increments('id').primary();
    table.string('userId')
    table.string('username');
    table.string('message');
}).then(() => {
    console.log('tabla creada')
}).catch((err) => {
   throw err
}).finally(() => {
    knex.destroy()
})