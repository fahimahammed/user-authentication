const joi = require('joi');


const regValidation = regInfo =>{
    const schema = joi.object({
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required(),
    });
    return schema.validate(regInfo);
}

const loginValidation = loginInfo =>{
    const schema = joi.object({
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    })
    return schema.validate(loginInfo)
}

module.exports.regValidation = regValidation;
module.exports.loginValidation = loginValidation;