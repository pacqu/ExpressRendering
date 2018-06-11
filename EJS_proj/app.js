var express = require('express');
var app = express();
let ejs = require('ejs');
app.set('view engine', 'ejs');

var data = {
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

app.get('/', function(request,response){
     response.render('list', {groceries: data.groceries});
});

app.listen(3000, function(){
     console.log('Example app listening on port 3000!');
});
