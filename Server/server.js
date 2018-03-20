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
		checkIfUserExists(query.login, function (result){
			if(result){
				insertUser(query.login,query.password);
				res.end('1');
			}
			else{
				console.log("user exists");
				res.end('0');
			}
		})
	}
	
});


	 
function checkIfUserExists(login, callback) {	
	MongoClient.connect("mongodb://localhost:27017/weather", function(err, db) {
		if(err){ 
			return console.dir(err); 
		}

		var dbo = db.db("weather");
	  	var collection = dbo.collection('users');
		 //check whether such user exists
		collection.findOne( {"login" : login }, 
			function(err, result) {
				if (err) {
			    	throw err;
			    }
			    if(result == null) {
					callback(true);
				}
		    	else {    		
			    	callback(false);  	
			    }	    
			});
		db.close();
	});	 
}

function insertUser(login, password) {	
	MongoClient.connect("mongodb://localhost:27017/weather", function(err, db) {
		if(err) { 
			return console.dir(err); 
		}

		var dbo = db.db("weather");
	  	var collection = dbo.collection('users');
		var user = {"login": login,"password": password};	 

		 //insert user
		collection.insertOne(user, function(err, res) {
		    if (err) {
		    	throw err;
		    }
		    console.log("user added");
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