const sql = require('mysql')
const configDB = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'atividade'
}
const db = sql.createConnection(configDB)

module.exports = db;