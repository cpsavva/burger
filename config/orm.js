const connection = require('connection.js');

module.exports = function(app){


/* queries */
	app.get('/api/burgers', function(request, response){

		connection.query('SELECT * FROM burgers;', function(err, data){
			if (err) throw err;

			/*test*/
			console.log('results from table = ' + data);
			response.send(data);

			// response.render('index', {burgers: data});
		}); /*query*/

	});/*app.get*/


	app.post('/', function(request, response){
		connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, false)', 
			[request.body.burger_name], function(err, data){
				if (err) throw err;

				data.redirect('/');
		}); /*query*/
	})/*app.post*/

/*check that this query will be used only when you click the devour it button*/
/*might need to add another app.put request*/
	app.put('/', function(request, response){
		connection.query('UPDATE burgers SET devoured = ? WHERE id = ?',
			[true, request.body.id], function(err, data){
				if(err) throw err;

				response.redirect('/');
			})/*query*/

	})/*app.put*/

}/*exports*/