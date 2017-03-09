const connection = require('./connection.js');

const table = 'burgers'

const orm = {

	selectAll: function(response){

		connection.query('SELECT * FROM' + table, function(err, result){
			response(result);
		});/*query*/

	},/*selectAll*/

	insertOne: function(request, response){
		connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, false)', 
			[request.burger_name], function(err, data){
				response(data);
		}); /*query*/
	},/*insertOne*/

	updateOne: function(request, response){
		connection.query('UPDATE burgers SET devoured = ? WHERE id = ?',
			[true, request.id], function(err, data){
				response(data);
			})/*query*/
	},/*updateOne*/


}/*orm*/


module.exports = orm;