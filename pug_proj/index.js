var express = require('express');
var pug = require('pug');
var app = express();
app.set('views', './views');
app.set('view engine', 'pug');

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
  res.render('list', {todo: todo});
});

/*
app.post('/add', function(request,response){
  console.log(request.body.cool);
});
*/
app.listen(3000, function(){
  console.log('Friend wants a pug!');
});
