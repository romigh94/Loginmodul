const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://rominagh:Leoblomman14@my-app-project.n5y9c.mongodb.net/my-database?retryWrites=true&w=majority'
const User = require('./schema');

//LOGOUT REDIRECT

mongoose.connect(dbURL, () => {
    console.log("db is working")
}) 

app.use(express.json());

app.use(cors());

app.get('/register', (req, res, next) => {
    res.send("register")
})

app.post('/register', (req, res) => {

    const newUser = new User(req.body)
    newUser.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: "Registrering misslyckad!"
            })
        }

        return res.json({
            message: "Success",
        })
    })

    console.log(req.body)

});


app.get('/login', (req, res, next) => {
    res.send("login")
})

app.post('/login', (req, res) => {

    const { email, password } = req.body

    User.findOne({email}, (err, email) => {
        if(err || !email) {
            return res.status(400).json({
                error: "Email hittas inte"
            })
        }
        //User autenticate


    })


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
