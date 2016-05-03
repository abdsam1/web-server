var express = require('express');
var app	= express();
var port=3000;

var middleware = {
	authentication: function(req,res,next){
		console.log('Route Hit!');
		next();
	},
	logger: function (req,res,next){
		console.log(req.method+' '+req.originalUrl);
	}
}

app.use(middleware.logger);

app.get('/about',middleware.authentication,function(req,res){
	res.send('About Us!');
});

app.use(express.static(__dirname+'/Public'));

app.listen(port,function(){
	console.log('Express Server started on port '+ port);
});