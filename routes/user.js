const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');


//const { regValidation, loginValidation } = require('../userValidation');


router.post('/signup', async (req, res) => {
    try {
        const hashPass = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPass,
        });

        await newUser.save();
        res.status(200).send({
            success: "user inserted!"
        })
    }
    catch {
        res.status(500).json({
            error: "There was a error!"
        })
    }

})

module.exports = router;