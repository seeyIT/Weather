const http = require('http');
const url = require('url');
const MongoClient = require('mongodb').MongoClient;

const hostname = '192.168.1.3';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/plain');
	
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	if(query.login != undefined){
		insert(query.login, query.password);
		
	}
	
	res.end('Hello World!');
});


	 
function insert(login, password) {	
	MongoClient.connect("mongodb://localhost:27017/weather", function(err, db) {
	if(err){ 
		return console.dir(err); 
	}

	var dbo = db.db("weather");
  	var collection = dbo.collection('users');
	var user = {"login": login,"password": password};	 
	  
	 //check whether such user exists
	collection.findOne( {"login" : login }, 
		function(err, result) {
			if (err) {
		    	throw err;
		    }
		    console.log(result);	
		    if(result == null) {
		    	//TO DO make schedule query
			// dbo.collection('users').insert(user, {w: 1}, function(err, records){
				// 		console.log(err);
				// });
			}
	    	else {    		
		    	resultValue = "2323"; 
		    	console.log(resultValue);   	    	
		    }	    
		});
	db.close();

	});	 
}

//init database and table
MongoClient.connect("mongodb://localhost:27017/weather", function(err, db) {
if(err){ 
	return console.dir(err); 
}

var dbo = db.db("weather");
	dbo.createCollection("users", function(err, res) {
	    if (err) {
	    	throw err;
	    }
	});
});	

server.listen(port, hostname, () => {
	console.log("server started on port: " + port);
})