const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3385,
    password: 'root',
    database: 'basket_tournament',
    charset: 'LATIN1_GENERAL_CI'
});

// (function checkConnection(connection) {
//   connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
//     console.log('connected as id ' + connection.threadId);
//   });
//
//   connection.end();
// })(connection);

module.exports = connection;
