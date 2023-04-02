var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'stock_management',
    user:'root',
    password: '#Bangla71'
});

module.exports = connection;