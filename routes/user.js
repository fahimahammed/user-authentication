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

router.post('/login', async (req, res) => {
    try {
        const user = await User.find({ email: req.body.email });
        if (user && user.length > 0) {
            const isValidPass = await bcrypt.compare(req.body.password, user[0].password);
            if (isValidPass) {
                // generate a token
                const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                }, process.env.ACCESS_TOKEN, {
                    expiresIn: '1h'
                })

                res.status(200).json({
                    "token": token,
                    "message": "Login success!"
                })
            }
            else {
                res.status(401).json({
                    "error": "Authentication failed!"
                });
            }
        }
        else {
            res.status(401).json({
                "error": "Authentication failed!"
            });
        }
    }
    catch (err) {
        res.send(err);
    }
})

module.exports = router;