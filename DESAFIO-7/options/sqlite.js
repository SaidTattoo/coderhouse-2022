const optionsSqlite = {
    client: 'sqlite',
    connection: {
         filename: `${__dirname}/DB/desafio7.sqlite3`
    },
    useNullAsDefault: true
}

module.exports = { optionsSqlite }