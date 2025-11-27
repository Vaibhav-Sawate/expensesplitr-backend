const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//Load env variable
dotenv.config();

//connec to db
connectDB();

const app = express();

//MIDDLEWARE
//allows app to read the json from frontend an postman
//without this req body is undefined
app.use(express.json());


//ROUTES
//we just point route files here
app.use('/api/users', require('./routes/userRoutes'));



const PORT = process.env.PORT || 5000;




app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})
