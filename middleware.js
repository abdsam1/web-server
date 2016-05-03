var middleware = {
	authentication: function(req,res,next){
		console.log('Route Hit!');
		next();
	},
	logger: function (req,res,next){
		console.log(req.method+' '+req.originalUrl);
		next();
	}
}
module.exports=middleware;