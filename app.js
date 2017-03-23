//Basic required imports for NodeJS
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//Used for easier parsing of user-agent for response of software data
var useragent = require('express-useragent');

//Create an instance of express for our app and instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

//API url
var api = '/api/whoami';

app.get(api, function(req, res, next){
   var language = req.acceptsLanguages();
   var software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
   // req.headers['user-agent']; Same way of getting data for software
   var ipaddress = req.ip;
   
   res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
});

app.listen(3000, function(){
    console.log("Working");
});