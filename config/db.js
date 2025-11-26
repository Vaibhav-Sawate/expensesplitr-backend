const mongoose = require("mongoose");

//We using async function to connect to database
//coz on other pc it might take time
const connectDB = async () =>{
    try{
        //Attempt to connect
        const conn = await mongoose.connect(process.env.MONGO_URI);

        //Success msg when connected
        console.log(`Mongo connected: ${conn.connection.host}`);
    
    } catch (error){
        //if failed via bad password or no internet
        console.error(`Error: ${error.message}`);

        //kill the process
        //If db is broken..server is useless,.. better kill
        process.exit(1);

    }
};


//Export the fucnito so that server.js can use it
module.exports = connectDB;
