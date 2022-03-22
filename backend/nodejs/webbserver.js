const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://rominagh:Leoblomman14@my-app-project.n5y9c.mongodb.net/my-database?retryWrites=true&w=majority'
const User = require('./schema');


mongoose.connect(dbURL, () => {
    console.log("db is working")
})
    
app.use(express.json());
app.use(cors());



app.get('/register', (req, res, next) => {
    res.send("register")
})

app.post('/register', (req, res) => {
    
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })

    newUser.save()

    console.log(req.body)

});

app.get('/login', (req, res, next) => {
    res.send("login")
})

app.post('/login', (req, res) => {

    /*

    const { email, password } = req.body

    const user = User.findOne({ email, password })

    if (!user) {
        return res.status === 400
    } else if (error) {
        console.log(error)
    } else {
        return res.status === 200
    }
    */


})



app.listen(8080, function() {

    console.log("listening to 8080")

})


/*
router.route('/').get((req, res) => {

    const getUser = {
        email: req.body.email,
        password: req.body.password
    }
    getUser = JSON.parse(getUser)
})
*/
