//! Import express
const express = require('express');

//! Create our express app
const app = express();

//! Configure the app (app.set)

//! Mount Middleware (app.use)

//! Define routes
app.get('/', function(req,res){
    //use response object to send back data
    res.send("<h1>Hello World!</h1>")
})

//! listen for requests 
app.listen(3000, function(){
    console.log('Server is running and listening on port 4000')
})