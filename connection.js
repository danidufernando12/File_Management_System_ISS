const mongoose=require("mongoose");
require('dotenv/config')

//Database connection
const MONGODB_URL= process.env.MONGODB_URL;

const connectDB =async () =>{
    await mongoose.connect(MONGODB_URL,{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    });
    console.log('Mongo Connection Succesfully Run !!');
}

module.exports=connectDB;

