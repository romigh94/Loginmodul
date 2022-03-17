const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const routeURL = require('./index')
const dbURL = 'mongodb+srv://rominagh:Leoblomman14@my-app-project.n5y9c.mongodb.net/my-database?retryWrites=true&w=majority'

mongoose.connect(dbURL, () => {
    console.log("db is working")
})

app.use(express.json());

app.use(cors());

app.use('/', routeURL)


app.listen(8080, function() {

    console.log("listening to 8080")

})