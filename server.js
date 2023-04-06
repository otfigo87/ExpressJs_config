//! Import express
const express = require('express');

//! Create our express app
const app = express();

//! Configure the app (app.set)

//! Mount Middleware (app.use)

//! Define routes
//root or main route
app.get('/', function(req,res){
    //use response object to send back data
    res.send("<h1>Hello Express!</h1>")
})
//home route
app.get('/home', (req, res) => {
    res.send("<h1>Home Page</h1>")
})
// another route
app.get('/cars', (req,res) => {
    res.json({cars:['honda', 'bmw']})
})

//! listen for requests 
app.listen(3000, function(){
    console.log('Server is running and listening on port 3000')
})