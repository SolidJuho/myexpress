const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'netuser',
    password: 'netpass',
    database: 'oamk'
})
module.exports = connection;