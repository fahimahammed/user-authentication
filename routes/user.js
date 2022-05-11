const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const { regValidation, loginValidation } = require('../userValidation');

const app = express();
app.use(express.json());
app.use(cors());

router.get('/login', (req, res) => {
    User.find()
    .then(userInfo => res.send(userInfo));
})

router.post("/register", (req, res) => {
    const { error } = regValidation(req.body);
    if(error){
        return res.status(400).send(error); 
    }

    User.findOne({ email: req.body.email })
    .then(existUser => {
        if(existUser) {
            return res.send("Email Already Exist.");
        }
    })
})