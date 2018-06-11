var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



var todo = {
    groceries: [{
    store: 'Acme',
    list: [
        'strawberries',
        'blueberries',
        'yogurt'
    ]
    }, {
    store: 'Corner Market',
    list: [
        'baguette',
        'basil',
        'tomatoes'
    ]
    }]
};

app.get('/', function(req,res){
  console.log(todo);
	res.render('index', {todo: todo.groceries});  //respond with homepage
});

app.listen(3000, function(){
  console.log("App is listening at port 3000");
});
