var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname+'/public'))

app.get('/', function(req, res){
	app.render('index.html');
});

app.listen(3000,function(){
	console.log("listening in 3000 port");
});