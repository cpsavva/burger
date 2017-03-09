const orm = require('../config/orm.js');


module.exports = function(app){

/* queries */
	app.get('/api/burgers', function(request, response){

			orm.selectAll(function(data){
				response.json(data);
				console.log('am i getting anything?')

			

			response.render('index', {burgers: data});
});
	});/*app.get*/


// 	app.post('/', function(request, response){
		

// 				data.redirect('/');
		
// 	})/*app.post*/

// /*check that this query will be used only when you click the devour it button*/
// /*might need to add another app.put request*/
// 	app.put('/', function(request, response){
// 		connection.query('UPDATE burgers SET devoured = ? WHERE id = ?',
// 			[true, request.body.id], function(err, data){
// 				if(err) throw err;

// 				response.redirect('/');
// 			})/*query*/

	// })app.put

}/*exports*/