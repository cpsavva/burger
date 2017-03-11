const connection = require('./connection.js');

const table = 'burgers'

const orm = {

	selectAll: function(table, callback){
		connection.query('SELECT * FROM ' + table + ';', 
			function(err, result){
				if(err) throw err;
				callback(result);
			})
	},

	updateOne: function(table, condition, callback){
		connection.query('UPDATE ' + table + ' SET devoured=true WHERE id=?;', [condition],
			function(err, result){
				if(err) throw err;
				callback(result);
			})
	},

	insertOne: function(table, value, callback){
		connection.query('INSERT INTO '+ table+ '(burger_name, devoured) VALUES (?, false)',
		[value], function(err, result){
			if(err) throw err;
			callback(result);
		})
	}

}/*orm*/


module.exports = orm;