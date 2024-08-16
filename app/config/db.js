'use strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '0J4]t1phF.q9Aj*/',
    database : 'afteryou'
});

// connection.connect(function(err) {
//     if (err) throw err;
// });

module.exports = connection;