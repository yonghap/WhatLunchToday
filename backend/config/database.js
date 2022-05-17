var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'bdot',
	password : 'bdot0106!',
	port : 3306,
	database : 'bdot'
});

connection.connect((err) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log('connected');
})

module.exports = connection;