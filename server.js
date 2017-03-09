/*Dependencies*/


const bodyParser = require('body-parser');
const override = require('method-override');
const exhandle = require('express-handlebars');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/*use of /public content */
app.use(express.static(__dirname + '/public'));

/*Parse application/x-www-form-urlencoded*/
app.use(bodyParser.urlencoded({extended: false}));

/*use of override */
app.use(override('_method'));

/*use of handlebars*/
app.engine('handlebars', exhandle({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*require routes*/
require('./config/connection.js')(app);
require('./config/orm.js');
require('./controllers/burgers_controllers.js')(app);

// /*connect to mysql */
// mysqlconnect.connect(function(err) {
//   if (err) throw err;

//   console.log("connected as id " + mysqlconnect.threadId);

// });



app.listen(port, function(){
	console.log("I am working")
});