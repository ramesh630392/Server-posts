import mongoose from "mongoose";
import dotenv from 'dotenv';

export const connectDb = async() =>{
    dotenv.config();
    const mongoURI = process.env.mongoURI
    try{
        const conn = await mongoose.connect(mongoURI);
        console.log('Mongoose is Connected');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}