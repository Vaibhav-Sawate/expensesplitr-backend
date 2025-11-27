const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) =>{
    let token;
    //Check if header exista nd sstar with Bearer
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ){
        try{
            //get the token from header
            token =req.headers.authorization.split(' ')[1];
            //verify token suing secret
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //get user from token id
            //attch this user to req obj so conreoller can access
            req.user = await User.findById(decoded.id).select('-password');
            //move to next part of middleware
            next();
        } catch(error){
            console.log(error);
            res.status(401).json({message: 'Not authorized'});
        }
    }

    if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = {protect};