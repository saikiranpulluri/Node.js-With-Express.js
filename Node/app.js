var express=require('express');
var app=express();
var routes=require('./routes');

app.set('view engine','ejs');

app.locals.pagetitle = "Awesome Website";

app.get('/',routes.index);
app.get('/about',routes.about);

app.get('*',function(request,response){
response.send('Error 404');
});

var server=app.listen(3000,function(){
	console.log('Listening port 3000');
});