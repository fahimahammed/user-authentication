const jwt = require('jsonwebtoken');

const checkLogin = (req, res, next) =>{
    const  {authorization} = req.headers;
    try{
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        const { email, userId } = decoded;
        req.email = email;
        req.userId = userId;
        next();
    }
    catch{
        next("You are not a admin!");
    }
}

module.exports = checkLogin;