var http = require('http');
var bodyparser = require('body-parser');
var request = require('request')

bodyparser.json()
bodyparser.urlencoded({extended: false})
//var fs = require('fs');

const mongoose = require('mongoose');

//connect to mongoose
const dbURL = 'mongodb+srv://rominagh:Leoblomman14@my-app-project.n5y9c.mongodb.net/my-database?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true})
console.log("connected to db")

const headers = {
    'Content-type': 'text/html', 
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000
}


const options = {
    host: 'localhost',
    port: '3000',
    path: '/signup',
    method: 'post',
    headers: headers
}


http.request(options, function(error, response, body) {

            let json = JSON.stringify(body)

            if (req.method === 'POST') {
                res.writeHead(200, headers)
                console.log(json)
                response.json(response.data)

            } else {
                console.log('failed')
                console.log(error)
            }

})

        http.createServer( function (req, res) {

            req.write('SUCCESS')



    
        
        }).listen(8080)
        console.log("Listening to http://127.0.0.1:8081") //Lyssnar på port 8081
        

