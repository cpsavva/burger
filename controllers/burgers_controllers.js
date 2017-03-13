const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');


/*Routes*/
router.get('/', function(request, response){

	burger.selectAll(function(burger_data){
		console.log(burger_data);
		response.render('index', {burger_data});
	})
});

router.put('/burgers/update', function(request, response){
	burger.updateOne(request.body.id, function(result){
		console.log(result);

		// response.redirect('/');
	})
});

router.post('/burgers/create', function(request, response){
	burger.insertOne(request.body.burger_name, function(result){
		console.log(response);

		response.redirect('/');
	})
});


module.exports = router;






