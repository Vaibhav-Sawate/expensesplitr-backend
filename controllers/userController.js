const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res)=>{
    try{
        //Destructure data sent by user
        const {name, email, password} = req.body;

        //validate if all deatils are filled
        if(!name || !email || !password){
            return res.status(400).json({message: 'Please add all the fields'});
        }

        //if already exists
        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({message: 'User already exists. Please login'});
        }

        //Lets encrypt the password Generate salt and await the hash
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // //Saving password as it is plaintext
        // const user = await User.create({
        //     name, email, password
        // });
        

        //Saving password as it is hash
        const user = await User.create({
            name, email, password: hashedPassword   //DB field mapped to this
        });
        

        //Send back response
        if(user){
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
            });
        } else{
            res.status(400).json({message: 'Invalid user data'});
        }
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
}


const loginUser = async (req, res) =>{
    try{
        const {email, password} = req.body;

        // check for user email
        const user= await User.findOne({email});

        //check password compare plainext and hashedPass
        if(user && (await bcrypt.compare(password, user.password))){
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)   // Gibe them token
            });
        } else{
            res.status(400).json({message: 'Invalid credentials'});
        }
        
    } catch(error){
        res.status(500).json ({message: error.message});
    }
}


//Now function to generate token
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',  // for 30 days
    });
}



const getMe = async (req, res) => {
  // We have access to req.user because the middleware put it there!
  res.status(200).json(req.user);
}

// Don't forget to export it!
module.exports = {
  registerUser,
  loginUser,
  getMe, // <--- Added this
};



module.exports = {registerUser, loginUser, getMe};
