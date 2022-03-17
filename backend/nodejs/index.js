const express = require("express");
const router = express.Router();
const User = require('./schema')

router.route('/').post((req, res) => {

    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })

    newUser.save()

})

module.exports = router
