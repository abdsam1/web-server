var express = require('express');
var app	= express();
var port=process.env.PORT || 3000;
var middleware=require('./middleware.js');

app.use(middleware.logger);

app.get('/about',middleware.authentication,function(req,res){
	res.send('About Us!');
});

app.use(express.static(__dirname+'/Public'));

app.listen(port,function(){
	console.log('Express Server started on port '+ port);
});