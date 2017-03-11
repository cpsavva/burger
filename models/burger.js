const orm = require('../config/orm.js');


var burgerModel = {
	selectAll : function(callback){
		orm.selectAll('burgers', function(response){
			callback(response);
		})
	},

	updateOne : function(id, callback){
		orm.updateOne('burgers', id, callback);
	},

	insertOne : function(value, callback){
		orm.insertOne('burgers', value, callback);
	}

}


module.exports = burgerModel;