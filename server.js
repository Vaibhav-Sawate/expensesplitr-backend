const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
//Load env variable
dotenv.config();

//connec to db
connectDB();

const app = express();

//MIDDLEWARE
app.use(cors());   //to allow all domain to look and talk to ys
//allows app to read the json from frontend an postman
//without this req body is undefined
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));


//ROUTES
//we just point route files here
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/expenses', require('./routes/expenseRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})
